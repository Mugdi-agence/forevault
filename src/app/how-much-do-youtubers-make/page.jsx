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
        <section className="calc-content" aria-label="About the YouTube revenue calculator">

            <div className="calc-content__intro">
                <span className="calc-content__eyebrow">Understanding monetization</span>
                <h2 className="calc-content__h2">How much does YouTube pay for 1,000,000 views?</h2>
                <p className="calc-content__lead">
                    If you have ever looked at a viral video and wondered how much money it actually made, you are not alone. It is one of the most common questions around creator monetization on YouTube.
                </p>
                <p className="calc-content__lead">
                    The tricky part is that there is no fixed payout per view. Two videos with the same number of views can earn completely different amounts of money because YouTube revenue depends on several moving factors at the same time: audience location, topic, watch time, ad demand, and even video structure.
                </p>
                <p className="calc-content__lead">
                    So instead of thinking in terms of a fixed "price per view," it is more accurate to think in ranges and scenarios. That is exactly what this guide is about: understanding what actually drives revenue so you can estimate earnings more realistically.
                </p>
            </div>

            <div className="calc-content__stats" role="list">
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">80+</span><span className="calc-content__stat-label">Countries modeled</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">50+</span><span className="calc-content__stat-label">Niches with RPM benchmarks</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">12</span><span className="calc-content__stat-label">Display currencies</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">±20%</span><span className="calc-content__stat-label">Typical difference vs AdSense</span></div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">What RPM and CPM actually mean</h2>
                <div className="calc-content__metrics">
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">RPM (Revenue Per Mille)</h3><p className="calc-content__p">RPM is what creators actually earn per 1,000 views after YouTube takes its share. This is the number that matters most because it reflects real income, not advertiser-side pricing. A channel can have high views and still have a low RPM if the audience is in a weaker market or if not many views are actually monetized.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">CPM (Cost Per Mille)</h3><p className="calc-content__p">CPM is what advertisers pay for 1,000 ad impressions before YouTube's cut. It is usually higher than RPM. A common mistake is to treat CPM as if it were creator earnings, but it is not. CPM is useful because it shows advertiser demand, especially in high-value niches and during strong seasonal periods like Q4.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why niche matters</h3><p className="calc-content__p">The topic of the video changes the value of the audience. Finance, investing, software, business, and legal content usually attract stronger advertiser competition than gaming, vlogs, or broad entertainment. Two videos with identical views can earn very different amounts because the audience intent is not the same.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why geography changes revenue</h3><p className="calc-content__p">Audience location has a major impact on earnings. Viewers from the US, UK, Canada, and Australia generally generate more ad value because advertisers spend more in those markets.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why retention affects ads shown</h3><p className="calc-content__p">Retention does more than help the algorithm. It also affects how many ad opportunities are actually served. A video that holds attention well often earns more than a longer video with weak pacing.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why video length matters</h3><p className="calc-content__p">Video length matters because it unlocks mid-roll ads. Under 8 minutes, you are usually limited. Past that threshold, mid-rolls become possible and that can raise revenue noticeably.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why Shorts earn differently</h3><p className="calc-content__p">Shorts do not use the same monetization model as long-form content. They are paid through a shared revenue pool rather than the normal ad impression system, which is why Shorts usually earn less per view.</p></div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Real-world scenarios</h2>
                <div className="calc-content__scenarios">
                    <div className="calc-content__scenario"><h3 className="calc-content__h3">1M views on a gaming channel</h3><p className="calc-content__p">Gaming often sits in a lower RPM range because advertiser competition is weaker and the audience is less likely to be in high-value buyer segments. A video can still perform well in views, but the revenue per view is usually modest.</p></div>
                    <div className="calc-content__scenario"><h3 className="calc-content__h3">1M views on a finance channel</h3><p className="calc-content__p">Finance content usually earns much more because advertisers pay more to reach viewers with strong commercial intent. Even at the same view count, the difference can be dramatic.</p></div>
                    <div className="calc-content__scenario"><h3 className="calc-content__h3">1M views on an educational channel</h3><p className="calc-content__p">Educational and how-to content often lands between gaming and finance. A well-paced tutorial can outperform a much more "popular" format because the audience is more valuable to advertisers.</p></div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Common misconceptions</h2>
                <ul className="calc-content__steps">
                    <li><strong>"Views equal money" is wrong</strong> — the same view count can produce very different revenue depending on niche, geography, retention, and length.</li>
                    <li><strong>CPM is not what creators earn</strong> — CPM is the advertiser-side rate. RPM is closer to the creator's actual payout.</li>
                    <li><strong>Shorts revenue is pooled</strong> — Shorts are paid from a shared fund, not the same ad system used by long-form videos.</li>
                    <li><strong>Longer is not always better</strong> — more minutes only help when those minutes keep people watching.</li>
                </ul>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Use the calculator to test scenarios</h2>
                <p className="calc-content__p">Try changing the niche, switching the audience country, or adjusting the video length and retention rate. The numbers will show quickly how sensitive YouTube earnings are to those variables — and why "1M views" means very different things depending on context.</p>
            </div>

            <div className="calc-content__faq" id="faq">
                <h2 className="calc-content__h2">Frequently Asked Questions</h2>
                <p className="calc-content__p" style={{ marginBottom: "2rem" }}>These answers cover the main factors that influence YouTube revenue: RPM, CPM, Shorts, length, retention, and geography.</p>
                <div className="calc-faq__list">
                    {[
                        { q: "How accurate is this calculator?", a: "It provides a working estimate, not a guaranteed number. The model uses observed RPM benchmarks by niche, as well as adjustments for geography, format, length, and retention." },
                        { q: "What is the difference between RPM and CPM on YouTube?", a: "CPM is what advertisers pay for 1,000 ad impressions before YouTube's share. RPM is what the creator actually earns per 1,000 views after YouTube's share." },
                        { q: "Why do Shorts pay less than long-form videos?", a: "Shorts are based on a different economic model — a shared revenue pool distributed by watch time rather than the standard ad impression structure." },
                        { q: "Which YouTube niche has the best RPM?", a: "Finance, investing, software, real estate, law, and certain business topics often have the highest RPMs because their audiences have stronger commercial intent." },
                        { q: "Does video length really change revenue?", a: "Yes, because it changes ad serving opportunities. Past 8 minutes, mid-roll ads become possible — but only if the video keeps viewers engaged." },
                        { q: "How does audience geography influence revenue?", a: "Viewers from the US, UK, Canada, and other high-value markets often generate more revenue because advertisers bid more aggressively there." },
                        { q: "What retention rate should I enter?", a: "If you do not have your own data yet, 45% is a reasonable baseline for a standard long-form video." },
                        { q: "Is the calculator free?", a: "Yes, it is free to use and does not require an account. The estimate runs locally in the browser." },
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