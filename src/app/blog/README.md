# Blog System — Documentation
## Architecture overview

```
blog/
├── blog-page.jsx        ← Page component + article data registry
├── blog-styles.scss     ← All styles (extends your calculator design tokens)
├── blog-components.jsx  ← 15 ready-made content components
└── README.md            ← This file
```

---

## Design system

Inherits all tokens from your calculator (`$bg-color`, `$surface`, `$border`, Poppins…).
Adds:
- **Lora** (serif) as editorial body font — pairs with Poppins display
- `$accent: #ff3d3d` — YouTube-red progress bar
- `$font-body` — used for Body, Quote, Lead, AuthorCard

---

## Layout

```
┌─────────────────────────────────────────────────────┐
│  .blog-layout  (grid: 360px | 1fr)                  │
│  ┌──────────────────┐  ┌───────────────────────────┐ │
│  │  .sidebar         │  │  .reader                  │ │
│  │  ─ badge          │  │  ─ .reader__scroll        │ │
│  │  ─ title + sub    │  │    └─ .reader__content    │ │
│  │  ─ search input   │  │       └─ <ArticleContent> │ │
│  │  ─ category pills │  │                           │ │
│  │  ─ .sidebar__list │  │  ─ .reader__progress-bar  │ │
│  │    └─ article-card│  │    (YouTube red, bottom)  │ │
│  └──────────────────┘  └───────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

Breakpoints match the calculator exactly:
- `≤1024px` — narrower sidebar (300px)
- `≤860px`  — stacks vertically (sidebar → reader)
- `≤560px`  — mobile optimizations
- `≤400px`  — small phone

---

## Ready-made content components

| Component     | Props / Usage                                                      |
|---------------|--------------------------------------------------------------------|
| `ArticleHero` | `category title lead author date readTime cover`                   |
| `Lead`        | children — large italic intro paragraph                            |
| `Body`        | children — standard paragraph (Lora, scroll-reveal)               |
| `H2`          | children — section heading (Poppins 700)                           |
| `H3`          | children — sub-section heading                                     |
| `Quote`       | `author` + children — pull quote with decorative mark              |
| `Callout`     | `type="info|warning|tip|danger"` + `title` + children              |
| `Stats`       | wrapper — use with `<Stat>` children                               |
| `Stat`        | `value label sub accent` — animated stat card                      |
| `Img`         | `src alt caption full` — image with scroll-reveal scale animation  |
| `ImgGrid`     | `cols={2|3}` — responsive image grid                               |
| `Divider`     | `label` — decorative section break                                 |
| `Code`        | `lang` + children — code block with copy button                    |
| `Tags`        | `tags[] onTag` — clickable tag cloud                               |
| `AuthorCard`  | `name role avatar bio` — author bio footer                         |
| `Related`     | `articles[]` — related article grid (2-col)                        |

### Scroll animations

Every component uses `useReveal()` — an IntersectionObserver hook that adds
`.is-visible` once the element enters the viewport. Images additionally use
`useImgReveal()` which waits for the image to load before animating.

CSS transitions handle the reveal (`opacity 0→1`, `translateY 20px→0`).
No GSAP required for content components (GSAP is only used for panel
entrance and article-switch animations).

---

## Writing an article quickly

```jsx
// In blog-page.jsx → ARTICLES array, add:
{
    id:       "my-article-slug",      // used for routing + related links
    title:    "My Article Title",
    category: "Strategy",             // must match a CATEGORIES entry
    date:     "March 20, 2025",
    readTime: "5 min",
    thumb:    "/images/my-thumb.jpg", // 200px wide thumbnail
    progress: 0,                      // auto-updated by reader scroll
    component: ({ onRelatedClick }) => (
        <>
            <ArticleHero
                category="Strategy"
                title="My Article Title"
                lead="Short compelling subtitle sentence."
                author={{ name: "Your Name", role: "Editor", avatar: "/you.jpg" }}
                date="March 20, 2025"
                readTime="5 min read"
                cover={{ src: "/images/cover.jpg", alt: "Cover image description" }}
            />

            <Lead>Opening hook that draws the reader in immediately.</Lead>

            <H2>First Section</H2>
            <Body>Your paragraph text here. <strong>Bold</strong> and <em>italic</em> work naturally.</Body>

            <Quote author="Source, Title">Memorable pull quote goes here.</Quote>

            <Callout type="tip" title="Quick tip">
                Short actionable insight.
            </Callout>

            <Stats>
                <Stat value="42%" label="Improvement" sub="vs. control" accent />
                <Stat value="3.2×" label="Revenue lift" />
            </Stats>

            <Img src="/images/chart.png" alt="Revenue chart" caption="Q4 2024 results" />

            <H2>Second Section</H2>
            <Body>More content...</Body>

            <Divider />
            <Tags tags={["Tag1", "Tag2"]} />
            <AuthorCard name="Your Name" role="Your Role" bio="Short bio." />
            <Related articles={[{ id: "other-slug", title: "Related", category: "Growth",
                thumb: "/thumb.jpg", onClick: () => onRelatedClick("other-slug") }]} />
        </>
    ),
    seo: {
        title:       "My Article Title | Site Name",
        description: "Meta description for Google — 150–160 chars.",
        image:       "/images/og-cover.jpg",
    },
}
```

---

## SEO integration (Next.js App Router)

The page exports `generateMetadata()`. For per-article routes, create
`app/blog/[slug]/page.jsx` and resolve the article by slug:

```jsx
export async function generateMetadata({ params }) {
    const article = ARTICLES.find(a => a.id === params.slug);
    if (!article) return { title: "Not found" };
    return {
        title:       article.seo.title,
        description: article.seo.description,
        openGraph: {
            title:       article.seo.title,
            description: article.seo.description,
            images:      [{ url: article.seo.image, width: 1200, height: 630 }],
            type:        "article",
        },
        twitter: {
            card:        "summary_large_image",
            title:       article.seo.title,
            description: article.seo.description,
            images:      [article.seo.image],
        },
    };
}
```

For retention-boosting SEO extras:
- Add `<script type="application/ld+json">` with `Article` schema
- Use next/image instead of `<img>` for automatic WebP + lazy loading
- Add estimated reading time to `<time>` elements for schema compliance

---

## YouTube progress bar

The `reader__progress-bar` sits `position: absolute; bottom: 0` inside
`.reader`. It tracks `scrollTop / (scrollHeight - clientHeight)` in the
`handleScroll` callback and stores per-article progress in component state.

The glowing dot at the tip of the bar appears on hover via CSS `::after`.
To persist progress across sessions, save the `articles` state to
`localStorage` or your user database.

---

## Adding a CMS / MDX

To replace inline JSX with MDX:

```jsx
// 1. Install:  npm install @next/mdx next-mdx-remote
// 2. Store .mdx files in content/blog/
// 3. In blog-page.jsx, lazy-import the MDX component:

import dynamic from "next/dynamic";

const component = dynamic(() => import(`../../content/blog/${id}.mdx`));

// 4. MDX files use the same components:
// content/blog/my-article.mdx
import { Body, H2, Quote, Callout } from '../../blog/blog-components';
export { ArticleHero as default } from '../../blog/blog-components';

<H2>My Heading</H2>
<Body>My paragraph.</Body>
```
