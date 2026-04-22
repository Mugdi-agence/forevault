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
        description: "You have less than one second to earn attention. If your videos are getting swiped away early, the hook is usually the first thing to fix. Here's how to make the opening work.",
        image:       "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
};

export default function Article({ onRelatedClick }) {
    return (
        <>
            <ArticleHero
                category="Production"
                title="Why Your Hook Is Killing Your Videos (And How to Fix It)"
                lead="If people swipe in the first second, your idea is not always the issue. The opening is. A weak hook can kill a good video before it starts."
                author={{ name: "Qodan", role: "Content Strategy" }}
                date="March 14, 2026"
                readTime="3 min read"
                cover={{
                    src: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    alt: "First frame hook strategy",
                }}
            />

            <Lead>
                In short-form, second one is the audition. Viewers decide fast. Usually based on what they see first, not what your topic is.
            </Lead>

            <Callout type="danger" title="If the hook fails">
                Most videos do not get a second chance after a weak opening. Early swipes send a bad signal, and distribution cools down quickly.
            </Callout>

            <H2>Rule 1: Open With Something Happening</H2>

            <Body>
                Skip greetings and slow setup. Start with motion, tension, or a visible problem. Static intros are easy to ignore.
            </Body>

            <Stats>
                <Stat value="❌" label="Slow intro"    sub="'Hey guys, welcome back…'" />
                <Stat value="✅" label="Instant action" sub="Show the problem immediately" accent />
            </Stats>

            <H2>Rule 2: Break the Pattern Fast</H2>

            <Body>
                Feeds are full of familiar patterns. Your opening has to interrupt that pattern fast. Weird angle, broken UI, visual contradiction, surprising scale. Anything intentional that makes someone pause.
            </Body>

            <Body>
                Random chaos is not a hook. The interruption should still feel deliberate. Confusing for one beat, then clear.
            </Body>

            <Quote>
                The brain ignores what it can predict. It pauses for what it has to explain.
            </Quote>

            <H2>Rule 3: Make It Instantly Understandable</H2>

            <Body>
                Great hooks do two jobs at once: surprise and clarity. Too abstract and people leave. Too normal and they keep scrolling.
            </Body>

            <Body>
                Familiar objects help. A dashboard, a browser, a chart, a button. Then twist one detail so it feels wrong and worth understanding.
            </Body>

            <Callout type="tip" title="The hook in one sentence">
                Familiar base + surprising condition = strong hook. Often that is enough.
            </Callout>

            <H2>The Hook Is the Gatekeeper</H2>

            <Body>
                Everything else depends on this first decision. Pacing, edit, payoff. None of it matters if people never make it past second one.
            </Body>

            <Body>
                If frame one fails, the rest might as well not exist. If frame one works, now you can earn trust.
            </Body>

            <H2>What creators underestimate here</H2>
            <Body>
                Hook quality is not just a creative preference. It changes the economics of the whole video. If early drop-off is high, even strong mid-video value will rarely matter because distribution cools early. This is where most creators get it wrong: they optimize the middle while the first second is leaking performance.
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