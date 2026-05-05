// src/app/[lang]/blog/content/perfect-structure-viral.js
// ─────────────────────────────────────────────────────────────────────────────
// Article multilingue : "The Perfect Structure of a Viral Video"
// Langues : en, fr, de, ja
// ─────────────────────────────────────────────────────────────────────────────

export const articleMeta = {
    id:       "perfect-structure-viral",
    slug:     "perfect-structure-viral",
    title: {
        en: "The Perfect Structure of a Viral Video",
        fr: "La structure parfaite d'une vidéo virale",
        de: "Die perfekte Struktur eines viralen Videos",
        ja: "バイラル動画の完璧な構造",
    },
    category: { en: "Production", fr: "Production", de: "Produktion", ja: "制作" },
    date:     { en: "March 12, 2026", fr: "12 mars 2026", de: "12. März 2026", ja: "2026年3月12日" },
    readTime: { en: "6 min read", fr: "6 min de lecture", de: "6 Min. Lesezeit", ja: "6分で読める" },
    thumb:    "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1470&auto=format&fit=crop",
    seo: {
        en: {
            title:       "The Perfect Viral Video Structure | 2026 Retention Blueprint",
            description: "Viral content isn't luck—it's engineering. Master the second-by-second blueprint used by top creators to maximize retention and trigger algorithmic growth.",
            image:       "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1470&auto=format&fit=crop",
        },
        fr: {
            title:       "La structure parfaite d'une vidéo virale | Blueprint de rétention 2026",
            description: "Le contenu viral n'est pas dû à la chance, c'est de l'ingénierie. Maîtrisez le plan seconde par seconde utilisé par les meilleurs créateurs pour maximiser la rétention.",
            image:       "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1470&auto=format&fit=crop",
        },
        de: {
            title:       "Die perfekte Struktur für virale Videos | 2026 Retention Blueprint",
            description: "Viraler Content ist kein Glück – er ist konstruiert. Meistere den sekündlichen Bauplan, den Top-Creator nutzen, um die Zuschauerbindung zu maximieren.",
            image:       "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1470&auto=format&fit=crop",
        },
        ja: {
            title:       "バイラル動画の完璧な構造 | 2026年版リテンション・ブループリント",
            description: "バイラルコンテンツは運ではありません。トップクリエイターが維持率を最大化し、アルゴリズムの成長を促進するために使用する、秒単位の設計図を習得しましょう。",
            image:       "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1470&auto=format&fit=crop",
        },
    },
    author: {
        en: { name: "Qodan", role: "Content Strategy" },
        fr: { name: "Qodan", role: "Stratégie de contenu" },
        de: { name: "Qodan", role: "Content-Strategie" },
        ja: { name: "Qodan", role: "コンテンツ戦略" },
    },
    tags: {
        en: ["Structure", "Blueprint", "Production", "Viral Formula", "Timing"],
        fr: ["Structure", "Plan", "Production", "Formule Virale", "Timing"],
        de: ["Struktur", "Bauplan", "Produktion", "Virale Formel", "Timing"],
        ja: ["構造", "設計図", "制作", "バイラルの公式", "タイミング"],
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────
export const en = {
    hero: {
        title:   "The Perfect Structure of a Viral Video",
        lead:    "Virality is not pure luck. Most strong short videos follow a strict structural sequence that gives viewers a biological reason to stay from second one to the very end. Stop guessing, start engineering.",
        cover:   { src: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1470&auto=format&fit=crop", alt: "Close up of professional video editing interface and waveform" },
    },
    lead: "Good videos feel completely natural and effortless to watch. But behind that effortless feeling is a highly engineered sequence. Once you understand the core mechanics of this sequence, you stop relying on 'hoping for the best' and start building algorithmic leverage.",
    sections: [
        {
            h2: "A practical 20-second retention blueprint",
            blocks: [
                { type: "body", text: "Think of this as a practical timing map for short-form video. This isn't theoretical; it is based on analyzing thousands of videos to see exactly what prevents the thumb from swiping away in the modern, ultra-competitive feed." },
                { type: "code", lang: "viral video structure", text: `0–1s    HOOK\n→ Visual shock, curiosity trigger\n→ The brain decides to stay or scroll\n\n1–5s    PROMISE\n→ "Let's fix this" / introduce the transformation\n→ Viewer now knows the destination\n\n5–15s   TRANSFORMATION\n→ Fast steps, visible progression\n→ Each beat delivers a micro-reward\n\n15–20s  PAYOFF\n→ The final, satisfying result revealed\n→ The reward loop completes\n\n~20s    LOOP\n→ Seamless return to start\n→ Brain doesn't register the ending` },
                { type: "body", text: "This 20-second structure is a condensed template. If your video is 60 seconds long, the 'Transformation' phase simply expands, but the initial sequence (Hook into Promise) must remain aggressively tight." },
            ],
        },
        {
            h2: "Why this timing works biologically",
            blocks: [
                { type: "body", text: "It works because viewers keep getting tiny moments of progress and closure. The human brain hates unresolved patterns but also gets bored during long setups. These micro-resolutions are precisely what prevent the subconscious 'I should scroll' impulse." },
                { type: "stats", items: [
                    { value: "The Hook",       label: "Amygdala Response", sub: "Triggers immediate 'alert' focus." },
                    { value: "The Promise",    label: "Expected Value",    sub: "Establishes logically why they should wait." },
                    { value: "Transformation", label: "Information Flow",  sub: "Maintains high-frequency engagement." },
                    { value: "The Payoff",     label: "Dopamine Release",  sub: "Validation of the time invested.", accent: true },
                ]},
                { type: "callout", kind: "info", title: "Replay is a multiplier", text: "A seamless loop is more than a clever editing gimmick. If the payoff flows directly back into the opening hook without a clear 'goodbye', people often rewatch 2 or 3 seconds without planning to. That replay signal tells the algorithm: 'This content is highly engaging,' multiplying your distribution." },
            ],
        },
        {
            h2: "Applying the Framework to Your Content",
            blocks: [
                { type: "body", text: "This structure is format-agnostic. Whether you are a software developer, a pastry chef, a fitness coach, or an interior designer, the underlying sequence is identical. Only the visual language changes." },
                { type: "body", text: "**Example: The Software Developer Case**\nIn a UI redesign video, the structure looks exactly like this:\n\n* **Hook (0-1s):** A split-screen showing a 'Broken' vs. 'Beautiful' UI interface.\n* **Promise (1-5s):** A cursor aggressively clicks a 'Delete' key on the bad code.\n* **Transformation (5-15s):** Fast-paced cuts of CSS properties changing, colors shifting, and layout snapping into place.\n* **Payoff (15-20s):** The final, interactive, glowing interface running perfectly.\n* **Loop:** A smooth transition that wipes the screen back to the original 'Broken' version." },
                { type: "quote", text: "Structure is not anti-creative. It is exactly what gives your creativity a platform and a chance to be seen by the masses." },
            ],
        },
        {
            h2: "Avoiding 'The Promise Gap'",
            blocks: [
                { type: "body", text: "The most common point of failure for intermediate creators is what I call **the promise gap**: deploying a strong hook, but then inserting too much delay or context before the real progression starts." },
                { type: "body", text: "If you promise a transformation or a payoff, the viewer needs to feel the first tangible step of progress within about 5 seconds. A long setup leaks retention like a sieve. You lose the trust established by your hook." },
                { type: "callout", kind: "warning", title: "Cut the Fluff", text: "If your opening is 'Hey guys, welcome back to another video, today we are going to...', cut it completely. Delete the audio, delete the frames. Start the video precisely where the action starts." },
            ],
        },
        {
            h2: "Why this pays off long-term",
            blocks: [
                { type: "body", text: "Creators often mistakenly think structure only helps an individual video go viral. It does significantly more than that. Once your fundamental structure becomes consistent, the quality of your analytics feedback improves drastically." },
                { type: "body", text: "You get cleaner retention curves, much clearer drop-off points, and you can iterate faster because you know exactly which phase (Hook, Promise, Transformation, or Payoff) failed. That is how channels stop guessing in the dark and start building a library of repeatable, predictable wins." },
            ],
        },
    ],
    authorBio: "I reverse-engineer viral trends to provide creators with actionable, data-driven frameworks for audience growth and high-retention storytelling.",
    related: [
        { id: "hook-killing-videos", title: "Why Your Hook Is Killing Your Videos (And How to Fix It)", category: "Production", thumb: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop" },
        { id: "loop-effect-retention", title: "The Loop Effect: How to Boost Retention Beyond 100%", category: "Retention", thumb: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// FRENCH
// ─────────────────────────────────────────────────────────────────────────────
export const fr = {
    hero: {
        title:   "La structure parfaite d'une vidéo virale",
        lead:    "La viralité n'est pas le fruit du hasard. La plupart des vidéos courtes performantes suivent une séquence structurelle stricte qui donne aux spectateurs une raison biologique de rester de la première seconde jusqu'à la toute fin.",
        cover:   { src: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1470&auto=format&fit=crop", alt: "Gros plan sur une interface de montage vidéo professionnelle" },
    },
    lead: "Les bonnes vidéos semblent naturelles et faciles à regarder. Mais derrière cette sensation de fluidité se cache une séquence hautement millimétrée. Une fois que vous comprenez les mécaniques de cette séquence, vous arrêtez de deviner et commencez à utiliser l'algorithme à votre avantage.",
    sections: [
        {
            h2: "Un plan de rétention pratique en 20 secondes",
            blocks: [
                { type: "body", text: "Considérez ceci comme une carte temporelle pratique pour les formats courts. Ce n'est pas théorique ; c'est basé sur l'analyse de milliers de vidéos pour voir exactement ce qui empêche le pouce de swiper dans un flux ultra-compétitif." },
                { type: "code", lang: "viral video structure", text: `0–1s    ACCROCHE (Hook)\n→ Choc visuel, déclencheur de curiosité\n→ Le cerveau décide de rester ou scroller\n\n1–5s    PROMESSE\n→ "On va réparer ça" / annonce de la transformation\n→ Le spectateur connaît maintenant la destination\n\n5–15s   TRANSFORMATION\n→ Étapes rapides, progression visible\n→ Chaque battement offre une micro-récompense\n\n15–20s  RÉCOMPENSE (Payoff)\n→ Le résultat final et satisfaisant est révélé\n→ La boucle de récompense est bouclée\n\n~20s    BOUCLE (Loop)\n→ Retour fluide au début\n→ Le cerveau n'enregistre pas la fin` },
                { type: "body", text: "Cette structure de 20 secondes est un modèle condensé. Si votre vidéo dure 60 secondes, la phase de 'Transformation' s'allonge, mais la séquence initiale (Accroche vers Promesse) doit rester agressivement serrée." },
            ],
        },
        {
            h2: "Pourquoi ce timing fonctionne biologiquement",
            blocks: [
                { type: "body", text: "Cela fonctionne parce que les spectateurs reçoivent constamment de minuscules moments de progression et de conclusion. Le cerveau humain déteste les modèles non résolus mais s'ennuie aussi pendant les longues introductions. Ces micro-résolutions empêchent l'impulsion de scroller." },
                { type: "stats", items: [
                    { value: "L'Accroche",      label: "Réponse de l'Amygdale", sub: "Déclenche une concentration 'd'alerte' immédiate." },
                    { value: "La Promesse",     label: "Valeur Attendue",       sub: "Établit logiquement pourquoi ils doivent attendre." },
                    { value: "Transformation",  label: "Flux d'Information",    sub: "Maintient un engagement à haute fréquence." },
                    { value: "La Récompense",   label: "Libération de Dopamine",sub: "Validation du temps investi.", accent: true },
                ]},
                { type: "callout", kind: "info", title: "Le replay est un multiplicateur", text: "Une boucle parfaite est plus qu'un artifice de montage. Si la fin s'enchaîne directement avec l'accroche d'ouverture sans dire 'au revoir', les gens re-regardent souvent 2 ou 3 secondes sans le vouloir. Ce signal de re-visionnage dit à l'algorithme : 'Ce contenu est hyper engageant', décuplant votre portée." },
            ],
        },
        {
            h2: "Appliquer la méthode à votre contenu",
            blocks: [
                { type: "body", text: "Cette structure s'adapte à n'importe quel domaine. Que vous soyez développeur, chef pâtissier, coach sportif ou architecte d'intérieur, la séquence sous-jacente est identique. Seul le langage visuel change." },
                { type: "body", text: "**Exemple : Le cas du Développeur Logiciel**\nDans une vidéo de refonte d'interface (UI), la structure ressemble à ceci :\n\n* **Accroche (0-1s) :** Un écran splitté montrant une UI 'Cassée' vs 'Magnifique'.\n* **Promesse (1-5s) :** Un curseur clique agressivement sur 'Supprimer' sur le mauvais code.\n* **Transformation (5-15s) :** Coupes rapides de propriétés CSS qui changent et de couleurs qui s'ajustent.\n* **Récompense (15-20s) :** L'interface finale, interactive et lumineuse.\n* **Boucle :** Une transition fluide qui ramène l'écran à la version 'Cassée'." },
                { type: "quote", text: "La structure n'est pas l'ennemie de la créativité. C'est exactement ce qui donne à votre créativité une plateforme et une chance d'être vue par les masses." },
            ],
        },
        {
            h2: "Éviter 'L'Écart de Promesse'",
            blocks: [
                { type: "body", text: "Le point d'échec le plus courant pour les créateurs est ce que j'appelle **l'écart de promesse (promise gap)** : déployer une accroche forte, mais insérer ensuite trop de délai avant que la vraie progression ne commence." },
                { type: "body", text: "Si vous promettez une transformation, le spectateur doit ressentir la première étape tangible de progrès dans les 5 secondes. Une introduction trop longue fait fuir l'attention. Vous perdez la confiance établie par votre accroche." },
                { type: "callout", kind: "warning", title: "Coupez le gras", text: "Si votre introduction est 'Salut les gars, bienvenue dans cette nouvelle vidéo, aujourd'hui on va...', coupez-la complètement. Supprimez l'audio, supprimez l'image. Commencez la vidéo précisément au moment où l'action démarre." },
            ],
        },
        {
            h2: "Pourquoi cela paie sur le long terme",
            blocks: [
                { type: "body", text: "Les créateurs pensent souvent à tort que la structure n'aide qu'une seule vidéo à devenir virale. Elle fait bien plus que cela. Une fois que votre structure fondamentale devient constante, la qualité de vos retours analytiques s'améliore drastiquement." },
                { type: "body", text: "Vous obtenez des courbes de rétention plus propres, des points de chute clairs, et vous pouvez itérer plus vite car vous savez exactement quelle phase a échoué. C'est ainsi que les chaînes arrêtent de naviguer à vue et commencent à bâtir des succès prévisibles et reproductibles." },
            ],
        },
    ],
    authorBio: "Je décortique les tendances virales pour fournir aux créateurs des modèles actionnables, basés sur les données, pour la croissance d'audience et la rétention.",
    related: [
        { id: "hook-killing-videos", title: "Pourquoi votre accroche tue vos vidéos (et comment y remédier)", category: "Production", thumb: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop" },
        { id: "loop-effect-retention", title: "L'Effet Boucle : Comment dépasser les 100% de rétention", category: "Rétention", thumb: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GERMAN
// ─────────────────────────────────────────────────────────────────────────────
export const de = {
    hero: {
        title:   "Die perfekte Struktur eines viralen Videos",
        lead:    "Viralität ist kein reines Glück. Die meisten starken Kurzvideos folgen einer strikten strukturellen Sequenz, die den Zuschauern einen biologischen Grund gibt, von der ersten Sekunde bis zum Ende dranzubleiben.",
        cover:   { src: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1470&auto=format&fit=crop", alt: "Nahaufnahme einer professionellen Videobearbeitungsoberfläche" },
    },
    lead: "Gute Videos wirken völlig natürlich und mühelos. Aber hinter diesem Gefühl verbirgt sich eine hochgradig konstruierte Sequenz. Sobald du die Mechanik dieser Sequenz verstehst, hörst du auf zu raten und beginnst, den Algorithmus zu steuern.",
    sections: [
        {
            h2: "Ein praktischer 20-Sekunden-Retention-Plan",
            blocks: [
                { type: "body", text: "Betrachte dies als eine praktische Zeitkarte für Kurzvideos. Das ist nicht theoretisch; es basiert auf der Analyse tausender Videos, um genau zu sehen, was den Daumen davon abhält, im ultra-kompetitiven Feed weiterzuscrollen." },
                { type: "code", lang: "viral video structure", text: `0–1s    HOOK (Der Haken)\n→ Visueller Schock, Neugierde-Auslöser\n→ Gehirn entscheidet: bleiben oder scrollen\n\n1–5s    PROMISE (Das Versprechen)\n→ "Lass uns das reparieren" / Transformation vorstellen\n→ Zuschauer kennt nun das Ziel\n\n5–15s   TRANSFORMATION\n→ Schnelle Schritte, sichtbarer Fortschritt\n→ Jeder Takt liefert eine Mikro-Belohnung\n\n15–20s  PAYOFF (Die Auflösung)\n→ Das finale, befriedigende Ergebnis\n→ Die Belohnungsschleife schließt sich\n\n~20s    LOOP (Die Schleife)\n→ Nahtloser Rücklauf zum Anfang\n→ Das Gehirn registriert das Ende nicht` },
                { type: "body", text: "Diese 20-Sekunden-Struktur ist eine komprimierte Vorlage. Wenn dein Video 60 Sekunden lang ist, dehnt sich die 'Transformations'-Phase aus, aber die Anfangssequenz (Hook in Promise) muss extrem straff bleiben." },
            ],
        },
        {
            h2: "Warum dieses Timing biologisch funktioniert",
            blocks: [
                { type: "body", text: "Es funktioniert, weil die Zuschauer ständig kleine Momente von Fortschritt und Abschluss erleben. Das menschliche Gehirn hasst ungelöste Muster, langweilt sich aber auch bei langen Einleitungen. Diese Mikro-Lösungen verhindern den unbewussten Impuls zum Weiterscrollen." },
                { type: "stats", items: [
                    { value: "Der Hook",        label: "Amygdala-Reaktion",   sub: "Löst sofortige 'Alarm'-Fokussierung aus." },
                    { value: "Das Versprechen", label: "Erwarteter Wert",     sub: "Etabliert logisch, warum sie warten sollten." },
                    { value: "Transformation",  label: "Informationsfluss",   sub: "Hält ein hochfrequentes Engagement aufrecht." },
                    { value: "Der Payoff",      label: "Dopamin-Ausschüttung",sub: "Bestätigung der investierten Zeit.", accent: true },
                ]},
                { type: "callout", kind: "info", title: "Wiederholung ist ein Multiplikator", text: "Eine nahtlose Schleife (Loop) ist mehr als ein Schnitt-Trick. Wenn die Auflösung direkt wieder in den Anfangshook übergeht, schauen die Leute oft unbewusst 2 oder 3 Sekunden noch einmal. Dieses Wiederholungs-Signal sagt dem Algorithmus: 'Dieser Content ist hochgradig fesselnd'." },
            ],
        },
        {
            h2: "Das Framework auf deinen Content anwenden",
            blocks: [
                { type: "body", text: "Diese Struktur ist formatunabhängig. Egal ob Softwareentwickler, Konditor, Fitnesscoach oder Innenarchitekt – die zugrundeliegende Sequenz ist identisch. Nur die visuelle Sprache ändert sich." },
                { type: "body", text: "**Beispiel: Der Softwareentwickler-Fall**\nIn einem UI-Redesign-Video sieht die Struktur so aus:\n\n* **Hook (0-1s):** Ein geteilter Bildschirm, der eine 'Kaputte' vs. 'Schöne' UI zeigt.\n* **Promise (1-5s):** Ein Cursor klickt aggressiv auf 'Löschen' beim schlechten Code.\n* **Transformation (5-15s):** Schnelle Schnitte von sich ändernden CSS-Eigenschaften und Farben.\n* **Payoff (15-20s):** Das finale, interaktive, leuchtende Interface.\n* **Loop:** Ein glatter Übergang, der den Bildschirm zurück zur 'kaputten' Version wischt." },
                { type: "quote", text: "Struktur ist nicht anti-kreativ. Sie ist genau das, was deiner Kreativität eine Plattform und die Chance gibt, gesehen zu werden." },
            ],
        },
        {
            h2: "Die 'Promise Gap' vermeiden",
            blocks: [
                { type: "body", text: "Der häufigste Fehlerpunkt ist das, was ich die **Promise Gap (Versprechenslücke)** nenne: ein starker Hook, aber dann zu viel Verzögerung, bevor der echte Fortschritt beginnt." },
                { type: "body", text: "Wenn du eine Transformation versprichst, muss der Zuschauer innerhalb von etwa 5 Sekunden den ersten spürbaren Fortschritt erleben. Eine lange Einleitung vernichtet die Retention. Du verlierst das durch den Hook aufgebaute Vertrauen." },
                { type: "callout", kind: "warning", title: "Schneide das Unnötige weg", text: "Wenn deine Eröffnung lautet: 'Hallo Leute, willkommen zurück zu einem neuen Video, heute werden wir...', schneide sie komplett weg. Lösche den Ton, lösche die Bilder. Beginne das Video genau dort, wo die Action beginnt." },
            ],
        },
        {
            h2: "Warum sich das langfristig auszahlt",
            blocks: [
                { type: "body", text: "Creator denken oft fälschlicherweise, dass Struktur nur einem einzelnen Video hilft, viral zu gehen. Sie bewirkt viel mehr. Sobald deine grundlegende Struktur konsistent wird, verbessert sich die Qualität deines Feedbacks drastisch." },
                { type: "body", text: "Du erhältst sauberere Retention-Kurven, klarere Absprungpunkte und kannst schneller iterieren, weil du genau weißt, welche Phase gescheitert ist. So hören Kanäle auf, im Dunkeln zu tappen, und beginnen, reproduzierbare Erfolge zu erzielen." },
            ],
        },
    ],
    authorBio: "Ich analysiere virale Trends, um Creatorn datengesteuerte Frameworks für Publikums wachstum und High-Retention-Storytelling zu bieten.",
    related: [
        { id: "hook-killing-videos", title: "Warum dein Hook deine Videos tötet (und wie du es behebst)", category: "Produktion", thumb: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop" },
        { id: "loop-effect-retention", title: "Der Loop-Effekt: Wie du die Retention über 100% steigerst", category: "Retention", thumb: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// JAPANESE
// ─────────────────────────────────────────────────────────────────────────────
export const ja = {
    hero: {
        title:   "バイラル動画の完璧な構造",
        lead:    "バイラルは純粋な運ではありません。強力なショート動画のほとんどは、視聴者に最初の1秒から最後まで留まる生物学的な理由を与える、厳格な構造的シーケンスに従っています。推測をやめ、設計を始めましょう。",
        cover:   { src: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1470&auto=format&fit=crop", alt: "プロ仕様の動画編集インターフェースと波形のクローズアップ" },
    },
    lead: "良い動画は、見るのが完全に自然で簡単だと感じさせます。しかし、その手軽さの背後には、高度に計算されたシーケンスがあります。このシーケンスの核となるメカニズムを理解すれば、「うまくいけばいいな」と祈るのをやめ、アルゴリズムのレバレッジを構築し始めることができます。",
    sections: [
        {
            h2: "実用的な20秒のリテンション・ブループリント",
            blocks: [
                { type: "body", text: "これはショート動画の実用的なタイミングマップだと考えてください。理論ではなく、競争の激しい現代のフィードで、何が親指のスクロールを止めるのかを正確に把握するために、何千もの動画を分析した結果に基づいています。" },
                { type: "code", lang: "viral video structure", text: `0–1秒   フック (HOOK)\n→ 視覚的ショック、好奇心のトリガー\n→ 脳が留まるかスクロールするかを決定\n\n1–5秒   プロミス (PROMISE/約束)\n→「これを直そう」 / 変化の提示\n→ 視聴者は目的地を理解する\n\n5–15秒  トランスフォーメーション (変化)\n→ ペースの速い展開、目に見える進行\n→ 各ビートが小さな報酬を提供\n\n15–20秒 ペイオフ (結果/報酬)\n→ 最終的な満足のいく結果が明らかになる\n→ 報酬ループの完了\n\n~20秒   ループ (LOOP)\n→ シームレスに最初に戻る\n→ 脳は終わりを認識しない` },
                { type: "body", text: "この20秒の構造は圧縮されたテンプレートです。動画が60秒の場合、「トランスフォーメーション」フェーズが単純に拡大しますが、最初のシーケンス（フックからプロミスへの流れ）は非常にタイトに保つ必要があります。" },
            ],
        },
        {
            h2: "このタイミングが生物学的に機能する理由",
            blocks: [
                { type: "body", text: "機能する理由は、視聴者が進捗と完結の小さな瞬間を継続的に得るからです。人間の脳は未解決のパターンを嫌いますが、長い前置きの間にも退屈します。これらの小さな解決（マイクロレゾリューション）こそが、「スクロールしよう」という無意識の衝動を防ぐのです。" },
                { type: "stats", items: [
                    { value: "フック",        label: "扁桃体の反応",   sub: "即座の「警戒」フォーカスを引き起こす。" },
                    { value: "プロミス",      label: "期待値",         sub: "なぜ待つべきかという論理を確立する。" },
                    { value: "変化の過程",    label: "情報のフロー",   sub: "高頻度のエンゲージメントを維持する。" },
                    { value: "ペイオフ",      label: "ドーパミンの放出",sub: "投資した時間の正当化。", accent: true },
                ]},
                { type: "callout", kind: "info", title: "リプレイは掛け算", text: "シームレスなループは単なる編集のギミックではありません。明確な「さようなら」なしに、ペイオフから直接オープニングのフックに戻る場合、人々は無意識のうちに2〜3秒再視聴してしまいます。そのリプレイ信号は「このコンテンツは非常に魅力的だ」とアルゴリズムに伝え、リーチを倍増させます。" },
            ],
        },
        {
            h2: "フレームワークをあなたのコンテンツに適用する",
            blocks: [
                { type: "body", text: "この構造はフォーマットに依存しません。ソフトウェア開発者、パティシエ、フィットネスコーチ、インテリアデザイナーのいずれであっても、根底にあるシーケンスは同じです。視覚的な言語が変わるだけです。" },
                { type: "body", text: "**例：ソフトウェア開発者の場合**\nUIデザインの変更動画では、構造は次のようになります。\n\n* **フック (0-1秒):** 「壊れたUI」と「美しいUI」の分割画面。\n* **プロミス (1-5秒):** カーソルが悪いコードの「削除」キーを激しくクリックする。\n* **トランスフォーメーション (5-15秒):** CSSプロパティの変更、色の変化、レイアウトが整う様子のテンポの良いカット。\n* **ペイオフ (15-20秒):** 完璧に動作する最終的な美しいインターフェース。\n* **ループ:** 画面が最初の「壊れた」バージョンにシームレスに戻るトランジション。" },
                { type: "quote", text: "構造は創造性に反するものではありません。構造こそがあなたの創造性にプラットフォームを与え、大勢の人に見てもらうチャンスを与えるのです。" },
            ],
        },
        {
            h2: "「プロミス・ギャップ」を避ける",
            blocks: [
                { type: "body", text: "中級クリエイターの最も一般的な失敗の原因は、私が**プロミス・ギャップ**と呼ぶものです。強力なフックを展開したにもかかわらず、本当の進行が始まる前に時間や文脈を挟みすぎてしまうことです。" },
                { type: "body", text: "変化や結果を約束した場合、視聴者は約5秒以内に最初の具体的な進捗を感じる必要があります。前置きが長いと、維持率が漏れてしまいます。フックで確立した信頼を失うことになります。" },
                { type: "callout", kind: "warning", title: "無駄を省く", text: "オープニングが「みんなこんにちは、今日の動画では…」であるなら、完全にカットしてください。音声を削除し、フレームを削除します。アクションが始まるまさにその瞬間から動画を始めてください。" },
            ],
        },
        {
            h2: "これが長期的に成果を上げる理由",
            blocks: [
                { type: "body", text: "クリエイターは、構造が個々の動画をバイラルにするためだけに役立つと誤解しがちです。しかし、それ以上の効果があります。基本的な構造が一貫してくると、分析フィードバックの質が劇的に向上します。" },
                { type: "body", text: "よりクリーンな維持率曲線、より明確な離脱ポイントが得られ、どのフェーズ（フック、プロミス、変化、ペイオフ）が失敗したかを正確に把握できるため、より迅速に改善（イテレーション）できます。これが、推測をやめ、再現可能で予測可能な成功を積み上げ始める方法です。" },
            ],
        },
    ],
    authorBio: "クリエイターにオーディエンスの成長と高い維持率をもたらすストーリーテリングのための、データに基づいた実践的なフレームワークを提供するため、バイラルのトレンドをリバースエンジニアリングしています。",
    related: [
        { id: "hook-killing-videos", title: "なぜあなたのフックが動画を台無しにしているのか（修正方法）", category: "制作", thumb: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?q=80&w=1470&auto=format&fit=crop" },
        { id: "loop-effect-retention", title: "ループ効果：維持率を100%超に引き上げる方法", category: "維持率", thumb: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&auto=format&fit=crop" },
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