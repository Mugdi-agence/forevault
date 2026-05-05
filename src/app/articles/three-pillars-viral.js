// src/app/[lang]/blog/content/three-pillars-viral.js
// ─────────────────────────────────────────────────────────────────────────────
// Article multilingue : "The 3 Pillars of Viral Content"
// Langues : en, fr, de, ja
// ─────────────────────────────────────────────────────────────────────────────

export const articleMeta = {
    id:       "three-pillars-viral",
    slug:     "three-pillars-viral",
    title: {
        en: "The 3 Pillars of Viral Content: Transformation, Simplicity, and Stimulation",
        fr: "Les 3 piliers du contenu viral : Transformation, Simplicité et Stimulation",
        de: "Die 3 Säulen viralen Contents: Transformation, Einfachheit und Stimulation",
        ja: "バイラルコンテンツの3つの柱：変容、シンプルさ、刺激",
    },
    category: { en: "Strategy", fr: "Stratégie", de: "Strategie", ja: "戦略" },
    date:     { en: "March 18, 2026", fr: "18 mars 2026", de: "18. März 2026", ja: "2026年3月18日" },
    readTime: { en: "6 min read", fr: "6 min de lecture", de: "6 Min. Lesezeit", ja: "6分で読める" },
    thumb:    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop",
    seo: {
        en: {
            title:       "The 3 Pillars of Viral Content | Mastery of Audience Retention",
            description: "Explore the fundamental blueprint of virality. Learn how Transformation, Simplicity, and Stimulation drive high-performing content in 2026.",
            image:       "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200",
        },
        fr: {
            title:       "Les 3 piliers du contenu viral | Maîtrise de la rétention d'audience",
            description: "Découvrez le schéma fondamental de la viralité. Apprenez comment la Transformation, la Simplicité et la Stimulation boostent vos contenus en 2026.",
            image:       "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200",
        },
        de: {
            title:       "Die 3 Säulen viralen Contents | Meisterschaft der Zuschauerbindung",
            description: "Erforsche den Grundbauplan der Viralität. Erfahre, wie Transformation, Einfachheit und Stimulation den Erfolg in 2026 vorantreiben.",
            image:       "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200",
        },
        ja: {
            title:       "バイラルコンテンツの3つの柱 | オーディエンス維持の極意",
            description: "バイラルの基本的な設計図を探ります。「変容」「シンプルさ」「刺激」が2026年の高性能コンテンツをどのように牽引するかを学びましょう。",
            image:       "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200",
        },
    },
    author: {
        en: { name: "Qodan", role: "Content Strategy" },
        fr: { name: "Qodan", role: "Stratégie de contenu" },
        de: { name: "Qodan", role: "Content-Strategie" },
        ja: { name: "Qodan", role: "コンテンツ戦略" },
    },
    tags: {
        en: ["Virality", "Transformation", "Simplicity", "Stimulation", "Framework"],
        fr: ["Viralité", "Transformation", "Simplicité", "Stimulation", "Framework"],
        de: ["Viralität", "Transformation", "Einfachheit", "Stimulation", "Framework"],
        ja: ["バイラル", "変容", "シンプルさ", "刺激", "フレームワーク"],
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────
export const en = {
    hero: {
        title:   "The 3 Pillars of Viral Content: Transformation, Simplicity, and Stimulation",
        lead:    "People call virality luck because they only see the outcome. Under the hood, strong videos usually share the same structural ingredients. These three show up again and again.",
        cover:   { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800", alt: "Abstract conceptualization of content strategy pillars" },
    },
    lead: "Publishing is easy now. Holding attention is hard. If your video misses one of these pillars, good ideas can still disappear into the void. To scale in 2026, you need to stop guessing and start engineering engagement.",
    sections: [
        {
            h2: "The Framework for Retention",
            blocks: [
                { type: "body", text: "Virality is essentially a byproduct of high retention and high satisfaction signals. When an algorithm sees that users are not just clicking, but staying and reacting, it expands your reach. These three pillars are the levers that trigger those signals." },
                { type: "stats", items: [
                    { value: "①", label: "Transformation", sub: "The 'Delta' of Change" },
                    { value: "②", label: "Simplicity",    sub: "Instant Comprehension" },
                    { value: "③", label: "Stimulation",   sub: "Visual & Narrative Pacing", accent: true },
                ]},
            ],
        },
        {
            h2: "1. Transformation: Show Clear Change",
            blocks: [
                { type: "body", text: "Humans are biologically programmed to lock onto change. It's a survival mechanism. In content, this means making the before/after obvious. Messy to clean. Confusing to clear. Broken to working." },
                { type: "body", text: "That visible delta (the difference between state A and state B) is the payoff people wait for. If the viewer doesn't perceive a clear shift, they feel no reward for the time invested." },
                { type: "callout", kind: "danger", title: "The 'Static Content' Trap", text: "If the opening state and ending state of your video feel the same, you've created static content. No shift, no payoff. This is the fastest way to kill your completion rate." },
                { type: "body", text: "Transformation does not need to be dramatic. Even a tiny code fix or a subtle color grade can work if the shift is framed as a problem being solved." },
            ],
        },
        {
            h2: "2. Simplicity: Remove Cognitive Friction",
            blocks: [
                { type: "body", text: "Simple does not mean dumb. It means low cognitive load. In a world of infinite scrolls, the brain is looking for excuses to stop paying attention. Confusion is the primary excuse." },
                { type: "quote", text: "If your viewer needs extra context to understand frame one, you have a friction problem." },
                { type: "body", text: "Strong content passes the 'no-audio test.' If someone can understand exactly what is happening in your video while in a loud subway with the sound off, your visual communication is simple enough to go viral." },
            ],
        },
        {
            h2: "3. Stimulation: Keep the Momentum",
            blocks: [
                { type: "body", text: "Retention is won second by second. Stimulation is about pacing—movement, progression, and small visual resets that keep the viewer's brain engaged instead of settling into a lull." },
                { type: "callout", kind: "tip", title: "The 3-Second Rule", text: "If the same frame or angle sits for more than 3 seconds without a change in text, crop, or motion, you create an exit point. Reset the viewer's attention constantly." },
                { type: "body", text: "Every section of your video should feel like it is going somewhere. That forward pull is what makes viewers stay through the payoff. Movement is the antidote to the 'scroll' impulse." },
            ],
        },
        {
            h2: "Quick Audit when growth stalls",
            blocks: [
                { type: "body", text: "If your metrics flatten, stop blaming the 'shadowban' and run your last 5 videos through this diagnostic lens:" },
                { type: "stats", items: [
                    { value: "Gap?",   label: "Weak Transformation", sub: "Was the before/after distinct?" },
                    { value: "Noise?", label: "Too Much Friction",   sub: "Was the core point obvious in 2s?" },
                    { value: "Lull?",  label: "Low Stimulation",    sub: "Did the pacing feel flat?", accent: true },
                ]},
                { type: "body", text: "Most misses come from hitting only one or two pillars. The strongest, most viral posts align all three perfectly. Identify your weakest pillar and fix it in your next upload." },
            ],
        },
    ],
    authorBio: "I study the intersection of neural behavior and algorithmic signals. My mission is to help creators build sustainable growth through engineered engagement.",
    related: [
        { id: "niche-doesnt-matter", title: "Why Your Niche Doesn't Matter (And What Actually Drives Viral Content)", category: "Strategy", thumb: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=400" },
        { id: "analyze-viral-content", title: "How to Analyze Viral Content and Find Winning Formats", category: "Research", thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// FRENCH
// ─────────────────────────────────────────────────────────────────────────────
export const fr = {
    hero: {
        title:   "Les 3 piliers du contenu viral : Transformation, Simplicité et Stimulation",
        lead:    "On dit que la viralité est une question de chance parce qu'on ne voit que le résultat. En réalité, les vidéos puissantes partagent les mêmes ingrédients structurels. Ces trois-là reviennent sans cesse.",
        cover:   { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800", alt: "Conceptualisation abstraite des piliers de la stratégie de contenu" },
    },
    lead: "Publier est devenu facile. C'est retenir l'attention qui est difficile. Si votre vidéo manque l'un de ces piliers, même une excellente idée peut disparaître dans l'oubli. En 2026, vous devez arrêter de deviner et commencer à ingénieriser l'engagement.",
    sections: [
        {
            h2: "Le Framework de la Rétention",
            blocks: [
                { type: "body", text: "La viralité est essentiellement un sous-produit de signaux de rétention et de satisfaction élevés. Quand l'algorithme voit que les utilisateurs ne font pas que cliquer, mais restent et réagissent, il élargit votre portée. Ces trois piliers sont les leviers qui déclenchent ces signaux." },
                { type: "stats", items: [
                    { value: "①", label: "Transformation", sub: "Le 'Delta' du Changement" },
                    { value: "②", label: "Simplicité",    sub: "Compréhension Instantanée" },
                    { value: "③", label: "Stimulation",   sub: "Rythme Visuel & Narratif", accent: true },
                ]},
            ],
        },
        {
            h2: "1. Transformation : Montrez un Changement Clair",
            blocks: [
                { type: "body", text: "L'humain est biologiquement programmé pour repérer le changement. C'est un mécanisme de survie. En contenu, cela signifie rendre l'avant/après évident. Du désordre à la propreté. De la confusion à la clarté. Du cassé au fonctionnel." },
                { type: "body", text: "Ce delta visible est la récompense que les gens attendent. Si le spectateur ne perçoit pas de changement clair, il n'aura pas le sentiment d'être récompensé pour le temps investi." },
                { type: "callout", kind: "danger", title: "Le piège du 'Contenu Statique'", text: "Si l'état initial et l'état final de votre vidéo semblent identiques, vous avez créé du contenu statique. Pas de changement, pas de récompense. C'est le moyen le plus rapide de tuer votre taux de complétion." },
                { type: "body", text: "La transformation n'a pas besoin d'être dramatique. Même une petite correction de code ou un étalonnage subtil peut fonctionner si le changement est présenté comme la résolution d'un problème." },
            ],
        },
        {
            h2: "2. Simplicité : Éliminez la Friction Cognitive",
            blocks: [
                { type: "body", text: "Simple ne veut pas dire bête. Cela signifie une charge cognitive faible. Dans un monde de scroll infini, le cerveau cherche des excuses pour arrêter de prêter attention. La confusion est l'excuse numéro un." },
                { type: "quote", text: "Si votre spectateur a besoin d'un contexte supplémentaire pour comprendre la première image, vous avez un problème de friction." },
                { type: "body", text: "Un contenu fort passe le 'test du muet'. Si quelqu'un peut comprendre exactement ce qui se passe dans votre vidéo dans un métro bruyant sans le son, votre communication visuelle est assez simple pour devenir virale." },
            ],
        },
        {
            h2: "3. Stimulation : Maintenez l'Élan",
            blocks: [
                { type: "body", text: "La rétention se gagne seconde après seconde. La stimulation concerne le rythme : mouvement, progression et petits resets visuels qui maintiennent le cerveau du spectateur en éveil." },
                { type: "callout", kind: "tip", title: "La règle des 3 secondes", text: "Si la même image ou le même angle reste plus de 3 secondes sans changement de texte, de zoom ou de mouvement, vous créez un point de sortie. Réinitialisez l'attention du spectateur en permanence." },
                { type: "body", text: "Chaque section de votre vidéo doit donner l'impression d'aller quelque part. Cet élan vers l'avant est ce qui pousse les spectateurs à rester jusqu'à la fin. Le mouvement est l'antidote à l'impulsion de scroller." },
            ],
        },
        {
            h2: "Audit rapide quand la croissance stagne",
            blocks: [
                { type: "body", text: "Si vos métriques stagnent, arrêtez de blâmer 'l'algorithme' et passez vos 5 dernières vidéos au crible de ce diagnostic :" },
                { type: "stats", items: [
                    { value: "Gap ?",   label: "Transformation Faible", sub: "L'avant/après était-il distinct ?" },
                    { value: "Bruit ?", label: "Trop de Friction",      sub: "Le point central était-il évident en 2s ?" },
                    { value: "Calme ?", label: "Faible Stimulation",   sub: "Le rythme était-il trop plat ?", accent: true },
                ]},
                { type: "body", text: "La plupart des échecs viennent du fait de ne toucher qu'un ou deux piliers. Les posts les plus viraux alignent parfaitement les trois. Identifiez votre pilier le plus faible et corrigez-le dans votre prochaine vidéo." },
            ],
        },
    ],
    authorBio: "J'étudie l'intersection entre le comportement neuronal et les signaux algorithmiques. Ma mission est d'aider les créateurs à bâtir une croissance durable via un engagement maîtrisé.",
    related: [
        { id: "niche-doesnt-matter", title: "Pourquoi votre niche n'a aucune importance (et ce qui crée vraiment la viralité)", category: "Stratégie", thumb: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=400" },
        { id: "analyze-viral-content", title: "Comment analyser le contenu viral et trouver des formats gagnants", category: "Recherche", thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GERMAN
// ─────────────────────────────────────────────────────────────────────────────
export const de = {
    hero: {
        title:   "Die 3 Säulen viralen Contents: Transformation, Einfachheit und Stimulation",
        lead:    "Leute nennen Viralität Glück, weil sie nur das Ergebnis sehen. Unter der Haube teilen starke Videos meist die gleichen strukturellen Zutaten. Diese drei tauchen immer wieder auf.",
        cover:   { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800", alt: "Abstrakte Konzeptualisierung von Content-Strategie-Säulen" },
    },
    lead: "Veröffentlichen ist heute einfach. Aufmerksamkeit zu halten ist schwer. Wenn dein Video eine dieser Säulen vermissen lässt, können gute Ideen im Nichts verschwinden. Um 2026 zu skalieren, musst du aufhören zu raten.",
    sections: [
        {
            h2: "Das Framework für Retention",
            blocks: [
                { type: "body", text: "Viralität ist im Wesentlichen ein Nebenprodukt hoher Retention- und Zufriedenheitssignale. Wenn ein Algorithmus sieht, dass Nutzer bleiben und reagieren, erweitert er deine Reichweite." },
                { type: "stats", items: [
                    { value: "①", label: "Transformation", sub: "Das 'Delta' der Veränderung" },
                    { value: "②", label: "Einfachheit",    sub: "Sofortiges Verständnis" },
                    { value: "③", label: "Stimulation",   sub: "Visuelles & narratives Pacing", accent: true },
                ]},
            ],
        },
        {
            h2: "1. Transformation: Zeige klare Veränderung",
            blocks: [
                { type: "body", text: "Menschen sind biologisch darauf programmiert, Veränderungen wahrzunehmen. Im Content bedeutet das, das Vorher/Nachher offensichtlich zu machen. Von chaotisch zu sauber. Von verwirrend zu klar." },
                { type: "callout", kind: "danger", title: "Die 'Statischer Content' Falle", text: "Wenn sich der Anfangs- und Endzustand deines Videos gleich anfühlen, hast du statischen Content erstellt. Keine Veränderung, kein Payoff." },
            ],
        },
        {
            h2: "2. Einfachheit: Reibung entfernen",
            blocks: [
                { type: "body", text: "Einfach bedeutet nicht dumm. Es bedeutet niedrige kognitive Last. In einer Welt des unendlichen Scrollens sucht das Gehirn nach Ausreden, um wegzuschauen. Verwirrung ist die Hauptausrede." },
                { type: "quote", text: "Wenn dein Zuschauer extra Kontext braucht, um das erste Bild zu verstehen, hast du ein Reibungsproblem." },
            ],
        },
        {
            h2: "3. Stimulation: Den Schwung halten",
            blocks: [
                { type: "body", text: "Retention wird Sekunde für Sekunde gewonnen. Bei Stimulation geht es um Pacing – Bewegung, Progression und kleine visuelle Resets, die das Gehirn des Zuschauers wach halten." },
                { type: "callout", kind: "tip", title: "Die 3-Sekunden-Regel", text: "Wenn dasselbe Bild länger als 3 Sekunden ohne Änderung von Text oder Ausschnitt bleibt, schaffst du einen Ausstiegspunkt." },
            ],
        },
        {
            h2: "Kurzes Audit bei Wachstumsstopp",
            blocks: [
                { type: "stats", items: [
                    { value: "Gap?",   label: "Schwache Transformation", sub: "War das Vorher/Nachher deutlich?" },
                    { value: "Noise?", label: "Zu viel Reibung",          sub: "War der Kernpunkt in 2s klar?" },
                    { value: "Lull?",  label: "Wenig Stimulation",       sub: "War das Pacing zu flach?", accent: true },
                ]},
            ],
        },
    ],
    authorBio: "Ich untersuche die Schnittstelle zwischen neuronalem Verhalten und algorithmischen Signalen, um Creatoren zu nachhaltigem Wachstum zu verhelfen.",
    related: [
        { id: "niche-doesnt-matter", title: "Warum deine Nische keine Rolle spielt", category: "Strategie", thumb: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=400" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// JAPANESE
// ─────────────────────────────────────────────────────────────────────────────
export const ja = {
    hero: {
        title:   "バイラルコンテンツの3つの柱：変容、シンプルさ、刺激",
        lead:    "バイラルが「運」だと言われるのは、人々が結果しか見ていないからです。実際、強力な動画は常に同じ構造的要素を共有しています。これら3つは、何度でも現れます。",
        cover:   { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800", alt: "コンテンツ戦略の柱の抽象的な概念化" },
    },
    lead: "今の時代、発信するのは簡単です。しかし、注意を引き続けるのは困難です。動画にこれら柱の1つでも欠けていれば、良いアイデアでも闇に消えてしまいます。2026年にスケールするには、推測をやめ、エンゲージメントを設計する必要があります。",
    sections: [
        {
            h2: "リテンションのためのフレームワーク",
            blocks: [
                { type: "body", text: "バイラルとは、本質的に高い維持率と満足度シグナルの副産物です。アルゴリズムが、ユーザーがただクリックするだけでなく、留まり、反応していると判断したとき、リーチが拡大します。これら3つの柱は、それらシグナルを誘発するためのレバーです。" },
                { type: "stats", items: [
                    { value: "①", label: "変容 (Transformation)", sub: "変化の「デルタ」" },
                    { value: "②", label: "シンプルさ (Simplicity)", sub: "即時の理解" },
                    { value: "③", label: "刺激 (Stimulation)", sub: "視覚とナラティブの緩急", accent: true },
                ]},
            ],
        },
        {
            h2: "1. 変容：明確な変化を見せる",
            blocks: [
                { type: "body", text: "人間は生物学的に変化を察知するようにプログラムされています。コンテンツにおいて、これは「ビフォー・アフター」を明確にすることを意味します。散らかった状態から綺麗に。混乱から明快に。壊れた状態から動く状態に。" },
                { type: "callout", kind: "danger", title: "「静止コンテンツ」の罠", text: "動画の開始状態と終了状態が同じように感じられる場合、それは静止コンテンツです。変化がなければ報酬もありません。これは完了率を即座に下げる要因になります。" },
            ],
        },
        {
            h2: "2. シンプルさ：認知的摩擦を排除する",
            blocks: [
                { type: "body", text: "「シンプル」は「馬鹿げている」という意味ではありません。認知的負荷が低いことを意味します。無限にスクロールされる世界で、脳は注意をそらす口実を探しています。「混乱」こそが最大の口実です。" },
                { type: "quote", text: "視聴者が最初の1コマを理解するために追加の文脈を必要とするなら、そこには摩擦の問題があります。" },
            ],
        },
        {
            h2: "3. 刺激：勢いを維持する",
            blocks: [
                { type: "body", text: "維持率は秒単位で勝ち取るものです。刺激とは、ペース配分のことです。視聴者の脳を飽きさせないための動き、進行、そして小さな視覚的リセットのことです。" },
                { type: "callout", kind: "tip", title: "3秒ルール", text: "テキスト、クロップ、動きの変化なしに同じカットが3秒以上続くと、離脱ポイントが生まれます。常に視聴者の注意をリセットしてください。" },
            ],
        },
        {
            h2: "成長が止まった時のクイック診断",
            blocks: [
                { type: "stats", items: [
                    { value: "Gap?",   label: "弱い変容",     sub: "ビフォー・アフターは明確か？" },
                    { value: "Noise?", label: "過剰な摩擦",   sub: "核心は2秒で伝わったか？" },
                    { value: "Lull?",  label: "低い刺激",     sub: "ペースが単調ではないか？", accent: true },
                ]},
            ],
        },
    ],
    authorBio: "神経行動とアルゴリズムシグナルの交差点を研究しています。設計されたエンゲージメントを通じて、クリエイターが持続可能な成長を築くのを支援することが私の使命です。",
    related: [
        { id: "niche-doesnt-matter", title: "ニッチが重要ではない理由（そして実際にバイラルを動かすもの）", category: "戦略", thumb: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=400" },
    ],
};

// ── Helpers ───────────────────────────────────────────────────────────────────
const CONTENT = { en, fr, de, ja };

export function getArticleContent(lang) {
    return CONTENT[lang] ?? CONTENT.en;
}

export function getArticleMeta(lang) {
    return {
        id:       articleMeta.id,
        slug:     articleMeta.slug,
        title:    articleMeta.title[lang]    ?? articleMeta.title.en,
        category: articleMeta.category[lang] ?? articleMeta.category.en,
        date:     articleMeta.date[lang]     ?? articleMeta.date.en,
        readTime: articleMeta.readTime[lang] ?? articleMeta.readTime.en,
        thumb:    articleMeta.thumb,
        seo:      articleMeta.seo[lang]      ?? articleMeta.seo.en,
        author:   articleMeta.author[lang]   ?? articleMeta.author.en,
        tags:     articleMeta.tags[lang]     ?? articleMeta.tags.en,
    };
}