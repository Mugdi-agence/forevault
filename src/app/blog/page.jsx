// blog-page.jsx  —  "use client"
// ── Drop-in Next.js page component ──────────────────────────────────────────
// Place at:  app/blog/page.jsx   (or pages/blog.jsx)
// Imports:   ./blog-styles.scss  +  ./blog-components.jsx
//
// SEO:       generateMetadata() exported below (App Router)
//            Falls back to <Head> pattern for Pages Router
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import gsap from "gsap";
import "./blog-styles.scss";
import {
    ArticleHero,
    Body, Lead, H2, H3,
    Quote, Callout, Stats, Stat,
    Img, ImgGrid, Divider, Code, Tags,
    AuthorCard, Related,
    ExampleArticle,
} from "./blog-components";

import Navbar  from "../nav";
import Footer  from "../footer";

import { ARTICLES } from './content/index';

// ─────────────────────────────────────────────────────────────────────────────
// ── Sample article data ───────────────────────────────────────────────────────
// Replace with your CMS / MDX source.
// ─────────────────────────────────────────────────────────────────────────────
const CATEGORIES = ["All", "Strategy", "Production"];

// ─────────────────────────────────────────────────────────────────────────────
// ── Blog Page ─────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
export default function BlogPage() {
    const [activeId,    setActiveId]    = useState(null);
    const [activeFilter, setActiveFilter] = useState("All");
    const [search,      setSearch]      = useState("");
    const [progress,    setProgress]    = useState(0);   // 0–100 reading progress
    const [articles,    setArticles]    = useState(ARTICLES);

    const layoutRef = useRef();
    const scrollRef = useRef();   // reader scroll area

    // ── Initial GSAP entrance ────────────────────────────────────────────────
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(layoutRef.current, {
                opacity: 0, y: 40, scale: 0.97,
                duration: 0.9, ease: "expo.out",
            });
            gsap.from(".sidebar__head", {
                opacity: 0, y: 20,
                duration: 0.7, delay: 0.3, ease: "power3.out",
            });
            gsap.from(".article-card", {
                opacity: 0, x: -16,
                duration: 0.45, stagger: 0.07, delay: 0.5, ease: "power2.out",
            });
        });
        return () => ctx.revert();
    }, []);

    // ── Animate reader panel when article changes ────────────────────────────
    useEffect(() => {
        if (!activeId) return;
        setProgress(0);
        if (scrollRef.current) scrollRef.current.scrollTop = 0;

        const ctx = gsap.context(() => {
            gsap.from(".reader__content", {
                opacity: 0, x: 30,
                duration: 0.55, ease: "expo.out",
            });
        });
        return () => ctx.revert();
    }, [activeId]);

    // ── YouTube-style scroll progress bar ────────────────────────────────────
    const handleScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        const scrolled = el.scrollTop;
        const total    = el.scrollHeight - el.clientHeight;
        const pct      = total > 0 ? (scrolled / total) * 100 : 0;
        setProgress(pct);

        // Persist per-article reading progress to articles state
        setArticles(prev =>
            prev.map(a =>
                a.id === activeId
                    ? { ...a, progress: Math.round(pct) }
                    : a
            )
        );
    }, [activeId]);

    // ── Filter + search ──────────────────────────────────────────────────────
    const filtered = useMemo(() => {
        const q = search.toLowerCase().trim();
        return articles.filter(a => {
            const matchCat  = activeFilter === "All" || a.category === activeFilter;
            const matchText = !q || a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q);
            return matchCat && matchText;
        });
    }, [articles, activeFilter, search]);

    const activeArticle = articles.find(a => a.id === activeId);
    const ArticleContent = activeArticle?.component;

    function handleSelectArticle(id) {
        setActiveId(id);
        // Animate selected card
        gsap.to(`.article-card[data-id="${id}"]`, {
            x: 4, duration: 0.15, yoyo: true, repeat: 1, ease: "power2.inOut",
        });
    }

    function handleRelatedClick(id) {
        const exists = articles.find(a => a.id === id);
        if (exists) handleSelectArticle(id);
    }

    return (
        <div className="blog-app">
            <Navbar />

            <main className="blog-page">
                <div className="blog-layout" ref={layoutRef}>

                    {/* ── Left — article list ─────────────────────────────── */}
                    <aside className="sidebar" aria-label="Article list">
                        <div className="sidebar__head">
                            <span className="panel__badge">Blog</span>
                            <h2 className="sidebar__title">Creator Insights</h2>
                            <p className="sidebar__sub">
                                Strategy, analytics & growth for YouTube creators
                            </p>

                            {/* Search */}
                            <div className="sidebar__search">
                                <span className="sidebar__search-icon" aria-hidden="true">⌕</span>
                                <input
                                    type="search"
                                    placeholder="Search articles…"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    aria-label="Search articles"
                                />
                            </div>
                        </div>

                        {/* Category pills */}
                        <nav className="sidebar__cats" aria-label="Filter by category">
                            {CATEGORIES.map(c => (
                                <button
                                    key={c}
                                    type="button"
                                    className={`cat-pill ${activeFilter === c ? "cat-pill--active" : ""}`}
                                    onClick={() => setActiveFilter(c)}
                                >
                                    {c}
                                </button>
                            ))}
                        </nav>

                        {/* Article list */}
                        <div className="sidebar__list" role="list">
                            {filtered.length === 0 && (
                                <p style={{
                                    padding: "2rem 1.6rem",
                                    fontSize: "0.78rem",
                                    color: "rgba(255,255,255,0.25)",
                                    textAlign: "center",
                                }}>
                                    No articles found.
                                </p>
                            )}
                            {filtered.map(a => (
                                <article
                                    key={a.id}
                                    data-id={a.id}
                                    className={`article-card ${activeId === a.id ? "article-card--active" : ""}`}
                                    onClick={() => handleSelectArticle(a.id)}
                                    role="listitem button"
                                    tabIndex={0}
                                    onKeyDown={e => e.key === "Enter" && handleSelectArticle(a.id)}
                                    aria-current={activeId === a.id ? "true" : undefined}
                                >
                                    {/* Thumbnail */}
                                    <div className="article-card__thumb">
                                        {a.thumb && (
                                            <img src={a.thumb} alt={a.title} loading="lazy" />
                                        )}
                                        <span className="article-card__read-time">{a.readTime}</span>
                                    </div>

                                    {/* Meta */}
                                    <div className="article-card__meta">
                                        <p className="article-card__cat">{a.category}</p>
                                        <p className="article-card__title">{a.title}</p>
                                        <p className="article-card__date">{a.date}</p>
                                    </div>

                                    {/* Mini progress indicator */}
                                    {a.progress > 0 && (
                                        <div
                                            className="article-card__progress"
                                            style={{ width: `${a.progress}%` }}
                                            aria-label={`${a.progress}% read`}
                                        />
                                    )}
                                </article>
                            ))}
                        </div>
                    </aside>

                    {/* ── Right — reader ──────────────────────────────────── */}
                    <section className="reader" aria-label="Article reader">

                        {/* Scrollable content */}
                        <div
                            className="reader__scroll"
                            ref={scrollRef}
                            onScroll={handleScroll}
                        >
                            {!activeId ? (
                                <div className="reader__empty">
                                    <span className="reader__empty-icon" aria-hidden="true">📖</span>
                                    <p className="reader__empty-text">
                                        Select an article on the left<br />
                                        to start reading
                                    </p>
                                </div>
                            ) : (
                                <div className="reader__content">
                                    {ArticleContent && (
                                        <ArticleContent
                                            onRelatedClick={handleRelatedClick}
                                        />
                                    )}
                                </div>
                            )}
                        </div>

                        {/* YouTube-style reading progress bar */}
                        <div
                            className="reader__progress-bar"
                            role="progressbar"
                            aria-valuenow={Math.round(progress)}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label="Reading progress"
                        >
                            <div
                                className="reader__progress-bar-fill"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
}
