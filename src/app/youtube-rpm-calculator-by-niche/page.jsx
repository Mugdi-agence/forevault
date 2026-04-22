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
            { "@type": "Question", "name": "What is RPM on YouTube?", "acceptedAnswer": { "@type": "Answer", "text": "RPM (Revenue Per Mille) is the amount a creator earns per 1,000 video views after YouTube's 45% revenue share. It differs from CPM, which is the rate advertisers pay before YouTube's cut." } },
            { "@type": "Question", "name": "Why do YouTube Shorts earn much less than long-form videos?", "acceptedAnswer": { "@type": "Answer", "text": "YouTube Shorts are monetized through the Shorts Revenue Pool rather than standard AdSense impressions, resulting in an effective RPM roughly 50–100x lower than long-form content." } },
            { "@type": "Question", "name": "Which YouTube niche has the highest RPM?", "acceptedAnswer": { "@type": "Answer", "text": "Finance, investing, and business niches consistently have the highest YouTube RPM, often ranging from $10 to $30+ per 1,000 views. Software tutorials, legal advice, and real estate follow closely." } },
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
        <section className="calc-content" aria-label="About the YouTube RPM calculator by niche">

            <div className="calc-content__intro">
                <span className="calc-content__eyebrow">Understanding RPM by niche</span>
                <h1 className="calc-content__h2">Why YouTube RPM changes so much by niche</h1>
                <p className="calc-content__lead">
                    The niche question comes up constantly in creator communities, usually in the form of "which niche pays the most?" The short answer is finance, with caveats. But the longer answer — about why the gap exists, how large it actually is, and where niche comparisons start to fall apart — is considerably more useful for making real content decisions.
                </p>
                <p className="calc-content__lead">
                    A creator choosing between topics deserves more than a ranked list. They deserve to understand the mechanism. Why does a software tutorial outperform a lifestyle video with the same view count? Why does geography interact with niche in ways that make simple comparisons unreliable? Why do two "finance" channels sometimes end up at completely different RPM?
                </p>
                <p className="calc-content__lead">
                    This page is an attempt to answer those questions directly, including the parts that complicate the clean narrative — because the complications are what actually explain real creator income.
                </p>
                <p className="calc-content__lead">
                    <em>Methodology note: niche RPM ranges on this page reflect aggregated creator-reported data and observed advertiser market behavior. They are illustrative ranges, not fixed rates, and they shift with market conditions, geography, and subtopic context.</em>
                </p>
            </div>

            <div className="calc-content__stats" role="list">
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">50+</span><span className="calc-content__stat-label">Niches in the model</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">80+</span><span className="calc-content__stat-label">Countries compared</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">12</span><span className="calc-content__stat-label">Display currencies</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">±20%</span><span className="calc-content__stat-label">Typical planning range</span></div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Why niches have different RPM — the actual mechanism</h2>
                <p className="calc-content__p">RPM does not change between niches arbitrarily. Each variable below contributes to why one topic pays more per view than another at the same traffic level.</p>
                <div className="calc-content__metrics">
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">RPM reflects audience commercial value</h3>
                        <p className="calc-content__p">RPM — what a creator keeps per 1,000 views after YouTube's share — is the number that most directly reflects niche monetization. Two niches can have completely different RPM at the same view count because the audiences behind those views are worth different amounts to advertisers. This is not a judgment about content quality. It is a reflection of advertiser demand for specific audience types.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">The advertiser intent dynamic</h3>
                        <p className="calc-content__p">Finance, software, business, and legal content attracts advertisers with large customer acquisition budgets — financial products, SaaS tools, legal services, business software. Those advertisers compete for the same audience, which drives CPM up. Gaming and entertainment audiences are larger in aggregate but attract advertisers with smaller per-customer margins and more fragmented budgets. The math plays out in RPM.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Where niche and geography interact</h3>
                        <p className="calc-content__p">The same niche does not produce the same RPM in every market. A personal finance channel with mostly US viewers will typically outperform a personal finance channel with mostly viewers from lower-bid markets, even if the content is comparable. Niche sets the ceiling; geography determines how close to it you get. Both variables have to be favorable simultaneously for RPM to be strong.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Retention still shapes what niche RPM actually means</h3>
                        <p className="calc-content__p">A high-RPM niche still requires viewer engagement to deliver on its potential. If a finance video has strong niche signals but poor retention, fewer ads get served and the theoretical RPM advantage does not fully materialize. Niche RPM figures represent a best-case scenario per view. Retention is what determines how many of those views actually convert into monetized impressions.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Video length multiplies niche value</h3>
                        <p className="calc-content__p">A high-RPM niche plus a video over 8 minutes with mid-rolls plus decent retention is the combination that produces the strongest revenue outcomes. Each of those three variables amplifies the others. Remove one — say, the video is under 8 minutes, or retention drops off — and the combined effect is noticeably weaker. Niche alone does not tell the full story.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Shorts and the niche variable</h3>
                        <p className="calc-content__p">Niche still matters in Shorts, but the base RPM from the Shorts revenue pool is so much lower than long-form that the absolute dollar difference between niches is compressed. A finance Shorts creator will still outperform a gaming Shorts creator at similar view counts, but neither will approach the RPM a long-form video in the same niche would generate. Format matters as much as niche for revenue planning.</p>
                    </div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Where niche RPM data gets complicated</h2>
                <p className="calc-content__p">
                    Niche comparisons are useful starting points. They become misleading when they are applied without accounting for the variables underneath them.
                </p>
                <p className="calc-content__p">
                    The word "finance" covers an enormous range. A channel about basic budgeting for young adults, a channel about options trading strategies, and a channel about corporate treasury management are all finance channels. But they attract different advertiser profiles at different CPM levels. A simple "finance pays $12 RPM" benchmark applied to all three will be wrong for at least two of them.
                </p>
                <p className="calc-content__p">
                    Niche RPM numbers also embed geographic assumptions that are rarely stated. Most benchmarks derive from English-language, US-heavy traffic profiles. A finance creator whose audience is primarily in a non-US market will see a different RPM than the benchmark suggests, not because the benchmark is wrong for its context but because the contexts do not match.
                </p>
                <p className="calc-content__p">
                    And seasonality moves niche RPM in ways that are real but unpredictable. Finance and business topics tend to see stronger CPM in Q4 when advertisers are spending aggressively before year-end. The same niche in Q1 may produce noticeably lower RPM. A benchmark that does not specify the time of year it was collected may be presenting a Q4 figure as if it were year-round performance.
                </p>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Niche-level comparison with identical surface metrics</h2>
                <p className="calc-content__p">These scenarios have the same headline view count. The differences in outcome reflect niche, geography, and their interaction — not video quality or effort.</p>
                <div className="calc-content__scenarios">
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">US finance channel — 100K views, 9-minute video</h3>
                        <p className="calc-content__p">Around 52% retention, predominantly US audience. A realistic RPM range here is roughly $8 to $18, putting revenue at approximately <strong>$800 to $1,800</strong>. The upper end requires both the niche and geography to be working simultaneously. In a slow Q1 ad market, expect the lower end of the range or below it.</p>
                    </div>
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">Gaming channel — same core metrics, broader international audience</h3>
                        <p className="calc-content__p">Lower advertiser competition in gaming, combined with a wider geographic spread, pulls RPM down to roughly $1.50–$4.00. Revenue: around <strong>$150 to $400</strong>. Identical top-line view number. The economics are almost unrecognizable compared to the finance scenario above.</p>
                    </div>
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">Software tutorial channel — 100K views, mixed Tier-1 audience</h3>
                        <p className="calc-content__p">RPM in this configuration can vary more than the tidy benchmarks suggest — anywhere from $4 to $10 is plausible, depending heavily on the specific software category and how much of the audience is US-based. Revenue estimate: <strong>$400 to $1,000</strong>. Tutorials covering enterprise software skew toward the higher end; tutorials for free consumer tools often sit lower within the same "software" label.</p>
                    </div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Common niche-selection errors</h2>
                <ul className="calc-content__steps">
                    <li><strong>Picking a niche based on one RPM screenshot</strong> — a single screenshot reflects one moment in one channel's context. It does not describe the range you should expect.</li>
                    <li><strong>Treating broad niche labels as homogeneous</strong> — "finance," "gaming," and "education" each contain enormous variation in subtopic, audience type, and advertiser demand. The label is the start of the analysis, not the end.</li>
                    <li><strong>Separating niche from geography in the analysis</strong> — those two variables interact constantly. A niche RPM figure without a geographic context attached to it is only half the picture.</li>
                    <li><strong>Assuming high theoretical RPM compensates for weak retention</strong> — niche RPM is what a view is worth under favorable conditions. Retention is what determines how many views actually reach that value.</li>
                </ul>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Common myths about RPM by niche</h2>
                <ul className="calc-content__steps">
                    <li><strong>"More views always means more money" is an oversimplification</strong> — in niche comparisons, the topic can matter as much as or more than the raw traffic number. A smaller finance channel can earn more than a much larger gaming channel.</li>
                    <li><strong>"CPM is what creators earn" is false</strong> — CPM is advertiser-side pricing. RPM is much closer to real creator income, and the gap is consistent across all niches.</li>
                    <li><strong>"All finance content pays the same" is false</strong> — subtopic, geography, audience intent, and retention behavior all introduce significant variation within the same broad niche.</li>
                    <li><strong>"Shorts behave like long-form for niche premiums" is false</strong> — Shorts use a separate monetization structure, and niche premiums apply differently. A gaming Shorts creator and a finance Shorts creator will have different RPM, but neither will approach long-form rates in the same niche.</li>
                </ul>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Using niche data for actual decisions</h2>
                <p className="calc-content__p">
                    The honest use case for niche RPM data is comparative and directional, not prescriptive. It helps you understand why two channels with similar views might have different income, and it provides a framework for thinking about topic selection — but it should not be the only factor in that decision.
                </p>
                <p className="calc-content__p">
                    A slightly lower-RPM niche that you can sustain and build authority in for several years will often outperform a higher-RPM niche where you have no genuine angle or staying power. The compound effect of consistency and expertise in a topic you understand — even a mid-tier RPM one — tends to beat the compound effect of chasing RPM rankings in a topic you do not connect with.
                </p>
                <p className="calc-content__p">
                    That is not an argument to ignore monetization. It is an argument to treat it as one input among several, rather than the primary filter for content strategy.
                </p>
            </div>

            <div className="calc-content__faq" id="faq">
                <h2 className="calc-content__h2">Frequently asked questions</h2>
                <p className="calc-content__p" style={{ marginBottom: "2rem" }}>These cover the main reasons RPM shifts so much from one niche to another.</p>
                <div className="calc-faq__list">
                    {[
                        { q: "Why does RPM vary so much by niche?", a: "Because advertisers value different audiences at different rates. A niche that attracts viewers making financial decisions, evaluating software purchases, or running businesses commands stronger advertiser bids than one that attracts casual entertainment viewers. RPM reflects that auction-market dynamic, not a YouTube editorial judgment about content quality." },
                        { q: "What is the difference between RPM and CPM?", a: "CPM is what advertisers pay before YouTube takes its cut. RPM is what the creator actually keeps per 1,000 views. For niche comparisons, RPM is the relevant metric because it reflects the creator's actual revenue position after the full chain plays out." },
                        { q: "Which niche usually has the highest RPM?", a: "Finance, investing, business, software, and some legal or real-estate topics often sit near the top. But 'usually' carries significant caveats — the RPM within any of those niches can vary substantially based on subtopic, audience geography, and market timing. A strong finance benchmark does not uniformly apply to every finance channel." },
                        { q: "Do Shorts have the same RPM as long-form videos in high-value niches?", a: "No. Shorts use a pooled revenue model rather than standard ad auctions. The niche premium still exists in Shorts, but the base RPM is much lower than long-form. A finance Shorts creator will outperform a gaming Shorts creator at similar views, but neither will approach the RPM a long-form video would generate in the same niche." },
                        { q: "Does audience geography affect RPM by niche?", a: "Significantly. The same niche can produce very different RPM depending on where the audience is. A US-heavy finance audience is not the same monetization environment as a finance audience with mixed or lower-bid geographic distribution. Niche provides a range of potential; geography shapes where within that range the actual performance lands." },
                        { q: "Should I choose my niche based primarily on RPM?", a: "Probably not as the primary filter. RPM matters, but sustained output in a topic you understand and can continue developing in over years tends to outperform short-term chasing of RPM rankings. A mid-tier RPM niche with genuine depth and audience trust often produces better long-term revenue than a high-RPM niche with weak creative commitment." },
                        { q: "What retention rate should I enter?", a: "If you do not have your own analytics yet, 45% is a reasonable long-form starting point. Once you have real data, use your actual numbers. Channel-specific retention is always more accurate than a generic benchmark." },
                        { q: "Is this calculator free?", a: "Yes. It is free to use, no account required, and the estimate runs locally in the browser." },
                    ].map(({ q, a }, i) => <FaqItem key={i} q={q} a={a} />)}
                </div>
            </div>

            <p className="calc-content__disclaimer">
                Forevault estimates rely on aggregated creator benchmarks and market data. Real AdSense earnings still vary with ad demand, seasonality, geography, ad blockers, policy changes, and individual video performance. This content is for education and planning only, not financial advice. See our <a href="/terms" className="calc-content__link">Terms of Use</a> and our <a href="/privacy" className="calc-content__link">Privacy Policy</a>.
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