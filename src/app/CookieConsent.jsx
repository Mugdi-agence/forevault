"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const STORAGE_KEY = "cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 days

function safeReadConsent() {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    // New format: JSON
    if (raw.startsWith("{")) {
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return null;

      return {
        choice: parsed.choice || "essential",
        prefs: {
          analytics: Boolean(parsed.prefs?.analytics),
          marketing: Boolean(parsed.prefs?.marketing),
        },
      };
    }

    // Legacy format: "all" | "essential"
    if (raw === "all" || raw === "essential") {
      return {
        choice: raw,
        prefs: {
          analytics: raw === "all",
          marketing: raw === "all",
        },
      };
    }

    return null;
  } catch {
    return null;
  }
}

function persistConsent(payload) {
  const value = JSON.stringify(payload);
  localStorage.setItem(STORAGE_KEY, value);
  window.__cookieConsent = payload.choice;
  window.__cookieConsentPrefs = payload.prefs;
  document.documentElement.dataset.cookieConsent = payload.choice;

  // First-party cookie so the choice exists outside localStorage too
  document.cookie = `${STORAGE_KEY}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}

function applyGoogleConsent(payload) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const analyticsGranted = payload.choice === "all" || Boolean(payload.prefs?.analytics);
  const marketingGranted = payload.choice === "all" || Boolean(payload.prefs?.marketing);

  window.gtag("consent", "update", {
    analytics_storage: analyticsGranted ? "granted" : "denied",
    ad_storage: marketingGranted ? "granted" : "denied",
    ad_user_data: marketingGranted ? "granted" : "denied",
    ad_personalization: marketingGranted ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

function closeWithAnimation(ref, onDone) {
  if (!ref?.current) {
    onDone?.();
    return;
  }

  gsap.to(ref.current, {
    y: 120,
    opacity: 0,
    filter: "blur(8px)",
    duration: 0.45,
    ease: "power2.in",
    onComplete: onDone,
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: true, marketing: true });

  const bannerRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const saved = safeReadConsent();

    if (saved) {
      window.__cookieConsent = saved.choice;
      window.__cookieConsentPrefs = saved.prefs;
      document.documentElement.dataset.cookieConsent = saved.choice;

      // Keep Google consent in sync on repeat visits
      applyGoogleConsent(saved);
      return;
    }

    const t = window.setTimeout(() => setVisible(true), 800);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible || !bannerRef.current) return;

    gsap.fromTo(
      bannerRef.current,
      { y: 120, opacity: 0, filter: "blur(8px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.7, ease: "expo.out" }
    );
  }, [visible]);

  useEffect(() => {
    if (!detailsRef.current) return;

    if (expanded) {
      gsap.fromTo(
        detailsRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(detailsRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [expanded]);

  function dismiss(payload) {
    persistConsent(payload);
    applyGoogleConsent(payload);

    closeWithAnimation(bannerRef, () => {
      setVisible(false);
    });
  }

  function acceptAll() {
    dismiss({
      choice: "all",
      prefs: { analytics: true, marketing: true },
    });
  }

  function acceptEssential() {
    dismiss({
      choice: "essential",
      prefs: { analytics: false, marketing: false },
    });
  }

  function saveCustom() {
    const choice = prefs.analytics || prefs.marketing ? "custom" : "essential";

    dismiss({
      choice,
      prefs: {
        analytics: Boolean(prefs.analytics),
        marketing: Boolean(prefs.marketing),
      },
    });
  }

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      className="cc-banner"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
    >
      <div className="cc-banner__bar" />

      <div className="cc-banner__inner">
        <div className="cc-banner__left">
          <span className="cc-banner__icon" aria-hidden="true">
            🍪
          </span>
          <div>
            <p className="cc-banner__title">We use cookies</p>
            <p className="cc-banner__desc">
              We use cookies to personalize content, analyze traffic and serve
              relevant ads.{" "}
              <a href="/privacy" className="cc-banner__link">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        <div className="cc-banner__actions">
          <button
            className="cc-btn cc-btn--ghost"
            onClick={() => setExpanded((v) => !v)}
            type="button"
          >
            {expanded ? "Hide options" : "Customize"}
          </button>

          <button
            className="cc-btn cc-btn--outline"
            onClick={acceptEssential}
            type="button"
          >
            Essential only
          </button>

          <button className="cc-btn cc-btn--solid" onClick={acceptAll} type="button">
            Accept all
          </button>
        </div>
      </div>

      <div
        ref={detailsRef}
        className="cc-details"
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
      >
        <div className="cc-details__inner">
          <div className="cc-toggle">
            <div className="cc-toggle__info">
              <p className="cc-toggle__name">Essential cookies</p>
              <p className="cc-toggle__desc">
                Required for the site to function. Cannot be disabled.
              </p>
            </div>
            <div className="cc-toggle__switch cc-toggle__switch--locked" aria-label="Always active">
              <span>Always on</span>
            </div>
          </div>

          <div className="cc-toggle">
            <div className="cc-toggle__info">
              <p className="cc-toggle__name">Analytics cookies</p>
              <p className="cc-toggle__desc">
                Help us understand how visitors interact with the site (Google Analytics).
              </p>
            </div>
            <label className="cc-toggle__switch">
              <input
                type="checkbox"
                checked={prefs.analytics}
                onChange={(e) =>
                  setPrefs((p) => ({ ...p, analytics: e.target.checked }))
                }
              />
              <span className="cc-toggle__track">
                <span className="cc-toggle__thumb" />
              </span>
            </label>
          </div>

          <div className="cc-toggle">
            <div className="cc-toggle__info">
              <p className="cc-toggle__name">Advertising cookies</p>
              <p className="cc-toggle__desc">
                Used to show relevant ads and measure ad performance (Google AdSense).
              </p>
            </div>
            <label className="cc-toggle__switch">
              <input
                type="checkbox"
                checked={prefs.marketing}
                onChange={(e) =>
                  setPrefs((p) => ({ ...p, marketing: e.target.checked }))
                }
              />
              <span className="cc-toggle__track">
                <span className="cc-toggle__thumb" />
              </span>
            </label>
          </div>

          <button
            className="cc-btn cc-btn--solid cc-btn--save"
            onClick={saveCustom}
            type="button"
          >
            Save preferences
          </button>
        </div>
      </div>
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────
// Styles — dark theme cohérent avec le reste du projet
// ─────────────────────────────────────────────────────────────────────────────
const styles = `
    .cc-banner {
        position: fixed;
        bottom: 1.5rem;
        left: 50%;
        transform: translateX(-50%);
        width: min(680px, calc(100vw - 2rem));
        background: #141414;
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 16px;
        box-shadow:
            0 8px 32px rgba(0,0,0,0.6),
            0 0 0 1px rgba(255,255,255,0.04) inset;
        z-index: 9999;
        font-family: 'Poppins', sans-serif;
        overflow: hidden;
    }

    .cc-banner__bar {
        height: 3px;
        background: linear-gradient(90deg, #ff3d3d, #ff7b3d, #ff3d3d);
        background-size: 200% 100%;
        animation: cc-bar-shift 3s linear infinite;
    }

    @keyframes cc-bar-shift {
        0%   { background-position: 0% 0%; }
        100% { background-position: 200% 0%; }
    }

    .cc-banner__inner {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        padding: 1.1rem 1.4rem;
        flex-wrap: wrap;
    }

    .cc-banner__left {
        display: flex;
        align-items: flex-start;
        gap: 0.85rem;
        flex: 1;
        min-width: 220px;
    }

    .cc-banner__icon {
        font-size: 1.5rem;
        line-height: 1;
        margin-top: 2px;
        flex-shrink: 0;
    }

    .cc-banner__title {
        font-size: 0.85rem;
        font-weight: 600;
        color: #fff;
        margin: 0 0 0.2rem;
        letter-spacing: 0.01em;
    }

    .cc-banner__desc {
        font-size: 0.72rem;
        color: rgba(255,255,255,0.45);
        margin: 0;
        line-height: 1.5;
    }

    .cc-banner__link {
        color: #ff3d3d;
        text-decoration: none;
    }
    .cc-banner__link:hover { text-decoration: underline; }

    .cc-banner__actions {
        display: flex;
        gap: 0.6rem;
        flex-shrink: 0;
        flex-wrap: wrap;
        align-items: center;
    }

    /* ── Buttons ── */
    .cc-btn {
        font-family: 'Poppins', sans-serif;
        font-size: 0.72rem;
        font-weight: 600;
        border-radius: 8px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border: none;
        transition: transform 0.15s ease, opacity 0.15s ease, background 0.2s ease;
        white-space: nowrap;
        letter-spacing: 0.02em;
    }
    .cc-btn:hover  { transform: translateY(-1px); }
    .cc-btn:active { transform: translateY(0); opacity: 0.85; }

    .cc-btn--ghost {
        background: transparent;
        color: rgba(255,255,255,0.4);
        border: 1px solid rgba(255,255,255,0.1);
    }
    .cc-btn--ghost:hover { color: rgba(255,255,255,0.7); border-color: rgba(255,255,255,0.2); }

    .cc-btn--outline {
        background: transparent;
        color: rgba(255,255,255,0.75);
        border: 1px solid rgba(255,255,255,0.2);
    }
    .cc-btn--outline:hover { border-color: rgba(255,255,255,0.4); color: #fff; }

    .cc-btn--solid {
        background: #ff3d3d;
        color: #fff;
        border: 1px solid transparent;
    }
    .cc-btn--solid:hover { background: #ff5252; }

    .cc-btn--save {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.65rem;
        font-size: 0.78rem;
    }

    /* ── Details panel ── */
    .cc-details__inner {
        padding: 0 1.4rem 1.2rem;
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .cc-toggle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.85rem 0;
        border-top: 1px solid rgba(255,255,255,0.06);
    }

    .cc-toggle__info { flex: 1; }

    .cc-toggle__name {
        font-size: 0.78rem;
        font-weight: 600;
        color: rgba(255,255,255,0.85);
        margin: 0 0 0.2rem;
    }

    .cc-toggle__desc {
        font-size: 0.68rem;
        color: rgba(255,255,255,0.35);
        margin: 0;
        line-height: 1.5;
    }

    /* Toggle switch */
    .cc-toggle__switch {
        flex-shrink: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .cc-toggle__switch input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    .cc-toggle__track {
        width: 40px;
        height: 22px;
        background: rgba(255,255,255,0.1);
        border-radius: 999px;
        position: relative;
        transition: background 0.25s ease;
        border: 1px solid rgba(255,255,255,0.08);
        display: block;
    }

    .cc-toggle__switch input:checked + .cc-toggle__track {
        background: #ff3d3d;
        border-color: #ff3d3d;
    }

    .cc-toggle__thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        background: #fff;
        border-radius: 50%;
        transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        display: block;
        box-shadow: 0 1px 4px rgba(0,0,0,0.4);
    }

    .cc-toggle__switch input:checked ~ .cc-toggle__track .cc-toggle__thumb,
    .cc-toggle__switch input:checked + .cc-toggle__track .cc-toggle__thumb {
        transform: translateX(18px);
    }

    /* Always-on badge */
    .cc-toggle__switch--locked {
        cursor: default;
    }
    .cc-toggle__switch--locked span {
        font-size: 0.65rem;
        font-weight: 600;
        color: #ff3d3d;
        background: rgba(255,61,61,0.12);
        border: 1px solid rgba(255,61,61,0.25);
        padding: 0.25rem 0.6rem;
        border-radius: 999px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
    }

    /* ── Mobile ── */
    @media (max-width: 560px) {
        .cc-banner {
            bottom: 0;
            left: 0;
            transform: none;
            width: 100%;
            border-radius: 16px 16px 0 0;
        }
        .cc-banner__inner {
            flex-direction: column;
            align-items: flex-start;
        }
        .cc-banner__actions {
            width: 100%;
            justify-content: flex-end;
        }
        .cc-btn--ghost { display: none; }
    }
`;
