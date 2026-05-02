import rpmByNiche from "./rpm-calculator-by-niche";
import revenueCalculator from "./revenue-calculator";
import earningByCountry from "./youtube-earnings-by-country-calculator";
import youtubersMake from "./how-much-do-youtubers-make";
import thousandViewsMake from "./how-much-do-100k-youtube-views-make";

export const youtubePageRegistry = [
  { slug: "rpm-calculator-by-niche", data: rpmByNiche },
  { slug: "revenue-calculator", data: revenueCalculator },
  { slug: "how-much-do-youtubers-make", data: youtubersMake },
  { slug: "how-much-do-100k-youtube-views-make", data: thousandViewsMake },
  { slug: "youtube-earnings-by-country-calculator", data: earningByCountry },
];

export function getYouTubePageContent(lang, slug) {
  const page = youtubePageRegistry.find((p) => p.slug === slug);
  return page?.data?.[lang] || page?.data?.en || null;
}