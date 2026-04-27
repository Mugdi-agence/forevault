// app/yt-views-predictor/YtViewsPredictorContent.jsx
// ─────────────────────────────────────────────────────────────────────────────
// SERVER COMPONENT (SSR) — pas de directive "use client"
// Contient uniquement du JSX statique : aucun état, aucun hook, aucune lib client.
// Rendu complet côté serveur → HTML envoyé au client d'emblée → SEO optimal.
// ─────────────────────────────────────────────────────────────────────────────

export default function YtViewsPredictorContent() {
    return (
        <section className="ytp-content" aria-label="About the YouTube Views Predictor">

            <div className="ytp-content__intro">
                <span className="ytp-content__eyebrow">How YouTube performance really works</span>
                <h2 className="ytp-content__h2">
                    YouTube Views Predictor: understanding the curve behind your numbers
                </h2>
                <p className="ytp-content__lead">
                    After publishing a video, the hardest part is not the wait — it is not knowing whether
                    the wait means anything. A video that sits at 3K views on day two might reach 200K by
                    day 30, or it might end at 8K. Both outcomes start the same way. The difference is in
                    signals that happen mostly in the first 48 to 96 hours, and most creators do not have
                    a useful framework for reading them.
                </p>
                <p className="ytp-content__lead">
                    What makes view prediction genuinely difficult is not a lack of data — you have CTR,
                    retention, engagement, watch time, and channel history. It is that those signals interact
                    with each other in non-linear ways, and the relationship between day-3 performance and
                    day-30 performance changes depending on which phase of distribution the video is currently in.
                </p>
                <p className="ytp-content__lead">
                    This page explains how the model works, what it is actually measuring, and — importantly —
                    where the model breaks down. Because it does break down in certain situations, and knowing
                    those situations prevents misreading the output.
                </p>
                <p className="ytp-content__lead">
                    <em>
                        Methodology note: this predictor is built on observed view curve archetypes from
                        creator-reported data, not on access to YouTube's internal systems. It models realistic
                        probability ranges, not guaranteed outcomes. Individual video performance can deviate
                        significantly from any prediction based on factors the model cannot observe.
                    </em>
                </p>
            </div>

            <div className="ytp-content__stats" role="list">
                {[
                    { val: "90 days", label: "Full view curve forecast" },
                    { val: "50+",     label: "Niches modeled" },
                    { val: "80+",     label: "Language markets compared" },
                    { val: "±25%",    label: "Typical forecast range" },
                ].map(({ val, label }) => (
                    <div key={label} className="ytp-content__stat" role="listitem">
                        <span className="ytp-content__stat-val">{val}</span>
                        <span className="ytp-content__stat-label">{label}</span>
                    </div>
                ))}
            </div>

            {/* ── WHAT THE MODEL MEASURES ──────────────────────────────────── */}
            <div className="ytp-content__block">
                <h2 className="ytp-content__h2">What the model is actually measuring</h2>
                <p className="ytp-content__p">
                    The predictor does not have access to YouTube's internal data. What it has is a model
                    built from observed patterns: how videos with similar algorithm signals tend to behave
                    over 90 days, segmented by format, niche, language market, and channel authority.
                    Here is what each input is actually doing in that model.
                </p>

                <div className="ytp-content__metrics">
                    {[
                        {
                            title: "Algorithm score — the central output",
                            body: `The algorithm score combines CTR, retention or completion rate, engagement signals,
                                and channel authority into a single composite. This score then selects which of four
                                curve archetypes — weak, average, strong, or viral — the prediction uses as its basis,
                                with smooth blending between them. A score above roughly 1.5 typically corresponds to
                                videos that receive extended browse and suggested distribution. Below 0.8, the curve
                                tends to decay fast after the first day.`,
                        },
                        {
                            title: "Audience pool and language market cap",
                            body: `Every niche-language combination has a ceiling. An English-language finance video can
                                theoretically reach a much larger audience than the same concept in a smaller language
                                market, not because the content is better but because the addressable pool is larger.
                                The model applies a realistic cap based on estimated market size and niche audience share.`,
                        },
                        {
                            title: "Long-form vs Shorts — genuinely different curves",
                            body: `Long-form and Shorts do not just have different RPM. They have structurally different
                                view curves. Long-form typically builds a shoulder plateau around days 4–14 as browse and
                                suggested distribution kicks in after the algorithm test window. Shorts can spike earlier
                                and harder, but tend to decay faster unless loop signals are strong.`,
                        },
                        {
                            title: "CTR and retention — why both matter together",
                            body: `High CTR without retention means the thumbnail and title are doing their job but the
                                video is not. High retention without CTR means the video satisfies the people who watch
                                it, but not enough people are clicking to find it. In the model, CTR and retention are
                                multiplied together rather than added — which means a weakness in either one creates a
                                larger drag than a weakness in a less important signal.`,
                        },
                        {
                            title: "Engagement weighting",
                            body: `Shares are weighted more heavily than likes in the model because they have a stronger
                                relationship with extended distribution in practice. A video that gets shared at scale is
                                reaching new audiences by definition. Subscriber gains are weighted similarly because they
                                indicate the viewer found enough value to want more, which correlates with content that
                                performs well in browse features.`,
                        },
                        {
                            title: "Channel authority — context for the signals",
                            body: `The same CTR and retention numbers mean different things on a channel with 500K average
                                views per video versus a channel with 2K average views. The model includes an authority
                                multiplier that reflects this: consistent channels at scale get some distributional benefit
                                from their track record, while newer or inconsistent channels are treated more conservatively.`,
                        },
                    ].map(({ title, body }) => (
                        <div key={title} className="ytp-content__metric-card">
                            <h3 className="ytp-content__h3">{title}</h3>
                            <p className="ytp-content__p">{body}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── WHERE THE MODEL BREAKS DOWN ──────────────────────────────── */}
            <div className="ytp-content__block">
                <h2 className="ytp-content__h2">Where the model breaks down</h2>
                <p className="ytp-content__p">
                    A model built on historical patterns cannot anticipate structural changes. Here is
                    where this one is most likely to be wrong.
                </p>
                <p className="ytp-content__p">
                    Trend-driven videos violate the assumptions the model is built on. When a topic suddenly
                    becomes culturally significant — a news event, a viral moment, a policy change — related
                    videos can have view curves that look nothing like the observed archetypes. The model will
                    usually underpredict these videos significantly.
                </p>
                <p className="ytp-content__p">
                    Very new channels also create estimation problems. The channel authority component of the
                    model is calibrated against channels with meaningful history. A channel with 5 videos has
                    very little pattern to draw from.
                </p>
                <p className="ytp-content__p">
                    Cross-platform spillover — a video going viral on Twitter or Instagram and driving YouTube
                    views from outside the platform's normal distribution — is invisible to the model.
                </p>
                <p className="ytp-content__p">
                    And seasonality affects both views and engagement in ways that vary by niche and market.
                    The model does not apply a seasonal correction.
                </p>
            </div>

            {/* ── WHY ADVICE MISLEADS ──────────────────────────────────────── */}
            <div className="ytp-content__block">
                <h2 className="ytp-content__h2">Why growth and monetization advice online misleads creators</h2>
                <p className="ytp-content__p">
                    Most advice about YouTube growth treats the process as more predictable than it is.
                    This is where most creators get it wrong — not through lack of effort, but through
                    applying frameworks that oversimplify a genuinely variable system.
                </p>
                <p className="ytp-content__p">
                    The screenshot problem is significant. One viral video gets posted everywhere. The 40
                    average videos that came before and after it do not. The result is that most creators
                    have a reference library of exceptional performances, not typical ones.
                </p>
                <p className="ytp-content__p">
                    The same problem applies to "views x $X" income estimates. The formula ignores niche,
                    geography, retention, format, and ad market timing — which is to say, it ignores the
                    variables that actually determine the result.
                </p>
            </div>

            {/* ── REALISTIC OUTCOME SPREADS ────────────────────────────────── */}
            <div className="ytp-content__block">
                <h2 className="ytp-content__h2">What realistic outcome spreads look like</h2>
                <p className="ytp-content__p">
                    These scenarios illustrate how the same starting-point metrics can lead to different
                    90-day outcomes depending on niche and audience profile. They are ranges, not predictions
                    for specific channels.
                </p>

                <div className="ytp-content__scenarios">
                    {[
                        {
                            title: "Gaming channel — 50K views at day 3, strong engagement",
                            body: `Gaming can produce fast early spikes but has a harder time building the shoulder
                                plateau that extends long-tail distribution. With strong algorithm signals, a 90-day
                                total of 200K–280K is plausible. With average signals, the curve often flattens faster
                                after the first week. The variance within "gaming" is itself wide.`,
                        },
                        {
                            title: "Finance channel — 50K views at day 3, solid retention",
                            body: `Finance videos with genuine search demand tend to build a longer tail than entertainment
                                content because the topic remains relevant beyond the initial distribution window.
                                A 90-day range of 350K–650K is plausible with strong signals and a US-heavy audience.`,
                        },
                        {
                            title: "Tutorial channel — 50K views at day 3, high search potential",
                            body: `Tutorials for topics with consistent demand can build a distribution tail that extends
                                well past 90 days. For tutorial channels, month 6 RPM is sometimes more informative
                                than month 1 views.`,
                        },
                        {
                            title: "US finance channel — 100K at day 5, 9 minutes, 52% retention",
                            body: `A realistic 90-day projection might land between 380K and 720K views if CTR and
                                engagement stay consistent with the early signals. The wide range reflects the genuine
                                uncertainty in whether browse and suggested distribution maintains itself through the
                                shoulder phase.`,
                        },
                        {
                            title: "Gaming channel, same starting metrics",
                            body: `The higher competition density in gaming combined with typically lower watch time
                                usually produces a more compressed 90-day range — something like 190K–350K is plausible
                                under similar signal conditions. Monetization per view is also lower.`,
                        },
                        {
                            title: "The underlying point",
                            body: `Same starting views, same video age, very different probable trajectories. This is why
                                comparing channels without matching niche, language market, retention profile, and audience
                                geography is almost always a misleading exercise.`,
                        },
                    ].map(({ title, body }) => (
                        <div key={title} className="ytp-content__scenario">
                            <h3 className="ytp-content__h3">{title}</h3>
                            <p className="ytp-content__p">{body}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── FORECASTING ERRORS ───────────────────────────────────────── */}
            <div className="ytp-content__block">
                <h2 className="ytp-content__h2">Forecasting errors that look reasonable but distort decisions</h2>
                <ul className="ytp-content__steps">
                    <li>
                        <strong>Using early views as a final signal</strong> — day 3 performance tells you
                        about the notification burst and early algorithm test. It does not tell you about browse
                        and suggested distribution, which often determines the shoulder and tail phases.
                    </li>
                    <li>
                        <strong>Comparing channels without context</strong> — niche, language market, and audience
                        profile create fundamentally different operating environments.
                    </li>
                    <li>
                        <strong>Isolating one metric</strong> — CTR without retention, or engagement without CTR,
                        gives a partial picture that can lead to wrong conclusions.
                    </li>
                    <li>
                        <strong>Planning from exceptional data points</strong> — one peak video is not a baseline.
                        A channel's decision-making should be built on the distribution of its performances.
                    </li>
                </ul>
            </div>

            {/* ── COMMON MYTHS ─────────────────────────────────────────────── */}
            <div className="ytp-content__block">
                <h2 className="ytp-content__h2">Common myths about YouTube view growth</h2>
                <ul className="ytp-content__steps">
                    <li>
                        <strong>"Strong early views always lead to a strong final result" is false</strong> — the
                        algorithm test window (days 1–4) is arguably more decisive for long-form content than
                        the initial notification burst.
                    </li>
                    <li>
                        <strong>"All videos in my niche should perform similarly" is false</strong> — competition
                        density, subtopic demand, and audience size all vary within a single broad niche.
                    </li>
                    <li>
                        <strong>"Shorts always grow faster" is false, or at least incomplete</strong> — Shorts can
                        spike quickly, but the long-tail behavior is compressed relative to long-form.
                    </li>
                    <li>
                        <strong>"Channel authority does not matter for distribution" is false</strong> — consistent
                        performance history affects how conservatively or generously the algorithm tests new videos.
                    </li>
                </ul>
            </div>

            {/* ── SCENARIO MODELING ────────────────────────────────────────── */}
            <div className="ytp-content__block">
                <h2 className="ytp-content__h2">Using scenario modeling instead of single-point estimates</h2>
                <p className="ytp-content__p">
                    The most useful way to use this predictor is not to find "the" forecast for a video — it is
                    to run several scenarios and understand what conditions would need to be true for each outcome.
                    That kind of reasoning turns a prediction tool into a decision support tool.
                </p>
                <p className="ytp-content__p">
                    Once you model real inputs instead of gut-feel estimates, patterns become visible that are hard
                    to see in analytics alone. A channel that consistently gets strong CTR but weak retention has a
                    different strategic problem than one with the reverse.
                </p>
            </div>

            {/* ── MODEL LIMITS ─────────────────────────────────────────────── */}
            <div className="ytp-content__block">
                <h2 className="ytp-content__h2">Model limits and appropriate use</h2>
                <p className="ytp-content__p">
                    This is a structured approximation built from observed behavioral patterns and audience-size
                    constraints. It is most useful for comparative analysis between channel configurations and for
                    identifying which signal variables are limiting performance. It is not reliable for trend-driven
                    content, very new channels with minimal history, or any situation where external traffic sources
                    might significantly affect results.
                </p>
                <p className="ytp-content__p">
                    Use the output as a planning range with honest uncertainty, not as a forecast to be held to.
                </p>
            </div>

            {/* ── FAQ ──────────────────────────────────────────────────────── */}
            <div className="ytp-content__faq" id="faq"
                itemScope itemType="https://schema.org/FAQPage">
                <h2 className="ytp-content__h2">Frequently Asked Questions</h2>
                <p className="ytp-content__p" style={{ marginBottom: "2rem" }}>
                    These answers cover the variables that move the model most and explain where outcomes
                    diverge between videos that look similar on the surface.
                </p>

                <div className="ytp-faq__list">
                    {[
                        {
                            q: "How accurate is the YouTube Views Predictor?",
                            a: `When the input metrics are close to real values, the forecast tends to fall within
                                roughly ±25% of actual outcomes for videos that follow typical distribution patterns.
                                The accuracy degrades meaningfully for trend-driven content, videos that receive
                                significant external traffic, very new channels, or any video that experiences
                                unexpected algorithm behavior.`,
                        },
                        {
                            q: "What is the algorithm score and why does it matter?",
                            a: `The algorithm score aggregates CTR, retention or completion rate, engagement signals,
                                and channel authority into a single composite that maps to different view curve archetypes.
                                Above roughly 1.5, the model predicts extended browse and suggested distribution. Below
                                0.8, it predicts rapid post-spike decay. It is a model construct, not a YouTube metric.`,
                        },
                        {
                            q: "Why does my niche change the forecast so much?",
                            a: `Because each niche has a different audience pool size and audience share estimate, which
                                affects the cap applied to the raw prediction. Finance in English has a much larger
                                addressable pool than the same topic in a smaller language market. Niche competition
                                density also shapes how aggressively the model assumes the algorithm will compete for
                                attention with other content.`,
                        },
                        {
                            q: "Does the language or country choice actually matter?",
                            a: `Yes. The language market selection applies a realistic audience ceiling to the forecast.
                                A video in a market with 40 million monthly views in a given niche cannot realistically
                                reach 10 million views on a single video — the pool does not support it.`,
                        },
                        {
                            q: "Long-form or Shorts — which format predicts more reliably?",
                            a: `Long-form predictions tend to be more stable because the distribution curve is more
                                consistent across videos in the same signal tier. Shorts predictions are more variable
                                because Shorts performance is more binary — a video either catches a loop or it doesn't.`,
                        },
                        {
                            q: "What should I enter if I don't have Analytics data yet?",
                            a: `Use conservative defaults: around 40–45% retention and 4–5% CTR for long-form, or
                                75–80% completion with under 45% swipe rate for Shorts. Replace them with real data
                                as soon as it is available.`,
                        },
                        {
                            q: "Is this Views Predictor free to use?",
                            a: `Yes, it is free and does not require an account. The model runs locally in your browser,
                                so you can test scenarios without any setup and without sending channel data to external
                                servers.`,
                        },
                    ].map(({ q, a }) => (
                        <div key={q} className="ytp-faq__item"
                            itemScope itemProp="mainEntity"
                            itemType="https://schema.org/Question">
                            <h3 className="ytp-faq__q" itemProp="name">{q}</h3>
                            <div className="ytp-faq__a"
                                itemScope itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer">
                                <p itemProp="text">{a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <p className="ytp-content__disclaimer">
                The YouTube Views Predictor uses aggregated creator-reported data and observed distribution
                patterns to model realistic 90-day view curves. Real performance can still shift significantly
                because of trend events, platform changes, external traffic sources, competition changes, or
                audience behavior that does not match historical patterns. Use this tool for planning and
                education, not guarantees. See our{" "}
                <a href="/terms"   className="ytp-content__link">Terms of Use</a>{" "}and{" "}
                <a href="/privacy" className="ytp-content__link">Privacy Policy</a>.
            </p>

        </section>
    );
}