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
                <span className="calc-content__eyebrow">Understanding creator earnings</span>
                <h1 className="calc-content__h2">How much do YouTubers actually make?</h1>
                <p className="calc-content__lead">
                    The question gets asked constantly, partly because YouTube income looks like a simple relationship — more views, more money. But that model breaks almost immediately once you look at how the revenue actually gets calculated. Two creators with comparable monthly numbers can end up in genuinely different financial situations, and neither of them is doing anything wrong.
                </p>
                <p className="calc-content__lead">
                    What makes creator income hard to generalize is that multiple variables compound each other: niche affects advertiser demand, geography affects bid rates, retention affects how much inventory gets served, format determines which monetization model applies. Change one variable significantly and the whole output shifts.
                </p>
                <p className="calc-content__lead">
                    This page is an attempt to explain that structure clearly — including where the estimates on this topic (including ours) tend to be unreliable, and what the realistic spread of outcomes looks like for different kinds of channels.
                </p>
                <p className="calc-content__lead">
                    <em>Note on sourcing: the ranges below draw from creator-reported benchmarks and ad market observations. They are not official YouTube figures and do not represent any individual channel's guaranteed outcome.</em>
                </p>
            </div>

            <div className="calc-content__stats" role="list">
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">80+</span><span className="calc-content__stat-label">Countries in the model</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">50+</span><span className="calc-content__stat-label">Niches with RPM ranges</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">12</span><span className="calc-content__stat-label">Display currencies</span></div>
                <div className="calc-content__stat" role="listitem"><span className="calc-content__stat-val">±20%</span><span className="calc-content__stat-label">Typical estimate range</span></div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">The variables behind the income gap</h2>
                <p className="calc-content__p">These are not minor adjustments to a base rate. Each one can substantially change what a creator earns from the same number of views.</p>
                <div className="calc-content__metrics">
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">RPM — the real income metric</h3>
                        <p className="calc-content__p">RPM is what creators actually keep per 1,000 views after YouTube takes its share. Understanding this number is more important than views for income planning. A channel can have impressive view counts and still have a weak RPM if the audience geography is unfavorable or if not many views convert into monetized impressions. Views and income are correlated but not proportional.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">CPM — advertiser cost, not creator payout</h3>
                        <p className="calc-content__p">CPM is what advertisers pay before YouTube takes its cut. It reflects advertiser demand in a given niche and market. A high CPM screenshot does not tell you a creator's income — it tells you what the advertisers were bidding. The creator receives RPM, which is always lower, sometimes substantially so depending on fill rate and audience behavior.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Why niche drives the spread</h3>
                        <p className="calc-content__p">The topic creates a specific audience, and advertisers value those audiences differently. Finance, business, software, and legal content attracts bids from advertisers with large customer acquisition budgets. Gaming and lifestyle content can still build large audiences, but the advertiser competition for those viewers tends to be lower. The result is a wide RPM spread that has nothing to do with production quality.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Why geography changes outcomes</h3>
                        <p className="calc-content__p">Audience location is one of the variables most income comparisons omit. Views from the US, UK, Canada, or Australia typically generate higher RPM because advertiser budgets and competition in those markets are stronger. The same view count from a globally distributed audience will usually produce different revenue than the same count from a primarily US audience. The numbers look identical in analytics; the revenue does not.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">How retention affects ad delivery</h3>
                        <p className="calc-content__p">Retention's most discussed role is algorithmic — better watch time helps with distribution. Its effect on direct revenue is mentioned less: more watch time means more ad placements can realistically be served per view. A video that most people complete has more monetization potential per viewer than one with a high dropout rate, even if the views are identical.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Video length and the 8-minute threshold</h3>
                        <p className="calc-content__p">Once a long-form video crosses 8 minutes, mid-roll placements become an option. That one variable can shift revenue notably on a video with solid retention. It does not automatically mean longer is better — videos padded to hit a duration threshold with weak content typically see retention suffer, which cancels the potential gain. The threshold matters; the quality of the content past it matters more.</p>
                    </div>
                    <div className="calc-content__metric-card">
                        <h3 className="calc-content__h3">Shorts — a separate monetization structure</h3>
                        <p className="calc-content__p">Shorts do not use the standard ad auction model. They draw from a pooled revenue fund distributed by watch time proportion. The effective RPM is typically far below long-form, which means creators who primarily publish Shorts and creators who primarily publish long-form videos are operating in different monetization systems, even if their total view numbers look comparable.</p>
                    </div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Where income estimates go wrong — including this one</h2>
                <p className="calc-content__p">
                    Most income numbers online are incomplete in ways that are hard to spot unless you know what to look for.
                </p>
                <p className="calc-content__p">
                    A common problem is that CPM gets presented as if it were RPM. Someone posts a screenshot of their CPM — the advertiser-side number — and implies or directly states that is what they earned. It is not. CPM is always higher than RPM because it is pre-cut. When you see income reveal content, it is worth asking which number is actually being shown.
                </p>
                <p className="calc-content__p">
                    Geography gets omitted constantly. A creator with 90% US traffic showing their RPM is not providing a benchmark that generalizes to someone with 60% international traffic. Those are different channels in different monetization environments, even if the view counts match.
                </p>
                <p className="calc-content__p">
                    Screenshot culture compounds this. One excellent month circulates widely. The months below or above it do not. The result is that a large portion of income reference points in creator communities are from outlier periods rather than typical performance — which is why so many people feel like they are underperforming compared to what they read online.
                </p>
                <p className="calc-content__p">
                    Our own estimates carry similar limitations. They reflect observed patterns, not individual channel guarantees. Ad market shifts, policy changes, and audience behavior changes can all move results in ways a benchmark model cannot anticipate.
                </p>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">What the income spread actually looks like</h2>
                <p className="calc-content__p">These scenarios are not perfectly comparable by design — real channels never are. They illustrate how the same view count produces very different revenue under different conditions.</p>
                <div className="calc-content__scenarios">
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">US finance channel — 100K views, 9-minute video</h3>
                        <p className="calc-content__p">Around 52% retention, mostly US traffic. A realistic RPM range in this configuration is roughly $8 to $18. Revenue: approximately <strong>$800 to $1,800</strong>, potentially higher during Q4 when ad spending intensifies. That upper range is not guaranteed — it reflects a favorable combination of variables held simultaneously.</p>
                    </div>
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">Gaming channel — 100K views, geographically distributed</h3>
                        <p className="calc-content__p">Lower advertiser competition in the gaming space plus a broader geographic mix typically pushes RPM to around $1.50–$4.00. Revenue: roughly <strong>$150 to $400</strong>. Identical headline number. The underlying monetization story is entirely different.</p>
                    </div>
                    <div className="calc-content__scenario">
                        <h3 className="calc-content__h3">Education / software tutorial — 100K views, mixed Tier-1 audience</h3>
                        <p className="calc-content__p">An 11-minute tutorial with about 48% retention and audience split across US, UK, Canada, and elsewhere. RPM in this range can vary more than most expect — anywhere from $4 to $10 is plausible depending heavily on subtopic and audience behavior. Revenue: <strong>$400 to $1,000</strong>. The word "education" covers a wide spectrum of advertiser demand.</p>
                    </div>
                </div>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">The practical errors behind bad income estimates</h2>
                <ul className="calc-content__steps">
                    <li><strong>Estimating from view count alone</strong> — views are the output, not the driver. The variables that shape RPM are what actually determine income.</li>
                    <li><strong>Confusing CPM with RPM</strong> — one is advertiser cost, the other is creator payout. They are related but not equivalent.</li>
                    <li><strong>Ignoring traffic geography</strong> — country mix can swing revenue by several multiples at identical view counts.</li>
                    <li><strong>Treating a single screenshot as a typical outcome</strong> — short-term performance spikes do not describe a channel's actual earning pattern.</li>
                </ul>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Common misconceptions about what YouTubers make</h2>
                <ul className="calc-content__steps">
                    <li><strong>"More views always means more money" is an oversimplification</strong> — niche, geography, retention, and format can each change the value of those views substantially.</li>
                    <li><strong>CPM is not what creators earn</strong> — CPM is advertiser-side pricing. RPM is much closer to the creator payout, and the gap between them is real and consistent.</li>
                    <li><strong>Shorts revenue works differently</strong> — Shorts use a pooled fund model, not the ad auction that applies to long-form. They typically earn less per view.</li>
                    <li><strong>Longer videos are not automatically better for revenue</strong> — extra duration only improves earnings when retention holds and the additional runtime creates real ad inventory.</li>
                </ul>
            </div>

            <div className="calc-content__block">
                <h2 className="calc-content__h2">Methodology and realistic limits</h2>
                <p className="calc-content__p">
                    The ranges on this page combine market-side pricing patterns with creator-reported performance data, then translated into scenario ranges that reflect actual variation rather than tidy averages. They are most useful as comparative tools — understanding why different channel types perform differently — rather than as precise forecasts.
                </p>
                <p className="calc-content__p">
                    Ad demand, seasonality, and YouTube policy changes can all shift outcomes faster than any benchmark model can track. If you have your own YouTube Studio data, those numbers will always be more accurate than these estimates for your specific channel.
                </p>
            </div>

            <div className="calc-content__faq" id="faq">
                <h2 className="calc-content__h2">Frequently asked questions</h2>
                <p className="calc-content__p" style={{ marginBottom: "2rem" }}>These answers cover the biggest variables behind creator income on YouTube.</p>
                <div className="calc-faq__list">
                    {[
                        { q: "How accurate is this calculator?", a: "It gives a planning range, not a guaranteed payout. The model uses observed RPM ranges by niche with adjustments for geography, format, length, and retention. It is most useful for direction and comparison. Your real Studio numbers, once you have them, will always outperform this model for your specific channel." },
                        { q: "What is the difference between RPM and CPM on YouTube?", a: "CPM is what advertisers pay before YouTube takes its cut. RPM is what the creator actually keeps per 1,000 views. If you want the more realistic income metric, use RPM. When you see income screenshots online, it is worth checking which number is being shown — the two are often conflated." },
                        { q: "Why do Shorts pay less than long-form videos?", a: "Because Shorts use a different economic model built around a shared revenue pool, not individual ad auctions. Reach can be excellent with Shorts; direct ad revenue per view is usually much lower than long-form. Many creators use them primarily for audience growth rather than direct monetization." },
                        { q: "Which YouTube niche has the best RPM?", a: "Finance, investing, software, real estate, law, and some business topics often sit near the top because those audiences are more commercially valuable to advertisers. But 'finance' is not a monolith — RPM can vary considerably within a single broad niche depending on subtopic, audience demographics, and geography." },
                        { q: "Does video length really change revenue?", a: "Yes. Once a video passes 8 minutes, mid-roll ads become possible. That can help revenue materially, assuming viewers stay engaged. Adding length purely to cross the threshold tends to hurt retention, which often cancels the benefit. The length has to be earned by the content." },
                        { q: "How does audience geography influence revenue?", a: "Significantly. Viewers from the US, UK, Canada, and similar high-value markets often generate stronger RPM because advertisers bid more aggressively there. The same video with a different geographic distribution of views can produce materially different revenue." },
                        { q: "What retention rate should I enter?", a: "If you do not have your own analytics yet, 45% is a solid long-form starting point. Then update it with your real Studio numbers. Your channel's actual audience behavior — shaped by your specific topic, format, and editing style — will always be more informative than a generic benchmark." },
                        { q: "Is the calculator free?", a: "Yes. It is free, no account required, and the estimate runs locally in the browser." },
                    ].map(({ q, a }, i) => <FaqItem key={i} q={q} a={a} />)}
                </div>
            </div>

            <p className="calc-content__disclaimer">
                Forevault estimates rely on aggregated creator benchmarks and market data. Real AdSense earnings still vary with ad demand, seasonality, geography, ad blockers, YouTube policy changes, and individual video performance. This content is for education and planning only, not financial advice. See our <a href="/terms" className="calc-content__link">Terms of Use</a> and our <a href="/privacy" className="calc-content__link">Privacy Policy</a>.
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