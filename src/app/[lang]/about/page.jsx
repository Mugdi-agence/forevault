import { notFound } from "next/navigation";
import Script from "next/script";

import Navbar from "../nav";
import AboutAnimator from "./../AboutAnimator";
import { supportedLangs, normalizeLang } from "../../i18n";
import { getAboutPageContent, aboutPageRegistry } from "../../content/about";

import "../legal.scss";

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;

  const normalizedLang = normalizeLang(lang);
  const page = getAboutPageContent(normalizedLang, slug);

  if (!page) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://forevault.ink";

  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: {
      canonical: `${siteUrl}/${normalizedLang}/about`,
      languages: Object.fromEntries(
        supportedLangs.map((l) => [l, `${siteUrl}/${l}/about`])
      ),
    },
  };
}

export default async function AboutPage({ params }) {
  const { lang, slug } = await params;

  const normalizedLang = normalizeLang(lang);
  const page = getAboutPageContent(normalizedLang, slug);

  if (!page) {
    notFound();
  }

  const prefix = (href) =>
    `/${normalizedLang}${href.startsWith("/") ? href : `/${href}`}`;

  return (
    <div className="lg-root">
      <Navbar lang={normalizedLang} />

      <Script
        id={`about-schema-${normalizedLang}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: page.meta.title,
            description: page.meta.description,
            url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://forevault.ink"}/${normalizedLang}/about`,
          }),
        }}
      />

      <a href={prefix("/")} className="lg-back">
        <span className="lg-back__arrow">←</span>
        {page.backLabel || "Back to Forevault"}
      </a>

      <AboutAnimator>
        <span className="about-deco-quote" aria-hidden="true">
          "
        </span>

        <div className="about-inner">
          <span className="about-eyebrow">{page.hero.eyebrow}</span>
          <h1 className="about-name">{page.hero.title}</h1>
          <p className="about-age">{page.hero.subtitle}</p>

          <div className="about-rule" />

          {page.body?.map((paragraph, index) => (
            <p key={index} className="about-p" style={paragraph.style || undefined}>
              {paragraph.text}
            </p>
          ))}
        </div>

        <div className="about-footer">
          <span className="about-footer__label">{page.footer.left}</span>
          <span className="about-footer__dot" />
          <span className="about-footer__version">{page.footer.center}</span>
          <span className="about-footer__dot" />
          <span className="about-footer__label">{page.footer.right}</span>
        </div>
      </AboutAnimator>
    </div>
  );
}