"use client"
import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./nav";
import Footer from "./footer";
import "./landing.scss";
import Image from "next/image";
 
gsap.registerPlugin(ScrollTrigger);
 
// ── Data ─────────────────────────────────────────────────
const HERO = {
    badge: "Free · No signup · Updated monthly",
    headline: ["Know exactly", "what your", "channel earns."],
    sub: "The most accurate YouTube RPM calculator. Estimate AdSense revenue by niche, geography, video format and retention — in under 5 seconds.",
    cta_primary:   { label: "Calculate my earnings", href: "/youtube-revenue-calculator" },
    cta_secondary: { label: "Browse niches",         href: "/niches"     },
    stats: [
        { value: "21",   label: "Niches analysed"  },
        { value: "38",   label: "Countries covered" },
        { value: "100%", label: "Free forever"      },
        { value: "<5s",  label: "To get results"    },
    ],
};
 
const FEATURES = [
    { sym: "◈", title: "21 niches, real RPMs",       desc: "Each niche has independently researched base RPMs — not blended averages." },
    { sym: "◉", title: "38 country multipliers",     desc: "From US (×2.20) to Vietnam (×0.20) — geography is the biggest lever." },
    { sym: "◐", title: "Mid-roll ad modelling",      desc: "Videos ≥8 min unlock mid-rolls. We model the exact revenue lift." },
    { sym: "◑", title: "Retention-adjusted RPM",     desc: "Audiences watching past 50% signal quality — your effective RPM reflects it." },
];
 
const HOW_IT_WORKS = [
    { num: "01", title: "Enter your metrics on the fields",         desc: "View count, retention rate, and video duration — all factored in." },
    { num: "02", title: "Pick your niche & country",  desc: "21 niches and 38 country tiers, each with calibrated RPM multipliers." },
    { num: "03", title: "Get your earnings estimate", desc: "Mid-roll bonuses, retention bonuses and country multipliers applied automatically." },
    { num: "04", title: "Compare across all niches",  desc: "See exactly how your niche ranks against every alternative — instantly." },
];
 
const NICHE_PREVIEWS = [
    { name: "AI Tutorials",  rpm: 13.50, tag: "trending", tagLabel: "↑ Trending" },
    { name: "AI News",       rpm: 10.80, tag: "trending", tagLabel: "↑ Trending" },
    { name: "Business Docs", rpm: 10.50, tag: "high",     tagLabel: "High RPM"  },
    { name: "Science Edu",   rpm: 7.80,  tag: "mid",      tagLabel: "Steady"    },
    { name: "True Crime",    rpm: 5.20,  tag: "mid",      tagLabel: "Steady"    },
    { name: "Gaming",        rpm: 2.50,  tag: "low",      tagLabel: "Low RPM"   },
];
 
const CTA_SECTION = {
    headline: "Ready to know what your channel is really worth?",
    sub:      "Thousands of YouTube creators use Forevault to plan content strategy around real, actionable revenue data — not guesswork. Join them and grow smarter.",
    cta_primary:   { label: "Calculate for free", href: "/youtube-revenue-calculator" },
    cta_secondary: { label: "Browse all niches",  href: "/niches"     },
    trust: ["No sign-up required", "100% free", "Updated monthly"],
};
 
// ── Helpers ───────────────────────────────────────────────
function Badge({ children }) {
    return <span className="lp-badge">{children}</span>;
}
 
function RevealBlock({ className, children, delay = 0, x = 0, y = 30 }) {
    const ref = useRef();
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        gsap.fromTo(el,
            { opacity: 0, y, x },
            {
                opacity: 1, y: 0, x: 0,
                duration: 0.75, delay,
                ease: "expo.out",
                clearProps: "opacity,transform",
                scrollTrigger: { trigger: el, start: "top 88%", once: true },
            }
        );
    }, []);
    return <div ref={ref} className={className}>{children}</div>;
}
 
function StaggerGrid({ className, children, stagger = 0.08 }) {
    const ref = useRef();
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        gsap.fromTo(el.children,
            { opacity: 0, y: 28, scale: 0.96 },
            {
                opacity: 1, y: 0, scale: 1,
                duration: 0.55, stagger,
                ease: "back.out(1.4)",
                clearProps: "opacity,transform",
                scrollTrigger: { trigger: el, start: "top 85%", once: true },
            }
        );
    }, []);
    return <div ref={ref} className={className}>{children}</div>;
}
 
// ── SaaS Mockup ───────────────────────────────────────────
function CalcMockup({ compact = false }) {
    const BARS = [
        { label: "AI Tools",   pct: 100, active: true },
        { label: "Finance",    pct: 78 },
        { label: "Business",   pct: 70 },
        { label: "True Crime", pct: 38 },
        { label: "Gaming",     pct: 18 },
    ];
 
    return (
        <div className={`calc-mockup ${compact ? "calc-mockup--compact" : ""}`} role="img" aria-label="Calculator preview">
            {/* Browser bar */}
            <div className="calc-mockup__bar">
                <div className="calc-mockup__dots">
                    <span className="dot dot--r" /><span className="dot dot--y" /><span className="dot dot--g" />
                </div>
                <div className="calc-mockup__url">
                    <span className="calc-mockup__lock">⊕</span>
                    forevault.ink/youtube-revenue-calculator
                </div>
            </div>
 
            {/* Content */}
            <div className="calc-mockup__body">
                {/* Left — form */}
                <div className="cm-form">
                    <div className="cm-form-head">
                        <span className="cm-yt-badge">YouTube</span>
                        <span className="cm-form-title">Revenue Calculator</span>
                    </div>
                    {[
                        { label: "Views",     val: "1,000,000"      },
                        { label: "Niche",     val: "AI Tools ▾",    hl: true },
                        { label: "Geography", val: "United States ▾"},
                        { label: "Duration",  val: "12m 30s"        },
                    ].map(f => (
                        <div key={f.label} className="cm-field">
                            <span className="cm-field-label">{f.label}</span>
                            <div className={`cm-field-input ${f.hl ? "cm-field-input--hl" : ""}`}>{f.val}</div>
                        </div>
                    ))}
                    <div className="cm-cta-btn">Calculate earnings →</div>
                </div>
 
                {/* Right — result */}
                <div className="cm-result">
                    <div className="cm-result-hero">
                        <p className="cm-result-label">Estimated earnings</p>
                        <p className="cm-result-value">$13,850</p>
                        <p className="cm-result-avg">All-niche avg: $4,210</p>
                    </div>
 
                    <div className="cm-meta-row">
                        {[
                            { k: "RPM",      v: "$13.85"   },
                            { k: "Format",   v: "Long Form"},
                            { k: "Ad slots", v: "1 mid-roll", hl: true },
                        ].map(m => (
                            <div key={m.k} className={`cm-meta ${m.hl ? "cm-meta--hl" : ""}`}>
                                <span>{m.k}</span><strong>{m.v}</strong>
                            </div>
                        ))}
                    </div>
 
                    <div className="cm-chart">
                        <p className="cm-chart-title">Niche comparison</p>
                        {BARS.map(b => (
                            <div key={b.label} className="cm-bar">
                                <span className="cm-bar-label">{b.label}</span>
                                <div className="cm-bar-track">
                                    <div className={`cm-bar-fill ${b.active ? "cm-bar-fill--active" : ""}`}
                                         style={{ width: `${b.pct}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
// ── Hero Floating Cards ───────────────────────────────────
function HeroCardEarnings() {
    return (
        <div className="hero-card hero-card--earnings" aria-hidden="true">
            <p className="hc-label">Estimated earnings</p>
            <p className="hc-value">$13,850</p>
            <div className="hc-chips">
                <span className="hc-chip">AI Tools</span>
                <span className="hc-sep">·</span>
                <span className="hc-chip">United States</span>
            </div>
        </div>
    );
}
 
function HeroCardNiche() {
    return (
        <div className="hero-card hero-card--niche" aria-hidden="true">
            <p className="hc-label">Niche RPM comparison</p>
            {[
                { name: "AI Tools", pct: 100, val: "$13.5" },
                { name: "Business", pct: 78,  val: "$10.5" },
                { name: "Gaming",   pct: 19,  val: "$2.5"  },
            ].map(b => (
                <div key={b.name} className="hc-row">
                    <span className="hc-row-name">{b.name}</span>
                    <div className="hc-row-track"><div className="hc-row-fill" style={{ width: `${b.pct}%` }} /></div>
                    <span className="hc-row-val">{b.val}</span>
                </div>
            ))}
        </div>
    );
}
 
function HeroCardRPM() {
    return (
        <div className="hero-card hero-card--rpm" aria-hidden="true">
            <p className="hc-label">Effective RPM</p>
            <p className="hc-value hc-value--xl">$13.85</p>
            <p className="hc-sub">US · ×2.20 multiplier</p>
        </div>
    );
}
 
// ── Page ─────────────────────────────────────────────────
export default function Landing() {
    const heroRef = useRef();
 
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero__word", {
                opacity: 0, y: 50, rotateX: -18,
                stagger: 0.09, duration: 0.75, delay: 0.2,
                ease: "expo.out", clearProps: "opacity,transform",
            });
            gsap.from(".hero__sub, .hero__ctas", {
                opacity: 0, y: 20,
                stagger: 0.12, duration: 0.6, delay: 0.72,
                ease: "power3.out", clearProps: "opacity,transform",
            });
            gsap.from(".hero__stat", {
                opacity: 0, y: 14, scale: 0.94,
                stagger: 0.07, duration: 0.45, delay: 1.1,
                ease: "back.out(1.5)", clearProps: "opacity,transform",
            });
            gsap.from(".hero-card", {
                opacity: 0, scale: 0.86, y: 24,
                stagger: 0.14, duration: 0.65, delay: 1.3,
                ease: "back.out(1.7)", clearProps: "opacity",
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);
 
    return (
        <>
        <Navbar />
        <main className="lp" itemScope itemType="https://schema.org/WebPage">
 
            {/* ══ HERO ══════════════════════════════════════ */}
            <section className="lp__hero" ref={heroRef} aria-label="Hero section">
                <div className="lp__hero-bg" aria-hidden="true">
                    <div className="lp__hero-glow lp__hero-glow--1" />
                    <div className="lp__hero-glow lp__hero-glow--2" />
                    <div className="lp__hero-grid" />
                </div>

                
 
                <div className="lp__container lp__hero-inner">
                    {/* Left col */}
                    <div className="hero__col">
                        <Badge>{HERO.badge}</Badge>
 
                        <h1 className="hero__headline" itemProp="name">
                            {HERO.headline.map((line, i) => (
                                <span key={i} className="hero__line">
                                    {line.split(" ").map((word, j) => (
                                        <span key={j} className="hero__word">{word}&nbsp;</span>
                                    ))}
                                </span>
                            ))}
                        </h1>
 
                        <p className="hero__sub" itemProp="description">{HERO.sub}</p>
 
                        <div className="hero__ctas">
                            <Link href={HERO.cta_primary.href} className="lp-btn lp-btn--primary lp-btn--lg">
                                {HERO.cta_primary.label}
                                <span className="lp-btn__arrow">→</span>
                            </Link>
                            <Link href={HERO.cta_secondary.href} className="lp-btn lp-btn--ghost">
                                {HERO.cta_secondary.label}
                            </Link>
                        </div>
 
                        <div className="hero__stats">
                            {HERO.stats.map((s, i) => (
                                <div key={i} className="hero__stat">
                                    <span className="hero__stat-value">{s.value}</span>
                                    <span className="hero__stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
 
                    {/* Right col — decorative floating cards */}
                    <div className="hero__visual" aria-hidden="true">
                        <HeroCardEarnings />
                        <HeroCardNiche />
                        <HeroCardRPM />
                    </div>
                </div>
            </section>
 
            {/* ══ PROOF STRIP ══════════════════════════════ */}
            <div className="proof-strip" aria-label="Countries covered">
                <div className="lp__container">
                    <div className="proof-strip__inner">
                    <span className="proof-strip__eyebrow">Accurate RPM benchmarks for</span>

                        {["AI Tools", "Finance", "Mini Documentaries", "Technology", "Luxury", "True Crime", "Gaming"].map((niche, i) => (
                            <span key={i} className="proof-strip__country">{niche}</span>
                        ))}

                     <span className="proof-strip__more">+25 niches</span>
                    </div>
                </div>
            </div>
 
            {/* ══ CALCULATOR PREVIEW ═══════════════════════ */}
            <section className="lp__section lp__section--calc" id="calculator" aria-label="Calculator preview">
                <span className="section-glow section-glow--tr" aria-hidden="true" />
                <span className="section-glow section-glow--bl" aria-hidden="true" />
                <div className="lp__container">
                    <RevealBlock className="lp__section-head">
                        <Badge>RPM Calculator</Badge>
                        <h2 className="lp__section-title">Your revenue,<br />calculated with precision.</h2>
                        <p className="lp__section-sub">Stop guessing. Our YouTube RPM calculator factors in your niche, country tier, video length and audience retention to deliver the most realistic earnings estimate — not just a rough range.</p>
                    </RevealBlock>
                </div>
 
                <RevealBlock className="mockup-wrap" delay={0.1}>
                    <div className="lp__container">
                        <CalcMockup />
                    </div>
                </RevealBlock>
 
                <div className="lp__container" style={{ marginTop: "3.5rem" }}>
                    <StaggerGrid className="features-grid">
                        {FEATURES.map((f, i) => (
                            <div key={i} className="feature-card">
                                <span className="feature-card__sym">{f.sym}</span>
                                <div>
                                    <h3 className="feature-card__title">{f.title}</h3>
                                    <p className="feature-card__desc">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </StaggerGrid>
                    <RevealBlock className="lp__section-cta" delay={0.12}>
                        <Link href="/youtube-revenue-calculator" className="lp-btn lp-btn--primary lp-btn--lg">
                            Open the calculator <span className="lp-btn__arrow">→</span>
                        </Link>
                    </RevealBlock>
                </div>
            </section>
 
            {/* ══ HOW IT WORKS ═════════════════════════════ */}
            <section className="lp__section lp__section--how" id="how-it-works" aria-label="How it works">
                <span className="section-glow section-glow--tl" aria-hidden="true" />
                <span className="section-glow section-glow--br" aria-hidden="true" />
                <div className="lp__container how__layout">
                    <RevealBlock className="how__visual" x={-40} y={0}>
                        <CalcMockup compact />
                    </RevealBlock>
 
                    <div className="how__right">
                        <RevealBlock>
                            <Badge>How it works</Badge>
                            <h2 className="lp__section-title how__title">
                                Earnings estimate<br />in 4 steps.
                            </h2>
                        </RevealBlock>
                        <StaggerGrid className="steps-list" stagger={0.1}>
                            {HOW_IT_WORKS.map((s, i) => (
                                <div key={i} className="step-item">
                                    <span className="step-item__num">{s.num}</span>
                                    <div>
                                        <h3 className="step-item__title">{s.title}</h3>
                                        <p className="step-item__desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </StaggerGrid>
                        <RevealBlock delay={0.15}>
                            <Link href="/youtube-revenue-calculator" className="lp-btn lp-btn--primary" style={{ marginTop: "1.5rem" }}>
                                Try it now <span className="lp-btn__arrow">→</span>
                            </Link>
                        </RevealBlock>
                    </div>
                </div>
            </section>
 
            {/* ══ NICHES ═══════════════════════════════════ */}
            <section className="lp__section lp__section--niches" id="niches" aria-label="Niche browser">
                <span className="section-glow section-glow--tr" aria-hidden="true" />
                <span className="section-glow section-glow--bl" aria-hidden="true" />
                <div className="lp__container niches__layout">
                    <RevealBlock className="niches__left" x={-30} y={0}>
                        <Badge>Niche Finder</Badge>
                        <h2 className="lp__section-title niches__title">
                            Not all niches<br />are created equal.
                        </h2>
                        <p className="lp__section-sub">RPM varies from $2.50 to $13.50+ depending on your content category. Our Niche Finder ranks every niche by RPM, saturation and revenue potential — make data-driven decisions before you film.</p>
                        <div className="niches__highlights">
                            <div className="niches__hl-card">
                                <span className="niches__hl-label">Highest RPM</span>
                                <span className="niches__hl-val">$13.50</span>
                                <span className="niches__hl-note">AI Tutorials</span>
                            </div>
                            <div className="niches__hl-card">
                                <span className="niches__hl-label">RPM range</span>
                                <span className="niches__hl-val">5×</span>
                                <span className="niches__hl-note">Between niches</span>
                            </div>
                        </div>
                        <Link href="/niches" className="lp-btn lp-btn--primary" style={{ marginTop: "1.5rem" }}>
                            Browse all niches →
                        </Link>
                    </RevealBlock>
 
                    <StaggerGrid className="niches__grid" stagger={0.07}>
                        {NICHE_PREVIEWS.map((n, i) => (
                            <Link href={`/youtube-revenue-calculator?niche=${encodeURIComponent(n.name)}`} key={i}
                                  className="niche-card" aria-label={`${n.name}: $${n.rpm} RPM`}>
                                <div className="niche-card__top">
                                    <span className="niche-card__name">{n.name}</span>
                                    <span className={`niche-card__tag niche-card__tag--${n.tag}`}>{n.tagLabel}</span>
                                </div>
                                <p className="niche-card__rpm">${n.rpm.toFixed(2)}</p>
                                <p className="niche-card__sub">RPM per 1000 views (US)</p>
                                <div className="niche-card__track">
                                    <div className="niche-card__bar" style={{ width: `${(n.rpm / 14) * 100}%` }} />
                                </div>
                            </Link>
                        ))}
                    </StaggerGrid>
                </div>
            </section>
 
            {/* ══ FINAL CTA ════════════════════════════════ */}
            <section className="lp__section lp__section--cta" id="start" aria-label="Get started">
                <span className="section-glow section-glow--tl" aria-hidden="true" />
                <span className="section-glow section-glow--br" aria-hidden="true" />
                <div className="lp__container">
                    <div className="cta-block">
                        <div className="cta-block__glow" aria-hidden="true" />
                        <RevealBlock className="cta-block__inner">
                            <h2 className="cta-block__headline">{CTA_SECTION.headline}</h2>
                            <p className="cta-block__sub">{CTA_SECTION.sub}</p>
                            <div className="cta-block__btns">
                                <Link href={CTA_SECTION.cta_primary.href} className="lp-btn lp-btn--primary lp-btn--lg">
                                    {CTA_SECTION.cta_primary.label}
                                    <span className="lp-btn__arrow">→</span>
                                </Link>
                                <Link href={CTA_SECTION.cta_secondary.href} className="lp-btn lp-btn--ghost">
                                    {CTA_SECTION.cta_secondary.label}
                                </Link>
                            </div>
                            <ul className="cta-block__trust" aria-label="Trust signals">
                                {CTA_SECTION.trust.map((t, i) => (
                                    <li key={i}><span aria-hidden="true">✓</span> {t}</li>
                                ))}
                            </ul>
                        </RevealBlock>
                    </div>
                </div>
            </section>
 
        <Footer />
        </main>
        </>
    );
}