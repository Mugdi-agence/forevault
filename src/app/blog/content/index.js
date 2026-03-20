// content/index.js
// ── Central registry — import this in blog-page.jsx ─────────────────────────
//
// Usage in blog-page.jsx:
//   import { ARTICLES, CATEGORIES } from "./content";
//   (replace the inline ARTICLES array and CATEGORIES array)
// ─────────────────────────────────────────────────────────────────────────────

import NicheDoesntMatter,  { meta as m1 } from "./niche-doesnt-matter";
import ThreePillarsViral,  { meta as m2 } from "./three-pillars-viral";
import AnalyzeViral,       { meta as m3 } from "./analyze-viral-content";
import HookKillingVideos,  { meta as m4 } from "./hook-killing-videos";
import PerfectStructure,   { meta as m5 } from "./perfect-structure-viral";
import LoopEffectRetention,{ meta as m6 } from "./loop-effect-retention";
import IterationStrategy,  { meta as m7 } from "./iteration-strategy";

// ── Article registry ─────────────────────────────────────────────────────────
// Each entry merges the `meta` export with its component.
// The `component` field is what blog-page.jsx renders in the reader panel.
// ─────────────────────────────────────────────────────────────────────────────
export const ARTICLES = [
    { ...m1, component: NicheDoesntMatter   },
    { ...m2, component: ThreePillarsViral   },
    { ...m3, component: AnalyzeViral        },
    { ...m4, component: HookKillingVideos   },
    { ...m5, component: PerfectStructure    },
    { ...m6, component: LoopEffectRetention },
    { ...m7, component: IterationStrategy   },
];

// ── Auto-generated category list ─────────────────────────────────────────────
// Derives unique categories from the articles + adds "All" at the front.
const uniqueCats = [...new Set(ARTICLES.map(a => a.category))];
export const CATEGORIES = ["All", ...uniqueCats];

// ── Helper: get article by id ─────────────────────────────────────────────────
export function getArticleById(id) {
    return ARTICLES.find(a => a.id === id) ?? null;
}

// ── Helper: get related articles (excludes current) ──────────────────────────
export function getRelated(currentId, limit = 2) {
    const current = getArticleById(currentId);
    if (!current) return [];

    // Prefer same category, then anything else
    const sameCat = ARTICLES.filter(a => a.id !== currentId && a.category === current.category);
    const others  = ARTICLES.filter(a => a.id !== currentId && a.category !== current.category);

    return [...sameCat, ...others].slice(0, limit).map(a => ({
        id:       a.id,
        title:    a.title,
        category: a.category,
        thumb:    a.thumb,
    }));
}
