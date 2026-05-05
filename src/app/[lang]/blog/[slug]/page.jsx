// app/[lang]/blog/[slug]/page.jsx
import { notFound } from "next/navigation";
import Navbar from "../../nav";
import Footer from "../../footer";
import {
  ArticleHero,
  Lead,
  Body,
  H2,
  H3,
  Quote,
  Callout,
  Stats,
  Stat,
  Code,
  Divider,
  Tags,
  AuthorCard,
  Related,
} from "./blog-components";
import {
  getArticleBySlug,
  getArticleMetaBySlug,
  getAllArticleParams,
  getRelatedArticles,
} from "../../../articles/index";
import { supportedLangs, normalizeLang } from "../../../i18n";
import "../blog.scss";

// ── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllArticleParams(["en", "fr", "de", "ja"]);
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const normalizedLang = normalizeLang(lang);
  const meta = getArticleMetaBySlug(slug, normalizedLang);
  if (!meta) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://forevault.ink";

  return {
    title:       meta.seo?.title       ?? meta.title,
    description: meta.seo?.description ?? "",
    openGraph: {
      title:  meta.seo?.title ?? meta.title,
      description: meta.seo?.description ?? "",
      images: meta.seo?.image ? [{ url: meta.seo.image }] : [],
      type: "article",
    },
    alternates: {
      canonical: `${siteUrl}/${normalizedLang}/blog/${slug}`,
      languages: {
        ...Object.fromEntries(
          ["en", "fr", "de", "ja"].map((l) => [
            l,
            `${siteUrl}/${l}/blog/${slug}`,
          ])
        ),
        "x-default": `${siteUrl}/en/blog/${slug}`,
      },
    },
  };
}

// ── Block renderer ────────────────────────────────────────────────────────────
function renderBlock(block, i) {
  switch (block.type) {
    case "body":
      return <Body key={i}>{block.text}</Body>;
    case "callout":
      return (
        <Callout key={i} type={block.kind} title={block.title}>
          {block.text}
        </Callout>
      );
    case "stats":
      return (
        <Stats key={i}>
          {block.items.map((s, j) => (
            <Stat key={j} value={s.value} label={s.label} sub={s.sub} accent={s.accent} />
          ))}
        </Stats>
      );
    case "code":
      return <Code key={i} lang={block.lang}>{block.text}</Code>;
    default:
      return null;
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ArticlePage({ params }) {
  const { lang, slug } = await params;
  const normalizedLang = normalizeLang(lang);

  // Validate lang
  if (!["en", "fr", "de", "ja"].includes(normalizedLang)) notFound();

  // Load content module
  const module = await getArticleBySlug(slug);
  if (!module) notFound();

  const meta    = getArticleMetaBySlug(slug, normalizedLang);
  const content = module.getArticleContent(normalizedLang);
  const related = getRelatedArticles(slug, normalizedLang, 2);

  if (!content) notFound();

  return (
    <>
      <div className="blog-root">
        <Navbar lang={normalizedLang} />

        <a href={`/${normalizedLang}/blog`} className="blog-back">
          <span className="blog-back__arrow">←</span>
          {normalizedLang === "fr" ? "Retour au blog"
            : normalizedLang === "de" ? "Zurück zum Blog"
            : normalizedLang === "ja" ? "ブログに戻る"
            : "Back to Blog"}
        </a>

        <article className="article-root">

          {/* ── Hero ── */}
          <ArticleHero
            category={meta?.category}
            title={content.hero.title}
            lead={content.hero.lead}
            author={meta?.author}
            date={meta?.date}
            readTime={meta?.readTime}
            cover={content.hero.cover}
          />

          {/* ── Lead paragraph ── */}
          {content.lead && <Lead>{content.lead}</Lead>}

          {/* ── Sections ── */}
          {content.sections?.map((section, si) => {
            // Quote-only section
            if (section.quote) {
              return <Quote key={si}>{section.quote}</Quote>;
            }

            return (
              <section key={si}>
                {section.h2 && <H2>{section.h2}</H2>}
                {section.h3 && <H3>{section.h3}</H3>}
                {section.blocks?.map((block, bi) => renderBlock(block, bi))}
              </section>
            );
          })}

          <Divider />

          {/* ── Tags ── */}
          {meta?.tags?.length > 0 && <Tags tags={meta.tags} />}

          {/* ── Author card ── */}
          {meta?.author && (
            <AuthorCard
              name={meta.author.name}
              role={meta.author.role}
              bio={content.authorBio}
            />
          )}

          {/* ── Related ── */}
          {related.length > 0 && (
            <Related articles={related} lang={normalizedLang} />
          )}

        </article>

        <Footer lang={normalizedLang} />
      </div>
      <div className="fonds" />
    </>
  );
}