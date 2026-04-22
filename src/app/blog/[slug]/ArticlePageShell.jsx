// src/app/blog/[slug]/ArticlePageShell.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Wrapper "use client" minimal — monte le BlogPage SPA avec l'article
// pré-sélectionné. C'est tout ce qu'il fait.
//
// La synchro URL est gérée directement dans BlogPage via window.history.pushState
// → pas de rechargement, pas de re-render Next.js, progress bar intacte.
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import BlogPage from "../page";

export default function ArticlePageShell({ initialId }) {
    return <BlogPage initialArticleId={initialId} />;
}
