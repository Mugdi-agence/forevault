// blog/sitemap.js
// ─────────────────────────────────────────────────────────────────────────────
// Place ce fichier à la racine de ton app Next.js : app/sitemap.js
// Accessible automatiquement à :  /sitemap.xml
// ─────────────────────────────────────────────────────────────────────────────

import { ARTICLES } from "./blog/content/index";  // ajuste le chemin si besoin

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap() {
    const now = new Date().toISOString();

    const staticRoutes = [
        { url: SITE_URL,              lastModified: now, changeFrequency: "weekly", priority: 1.0 },
        { url: `${SITE_URL}/blog`,    lastModified: now, changeFrequency: "daily",  priority: 0.9 },
    ];

    const articleRoutes = ARTICLES.map((article) => ({
        url:             `${SITE_URL}/blog/${article.id}`,
        lastModified:    now,
        changeFrequency: "monthly",
        priority:        0.8,
    }));

    return [...staticRoutes, ...articleRoutes];
}
