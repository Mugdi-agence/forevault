// src/app/[lang]/blog/blog-components.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Composants de rendu pour les articles de blog Forevault
// Usage : import { ArticleHero, Lead, Body, H2, ... } from "../blog-components"
// ─────────────────────────────────────────────────────────────────────────────

// ── Hero ──────────────────────────────────────────────────────────────────────
export function ArticleHero({ category, title, lead, author, date, readTime, cover }) {
    const initials = author?.name
        ?.split(" ")
        .map(w => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase() ?? "F";

    return (
        <header className="article-hero">
            <div className="article-hero__meta">
                {category && <span className="article-hero__cat">{category}</span>}
                {date && (
                    <>
                        <span className="article-hero__dot" />
                        <span className="article-hero__date">{date}</span>
                    </>
                )}
                {readTime && (
                    <>
                        <span className="article-hero__dot" />
                        <span className="article-hero__read">{readTime}</span>
                    </>
                )}
            </div>

            <h1 className="article-hero__title">{title}</h1>

            {lead && <p className="article-hero__lead">{lead}</p>}

            {cover?.src && (
                <div className="article-hero__cover">
                    <img src={cover.src} alt={cover.alt ?? title} loading="eager" />
                </div>
            )}

            {author && (
                <div className="article-hero__author">
                    <div className="article-hero__author-avatar">{initials}</div>
                    <div>
                        <div className="article-hero__author-name">{author.name}</div>
                        {author.role && (
                            <div className="article-hero__author-role">{author.role}</div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}

// ── Prose ─────────────────────────────────────────────────────────────────────
export function Lead({ children }) {
    return <p className="article-lead">{children}</p>;
}

export function Body({ children }) {
    return <p className="article-body">{children}</p>;
}

export function H2({ children }) {
    return <h2 className="article-h2">{children}</h2>;
}

export function H3({ children }) {
    return <h3 className="article-h3">{children}</h3>;
}

// ── Quote ─────────────────────────────────────────────────────────────────────
export function Quote({ children }) {
    return (
        <blockquote className="article-quote">
            <p>{children}</p>
        </blockquote>
    );
}

// ── Callout ───────────────────────────────────────────────────────────────────
const CALLOUT_ICONS = { tip: "💡", info: "ℹ️", warn: "⚠️" };

export function Callout({ type = "info", title, children }) {
    return (
        <div className={`article-callout article-callout--${type}`}>
            <span className="article-callout__icon">{CALLOUT_ICONS[type]}</span>
            <div className="article-callout__content">
                {title && <p className="article-callout__title">{title}</p>}
                <p className="article-callout__body">{children}</p>
            </div>
        </div>
    );
}

// ── Stats ─────────────────────────────────────────────────────────────────────
export function Stats({ children }) {
    return <div className="article-stats">{children}</div>;
}

export function Stat({ value, label, sub, accent }) {
    return (
        <div className={`article-stats__item${accent ? " article-stats__item--accent" : ""}`}>
            <span className="article-stats__value">{value}</span>
            <span className="article-stats__label">{label}</span>
            {sub && <span className="article-stats__sub">{sub}</span>}
        </div>
    );
}

// ── Code ──────────────────────────────────────────────────────────────────────
export function Code({ lang, children }) {
    return (
        <div className="article-code">
            <div className="article-code__header">
                <span className="article-code__dot" />
                <span className="article-code__dot" />
                <span className="article-code__dot" />
                {lang && <span className="article-code__lang">{lang}</span>}
            </div>
            <pre>{children}</pre>
        </div>
    );
}

// ── Divider ───────────────────────────────────────────────────────────────────
export function Divider() {
    return <hr className="article-divider" />;
}

// ── Tags ──────────────────────────────────────────────────────────────────────
export function Tags({ tags = [] }) {
    return (
        <div className="article-tags">
            {tags.map(tag => (
                <span key={tag} className="article-tags__tag">{tag}</span>
            ))}
        </div>
    );
}

// ── Author card ───────────────────────────────────────────────────────────────
export function AuthorCard({ name, role, bio }) {
    const initials = name
        ?.split(" ")
        .map(w => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase() ?? "F";

    return (
        <div className="article-author">
            <div className="article-author__avatar">{initials}</div>
            <div className="article-author__info">
                <p className="article-author__name">{name}</p>
                {role && <p className="article-author__role">{role}</p>}
                {bio  && <p className="article-author__bio">{bio}</p>}
            </div>
        </div>
    );
}

// ── Related articles ──────────────────────────────────────────────────────────
export function Related({ articles = [], lang = "en", labelOverride }) {
    const label = labelOverride ?? {
        en: "Continue reading",
        fr: "Continuer la lecture",
        de: "Weiterlesen",
        ja: "続きを読む",
    }[lang] ?? "Continue reading";

    return (
        <div className="article-related">
            <p className="article-related__title">{label}</p>
            <div className="article-related__grid">
                {articles.map(a => (
                    <a
                        key={a.id}
                        href={`/${lang}/blog/${a.id}`}
                        className="article-related__card"
                    >
                        {a.thumb && (
                            <img
                                src={a.thumb}
                                alt={a.title}
                                className="article-related__thumb"
                                loading="lazy"
                            />
                        )}
                        <div className="article-related__body">
                            {a.category && (
                                <span className="article-related__cat">{a.category}</span>
                            )}
                            <p className="article-related__title">{a.title}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}