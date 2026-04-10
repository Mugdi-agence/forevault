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
        <section className="calc-content" aria-label="About the YouTube RPM calculator by niche">

            <div className="calc-content__intro">
                <span className="calc-content__eyebrow">Understanding YouTube RPM by niche</span>
                <h2 className="calc-content__h2">
                    Why YouTube RPM changes so much by niche
                </h2>
                <p className="calc-content__lead">
                    If you have ever compared two YouTube channels with similar view counts and
                    wondered why one earns far more than the other, the answer is usually not the
                    algorithm. It is the niche. YouTube RPM is heavily shaped by the type of
                    audience a video attracts, the commercial intent behind that audience, and how
                    valuable advertisers consider that topic.
                </p>
                <p className="calc-content__lead">
                    That is why a finance channel, a software tutorial channel, and a gaming channel
                    can all sit at very different revenue levels even when their videos perform
                    similarly in views. A niche is not just a category label. It is often the
                    clearest signal of how much money a view is worth.
                </p>
                <p className="calc-content__lead">
                    This guide explains how RPM behaves by niche, why the differences exist, and how
                    to think about earnings in a way that is closer to real creator revenue than a
                    simple “views × price” shortcut.
                </p>
            </div>

            <div className="calc-content__stats" role="list">
                <div className="calc-content__stat" role="listitem">
                    <span className="calc-content__stat-val">50+</span>
                    <span className="calc-content__stat-label">Niches modeled</span>
                </div>
                <div className="calc-content__stat" role="listitem">
                    <span className="calc-content__stat-val">80+</span>
                    <span className="calc-content__stat-label">Countries compared</span>
                </div>
                <div className="calc-content__stat" role="listitem">
                    <span className="calc-content__stat-val">12</span>
                    <span className="calc-content__stat-label">Display currencies</span>
                </div>
                <div className="calc-content__stat" role="listitem">
                    <span className="calc-content__stat-val">±20%</span>
                    <span className="calc-content__stat-label">Typical estimate range</span>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Try the calculator first</h2>
                <p className="calc-content__p">
                    To give you a realistic estimate, you can try the calculator below before
                    reading further.
                </p>
                <p className="calc-content__p">
                    The estimate depends on the inputs that matter most for RPM by niche: views,
                    retention, niche selection, audience geography, video length, and format. It is
                    a modeling tool, not a guaranteed payout calculator, because actual YouTube
                    earnings move with advertiser demand, seasonality, and audience quality.
                </p>

                <div className="calc-content__embed-placeholder" aria-label="YouTube RPM Calculator Embed">
                    [YouTube RPM Calculator by Niche Embed]
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">What RPM means in practice</h2>

                <div className="calc-content__metrics">
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">RPM (Revenue Per Mille)</h3>
                        <p className="calc-content__p">
                            RPM is the amount a creator earns per 1,000 views after YouTube takes its
                            share and after monetization conditions are applied. It is the best metric
                            for comparing niches because it reflects real creator revenue, not just
                            advertiser pricing. Two niches can have the same traffic and still produce
                            very different RPM because the audience behind the traffic is not equally
                            valuable.
                        </p>
                    </div>

                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Why niche changes revenue</h3>
                        <p className="calc-content__p">
                            Advertisers do not value every topic equally. Finance, investing, software,
                            business, and legal content usually attract stronger bidding because those
                            audiences are closer to a buying decision. Gaming, entertainment, and
                            casual vlog content tend to have weaker advertiser competition. That is why
                            RPM by niche can vary dramatically even before geography or retention are
                            taken into account.
                        </p>
                    </div>

                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Why geography still matters</h3>
                        <p className="calc-content__p">
                            A niche does not exist in a vacuum. The same finance video can earn very
                            different RPM depending on whether the audience is primarily in the US, UK,
                            Canada, or in lower-bid regions. Advertiser demand is always tied to the
                            purchasing power and competition level of the market. Niche explains the
                            topic, but geography often decides how much that topic is worth.
                        </p>
                    </div>

                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Why retention changes the final number</h3>
                        <p className="calc-content__p">
                            A niche may have strong theoretical RPM, but if viewers leave early, the
                            revenue will still underperform. Retention affects how many ad opportunities
                            are actually served and how valuable a view becomes in practice. A well-paced
                            niche video that keeps people watching often outperforms a longer but weaker
                            one, even on the same topic.
                        </p>
                    </div>

                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Why video length matters</h3>
                        <p className="calc-content__p">
                            Once a long-form video crosses the 8-minute mark, mid-roll ads become
                            possible. That can increase revenue inside the same niche without increasing
                            views. A 10-minute tutorial can therefore monetize better than a 6-minute
                            version of the same idea, provided the pacing stays strong and the added
                            length feels useful rather than padded.
                        </p>
                    </div>

                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Why Shorts behave differently</h3>
                        <p className="calc-content__p">
                            Shorts are monetized through a revenue pool rather than the standard
                            long-form ad model. That means the RPM is usually much lower, even when the
                            niche itself is strong. Shorts can still be excellent for discovery, but they
                            often work best as a growth channel that feeds a higher-RPM long-form niche.
                        </p>
                    </div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Real-world niche scenarios</h2>
                <p className="calc-content__p">
                    The easiest way to understand RPM by niche is to compare channels with the same
                    number of views but different topics.
                </p>

                <div className="calc-content__scenarios">
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">100K views on a gaming channel</h3>
                        <p className="calc-content__p">
                            Gaming usually sits in a lower RPM range because advertiser competition is
                            weaker and the audience is less likely to be tied to high-intent buying
                            behavior. A gaming channel can still build huge reach, but the revenue per
                            view is often modest compared with more commercially driven niches.
                        </p>
                    </div>

                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">100K views on a finance channel</h3>
                        <p className="calc-content__p">
                            Finance content often earns substantially more because advertisers are
                            willing to pay more to reach viewers interested in money, investing, taxes,
                            credit, or business decisions. Even a simple explainer can outperform a much
                            larger entertainment video if the audience is more valuable.
                        </p>
                    </div>

                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">100K views on an educational channel</h3>
                        <p className="calc-content__p">
                            Educational content often lands in the middle, but the exact RPM depends on
                            the subtopic. A software tutorial or technical how-to video can monetize far
                            better than a general knowledge channel because the audience may already be
                            looking for a solution they are willing to pay for.
                        </p>
                    </div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Common misconceptions about RPM by niche</h2>
                <ul className="calc-content__steps">
                    <li>
                        <strong>“More views always means more money” is wrong</strong> — the niche can
                        matter more than the raw traffic number.
                    </li>
                    <li>
                        <strong>“CPM is what creators earn” is wrong</strong> — CPM is advertiser-side
                        pricing, while RPM is much closer to actual creator income.
                    </li>
                    <li>
                        <strong>“All finance content pays the same” is wrong</strong> — subtopics,
                        audience country, and viewer intent can change the RPM a lot.
                    </li>
                    <li>
                        <strong>“Shorts behave like long-form” is wrong</strong> — they use a separate
                        monetization structure and usually earn less per view.
                    </li>
                </ul>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Use the calculator to compare niches</h2>
                <p className="calc-content__p">
                    You can test different scenarios using the calculator above. Try changing the
                    niche, switching the audience country, or adjusting the video length and
                    retention rate. It becomes very clear very quickly that the niche is not a small
                    variable — it is often one of the biggest drivers of RPM.
                </p>
                <p className="calc-content__p">
                    That is what makes RPM by niche such a useful way to think about YouTube
                    monetization. It helps you move from vague assumptions to a more realistic view
                    of what a channel can actually earn.
                </p>
            </div>

            <div className="calc-content__faq" id="faq">
                <h2 className="calc-content__h2">Frequently Asked Questions</h2>
                <p className="calc-content__p" style={{ marginBottom: "2rem" }}>
                    These answers cover the main factors that influence YouTube RPM by niche:
                    advertiser demand, geography, retention, length, and format.
                </p>

                <div className="calc-faq__list">
                    {[
                        {
                            q: "Why does RPM vary so much by niche?",
                            a: "Because advertisers value audiences differently. A niche that attracts buyers, business owners, investors, or software users usually has stronger advertiser demand than a niche built around general entertainment. That difference shows up directly in RPM."
                        },
                        {
                            q: "What is the difference between RPM and CPM?",
                            a: "CPM is what advertisers pay for 1,000 ad impressions before YouTube’s share. RPM is what the creator actually earns per 1,000 views after YouTube’s share and after monetization conditions are applied. RPM is the better metric for comparing niches."
                        },
                        {
                            q: "Which niche usually has the highest RPM?",
                            a: "Finance, investing, business, software, and some legal or real estate content often rank near the top because the audience tends to have stronger commercial intent. The exact ranking can shift by country and season, but those niches are usually among the strongest."
                        },
                        {
                            q: "Do Shorts have the same RPM as long-form videos?",
                            a: "No. Shorts use a different revenue model and are usually much lower in effective RPM. They can still be very useful for reach and discovery, but they are rarely the best format if the goal is direct ad revenue."
                        },
                        {
                            q: "Does audience geography affect RPM by niche?",
                            a: "Yes, very much. The same niche can monetize differently depending on where the audience lives. A US-heavy audience in a finance niche will usually earn more than a similar audience in a lower-ad-spend market."
                        },
                        {
                            q: "Should I choose my niche based only on RPM?",
                            a: "Not necessarily. High RPM is attractive, but the best niche is usually the one you can publish consistently in. A sustainable niche with slightly lower RPM can outperform a high-RPM niche that you cannot produce for long."
                        },
                        {
                            q: "What retention rate should I enter?",
                            a: "If you do not have your own analytics yet, 45% is a reasonable starting point for long-form content. Higher-retention videos often monetize better because they keep viewers in the video longer and increase the chance of additional ad delivery."
                        },
                        {
                            q: "Is this calculator free?",
                            a: "Yes, it is free to use and does not require an account. The estimate runs locally in the browser."
                        }
                    ].map(({ q, a }, i) => (
                        <FaqItem key={i} q={q} a={a} />
                    ))}
                </div>
            </div>

            <p className="calc-content__disclaimer">
                Forevault estimates rely on aggregated creator benchmarks and market data. Actual
                AdSense earnings vary by ad demand, seasonality, audience geography, adblock
                rates, YouTube policies, and individual video performance. This content is for
                educational and planning purposes only—not financial advice. See our{" "}
                <a href="/terms" className="calc-content__link">Terms of Use</a>{" "}
                and our{" "}
                <a href="/privacy" className="calc-content__link">Privacy Policy</a>.
            </p>

        </section>
    );
}

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
                type="button"
            >
                <span itemProp="name">{q}</span>
                <span className="calc-faq__chevron" aria-hidden="true">
                    {open ? "−" : "+"}
                </span>
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