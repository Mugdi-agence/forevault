import Link from "next/link";
import FaqItem from "../../../FaqItem";

export default function CalcContent({ page, lang }) {
  const prefix = (href) => `/${lang}${href.startsWith("/") ? href : `/${href}`}`;

  return (
    <section className="calc-content" aria-label={page.hero.title}>
      <div className="calc-content__intro">
        <span className="calc-content__eyebrow">{page.hero.eyebrow}</span>
        <h1 className="calc-content__h2">{page.hero.title}</h1>

        {page.hero.lead?.map((paragraph, index) => (
          <p key={index} className="calc-content__lead">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="calc-content__stats" role="list">
        {page.stats?.map((stat, i) => (
          <div key={i} className="calc-content__stat" role="listitem">
            <span className="calc-content__stat-val">{stat.value}</span>
            <span className="calc-content__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      {page.sections?.map((section, i) => (
        <div key={i} className="calc-content__block">
          <h2 className="calc-content__h2">{section.title}</h2>

          {section.blocks?.map((block, j) => {
            if (block.type === "text") {
              return (
                <p key={j} className="calc-content__p">
                  {block.value}
                </p>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={j} className="calc-content__steps">
                  {block.items.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ul>
              );
            }

            if (block.type === "card-grid") {
              return (
                <div key={j} className="calc-content__metrics">
                  {block.cards.map((card, k) => (
                    <div key={k} className="calc-content__metric-card">
                      <h3 className="calc-content__h3">{card.title}</h3>
                      <p className="calc-content__p">{card.body}</p>
                    </div>
                  ))}
                </div>
              );
            }

            return null;
          })}
        </div>
      ))}

      <div className="calc-content__ctas" aria-label="Discover more resources">
        <p className="calc-content__ctas-label">Keep exploring</p>
        <div className="calc-content__cta-grid">
          {page.ctas?.map((cta) => (
            <Link key={cta.href} href={prefix(cta.href)} className="calc-content__cta-card">
              <span className="calc-content__cta-icon">{cta.icon}</span>
              <div>
                <strong>{cta.label}</strong>
                <span>{cta.description}</span>
              </div>
              <span className="calc-content__cta-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>

      {page.faq?.length > 0 && (
        <div className="calc-content__faq" id="faq">
          <h2 className="calc-content__h2">Frequently asked questions</h2>
          <p className="calc-content__p" style={{ marginBottom: "2rem" }}>
            These are the questions creators usually ask when they realize “views” alone does not explain revenue.
          </p>

          <div className="calc-faq__list">
            {page.faq.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      )}

      <p className="calc-content__disclaimer">
        {page.disclaimer}{" "}
        <a href={prefix("/terms")} className="calc-content__link">
          Terms of Use
        </a>{" "}
        and{" "}
        <a href={prefix("/privacy")} className="calc-content__link">
          Privacy Policy
        </a>
        .
      </p>
    </section>
  );
}