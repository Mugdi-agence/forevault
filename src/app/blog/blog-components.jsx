// blog-components.jsx
// ── Ready-made components for creating blog content quickly ──────────────────
// Usage: import { Body, H2, H3, Quote, Callout, Stat, Stats, Img, ImgGrid,
//                  Divider, Code, Tags, AuthorCard, Related, Lead } from './blog-components'

import { useEffect, useRef } from "react";

// ── Intersection-based reveal hook ────────────────────────────────────────────
export function useReveal(threshold = 0.15) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible");
                    observer.unobserve(el);
                }
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);
    return ref;
}

// ── Animated image hook ───────────────────────────────────────────────────────
export function useImgReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const img = ref.current;
        if (!img) return;
        const onLoad = () => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        img.classList.add("is-visible");
                        observer.unobserve(img);
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(img);
        };
        if (img.complete) onLoad();
        else img.addEventListener("load", onLoad);
        return () => img.removeEventListener("load", onLoad);
    }, []);
    return ref;
}

// ─────────────────────────────────────────────────────────────────────────────
// Lead — intro paragraph (large italic)
// Usage: <Lead>Your captivating intro here.</Lead>
// ─────────────────────────────────────────────────────────────────────────────
export function Lead({ children }) {
    const ref = useReveal();
    return (
        <p ref={ref} className="art-hero__lead reveal">
            {children}
        </p>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Body — regular paragraph
// Usage: <Body>Regular paragraph text here. Supports <strong> and <em>.</Body>
// ─────────────────────────────────────────────────────────────────────────────
export function Body({ children, className = "" }) {
    const ref = useReveal();
    return (
        <p ref={ref} className={`art-body reveal ${className}`}>
            {children}
        </p>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// H2 — section heading
// Usage: <H2>Section Title</H2>
// ─────────────────────────────────────────────────────────────────────────────
export function H2({ children }) {
    const ref = useReveal();
    return (
        <h2 ref={ref} className="art-h2 reveal">
            {children}
        </h2>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// H3 — sub-section heading
// Usage: <H3>Sub-section Title</H3>
// ─────────────────────────────────────────────────────────────────────────────
export function H3({ children }) {
    const ref = useReveal();
    return (
        <h3 ref={ref} className="art-h3 reveal">
            {children}
        </h3>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Quote — pull quote
// Usage: <Quote author="John Doe, CEO">Some memorable quote goes here.</Quote>
// ─────────────────────────────────────────────────────────────────────────────
export function Quote({ children, author }) {
    const ref = useReveal(0.2);
    return (
        <blockquote ref={ref} className="art-quote reveal">
            <span className="art-quote__mark" aria-hidden="true">"</span>
            <p className="art-quote__text">{children}</p>
            {author && <p className="art-quote__author">— {author}</p>}
        </blockquote>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Callout — info / warning / tip / danger box
// Usage: <Callout type="tip" title="Pro tip">Short actionable advice.</Callout>
// type: "info" | "warning" | "tip" | "danger"
// ─────────────────────────────────────────────────────────────────────────────
const CALLOUT_ICONS = {
    info:    "ℹ️",
    warning: "⚠️",
    tip:     "💡",
    danger:  "🚫",
};

export function Callout({ children, type = "info", title }) {
    const ref = useReveal();
    return (
        <div ref={ref} className={`art-callout art-callout--${type} reveal`}>
            <span className="art-callout__icon" aria-hidden="true">
                {CALLOUT_ICONS[type]}
            </span>
            <div className="art-callout__body">
                {title && <p className="art-callout__title">{title}</p>}
                {children}
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stats — animated stat cards row
// Usage:
//   <Stats>
//     <Stat value="$4.2M" label="Revenue" sub="+18% YoY" accent />
//     <Stat value="98%" label="Uptime" />
//   </Stats>
// ─────────────────────────────────────────────────────────────────────────────
export function Stats({ children }) {
    const ref = useReveal();
    return (
        <div ref={ref} className="art-stats reveal">
            {children}
        </div>
    );
}

export function Stat({ value, label, sub, accent = false }) {
    return (
        <div className={`art-stat ${accent ? "art-stat--accent" : ""}`}>
            <span className="art-stat__value">{value}</span>
            <span className="art-stat__label">{label}</span>
            {sub && <span className="art-stat__sub">{sub}</span>}
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Img — single image with caption and scroll reveal
// Usage:
//   <Img src="/photo.jpg" alt="Description" caption="Optional caption" full />
// full: stretches beyond content width (full bleed)
// ─────────────────────────────────────────────────────────────────────────────
export function Img({ src, alt, caption, full = false }) {
    const wrapRef = useReveal(0.1);
    const imgRef  = useImgReveal();
    return (
        <figure ref={wrapRef} className={`art-img ${full ? "art-img--full" : ""} reveal`}>
            <div className="art-img__wrap">
                <img ref={imgRef} src={src} alt={alt} loading="lazy" />
            </div>
            {caption && (
                <figcaption className="art-img__caption">{caption}</figcaption>
            )}
        </figure>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// ImgGrid — 2 or 3 column image grid
// Usage:
//   <ImgGrid cols={2}>
//     <Img src="/a.jpg" alt="A" />
//     <Img src="/b.jpg" alt="B" />
//   </ImgGrid>
// ─────────────────────────────────────────────────────────────────────────────
export function ImgGrid({ children, cols = 2 }) {
    const ref = useReveal();
    return (
        <div ref={ref} className={`art-img-grid art-img-grid--${cols} reveal`}>
            {children}
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Divider — decorative section break
// Usage: <Divider label="•" />  or  <Divider label="Chapter 2" />
// ─────────────────────────────────────────────────────────────────────────────
export function Divider({ label = "•••" }) {
    return (
        <div className="art-divider" role="separator">
            <span className="art-divider__inner">{label}</span>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Code — syntax-highlighted code block with copy button
// Usage:
//   <Code lang="javascript">{`const x = 42;`}</Code>
// ─────────────────────────────────────────────────────────────────────────────
export function Code({ children, lang = "code" }) {
    const ref = useReveal();
    function handleCopy() {
        navigator.clipboard.writeText(children).catch(() => {});
    }
    return (
        <div ref={ref} className="art-code reveal">
            <div className="art-code__header">
                <span className="art-code__lang">{lang}</span>
                <button className="art-code__copy" onClick={handleCopy} type="button">
                    Copy
                </button>
            </div>
            <div className="art-code__body">
                <pre><code>{children}</code></pre>
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Tags — article tag cloud
// Usage: <Tags tags={["SEO", "YouTube", "Monetization"]} onTag={fn} />
// ─────────────────────────────────────────────────────────────────────────────
export function Tags({ tags = [], onTag }) {
    return (
        <div className="art-tags">
            {tags.map(t => (
                <button
                    key={t}
                    type="button"
                    className="art-tag"
                    onClick={() => onTag?.(t)}
                >
                    #{t}
                </button>
            ))}
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// AuthorCard — full author bio at end of article
// Usage:
//   <AuthorCard
//     name="Jane Doe"
//     role="Senior Editor"
//     avatar="/jane.jpg"
//     bio="Jane covers digital marketing and creator monetization strategies..."
//   />
// ─────────────────────────────────────────────────────────────────────────────
export function AuthorCard({ name, role, avatar, bio }) {
    const ref = useReveal();
    return (
        <div ref={ref} className="art-author reveal">
            {avatar
                ? <img src={avatar} alt={name} className="art-author__avatar" />
                : <div className="art-author__avatar" style={{ background: "#2a2a2a" }} />
            }
            <div className="art-author__info">
                <p className="art-author__name">{name}</p>
                {role && <p className="art-author__role">{role}</p>}
                {bio  && <p className="art-author__bio">{bio}</p>}
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Related — related articles grid at end of article
// Usage:
//   <Related
//     articles={[
//       { id: "1", title: "How to grow…", category: "Growth", thumb: "/img.jpg", onClick: fn },
//       { id: "2", title: "Best niches…", category: "Strategy", thumb: "/img2.jpg", onClick: fn },
//     ]}
//   />
// ─────────────────────────────────────────────────────────────────────────────
export function Related({ articles = [] }) {
    const ref = useReveal();
    if (!articles.length) return null;
    return (
        <div ref={ref} className="art-related reveal">
            <p className="art-related__title">Continue reading</p>
            <div className="art-related__grid">
                {articles.map(a => (
                    <div
                        key={a.id}
                        className="art-related-card"
                        onClick={a.onClick}
                        role="button"
                        tabIndex={0}
                        onKeyDown={e => e.key === "Enter" && a.onClick?.()}
                    >
                        {a.thumb && (
                            <img
                                src={a.thumb}
                                alt={a.title}
                                className="art-related-card__thumb"
                                loading="lazy"
                            />
                        )}
                        <div className="art-related-card__info">
                            {a.category && (
                                <p className="art-related-card__cat">{a.category}</p>
                            )}
                            <p className="art-related-card__title">{a.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// ArticleHero — full article header (title, lead, byline, cover image)
// Usage:
//   <ArticleHero
//     category="Monetization"
//     title="How to Maximize Your YouTube RPM in 2025"
//     lead="A deep-dive into the strategies top creators use to earn more per thousand views."
//     author={{ name: "Jane Doe", role: "Editor", avatar: "/jane.jpg" }}
//     date="March 15, 2025"
//     readTime="8 min read"
//     cover={{ src: "/cover.jpg", alt: "YouTube studio", caption: "Optional caption" }}
//   />
// ─────────────────────────────────────────────────────────────────────────────
export function ArticleHero({ category, title, lead, author, date, readTime, cover }) {
    const imgRef = useImgReveal();
    return (
        <header className="art-hero">
            {category && (
                <span className="art-hero__cat">{category}</span>
            )}
            <h1 className="art-hero__title">{title}</h1>
            {lead && <p className="art-hero__lead">{lead}</p>}

            {(author || date || readTime) && (
                <div className="art-hero__byline">
                    {author?.avatar
                        ? <img src={author.avatar} alt={author.name} className="art-hero__avatar" />
                        : <div className="art-hero__avatar" style={{ background: "#2a2a2a", borderRadius: "50%" }} />
                    }
                    <div className="art-hero__author-info">
                        {author?.name && (
                            <p className="art-hero__author-name">{author.name}</p>
                        )}
                        <p className="art-hero__author-meta">
                            {[author?.role, date, readTime].filter(Boolean).join(" · ")}
                        </p>
                    </div>
                </div>
            )}

            {cover?.src && (
                <figure className="art-hero__cover">
                    <img ref={imgRef} src={cover.src} alt={cover.alt || title} loading="eager" />
                    {cover.caption && (
                        <figcaption className="art-hero__cover-caption">
                            {cover.caption}
                        </figcaption>
                    )}
                </figure>
            )}
        </header>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXAMPLE — full article using all components
// ─────────────────────────────────────────────────────────────────────────────
export function ExampleArticle({ onRelatedClick }) {
    return (
        <>
            <ArticleHero
                category="Monetization"
                title="How to Maximize Your YouTube RPM in 2025"
                lead="A deep-dive into the strategies top creators use to earn significantly more per thousand views — without growing their subscriber count."
                author={{ name: "Jane Doe", role: "Senior Editor", avatar: null }}
                date="March 15, 2025"
                readTime="8 min read"
                cover={{ src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800", alt: "YouTube Creator Studio" }}
            />

            <Lead>
                Most creators obsess over views. The smart ones obsess over RPM. Here's why that single metric can double your revenue — and exactly how to move it.
            </Lead>

            <H2>What is RPM and why does it matter?</H2>

            <Body>
                RPM (Revenue Per Mille) represents how much you earn per 1,000 video views — <strong>after YouTube's 45% cut</strong>. Unlike CPM, which measures advertiser spend, RPM is your actual take-home metric. Two channels with identical view counts can have wildly different incomes based on RPM alone.
            </Body>

            <Stats>
                <Stat value="$3.50" label="Average RPM" sub="All niches combined" />
                <Stat value="$18.40" label="Finance RPM" sub="Top-tier niche" accent />
                <Stat value="$0.12" label="Shorts RPM" sub="~96% lower than long-form" />
            </Stats>

            <Callout type="tip" title="The 8-minute rule">
                Videos over 8 minutes unlock mid-roll ad slots, which can increase your effective RPM by 30–60%. This single threshold is responsible for more creator revenue than any algorithm change in recent memory.
            </Callout>

            <H2>The four levers of higher RPM</H2>

            <H3>1. Niche selection</H3>

            <Body>
                Finance, business, real estate, and software tutorials consistently command the highest advertiser bids. The gap between a <em>gaming channel</em> and a <em>personal finance channel</em> at the same view count can be 5–8× in monthly revenue.
            </Body>

            <Quote author="Graham Stephan, Financial Creator">
                I didn't switch to finance content for the views. I switched because the RPM made everything else feel like a hobby.
            </Quote>

            <H3>2. Audience geography</H3>

            <Body>
                Where your viewers are located has a dramatic effect on ad rates. A US-based viewer is worth roughly 4–6× more to advertisers than a viewer from a lower-purchasing-power market. This doesn't mean you should gate your content — it means understanding your analytics deeply.
            </Body>

            <Img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                alt="Analytics dashboard"
                caption="Your geography breakdown in YouTube Studio — the most underread dashboard."
            />

            <H3>3. Video duration and ad density</H3>

            <Body>
                Longer videos allow more ad placements. YouTube's algorithm also tends to favor longer watch sessions, creating a positive feedback loop: better retention signals → more impressions → higher CPMs from advertisers competing for prime slots.
            </Body>

            <Callout type="warning" title="Don't pad your videos">
                Ad density only helps if watch time holds. Artificially extending videos kills retention, which tanks your RPM more than it helps. Aim for <strong>natural density</strong> — more content, not more filler.
            </Callout>

            <H2>Reading your analytics like a pro</H2>

            <Body>
                Your YouTube Studio Revenue tab shows RPM broken down by video, time period, and traffic source. The most actionable pattern: compare your top-10 RPM videos against your top-10 view-count videos. They're rarely the same list — and that gap is your roadmap.
            </Body>

            <Code lang="text">{`Studio → Analytics → Revenue → RPM
→ Filter: Last 90 days
→ Group by: Video
→ Sort by: RPM (descending)

Look for:
  • Videos with high RPM + low views = underserved topics
  • Videos with low RPM + high views = traffic you're monetizing poorly`}</Code>

            <ImgGrid cols={2}>
                <Img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400" alt="Charts" caption="Revenue per video" />
                <Img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400" alt="Analytics" caption="RPM over time" />
            </ImgGrid>

            <Divider />

            <Callout type="info" title="Key takeaway">
                RPM isn't a fixed attribute of your channel — it's a dynamic signal you can actively improve through niche, format, duration, and retention decisions. Start with the 8-minute threshold. Then audit your geography and topic mix.
            </Callout>

            <Tags tags={["RPM", "Monetization", "YouTube", "AdSense", "Creator Economy"]} />

            <AuthorCard
                name="Jane Doe"
                role="Senior Editor — Creator Strategy"
                bio="Jane has spent 6 years analyzing creator economics across YouTube, Twitch, and emerging platforms. She previously led growth at a mid-size MCN before joining this publication."
            />

            <Related
                articles={[
                    {
                        id: "r1",
                        title: "The Best Niches for YouTube Monetization in 2025",
                        category: "Strategy",
                        thumb: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400",
                        onClick: () => onRelatedClick?.("best-niches"),
                    },
                    {
                        id: "r2",
                        title: "How Geography Affects Your YouTube Revenue",
                        category: "Analytics",
                        thumb: "https://images.unsplash.com/photo-1526628953301-3cd0e5ead4d8?w=400",
                        onClick: () => onRelatedClick?.("geography-revenue"),
                    },
                ]}
            />
        </>
    );
}
