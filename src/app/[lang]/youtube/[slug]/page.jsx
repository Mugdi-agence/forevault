import { notFound } from "next/navigation";
import Script from "next/script";

import Navbar from "../../nav";
import Footer from "../../footer";
import RevenueEngine from "../../../Revenue-Engine";
import CalcContent from "./Calccontent";

import { supportedLangs, normalizeLang } from "@/app/i18n";
import { getYouTubePageContent, youtubePageRegistry } from "@/app/data/youtube";

import "../../styles.scss";

const TOOL_COMPONENTS = {
  calculator: RevenueEngine,
};

export async function generateStaticParams() {
  return supportedLangs.flatMap((lang) =>
    youtubePageRegistry.map((page) => ({
      lang,
      slug: page.slug,
    }))
  );
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;

  const normalizedLang = normalizeLang(lang);
  const page = getYouTubePageContent(normalizedLang, slug);

  if (!page) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://forevault.com";

  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: {
      canonical: `${siteUrl}/${normalizedLang}/youtube/${page.meta.slug}`,
      languages: Object.fromEntries(
        supportedLangs.map((l) => [
          l,
          `${siteUrl}/${l}/youtube/${page.meta.slug}`,
        ])
      ),
    },
  };
}

export default async function YoutubePage({ params }) {
  const { lang, slug } = await params;

  const normalizedLang = normalizeLang(lang);
  const page = getYouTubePageContent(normalizedLang, slug);

  // ⛔ STOP direct si page pas trouvée
  if (!page) {
    notFound();
  }

  const Tool = TOOL_COMPONENTS[page.tool?.type] || RevenueEngine;

  return (
    <>
      <Navbar lang={normalizedLang} />

      {/* FAQ Schema inline (Next 15 safe) */}
      {Array.isArray(page.faq) && page.faq.length > 0 && (
      <Script
        id={`faq-${normalizedLang}-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    )}

      <main className="youtube-page">
        <Tool {...(page.tool?.props || {})} />
        <CalcContent page={page} lang={normalizedLang} />
      </main>

      <Footer lang={normalizedLang} />
      <div className="fonds" />
    </>
  );
}