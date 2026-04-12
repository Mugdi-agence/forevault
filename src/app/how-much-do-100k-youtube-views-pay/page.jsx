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
                <span className="calc-content__eyebrow">Understanding YouTube earnings</span>
                <h2 className="calc-content__h2">How much do 100K YouTube views pay?</h2>
                <p className="calc-content__lead">
                    One of the most common questions creators ask is simple: how much money does 100K views actually make on YouTube? The honest answer is that there is no single payout number. The revenue attached to 100,000 views can swing a lot depending on the niche, the audience country, the length of the video, the retention rate, and whether the views come from long-form content or Shorts.
                </p>
                <p className="calc-content__lead">
                    That is why two videos with the same view count can end up in completely different revenue brackets. A finance video and a gaming video may both hit 100K views, but they will rarely earn the same amount. The subject matter matters, because advertisers pay very differently depending on the audience they are trying to reach.
                </p>
                <p className="calc-content__lead">
                    This guide breaks down what 100K views usually mean in real creator terms, and how to estimate revenue with more context than a simple "views times a flat rate" shortcut.
                </p>
            </div>

            <div className="calc-content__stats" role="list">
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">100K</span><span className="calc-content__stat-label">Views as a baseline</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">50+</span><span className="calc-content__stat-label">Niches modeled</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">80+</span><span className="calc-content__stat-label">Countries compared</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">±20%</span><span className="calc-content__stat-label">Typical estimate range</span></div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">What 100K views really mean</h2>
                <div className="calc-content__metrics">
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">RPM (Revenue Per Mille)</h3><p className="calc-content__p">RPM is the amount a creator earns per 1,000 views after YouTube takes its share. Two channels can both hit 100K views and still land at very different totals if their RPM is not the same.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">CPM (Cost Per Mille)</h3><p className="calc-content__p">CPM is what advertisers pay for 1,000 ad impressions before YouTube's share. A high CPM does not automatically mean 100K views will pay a lot, because not every view is monetized in the same way.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why niche changes the payout</h3><p className="calc-content__p">Niche is one of the strongest drivers of earnings. Finance, investing, business, software, and legal content often monetizes much better than gaming, vlogs, or broad entertainment because advertisers value those audiences more highly.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why geography matters</h3><p className="calc-content__p">A video with 100K views from the US, UK, Canada, or Australia will usually earn more than the same video with the same views from lower-bid regions.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why retention changes revenue</h3><p className="calc-content__p">Higher retention means more of the video is actually watched, which increases the chance that ads are served. A video that holds attention well can outperform another video with the same view count but weaker watch behavior.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why duration matters</h3><p className="calc-content__p">Long-form videos over 8 minutes can unlock mid-roll ads, which means a 10-minute video may earn more than a 6-minute video even with the same number of views.</p></div>
                    <div className="calc-content__metric-card"><h3 className="calc-content__h3">Why Shorts pay differently</h3><p className="calc-content__p">Shorts use a separate revenue model based on a shared pool. That is why 100K views on Shorts usually pay much less than 100K views on a long video.</p></div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Real-world examples at 100K views</h2>
                <div className="calc-content__scenarios">
                    <div className="calc-content__scenario"><h3 className="calc-content__h3">100K views on a gaming channel</h3><p className="calc-content__p">Gaming often sits on the lower end of RPM because advertiser demand is usually weaker and the audience is less associated with high-intent purchases. The revenue per 1,000 views is often modest.</p></div>
                    <div className="calc-content__scenario"><h3 className="calc-content__h3">100K views on a finance channel</h3><p className="calc-content__p">Finance content often earns far more because advertisers are willing to pay more to reach viewers who are already thinking about money, investing, debt, taxes, or business decisions. At the same view count, the payout can be several times higher.</p></div>
                    <div className="calc-content__scenario"><h3 className="calc-content__h3">100K views on an educational channel</h3><p className="calc-content__p">Educational content often sits in the middle, but the exact result depends on the subtopic. A software tutorial or technical how-to video can monetize much better than a broad educational topic.</p></div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Common misconceptions about 100K views</h2>
                <ul className="calc-content__steps">
                    <li><strong>"100K views always pays the same amount" is wrong</strong> — the revenue can shift a lot based on niche, geography, retention, and format.</li>
                    <li><strong>"CPM is what creators earn" is wrong</strong> — CPM is the advertiser-side rate, while RPM is much closer to creator income.</li>
                    <li><strong>"Shorts earn like long-form" is wrong</strong> — Shorts use a separate monetization structure and usually pay less per view.</li>
                    <li><strong>"Longer videos always pay more" is wrong</strong> — extra length only helps when it improves ad opportunities without hurting retention.</li>
                </ul>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Use the calculator to test different scenarios</h2>
                <p className="calc-content__p">Try changing the niche, the audience country, the video length, or the retention rate. Once you look at it that way, YouTube revenue becomes much easier to interpret: it is not just about view count, it is about the quality and value of those views.</p>
            </div>

            <div className="calc-content__faq" id="faq">
                <h2 className="calc-content__h2">Frequently Asked Questions</h2>
                <p className="calc-content__p" style={{ marginBottom: "2rem" }}>These answers cover the main factors that influence how much 100K YouTube views pay.</p>
                <div className="calc-faq__list">
                    {[
                        { q: "How much do 100K YouTube views pay?", a: "There is no single answer because the payout depends on RPM. A 100K-view video in a low-RPM niche can earn much less than the same view count in a high-RPM niche. Geography, retention, and format also move the number a lot." },
                        { q: "What is the difference between RPM and CPM?", a: "CPM is what advertisers pay for 1,000 ad impressions before YouTube's share. RPM is what the creator actually earns per 1,000 views after YouTube's share. RPM is the better metric for estimating revenue." },
                        { q: "Why do finance videos usually pay more?", a: "Finance content attracts advertisers who are willing to pay more because the audience often has strong commercial intent. The same 100K views can produce a much higher payout than in gaming or general entertainment." },
                        { q: "Do Shorts pay the same as long-form videos?", a: "No. Shorts use a separate revenue pool and usually have a much lower effective RPM than long-form videos." },
                        { q: "Does audience country change the payout?", a: "Yes, significantly. Views from the US, UK, Canada, and other high-value markets usually earn more because advertiser competition and spending are higher there." },
                        { q: "Does video length affect how much 100K views pay?", a: "Yes, because videos over 8 minutes can unlock mid-roll ads — provided the content holds attention well enough to keep retention strong." },
                        { q: "What retention rate should I enter?", a: "If you do not know your own data yet, 45% is a reasonable baseline for long-form content." },
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