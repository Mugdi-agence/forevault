// nav-config.js
// Usage: import { getNavLinks, getNavCta } from "@/app/data/nav-config";

export const NAV_I18N = {
  en: {
    cta: "Get started",
    links: [
      { label: "Calculator", href: "/youtube/revenue-calculator" },
      { label: "Predictor",  href: "/estimator/youtube-views-predictor" },
      {
        label: "Guide",
        href: "#",
        subLinks: [
          { label: "How much do YouTubers actually make?",  href: "/youtube/how-much-do-youtubers-make" },
          { label: "YouTube earnings by country",           href: "/youtube/youtube-earnings-by-country-calculator" },
          { label: "How much does 100k views pay you?",    href: "/youtube/how-much-do-100k-youtube-views-make" },
          { label: "YouTube RPM by niche",                  href: "/youtube/rpm-calculator-by-niche" },
        ],
      },
      { label: "Blog", href: "/blog" },
      { label: "Niches", href: "/niches" },
    ],
  },
  fr: {
    cta: "Commencer",
    links: [
      { label: "Calculateur", href: "/youtube/revenue-calculator" },
      { label: "Prédicteur",  href: "/estimator/youtube-views-predictor" },
      {
        label: "Guides",
        href: "#",
        subLinks: [
          { label: "Combien gagnent vraiment les YouTubers ?",   href: "/youtube/how-much-do-youtubers-make" },
          { label: "Revenus YouTube par pays",                    href: "/youtube/youtube-earnings-by-country-calculator" },
          { label: "Combien rapportent 100k vues ?",             href: "/youtube/how-much-do-100k-youtube-views-make" },
          { label: "RPM YouTube par niche",                       href: "/youtube/rpm-calculator-by-niche" },
        ],
      },
      { label: "Blog", href: "/blog" },
      { label: "Niches", href: "/niches" },
    ],
  },
  es: {
    cta: "Empezar",
    links: [
      { label: "Calculadora", href: "/youtube/revenue-calculator" },
      { label: "Predictor",   href: "/estimator/youtube-views-predictor" },
      {
        label: "Guías",
        href: "#",
        subLinks: [
          { label: "¿Cuánto ganan realmente los YouTubers?",  href: "/youtube/how-much-do-youtubers-make" },
          { label: "Ganancias de YouTube por país",           href: "/youtube/youtube-earnings-by-country-calculator" },
          { label: "¿Cuánto pagan 100k vistas?",             href: "/youtube/how-much-do-100k-youtube-views-make" },
          { label: "RPM de YouTube por nicho",                href: "/youtube/rpm-calculator-by-niche" },
        ],
      },
      { label: "Blog", href: "/blog" },
      { label: "Nichos", href: "/niches" },
    ],
  },
  de: {
    cta: "Loslegen",
    links: [
      { label: "Rechner",  href: "/youtube/revenue-calculator" },
      { label: "Prognose", href: "/estimator/youtube-views-predictor" },
      {
        label: "Guides",
        href: "#",
        subLinks: [
          { label: "Wie viel verdienen YouTuber wirklich?",   href: "/youtube/how-much-do-youtubers-make" },
          { label: "YouTube-Einnahmen nach Land",             href: "/youtube/youtube-earnings-by-country-calculator" },
          { label: "Was zahlen 100k Aufrufe?",               href: "/youtube/how-much-do-100k-youtube-views-make" },
          { label: "YouTube RPM nach Nische",                 href: "/youtube/rpm-calculator-by-niche" },
        ],
      },
      { label: "Blog", href: "/blog" },
      { label: "Nischen", href: "/niches" },
    ],
  },
  pt: {
    cta: "Começar",
    links: [
      { label: "Calculadora", href: "/youtube/revenue-calculator" },
      { label: "Preditor",    href: "/estimator/youtube-views-predictor" },
      {
        label: "Guias",
        href: "#",
        subLinks: [
          { label: "Quanto ganham realmente os YouTubers?",   href: "/youtube/how-much-do-youtubers-make" },
          { label: "Ganhos do YouTube por país",              href: "/youtube/youtube-earnings-by-country-calculator" },
          { label: "Quanto pagam 100k visualizações?",       href: "/youtube/how-much-do-100k-youtube-views-make" },
          { label: "RPM do YouTube por nicho",               href: "/youtube/rpm-calculator-by-niche" },
        ],
      },
      { label: "Blog", href: "/blog" },
      { label: "Nichos", href: "/niches" },
    ],
  },
  ja: {
    cta: "始める",
    links: [
      { label: "計算機",     href: "/youtube/revenue-calculator" },
      { label: "予測ツール", href: "/estimator/youtube-views-predictor" },
      {
        label: "ガイド",
        href: "#",
        subLinks: [
          { label: "YouTuberの実際の収入は？",   href: "/youtube/how-much-do-youtubers-make" },
          { label: "国別YouTube収益",            href: "/youtube/youtube-earnings-by-country-calculator" },
          { label: "10万回再生でいくら稼げる？", href: "/youtube/how-much-do-100k-youtube-views-make" },
          { label: "ジャンル別YouTube RPM",      href: "/youtube/rpm-calculator-by-niche" },
        ],
      },
      { label: "Blog", href: "/blog" },
      { label: "ニッチ", href: "/niches" },
    ],
  },
  ko: {
    cta: "시작하기",
    links: [
      { label: "계산기",    href: "/youtube/revenue-calculator" },
      { label: "예측 도구", href: "/estimator/youtube-views-predictor" },
      {
        label: "가이드",
        href: "#",
        subLinks: [
          { label: "유튜버는 실제로 얼마나 버나요?",  href: "/youtube/how-much-do-youtubers-make" },
          { label: "국가별 YouTube 수익",             href: "/youtube/youtube-earnings-by-country-calculator" },
          { label: "조회수 10만 회에 얼마를 받나요?", href: "/youtube/how-much-do-100k-youtube-views-make" },
          { label: "틈새 시장별 YouTube RPM",         href: "/youtube/rpm-calculator-by-niche" },
        ],
      },
      { label: "Blog", href: "/blog" },
      { label: "틈새 시장", href: "/niches" },
    ],
  },
};

/**
 * Returns nav links with lang-prefixed hrefs.
 * @param {string} lang - e.g. "fr", "en", "ja"
 */
export function getNavLinks(lang) {
  const config = NAV_I18N[lang] ?? NAV_I18N.en;

  const prefix = (href) => (href === "#" ? "#" : `/${lang}${href}`);

  return config.links.map((link) => ({
    ...link,
    href: prefix(link.href),
    subLinks: link.subLinks?.map((sub) => ({
      ...sub,
      href: prefix(sub.href),
    })),
  }));
}

/**
 * Returns the CTA label and href for the given lang.
 * @param {string} lang
 */
export function getNavCta(lang) {
  const config = NAV_I18N[lang] ?? NAV_I18N.en;
  return {
    label: config.cta,
    href: `/${lang}/niches`,
  };
}