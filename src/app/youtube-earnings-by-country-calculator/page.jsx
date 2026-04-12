"use client"
import { useState } from "react";
import Navbar from "../nav";
import Footer from "../footer";
import RevenueEngine from "../Revenue-Engine";
import '../styles.scss';

export default function Calculator() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "How accurate is the YouTube revenue calculator?", "acceptedAnswer": { "@type": "Answer", "text": "Our calculator uses real RPM benchmarks sourced from creator communities and industry reports, adjusted by niche, geography, video format, watch time, and retention rate. Estimates typically fall within ±20–30% of actual AdSense earnings." } },
            { "@type": "Question", "name": "What is RPM on YouTube?", "acceptedAnswer": { "@type": "Answer", "text": "RPM (Revenue Per Mille) is the amount a creator earns per 1,000 video views after YouTube's 45% revenue share. It differs from CPM, which is the rate advertisers pay before YouTube's cut." } },
            { "@type": "Question", "name": "Why do YouTube Shorts earn much less than long-form videos?", "acceptedAnswer": { "@type": "Answer", "text": "YouTube Shorts are monetized through the Shorts Revenue Pool rather than standard AdSense impressions, resulting in an effective RPM roughly 50–100x lower than long-form content." } },
            { "@type": "Question", "name": "Which YouTube niche has the highest RPM?", "acceptedAnswer": { "@type": "Answer", "text": "Finance, investing, and business niches consistently have the highest YouTube RPM. Entertainment, gaming, and vlog content typically fall at the lower end." } },
            { "@type": "Question", "name": "Does video duration affect YouTube earnings?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Videos over 8 minutes unlock mid-roll ad placements, which can increase revenue by 30–60% compared to pre-roll only." } },
            { "@type": "Question", "name": "How does audience geography impact YouTube revenue?", "acceptedAnswer": { "@type": "Answer", "text": "Advertiser CPMs vary dramatically by country. Viewers from the United States, United Kingdom, Canada, and Australia generate significantly higher ad revenue — often 4–6× more than viewers from lower-purchasing-power markets." } },
            { "@type": "Question", "name": "What average retention rate should I enter?", "acceptedAnswer": { "@type": "Answer", "text": "The average YouTube retention rate across all channels is approximately 40–50%. If you're unsure, start with 45% as a baseline." } },
            { "@type": "Question", "name": "Is Forevault's calculator free to use?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the YouTube revenue calculator on Forevault is completely free to use with no account required." } }
        ]
    };

    return (
        <>
            <Navbar />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <RevenueEngine />
            <CalcContent />
            <Footer />
            <div className="fonds" />
        </>
    );
}

function CalcContent() {
    return (
        <section className="calc-content" aria-label="About the YouTube earnings by country calculator">

            <div className="calc-content__intro">
                <span className="calc-content__eyebrow">Understanding YouTube monetization</span>
                <h2 className="calc-content__h2">YouTube earnings by country: why location changes everything</h2>
                <p className="calc-content__lead">
                    Geography is one of the most underestimated parts of YouTube monetization. Two channels can publish the same video, hit the same view count, and still earn very different amounts depending on where those viewers are located.
                </p>
                <p className="calc-content__lead">
                    That happens because advertisers do not value every market equally. A viewer in the United States, the United Kingdom, Canada, or Australia is often worth more in ad revenue than a viewer in a country where advertiser demand is weaker. The difference shows up in RPM, and RPM is what creators actually feel in their payout.
                </p>
                <p className="calc-content__lead">
                    This guide explains how country affects YouTube earnings, why the same views can produce different results across regions, and how to estimate revenue with a little more realism than a one-size-fits-all average.
                </p>
            </div>

            <div className="calc-content__stats" role="list">
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">80+</span><span className="calc-content__stat-label">Countries modeled</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">50+</span><span className="calc-content__stat-label">Niches with RPM data</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">12</span><span className="calc-content__stat-label">Display currencies</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">±20%</span><span className="calc-content__stat-label">Typical estimate range</span></div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Why country changes YouTube revenue</h2>
                <div className="calc-content__metrics">
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">RPM reflects real creator earnings</h3><p className="calc-content__p">RPM is the amount a creator earns per 1,000 views after YouTube's share. It is the most useful number for comparing countries because it captures the revenue that actually reaches the creator. When the country mix changes, RPM usually changes with it.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Advertiser demand is not equal everywhere</h3><p className="calc-content__p">Some markets have much stronger competition for ad inventory. Brands spend more aggressively in countries where the audience has higher purchasing power, stronger commercial intent, or a larger base of advertisers.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">The same niche pays differently by region</h3><p className="calc-content__p">A finance video with a US audience often monetizes far better than the same finance video with a lower-value regional mix. The topic matters, but the country of the audience often decides how much that topic is worth.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Retention influences the final payout</h3><p className="calc-content__p">A viewer from a high-value country only helps if they actually watch enough of the video for ads to be served. Strong retention increases the chances of monetization across the video.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Video length still matters</h3><p className="calc-content__p">Long-form videos over 8 minutes can unlock mid-roll ads. A creator with a strong audience in a high-value country may earn noticeably more from a 10-minute video than from a shorter version of the same idea.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Shorts are different</h3><p className="calc-content__p">Shorts use a separate revenue model based on a shared pool. Country still matters, but the earnings pattern is usually much lower per view. Shorts can be useful for reach, but they are rarely the strongest direct revenue format.</p></div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Real-world examples by country</h2>
                <div className="calc-content__scenarios">
                    <div className="calc-content__scenario"><h3 className="calc-content__h3">100K views with a US-heavy audience</h3><p className="calc-content__p">A US-heavy audience usually generates stronger RPM because advertiser competition is intense and the market is highly valuable. This is why creators with a large share of US viewers often see higher payouts even when their view counts are similar to other channels.</p></div>
                    <div className="calc-content__scenario"><h3 className="calc-content__h3">100K views with a UK or Canadian audience</h3><p className="calc-content__p">The UK and Canada typically monetize well too, often sitting in a strong middle-to-high range depending on niche. A channel with viewers concentrated in these countries can earn solid revenue, especially when the content is business, education, finance, or software-related.</p></div>
                    <div className="calc-content__scenario"><h3 className="calc-content__h3">100K views with a lower-bid regional mix</h3><p className="calc-content__p">If the audience is concentrated in countries where ad budgets are lower, the same 100K views may produce much less revenue. The content may still perform well in reach and engagement, but the monetization outcome will usually be more modest.</p></div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Common misconceptions about country-based earnings</h2>
                <ul className="calc-content__steps">
                    <li><strong>"All countries pay roughly the same" is wrong</strong> — geography is one of the biggest RPM drivers on YouTube.</li>
                    <li><strong>"More views always means more money" is wrong</strong> — 100K views in one country mix can pay far more than 100K in another.</li>
                    <li><strong>"CPM is what creators earn" is wrong</strong> — CPM is advertiser-side pricing, while RPM is much closer to actual creator income.</li>
                    <li><strong>"Shorts behave like long-form" is wrong</strong> — Shorts use a different monetization structure and usually earn less per view.</li>
                </ul>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Use the calculator to compare countries</h2>
                <p className="calc-content__p">Try switching the country, niche, or video length and you will see how quickly the revenue estimate changes. A good rule of thumb is this: views tell you how much attention you got, but country tells you how valuable that attention may be.</p>
            </div>

            <div className="calc-content__faq" id="faq">
                <h2 className="calc-content__h2">Frequently Asked Questions</h2>
                <p className="calc-content__p" style={{ marginBottom: "2rem" }}>These answers cover the main factors that influence YouTube earnings by country.</p>
                <div className="calc-faq__list">
                    {[
                        { q: "Why do YouTube earnings vary by country?", a: "Because advertisers do not pay the same rates in every market. Countries with stronger purchasing power and more advertiser competition generally produce higher RPM." },
                        { q: "Which countries usually pay the most on YouTube?", a: "The US, UK, Canada, Australia, and some Western European markets often sit near the top, though the exact result depends on niche, season, and audience behavior." },
                        { q: "What is the difference between RPM and CPM?", a: "CPM is what advertisers pay for 1,000 ad impressions before YouTube's share. RPM is what the creator actually earns per 1,000 views after YouTube's share." },
                        { q: "Does audience geography matter more than views?", a: "It can, in a monetization sense. Two channels with the same view count can earn very different amounts if their audience country mix is different." },
                        { q: "Do Shorts pay the same across countries?", a: "No. Shorts still vary by audience mix, but they follow a separate revenue model and usually earn less per view than long-form." },
                        { q: "Does a US audience always mean high earnings?", a: "Not automatically. US traffic usually helps, but niche, retention, and video length still matter. A weak video with strong geography can still underperform." },
                        { q: "What retention rate should I enter?", a: "If you do not have your own analytics yet, 45% is a reasonable baseline for long-form content." },
                        { q: "Is this calculator free?", a: "Yes, it is free to use and does not require an account. The estimate runs locally in the browser." },
                    ].map(({ q, a }, i) => <FaqItem key={i} q={q} a={a} />)}
                </div>
            </div>

            <p className="calc-content__disclaimer">
                Forevault estimates rely on aggregated creator benchmarks and market data. Actual AdSense earnings vary by ad demand, seasonality, audience geography, adblock rates, YouTube policies, and individual video performance. This content is for educational and planning purposes only—not financial advice. See our <a href="/terms" className="calc-content__link">Terms of Use</a> and our <a href="/privacy" className="calc-content__link">Privacy Policy</a>.
            </p>
        </section>
    );
}

function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`calc-faq__item ${open ? "calc-faq__item--open" : ""}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <button className="calc-faq__q" onClick={() => setOpen(o => !o)} aria-expanded={open} type="button">
                <span itemProp="name">{q}</span>
                <span className="calc-faq__chevron" aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
            {open && (
                <div className="calc-faq__a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">{a}</p>
                </div>
            )}
        </div>
    );
}