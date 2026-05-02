export const supportedLangs = ['en', 'fr', 'es', 'de', 'ja', 'ko', 'pt'];
export const defaultLang = 'en';

export const languageMeta = {
  en: { name: 'English', locale: 'en-US', hreflang: 'en' },
  fr: { name: 'Français', locale: 'fr-FR', hreflang: 'fr' },
  es: { name: 'Español', locale: 'es-ES', hreflang: 'es' },
  de: { name: 'Deutsch', locale: 'de-DE', hreflang: 'de' },
  jp: { name: '日本語', locale: 'ja-JP', hreflang: 'ja' },
  ko: { name: '한국어', locale: 'ko-KR', hreflang: 'ko' },
  pt: { name: 'Português', locale: 'pt-BR', hreflang: 'pt' },
};

export function isSupportedLang(lang) {
  return supportedLangs.includes(lang);
}

export function normalizeLang(lang) {
  return isSupportedLang(lang) ? lang : defaultLang;
}