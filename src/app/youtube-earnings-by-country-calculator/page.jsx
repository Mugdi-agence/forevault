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
                <span className="calc-content__eyebrow">Understanding geography and YouTube earnings</span>
                <h1 className="calc-content__h2">YouTube earnings by country: why location changes everything</h1>
                <p className="calc-content__lead">
                    Geography is probably the most underestimated variable in YouTube monetization. Two creators with similar view counts and similar content types can look at their RPM on the same day and see numbers that barely overlap — and a significant part of that gap comes down to where their audiences live.
                </p>
                <p className="calc-content__lead">
                    This happens because YouTube's ad revenue does not come from views directly. It comes from ad auctions. And those auctions play out differently in different markets. Advertisers competing for US, UK, Canadian, or Australian audiences typically bid more aggressively than advertisers targeting lower-purchasing-power markets. The creator does not set that rate. The market does.
                </p>
                <p className="calc-content__lead">
                    What follows is an honest breakdown of why country matters, how large the differences can actually be, and where country-based revenue estimates break down — because they do, and knowing where helps you read the numbers more accurately.
                </p>
                <p className="calc-content__lead">
                    <em>A note on data: the country-based RPM relationships described here reflect observed patterns in creator-reported data and advertiser market behavior. Country rankings shift with economic conditions, advertiser spending cycles, and platform policy changes. The ranges on this page are not static.</em>
                </p>
            </div>

            <div className="calc-content__stats" role="list">
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">80+</span><span className="calc-content__stat-label">Countries in the model</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">50+</span><span className="calc-content__stat-label">Niches with RPM context</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">12</span><span className="calc-content__stat-label">Display currencies</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">±20%</span><span className="calc-content__stat-label">Typical planning range</span></div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">How country actually affects the revenue equation</h2>
                <p className="calc-content__p">Geography interacts with several other variables at once. Understanding each piece separately makes the overall pattern clearer.</p>
                <div className="calc-content__metrics">
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">RPM is what the geography variable actually moves</h3>
                        <p className="calc-content__p">RPM — the amount a creator keeps per 1,000 views after YouTube's share — is the metric that geography most directly affects. A strong country mix can push RPM up meaningfully. A weak one can suppress it even when niche and video quality are both solid. This is why tracking RPM by country in YouTube Studio is often more informative than tracking overall RPM alone.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Advertiser demand is not evenly distributed</h3>
                        <p className="calc-content__p">Ad budgets concentrate in markets where advertisers expect returns. Markets with higher consumer purchasing power and stronger e-commerce infrastructure — the US being the clearest example — attract more advertiser competition, which drives up CPM and consequently RPM. This is not a YouTube-specific quirk; it reflects how digital advertising markets work globally.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">The same niche earns differently by region</h3>
                        <p className="calc-content__p">A finance channel with mostly US viewers and a finance channel with mostly viewers from lower-bid markets will not have the same RPM even if the content quality and view counts are similar. The niche determines which advertisers are competing; the geography determines how hard they compete. Both variables have to be favorable at the same time for RPM to be strong.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Retention still matters — geography is not enough alone</h3>
                        <p className="calc-content__p">A high-value audience from a premium market does not automatically translate to strong revenue if viewers leave early. Retention affects how much ad inventory can actually be delivered. A viewer from the US who leaves at 15% of a video represents less monetization potential than a viewer from a lower-bid market who watches through 80%. Country helps, but it cannot fully compensate for weak watch behavior.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Video length and mid-rolls still apply</h3>
                        <p className="calc-content__p">Geography multiplies what is already there. A long-form video over 8 minutes with mid-rolls and a US-heavy audience benefits from both the geography premium and the additional ad inventory. A Shorts video from the same creator in the same market will earn less per view because it is using a different monetization model entirely, regardless of geography.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Shorts and the geographic variable</h3>
                        <p className="calc-content__p">Geography matters for Shorts too, but the base RPM is low enough that the absolute difference between country tiers is smaller in dollar terms. A premium audience in a Shorts context still beats a low-bid audience, but neither will match long-form revenue. This is worth knowing before drawing conclusions from Shorts revenue data about country performance.</p>
                    </div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Where country-based estimates break down</h2>
                <p className="calc-content__p">
                    The country hierarchy that most income discussions present — US at the top, followed by UK, Canada, Australia, certain Western European markets — is a reasonable starting framework. It is not a fixed ranking, and relying on it too heavily leads to predictable errors.
                </p>
                <p className="calc-content__p">
                    Country-level RPM fluctuates with local economic conditions, advertiser campaign cycles, and seasonal spending patterns. The gap between the US and a mid-tier market can narrow significantly during a slow US Q1 ad market and widen again in Q4. A creator who draws conclusions from Q4 data about their country mix may be reading a seasonal effect rather than a structural one.
                </p>
                <p className="calc-content__p">
                    Niche also modulates geography in ways that are not always obvious. Some niches have genuinely global advertiser demand — certain software categories, for example — which compresses the country premium. Others are so US-centric that the gap between US traffic and non-US traffic is extreme. Country estimates that do not account for niche context are only partially informative.
                </p>
                <p className="calc-content__p">
                    And then there is the mixed-audience problem. Very few channels have a pure geographic distribution. Most have a blend of viewer locations, which means the effective RPM is a weighted average of those country-level rates — and that weighted average can shift month to month as audience composition changes.
                </p>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Why country-based comparisons mislead creators</h2>
                <p className="calc-content__p">
                    Most income advice online treats geography as a side note — a small modifier on top of a view-based estimate. In practice, country mix can be one of the largest single variables in the entire revenue equation.
                </p>
                <p className="calc-content__p">
                    The problem is compounded by how income data gets shared. CPM screenshots get posted without country context. "Average RPM" numbers circulate without specifying the geographic mix they were drawn from. A creator with 90% US traffic posting their RPM is not providing a reference point that applies to a creator with 50% international traffic. But those numbers end up in the same discussions and get treated as equivalent benchmarks.
                </p>
                <p className="calc-content__p">
                    This is why two creators in identical niches with identical monthly view counts can have such different revenue experiences — and why "comparing channels is often meaningless" without knowing the audience geography on both sides.
                </p>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Country-mix comparison: same traffic, different economics</h2>
                <p className="calc-content__p">These scenarios are deliberately not perfectly matched — that is the point. Real channels have different combinations of variables, and the revenue differences reflect that reality.</p>
                <div className="calc-content__scenarios">
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">US finance channel — 100K views, 9-minute video, strong US-heavy audience</h3>
                        <p className="calc-content__p">
                            With roughly 52% retention and a predominantly US viewer base, a realistic RPM might fall around $8 to $18. Revenue estimate: approximately <strong>$800 to $1,800</strong>. Both the geography and niche are working in the creator's favor simultaneously — this is what the upper end of the range requires.
                        </p>
                    </div>
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">Gaming channel — same 100K views, geographically distributed audience</h3>
                        <p className="calc-content__p">
                            Lower advertiser demand in gaming combined with a broader geographic spread pushes RPM down to roughly $1.50–$4.00. Revenue: around <strong>$150 to $400</strong>. Identical headline view count. The country mix difference alone accounts for much of the gap, before even factoring in the niche difference.
                        </p>
                    </div>
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">Educational tutorial — UK/Canada-heavy audience, 100K views</h3>
                        <p className="calc-content__p">
                            A practical RPM range around $4 to $10, producing roughly <strong>$400 to $1,000</strong>. The range is wide because within "educational" there is substantial variation in advertiser demand by subtopic, and because the UK/Canada mix — while strong — does not quite match the top-tier US-heavy configuration. The middle of the range is probably more realistic than either extreme.
                        </p>
                    </div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Where geography analysis usually fails in practice</h2>
                <ul className="calc-content__steps">
                    <li><strong>Skipping audience-country analysis entirely</strong> — then attributing RPM fluctuations to algorithm changes when geography shifts are the more likely cause.</li>
                    <li><strong>Using global average benchmarks</strong> — those averages blend markets with fundamentally different advertiser economics, making them unreliable for any individual channel configuration.</li>
                    <li><strong>Comparing channels by views only</strong> — without geography context, view-count comparisons cannot explain income gaps. Two channels with identical views in different geographic distributions are measuring different things.</li>
                    <li><strong>Treating geography as a fixed characteristic</strong> — audience location can shift gradually over time as content strategy evolves, and the RPM implications of those shifts take time to show up clearly in data.</li>
                </ul>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Common myths about earnings by country</h2>
                <ul className="calc-content__steps">
                    <li><strong>"All countries pay about the same" is false</strong> — geography is one of the strongest RPM drivers, and the range between top and bottom markets is very wide in absolute terms.</li>
                    <li><strong>"More views always means more money" is an oversimplification</strong> — 100K views in one country configuration can produce several times more revenue than 100K views in another. The number is not the whole story.</li>
                    <li><strong>"CPM is what creators earn" is false</strong> — CPM is advertiser-side pricing before YouTube's share. RPM is much closer to what lands in the creator's account.</li>
                    <li><strong>"Shorts behave like long-form for geography premiums" is false</strong> — the base RPM for Shorts is low enough that country premiums have a different absolute impact than in long-form.</li>
                </ul>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">How to read these country-based estimates</h2>
                <p className="calc-content__p">
                    The estimates here are most useful as comparative tools — helping you understand the relative difference between audience configurations, not as precise forecasts for any specific month. If you are trying to understand why two channels perform differently, or evaluating content strategy decisions that might affect your geographic reach, these ranges provide useful directional context.
                </p>
                <p className="calc-content__p">
                    For your own channel specifically, YouTube Studio's geographic breakdown is the only accurate source. These external benchmarks tell you what tends to happen under certain conditions — your analytics tell you what is actually happening with your audience.
                </p>
            </div>

            <div className="calc-content__faq" id="faq">
                <h2 className="calc-content__h2">Frequently asked questions</h2>
                <p className="calc-content__p" style={{ marginBottom: "2rem" }}>These cover the main reasons geography changes YouTube earnings so much.</p>
                <div className="calc-faq__list">
                    {[
                        { q: "Why do YouTube earnings vary by country?", a: "Because advertisers do not pay the same rates everywhere. Ad auctions in markets with higher purchasing power and stronger advertiser competition produce higher CPM, which flows through to higher RPM for creators. This reflects how digital advertising markets work globally, not a YouTube-specific policy." },
                        { q: "Which countries usually pay the most on YouTube?", a: "The US, UK, Canada, Australia, and parts of Western Europe often sit near the top. But this is not a fixed ranking — it shifts with economic conditions, advertiser spending cycles, and niche. Some niches have genuinely global demand that compresses country premiums; others are highly US-centric. The country hierarchy is a useful starting point, not a rule." },
                        { q: "What is the difference between RPM and CPM?", a: "CPM is what advertisers pay before YouTube takes its cut. RPM is what the creator actually keeps per 1,000 views. For country-based analysis, RPM is the more relevant metric because it reflects what the creator actually receives after the entire revenue chain plays out." },
                        { q: "Does audience geography matter more than views?", a: "In some configurations, yes. Two channels with matching view counts but different country distributions can end up with revenue that differs by a factor of three or more. Geography does not override everything, but it interacts with niche and retention in ways that can make it the dominant variable in a given comparison." },
                        { q: "Do Shorts pay the same across countries?", a: "Shorts vary with audience geography, but the pooled revenue model means the base RPM is already low. Country premiums exist in Shorts but have a smaller absolute dollar impact than in long-form. Drawing conclusions about country performance from Shorts data can be misleading if you later apply those conclusions to long-form content." },
                        { q: "Does a US audience always mean high earnings?", a: "Not automatically. US traffic creates favorable conditions, but niche, retention, and video length still matter. A US-heavy audience watching a 5-minute video with weak retention in a low-advertiser-demand niche will not produce the same RPM as the same audience watching an 11-minute finance tutorial with strong watch behavior. Geography helps; it does not guarantee." },
                        { q: "What retention rate should I enter?", a: "If you do not have your own analytics yet, 45% is a reasonable long-form starting point. Your actual retention — shaped by your specific topic, format, and audience — is the only number that accurately reflects your channel's monetization context." },
                        { q: "Is this calculator free?", a: "Yes. It is free to use, no account required, and the estimate runs locally in the browser." },
                    ].map(({ q, a }, i) => <FaqItem key={i} q={q} a={a} />)}
                </div>
            </div>

            <p className="calc-content__disclaimer">
                Forevault estimates rely on aggregated creator benchmarks and market data. Real AdSense earnings still vary with ad demand, seasonality, geography, ad blockers, policy changes, and individual video performance. This content is for planning and education only, not financial advice. See our <a href="/terms" className="calc-content__link">Terms of Use</a> and our <a href="/privacy" className="calc-content__link">Privacy Policy</a>.
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