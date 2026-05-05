// src/app/[lang]/blog/content/hook-killing-videos.js
// ─────────────────────────────────────────────────────────────────────────────
// Article multilingue : "Why Your Hook Is Killing Your Videos (And How to Fix It)"
// Langues : en, fr, de, ja
// ─────────────────────────────────────────────────────────────────────────────

export const articleMeta = {
    id:       "hook-killing-videos",
    slug:     "hook-killing-videos",
    title: {
        en: "Why Your Hook Is Killing Your Videos (And How to Fix It)",
        fr: "Pourquoi votre accroche tue vos vidéos (et comment y remédier)",
        de: "Warum dein Hook deine Videos tötet (und wie du es behebst)",
        ja: "なぜあなたのフックが動画を台無しにしているのか（そしてその修正方法）",
    },
    category: { en: "Production", fr: "Production", de: "Produktion", ja: "制作" },
    date:     { en: "March 14, 2026", fr: "14 mars 2026", de: "14. März 2026", ja: "2026年3月14日" },
    readTime: { en: "7 min read", fr: "7 min de lecture", de: "7 Min. Lesezeit", ja: "7分で読める" },
    thumb:    "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop",
    seo: {
        en: {
            title:       "Why Your Hook Is Killing Your Videos — And How to Fix It",
            description: "You have less than one second to earn attention. If your videos are getting swiped away early, the hook is usually the first thing to fix. Here is how to make the opening work.",
            image:       "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1200",
        },
        fr: {
            title:       "Pourquoi votre accroche tue vos vidéos — Et comment y remédier",
            description: "Vous avez moins d'une seconde pour capter l'attention. Si vos vidéos sont balayées tôt, l'accroche est la première chose à réparer. Voici comment réussir votre ouverture.",
            image:       "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1200",
        },
        de: {
            title:       "Warum dein Hook deine Videos tötet — Und wie du es behebst",
            description: "Du hast weniger als eine Sekunde, um Aufmerksamkeit zu gewinnen. Wenn deine Videos früh weggewischt werden, ist der Hook das Erste, was du reparieren musst.",
            image:       "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1200",
        },
        ja: {
            title:       "なぜあなたのフックが動画を台無しにしているのか — その修正方法",
            description: "注意を引くための時間は1秒未満です。動画がすぐにスワイプされてしまう場合、最初に修正すべきはフックです。オープニングを機能させる方法を紹介します。",
            image:       "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1200",
        },
    },
    author: {
        en: { name: "Editorial Team", role: "Content Strategy" },
        fr: { name: "Équipe éditoriale", role: "Stratégie de contenu" },
        de: { name: "Redaktion", role: "Content-Strategie" },
        ja: { name: "編集チーム", role: "コンテンツ戦略" },
    },
    tags: {
        en: ["Hook", "First Second", "Production", "Swipe Rate", "Pattern Interrupt"],
        fr: ["Accroche", "Première Seconde", "Production", "Taux de Swipe", "Pattern Interrupt"],
        de: ["Hook", "Erste Sekunde", "Produktion", "Swipe-Rate", "Musterunterbrechung"],
        ja: ["フック", "最初の1秒", "制作", "スワイプ率", "パターンインタラプト"],
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────
export const en = {
    hero: {
        title:   "Why Your Hook Is Killing Your Videos (And How to Fix It)",
        lead:    "If people swipe in the first second, your idea is not always the issue. The opening is. A weak hook can kill a good video before it even starts.",
        cover:   { src: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop", alt: "First frame hook strategy" },
    },
    lead: "In short-form content, the first second is the audition. Viewers decide fast. Their decision is usually based on what they see first, not what your overarching topic is.",
    sections: [
        {
            h2: "The Economics of the First Second",
            blocks: [
                { type: "body", text: "Every video platform today operates on an algorithmic sorting mechanism that heavily weights early retention. When a user scrolls into your video, a microscopic transaction takes place. You are asking for their time; they are demanding immediate proof that your video is worth it. This transaction happens in under 1.5 seconds." },
                { type: "body", text: "Many creators spend ninety percent of their production time writing the core script, setting up the lighting, and editing the body of the video. They treat the hook as an afterthought—a quick introductory sentence. This is mathematically backwards." },
                { type: "callout", kind: "danger", title: "If the hook fails", text: "Most videos do not get a second chance after a weak opening. Early swipes send a catastrophic signal to the algorithm, and distribution cools down quickly. Even if the middle of your video is a masterpiece, nobody will ever see it." },
                { type: "body", text: "Hook quality is not just a creative preference. It changes the fundamental economics of your channel. If your 0-to-3 second drop-off is high, you are leaking performance at the very top of the funnel. Fixing the hook is the highest-leverage activity you can undertake in video production." },
            ],
        },
        {
            h2: "Rule 1: Open With Something Happening",
            blocks: [
                { type: "body", text: "The most common mistake creators make is starting at state zero. They begin with a static shot, a deep breath, or a verbal greeting like 'Hey guys, welcome back.' In the feed, static is synonymous with boring. By the time you finish saying 'hello', the viewer has already swiped twice." },
                { type: "body", text: "You must start in medias res—in the middle of the action. Skip the setup. Start with motion, tension, or a visible, pressing problem. The visual plane needs to be active from frame one. If you are building something, show the sparks flying on the first frame, not the raw materials sitting on a desk." },
                { type: "stats", items: [
                    { value: "❌", label: "Slow intro",      sub: "'Hey guys, today we will...'" },
                    { value: "⚠️", label: "Forced context",  sub: "Explaining why the video exists" },
                    { value: "✅", label: "Instant action",  sub: "Showing the problem immediately", accent: true },
                ]},
                { type: "body", text: "Action does not necessarily mean explosions or frantic movement. It can be a sudden text pop-up, a dramatic zoom, a physical gesture, or an object being dropped. It just means the frame cannot look like a still photograph. The viewer's eye needs something to track immediately." },
            ],
        },
        {
            h2: "Rule 2: Break the Pattern Fast",
            blocks: [
                { type: "body", text: "Feeds are massive rivers of familiar patterns. People scroll in a semi-trance state. Your opening has to interrupt that pattern fast. A weird camera angle, a broken UI element, a visual contradiction, or surprising scale. Anything intentional that makes the brain stall for a fraction of a second to compute what it is looking at." },
                { type: "body", text: "However, random chaos is not a hook. Screaming at the camera or using aggressive flashing lights might interrupt the pattern, but it causes algorithmic fatigue and repels viewers. The interruption must feel deliberate and relevant to the payoff. It should be confusing for exactly one beat, and then clear the next." },
                { quote: "The brain ignores what it can predict. It pauses for what it has to explain." },
                { type: "body", text: "Pattern interrupts work best when they subvert an established format. If everyone in your niche films sitting at a desk, film from the floor looking up. If everyone uses high-energy music, use absolute dead silence for the first three seconds. Contrast is your greatest weapon in a crowded feed." },
            ],
        },
        {
            h2: "Rule 3: Make It Instantly Understandable",
            blocks: [
                { type: "body", text: "Great hooks do two contradictory jobs at the exact same time: they provide surprise, and they provide clarity. If your hook is too abstract, viewers feel stupid and leave. If it is too normal, they get bored and keep scrolling." },
                { type: "body", text: "The easiest way to achieve this balance is to anchor your hook in familiar objects. A dashboard, a web browser, a chart, a familiar tool. Start with something the viewer instantly recognizes, and then twist one single detail so it feels profoundly wrong and worth sticking around to understand." },
                { type: "callout", kind: "info", title: "The hook formula in one sentence", text: "Familiar base + Surprising condition = Strong hook. Often, that simple equation is enough to hold a viewer." },
                { type: "body", text: "For example, showing a pristine luxury car (familiar) covered entirely in mud (surprising condition). Or showing a standard spreadsheet (familiar) where every cell is rendering an error (surprising condition). The brain recognizes the object instantly, but needs the video to explain the anomaly." },
            ],
        },
        {
            h2: "The Framework for Hook Testing",
            blocks: [
                { type: "body", text: "You cannot guess your way to perfect hooks. You have to test them. Professional creators treat hooks as modular components. They will often film three different hooks for the exact same core video and test them to see which one retains the audience past the critical three-second mark." },
                { type: "code", lang: "testing framework", text: `Hook A: The Negative Frame (Focus on the pain/mistake)
Hook B: The Desired Outcome (Focus on the final result/payoff)
Hook C: The Curiosity Gap (Focus on an anomaly or weird fact)

Process:
1. Publish Hook A. Monitor 0-3s retention after 10k views.
2. If retention is < 60%, unlist or delete.
3. Re-upload with Hook B. Compare metrics.
4. Document the winning structure in your library.` },
                { type: "body", text: "Over time, this testing protocol removes the emotion from your production process. You stop being attached to your clever intros and start respecting the data. The hook is the gatekeeper. If frame one fails, the rest might as well not exist. If frame one works, you have finally earned the right to build trust." },
            ],
        },
    ],
    authorBio: "I study what makes content perform — across platforms, niches, and formats. My goal is to give creators frameworks that actually scale.",
    related: [
        { id: "analyze-viral-content", title: "How to Analyze Viral Content and Find Winning Formats", category: "Research",   thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop" },
        { id: "perfect-structure-viral", title: "The Perfect Structure of a Viral Video", category: "Production", thumb: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// FRENCH
// ─────────────────────────────────────────────────────────────────────────────
export const fr = {
    hero: {
        title:   "Pourquoi votre accroche tue vos vidéos (et comment y remédier)",
        lead:    "Si les gens balayent dès la première seconde, votre idée n'est pas toujours le problème. L'ouverture l'est. Une accroche faible peut tuer une bonne vidéo avant même qu'elle ne commence.",
        cover:   { src: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop", alt: "Stratégie d'accroche dès la première image" },
    },
    lead: "Dans les formats courts, la première seconde est une audition. Les spectateurs décident vite. Leur décision est généralement basée sur ce qu'ils voient en premier, pas sur votre sujet global.",
    sections: [
        {
            h2: "L'économie de la première seconde",
            blocks: [
                { type: "body", text: "Aujourd'hui, chaque plateforme vidéo fonctionne sur un mécanisme de tri algorithmique qui accorde un poids énorme à la rétention initiale. Lorsqu'un utilisateur tombe sur votre vidéo, une transaction microscopique a lieu. Vous demandez son temps ; il exige une preuve immédiate que votre vidéo en vaut la peine. Cette transaction se fait en moins de 1,5 seconde." },
                { type: "body", text: "Beaucoup de créateurs passent 90 % de leur temps de production à écrire le script, régler l'éclairage et monter le cœur de la vidéo. Ils traitent l'accroche comme une réflexion après coup, une simple phrase d'introduction. C'est mathématiquement une erreur." },
                { type: "callout", kind: "danger", title: "Si l'accroche échoue", text: "La plupart des vidéos n'ont pas de seconde chance après une mauvaise ouverture. Les swipes précoces envoient un signal catastrophique à l'algorithme, et la distribution s'effondre rapidement. Même si le milieu de votre vidéo est un chef-d'œuvre, personne ne le verra jamais." },
                { type: "body", text: "La qualité de l'accroche n'est pas qu'une préférence créative. Elle modifie l'économie fondamentale de votre chaîne. Si votre perte d'audience entre 0 et 3 secondes est élevée, vous fuyez de la performance tout en haut du tunnel. Réparer l'accroche est l'action la plus rentable que vous puissiez entreprendre." },
            ],
        },
        {
            h2: "Règle 1 : Ouvrir avec de l'action",
            blocks: [
                { type: "body", text: "L'erreur la plus courante est de commencer à l'état zéro. Les créateurs débutent par un plan statique, une respiration profonde, ou un 'Salut les gars, bienvenue'. Dans un fil d'actualité, statique est synonyme d'ennuyeux. Le temps que vous finissiez de dire 'bonjour', le spectateur a déjà swipé deux fois." },
                { type: "body", text: "Vous devez commencer in medias res — au milieu de l'action. Sautez la mise en place. Commencez avec du mouvement, de la tension ou un problème visible et pressant. Le plan visuel doit être actif dès la première image. Si vous construisez quelque chose, montrez les étincelles voler à la première image, pas les matériaux bruts sur un bureau." },
                { type: "stats", items: [
                    { value: "❌", label: "Intro lente",         sub: "'Salut les gars, aujourd'hui on va...'" },
                    { value: "⚠️", label: "Contexte forcé",      sub: "Expliquer pourquoi la vidéo existe" },
                    { value: "✅", label: "Action instantanée",  sub: "Montrer le problème immédiatement", accent: true },
                ]},
                { type: "body", text: "L'action ne signifie pas nécessairement des explosions. Cela peut être un texte qui surgit, un zoom dramatique, un geste physique ou un objet qui tombe. Cela signifie simplement que l'image ne peut pas ressembler à une photographie. L'œil du spectateur a besoin de quelque chose à suivre immédiatement." },
            ],
        },
        {
            h2: "Règle 2 : Briser le pattern rapidement",
            blocks: [
                { type: "body", text: "Les flux sont des rivières massives de patterns familiers. Les gens scrollent dans un état de semi-transe. Votre ouverture doit interrompre ce pattern rapidement. Un angle de caméra étrange, une interface cassée, une contradiction visuelle. N'importe quoi de délibéré qui oblige le cerveau à s'arrêter une fraction de seconde pour comprendre ce qu'il regarde." },
                { type: "body", text: "Cependant, le chaos aléatoire n'est pas une accroche. Crier face caméra peut interrompre le pattern, mais cela provoque une fatigue algorithmique. L'interruption doit sembler délibérée et pertinente par rapport à la promesse de la vidéo. Elle doit être confuse pendant exactement un temps, puis devenir claire." },
                { quote: "Le cerveau ignore ce qu'il peut prédire. Il s'arrête pour ce qu'il doit expliquer." },
                { type: "body", text: "Les interruptions de pattern fonctionnent mieux lorsqu'elles subvertissent un format établi. Si tout le monde dans votre niche filme assis à un bureau, filmez depuis le sol en regardant vers le haut. Si tout le monde utilise une musique énergique, utilisez un silence absolu. Le contraste est votre meilleure arme." },
            ],
        },
        {
            h2: "Règle 3 : Le rendre instantanément compréhensible",
            blocks: [
                { type: "body", text: "Les bonnes accroches font deux choses contradictoires en même temps : elles surprennent et elles clarifient. Si votre accroche est trop abstraite, les spectateurs se sentent stupides et partent. Si elle est trop normale, ils s'ennuient et continuent de scroller." },
                { type: "body", text: "La façon la plus simple d'atteindre cet équilibre est d'ancrer votre accroche dans des objets familiers. Un tableau de bord, un navigateur, un graphique. Commencez par quelque chose que le spectateur reconnaît, puis tordez un seul détail pour que cela semble profondément faux." },
                { type: "callout", kind: "info", title: "La formule de l'accroche", text: "Base familière + Condition surprenante = Accroche forte. Souvent, cette simple équation suffit à retenir un spectateur." },
                { type: "body", text: "Par exemple, montrer une voiture de luxe immaculée (familier) entièrement recouverte de boue (condition surprenante). Le cerveau reconnaît l'objet, mais a besoin de la vidéo pour expliquer l'anomalie." },
            ],
        },
        {
            h2: "Le framework pour tester ses accroches",
            blocks: [
                { type: "body", text: "Vous ne pouvez pas deviner les accroches parfaites. Vous devez les tester. Les créateurs professionnels traitent les accroches comme des composants modulaires. Ils filment souvent trois accroches différentes pour la même vidéo et les testent pour voir laquelle retient le public au-delà des 3 secondes critiques." },
                { type: "code", lang: "framework de test", text: `Hook A : Cadre négatif (Focus sur la douleur/l'erreur)
Hook B : Résultat désiré (Focus sur la récompense finale)
Hook C : Écart de curiosité (Focus sur une anomalie)

Processus :
1. Publiez Hook A. Observez la rétention 0-3s après 10k vues.
2. Si rétention < 60%, passez en non répertorié.
3. Republiez avec Hook B. Comparez les métriques.
4. Documentez la structure gagnante dans votre bibliothèque.` },
                { type: "body", text: "Avec le temps, ce protocole de test retire l'émotion de votre processus de production. Vous arrêtez de vous attacher à vos intros pour respecter les données. Si l'image 1 échoue, le reste n'existe pas. Si l'image 1 fonctionne, vous gagnez le droit d'instaurer la confiance." },
            ],
        },
    ],
    authorBio: "J'étudie ce qui fait performer le contenu — sur toutes les plateformes, niches et formats. Mon objectif est de donner aux créateurs des frameworks qui fonctionnent vraiment à grande échelle.",
    related: [
        { id: "analyze-viral-content", title: "Comment analyser le contenu viral et trouver les formats gagnants", category: "Recherche",   thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop" },
        { id: "perfect-structure-viral", title: "La structure parfaite d'une vidéo virale", category: "Production", thumb: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GERMAN
// ─────────────────────────────────────────────────────────────────────────────
export const de = {
    hero: {
        title:   "Warum dein Hook deine Videos tötet (und wie du es behebst)",
        lead:    "Wenn Leute in der ersten Sekunde wischen, ist nicht immer deine Idee das Problem. Es ist der Anfang. Ein schwacher Hook kann ein gutes Video töten, bevor es überhaupt beginnt.",
        cover:   { src: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop", alt: "First Frame Hook Strategie" },
    },
    lead: "Bei Kurzformaten ist die erste Sekunde das Vorsprechen. Die Zuschauer entscheiden schnell. Ihre Entscheidung basiert meistens auf dem, was sie zuerst sehen, nicht auf deinem übergeordneten Thema.",
    sections: [
        {
            h2: "Die Ökonomie der ersten Sekunde",
            blocks: [
                { type: "body", text: "Jede Videoplattform funktioniert heute über einen algorithmischen Sortiermechanismus, der die frühe Bindung stark gewichtet. Wenn ein Benutzer in dein Video scrollt, findet eine mikroskopische Transaktion statt. Du bittest um seine Zeit; er verlangt einen sofortigen Beweis, dass dein Video es wert ist. Diese Transaktion geschieht in unter 1,5 Sekunden." },
                { type: "body", text: "Viele Creator verbringen 90 Prozent ihrer Produktionszeit damit, das Skript zu schreiben, die Beleuchtung einzurichten und den Hauptteil des Videos zu bearbeiten. Sie behandeln den Hook wie einen nachträglichen Einfall. Das ist mathematisch rückwärtsgewandt." },
                { type: "callout", kind: "danger", title: "Wenn der Hook versagt", text: "Die meisten Videos bekommen nach einem schwachen Start keine zweite Chance. Frühes Wegwischen sendet ein katastrophales Signal an den Algorithmus. Selbst wenn die Mitte deines Videos ein Meisterwerk ist, wird es niemand jemals sehen." },
                { type: "body", text: "Die Qualität des Hooks ist nicht nur eine kreative Präferenz. Sie verändert die fundamentale Ökonomie deines Kanals. Den Hook zu reparieren, ist die wirkungsvollste Maßnahme, die du in der Videoproduktion ergreifen kannst." },
            ],
        },
        {
            h2: "Regel 1: Eröffne mit Bewegung",
            blocks: [
                { type: "body", text: "Der häufigste Fehler ist, bei Zustand Null zu beginnen. Ein statisches Bild, ein tiefes Einatmen oder eine verbale Begrüßung wie 'Hey Leute, willkommen zurück'. Im Feed ist statisch gleichbedeutend mit langweilig. Bis du 'Hallo' gesagt hast, hat der Zuschauer schon zweimal gewischt." },
                { type: "body", text: "Du musst in medias res beginnen — mitten in der Action. Überspringe den Aufbau. Beginne mit Bewegung, Spannung oder einem sichtbaren, drängenden Problem. Die visuelle Ebene muss ab Bild eins aktiv sein." },
                { type: "stats", items: [
                    { value: "❌", label: "Langsames Intro",       sub: "'Hey Leute, heute werden wir...'" },
                    { value: "⚠️", label: "Erzwungener Kontext",   sub: "Erklären, warum das Video existiert" },
                    { value: "✅", label: "Sofortige Aktion",      sub: "Das Problem sofort zeigen", accent: true },
                ]},
                { type: "body", text: "Aktion bedeutet nicht zwangsläufig Explosionen. Es kann ein plötzliches Text-Pop-up sein, ein dramatischer Zoom oder eine physische Geste. Es bedeutet nur, dass das Bild nicht wie ein Foto aussehen darf. Das Auge braucht sofort etwas zu verfolgen." },
            ],
        },
        {
            h2: "Regel 2: Unterbrich das Muster schnell",
            blocks: [
                { type: "body", text: "Feeds sind massive Flüsse vertrauter Muster. Die Leute scrollen in einer Art Halbtrance. Dein Anfang muss dieses Muster schnell unterbrechen. Ein seltsamer Kamerawinkel, ein kaputtes UI-Element, ein visueller Widerspruch. Alles Absichtliche, das das Gehirn zwingt, für einen Bruchteil einer Sekunde innezuhalten." },
                { type: "body", text: "Zufälliges Chaos ist jedoch kein Hook. Schreien oder blinkende Lichter verursachen algorithmische Ermüdung. Die Unterbrechung muss sich absichtlich anfühlen. Sie sollte genau einen Takt lang verwirrend sein und danach klar." },
                { quote: "Das Gehirn ignoriert, was es vorhersagen kann. Es pausiert für das, was es erklären muss." },
                { type: "body", text: "Musterunterbrechungen funktionieren am besten, wenn sie ein etabliertes Format untergraben. Wenn alle in deiner Nische am Schreibtisch sitzen, filme vom Boden nach oben. Kontrast ist deine größte Waffe." },
            ],
        },
        {
            h2: "Regel 3: Mach es sofort verständlich",
            blocks: [
                { type: "body", text: "Gute Hooks erledigen zwei widersprüchliche Aufgaben gleichzeitig: Sie bieten Überraschung und Klarheit. Ist dein Hook zu abstrakt, fühlen sich die Zuschauer dumm und gehen. Ist er zu normal, langweilen sie sich und scrollen weiter." },
                { type: "body", text: "Der einfachste Weg ist, den Hook in vertrauten Objekten zu verankern. Ein Dashboard, ein Browser, ein Diagramm. Beginne mit etwas Bekanntem und verdrehe dann ein einziges Detail, sodass es sich grundlegend falsch anfühlt." },
                { type: "callout", kind: "info", title: "Die Hook-Formel", text: "Vertraute Basis + Überraschende Bedingung = Starker Hook." },
                { type: "body", text: "Zum Beispiel: Zeige ein makelloses Luxusauto (vertraut), das komplett mit Schlamm bedeckt ist (überraschende Bedingung). Das Gehirn erkennt das Objekt sofort, braucht aber das Video, um die Anomalie zu erklären." },
            ],
        },
        {
            h2: "Das Framework für Hook-Tests",
            blocks: [
                { type: "body", text: "Du kannst dir den perfekten Hook nicht herbeiraten. Du musst testen. Professionelle Creator behandeln Hooks als modulare Komponenten. Sie filmen oft drei verschiedene Hooks für dasselbe Video und testen, welcher das Publikum hält." },
                { type: "code", lang: "Testing Framework", text: `Hook A: Der negative Rahmen (Fokus auf Fehler/Schmerz)
Hook B: Das gewünschte Ergebnis (Fokus auf Belohnung)
Hook C: Die Kuriositätslücke (Fokus auf Anomalie)

Prozess:
1. Hook A posten. 0-3s Retention nach 10k Views prüfen.
2. Wenn Retention < 60%, Video auf privat stellen.
3. Mit Hook B neu hochladen. Metriken vergleichen.
4. Gewinnendes Format dokumentieren.` },
                { type: "body", text: "Im Laufe der Zeit entfernt dieses Testprotokoll die Emotionen aus dem Produktionsprozess. Du respektierst die Daten. Der Hook ist der Torwächter. Funktioniert das erste Bild nicht, existiert der Rest nicht." },
            ],
        },
    ],
    authorBio: "Ich studiere, was Content performen lässt — plattform-, nischen- und formatübergreifend. Mein Ziel ist es, Creatorn Frameworks zu geben, die wirklich skalieren.",
    related: [
        { id: "analyze-viral-content", title: "Viralen Content analysieren und gewinnende Formate finden", category: "Analyse",   thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop" },
        { id: "perfect-structure-viral", title: "Die perfekte Struktur eines viralen Videos", category: "Produktion", thumb: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// JAPANESE
// ─────────────────────────────────────────────────────────────────────────────
export const ja = {
    hero: {
        title:   "なぜあなたのフックが動画を台無しにしているのか（そしてその修正方法）",
        lead:    "最初の1秒でスワイプされる場合、問題はアイデアではなくオープニングにあります。弱いフックは、良い動画を始まる前に殺してしまいます。",
        cover:   { src: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop", alt: "最初のフレームのフック戦略" },
    },
    lead: "ショートフォームコンテンツにおいて、最初の1秒はオーディションです。視聴者は瞬時に決断します。その決定は通常、全体的なトピックではなく、最初に見たものに基づいています。",
    sections: [
        {
            h2: "最初の1秒の経済学",
            blocks: [
                { type: "body", text: "今日のすべての動画プラットフォームは、初期の維持率を重く評価するアルゴリズムで機能しています。ユーザーがあなたの動画にスクロールしてきたとき、ミクロな取引が発生します。あなたは彼らの時間を要求し、彼らは動画の価値を即座に証明するよう要求します。この取引は1.5秒未満で行われます。" },
                { type: "body", text: "多くのクリエイターは、制作時間の90％をスクリプトの作成、照明の設定、動画本体の編集に費やします。彼らはフックを後回しの簡単な挨拶文として扱います。これは数学的に逆効果です。" },
                { type: "callout", kind: "danger", title: "フックが失敗した場合", text: "ほとんどの動画は、弱いオープニングの後に2度目のチャンスを得ることはありません。早期のスワイプはアルゴリズムに壊滅的なシグナルを送り、配信はすぐに冷え込みます。動画の中盤が傑作でも、誰も見ることはありません。" },
                { type: "body", text: "フックの品質は単なる好みの問題ではありません。チャンネルの根本的な経済性を変えます。0から3秒の離脱率が高い場合、ファネルの最上部でパフォーマンスが漏れている状態です。フックを修正することは、最もレバレッジの高い活動です。" },
            ],
        },
        {
            h2: "ルール1：動きのある状態で始める",
            blocks: [
                { type: "body", text: "最もよくある間違いは「状態ゼロ」から始めることです。静止画、深呼吸、または「こんにちは皆さん」といった挨拶から始めます。フィードにおいて静止は退屈と同義です。「こんにちは」と言い終わる頃には、視聴者はすでに2回スワイプしています。" },
                { type: "body", text: "行動の真っ只中（in medias res）から始める必要があります。セットアップはスキップしてください。動き、緊張感、または目に見える差し迫った問題から始めます。最初のフレームから画面がアクティブである必要があります。何かを作っているなら、机の上の材料ではなく、火花が散っているところを見せてください。" },
                { type: "stats", items: [
                    { value: "❌", label: "遅いイントロ",       sub: "「皆さん、今日は…」" },
                    { value: "⚠️", label: "強引なコンテキスト", sub: "動画の存在理由を説明する" },
                    { value: "✅", label: "即座のアクション",   sub: "問題を即座に表示する", accent: true },
                ]},
                { type: "body", text: "アクションは必ずしも爆発を意味しません。突然のテキストポップアップ、ドラマチックなズーム、または物が落ちる様子などです。重要なのは、写真のように見えないことです。視聴者の目には即座に追跡するものが必要です。" },
            ],
        },
        {
            h2: "ルール2：パターンを素早く壊す",
            blocks: [
                { type: "body", text: "フィードはおなじみのパターンが流れる巨大な川です。人々は半トランス状態でスクロールしています。オープニングは、そのパターンを素早く中断する必要があります。奇妙なカメラアングル、壊れたUI要素、または視覚的な矛盾。脳が「何を見ているのか」を計算するために一瞬停止せざるを得ない意図的な工夫です。" },
                { type: "body", text: "ただし、ランダムなカオスはフックではありません。カメラに向かって叫んだり、激しい点滅光を使用したりすると、アルゴリズムの疲労を引き起こし、視聴者を遠ざけます。中断は意図的で、ペイオフに関連していると感じられる必要があります。1拍だけ混乱させ、次の瞬間には明確になるべきです。" },
                { quote: "脳は予測できるものを無視します。説明が必要なものに対して立ち止まります。" },
                { type: "body", text: "パターンインタラプトは、確立されたフォーマットを覆すときに最も効果的です。あなたのニッチの全員が机に座って撮影しているなら、床から見上げて撮影してください。コントラストが最大の武器です。" },
            ],
        },
        {
            h2: "ルール3：即座に理解できるようにする",
            blocks: [
                { type: "body", text: "優れたフックは「驚き」と「明確さ」という2つの矛盾した仕事を同時にこなします。フックが抽象的すぎると視聴者は混乱して離れ、普通すぎると退屈してスクロールし続けます。" },
                { type: "body", text: "このバランスを達成する最も簡単な方法は、見慣れたオブジェクトにフックを固定することです。ダッシュボード、ブラウザ、グラフ。視聴者が即座に認識できるものから始め、1つの詳細だけをねじ曲げて、それがひどく間違っていて理解する価値があると感じさせます。" },
                { type: "callout", kind: "info", title: "フックの公式", text: "馴染みのある基盤 + 驚くべき条件 = 強力なフック。" },
                { type: "body", text: "例えば、新品の高級車（馴染みがある）が完全に泥で覆われている（驚くべき条件）を見せることです。脳は対象を即座に認識しますが、その異常を説明するために動画を必要とします。" },
            ],
        },
        {
            h2: "フックテストのフレームワーク",
            blocks: [
                { type: "body", text: "完璧なフックを推測することはできません。テストする必要があります。プロのクリエイターはフックをモジュール式のコンポーネントとして扱います。彼らは同じ動画に対して3つの異なるフックを撮影し、どれが視聴者を維持するかテストします。" },
                { type: "code", lang: "テストフレームワーク", text: `フック A: ネガティブフレーム（痛みやミスに焦点）
フック B: 望ましい結果（最終的な報酬に焦点）
フック C: 好奇心のギャップ（異常な事実に焦点）

プロセス：
1. フックAを公開。1万回再生後の0〜3秒の維持率を監視。
2. 維持率が60%未満なら非公開にする。
3. フックBで再アップロードし、指標を比較。
4. 勝った構造をライブラリに文書化する。` },
                { type: "body", text: "時間が経つにつれて、このテストプロトコルは制作プロセスから感情を取り除きます。フックはゲートキーパーです。最初のフレームが機能しなければ、残りは存在しないのと同じです。" },
            ],
        },
    ],
    authorBio: "プラットフォーム、ニッチ、フォーマットを超えて何がコンテンツをパフォームさせるかを研究しています。クリエイターに本当にスケールするフレームワークを提供することが目標です。",
    related: [
        { id: "analyze-viral-content", title: "バイラルコンテンツを分析して勝てるフォーマットを見つける方法", category: "リサーチ",   thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop" },
        { id: "perfect-structure-viral", title: "バイラル動画の完璧な構造", category: "制作", thumb: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=400&auto=format&fit=crop" },
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