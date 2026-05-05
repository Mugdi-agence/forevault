// src/app/[lang]/blog/content/niche-doesnt-matter.js
// ─────────────────────────────────────────────────────────────────────────────
// Article multilingue : "Why Your Niche Doesn't Matter (And What Actually Drives Viral Content)"
// Langues : en, fr, de, ja
// ─────────────────────────────────────────────────────────────────────────────

export const articleMeta = {
    id:       "niche-doesnt-matter",
    slug:     "niche-doesnt-matter",
    title: {
        en: "Why Your Niche Doesn't Matter (And What Actually Drives Viral Content)",
        fr: "Pourquoi votre niche n'a aucune importance (et ce qui crée vraiment la viralité)",
        de: "Warum deine Nische keine Rolle spielt (Und was wirklich virale Inhalte antreibt)",
        ja: "ニッチが重要ではない理由（そして実際にバイラルコンテンツを動かすもの）",
    },
    category: { en: "Strategy", fr: "Stratégie", de: "Strategie", ja: "戦略" },
    date:     { en: "March 20, 2026", fr: "20 mars 2026", de: "20. März 2026", ja: "2026年3月20日" },
    readTime: { en: "8 min read", fr: "8 min de lecture", de: "8 Min. Lesezeit", ja: "8分で読める" },
    thumb:    "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=800&auto=format&fit=crop",
    seo: {
        en: {
            title:       "Why Your Niche Doesn't Matter in 2026 | Viral Content Strategy",
            description: "Stop obsessing over 'finding your niche.' Learn why psychological triggers and engagement signals are the real drivers of viral content in 2026.",
            image:       "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=1200",
        },
        fr: {
            title:       "Pourquoi votre niche n'a plus d'importance en 2026 | Stratégie Virale",
            description: "Arrêtez d'être obsédé par votre niche. Découvrez pourquoi les déclencheurs psychologiques et les signaux d'engagement sont les vrais moteurs de la viralité.",
            image:       "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=1200",
        },
        de: {
            title:       "Warum deine Nische in 2026 egal ist | Virale Content-Strategie",
            description: "Hör auf, dich auf eine Nische zu fixieren. Erfahre, warum psychologische Auslöser und Engagement-Signale die wahren Treiber für viralen Content sind.",
            image:       "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=1200",
        },
        ja: {
            title:       "2026年、ニッチが重要ではない理由 | バイラルコンテンツ戦略",
            description: "「ニッチを見つける」ことに執着するのはやめましょう。心理的なトリガーとエンゲージメントシグナルがバイラルコンテンツの真の原動力である理由を学びます。",
            image:       "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=1200",
        },
    },
    author: {
        en: { name: "Qodan", role: "Content Strategy" },
        fr: { name: "Qodan", role: "Stratégie de contenu" },
        de: { name: "Qodan", role: "Content-Strategie" },
        ja: { name: "Qodan", role: "コンテンツ戦略" },
    },
    tags: {
        en: ["Virality", "Brain", "Strategy", "Content Formats", "Attention"],
        fr: ["Viralité", "Cerveau", "Stratégie", "Formats de contenu", "Attention"],
        de: ["Viralität", "Gehirn", "Strategie", "Content-Formate", "Aufmerksamkeit"],
        ja: ["バイラル", "脳", "戦略", "コンテンツフォーマット", "注目"],
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────
export const en = {
    hero: {
        title:   "Why Your Niche Doesn't Matter (And What Actually Drives Viral Content)",
        lead:    "People keep repeating 'pick one niche and stay there.' That advice is not useless, but it is deeply incomplete. What really decides reach now is whether the content creates a reaction fast enough.",
        cover:   { src: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=800&auto=format&fit=crop", alt: "Abstract brain and neural connections representing content engagement" },
    },
    lead: "Sticking to one topic can help with clarity, sure. But viewers do not open a platform thinking, 'I hope this fits a niche taxonomy.' They click because something feels interesting right now. The era of rigid, metadata-driven niches is over.",
    sections: [
        {
            h2: "The 'Perfect Niche' Myth",
            blocks: [
                { type: "body", text: "For the last decade, audience building advice was identical everywhere: find a microscopic sub-category and completely dominate it. 'Excel tips for left-handed accountants.' 'Vegan keto baking for marathon runners.' The theory was that algorithms needed strict categorization to know who to serve your content to. If you deviated even slightly, you confused the machine and killed your channel." },
                { type: "body", text: "This is no longer how modern recommendation engines work. Watch enough high-performing posts across YouTube, TikTok, and X, and you start seeing the exact same phenomenon: entirely different topics can pull the exact same audience demographic when the packaging and emotional delivery are strong." },
                { type: "body", text: "Algorithms in 2026 do not cluster content solely by semantics or keywords anymore; they cluster it by behavioral resonance. People are not only consuming topics. They are consuming stimuli. Curiosity, surprise, relief, payoff, schadenfreude, awe. The platform tracks those invisible psychological reactions—measured through micro-retention, rewind rates, and completion depth—far better than it tracks any category label you put in your tags." },
                { type: "callout", kind: "info", title: "What actually drives virality", text: "The pieces that travel effortlessly usually hit four specific beats: **Curiosity** (an unresolved hook), **Surprise** (a sudden turn or escalation), **Satisfaction** (a visible result), and **Completion** (a clean ending that resets the brain). Nail those four, and your topic becomes merely the delivery method, not the whole strategy." },
            ],
        },
        {
            h2: "The Attention Loop",
            blocks: [
                { type: "body", text: "Human attention is a mechanical process. Good content keeps running the exact same loop in the viewer's head, regardless of what niche you are operating in: 'wait... what is this... okay, I understand the problem... now show me the result.' It is a sequence of cognitive tension and release. Different subjects. Same mental pattern." },
                { type: "body", text: "When a viewer abandons a video after eight seconds, it is rarely because they suddenly hated the niche. It is almost always because the creator failed to establish the gap between what the viewer currently knows, and what they are about to see. This gap is the core of the Attention Loop." },
                { type: "stats", items: [
                    { value: "①", label: "Tension",    sub: "Show a gap, conflict, or broken state immediately." },
                    { value: "②", label: "Curiosity",  sub: "Make the next step feel absolutely necessary." },
                    { value: "③", label: "Resolution", sub: "Deliver a satisfying outcome.", accent: true },
                ]},
                { type: "body", text: "This loop explains why a 15-second clip of someone power-washing a dirty rug can drastically outperform a brilliant, heavily researched, but poorly structured 40-minute software tutorial in raw watch behavior. The format changes. The human attention mechanics do not. The rug video establishes immediate tension (it is filthy), curiosity (how clean can it get?), and resolution (the satisfying reveal). The software tutorial often just lists facts." },
            ],
        },
        {
            h2: "Case: Framing beats topic",
            blocks: [
                { type: "body", text: "To understand how little the niche matters compared to the framing, imagine a web developer showing off the exact same coding project with two entirely different openings." },
                { type: "body", text: "Version 1 starts with: 'How I built a dashboard using React and Tailwind CSS.' This is clear, but narrow. It appeals strictly to the intellect. It will only ever reach people who woke up that morning actively wanting to learn React. You have confined yourself to the educational niche." },
                { type: "body", text: "Version 2 starts with: 'This UI is fundamentally broken, and it is costing the company money. I have 4 hours to fix it live.' This creates immediate tension, high curiosity, and the promise of an obvious payoff. It appeals to instinct. Even someone who doesn't code might watch just to see if you succeed against the ticking clock." },
                { type: "body", text: "Same skills. Same creator. Same technical content. Totally different reaction profile and potential reach. The big variable is framing, not niche purity. You took a 'coding' topic and wrapped it in a 'high-stakes challenge' format. The format is what scales." },
                { type: "quote", text: "Distribution follows retention and satisfaction signals first. If a piece of content keeps people watching and reacting, the algorithm will force it to escape its original niche bubble to find the ceiling of its appeal." },
            ],
        },
        {
            h2: "Your real job: Design attention",
            blocks: [
                { type: "body", text: "Once you internalize this, your entire workflow changes. A better question is no longer 'what topic should I pick today?' It becomes 'how do I structure this raw information so that a stranger feels biologically compelled to continue watching?'" },
                { type: "body", text: "This is not a call for cheap clickbait. Clickbait promises a tension it never resolves, which ruins long-term trust. Designing attention is about understanding how people process information in an infinitely crowded feed. It is about respecting their time enough to remove the boring parts and highlight the stakes." },
                { type: "body", text: "Creators who win over a five-year horizon usually become masters at pacing curiosity. They learn how to withhold just enough information to keep the viewer leaning forward, while giving them enough micro-payoffs to prevent frustration. They are not just sharing expertise; they are engineering an emotional timeline." },
            ],
        },
        {
            h2: "How this connects to monetization",
            blocks: [
                { type: "body", text: "Nobody tells you this part: framing affects the money too, not just the vanity metrics. Better framing usually lifts viewer retention and watch depth drastically. On modern platforms, watch depth directly influences how many ad opportunities are actually served to the viewer during a long-form video." },
                { type: "body", text: "Furthermore, when you use universal emotional drivers (like the challenge format, the transformation format, or the mystery format), you attract a broader, often older demographic than your strict niche might dictate. This demographic often carries a significantly higher CPM (Cost Per Mille) from advertisers." },
                { type: "body", text: "So when a creator complains and says, 'my topic just does not monetize well,' the underlying issue is almost always how the topic is packaged before it is ever an issue of the niche itself. Change the packaging, change the audience, change the revenue." },
                { type: "callout", kind: "tip", title: "Practical move", text: "Check your first 3 seconds before publishing anything this week. If there is no tension, no visual gap, and no clear 'what happens next?' established in those first 72 frames, the attention loop has not started. Cut the intro and start at the exact moment things get complicated." },
            ],
        },
    ],
    authorBio: "I break down repeatable content patterns that actually move retention and reach, especially for creators tired of vague growth advice. My focus is on the intersection of behavioral psychology and algorithmic distribution.",
    related: [
        { id: "three-pillars-viral", title: "The 3 Pillars of Viral Content: Transformation, Simplicity, and Stimulation", category: "Strategy",   thumb: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&auto=format&fit=crop" },
        { id: "hook-killing-videos", title: "Why Your Hook Is Killing Your Videos (And How to Fix It)",                     category: "Production", thumb: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// FRENCH
// ─────────────────────────────────────────────────────────────────────────────
export const fr = {
    hero: {
        title:   "Pourquoi votre niche n'a aucune importance (et ce qui crée vraiment la viralité)",
        lead:    "On n'arrête pas de répéter 'choisissez une niche et n'en bougez plus.' Ce conseil n'est pas inutile, mais il est profondément incomplet. Ce qui décide vraiment de la portée aujourd'hui, c'est la vitesse à laquelle le contenu crée une réaction.",
        cover:   { src: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=800&auto=format&fit=crop", alt: "Connexions neuronales abstraites représentant l'engagement" },
    },
    lead: "S'en tenir à un seul sujet aide à la clarté, certes. Mais les spectateurs n'ouvrent pas une plateforme en se disant : 'J'espère que ceci correspond à une taxonomie de niche précise.' Ils cliquent parce que quelque chose semble intéressant sur le moment. L'ère des niches rigides est révolue.",
    sections: [
        {
            h2: "Le mythe de la 'Niche Parfaite'",
            blocks: [
                { type: "body", text: "Pendant la dernière décennie, le conseil pour bâtir une audience était partout le même : trouvez une sous-catégorie microscopique et dominez-la. 'Astuces Excel pour comptables gauchers.' 'Pâtisserie vegan keto pour marathoniens.' La théorie voulait que les algorithmes aient besoin d'une catégorisation stricte pour savoir à qui servir votre contenu. Si vous déviiez, vous perturbiez la machine." },
                { type: "body", text: "Ce n'est plus du tout ainsi que fonctionnent les moteurs de recommandation modernes. Regardez suffisamment de publications performantes sur YouTube, TikTok et X, et vous verrez le même phénomène : des sujets très différents peuvent attirer exactement la même démographie si l'emballage et la livraison émotionnelle sont forts." },
                { type: "body", text: "En 2026, les algorithmes ne regroupent plus le contenu uniquement par sémantique ou mots-clés ; ils le regroupent par résonance comportementale. Les gens ne consomment pas que des sujets. Ils consomment des stimuli. Curiosité, surprise, soulagement, récompense. La plateforme traque ces réactions psychologiques bien mieux qu'elle ne lit vos tags." },
                { type: "callout", kind: "info", title: "Ce qui génère vraiment la viralité", text: "Les contenus qui voyagent sans effort touchent généralement quatre points : **La curiosité** (une accroche non résolue), **La surprise** (un retournement), **La satisfaction** (un résultat visible), et **La complétion** (une fin nette). Maîtrisez ces quatre points, et votre sujet devient juste la méthode de livraison, pas la stratégie entière." },
            ],
        },
        {
            h2: "La boucle de l'attention",
            blocks: [
                { type: "body", text: "L'attention humaine est un processus mécanique. Un bon contenu fait tourner exactement la même boucle dans la tête du spectateur, peu importe la niche : 'attends... c'est quoi ça... ok je vois le problème... montre-moi le résultat maintenant.' C'est une séquence de tension cognitive et de relâchement. Différents sujets. Même schéma mental." },
                { type: "body", text: "Quand un spectateur abandonne une vidéo après huit secondes, c'est rarement parce qu'il a soudainement détesté la niche. C'est presque toujours parce que le créateur n'a pas réussi à établir l'écart entre ce que le spectateur sait, et ce qu'il est sur le point de voir." },
                { type: "stats", items: [
                    { value: "①", label: "Tension",    sub: "Montrez un vide, un conflit ou un état cassé immédiatement." },
                    { value: "②", label: "Curiosité",  sub: "Rendez l'étape suivante absolument nécessaire." },
                    { value: "③", label: "Résolution", sub: "Délivrez un résultat satisfaisant.", accent: true },
                ]},
                { type: "body", text: "Cette boucle explique pourquoi un clip de 15 secondes de quelqu'un nettoyant un tapis sale peut écraser un tutoriel logiciel de 40 minutes brillant mais mal structuré. Le format change. La mécanique de l'attention humaine ne change pas. La vidéo du tapis établit une tension (c'est sale), de la curiosité (jusqu'à quel point ça peut devenir propre ?) et une résolution (la révélation). Le tutoriel se contente souvent de lister des faits." },
            ],
        },
        {
            h2: "Cas d'étude : L'angle bat le sujet",
            blocks: [
                { type: "body", text: "Pour comprendre à quel point la niche compte peu face au 'framing' (l'angle), imaginez un développeur montrant exactement le même projet de code avec deux introductions différentes." },
                { type: "body", text: "La version 1 commence par : 'Comment j'ai construit un dashboard avec React et Tailwind'. C'est clair, mais étroit. Cela fait appel uniquement à l'intellect. Vous ne toucherez que ceux qui se sont levés ce matin-là avec l'envie d'apprendre React. Vous êtes confiné à la niche éducative." },
                { type: "body", text: "La version 2 commence par : 'Cette interface est complètement cassée, et elle fait perdre de l'argent à l'entreprise. J'ai 4 heures pour la réparer en direct'. Cela crée une tension immédiate et la promesse d'une récompense claire. Même quelqu'un qui ne code pas pourrait regarder juste pour voir si vous réussissez contre la montre." },
                { type: "body", text: "Mêmes compétences. Même créateur. Même contenu technique. Profil de réaction et portée potentielle totalement différents. La grande variable est l'angle, pas la pureté de la niche." },
                { type: "quote", text: "La distribution suit d'abord les signaux de rétention et de satisfaction. Si un contenu fait réagir et retient les gens, l'algorithme le forcera à sortir de sa bulle de niche pour trouver le plafond de son attractivité." },
            ],
        },
        {
            h2: "Votre vrai métier : designer l'attention",
            blocks: [
                { type: "body", text: "Une fois que vous intégrez cela, tout votre processus de travail change. La question n'est plus 'quel sujet dois-je choisir aujourd'hui ?' mais 'comment structurer cette information brute pour qu'un inconnu se sente biologiquement obligé de continuer à regarder ?'" },
                { type: "body", text: "Il ne s'agit pas d'un appel au clic facile (clickbait). Le clickbait promet une tension qu'il ne résout jamais, ce qui détruit la confiance. Designer l'attention, c'est comprendre comment les gens traitent l'information dans un flux saturé. C'est respecter leur temps en retirant les passages ennuyeux pour souligner les enjeux." },
                { type: "body", text: "Les créateurs qui durent deviennent des maîtres dans la gestion de la curiosité. Ils apprennent à retenir juste assez d'information pour garder le spectateur en haleine, tout en offrant assez de micro-récompenses pour éviter la frustration. Ils ne partagent pas qu'une expertise ; ils ingénierisent une ligne du temps émotionnelle." },
            ],
        },
        {
            h2: "Le lien avec la monétisation",
            blocks: [
                { type: "body", text: "Personne ne vous dit cette partie : l'angle affecte aussi l'argent, pas seulement les vues. Un meilleur angle augmente drastiquement la rétention et la profondeur de visionnage. Sur les plateformes modernes, la profondeur de visionnage influence directement le nombre d'espaces publicitaires servis au spectateur." },
                { type: "body", text: "De plus, quand vous utilisez des moteurs émotionnels universels (comme le format 'défi' ou 'transformation'), vous attirez une démographie plus large et souvent plus âgée que ce que votre niche stricte dicterait. Cette audience a souvent un CPM (Coût Pour Mille) bien plus élevé." },
                { type: "body", text: "Donc quand un créateur dit 'mon sujet ne monétise pas bien', le problème de fond est presque toujours la façon dont le sujet est emballé, avant même d'être un problème de niche. Changez l'emballage, changez l'audience, changez les revenus." },
                { type: "callout", kind: "tip", title: "Action pratique", text: "Vérifiez vos 3 premières secondes avant de publier. S'il n'y a aucune tension, aucun vide visuel, et aucun 'que va-t-il se passer ensuite ?' clair établi dans ces 72 premières images, la boucle d'attention n'a pas commencé. Coupez l'intro et commencez au moment exact où les choses se compliquent." },
            ],
        },
    ],
    authorBio: "Je décortique les schémas de contenu répétables qui font vraiment bouger la rétention et la portée, spécialement pour les créateurs fatigués des conseils de croissance vagues.",
    related: [
        { id: "three-pillars-viral", title: "Les 3 piliers du contenu viral : transformation, simplicité et stimulation", category: "Stratégie",   thumb: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&auto=format&fit=crop" },
        { id: "hook-killing-videos", title: "Pourquoi votre accroche tue vos vidéos (et comment y remédier)",            category: "Production", thumb: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GERMAN
// ─────────────────────────────────────────────────────────────────────────────
export const de = {
    hero: {
        title:   "Warum deine Nische keine Rolle spielt (Und was wirklich virale Inhalte antreibt)",
        lead:    "Die Leute wiederholen ständig: 'Wähle eine Nische und bleib dabei.' Dieser Rat ist nicht nutzlos, aber zutiefst unvollständig. Was heute wirklich über die Reichweite entscheidet, ist die Frage, ob der Inhalt schnell genug eine Reaktion hervorruft.",
        cover:   { src: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=800&auto=format&fit=crop", alt: "Abstrakte Gehirn- und neuronale Verbindungen" },
    },
    lead: "Sich an ein Thema zu halten, kann der Klarheit dienen, sicher. Aber die Zuschauer öffnen keine Plattform mit dem Gedanken: 'Hoffentlich passt das in eine Nischen-Taxonomie.' Sie klicken, weil sich etwas in diesem Moment interessant anfühlt. Die Ära der starren Nischen ist vorbei.",
    sections: [
        {
            h2: "Der Mythos der 'Perfekten Nische'",
            blocks: [
                { type: "body", text: "Im letzten Jahrzehnt war der Rat zum Aufbau einer Zielgruppe überall gleich: Finde eine mikroskopisch kleine Unterkategorie und dominiere sie komplett. 'Excel-Tipps für linkshändige Buchhalter.' Die Theorie war, dass Algorithmen eine strikte Kategorisierung brauchten, um zu wissen, wem sie deinen Inhalt zeigen sollten." },
                { type: "body", text: "So funktionieren moderne Empfehlungsmaschinen nicht mehr. Wenn man sich genug erfolgreiche Beiträge auf YouTube, TikTok und X ansieht, erkennt man genau dasselbe Phänomen: Völlig unterschiedliche Themen können genau dieselbe Zielgruppe anziehen, wenn die Verpackung und die emotionale Vermittlung stark sind." },
                { type: "body", text: "Algorithmen im Jahr 2026 gruppieren Inhalte nicht mehr nur nach Semantik oder Schlüsselwörtern; sie gruppieren sie nach verhaltensbezogener Resonanz. Die Menschen konsumieren nicht nur Themen. Sie konsumieren Reize. Neugier, Überraschung, Erleichterung, Belohnung. Die Plattform verfolgt diese unsichtbaren psychologischen Reaktionen viel besser als jedes Kategorie-Label, das du in deine Tags packst." },
                { type: "callout", kind: "info", title: "Was Viralität wirklich antreibt", text: "Die Inhalte, die sich mühelos verbreiten, treffen normalerweise vier spezifische Punkte: **Neugier** (ein ungelöster Hook), **Überraschung** (eine plötzliche Wendung), **Zufriedenheit** (ein sichtbares Ergebnis) und **Abschluss** (ein sauberes Ende). Wenn du diese vier beherrschst, wird dein Thema lediglich zur Liefermethode, nicht zur gesamten Strategie." },
            ],
        },
        {
            h2: "Die Aufmerksamkeits-Schleife",
            blocks: [
                { type: "body", text: "Menschliche Aufmerksamkeit ist ein mechanischer Prozess. Guter Content lässt immer wieder genau denselben Kreislauf im Kopf des Zuschauers ablaufen, unabhängig davon, in welcher Nische du dich bewegst: 'Moment... was ist das... okay, ich verstehe das Problem... zeig mir jetzt das Ergebnis.' Es ist eine Sequenz von kognitiver Spannung und Entspannung." },
                { type: "body", text: "Wenn ein Zuschauer ein Video nach acht Sekunden abbricht, liegt das selten daran, dass er die Nische plötzlich hasst. Es liegt fast immer daran, dass der Creator es versäumt hat, die Lücke zwischen dem zu schließen, was der Zuschauer aktuell weiß, und dem, was er gleich sehen wird." },
                { type: "stats", items: [
                    { value: "①", label: "Spannung",   sub: "Zeige sofort eine Lücke, einen Konflikt oder einen kaputten Zustand." },
                    { value: "②", label: "Neugier",    sub: "Lass den nächsten Schritt absolut notwendig erscheinen." },
                    { value: "③", label: "Auflösung",  sub: "Liefere ein befriedigendes Ergebnis.", accent: true },
                ]},
                { type: "body", text: "Diese Schleife erklärt, warum ein 15-sekündiger Clip, in dem jemand einen schmutzigen Teppich kärchert, ein brillantes, hervorragend recherchiertes, aber schlecht strukturiertes 40-minütiges Software-Tutorial beim reinen Sehverhalten drastisch übertreffen kann. Das Format ändert sich. Die Mechanismen der menschlichen Aufmerksamkeit nicht." },
            ],
        },
        {
            h2: "Fallbeispiel: Framing schlägt Thema",
            blocks: [
                { type: "body", text: "Um zu verstehen, wie wenig die Nische im Vergleich zum Framing zählt, stell dir einen Webentwickler vor, der genau dasselbe Coding-Projekt mit zwei völlig unterschiedlichen Eröffnungen präsentiert." },
                { type: "body", text: "Version 1 beginnt mit: 'Wie ich ein Dashboard mit React und Tailwind CSS gebaut habe.' Das ist klar, aber eng. Es spricht ausschließlich den Intellekt an. Es wird nur Leute erreichen, die an diesem Morgen aufgewacht sind und aktiv React lernen wollten." },
                { type: "body", text: "Version 2 beginnt mit: 'Dieses UI ist fundamental kaputt und kostet das Unternehmen Geld. Ich habe 4 Stunden, um es live zu reparieren.' Das erzeugt sofortige Spannung, hohe Neugier und das Versprechen einer offensichtlichen Belohnung. Selbst jemand, der nicht programmiert, könnte zuschauen, nur um zu sehen, ob du gegen die tickende Uhr erfolgreich bist." },
                { type: "body", text: "Gleiche Fähigkeiten. Gleicher Creator. Gleicher technischer Inhalt. Völlig anderes Reaktionsprofil. Die große Variable ist das Framing, nicht die Reinheit der Nische." },
                { type: "quote", text: "Die Distribution folgt zuerst den Retentions- und Zufriedenheitssignalen. Wenn ein Inhalt die Leute dazu bringt, weiterzuschauen und zu reagieren, zwingt der Algorithmus ihn, seine ursprüngliche Nischenblase zu verlassen." },
            ],
        },
        {
            h2: "Dein wahrer Job: Aufmerksamkeit designen",
            blocks: [
                { type: "body", text: "Sobald du dies verinnerlicht hast, ändert sich dein gesamter Workflow. Eine bessere Frage ist nicht mehr 'Welches Thema soll ich heute wählen?' Sie lautet: 'Wie strukturiere ich diese Rohinformationen so, dass sich ein Fremder biologisch gezwungen fühlt, weiterzuschauen?'" },
                { type: "body", text: "Dies ist kein Aufruf zu billigem Clickbait. Clickbait verspricht eine Spannung, die es nie auflöst, was das langfristige Vertrauen zerstört. Aufmerksamkeit zu designen bedeutet zu verstehen, wie Menschen Informationen in einem unendlich überfüllten Feed verarbeiten." },
                { type: "body", text: "Creator, die über einen Zeitraum von fünf Jahren gewinnen, werden meist zu Meistern im Pacing der Neugier. Sie lernen, genau genug Informationen zurückzuhalten, um den Zuschauer nach vorne gebeugt zu halten, und ihm gleichzeitig genug Mikro-Belohnungen zu geben, um Frustration zu vermeiden." },
            ],
        },
        {
            h2: "Wie das mit der Monetarisierung zusammenhängt",
            blocks: [
                { type: "body", text: "Niemand erzählt dir diesen Teil: Das Framing beeinflusst auch das Geld, nicht nur die Eitelkeits-Metriken. Ein besseres Framing erhöht in der Regel die Zuschauerbindung und die Sehtiefe drastisch. Auf modernen Plattformen beeinflusst die Sehtiefe direkt, wie viele Werbemöglichkeiten dem Zuschauer tatsächlich ausgespielt werden." },
                { type: "body", text: "Wenn du außerdem universelle emotionale Treiber (wie das Challenge-Format oder das Transformations-Format) nutzt, ziehst du eine breitere, oft ältere demografische Gruppe an, als deine strikte Nische vorgeben würde. Diese Zielgruppe bringt oft einen deutlich höheren CPM (Cost Per Mille) von Werbetreibenden mit sich." },
                { type: "body", text: "Wenn also ein Creator sagt: 'Mein Thema monetarisiert einfach nicht gut', ist das zugrundeliegende Problem fast immer, wie das Thema verpackt ist, bevor es jemals ein Problem der Nische selbst ist." },
                { type: "callout", kind: "tip", title: "Praktischer Schritt", text: "Überprüfe deine ersten 3 Sekunden, bevor du diese Woche etwas veröffentlichst. Wenn es in diesen ersten 72 Frames keine Spannung, keine visuelle Lücke und kein klares 'Was passiert als Nächstes?' gibt, hat die Aufmerksamkeits-Schleife noch nicht begonnen. Schneide das Intro weg und beginne genau in dem Moment, in dem die Dinge kompliziert werden." },
            ],
        },
    ],
    authorBio: "Ich breche wiederholbare Inhaltsmuster auf, die Retention und Reichweite tatsächlich bewegen, insbesondere für Creator, die vage Wachstumstipps satt haben.",
    related: [
        { id: "three-pillars-viral", title: "Die 3 Säulen viralen Contents: Transformation, Einfachheit und Stimulation", category: "Strategie",   thumb: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&auto=format&fit=crop" },
        { id: "hook-killing-videos", title: "Warum dein Hook deine Videos tötet (und wie du es behebst)",                 category: "Produktion", thumb: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// JAPANESE
// ─────────────────────────────────────────────────────────────────────────────
export const ja = {
    hero: {
        title:   "ニッチが重要ではない理由（そして実際にバイラルコンテンツを動かすもの）",
        lead:    "人々は「1つのニッチを選び、そこにとどまれ」と繰り返し言います。そのアドバイスは無駄ではありませんが、完全に不十分です。現在、リーチを決定するのは、コンテンツが十分な速度で反応を生み出すかどうかです。",
        cover:   { src: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=800&auto=format&fit=crop", alt: "エンゲージメントを表す抽象的な脳と神経のつながり" },
    },
    lead: "1つのトピックにこだわることは、明確さには役立ちます。しかし、視聴者は「これがニッチの分類に合うといいな」と思ってプラットフォームを開くわけではありません。その瞬間に面白いと感じるからクリックするのです。厳格なニッチの時代は終わりました。",
    sections: [
        {
            h2: "「完璧なニッチ」の神話",
            blocks: [
                { type: "body", text: "過去10年間、オーディエンス構築のアドバイスはどこでも同じでした。ごく小さなサブカテゴリを見つけ、そこを完全に支配せよ、というものです。「左利きの会計士のためのExcelのヒント」「マラソンランナーのためのヴィーガン・ケト・ベーキング」。理論としては、アルゴリズムがあなたのコンテンツを誰に届けるべきかを知るために厳格な分類が必要だ、というものでした。" },
                { type: "body", text: "しかし、これはもはや最新のレコメンドエンジンの機能の仕方ではありません。YouTube、TikTok、Xで高いパフォーマンスを示している投稿を十分に見れば、全く同じ現象に気づくでしょう。パッケージングと感情的な伝達が強力であれば、全く異なるトピックでも全く同じ視聴者層を引き付けることができるのです。" },
                { type: "body", text: "2026年のアルゴリズムは、意味論やキーワードだけでコンテンツをクラスタリングすることはありません。行動の共鳴によってクラスタリングします。人々はトピックだけを消費しているわけではありません。彼らは刺激（好奇心、驚き、安堵、報酬）を消費しているのです。プラットフォームは、あなたがタグに入れたどんなカテゴリラベルよりも、これらの目に見えない心理的反応をはるかに正確に追跡します。" },
                { type: "callout", kind: "info", title: "実際にバイラルを促進するもの", text: "軽々と広がるコンテンツは、通常、4つの特定のビートを打ちます。**好奇心**（未解決のフック）、**驚き**（急展開）、**満足**（目に見える結果）、そして**完了**（脳をリセットするきれいな結末）です。この4つを完璧にこなせば、トピックは単なる伝達方法になり、戦略全体ではなくなります。" },
            ],
        },
        {
            h2: "アテンション・ループ（注意のループ）",
            blocks: [
                { type: "body", text: "人間の注意は機械的なプロセスです。良いコンテンツは、あなたがどのニッチで活動していようとも、視聴者の頭の中で全く同じループを実行し続けます。「待って…これは何だ…なるほど、問題はわかった…さあ、結果を見せてくれ」。それは認知的緊張と解放のシーケンスです。トピックは違っても、精神的なパターンは同じです。" },
                { type: "body", text: "視聴者が8秒で動画から離脱する場合、ニッチが急に嫌いになったからではありません。ほとんどの場合、クリエイターが、視聴者が現在知っていることと、これから見るものとの間の「ギャップ」を確立できなかったからです。" },
                { type: "stats", items: [
                    { value: "①", label: "テンション（緊張）", sub: "ギャップ、対立、または壊れた状態を即座に示す。" },
                    { value: "②", label: "好奇心",              sub: "次のステップが絶対的に必要だと感じさせる。" },
                    { value: "③", label: "解決",                sub: "満足のいく結果を提供する。", accent: true },
                ]},
                { type: "body", text: "このループにより、汚れたラグを高圧洗浄する15秒のクリップが、素晴らしく調査されているが構造の悪い40分のソフトウェアチュートリアルを、純粋な視聴行動において圧倒的に凌駕する理由が説明できます。フォーマットは変わります。人間の注意のメカニズムは変わりません。ラグの動画は即座に緊張（汚い）、好奇心（どれだけきれいになるか？）、そして解決（満足のいく公開）を確立します。ソフトウェアチュートリアルは、しばしば事実を羅列するだけです。" },
            ],
        },
        {
            h2: "ケーススタディ：フレーミングはトピックに勝る",
            blocks: [
                { type: "body", text: "フレーミング（見せ方）に比べてニッチがいかに重要でないかを理解するために、ウェブ開発者が全く同じコーディングプロジェクトを全く異なる2つのオープニングで披露するところを想像してみてください。" },
                { type: "body", text: "バージョン1の始まり：「ReactとTailwind CSSを使ってダッシュボードを構築する方法」。これは明確ですが、狭いです。知性にのみ訴えかけます。その朝起きて、積極的にReactを学びたいと思った人にしか届きません。あなたは自分自身を教育ニッチに閉じ込めてしまいました。" },
                { type: "body", text: "バージョン2の始まり：「このUIは根本的に壊れており、会社に損失を与えています。私にはライブでこれを修正するための4時間があります」。これは即座に緊張感、高い好奇心、そして明らかな報酬の約束を生み出します。本能に訴えかけます。コードを書かない人でも、あなたが刻々と過ぎる時間との戦いに勝てるかどうかを見るために視聴するかもしれません。" },
                { type: "body", text: "同じスキル。同じクリエイター。同じ技術的コンテンツ。しかし、反応のプロファイルと潜在的なリーチは全く異なります。大きな変数はフレーミングであり、ニッチの純度ではありません。" },
                { type: "quote", text: "配信は、まず維持率と満足度のシグナルに従います。コンテンツが人々を惹きつけ、反応させ続けるなら、アルゴリズムはその魅力を最大限に引き出すために、元のニッチのバブルから抜け出すことを強制します。" },
            ],
        },
        {
            h2: "あなたの本当の仕事：注意をデザインすること",
            blocks: [
                { type: "body", text: "これを内面化すると、ワークフロー全体が変わります。もはや「今日はどのトピックを選ぶべきか？」という質問ではありません。「見知らぬ人が生物学的に見続けざるを得ないと感じるように、この生の情報をどう構成するか？」となります。" },
                { type: "body", text: "これは安っぽいクリックベイトを求めているのではありません。クリックベイトは、決して解決しない緊張を約束し、長期的な信頼を破壊します。注意をデザインするとは、無限に混雑したフィードの中で人々が情報をどう処理するかを理解することです。退屈な部分を取り除き、リスクを強調することで、彼らの時間を尊重することです。" },
                { type: "body", text: "5年間勝ち続けるクリエイターは、通常、好奇心をコントロールするマスターになります。彼らは、視聴者を前のめりにさせるために必要なだけの情報を隠しつつ、フラストレーションを防ぐのに十分なマイクロ報酬を与える方法を学びます。彼らは単に専門知識を共有しているのではなく、感情のタイムラインを設計しているのです。" },
            ],
        },
        {
            h2: "これがどのように収益化に結びつくか",
            blocks: [
                { type: "body", text: "誰もこの部分を教えてくれません。フレーミングは表面的な指標だけでなく、お金にも影響を与えます。より良いフレーミングは、通常、視聴者の維持率と視聴の深さを劇的に向上させます。現代のプラットフォームでは、視聴の深さは、長尺動画の再生中に視聴者に実際に表示される広告の機会の数に直接影響します。" },
                { type: "body", text: "さらに、普遍的な感情の原動力（チャレンジフォーマットやトランスフォーメーションフォーマットなど）を使用すると、厳密なニッチが指示するよりも幅広く、しばしば年齢層の高いユーザーを引き付けます。この層は、広告主からのCPM（1000回表示あたりの単価）が大幅に高いことがよくあります。" },
                { type: "body", text: "したがって、クリエイターが「私のトピックは収益性が低い」と文句を言う場合、根本的な問題は、それがニッチ自体の問題である前に、ほぼ常にトピックのパッケージング方法にあります。パッケージを変えれば、オーディエンスが変わり、収益が変わります。" },
                { type: "callout", kind: "tip", title: "実践的なアクション", text: "今週何かを公開する前に、最初の3秒間をチェックしてください。最初の72フレームの間に、緊張感がなく、視覚的なギャップがなく、明確な「次は何が起こるのか？」が確立されていなければ、注意のループは始まっていません。イントロをカットし、物事が複雑になるまさにその瞬間から始めてください。" },
            ],
        },
    ],
    authorBio: "漠然とした成長アドバイスにうんざりしているクリエイターのために、視聴維持率とリーチを実際に動かす、再現可能なコンテンツパターンを分解します。",
    related: [
        { id: "three-pillars-viral", title: "バイラルコンテンツの3つの柱：変容、シンプルさ、刺激",       category: "戦略",   thumb: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&auto=format&fit=crop" },
        { id: "hook-killing-videos", title: "なぜあなたのフックが動画を台無しにしているのか（修正方法）", category: "制作",   thumb: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?w=400&auto=format&fit=crop" },
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