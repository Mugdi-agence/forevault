"use client";
// src/app/blog/home/BlogHome.jsx
// ─────────────────────────────────────────────────────────────────────────────
// CLIENT COMPONENT — page d'accueil interactive du blog
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ARTICLES, CATEGORIES } from "../content/index";

// ── helpers ───────────────────────────────────────────────────────────────────
function formatDate(str) {
    const d = new Date(str);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

const CATEGORY_ICONS = {
    All:        "◈",
    Strategy:   "🧠",
    Research:   "🔬",
    Production: "🎬",
    Growth:     "📈",
    Monetization: "💰",
};

// ── Featured article card ─────────────────────────────────────────────────────
function FeaturedCard({ article, onClick }) {
    const ref = useRef();
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add("bh-featured--visible"); obs.unobserve(el); } },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <article ref={ref} className="bh-featured" onClick={onClick} tabIndex={0}
            onKeyDown={e => e.key === "Enter" && onClick()}
            role="button" aria-label={`Read: ${article.title}`}>

            <div className="bh-featured__cover">
                <img src={article.thumb} alt={article.title} loading="eager" />
                <div className="bh-featured__cover-overlay" />
                <span className="bh-featured__read-time">{article.readTime} read</span>
            </div>

            <div className="bh-featured__body">
                <div className="bh-featured__meta">
                    <span className="bh-featured__cat">{article.category}</span>
                    <span className="bh-featured__dot" aria-hidden="true">·</span>
                    <time className="bh-featured__date">{formatDate(article.date)}</time>
                </div>

                <h2 className="bh-featured__title">{article.title}</h2>
                <p className="bh-featured__excerpt">{article.seo?.description}</p>

                <div className="bh-featured__cta">
                    Read article <span className="bh-featured__arrow">→</span>
                </div>
            </div>
        </article>
    );
}

// ── Standard article card ─────────────────────────────────────────────────────
function ArticleCard({ article, index, onClick }) {
    const ref = useRef();
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setTimeout(() => el.classList.add("bh-card--visible"), index * 55);
                    obs.unobserve(el);
                }
            },
            { threshold: 0.08 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [index]);

    return (
        <article ref={ref} className="bh-card" onClick={onClick} tabIndex={0}
            onKeyDown={e => e.key === "Enter" && onClick()}
            role="button" aria-label={`Read: ${article.title}`}>

            <div className="bh-card__thumb">
                <img src={article.thumb} alt={article.title} loading="lazy" />
            </div>

            <div className="bh-card__body">
                <div className="bh-card__meta">
                    <span className="bh-card__cat">{article.category}</span>
                    <span className="bh-card__time">{article.readTime}</span>
                </div>
                <h3 className="bh-card__title">{article.title}</h3>
                <p className="bh-card__excerpt">{article.seo?.description}</p>
                <div className="bh-card__footer">
                    <time className="bh-card__date">{formatDate(article.date)}</time>
                    <span className="bh-card__read">Read →</span>
                </div>
            </div>
        </article>
    );
}

// ── Stats strip ───────────────────────────────────────────────────────────────
function StatsStrip() {
    const stats = [
        { val: `${ARTICLES.length}`, label: "Articles published" },
        { val: "4",                  label: "Topics covered" },
        { val: "100% free",          label: "No paywall, ever" },
        { val: "↑ Weekly",          label: "New content" },
    ];
    return (
        <div className="bh-stats" role="list">
            {stats.map(({ val, label }) => (
                <div key={label} className="bh-stat" role="listitem">
                    <span className="bh-stat__val">{val}</span>
                    <span className="bh-stat__label">{label}</span>
                </div>
            ))}
        </div>
    );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function BlogHome() {
    const router   = useRouter();
    const heroRef  = useRef();
    const gridRef  = useRef();

    const [activeFilter, setActiveFilter] = useState("All");
    const [search,       setSearch]       = useState("");

    // GSAP entrance
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".bh-hero__eyebrow", { opacity: 0, y: 12, duration: 0.6, delay: 0.15, ease: "power3.out" });
            gsap.from(".bh-hero__title",   { opacity: 0, y: 20, duration: 0.75, delay: 0.28, ease: "power3.out" });
            gsap.from(".bh-hero__desc",    { opacity: 0, y: 16, duration: 0.65, delay: 0.42, ease: "power3.out" });
            gsap.from(".bh-hero__search",  { opacity: 0, y: 12, duration: 0.55, delay: 0.58, ease: "power3.out" });
            gsap.from(".bh-cats",          { opacity: 0, y: 10, duration: 0.5,  delay: 0.72, ease: "power2.out" });
            gsap.from(".bh-stats",         { opacity: 0, y: 14, duration: 0.55, delay: 0.85, ease: "power2.out" });
        });
        return () => ctx.revert();
    }, []);

    const filtered = useMemo(() => {
        const q = search.toLowerCase().trim();
        return ARTICLES.filter(a => {
            const matchCat  = activeFilter === "All" || a.category === activeFilter;
            const matchText = !q || a.title.toLowerCase().includes(q) ||
                              a.category.toLowerCase().includes(q) ||
                              (a.seo?.description ?? "").toLowerCase().includes(q);
            return matchCat && matchText;
        });
    }, [activeFilter, search]);

    const featured = filtered[0];
    const rest     = filtered.slice(1);

    function handleArticleClick(id) {
        router.push(`/blog/${id}`);
    }

    function handleCatClick(cat, el) {
        setActiveFilter(cat);
        gsap.fromTo(el, { scale: 0.92 }, { scale: 1, duration: 0.3, ease: "back.out(2)" });
    }

    return (
        <div className="bh-root">

            {/* ── Hero header ─────────────────────────────────────────────── */}
            <header className="bh-hero" ref={heroRef}>
                <div className="bh-hero__inner">
                    <span className="bh-hero__eyebrow">Creator Notes</span>

                    <h1 className="bh-hero__title">
                        The playbook<br />
                        <em>YouTube doesn't publish</em>
                    </h1>

                    <p className="bh-hero__desc">
                        In-depth guides on algorithm signals, retention mechanics, viral formats
                        and channel monetization. Written for creators who want to understand
                        the system — not just follow it.
                    </p>

                    {/* Search */}
                    <div className="bh-hero__search">
                        <span className="bh-hero__search-icon" aria-hidden="true">⌕</span>
                        <input
                            type="search"
                            placeholder="Search articles…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            aria-label="Search articles"
                        />
                        {search && (
                            <button
                                className="bh-hero__search-clear"
                                onClick={() => setSearch("")}
                                aria-label="Clear search">
                                ×
                            </button>
                        )}
                    </div>
                </div>

                {/* Decorative gradient blob */}
                <div className="bh-hero__blob" aria-hidden="true" />
            </header>

            {/* ── Stats ───────────────────────────────────────────────────── */}
            <StatsStrip />

            {/* ── Category filter ─────────────────────────────────────────── */}
            <nav className="bh-cats" aria-label="Filter by category">
                {CATEGORIES.map(c => (
                    <button
                        key={c}
                        type="button"
                        className={`bh-cat-pill ${activeFilter === c ? "bh-cat-pill--active" : ""}`}
                        onClick={e => handleCatClick(c, e.currentTarget)}>
                        <span className="bh-cat-pill__icon" aria-hidden="true">
                            {CATEGORY_ICONS[c] ?? "◇"}
                        </span>
                        {c}
                    </button>
                ))}
            </nav>

            {/* ── Results count + empty state ─────────────────────────────── */}
            {filtered.length === 0 ? (
                <div className="bh-empty">
                    <span className="bh-empty__icon" aria-hidden="true">📭</span>
                    <p className="bh-empty__text">
                        No articles match <strong>"{search}"</strong>.
                        <br />Try a different search or browse all topics.
                    </p>
                    <button className="bh-empty__reset" onClick={() => { setSearch(""); setActiveFilter("All"); }}>
                        Reset filters
                    </button>
                </div>
            ) : (
                <div className="bh-results-count">
                    {filtered.length} article{filtered.length > 1 ? "s" : ""}
                    {activeFilter !== "All" && <> in <strong>{activeFilter}</strong></>}
                    {search && <> matching <strong>"{search}"</strong></>}
                </div>
            )}

            {/* ── Content grid ────────────────────────────────────────────── */}
            {filtered.length > 0 && (
                <div ref={gridRef} className="bh-grid">

                    {/* Featured article — spans full width */}
                    {featured && (
                        <div className="bh-grid__featured">
                            <FeaturedCard
                                article={featured}
                                onClick={() => handleArticleClick(featured.id)}
                            />
                        </div>
                    )}

                    {/* Rest — card grid */}
                    {rest.length > 0 && (
                        <div className="bh-grid__cards">
                            {rest.map((a, i) => (
                                <ArticleCard
                                    key={a.id}
                                    article={a}
                                    index={i}
                                    onClick={() => handleArticleClick(a.id)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* ── Editorial about section ─────────────────────────────────── */}
            <section className="bh-about">
                <div className="bh-about__inner">
                    <span className="bh-about__eyebrow">About this blog</span>
                    <h2 className="bh-about__title">
                        Why most YouTube advice is wrong — and what to read instead
                    </h2>
                    <div className="bh-about__cols">
                        <p className="bh-about__p">
                            Most content about YouTube growth is written to get clicks, not to be accurate.
                            Screenshots of exceptional results. Tips that apply to 0.1% of channels.
                            Advice recycled from 2019 that no longer reflects how the algorithm distributes videos.
                        </p>
                        <p className="bh-about__p">
                            Creator Notes exists to fill a different space. Every piece here is built from
                            observable patterns — what actually changes CTR, why retention drops at specific
                            points, how the algorithm's test window works, what "viral" looks like numerically.
                            No hype. No "10 secret tricks." Just a rigorous look at the system.
                        </p>
                    </div>

                    <div className="bh-about__pillars">
                        {[
                            {
                                icon: "🧠",
                                title: "Strategy first",
                                desc: "Understanding the algorithm's incentive structure before optimizing anything else.",
                            },
                            {
                                icon: "📊",
                                title: "Data-grounded",
                                desc: "Every claim is tied to observable patterns, not anecdotes or cherry-picked screenshots.",
                            },
                            {
                                icon: "🔄",
                                title: "Iterative thinking",
                                desc: "The system changes. Guides are updated when evidence says the previous version was wrong.",
                            },
                        ].map(({ icon, title, desc }) => (
                            <div key={title} className="bh-pillar">
                                <span className="bh-pillar__icon" aria-hidden="true">{icon}</span>
                                <strong className="bh-pillar__title">{title}</strong>
                                <p className="bh-pillar__desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── All articles (alphabetical quick-access) ─────────────────── */}
            <section className="bh-index">
                <div className="bh-index__head">
                    <h2 className="bh-index__title">All articles</h2>
                    <span className="bh-index__count">{ARTICLES.length} posts</span>
                </div>
                <div className="bh-index__list">
                    {ARTICLES.map(a => (
                        <button
                            key={a.id}
                            className="bh-index__item"
                            onClick={() => handleArticleClick(a.id)}>
                            <span className="bh-index__item-cat">{a.category}</span>
                            <span className="bh-index__item-title">{a.title}</span>
                            <span className="bh-index__item-meta">
                                {formatDate(a.date)} · {a.readTime}
                            </span>
                            <span className="bh-index__item-arrow" aria-hidden="true">→</span>
                        </button>
                    ))}
                </div>
            </section>

        </div>
    );
}
