import NicheFaqItem from "./NicheFaqItem";

const FAQ_ITEMS = [
    {
        q: "What is the highest-paying YouTube niche in 2025?",
        a: "Finance, investing, and insurance content consistently leads in RPM, often achieving $15–$30+ per 1,000 views in English-language Tier 1 markets. Business strategy, B2B software tutorials, and legal advice follow closely. These niches command premium ad rates because advertisers in financial services have extremely high customer acquisition values — a single converted viewer is worth hundreds or thousands of dollars to them."
    },
    {
        q: "What is RPM and how is it different from CPM?",
        a: "RPM (Revenue Per Mille) is the amount a creator actually earns per 1,000 video views after YouTube's 45% revenue share. CPM (Cost Per Mille) is the gross rate advertisers pay per 1,000 ad impressions, before YouTube takes its cut. RPM is always lower than CPM. A simple rule: RPM ≈ CPM × 0.55. Forevault uses RPM figures in all its estimates because that's what actually lands in your AdSense account."
    },
    {
        q: "Is it better to start in a high-RPM niche with high saturation or a lower-RPM niche with low saturation?",
        a: "This depends on your differentiation angle. If you have a genuinely unique take on a high-RPM topic, saturation is less of a barrier. If you're starting from scratch without a clear competitive advantage, a lower-saturation niche with moderate RPM ($5–$8) often provides faster early growth, which compounds into meaningful revenue. The worst outcome is choosing a high-saturation, low-RPM niche — high competition for low returns."
    },
    {
        q: "How accurate are the RPM figures in the Niche Finder?",
        a: "Our RPM benchmarks are sourced from creator community surveys, public channel analytics disclosures, and industry reports. They represent estimates for English-language long-form content targeting Tier 1 audiences (US, UK, Canada, Australia). Actual RPM varies based on your specific audience, video quality, keyword targeting, retention rate, and seasonal ad demand. Use these figures as directional benchmarks, not guarantees."
    },
    {
        q: "Should I choose a niche based only on RPM?",
        a: "No. RPM is one of five factors you should evaluate. The others are: (1) the size of the addressable audience, (2) your ability to produce consistent content, (3) market saturation relative to your unique angle, and (4) format alignment with how you create. A $20 RPM niche you abandon after 10 videos will always underperform a $6 RPM niche you can produce 200 videos in sustainably."
    },
    {
        q: "Do YouTube Shorts have good RPM?",
        a: "No — Shorts effective RPM is typically $0.02–$0.08, compared to $2–$20+ for long-form content. This is because Shorts are monetized through the Shorts Revenue Pool rather than standard AdSense ad placements. However, Shorts can be a powerful top-of-funnel tool to grow subscribers who then watch your long-form catalog. The smartest approach is using Shorts for discovery and long-form for monetization."
    },
    {
        q: "What does 'faceless' mean in the niche data?",
        a: "Faceless niches are content categories where you don't need to appear on camera — typically screen recordings, animations, voiceovers, or stock footage compilations. Finance explainers, software tutorials, and many educational niches qualify. Faceless channels are popular because they reduce the barrier to entry (no camera required), are easier to outsource, and can scale with hired writers and editors."
    },
    {
        q: "How do I calculate estimated earnings for a specific niche?",
        a: "Click 'Calculate revenues' on any niche card — it pre-fills the Forevault Revenue Calculator with that niche's RPM data. Then enter your expected view count, retention rate, video duration, and target geography to get a personalized estimate in 12 available currencies."
    },
];

const TIERS = [
    {
        tier: "S",
        rpm:  "$12–$30+",
        cls:  "s",
        niches: ["Personal finance", "Investing", "Insurance", "Business strategy", "Software tutorials", "B2B SaaS reviews"],
        why: "Advertisers in financial services, software, and insurance pay premium CPMs because their customer acquisition value is extremely high. One converted viewer can be worth hundreds or thousands of dollars to the advertiser."
    },
    {
        tier: "A",
        rpm:  "$6–$12",
        cls:  "a",
        niches: ["Real estate", "Legal advice", "Career & productivity", "Health & fitness", "Automotive", "Technology reviews"],
        why: "High-intent audiences with above-average purchasing power. Advertisers in these verticals are competitive but not as concentrated as financial services. Strong RPM combined with large addressable audiences makes these excellent long-term bets."
    },
    {
        tier: "B",
        rpm:  "$3–$6",
        cls:  "b",
        niches: ["Education & tutorials", "Food & cooking", "Travel", "Parenting", "Lifestyle", "Home improvement"],
        why: "Broad appeal drives high view counts, but advertiser CPMs are more moderate. Revenue potential comes from volume rather than premium rates. Good for channels that can consistently produce content at scale."
    },
    {
        tier: "C",
        rpm:  "$1–$3",
        cls:  "c",
        niches: ["Gaming", "Entertainment", "Vlogging", "Music", "Memes & comedy", "Reaction content"],
        why: "Massive audiences but low advertiser CPMs. These niches are best approached with complementary revenue streams (memberships, sponsorships, merchandise) rather than relying on AdSense alone."
    },
];

const METRICS = [
    {
        icon: "$",
        title: "Base RPM",
        desc: "The estimated revenue per 1,000 views for that niche and format, based on aggregated creator data. This is your most important signal — a $15 RPM niche earns 5× more per view than a $3 RPM niche. Color-coded: green (≥$12), grey ($6–$12), red (<$6)."
    },
    {
        icon: "◎",
        title: "Saturation",
        desc: "How competitive the niche is. A 5-bar saturation means thousands of channels are already posting similar content, making it harder to rank and grow organically. Low saturation + high RPM is the ideal combination."
    },
    {
        icon: "◈",
        title: "Revenue Potential",
        desc: "A composite score combining RPM, growth trajectory, and advertiser demand stability. A niche with moderate RPM but low saturation and high demand growth can outperform a high-RPM niche that is already crowded."
    },
    {
        icon: "✦",
        title: "Ease of Creation",
        desc: "How quickly you can produce content in this niche without specialized equipment, deep expertise, or a large team. Faceless animation niches score highest. Tutorial-heavy topics that require domain knowledge score lower."
    },
    {
        icon: "▶",
        title: "Format",
        desc: "Whether the niche performs better as Long-form (8+ minute videos monetized through mid-roll ads), Shorts (short clips monetized through the Shorts Revenue Pool), or both. Most high-RPM niches are Long-form."
    },
    {
        icon: "🔥",
        title: "Trending",
        desc: "Niches flagged as trending have shown above-average view growth in recent months. Early entry into a trending niche can accelerate channel growth significantly — but trending niches tend to saturate faster."
    },
];

export default function NicheContent() {
    return (
        <section className="nf-content" aria-label="About the YouTube Niche Finder">

            <div className="nf-content__intro">
                <span className="nf-content__eyebrow">What is this tool</span>
                <h2 className="nf-content__h2">
                    The YouTube Niche Finder: How to Pick a Channel Topic That Actually Pays
                </h2>
                <p className="nf-content__lead">
                    Choosing the right niche is the single most impactful decision a YouTube creator
                    can make — more impactful than editing quality, posting frequency, or even
                    content strategy. Our Niche Finder lets you compare 50+ YouTube content
                    categories side by side, ranked by real RPM benchmarks, market saturation,
                    revenue potential, and ease of content creation.
                </p>
            </div>

            <div className="nf-content__stats" role="list">
                {[
                    { val: "50+",   label: "Niches with real RPM data"     },
                    { val: "$18",   label: "Average top-tier niche RPM"    },
                    { val: "20×",   label: "RPM gap between best & worst"  },
                    { val: "Free",  label: "No account required"           },
                ].map(s => (
                    <div key={s.label} className="nf-content__stat" role="listitem">
                        <span className="nf-content__stat-val">{s.val}</span>
                        <span className="nf-content__stat-label">{s.label}</span>
                    </div>
                ))}
            </div>

            <div className="nf-content__block">
                <h2 className="nf-content__h2">How to Read the Niche Cards</h2>
                <p className="nf-content__p">
                    Each niche card surfaces five data points that matter for channel decisions.
                    Here is what each metric means and how to use it:
                </p>
                <div className="nf-content__metrics">
                    {METRICS.map(m => (
                        <div key={m.title} className="nf-content__metric-card">
                            <div className="nf-content__metric-icon">{m.icon}</div>
                            <div>
                                <h3 className="nf-content__h3">{m.title}</h3>
                                <p className="nf-content__p">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="nf-content__block">
                <h2 className="nf-content__h2">YouTube RPM by Niche: The Tier Guide</h2>
                <p className="nf-content__p">
                    Not all YouTube content earns the same. Here is a practical breakdown of RPM
                    ranges across major content categories, based on long-form performance in
                    English-language Tier 1 markets (US, UK, Canada, Australia).
                </p>
                <div className="nf-content__tiers">
                    {TIERS.map(t => (
                        <div key={t.tier} className={`nf-content__tier nf-content__tier--${t.cls}`}>
                            <div className="nf-content__tier-head">
                                <span className="nf-content__tier-badge">{t.tier}</span>
                                <span className="nf-content__tier-rpm">{t.rpm} RPM</span>
                            </div>
                            <div className="nf-content__tier-niches">
                                {t.niches.map(n => <span key={n}>{n}</span>)}
                            </div>
                            <p className="nf-content__tier-why">{t.why}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="nf-content__block">
                <h2 className="nf-content__h2">How to Choose the Right Niche for Your Channel</h2>
                <p className="nf-content__p">
                    RPM alone should not dictate your niche choice. Here are the four factors
                    that matter most when selecting a YouTube niche for long-term success:
                </p>
                <ol className="nf-content__steps">
                    <li>
                        <strong>Sustainability over spikes.</strong> A niche you can produce
                        content in for 2+ years consistently will always outperform a trending
                        niche you burn out on after 3 months. Filter by RPM, then ask yourself
                        honestly: can you make 100 videos about this topic?
                    </li>
                    <li>
                        <strong>RPM × volume potential.</strong> High RPM with a tiny addressable
                        audience caps your earnings. The ideal niche has above-average RPM
                        <em> and</em> a large enough audience to generate meaningful view counts.
                        Finance covers both. Extremely narrow B2B software reviews may not.
                    </li>
                    <li>
                        <strong>Saturation relative to your differentiation.</strong> A saturated
                        niche is only a problem if you have no clear angle. A unique perspective,
                        production style, or sub-niche focus can carve out significant space even
                        in competitive markets. Use our saturation scores as a starting signal,
                        not a hard barrier.
                    </li>
                    <li>
                        <strong>Format alignment.</strong> If you can only produce 60-second
                        videos, high-RPM long-form niches will deliver a fraction of their
                        potential. Match your format capability to the niche's optimal format
                        before committing. Shorts-first niches have different growth dynamics
                        than long-form niches.
                    </li>
                    <li>
                        <strong>Test before you commit.</strong> Use the Forevault{" "}
                        <a href="/youtube-revenue-calculator" className="nf-content__link">Revenue Calculator</a>{" "}
                        to model what your target view count would earn in different niches. Run
                        the numbers on 3–5 candidate niches before you decide. Small RPM
                        differences compound dramatically at scale.
                    </li>
                </ol>
            </div>

            <div className="nf-content__ctas">
                <p className="nf-content__ctas-label">Explore more tools</p>
                <div className="nf-content__cta-grid">
                    <a href="/youtube-revenue-calculator" className="nf-content__cta-card">
                        <span className="nf-content__cta-icon">⊞</span>
                        <div>
                            <strong>Revenue Calculator</strong>
                            <span>Estimate earnings for any niche + geography</span>
                        </div>
                        <span className="nf-content__cta-arrow">→</span>
                    </a>
                    <a href="/blog" className="nf-content__cta-card">
                        <span className="nf-content__cta-icon">✦</span>
                        <div>
                            <strong>Creator Blog</strong>
                            <span>Strategy guides and monetization deep-dives</span>
                        </div>
                        <span className="nf-content__cta-arrow">→</span>
                    </a>
                    <a href="/youtube-views-predictor" className="nf-content__cta-card">
                        <span className="nf-content__cta-icon">◎</span>
                        <div>
                            <strong>Views Predictor</strong>
                            <span>Forecast your channel's growth trajectory</span>
                        </div>
                        <span className="nf-content__cta-arrow">→</span>
                    </a>
                </div>
            </div>

            <div className="nf-content__faq" id="faq">
                <h2 className="nf-content__h2">Frequently Asked Questions</h2>
                <p className="nf-content__p" style={{ marginBottom: "2rem" }}>
                    Common questions about YouTube niches, RPM benchmarks, and how to use
                    this tool to make better channel decisions.
                </p>
                <div className="nf-faq__list">
                    {FAQ_ITEMS.map(({ q, a }, i) => (
                        <NicheFaqItem key={i} q={q} a={a} />
                    ))}
                </div>
            </div>

            <p className="nf-content__disclaimer">
                RPM benchmarks on Forevault are estimates based on aggregated creator data and
                industry reports. Actual YouTube AdSense earnings depend on many variables including
                advertiser demand, audience geography, content quality, seasonality, and YouTube
                policy changes. These figures are for educational and planning purposes only.
                See our{" "}
                <a href="/terms" className="nf-content__link">Terms of Use</a> and{" "}
                <a href="/privacy" className="nf-content__link">Privacy Policy</a>.
            </p>

        </section>
    );
}