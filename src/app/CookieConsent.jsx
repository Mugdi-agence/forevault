"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// ── i18n ──────────────────────────────────────────────────────────────────────
const CONSENT_I18N = {
  en: {
    title: "We use cookies",
    desc: "We use cookies to personalise content, analyse traffic and serve relevant ads.",
    privacy: "Privacy Policy",
    customize: "Customize",
    hide: "Hide options",
    essential_only: "Essential only",
    accept_all: "Accept all",
    save: "Save preferences",
    essential_label: "Essential cookies",
    essential_desc: "Required for the site to function. Cannot be disabled.",
    always_on: "Always on",
    analytics_label: "Analytics cookies",
    analytics_desc: "Help us understand how visitors interact with the site (Google Analytics).",
    marketing_label: "Advertising cookies",
    marketing_desc: "Used to show relevant ads and measure ad performance (Google AdSense).",
  },
  fr: {
    title: "Nous utilisons des cookies",
    desc: "Nous utilisons des cookies pour personnaliser le contenu, analyser le trafic et diffuser des publicités pertinentes.",
    privacy: "Politique de confidentialité",
    customize: "Personnaliser",
    hide: "Masquer les options",
    essential_only: "Essentiels uniquement",
    accept_all: "Tout accepter",
    save: "Enregistrer mes préférences",
    essential_label: "Cookies essentiels",
    essential_desc: "Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés.",
    always_on: "Toujours actif",
    analytics_label: "Cookies analytiques",
    analytics_desc: "Nous aident à comprendre comment les visiteurs interagissent avec le site (Google Analytics).",
    marketing_label: "Cookies publicitaires",
    marketing_desc: "Utilisés pour afficher des annonces pertinentes et mesurer leurs performances (Google AdSense).",
  },
  es: {
    title: "Usamos cookies",
    desc: "Usamos cookies para personalizar el contenido, analizar el tráfico y mostrar anuncios relevantes.",
    privacy: "Política de privacidad",
    customize: "Personalizar",
    hide: "Ocultar opciones",
    essential_only: "Solo esenciales",
    accept_all: "Aceptar todo",
    save: "Guardar preferencias",
    essential_label: "Cookies esenciales",
    essential_desc: "Necesarias para el funcionamiento del sitio. No se pueden desactivar.",
    always_on: "Siempre activo",
    analytics_label: "Cookies analíticas",
    analytics_desc: "Nos ayudan a entender cómo los visitantes interactúan con el sitio (Google Analytics).",
    marketing_label: "Cookies publicitarias",
    marketing_desc: "Usadas para mostrar anuncios relevantes y medir su rendimiento (Google AdSense).",
  },
  de: {
    title: "Wir verwenden Cookies",
    desc: "Wir verwenden Cookies zur Personalisierung von Inhalten, Analyse des Traffics und zur Schaltung relevanter Werbung.",
    privacy: "Datenschutzerklärung",
    customize: "Anpassen",
    hide: "Optionen ausblenden",
    essential_only: "Nur Wesentliche",
    accept_all: "Alle akzeptieren",
    save: "Einstellungen speichern",
    essential_label: "Essentielle Cookies",
    essential_desc: "Für den Betrieb der Website erforderlich. Können nicht deaktiviert werden.",
    always_on: "Immer aktiv",
    analytics_label: "Analyse-Cookies",
    analytics_desc: "Helfen uns zu verstehen, wie Besucher mit der Website interagieren (Google Analytics).",
    marketing_label: "Werbe-Cookies",
    marketing_desc: "Werden verwendet, um relevante Anzeigen zu schalten und die Anzeigenleistung zu messen (Google AdSense).",
  },
  pt: {
    title: "Usamos cookies",
    desc: "Usamos cookies para personalizar conteúdo, analisar tráfego e exibir anúncios relevantes.",
    privacy: "Política de Privacidade",
    customize: "Personalizar",
    hide: "Ocultar opções",
    essential_only: "Apenas essenciais",
    accept_all: "Aceitar tudo",
    save: "Salvar preferências",
    essential_label: "Cookies essenciais",
    essential_desc: "Necessários para o funcionamento do site. Não podem ser desativados.",
    always_on: "Sempre ativo",
    analytics_label: "Cookies analíticos",
    analytics_desc: "Nos ajudam a entender como os visitantes interagem com o site (Google Analytics).",
    marketing_label: "Cookies publicitários",
    marketing_desc: "Usados para exibir anúncios relevantes e medir o desempenho dos anúncios (Google AdSense).",
  },
  ja: {
    title: "クッキーを使用しています",
    desc: "コンテンツのパーソナライズ、トラフィック分析、および関連広告の配信のためにクッキーを使用しています。",
    privacy: "プライバシーポリシー",
    customize: "カスタマイズ",
    hide: "オプションを非表示",
    essential_only: "必須のみ",
    accept_all: "すべて許可",
    save: "設定を保存",
    essential_label: "必須クッキー",
    essential_desc: "サイトの機能に必要です。無効にすることはできません。",
    always_on: "常にオン",
    analytics_label: "分析クッキー",
    analytics_desc: "訪問者がサイトとどのように関わっているかを理解するのに役立ちます (Google Analytics)。",
    marketing_label: "広告クッキー",
    marketing_desc: "関連する広告を表示し、広告のパフォーマンスを測定するために使用されます (Google AdSense)。",
  },
  ko: {
    title: "쿠키를 사용합니다",
    desc: "콘텐츠 개인화, 트래픽 분석 및 관련 광고 게재를 위해 쿠키를 사용합니다.",
    privacy: "개인정보 처리방침",
    customize: "맞춤설정",
    hide: "옵션 숨기기",
    essential_only: "필수만",
    accept_all: "모두 허용",
    save: "환경설정 저장",
    essential_label: "필수 쿠키",
    essential_desc: "사이트 기능에 필요합니다. 비활성화할 수 없습니다.",
    always_on: "항상 활성",
    analytics_label: "분석 쿠키",
    analytics_desc: "방문자가 사이트와 어떻게 상호작용하는지 이해하는 데 도움이 됩니다 (Google Analytics).",
    marketing_label: "광고 쿠키",
    marketing_desc: "관련 광고를 게재하고 광고 성과를 측정하는 데 사용됩니다 (Google AdSense).",
  },
};

// ── Storage helpers ───────────────────────────────────────────────────────────
const STORAGE_KEY  = "cookie_consent";
const COOKIE_MAX   = 60 * 60 * 24 * 180; // 180 days

function safeReadConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    if (raw.startsWith("{")) {
      const p = JSON.parse(raw);
      if (!p || typeof p !== "object") return null;
      return { choice: p.choice || "essential", prefs: { analytics: Boolean(p.prefs?.analytics), marketing: Boolean(p.prefs?.marketing) } };
    }
    if (raw === "all" || raw === "essential") {
      return { choice: raw, prefs: { analytics: raw === "all", marketing: raw === "all" } };
    }
    return null;
  } catch { return null; }
}

function persistConsent(payload) {
  const value = JSON.stringify(payload);
  localStorage.setItem(STORAGE_KEY, value);
  window.__cookieConsent = payload.choice;
  window.__cookieConsentPrefs = payload.prefs;
  document.documentElement.dataset.cookieConsent = payload.choice;
  document.cookie = `${STORAGE_KEY}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX}; samesite=lax`;
}

function applyGoogleConsent(payload) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const a = payload.choice === "all" || Boolean(payload.prefs?.analytics);
  const m = payload.choice === "all" || Boolean(payload.prefs?.marketing);
  window.gtag("consent", "update", {
    analytics_storage: a ? "granted" : "denied",
    ad_storage: m ? "granted" : "denied",
    ad_user_data: m ? "granted" : "denied",
    ad_personalization: m ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function CookieConsent({ lang = "en" }) {
  const t = CONSENT_I18N[lang] ?? CONSENT_I18N.en;

  const [visible,  setVisible]  = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs,    setPrefs]    = useState({ analytics: true, marketing: true });

  const bannerRef  = useRef(null);
  const detailsRef = useRef(null);

  // Mount — check existing consent
  useEffect(() => {
    const saved = safeReadConsent();
    if (saved) {
      window.__cookieConsent = saved.choice;
      window.__cookieConsentPrefs = saved.prefs;
      document.documentElement.dataset.cookieConsent = saved.choice;
      applyGoogleConsent(saved);
      return;
    }
    const tid = window.setTimeout(() => setVisible(true), 900);
    return () => window.clearTimeout(tid);
  }, []);

  // Entrance animation
  useEffect(() => {
    if (!visible || !bannerRef.current) return;
    gsap.fromTo(bannerRef.current,
      { y: 30, opacity: 0, filter: "blur(8px)", scale: 0.97 },
      { y: 0,  opacity: 1, filter: "blur(0px)", scale: 1, duration: 0.65, ease: "expo.out" }
    );
  }, [visible]);

  // Expand / collapse details
  useEffect(() => {
    if (!detailsRef.current) return;
    if (expanded) {
      gsap.fromTo(detailsRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.38, ease: "power3.out" }
      );
    } else {
      gsap.to(detailsRef.current, { height: 0, opacity: 0, duration: 0.28, ease: "power2.in" });
    }
  }, [expanded]);

  function dismiss(payload) {
    persistConsent(payload);
    applyGoogleConsent(payload);
    gsap.to(bannerRef.current, {
      y: 24, opacity: 0, filter: "blur(8px)", scale: 0.97,
      duration: 0.4, ease: "power2.in",
      onComplete: () => setVisible(false),
    });
  }

  const acceptAll      = () => dismiss({ choice: "all",      prefs: { analytics: true,  marketing: true  } });
  const acceptEssential= () => dismiss({ choice: "essential",prefs: { analytics: false, marketing: false } });
  const saveCustom     = () => {
    const choice = prefs.analytics || prefs.marketing ? "custom" : "essential";
    dismiss({ choice, prefs: { analytics: Boolean(prefs.analytics), marketing: Boolean(prefs.marketing) } });
  };

  if (!visible) return null;

  return (
    <>
      <style>{CSS}</style>
      <div ref={bannerRef} className="cc" role="dialog" aria-modal="true" aria-label="Cookie consent">

        {/* Top bar */}
        <div className="cc__bar" />

        {/* Main row */}
        <div className="cc__inner">
          <div className="cc__left">
            <span className="cc__icon" aria-hidden="true">🍪</span>
            <div className="cc__copy">
              <p className="cc__title">{t.title}</p>
              <p className="cc__desc">
                {t.desc}{" "}
                <a href={`/${lang}/privacy`} className="cc__link">{t.privacy}</a>
              </p>
            </div>
          </div>

          <div className="cc__actions">
            <button className="cc__btn cc__btn--ghost"   onClick={() => setExpanded(v => !v)} type="button">
              {expanded ? t.hide : t.customize}
            </button>
            <button className="cc__btn cc__btn--outline" onClick={acceptEssential} type="button">
              {t.essential_only}
            </button>
            <button className="cc__btn cc__btn--solid"   onClick={acceptAll} type="button">
              {t.accept_all}
            </button>
          </div>
        </div>

        {/* Expandable preferences */}
        <div ref={detailsRef} className="cc__details" style={{ height: 0, overflow: "hidden", opacity: 0 }}>
          <div className="cc__details-inner">

            {/* Essential — locked */}
            <div className="cc__toggle">
              <div className="cc__toggle-info">
                <p className="cc__toggle-name">{t.essential_label}</p>
                <p className="cc__toggle-desc">{t.essential_desc}</p>
              </div>
              <span className="cc__badge-locked">{t.always_on}</span>
            </div>

            {/* Analytics */}
            <div className="cc__toggle">
              <div className="cc__toggle-info">
                <p className="cc__toggle-name">{t.analytics_label}</p>
                <p className="cc__toggle-desc">{t.analytics_desc}</p>
              </div>
              <label className="cc__switch">
                <input type="checkbox" checked={prefs.analytics}
                  onChange={e => setPrefs(p => ({ ...p, analytics: e.target.checked }))} />
                <span className="cc__track"><span className="cc__thumb" /></span>
              </label>
            </div>

            {/* Marketing */}
            <div className="cc__toggle">
              <div className="cc__toggle-info">
                <p className="cc__toggle-name">{t.marketing_label}</p>
                <p className="cc__toggle-desc">{t.marketing_desc}</p>
              </div>
              <label className="cc__switch">
                <input type="checkbox" checked={prefs.marketing}
                  onChange={e => setPrefs(p => ({ ...p, marketing: e.target.checked }))} />
                <span className="cc__track"><span className="cc__thumb" /></span>
              </label>
            </div>

            <button className="cc__btn cc__btn--solid cc__btn--save" onClick={saveCustom} type="button">
              {t.save}
            </button>
          </div>
        </div>

      </div>
    </>
  );
}

// ── Styles — aligned with Forevault design system ────────────────────────────
const CSS = `
  .cc {
    position: fixed;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: min(660px, calc(100vw - 2rem));
    background: rgba(25, 25, 25, 0.92);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 24px;
    box-shadow: 0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.03);
    backdrop-filter: blur(20px);
    z-index: 9999;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
  }

  /* accent bar matching site highlight colour */
  .cc__bar {
    height: 2px;
    background: linear-gradient(90deg,
      rgba(255,255,255,0.06) 0%,
      rgba(255,255,255,0.25) 40%,
      rgba(255,255,255,0.06) 100%);
  }

  .cc__inner {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.15rem 1.4rem;
    flex-wrap: wrap;
  }

  .cc__left {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
    flex: 1;
    min-width: 200px;
  }

  .cc__icon {
    font-size: 1.4rem;
    line-height: 1;
    margin-top: 1px;
    flex-shrink: 0;
    opacity: 0.85;
  }

  .cc__copy { flex: 1; }

  .cc__title {
    font-size: 0.83rem;
    font-weight: 600;
    color: #fff;
    margin: 0 0 0.2rem;
    letter-spacing: 0.01em;
  }

  .cc__desc {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.38);
    margin: 0;
    line-height: 1.6;
  }

  .cc__link {
    color: rgba(255,255,255,0.55);
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-color: rgba(255,255,255,0.2);
    transition: color 0.15s;
  }
  .cc__link:hover { color: rgba(255,255,255,0.85); }

  /* ── Action buttons ── */
  .cc__actions {
    display: flex;
    gap: 0.55rem;
    flex-shrink: 0;
    flex-wrap: wrap;
    align-items: center;
  }

  .cc__btn {
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    border-radius: 12px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: 1px solid transparent;
    transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s;
    white-space: nowrap;
    letter-spacing: 0.02em;
  }
  .cc__btn:hover  { transform: translateY(-1px); }
  .cc__btn:active { transform: translateY(0); }

  .cc__btn--ghost {
    background: transparent;
    color: rgba(255,255,255,0.3);
    border-color: rgba(255,255,255,0.08);
  }
  .cc__btn--ghost:hover {
    color: rgba(255,255,255,0.6);
    border-color: rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.04);
  }

  .cc__btn--outline {
    background: rgba(255,255,255,0.04);
    color: rgba(255,255,255,0.65);
    border-color: rgba(255,255,255,0.12);
  }
  .cc__btn--outline:hover {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.25);
    color: #fff;
  }

  .cc__btn--solid {
    background: #fff;
    color: #111;
    border-color: #fff;
  }
  .cc__btn--solid:hover { background: #e8e8e8; border-color: #e8e8e8; }

  .cc__btn--save {
    margin-top: 0.5rem;
    width: 100%;
    padding: 0.65rem;
    font-size: 0.75rem;
    border-radius: 12px;
  }

  /* ── Expandable details ── */
  .cc__details-inner {
    padding: 0 1.4rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .cc__toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.9rem 0;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .cc__toggle-info { flex: 1; }

  .cc__toggle-name {
    font-size: 0.75rem;
    font-weight: 600;
    color: rgba(255,255,255,0.8);
    margin: 0 0 0.2rem;
  }

  .cc__toggle-desc {
    font-size: 0.66rem;
    color: rgba(255,255,255,0.3);
    margin: 0;
    line-height: 1.55;
  }

  /* locked badge */
  .cc__badge-locked {
    flex-shrink: 0;
    font-size: 0.6rem;
    font-weight: 600;
    color: rgba(255,255,255,0.4);
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 0.25rem 0.65rem;
    border-radius: 999px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  /* toggle switch — matches site's white-on-dark aesthetic */
  .cc__switch {
    flex-shrink: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .cc__switch input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .cc__track {
    width: 38px;
    height: 20px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 999px;
    position: relative;
    display: block;
    transition: background 0.25s, border-color 0.25s;
  }

  .cc__switch input:checked + .cc__track {
    background: rgba(255,255,255,0.9);
    border-color: rgba(255,255,255,0.9);
  }

  .cc__thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    background: rgba(255,255,255,0.4);
    border-radius: 50%;
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), background 0.25s;
    display: block;
    box-shadow: 0 1px 4px rgba(0,0,0,0.4);
  }

  .cc__switch input:checked + .cc__track .cc__thumb {
    transform: translateX(18px);
    background: #111;
  }

  /* ── Mobile ── */
  @media (max-width: 560px) {
    .cc {
      bottom: 0;
      left: 0;
      transform: none;
      width: 100%;
      border-radius: 20px 20px 0 0;
    }
    .cc__inner {
      flex-direction: column;
      align-items: flex-start;
      padding: 1.1rem 1.15rem 1rem;
    }
    .cc__actions {
      width: 100%;
      justify-content: flex-end;
    }
    .cc__btn--ghost { display: none; }
  }
`;
