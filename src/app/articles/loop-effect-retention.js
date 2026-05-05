// src/app/[lang]/blog/content/loop-effect-retention.js
// ─────────────────────────────────────────────────────────────────────────────
// Multilingual Article: "The Loop Effect: How to Boost Retention Beyond 100%"
// Languages: en, fr, de, ja
// ─────────────────────────────────────────────────────────────────────────────

export const articleMeta = {
    id:       "loop-effect-retention",
    slug:     "loop-effect-retention",
    title: {
        en: "The Loop Effect: How to Boost Retention Beyond 100%",
        fr: "L'Effet de Boucle : Comment dépasser les 100 % de rétention",
        de: "Der Loop-Effekt: Retention über 100 % steigern",
        ja: "ループ効果：視聴維持率100%超えを達成する方法",
    },
    category: { en: "Retention", fr: "Rétention", de: "Retention", ja: "維持率" },
    date:     { en: "March 10, 2026", fr: "10 mars 2026", de: "10. März 2026", ja: "2026年3月10日" },
    readTime: { en: "3 min read", fr: "3 min de lecture", de: "3 Min. Lesezeit", ja: "3分で読める" },
    thumb:    "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
    seo: {
        en: {
            title:       "The Loop Effect: How to Get 100%+ Retention on Your Videos",
            description: "A seamless loop can make viewers replay a video without consciously deciding to. Learn how it works and how to build it into your content.",
            image:       "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1200",
        },
        fr: {
            title:       "L'Effet de Boucle : Comment obtenir +100 % de rétention",
            description: "Une boucle fluide incite les spectateurs à revoir une vidéo sans s'en rendre compte. Découvrez comment l'intégrer à votre contenu.",
            image:       "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1200",
        },
        de: {
            title:       "Der Loop-Effekt: So erreichst du 100 %+ Retention",
            description: "Ein nahtloser Loop bringt Zuschauer dazu, ein Video erneut anzusehen, ohne es bewusst zu entscheiden. Erfahre, wie es funktioniert.",
            image:       "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1200",
        },
        ja: {
            title:       "ループ効果：動画の視聴維持率を100%以上にする方法",
            description: "シームレスなループは、視聴者が無意識に動画を再生することを可能にします。その仕組みと、コンテンツへの取り入れ方を学びましょう。",
            image:       "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1200",
        },
    },
    author: {
        en: { name: "Qodan", role: "Content Strategy" },
        fr: { name: "Qodan", role: "Stratégie de contenu" },
        de: { name: "Qodan", role: "Content-Strategie" },
        ja: { name: "Qodan", role: "コンテンツ戦略" },
    },
    tags: {
        en: ["Loop", "Retention", "Replays", "Algorithm", "Engagement"],
        fr: ["Boucle", "Rétention", "Replays", "Algorithme", "Engagement"],
        de: ["Loop", "Retention", "Replays", "Algorithmus", "Engagement"],
        ja: ["ループ", "維持率", "リプレイ", "アルゴリズム", "エンゲージメント"],
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────
export const en = {
    hero: {
        title:   "The Loop Effect: How to Boost Retention Beyond 100%",
        lead:    "Retention is already powerful. A good loop pushes it further by creating replays that happen almost automatically.",
        cover:   { src: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop", alt: "Infinite loop animation concept" },
    },
    lead: "When the last frame blends into the first, viewers often do not notice the ending. That is the loop effect. It increases replays and can push retention beyond 100%.",
    sections: [
        {
            h2: "Why loops work so well",
            blocks: [
                { type: "body", text: "The brain likes continuity. If the end resolves back into the start, it does not feel like a stop. It feels continuous, so rewatching happens naturally." },
                { type: "body", text: "This is not just for vanity metrics. A clean loop improves flow, and flow keeps attention alive." },
                { type: "stats", items: [
                    { value: ">100%", label: "Retention possible", sub: "With a seamless loop", accent: true },
                    { value: "2–4×",  label: "Avg replay rate",    sub: "On well-looped content" },
                    { value: "↑↑↑",   label: "Algorithm boost",    sub: "Replays = strong engagement signal" },
                ]},
            ],
        },
        {
            h2: "How to build an effective loop",
            blocks: [
                { type: "body", text: "The key is visual continuity between the end and the beginning. If it feels like a hard cut, the illusion breaks." },
                { type: "callout", kind: "tip", title: "Circular transformation", text: "Build the ending so it naturally circles back to the first state. For example, a polished UI can transition back to the original broken screen in a way that feels intentional." },
                { type: "body", text: "Other options: continuous motion loops, or transformation chains that naturally reconnect to frame one. The best loops feel effortless." },
            ],
        },
        {
            h2: "A simple test before you publish",
            blocks: [
                { type: "body", text: "Before publishing, ask: 'Would I watch this again right now?' If yes, and you can feel the pull, the loop is probably working." },
                { quote: "A loop can turn a decent video into a rewatchable one. Small creative change, big retention impact." },
            ],
        },
        {
            h2: "Where the loop belongs in the structure",
            blocks: [
                { type: "body", text: "Place the loop after the payoff. Show the result first, then glide back toward the opening state so the return feels intentional." },
                { type: "callout", kind: "info", title: "Pair it with a strong hook", text: "Loops only work when the opening is strong. If frame one is weak, you are just replaying weak." },
                { type: "body", text: "The best videos pair a sharp hook with a clean loop. Hook wins the first second, loop wins the replay." },
            ],
        },
        {
            h2: "Creator note: replay quality beats vanity replay",
            blocks: [
                { type: "body", text: "Not all replay is equal. Forced confusion loops can inflate replay while hurting trust. The better version is clarity plus flow: people rewatch because the sequence feels satisfying, not because they are confused. That difference matters if you care about long-term channel health." },
            ],
        },
    ],
    authorBio: "I study what makes content perform — across platforms, niches, and formats. My goal is to give creators frameworks that actually scale.",
    related: [
        { id: "perfect-structure-viral", title: "The Perfect Structure of a Viral Video", category: "Production", thumb: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=400&auto=format&fit=crop" },
        { id: "iteration-strategy",     title: "The Iteration Strategy That Leads to Viral Success", category: "Growth", thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// FRENCH
// ─────────────────────────────────────────────────────────────────────────────
export const fr = {
    hero: {
        title:   "L'Effet de Boucle : Comment dépasser les 100 % de rétention",
        lead:    "La rétention est déjà un levier puissant. Une bonne boucle va plus loin en créant des replays qui se produisent presque automatiquement.",
        cover:   { src: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop", alt: "Concept d'animation en boucle infinie" },
    },
    lead: "Lorsque la dernière image se fond dans la première, les spectateurs ne remarquent souvent pas la fin. C'est l'effet de boucle. Il augmente les replays et peut pousser la rétention au-delà de 100 %.",
    sections: [
        {
            h2: "Pourquoi les boucles fonctionnent si bien",
            blocks: [
                { type: "body", text: "Le cerveau aime la continuité. Si la fin renvoie au début, il ne ressent pas d'arrêt. Cela semble continu, donc le revisionnage se fait naturellement." },
                { type: "body", text: "Ce n'est pas qu'une question de statistiques. Une boucle propre améliore le flux (flow), et le flux maintient l'attention vivante." },
                { type: "stats", items: [
                    { value: ">100%", label: "Rétention possible", sub: "Avec une boucle fluide", accent: true },
                    { value: "2–4×",  label: "Taux de replay moy.", sub: "Sur du contenu bien bouclé" },
                    { value: "↑↑↑",   label: "Boost algorithmique", sub: "Replays = fort signal d'engagement" },
                ]},
            ],
        },
        {
            h2: "Comment construire une boucle efficace",
            blocks: [
                { type: "body", text: "La clé est la continuité visuelle entre la fin et le début. S'il y a une coupure brutale, l'illusion est rompue." },
                { type: "callout", kind: "tip", title: "Transformation circulaire", text: "Concevez la fin pour qu'elle revienne naturellement à l'état initial. Par exemple, une interface soignée peut revenir à l'écran cassé d'origine de manière intentionnelle." },
                { type: "body", text: "Autres options : boucles de mouvement continu, ou chaînes de transformation qui se reconnectent naturellement à la première image. Les meilleures boucles semblent sans effort." },
            ],
        },
        {
            h2: "Un test simple avant de publier",
            blocks: [
                { type: "body", text: "Avant de publier, demandez-vous : 'Est-ce que je regarderais ça à nouveau maintenant ?' Si oui, et que vous sentez l'attraction, la boucle fonctionne probablement." },
                { quote: "Une boucle peut transformer une vidéo correcte en une vidéo que l'on veut revoir. Petit changement créatif, grand impact sur la rétention." },
            ],
        },
        {
            h2: "Où placer la boucle dans la structure",
            blocks: [
                { type: "body", text: "Placez la boucle après le point culminant (payoff). Montrez d'abord le résultat, puis glissez vers l'état d'ouverture pour que le retour semble voulu." },
                { type: "callout", kind: "info", title: "Associez-la à une accroche forte", text: "Les boucles ne fonctionnent que si l'ouverture est percutante. Si l'image n°1 est faible, vous ne faites que rejouer du contenu faible." },
                { type: "body", text: "Les meilleures vidéos associent une accroche tranchante à une boucle propre. L'accroche gagne la première seconde, la boucle gagne le replay." },
            ],
        },
        {
            h2: "Note aux créateurs : la qualité du replay prime",
            blocks: [
                { type: "body", text: "Tous les replays ne se valent pas. Les boucles basées sur la confusion forcée peuvent gonfler les chiffres tout en nuisant à la confiance. La meilleure version est celle de la clarté et du flux : les gens revoient parce que la séquence est satisfaisante, pas parce qu'ils sont perdus." },
            ],
        },
    ],
    authorBio: "J'étudie ce qui rend le contenu performant — sur toutes les plateformes et formats. Mon but : donner aux créateurs des frameworks qui passent à l'échelle.",
    related: [
        { id: "perfect-structure-viral", title: "La structure parfaite d'une vidéo virale", category: "Production", thumb: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=400&auto=format&fit=crop" },
        { id: "iteration-strategy",     title: "La stratégie d'itération pour le succès viral", category: "Growth", thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GERMAN
// ─────────────────────────────────────────────────────────────────────────────
export const de = {
    hero: {
        title:   "Der Loop-Effekt: Retention über 100 % steigern",
        lead:    "Retention ist bereits mächtig. Ein guter Loop geht einen Schritt weiter, indem er Replays fast automatisch erzeugt.",
        cover:   { src: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop", alt: "Konzept einer Endlosschleife" },
    },
    lead: "Wenn das letzte Frame in das erste übergeht, bemerken Zuschauer oft das Ende nicht. Das ist der Loop-Effekt. Er erhöht die Replays und kann die Retention über 100 % treiben.",
    sections: [
        {
            h2: "Warum Loops so gut funktionieren",
            blocks: [
                { type: "body", text: "Das Gehirn mag Kontinuität. Wenn das Ende zum Anfang zurückkehrt, fühlt es sich nicht wie ein Stopp an. Es wirkt fortlaufend, sodass erneutes Ansehen natürlich passiert." },
                { type: "body", text: "Das ist nicht nur für die Statistik. Ein sauberer Loop verbessert den Flow, und Flow hält die Aufmerksamkeit wach." },
                { type: "stats", items: [
                    { value: ">100%", label: "Retention möglich", sub: "Mit nahtlosem Loop", accent: true },
                    { value: "2–4×",  label: "Durchschn. Replay-Rate", sub: "Bei gut geloopten Inhalten" },
                    { value: "↑↑↑",   label: "Algorithmus-Boost", sub: "Replays = starkes Engagement-Signal" },
                ]},
            ],
        },
        {
            h2: "So baust du einen effektiven Loop",
            blocks: [
                { type: "body", text: "Der Schlüssel ist die visuelle Kontinuität zwischen Ende und Anfang. Wenn es sich wie ein harter Schnitt anfühlt, bricht die Illusion." },
                { type: "callout", kind: "tip", title: "Zirkuläre Transformation", text: "Baue das Ende so auf, dass es natürlich zum Anfangszustand zurückkehrt. Zum Beispiel kann eine fertige UI so zum ursprünglichen kaputten Screen zurückkehren, dass es beabsichtigt wirkt." },
            ],
        },
        {
            h2: "Ein einfacher Test vor dem Posten",
            blocks: [
                { type: "body", text: "Frage dich vor dem Veröffentlichen: 'Würde ich das jetzt sofort noch einmal ansehen?' Wenn ja, funktioniert der Loop wahrscheinlich." },
                { quote: "Ein Loop kann ein ordentliches Video in ein wiederholt sehensreiches verwandeln. Kleine kreative Änderung, große Auswirkung auf die Retention." },
            ],
        },
        {
            h2: "Wo der Loop in der Struktur hingehört",
            blocks: [
                { type: "body", text: "Platziere den Loop nach dem Payoff. Zeige erst das Ergebnis und gleite dann zurück zum Anfangszustand." },
                { type: "callout", kind: "info", title: "Kombiniere ihn mit einem starken Hook", text: "Loops funktionieren nur, wenn der Anfang stark ist. Wenn Frame eins schwach ist, loopst du nur Schwäche." },
            ],
        },
    ],
    authorBio: "Ich untersuche, was Content erfolgreich macht. Mein Ziel ist es, Creatorn Frameworks zu geben, die wirklich skalieren.",
    related: [
        { id: "perfect-structure-viral", title: "Die perfekte Struktur eines viralen Videos", category: "Production", thumb: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=400&auto=format&fit=crop" },
        { id: "iteration-strategy",     title: "Die Iterationsstrategie für viralen Erfolg", category: "Growth", thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// JAPANESE
// ─────────────────────────────────────────────────────────────────────────────
export const ja = {
    hero: {
        title:   "ループ効果：視聴維持率100%超えを達成する方法",
        lead:    "維持率はそれだけでも強力ですが、優れたループは再生（リプレイ）をほぼ自動的に促し、数値をさらに押し上げます。",
        cover:   { src: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop", alt: "無限ループアニメーションのコンセプト" },
    },
    lead: "最後のフレームが最初のフレームに溶け込むとき、視聴者は終わりを意識しません。これがループ効果です。リプレイが増え、維持率を100%以上に押し上げることが可能になります。",
    sections: [
        {
            h2: "なぜループはこれほど効果的なのか",
            blocks: [
                { type: "body", text: "脳は連続性を好みます。終わりが始まりに解消されると、「停止」を感じさせません。連続して感じられるため、自然に再視聴が起こります。" },
                { type: "stats", items: [
                    { value: ">100%", label: "維持率の可能性", sub: "シームレスなループで達成", accent: true },
                    { value: "2–4倍",  label: "平均リプレイ率", sub: "優れたループ構造のコンテンツ" },
                    { value: "↑↑↑",   label: "アルゴリズムの加速", sub: "リプレイ＝強いエンゲージメント" },
                ]},
            ],
        },
        {
            h2: "効果的なループの作り方",
            blocks: [
                { type: "body", text: "鍵は「終わりと始まりの間の視覚的な連続性」です。ぶつ切りのカットに感じられると、魔法が解けてしまいます。" },
                { type: "callout", kind: "tip", title: "循環的な変化", text: "エンディングが自然に最初の状態に戻るように構成します。例えば、完成したUIが意図的に最初の「壊れた画面」に遷移するように見せる手法などです。" },
            ],
        },
        {
            h2: "公開前のシンプルなテスト",
            blocks: [
                { type: "body", text: "公開する前に自分に問いかけてください：『今すぐこれをもら一度見たいか？』答えがYESで、引き込まれる感覚があれば、ループは成功しています。" },
                { quote: "ループは平凡な動画を「何度も見たくなる動画」に変えます。小さなクリエイティブな工夫が、維持率に大きなインパクトを与えます。" },
            ],
        },
        {
            h2: "クリエイターへの注意：質の高いリプレイを目指す",
            blocks: [
                { type: "body", text: "すべてのリプレイが同価値ではありません。強制的な「混乱」によるループは、数値を稼げても信頼を損なう可能性があります。満足感のあるフローによる再視聴を目指しましょう。" },
            ],
        },
    ],
    authorBio: "プラットフォームやフォーマットを問わず、コンテンツを成功させる要素を研究しています。クリエイターにスケールするフレームワークを提供することが目標です。",
    related: [
        { id: "perfect-structure-viral", title: "バズる動画の完璧な構成", category: "Production", thumb: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=400&auto=format&fit=crop" },
        { id: "iteration-strategy",     title: "バイラル成功を導く反復戦略", category: "Growth", thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" },
    ],
};

// ── Helpers ───────────────────────────────────────────────────────────────────
const CONTENT = { en, fr, de, ja };

export function getArticleContent(lang) {
    return CONTENT[lang] ?? CONTENT.en;
}

export function getArticleMeta(lang) {
    return {
        ...articleMeta,
        title:    articleMeta.title[lang]    ?? articleMeta.title.en,
        category: articleMeta.category[lang] ?? articleMeta.category.en,
        date:     articleMeta.date[lang]     ?? articleMeta.date.en,
        readTime: articleMeta.readTime[lang] ?? articleMeta.readTime.en,
        seo:      articleMeta.seo[lang]      ?? articleMeta.seo.en,
        author:   articleMeta.author[lang]   ?? articleMeta.author.en,
        tags:     articleMeta.tags[lang]     ?? articleMeta.tags.en,
    };
}