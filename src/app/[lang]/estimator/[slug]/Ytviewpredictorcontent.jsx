import Link from "next/link";
import FaqItem from "../../../FaqItem";

export default function YtViewsPredictorContent({ page, lang = "en" }) {
  const prefix = (href) => `/${lang}${href.startsWith("/") ? href : `/${href}`}`;

  const renderBlock = (block, index) => {
    if (block.type === "text") {
      return (
        <p key={index} className="ytp-content__p">
          {block.value}
        </p>
      );
    }

    if (block.type === "list") {
      return (
        <ul key={index} className="ytp-content__steps">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }

    if (block.type === "card-grid") {
      return (
        <div key={index} className="ytp-content__metrics">
          {block.cards.map((card, i) => (
            <div key={i} className="ytp-content__metric-card">
              <h3 className="ytp-content__h3">{card.title}</h3>
              <p className="ytp-content__p">{card.body}</p>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <section className="ytp-content" aria-label={page.hero?.title || page.meta?.title}>
      <div className="ytp-content__intro">
        <span className="ytp-content__eyebrow">{page.hero?.eyebrow}</span>
        <h1 className="ytp-content__h2">{page.hero?.title}</h1>

        {page.hero?.lead?.map((paragraph, index) => (
          <p key={index} className="ytp-content__lead">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="ytp-content__stats" role="list">
        {page.stats?.map((stat, i) => (
          <div key={i} className="ytp-content__stat" role="listitem">
            <span className="ytp-content__stat-val">{stat.value}</span>
            <span className="ytp-content__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      {page.sections?.map((section, i) => (
        <div key={i} className="ytp-content__block">
          <h2 className="ytp-content__h2">{section.title}</h2>

          {section.blocks?.map((block, j) => renderBlock(block, j))}
        </div>
      ))}

      {page.ctas?.length > 0 && (
        <div className="ytp-content__ctas" aria-label="Discover more resources">
          <p className="ytp-content__ctas-label">Keep exploring</p>
          <div className="ytp-content__cta-grid">
            {page.ctas.map((cta) => (
              <Link key={cta.href} href={prefix(cta.href)} className="ytp-content__cta-card">
                <span className="ytp-content__cta-icon">{cta.icon}</span>
                <div>
                  <strong>{cta.label}</strong>
                  <span>{cta.description}</span>
                </div>
                <span className="ytp-content__cta-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {page.faq?.length > 0 && (
        <div className="ytp-content__faq" id="faq" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="ytp-content__h2">Frequently Asked Questions</h2>
          <p className="ytp-content__p" style={{ marginBottom: "2rem" }}>
            These answers cover the variables that move the model most and explain where outcomes diverge between videos that
            look similar on the surface.
          </p>

          <div className="ytp-faq__list">
            {page.faq.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      )}

      <p className="ytp-content__disclaimer">
        {page.disclaimer}{" "}
        <a href={prefix("/terms")} className="ytp-content__link">
          Terms of Use
        </a>{" "}
        and{" "}
        <a href={prefix("/privacy")} className="ytp-content__link">
          Privacy Policy
        </a>
        .
      </p>
    </section>
  );
}