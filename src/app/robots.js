// blog/robots.js
// ─────────────────────────────────────────────────────────────────────────────
// Place ce fichier à la racine de ton app Next.js : app/robots.js
// Accessible automatiquement à :  /robots.txt
// ─────────────────────────────────────────────────────────────────────────────

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function robots() {
    return {
        rules: [{ userAgent: "*", allow: "/" }],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
