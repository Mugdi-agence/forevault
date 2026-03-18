"use client"
import { useRef, useState, useEffect, useMemo, Suspense } from "react";
import { niches, countryRPM } from "../constants";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip,
    ResponsiveContainer, ReferenceLine, Cell
} from "recharts";
import gsap from "gsap";
import './styles.scss';
import Navbar from "../nav";
import Footer from "../footer";
import { useSearchParams } from "next/navigation";
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';

const CURRENCIES = [
    { code: "USD", symbol: "$",   label: "US Dollar",         rate: 1.000 },
    { code: "EUR", symbol: "€",   label: "Euro",              rate: 0.924 },
    { code: "GBP", symbol: "£",   label: "British Pound",     rate: 0.791 },
    { code: "CAD", symbol: "C$",  label: "Canadian Dollar",   rate: 1.362 },
    { code: "AUD", symbol: "A$",  label: "Australian Dollar", rate: 1.534 },
    { code: "CHF", symbol: "Fr",  label: "Swiss Franc",       rate: 0.899 },
    { code: "JPY", symbol: "¥",   label: "Japanese Yen",      rate: 149.5 },
    { code: "SGD", symbol: "S$",  label: "Singapore Dollar",  rate: 1.344 },
    { code: "AED", symbol: "د.إ", label: "UAE Dirham",        rate: 3.673 },
    { code: "BRL", symbol: "R$",  label: "Brazilian Real",    rate: 4.970 },
    { code: "INR", symbol: "₹",   label: "Indian Rupee",      rate: 83.12 },
    { code: "MAD", symbol: "د.م", label: "Moroccan Dirham",   rate: 10.06 },
];

// ─────────────────────────────────────────────────────────────────────────────
// expandNiches — normalise vers un champ rpm unique
// ─────────────────────────────────────────────────────────────────────────────
function expandNiches(rawNiches) {
    const result = [];
    for (const n of rawNiches) {
        const f = (n.format || "").toLowerCase();
        if (f === "shorts") {
            result.push({ ...n, _resolved_format: "Shorts" });
        } else if (f === "long-form" || f === "long form") {
            result.push({ ...n, _resolved_format: "Long-form" });
        } else {
            result.push({ ...n, id: `${n.id}-long`,   niche: `${n.niche} (Long-form)`, _resolved_format: "Long-form" });
            result.push({ ...n, id: `${n.id}-shorts`, niche: `${n.niche} (Shorts)`,    _resolved_format: "Shorts"    });
        }
    }
    return result;
}

const allNiches       = expandNiches(niches);
const sortedCountries = [...countryRPM].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
);

const BASE_COUNTRY_MULT = 2.20;

function toUSD(views, rpm, countryMult, isShorts, retentionRate, durationMin) {
    views         = Math.max(0,   Number(views)         || 0);
    rpm           = Math.max(0,   Number(rpm)           || 0);
    retentionRate = Math.max(0,   Math.min(100, Number(retentionRate) || 45));
    durationMin   = Math.max(0.1, Number(durationMin)   || 0.1);
    countryMult   = Math.max(0,   Number(countryMult)   || BASE_COUNTRY_MULT);

    const countryFactor = countryMult / BASE_COUNTRY_MULT;

    let retentionFactor;
    if (retentionRate >= 45) {
        retentionFactor = 1 + (retentionRate - 45) * 0.005;
    } else {
        retentionFactor = 1 - (45 - retentionRate) * 0.006;
    }
    retentionFactor = Math.max(0.70, Math.min(1.30, retentionFactor));

    if (isShorts) {
        const SHORTS_RATIO = rpm > 10 ? 0.012 : 0.018;
        const geoFactor    = 0.7 + countryFactor * 0.3;
        const shortsRPM    = rpm * SHORTS_RATIO * geoFactor * retentionFactor;
        return (views / 1000) * shortsRPM;
    }

    let durationFactor;
    if      (durationMin < 4)  durationFactor = 0.72;
    else if (durationMin < 8)  durationFactor = 0.92;
    else if (durationMin < 15) durationFactor = 1.18;
    else if (durationMin < 30) durationFactor = 1.38;
    else                       durationFactor = 1.55;

    const adjustedRPM = rpm * countryFactor * retentionFactor * durationFactor;
    return (views / 1000) * adjustedRPM;
}

function getDurationMultiplier(durationMin, isShorts) {
    if (isShorts)              return 1.0;
    if (durationMin >= 30)     return 1.55;
    if (durationMin >= 15)     return 1.38;
    if (durationMin >= 8)      return 1.18;
    if (durationMin >= 4)      return 0.92;
    return 0.72;
}

function convert(usd, currency) { return usd * currency.rate; }

function fmt(amount, currency) {
    const n = Math.abs(amount) >= 1000
        ? amount.toLocaleString("en-US", { maximumFractionDigits: 0 })
        : Number(amount).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `${currency.symbol}${n}`;
}

function fmtDuration(totalSec) {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
}

// ── Bucket de vues pour GA4 (évite de logger des valeurs exactes) ─────────────
function getViewsBracket(views) {
    if (views <        1_000) return "<1k";
    if (views <       10_000) return "1k–10k";
    if (views <      100_000) return "10k–100k";
    if (views <    1_000_000) return "100k–1M";
    if (views <   10_000_000) return "1M–10M";
    return "10M+";
}

function useCountUp(target, currency) {
    const spanRef = useRef(null);
    const objRef  = useRef({ val: 0 });
    useEffect(() => {
        if (!spanRef.current || target === 0) return;
        gsap.killTweensOf(objRef.current);
        gsap.to(objRef.current, {
            val: target,
            duration: 1.2,
            ease: "power3.out",
            onUpdate() {
                if (spanRef.current)
                    spanRef.current.textContent = fmt(objRef.current.val, currency);
            },
        });
    }, [target, currency]);
    return spanRef;
}

function CustomTooltip({ active, payload, currency }) {
    if (!active || !payload?.length) return null;
    const d = payload[0].payload;
    return (
        <div className="chart-tooltip">
            <p className="chart-tooltip__name">{d.fullName}</p>
            <p className={`chart-tooltip__value ${d.isSelected ? "chart-tooltip__value--selected" : ""}`}>
                {fmt(payload[0].value, currency)}
            </p>
        </div>
    );
}

// ── Inner component ───────────────────────────────────────────────────────────
function CalculatorInner() {
    const viewsRef       = useRef();
    const countryRef     = useRef();
    const formatRef      = useRef();
    const retentionRef   = useRef();
    const nichesRef      = useRef();
    const durationMinRef = useRef();
    const durationSecRef = useRef();

    const layoutRef  = useRef();
    const formRef    = useRef();
    const resultsRef = useRef();
    const heroRef    = useRef();
    const metaRef    = useRef();
    const chartRef   = useRef();

    const [result,   setResult]   = useState(null);
    const [error,    setError]    = useState("");
    const [currency, setCurrency] = useState(CURRENCIES[0]);
    const [rawViews, setRawViews] = useState("");
    const [isShorts, setIsShorts] = useState(false);
    const searchParams = useSearchParams();

    const visibleNiches = useMemo(
        () => allNiches.filter(n =>
            isShorts ? n._resolved_format === "Shorts" : n._resolved_format === "Long-form"
        ),
        [isShorts]
    );

    useEffect(() => {
        if (nichesRef.current) nichesRef.current.value = "";
    }, [isShorts]);

    useEffect(() => {
        const nicheParam = searchParams.get("niche");
        if (nicheParam && nichesRef.current) {
            const exists = visibleNiches.find(n => n.id === nicheParam);
            if (exists) nichesRef.current.value = nicheParam;
        }
    }, [searchParams, visibleNiches]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(layoutRef.current, { opacity: 0, y: 40, scale: 0.97, duration: 0.9, ease: "expo.out" });
            gsap.from(".panel__head",    { opacity: 0, y: 20, duration: 0.7, delay: 0.35, ease: "power3.out" });
            gsap.from(".field",          { opacity: 0, y: 16, duration: 0.5, stagger: 0.07, delay: 0.5, ease: "power2.out" });
            gsap.from(".currency-grid",  { opacity: 0, y: 10, duration: 0.5, delay: 0.85, ease: "power2.out" });
            gsap.from(".form__btn",      { opacity: 0, scale: 0.95, duration: 0.45, delay: 1.0, ease: "back.out(1.7)" });
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!result || !resultsRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from(resultsRef.current,              { opacity: 0, x: 30, duration: 0.6, ease: "expo.out" });
            gsap.from(heroRef.current?.children ?? [], { opacity: 0, y: 20, scale: 0.96, duration: 0.55, stagger: 0.08, delay: 0.1, ease: "power3.out" });
            gsap.from(".meta-tag",                     { opacity: 0, y: 12, scale: 0.94, duration: 0.45, stagger: 0.06, delay: 0.25, ease: "back.out(1.5)" });
            gsap.from(chartRef.current,                { opacity: 0, y: 20, duration: 0.55, delay: 0.5, ease: "power3.out" });
            gsap.from(".recharts-bar-rectangle",       { scaleY: 0, transformOrigin: "bottom", duration: 0.7, stagger: 0.04, delay: 0.6, ease: "expo.out" });
        }, resultsRef);
        return () => ctx.revert();
    }, [result]);

    function handleCurrencyChange(cur) {
        setCurrency(cur);
        gsap.from(".hero__amount", { opacity: 0, y: -8, duration: 0.3, stagger: 0.05, ease: "power2.out" });

        // 🔥 Track le changement de devise (uniquement si un résultat est affiché)
        if (result && typeof gtag === "function") {
            gtag("event", "calculator_currency_change", {
                currency_from: currency.code,
                currency_to:   cur.code,
                niche_label:   result.niche,
                video_format:  result.format,
            });
        }
    }

    function handleViewsChange(e) {
        const digits = e.target.value.replace(/\D/g, "");
        setRawViews(digits ? parseInt(digits, 10).toLocaleString("en-US") : "");
    }

    function handleFormatChange(e) {
        const shorts = e.target.value === "shorts";
        setIsShorts(shorts);
        if (shorts && parseInt(durationMinRef.current?.value || 0) >= 3) {
            durationMinRef.current.value = "3";
            if (durationSecRef.current) durationSecRef.current.value = "0";
        }
    }

    function handleCalculate() {
        setError("");

        gsap.timeline()
            .to(".form__btn", { scale: 0.96, duration: 0.1, ease: "power2.in" })
            .to(".form__btn", { scale: 1,    duration: 0.4, ease: "elastic.out(1, 0.5)" });

        const views         = parseFloat(rawViews.replace(/,/g, ""));
        const retentionRate = parseFloat(retentionRef.current.value);
        const nicheId       = nichesRef.current.value;
        const countryId     = countryRef.current.value;
        const shorts        = isShorts;
        const durMin        = parseInt(durationMinRef.current?.value  || 0);
        const durSec        = parseInt(durationSecRef.current?.value  || 0);
        const totalDurSec   = durMin * 60 + durSec;
        const totalDurMin   = totalDurSec / 60;

        if (!views || views <= 0)      return setError("Please enter a valid view count.");
        if (!nicheId)                  return setError("Please select a niche.");
        if (!countryId)                return setError("Please select a geography.");
        if (isNaN(retentionRate) || retentionRate < 0 || retentionRate > 100)
                                       return setError("Retention rate must be between 0 and 100.");
        if (totalDurSec <= 0)          return setError("Please enter a valid video duration.");
        if (shorts && totalDurMin > 3) return setError("Shorts cannot exceed 3 minutes.");

        const nicheData   = visibleNiches.find(n => n.id === nicheId);
        const countryData = sortedCountries.find(c => c.id === countryId);
        const earningsUSD = toUSD(views, nicheData.rpm, countryData.multiplier, shorts, retentionRate, totalDurMin);

        const adSlots = shorts
            ? "none"
            : totalDurMin >= 15
                ? "2_midrolls"
                : totalDurMin >= 8
                    ? "1_midroll"
                    : "pre_roll_only";

        // ── 🔥 Tracking GA4 ───────────────────────────────────────────────────
        if (typeof gtag === "function") {
            gtag("event", "calculator_run", {
                // Inputs
                video_format:     shorts ? "shorts" : "long_form",
                niche_id:         nicheId,
                niche_label:      nicheData.niche,
                niche_faceless:   nicheData.faceless ?? "unknown",
                country_id:       countryId,
                country_label:    countryData.name,
                views_bracket:    getViewsBracket(views),
                retention_rate:   retentionRate,
                duration_sec:     totalDurSec,
                ad_slots:         adSlots,
                // Output
                estimated_usd:    Math.round(earningsUSD * 100) / 100,
                effective_rpm:    Math.round(
                    toUSD(1000, nicheData.rpm, countryData.multiplier, shorts, retentionRate, totalDurMin)
                    * 100
                ) / 100,
                // Préférences UI
                display_currency: currency.code,
            });
        }

        const allNicheEarnings = visibleNiches
            .map(n => ({
                id:          n.id,
                name:        n.niche.length > 18 ? n.niche.slice(0, 16) + "…" : n.niche,
                fullName:    n.niche,
                earningsUSD: toUSD(views, n.rpm, countryData.multiplier, shorts, retentionRate, totalDurMin),
                isSelected:  n.id === nicheId,
            }))
            .sort((a, b) => b.earningsUSD - a.earningsUSD);

        const averageUSD    = allNicheEarnings.reduce((s, n) => s + n.earningsUSD, 0) / allNicheEarnings.length;
        const durationLabel = fmtDuration(totalDurSec);
        const midrollNote   = !shorts && totalDurMin >= 8
            ? totalDurMin >= 15 ? "2 mid-rolls" : "1 mid-roll"
            : "Pre-roll only";

        const retentionFactor = Math.max(
            0.70,
            Math.min(
                1.30,
                retentionRate >= 45
                    ? 1 + (retentionRate - 45) * 0.005
                    : 1 - (45 - retentionRate) * 0.006
            )
        );

        const countryFactor = countryData.multiplier / BASE_COUNTRY_MULT;

        let effectiveRPMusd;
        if (shorts) {
            const SHORTS_RATIO = nicheData.rpm > 10 ? 0.017 : 0.025;
            const geoFactor    = 0.7 + countryFactor * 0.3;
            effectiveRPMusd    = nicheData.rpm * SHORTS_RATIO * geoFactor * retentionFactor;
        } else {
            effectiveRPMusd = nicheData.rpm * countryFactor * retentionFactor * getDurationMultiplier(totalDurMin, shorts);
        }

        setResult({
            earningsUSD,
            effectiveRPMusd,
            niche:           nicheData.niche,
            country:         countryData.name,
            format:          shorts ? "Shorts" : "Long Form",
            views,
            retentionRate,
            averageUSD,
            allNicheEarnings,
            durationLabel,
            midrollNote,
        });
    }

    const displayEarnings = result ? convert(result.earningsUSD,     currency) : 0;
    const displayAverage  = result ? convert(result.averageUSD,      currency) : 0;
    const displayRPM      = result ? convert(result.effectiveRPMusd, currency) : 0;
    const chartData       = result
        ? result.allNicheEarnings.map(n => ({
            ...n,
            earnings: parseFloat(convert(n.earningsUSD, currency).toFixed(2)),
          }))
        : [];

    const earningsRef = useCountUp(displayEarnings, currency);
    const avgRef      = useCountUp(displayAverage,  currency);
    const rpmRef      = useCountUp(displayRPM,      currency);

    return (
        <div className="appl">
        <div className="page">
            <div className="layout" ref={layoutRef}>

                <aside className="panel panel--form" ref={formRef}>
                    <div className="panel__head">
                        <span className="panel__badge">YouTube</span>
                        <h1 className="panel__title">Adsense revenue calculator</h1>
                        <p className="panel__sub">Estimate your YouTube earnings</p>
                    </div>

                    <div className="form">
                        <Field label="Views">
                            <input
                                className="field__input"
                                type="text"
                                inputMode="numeric"
                                placeholder="100,000"
                                value={rawViews}
                                onChange={handleViewsChange}
                            />
                        </Field>

                        <Field label="Retention (%)">
                            <input
                                ref={retentionRef}
                                className="field__input"
                                type="number"
                                placeholder="45"
                                min="0"
                                max="100"
                            />
                        </Field>

                        <div className="form__row">
                            <Field label="Format">
                                <select
                                    ref={formatRef}
                                    className="field__input"
                                    onChange={handleFormatChange}
                                >
                                    <option value="long">Long Form</option>
                                    <option value="shorts">Shorts</option>
                                </select>
                            </Field>

                            <Field label={isShorts ? "Duration (max 3:00)" : "Video duration"}>
                                <div className="duration-input">
                                    <input
                                        ref={durationMinRef}
                                        className="field__input duration-input__part"
                                        type="number"
                                        placeholder="0"
                                        min="0"
                                        max={isShorts ? 3 : 120}
                                    />
                                    <span className="duration-input__sep">m</span>
                                    <input
                                        ref={durationSecRef}
                                        className="field__input duration-input__part"
                                        type="number"
                                        placeholder="00"
                                        min="0"
                                        max="59"
                                    />
                                    <span className="duration-input__sep">s</span>
                                </div>
                                {!isShorts && (
                                    <p className="field__hint">≥ 8 min unlocks mid-roll ads</p>
                                )}
                            </Field>
                        </div>

                        <Field label="Niche">
                            <select ref={nichesRef} className="field__input" defaultValue="">
                                <option value="" disabled>Select a niche…</option>
                                {visibleNiches.map(n => (
                                    <option key={n.id} value={n.id}>{n.topic}</option>
                                ))}
                            </select>
                        </Field>

                        <Field label="Geography">
                            <select ref={countryRef} className="field__input" defaultValue="">
                                <option value="" disabled>Country…</option>
                                {sortedCountries.map(c => (
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                ))}
                            </select>
                        </Field>

                        <Field label="Display currency">
                            <div className="currency-grid">
                                {CURRENCIES.map(cur => (
                                    <button
                                        key={cur.code}
                                        type="button"
                                        className={`currency-btn ${currency.code === cur.code ? "currency-btn--active" : ""}`}
                                        onClick={() => handleCurrencyChange(cur)}
                                        title={cur.label}
                                    >
                                        <span className="currency-btn__symbol">{cur.symbol}</span>
                                        <span className="currency-btn__code">{cur.code}</span>
                                    </button>
                                ))}
                            </div>
                        </Field>

                        {error && <p className="form__error">⚠ {error}</p>}

                        <button className="form__btn" onClick={handleCalculate}>
                            Calculate earnings
                            <span className="form__btn-arrow">→</span>
                        </button>
                    </div>
                </aside>

                <main className="panel panel--result">
                    {!result ? (
                        <div className="empty-state">
                            <span className="empty-state__icon"><AlignVerticalBottomIcon/></span>
                            <p className="empty-state__text">
                                Fill in the form on the left<br />to see your revenue estimate
                            </p>
                        </div>
                    ) : (
                        <div className="results" ref={resultsRef}>
                            <div className="hero" ref={heroRef}>
                                <div className="hero__block">
                                    <p className="hero__label">Estimated earnings</p>
                                    <p className="hero__amount">
                                        <span ref={earningsRef}>{fmt(displayEarnings, currency)}</span>
                                    </p>
                                </div>
                                <div className="hero__sep" />
                                <div className="hero__block">
                                    <p className="hero__label">All-niche average</p>
                                    <p className="hero__amount hero__amount--muted">
                                        <span ref={avgRef}>{fmt(displayAverage, currency)}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="meta-grid" ref={metaRef}>
                                <MetaTag label="Effective RPM" highlight>
                                    <span ref={rpmRef}>{fmt(displayRPM, currency)}</span>
                                </MetaTag>
                                <MetaTag label="Niche"     value={result.niche} />
                                <MetaTag label="Country"   value={result.country} />
                                <MetaTag label="Format"    value={result.format} />
                                <MetaTag label="Views"     value={result.views.toLocaleString("en-US")} />
                                <MetaTag label="Retention" value={`${result.retentionRate}%`} />
                                <MetaTag label="Duration"  value={result.durationLabel} />
                                <MetaTag label="Ad slots"  value={result.midrollNote} highlight />
                            </div>

                            <div className="chart-block" ref={chartRef}>
                                <p className="chart-block__title">Niche comparison — same parameters</p>
                                <ResponsiveContainer width="100%" height={220} className="charts">
                                    <BarChart data={chartData} margin={{ top: 8, right: 4, left: -10, bottom: 55 }}>
                                        <XAxis
                                            dataKey="name"
                                            tick={{ fill: "#666", fontSize: 10, fontFamily: "Poppins" }}
                                            angle={-40}
                                            textAnchor="end"
                                            interval={0}
                                            axisLine={false}
                                            tickLine={false}
                                        />
                                        <YAxis
                                            tick={{ fill: "#555", fontSize: 10, fontFamily: "Poppins" }}
                                            axisLine={false}
                                            tickLine={false}
                                            tickFormatter={v => `${currency.symbol}${v}`}
                                        />
                                        <Tooltip
                                            content={<CustomTooltip currency={currency} />}
                                            cursor={{ fill: "rgba(255,255,255,0.03)" }}
                                        />
                                        <ReferenceLine
                                            y={parseFloat(convert(result.averageUSD, currency).toFixed(2))}
                                            stroke="rgba(255,255,255,0.25)"
                                            strokeDasharray="4 3"
                                            label={{
                                                value: `avg ${fmt(displayAverage, currency)}`,
                                                fill: "rgba(255,255,255,0.3)",
                                                fontSize: 10,
                                                fontFamily: "Poppins",
                                                position: "insideTopRight",
                                            }}
                                        />
                                        <Bar dataKey="earnings" radius={[4, 4, 0, 0]}>
                                            {chartData.map(entry => (
                                                <Cell
                                                    key={entry.id}
                                                    fill={entry.isSelected ? "#ffffff" : "rgba(255,255,255,0.12)"}
                                                />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                                <div className="chart-legend">
                                    <span className="chart-legend__item">
                                        <span className="chart-legend__dot chart-legend__dot--selected" />Your niche
                                    </span>
                                    <span className="chart-legend__item">
                                        <span className="chart-legend__dot chart-legend__dot--other" />Other niches
                                    </span>
                                    <span className="chart-legend__item">
                                        <span className="chart-legend__dot chart-legend__dot--avg" />Average
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </main>

            </div>
        </div>
        <Footer />
        </div>
    );
}

export default function Calculator() {
    return (
        <>
        <Navbar />
        <Suspense fallback={
            <div className="appl">
                <div className="page" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>Loading…</p>
                </div>
            </div>
        }>
            <CalculatorInner />
        </Suspense>
        </>
    );
}

function Field({ label, children }) {
    return (
        <label className="field">
            <span className="field__label">{label}</span>
            {children}
        </label>
    );
}

function MetaTag({ label, value, highlight, children }) {
    return (
        <div className={`meta-tag ${highlight ? "meta-tag--highlight" : ""}`}>
            <span className="meta-tag__label">{label}</span>
            <span className="meta-tag__value">{children ?? value}</span>
        </div>
    );
}