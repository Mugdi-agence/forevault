"use client";

import {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
  Suspense,
} from "react";
import { niches, countryRPM } from "./constants";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from "recharts";
import gsap from "gsap";
import html2canvas from "html2canvas";
import "./styles.scss";
import { useSearchParams } from "next/navigation";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────
export const CURRENCIES = [
  { code: "USD", symbol: "$", label: "US Dollar", rate: 1.0 },
  { code: "EUR", symbol: "€", label: "Euro", rate: 0.924 },
  { code: "GBP", symbol: "£", label: "British Pound", rate: 0.791 },
  { code: "CAD", symbol: "C$", label: "Canadian Dollar", rate: 1.362 },
  { code: "AUD", symbol: "A$", label: "Australian Dollar", rate: 1.534 },
  { code: "CHF", symbol: "Fr", label: "Swiss Franc", rate: 0.899 },
  { code: "JPY", symbol: "¥", label: "Japanese Yen", rate: 149.5 },
  { code: "SGD", symbol: "S$", label: "Singapore Dollar", rate: 1.344 },
  { code: "AED", symbol: "د.إ", label: "UAE Dirham", rate: 3.673 },
  { code: "BRL", symbol: "R$", label: "Brazilian Real", rate: 4.97 },
  { code: "INR", symbol: "₹", label: "Indian Rupee", rate: 83.12 },
  { code: "MAD", symbol: "د.م", label: "Moroccan Dirham", rate: 10.06 },
];

const BASE_COUNTRY_MULT = 2.2;

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
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
      result.push({
        ...n,
        id: `${n.id}-long`,
        niche: `${n.niche} (Long-form)`,
        _resolved_format: "Long-form",
      });
      result.push({
        ...n,
        id: `${n.id}-shorts`,
        niche: `${n.niche} (Shorts)`,
        _resolved_format: "Shorts",
      });
    }
  }
  return result;
}

const allNiches = expandNiches(niches);
const sortedCountries = [...countryRPM].sort((a, b) =>
  a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
);

export function toUSD(views, rpm, countryMult, isShorts, retentionRate, durationMin) {
  views = Math.max(0, Number(views) || 0);
  rpm = Math.max(0, Number(rpm) || 0);
  retentionRate = Math.max(0, Math.min(100, Number(retentionRate) || 45));
  durationMin = Math.max(0.1, Number(durationMin) || 0.1);
  countryMult = Math.max(0, Number(countryMult) || BASE_COUNTRY_MULT);

  const countryFactor = countryMult / BASE_COUNTRY_MULT;

  let retentionFactor;
  if (retentionRate >= 45) {
    retentionFactor = 1 + (retentionRate - 45) * 0.005;
  } else {
    retentionFactor = 1 - (45 - retentionRate) * 0.006;
  }
  retentionFactor = Math.max(0.7, Math.min(1.3, retentionFactor));

  if (isShorts) {
    const SHORTS_RATIO = rpm > 10 ? 0.012 : 0.018;
    const geoFactor = 0.7 + countryFactor * 0.3;
    const shortsRPM = rpm * SHORTS_RATIO * geoFactor * retentionFactor;
    return (views / 1000) * shortsRPM;
  }

  let durationFactor;
  if (durationMin < 4) durationFactor = 0.72;
  else if (durationMin < 8) durationFactor = 0.92;
  else if (durationMin < 15) durationFactor = 1.18;
  else if (durationMin < 30) durationFactor = 1.38;
  else durationFactor = 1.55;

  const adjustedRPM = rpm * countryFactor * retentionFactor * durationFactor;
  return (views / 1000) * adjustedRPM;
}

export function getDurationMultiplier(durationMin, isShorts) {
  if (isShorts) return 1.0;
  if (durationMin >= 30) return 1.55;
  if (durationMin >= 15) return 1.38;
  if (durationMin >= 8) return 1.18;
  if (durationMin >= 4) return 0.92;
  return 0.72;
}

export function convert(usd, currency) {
  return usd * currency.rate;
}

export function fmt(amount, currency) {
  const n =
    Math.abs(amount) >= 1000
      ? amount.toLocaleString("en-US", { maximumFractionDigits: 0 })
      : Number(amount).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
  return `${currency.symbol}${n}`;
}

function fmtDuration(totalSec) {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function getViewsBracket(views) {
  if (views < 1_000) return "<1k";
  if (views < 10_000) return "1k–10k";
  if (views < 100_000) return "10k–100k";
  if (views < 1_000_000) return "100k–1M";
  if (views < 10_000_000) return "1M–10M";
  return "10M+";
}

// ─────────────────────────────────────────────────────────────────────────────
// Hooks & sub-components
// ─────────────────────────────────────────────────────────────────────────────
function useCountUp(target, currency) {
  const spanRef = useRef(null);
  const objRef = useRef({ val: 0 });

  useEffect(() => {
    if (!spanRef.current || target === 0) return;
    gsap.killTweensOf(objRef.current);
    gsap.to(objRef.current, {
      val: target,
      duration: 1.2,
      ease: "power3.out",
      onUpdate() {
        if (spanRef.current) {
          spanRef.current.textContent = fmt(objRef.current.val, currency);
        }
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

// ─────────────────────────────────────────────────────────────────────────────
// CalculatorInner
// ─────────────────────────────────────────────────────────────────────────────
function CalculatorInner() {
  const viewsRef = useRef(null);
  const countryRef = useRef(null);
  const formatRef = useRef(null);
  const retentionRef = useRef(null);
  const nichesRef = useRef(null);
  const durationMinRef = useRef(null);
  const durationSecRef = useRef(null);

  const layoutRef = useRef(null);
  const resultsRef = useRef(null);
  const heroRef = useRef(null);
  const metaRef = useRef(null);
  const chartRef = useRef(null);

  const shareCardRef = useRef(null);
  const shareBackdropRef = useRef(null);
  const sharePanelRef = useRef(null);
  const shareEnterTlRef = useRef(null);
  const shareExitRunningRef = useRef(false);
  const shareOpenRef = useRef(false);

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [rawViews, setRawViews] = useState("");
  const [isShorts, setIsShorts] = useState(false);

  const [shareOpen, setShareOpen] = useState(false);
  const [shareImage, setShareImage] = useState("");
  const [shareBusy, setShareBusy] = useState(false);
  const [shareError, setShareError] = useState("");
  const [shareCopyHint, setShareCopyHint] = useState(null);

  shareOpenRef.current = shareOpen;

  const searchParams = useSearchParams();

  const closeShareModal = useCallback(() => {
    if (!shareOpenRef.current || shareExitRunningRef.current) return;

    shareEnterTlRef.current?.kill();
    shareEnterTlRef.current = null;

    const backdrop = shareBackdropRef.current;
    const panel = sharePanelRef.current;
    if (!backdrop || !panel) {
      setShareOpen(false);
      return;
    }

    shareExitRunningRef.current = true;
    gsap.killTweensOf([backdrop, panel]);

    gsap
      .timeline({
        onComplete: () => {
          shareExitRunningRef.current = false;
          setShareOpen(false);
        },
      })
      .to(
        backdrop,
        { opacity: 0, duration: 0.22, ease: "power2.in" },
        0
      )
      .to(
        panel,
        {
          opacity: 0,
          y: 22,
          scale: 0.96,
          duration: 0.28,
          ease: "power3.in",
        },
        0
      );
  }, []);

  const visibleNiches = useMemo(
    () =>
      allNiches.filter((n) =>
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
      const exists = visibleNiches.find((n) => n.id === nicheParam);
      if (exists) nichesRef.current.value = nicheParam;
    }
  }, [searchParams, visibleNiches]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(layoutRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.97,
        duration: 0.9,
        ease: "expo.out",
      });
      gsap.from(".panel__head", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 0.35,
        ease: "power3.out",
      });
      gsap.from(".field", {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.07,
        delay: 0.5,
        ease: "power2.out",
      });
      gsap.from(".currency-grid", {
        opacity: 0,
        y: 10,
        duration: 0.5,
        delay: 0.85,
        ease: "power2.out",
      });
      gsap.from(".form__btn", {
        opacity: 0,
        scale: 0.95,
        duration: 0.45,
        delay: 1.0,
        ease: "back.out(1.7)",
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!result || !resultsRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(resultsRef.current, {
        opacity: 0,
        x: 30,
        duration: 0.6,
        ease: "expo.out",
      });
      gsap.from(heroRef.current?.children ?? [], {
        opacity: 0,
        y: 20,
        scale: 0.96,
        duration: 0.55,
        stagger: 0.08,
        delay: 0.1,
        ease: "power3.out",
      });
      gsap.from(".meta-tag", {
        opacity: 0,
        y: 12,
        scale: 0.94,
        duration: 0.45,
        stagger: 0.06,
        delay: 0.25,
        ease: "back.out(1.5)",
      });
      gsap.from(chartRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.55,
        delay: 0.5,
        ease: "power3.out",
      });
      gsap.from(".recharts-bar-rectangle", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.7,
        stagger: 0.04,
        delay: 0.6,
        ease: "expo.out",
      });
    }, resultsRef);
    return () => ctx.revert();
  }, [result]);

  useLayoutEffect(() => {
    if (!shareOpen) return;

    const backdrop = shareBackdropRef.current;
    const panel = sharePanelRef.current;
    if (!backdrop || !panel) return;

    gsap.killTweensOf([backdrop, panel]);
    gsap.set(backdrop, { opacity: 0 });
    gsap.set(panel, { opacity: 0, y: 32, scale: 0.93 });

    const tl = gsap.timeline();
    shareEnterTlRef.current = tl;

    tl.to(backdrop, {
      opacity: 1,
      duration: 0.38,
      ease: "power2.out",
    }).to(
      panel,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.48,
        ease: "back.out(1.12)",
      },
      "-=0.24"
    );

    return () => {
      tl.kill();
      if (shareEnterTlRef.current === tl) shareEnterTlRef.current = null;
    };
  }, [shareOpen]);

  useEffect(() => {
    if (!shareOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeShareModal();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [shareOpen, closeShareModal]);

  useEffect(() => {
    if (!shareOpen) setShareCopyHint(null);
  }, [shareOpen]);

  function handleCurrencyChange(cur) {
    setCurrency(cur);
    gsap.from(".hero__amount", {
      opacity: 0,
      y: -8,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.out",
    });

    if (result && typeof gtag === "function") {
      gtag("event", "calculator_currency_change", {
        currency_from: currency.code,
        currency_to: cur.code,
        niche_label: result.niche,
        video_format: result.format,
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
    if (shorts && parseInt(durationMinRef.current?.value || "0", 10) >= 3) {
      if (durationMinRef.current) durationMinRef.current.value = "3";
      if (durationSecRef.current) durationSecRef.current.value = "0";
    }
  }

  function handleCalculate() {
    setError("");

    gsap
      .timeline()
      .to(".form__btn", { scale: 0.96, duration: 0.1, ease: "power2.in" })
      .to(".form__btn", { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" });

    const views = parseFloat(rawViews.replace(/,/g, ""));
    const retentionRate = parseFloat(retentionRef.current?.value || "");
    const nicheId = nichesRef.current?.value || "";
    const countryId = countryRef.current?.value || "";
    const shorts = isShorts;
    const durMin = parseInt(durationMinRef.current?.value || "0", 10);
    const durSec = parseInt(durationSecRef.current?.value || "0", 10);
    const totalDurSec = durMin * 60 + durSec;
    const totalDurMin = totalDurSec / 60;

    if (!views || views <= 0) return setError("Please enter a valid view count.");
    if (!nicheId) return setError("Please select a niche.");
    if (!countryId) return setError("Please select a geography.");
    if (isNaN(retentionRate) || retentionRate < 0 || retentionRate > 100) {
      return setError("Retention rate must be between 0 and 100.");
    }
    if (totalDurSec <= 0) return setError("Please enter a valid video duration.");
    if (shorts && totalDurMin > 3) return setError("Shorts cannot exceed 3 minutes.");

    const nicheData = visibleNiches.find((n) => n.id === nicheId);
    const countryData = sortedCountries.find((c) => c.id === countryId);

    if (!nicheData) return setError("Selected niche is not available for this format.");
    if (!countryData) return setError("Selected geography is not available.");

    const earningsUSD = toUSD(
      views,
      nicheData.rpm,
      countryData.multiplier,
      shorts,
      retentionRate,
      totalDurMin
    );

    const adSlots = shorts
      ? "none"
      : totalDurMin >= 15
      ? "2_midrolls"
      : totalDurMin >= 8
      ? "1_midroll"
      : "pre_roll_only";

    if (typeof gtag === "function") {
      gtag("event", "calculator_run", {
        video_format: shorts ? "shorts" : "long_form",
        niche_id: nicheId,
        niche_label: nicheData.niche,
        niche_faceless: nicheData.faceless ?? "unknown",
        country_id: countryId,
        country_label: countryData.name,
        views_bracket: getViewsBracket(views),
        retention_rate: retentionRate,
        duration_sec: totalDurSec,
        ad_slots: adSlots,
        estimated_usd: Math.round(earningsUSD * 100) / 100,
        effective_rpm:
          Math.round(
            toUSD(1000, nicheData.rpm, countryData.multiplier, shorts, retentionRate, totalDurMin) *
              100
          ) / 100,
        display_currency: currency.code,
      });
    }

    const allNicheEarnings = visibleNiches
      .map((n) => ({
        id: n.id,
        name: n.niche.length > 18 ? n.niche.slice(0, 16) + "…" : n.niche,
        fullName: n.niche,
        earningsUSD: toUSD(views, n.rpm, countryData.multiplier, shorts, retentionRate, totalDurMin),
        isSelected: n.id === nicheId,
      }))
      .sort((a, b) => b.earningsUSD - a.earningsUSD);

    const averageUSD =
      allNicheEarnings.reduce((s, n) => s + n.earningsUSD, 0) / allNicheEarnings.length;

    const durationLabel = fmtDuration(totalDurSec);
    const midrollNote =
      !shorts && totalDurMin >= 8
        ? totalDurMin >= 15
          ? "2 mid-rolls"
          : "1 mid-roll"
        : "Pre-roll only";

    const retentionFactor = Math.max(
      0.7,
      Math.min(
        1.3,
        retentionRate >= 45 ? 1 + (retentionRate - 45) * 0.005 : 1 - (45 - retentionRate) * 0.006
      )
    );
    const countryFactor = countryData.multiplier / BASE_COUNTRY_MULT;

    let effectiveRPMusd;
    if (shorts) {
      const SHORTS_RATIO = nicheData.rpm > 10 ? 0.017 : 0.025;
      const geoFactor = 0.7 + countryFactor * 0.3;
      effectiveRPMusd = nicheData.rpm * SHORTS_RATIO * geoFactor * retentionFactor;
    } else {
      effectiveRPMusd =
        nicheData.rpm * countryFactor * retentionFactor * getDurationMultiplier(totalDurMin, shorts);
    }

    setResult({
      earningsUSD,
      effectiveRPMusd,
      niche: nicheData.niche,
      country: countryData.name,
      format: shorts ? "Shorts" : "Long Form",
      views,
      retentionRate,
      averageUSD,
      allNicheEarnings,
      durationLabel,
      midrollNote,
    });
  }

  const displayEarnings = result ? convert(result.earningsUSD, currency) : 0;
  const displayAverage = result ? convert(result.averageUSD, currency) : 0;
  const displayRPM = result ? convert(result.effectiveRPMusd, currency) : 0;

  const chartData = result
    ? result.allNicheEarnings.map((n) => ({
        ...n,
        earnings: parseFloat(convert(n.earningsUSD, currency).toFixed(2)),
      }))
    : [];

  const earningsRef = useCountUp(displayEarnings, currency);
  const avgRef = useCountUp(displayAverage, currency);
  const rpmRef = useCountUp(displayRPM, currency);

  function getSharePageUrl() {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }

  function getShareText() {
    if (!result) return "";
    const url = getSharePageUrl();
    return [
      `J’ai estimé mes revenus YouTube !`,
      `• Gains estimés : ${fmt(displayEarnings, currency)}`,
      `• Niche : ${result.niche}`,
      `• Pays : ${result.country}`,
      `• Format : ${result.format}`,
      `• Views : ${result.views.toLocaleString("en-US")}`,
      `• Retention : ${result.retentionRate}%`,
      `• Durée : ${result.durationLabel}`,
      "",
      url,
    ].join("\n");
  }

  /** Texte court + lien (limites de caractères sur X, WhatsApp, etc.) */
  function getShareCompactText() {
    if (!result) return "";
    const url = getSharePageUrl();
    const nicheShort = result.niche.length > 44 ? `${result.niche.slice(0, 42)}…` : result.niche;
    return `Revenus YouTube estimés : ${fmt(displayEarnings, currency)} · ${nicheShort}\n${url}`;
  }

  function getShareTelegramTitle() {
    if (!result) return "";
    return `Revenus estimés : ${fmt(displayEarnings, currency)} — ${result.niche}`;
  }

  async function generateShareImage() {
    if (!shareCardRef.current) throw new Error("Share card not found");

    const canvas = await html2canvas(shareCardRef.current, {
      backgroundColor: "#111111",
      scale: 2,
      useCORS: true,
      logging: false,
    });

    return canvas.toDataURL("image/png");
  }

  async function openSharePopup() {
    if (!result) return;
    setShareBusy(true);
    setShareError("");

    try {
      const img = await generateShareImage();
      setShareImage(img);
      setShareOpen(true);
    } catch (err) {
      console.error(err);
      setShareError("Impossible de générer l’image.");
    } finally {
      setShareBusy(false);
    }
  }

  async function shareNatively() {
    const url = getSharePageUrl();
    if (!navigator.share) {
      try {
        await navigator.clipboard.writeText(getShareCompactText());
        setShareCopyHint("text");
        window.setTimeout(() => setShareCopyHint((h) => (h === "text" ? null : h)), 2500);
      } catch {
        /* ignore */
      }
      return;
    }

    try {
      if (shareImage) {
        const blob = await fetch(shareImage).then((r) => r.blob());
        const file = new File([blob], "forevault-youtube-revenue.png", { type: "image/png" });
        const payload = {
          title: "Mes revenus YouTube (Forevault)",
          text: getShareCompactText(),
          url,
          files: [file],
        };

        if (navigator.canShare?.({ files: [file] })) {
          await navigator.share(payload);
          return;
        }
      }

      await navigator.share({
        title: "Mes revenus YouTube (Forevault)",
        text: getShareCompactText(),
        url,
      });
    } catch (e) {
      if (e?.name === "AbortError") return;
      try {
        await navigator.clipboard.writeText(getShareCompactText());
        setShareCopyHint("text");
        window.setTimeout(() => setShareCopyHint((h) => (h === "text" ? null : h)), 2500);
      } catch {
        /* ignore */
      }
    }
  }

  async function copyShareText() {
    try {
      await navigator.clipboard.writeText(getShareText());
      setShareCopyHint("text");
      window.setTimeout(() => setShareCopyHint((h) => (h === "text" ? null : h)), 2500);
    } catch {
      setShareCopyHint("err");
      window.setTimeout(() => setShareCopyHint(null), 2800);
    }
  }

  async function copyShareUrl() {
    const url = getSharePageUrl();
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setShareCopyHint("link");
      window.setTimeout(() => setShareCopyHint((h) => (h === "link" ? null : h)), 2500);
    } catch {
      setShareCopyHint("err");
      window.setTimeout(() => setShareCopyHint(null), 2800);
    }
  }

  function downloadShareImage() {
    if (!shareImage || typeof document === "undefined") return;
    const a = document.createElement("a");
    a.href = shareImage;
    a.download = "forevault-youtube-revenue.png";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <div className="appl">
      <div className="page">
        <div className="layout" ref={layoutRef}>
          <aside className="panel panel--form">
            <div className="panel__head">
              <span className="panel__badge">Engine v1.5</span>
              <h1 className="panel__title">YouTube Revenue Calculator</h1>
              <p className="panel__sub">Estimate your YouTube earnings</p>
            </div>

            <div className="form">
              <Field label="Views">
                <input
                  ref={viewsRef}
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
                  <select ref={formatRef} className="field__input" onChange={handleFormatChange}>
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
                  {!isShorts && <p className="field__hint">≥ 8 min unlocks mid-roll ads</p>}
                </Field>
              </div>

              <Field label="Niche">
                <select ref={nichesRef} className="field__input" defaultValue="">
                  <option value="" disabled>
                    Select a niche…
                  </option>
                  {visibleNiches.map((n) => (
                    <option key={n.id} value={n.id}>
                      {n.topic}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Geography">
                <select ref={countryRef} className="field__input" defaultValue="">
                  <option value="" disabled>
                    Country…
                  </option>
                  {sortedCountries.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Display currency">
                <div className="currency-grid">
                  {CURRENCIES.map((cur) => (
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
                <span className="empty-state__icon">
                  <AlignVerticalBottomIcon />
                </span>
                <p className="empty-state__text">
                  Fill in the form on the left
                  <br />
                  to see your revenue estimate
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
                  <MetaTag label="Niche" value={result.niche} />
                  <MetaTag label="Country" value={result.country} />
                  <MetaTag label="Format" value={result.format} />
                  <MetaTag label="Views" value={result.views.toLocaleString("en-US")} />
                  <MetaTag label="Retention" value={`${result.retentionRate}%`} />
                  <MetaTag label="Duration" value={result.durationLabel} />
                  <MetaTag label="Ad slots" value={result.midrollNote} highlight />
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
                        tickFormatter={(v) => `${currency.symbol}${v}`}
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
                        {chartData.map((entry) => (
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
                      <span className="chart-legend__dot chart-legend__dot--selected" />
                      Your niche
                    </span>
                    <span className="chart-legend__item">
                      <span className="chart-legend__dot chart-legend__dot--other" />
                      Other niches
                    </span>
                    <span className="chart-legend__item">
                      <span className="chart-legend__dot chart-legend__dot--avg" />
                      Average
                    </span>
                  </div>
                  <button
                    className="form__btn chart-block__share-btn"
                    type="button"
                    onClick={openSharePopup}
                    disabled={!result || shareBusy}
                  >
                    {shareBusy ? "Generating…" : "Share result"}
               
                  </button>

              {shareError && <p className="form__error">⚠ {shareError}</p>}
                </div>
              </div>
            )}
          </main>
        </div>

        {result && (
          <div
            ref={shareCardRef}
            className="layout"
            style={{
              position: "fixed",
              left: "-10000px",
              top: 0,
              width: "1000px",
            }}
          >
            <aside className="panel panel--form">
              <div className="panel__head">
                <span className="panel__badge">Engine v1.5</span>
                <h1 className="panel__title">YouTube Revenue Calculator</h1>
                <p className="panel__sub">Estimate your YouTube earnings</p>
              </div>

              <div className="form">
                <Field label="Views">
                  <div className="field__input">{result.views.toLocaleString("en-US")}</div>
                </Field>

                <Field label="Retention (%)">
                  <div className="field__input">{result.retentionRate}%</div>
                </Field>

                <div className="form__row">
                  <Field label="Format">
                    <div className="field__input">{result.format}</div>
                  </Field>

                  <Field label="Duration">
                    <div className="field__input">{result.durationLabel}</div>
                  </Field>
                </div>

                <Field label="Niche">
                  <div className="field__input">{result.niche}</div>
                </Field>

                <Field label="Geography">
                  <div className="field__input">{result.country}</div>
                </Field>

                <Field label="Display currency">
                  <div className="currency-grid">
                    {CURRENCIES.slice(0, 4).map((cur) => (
                      <div
                        key={cur.code}
                        className={`currency-btn ${currency.code === cur.code ? "currency-btn--active" : ""}`}
                      >
                        <span className="currency-btn__symbol">{cur.symbol}</span>
                        <span className="currency-btn__code">{cur.code}</span>
                      </div>
                    ))}
                  </div>
                </Field>

                <div className="form__btn" style={{ marginTop: "auto" }}>
                  Share preview
                </div>
              </div>
            </aside>

            <main className="panel panel--result">
              <div className="results">
                <div className="hero">
                  <div className="hero__block">
                    <p className="hero__label">Estimated earnings</p>
                    <p className="hero__amount">{fmt(displayEarnings, currency)}</p>
                  </div>
                  <div className="hero__sep" />
                  <div className="hero__block">
                    <p className="hero__label">All-niche average</p>
                    <p className="hero__amount hero__amount--muted">
                      {fmt(displayAverage, currency)}
                    </p>
                  </div>
                </div>

                <div className="meta-grid">
                  <MetaTag label="Effective RPM" highlight>
                    {fmt(displayRPM, currency)}
                  </MetaTag>
                  <MetaTag label="Niche" value={result.niche} />
                  <MetaTag label="Country" value={result.country} />
                  <MetaTag label="Format" value={result.format} />
                  <MetaTag label="Views" value={result.views.toLocaleString("en-US")} />
                  <MetaTag label="Retention" value={`${result.retentionRate}%`} />
                  <MetaTag label="Duration" value={result.durationLabel} />
                  <MetaTag label="Ad slots" value={result.midrollNote} highlight />
                </div>

                <div className="chart-block">
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
                        tickFormatter={(v) => `${currency.symbol}${v}`}
                      />
                      <Tooltip
                        content={<CustomTooltip currency={currency} />}
                        cursor={{ fill: "rgba(255,255,255,0.03)" }}
                      />
                      <ReferenceLine
                        y={parseFloat(convert(result.averageUSD, currency).toFixed(2))}
                        stroke="rgba(255,255,255,0.25)"
                        strokeDasharray="4 3"
                      />
                      <Bar dataKey="earnings" radius={[4, 4, 0, 0]}>
                        {chartData.map((entry) => (
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
                      <span className="chart-legend__dot chart-legend__dot--selected" />
                      Your niche
                    </span>
                    <span className="chart-legend__item">
                      <span className="chart-legend__dot chart-legend__dot--other" />
                      Other niches
                    </span>
                    <span className="chart-legend__item">
                      <span className="chart-legend__dot chart-legend__dot--avg" />
                      Average
                    </span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        )}

        {shareOpen && (
          <div
            className="share-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-modal-title"
          >
            <button
              ref={shareBackdropRef}
              type="button"
              className="share-modal__backdrop"
              aria-label="Close sharing window"
              onClick={closeShareModal}
            />
            <div ref={sharePanelRef} className="share-modal__panel">
              <header className="share-modal__head">
                <div className="share-modal__intro">
                  <span className="share-modal__badge">Share</span>
                  <h2 id="share-modal-title" className="share-modal__title">
                    Share result
                  </h2>
                  <p className="share-modal__sub">
                    Share your results with everyone
               
                  </p>
                </div>
                <button
                  type="button"
                  className="share-modal__close"
                  onClick={closeShareModal}
                  aria-label="Close"
                >
                  ✕
                </button>
              </header>

              {shareCopyHint === "text" && (
                <p className="share-modal__hint share-modal__hint--ok" role="status">
                  Text copied to clipboard.
                </p>
              )}
              {shareCopyHint === "link" && (
                <p className="share-modal__hint share-modal__hint--ok" role="status">
                  Link copied.
                </p>
              )}
              {shareCopyHint === "err" && (
                <p className="share-modal__hint share-modal__hint--err" role="alert">
                  Copy failed (browser permissions).
                </p>
              )}

              <div className="share-modal__preview">
                {shareImage ? (
                  <img
                    className="share-modal__img"
                    src={shareImage}
                    alt="Preview of the card to share"
                  />
                ) : (
                  <div className="share-modal__preview-skeleton" aria-hidden />
                )}
              </div>

              <p className="share-modal__section-label">Quick actions</p>
              <div className="share-modal__row share-modal__row--primary">
                <button
                  type="button"
                  className="share-modal__btn share-modal__btn--primary"
                  onClick={shareNatively}
                >
                  Native share
                </button>
                <button
                  type="button"
                  className="share-modal__btn share-modal__btn--secondary"
                  onClick={downloadShareImage}
                  disabled={!shareImage}
                >
                  Download image
                </button>
                <button
                  type="button"
                  className="share-modal__btn share-modal__btn--secondary"
                  onClick={copyShareText}
                >
                  Copy detail
                </button>
                <button
                  type="button"
                  className="share-modal__btn share-modal__btn--secondary"
                  onClick={copyShareUrl}
                >
                  Copy link
                </button>
              </div>
            </div>
          </div>
        )}
 
      </div>
    </div>
  );
}

export default function RevenueEngine() {
  return (
    <Suspense
      fallback={
        <div className="appl">
          <div
            className="page"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "60vh",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>Loading…</p>
          </div>
        </div>
      }
    >
      <CalculatorInner />
    </Suspense>
  );
}