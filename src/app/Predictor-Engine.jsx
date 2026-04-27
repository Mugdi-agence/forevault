"use client";
// app/yt-views-predictor/PredictorEngine.jsx
// ─────────────────────────────────────────────────────────────────────────────
// CLIENT COMPONENT (CSR) — directive "use client" obligatoire
// Contient :
//   • Toute la logique de prédiction (buildPrediction, courbes, audience cap…)
//   • L'ensemble de l'UI interactive (formulaire, chart, résultats)
//   • Les animations GSAP
//   • Les hooks React (useState, useMemo, useEffect, useRef)
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useMemo, useEffect, useRef } from "react";
import {
    Area, ComposedChart, XAxis, YAxis,
    Tooltip, ResponsiveContainer, ReferenceLine,
} from "recharts";
import gsap from "gsap";
import { niches, languages } from "./constants";

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

const CHART_TICKS = [0, 7, 14, 21, 30, 45, 60, 90];

function fmtN(n) {
    if (n == null) return "—";
    n = Math.round(n);
    if (n >= 1e9)   return (n / 1e9).toFixed(2) + "B";
    if (n >= 1e6)   return (n / 1e6).toFixed(2) + "M";
    if (n >= 10000) return (n / 1e3).toFixed(1)  + "K";
    return n.toLocaleString("en-US");
}

function scCls(s)     { return s >= 1.5 ? "green" : s >= 0.8 ? "yellow" : "red"; }
function scCol(s)     { return s >= 1.5 ? "var(--green)" : s >= 0.8 ? "var(--yellow)" : "var(--red)"; }
function scVerdict(s) {
    if (s >= 2.2) return "🚀 Viral potential (Elite)";
    if (s >= 1.5) return "✅ Strong push";
    if (s >= 0.8) return "⚡ Average reach";
    return "⚠️ Weak signals";
}

function ctrInputCls(v)        { return v >= 6 ? "valid" : v >= 2 ? "warn" : "bad"; }
function retInputCls(v, fmt)   {
    if (fmt === "shorts") return v >= 85 ? "valid" : v >= 60 ? "warn" : "bad";
    return v >= 50 ? "valid" : v >= 30 ? "warn" : "bad";
}
function swipeInputCls(v)      { return v <= 30 ? "valid" : v <= 50 ? "warn" : "bad"; }

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

// ─────────────────────────────────────────────────────────────────────────────
// AUDIENCE POOL CAP
// ─────────────────────────────────────────────────────────────────────────────

function computeAudienceCap(language, niche, algoScore) {
    if (!language || !niche) return { maxViews: Infinity, nichePool90d: 0, reachFraction: 0 };
    const nichePool90d  = language.monthlyViews * niche.audienceShare * 3;
    const t             = Math.min(1, Math.max(0, algoScore / 4));
    const reachFraction = 0.001 * Math.pow(t, 3);
    const maxViews      = nichePool90d * reachFraction;
    return { maxViews, nichePool90d, reachFraction };
}

// ─────────────────────────────────────────────────────────────────────────────
// VIEW CURVE ENGINE — keypoints par format / niveau
// ─────────────────────────────────────────────────────────────────────────────

function smoothstep(t) { return t * t * (3 - 2 * t); }

function evalCurve(kp, d) {
    if (d <= kp[0][0]) return kp[0][1];
    const last = kp[kp.length - 1];
    if (d >= last[0]) return last[1];
    for (let i = 0; i < kp.length - 1; i++) {
        const [x0, y0] = kp[i], [x1, y1] = kp[i + 1];
        if (d >= x0 && d <= x1) {
            return y0 + (y1 - y0) * smoothstep((d - x0) / (x1 - x0));
        }
    }
    return last[1];
}
function blend(kpA, kpB, t, d) {
    return evalCurve(kpA, d) * (1 - t) + evalCurve(kpB, d) * t;
}

// Long Form
const LF_WEAK = [
    [0,.10],[1,1.00],[2,.45],[3,.20],[5,.09],
    [7,.06],[14,.035],[21,.025],[30,.020],[60,.014],[90,.010],
];
const LF_AVERAGE = [
    [0,.12],[1,1.00],[2,.72],[3,.48],[4,.32],[5,.24],
    [6,.20],[7,.17],[9,.14],[10,.12],[14,.09],[21,.065],
    [30,.050],[45,.038],[60,.028],[90,.020],
];
const LF_STRONG = [
    [0,.10],[1,.75],[2,1.00],[3,.88],[4,.70],[5,.52],
    [6,.40],[7,.32],[9,.26],[10,.24],[12,.22],[14,.19],
    [21,.13],[30,.09],[45,.065],[60,.045],[90,.030],
];
const LF_VIRAL = [
    [0,.05],[1,.25],[2,.55],[3,.82],[4,1.00],
    [5,.96],[6,.85],[7,.70],[9,.52],[10,.45],
    [12,.40],[14,.44],[16,.38],[18,.30],
    [21,.22],[25,.16],[30,.12],[45,.075],[60,.050],[90,.032],
];

// Shorts
const SH_WEAK = [
    [0,.08],[1,1.00],[2,.32],[3,.12],[5,.05],
    [7,.032],[14,.018],[30,.010],[60,.007],[90,.005],
];
const SH_AVERAGE = [
    [0,.08],[1,1.00],[2,.55],[3,.28],[4,.18],[5,.13],[7,.09],
    [10,.065],[14,.048],[21,.032],[30,.022],[45,.016],[60,.011],[90,.008],
];
const SH_STRONG = [
    [0,.06],[1,.72],[2,1.00],[3,.85],[4,.65],[5,.48],
    [6,.36],[7,.28],[9,.22],[10,.20],[12,.17],[14,.14],
    [21,.09],[30,.060],[45,.040],[60,.028],[90,.018],
];
const SH_VIRAL = [
    [0,.04],[1,.40],[2,.78],[3,1.00],[4,.95],[5,.82],[6,.68],
    [7,.55],[9,.40],[10,.36],[12,.38],[14,.32],[16,.25],
    [21,.18],[25,.13],[30,.09],[45,.055],[60,.035],[90,.022],
];

function getDayFactor(format, algoScore) {
    return function(d) {
        if (format === "longform") {
            if (algoScore <= 0.8) return evalCurve(LF_WEAK, d);
            if (algoScore <= 1.5) return blend(LF_WEAK,    LF_AVERAGE, (algoScore - 0.8) / 0.7, d);
            if (algoScore <= 2.2) return blend(LF_AVERAGE, LF_STRONG,  (algoScore - 1.5) / 0.7, d);
            return                       blend(LF_STRONG,  LF_VIRAL,   Math.min(1, (algoScore - 2.2) / 1.5), d);
        } else {
            if (algoScore <= 0.8) return evalCurve(SH_WEAK, d);
            if (algoScore <= 1.5) return blend(SH_WEAK,    SH_AVERAGE, (algoScore - 0.8) / 0.7, d);
            if (algoScore <= 2.2) return blend(SH_AVERAGE, SH_STRONG,  (algoScore - 1.5) / 0.7, d);
            return                       blend(SH_STRONG,  SH_VIRAL,   Math.min(1, (algoScore - 2.2) / 1.5), d);
        }
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// CORE PREDICTION ENGINE
// ─────────────────────────────────────────────────────────────────────────────

function buildPrediction({
    format, currentViews, ctr, retention, impressions, swipeRate,
    likes, comments, shares, subsGained, avgPrevViews, videoAge,
    language, niche, subscribers,
}) {
    const rv   = Number(currentViews) || 0;
    const avgV = Number(avgPrevViews) || 0;
    const subs = Number(subscribers)  || 0;

    // 1. Engagement score
    const engScore =
        (Number(likes)      || 0) * 1 +
        (Number(comments)   || 0) * 3 +
        (Number(subsGained) || 0) * 5 +
        (Number(shares)     || 0) * 8;

    // 2. Authority multiplier
    const perfRatio     = avgV > 0 ? Math.sqrt(rv / avgV) : 1.0;
    const channelWeight = avgV > 0
        ? Math.max(0.65, Math.min(1.80, 0.28 * Math.log10(avgV + 1) - 0.15))
        : 1.0;
    const authorityMult = Math.max(0.60, Math.min(2.80, perfRatio * channelWeight));

    // 3. AlgoScore
    let algoScore;
    if (format === "longform") {
        const cN = (Number(ctr)       || 0) / 5.0;
        const rN = (Number(retention) || 0) / 40;
        algoScore = Math.max(0.1,
            Math.pow(cN * rN, 2.5) * (1 + Math.log10(engScore + 1) / 3) * authorityMult
        );
    } else {
        const kept = 100 - (Number(swipeRate) || 50);
        const ret  = Number(retention) || 0;
        let viralTrigger = 1.0;
        if (kept > 70) viralTrigger *= 2.5;
        if (ret > 90)  viralTrigger *= 3.0;
        if (ret > 105) viralTrigger *= 5.0;
        algoScore = Math.max(0.1,
            ((kept / 50) * (ret / 70)) * viralTrigger *
            (1 + Math.log10(engScore + 1) / 4) * authorityMult
        );
    }

    // 4. Realistic curve
    const dayFactor = getDayFactor(format, algoScore);

    // 5. Peak calibration
    const _age = Math.max(1, Math.min(30, parseInt(videoAge) || 3));
    let factorSum = 0;
    for (let d = 0; d <= _age; d++) factorSum += dayFactor(d);
    let basePeak    = factorSum > 0 ? (rv / factorSum) : rv;
    const powerFactor = Math.pow(Math.min(algoScore, 5), 2.2);

    let floorPeak = 0;
    if (algoScore > 1.5 && avgV > 0)
        floorPeak = (avgV / 20) * Math.min(2.0, algoScore / 2);

    let peakDaily = Math.max(basePeak * powerFactor, floorPeak);

    if (format === "longform" && impressions && ctr)
        peakDaily = Math.max(peakDaily, (Number(impressions) * (Number(ctr) / 100)) * 0.5);

    if (subs > 0) {
        const notifCtr = format === "longform"
            ? Math.min(1, (Number(ctr)       || 4) / 100)
            : Math.min(1, (1 - (Number(swipeRate) || 40) / 100));
        peakDaily = Math.max(peakDaily, (subs * 0.015 * notifCtr) / 2);
    }

    // 6. Raw 90-day data
    const rawData = [];
    let cum = 0;
    const daysSince = Math.max(0, Math.min(90, parseInt(videoAge) || 3));

    for (let day = 0; day <= 90; day++) {
        const daily = Math.max(0, Math.round(peakDaily * dayFactor(day)));
        cum += daily;
        rawData.push({ day, daily, cumulative: cum, isPast: day <= daysSince });
    }

    // 7. Audience pool cap
    const { maxViews, nichePool90d, reachFraction } = computeAudienceCap(language, niche, algoScore);
    const rawAt90 = rawData[90].cumulative;
    let data = rawData;

    if (rawAt90 > maxViews) {
        const capRatio = maxViews / rawAt90;
        let recum = 0;
        data = rawData.map(d => {
            const capped = Math.round(d.daily * capRatio);
            recum += capped;
            return { ...d, daily: capped, cumulative: recum };
        });
    }

    const at7       = data[Math.min(7,  90)].cumulative;
    const at30      = data[Math.min(30, 90)].cumulative;
    const at90      = data[90].cumulative;
    const peakEntry = [...data].sort((a, b) => b.daily - a.daily)[0];
    const wasCapped = rawAt90 > maxViews;
    const reachPct  = nichePool90d > 0 ? (at90 / nichePool90d) * 100 : 0;

    return {
        data, algoScore, powerFactor, engScore, daysSince,
        at7, at30, at90, peakEntry,
        maxViews, nichePool90d, reachFraction, wasCapped, reachPct,
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS (tous client)
// ─────────────────────────────────────────────────────────────────────────────

function ScoreBar({ score }) {
    const fillRef = useRef();
    useEffect(() => {
        if (!fillRef.current) return;
        gsap.fromTo(fillRef.current,
            { width: "0%" },
            { width: `${Math.min(100, (score / 2.5) * 100)}%`, duration: 1.2, ease: "expo.out", delay: 0.15 }
        );
    }, [score]);
    const col = scCol(score);
    return (
        <div className="score-wrap">
            <div className="score-row">
                <div className="score-track">
                    <div ref={fillRef} className="score-fill" style={{ background: col }} />
                </div>
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
            "Exceptional signals. A major push is likely with a secondary peak around day 13–15. Engage early comments immediately."]
        : score >= 1.5
        ? ["✅", "Strong algorithmic push expected",
            format === "longform"
                ? "CTR ≥ 6% and retention ≥ 50% will push distribution beyond your subscribers. Peak expected day 2 — the 7-day window is critical."
                : "Low swipe rate and strong completion trigger extended distribution. Peak expected day 2."]
        : score >= 0.8
        ? ["⚡", "Average reach — levers exist",
            format === "longform"
                ? "Pushing CTR above 6% or retention above 50% can significantly extend the shoulder plateau."
                : "Reducing swipe rate below 30% or targeting 85%+ completion will unlock much wider distribution."]
        : ["⚠️", "Weak signals — action required",
            format === "longform"
                ? "CTR < 2% or retention < 30%: the video will decay fast after day 1. Revise thumbnail, title, and the first 30 seconds."
                : "Swipe rate > 50%: the first 2-second hook needs urgent rework."];
    return (
        <div className={`ytp-insight ${cls}`}>
            <span className="ytp-insight-icon">{icon}</span>
            <span><b>{title}. </b>{body}</span>
        </div>
    );
}

function PoolIndicator({ result, language, niche }) {
    if (!result || !language || !niche) return null;
    const { nichePool90d, reachPct, wasCapped, maxViews } = result;
    const barWidth = Math.min(100, reachPct * 1000);
    return (
        <div className="ytp-pool">
            <div className="ytp-pool-head">
                <span className="ytp-pool-label">Audience pool</span>
                <span className="ytp-pool-meta">{language.flag} {language.name} · {niche.niche}</span>
            </div>
            <div className="ytp-pool-row">
                <div className="ytp-pool-track">
                    <div className="ytp-pool-fill" style={{ width: `${barWidth}%` }} />
                </div>
                <span className="ytp-pool-pct">{reachPct.toFixed(4)}%</span>
            </div>
            <div className="ytp-pool-sub">
                <span>Pool 90j : <b>{fmtN(nichePool90d)}</b></span>
                <span>Cap : <b>{fmtN(maxViews)}</b></span>
                {wasCapped && <span className="ytp-pool-capped">⚡ cap appliqué</span>}
            </div>
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
        gsap.to(obj, {
            v: target, duration: 1.3, ease: "power3.out", delay,
            onUpdate: () => { if (ref.current) ref.current.textContent = fmtN(obj.v); },
        });
    }, [target]);
    return ref;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN CLIENT COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function PredictorEngine() {
    const [format, setFormat]             = useState("longform");
    const [chartMode, setChartMode]       = useState("cumulative");
    const [result, setResult]             = useState(null);
    const [error, setError]               = useState("");
    const [views, setViews]               = useState("");
    const [durMin, setDurMin]             = useState("");
    const [durSec, setDurSec]             = useState("");
    const [ctr, setCtr]                   = useState("");
    const [retention, setRetention]       = useState("");
    const [impressions, setImpressions]   = useState("");
    const [swipeRate, setSwipeRate]       = useState("");
    const [likes, setLikes]               = useState("");
    const [comments, setComments]         = useState("");
    const [shares, setShares]             = useState("");
    const [subsGained, setSubsGained]     = useState("");
    const [subscribers, setSubscribers]   = useState("");
    const [avgPrevViews, setAvgPrevViews] = useState("");
    const [videoAge, setVideoAge]         = useState("3");
    const [languageId, setLanguageId]     = useState("fr");
    const [nicheId, setNicheId]           = useState("finance");

    const selectedLanguage = languages.find(l => l.id === languageId) ?? languages[0];
    const filteredNiches   = useMemo(
        () => niches.filter(n => n.format === (format === "longform" ? "Long-form" : "Shorts")),
        [format]
    );
    const selectedNiche = useMemo(
        () => filteredNiches.find(n => n.id === nicheId) ?? filteredNiches[0],
        [filteredNiches, nicheId]
    );

    const layoutRef  = useRef(), toggleRef = useRef(), pillRef = useRef(), btnRef = useRef();
    const resultsRef = useRef(), heroRef   = useRef(), metaRef = useRef();
    const chartRef   = useRef(), milRef    = useRef();

    // Page-load animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(layoutRef.current, { opacity: 0, y: 55, scale: .96, duration: 1.05, ease: "expo.out" });
            gsap.from([".ytp-badge", ".ytp-title", ".ytp-sub"],
                { opacity: 0, y: 18, duration: .7, stagger: .08, delay: .38, ease: "power3.out" });
            gsap.from(".ytp-toggle",  { opacity: 0, y: 12, duration: .5, delay: .55, ease: "power2.out" });
            gsap.from(".ytp-field",   { opacity: 0, y: 14, duration: .48, stagger: .052, delay: .62, ease: "power2.out" });
            gsap.from(btnRef.current, { opacity: 0, scale: .88, duration: .5, delay: 1.1, ease: "back.out(2.2)" });
        });
        return () => ctx.revert();
    }, []);

    // Format toggle pill
    useEffect(() => {
        if (!pillRef.current || !toggleRef.current) return;
        const active = [...toggleRef.current.querySelectorAll(".ytp-toggle-btn")]
            .find(b => b.classList.contains("active"));
        if (!active) return;
        const cr = toggleRef.current.getBoundingClientRect(), br = active.getBoundingClientRect();
        gsap.to(pillRef.current, { left: br.left - cr.left, width: br.width, duration: .38, ease: "power3.inOut" });
    }, [format]);

    // Results animation
    useEffect(() => {
        if (!result || !resultsRef.current) return;
        const ctx = gsap.context(() => {
            gsap.timeline()
                .from(resultsRef.current,             { opacity: 0, x: 28, duration: .55, ease: "expo.out" })
                .from(heroRef.current?.children ?? [], { opacity: 0, y: 20, scale: .94, duration: .5, stagger: .1, ease: "power3.out" }, "-=.35")
                .from(metaRef.current?.children ?? [], { opacity: 0, y: 14, scale: .93, duration: .38, stagger: .05, ease: "back.out(1.5)" }, "-=.2")
                .from(".ytp-insight",                  { opacity: 0, x: -14, duration: .38, ease: "power2.out" }, "-=.15")
                .from(".ytp-pool",                     { opacity: 0, y: 10, duration: .32, ease: "power2.out" }, "-=.1")
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
        const first = niches.find(n => n.format === (fmt === "longform" ? "Long-form" : "Shorts"));
        if (first) setNicheId(first.id);
        gsap.fromTo(el, { scale: .92 }, { scale: 1, duration: .38, ease: "back.out(2)" });
        gsap.fromTo(".ytp-field", { opacity: .5 }, { opacity: 1, duration: .35, stagger: .04, ease: "power2.out" });
    }

    function handlePredict() {
        setError(""); animBtn();
        const rv = parseFloat((views + "").replace(/,/g, ""));
        if (!rv || rv <= 0)                        return setError("Please enter a valid view count.");
        const totalSec = parseInt(durMin || 0) * 60 + parseInt(durSec || 0);
        if (totalSec <= 0)                          return setError("Please enter a valid video duration.");
        if (format === "shorts" && totalSec > 180) return setError("Shorts cannot exceed 3 minutes.");
        if (format === "longform") {
            if (!ctr)         return setError("Please enter your CTR (%).");
            if (!retention)   return setError("Please enter your retention rate.");
            if (!impressions) return setError("Please enter impressions.");
        } else {
            if (!swipeRate)   return setError("Please enter your swipe rate (%).");
            if (!retention)   return setError("Please enter your completion rate.");
        }
        if (!likes && !comments && !shares && !subsGained)
            return setError("Please enter at least one engagement metric.");

        setResult(buildPrediction({
            format, currentViews: rv,
            ctr: parseFloat(ctr), retention: parseFloat(retention),
            impressions: parseFloat(impressions), swipeRate: parseFloat(swipeRate),
            likes: parseFloat(likes) || 0, comments: parseFloat(comments) || 0,
            shares: parseFloat(shares) || 0, subsGained: parseFloat(subsGained) || 0,
            avgPrevViews: parseFloat((avgPrevViews + "").replace(/,/g, "")) || 0,
            subscribers:  parseFloat((subscribers  + "").replace(/,/g, "")) || 0,
            videoAge: parseInt(videoAge) || 3,
            language: selectedLanguage, niche: selectedNiche,
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

    // Inline hints
    const ctrH        = ctr       ? ctrHint(parseFloat(ctr))              : null;
    const retH        = retention ? retHint(parseFloat(retention), format) : null;
    const swipeH      = swipeRate ? swipeHint(parseFloat(swipeRate))       : null;
    const totalDurSec = parseInt(durMin || 0) * 60 + parseInt(durSec || 0);
    const durH        = format === "shorts" ? durHintShorts(totalDurSec)   : null;
    const baseViews   = parseFloat((views + "").replace(/,/g, "")) || 0;
    const likesH      = likesHint(parseFloat(likes) || 0, baseViews, format);
    const commentsH   = commentsHint(parseFloat(comments) || 0, baseViews, format);
    const sharesH     = sharesHint(parseFloat(shares) || 0, baseViews);
    const subsH       = subsHint(parseFloat(subsGained) || 0, baseViews, format);

    const ref30 = useCountUp(result?.at30, 0);
    const ref90 = useCountUp(result?.at90, 0.15);
    const ref7  = useCountUp(result?.at7,  0.25);

    function milCls(val) {
        return val >= baseViews * 2 ? "green" : val < baseViews * 0.5 ? "red" : "";
    }

    return (
        <div className="ytp-layout" ref={layoutRef}>

            {/* ── FORM ──────────────────────────────────────────────────────── */}
            <aside className="ytp-form">
                <div>
                    <span className="ytp-badge">YouTube</span>
                    <h1 className="ytp-title">Views Predictor</h1>
                    <p className="ytp-sub">Estimate how your video might perform over the next 90 days</p>
                </div>

                <div className="ytp-toggle" ref={toggleRef}>
                    <div ref={pillRef} className="ytp-toggle-pill" style={{ left: 4, width: "calc(50% - 6px)" }} />
                    {["longform", "shorts"].map(fmt => (
                        <button key={fmt}
                            className={`ytp-toggle-btn ${format === fmt ? "active" : ""}`}
                            onClick={e => switchFormat(fmt, e.currentTarget)}>
                            {fmt === "longform" ? "Long Form" : "Shorts"}
                        </button>
                    ))}
                </div>

                <div className="ytp-row">
                    <div className="ytp-field">
                        <span className="ytp-label">Language / Market</span>
                        <select className="ytp-input ytp-select" value={languageId}
                            onChange={e => { setLanguageId(e.target.value); setResult(null); }}>
                            {languages.map(l => <option key={l.id} value={l.id}>{l.flag} {l.name}</option>)}
                        </select>
                        {selectedLanguage && (
                            <span className="ytp-hint">
                                Monthly audience pool: <b>{fmtN(selectedLanguage.monthlyViews)}</b> views
                            </span>
                        )}
                    </div>
                    <div className="ytp-field">
                        <span className="ytp-label">Niche / Topic</span>
                        <select className="ytp-input ytp-select" value={selectedNiche?.id ?? ""}
                            onChange={e => { setNicheId(e.target.value); setResult(null); }}>
                            {filteredNiches.map(n => <option key={n.id} value={n.id}>{n.niche}</option>)}
                        </select>
                        {selectedNiche && (
                            <span className="ytp-hint">
                                RPM ~${selectedNiche.rpm} · {(selectedNiche.audienceShare * 100).toFixed(1)}% share of audience
                            </span>
                        )}
                    </div>
                </div>

                <div className="ytp-row">
                    <div className="ytp-field">
                        <span className="ytp-label">Subscribers</span>
                        <input className="ytp-input" type="text" inputMode="numeric" placeholder="10,000"
                            value={subscribers}
                            onChange={e => {
                                const d = e.target.value.replace(/\D/g, "");
                                setSubscribers(d ? parseInt(d).toLocaleString("en-US") : "");
                            }} />
                    </div>
                    <div className="ytp-field">
                        <span className="ytp-label">Avg views / video</span>
                        <input className="ytp-input" type="text" inputMode="numeric" placeholder="5,000"
                            value={avgPrevViews}
                            onChange={e => {
                                const d = e.target.value.replace(/\D/g, "");
                                setAvgPrevViews(d ? parseInt(d).toLocaleString("en-US") : "");
                            }} />
                    </div>
                </div>

                <div className="ytp-field">
                    <span className="ytp-label">Video age (days since upload)</span>
                    <input className="ytp-input" type="number" placeholder="3" min="0" max="365"
                        value={videoAge} onChange={e => setVideoAge(e.target.value)} />
                    {videoAge && (
                        <span className="ytp-hint">
                            {videoAge <= 2  ? "🟢 Early window — data is most actionable"      :
                             videoAge <= 7  ? "🟡 First week — algo push still possible"        :
                             videoAge <= 30 ? "⚡ Past peak — long tail projection"              :
                             "📦 Evergreen phase — mostly search and suggested"}
                        </span>
                    )}
                </div>

                <div className="ytp-field">
                    <span className="ytp-label">Current views</span>
                    <input className="ytp-input" type="text" inputMode="numeric" placeholder="10,000"
                        value={views}
                        onChange={e => {
                            const d = e.target.value.replace(/\D/g, "");
                            setViews(d ? parseInt(d).toLocaleString("en-US") : "");
                        }} />
                </div>

                <div className="ytp-field">
                    <span className="ytp-label">
                        {format === "shorts" ? "Duration (max 3:00)" : "Video duration"}
                    </span>
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

                {format === "longform" ? (
                    <>
                        <div className="ytp-row">
                            <div className="ytp-field">
                                <span className="ytp-label">CTR (%)</span>
                                <input
                                    className={`ytp-input ${ctr ? ctrInputCls(parseFloat(ctr)) : ""}`}
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
                            <input
                                className={`ytp-input ${retention ? retInputCls(parseFloat(retention), "longform") : ""}`}
                                type="number" placeholder="45" min="0" max="100" step=".1"
                                value={retention} onChange={e => setRetention(e.target.value)} />
                            {retH && <span className={`ytp-hint ${retH.cls}`}>{retH.msg}</span>}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="ytp-field">
                            <span className="ytp-label">Swipe rate (%)</span>
                            <input
                                className={`ytp-input ${swipeRate ? swipeInputCls(parseFloat(swipeRate)) : ""}`}
                                type="number" placeholder="30" min="0" max="100" step=".1"
                                value={swipeRate} onChange={e => setSwipeRate(e.target.value)} />
                            {swipeH && <span className={`ytp-hint ${swipeH.cls}`}>{swipeH.msg}</span>}
                        </div>
                        <div className="ytp-field">
                            <span className="ytp-label">Completion rate (%)</span>
                            <input
                                className={`ytp-input ${retention ? retInputCls(parseFloat(retention), "shorts") : ""}`}
                                type="number" placeholder="80" min="0" max="200" step=".1"
                                value={retention} onChange={e => setRetention(e.target.value)} />
                            {retention && <span className="ytp-hint">Can exceed 100% with loops 🔁</span>}
                            {retH && <span className={`ytp-hint ${retH.cls}`}>{retH.msg}</span>}
                        </div>
                    </>
                )}

                <div className="ytp-field">
                    <span className="ytp-label">Engagement</span>
                    <div className="ytp-eng-grid">
                        {[
                            { emoji: "👍", label: "Likes",       pts: "×1", val: likes,      set: setLikes      },
                            { emoji: "💬", label: "Comments",    pts: "×3", val: comments,   set: setComments   },
                            { emoji: "↗",  label: "Shares",      pts: "×4", val: shares,     set: setShares     },
                            { emoji: "🔔", label: "Subs gained", pts: "×2", val: subsGained, set: setSubsGained },
                        ].map(({ emoji, label, pts, val, set }, i) => {
                            const hints = [likesH, commentsH, sharesH, subsH][i];
                            return (
                                <div key={label} className="ytp-eng-input-wrap">
                                    <span className="ytp-eng-input-label">
                                        <span>{emoji}</span> {label}
                                        <span className="ytp-eng-pts">{pts}</span>
                                    </span>
                                    <input className="ytp-input" type="number" placeholder="—"
                                        value={val} onChange={e => set(e.target.value)} />
                                    {hints && <span className={`ytp-hint ${hints.cls}`}>{hints.msg}</span>}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {error && <p className="ytp-error">⚠ {error}</p>}

                <button ref={btnRef} className="ytp-btn" onClick={handlePredict}>
                    Predict performance <span className="ytp-btn-arrow">→</span>
                </button>
            </aside>

            {/* ── RESULTS ───────────────────────────────────────────────────── */}
            <main className="ytp-result">
                {!result ? (
                    <div className="ytp-empty">
                        <span className="ytp-empty-icon">📈</span>
                        <p className="ytp-empty-text">
                            Enter your video metrics<br />to project the next 90 days
                        </p>
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
                                <span className="ytp-tag-label">Algorithm signal score</span>
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
                                <span className="ytp-tag-val">{result.daysSince}d</span>
                            </div>
                            <div className={`ytp-tag ${result.engScore > 500 ? "green" : result.engScore < 50 ? "red" : ""}`}>
                                <span className="ytp-tag-label">Engagement score</span>
                                <span className="ytp-tag-val">{result.engScore.toLocaleString()}</span>
                            </div>
                            <div className="ytp-tag">
                                <span className="ytp-tag-label">Video format</span>
                                <span className="ytp-tag-val">{format === "longform" ? "Long Form" : "Shorts"}</span>
                            </div>
                        </div>

                        <AlgoInsight score={result.algoScore} format={format} />
                        <PoolIndicator result={result} language={selectedLanguage} niche={selectedNiche} />

                        <div className="ytp-milestones" ref={milRef}>
                            {[
                                { label: "7 days",  val: result.at7  },
                                { label: "30 days", val: result.at30 },
                                { label: "90 days", val: result.at90 },
                            ].map(m => {
                                const cls = milCls(m.val);
                                return (
                                    <div key={m.label} className={`ytp-milestone ${cls}`}>
                                        <p className="ytp-milestone-day">{m.label}</p>
                                        <p className="ytp-milestone-val"
                                            style={{
                                                color: cls === "green" ? "var(--green)"
                                                     : cls === "red"   ? "var(--red)"
                                                     : "#fff",
                                            }}
                                            ref={el => {
                                                if (!el) return;
                                                const obj = { v: 0 };
                                                gsap.to(obj, {
                                                    v: m.val, duration: 1.25, ease: "power3.out", delay: .4,
                                                    onUpdate: () => { if (el) el.textContent = fmtN(obj.v); },
                                                });
                                            }}
                                        >{fmtN(m.val)}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="ytp-chart-block" ref={chartRef}>
                            <div className="ytp-chart-head">
                                <p className="ytp-chart-title">View curve — 90-day projection</p>
                                <div className="ytp-chart-tabs">
                                    {["cumulative", "daily"].map(m => (
                                        <button key={m}
                                            className={`ytp-chart-tab ${chartMode === m ? "active" : ""}`}
                                            onClick={() => setChartMode(m)}>
                                            {m === "cumulative" ? "Total" : "Daily"}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <ResponsiveContainer width="100%" height={210}>
                                <ComposedChart
                                    data={chartData}
                                    margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
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
                                    <YAxis
                                        tick={{ fill: "#3a3a3a", fontSize: 10, fontFamily: "Poppins" }}
                                        axisLine={false} tickLine={false}
                                        tickFormatter={v => fmtN(v)} width={48} />
                                    <Tooltip
                                        content={<ChartTip mode={chartMode} />}
                                        cursor={{ stroke: "rgba(255,255,255,.06)", strokeWidth: 1 }} />
                                    <ReferenceLine x={result.daysSince}
                                        stroke="rgba(255,255,255,.3)"
                                        strokeDasharray="4 3" strokeWidth={1.5}
                                        label={{
                                            value: "Today", fill: "rgba(255,255,255,.3)",
                                            fontSize: 9, fontFamily: "Poppins", fontWeight: 600,
                                            position: "insideTopRight",
                                        }} />
                                    <Area type="monotoneX" dataKey="past"
                                        stroke="#22c55e" strokeWidth={2} fill="url(#gPast)" dot={false}
                                        activeDot={{ r: 5, fill: "#22c55e", stroke: "#111", strokeWidth: 2 }}
                                        connectNulls />
                                    <Area type="monotoneX" dataKey="future"
                                        stroke="#6366f1" strokeWidth={1.5} strokeDasharray="5 4"
                                        fill="url(#gFut)" dot={false}
                                        activeDot={{ r: 4, fill: "#818cf8", stroke: "#111", strokeWidth: 2 }}
                                        connectNulls />
                                </ComposedChart>
                            </ResponsiveContainer>

                            <div className="ytp-legend">
                                <span className="ytp-legend-item">
                                    <span className="ytp-legend-dot" style={{ background: "#22c55e" }} />
                                    Current data
                                </span>
                                <span className="ytp-legend-item">
                                    <span className="ytp-legend-dot" style={{ background: "#6366f1" }} />
                                    Predicted
                                </span>
                                <span className="ytp-legend-item">
                                    <span style={{
                                        display: "inline-block", width: 0,
                                        borderLeft: "2px dashed rgba(255,255,255,.3)",
                                        height: 12, flexShrink: 0,
                                    }} />
                                    Today
                                </span>
                            </div>
                        </div>

                    </div>
                )}
            </main>
        </div>
    );
}