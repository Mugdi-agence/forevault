import { notFound } from "next/navigation";
import Navbar from "../nav";
import AboutAnimator from "../AboutAnimator";
import { supportedLangs, normalizeLang } from "@/app/i18n";
import { getContactPageContent } from "@/app/content/contact";

import "../legal.scss";

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const page = getContactPageContent(normalizedLang);

  if (!page) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://forevault.ink";

  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: {
      canonical: `${siteUrl}/${normalizedLang}/contact`,
      languages: Object.fromEntries(
        supportedLangs.map((l) => [l, `${siteUrl}/${l}/contact`])
      ),
    },
  };
}

export default async function ContactPage({ params }) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const page = getContactPageContent(normalizedLang);

  if (!page) {
    notFound();
  }

  const prefix = (href) =>
    `/${normalizedLang}${href.startsWith("/") ? href : `/${href}`}`;

  return (
    <div className="lg-root">
      <Navbar lang={normalizedLang} />
      <a href={prefix("/")} className="lg-back">
        <span className="lg-back__arrow">←</span>
        {page.backLabel}
      </a>

      <AboutAnimator extraTargets=".contact-group">
        <div className="about-inner">
          <span className="about-eyebrow">{page.eyebrow}</span>
          <h1 className="about-name">{page.title}</h1>
          <p className="about-age">{page.subtitle}</p>

          <div className="about-rule" />

          {page.intro.map((p, i) => (
            <p className="about-p" key={i}>{p}</p>
          ))}

          <div
            className="contact-group"
            style={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {page.groups.map((group, i) => (
              <p
                className="about-p"
                style={{ margin: 0 }}
                key={i}
              >
                <strong className="about-hl">{group.label}</strong>
                <br />
                {group.content && (
                  <>
                    {group.content}
                    <br />
                  </>
                )}
                {group.link && (
                  <a href={group.link.href}>{group.link.text}</a>
                )}
                {group.bullets &&
                  group.bullets.map((item, j) => (
                    <span key={j}>
                      {j > 0 && <br />}
                      • {item}
                    </span>
                  ))}
              </p>
            ))}
          </div>
        </div>

        <div className="about-footer">
          {page.footer.map((line, i) => (
            <span
              className={
                i % 2 === 0
                  ? "about-footer__label"
                  : "about-footer__dot"
              }
              key={i}
            >
              {i % 2 === 0 ? line : ""}
            </span>
          ))}
        </div>
      </AboutAnimator>
    </div>
  );
}