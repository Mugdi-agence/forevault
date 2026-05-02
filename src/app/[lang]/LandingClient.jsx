"use client";

import { useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./nav";
import Footer from "./footer";
import "./landing.scss";
import { normalizeLang } from "@/app/i18n";
import { getHomeContent } from "@/app/content/home";

gsap.registerPlugin(ScrollTrigger);

function Badge({ children }) {
  return <span className="lp-badge">{children}</span>;
}

function RevealBlock({ className, children, delay = 0, x = 0, y = 30 }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y, x },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.75,
        delay,
        ease: "expo.out",
        clearProps: "opacity,transform",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      }
    );
  }, [delay, x, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function StaggerGrid({ className, children, stagger = 0.08 }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el.children,
      { opacity: 0, y: 28, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger,
        ease: "back.out(1.4)",
        clearProps: "opacity,transform",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      }
    );
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function CalcMockup({ compact = false, copy }) {
  return (
    <div className={`calc-mockup ${compact ? "calc-mockup--compact" : ""}`} role="img" aria-label="Calculator preview">
      <div className="calc-mockup__bar">
        <div className="calc-mockup__dots">
          <span className="dot dot--r" />
          <span className="dot dot--y" />
          <span className="dot dot--g" />
        </div>
        <div className="calc-mockup__url">
          <span className="calc-mockup__lock">⊕</span>
          {copy.url}
        </div>
      </div>

      <div className="calc-mockup__body">
        <div className="cm-form">
          <div className="cm-form-head">
            <span className="cm-yt-badge">{copy.badge}</span>
            <span className="cm-form-title">{copy.title}</span>
          </div>

          {copy.fields.map((f) => (
            <div key={f.label} className="cm-field">
              <span className="cm-field-label">{f.label}</span>
              <div className={`cm-field-input ${f.hl ? "cm-field-input--hl" : ""}`}>{f.val}</div>
            </div>
          ))}

          <div className="cm-cta-btn">{copy.button}</div>
        </div>

        <div className="cm-result">
          <div className="cm-result-hero">
            <p className="cm-result-label">{copy.resultLabel}</p>
            <p className="cm-result-value">{copy.resultValue}</p>
            <p className="cm-result-avg">{copy.resultAvg}</p>
          </div>

          <div className="cm-meta-row">
            {copy.meta.map((m) => (
              <div key={m.k} className={`cm-meta ${m.hl ? "cm-meta--hl" : ""}`}>
                <span>{m.k}</span>
                <strong>{m.v}</strong>
              </div>
            ))}
          </div>

          <div className="cm-chart">
            <p className="cm-chart-title">{copy.chartTitle}</p>
            {copy.bars.map((b) => (
              <div key={b.label} className="cm-bar">
                <span className="cm-bar-label">{b.label}</span>
                <div className="cm-bar-track">
                  <div
                    className={`cm-bar-fill ${b.active ? "cm-bar-fill--active" : ""}`}
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroCardEarnings({ copy }) {
  return (
    <div className="hero-card hero-card--earnings" aria-hidden="true">
      <p className="hc-label">{copy.label}</p>
      <p className="hc-value">{copy.value}</p>
      <div className="hc-chips">
        <span className="hc-chip">{copy.chips[0]}</span>
        <span className="hc-sep">·</span>
        <span className="hc-chip">{copy.chips[1]}</span>
      </div>
    </div>
  );
}

function HeroCardNiche({ copy }) {
  return (
    <div className="hero-card hero-card--niche" aria-hidden="true">
      <p className="hc-label">{copy.label}</p>
      {copy.rows.map((b) => (
        <div key={b.name} className="hc-row">
          <span className="hc-row-name">{b.name}</span>
          <div className="hc-row-track">
            <div className="hc-row-fill" style={{ width: `${b.pct}%` }} />
          </div>
          <span className="hc-row-val">{b.val}</span>
        </div>
      ))}
    </div>
  );
}

function HeroCardRPM({ copy }) {
  return (
    <div className="hero-card hero-card--rpm" aria-hidden="true">
      <p className="hc-label">{copy.label}</p>
      <p className="hc-value hc-value--xl">{copy.value}</p>
      <p className="hc-sub">{copy.sub}</p>
    </div>
  );
}

export default function Landing() {
  const params = useParams();
  const rawLang = Array.isArray(params?.lang) ? params.lang[0] : params?.lang;
  const lang = normalizeLang(rawLang);
  const c = useMemo(() => getHomeContent(lang), [lang]);
  const heroRef = useRef();

  const langHref = (path) => {
    if (!path) return `/${lang}`;
    if (path.startsWith("http")) return path;
    return `/${lang}${path.startsWith("/") ? path : `/${path}`}`;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero__word", {
        opacity: 0,
        y: 50,
        rotateX: -18,
        stagger: 0.09,
        duration: 0.75,
        delay: 0.2,
        ease: "expo.out",
        clearProps: "opacity,transform",
      });

      gsap.from(".hero__sub, .hero__ctas", {
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.6,
        delay: 0.72,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });

      gsap.from(".hero__stat", {
        opacity: 0,
        y: 14,
        scale: 0.94,
        stagger: 0.07,
        duration: 0.45,
        delay: 1.1,
        ease: "back.out(1.5)",
        clearProps: "opacity,transform",
      });

      gsap.from(".hero-card", {
        opacity: 0,
        scale: 0.86,
        y: 24,
        stagger: 0.14,
        duration: 0.65,
        delay: 1.3,
        ease: "back.out(1.7)",
        clearProps: "opacity",
      });
    }, heroRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <>
      <Navbar lang={lang} />
      <main key={lang} className="lp" itemScope itemType="https://schema.org/WebPage">
        <section className="lp__hero" ref={heroRef} aria-label="Hero section">
          <div className="lp__hero-bg" aria-hidden="true">
            <div className="lp__hero-glow lp__hero-glow--1" />
            <div className="lp__hero-glow lp__hero-glow--2" />
            <div className="lp__hero-grid" />
          </div>

          <div className="lp__container lp__hero-inner">
            <div className="hero__col">
              <Badge>{c.HERO.badge}</Badge>

              <h1 className="hero__headline" itemProp="name">
                {c.HERO.headline.map((line, i) => (
                  <span key={i} className="hero__line">
                    {line.split(" ").map((word, j) => (
                      <span key={j} className="hero__word">
                        {word}&nbsp;
                      </span>
                    ))}
                  </span>
                ))}
              </h1>

              <p className="hero__sub" itemProp="description">
                {c.HERO.sub}
              </p>

              <div className="hero__ctas">
                <Link href={langHref(c.HERO.cta_primary.href)} className="lp-btn lp-btn--primary lp-btn--lg">
                  {c.HERO.cta_primary.label}
                  <span className="lp-btn__arrow">→</span>
                </Link>
                <Link href={langHref(c.HERO.cta_secondary.href)} className="lp-btn lp-btn--ghost">
                  {c.HERO.cta_secondary.label}
                </Link>
              </div>

              <div className="hero__stats">
                {c.HERO.stats.map((s, i) => (
                  <div key={i} className="hero__stat">
                    <span className="hero__stat-value">{s.value}</span>
                    <span className="hero__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero__visual" aria-hidden="true">
              <HeroCardEarnings copy={c.MOCKUP.heroEarnings} />
              <HeroCardNiche copy={c.MOCKUP.heroNiche} />
              <HeroCardRPM copy={c.MOCKUP.heroRPM} />
            </div>
          </div>
        </section>

        <div className="proof-strip" aria-label="Countries covered">
          <div className="lp__container">
            <div className="proof-strip__inner">
              <span className="proof-strip__eyebrow">{c.PROOF.eyebrow}</span>

              {["AI Tools", "Finance", "Mini Documentaries", "Technology", "Luxury", "True Crime", "Gaming"].map((niche, i) => (
                <span key={i} className="proof-strip__country">
                  {niche}
                </span>
              ))}

              <span className="proof-strip__more">{c.PROOF.more}</span>
            </div>
          </div>
        </div>

        <section className="lp__section lp__section--calc" id="calculator" aria-label="Calculator preview">
          <span className="section-glow section-glow--tr" aria-hidden="true" />
          <span className="section-glow section-glow--bl" aria-hidden="true" />
          <div className="lp__container">
            <RevealBlock className="lp__section-head">
              <Badge>{c.CALC.badge}</Badge>
              <h2 className="lp__section-title">
                {c.CALC.title[0]}
                <br />
                {c.CALC.title[1]}
              </h2>
              <p className="lp__section-sub">{c.CALC.sub}</p>
            </RevealBlock>
          </div>

          <RevealBlock className="mockup-wrap" delay={0.1}>
            <div className="lp__container">
              <CalcMockup copy={c.MOCKUP} />
            </div>
          </RevealBlock>

          <div className="lp__container" style={{ marginTop: "3.5rem" }}>
            <StaggerGrid className="features-grid">
              {c.FEATURES.map((f, i) => (
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
              <Link href={langHref(c.HERO.cta_primary.href)} className="lp-btn lp-btn--primary lp-btn--lg">
                {c.CALC.cta} <span className="lp-btn__arrow">→</span>
              </Link>
            </RevealBlock>
          </div>
        </section>

        <section className="lp__section lp__section--how" id="how-it-works" aria-label="How it works">
          <span className="section-glow section-glow--tl" aria-hidden="true" />
          <span className="section-glow section-glow--br" aria-hidden="true" />
          <div className="lp__container how__layout">
            <RevealBlock className="how__visual" x={-40} y={0}>
              <CalcMockup compact copy={c.MOCKUP} />
            </RevealBlock>

            <div className="how__right">
              <RevealBlock>
                <Badge>How it works</Badge>
                <h2 className="lp__section-title how__title">
                  Earnings estimate
                  <br />
                  in 4 steps.
                </h2>
              </RevealBlock>

              <StaggerGrid className="steps-list" stagger={0.1}>
                {c.HOW_IT_WORKS.map((s, i) => (
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
                <Link href={langHref(c.HERO.cta_primary.href)} className="lp-btn lp-btn--primary" style={{ marginTop: "1.5rem" }}>
                  Try it now <span className="lp-btn__arrow">→</span>
                </Link>
              </RevealBlock>
            </div>
          </div>
        </section>

        <section className="lp__section lp__section--niches" id="niches" aria-label="Niche browser">
          <span className="section-glow section-glow--tr" aria-hidden="true" />
          <span className="section-glow section-glow--bl" aria-hidden="true" />
          <div className="lp__container niches__layout">
            <RevealBlock className="niches__left" x={-30} y={0}>
              <Badge>{c.NICHES.badge}</Badge>
              <h2 className="lp__section-title niches__title">
                {c.NICHES.title[0]}
                <br />
                {c.NICHES.title[1]}
              </h2>
              <p className="lp__section-sub">{c.NICHES.sub}</p>

              <div className="niches__highlights">
                <div className="niches__hl-card">
                  <span className="niches__hl-label">{c.NICHES.highestLabel}</span>
                  <span className="niches__hl-val">$13.50</span>
                  <span className="niches__hl-note">AI Tutorials</span>
                </div>
                <div className="niches__hl-card">
                  <span className="niches__hl-label">{c.NICHES.rangeLabel}</span>
                  <span className="niches__hl-val">5×</span>
                  <span className="niches__hl-note">{c.NICHES.rangeNote}</span>
                </div>
              </div>

              <Link href={langHref(c.HERO.cta_secondary.href)} className="lp-btn lp-btn--primary" style={{ marginTop: "1.5rem" }}>
                {c.NICHES.browse} →
              </Link>
            </RevealBlock>

            <StaggerGrid className="niches__grid" stagger={0.07}>
              {c.MOCKUP.bars.map((n, i) => (
                <Link
                  href={langHref(`${c.HERO.cta_primary.href}?niche=${encodeURIComponent(n.label)}`)}
                  key={i}
                  className="niche-card"
                  aria-label={`${n.label}: ${n.pct}%`}
                >
                  <div className="niche-card__top">
                    <span className="niche-card__name">{n.label}</span>
                    <span className={`niche-card__tag niche-card__tag--${n.active ? "high" : "mid"}`}>
                      {n.active ? "↑ Trending" : "Steady"}
                    </span>
                  </div>
                  <p className="niche-card__rpm">${(13.5 * (n.pct / 100)).toFixed(2)}</p>
                  <p className="niche-card__sub">RPM per 1000 views (US)</p>
                  <div className="niche-card__track">
                    <div className="niche-card__bar" style={{ width: `${n.pct}%` }} />
                  </div>
                </Link>
              ))}
            </StaggerGrid>
          </div>
        </section>

        <section className="lp__section lp__section--cta" id="start" aria-label="Get started">
          <span className="section-glow section-glow--tl" aria-hidden="true" />
          <span className="section-glow section-glow--br" aria-hidden="true" />
          <div className="lp__container">
            <div className="cta-block">
              <div className="cta-block__glow" aria-hidden="true" />
              <RevealBlock className="cta-block__inner">
                <h2 className="cta-block__headline">{c.CTA_SECTION.headline}</h2>
                <p className="cta-block__sub">{c.CTA_SECTION.sub}</p>

                <div className="cta-block__btns">
                  <Link href={langHref(c.CTA_SECTION.cta_primary.href)} className="lp-btn lp-btn--primary lp-btn--lg">
                    {c.CTA_SECTION.cta_primary.label}
                    <span className="lp-btn__arrow">→</span>
                  </Link>
                  <Link href={langHref(c.CTA_SECTION.cta_secondary.href)} className="lp-btn lp-btn--ghost">
                    {c.CTA_SECTION.cta_secondary.label}
                  </Link>
                </div>

                <ul className="cta-block__trust" aria-label="Trust signals">
                  {c.CTA_SECTION.trust.map((t, i) => (
                    <li key={i}>
                      <span aria-hidden="true">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </RevealBlock>
            </div>
          </div>
        </section>

        <Footer lang={lang} />
      </main>
    </>
  );
}