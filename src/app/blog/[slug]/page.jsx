// src/app/blog/[slug]/page.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Route SEO individuelle — Next.js 15 App Router
//
// Ce fichier fait 3 choses UNIQUEMENT côté serveur :
//   1. generateStaticParams() → pré-rend chaque article au build
//   2. generateMetadata()     → <head> SEO complet (title, OG, Twitter, canonical)
//   3. Page component         → passe initialId au BlogPage SPA
//
// Le BlogPage tourne ensuite en SPA complète :
//   - Pas de rechargement lors de la navigation entre articles
//   - Progress bar fonctionnelle
//   - Animations GSAP intactes
//   - URL mise à jour via window.history.pushState (sans re-render)
// ─────────────────────────────────────────────────────────────────────────────

import { notFound }     from "next/navigation";
import { ARTICLES }     from "../content/index";
import ArticlePageShell from "./ArticlePageShell";

// ── 1. SSG — une page statique par article ────────────────────────────────────
export function generateStaticParams() {
    return ARTICLES.map((a) => ({ slug: a.id }));
}

// ── 2. Metadata dynamique (Next.js 15 — params est une Promise) ───────────────
export async function generateMetadata({ params }) {
    const { slug }  = await params;
    const article   = ARTICLES.find((a) => a.id === slug);
    if (!article) return { title: "Article not found" };

    const { seo, title, date, category } = article;
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.id}`;

    return {
        title:       seo.title,
        description: seo.description,
        alternates:  { canonical: url },

        openGraph: {
            type:        "article",
            url,
            title:       seo.title,
            description: seo.description,
            images: [{ url: seo.image, width: 1200, height: 630, alt: title }],
            article: { publishedTime: date, section: category },
        },

        twitter: {
            card:        "summary_large_image",
            title:       seo.title,
            description: seo.description,
            images:      [seo.image],
        },

        robots: { index: true, follow: true },
    };
}

// ── 3. JSON-LD Article schema ─────────────────────────────────────────────────
function ArticleJsonLd({ article }) {
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.id}`;

    const schema = {
        "@context":     "https://schema.org",
        "@type":        "BlogPosting",
        headline:       article.seo.title,
        description:    article.seo.description,
        image:          article.seo.image,
        url,
        datePublished:  article.date,
        articleSection: article.category,
        timeRequired:   `PT${parseInt(article.readTime, 10)}M`,
        publisher: {
            "@type": "Organization",
            name:    process.env.NEXT_PUBLIC_SITE_NAME ?? "Creator Notes",
            url:     process.env.NEXT_PUBLIC_SITE_URL  ?? "https://example.com",
        },
        mainEntityOfPage: { "@type": "@id", "@id": url },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// ── 4. Page ───────────────────────────────────────────────────────────────────
export default async function ArticleSlugPage({ params }) {
    const { slug } = await params;
    const article  = ARTICLES.find((a) => a.id === slug);
    
    if (!article) notFound();

    return (
        <>
            <ArticleJsonLd article={article} />
            <ArticlePageShell initialId={article.id} />
        </>
    );
}
