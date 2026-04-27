import FaqItem from "../FaqItem";

const FAQ_ITEMS = [
    { q: "How much do 100K YouTube views pay?", a: "There is no fixed number. The payout depends on RPM, which is shaped by niche, audience geography, video format, retention, and ad market conditions. In practice, 100K views can land anywhere from under $200 to over $2,000+ depending on those variables. That is not a range people usually see in simplified online discussions, but it reflects how wide the real spread is." },
    { q: "What is the difference between RPM and CPM?", a: "CPM is what advertisers pay before YouTube takes its share. RPM is what the creator actually keeps per 1,000 views. The two move together but are not the same number — RPM is consistently lower. If you want a useful income metric, RPM is the one to track." },
    { q: "Why do finance videos usually pay more?", a: "Because the audience often has concrete commercial intent — viewers are researching credit options, investment strategies, tax planning, or business decisions. Advertisers pay more to reach people actively thinking about money, which pushes up CPM and ultimately RPM for creators in that space." },
    { q: "Do Shorts pay the same as long-form videos?", a: "No. Shorts operate through a pooled revenue model rather than individual ad auctions. The effective RPM is usually dramatically lower than long-form. Shorts can still be valuable for audience growth, but they should not be relied upon as a primary revenue mechanism for most channels." },
    { q: "Does audience country change the payout?", a: "Yes, often significantly. Views from the US, UK, Canada, Australia, and similar high-advertiser-spend markets typically produce stronger RPM because advertisers compete more aggressively for those audiences. The difference can be substantial — not a small rounding adjustment." },
    { q: "Does video length affect how much 100K views pay?", a: "Yes. Once a video passes 8 minutes, mid-roll placements become available. That can raise total ad revenue meaningfully on a video with solid retention. But it only helps if viewers actually stay — adding length to hit a threshold, without keeping the content engaging, tends to hurt more than it helps." },
    { q: "What retention rate should I enter?", a: "If you do not have your own channel data yet, 45% is a reasonable starting benchmark for long-form content. Once you have real Studio numbers, use those instead. Your audience's specific behavior — shaped by your topic, format, and style — will always be more accurate than any generic figure." },
    { q: "Is this calculator free?", a: "Yes. It is free to use, no account required, and the estimate runs locally in your browser." },
];

export default function CalcContent() {
    return (
        <section className="calc-content" aria-label="About the YouTube revenue calculator">

            <div className="calc-content__intro">
                <span className="calc-content__eyebrow">Understanding what 100K views really pays</span>
                <h1 className="calc-content__h2">How much do 100K YouTube views pay?</h1>
                <p className="calc-content__lead">
                    The question sounds simple. The honest answer is that there is no single figure — and the gap between what people expect and what actually lands in their account is often large enough to genuinely change how someone plans their content strategy.
                </p>
                <p className="calc-content__lead">
                    100,000 views is a milestone that means very different things depending on what kind of views they are, where the audience lives, how long they watched, and whether the video was long-form or Shorts. A finance creator and a gaming creator can both hit 100K in the same week and end up with payouts that differ by a factor of five or more.
                </p>
                <p className="calc-content__lead">
                    What follows is a look at why that gap exists — not to discourage, but because understanding the actual variables is more useful than a false average. There are also places where this kind of estimation breaks down, and those are worth knowing too.
                </p>
                <p className="calc-content__lead">
                    <em>A note on methodology: the ranges on this page reflect aggregated creator benchmark data and observed advertiser market behavior. They are not sourced from YouTube directly, and they will not perfectly match any individual channel's results.</em>
                </p>
            </div>

            <div className="calc-content__stats" role="list">
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">100K</span><span className="calc-content__stat-label">Reference view count</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">50+</span><span className="calc-content__stat-label">Niches in the model</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">80+</span><span className="calc-content__stat-label">Audience countries covered</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">±20%</span><span className="calc-content__stat-label">Typical planning range</span></div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">What actually determines what 100K views pays</h2>
                <p className="calc-content__p">
                    The view count is the least informative number in the equation once you start looking at the mechanics. Here is what is doing the real work.
                </p>
                <div className="calc-content__metrics">
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">RPM — the number that matters most</h3>
                        <p className="calc-content__p">RPM is what you actually keep per 1,000 views after YouTube takes its share. This is the figure that decides what 100K views is worth, and it can range from under $1 to over $20 depending on niche, geography, and format. Two channels both celebrating 100K can be living in completely different financial realities.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">CPM — advertiser pricing, not creator payout</h3>
                        <p className="calc-content__p">CPM is what advertisers pay before YouTube takes its cut. It is worth tracking, but it is not your income. A high CPM can still produce a mediocre RPM if retention is weak or if the audience geography is unfavorable. The two numbers sound related because they are — but they are not interchangeable.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Niche — the biggest RPM driver</h3>
                        <p className="calc-content__p">Advertisers do not value every audience equally. Finance, software, business, and legal content typically draws stronger bids because those viewers are closer to spending decisions that matter to advertisers. Entertainment and gaming can still perform — they just operate in a different bidding environment. That difference is why 100K means something different in each.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Geography — quietly changes everything</h3>
                        <p className="calc-content__p">100K views from the US, UK, Canada, or Australia pays differently than 100K views from lower-bid markets. The views look identical on a dashboard. The ad revenue behind them does not. This is one of the most common reasons creators are confused by their results when they compare channels or look at generic RPM figures online.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Retention — ad opportunities, not just ranking</h3>
                        <p className="calc-content__p">Longer average watch time means more ad placements can realistically be served. A video where most viewers stay for 70% will have more monetized impressions than one where most leave at 20%, even if the total view count is the same. This is the part retention's role in revenue that often goes unmentioned.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Duration and mid-rolls</h3>
                        <p className="calc-content__p">Once a video crosses 8 minutes, mid-rolls become an option. A well-paced 10-minute video can produce more revenue than a 6-minute version of the same content — not because of the extra runtime itself, but because that runtime unlocks additional ad inventory. The condition is that viewers have to actually stay through it.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Shorts — a different system</h3>
                        <p className="calc-content__p">Shorts pull from a pooled revenue fund rather than the standard ad auction model. The result is that 100K Shorts views typically produces a fraction of what 100K long-form views produces. Strong reach is possible with Shorts. Strong direct ad revenue per view is not the primary use case.</p>
                    </div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">What we still cannot measure well</h2>
                <p className="calc-content__p">
                    Any honest discussion of revenue estimates should acknowledge where the model's edges are.
                </p>
                <p className="calc-content__p">
                    Ad blocker prevalence varies considerably by audience type. Younger, tech-forward audiences — common in gaming, software, and developer niches — tend to use ad blockers at higher rates. That directly reduces monetized impressions, but it does not show up in view counts. There is no clean way to model this without the creator's own data.
                </p>
                <p className="calc-content__p">
                    Seasonality is real but unpredictable in the specific. Advertisers generally spend more in Q4 and less in Q1, but the magnitude of that swing differs by year, by niche, and by market. A range that is accurate in October may overestimate October in a slow ad market and underestimate it in a strong one.
                </p>
                <p className="calc-content__p">
                    Individual video variance is also wider than most aggregated benchmarks suggest. The RPM on a single video is not a reliable indicator of a channel's actual performance pattern. A few outlier videos — in either direction — can distort expectations significantly.
                </p>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Why 100K-view payout claims online are usually misleading</h2>
                <p className="calc-content__p">
                    A lot of advice online pretends there is one reliable payout for 100K views. There is not, and the gap between what gets posted and what most channels actually experience is worth examining.
                </p>
                <p className="calc-content__p">
                    Screenshot culture is a significant part of the problem. One strong month gets shared widely; weaker months disappear. The screenshot shows CPM, not RPM. Country mix is not mentioned. And the video that performed exceptionally is framed as typical.
                </p>
                <p className="calc-content__p">
                    Fake RPM averages get copied from one page to another and gradually take on authority they have not earned. Many of those numbers are old, selectively sourced, or based on a specific channel configuration that does not generalize.
                </p>
                <p className="calc-content__p">
                    That is why a flat "views × $X" calculation is not just imprecise — it is wrong in its structure. It treats a market-driven variable as if it were a fixed rate.
                </p>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Three scenarios that look the same but pay differently</h2>
                <p className="calc-content__p">These are illustrative ranges, not guarantees. They are intentionally imprecise because the real-world spread of outcomes within each scenario is genuinely wide.</p>
                <div className="calc-content__scenarios">
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">US finance channel, 9-minute video, solid retention</h3>
                        <p className="calc-content__p">Around 52% retention, mostly US audience, mid-rolls available. A reasonable RPM range might be $8 to $18, landing revenue somewhere around <strong>$800 to $1,800</strong>. In a strong Q4 the upper end extends; in a slow January it compresses. This is not a reliable monthly number — it is one video's likely outcome range.</p>
                    </div>
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">Gaming channel, broader geography, comparable metrics</h3>
                        <p className="calc-content__p">Weaker advertiser demand across the niche plus a wider geographic spread typically puts RPM in the $1.50 to $4 range. Revenue: roughly <strong>$150 to $400</strong>. Same 100K views. The payout story is almost unrecognizable compared to the finance example above.</p>
                    </div>
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">Education/software tutorial, mixed Tier-1 audience</h3>
                        <p className="calc-content__p">A 11-minute tutorial, about 48% retention, audience split between US/UK/Canada and elsewhere. RPM could realistically be anywhere from $4 to $10 depending heavily on the specific subtopic and audience behavior. Revenue range: <strong>$400 to $1,000</strong>. Wide range, because education is not a single market.</p>
                    </div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Common errors in revenue estimation</h2>
                <ul className="calc-content__steps">
                    <li><strong>Trusting a single average number</strong> — averages collapse the distribution and hide how wide the actual range is.</li>
                    <li><strong>Confusing CPM with payout</strong> — CPM is advertiser-side. What lands in your account is RPM, and it is always lower.</li>
                    <li><strong>Ignoring country mix</strong> — this variable alone can change a revenue estimate by a factor of three or four.</li>
                    <li><strong>Treating retention as only an algorithm signal</strong> — it also directly controls how much ad inventory gets served per video.</li>
                    <li><strong>Assuming the same conditions persist across months</strong> — seasonality, ad market cycles, and audience behavior all shift.</li>
                </ul>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Common myths about 100K views</h2>
                <ul className="calc-content__steps">
                    <li><strong>"100K views always pays about the same" is false</strong> — niche, audience country, retention, and format can move the revenue dramatically in either direction.</li>
                    <li><strong>"CPM is what the creator earns" is false</strong> — CPM is advertiser-side pricing. RPM is much closer to what actually reaches the creator.</li>
                    <li><strong>"Shorts pay like long-form" is false</strong> — Shorts use a separate monetization structure and typically earn far less per view.</li>
                    <li><strong>"Longer videos always earn more" is false</strong> — extra length only improves revenue when it creates additional ad opportunities without breaking retention.</li>
                </ul>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">How to interpret this page responsibly</h2>
                <p className="calc-content__p">
                    Treat the ranges here as directional planning inputs, not contractual outcomes. They are most useful for decisions about topic selection, format strategy, and audience targeting — areas where understanding the monetization variables matters before you have your own data. Once you have real channel numbers from YouTube Studio, those should take precedence over any external estimate.
                </p>
            </div>

            <div className="calc-content__faq" id="faq">
                <h2 className="calc-content__h2">Frequently asked questions</h2>
                <p className="calc-content__p" style={{ marginBottom: "2rem" }}>These cover the main things that make 100K views pay more, or less, than people expect.</p>
                <div className="calc-faq__list">
                    {FAQ_ITEMS.map(({ q, a }, i) => (
                        <FaqItem key={i} q={q} a={a} />
                    ))}
                </div>
            </div>

            <p className="calc-content__disclaimer">
                Forevault estimates rely on aggregated creator benchmarks and market data. Real AdSense earnings still move with ad demand, seasonality, geography, ad blockers, policy shifts, and plain old video-to-video variance. This content is for planning and education only, not financial advice. See our <a href="/terms" className="calc-content__link">Terms of Use</a> and our <a href="/privacy" className="calc-content__link">Privacy Policy</a>.
            </p>
        </section>
    );
}