import { notFound } from "next/navigation";
import Navbar from "../nav";
import LegalAnimator from "../LegalAnimator";
import { supportedLangs, normalizeLang } from "../../i18n";
import { getPrivacyPageContent } from "../../content/privacy";

import "../legal.scss";

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;

  const normalizedLang = normalizeLang(lang);
  const page = getPrivacyPageContent(normalizedLang);

  if (!page) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://forevault.ink";

  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: {
      canonical: `${siteUrl}/${normalizedLang}/privacy`,
      languages: Object.fromEntries(
        supportedLangs.map((l) => [l, `${siteUrl}/${l}/privacy`])
      ),
    },
  };
}

function renderBlock(block, index) {
  if (block.type === "text") {
    return (
      <p key={index} className="legal-p">
        {block.value}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={index} className="legal-ul">
        {block.items.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    );
  }

  if (block.type === "note") {
    return (
      <div key={index} className={block.variant === "warn" ? "legal-warn" : "legal-note"}>
        <span className={block.variant === "warn" ? "legal-warn__icon" : "legal-note__icon"}>
          {block.icon || "ℹ️"}
        </span>
        <span dangerouslySetInnerHTML={{ __html: block.value }} />
      </div>
    );
  }

  if (block.type === "links") {
    return (
      <ul key={index} className="legal-ul">
        {block.items.map((item, i) => (
          <li key={i}>
            {item.label}{" "}
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

export default async function PrivacyPage({ params }) {
  const { lang } = await params;

  const normalizedLang = normalizeLang(lang);
  const page = getPrivacyPageContent(normalizedLang);

  if (!page) {
    notFound();
  }

  const prefix = (href) => `/${normalizedLang}${href.startsWith("/") ? href : `/${href}`}`;

  return (
    <div className="lg-root">
      <Navbar lang={normalizedLang} />

      <a href={prefix("/")} className="lg-back">
        <span className="lg-back__arrow">←</span>
        {page.backLabel}
      </a>

      <LegalAnimator>
        <div className="legal-hero">
          <span className="legal-hero__badge">{page.hero.badge}</span>
          <h1 className="legal-hero__title">{page.hero.title}</h1>
          <p className="legal-hero__meta">{page.hero.meta}</p>
        </div>

        <div className="legal-body">
          {page.sections.map((section, i) => (
            <div key={section.num}>
              <section className="legal-section">
                <div className="legal-section__head">
                  <span className="legal-section__num">{section.num}</span>
                  <h2 className="legal-section__title">{section.title}</h2>
                </div>

                {section.blocks.map((block, index) => renderBlock(block, index))}
              </section>

              {i < page.sections.length - 1 && (
                <div className="legal-sep" style={{ marginTop: "2rem" }} />
              )}
            </div>
          ))}
        </div>

        <div className="legal-foot">
          <span className="legal-foot__copy">{page.footer.copy}</span>
          <span className="legal-foot__updated">
            <span />
            {page.footer.updated}
          </span>
        </div>
      </LegalAnimator>
    </div>
  );
}