// footer-config.js
// Usage: import { getFooterConfig } from "@/app/data/footer-config";

export const FOOTER_I18N = {
  en: {
    tagline: "Estimate, compare and optimise\nyour YouTube revenue.",
    copy: "All rights reserved.",
    groups: {
      Services: [
        { label: "Terms Of Service", href: "/terms" },
        { label: "Privacy Policy",   href: "/privacy" },
        { label: "About",            href: "/about" },
        { label: "Contact",          href: "/contact" },
      ],
      Product: [
        { label: "Calculator",   href: "/youtube/revenue-calculator" },
        { label: "Predictor",    href: "/estimator/youtube-views-predictor" },
        { label: "Niches",       href: "/niches" },
      ],
    },
  },
  fr: {
    tagline: "Estimez, comparez et optimisez\nvos revenus YouTube.",
    copy: "Tous droits réservés.",
    groups: {
      Services: [
        { label: "Conditions d'utilisation",     href: "/terms" },
        { label: "Politique de confidentialité", href: "/privacy" },
        { label: "À propos", href: "/about" },
        { label: "Contact",  href: "/contact" },
      ],
      Produit: [
        { label: "Calculateur",       href: "/youtube/revenue-calculator" },
        { label: "Prédicteur",        href: "/estimator/youtube-views-predictor" },
        { label: "Niches",            href: "/niches" },
      ],
    },
  },
  es: {
    tagline: "Estima, compara y optimiza\ntus ingresos de YouTube.",
    copy: "Todos los derechos reservados.",
    groups: {
      Servicios: [
        { label: "Términos de servicio",   href: "/terms" },
        { label: "Política de privacidad", href: "/privacy" },
        { label: "Acerca de", href: "/about" },
        { label: "Contacto",  href: "/contact" },
      ],
      Producto: [
        { label: "Calculadora",   href: "/youtube/revenue-calculator" },
        { label: "Predictor",     href: "/estimator/youtube-views-predictor" },
        { label: "Nichos",        href: "/niches" },
      ],
    },
  },
  de: {
    tagline: "Schätzen, vergleichen und optimieren\nSie Ihre YouTube-Einnahmen.",
    copy: "Alle Rechte vorbehalten.",
    groups: {
      Services: [
        { label: "Nutzungsbedingungen",   href: "/terms" },
        { label: "Datenschutzrichtlinie", href: "/privacy" },
        { label: "Über uns", href: "/about" },
        { label: "Kontakt",  href: "/contact" },
      ],
      Produkt: [
        { label: "Rechner",           href: "/youtube/revenue-calculator" },
        { label: "Prognose",          href: "/estimator/youtube-views-predictor" },
        { label: "Nischen",           href: "/niches" },
      ],
    },
  },
  pt: {
    tagline: "Estime, compare e otimize\nsua receita no YouTube.",
    copy: "Todos os direitos reservados.",
    groups: {
      Serviços: [
        { label: "Termos de serviço",       href: "/terms" },
        { label: "Política de privacidade", href: "/privacy" },
        { label: "Sobre",   href: "/about" },
        { label: "Contato", href: "/contact" },
      ],
      Produto: [
        { label: "Calculadora",   href: "/youtube/revenue-calculator" },
        { label: "Preditor",      href: "/estimator/youtube-views-predictor" },
        { label: "Nichos",        href: "/niches" },
      ],
    },
  },
  ja: {
    tagline: "YouTube収益を見積もり、比較し、\n最適化しましょう。",
    copy: "全著作権所有。",
    groups: {
      サービス: [
        { label: "利用規約",           href: "/terms" },
        { label: "プライバシーポリシー", href: "/privacy" },
        { label: "会社概要",     href: "/about" },
        { label: "お問い合わせ", href: "/contact" },
      ],
      プロダクト: [
        { label: "計算機",     href: "/youtube/revenue-calculator" },
        { label: "予測ツール", href: "/estimator/youtube-views-predictor" },
        { label: "ニッチ",     href: "/niches" },
      ],
    },
  },
  ko: {
    tagline: "YouTube 수익을 추정하고, 비교하고,\n최적화하세요.",
    copy: "모든 권리 보유.",
    groups: {
      서비스: [
        { label: "이용약관",          href: "/terms" },
        { label: "개인정보 처리방침", href: "/privacy" },
        { label: "소개", href: "/about" },
        { label: "문의", href: "/contact" },
      ],
      제품: [
        { label: "계산기",    href: "/youtube/revenue-calculator" },
        { label: "예측 도구", href: "/estimator/youtube-views-predictor" },
        { label: "틈새 시장", href: "/niches" },
      ],
    },
  },
};

/**
 * Returns footer config with lang-prefixed hrefs.
 * Anchors (#) are left as-is.
 * @param {string} lang
 */
export function getFooterConfig(lang) {
  const config = FOOTER_I18N[lang] ?? FOOTER_I18N.en;

  const prefix = (href) => {
    if (href.startsWith("#") || href.startsWith("/#")) return href;
    return `/${lang}${href}`;
  };

  const groups = Object.fromEntries(
    Object.entries(config.groups).map(([group, links]) => [
      group,
      links.map((link) => ({ ...link, href: prefix(link.href) })),
    ])
  );

  return {
    tagline: config.tagline,
    copy: config.copy,
    groups,
  };
}