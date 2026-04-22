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

function CalcContent() {
    return (
        <section className="calc-content" aria-label="About the YouTube revenue calculator">

            <div className="calc-content__intro">
                <span className="calc-content__eyebrow">Understanding monetization</span>
                <h1 className="calc-content__h2">
                    How to estimate YouTube earnings without fooling yourself
                </h1>
                <p className="calc-content__lead">
                    There is a version of this explanation that would tell you to multiply your views by some tidy number and call it income. That version is popular. It is also the reason so many creators end up genuinely confused when their first AdSense payout lands nowhere near what they expected.
                </p>
                <p className="calc-content__lead">
                    The honest version is less satisfying but more useful: YouTube does not pay per view. It pays for ad impressions, and only the ones that actually get served, inside videos that people actually watch, in markets where advertisers are actually spending. Strip out any one of those conditions and the estimate changes significantly.
                </p>
                <p className="calc-content__lead">
                    What follows is a breakdown of how the real monetization variables work, where the common mistakes happen, and how to build a planning range that means something — even knowing that the final number will still be off by some margin, because that is just how ad markets work.
                </p>
                <p className="calc-content__lead">
                    <em>Editorial note: These ranges draw from creator benchmark data aggregated over time. They reflect patterns, not promises. Individual results vary considerably, and the range of "normal" is wider than most people assume.</em>
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
                <h2 className="calc-content__h2">The variables that actually decide revenue</h2>
                <p className="calc-content__p">
                    Most creators learn the hard way that views are just one dimension of the equation. Here is what the other dimensions look like in practice, and where each one tends to surprise people.
                </p>

                <div className="calc-content__metrics">
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">RPM vs CPM — the gap nobody explains clearly</h3>
                        <p className="calc-content__p">RPM is what ends up in your account per 1,000 views, after YouTube's revenue share. CPM is what advertisers pay before that cut. The two numbers are genuinely different, and conflating them is probably the single most common way earnings get overstated in online discussions. A high CPM screenshot can still correspond to a very average RPM if retention is weak or if a significant chunk of the audience is in lower-bid markets.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Retention — more than an algorithm metric</h3>
                        <p className="calc-content__p">Retention is talked about mostly as a ranking signal. What gets mentioned less often is its direct effect on monetization. More watch time means more ad opportunities actually served. A video where 60% of viewers finish creates more potential ad inventory than one where 25% finish, even at identical view counts. This is why two videos with the same headline number can produce meaningfully different revenue.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Niche — advertiser intent, not just topic</h3>
                        <p className="calc-content__p">The revenue difference between niches is not arbitrary. Finance, software, legal, and business topics attract advertisers who are competing for audiences with genuine purchasing intent. Entertainment and gaming can still monetize, but the advertiser pool is different and tends to bid less aggressively. The gap between a $2 RPM and a $14 RPM for similar view counts is almost entirely explained by this dynamic.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Geography — often the biggest surprise</h3>
                        <p className="calc-content__p">Country mix is the variable most income discussions quietly skip. It matters enormously. A channel where 70% of views come from the US, UK, Canada, or Australia will almost always have a higher RPM than a comparable channel where most views come from markets with lower advertiser spend. The views look identical in a headline number. The revenue does not.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Video length and mid-rolls</h3>
                        <p className="calc-content__p">The 8-minute threshold is real and it matters — crossing it makes mid-roll placement possible, which can raise revenue by a meaningful amount on videos with decent retention. That said, adding runtime just to cross a threshold usually backfires if the extra minutes cause viewers to leave earlier. The math only works in your favor when the length is genuinely earned.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Shorts — a different system entirely</h3>
                        <p className="calc-content__p">Shorts do not run on the same monetization model as long-form videos. They draw from a shared revenue pool distributed by watch time, which results in effective RPM that is typically far lower than long-form. This does not make Shorts useless — they can build audiences effectively — but treating them like equivalent revenue generators leads to real planning errors.</p>
                    </div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Where this model breaks down</h2>
                <p className="calc-content__p">
                    It is worth being direct about what these estimates cannot do.
                </p>
                <p className="calc-content__p">
                    Ad markets are not static. Q4 is consistently stronger than Q1 because retail and holiday spending drives advertiser competition — but by how much, and for which niches, shifts every year. A finance video posted in November and the same video posted in February can produce noticeably different RPM even with identical traffic.
                </p>
                <p className="calc-content__p">
                    Ad blockers are also a real variable that does not appear in most revenue discussions. Depending on audience demographics and platform mix, ad block usage can suppress monetized impressions by anywhere from a small fraction to a significant share of views. There is no reliable way to model this without your own channel data.
                </p>
                <p className="calc-content__p">
                    And then there is plain old variance. Even two videos from the same creator in the same niche posted a week apart can have RPM that differs by 30–40%. That is not a modeling failure. That is ad inventory behaving like a market.
                </p>
                <p className="calc-content__p">
                    So: use these ranges for directional planning, topic selection, and format decisions. They are not reliable for projecting a specific payout down to the dollar.
                </p>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Why monetization advice online often fails in practice</h2>
                <p className="calc-content__p">
                    This is where most creators get it wrong. A lot of income advice online is not wrong because people are being deceptive — it is wrong because it is simplified to the point of being misleading. You will see random average RPM lists, screenshots with no context, and bold claims like "YouTube pays $X per 1,000 views." That sounds useful. In practice it confuses people more than it helps, because the $X number is not wrong so much as it is stripped of every condition that makes it accurate.
                </p>
                <p className="calc-content__p">
                    Nobody tells you this part: fake RPM averages are everywhere. Many pages mix old numbers, creator anecdotes, and cherry-picked high-income cases, then present them as if they apply to everyone. They do not.
                </p>
                <p className="calc-content__p">
                    The CPM vs RPM confusion makes it worse. CPM is advertiser-side pricing before YouTube takes its cut. RPM is what you actually keep. When someone posts a high CPM screenshot and implies that is their real payout, that is misleading — even if unintentionally.
                </p>
                <p className="calc-content__p">
                    Geography is often hidden on purpose in "income reveal" content. A channel can show strong RPM while never mentioning that most views are from high-value markets. A lot of RPM screenshots online are quietly misleading because they omit country mix, format split, season, and retention context.
                </p>
                <p className="calc-content__p">
                    Then there is screenshot culture. One exceptional month gets posted everywhere, but no one shows the weaker months or the distribution. That is why a simple "views x $X" formula is not just imprecise — it ignores the entire monetization system that actually decides payouts.
                </p>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">What realistic ranges actually look like</h2>
                <p className="calc-content__p">These are not perfectly comparable scenarios — that is the point. Real channels do not have identical conditions. The variation below reflects what creators with similar view counts can actually experience.</p>
                <div className="calc-content__scenarios">
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">US finance channel — 100K views, 9-minute video, strong retention</h3>
                        <p className="calc-content__p">
                            With roughly 52% retention, mostly US traffic, and mid-rolls enabled, a realistic RPM might fall somewhere in the $8 to $18 range. That puts estimated revenue somewhere around <strong>$800 to $1,800</strong>. In strong Q4 ad seasons, the upper end can move higher. In a slow January, it can fall below the lower end.
                        </p>
                    </div>
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">Gaming channel — 100K views, mixed international audience</h3>
                        <p className="calc-content__p">
                            Weaker advertiser demand plus a broader geographic mix pulls the RPM down considerably. A realistic range is closer to $1.50–$4.00, putting revenue around <strong>$150 to $400</strong>. The headline view count is identical. The monetization outcome is not even close.
                        </p>
                    </div>
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">Education / software tutorial — 100K views, 11 minutes, mixed Tier-1 audience</h3>
                        <p className="calc-content__p">
                            This is the middle case, and it is genuinely variable. RPM might land anywhere from $4 to $10 depending on the specific subtopic, how much of the audience is in high-bid markets, and retention behavior. Revenue estimate: roughly <strong>$400 to $1,000</strong>. The range is wide by design — education is not a monolith.
                        </p>
                    </div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Mistakes that distort revenue expectations</h2>
                <ul className="calc-content__steps">
                    <li><strong>Estimating from views first, context second</strong> — the monetization variables come before the view count in determining real revenue. Starting with views and working backward leads to the most common errors.</li>
                    <li><strong>Comparing channels without matching audience mix</strong> — a gaming channel and a finance channel with identical monthly views are not comparable revenue businesses. The niches are different markets.</li>
                    <li><strong>Treating one strong month as a baseline</strong> — one viral video or one strong Q4 does not describe a channel's typical earning. A single screenshot is not a business model.</li>
                    <li><strong>Ignoring format split</strong> — channels with a heavy Shorts mix and a long-form mix will have very different effective RPM even with similar total view counts. Averaging across formats hides this.</li>
                    <li><strong>Overfocusing on niche labels while ignoring subtopics</strong> — "finance" covers personal budgeting, crypto trading, and wealth management. Those subtopics do not have the same RPM, even within the same broad niche.</li>
                </ul>
                <p className="calc-content__p">
                    In plain terms: creators often estimate as if YouTube pays a fixed salary per view. It does not. It behaves more like a market with changing prices, and the price depends heavily on conditions that are not visible in a view count.
                </p>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">How these estimates should be read</h2>
                <p className="calc-content__p">
                    The ranges here come from observed creator benchmarks combined with advertiser market behavior, then translated into planning scenarios. They are not guarantees and should not be treated as financial projections. Their main value is comparative and directional: helping creators understand which variables are worth optimizing and how different channel configurations tend to perform relative to each other.
                </p>
                <p className="calc-content__p">
                    If you are making a significant decision based on monetization estimates — choosing a niche, deciding whether to invest in equipment, planning content output — these ranges are a reasonable starting point. They are not a substitute for your own channel data once you have it.
                </p>
            </div>

            <div className="calc-content__ctas" aria-label="Discover more resources">
                <p className="calc-content__ctas-label">Keep exploring</p>
                <div className="calc-content__cta-grid">
                    <a href="/niches" className="calc-content__cta-card">
                        <span className="calc-content__cta-icon">◈</span>
                        <div>
                            <strong>Niche Finder</strong>
                            <span>See how RPM shifts across 50+ niches</span>
                        </div>
                        <span className="calc-content__cta-arrow">→</span>
                    </a>
                    <a href="/blog" className="calc-content__cta-card">
                        <span className="calc-content__cta-icon">✦</span>
                        <div>
                            <strong>Creator Blog</strong>
                            <span>Read creator-focused monetization breakdowns</span>
                        </div>
                        <span className="calc-content__cta-arrow">→</span>
                    </a>
                    <a href="/predictor" className="calc-content__cta-card">
                        <span className="calc-content__cta-icon">◎</span>
                        <div>
                            <strong>Views Predictor</strong>
                            <span>Model where your views might go next</span>
                        </div>
                        <span className="calc-content__cta-arrow">→</span>
                    </a>
                </div>
            </div>

            <div className="calc-content__faq" id="faq">
                <h2 className="calc-content__h2">Frequently asked questions</h2>
                <p className="calc-content__p" style={{ marginBottom: "2rem" }}>
                    These are the questions creators usually ask when they realize "views" alone does not explain revenue.
                </p>
                <div className="calc-faq__list">
                    {[
                        {
                            q: "How accurate is this calculator?",
                            a: "Treat it as a planning range, not a promise. The model combines niche RPM benchmarks with adjustments for country mix, format, length, and retention. Real payouts still move with seasonality, ad inventory, ad blockers, and random audience behavior. The more useful framing is this: it tells you which variables are doing the heavy lifting on a given channel configuration, not what your next payment will be."
                        },
                        {
                            q: "What's the difference between RPM and CPM on YouTube?",
                            a: "CPM is what advertisers pay before YouTube takes its cut. RPM is what you actually keep per 1,000 views. That is why creators should never judge earnings from CPM alone. High CPM can still lead to average RPM if retention is weak or if most views come from lower-value markets. The two numbers are measuring different things at different points in the revenue chain."
                        },
                        {
                            q: "Why do Shorts pay less than long-form videos?",
                            a: "Because Shorts do not run on the same ad model. They use a shared revenue pool, so the money is distributed differently than classic long-form impressions. Shorts can still be excellent for growth and subscriber acquisition, but direct revenue per view is usually much lower. Think of them as a distribution strategy, not a primary income source."
                        },
                        {
                            q: "Which YouTube niche has the best RPM?",
                            a: "Finance, investing, software, legal, and business topics are usually at the top because advertisers are willing to pay more to reach those audiences. Gaming and broad entertainment often sit lower. That said, the RPM range inside any single niche is itself wide — a personal finance channel targeting beginners and a trading channel targeting active investors are both 'finance,' but they will not have the same RPM."
                        },
                        {
                            q: "Does video length really change revenue?",
                            a: "Yes. Under 8 minutes, ad options are more limited. Above 8 minutes, mid-rolls become possible and that can raise earnings. But only if the video keeps people watching. If pacing falls apart, the extra length can cancel the benefit. The math only works when the length is genuinely earned by the content."
                        },
                        {
                            q: "How does audience geography influence revenue?",
                            a: "A lot. Viewers in high-income, ad-competitive regions usually generate better CPM and RPM. The same video can pay very differently depending on where the audience lives. When revenue looks unexpectedly low or high, country mix is one of the first things worth checking in YouTube Studio."
                        },
                        {
                            q: "What average retention rate should I enter?",
                            a: "If you are starting blind, use around 45% for long-form as a baseline. Then update it with your real Studio numbers. Some topics naturally keep viewers longer, others do not. You want your own trend line, not a generic internet number, because the generic number almost certainly does not describe your audience's behavior."
                        },
                        {
                            q: "Is the Forevault tool free?",
                            a: "Yes. It is free and does not require an account. Calculations run in your browser, so you can model scenarios quickly without sending personal channel data anywhere."
                        },
                    ].map(({ q, a }, i) => (
                        <FaqItem key={i} q={q} a={a} />
                    ))}
                </div>
            </div>

            <p className="calc-content__disclaimer">
                Forevault estimates are based on aggregated creator benchmarks and market-level data. Real AdSense earnings can still swing because of ad demand, seasonality, audience location, ad blockers, policy changes, and plain old video-to-video variance. Use this content for planning and education, not financial advice. See our{" "}
                <a href="/terms" className="calc-content__link">Terms of Use</a>{" "}
                and our{" "}
                <a href="/privacy" className="calc-content__link">Privacy Policy</a>.
            </p>

        </section>
    );
}

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