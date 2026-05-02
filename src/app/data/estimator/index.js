import ytViewsPredictor from "./views-predictor";

export const estimatorPageRegistry = [
  { slug: "youtube-views-predictor", data: ytViewsPredictor },
];

export function getEstimatorPageContent(lang, slug) {
  const page = estimatorPageRegistry.find((p) => p.slug === slug);
  return page?.data?.[lang] || page?.data?.en || null;
}