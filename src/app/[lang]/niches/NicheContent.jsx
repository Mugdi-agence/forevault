// app/niches/NicheContent.jsx
// ─────────────────────────────────────────────────────────────────────────────
// SERVER COMPONENT (SSR) — pas de directive "use client"
// Reçoit `lang` depuis la page parente et lit le contenu depuis nicheContent.js
// ─────────────────────────────────────────────────────────────────────────────

import NicheFaqItem from "./NicheFaqItem";
import nicheContent from "./niche-content";

export default function NicheContent({ lang = "en" }) {
    const c = nicheContent[lang] ?? nicheContent["en"];

    return (
        <section className="nf-content" aria-label="About the YouTube Niche Finder">

            {/* ── INTRO ─────────────────────────────────────────────────────── */}
            <div className="nf-content__intro">
                <span className="nf-content__eyebrow">{c.hero.eyebrow}</span>
                <h2 className="nf-content__h2">{c.hero.title}</h2>
                <p className="nf-content__lead">{c.hero.lead}</p>
            </div>

            {/* ── STATS ─────────────────────────────────────────────────────── */}
            <div className="nf-content__stats" role="list">
                {c.stats.map(s => (
                    <div key={s.label} className="nf-content__stat" role="listitem">
                        <span className="nf-content__stat-val">{s.value}</span>
                        <span className="nf-content__stat-label">{s.label}</span>
                    </div>
                ))}
            </div>

            {/* ── METRICS ───────────────────────────────────────────────────── */}
            <div className="nf-content__block">
                <h2 className="nf-content__h2">{c.metricsTitle}</h2>
                <p className="nf-content__p">{c.metricsIntro}</p>
                <div className="nf-content__metrics">
                    {c.metrics.map(m => (
                        <div key={m.title} className="nf-content__metric-card">
                            <div className="nf-content__metric-icon">{m.icon}</div>
                            <div>
                                <h3 className="nf-content__h3">{m.title}</h3>
                                <p className="nf-content__p">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── TIERS ─────────────────────────────────────────────────────── */}
            <div className="nf-content__block">
                <h2 className="nf-content__h2">{c.tiersTitle}</h2>
                <p className="nf-content__p">{c.tiersIntro}</p>
                <div className="nf-content__tiers">
                    {c.tiers.map(t => (
                        <div key={t.tier} className={`nf-content__tier nf-content__tier--${t.cls}`}>
                            <div className="nf-content__tier-head">
                                <span className="nf-content__tier-badge">{t.tier}</span>
                                <span className="nf-content__tier-rpm">{t.rpm} RPM</span>
                            </div>
                            <div className="nf-content__tier-niches">
                                {t.niches.map(n => <span key={n}>{n}</span>)}
                            </div>
                            <p className="nf-content__tier-why">{t.why}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── HOW TO CHOOSE ─────────────────────────────────────────────── */}
            <div className="nf-content__block">
                <h2 className="nf-content__h2">{c.howToTitle}</h2>
                <p className="nf-content__p">{c.howToIntro}</p>
                <ol className="nf-content__steps">
                    {c.howToSteps.map((step, i) => (
                        <li key={i}>
                            <strong>{step.bold}</strong>{" "}
                            {i === 4 ? (
                                <>
                                    {step.text.split("Revenue Calculator")[0]}
                                    <a href={c.ctas[0].href} className="nf-content__link">
                                        Revenue Calculator
                                    </a>
                                    {step.text.split("Revenue Calculator")[1] ?? ""}
                                </>
                            ) : step.text}
                        </li>
                    ))}
                </ol>
            </div>

            {/* ── CTAs ──────────────────────────────────────────────────────── */}
            <div className="nf-content__ctas">
                <p className="nf-content__ctas-label">Explore more tools</p>
                <div className="nf-content__cta-grid">
                    {c.ctas.map(cta => (
                        <a key={cta.label} href={cta.href} className="nf-content__cta-card">
                            <span className="nf-content__cta-icon">{cta.icon}</span>
                            <div>
                                <strong>{cta.label}</strong>
                                <span>{cta.desc}</span>
                            </div>
                            <span className="nf-content__cta-arrow">→</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* ── FAQ ───────────────────────────────────────────────────────── */}
            <div className="nf-content__faq" id="faq">
                <h2 className="nf-content__h2">{c.faqTitle}</h2>
                <p className="nf-content__p" style={{ marginBottom: "2rem" }}>
                    {c.faqIntro}
                </p>
                <div className="nf-faq__list">
                    {c.faq.map(({ q, a }, i) => (
                        <NicheFaqItem key={i} q={q} a={a} />
                    ))}
                </div>
            </div>

            {/* ── DISCLAIMER ────────────────────────────────────────────────── */}
            <p className="nf-content__disclaimer">
                {c.disclaimer}{" "}
                <a href="/terms"   className="nf-content__link">Terms of Use</a>{" "}and{" "}
                <a href="/privacy" className="nf-content__link">Privacy Policy</a>.
            </p>

        </section>
    );
}