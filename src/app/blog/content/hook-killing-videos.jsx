// content/hook-killing-videos.jsx
import {
    ArticleHero, Lead, Body, H2, H3,
    Quote, Callout, Stats, Stat,
    Img, Divider, Tags, AuthorCard, Related,
} from "../blog-components";

export const meta = {
    id:       "hook-killing-videos",
    title:    "Why Your Hook Is Killing Your Videos (And How to Fix It)",
    category: "Production",
    date:     "March 14, 2026",
    readTime: "3 min",
    thumb:    "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    progress: 0,
    seo: {
        title:       "Why Your Hook Is Killing Your Videos — And How to Fix It",
        description: "You have less than one second to capture attention. If your videos have a high swipe rate, your hook is the problem. Here's the fix.",
        image:       "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
};

export default function Article({ onRelatedClick }) {
    return (
        <>
            <ArticleHero
                category="Production"
                title="Why Your Hook Is Killing Your Videos (And How to Fix It)"
                lead="If your videos have a high swipe rate, your content isn't the problem. Your hook is. And there are exactly three rules to fix it."
                author={{ name: "Qodan", role: "Content Strategy" }}
                date="March 14, 2026"
                readTime="3 min read"
                cover={{
                    src: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    alt: "First frame hook strategy",
                }}
            />

            <Lead>
                You have less than one second. That's the entire window between your video living or dying. Here's what happens in that second — and how to own it.
            </Lead>

            <Callout type="danger" title="If you fail the hook">
                The video is dead. Not underperforming — dead. The algorithm gets a swipe signal, reach collapses, and nothing you do afterward matters.
            </Callout>

            <H2>Rule 1: Start With Action</H2>

            <Body>
                No intro. No "hey guys." No logo animation. <strong>Show something.</strong> The first frame must be shocking, broken, or unexpected. The viewer's brain needs an immediate reason to pause the scroll — give it one before they decide to move.
            </Body>

            <Stats>
                <Stat value="❌" label="Slow intro"    sub="'Hey guys, welcome back…'" />
                <Stat value="✅" label="Instant action" sub="Show the problem immediately" accent />
            </Stats>

            <H2>Rule 2: Pattern Interrupt</H2>

            <Body>
                You must break expectations <strong>instantly</strong>. The feed is a stream of familiar patterns. The moment something looks different — weird colors, a glitch, a broken UI, an unusual perspective — the brain stops to process it. That pause is your hook working.
            </Body>

            <Body>
                Use deliberate visual dissonance: something that looks intentionally wrong, off-balance, or surprising. The key word is <em>intentional</em> — random chaos doesn't work. Purposeful surprise does.
            </Body>

            <Quote>
                The brain doesn't stop for the expected. It stops for the anomaly.
            </Quote>

            <H2>Rule 3: Instant Recognition</H2>

            <Body>
                The viewer must immediately recognize <em>what they're looking at</em>. This sounds contradictory — but it's not. You want something <strong>familiar enough to recognize, but surprising enough to stop for</strong>.
            </Body>

            <Body>
                A YouTube UI, a like button, a browser window — these are instantly recognizable. When they look broken or extreme, the brain is forced to reconcile the familiar with the unexpected. That tension is the hook.
            </Body>

            <Callout type="tip" title="The formula in one line">
                Recognizable subject + unexpected state = irresistible hook. A giant, ugly YouTube button paired with "This is why your UI sucks" — instant impact.
            </Callout>

            <H2>The Hook Is Not Optional</H2>

            <Body>
                Every creative decision you make about pacing, transformation, and payoff only matters if people are still watching at second two. <strong>The hook determines everything.</strong> Nail it first, optimize the rest second.
            </Body>

            <Divider />

            <Tags tags={["Hook", "First Second", "Production", "Swipe Rate", "Pattern Interrupt"]} />

            <AuthorCard
                name="Editorial Team"
                role="Content Strategy"
                bio="I study what makes content perform — across platforms, niches, and formats. My goal is to give creators frameworks that actually scale."
            />

            <Related
                articles={[
                    {
                        id: "perfect-structure-viral",
                        title: "The Perfect Structure of a Viral Video",
                        category: "Production",
                        thumb: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        onClick: () => onRelatedClick?.("perfect-structure-viral"),
                    },
                    {
                        id: "loop-effect-retention",
                        title: "The Loop Effect: How to Boost Retention Beyond 100%",
                        category: "Retention",
                        thumb: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400",
                        onClick: () => onRelatedClick?.("loop-effect-retention"),
                    },
                ]}
            />
        </>
    );
}
