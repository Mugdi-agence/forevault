import { getArticleMeta as getAnalyzeViralMeta } from "./analyze-viral-content";
import { getArticleMeta as getHookKillingMeta } from "./hook-killing-videos";
import { getArticleMeta as getIterationStrategyMeta } from "./iteration-strategy";
import { getArticleMeta as getLoopRetentionMeta } from "./loop-effect-retention";
import { getArticleMeta as getNicheMatterMeta } from "./niche-doesnt-matter";
import { getArticleMeta as getStructureViralMeta } from "./perfect-structure-viral";
import { getArticleMeta as getPllarsViralMeta } from "./three-pillars-viral";
import { getArticleMeta as getViewsPredictorMeta } from "./views-predictor-guide";

const REGISTRY = [
    {
        id:            "analyze-viral-content",
        getMeta:       (lang) => getAnalyzeViralMeta(lang),
        importContent: () => import("./analyze-viral-content"),
    },
    {
        id:            "hook-killing-videos",
        getMeta:       (lang) => getHookKillingMeta(lang),
        importContent: () => import("./hook-killing-videos"),
    },
    {
        id:            "iteration-strategy",
        getMeta:       (lang) => getIterationStrategyMeta(lang),
        importContent: () => import("./iteration-strategy"),
    },
    {
        id:            "loop-effect-retention",
        getMeta:       (lang) => getLoopRetentionMeta(lang),
        importContent: () => import("./loop-effect-retention"),
    },
    {
        id:            "niche-doesnt-matter",
        getMeta:       (lang) => getNicheMatterMeta(lang),
        importContent: () => import("./niche-doesnt-matter"),
    },
    {
        id:            "perfect-structure-viral",
        getMeta:       (lang) => getStructureViralMeta(lang),
        importContent: () => import("./perfect-structure-viral"),
    },
    {
        id:            "three-pillars-viral",
        getMeta:       (lang) => getPllarsViralMeta(lang),
        importContent: () => import("./three-pillars-viral"),
    },
    {
        id:            "views-predictor-guide",
        getMeta:       (lang) => getViewsPredictorMeta(lang),
        importContent: () => import("./views-predictor-guide"),
    },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Retourne la liste de tous les articles pour une langue donnée
 * Utilisé sur la page index du blog
 */
export function getAllArticles(lang = "en") {
    return REGISTRY.map(entry => ({
        ...entry.getMeta(lang),
    }));
}

/**
 * Retourne les params statiques pour generateStaticParams
 * Croise toutes les langues × tous les slugs
 */
export function getAllArticleParams(supportedLangs = ["en", "fr", "de", "ja"]) {
    const params = [];
    for (const lang of supportedLangs) {
        for (const entry of REGISTRY) {
            params.push({ lang, slug: entry.id });
        }
    }
    return params;
}

/**
 * Importe dynamiquement le contenu d'un article par son slug
 * Retourne null si non trouvé
 */
export async function getArticleBySlug(slug) {
    const entry = REGISTRY.find(e => e.id === slug);
    if (!entry) return null;
    return entry.importContent();
}

/**
 * Retourne les métadonnées d'un article par son slug et sa langue
 */
export function getArticleMetaBySlug(slug, lang = "en") {
    const entry = REGISTRY.find(e => e.id === slug);
    if (!entry) return null;
    return entry.getMeta(lang);
}

/**
 * Retourne les articles liés (excluant le slug courant)
 * Utilisé dans le composant Related
 */
export function getRelatedArticles(currentSlug, lang = "en", limit = 2) {
    return REGISTRY
        .filter(e => e.id !== currentSlug)
        .slice(0, limit)
        .map(e => e.getMeta(lang));
}

export default REGISTRY;