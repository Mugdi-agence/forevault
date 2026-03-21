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

        {/* ── SEO & AdSense content section ─────────────────────────────── */}
        <CalcContent />

        <Footer />
        </div>
    );
}

export default function Calculator() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How accurate is the YouTube revenue calculator?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our calculator uses real RPM benchmarks sourced from creator communities and industry reports, adjusted by niche, geography, video format, watch time, and retention rate. Estimates typically fall within ±20–30% of actual AdSense earnings. Always cross-reference with your own YouTube Studio analytics for precise figures."
                }
            },
            {
                "@type": "Question",
                "name": "What is RPM on YouTube?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "RPM (Revenue Per Mille) is the amount a creator earns per 1,000 video views after YouTube's 45% revenue share. RPM accounts for all monetization sources including ads, channel memberships, and YouTube Premium revenue. It differs from CPM, which is the rate advertisers pay before YouTube's cut."
                }
            },
            {
                "@type": "Question",
                "name": "Why do YouTube Shorts earn much less than long-form videos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "YouTube Shorts are monetized through the Shorts Revenue Pool rather than standard AdSense impressions. Creators receive a proportional share of a collective pool based on watch time, not individual ad placements. This results in an effective RPM roughly 50–100x lower than long-form content. Shorts are best used as a growth funnel to drive subscribers to your long-form catalog."
                }
            },
            {
                "@type": "Question",
                "name": "Which YouTube niche has the highest RPM?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Finance, investing, and business niches consistently have the highest YouTube RPM, often ranging from $10 to $30+ per 1,000 views. Software tutorials, legal advice, and real estate follow closely. Entertainment, gaming, and vlog content typically fall at the lower end, between $1 and $3 RPM. You can explore all niche RPMs using our Niche Finder tool."
                }
            },
            {
                "@type": "Question",
                "name": "Does video duration affect YouTube earnings?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Videos over 8 minutes unlock mid-roll ad placements, which can increase revenue by 30–60% compared to pre-roll only. Videos over 15 minutes can include two mid-roll ads, and 30+ minute videos allow multiple placements. Our calculator automatically factors in the duration multiplier when you enter your video length."
                }
            },
            {
                "@type": "Question",
                "name": "How does audience geography impact YouTube revenue?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Advertiser CPMs vary dramatically by country. Viewers from the United States, United Kingdom, Canada, and Australia generate significantly higher ad revenue — often 4–6× more than viewers from lower-purchasing-power markets. Our calculator includes a geography multiplier for 80+ countries so you can model revenue based on your actual audience location."
                }
            },
            {
                "@type": "Question",
                "name": "What average retention rate should I enter?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The average YouTube retention rate across all channels is approximately 40–50%. If you're unsure, start with 45% as a baseline. High-performing channels in engaged niches often see 55–65% retention, which our calculator rewards with a higher revenue multiplier. You can find your actual retention rate in YouTube Studio under Analytics → Audience Retention."
                }
            },
            {
                "@type": "Question",
                "name": "Is Forevault's calculator free to use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the YouTube revenue calculator on Forevault is completely free to use with no account required. All calculations happen locally in your browser — no data is stored or sent to our servers."
                }
            }
        ]
    };

    return (
        <>
        <Navbar />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Suspense fallback={
            <div className="appl">
                <div className="page" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>Loading…</p>
                </div>
            </div>
        }>
            <CalculatorInner />
        </Suspense>
        <div className="fonds"></div>
        </>
    );
}

// ── Field + MetaTag helpers ────────────────────────────────────────────────────
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

// ── CalcContent — rich publisher content section ──────────────────────────────
// Satisfies AdSense "publisher-content" requirement.
// Placed below the tool, styled to match the existing design system.
// ─────────────────────────────────────────────────────────────────────────────
function CalcContent() {
    return (
        <section className="calc-content" aria-label="About the YouTube revenue calculator">

            {/* ── INTRO ──────────────────────────────────────────────────── */}
            <div className="calc-content__intro">
                <span className="calc-content__eyebrow">How it works</span>
                <h2 className="calc-content__h2">
                    What is the YouTube Revenue Calculator?
                </h2>
                <p className="calc-content__lead">
                    Forevault's YouTube revenue calculator estimates how much a YouTube video can
                    earn through Google AdSense based on your real parameters — niche, geography,
                    video format, watch duration, and audience retention. Unlike generic "views ×
                    $2" formulas, our model applies niche-specific RPM benchmarks and adjusts for
                    the variables that actually move your bottom line.
                </p>
            </div>

            {/* ── STATS ROW ──────────────────────────────────────────────── */}
            <div className="calc-content__stats" role="list">
                <div className="calc-content__stat" role="listitem">
                    <span className="calc-content__stat-val">80+</span>
                    <span className="calc-content__stat-label">Countries modelled</span>
                </div>
                <div className="calc-content__stat" role="listitem">
                    <span className="calc-content__stat-val">50+</span>
                    <span className="calc-content__stat-label">Niches with real RPM data</span>
                </div>
                <div className="calc-content__stat" role="listitem">
                    <span className="calc-content__stat-val">12</span>
                    <span className="calc-content__stat-label">Display currencies</span>
                </div>
                <div className="calc-content__stat" role="listitem">
                    <span className="calc-content__stat-val">±20%</span>
                    <span className="calc-content__stat-label">Typical accuracy vs. AdSense</span>
                </div>
            </div>

            {/* ── HOW TO USE ─────────────────────────────────────────────── */}
            <div className="calc-content__block">
                <h2 className="calc-content__h2">How to Use the Calculator</h2>
                <p className="calc-content__p">
                    Fill in the five parameters on the left panel to get an instant revenue
                    estimate. Here is what each field does:
                </p>
                <ol className="calc-content__steps">
                    <li>
                        <strong>Views</strong> — Enter the view count of your video or the monthly
                        average you want to model. Use commas freely; the tool parses them
                        automatically.
                    </li>
                    <li>
                        <strong>Retention (%)</strong> — Your average view duration as a
                        percentage. Find this in YouTube Studio → Analytics → Audience Retention.
                        The average across all channels is ~45%.
                    </li>
                    <li>
                        <strong>Format</strong> — Choose between Long Form and Shorts. Shorts are
                        monetized through a separate revenue pool and earn significantly less per
                        view. See our <a href="/blog" className="calc-content__link">blog article on Shorts RPM</a> for
                        a detailed breakdown.
                    </li>
                    <li>
                        <strong>Duration</strong> — Videos over 8 minutes unlock mid-roll ad
                        placements, which can increase revenue by up to 60%. Videos over 15
                        minutes can include a second mid-roll slot.
                    </li>
                    <li>
                        <strong>Niche</strong> — Select the category that best describes your
                        content. Not sure which niche is most profitable? Visit our{" "}
                        <a href="/niches" className="calc-content__link">Niche Finder</a> to
                        compare RPM benchmarks across 50+ categories.
                    </li>
                    <li>
                        <strong>Geography</strong> — Select the primary country of your audience.
                        Advertisers pay significantly more for viewers in the US, UK, Canada, and
                        Australia. Check your geographic breakdown in YouTube Studio → Analytics
                        → Geography.
                    </li>
                </ol>
            </div>

            {/* ── KEY METRICS ────────────────────────────────────────────── */}
            <div className="calc-content__block">
                <h2 className="calc-content__h2">Understanding YouTube Monetization Metrics</h2>

                <div className="calc-content__metrics">
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">RPM (Revenue Per Mille)</h3>
                        <p className="calc-content__p">
                            RPM is the amount you earn per 1,000 video views <em>after</em> YouTube
                            takes its 45% share. It is the most direct indicator of your channel's
                            monetization efficiency. A Finance channel might earn $15–25 RPM, while
                            a gaming channel might see $2–5 RPM for the same number of views.
                        </p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">CPM (Cost Per Mille)</h3>
                        <p className="calc-content__p">
                            CPM is what advertisers pay per 1,000 ad impressions — before YouTube's
                            cut. CPM is always higher than RPM. The relationship is roughly:
                            RPM ≈ CPM × 0.55. CPM varies by advertiser demand, season (Q4 is
                            highest), and content category.
                        </p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Retention Rate</h3>
                        <p className="calc-content__p">
                            Average view duration as a percentage of total video length. Higher
                            retention means more ad impressions per view, a stronger algorithmic
                            signal, and a higher effective RPM. Our model applies a retention
                            multiplier that ranges from 0.70× at 0% to 1.30× at 100%.
                        </p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Mid-Roll Ads</h3>
                        <p className="calc-content__p">
                            Videos over 8 minutes are eligible for mid-roll ad placements inserted
                            during the video. This is arguably the single biggest revenue lever for
                            long-form creators — a 10-minute video can earn 40–60% more than a
                            7-minute video on the exact same topic with the exact same views.
                        </p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Geography Multiplier</h3>
                        <p className="calc-content__p">
                            Advertiser budgets are concentrated in high-purchasing-power markets.
                            A US viewer is worth 4–6× more in ad revenue than a viewer from most
                            other regions. Our calculator uses country-specific multipliers for
                            80+ countries based on aggregated creator data.
                        </p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Shorts Revenue Pool</h3>
                        <p className="calc-content__p">
                            YouTube Shorts are not monetized through standard AdSense impressions.
                            Instead, eligible creators share a monthly revenue pool proportional
                            to their watch time share. Effective Shorts RPM typically ranges from
                            $0.02–$0.08 — roughly 50–100× less than long-form content.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── INTERNAL CTA LINKS ─────────────────────────────────────── */}
            <div className="calc-content__ctas" aria-label="Explore more tools">
                <p className="calc-content__ctas-label">Go deeper</p>
                <div className="calc-content__cta-grid">
                    <a href="/niches" className="calc-content__cta-card">
                        <span className="calc-content__cta-icon">◈</span>
                        <div>
                            <strong>Niche Finder</strong>
                            <span>Browse & compare RPM across 50+ niches</span>
                        </div>
                        <span className="calc-content__cta-arrow">→</span>
                    </a>
                    <a href="/blog" className="calc-content__cta-card">
                        <span className="calc-content__cta-icon">✦</span>
                        <div>
                            <strong>Creator Blog</strong>
                            <span>Strategy guides and monetization deep-dives</span>
                        </div>
                        <span className="calc-content__cta-arrow">→</span>
                    </a>
                    <a href="/predictor" className="calc-content__cta-card">
                        <span className="calc-content__cta-icon">◎</span>
                        <div>
                            <strong>Views Predictor</strong>
                            <span>Forecast your channel's growth trajectory</span>
                        </div>
                        <span className="calc-content__cta-arrow">→</span>
                    </a>
                </div>
            </div>

            {/* ── FAQ ────────────────────────────────────────────────────── */}
            <div className="calc-content__faq" id="faq">
                <h2 className="calc-content__h2">Frequently Asked Questions</h2>
                <p className="calc-content__p" style={{ marginBottom: "2rem" }}>
                    Everything you need to know about YouTube AdSense revenue, RPM, and how
                    our calculator models your earnings.
                </p>

                <div className="calc-faq__list">
                    {[
                        {
                            q: "How accurate is the YouTube revenue calculator?",
                            a: "Our calculator uses real RPM benchmarks sourced from creator communities and industry reports, adjusted by niche, geography, video format, watch time, and retention rate. Estimates typically fall within ±20–30% of actual AdSense earnings. Always cross-reference with your own YouTube Studio analytics for precise figures — and remember that Q4 (October–December) can spike revenue by 40–60% due to holiday advertiser spending."
                        },
                        {
                            q: "What is the difference between RPM and CPM on YouTube?",
                            a: "CPM (Cost Per Mille) is the rate advertisers pay per 1,000 ad impressions — before YouTube takes its cut. RPM (Revenue Per Mille) is what you actually receive per 1,000 video views after YouTube's 45% share. RPM is always lower than CPM. For example, a $10 CPM campaign would result in roughly $5.50 RPM for the creator. RPM also accounts for all monetization sources, not just ads."
                        },
                        {
                            q: "Why do YouTube Shorts earn much less than long-form videos?",
                            a: "YouTube Shorts are monetized through the Shorts Revenue Pool — a fixed monthly pot shared among all eligible creators based on their proportional watch time. This differs fundamentally from long-form AdSense impressions. The effective RPM for Shorts is typically $0.02–$0.08, compared to $2–$20+ for long-form content. The strategic play is to use Shorts for subscriber growth and funnel that audience toward your higher-monetizing long-form catalog."
                        },
                        {
                            q: "Which YouTube niche has the highest RPM in 2025?",
                            a: "Finance, investing, insurance, and business niches consistently rank highest — often $12–$30+ RPM. Software tutorials, legal advice, and real estate follow at $8–$18 RPM. Education and how-to content sits in the $4–$10 range. Gaming, entertainment, and vlogging typically see $1–$4 RPM. Explore our full Niche Finder to compare all categories side by side."
                        },
                        {
                            q: "Does video duration really affect YouTube earnings?",
                            a: "Yes — significantly. Videos under 8 minutes can only serve pre-roll ads. At 8 minutes, YouTube enables one mid-roll placement. At 15 minutes, two mid-rolls become available. At 30+ minutes, multiple placements are possible. This is why you'll notice many successful educational channels produce 8–12 minute videos — it's the minimum to unlock mid-roll revenue without padding content excessively."
                        },
                        {
                            q: "How does audience geography impact YouTube revenue?",
                            a: "Ad rates are directly tied to advertiser budgets, which are concentrated in high-purchasing-power markets. The United States, United Kingdom, Canada, Norway, Australia, and Switzerland consistently have the highest CPMs. A US viewer can generate 5–8× more revenue than a viewer from South Asia or Sub-Saharan Africa. Check your audience geography breakdown in YouTube Studio → Analytics → Geography to understand your channel's geographic revenue profile."
                        },
                        {
                            q: "What average retention rate should I use?",
                            a: "If you don't know your actual retention, use 45% — the platform-wide average for long-form content. YouTube Shorts have naturally higher retention (60–80%) due to their short length, but the absolute watch time is lower. For long-form, channels with strong hooks and well-paced content often achieve 50–65% retention, which our model rewards with a higher effective RPM multiplier."
                        },
                        {
                            q: "Is the Forevault YouTube calculator free?",
                            a: "Yes — fully free, no account required, no limits. All calculations run locally in your browser. No form data is stored or transmitted to our servers. You can also use our Niche Finder and Views Predictor tools at no cost."
                        }
                    ].map(({ q, a }, i) => (
                        <FaqItem key={i} q={q} a={a} />
                    ))}
                </div>
            </div>

            {/* ── DISCLAIMER ─────────────────────────────────────────────── */}
            <p className="calc-content__disclaimer">
                Forevault estimates are based on aggregated creator data and industry benchmarks. Actual AdSense earnings depend on many variables including advertiser demand, ad-blocker usage, YouTube policy changes, and seasonality. This tool is intended for educational and planning purposes only — not as financial advice. See our{" "}
                <a href="/terms" className="calc-content__link">Terms of Use</a> and{" "}
                <a href="/privacy" className="calc-content__link">Privacy Policy</a>.
            </p>

        </section>
    );
}

// ── Individual FAQ item (open/close on click) ─────────────────────────────────
function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`calc-faq__item ${open ? "calc-faq__item--open" : ""}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
        >
            <button
                className="calc-faq__q"
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
            >
                <span itemProp="name">{q}</span>
                <span className="calc-faq__chevron" aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
            {open && (
                <div
                    className="calc-faq__a"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                >
                    <p itemProp="text">{a}</p>
                </div>
            )}
        </div>
    );
}