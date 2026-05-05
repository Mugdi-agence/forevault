// src/app/[lang]/blog/content/analyze-viral-content.js
// ─────────────────────────────────────────────────────────────────────────────
// Article multilingue : "How to Analyze Viral Content and Find Winning Formats"
// Langues : en, fr, de, ja
// ─────────────────────────────────────────────────────────────────────────────

export const articleMeta = {
    id:       "analyze-viral-content",
    slug:     "analyze-viral-content",
    title: {
        en: "How to Analyze Viral Content and Find Winning Formats",
        fr: "Comment analyser le contenu viral et trouver les formats gagnants",
        de: "Viralen Content analysieren und gewinnende Formate finden",
        ja: "バイラルコンテンツを分析して勝てるフォーマットを見つける方法",
    },
    category: { en: "Research", fr: "Recherche", de: "Analyse", ja: "リサーチ" },
    date:     { en: "March 16, 2026", fr: "16 mars 2026", de: "16. März 2026", ja: "2026年3月16日" },
    readTime: { en: "6 min read", fr: "6 min de lecture", de: "6 Min. Lesezeit", ja: "6分で読める" },
    thumb:    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    seo: {
        en: {
            title:       "How to Analyze Viral Content and Find Winning Formats",
            description: "Most creators copy ideas. What works is copying the emotional structure beneath the content. Here is the full step-by-step method to reverse-engineer viral videos.",
            image:       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
        },
        fr: {
            title:       "Comment analyser le contenu viral et trouver les formats gagnants",
            description: "La plupart des créateurs copient les idées. Ce qui fonctionne, c'est copier la structure émotionnelle sous-jacente. Voici la méthode complète pour déconstruire les vidéos virales.",
            image:       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
        },
        de: {
            title:       "Viralen Content analysieren und gewinnende Formate finden",
            description: "Die meisten Creator kopieren Ideen. Was wirklich funktioniert, ist die emotionale Struktur dahinter zu kopieren. Hier ist die vollständige Schritt-für-Schritt-Methode.",
            image:       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
        },
        ja: {
            title:       "バイラルコンテンツを分析して勝てるフォーマットを見つける方法",
            description: "ほとんどのクリエイターはアイデアをコピーします。実際に機能するのはコンテンツの下にある感情的な構造をコピーすることです。バイラル動画をリバースエンジニアリングする完全な方法を紹介します。",
            image:       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
        },
    },
    author: {
        en: { name: "Editorial Team", role: "Content Strategy" },
        fr: { name: "Équipe éditoriale", role: "Stratégie de contenu" },
        de: { name: "Redaktion", role: "Content-Strategie" },
        ja: { name: "編集チーム", role: "コンテンツ戦略" },
    },
    tags: {
        en: ["Research", "Formats", "Viral Analysis", "Frameworks", "Attention"],
        fr: ["Recherche", "Formats", "Analyse virale", "Frameworks", "Attention"],
        de: ["Analyse", "Formate", "Virale Inhalte", "Frameworks", "Aufmerksamkeit"],
        ja: ["リサーチ", "フォーマット", "バイラル分析", "フレームワーク", "注目"],
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────
export const en = {
    hero: {
        title:   "How to Analyze Viral Content and Find Winning Formats",
        lead:    "Most creators copy surface-level stuff: topic, thumbnail style, trend. The part that really transfers is structure. That is what keeps people watching.",
        cover:   { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop", alt: "Analyzing viral content data" },
    },
    lead: "Analyzing viral content is less about prediction and more about pattern recognition. Find what already holds attention, then reverse-engineer why.",
    sections: [
        {
            h2: "Why creators misread viral success",
            blocks: [
                { type: "body", text: "Every week, someone publishes a breakdown of why a video went viral. Nine times out of ten it focuses on the wrong layer. The title was clever. The thumbnail had contrast. The topic was trending. These things matter at the margin, but they are not the engine." },
                { type: "body", text: "The engine is the feeling the video produces, and the pace at which it delivers that feeling. A viewer does not stay for a topic. They stay because a sequence of micro-rewards kept deferring their exit. Tension builds. Progress is visible. A resolution arrives. That loop, not the surface packaging, is what travels from one niche to another." },
                { type: "callout", kind: "info", title: "The key distinction", text: "Topic is the wrapper. Format is the product. Copying a topic gets you into the same crowded room. Copying a format gives you the engine, which you can rebuild in any room you choose." },
            ],
        },
        {
            h2: "Step 1 — Identify dopamine niches",
            blocks: [
                { type: "body", text: "Some niches naturally produce high-stimulation viewing. Not because the content is more important, but because the payoff is visible, fast, and easy to process. Cleaning, restoration, cooking, drawing, coding interfaces from scratch. You can see progress without a long explanation." },
                { type: "body", text: "What makes these formats travel is the resolution loop. The viewer can feel the gap between state A and state B closing. Messy becomes clean. Broken becomes restored. Blank canvas becomes finished illustration. The emotional payoff does not require domain knowledge to appreciate." },
                { type: "stats", items: [
                    { value: "🧹", label: "Messy → Clean",       sub: "Cleaning & restoration" },
                    { value: "💻", label: "Blank → Built",        sub: "Dev & design content",  accent: true },
                    { value: "✏️", label: "Sketch → Render",      sub: "Creative process" },
                ]},
                { type: "body", text: "Once you identify which payoff logic drives a niche, you can apply it elsewhere. A legal explainer that moves from confusion to clarity uses the same emotional spine as a cleaning video. The visual language is different. The underlying reward circuit is identical." },
            ],
        },
        {
            h2: "Step 2 — Deconstruct frame by frame",
            blocks: [
                { type: "body", text: "If a video has passed ten million views, there is usually repeatable structure inside it. The challenge is that most analysis stops at the surface: people note the title worked, or the thumbnail had a face with an expression. That is commentary, not analysis." },
                { type: "body", text: "Real analysis requires going frame by frame and marking the exact moment your attention shifted, or almost left. These are the inflection points. They tell you more about the format than anything else in the video." },
                { type: "code", lang: "analysis framework", text: `Hook     (0–3s)   → Visual shock, anomaly, or unresolved question
Build    (3–20s)  → Clear progression, small visible steps
Tension  (varies) → One moment where forward motion stalls briefly
Payoff   (varies) → Satisfying resolution of the built tension
Loop     (end)    → Last frame connects back to first, inviting replay

Questions to answer per video:
  • What was the first visual the viewer saw?
  • When did I feel the urge to keep watching?
  • When did I almost stop? What pulled me back?
  • What was the exact moment of satisfaction?
  • Did I watch again? Why?` },
                { type: "body", text: "Do this exercise on ten videos in the same category and patterns start repeating. The hook duration stabilizes around a range. The build structure follows a rhythm. The tension moment appears at a consistent position. You stop seeing randomness. You start seeing design decisions made by creators who may not have been conscious they were making them." },
            ],
        },
        {
            h2: "Step 3 — Separate format from content",
            blocks: [
                { type: "body", text: "This is the step most people skip. Once you have identified the emotional engine of a viral video, the work is to isolate it from the specific content it was wrapped in. A format is reusable. A topic is not." },
                { type: "body", text: "Consider the 'transformation reveal' format: before state shown, transformation implied but not shown, after state revealed. This structure appears in beauty, construction, weight loss, code refactoring, city planning, and financial planning. Same format. Completely different topics. The reason it works in each case is the same: anticipation followed by satisfying revelation." },
                { type: "callout", kind: "tip", title: "Practical exercise", text: "Take any video over five million views. Write the emotional sequence in three words: what the viewer felt at the start, middle, and end. Now write a version of that same sequence using content from your own niche. That translation is a format transfer." },
                { type: "body", text: "The most portable formats are the ones whose emotional payoff requires no domain expertise to appreciate. Restoration content works for people who know nothing about the object being restored. The pleasure is visual and structural, not intellectual. When you evaluate a format for transfer, ask: could someone who knows nothing about my topic still feel the payoff?" },
            ],
        },
        {
            h2: "Step 4 — Test at minimal cost",
            blocks: [
                { type: "body", text: "Format testing should be fast and cheap. The goal is not to produce a polished video on a new format — it is to detect whether the format has traction before committing significant production time to it." },
                { type: "body", text: "The fastest proxy for format traction is early watch time on a short video. A sixty-second video that holds seventy percent of viewers through is giving you strong signal that the format works in your context. A three-minute video that loses eighty percent in the first thirty seconds is telling you the format did not transfer cleanly." },
                { type: "callout", kind: "tip", title: "The mute test", text: "Watch the video at 2× speed with sound off. If it still pulls you forward, the visual structure is doing real work. If it falls apart without audio, the format is too dependent on narration and will underperform when scrolled past with sound off — which is how a large share of short content is consumed." },
                { type: "body", text: "Run three to five format tests before drawing conclusions. A single test that underperforms might mean the format does not transfer. It might also mean the execution was weak, or the thumbnail did not communicate the right expectation. Pattern emerges across multiple attempts, not from a single data point." },
            ],
        },
        {
            h2: "Step 5 — Build a format library",
            blocks: [
                { type: "body", text: "The output of this process, done consistently, is a personal library of formats with documented evidence about what works in your niche and why. This is more durable than any single viral video, because it lets you make decisions based on structural reasoning rather than guesswork." },
                { type: "body", text: "Each entry in the library should include the format name, the emotional sequence it produces, the niches where you have seen it work, the niche where you tested it, what happened, and what you would change. Over six months of consistent analysis, this library becomes a significant competitive advantage." },
                { type: "body", text: "Most creators operate without this. They react to trends, copy surfaces, and wonder why results are inconsistent. A format library answers the question before you start production: which structure, proven to hold attention in this type of content, fits what I am about to make?" },
            ],
        },
        {
            h2: "Common mistakes in viral content analysis",
            blocks: [
                { type: "body", text: "The most frequent error is selecting the analysis sample based on view count alone. Very high view count videos are often viral because of distribution factors that had nothing to do with the format: a celebrity share, a news cycle, an algorithm anomaly. These videos can mislead your analysis by suggesting a format worked when it actually benefited from an external event." },
                { type: "body", text: "A better sample is videos that outperform their channel's baseline by a consistent multiple. A video on a fifty-thousand subscriber channel that reaches two million views tells you more about format effectiveness than a video on a ten-million subscriber channel that reaches twelve million. The delta is what matters, not the absolute number." },
                { type: "callout", kind: "warn", title: "Survivorship bias", text: "You only see the formats that made it. For every viral format you can observe, there are hundreds of attempts that used the same structure and did not reach critical mass. Format analysis gives you a better starting point, not a guarantee. Test every hypothesis." },
                { type: "body", text: "The second common mistake is over-indexing on niche-specific analysis. Formats that work across categories are more valuable than formats that only work within one vertical. Cross-niche formats tend to be more structurally sound because they have been tested against a wider variety of audiences and contexts." },
            ],
        },
        {
            quote: "Study what already holds attention. Then rebuild it in your own style, for your own audience, in your own language.",
        },
        {
            h2: "What this looks like in practice",
            blocks: [
                { type: "body", text: "Concretely: spend ninety minutes per week on structured analysis. Watch ten to fifteen videos across two or three niches. Apply the frame-by-frame framework to three of them in detail. Document the emotional sequences. Identify the format. Ask whether it transfers to your content type." },
                { type: "body", text: "After four weeks, you will have analyzed forty to sixty videos with intentionality. You will start seeing the same structures recur. You will be able to name them. You will know which ones your audience has responded to and which ones fell flat. That knowledge compounds. The creator who does this for a year builds a mental model of attention mechanics that most people never develop, even after a decade of posting content." },
            ],
        },
    ],
    authorBio: "I study what makes content perform — across platforms, niches, and formats. My goal is to give creators frameworks that actually scale.",
    related: [
        { id: "three-pillars-viral",  title: "The 3 Pillars of Viral Content: Transformation, Simplicity, and Stimulation", category: "Strategy",    thumb: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?w=400&auto=format&fit=crop" },
        { id: "hook-killing-videos",  title: "Why Your Hook Is Killing Your Videos (And How to Fix It)",                     category: "Production",  thumb: "https://images.unsplash.com/photo-1574717024453-354056aec766?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// FRENCH
// ─────────────────────────────────────────────────────────────────────────────
export const fr = {
    hero: {
        title:   "Comment analyser le contenu viral et trouver les formats gagnants",
        lead:    "La plupart des créateurs copient des éléments de surface : sujet, style de miniature, tendance. Ce qui se transfère vraiment, c'est la structure. C'est elle qui retient les spectateurs.",
        cover:   { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop", alt: "Analyse de contenu viral" },
    },
    lead: "Analyser le contenu viral relève moins de la prédiction que de la reconnaissance de patterns. Il s'agit de trouver ce qui retient déjà l'attention, puis de comprendre pourquoi.",
    sections: [
        {
            h2: "Pourquoi les créateurs mal interprètent le succès viral",
            blocks: [
                { type: "body", text: "Chaque semaine, quelqu'un publie une analyse de pourquoi une vidéo est devenue virale. Neuf fois sur dix, elle se concentre sur la mauvaise couche. Le titre était accrocheur. La miniature avait du contraste. Le sujet était tendance. Ces éléments ont de l'importance à la marge, mais ce ne sont pas le moteur." },
                { type: "body", text: "Le moteur, c'est le sentiment que produit la vidéo et la cadence à laquelle elle le délivre. Un spectateur ne reste pas pour un sujet. Il reste parce qu'une séquence de micro-récompenses a continûment différé son départ. La tension monte. La progression est visible. Une résolution arrive. Cette boucle — et non l'emballage de surface — est ce qui se transfère d'une niche à l'autre." },
                { type: "callout", kind: "info", title: "La distinction clé", text: "Le sujet est l'emballage. Le format est le produit. Copier un sujet vous place dans la même salle bondée. Copier un format vous donne le moteur, que vous pouvez reconstruire dans n'importe quelle salle." },
            ],
        },
        {
            h2: "Étape 1 — Identifier les niches à dopamine",
            blocks: [
                { type: "body", text: "Certaines niches produisent naturellement une expérience de visionnage très stimulante. Non pas parce que le contenu est plus important, mais parce que la récompense est visible, rapide et facile à traiter. Nettoyage, restauration, cuisine, dessin, codage d'interfaces from scratch. On peut voir la progression sans longue explication." },
                { type: "body", text: "Ce qui fait voyager ces formats, c'est la boucle de résolution. Le spectateur peut sentir l'écart entre l'état A et l'état B se réduire. Le désordre devient propre. Le cassé devient restauré. La toile blanche devient une illustration achevée. La récompense émotionnelle ne nécessite aucune connaissance du domaine pour être appréciée." },
                { type: "stats", items: [
                    { value: "🧹", label: "Désordre → Propre",    sub: "Nettoyage & restauration" },
                    { value: "💻", label: "Vide → Construit",      sub: "Dev & design",            accent: true },
                    { value: "✏️", label: "Esquisse → Rendu",      sub: "Processus créatif" },
                ]},
                { type: "body", text: "Une fois que vous identifiez la logique de récompense qui anime une niche, vous pouvez l'appliquer ailleurs. Un contenu juridique qui passe de la confusion à la clarté utilise la même colonne émotionnelle qu'une vidéo de nettoyage. Le langage visuel est différent. Le circuit de récompense sous-jacent est identique." },
            ],
        },
        {
            h2: "Étape 2 — Déconstruire image par image",
            blocks: [
                { type: "body", text: "Si une vidéo dépasse dix millions de vues, il y a généralement une structure répétable à l'intérieur. Le défi est que la plupart des analyses s'arrêtent à la surface : les gens notent que le titre a fonctionné, ou que la miniature avait un visage expressif. C'est du commentaire, pas de l'analyse." },
                { type: "body", text: "Une vraie analyse nécessite de regarder image par image et de marquer le moment exact où votre attention a changé, ou a failli partir. Ce sont les points d'inflexion. Ils vous renseignent davantage sur le format que tout le reste de la vidéo." },
                { type: "code", lang: "framework d'analyse", text: `Accroche  (0–3s)   → Choc visuel, anomalie ou question non résolue
Build     (3–20s)  → Progression claire, petites étapes visibles
Tension   (varie)  → Moment où la progression marque une pause
Résolution (varie) → Satisfaction de la tension construite
Boucle    (fin)    → Dernière image reliée à la première

Questions à répondre par vidéo :
  • Quelle était la première image vue par le spectateur ?
  • Quand ai-je ressenti l'envie de continuer à regarder ?
  • Quand ai-je failli arrêter ? Qu'est-ce qui m'a retenu ?
  • Quel était le moment exact de satisfaction ?
  • Ai-je regardé à nouveau ? Pourquoi ?` },
                { type: "body", text: "Faites cet exercice sur dix vidéos dans la même catégorie et les patterns commencent à se répéter. La durée du hook se stabilise autour d'une plage. La structure du build suit un rythme. Le moment de tension apparaît à une position constante. Vous cessez de voir du hasard. Vous commencez à voir des décisions de design prises par des créateurs qui n'en étaient peut-être pas conscients." },
            ],
        },
        {
            h2: "Étape 3 — Séparer format et contenu",
            blocks: [
                { type: "body", text: "C'est l'étape que la plupart des gens sautent. Une fois que vous avez identifié le moteur émotionnel d'une vidéo virale, le travail est de l'isoler du contenu spécifique dans lequel il était emballé. Un format est réutilisable. Un sujet ne l'est pas." },
                { type: "body", text: "Considérons le format de la 'révélation de transformation' : état initial montré, transformation impliquée mais non montrée, état final révélé. Cette structure apparaît dans la beauté, la construction, la perte de poids, le refactoring de code, l'urbanisme et la planification financière. Même format. Sujets complètement différents. La raison pour laquelle ça fonctionne dans chaque cas est la même : l'anticipation suivie d'une révélation satisfaisante." },
                { type: "callout", kind: "tip", title: "Exercice pratique", text: "Prenez n'importe quelle vidéo de plus de cinq millions de vues. Écrivez la séquence émotionnelle en trois mots : ce que le spectateur ressentait au début, au milieu et à la fin. Maintenant, écrivez une version de cette même séquence en utilisant du contenu de votre propre niche. Cette traduction est un transfert de format." },
                { type: "body", text: "Les formats les plus portables sont ceux dont la récompense émotionnelle ne nécessite aucune expertise du domaine pour être appréciée. Le contenu de restauration fonctionne pour des personnes qui ne savent rien sur l'objet restauré. Le plaisir est visuel et structurel, pas intellectuel." },
            ],
        },
        {
            h2: "Étape 4 — Tester à moindre coût",
            blocks: [
                { type: "body", text: "Les tests de format doivent être rapides et peu coûteux. L'objectif n'est pas de produire une vidéo soignée sur un nouveau format — c'est de détecter si le format a de la traction avant de lui consacrer un temps de production significatif." },
                { type: "body", text: "Le proxy le plus rapide pour la traction d'un format est le temps de visionnage précoce sur une courte vidéo. Une vidéo de soixante secondes qui retient soixante-dix pour cent des spectateurs jusqu'à la fin vous donne un signal fort que le format fonctionne dans votre contexte." },
                { type: "callout", kind: "tip", title: "Le test du silence", text: "Regardez la vidéo en 2× avec le son coupé. Si elle vous attire toujours vers l'avant, la structure visuelle fait un vrai travail. Si elle s'effondre sans audio, le format dépend trop de la narration et sous-performera quand il sera parcouru sans son — ce qui est la façon dont une grande partie du contenu court est consommé." },
                { type: "body", text: "Effectuez trois à cinq tests de format avant de tirer des conclusions. Un seul test sous-performant peut signifier que le format ne se transfère pas. Il peut aussi signifier que l'exécution était faible, ou que la miniature ne communiquait pas la bonne attente." },
            ],
        },
        {
            h2: "Étape 5 — Construire une bibliothèque de formats",
            blocks: [
                { type: "body", text: "Le résultat de ce processus, effectué de manière consistante, est une bibliothèque personnelle de formats avec des preuves documentées de ce qui fonctionne dans votre niche et pourquoi. C'est plus durable que n'importe quelle vidéo virale individuelle, parce que ça vous permet de prendre des décisions basées sur un raisonnement structurel plutôt que sur des suppositions." },
                { type: "body", text: "Chaque entrée de la bibliothèque devrait inclure le nom du format, la séquence émotionnelle qu'il produit, les niches où vous l'avez vu fonctionner, la niche où vous l'avez testé, ce qui s'est passé, et ce que vous changeriez. Sur six mois d'analyse consistante, cette bibliothèque devient un avantage concurrentiel significatif." },
                { type: "body", text: "La plupart des créateurs opèrent sans cela. Ils réagissent aux tendances, copient les surfaces, et s'interrogent sur l'inconsistance de leurs résultats. Une bibliothèque de formats répond à la question avant même de commencer la production." },
            ],
        },
        {
            h2: "Erreurs courantes dans l'analyse de contenu viral",
            blocks: [
                { type: "body", text: "L'erreur la plus fréquente est de sélectionner l'échantillon d'analyse sur la seule base du nombre de vues. Les vidéos à très haute audience sont souvent virales en raison de facteurs de distribution qui n'avaient rien à voir avec le format : partage d'une célébrité, cycle d'actualité, anomalie algorithmique." },
                { type: "body", text: "Un meilleur échantillon est celui des vidéos qui surperforment la ligne de base de leur chaîne par un multiple consistant. Une vidéo sur une chaîne de cinquante mille abonnés qui atteint deux millions de vues vous dit plus sur l'efficacité du format qu'une vidéo sur une chaîne de dix millions d'abonnés qui en atteint douze millions." },
                { type: "callout", kind: "warn", title: "Biais de survie", text: "Vous ne voyez que les formats qui ont réussi. Pour chaque format viral observable, il y a des centaines de tentatives qui utilisaient la même structure et n'ont pas atteint la masse critique. L'analyse de format vous donne un meilleur point de départ, pas une garantie. Testez chaque hypothèse." },
            ],
        },
        {
            quote: "Étudiez ce qui retient déjà l'attention. Puis reconstruisez-le dans votre propre style, pour votre propre audience, dans votre propre langage.",
        },
    ],
    authorBio: "J'étudie ce qui fait performer le contenu — sur toutes les plateformes, niches et formats. Mon objectif est de donner aux créateurs des frameworks qui fonctionnent vraiment à grande échelle.",
    related: [
        { id: "three-pillars-viral", title: "Les 3 piliers du contenu viral : transformation, simplicité et stimulation", category: "Stratégie",   thumb: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?w=400&auto=format&fit=crop" },
        { id: "hook-killing-videos", title: "Pourquoi votre accroche tue vos vidéos (et comment y remédier)",            category: "Production", thumb: "https://images.unsplash.com/photo-1574717024453-354056aec766?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GERMAN
// ─────────────────────────────────────────────────────────────────────────────
export const de = {
    hero: {
        title:   "Viralen Content analysieren und gewinnende Formate finden",
        lead:    "Die meisten Creator kopieren Oberflächliches: Thema, Thumbnail-Stil, Trend. Was wirklich übertragbar ist, ist die Struktur. Das ist es, was die Zuschauer hält.",
        cover:   { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop", alt: "Analyse viraler Inhalte" },
    },
    lead: "Viralen Content zu analysieren ist weniger Vorhersage als Mustererkennung. Finde heraus, was Aufmerksamkeit bereits hält, und reverse-engineere dann das Warum.",
    sections: [
        {
            h2: "Warum Creator viralen Erfolg falsch lesen",
            blocks: [
                { type: "body", text: "Jede Woche veröffentlicht jemand eine Analyse, warum ein Video viral gegangen ist. Neun von zehn konzentrieren sich auf die falsche Ebene. Der Titel war clever. Das Thumbnail hatte Kontrast. Das Thema lag im Trend. Diese Dinge haben marginale Bedeutung, sind aber nicht der Motor." },
                { type: "body", text: "Der Motor ist das Gefühl, das das Video erzeugt, und das Tempo, in dem es dieses Gefühl liefert. Ein Zuschauer bleibt nicht wegen eines Themas. Er bleibt, weil eine Sequenz von Mikro-Belohnungen seinen Absprung kontinuierlich verzögert hat. Spannung baut sich auf. Fortschritt ist sichtbar. Eine Auflösung tritt ein. Diese Schleife — nicht die oberflächliche Verpackung — ist das, was von einer Nische zur anderen wandert." },
                { type: "callout", kind: "info", title: "Die entscheidende Unterscheidung", text: "Das Thema ist die Verpackung. Das Format ist das Produkt. Ein Thema zu kopieren bringt dich in denselben überfüllten Raum. Ein Format zu kopieren gibt dir den Motor, den du in jedem beliebigen Raum neu aufbauen kannst." },
            ],
        },
        {
            h2: "Schritt 1 — Dopamin-Nischen identifizieren",
            blocks: [
                { type: "body", text: "Manche Nischen erzeugen natürlicherweise hochstimulierendes Zuschauen. Nicht weil der Inhalt wichtiger ist, sondern weil die Belohnung sichtbar, schnell und leicht verarbeitbar ist. Reinigung, Restaurierung, Kochen, Zeichnen, Interfaces von Grund auf programmieren. Man kann Fortschritt sehen, ohne lange Erklärungen." },
                { type: "body", text: "Was diese Formate übertragbar macht, ist die Auflösungsschleife. Der Zuschauer kann spüren, wie sich die Lücke zwischen Zustand A und Zustand B schließt. Unordnung wird Ordnung. Kaputtes wird restauriert. Leere Leinwand wird fertiger Illustration. Die emotionale Belohnung erfordert kein Fachwissen, um sie zu schätzen." },
                { type: "stats", items: [
                    { value: "🧹", label: "Chaos → Ordnung",      sub: "Reinigung & Restaurierung" },
                    { value: "💻", label: "Leer → Gebaut",         sub: "Dev & Design",             accent: true },
                    { value: "✏️", label: "Skizze → Rendering",    sub: "Kreativer Prozess" },
                ]},
                { type: "body", text: "Sobald du identifizierst, welche Belohnungslogik eine Nische antreibt, kannst du sie anderswo anwenden. Ein Rechtserklärer, der von Verwirrung zu Klarheit führt, verwendet dasselbe emotionale Rückgrat wie ein Reinigungsvideo. Die visuelle Sprache ist anders. Der zugrundeliegende Belohnungskreislauf ist identisch." },
            ],
        },
        {
            h2: "Schritt 2 — Bild für Bild dekonstruieren",
            blocks: [
                { type: "body", text: "Wenn ein Video zehn Millionen Aufrufe überschritten hat, steckt normalerweise eine wiederholbare Struktur darin. Die Herausforderung ist, dass die meisten Analysen an der Oberfläche bleiben: Man stellt fest, dass der Titel funktioniert hat, oder das Thumbnail ein ausdrucksvolles Gesicht zeigte. Das ist Kommentar, keine Analyse." },
                { type: "body", text: "Echte Analyse erfordert, Bild für Bild durchzugehen und den genauen Moment zu markieren, in dem sich die Aufmerksamkeit verändert hat oder fast abgewandert wäre. Das sind die Wendepunkte. Sie sagen mehr über das Format aus als alles andere im Video." },
                { type: "code", lang: "Analyse-Framework", text: `Hook       (0–3s)    → Visueller Schock, Anomalie oder ungelöste Frage
Aufbau     (3–20s)   → Klarer Fortschritt, kleine sichtbare Schritte
Spannung   (variabel)→ Moment, in dem die Vorwärtsbewegung kurz ins Stocken gerät
Auflösung  (variabel)→ Befriedigende Lösung der aufgebauten Spannung
Schleife   (Ende)    → Letztes Bild verbindet sich mit dem ersten

Fragen pro Video:
  • Was war das erste Bild, das der Zuschauer sah?
  • Wann spürte ich den Drang, weiterzuschauen?
  • Wann wollte ich fast aufhören? Was zog mich zurück?
  • Was war der genaue Moment der Befriedigung?
  • Habe ich es noch einmal angeschaut? Warum?` },
                { type: "body", text: "Mach diese Übung mit zehn Videos in derselben Kategorie und Muster beginnen sich zu wiederholen. Die Hook-Dauer stabilisiert sich um einen Bereich. Die Aufbaustruktur folgt einem Rhythmus. Der Spannungsmoment erscheint an einer konstanten Position. Du hörst auf, Zufall zu sehen. Du beginnst, Designentscheidungen zu sehen." },
            ],
        },
        {
            h2: "Schritt 3 — Format von Inhalt trennen",
            blocks: [
                { type: "body", text: "Dies ist der Schritt, den die meisten überspringen. Sobald du den emotionalen Motor eines viralen Videos identifiziert hast, besteht die Arbeit darin, ihn vom spezifischen Inhalt zu isolieren, in den er verpackt war. Ein Format ist wiederverwendbar. Ein Thema nicht." },
                { type: "body", text: "Betrachte das Format der 'Transformationsoffenbarung': Ausgangszustand gezeigt, Transformation angedeutet aber nicht gezeigt, Endzustand enthüllt. Diese Struktur taucht in Beauty, Bauwesen, Gewichtsverlust, Code-Refactoring, Stadtplanung und Finanzplanung auf. Gleiches Format. Völlig verschiedene Themen." },
                { type: "callout", kind: "tip", title: "Praktische Übung", text: "Nimm ein beliebiges Video mit über fünf Millionen Aufrufen. Schreibe die emotionale Sequenz in drei Worten: was der Zuschauer am Anfang, in der Mitte und am Ende fühlte. Schreibe nun eine Version dieser Sequenz mit Inhalt aus deiner eigenen Nische. Diese Übersetzung ist ein Format-Transfer." },
            ],
        },
        {
            h2: "Schritt 4 — Kostengünstig testen",
            blocks: [
                { type: "body", text: "Format-Tests sollten schnell und günstig sein. Das Ziel ist nicht, ein ausgefeiltes Video in einem neuen Format zu produzieren — es ist zu erkennen, ob das Format Zugkraft hat, bevor man erhebliche Produktionszeit investiert." },
                { type: "callout", kind: "tip", title: "Der Stummtest", text: "Schau das Video mit 2× Geschwindigkeit ohne Ton. Wenn es dich trotzdem vorwärts zieht, leistet die visuelle Struktur echte Arbeit. Wenn es ohne Audio zusammenbricht, ist das Format zu abhängig von der Narration und wird bei stummem Scrollen underperformen." },
                { type: "body", text: "Führe drei bis fünf Format-Tests durch, bevor du Schlussfolgerungen ziehst. Ein einzelner Test, der underperformt, könnte bedeuten, dass das Format sich nicht überträgt. Es könnte auch bedeuten, dass die Ausführung schwach war, oder das Thumbnail keine richtige Erwartung kommunizierte." },
            ],
        },
        {
            h2: "Schritt 5 — Eine Format-Bibliothek aufbauen",
            blocks: [
                { type: "body", text: "Das Ergebnis dieses Prozesses, konsistent durchgeführt, ist eine persönliche Bibliothek von Formaten mit dokumentierten Belegen darüber, was in deiner Nische funktioniert und warum. Das ist dauerhafter als jedes einzelne virale Video, weil es dir ermöglicht, Entscheidungen auf der Grundlage strukturellen Denkens zu treffen." },
                { type: "body", text: "Die meisten Creator operieren ohne das. Sie reagieren auf Trends, kopieren Oberflächen und fragen sich, warum die Ergebnisse inkonsistent sind. Eine Format-Bibliothek beantwortet die Frage, bevor die Produktion beginnt: Welche Struktur, die nachweislich Aufmerksamkeit in diesem Content-Typ hält, passt zu dem, was ich gerade machen will?" },
            ],
        },
        {
            h2: "Häufige Fehler bei der Analyse viraler Inhalte",
            blocks: [
                { type: "body", text: "Der häufigste Fehler ist, das Analysebeispiel ausschließlich auf der Grundlage der Aufrufzahl auszuwählen. Videos mit sehr hoher Aufrufzahl sind oft viral aufgrund von Verteilungsfaktoren, die nichts mit dem Format zu tun hatten: ein Celebrity-Share, ein Nachrichtenzyklus, eine Algorithmus-Anomalie." },
                { type: "callout", kind: "warn", title: "Survivorship Bias", text: "Du siehst nur die Formate, die es geschafft haben. Für jedes beobachtbare virale Format gibt es Hunderte von Versuchen, die dieselbe Struktur verwendeten und keine kritische Masse erreichten. Format-Analyse gibt dir einen besseren Ausgangspunkt, keine Garantie." },
            ],
        },
        {
            quote: "Studiere, was bereits Aufmerksamkeit hält. Dann baue es in deinem eigenen Stil, für dein eigenes Publikum, in deiner eigenen Sprache neu auf.",
        },
    ],
    authorBio: "Ich studiere, was Content performen lässt — plattform-, nischen- und formatübergreifend. Mein Ziel ist es, Creatorn Frameworks zu geben, die wirklich skalieren.",
    related: [
        { id: "three-pillars-viral", title: "Die 3 Säulen viralen Contents: Transformation, Einfachheit und Stimulation", category: "Strategie",   thumb: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?w=400&auto=format&fit=crop" },
        { id: "hook-killing-videos", title: "Warum dein Hook deine Videos tötet (und wie du es behebst)",                 category: "Produktion", thumb: "https://images.unsplash.com/photo-1574717024453-354056aec766?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// JAPANESE
// ─────────────────────────────────────────────────────────────────────────────
export const ja = {
    hero: {
        title:   "バイラルコンテンツを分析して勝てるフォーマットを見つける方法",
        lead:    "ほとんどのクリエイターは表面的なもの — トピック、サムネイルのスタイル、トレンド — をコピーします。本当に転用できるのは構造です。それこそが視聴者を引き止めるものです。",
        cover:   { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop", alt: "バイラルコンテンツの分析" },
    },
    lead: "バイラルコンテンツの分析は予測よりもパターン認識に近いものです。すでに注目を集めているものを見つけ、その理由をリバースエンジニアリングしましょう。",
    sections: [
        {
            h2: "クリエイターがバイラル成功を誤読する理由",
            blocks: [
                { type: "body", text: "毎週誰かが「なぜこの動画がバイラルになったか」の分析を公開しています。10回中9回は間違った層に焦点を当てています。タイトルが巧みだった。サムネイルにコントラストがあった。トピックがトレンドだった。これらは重要ですが、エンジンではありません。" },
                { type: "body", text: "エンジンは動画が生み出す感情と、その感情を届けるペースです。視聴者はトピックのためにとどまるのではありません。一連のマイクロ報酬が継続的に離脱を先延ばしにするためにとどまるのです。緊張が高まる。進行が見える。解決が訪れる。この繰り返し — 表面的な包装ではなく — がニッチを超えて伝わるものです。" },
                { type: "callout", kind: "info", title: "重要な区別", text: "トピックは包装紙です。フォーマットが製品です。トピックをコピーすると同じ混雑した部屋に入ります。フォーマットをコピーするとエンジンが手に入り、それはどの部屋でも再構築できます。" },
            ],
        },
        {
            h2: "ステップ1 — ドーパミンニッチを特定する",
            blocks: [
                { type: "body", text: "一部のニッチは自然に高い刺激視聴を生み出します。コンテンツが重要だからではなく、報酬が見え、速く、処理しやすいからです。清掃、修復、料理、絵を描くこと、インターフェースをゼロから作ること。長い説明なしに進行を見ることができます。" },
                { type: "body", text: "これらのフォーマットが伝わる理由は解決ループです。視聴者は状態Aと状態Bの差が縮まるのを感じることができます。散らかったものが清潔になる。壊れたものが修復される。白紙が完成したイラストになる。感情的な報酬はドメイン知識なしに理解できます。" },
                { type: "stats", items: [
                    { value: "🧹", label: "乱雑 → 清潔",         sub: "清掃・修復コンテンツ" },
                    { value: "💻", label: "空白 → 構築済み",      sub: "開発・デザインコンテンツ", accent: true },
                    { value: "✏️", label: "スケッチ → 完成品",    sub: "クリエイティブプロセス" },
                ]},
                { type: "body", text: "ニッチを動かす報酬ロジックを特定すれば、他の場所に応用できます。混乱から明確さへと移行する法律解説動画は、清掃動画と同じ感情的な骨格を使っています。視覚的な言語は異なります。根本的な報酬回路は同一です。" },
            ],
        },
        {
            h2: "ステップ2 — フレームごとに分解する",
            blocks: [
                { type: "body", text: "動画が1,000万回再生を超えている場合、通常そこには繰り返し可能な構造があります。課題は、ほとんどの分析が表面にとどまることです。タイトルが機能した、サムネイルに表情のある顔があったと指摘します。それはコメントであって分析ではありません。" },
                { type: "body", text: "真の分析はフレームごとに進み、注意が変化した、またはほぼ離れた正確な瞬間をマークする必要があります。これらが変曲点です。動画の他の何よりもフォーマットについて多くを語ります。" },
                { type: "code", lang: "分析フレームワーク", text: `フック     (0–3秒)   → 視覚的ショック、異常、または未解決の問い
ビルド     (3–20秒)  → 明確な進行、小さな見える段階
テンション (可変)    → 前進が一時的に停滞する瞬間
ペイオフ   (可変)    → 構築された緊張の満足のいく解決
ループ     (終了)    → 最後のフレームが最初と繋がりリプレイを誘う

各動画への質問：
  • 視聴者が最初に見た映像は何か？
  • いつ見続けたいという衝動を感じたか？
  • いつほぼ止めそうになったか？何が引き止めたか？
  • 満足の正確な瞬間はいつだったか？
  • また視聴したか？なぜか？` },
                { type: "body", text: "この練習を同じカテゴリの10本の動画でやると、パターンが繰り返されるようになります。フック期間が特定の範囲に安定します。ビルド構造がリズムに従います。テンションの瞬間が一定の位置に現れます。ランダム性が見えなくなります。デザインの決断が見え始めます。" },
            ],
        },
        {
            h2: "ステップ3 — フォーマットをコンテンツから分離する",
            blocks: [
                { type: "body", text: "これはほとんどの人がスキップするステップです。バイラル動画の感情エンジンを特定したら、それが包まれていた特定のコンテンツから分離する作業をします。フォーマットは再利用できます。トピックはできません。" },
                { type: "body", text: "「変容の公開」フォーマットを考えてみましょう：初期状態が示され、変容は示唆されるが示されず、最終状態が明らかになる。この構造は美容、建設、減量、コードリファクタリング、都市計画、財務計画に登場します。同じフォーマット。全く異なるトピック。" },
                { type: "callout", kind: "tip", title: "実践的な練習", text: "500万回以上再生された動画を取ってください。感情シーケンスを3つの言葉で書いてください：視聴者が最初、中間、終わりに感じたこと。次に自分のニッチのコンテンツを使って同じシーケンスのバージョンを書いてください。その翻訳がフォーマット転用です。" },
            ],
        },
        {
            h2: "ステップ4 — 低コストでテストする",
            blocks: [
                { type: "body", text: "フォーマットテストは速く、安くあるべきです。目標は新しいフォーマットで洗練された動画を作ることではなく、大量の制作時間を投資する前にフォーマットに牽引力があるかどうかを検出することです。" },
                { type: "callout", kind: "tip", title: "ミュートテスト", text: "動画を2倍速で音声なしで視聴してください。それでも前へ引き込まれるなら、視覚構造が本物の仕事をしています。音声なしで崩れる場合、フォーマットはナレーションに頼りすぎており、無音でスクロールされた際にパフォーマンスが低下します。" },
                { type: "body", text: "結論を出す前に3〜5回のフォーマットテストを実施してください。単一のテストがアンダーパフォームしても、フォーマットが転用できないことを意味するかもしれません。実行が弱かった、またはサムネイルが正しい期待を伝えなかった可能性もあります。" },
            ],
        },
        {
            h2: "ステップ5 — フォーマットライブラリを構築する",
            blocks: [
                { type: "body", text: "このプロセスを一貫して行った結果は、あなたのニッチで何が機能し、なぜかについて記録された証拠を持つフォーマットの個人ライブラリです。これは個々のバイラル動画よりも耐久性があります。なぜなら、推測ではなく構造的推論に基づいて決定できるからです。" },
                { type: "body", text: "ほとんどのクリエイターはこれなしに動いています。トレンドに反応し、表面をコピーし、なぜ結果が一貫しないのか不思議に思います。フォーマットライブラリは制作を始める前に質問に答えます：このタイプのコンテンツで注意を引くことが証明されているどの構造が、今から作ろうとしているものに合っているか？" },
            ],
        },
        {
            h2: "バイラルコンテンツ分析の一般的な間違い",
            blocks: [
                { type: "body", text: "最も頻繁な誤りは、再生回数だけに基づいて分析サンプルを選ぶことです。非常に高い再生回数の動画はしばしばフォーマットとは無関係な配信要因でバイラルになります：セレブのシェア、ニュースサイクル、アルゴリズムの異常。" },
                { type: "callout", kind: "warn", title: "生存バイアス", text: "あなたが見るのは成功したフォーマットだけです。観察できるバイラルフォーマットごとに、同じ構造を使ったが臨界量に達しなかった何百もの試みがあります。フォーマット分析はより良い出発点を与えますが、保証ではありません。" },
            ],
        },
        {
            quote: "すでに注目を集めているものを研究してください。そして自分のスタイルで、自分のオーディエンスのために、自分の言語で再構築してください。",
        },
    ],
    authorBio: "プラットフォーム、ニッチ、フォーマットを超えて何がコンテンツをパフォームさせるかを研究しています。クリエイターに本当にスケールするフレームワークを提供することが目標です。",
    related: [
        { id: "three-pillars-viral", title: "バイラルコンテンツの3つの柱：変容、シンプルさ、刺激",       category: "戦略",   thumb: "https://images.unsplash.com/photo-1701724355618-55b0306ff6c6?w=400&auto=format&fit=crop" },
        { id: "hook-killing-videos", title: "なぜあなたのフックが動画を台無しにしているのか（修正方法）", category: "制作",   thumb: "https://images.unsplash.com/photo-1574717024453-354056aec766?w=400&auto=format&fit=crop" },
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