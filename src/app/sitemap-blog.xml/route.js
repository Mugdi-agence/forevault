import { ARTICLES } from "../blog/content/index";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://forevault.ink";

export async function GET() {
  const now = new Date().toISOString();

  const urls = ARTICLES.map((article) => `
    <url>
      <loc>${SITE_URL}/blog/${article.id}</loc>
      <lastmod>${now}</lastmod>
    </url>
  `).join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${SITE_URL}/blog</loc>
      <lastmod>${now}</lastmod>
    </url>
    ${urls}
  </urlset>`, {
    headers: { "Content-Type": "application/xml" },
  });
}