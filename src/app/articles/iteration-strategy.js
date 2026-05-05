// src/app/[lang]/blog/content/iteration-strategy.js
// ─────────────────────────────────────────────────────────────────────────────
// Article multilingue : "The Iteration Strategy That Leads to Viral Success"
// Langues : en, fr, de, ja
// ─────────────────────────────────────────────────────────────────────────────

export const articleMeta = {
    id:       "iteration-strategy",
    slug:     "iteration-strategy",
    title: {
        en: "The Iteration Strategy That Leads to Viral Success",
        fr: "La stratégie d'itération qui mène au succès viral",
        de: "Die Iterationsstrategie, die zu viralem Erfolg führt",
        ja: "バイラルな成功を導く反復戦略",
    },
    category: { en: "Growth", fr: "Croissance", de: "Wachstum", ja: "成長" },
    date:     { en: "March 8, 2026", fr: "8 mars 2026", de: "8. März 2026", ja: "2026年3月8日" },
    readTime: { en: "7 min read", fr: "7 min de lecture", de: "7 Min. Lesezeit", ja: "7分で読める" },
    thumb:    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    seo: {
        en: {
            title:       "The Iteration Strategy That Leads to Viral Success",
            description: "Viral success doesn't come from one perfect video. It comes from a system — test aggressively, measure precisely, and scale what works.",
            image:       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        },
        fr: {
            title:       "La stratégie d'itération qui mène au succès viral",
            description: "Le succès viral ne vient pas d'une seule vidéo parfaite. Il vient d'un système : tester agressivement, mesurer précisément et mettre à l'échelle ce qui fonctionne.",
            image:       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        },
        de: {
            title:       "Die Iterationsstrategie, die zu viralem Erfolg führt",
            description: "Viraler Erfolg kommt nicht von einem perfekten Video. Er kommt von einem System: aggressiv testen, präzise messen und skalieren, was funktioniert.",
            image:       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        },
        ja: {
            title:       "バイラルな成功を導く反復戦略",
            description: "バイラルな成功は、1つの完璧な動画から生まれるのではありません。それはシステムから生まれます。積極的にテストし、正確に測定し、機能するものを拡大します。",
            image:       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        },
    },
    author: {
        en: { name: "Editorial Team", role: "Content Strategy" },
        fr: { name: "Équipe éditoriale", role: "Stratégie de contenu" },
        de: { name: "Redaktion", role: "Content-Strategie" },
        ja: { name: "編集チーム", role: "コンテンツ戦略" },
    },
    tags: {
        en: ["Iteration", "Testing", "Growth", "System", "Scale", "Data"],
        fr: ["Itération", "Testing", "Croissance", "Système", "Scale", "Data"],
        de: ["Iteration", "Testing", "Wachstum", "System", "Skalierung", "Daten"],
        ja: ["反復", "テスト", "成長", "システム", "スケール", "データ"],
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────
export const en = {
    hero: {
        title:   "The Iteration Strategy That Leads to Viral Success",
        lead:    "Most viral wins are not random one-offs. They come from a repeatable process: test, measure, adjust, repeat. Stop treating every upload as a fresh gamble.",
        cover:   { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", alt: "Data charts showing growth and iteration" },
    },
    lead: "A common trap is treating every upload as a fresh gamble. The fastest-growing channels usually run tighter loops: publish, measure, compare, improve. They do not rely on luck; they engineer it.",
    sections: [
        {
            h2: "The Gambler's Fallacy in Content Creation",
            blocks: [
                { type: "body", text: "Many creators spend weeks writing, filming, and polishing one singular upload. They pour their entire soul into a single piece of content, and then expect that one result to explain everything about their channel's viability. If it fails, they assume their niche is dead or the algorithm hates them. If it succeeds, they assume they are a genius. Both conclusions are usually wrong." },
                { type: "body", text: "The problem is sample size, not effort. One video can be a fluke in either direction. A bad thumbnail on a great video will kill it. A great hook on a terrible video might artificially inflate it for a day. You cannot extract meaningful data from a sample size of one." },
                { type: "callout", kind: "danger", title: "Perfectionism kills momentum", text: "One 'perfect' video gives you exactly one data signal. Five solid, 'good enough' tests give you five distinct signals, providing a much clearer picture of what the market actually wants." },
            ],
        },
        {
            h2: "The Scientific Method for Virality",
            blocks: [
                { type: "body", text: "The better approach is to test aggressively. Keep the core idea of your content, but intentionally change one variable at a time across multiple uploads. Test the hook, the pacing, the ending, the loop, or the overall structure. The goal is to isolate the specific mechanism that actually moves performance metrics." },
                { type: "body", text: "Imagine you have a concept about restoring old watches. Instead of making one 10-minute documentary, you cut five short-form variations. Each one tests a different hypothesis about how to hold attention." },
                { type: "code", lang: "iteration framework", text: `1 core concept → 5 video variations

Video 1: Different hook (visual shock - showing the rustiest part)
Video 2: Different hook (pattern interrupt - dropping the watch)
Video 3: Different pacing (faster transformation cuts)
Video 4: Different ending (stronger payoff / ASMR sound)
Video 5: Different loop (seamless transition back to the start)

Measure each video after 48h:
  → Swipe rate    = hook quality signal
  → Retention %   = content quality signal
  → Replay rate   = loop quality signal
  → Shares        = emotional resonance signal` },
            ],
        },
        {
            h2: "Decoding the Metrics That Matter",
            blocks: [
                { type: "body", text: "Views are a vanity metric; they tell you what happened, but not why. To iterate effectively, you need to look at the diagnostic metrics. Swipe rate (or 'choose to view' rate) is your frontline diagnostic. It tells you instantly whether your opening 3 seconds work. If 60% of people leave instantly, your concept might be fine, but your hook is broken." },
                { type: "body", text: "Retention curves give you the broader quality signal. If people stay past the hook but drop off at the 15-second mark, you have a pacing issue or your build-up is too slow. Replay rate checks the strength of your video's loop and payoff—did they miss something and want to see it again? Shares tell you whether people felt the content was worth passing on to elevate their own social status." },
                { type: "stats", items: [
                    { value: "Swipe rate",  label: "Measures", sub: "Hook quality & initial promise" },
                    { value: "Retention",   label: "Measures", sub: "Pacing & content quality" },
                    { value: "Replays",     label: "Measures", sub: "Loop strength & detail density", accent: true },
                    { value: "Shares",      label: "Measures", sub: "Emotional resonance & identity" },
                ]},
            ],
        },
        {
            h2: "The Rule of One Variable",
            blocks: [
                { type: "body", text: "Fast improvement comes from changing one variable at a time. The most frequent error amateur creators make is changing everything at once. They change the topic, the lighting, the editing style, and the length all in the next video. When that video performs differently, they have absolutely no idea which change caused the result." },
                { type: "body", text: "To iterate like a professional, isolate your tests. Make one adjustment, hit publish, make one observation, document the result, and then move on to the next hypothesis." },
                { quote: "One variable. One change. One clear signal. That is the scientific method applied to content." },
            ],
        },
        {
            h2: "The Real Goal: A Repeatable Format",
            blocks: [
                { type: "body", text: "Random viral spikes are nice for the ego, but they are terrible for building a business. The real win in content creation is finding a repeatable format that consistently beats your channel's average baseline. A format is a structured way of delivering information that you can apply to dozens of different topics." },
                { type: "body", text: "If your channel normally averages 10,000 views, a format that consistently pulls 20,000 views is a massive breakthrough. You don't need a million views to grow; you just need a reliable 2x multiplier. Once you find that format through iteration, you publish it consistently, and the effect begins to compound." },
                { type: "callout", kind: "tip", title: "The Compound Effect", text: "A 2x format posted consistently compounds much faster than most creators expect. In 90 days of executing a proven format, you can learn and grow more than some channels do in an entire year of random guessing." },
            ],
        },
        {
            h2: "The Business Case for Iteration",
            blocks: [
                { type: "body", text: "Iteration is not only a growth tactic; it is fundamentally a revenue tactic. Better hooks and higher retention usually improve both your distribution and your monetization conditions over time. Platforms reward highly engaging content with cheaper algorithmic reach and, often, higher ad placements." },
                { type: "body", text: "Many creators try to separate the 'creative art' from the 'business metrics,' but on modern platforms, those two are exactly the same system. The data is simply the audience's voice telling you what art they appreciate the most. Listen to the data, iterate relentlessly, and scale the winning formats." },
            ],
        },
    ],
    authorBio: "I study what makes content perform — across platforms, niches, and formats. My goal is to give creators frameworks that actually scale.",
    related: [
        { id: "niche-doesnt-matter",   title: "Why Your Niche Doesn't Matter (And What Actually Drives Viral Content)", category: "Strategy", thumb: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=400&auto=format&fit=crop" },
        { id: "analyze-viral-content", title: "How to Analyze Viral Content and Find Winning Formats",                   category: "Research", thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// FRENCH
// ─────────────────────────────────────────────────────────────────────────────
export const fr = {
    hero: {
        title:   "La stratégie d'itération qui mène au succès viral",
        lead:    "La plupart des succès viraux ne sont pas des coups de chance isolés. Ils proviennent d'un processus reproductible : tester, mesurer, ajuster, répéter. Cessez de traiter chaque publication comme un pari.",
        cover:   { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", alt: "Graphiques de données montrant la croissance" },
    },
    lead: "Un piège courant consiste à traiter chaque vidéo comme un nouveau pari. Les chaînes qui connaissent la croissance la plus rapide exécutent des boucles serrées : publier, mesurer, comparer, améliorer. Elles ne comptent pas sur la chance ; elles la fabriquent.",
    sections: [
        {
            h2: "L'erreur du parieur dans la création de contenu",
            blocks: [
                { type: "body", text: "Beaucoup de créateurs passent des semaines à écrire, filmer et peaufiner une seule vidéo. Ils mettent toute leur âme dans un seul contenu, puis s'attendent à ce que ce résultat unique explique tout sur la viabilité de leur chaîne. Si ça échoue, ils supposent que leur niche est morte. Si ça réussit, ils se prennent pour des génies. Ces deux conclusions sont généralement fausses." },
                { type: "body", text: "Le problème est la taille de l'échantillon, pas l'effort. Une vidéo peut être une anomalie dans un sens comme dans l'autre. Une mauvaise miniature sur une excellente vidéo va la tuer. Une excellente accroche sur une vidéo médiocre pourrait la gonfler artificiellement pendant un jour. Vous ne pouvez pas extraire de données significatives d'un échantillon de taille un." },
                { type: "callout", kind: "danger", title: "Le perfectionnisme tue l'élan", text: "Une vidéo 'parfaite' vous donne exactement un signal de données. Cinq tests solides et 'suffisamment bons' vous donnent cinq signaux distincts, offrant une image beaucoup plus claire de ce que le marché veut réellement." },
            ],
        },
        {
            h2: "La méthode scientifique pour la viralité",
            blocks: [
                { type: "body", text: "La meilleure approche consiste à tester de manière agressive. Gardez l'idée centrale de votre contenu, mais modifiez intentionnellement une variable à la fois sur plusieurs publications. Testez l'accroche, le rythme, la fin, la boucle ou la structure globale. Le but est d'isoler le mécanisme spécifique qui fait réellement bouger les métriques de performance." },
                { type: "body", text: "Imaginez que vous ayez un concept sur la restauration de vieilles montres. Au lieu de faire un documentaire de 10 minutes, vous coupez cinq variations au format court. Chacune teste une hypothèse différente sur la façon de retenir l'attention." },
                { type: "code", lang: "framework d'itération", text: `1 concept central → 5 variations de vidéos

Vidéo 1 : Accroche différente (choc visuel - montrer la rouille)
Vidéo 2 : Accroche différente (interruption de pattern - faire tomber la montre)
Vidéo 3 : Rythme différent (coupes de transformation plus rapides)
Vidéo 4 : Fin différente (récompense plus forte / son ASMR)
Vidéo 5 : Boucle différente (transition fluide vers le début)

Mesurez chaque vidéo après 48h :
  → Taux de swipe = signal de qualité de l'accroche
  → Rétention %   = signal de qualité du contenu
  → Taux de replay= signal de qualité de la boucle
  → Partages      = signal de résonance émotionnelle` },
            ],
        },
        {
            h2: "Décoder les métriques qui comptent",
            blocks: [
                { type: "body", text: "Les vues sont une métrique de vanité ; elles vous disent ce qui s'est passé, mais pas pourquoi. Pour itérer efficacement, vous devez regarder les métriques de diagnostic. Le taux de swipe (ou taux de 'choix de visionnage') est votre diagnostic de première ligne. Il vous dit instantanément si vos 3 premières secondes fonctionnent. Si 60 % des gens partent instantanément, votre concept est peut-être bon, mais votre accroche est cassée." },
                { type: "body", text: "Les courbes de rétention vous donnent le signal de qualité plus large. Si les gens restent après l'accroche mais décrochent à la 15ème seconde, vous avez un problème de rythme. Le taux de replay vérifie la force de la boucle de votre vidéo. Les partages vous disent si les gens ont estimé que le contenu valait la peine d'être transmis pour élever leur propre statut social." },
                { type: "stats", items: [
                    { value: "Taux de Swipe", label: "Mesure", sub: "Qualité de l'accroche & promesse" },
                    { value: "Rétention",     label: "Mesure", sub: "Rythme & qualité du contenu" },
                    { value: "Replays",       label: "Mesure", sub: "Force de la boucle & détails", accent: true },
                    { value: "Partages",      label: "Mesure", sub: "Résonance émotionnelle" },
                ]},
            ],
        },
        {
            h2: "La règle de la variable unique",
            blocks: [
                { type: "body", text: "L'amélioration rapide vient de la modification d'une variable à la fois. L'erreur la plus fréquente des créateurs amateurs est de tout changer en même temps. Ils changent le sujet, l'éclairage, le style de montage et la longueur dans la vidéo suivante. Quand cette vidéo performe différemment, ils n'ont absolument aucune idée du changement qui a causé ce résultat." },
                { type: "body", text: "Pour itérer comme un professionnel, isolez vos tests. Faites un ajustement, publiez, faites une observation, documentez le résultat, puis passez à l'hypothèse suivante." },
                { quote: "Une variable. Un changement. Un signal clair. C'est la méthode scientifique appliquée au contenu." },
            ],
        },
        {
            h2: "Le véritable objectif : un format reproductible",
            blocks: [
                { type: "body", text: "Les pics de viralité aléatoires sont bons pour l'ego, mais terribles pour bâtir un business. La vraie victoire dans la création de contenu est de trouver un format reproductible qui bat constamment la moyenne de votre chaîne. Un format est une façon structurée de délivrer des informations que vous pouvez appliquer à des dizaines de sujets différents." },
                { type: "body", text: "Si votre chaîne fait normalement 10 000 vues en moyenne, un format qui tire constamment 20 000 vues est une percée massive. Vous n'avez pas besoin d'un million de vues pour croître ; vous avez juste besoin d'un multiplicateur 2x fiable. Une fois que vous trouvez ce format par itération, l'effet commence à se composer." },
                { type: "callout", kind: "tip", title: "L'effet composé", text: "Un format 2x posté régulièrement se compose beaucoup plus vite que ne le pensent les créateurs. En 90 jours d'exécution d'un format éprouvé, vous pouvez apprendre et croître plus que certaines chaînes en une année entière de devinettes." },
            ],
        },
        {
            h2: "L'argument commercial de l'itération",
            blocks: [
                { type: "body", text: "L'itération n'est pas seulement une tactique de croissance ; c'est fondamentalement une tactique de revenus. De meilleures accroches et une rétention plus élevée améliorent généralement à la fois votre distribution et vos conditions de monétisation au fil du temps. Les plateformes récompensent le contenu très engageant avec une portée algorithmique moins chère et, souvent, de meilleurs placements publicitaires." },
                { type: "body", text: "De nombreux créateurs essaient de séparer 'l'art créatif' des 'métriques commerciales', mais sur les plateformes modernes, ces deux choses sont exactement le même système. Écoutez les données, itérez sans relâche et mettez à l'échelle les formats gagnants." },
            ],
        },
    ],
    authorBio: "J'étudie ce qui fait performer le contenu — sur toutes les plateformes, niches et formats. Mon objectif est de donner aux créateurs des frameworks qui fonctionnent vraiment à grande échelle.",
    related: [
        { id: "niche-doesnt-matter",   title: "Pourquoi votre niche n'a pas d'importance (et ce qui génère vraiment de la viralité)", category: "Stratégie", thumb: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=400&auto=format&fit=crop" },
        { id: "analyze-viral-content", title: "Comment analyser le contenu viral et trouver les formats gagnants",                   category: "Recherche", thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GERMAN
// ─────────────────────────────────────────────────────────────────────────────
export const de = {
    hero: {
        title:   "Die Iterationsstrategie, die zu viralem Erfolg führt",
        lead:    "Die meisten viralen Erfolge sind keine zufälligen Einzelfälle. Sie entstehen aus einem wiederholbaren Prozess: testen, messen, anpassen, wiederholen. Hör auf, jeden Upload wie ein Glücksspiel zu behandeln.",
        cover:   { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", alt: "Datendiagramme, die Wachstum und Iteration zeigen" },
    },
    lead: "Eine häufige Falle ist es, jeden Upload als neues Glücksspiel zu betrachten. Die am schnellsten wachsenden Kanäle führen in der Regel engere Schleifen aus: veröffentlichen, messen, vergleichen, verbessern. Sie verlassen sich nicht auf Glück; sie konstruieren es.",
    sections: [
        {
            h2: "Der Trugschluss des Spielers bei der Content-Erstellung",
            blocks: [
                { type: "body", text: "Viele Creator verbringen Wochen damit, einen einzigen Upload zu schreiben, zu filmen und zu polieren. Sie stecken ihre ganze Seele in ein einziges Stück Inhalt und erwarten dann, dass dieses eine Ergebnis alles über die Lebensfähigkeit ihres Kanals erklärt. Wenn es scheitert, gehen sie davon aus, dass ihre Nische tot ist. Wenn es erfolgreich ist, halten sie sich für Genies. Beide Schlussfolgerungen sind meistens falsch." },
                { type: "body", text: "Das Problem ist die Stichprobengröße, nicht die Anstrengung. Ein Video kann in beide Richtungen ein Zufallstreffer sein. Ein schlechtes Thumbnail auf einem großartigen Video wird es töten. Ein großartiger Hook auf einem schrecklichen Video könnte es für einen Tag künstlich aufblähen. Man kann aus einer Stichprobengröße von eins keine aussagekräftigen Daten gewinnen." },
                { type: "callout", kind: "danger", title: "Perfektionismus tötet das Momentum", text: "Ein 'perfektes' Video liefert genau ein Datensignal. Fünf solide, 'gut genug' durchgeführte Tests liefern fünf verschiedene Signale und zeichnen ein viel klareres Bild davon, was der Markt tatsächlich will." },
            ],
        },
        {
            h2: "Die wissenschaftliche Methode für Viralität",
            blocks: [
                { type: "body", text: "Der bessere Ansatz ist, aggressiv zu testen. Behalte die Kernidee deines Inhalts bei, aber ändere absichtlich eine Variable nach der anderen über mehrere Uploads hinweg. Teste den Hook, das Pacing, das Ende, den Loop oder die Gesamtstruktur. Das Ziel ist es, den spezifischen Mechanismus zu isolieren, der die Leistungskennzahlen tatsächlich bewegt." },
                { type: "body", text: "Stell dir vor, du hast ein Konzept zur Restaurierung alter Uhren. Anstatt einen 10-minütigen Dokumentarfilm zu machen, schneidest du fünf Kurzform-Variationen. Jede testet eine andere Hypothese darüber, wie man Aufmerksamkeit hält." },
                { type: "code", lang: "Iterations-Framework", text: `1 Kernkonzept → 5 Video-Variationen

Video 1: Anderer Hook (visueller Schock - zeigt den rostigsten Teil)
Video 2: Anderer Hook (Musterunterbrechung - Uhr fallen lassen)
Video 3: Anderes Pacing (schnellere Transformationsschnitte)
Video 4: Anderes Ende (stärkeres Payoff / ASMR-Sound)
Video 5: Anderer Loop (nahtloser Übergang zurück zum Start)

Messe jedes Video nach 48h:
  → Swipe-Rate   = Signal für Hook-Qualität
  → Retention %  = Signal für Content-Qualität
  → Replay-Rate  = Signal für Loop-Qualität
  → Shares       = Signal für emotionale Resonanz` },
            ],
        },
        {
            h2: "Die Metriken entschlüsseln, die zählen",
            blocks: [
                { type: "body", text: "Aufrufe sind eine Eitelkeitsmetrik; sie sagen dir, was passiert ist, aber nicht warum. Um effektiv zu iterieren, musst du auf die diagnostischen Metriken schauen. Die Swipe-Rate (oder 'Choose-to-View'-Rate) ist deine Frontlinien-Diagnostik. Sie sagt dir sofort, ob deine ersten 3 Sekunden funktionieren. Wenn 60 % der Leute sofort gehen, ist dein Konzept vielleicht in Ordnung, aber dein Hook ist kaputt." },
                { type: "body", text: "Retentionskurven geben dir das breitere Qualitätssignal. Wenn die Leute nach dem Hook bleiben, aber bei der 15-Sekunden-Marke abspringen, hast du ein Pacing-Problem. Die Replay-Rate überprüft die Stärke des Loops deines Videos. Shares sagen dir, ob die Leute das Gefühl hatten, dass der Inhalt es wert war, weitergegeben zu werden." },
                { type: "stats", items: [
                    { value: "Swipe-Rate", label: "Misst", sub: "Hook-Qualität & erstes Versprechen" },
                    { value: "Retention",  label: "Misst", sub: "Pacing & Content-Qualität" },
                    { value: "Replays",    label: "Misst", sub: "Loop-Stärke & Detaildichte", accent: true },
                    { value: "Shares",     label: "Misst", sub: "Emotionale Resonanz" },
                ]},
            ],
        },
        {
            h2: "Die Regel der einen Variablen",
            blocks: [
                { type: "body", text: "Schnelle Verbesserungen entstehen, wenn man eine Variable nach der anderen ändert. Der häufigste Fehler von Amateur-Creatorn ist es, alles auf einmal zu ändern. Sie ändern das Thema, die Beleuchtung, den Bearbeitungsstil und die Länge im nächsten Video. Wenn dieses Video anders abschneidet, haben sie absolut keine Ahnung, welche Änderung das Ergebnis verursacht hat." },
                { type: "body", text: "Um wie ein Profi zu iterieren, isoliere deine Tests. Mache eine Anpassung, klicke auf Veröffentlichen, mache eine Beobachtung, dokumentiere das Ergebnis und gehe dann zur nächsten Hypothese über." },
                { quote: "Eine Variable. Eine Änderung. Ein klares Signal. Das ist die wissenschaftliche Methode, angewendet auf Inhalte." },
            ],
        },
        {
            h2: "Das wahre Ziel: Ein wiederholbares Format",
            blocks: [
                { type: "body", text: "Zufällige virale Spitzen sind schön für das Ego, aber sie sind schrecklich für den Aufbau eines Geschäfts. Der wahre Gewinn bei der Erstellung von Inhalten ist es, ein wiederholbares Format zu finden, das den Durchschnitt deines Kanals konstant übertrifft. Ein Format ist eine strukturierte Art, Informationen zu vermitteln, die du auf Dutzende verschiedener Themen anwenden kannst." },
                { type: "body", text: "Wenn dein Kanal normalerweise durchschnittlich 10.000 Aufrufe hat, ist ein Format, das konstant 20.000 Aufrufe zieht, ein massiver Durchbruch. Du brauchst keine Million Aufrufe, um zu wachsen; du brauchst nur einen zuverlässigen 2x-Multiplikator. Sobald du dieses Format durch Iteration gefunden hast, veröffentlichst du es konsequent." },
                { type: "callout", kind: "tip", title: "Der Zinseszins-Effekt", text: "Ein 2x-Format, das konsequent gepostet wird, summiert sich viel schneller, als die meisten Creator erwarten. In 90 Tagen kannst du mehr lernen und wachsen als manche Kanäle in einem ganzen Jahr des zufälligen Ratens." },
            ],
        },
        {
            h2: "Das Business Case für Iteration",
            blocks: [
                { type: "body", text: "Iteration ist nicht nur eine Wachstumstaktik; sie ist grundlegend eine Umsatzstrategie. Bessere Hooks und höhere Retention verbessern im Laufe der Zeit in der Regel sowohl deine Verbreitung als auch deine Monetarisierungsbedingungen. Plattformen belohnen hochgradig ansprechende Inhalte mit günstigerer algorithmischer Reichweite und oft höheren Anzeigenplatzierungen." },
                { type: "body", text: "Höre auf die Daten, iteriere unermüdlich und skaliere die gewinnenden Formate." },
            ],
        },
    ],
    authorBio: "Ich studiere, was Content performen lässt — plattform-, nischen- und formatübergreifend. Mein Ziel ist es, Creatorn Frameworks zu geben, die wirklich skalieren.",
    related: [
        { id: "niche-doesnt-matter",   title: "Warum deine Nische unwichtig ist (und was wirklich Viralität antreibt)", category: "Strategie", thumb: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=400&auto=format&fit=crop" },
        { id: "analyze-viral-content", title: "Viralen Content analysieren und gewinnende Formate finden",              category: "Analyse",   thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// JAPANESE
// ─────────────────────────────────────────────────────────────────────────────
export const ja = {
    hero: {
        title:   "バイラルな成功を導く反復戦略",
        lead:    "ほとんどのバイラル成功は偶然の1回きりのものではありません。テスト、測定、調整、反復という再現可能なプロセスから生まれます。すべての投稿をギャンブルとして扱うのはやめましょう。",
        cover:   { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", alt: "成長と反復を示すデータチャート" },
    },
    lead: "よくある罠は、すべてのアップロードを新たなギャンブルとして扱うことです。最も急成長しているチャンネルは通常、公開、測定、比較、改善という緊密なループを実行しています。彼らは運に頼らず、運を設計します。",
    sections: [
        {
            h2: "コンテンツ制作におけるギャンブラーの誤謬",
            blocks: [
                { type: "body", text: "多くのクリエイターは、1つの動画の執筆、撮影、そして推敲に何週間も費やします。彼らは魂のすべてを1つのコンテンツに注ぎ込み、その1つの結果がチャンネルの将来性についてすべてを説明してくれると期待します。失敗すればニッチが死んでいると思い込み、成功すれば自分が天才だと思い込みます。どちらの結論も通常は間違っています。" },
                { type: "body", text: "問題は努力ではなく、サンプルサイズです。1つの動画は、どちらの方向にも偶然の産物になり得ます。素晴らしい動画でもサムネイルが悪ければ死んでしまいます。ひどい動画でもフックが優れていれば、1日だけ人為的に膨れ上がるかもしれません。サンプルサイズ1からは意味のあるデータを抽出することはできません。" },
                { type: "callout", kind: "danger", title: "完璧主義が勢いを殺す", text: "1つの「完璧」な動画は、正確に1つのデータシグナルしか提供しません。5つの堅実で「十分な」テストは、5つの異なるシグナルを提供し、市場が実際に何を求めているかについてより明確な全体像を描き出します。" },
            ],
        },
        {
            h2: "バイラル性のための科学的手法",
            blocks: [
                { type: "body", text: "より良いアプローチは、積極的にテストすることです。コンテンツの核となるアイデアを維持しながら、複数のアップロードにわたって意図的に1つの変数だけを変更します。フック、ペース配分、エンディング、ループ、または全体的な構造をテストします。目標は、実際にパフォーマンス指標を動かす特定のメカニズムを特定することです。" },
                { type: "body", text: "古い時計を修復するというコンセプトがあると想像してください。10分間のドキュメンタリーを1本作る代わりに、ショートフォームのバリエーションを5つカットします。それぞれが、注意を引く方法に関する異なる仮説をテストします。" },
                { type: "code", lang: "反復フレームワーク", text: `1つのコアコンセプト → 5つの動画バリエーション

動画1：異なるフック（視覚的ショック - 最も錆びた部分を見せる）
動画2：異なるフック（パターン中断 - 時計を落とす）
動画3：異なるペース配分（より速い変容のカット）
動画4：異なるエンディング（より強力な見返り / ASMRサウンド）
動画5：異なるループ（開始へのシームレスな移行）

48時間後に各動画を測定：
  → スワイプ率   = フックの品質シグナル
  → 維持率 %     = コンテンツ品質シグナル
  → リプレイ率   = ループ品質シグナル
  → シェア数     = 感情的共鳴シグナル` },
            ],
        },
        {
            h2: "重要な指標を解読する",
            blocks: [
                { type: "body", text: "再生回数は虚栄の指標です。何が起きたかは教えてくれますが、理由は教えてくれません。効果的に反復するには、診断指標を見る必要があります。スワイプ率（または視聴選択率）は、最前線の診断です。最初の3秒が機能しているかどうかを即座に教えてくれます。60%の人がすぐに離脱する場合、コンセプトは良くてもフックが壊れています。" },
                { type: "body", text: "維持率の曲線は、より広範な品質シグナルを提供します。人々がフックを通過して残ったのに、15秒のマークで離脱する場合、ペース配分に問題があります。リプレイ率は、動画のループと見返りの強さを確認します。シェア数は、人々がそのコンテンツを自分の社会的地位を高めるために共有する価値があると感じたかどうかを教えてくれます。" },
                { type: "stats", items: [
                    { value: "スワイプ率", label: "測定", sub: "フック品質と初期の約束" },
                    { value: "維持率",     label: "測定", sub: "ペースとコンテンツ品質" },
                    { value: "リプレイ",   label: "測定", sub: "ループの強さと詳細の密度", accent: true },
                    { value: "シェア",     label: "測定", sub: "感情的共鳴とアイデンティティ" },
                ]},
            ],
        },
        {
            h2: "1変数の法則",
            blocks: [
                { type: "body", text: "急速な改善は、一度に1つの変数を変更することから生まれます。アマチュアクリエイターが最も頻繁に犯す間違いは、一度にすべてを変更してしまうことです。彼らは次の動画で、トピック、照明、編集スタイル、長さをすべて変更します。その動画のパフォーマンスが異なった場合、どの変更が結果をもたらしたのか全く分かりません。" },
                { type: "body", text: "プロのように反復するには、テストを分離します。1つの調整を行い、公開し、1つの観察を行い、結果を文書化してから、次の仮説に進みます。" },
                { quote: "1つの変数。1つの変更。1つの明確なシグナル。それがコンテンツに適用される科学的手法です。" },
            ],
        },
        {
            h2: "真の目標：再現可能なフォーマット",
            blocks: [
                { type: "body", text: "ランダムなバイラルの急増はエゴには良いですが、ビジネスを構築するには最悪です。コンテンツ制作における真の勝利は、チャンネルの平均ベースラインを常に上回る再現可能なフォーマットを見つけることです。フォーマットとは、情報を伝達するための構造化された方法であり、何十もの異なるトピックに適用できます。" },
                { type: "body", text: "チャンネルの平均が通常1万回再生である場合、常に2万回再生を引き出すフォーマットは大きな突破口です。成長するために100万回の再生は必要ありません。信頼できる2倍の乗数が必要なだけです。反復を通じてそのフォーマットを見つけたら、それを継続的に公開し、複利効果が働き始めます。" },
                { type: "callout", kind: "tip", title: "複利効果", text: "継続的に投稿される2倍のフォーマットは、クリエイターが予想するよりもはるかに速く複利で成長します。証明されたフォーマットを90日間実行することで、一部のチャンネルが当てずっぽうの1年間で学ぶ以上のことを学び、成長できます。" },
            ],
        },
        {
            h2: "反復のビジネスケース",
            blocks: [
                { type: "body", text: "反復は単なる成長の戦術ではなく、根本的には収益の戦術です。より良いフックと高い維持率は通常、時間の経過とともに配信と収益化の条件の両方を改善します。プラットフォームは、エンゲージメントの高いコンテンツに、より安価なアルゴリズムのリーチと、多くの場合、より高い広告配置で報います。" },
                { type: "body", text: "多くのクリエイターが「クリエイティブな芸術」を「ビジネス指標」から切り離そうとしますが、現代のプラットフォームでは、この2つはまったく同じシステムです。データは単に、どの芸術を最も評価しているかを伝える視聴者の声です。データに耳を傾け、絶え間なく反復し、勝てるフォーマットを拡大してください。" },
            ],
        },
    ],
    authorBio: "プラットフォーム、ニッチ、フォーマットを超えて何がコンテンツをパフォームさせるかを研究しています。クリエイターに本当にスケールするフレームワークを提供することが目標です。",
    related: [
        { id: "niche-doesnt-matter",   title: "なぜあなたのニッチは重要ではないのか（そして何が本当にバイラルを生むのか）", category: "戦略",     thumb: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=400&auto=format&fit=crop" },
        { id: "analyze-viral-content", title: "バイラルコンテンツを分析して勝てるフォーマットを見つける方法",               category: "リサーチ", thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop" },
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