// content/three-pillars-viral.jsx
import {
    ArticleHero, Lead, Body, H2, H3,
    Quote, Callout, Stats, Stat,
    Img, Divider, Tags, AuthorCard, Related,
} from "../blog-components";

export const meta = {
    id:       "three-pillars-viral",
    title:    "The 3 Pillars of Viral Content: Transformation, Simplicity, and Stimulation",
    category: "Strategy",
    date:     "March 18, 2026",
    readTime: "4 min",
    thumb:    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200",
    progress: 0,
    seo: {
        title:       "The 3 Pillars of Viral Content | Transformation, Simplicity, Stimulation",
        description: "Virality is not random — it's structured. Here are the three non-negotiable pillars that every piece of high-performing content shares.",
        image:       "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200",
    },
};

export default function Article({ onRelatedClick }) {
    return (
        <>
            <ArticleHero
                category="Strategy"
                title="The 3 Pillars of Viral Content: Transformation, Simplicity, and Stimulation"
                lead="Virality is structured. Across every niche and every platform, high-performing content relies on three core pillars — and you can engineer all three."
                author={{ name: "Qodan", role: "Content Strategy" }}
                date="March 18, 2026"
                readTime="4 min read"
                cover={{
                    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
                    alt: "Three pillars of viral content",
                }}
            />

            <Lead>
                If you want your content to perform, you need to understand one thing: virality is not luck. It's a repeatable system built on three non-negotiable pillars.
            </Lead>

            <Stats>
                <Stat value="①" label="Transformation" sub="Before → After" />
                <Stat value="②" label="Simplicity"     sub="Zero cognitive effort" />
                <Stat value="③" label="Stimulation"    sub="Constant forward motion" accent />
            </Stats>

            <H2>1. Transformation (Non-Negotiable)</H2>

            <Body>
                The brain loves contrast. Before → After. Mess → Clean. Ugly → Beautiful. Transformation creates a <strong>reward loop</strong> — it gives the viewer a sense of completion and satisfaction the moment the final state is revealed.
            </Body>

            <Callout type="danger" title="Without transformation">
                Your content feels static. There's no payoff, no reason to watch until the end — and no reason to share.
            </Callout>

            <Body>
                You don't need a dramatic transformation. Even a single button going from broken to polished, or a chaotic codebase becoming clean — that contrast is enough to trigger the reward response.
            </Body>

            <H2>2. Zero Cognitive Effort</H2>

            <Body>
                Your content must be understood <strong>instantly</strong>. If the viewer has to think — they scroll away. This isn't about dumbing things down. It's about making the value obvious before the brain decides to engage.
            </Body>

            <Quote>
                A child should be able to understand what's happening — even without sound.
            </Quote>

            <Body>
                Good content is visual, obvious, and immediate. The moment there's friction in comprehension, you've lost them. Design your content so the <em>premise</em> is clear in under one second.
            </Body>

            <H2>3. Constant Stimulation</H2>

            <Body>
                Attention is fragile. To keep it, you need <strong>fast cuts, movement, and continuous progression</strong>. Every second must deliver something new — a new visual, a new piece of information, a new micro-surprise.
            </Body>

            <Callout type="tip" title="The empty frame test">
                Review your video frame by frame. Any moment where nothing is visually changing or progressing is a moment you're losing viewers. Cut it.
            </Callout>

            <H2>Diagnosing Your Content</H2>

            <Body>
                If your content isn't performing, it's not a talent issue. Run it through the three pillars:
            </Body>

            <Stats>
                <Stat value="①?" label="Is there a transformation?" sub="Clear before/after?" />
                <Stat value="②?" label="Is it instantly readable?"  sub="No thinking required?" />
                <Stat value="③?" label="Is every second active?"    sub="No dead air?" accent />
            </Stats>

            <Body>
                The pillar that's missing is your fix. It's almost always that simple.
            </Body>

            <Divider />

            <Tags tags={["Virality", "Transformation", "Simplicity", "Stimulation", "Framework"]} />

            <AuthorCard
                name="Qodan"
                role="Content Strategy"
                bio="I study what makes content perform — across platforms, niches, and formats. My goal is to give creators frameworks that actually scale."
            />

            <Related
                articles={[
                    {
                        id: "niche-doesnt-matter",
                        title: "Why Your Niche Doesn't Matter (And What Actually Drives Viral Content)",
                        category: "Strategy",
                        thumb: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=400",
                        onClick: () => onRelatedClick?.("niche-doesnt-matter"),
                    },
                    {
                        id: "analyze-viral-content",
                        title: "How to Analyze Viral Content and Find Winning Formats",
                        category: "Research",
                        thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
                        onClick: () => onRelatedClick?.("analyze-viral-content"),
                    },
                ]}
            />
        </>
    );
}
