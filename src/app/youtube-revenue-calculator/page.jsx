"use client"
import { useState } from "react";
import Navbar from "../nav";
import Footer from "../footer";
import RevenueEngine from "../Revenue-Engine";
import '../styles.scss'; // ← CalcContent + calc-faq classes — source unique de vérité

// ─────────────────────────────────────────────────────────────────────────────
// page.jsx — layout only: schema + Navbar + Calculator + SEO content + Footer
// Le calculateur lui-même vit dans Revenue-Engine (racine) et peut être
// importé sur n'importe quelle page sans dupliquer la logique.
// ─────────────────────────────────────────────────────────────────────────────
export default function Calculator() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How accurate is the YouTube revenue calculator?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our calculator uses real RPM benchmarks sourced from creator communities and industry reports, adjusted by niche, geography, video format, watch time, and retention rate. Estimates typically fall within ±20–30% of actual AdSense earnings. Always cross-reference with your own YouTube Studio analytics for precise figures."
                }
            },
            {
                "@type": "Question",
                "name": "What is RPM on YouTube?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "RPM (Revenue Per Mille) is the amount a creator earns per 1,000 video views after YouTube's 45% revenue share. RPM accounts for all monetization sources including ads, channel memberships, and YouTube Premium revenue. It differs from CPM, which is the rate advertisers pay before YouTube's cut."
                }
            },
            {
                "@type": "Question",
                "name": "Why do YouTube Shorts earn much less than long-form videos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "YouTube Shorts are monetized through the Shorts Revenue Pool rather than standard AdSense impressions. Creators receive a proportional share of a collective pool based on watch time, not individual ad placements. This results in an effective RPM roughly 50–100x lower than long-form content. Shorts are best used as a growth funnel to drive subscribers to your long-form catalog."
                }
            },
            {
                "@type": "Question",
                "name": "Which YouTube niche has the highest RPM?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Finance, investing, and business niches consistently have the highest YouTube RPM, often ranging from $10 to $30+ per 1,000 views. Software tutorials, legal advice, and real estate follow closely. Entertainment, gaming, and vlog content typically fall at the lower end, between $1 and $3 RPM. You can explore all niche RPMs using our Niche Finder tool."
                }
            },
            {
                "@type": "Question",
                "name": "Does video duration affect YouTube earnings?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Videos over 8 minutes unlock mid-roll ad placements, which can increase revenue by 30–60% compared to pre-roll only. Videos over 15 minutes can include two mid-roll ads, and 30+ minute videos allow multiple placements. Our calculator automatically factors in the duration multiplier when you enter your video length."
                }
            },
            {
                "@type": "Question",
                "name": "How does audience geography impact YouTube revenue?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Advertiser CPMs vary dramatically by country. Viewers from the United States, United Kingdom, Canada, and Australia generate significantly higher ad revenue — often 4–6× more than viewers from lower-purchasing-power markets. Our calculator includes a geography multiplier for 80+ countries so you can model revenue based on your actual audience location."
                }
            },
            {
                "@type": "Question",
                "name": "What average retention rate should I enter?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The average YouTube retention rate across all channels is approximately 40–50%. If you're unsure, start with 45% as a baseline. High-performing channels in engaged niches often see 55–65% retention, which our calculator rewards with a higher revenue multiplier. You can find your actual retention rate in YouTube Studio under Analytics → Audience Retention."
                }
            },
            {
                "@type": "Question",
                "name": "Is Forevault's calculator free to use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the YouTube revenue calculator on Forevault is completely free to use with no account required. All calculations happen locally in your browser — no data is stored or sent to our servers."
                }
            }
        ]
    };

    return (
        <>
            <Navbar />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <RevenueEngine />
            <CalcContent />
            <Footer />
            <div className="fonds" />
        </>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// CalcContent — contenu éditorial riche (SEO / AdSense). Ne pas toucher.
// ─────────────────────────────────────────────────────────────────────────────
function CalcContent() {
    return (
        <section className="calc-content" aria-label="About the YouTube revenue calculator">

            <div className="calc-content__intro">
                <span className="calc-content__eyebrow">Understanding monetization</span>
                <h2 className="calc-content__h2">
                    How to estimate YouTube earnings without false shortcuts
                </h2>
                <p className="calc-content__lead">
                    Many pages summarize YouTube earnings with a simplistic formula like "views × €2". In reality, it almost never works like that.
                    Two videos with the same number of views can generate very different revenues depending on the niche, audience country, video length, retention rate, and format. This calculator is designed to model those differences more realistically, using signals that creators actually find in YouTube Studio.
                </p>
                <p className="calc-content__lead">
                    The point isn't to promise an exact figure. The point is to provide a useful foundation to help explain why a finance, business or software video can earn much more than an entertainment video with the same volume, and why a well-maintained long video can outperform a shorter format on the same topic.
                </p>
            </div>

            <div className="calc-content__stats" role="list">
                <div className="calc-content__stat" role="listitem">
                    <span className="calc-content__stat-val">80+</span>
                    <span className="calc-content__stat-label">Countries modeled</span>
                </div>
                <div className="calc-content__stat" role="listitem">
                    <span className="calc-content__stat-val">50+</span>
                    <span className="calc-content__stat-label">Niches with RPM benchmarks</span>
                </div>
                <div className="calc-content__stat" role="listitem">
                    <span className="calc-content__stat-val">12</span>
                    <span className="calc-content__stat-label">Display currencies</span>
                </div>
                <div className="calc-content__stat" role="listitem">
                    <span className="calc-content__stat-val">±20%</span>
                    <span className="calc-content__stat-label">Typical difference vs AdSense</span>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">How to use the calculator</h2>
                <p className="calc-content__p">
                    The fields in the left panel are not just decoration. Each corresponds to a variable that genuinely influences monetization. The closer your data matches your channel's reality, the more useful the estimate becomes.
                </p>
                <ol className="calc-content__steps">
                    <li><strong>Views</strong> — Enter the number of views for the video, or a monthly average if you want to estimate channel revenue over time. Thousand separators are accepted.</li>
                    <li><strong>Retention (%)</strong> — This is the average percentage of the video actually watched. In YouTube Studio, the closest indicator is in <em>Analytics → Audience Retention</em>. Around 45% is a reasonable baseline for a standard long video, but highly engaging content can go much higher.</li>
                    <li><strong>Format</strong> — Choose between Long Form and Shorts. Shorts do not use the same monetization mechanism as long videos. Their revenue comes from a separate pool, shared among eligible creators, which typically results in a much lower effective RPM.</li>
                    <li><strong>Length</strong> — The 8-minute threshold really matters because it opens up the possibility for mid-rolls. On a 7-minute video, you're often more limited. With a 10- or 12-minute video, you add an extra ad placement opportunity without necessarily changing the topic.</li>
                    <li><strong>Niche</strong> — The topic of the video heavily affects RPM. Videos about investing, taxes, or software often attract more aggressive advertisers than those in general entertainment. If you hesitate between several categories, compare their RPM benchmarks before relying on instinct.</li>
                    <li><strong>Geography</strong> — The main country of your audience can change the equation more than you think. An audience primarily from the US, UK, or Canada will monetize at a different level than one with mostly viewers in markets where ad budgets are lower.</li>
                </ol>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">The metrics that really matter</h2>
                <div className="calc-content__metrics">
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">RPM (Revenue Per Mille)</h3>
                        <p className="calc-content__p">RPM is what you actually earn per 1,000 views, after YouTube's share. It's the most useful metric to judge a channel's monetization effectiveness because it reflects actual revenue—not just the gross ad value. In practice, a finance or business channel can be much higher than a gaming channel, even with the same traffic, simply because the audience's commercial intent is not the same.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">CPM (Cost Per Mille)</h3>
                        <p className="calc-content__p">CPM is what advertisers pay for 1,000 ad impressions, before YouTube's share. That's why CPM is almost always higher than RPM. CPM changes with advertiser demand, seasonality, sector, and sometimes even current events. Q4 is often stronger because brands spend more ahead of holidays and key commercial periods.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Retention</h3>
                        <p className="calc-content__p">Retention isn't just about "serving the algorithm." It also increases the number of ad opportunities truly served per view. A viewer who stays longer may see a pre-roll, then a mid-roll, and sometimes more, depending on video length. That's why a video's narrative structure matters as much as the topic. A strong hook at the beginning and good pacing often result in more revenue than a longer but less engaging format.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Mid-rolls</h3>
                        <p className="calc-content__p">After 8 minutes, a video becomes eligible for mid-rolls. It's one of the most important levers for long-form creators, but also one of the most misunderstood. Adding two or three useful minutes can increase earnings without changing the video's promise. On the flip side, artificially lengthening a video just to "reach 8 minutes" often decreases retention and can cancel out any potential gain.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Audience Geography</h3>
                        <p className="calc-content__p">Advertising budgets aren't distributed evenly. Countries with higher purchasing power and more ad competition generally generate more value per view. A channel with 30% US audience may have a much higher RPM than a similar channel centered in less lucrative markets. That's why two "comparable" channels can produce totally different results.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Shorts Revenue Pool</h3>
                        <p className="calc-content__p">Shorts are not monetized like long-form videos. They're funded by a monthly revenue pool shared among eligible creators, based on the share of watch time they capture. This totally changes the reading of revenue. A Short can generate reach, subscribers and discovery traffic, while still being much less profitable per view than a long-form video. Shorts are often a better acquisition lever than direct revenue lever.</p>
                    </div>
                </div>
            </div>

            <div className="calc-content__ctas" aria-label="Discover more resources">
                <p className="calc-content__ctas-label">Go further</p>
                <div className="calc-content__cta-grid">
                    <a href="/niches" className="calc-content__cta-card">
                        <span className="calc-content__cta-icon">◈</span>
                        <div>
                            <strong>Niche Finder</strong>
                            <span>Compare RPMs across 50+ niches</span>
                        </div>
                        <span className="calc-content__cta-arrow">→</span>
                    </a>
                    <a href="/blog" className="calc-content__cta-card">
                        <span className="calc-content__cta-icon">✦</span>
                        <div>
                            <strong>Creator Blog</strong>
                            <span>Editorial guides and monetization analysis</span>
                        </div>
                        <span className="calc-content__cta-arrow">→</span>
                    </a>
                    <a href="/predictor" className="calc-content__cta-card">
                        <span className="calc-content__cta-icon">◎</span>
                        <div>
                            <strong>Views Predictor</strong>
                            <span>Project channel growth</span>
                        </div>
                        <span className="calc-content__cta-arrow">→</span>
                    </a>
                </div>
            </div>

            <div className="calc-content__faq" id="faq">
                <h2 className="calc-content__h2">Frequently Asked Questions</h2>
                <p className="calc-content__p" style={{ marginBottom: "2rem" }}>
                    The answers below cover the points that most influence YouTube earnings: RPM, CPM, Shorts, length, retention, and geography.
                </p>
                <div className="calc-faq__list">
                    {[
                        { q: "How accurate is this calculator?", a: "It provides a working estimate, not a guaranteed number. The model uses observed RPM benchmarks by niche, as well as adjustments for geography, format, length, and retention. In real life, the gap also depends on seasonality, available ad inventory, adblock rates, and audience variations. For creators, the main point is not about getting an exact cent value, but about understanding the order of magnitude and the levers that move revenue." },
                        { q: "What's the difference between RPM and CPM on YouTube?", a: "CPM is what advertisers pay for 1,000 ad impressions, before YouTube's share. RPM is what the creator actually gets for 1,000 views, after YouTube's share and with a closer look at the final revenue. This is why a high CPM doesn't automatically translate into a great RPM. If retention is low or if views come from a less lucrative country, the final revenue can remain modest." },
                        { q: "Why do Shorts pay less than long-form videos?", a: "Because they're based on a different economic engine. Shorts use a shared revenue pool, distributed among eligible creators according to the share of watch time captured. There isn't the same logic of individual ad impressions as in long-form. Shorts can be great for reaching a new audience, testing a topic or helping people discover your channel, but they're often less powerful as a direct revenue source." },
                        { q: "Which YouTube niche has the best RPM?", a: "Finance, investing, software, real estate, law and certain business topics often have the highest RPMs. The reason is simple: their audiences have stronger commercial intent, so advertisers compete more for them. On the other hand, gaming, general entertainment, and some vlog formats tend to have lower RPMs, even with many views." },
                        { q: "Does video length really change revenue?", a: "Yes, because it changes your ad serving options. Below 8 minutes, you're typically more limited. Above 8 minutes, mid-rolls become possible, which can increase revenue without increasing views. But here's an important nuance: a longer video doesn't just earn more because it's longer—it must maintain good pacing, otherwise retention drops and the potential gain disappears." },
                        { q: "How does audience geography influence revenue?", a: "Much more than most beginners think. Audiences in very competitive, high-income markets often generate much higher CPMs. The same video can perform very differently if it's watched mostly in the US, UK, or in countries with smaller ad budgets. This is one of the first things to check when an RPM seems \"abnormally\" low or high." },
                        { q: "What average retention rate should I enter?", a: "If you don't have your own data yet, 45% is a healthy baseline for a standard long video. It's not a universal truth, just a reasonable starting point. The most educational, well-paced videos or those answering a clear intent can easily exceed this. Conversely, videos that are too broad, too slow, or too repetitive will drop quickly." },
                        { q: "Is the Forevault tool free?", a: "Yes, the calculator is free and doesn't require any account. Calculations happen in your browser, so you can use it as a quick working tool without sharing personal data just for a simulation." },
                    ].map(({ q, a }, i) => (
                        <FaqItem key={i} q={q} a={a} />
                    ))}
                </div>
            </div>

            <p className="calc-content__disclaimer">
                Forevault estimates rely on aggregated creator benchmarks and market data. Actual AdSense earnings vary by ad demand, seasonality, audience geography, adblock rates, YouTube policies, and individual video performance. This content is for educational and planning purposes only—not financial advice. See our{" "}
                <a href="/terms" className="calc-content__link">Terms of Use</a>{" "}
                and our{" "}
                <a href="/privacy" className="calc-content__link">Privacy Policy</a>.
            </p>

        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// FaqItem — accordion SEO (ne pas toucher)
// ─────────────────────────────────────────────────────────────────────────────
function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`calc-faq__item ${open ? "calc-faq__item--open" : ""}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
        >
            <button
                className="calc-faq__q"
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
            >
                <span itemProp="name">{q}</span>
                <span className="calc-faq__chevron" aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
            {open && (
                <div
                    className="calc-faq__a"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                >
                    <p itemProp="text">{a}</p>
                </div>
            )}
        </div>
    );
}