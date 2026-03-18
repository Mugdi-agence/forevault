"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import {
    Area, ComposedChart,
    XAxis, YAxis, Tooltip,
    ResponsiveContainer, ReferenceLine,
} from "recharts";
import gsap from "gsap";
import "./yt_views_predictor.scss";
import Navbar from "../nav";
import Footer from "../footer";

const ENG_TYPES = [
    { id: "like",       icon: "👍", label: "Like",    pts: 1 },
    { id: "comment",    icon: "💬", label: "Comment", pts: 3 },
    { id: "subscriber", icon: "🔔", label: "Sub",     pts: 2 },
    { id: "share",      icon: "↗",  label: "Share",   pts: 4 },
];
const CHART_TICKS = [0, 7, 14, 21, 30, 45, 60, 90];

function fmtN(n) {
    if (n == null) return "—";
    n = Math.round(n);
    if (n >= 1e9)   return (n / 1e9).toFixed(2) + "B";
    if (n >= 1e6)   return (n / 1e6).toFixed(2) + "M";
    if (n >= 10000) return (n / 1e3).toFixed(1)  + "K";
    return n.toLocaleString("en-US");
}

function scCls(s) { return s >= 1.5 ? "green" : s >= 0.8 ? "yellow" : "red"; }
function scCol(s) { return s >= 1.5 ? "var(--green)" : s >= 0.8 ? "var(--yellow)" : "var(--red)"; }
function scVerdict(s) {
    if (s >= 2.0) return "🚀 Viral potential";
    if (s >= 1.5) return "✅ Strong push";
    if (s >= 0.8) return "⚡ Average reach";
    return "⚠️ Weak signals";
}

function ctrInputCls(v)      { return v >= 6 ? "valid" : v >= 2 ? "warn" : "bad"; }
function retInputCls(v, fmt) {
    if (fmt === "shorts") return v >= 85 ? "valid" : v >= 60 ? "warn" : "bad";
    return v >= 50 ? "valid" : v >= 30 ? "warn" : "bad";
}
function swipeInputCls(v)    { return v <= 30 ? "valid" : v <= 50 ? "warn" : "bad"; }

// ── Long Form ─────────────────────────────────────────────────────────────────
function ctrHint(v) {
    if (v >= 10)  return { cls: "green",  msg: "🚀 Exceptionnel (>10 %) — vidéo explosive" };
    if (v >= 6)   return { cls: "green",  msg: "🟢 Excellent CTR (6–10 %) — fort potentiel viral" };
    if (v >= 2)   return { cls: "yellow", msg: "🟡 CTR moyen (2–6 %) — améliore miniature/titre" };
    if (v > 0)    return { cls: "red",    msg: "🔴 CTR faible (<2 %) — la vidéo va stagner" };
    return null;
}
function retHint(v, fmt) {
    if (fmt === "shorts") {
        if (v >= 95)  return { cls: "green",  msg: "🚀 Loop massif détecté (>95 %) — signal viral 🔥" };
        if (v >= 85)  return { cls: "green",  msg: "🟢 Excellente complétion (85–95 %) — algo boost assuré" };
        if (v >= 60)  return { cls: "yellow", msg: "🟡 Complétion correcte (60–85 %) — hook à renforcer" };
        if (v > 0)    return { cls: "red",    msg: "🔴 Complétion faible (<60 %) — drop-off critique" };
        return null;
    }
    // Long form
    if (v >= 50)  return { cls: "green",  msg: "🟢 Excellente rétention (>50 %) — algo boost assuré" };
    if (v >= 30)  return { cls: "yellow", msg: "🟡 Rétention correcte (30–50 %) — améliore le hook" };
    if (v > 0)    return { cls: "red",    msg: "🔴 Rétention critique (<30 %) — vidéo condamnée à stagner" };
    return null;
}

// ── Shorts ────────────────────────────────────────────────────────────────────
function swipeHint(v) {
    if (v <= 30)  return { cls: "green",  msg: "🟢 Swipe rate faible (<30 %) — excellent signal complétion" };
    if (v <= 50)  return { cls: "yellow", msg: "🟡 Swipe moyen (30–50 %) — hook à muscler" };
    if (v > 0)    return { cls: "red",    msg: "🔴 Swipe élevé (>50 %) — mauvais signe, fixe les 2 premières secondes" };
    return null;
}

// ── Engagement rate (computed from count / views) ─────────────────────────────
function engRateHint(rate, fmt, engType) {
    if (!rate || rate <= 0) return null;
    if (fmt === "shorts") {
        if (engType === "comment") {
            if (rate >= 0.5)  return { cls: "green",  msg: `🚀 Ratio commentaires/vues : ${rate.toFixed(2)} % (>0,5 %) — viral` };
            if (rate >= 0.2)  return { cls: "yellow", msg: `🟡 Ratio correct : ${rate.toFixed(2)} % (0,2–0,5 %)` };
            return              { cls: "red",    msg: `🔴 Peu de commentaires : ${rate.toFixed(2)} % (<0,2 %)` };
        }
        // likes / shares for shorts
        if (rate >= 5)  return { cls: "green",  msg: `🚀 Ratio likes/vues : ${rate.toFixed(1)} % (>5 %) — excellent 🔥` };
        if (rate >= 2)  return { cls: "yellow", msg: `🟡 Ratio correct : ${rate.toFixed(1)} % (2–5 %)` };
        return            { cls: "red",    msg: `🔴 Ratio faible : ${rate.toFixed(1)} % (<2 %)` };
    }
    // Long form — taux d'engagement global
    if (rate >= 5)    return { cls: "green",  msg: `🟢 Taux d'engagement excellent : ${rate.toFixed(1)} % (>5 %)` };
    if (rate >= 1.5)  return { cls: "yellow", msg: `🟡 Taux moyen : ${rate.toFixed(1)} % (1,5–3,5 %)` };
    return              { cls: "red",    msg: `🔴 Engagement faible : ${rate.toFixed(1)} % (<1,5 %)` };
}

// ── Shorts duration hint ──────────────────────────────────────────────────────
function durHintShorts(sec) {
    if (!sec || sec <= 0) return null;
    if (sec <= 20) return { cls: "green",  msg: "🚀 Durée ultra-optimisée (7–20 s) — format idéal" };
    if (sec <= 40) return { cls: "yellow", msg: "🟡 Durée correcte (20–40 s) — légèrement risqué" };
    return           { cls: "red",    msg: "🔴 Durée risquée (>40 s) — fort risque de drop-off" };
}

function buildPrediction({ format, uploadDate, currentViews, ctr, retention, impressions, swipeRate, engType, engCount }) {
    const engW     = { like: 1, comment: 3, subscriber: 2, share: 4 };
    const engScore = (engW[engType] || 1) * Math.max(0, Number(engCount) || 0);
    const uploadMs  = new Date(uploadDate).getTime();
    const daysSince = Math.max(0, Math.floor((Date.now() - uploadMs) / 86_400_000));

    let algoScore;
    if (format === "longform") {
        const cN = (Number(ctr) || 0) / 8;   // 8 % = référence "explose" (6–10 %)
        const rN = (Number(retention) || 0) / 50; // 50 % = référence "explose"
        algoScore = Math.max(0.08, cN * rN * (1 + Math.log10(engScore + 10) / 8));
    } else {
        const kept = 100 - (Number(swipeRate) || 50);
        algoScore = Math.max(0.08, (kept / 70) * ((Number(retention) || 0) / 90) * (1 + Math.log10(engScore + 10) / 8));
    }

    function dayFactor(d) {
        if (format === "longform") {
            if (d === 0) return 0.28; if (d === 1) return 1.00; if (d === 2) return 0.72;
            if (d <= 4)  return 0.48 * Math.exp(-(d - 2) * 0.45);
            if (d <= 14) return algoScore > 1.3 ? 0.40 * algoScore * Math.exp(-(d - 5) * 0.10) : 0.14 * Math.exp(-(d - 5) * 0.14);
            if (d <= 30) return 0.065 * Math.exp(-(d - 14) * 0.042);
            return 0.022 * Math.exp(-(d - 30) * 0.018);
        } else {
            if (d === 0) return 0.05;
            if (d <= 1)  return algoScore > 1.2 ? 1.0 * algoScore : 0.70;
            if (d <= 3)  return (algoScore > 1 ? 0.50 * algoScore : 0.26) * Math.exp(-(d - 1) * 0.4);
            if (d <= 10) return 0.10 * Math.exp(-(d - 3) * 0.10);
            if (d <= 30) return 0.028 * Math.exp(-(d - 10) * 0.035);
            return 0.008 * Math.exp(-(d - 30) * 0.018);
        }
    }

    let factorSum = 0;
    for (let d = 0; d <= daysSince; d++) factorSum += dayFactor(d);
    let peakFromImp = 0;
    if (format === "longform" && impressions && ctr)
        peakFromImp = (Number(impressions) * (Number(ctr) / 100)) / dayFactor(1);
    const peakDaily = Math.max(factorSum > 0 ? (Number(currentViews) || 0) / factorSum : 0, peakFromImp * 0.4);

    let cum = 0;
    const data = [];
    for (let day = 0; day <= 90; day++) {
        const daily = Math.max(0, Math.round(peakDaily * dayFactor(day)));
        cum += daily;
        data.push({ day, daily, cumulative: Math.round(cum), isPast: day <= daysSince });
    }
    const at7 = data[Math.min(7, 90)].cumulative, at30 = data[Math.min(30, 90)].cumulative, at90 = data[90].cumulative;
    const peak = [...data].sort((a, b) => b.daily - a.daily)[0];
    return { data, algoScore, engScore, daysSince, at7, at30, at90, peakEntry: peak };
}

function ScoreBar({ score }) {
    const fillRef = useRef();
    useEffect(() => {
        if (!fillRef.current) return;
        gsap.fromTo(fillRef.current, { width: "0%" }, { width: `${Math.min(100, (score / 2.5) * 100)}%`, duration: 1.2, ease: "expo.out", delay: 0.15 });
    }, [score]);
    const col = scCol(score);
    return (
        <div className="score-wrap">
            <div className="score-row">
                <div className="score-track"><div ref={fillRef} className="score-fill" style={{ background: col }} /></div>
                <span className="score-num" style={{ color: col }}>{score.toFixed(2)}</span>
            </div>
            <span className="score-verdict" style={{ color: col }}>{scVerdict(score)}</span>
        </div>
    );
}

function AlgoInsight({ score, format }) {
    const cls = scCls(score);
    const [icon, title, body] = score >= 2.0
        ? ["🚀", "Potentiel viral détecté 🔥",
            "Signaux exceptionnels. Un push algorithmique majeur est très probable avec un pic secondaire autour du jour 5–12. Engage les premiers commentaires pour nourrir la dynamique."]
        : score >= 1.5
        ? ["✅", "Fort push algorithmique attendu",
            format === "longform"
                ? "CTR ≥ 6 % et rétention ≥ 50 % vont propulser la distribution bien au-delà de tes abonnés. Surveille la fenêtre des 7 jours — c'est le point de bascule."
                : "Swipe rate faible et forte complétion déclenchent la distribution virale. Surveille les premières heures : elles déterminent tout."]
        : score >= 0.8
        ? ["⚡", "Reach moyen — des leviers existent",
            format === "longform"
                ? "Pousser le CTR au-dessus de 6 % ou la rétention au-dessus de 50 % peut débloquer un reach significativement plus large."
                : "Réduire le swipe rate sous 30 % ou viser 85 %+ de complétion débloquera une distribution Shorts bien plus large."]
        : ["⚠️", "Signaux faibles — action requise",
            format === "longform"
                ? "CTR < 2 % ou rétention < 30 % : la vidéo va stagner ou mourir. Revois ta miniature, ton titre et les 30 premières secondes."
                : "Swipe rate > 50 % : mauvais signal de complétion. Le hook des 2 premières secondes doit être retravaillé en urgence."];
    return (
        <div className={`ytp-insight ${cls}`}>
            <span className="ytp-insight-icon">{icon}</span>
            <span><b>{title}. </b>{body}</span>
        </div>
    );
}

function ChartTip({ active, payload, label, mode }) {
    if (!active || !payload?.length) return null;
    const raw = payload.find(p => p.value != null);
    return (
        <div className="ytp-tip">
            <p className="ytp-tip-day">Day {label}</p>
            <p className="ytp-tip-val">{fmtN(raw?.value)}</p>
            <p className="ytp-tip-lbl">{mode === "cumulative" ? "total views" : "daily views"}</p>
        </div>
    );
}

function useCountUp(target, delay = 0) {
    const ref = useRef();
    useEffect(() => {
        if (!ref.current || !target) return;
        const obj = { v: 0 };
        gsap.to(obj, { v: target, duration: 1.3, ease: "power3.out", delay, onUpdate: () => { if (ref.current) ref.current.textContent = fmtN(obj.v); } });
    }, [target]);
    return ref;
}

export default function Yt_views_predictor() {
    const [format,      setFormat]      = useState("longform");
    const [engType,     setEngType]     = useState("like");
    const [chartMode,   setChartMode]   = useState("cumulative");
    const [result,      setResult]      = useState(null);
    const [error,       setError]       = useState("");
    const [views,       setViews]       = useState("");
    const [uploadDate,  setUploadDate]  = useState(() => new Date(Date.now() - 86_400_000).toISOString().split("T")[0]);
    const [durMin,      setDurMin]      = useState("");
    const [durSec,      setDurSec]      = useState("");
    const [ctr,         setCtr]         = useState("");
    const [retention,   setRetention]   = useState("");
    const [impressions, setImpressions] = useState("");
    const [swipeRate,   setSwipeRate]   = useState("");
    const [engCount,    setEngCount]    = useState("");

    const layoutRef = useRef(), toggleRef = useRef(), pillRef = useRef(), btnRef = useRef();
    const resultsRef = useRef(), heroRef = useRef(), metaRef = useRef(), chartRef = useRef(), milRef = useRef();

    // Mount
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(layoutRef.current, { opacity: 0, y: 55, scale: .96, duration: 1.05, ease: "expo.out" });
            gsap.from([".ytp-badge", ".ytp-title", ".ytp-sub"], { opacity: 0, y: 18, duration: .7, stagger: .08, delay: .38, ease: "power3.out" });
            gsap.from(".ytp-toggle",  { opacity: 0, y: 12, duration: .5,  delay: .55, ease: "power2.out" });
            gsap.from(".ytp-field",   { opacity: 0, y: 14, duration: .48, stagger: .052, delay: .62, ease: "power2.out" });
            gsap.from(btnRef.current, { opacity: 0, scale: .88, duration: .5, delay: 1.1, ease: "back.out(2.2)" });
        });
        return () => ctx.revert();
    }, []);

    // Pill
    useEffect(() => {
        if (!pillRef.current || !toggleRef.current) return;
        const active = [...toggleRef.current.querySelectorAll(".ytp-toggle-btn")].find(b => b.classList.contains("active"));
        if (!active) return;
        const cr = toggleRef.current.getBoundingClientRect(), br = active.getBoundingClientRect();
        gsap.to(pillRef.current, { left: br.left - cr.left, width: br.width, duration: .38, ease: "power3.inOut" });
    }, [format]);

    // Results
    useEffect(() => {
        if (!result || !resultsRef.current) return;
        const ctx = gsap.context(() => {
            gsap.timeline()
                .from(resultsRef.current,              { opacity: 0, x: 28, duration: .55, ease: "expo.out" })
                .from(heroRef.current?.children ?? [],  { opacity: 0, y: 20, scale: .94, duration: .5, stagger: .1, ease: "power3.out" }, "-=.35")
                .from(metaRef.current?.children ?? [],  { opacity: 0, y: 14, scale: .93, duration: .38, stagger: .05, ease: "back.out(1.5)" }, "-=.2")
                .from(".ytp-insight",                   { opacity: 0, x: -14, duration: .38, ease: "power2.out" }, "-=.15")
                .from(milRef.current?.children ?? [],   { opacity: 0, y: 12, scale: .93, duration: .38, stagger: .07, ease: "power2.out" }, "-=.1")
                .from(chartRef.current,                 { opacity: 0, y: 18, duration: .5, ease: "power3.out" }, "-=.2");
        }, resultsRef);
        return () => ctx.revert();
    }, [result]);

    function animBtn() {
        gsap.timeline()
            .to(btnRef.current, { scale: .94, duration: .08, ease: "power2.in" })
            .to(btnRef.current, { scale: 1,   duration: .5,  ease: "elastic.out(1,.5)" });
    }

    function switchFormat(fmt, el) {
        setFormat(fmt); setResult(null); setError("");
        gsap.fromTo(el, { scale: .92 }, { scale: 1, duration: .38, ease: "back.out(2)" });
        gsap.fromTo(".ytp-field", { opacity: .5 }, { opacity: 1, duration: .35, stagger: .04, ease: "power2.out" });
    }

    function handleEng(id, el) {
        setEngType(id);
        gsap.fromTo(el, { scale: .82 }, { scale: 1, duration: .42, ease: "back.out(2.5)" });
    }

    function handlePredict() {
        setError(""); animBtn();
        const rv = parseFloat(views.replace(/,/g, ""));
        if (!rv || rv <= 0)           return setError("Please enter a valid view count.");
        if (!uploadDate)               return setError("Please enter the upload date.");
        if (uploadDate > new Date().toISOString().split("T")[0]) return setError("Upload date must be today or in the past.");
        const totalSec = parseInt(durMin || 0) * 60 + parseInt(durSec || 0);
        if (totalSec <= 0)             return setError("Please enter a valid video duration.");
        if (format === "shorts" && totalSec > 180) return setError("Shorts cannot exceed 3 minutes.");
        if (format === "longform") {
            if (!ctr)         return setError("Please enter your CTR (%).");
            if (!retention)   return setError("Please enter your retention rate.");
            if (!impressions) return setError("Please enter impressions.");
        } else {
            if (!swipeRate)   return setError("Please enter your swipe rate (%).");
            if (!retention)   return setError("Please enter your retention rate.");
        }
        if (!engCount) return setError("Please enter your engagement count.");
        setResult(buildPrediction({ format, uploadDate, currentViews: rv, ctr: parseFloat(ctr), retention: parseFloat(retention), impressions: parseFloat(impressions), swipeRate: parseFloat(swipeRate), engType, engCount: parseFloat(engCount) }));
    }

    const chartData = useMemo(() => {
        if (!result) return [];
        return result.data.map(d => ({
            day: d.day,
            past:   d.isPast  ? d[chartMode] : null,
            future: !d.isPast ? d[chartMode] : null,
            ...(d.day === result.daysSince ? { future: d[chartMode] } : {}),
        }));
    }, [result, chartMode]);

    const ctrH   = ctr       ? ctrHint(parseFloat(ctr))               : null;
    const retH   = retention ? retHint(parseFloat(retention), format)  : null;
    const swipeH = swipeRate ? swipeHint(parseFloat(swipeRate))        : null;

    const baseViews  = parseFloat(views.replace(/,/g, "")) || 0;
    const engRateVal = (baseViews > 0 && engCount) ? (parseFloat(engCount) / baseViews) * 100 : 0;
    const engRateH   = engRateVal > 0 ? engRateHint(engRateVal, format, engType) : null;

    const totalDurSec = parseInt(durMin || 0) * 60 + parseInt(durSec || 0);
    const durH        = format === "shorts" ? durHintShorts(totalDurSec) : null;

    const ref30 = useCountUp(result?.at30, 0);
    const ref90 = useCountUp(result?.at90, 0.15);
    const ref7  = useCountUp(result?.at7,  0.25);

    function milCls(val) { return val >= baseViews * 2 ? "green" : val < baseViews * 0.5 ? "red" : ""; }

    const engLabel = ENG_TYPES.find(e => e.id === engType)?.label ?? "";

    return (
        <>
        <div className="containering">
        <Navbar/>
        <div className="ytp-root">
            
            <div className="ytp-layout" ref={layoutRef}>

                {/* ── FORM ─────────────────────────────────────────────── */}
                <aside className="ytp-form">
                    <div>
                        <span className="ytp-badge">YouTube</span>
                        <h1 className="ytp-title">Views Predictor</h1>
                        <p className="ytp-sub">Forecast your video performance over 90 days</p>
                    </div>

                    <div className="ytp-toggle" ref={toggleRef}>
                        <div ref={pillRef} className="ytp-toggle-pill" style={{ left: 4, width: "calc(50% - 6px)" }} />
                        {["longform", "shorts"].map(fmt => (
                            <button key={fmt} className={`ytp-toggle-btn ${format === fmt ? "active" : ""}`}
                                onClick={e => switchFormat(fmt, e.currentTarget)}>
                                {fmt === "longform" ? "Long Form" : "Shorts"}
                            </button>
                        ))}
                    </div>

                    <div className="ytp-row">
                        <div className="ytp-field">
                            <span className="ytp-label">Upload date</span>
                            <input className="ytp-input" type="date" value={uploadDate}
                                max={new Date().toISOString().split("T")[0]}
                                onChange={e => setUploadDate(e.target.value)} />
                        </div>
                        <div className="ytp-field">
                            <span className="ytp-label">Current views</span>
                            <input className="ytp-input" type="text" inputMode="numeric"
                                placeholder="10,000" value={views}
                                onChange={e => { const d = e.target.value.replace(/\D/g, ""); setViews(d ? parseInt(d).toLocaleString("en-US") : ""); }} />
                        </div>
                    </div>

                    <div className="ytp-field">
                        <span className="ytp-label">{format === "shorts" ? "Duration (max 3:00)" : "Video duration"}</span>
                        <div className="ytp-dur">
                            <input className="ytp-input ytp-dur-part" type="number" placeholder="0"
                                min="0" max={format === "shorts" ? 3 : 120} value={durMin} onChange={e => setDurMin(e.target.value)} />
                            <span className="ytp-dur-sep">m</span>
                            <input className="ytp-input ytp-dur-part" type="number" placeholder="00"
                                min="0" max="59" value={durSec} onChange={e => setDurSec(e.target.value)} />
                            <span className="ytp-dur-sep">s</span>
                        </div>
                        {durH && <span className={`ytp-hint ${durH.cls}`}>{durH.msg}</span>}
                    </div>

                    {format === "longform" ? (
                        <div className="ytp-row">
                            <div className="ytp-field">
                                <span className="ytp-label">CTR (%)</span>
                                <input className={`ytp-input ${ctr ? ctrInputCls(parseFloat(ctr)) : ""}`}
                                    type="number" placeholder="4.5" min="0" max="100" step=".1"
                                    value={ctr} onChange={e => setCtr(e.target.value)} />
                                {ctrH && <span className={`ytp-hint ${ctrH.cls}`}>{ctrH.msg}</span>}
                            </div>
                            <div className="ytp-field">
                                <span className="ytp-label">Impressions</span>
                                <input className="ytp-input" type="number" placeholder="50000"
                                    value={impressions} onChange={e => setImpressions(e.target.value)} />
                            </div>
                        </div>
                    ) : (
                        <div className="ytp-field">
                            <span className="ytp-label">Swipe rate (%)</span>
                            <input className={`ytp-input ${swipeRate ? swipeInputCls(parseFloat(swipeRate)) : ""}`}
                                type="number" placeholder="30" min="0" max="100" step=".1"
                                value={swipeRate} onChange={e => setSwipeRate(e.target.value)} />
                            {swipeH && <span className={`ytp-hint ${swipeH.cls}`}>{swipeH.msg}</span>}
                        </div>
                    )}

                    <div className="ytp-field">
                        <span className="ytp-label">
                            {format === "shorts" ? "Taux de complétion (%)" : "Rétention moyenne (%)"}
                        </span>
                        <input className={`ytp-input ${retention ? retInputCls(parseFloat(retention), format) : ""}`}
                            type="number"
                            placeholder={format === "longform" ? "45" : "80"}
                            min="0"
                            max={format === "shorts" ? 200 : 100}
                            step=".1"
                            value={retention} onChange={e => setRetention(e.target.value)} />
                        {format === "shorts" && (
                            <span className="ytp-hint">Peut dépasser 100 % grâce aux loops 🔁</span>
                        )}
                        {retH && <span className={`ytp-hint ${retH.cls}`}>{retH.msg}</span>}
                    </div>

                    <div className="ytp-field">
                        <span className="ytp-label">Engagement type (weighted score)</span>
                        <div className="ytp-eng-grid">
                            {ENG_TYPES.map(e => (
                                <button key={e.id} className={`ytp-eng-btn ${engType === e.id ? "active" : ""}`}
                                    onClick={ev => handleEng(e.id, ev.currentTarget)}>
                                    <span className="ytp-eng-icon">{e.icon}</span>
                                    <span className="ytp-eng-name">{e.label}</span>
                                    <span className="ytp-eng-pts">{e.pts}pt</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="ytp-field">
                        <span className="ytp-label">Number of {engLabel.toLowerCase()}s</span>
                        <input className="ytp-input" type="number" placeholder="1500"
                            value={engCount} onChange={e => setEngCount(e.target.value)} />
                        {engRateH && <span className={`ytp-hint ${engRateH.cls}`}>{engRateH.msg}</span>}
                    </div>

                    {error && <p className="ytp-error">⚠ {error}</p>}

                    <button ref={btnRef} className="ytp-btn" onClick={handlePredict}>
                        Predict performance <span className="ytp-btn-arrow">→</span>
                    </button>
                </aside>

                {/* ── RESULTS ──────────────────────────────────────────── */}
                <main className="ytp-result">
                    {!result ? (
                        <div className="ytp-empty">
                            <span className="ytp-empty-icon">📈</span>
                            <p className="ytp-empty-text">Fill in your video metrics<br />to forecast the next 90 days</p>
                        </div>
                    ) : (
                        <div ref={resultsRef} style={{ display: "flex", flexDirection: "column", gap: "1.35rem", flex: 1 }}>

                            <div className="ytp-hero" ref={heroRef}>
                                <div className="ytp-hero-block green">
                                    <p className="ytp-hero-label">30-day forecast</p>
                                    <p ref={ref30} className="ytp-hero-val green">{fmtN(result.at30)}</p>
                                    <p className="ytp-hero-sub">cumulative views</p>
                                </div>
                                <div className="ytp-hero-sep" />
                                <div className="ytp-hero-block">
                                    <p className="ytp-hero-label">90-day forecast</p>
                                    <p ref={ref90} className="ytp-hero-val muted">{fmtN(result.at90)}</p>
                                    <p className="ytp-hero-sub">cumulative views</p>
                                </div>
                            </div>

                            <div className="ytp-meta" ref={metaRef}>
                                <div className="ytp-tag hl">
                                    <span className="ytp-tag-label">Algorithm score</span>
                                    <ScoreBar score={result.algoScore} />
                                </div>
                                <div className={`ytp-tag ${result.at7 > baseViews * 0.8 ? "green" : ""}`}>
                                    <span className="ytp-tag-label">7-day estimate</span>
                                    <span ref={ref7} className="ytp-tag-val">{fmtN(result.at7)}</span>
                                </div>
                                <div className={`ytp-tag ${scCls(result.algoScore)}`}>
                                    <span className="ytp-tag-label">Peak daily views</span>
                                    <span className="ytp-tag-val">{fmtN(result.peakEntry?.daily)}</span>
                                    <span style={{ fontSize: ".62rem", opacity: .5 }}>Day {result.peakEntry?.day}</span>
                                </div>
                                <div className="ytp-tag">
                                    <span className="ytp-tag-label">Video age</span>
                                    <span className="ytp-tag-val">{result.daysSince} day{result.daysSince !== 1 ? "s" : ""}</span>
                                </div>
                                <div className={`ytp-tag ${result.engScore > 500 ? "green" : result.engScore < 50 ? "red" : ""}`}>
                                    <span className="ytp-tag-label">Engagement score</span>
                                    <span className="ytp-tag-val">{result.engScore.toLocaleString()}</span>
                                </div>
                                <div className="ytp-tag">
                                    <span className="ytp-tag-label">Format</span>
                                    <span className="ytp-tag-val">{format === "longform" ? "Long Form" : "Shorts"}</span>
                                </div>
                            </div>

                            <AlgoInsight score={result.algoScore} format={format} />

                            <div className="ytp-milestones" ref={milRef}>
                                {[{ label: "7 days", val: result.at7 }, { label: "30 days", val: result.at30 }, { label: "90 days", val: result.at90 }].map(m => {
                                    const cls = milCls(m.val);
                                    return (
                                        <div key={m.label} className={`ytp-milestone ${cls}`}>
                                            <p className="ytp-milestone-day">{m.label}</p>
                                            <p className="ytp-milestone-val"
                                                style={{ color: cls === "green" ? "var(--green)" : cls === "red" ? "var(--red)" : "#fff" }}
                                                ref={el => {
                                                    if (!el) return;
                                                    const obj = { v: 0 };
                                                    gsap.to(obj, { v: m.val, duration: 1.25, ease: "power3.out", delay: .4, onUpdate: () => { if (el) el.textContent = fmtN(obj.v); } });
                                                }}
                                            >{fmtN(m.val)}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="ytp-chart-block" ref={chartRef}>
                                <div className="ytp-chart-head">
                                    <p className="ytp-chart-title">View evolution — 90-day projection</p>
                                    <div className="ytp-chart-tabs">
                                        {["cumulative", "daily"].map(m => (
                                            <button key={m} className={`ytp-chart-tab ${chartMode === m ? "active" : ""}`}
                                                onClick={() => setChartMode(m)}>
                                                {m === "cumulative" ? "Total" : "Daily"}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <ResponsiveContainer width="100%" height={210}>
                                    <ComposedChart data={chartData} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="gPast" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%"  stopColor="#22c55e" stopOpacity={.25} />
                                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0}   />
                                            </linearGradient>
                                            <linearGradient id="gFut" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%"  stopColor="#ffffff" stopOpacity={.07} />
                                                <stop offset="95%" stopColor="#ffffff" stopOpacity={0}   />
                                            </linearGradient>
                                        </defs>
                                        <XAxis dataKey="day" ticks={CHART_TICKS}
                                            tickFormatter={v => `J${v}`}
                                            tick={{ fill: "#444", fontSize: 10, fontFamily: "Poppins" }}
                                            axisLine={false} tickLine={false} />
                                        <YAxis tick={{ fill: "#444", fontSize: 10, fontFamily: "Poppins" }}
                                            axisLine={false} tickLine={false} tickFormatter={v => fmtN(v)} />
                                        <Tooltip content={<ChartTip mode={chartMode} />}
                                            cursor={{ stroke: "rgba(255,255,255,.06)", strokeWidth: 1 }} />
                                        <ReferenceLine x={result.daysSince}
                                            stroke="rgba(255,255,255,.35)" strokeDasharray="4 3"
                                            label={{ value: "Today", fill: "rgba(255,255,255,.35)", fontSize: 10, fontFamily: "Poppins", position: "insideTopRight" }} />
                                        <Area type="monotone" dataKey="past"
                                            stroke="#22c55e" strokeWidth={2} fill="url(#gPast)" dot={false}
                                            activeDot={{ r: 4, fill: "#22c55e", strokeWidth: 0 }} connectNulls />
                                        <Area type="monotone" dataKey="future"
                                            stroke="rgba(255,255,255,.28)" strokeWidth={1.5} strokeDasharray="5 4"
                                            fill="url(#gFut)" dot={false}
                                            activeDot={{ r: 4, fill: "rgba(255,255,255,.4)", strokeWidth: 0 }} connectNulls />
                                    </ComposedChart>
                                </ResponsiveContainer>

                                <div className="ytp-legend">
                                    <span className="ytp-legend-item">
                                        <span className="ytp-legend-dot" style={{ background: "#22c55e" }} />
                                        Actual data
                                    </span>
                                    <span className="ytp-legend-item">
                                        <span className="ytp-legend-dash" />
                                        Projected
                                    </span>
                                    <span className="ytp-legend-item">
                                        <span style={{ display: "inline-block", width: 0, borderLeft: "2px dashed rgba(255,255,255,.35)", height: 12, flexShrink: 0 }} />
                                        Today
                                    </span>
                                </div>
                            </div>

                        </div>
                    )}
                </main>

            </div>
            
        </div>
        <Footer/>
        </div>
        
        </>
    );
}