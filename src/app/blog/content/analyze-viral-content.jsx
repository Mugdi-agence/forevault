// content/analyze-viral-content.jsx
import {
    ArticleHero, Lead, Body, H2, H3,
    Quote, Callout, Stats, Stat,
    Img, Divider, Code, Tags, AuthorCard, Related,
} from "../blog-components";

export const meta = {
    id:       "analyze-viral-content",
    title:    "How to Analyze Viral Content and Find Winning Formats",
    category: "Research",
    date:     "March 16, 2026",
    readTime: "5 min",
    thumb:    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200",
    progress: 0,
    seo: {
        title:       "How to Analyze Viral Content and Find Winning Formats",
        description: "Most creators copy ideas. What actually works is copying formats — the emotional structure beneath the content. Here's the step-by-step method.",
        image:       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    },
};

export default function Article({ onRelatedClick }) {
    return (
        <>
            <ArticleHero
                category="Research"
                title="How to Analyze Viral Content and Find Winning Formats"
                lead="Most creators misunderstand market analysis. They copy ideas. What actually matters — and what actually works — is copying formats."
                author={{ name: "Qodan", role: "Content Strategy" }}
                date="March 16, 2026"
                readTime="5 min read"
                cover={{
                    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
                    alt: "Analyzing viral content data",
                }}
            />

            <Lead>
                The market doesn't tell you what to create. It shows you what already works on the human brain. Here's how to read that signal correctly.
            </Lead>

            <H2>Step 1: Find "Dopamine Niches"</H2>

            <Body>
                Some niches naturally generate high-stimulation content. Not because of the topic — because of the <strong>type of stimulation they deliver</strong>. Cooking, cleaning, satisfying drawings, slime, and industrial processes all share a common thread: they produce visible, satisfying transformation with zero ambiguity.
            </Body>

            <Callout type="info" title="The key insight">
                Don't focus on the topic. Focus on what <em>feeling</em> that content produces. That feeling is what you're adapting — not the subject matter.
            </Callout>

            <H2>Step 2: Break Down Viral Videos</H2>

            <Body>
                Take any video with 10M+ views and deconstruct it layer by layer. Every viral video follows a consistent anatomy.
            </Body>

            <Code lang="analysis framework">{`Hook     (0–1s)   → Visual shock or something unusual
Build    (1–10s)  → Clear progression, small visible steps
Payoff   (~15s)   → Satisfying final result
Loop     (end)    → End connects back to beginning

Ask yourself:
  • What was the first visual the viewer saw?
  • When did I feel the urge to keep watching?
  • What was the exact moment of satisfaction?
  • Would I watch this again? Why?`}</Code>

            <Body>
                Do this with 10 videos in a row. Patterns will emerge. You're not looking at content — you're looking at <em>structure</em>.
            </Body>

            <H2>Step 3: Adapt to Your Niche</H2>

            <Body>
                Once you understand the emotional structure, translation is straightforward. A web developer can apply the exact same format as a cleaning video:
            </Body>

            <Stats>
                <Stat value="🧹" label="Messy → Clean"        sub="Cleaning content" />
                <Stat value="💻" label="Ugly UI → Premium UI" sub="Dev content"      accent />
                <Stat value="✏️" label="Sketch → Render"      sub="Design content"   />
            </Stats>

            <Body>
                You're not copying the niche. You're <strong>adapting the emotional structure</strong>. The brain doesn't care if it's soap scum or a bad button — it responds to the same satisfaction signal either way.
            </Body>

            <Quote>
                Find what already works on the human brain. Then speak your language through that same structure.
            </Quote>

            <H2>What to Look For in Your Analysis</H2>

            <Body>
                When reviewing viral videos, track three moments specifically: the <strong>first frame</strong> (what created the pattern interrupt), the <strong>middle peak</strong> (when you felt most engaged), and the <strong>last frame</strong> (how the video resolved). These three moments are the whole game.
            </Body>

            <Callout type="tip" title="Speed up your research">
                Watch at 2× speed with no sound. If the visual progression still pulls you in, the format is solid. If it feels flat without audio, the content is relying on narrative — not stimulation.
            </Callout>

            <Divider />

            <Tags tags={["Research", "Formats", "Viral Analysis", "Frameworks", "Stimulation"]} />

            <AuthorCard
                name="Editorial Team"
                role="Content Strategy"
                bio="I study what makes content perform — across platforms, niches, and formats. My goal is to give creators frameworks that actually scale."
            />

            <Related
                articles={[
                    {
                        id: "three-pillars-viral",
                        title: "The 3 Pillars of Viral Content: Transformation, Simplicity, and Stimulation",
                        category: "Strategy",
                        thumb: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        onClick: () => onRelatedClick?.("three-pillars-viral"),
                    },
                    {
                        id: "hook-killing-videos",
                        title: "Why Your Hook Is Killing Your Videos (And How to Fix It)",
                        category: "Production",
                        thumb: "https://images.unsplash.com/photo-1574717024453-354056aec766?w=400",
                        onClick: () => onRelatedClick?.("hook-killing-videos"),
                    },
                ]}
            />
        </>
    );
}
