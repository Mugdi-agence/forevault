// app/[lang]/blog/page.jsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../nav";
import Footer from "../footer";
import { getAllArticles } from "../../articles/index";
import { supportedLangs, normalizeLang } from "../../i18n";
import "./blog.scss";

// ── i18n labels ───────────────────────────────────────────────────────────────
const BLOG_I18N = {
  en: {
    eyebrow: "Creator Resources",
    title:   "The Forevault Blog",
    lead:    "Honest breakdowns of YouTube monetization, RPM benchmarks, channel strategy, and the variables that actually move the numbers.",
    empty:   "No articles yet. Check back soon.",
  },
  fr: {
    eyebrow: "Ressources créateurs",
    title:   "Le Blog Forevault",
    lead:    "Analyses honnêtes de la monétisation YouTube, benchmarks RPM, stratégie de chaîne et les variables qui font vraiment bouger les chiffres.",
    empty:   "Aucun article pour l'instant. Revenez bientôt.",
  },
  de: {
    eyebrow: "Creator-Ressourcen",
    title:   "Der Forevault Blog",
    lead:    "Ehrliche Analysen zur YouTube-Monetarisierung, RPM-Benchmarks, Kanalstrategie und die Variablen, die wirklich die Zahlen bewegen.",
    empty:   "Noch keine Artikel. Schauen Sie bald wieder vorbei.",
  },
  ja: {
    eyebrow: "クリエイターリソース",
    title:   "Forevaultブログ",
    lead:    "YouTubeの収益化、RPMベンチマーク、チャンネル戦略、そして実際に数字を動かす変数についての率直な解説。",
    empty:   "まだ記事がありません。後でまたご確認ください。",
  },
};

// ── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const t = BLOG_I18N[normalizedLang] ?? BLOG_I18N.en;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://forevault.ink";

  return {
    title:       `${t.title} — Forevault`,
    description: t.lead,
    alternates: {
      canonical: `${siteUrl}/${normalizedLang}/blog`,
      languages: {
        ...Object.fromEntries(
          supportedLangs.map((l) => [l, `${siteUrl}/${l}/blog`])
        ),
        "x-default": `${siteUrl}/en/blog`,
      },
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function BlogIndexPage({ params }) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);

  if (!supportedLangs.includes(normalizedLang)) notFound();

  const t        = BLOG_I18N[normalizedLang] ?? BLOG_I18N.en;
  const articles = getAllArticles(normalizedLang);

  return (
    <>
      <div className="blog-root">
        <Navbar lang={normalizedLang} />

        <div className="blog-index">

          {/* ── Hero ── */}
          <div className="blog-index__hero">
            <span className="blog-index__eyebrow">{t.eyebrow}</span>
            <h1 className="blog-index__title">{t.title}</h1>
            <p className="blog-index__lead">{t.lead}</p>
          </div>

          {/* ── Grid ── */}
          {articles.length === 0 ? (
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.9rem" }}>
              {t.empty}
            </p>
          ) : (
            <div className="blog-index__grid">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/${normalizedLang}/blog/${article.id}`}
                  className="blog-index__card"
                >
                  {article.thumb && (
                    <img
                      src={article.thumb}
                      alt={article.title ?? ""}
                      className="blog-index__card-thumb"
                      loading="lazy"
                    />
                  )}

                  <div className="blog-index__card-body">
                    <div className="blog-index__card-meta">
                      {article.category && (
                        <span className="blog-index__card-cat">
                          {article.category}
                        </span>
                      )}
                      {article.readTime && (
                        <span className="blog-index__card-read">
                          {article.readTime}
                        </span>
                      )}
                    </div>

                    {article.title && (
                      <p className="blog-index__card-title">{article.title}</p>
                    )}

                    {article.excerpt && (
                      <p className="blog-index__card-excerpt">{article.excerpt}</p>
                    )}

                    {article.date && (
                      <span className="blog-index__card-date">{article.date}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>

        <Footer lang={normalizedLang} />
      </div>
      <div className="fonds" />
    </>
  );
}