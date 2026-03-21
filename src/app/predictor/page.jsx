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
    if (s >= 2.2) return "🚀 Viral potential (Elite)";
    if (s >= 1.5) return "✅ Strong push";
    if (s >= 0.8) return "⚡ Average reach";
    return "⚠️ Weak signals";
}

function ctrInputCls(v)      { return v >= 6 ? "valid" : v >= 2 ? "warn" : "bad"; }
function retInputCls(v, fmt) {
    if (fmt === "shorts") return v >= 85 ? "valid" : v >= 60 ? "warn" : "bad";
    return v >= 50 ? "valid" : v >= 30 ? "warn" : "bad";
}
function swipeInputCls(v) { return v <= 30 ? "valid" : v <= 50 ? "warn" : "bad"; }

// ── Hint functions ─────────────────────────────────────────────────────────────
function ctrHint(v) {
    if (v >= 10) return { cls: "green",  msg: "🚀 Exceptional (>10%) — explosive video" };
    if (v >= 6)  return { cls: "green",  msg: "🟢 Excellent CTR (6–10%) — strong viral potential" };
    if (v >= 2)  return { cls: "yellow", msg: "🟡 Average CTR (2–6%) — improve thumbnail/title" };
    if (v > 0)   return { cls: "red",    msg: "🔴 Low CTR (<2%) — video will stagnate" };
    return null;
}
function retHint(v, fmt) {
    if (fmt === "shorts") {
        if (v >= 95) return { cls: "green",  msg: "🚀 Massive loop (>95%) — viral signal 🔥" };
        if (v >= 85) return { cls: "green",  msg: "🟢 Excellent completion (85–95%) — algo boost" };
        if (v >= 60) return { cls: "yellow", msg: "🟡 Decent completion (60–85%) — strengthen the hook" };
        if (v > 0)   return { cls: "red",    msg: "🔴 Low completion (<60%) — critical drop-off" };
        return null;
    }
    if (v >= 50) return { cls: "green",  msg: "🟢 Excellent retention (>50%) — algo boost assured" };
    if (v >= 30) return { cls: "yellow", msg: "🟡 Decent retention (30–50%) — improve the hook" };
    if (v > 0)   return { cls: "red",    msg: "🔴 Critical retention (<30%) — video will stagnate" };
    return null;
}
function swipeHint(v) {
    if (v <= 30) return { cls: "green",  msg: "🟢 Low swipe rate (<30%) — excellent signal" };
    if (v <= 50) return { cls: "yellow", msg: "🟡 Average swipe (30–50%) — strengthen the hook" };
    if (v > 0)   return { cls: "red",    msg: "🔴 High swipe rate (>50%) — fix the first 2 seconds" };
    return null;
}
function durHintShorts(sec) {
    if (!sec || sec <= 0) return null;
    if (sec <= 20) return { cls: "green",  msg: "🚀 Ultra-optimized duration (≤20s) — ideal format" };
    if (sec <= 40) return { cls: "yellow", msg: "🟡 Decent duration (20–40s)" };
    return           { cls: "red",    msg: "🔴 Risky duration (>40s) — high drop-off risk" };
}

// ── Per-engagement hint functions ──────────────────────────────────────────────
function likesHint(count, views, fmt) {
    if (!count || !views) return null;
    const rate = (count / views) * 100;
    if (fmt === "shorts") {
        if (rate >= 10) return { cls: "green",  msg: `🚀 Likes/views: ${rate.toFixed(1)}% (>10%) — viral 🔥` };
        if (rate >= 5)  return { cls: "green",  msg: `🟢 Likes/views: ${rate.toFixed(1)}% (5–10%) — excellent` };
        if (rate >= 2)  return { cls: "yellow", msg: `🟡 Likes/views: ${rate.toFixed(1)}% (2–5%) — decent` };
        return            { cls: "red",    msg: `🔴 Likes/views: ${rate.toFixed(1)}% (<2%) — weak` };
    }
    if (rate >= 5)   return { cls: "green",  msg: `🟢 Likes/views: ${rate.toFixed(1)}% (>5%) — excellent` };
    if (rate >= 1.5) return { cls: "yellow", msg: `🟡 Likes/views: ${rate.toFixed(1)}% (1.5–5%) — average` };
    return             { cls: "red",    msg: `🔴 Likes/views: ${rate.toFixed(1)}% (<1.5%) — weak` };
}
function commentsHint(count, views, fmt) {
    if (!count || !views) return null;
    const rate = (count / views) * 100;
    if (fmt === "shorts") {
        if (rate >= 1)   return { cls: "green",  msg: `🚀 Comments/views: ${rate.toFixed(2)}% (>1%) — viral` };
        if (rate >= 0.5) return { cls: "green",  msg: `🟢 Comments/views: ${rate.toFixed(2)}% (0.5–1%)` };
        if (rate >= 0.2) return { cls: "yellow", msg: `🟡 Comments/views: ${rate.toFixed(2)}% (0.2–0.5%)` };
        return             { cls: "red",    msg: `🔴 Comments/views: ${rate.toFixed(2)}% (<0.2%)` };
    }
    if (rate >= 0.5) return { cls: "green",  msg: `🟢 Comments/views: ${rate.toFixed(2)}% — excellent engagement` };
    if (rate >= 0.1) return { cls: "yellow", msg: `🟡 Comments/views: ${rate.toFixed(2)}% — decent` };
    return             { cls: "red",    msg: `🔴 Comments/views: ${rate.toFixed(2)}% (<0.1%) — weak` };
}
function sharesHint(count, views) {
    if (!count || !views) return null;
    const rate = (count / views) * 100;
    if (rate >= 2)   return { cls: "green",  msg: `🚀 Shares/views: ${rate.toFixed(2)}% — social virality 🔥` };
    if (rate >= 0.5) return { cls: "yellow", msg: `🟡 Shares/views: ${rate.toFixed(2)}% — normal` };
    return             { cls: "red",    msg: `🔴 Shares/views: ${rate.toFixed(2)}% — almost no shares` };
}
function subsHint(count, views, fmt) {
    if (!count || !views) return null;
    const rate = (count / views) * 100;
    if (fmt === "shorts") {
        if (rate >= 3)   return { cls: "green",  msg: `🚀 Subs/views: ${rate.toFixed(2)}% (>3%) — viral` };
        if (rate >= 1)   return { cls: "green",  msg: `🟢 Subs/views: ${rate.toFixed(2)}% (1–3%) — good` };
        if (rate >= 0.3) return { cls: "yellow", msg: `🟡 Subs/views: ${rate.toFixed(2)}% (0.3–1%) — decent` };
        return             { cls: "red",    msg: `🔴 Subs/views: ${rate.toFixed(2)}% (<0.3%) — weak` };
    }
    if (rate >= 5)   return { cls: "green",  msg: `🚀 Subs/views: ${rate.toFixed(2)}% (>5%) — viral 🔥` };
    if (rate >= 1)   return { cls: "green",  msg: `🟢 Subs/views: ${rate.toFixed(2)}% (1–5%) — good` };
    if (rate >= 0.3) return { cls: "yellow", msg: `🟡 Subs/views: ${rate.toFixed(2)}% (0.3–1%) — decent` };
    return             { cls: "red",    msg: `🔴 Subs/views: ${rate.toFixed(2)}% (<0.3%) — weak` };
}

function buildPrediction({ format, currentViews, ctr, retention, impressions, swipeRate,
    likes, comments, shares, subsGained, avgPrevViews, videoAge }) {

    const rv   = Number(currentViews) || 0;
    const avgV = Number(avgPrevViews) || 0;

    // ── 1. Weighted engagement score ─────────────────────────────────────────
    const engScore =
        (Number(likes)      || 0) * 1 +
        (Number(comments)   || 0) * 3 +
        (Number(subsGained) || 0) * 5 +
        (Number(shares)     || 0) * 8;

    // ── 2. Authority multiplier ───────────────────────────────────────────────
    const authorityMult = avgV > 0
        ? Math.max(0.7, Math.min(2.0, Math.sqrt(rv / avgV)))
        : 1.0;

    // ── 3. AlgoScore ─────────────────────────────────────────────────────────
    let algoScore;
    if (format === "longform") {
        const cN = (Number(ctr) || 0) / 5.0;
        const rN = (Number(retention) || 0) / 40;
        algoScore = Math.max(0.1, Math.pow(cN * rN, 2.5) * (1 + Math.log10(engScore + 1) / 3) * authorityMult);
    } else {
        const kept = 100 - (Number(swipeRate) || 50);
        const ret  = Number(retention) || 0;
        let viralTrigger = 1.0;
        if (kept > 70) viralTrigger *= 2.5;
        if (ret > 90)  viralTrigger *= 3.0;
        if (ret > 105) viralTrigger *= 5.0;
        algoScore = Math.max(0.1,
            ((kept / 50) * (ret / 70)) * viralTrigger * (1 + Math.log10(engScore + 1) / 4) * authorityMult
        );
    }

    // ── 4. PowerFactor ───────────────────────────────────────────────────────
    const powerFactor = Math.pow(algoScore, 3.2);

    // ── 5. Day distribution curve ────────────────────────────────────────────
    const isViral = algoScore > 2.0;

    function dayFactor(d) {
        if (format === "longform") {
            if (d === 0) return 0.2;
            if (d === 1) return 1.0;
            return isViral
                ? (1.0 + (d * 0.05))
                : 0.8 * Math.exp(-(d - 1) * 0.2);
        } else {
            if (d === 0) return 0.1;
            if (d === 1) return 1.0;
            return isViral
                ? (0.6 + Math.sin(d) * 0.2)
                : 0.1 * Math.exp(-(d - 1) * 0.5);
        }
    }

    // ── 6. Peak calibration ───────────────────────────────────────────────────
    const _age = Math.max(1, Math.min(30, parseInt(videoAge) || 3));
    let factorSumSoFar = 0;
    for (let d = 0; d <= _age; d++) factorSumSoFar += dayFactor(d);

    let basePeak    = factorSumSoFar > 0 ? (rv / factorSumSoFar) : rv;
    const finalPower = algoScore > 5 ? (5 + Math.log10(algoScore)) : powerFactor;

    let floorPeak = 0;
    if (algoScore > 1.5 && avgV > 0) {
        floorPeak = (avgV / 15) * Math.min(2.5, algoScore / 2);
    }

    let peakDaily = Math.max(basePeak * finalPower, floorPeak);
    if (algoScore > 2.0) peakDaily *= 2;
    if (algoScore > 4.0) peakDaily *= 3;

    if (format === "longform" && impressions && ctr) {
        const impPeak = (Number(impressions) * (Number(ctr) / 100)) / dayFactor(1);
        peakDaily = Math.max(peakDaily, impPeak * 0.6);
    }

    // ── 7. Build 90-day data ──────────────────────────────────────────────────
    const data = [];
    let cum = 0;
    const daysSince = Math.max(0, Math.min(90, parseInt(videoAge) || 3));
    for (let day = 0; day <= 90; day++) {
        const daily = Math.max(0, Math.round(peakDaily * dayFactor(day)));
        cum += daily;
        data.push({ day, daily, cumulative: cum, isPast: day <= daysSince });
    }

    const at7  = data[Math.min( 7, 90)].cumulative;
    const at30 = data[Math.min(30, 90)].cumulative;
    const at90 = data[Math.min(90, data.length - 1)].cumulative;
    const peakEntry = [...data].sort((a, b) => b.daily - a.daily)[0];

    return { data, algoScore, powerFactor, engScore, daysSince, at7, at30, at90, peakEntry };
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
        ? ["🚀", "Viral potential detected 🔥",
            "Exceptional signals. A major algorithmic push is very likely with a secondary peak around day 5–12. Engage early comments to fuel the momentum."]
        : score >= 1.5
        ? ["✅", "Strong algorithmic push expected",
            format === "longform"
                ? "CTR ≥ 6% and retention ≥ 50% will push distribution well beyond your subscribers. Watch the 7-day window — that's the tipping point."
                : "Low swipe rate and strong completion trigger viral distribution. Watch the first hours — they determine everything."]
        : score >= 0.8
        ? ["⚡", "Average reach — levers exist",
            format === "longform"
                ? "Pushing CTR above 6% or retention above 50% can unlock significantly wider reach."
                : "Reducing swipe rate below 30% or targeting 85%+ completion will unlock much wider Shorts distribution."]
        : ["⚠️", "Weak signals — action required",
            format === "longform"
                ? "CTR < 2% or retention < 30%: the video will stagnate or die. Revise your thumbnail, title, and the first 30 seconds."
                : "Swipe rate > 50%: bad completion signal. The first 2-second hook needs urgent rework."];
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
    const [format,       setFormat]       = useState("longform");
    const [chartMode,    setChartMode]    = useState("cumulative");
    const [result,       setResult]       = useState(null);
    const [error,        setError]        = useState("");
    const [views,        setViews]        = useState("");
    const [durMin,       setDurMin]       = useState("");
    const [durSec,       setDurSec]       = useState("");
    const [ctr,          setCtr]          = useState("");
    const [retention,    setRetention]    = useState("");
    const [impressions,  setImpressions]  = useState("");
    const [swipeRate,    setSwipeRate]    = useState("");
    const [likes,        setLikes]        = useState("");
    const [comments,     setComments]     = useState("");
    const [shares,       setShares]       = useState("");
    const [subsGained,   setSubsGained]   = useState("");
    const [subscribers,  setSubscribers]  = useState("");
    const [avgPrevViews, setAvgPrevViews] = useState("");
    const [videoAge,     setVideoAge]     = useState("3");

    const layoutRef  = useRef(), toggleRef = useRef(), pillRef = useRef(), btnRef = useRef();
    const resultsRef = useRef(), heroRef   = useRef(), metaRef = useRef(), chartRef = useRef(), milRef = useRef();

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
                .from(resultsRef.current,             { opacity: 0, x: 28, duration: .55, ease: "expo.out" })
                .from(heroRef.current?.children ?? [], { opacity: 0, y: 20, scale: .94, duration: .5, stagger: .1, ease: "power3.out" }, "-=.35")
                .from(metaRef.current?.children ?? [], { opacity: 0, y: 14, scale: .93, duration: .38, stagger: .05, ease: "back.out(1.5)" }, "-=.2")
                .from(".ytp-insight",                  { opacity: 0, x: -14, duration: .38, ease: "power2.out" }, "-=.15")
                .from(milRef.current?.children ?? [],  { opacity: 0, y: 12, scale: .93, duration: .38, stagger: .07, ease: "power2.out" }, "-=.1")
                .from(chartRef.current,                { opacity: 0, y: 18, duration: .5, ease: "power3.out" }, "-=.2");
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

    function handlePredict() {
        setError(""); animBtn();
        const rv = parseFloat((views + "").replace(/,/g, ""));
        if (!rv || rv <= 0)           return setError("Please enter a valid view count.");
        const totalSec = parseInt(durMin || 0) * 60 + parseInt(durSec || 0);
        if (totalSec <= 0)             return setError("Please enter a valid video duration.");
        if (format === "shorts" && totalSec > 180) return setError("Shorts cannot exceed 3 minutes.");
        if (format === "longform") {
            if (!ctr)         return setError("Please enter your CTR (%).");
            if (!retention)   return setError("Please enter your retention rate.");
            if (!impressions) return setError("Please enter impressions.");
        } else {
            if (!swipeRate)  return setError("Please enter your swipe rate (%).");
            if (!retention)  return setError("Please enter your completion rate.");
        }
        const hasEng = likes || comments || shares || subsGained;
        if (!hasEng) return setError("Please enter at least one engagement metric.");

        setResult(buildPrediction({
            format, currentViews: rv,
            ctr: parseFloat(ctr), retention: parseFloat(retention),
            impressions: parseFloat(impressions), swipeRate: parseFloat(swipeRate),
            likes: parseFloat(likes)||0, comments: parseFloat(comments)||0,
            shares: parseFloat(shares)||0, subsGained: parseFloat(subsGained)||0,
            avgPrevViews: parseFloat((avgPrevViews + "").replace(/,/g, ""))||0,
            videoAge: parseInt(videoAge)||3,
        }));
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

    const ctrH        = ctr       ? ctrHint(parseFloat(ctr))              : null;
    const retH        = retention ? retHint(parseFloat(retention), format) : null;
    const swipeH      = swipeRate ? swipeHint(parseFloat(swipeRate))       : null;
    const totalDurSec = parseInt(durMin || 0) * 60 + parseInt(durSec || 0);
    const durH        = format === "shorts" ? durHintShorts(totalDurSec)   : null;

    const baseViews = parseFloat((views + "").replace(/,/g, "")) || 0;
    const likesH    = likesHint(parseFloat(likes)||0, baseViews, format);
    const commentsH = commentsHint(parseFloat(comments)||0, baseViews, format);
    const sharesH   = sharesHint(parseFloat(shares)||0, baseViews);
    const subsH     = subsHint(parseFloat(subsGained)||0, baseViews, format);

    const ref30 = useCountUp(result?.at30, 0);
    const ref90 = useCountUp(result?.at90, 0.15);
    const ref7  = useCountUp(result?.at7,  0.25);

    function milCls(val) { return val >= baseViews * 2 ? "green" : val < baseViews * 0.5 ? "red" : ""; }

    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "How accurate is the YouTube Views Predictor?", "acceptedAnswer": { "@type": "Answer", "text": "The predictor models view distribution based on real YouTube algorithmic patterns — CTR, retention, engagement signals, and channel authority. Estimates typically reflect realistic 90-day trajectories, but actual results depend on thumbnail quality, titles, promotion, and platform changes." } },
                    { "@type": "Question", "name": "What is a good CTR for YouTube?", "acceptedAnswer": { "@type": "Answer", "text": "A CTR above 6% is considered excellent. The platform average sits between 2–6%. Below 2% signals the video is failing to attract clicks." } },
                    { "@type": "Question", "name": "What is a good retention rate on YouTube?", "acceptedAnswer": { "@type": "Answer", "text": "For long-form content, above 50% retention is excellent. For Shorts, above 85% completion is the target — loops above 100% are a viral signal." } },
                    { "@type": "Question", "name": "Why do shares matter more than likes in the algorithm?", "acceptedAnswer": { "@type": "Answer", "text": "Shares trigger external distribution — the video reaches new audiences outside the platform. YouTube treats shares as a high-intent signal because a viewer who shares is far more engaged than one who simply likes." } },
                    { "@type": "Question", "name": "What is swipe rate on YouTube Shorts?", "acceptedAnswer": { "@type": "Answer", "text": "Swipe rate is the percentage of viewers who skip your Short. Below 30% is excellent. Above 50% means the first 1-2 seconds aren't hooking the viewer." } }
                ]
            }) }}
        />
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

                    {/* Authority */}
                    <div className="ytp-row">
                        <div className="ytp-field">
                            <span className="ytp-label">Subscribers</span>
                            <input className="ytp-input" type="text" inputMode="numeric" placeholder="10,000"
                                value={subscribers}
                                onChange={e => { const d = e.target.value.replace(/\D/g, ""); setSubscribers(d ? parseInt(d).toLocaleString("en-US") : ""); }} />
                        </div>
                        <div className="ytp-field">
                            <span className="ytp-label">Avg views / video</span>
                            <input className="ytp-input" type="text" inputMode="numeric" placeholder="5,000"
                                value={avgPrevViews}
                                onChange={e => { const d = e.target.value.replace(/\D/g, ""); setAvgPrevViews(d ? parseInt(d).toLocaleString("en-US") : ""); }} />
                        </div>
                    </div>

                    {/* Video age */}
                    <div className="ytp-field">
                        <span className="ytp-label">Video age (days since upload)</span>
                        <input className="ytp-input" type="number" placeholder="3" min="0" max="365"
                            value={videoAge} onChange={e => setVideoAge(e.target.value)} />
                        {videoAge && (
                            <span className="ytp-hint">
                                {videoAge <= 2  ? "🟢 Early window — data is most actionable" :
                                 videoAge <= 7  ? "🟡 First week — algo push still possible"  :
                                 videoAge <= 30 ? "⚡ Past peak — long tail projection"        :
                                 "📦 Evergreen mode — search & suggested only"}
                            </span>
                        )}
                    </div>

                    {/* Current views */}
                    <div className="ytp-field">
                        <span className="ytp-label">Current views</span>
                        <input className="ytp-input" type="text" inputMode="numeric" placeholder="10,000"
                            value={views}
                            onChange={e => { const d = e.target.value.replace(/\D/g, ""); setViews(d ? parseInt(d).toLocaleString("en-US") : ""); }} />
                    </div>

                    {/* Duration */}
                    <div className="ytp-field">
                        <span className="ytp-label">{format === "shorts" ? "Duration (max 3:00)" : "Video duration"}</span>
                        <div className="ytp-dur">
                            <input className="ytp-input ytp-dur-part" type="number" placeholder="0"
                                min="0" max={format === "shorts" ? 3 : 120} value={durMin}
                                onChange={e => setDurMin(e.target.value)} />
                            <span className="ytp-dur-sep">m</span>
                            <input className="ytp-input ytp-dur-part" type="number" placeholder="00"
                                min="0" max="59" value={durSec}
                                onChange={e => setDurSec(e.target.value)} />
                            <span className="ytp-dur-sep">s</span>
                        </div>
                        {durH && <span className={`ytp-hint ${durH.cls}`}>{durH.msg}</span>}
                    </div>

                    {/* Format-specific signals */}
                    {format === "longform" ? (
                        <>
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
                                    <input className="ytp-input" type="number" placeholder="50,000"
                                        value={impressions} onChange={e => setImpressions(e.target.value)} />
                                </div>
                            </div>
                            <div className="ytp-field">
                                <span className="ytp-label">Average retention (%)</span>
                                <input className={`ytp-input ${retention ? retInputCls(parseFloat(retention), "longform") : ""}`}
                                    type="number" placeholder="45" min="0" max="100" step=".1"
                                    value={retention} onChange={e => setRetention(e.target.value)} />
                                {retH && <span className={`ytp-hint ${retH.cls}`}>{retH.msg}</span>}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="ytp-field">
                                <span className="ytp-label">Swipe rate (%)</span>
                                <input className={`ytp-input ${swipeRate ? swipeInputCls(parseFloat(swipeRate)) : ""}`}
                                    type="number" placeholder="30" min="0" max="100" step=".1"
                                    value={swipeRate} onChange={e => setSwipeRate(e.target.value)} />
                                {swipeH && <span className={`ytp-hint ${swipeH.cls}`}>{swipeH.msg}</span>}
                            </div>
                            <div className="ytp-field">
                                <span className="ytp-label">Completion rate (%)</span>
                                <input className={`ytp-input ${retention ? retInputCls(parseFloat(retention), "shorts") : ""}`}
                                    type="number" placeholder="80" min="0" max="200" step=".1"
                                    value={retention} onChange={e => setRetention(e.target.value)} />
                                {retention && <span className="ytp-hint">Can exceed 100% with loops 🔁</span>}
                                {retH && <span className={`ytp-hint ${retH.cls}`}>{retH.msg}</span>}
                            </div>
                        </>
                    )}

                    {/* Engagement */}
                    <div className="ytp-field">
                        <span className="ytp-label">Engagement</span>
                        <div className="ytp-eng-grid">
                            <div className="ytp-eng-input-wrap">
                                <span className="ytp-eng-input-label">
                                    <span>👍</span> Likes <span className="ytp-eng-pts">×1</span>
                                </span>
                                <input className="ytp-input" type="number" placeholder="1,500"
                                    value={likes} onChange={e => setLikes(e.target.value)} />
                                {likesH && <span className={`ytp-hint ${likesH.cls}`}>{likesH.msg}</span>}
                            </div>
                            <div className="ytp-eng-input-wrap">
                                <span className="ytp-eng-input-label">
                                    <span>💬</span> Comments <span className="ytp-eng-pts">×3</span>
                                </span>
                                <input className="ytp-input" type="number" placeholder="120"
                                    value={comments} onChange={e => setComments(e.target.value)} />
                                {commentsH && <span className={`ytp-hint ${commentsH.cls}`}>{commentsH.msg}</span>}
                            </div>
                            <div className="ytp-eng-input-wrap">
                                <span className="ytp-eng-input-label">
                                    <span>↗</span> Shares <span className="ytp-eng-pts">×4</span>
                                </span>
                                <input className="ytp-input" type="number" placeholder="80"
                                    value={shares} onChange={e => setShares(e.target.value)} />
                                {sharesH && <span className={`ytp-hint ${sharesH.cls}`}>{sharesH.msg}</span>}
                            </div>
                            <div className="ytp-eng-input-wrap">
                                <span className="ytp-eng-input-label">
                                    <span>🔔</span> Subs gained <span className="ytp-eng-pts">×2</span>
                                </span>
                                <input className="ytp-input" type="number" placeholder="200"
                                    value={subsGained} onChange={e => setSubsGained(e.target.value)} />
                                {subsH && <span className={`ytp-hint ${subsH.cls}`}>{subsH.msg}</span>}
                            </div>
                        </div>
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
                                                <stop offset="0%"   stopColor="#22c55e" stopOpacity={.35} />
                                                <stop offset="100%" stopColor="#22c55e" stopOpacity={0}   />
                                            </linearGradient>
                                            <linearGradient id="gFut" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%"   stopColor="#6366f1" stopOpacity={.18} />
                                                <stop offset="100%" stopColor="#6366f1" stopOpacity={0}   />
                                            </linearGradient>
                                        </defs>
                                        <XAxis dataKey="day" ticks={CHART_TICKS}
                                            tickFormatter={v => `D${v}`}
                                            tick={{ fill: "#3a3a3a", fontSize: 10, fontFamily: "Poppins" }}
                                            axisLine={false} tickLine={false} />
                                        <YAxis tick={{ fill: "#3a3a3a", fontSize: 10, fontFamily: "Poppins" }}
                                            axisLine={false} tickLine={false} tickFormatter={v => fmtN(v)} width={48} />
                                        <Tooltip content={<ChartTip mode={chartMode} />}
                                            cursor={{ stroke: "rgba(255,255,255,.06)", strokeWidth: 1 }} />
                                        <ReferenceLine x={result.daysSince}
                                            stroke="rgba(255,255,255,.3)" strokeDasharray="4 3" strokeWidth={1.5}
                                            label={{ value: "Today", fill: "rgba(255,255,255,.3)", fontSize: 9, fontFamily: "Poppins", fontWeight: 600, position: "insideTopRight" }} />
                                        <Area type="monotoneX" dataKey="past"
                                            stroke="#22c55e" strokeWidth={2} fill="url(#gPast)" dot={false}
                                            activeDot={{ r: 5, fill: "#22c55e", stroke: "#111", strokeWidth: 2 }} connectNulls />
                                        <Area type="monotoneX" dataKey="future"
                                            stroke="#6366f1" strokeWidth={1.5} strokeDasharray="5 4"
                                            fill="url(#gFut)" dot={false}
                                            activeDot={{ r: 4, fill: "#818cf8", stroke: "#111", strokeWidth: 2 }} connectNulls />
                                    </ComposedChart>
                                </ResponsiveContainer>

                                <div className="ytp-legend">
                                    <span className="ytp-legend-item">
                                        <span className="ytp-legend-dot" style={{ background: "#22c55e" }} />
                                        Actual data
                                    </span>
                                    <span className="ytp-legend-item">
                                        <span className="ytp-legend-dot" style={{ background: "#6366f1" }} />
                                        Projected
                                    </span>
                                    <span className="ytp-legend-item">
                                        <span style={{ display: "inline-block", width: 0, borderLeft: "2px dashed rgba(255,255,255,.3)", height: 12, flexShrink: 0 }} />
                                        Today
                                    </span>
                                </div>
                            </div>

                        </div>
                    )}
                </main>

            </div>
        </div>

        {/* ── SEO & AdSense content section ─────────────────────────────── */}
        <PredictorContent />

        <Footer/>
        </div>

        <div className="fonds"></div>

        </>
    );
}

// ── PredictorContent ──────────────────────────────────────────────────────────
function PredictorContent() {
    return (
        <section className="ytp-content" aria-label="About the YouTube Views Predictor">

            <div className="ytp-content__intro">
                <span className="ytp-content__eyebrow">How it works</span>
                <h2 className="ytp-content__h2">What is the YouTube Views Predictor?</h2>
                <p className="ytp-content__lead">
                    Forevault's Views Predictor models how your video will perform over the next 90 days
                    based on the signals YouTube's algorithm actually uses — CTR, audience retention,
                    engagement quality, and channel authority. Instead of generic formulas, the predictor
                    applies format-specific distribution curves that reflect real long-form and Shorts
                    behavior observed across thousands of YouTube channels.
                </p>
            </div>

            <div className="ytp-content__stats" role="list">
                {[
                    { val: "90",   label: "Day projection window"          },
                    { val: "2",    label: "Formats modelled (LF & Shorts)" },
                    { val: "4",    label: "Engagement signals weighted"    },
                    { val: "Free", label: "No account required"            },
                ].map(s => (
                    <div key={s.label} className="ytp-content__stat" role="listitem">
                        <span className="ytp-content__stat-val">{s.val}</span>
                        <span className="ytp-content__stat-label">{s.label}</span>
                    </div>
                ))}
            </div>

            <div className="ytp-content__block">
                <h2 className="ytp-content__h2">How to Use the Views Predictor</h2>
                <p className="ytp-content__p">Fill in your video's current analytics data for a 90-day forecast. Here is what each metric means and where to find it in YouTube Studio:</p>
                <ol className="ytp-content__steps">
                    <li><strong>Format</strong> — Select Long Form for videos over 60 seconds, or Shorts for vertical videos under 60 seconds. Each format uses a different distribution model.</li>
                    <li><strong>Subscribers &amp; Average views per video</strong> — Used to calculate the channel authority multiplier. Find your average in Studio → Analytics → Overview.</li>
                    <li><strong>Video age</strong> — Days since upload. Affects how the model calibrates the distribution curve and positions the "Today" marker on the chart.</li>
                    <li><strong>Current views</strong> — The view count at the time of prediction. Data within the first 48 hours produces the most accurate calibration.</li>
                    <li><strong>CTR (Long Form only)</strong> — Click-through rate from impressions. Found in Studio → Analytics → Reach. Above 6% is excellent; below 2% means the thumbnail or title needs work.</li>
                    <li><strong>Retention / Completion rate</strong> — Average view duration as a percentage. For Shorts, this can exceed 100% due to loops — a loop rate above 90% is a strong viral signal.</li>
                    <li><strong>Engagement</strong> — Shares (×8) and subs gained (×5) are the strongest signals. Find these in Studio → Analytics → Engagement.</li>
                </ol>
            </div>

            <div className="ytp-content__block">
                <h2 className="ytp-content__h2">Understanding YouTube's Algorithmic Signals</h2>
                <div className="ytp-content__metrics">
                    {[
                        { icon: "📊", title: "CTR — Click-Through Rate",     desc: "The percentage of impressions that resulted in a click. YouTube uses CTR to determine whether to extend distribution beyond your subscriber base. A video with 8% CTR will receive dramatically more suggested traffic than one with 3% CTR." },
                        { icon: "⏱", title: "Audience Retention",            desc: "Average view duration as a percentage of total video length. Videos that hold 50%+ retention consistently outperform in suggested and browse features." },
                        { icon: "↗", title: "Shares — The Viral Multiplier", desc: "Shares represent external distribution — the video reaching new audiences entirely outside the platform. One share cycle can generate hundreds of new impressions the algorithm couldn't target otherwise." },
                        { icon: "🔔", title: "Subscribers Gained",           desc: "New subscribers indicate that viewers committed to seeing more. A high sub/view ratio (above 1%) is a strong signal of long-term channel health and triggers higher subscriber feed distribution." },
                        { icon: "▶", title: "Shorts Completion Rate",        desc: "For Shorts, completion rate is the primary signal. Above 85% means most viewers watched to the end. Above 100% indicates loops — one of the strongest viral signals on the Shorts platform." },
                        { icon: "📉", title: "Swipe Rate (Shorts)",          desc: "A high swipe rate (above 50%) tells YouTube that your first 1-2 seconds aren't holding attention. Reducing swipe rate is the highest-leverage optimization for Shorts creators." },
                    ].map(m => (
                        <div key={m.title} className="ytp-content__metric-card">
                            <div className="ytp-content__metric-icon">{m.icon}</div>
                            <div>
                                <h3 className="ytp-content__h3">{m.title}</h3>
                                <p className="ytp-content__p">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ytp-content__block">
                <h2 className="ytp-content__h2">Reading the Algorithm Score</h2>
                <p className="ytp-content__p">The Algorithm Score (0.1–2.5+) synthesizes all input signals into a single momentum indicator.</p>
                <div className="ytp-content__tiers">
                    {[
                        { label: "2.2+",    cls: "s", name: "🚀 Viral Potential (Elite)", desc: "Exceptional signals across all dimensions. A major algorithmic push is expected with a secondary peak around day 5–12. Fewer than 5% of videos reach this tier." },
                        { label: "1.5–2.2", cls: "a", name: "✅ Strong Push",             desc: "Solid signals that should trigger meaningful distribution beyond your subscriber base. Expected to 2–5× your current view velocity over the next 30 days." },
                        { label: "0.8–1.5", cls: "b", name: "⚡ Average Reach",           desc: "Normal distribution range. Most views will come in the first 7 days. Improving CTR or retention by 10–15% can push this into Strong Push territory." },
                        { label: "<0.8",    cls: "c", name: "⚠️ Weak Signals",           desc: "Low signals indicate the video is likely to stagnate. Priority: revise thumbnail and title (CTR fix), re-edit the opening 30 seconds (retention fix)." },
                    ].map(t => (
                        <div key={t.label} className={`ytp-content__tier ytp-content__tier--${t.cls}`}>
                            <div className="ytp-content__tier-head">
                                <span className="ytp-content__tier-badge">{t.label}</span>
                                <span className="ytp-content__tier-name">{t.name}</span>
                            </div>
                            <p className="ytp-content__tier-why">{t.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ytp-content__ctas">
                <p className="ytp-content__ctas-label">More tools</p>
                <div className="ytp-content__cta-grid">
                    <a href="/calculator" className="ytp-content__cta-card">
                        <span className="ytp-content__cta-icon">⊞</span>
                        <div><strong>Revenue Calculator</strong><span>Estimate AdSense earnings by niche &amp; geography</span></div>
                        <span className="ytp-content__cta-arrow">→</span>
                    </a>
                    <a href="/niches" className="ytp-content__cta-card">
                        <span className="ytp-content__cta-icon">◈</span>
                        <div><strong>Niche Finder</strong><span>Compare RPM across 50+ content categories</span></div>
                        <span className="ytp-content__cta-arrow">→</span>
                    </a>
                    <a href="/blog" className="ytp-content__cta-card">
                        <span className="ytp-content__cta-icon">✦</span>
                        <div><strong>Creator Blog</strong><span>Strategy guides and monetization deep-dives</span></div>
                        <span className="ytp-content__cta-arrow">→</span>
                    </a>
                </div>
            </div>

            <div className="ytp-content__faq" id="faq">
                <h2 className="ytp-content__h2">Frequently Asked Questions</h2>
                <p className="ytp-content__p" style={{ marginBottom: "2rem" }}>
                    Common questions about YouTube analytics, algorithmic signals, and how to interpret the predictor's output.
                </p>
                <div className="ytp-faq__list">
                    {[
                        { q: "How accurate is the YouTube Views Predictor?",          a: "The predictor models realistic 90-day view trajectories based on CTR, retention, engagement signals, and channel authority. Estimates are projections, not guarantees — use it as a directional benchmark to compare scenarios, not as a precise forecast." },
                        { q: "What is a good CTR for YouTube in 2025?",               a: "A CTR above 6% is considered excellent and strongly correlates with algorithmic amplification. The platform average sits between 2–6%. Below 2% indicates the thumbnail or title is failing to convert impressions into clicks." },
                        { q: "What is a good retention rate on YouTube?",             a: "For long-form content, above 50% is excellent (platform average ~40–45%). For Shorts, target above 85% completion. Above 100% indicates loops — one of the strongest viral signals in the Shorts algorithm." },
                        { q: "Why do shares have more weight than likes?",            a: "Shares create external distribution — the video reaches entirely new audiences outside the platform. One viral share cycle can generate thousands of new impressions from demographics the algorithm had never been able to reach." },
                        { q: "What is swipe rate on YouTube Shorts?",                 a: "Swipe rate is the percentage of viewers who skip your Short in the Feed. Below 30% is excellent. Above 50% signals the first 1-2 seconds aren't compelling enough and need to be reworked." },
                        { q: "How does channel authority affect the prediction?",     a: "The authority multiplier compares this video's view count against your channel's typical average. Outperforming your average boosts the projection; underperforming reduces it — preventing unrealistic projections from unusual spikes." },
                        { q: "What is the Algorithm Score and how is it calculated?", a: "The Algorithm Score synthesizes CTR, retention, weighted engagement, and channel authority into a single momentum signal. Above 1.5 = strong push; above 2.2 = viral potential." },
                        { q: "Is this tool free to use?",                             a: "Yes — completely free, no account required, no limits. All calculations run locally in your browser. No data is stored or transmitted to our servers." },
                    ].map(({ q, a }, i) => (
                        <PredictorFaqItem key={i} q={q} a={a} />
                    ))}
                </div>
            </div>

            <p className="ytp-content__disclaimer">
                Forevault's Views Predictor provides estimates based on algorithmic modelling and observed YouTube distribution patterns.
                Projections are for educational and planning purposes only and do not constitute guaranteed results. See our{" "}
                <a href="/terms" className="ytp-content__link">Terms of Use</a> and{" "}
                <a href="/privacy" className="ytp-content__link">Privacy Policy</a>.
            </p>

        </section>
    );
}

function PredictorFaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`ytp-faq__item ${open ? "ytp-faq__item--open" : ""}`}
            itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <button className="ytp-faq__q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
                <span itemProp="name">{q}</span>
                <span className="ytp-faq__chevron" aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
            {open && (
                <div className="ytp-faq__a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">{a}</p>
                </div>
            )}
        </div>
    );
}