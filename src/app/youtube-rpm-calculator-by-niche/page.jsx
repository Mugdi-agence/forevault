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
            { "@type": "Question", "name": "How accurate is the YouTube revenue calculator?", "acceptedAnswer": { "@type": "Answer", "text": "Our calculator uses real RPM benchmarks sourced from creator communities and industry reports, adjusted by niche, geography, video format, watch time, and retention rate. Estimates typically fall within ±20–30% of actual AdSense earnings. Always cross-reference with your own YouTube Studio analytics for precise figures." } },
            { "@type": "Question", "name": "What is RPM on YouTube?", "acceptedAnswer": { "@type": "Answer", "text": "RPM (Revenue Per Mille) is the amount a creator earns per 1,000 video views after YouTube's 45% revenue share. RPM accounts for all monetization sources including ads, channel memberships, and YouTube Premium revenue. It differs from CPM, which is the rate advertisers pay before YouTube's cut." } },
            { "@type": "Question", "name": "Why do YouTube Shorts earn much less than long-form videos?", "acceptedAnswer": { "@type": "Answer", "text": "YouTube Shorts are monetized through the Shorts Revenue Pool rather than standard AdSense impressions. Creators receive a proportional share of a collective pool based on watch time, not individual ad placements. This results in an effective RPM roughly 50–100x lower than long-form content. Shorts are best used as a growth funnel to drive subscribers to your long-form catalog." } },
            { "@type": "Question", "name": "Which YouTube niche has the highest RPM?", "acceptedAnswer": { "@type": "Answer", "text": "Finance, investing, and business niches consistently have the highest YouTube RPM, often ranging from $10 to $30+ per 1,000 views. Software tutorials, legal advice, and real estate follow closely. Entertainment, gaming, and vlog content typically fall at the lower end, between $1 and $3 RPM." } },
            { "@type": "Question", "name": "Does video duration affect YouTube earnings?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Videos over 8 minutes unlock mid-roll ad placements, which can increase revenue by 30–60% compared to pre-roll only. Videos over 15 minutes can include two mid-roll ads, and 30+ minute videos allow multiple placements." } },
            { "@type": "Question", "name": "How does audience geography impact YouTube revenue?", "acceptedAnswer": { "@type": "Answer", "text": "Advertiser CPMs vary dramatically by country. Viewers from the United States, United Kingdom, Canada, and Australia generate significantly higher ad revenue — often 4–6× more than viewers from lower-purchasing-power markets." } },
            { "@type": "Question", "name": "What average retention rate should I enter?", "acceptedAnswer": { "@type": "Answer", "text": "The average YouTube retention rate across all channels is approximately 40–50%. If you're unsure, start with 45% as a baseline." } },
            { "@type": "Question", "name": "Is Forevault's calculator free to use?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the YouTube revenue calculator on Forevault is completely free to use with no account required. All calculations happen locally in your browser — no data is stored or sent to our servers." } }
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
        <section className="calc-content" aria-label="About the YouTube RPM calculator by niche">

            <div className="calc-content__intro">
                <span className="calc-content__eyebrow">Understanding YouTube RPM by niche</span>
                <h2 className="calc-content__h2">Why YouTube RPM changes so much by niche</h2>
                <p className="calc-content__lead">
                    If you have ever compared two YouTube channels with similar view counts and wondered why one earns far more than the other, the answer is usually not the algorithm. It is the niche. YouTube RPM is heavily shaped by the type of audience a video attracts, the commercial intent behind that audience, and how valuable advertisers consider that topic.
                </p>
                <p className="calc-content__lead">
                    That is why a finance channel, a software tutorial channel, and a gaming channel can all sit at very different revenue levels even when their videos perform similarly in views. A niche is not just a category label. It is often the clearest signal of how much money a view is worth.
                </p>
                <p className="calc-content__lead">
                    This guide explains how RPM behaves by niche, why the differences exist, and how to think about earnings in a way that is closer to real creator revenue than a simple "views × price" shortcut.
                </p>
            </div>

            <div className="calc-content__stats" role="list">
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">50+</span><span className="calc-content__stat-label">Niches modeled</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">80+</span><span className="calc-content__stat-label">Countries compared</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">12</span><span className="calc-content__stat-label">Display currencies</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">±20%</span><span className="calc-content__stat-label">Typical estimate range</span></div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">What RPM means in practice</h2>
                <div className="calc-content__metrics">
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">RPM (Revenue Per Mille)</h3><p className="calc-content__p">RPM is the amount a creator earns per 1,000 views after YouTube takes its share. It is the best metric for comparing niches because it reflects real creator revenue, not just advertiser pricing. Two niches can have the same traffic and still produce very different RPM because the audience behind the traffic is not equally valuable.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why niche changes revenue</h3><p className="calc-content__p">Advertisers do not value every topic equally. Finance, investing, software, business, and legal content usually attract stronger bidding because those audiences are closer to a buying decision. Gaming, entertainment, and casual vlog content tend to have weaker advertiser competition.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why geography still matters</h3><p className="calc-content__p">The same finance video can earn very different RPM depending on whether the audience is primarily in the US, UK, Canada, or in lower-bid regions. Niche explains the topic, but geography often decides how much that topic is worth.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why retention changes the final number</h3><p className="calc-content__p">A niche may have strong theoretical RPM, but if viewers leave early, the revenue will still underperform. Retention affects how many ad opportunities are actually served and how valuable a view becomes in practice.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why video length matters</h3><p className="calc-content__p">Once a long-form video crosses the 8-minute mark, mid-roll ads become possible. A 10-minute tutorial can therefore monetize better than a 6-minute version of the same idea, provided the pacing stays strong.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why Shorts behave differently</h3><p className="calc-content__p">Shorts are monetized through a revenue pool rather than the standard long-form ad model. That means the RPM is usually much lower, even when the niche itself is strong. Shorts are often better used as a growth channel that feeds a higher-RPM long-form niche.</p></div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Real-world niche scenarios</h2>
                <div className="calc-content__scenarios">
                    <div className="calc-content__scenario"><h3 className="calc-content__h3">100K views on a gaming channel</h3><p className="calc-content__p">Gaming usually sits in a lower RPM range because advertiser competition is weaker and the audience is less likely to be tied to high-intent buying behavior. A gaming channel can still build huge reach, but the revenue per view is often modest.</p></div>
                    <div className="calc-content__scenario"><h3 className="calc-content__h3">100K views on a finance channel</h3><p className="calc-content__p">Finance content often earns substantially more because advertisers are willing to pay more to reach viewers interested in money, investing, taxes, credit, or business decisions. Even a simple explainer can outperform a much larger entertainment video.</p></div>
                    <div className="calc-content__scenario"><h3 className="calc-content__h3">100K views on an educational channel</h3><p className="calc-content__p">Educational content often lands in the middle, but the exact RPM depends on the subtopic. A software tutorial or technical how-to video can monetize far better than a general knowledge channel because the audience may already be looking for a solution they are willing to pay for.</p></div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Common misconceptions about RPM by niche</h2>
                <ul className="calc-content__steps">
                    <li><strong>"More views always means more money" is wrong</strong> — the niche can matter more than the raw traffic number.</li>
                    <li><strong>"CPM is what creators earn" is wrong</strong> — CPM is advertiser-side pricing, while RPM is much closer to actual creator income.</li>
                    <li><strong>"All finance content pays the same" is wrong</strong> — subtopics, audience country, and viewer intent can change the RPM a lot.</li>
                    <li><strong>"Shorts behave like long-form" is wrong</strong> — they use a separate monetization structure and usually earn less per view.</li>
                </ul>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Use the calculator to compare niches</h2>
                <p className="calc-content__p">Try changing the niche, switching the audience country, or adjusting the video length and retention rate. It becomes very clear very quickly that the niche is not a small variable — it is often one of the biggest drivers of RPM.</p>
            </div>

            <div className="calc-content__faq" id="faq">
                <h2 className="calc-content__h2">Frequently Asked Questions</h2>
                <p className="calc-content__p" style={{ marginBottom: "2rem" }}>These answers cover the main factors that influence YouTube RPM by niche.</p>
                <div className="calc-faq__list">
                    {[
                        { q: "Why does RPM vary so much by niche?", a: "Because advertisers value audiences differently. A niche that attracts buyers, business owners, investors, or software users usually has stronger advertiser demand than a niche built around general entertainment." },
                        { q: "What is the difference between RPM and CPM?", a: "CPM is what advertisers pay for 1,000 ad impressions before YouTube's share. RPM is what the creator actually earns per 1,000 views after YouTube's share. RPM is the better metric for comparing niches." },
                        { q: "Which niche usually has the highest RPM?", a: "Finance, investing, business, software, and some legal or real estate content often rank near the top because the audience tends to have stronger commercial intent." },
                        { q: "Do Shorts have the same RPM as long-form videos?", a: "No. Shorts use a different revenue model and are usually much lower in effective RPM. They can still be very useful for reach and discovery, but they are rarely the best format if the goal is direct ad revenue." },
                        { q: "Does audience geography affect RPM by niche?", a: "Yes, very much. The same niche can monetize differently depending on where the audience lives. A US-heavy audience in a finance niche will usually earn more than a similar audience in a lower-ad-spend market." },
                        { q: "Should I choose my niche based only on RPM?", a: "Not necessarily. High RPM is attractive, but the best niche is usually the one you can publish consistently in. A sustainable niche with slightly lower RPM can outperform a high-RPM niche that you cannot produce for long." },
                        { q: "What retention rate should I enter?", a: "If you do not have your own analytics yet, 45% is a reasonable starting point for long-form content." },
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