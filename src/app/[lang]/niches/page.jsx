// app/[lang]/niches/page.jsx
// ─────────────────────────────────────────────────────────────────────────────
// SERVER COMPONENT — lit le paramètre `lang` depuis les params Next.js App Router
// et le transmet aux composants enfants pour le rendu multilingue.
// ─────────────────────────────────────────────────────────────────────────────

import Navbar       from "../nav";
import Footer       from "../footer";
import NicheFinder  from "./NicheFinder";
import NicheContent from "./NicheContent";
import nicheContent from "./niche-content";
import './niche-finder.scss';

// ── Métadonnées dynamiques par langue ────────────────────────────────────────
export async function generateMetadata({ params }) {
    const { lang = "en" } = await params;
    const c = nicheContent[lang] ?? nicheContent["en"];
    return {
        title:       c.meta.title,
        description: c.meta.description,
    };
}

// ── Schéma FAQ JSON-LD dynamique par langue ───────────────────────────────────
function buildFaqSchema(faqItems) {
    return {
        "@context":   "https://schema.org",
        "@type":      "FAQPage",
        "mainEntity": faqItems.map(({ name, text }) => ({
            "@type":         "Question",
            "name":          name,
            "acceptedAnswer": { "@type": "Answer", "text": text },
        })),
    };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function NichesPage({ params }) {
    const { lang = "en" } = await params;
    const c = nicheContent[lang] ?? nicheContent["en"];
    const faqSchema = buildFaqSchema(c.faqSchema);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Navbar lang={lang} />
            <NicheFinder />
            <NicheContent lang={lang} />
            <Footer lang={lang} />
        </>
    );
}