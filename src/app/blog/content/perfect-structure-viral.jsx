// content/perfect-structure-viral.jsx
import {
    ArticleHero, Lead, Body, H2, H3,
    Quote, Callout, Stats, Stat,
    Img, Divider, Code, Tags, AuthorCard, Related,
} from "../blog-components";

export const meta = {
    id:       "perfect-structure-viral",
    title:    "The Perfect Structure of a Viral Video",
    category: "Production",
    date:     "March 12, 2026",
    readTime: "4 min",
    thumb:    "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    progress: 0,
    seo: {
        title:       "The Perfect Structure of a Viral Video — Second by Second",
        description: "Viral content is not random. It follows a precise, reproducible structure. Here is the exact second-by-second blueprint.",
        image:       "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
};

export default function Article({ onRelatedClick }) {
    return (
        <>
            <ArticleHero
                category="Production"
                title="The Perfect Structure of a Viral Video"
                lead="Viral content is not random. It follows a precise structure — one you can reverse-engineer, replicate, and scale. Here is the exact blueprint."
                author={{ name: "Qodan", role: "Content Strategy" }}
                date="March 12, 2026"
                readTime="4 min read"
                cover={{
                    src: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    alt: "Video production structure",
                }}
            />

            <Lead>
                Structure is the difference between content that feels random and content that feels inevitable. Once you see the blueprint, you can't unsee it.
            </Lead>

            <H2>The Second-by-Second Blueprint</H2>

            <Code lang="viral video structure">{`0–1s    HOOK
        → Visual shock, curiosity trigger
        → The brain decides to stay or scroll

1–5s    PROMISE
        → "Let's fix this" / introduce the transformation
        → Viewer now knows the destination

5–15s   TRANSFORMATION
        → Fast steps, visible progression
        → Each beat delivers a micro-reward

15–20s  PAYOFF
        → The final, satisfying result revealed
        → The reward loop completes

~20s    LOOP
        → Seamless return to start
        → Brain doesn't register the ending`}</Code>

            <H2>Why This Structure Works</H2>

            <Body>
                It's not arbitrary — it directly mirrors how the brain processes information under limited attention. Every phase maps to a cognitive state.
            </Body>

            <Stats>
                <Stat value="Hook"           label="Creates tension"        sub="Brain enters alert mode"      />
                <Stat value="Promise"        label="Sets expectation"       sub="Dopamine anticipation begins" />
                <Stat value="Transf..." label="Delivers progress"      sub="Micro-rewards keep attention" />
                <Stat value="Payoff"         label="Completes the loop"     sub="Full dopamine release" accent />
            </Stats>

            <Callout type="info" title="The loop phase is optional but powerful">
                A seamless loop that connects the end back to the beginning makes the viewer feel like the video restarted before they could decide to stop. This directly drives replay rate — one of the strongest algorithmic signals.
            </Callout>

            <H2>Applying the Structure to Any Format</H2>

            <Body>
                This blueprint works across every content type. A coding tutorial, a design transformation, a recipe, a workout — the subject doesn't change the structure. What changes is the <em>visual language</em> of each phase.
            </Body>

            <Body>
                For a UI redesign video: the Hook is the broken interface. The Promise is the first clean element appearing. The Transformation is the step-by-step rebuild. The Payoff is the final polished result. The Loop is the before/after side-by-side that transitions back to the original broken state.
            </Body>

            <Quote>
                Structure is not a constraint. It's the container that makes creativity possible.
            </Quote>

            <H2>The Most Common Structural Mistake</H2>

            <Body>
                Most creators who fail at this structure spend too long in the <strong>Promise phase</strong>. They set up the transformation but delay delivering it — killing momentum right when the viewer is most ready to be rewarded. Cut the setup. Get to the transformation faster.
            </Body>

            <Callout type="warning" title="Long promise = lost viewer">
                Every second between the Promise and the first transformation beat is a second the brain is waiting with no reward. Keep that window under 3 seconds.
            </Callout>

            <Divider />

            <Tags tags={["Structure", "Blueprint", "Production", "Viral Formula", "Timing"]} />

            <AuthorCard
                name="Qodan"
                role="Content Strategy"
                bio="I study what makes content perform — across platforms, niches, and formats. My goal is to give creators frameworks that actually scale."
            />

            <Related
                articles={[
                    {
                        id: "hook-killing-videos",
                        title: "Why Your Hook Is Killing Your Videos (And How to Fix It)",
                        category: "Production",
                        thumb: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        onClick: () => onRelatedClick?.("hook-killing-videos"),
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
