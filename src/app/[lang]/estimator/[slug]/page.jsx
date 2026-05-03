// app/[lang]/estimator/youtube-views-predictor/page.jsx
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Navbar from "../../nav";
import Footer from "../../footer";
import YtViewsPredictorContent from "./Ytviewpredictorcontent";
import "../../../yt_views_predictor.scss";
import "../../styles.scss";

import { supportedLangs, normalizeLang } from "../../../i18n";
import { getEstimatorPageContent } from "../../../data/estimator";

const PredictorEngine = dynamic(
  () => import("../../../Predictor-Engine"),
  {
    ssr: true,
    loading: () => (
      <div className="ytp-ssr-loader" aria-label="Loading predictor…">
        <span className="ytp-ssr-spinner" />
      </div>
    ),
  }
);

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const page = getEstimatorPageContent(normalizedLang, "youtube-views-predictor");

  if (!page?.meta) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://forevault.com";

  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: {
      canonical: `${siteUrl}/${normalizedLang}/estimator/youtube-views-predictor`,
      languages: {
        ...Object.fromEntries(
          supportedLangs.map((l) => [
            l,
            `${siteUrl}/${l}/estimor/youtube-views-predictor`,
          ])
        ),
        "x-default": `${siteUrl}/en/estimator/youtube-views-predictor`,
      },
    },
  };
}

export default async function YtViewsPredictorPage({ params }) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const page = getEstimatorPageContent(normalizedLang, "youtube-views-predictor");

  if (!page || !page.hero) notFound();

  return (
    <>
      <div className="containering">
        <Navbar lang={normalizedLang} />

        <div className="ytp-root">
          <PredictorEngine />
        </div>

        <YtViewsPredictorContent page={page} lang={normalizedLang} />

        <Footer lang={normalizedLang} />
      </div>
      <div className="fonds" />
    </>
  );
}