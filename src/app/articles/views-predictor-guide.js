// app/blog/content/views-predictor-guide.js
// ─────────────────────────────────────────────────────────────────────────────
// Article multilingue : "How to Use the YouTube Views Predictor (And What the
//                        Score Actually Means)"
// Langues : en, fr, de, ja
// ─────────────────────────────────────────────────────────────────────────────

export const articleMeta = {
    id:       "views-predictor-guide",
    slug:     "views-predictor-guide",
    title: {
        en: "How to Use the YouTube Views Predictor (And What the Score Actually Means)",
        fr: "Comment utiliser le prédicteur de vues YouTube (et ce que le score signifie vraiment)",
        de: "So nutzt du den YouTube Views Predictor (und was der Score wirklich bedeutet)",
        ja: "YouTubeビュー予測ツールの使い方（スコアが実際に意味するもの）",
    },
    category: { en: "Tools", fr: "Outils", de: "Tools", ja: "ツール" },
    date:     { en: "July 28, 2026", fr: "28 juillet 2026", de: "28. Juli 2026", ja: "2026年7月28日" },
    readTime: { en: "8 min read", fr: "8 min de lecture", de: "8 Min. Lesezeit", ja: "8分で読める" },
    thumb:    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    seo: {
        en: {
            title:       "How to Use the YouTube Views Predictor — Algorithm Score Explained",
            description: "A complete guide to using Forevault's Views Predictor. Understand how the algorithm score works, what inputs matter most, and how to read the 90-day forecast curve.",
            image:       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        },
        fr: {
            title:       "Comment utiliser le prédicteur de vues YouTube — Score algorithmique expliqué",
            description: "Guide complet pour utiliser le prédicteur de vues Forevault. Comprendre le score algorithmique, quelles entrées comptent le plus, et comment lire la courbe de prévision 90 jours.",
            image:       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        },
        de: {
            title:       "YouTube Views Predictor nutzen — Algorithm Score erklärt",
            description: "Eine vollständige Anleitung zur Nutzung von Forevaults Views Predictor. Verstehe den Algorithm Score, welche Inputs am meisten zählen und wie du die 90-Tage-Kurve liest.",
            image:       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        },
        ja: {
            title:       "YouTubeビュー予測ツールの使い方 — アルゴリズムスコア解説",
            description: "Forevaultのビュー予測ツールの完全ガイド。アルゴリズムスコアの仕組み、最も重要な入力値、90日間の予測カーブの読み方を解説します。",
            image:       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        },
    },
    author: {
        en: { name: "Editorial Team", role: "Product & Analytics" },
        fr: { name: "Équipe éditoriale", role: "Produit & Analytique" },
        de: { name: "Redaktion", role: "Produkt & Analytik" },
        ja: { name: "編集チーム", role: "プロダクト & アナリティクス" },
    },
    tags: {
        en: ["Tools", "Algorithm", "Analytics", "Prediction", "Views"],
        fr: ["Outils", "Algorithme", "Analytique", "Prédiction", "Vues"],
        de: ["Tools", "Algorithmus", "Analytik", "Vorhersage", "Aufrufe"],
        ja: ["ツール", "アルゴリズム", "分析", "予測", "再生数"],
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────
export const en = {
    hero: {
        title: "How to Use the YouTube Views Predictor (And What the Score Actually Means)",
        lead:  "Most creators look at the 90-day number and walk away. The real value is in the score, the curve shape, and what they tell you about your video before it is too late to act.",
        cover: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", alt: "YouTube analytics dashboard" },
    },
    lead: "The Views Predictor is not a crystal ball. It is a diagnostic tool. The forecast tells you less than the score does — and the score is almost entirely driven by two or three inputs you control.",
    sections: [
        {
            h2: "What the predictor is actually doing",
            blocks: [
                { type: "body", text: "The engine works in five stages. First, it converts your current views and engagement into an algorithm signal score. Second, it calibrates a peak daily view rate from your existing data. Third, it applies a view-decay curve — different for Long Form and Shorts, different at each score level — to project 90 days forward. Fourth, it applies an audience pool cap based on your language market and niche. Fifth, it outputs the curve you see on screen." },
                { type: "body", text: "The part that surprises most people: the algorithm score, not the view count, determines the shape of the curve. A video with 500 views and a score of 2.4 will generate a more aggressive growth projection than a video with 50,000 views and a score of 0.6. The current view count calibrates the baseline. The score determines whether the curve rises, plateaus, or decays." },
                { type: "callout", kind: "info", title: "The key insight", text: "The predictor does not forecast views. It forecasts the algorithmic trajectory implied by your current performance signals. The difference matters: a trajectory can be changed. A forecast cannot." },
            ],
        },
        {
            h2: "The algorithm score — what goes into it",
            blocks: [
                { type: "body", text: "The score is calculated differently for Long Form and Shorts, because the signals YouTube uses for each format are genuinely different. For Long Form, the engine combines CTR, retention, and weighted engagement (likes ×1, comments ×3, shares ×8, subs gained ×5) with an authority multiplier derived from your channel's average view performance. For Shorts, swipe rate replaces CTR and completion rate replaces retention, with additional viral triggers applied when completion exceeds 85% or 95%." },
                { type: "body", text: "The authority multiplier is the part creators most often miss. It adjusts the score based on how your current video is performing relative to your channel average. A video at twice your usual view count increases the multiplier; a video at half your average decreases it. This means the same CTR and retention numbers produce different scores for a 500-subscriber channel and a 500,000-subscriber channel — which is correct, because YouTube's algorithm treats them differently." },
                { type: "stats", items: [
                    { value: "×1",  label: "Likes weight",     sub: "Baseline engagement" },
                    { value: "×3",  label: "Comments weight",  sub: "Discussion signal",   accent: true },
                    { value: "×8",  label: "Shares weight",    sub: "Strongest signal" },
                    { value: "×5",  label: "Subs gained weight", sub: "Intent signal" },
                ]},
                { type: "body", text: "Shares carry the highest engagement weight by a significant margin. A video that generates shares at even 0.5% of view count is sending a distribution signal that comments and likes cannot replicate at the same rate. If your engagement score is low and you can improve one metric, shares are the highest-leverage target — although they are also the hardest to generate intentionally." },
            ],
        },
        {
            h2: "Score thresholds and what they predict",
            blocks: [
                { type: "body", text: "The score maps onto four curve families, each with a distinct shape. Below 0.8, the video follows a rapid decay pattern: a strong day-one push from subscribers and notifications, followed by near-complete drop-off by day five. The 90-day number will be close to the 7-day number because almost all traffic arrives in the first week." },
                { type: "body", text: "Between 0.8 and 1.5, the engine blends toward an average-performance curve: a sharper day-two peak, a more gradual shoulder decay, and meaningful traffic persisting through the 30-day window. This is the range where most videos land. The 30-day number will be meaningfully higher than the 7-day number." },
                { type: "body", text: "Between 1.5 and 2.2, the curve shifts to a strong-push pattern: peak on day two or three, a secondary plateau around days 12–15, and a slower tail. The 90-day number can be two to three times the 30-day number for strong performers in this range, because the algorithm continues pushing the video into new audience segments after the initial burst." },
                { type: "callout", kind: "tip", title: "Above 2.2 — the viral pattern", text: "Above 2.2, the model applies the viral curve: a delayed peak around day four, a strong secondary peak at days 13–16, and a slow decay from there. If your score is in this range, the most important thing you can do is engage with early comments immediately — the algorithm reads creator engagement in the first 48 hours as a quality signal that can extend the initial push." },
            ],
        },
        {
            h2: "Long Form vs Shorts — not the same calculation",
            blocks: [
                { type: "body", text: "The two formats use completely different input logic and completely different curve families. For Long Form, CTR and retention are the primary score drivers. A 6% CTR and 50% retention is the threshold above which the engine expects meaningful algorithmic distribution — below it, the curve defaults toward the decay pattern regardless of engagement counts." },
                { type: "body", text: "For Shorts, swipe rate is the CTR equivalent, but it operates in reverse: a low swipe rate is good. Below 30% is the green zone; above 50% triggers a weak-signal curve regardless of other metrics. Completion rate has a non-linear effect — crossing 85% and 95% activates multipliers (2.5× and 3×, with an additional 5× above 105% for loop-inducing content) that can dramatically change the projected trajectory." },
                { type: "stats", items: [
                    { value: "<30%",  label: "Shorts swipe rate",    sub: "Green zone — strong signal" },
                    { value: "85%+",  label: "Shorts completion",    sub: "Algo boost activated",       accent: true },
                    { value: "6%+",   label: "Long Form CTR",        sub: "Distribution threshold" },
                    { value: "50%+",  label: "Long Form retention",  sub: "Extended push signal" },
                ]},
                { type: "body", text: "One practical consequence: if you produce both formats, do not compare their scores directly. A Shorts score of 1.8 and a Long Form score of 1.8 are not equivalent predictions — they are scores within different curve families calibrated to different signals. The absolute number only has meaning relative to the format it was calculated in." },
            ],
        },
        {
            h2: "The audience pool cap — why projections get bounded",
            blocks: [
                { type: "body", text: "Every prediction is bounded by a theoretical maximum derived from your language market and niche. The engine calculates a 90-day niche audience pool (monthly views in that language × niche audience share × 3) and then applies a reach fraction based on the algorithm score. The reach fraction scales from near-zero at low scores to roughly 0.1% of the pool at elite scores — a ceiling that reflects how even the most viral videos reach a fraction of their theoretical maximum audience." },
                { type: "body", text: "You will see this cap applied when the raw projection exceeds the calculated maximum. When it triggers, the daily view curve is scaled down proportionally, which is why the curve shape is preserved but the absolute numbers are lower than the uncapped projection would suggest. The cap indicator in the results panel tells you when this has happened." },
                { type: "callout", kind: "warn", title: "What the cap is telling you", text: "A capped projection does not mean the model thinks your video is bad. It means the raw signal score is high enough that an uncapped projection would exceed what the niche audience pool supports. The cap is a reality check on exponential growth assumptions, not a penalty on good content." },
                { type: "body", text: "The practical implication: niche and language selection matter for the ceiling of what is achievable, not just for revenue. A video in a small niche in a small language market with a very high score may be capped lower than a video in a large niche in a large market with a moderate score. If you consistently see capped projections, it may be worth evaluating whether your niche selection is limiting your growth potential." },
            ],
        },
        {
            h2: "How to read the 90-day curve",
            blocks: [
                { type: "body", text: "The curve has two segments: the past line (green, solid) and the future line (purple, dashed), divided by the 'Today' marker at your video age. The past segment shows the trajectory implied by your current data — not necessarily the exact day-by-day history, but the curve shape that your current cumulative view count and score project backward. If the past segment looks unrealistic given what you know happened, the most likely explanation is that the video age input is off." },
                { type: "body", text: "The future segment is the projection. Three things to look for: the peak position (when does the curve peak, and is that in the past or future?), the shoulder shape (how steeply does it decay after the peak?), and the difference between the 30-day and 90-day numbers. A large gap between 30 and 90 days indicates a video with long-tail potential — likely driven by search or browse surface traffic. A small gap indicates a front-loaded video where most value has already arrived or will arrive in the first month." },
                { type: "callout", kind: "tip", title: "The two modes", text: "Switch between Cumulative and Daily view modes. Cumulative shows total views over time — useful for understanding the overall trajectory. Daily shows the view rate per day — useful for identifying the peak day, the decay rate, and whether there is a secondary push expected in the second or third week. For videos with a score above 1.5, the daily view mode often reveals a secondary peak that the cumulative view hides." },
            ],
        },
        {
            h2: "The most common input mistakes",
            blocks: [
                { type: "body", text: "Video age is the input that produces the most distorted results when wrong. If you enter '3' for a video that is actually 12 days old, the engine calibrates the peak to day three of a video with your current view count — which produces a dramatically different curve than the same data at day twelve. Enter the actual number of days since upload, even if it is uncomfortable because the video has fewer views than you expected by now." },
                { type: "body", text: "Entering zero or leaving out engagement metrics collapses the engagement score component of the algorithm calculation. The model can still project from CTR and retention alone, but the result will systematically understate the trajectory for videos with strong engagement relative to views. This is especially relevant for Shorts, where engagement ratios (likes per view, comments per view) tend to be higher than long form and carry real weight in the score." },
                { type: "callout", kind: "warn", title: "Average previous views", text: "This is the input most people skip. It controls the authority multiplier — the component that adjusts the score based on how your current video is performing relative to your channel baseline. Leaving it blank defaults the multiplier to 1.0, which is correct for a brand-new channel but systematically overstates the score for established channels whose current video is underperforming their average, and understates it for channels whose current video is an outlier above their baseline." },
                { type: "body", text: "The subscribers field is used to calculate a notification floor — a minimum peak daily view rate derived from the estimated fraction of subscribers who see and click notifications. It does not drive the score, but it ensures the projection does not fall below what your subscriber base alone could plausibly deliver. For large channels with small videos, this floor can be the binding constraint. For small channels with strong signals, it rarely matters." },
            ],
        },
        {
            h2: "What the predictor cannot do",
            blocks: [
                { type: "body", text: "It cannot account for external events. A news cycle, a celebrity mention, a community post from a large creator, or a Reddit thread picking up your video can cause view spikes that are completely invisible to any model built on your video's own metrics. When these happen, the actual curve will diverge from the projection — not because the model is wrong, but because an external variable it had no data on was introduced." },
                { type: "body", text: "It cannot predict YouTube's own distribution decisions. The model estimates the trajectory implied by your performance signals, but YouTube's algorithm can choose to push or withhold a video based on internal factors — A/B tests, policy considerations, advertiser suitability signals, or simply competing inventory — that no external tool can observe. Think of the projection as the expected outcome absent surprises, not the guaranteed outcome." },
                { type: "body", text: "It cannot substitute for your YouTube Studio data. The predictor is most useful in the first three to seven days of a video's life, when you have real engagement data but not yet enough historical performance to see where the curve is heading. After 30 days, your actual Studio analytics tell you more than any projection can. Use the predictor to inform early decisions — whether to promote, whether to iterate on the hook, whether to revisit the thumbnail — not to replace the data you already have." },
            ],
        },
        {
            quote: "The score tells you where the algorithm currently sees your video. The curve tells you where it is likely to go. What you do in the first 48 hours determines which curve you end up on.",
        },
        {
            h2: "How to act on the results",
            blocks: [
                { type: "body", text: "If the score is below 0.8 and the video is less than three days old, the most high-leverage intervention is the thumbnail. CTR changes in the first 48 hours can still move the score enough to shift the curve family — which is the difference between a decay pattern and an average-performance pattern. Retention and engagement are harder to change retroactively; packaging is not." },
                { type: "body", text: "If the score is between 0.8 and 1.5 and the video has been live for four to seven days, the projection is showing average reach with a realistic long-tail. The most useful action here is cross-promotion — pushing existing traffic sources (community post, other videos, external links) to maintain enough velocity that the algorithm continues sampling the video into new audiences beyond the first week." },
                { type: "body", text: "If the score is above 1.5, the model expects a secondary push around days 12–15. The highest-leverage action at this stage is engagement with early comments — which signals creator responsiveness to the algorithm — and avoiding any rapid changes to the video's metadata during the initial push window, as these can interrupt the distribution cycle before it has fully run." },
            ],
        },
    ],
    authorBio: "I build tools that help creators understand what their data is actually saying — before they spend time on the wrong variables.",
    related: [
        { id: "analyze-viral-content",   title: "How to Analyze Viral Content and Find Winning Formats",      category: "Research",  thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop" },
        { id: "hook-killing-videos",     title: "Why Your Hook Is Killing Your Videos (And How to Fix It)",    category: "Production", thumb: "https://images.unsplash.com/photo-1574717024453-354056aec766?w=400&auto=format&fit=crop" },
        { id: "loop-effect-retention",   title: "The Loop Effect: How Retention Shapes the Algorithm's View of Your Channel", category: "Analytics", thumb: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// FRENCH
// ─────────────────────────────────────────────────────────────────────────────
export const fr = {
    hero: {
        title: "Comment utiliser le prédicteur de vues YouTube (et ce que le score signifie vraiment)",
        lead:  "La plupart des créateurs regardent le chiffre à 90 jours et passent à autre chose. La vraie valeur est dans le score, la forme de la courbe, et ce qu'ils révèlent sur votre vidéo avant qu'il soit trop tard pour agir.",
        cover: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", alt: "Dashboard d'analytique YouTube" },
    },
    lead: "Le prédicteur de vues n'est pas une boule de cristal. C'est un outil de diagnostic. La prévision vous apprend moins que le score — et le score est presque entièrement déterminé par deux ou trois entrées que vous contrôlez.",
    sections: [
        {
            h2: "Ce que le prédicteur fait réellement",
            blocks: [
                { type: "body", text: "L'engine fonctionne en cinq étapes. D'abord, il convertit vos vues actuelles et votre engagement en un score de signal algorithmique. Ensuite, il calibre un taux de vues quotidien maximal à partir de vos données existantes. Troisièmement, il applique une courbe de décroissance de vues — différente pour les Long Form et les Shorts, différente à chaque niveau de score — pour projeter 90 jours vers l'avenir. Quatrièmement, il applique un plafond de pool d'audience basé sur votre marché linguistique et votre niche. Cinquièmement, il génère la courbe affichée à l'écran." },
                { type: "body", text: "Ce qui surprend la plupart des gens : c'est le score algorithmique, pas le nombre de vues, qui détermine la forme de la courbe. Une vidéo avec 500 vues et un score de 2.4 générera une projection de croissance plus agressive qu'une vidéo avec 50 000 vues et un score de 0.6. Le nombre de vues actuel calibre la ligne de base. Le score détermine si la courbe monte, se stabilise ou décroît." },
                { type: "callout", kind: "info", title: "L'insight clé", text: "Le prédicteur ne prédit pas les vues. Il prédit la trajectoire algorithmique impliquée par vos signaux de performance actuels. La différence est importante : une trajectoire peut être changée. Une prévision ne peut pas l'être." },
            ],
        },
        {
            h2: "Le score algorithmique — ce qui le compose",
            blocks: [
                { type: "body", text: "Le score est calculé différemment pour les Long Form et les Shorts, car les signaux que YouTube utilise pour chaque format sont genuinement différents. Pour les Long Form, l'engine combine le CTR, la rétention et l'engagement pondéré (likes ×1, commentaires ×3, partages ×8, abonnements ×5) avec un multiplicateur d'autorité dérivé des performances moyennes en vues de votre chaîne. Pour les Shorts, le taux de swipe remplace le CTR et le taux de complétion remplace la rétention, avec des déclencheurs viraux supplémentaires appliqués quand la complétion dépasse 85% ou 95%." },
                { type: "body", text: "Le multiplicateur d'autorité est la partie que les créateurs manquent le plus souvent. Il ajuste le score en fonction de la performance de votre vidéo actuelle par rapport à votre moyenne de chaîne. Une vidéo au double de votre nombre de vues habituel augmente le multiplicateur ; une vidéo à la moitié de votre moyenne le diminue. Cela signifie que les mêmes chiffres de CTR et de rétention produisent des scores différents pour une chaîne à 500 abonnés et une chaîne à 500 000 abonnés — ce qui est correct, car l'algorithme YouTube les traite différemment." },
                { type: "stats", items: [
                    { value: "×1",  label: "Poids des likes",        sub: "Engagement de base" },
                    { value: "×3",  label: "Poids des commentaires", sub: "Signal de discussion", accent: true },
                    { value: "×8",  label: "Poids des partages",     sub: "Signal le plus fort" },
                    { value: "×5",  label: "Poids des abonnements",  sub: "Signal d'intention" },
                ]},
                { type: "body", text: "Les partages portent de loin le poids d'engagement le plus élevé. Une vidéo qui génère des partages à même 0,5% du nombre de vues envoie un signal de distribution que les commentaires et les likes ne peuvent pas reproduire au même taux. Si votre score d'engagement est faible et que vous pouvez améliorer une métrique, les partages sont la cible à plus fort levier — bien qu'ils soient aussi les plus difficiles à générer intentionnellement." },
            ],
        },
        {
            h2: "Seuils de score et ce qu'ils prédisent",
            blocks: [
                { type: "body", text: "Le score se mappe sur quatre familles de courbes, chacune avec une forme distincte. En dessous de 0.8, la vidéo suit un schéma de décroissance rapide : une forte poussée le premier jour depuis les abonnés et les notifications, suivie d'une quasi-disparition du trafic d'ici le cinquième jour. Le chiffre à 90 jours sera proche du chiffre à 7 jours car presque tout le trafic arrive dans la première semaine." },
                { type: "body", text: "Entre 0.8 et 1.5, l'engine se rapproche d'une courbe de performance moyenne : un pic plus marqué le deuxième jour, une décroissance en plateau plus graduelle, et un trafic significatif persistant jusqu'à la fenêtre des 30 jours. C'est la plage où atterrissent la plupart des vidéos. Le chiffre à 30 jours sera sensiblement plus élevé que le chiffre à 7 jours." },
                { type: "body", text: "Entre 1.5 et 2.2, la courbe se déplace vers un schéma de forte poussée : pic les jours deux ou trois, un second plateau autour des jours 12–15, et une queue plus lente. Le chiffre à 90 jours peut représenter deux à trois fois le chiffre à 30 jours pour les forts performers dans cette plage, car l'algorithme continue à pousser la vidéo vers de nouveaux segments d'audience après la poussée initiale." },
                { type: "callout", kind: "tip", title: "Au-dessus de 2.2 — le schéma viral", text: "Au-dessus de 2.2, le modèle applique la courbe virale : un pic retardé vers le quatrième jour, un fort second pic aux jours 13–16, et une décroissance lente ensuite. Si votre score est dans cette plage, la chose la plus importante que vous puissiez faire est d'engager immédiatement avec les premiers commentaires — l'algorithme lit l'engagement du créateur dans les premières 48 heures comme un signal de qualité qui peut prolonger la poussée initiale." },
            ],
        },
        {
            h2: "Long Form vs Shorts — pas le même calcul",
            blocks: [
                { type: "body", text: "Les deux formats utilisent une logique d'entrée complètement différente et des familles de courbes complètement différentes. Pour les Long Form, le CTR et la rétention sont les principaux moteurs du score. Un CTR de 6% et une rétention de 50% est le seuil au-delà duquel l'engine s'attend à une distribution algorithmique significative — en dessous, la courbe tend vers le schéma de décroissance quel que soit le nombre d'engagements." },
                { type: "body", text: "Pour les Shorts, le taux de swipe est l'équivalent du CTR, mais il opère en sens inverse : un faible taux de swipe est positif. En dessous de 30% est la zone verte ; au-dessus de 50%, une courbe à signal faible est activée quelles que soient les autres métriques. Le taux de complétion a un effet non linéaire — croiser 85% et 95% active des multiplicateurs (2.5× et 3×, avec un 5× supplémentaire au-dessus de 105% pour le contenu induisant des boucles) qui peuvent dramatiquement modifier la trajectoire projetée." },
                { type: "stats", items: [
                    { value: "<30%",  label: "Swipe rate Shorts",       sub: "Zone verte — signal fort" },
                    { value: "85%+",  label: "Complétion Shorts",       sub: "Boost algo activé",       accent: true },
                    { value: "6%+",   label: "CTR Long Form",           sub: "Seuil de distribution" },
                    { value: "50%+",  label: "Rétention Long Form",     sub: "Signal de poussée étendue" },
                ]},
                { type: "body", text: "Une conséquence pratique : si vous produisez les deux formats, ne comparez pas leurs scores directement. Un score Shorts de 1.8 et un score Long Form de 1.8 ne sont pas des prédictions équivalentes — ce sont des scores dans des familles de courbes différentes calibrées sur des signaux différents. Le nombre absolu n'a de signification que par rapport au format dans lequel il a été calculé." },
            ],
        },
        {
            h2: "Le plafond du pool d'audience — pourquoi les projections sont bornées",
            blocks: [
                { type: "body", text: "Chaque prédiction est bornée par un maximum théorique dérivé de votre marché linguistique et de votre niche. L'engine calcule un pool d'audience de niche sur 90 jours (vues mensuelles dans cette langue × part d'audience de la niche × 3) puis applique une fraction de portée basée sur le score algorithmique. La fraction de portée va de quasi-zéro aux scores bas à environ 0,1% du pool aux scores d'élite — un plafond qui reflète comment même les vidéos les plus virales atteignent une fraction de leur audience théorique maximale." },
                { type: "body", text: "Vous verrez ce plafond appliqué quand la projection brute dépasse le maximum calculé. Quand il se déclenche, la courbe de vues quotidiennes est réduite proportionnellement, ce qui explique pourquoi la forme de la courbe est préservée mais les chiffres absolus sont plus bas que ne le suggérerait la projection sans plafond. L'indicateur de plafond dans le panneau de résultats vous indique quand cela s'est produit." },
                { type: "callout", kind: "warn", title: "Ce que le plafond vous dit", text: "Une projection plafonnée ne signifie pas que le modèle pense que votre vidéo est mauvaise. Cela signifie que le score de signal brut est assez élevé pour qu'une projection sans plafond dépasserait ce que le pool d'audience de la niche peut supporter. Le plafond est un contrôle de réalité sur les hypothèses de croissance exponentielle, pas une pénalité sur le bon contenu." },
            ],
        },
        {
            h2: "Comment lire la courbe à 90 jours",
            blocks: [
                { type: "body", text: "La courbe a deux segments : la ligne passée (verte, continue) et la ligne future (violette, pointillée), séparées par le marqueur 'Aujourd'hui' à votre âge de vidéo. Le segment passé montre la trajectoire impliquée par vos données actuelles — pas nécessairement l'historique exact jour par jour, mais la forme de courbe que votre nombre cumulatif de vues actuel et votre score projettent en arrière. Si le segment passé semble irréaliste par rapport à ce que vous savez s'être passé, l'explication la plus probable est que l'entrée d'âge de vidéo est incorrecte." },
                { type: "body", text: "Le segment futur est la projection. Trois choses à observer : la position du pic (quand la courbe atteint-elle son maximum, et est-ce dans le passé ou le futur ?), la forme du plateau (à quelle vitesse décroît-elle après le pic ?), et la différence entre les chiffres à 30 et 90 jours. Un grand écart entre 30 et 90 jours indique une vidéo à fort potentiel de longue traîne — probablement due à du trafic de recherche ou de surface de navigation. Un petit écart indique une vidéo à forte charge initiale où la plupart de la valeur est déjà arrivée ou arrivera dans le premier mois." },
                { type: "callout", kind: "tip", title: "Les deux modes", text: "Basculez entre les modes de vue Cumulatif et Quotidien. Le mode Cumulatif montre les vues totales dans le temps — utile pour comprendre la trajectoire globale. Le mode Quotidien montre le taux de vues par jour — utile pour identifier le jour de pic, le taux de décroissance, et s'il y a une seconde poussée attendue dans la deuxième ou troisième semaine. Pour les vidéos avec un score au-dessus de 1.5, le mode vues quotidiennes révèle souvent un second pic que la vue cumulative masque." },
            ],
        },
        {
            h2: "Les erreurs d'entrée les plus courantes",
            blocks: [
                { type: "body", text: "L'âge de la vidéo est l'entrée qui produit les résultats les plus distordus quand elle est incorrecte. Si vous entrez '3' pour une vidéo qui a en réalité 12 jours, l'engine calibre le pic au troisième jour d'une vidéo avec votre nombre de vues actuel — ce qui produit une courbe dramatiquement différente de ce que les mêmes données au douzième jour produiraient. Entrez le nombre réel de jours depuis la mise en ligne, même si c'est inconfortable parce que la vidéo a moins de vues que vous ne l'espériez à ce stade." },
                { type: "body", text: "Entrer zéro ou omettre les métriques d'engagement effondre la composante score d'engagement du calcul algorithmique. Le modèle peut toujours projeter à partir du CTR et de la rétention seuls, mais le résultat sous-estimera systématiquement la trajectoire pour les vidéos avec un fort engagement relatif aux vues. C'est particulièrement pertinent pour les Shorts, où les ratios d'engagement (likes par vue, commentaires par vue) tendent à être plus élevés que les Long Form et portent un poids réel dans le score." },
                { type: "callout", kind: "warn", title: "Vues moyennes précédentes", text: "C'est l'entrée que la plupart des gens ignorent. Elle contrôle le multiplicateur d'autorité — la composante qui ajuste le score en fonction de la performance de votre vidéo actuelle par rapport à votre ligne de base de chaîne. La laisser vide par défaut le multiplicateur à 1.0, ce qui est correct pour une toute nouvelle chaîne mais surestime systématiquement le score pour les chaînes établies dont la vidéo actuelle sous-performe leur moyenne, et le sous-estime pour les chaînes dont la vidéo actuelle est au-dessus de leur ligne de base." },
            ],
        },
        {
            h2: "Ce que le prédicteur ne peut pas faire",
            blocks: [
                { type: "body", text: "Il ne peut pas tenir compte des événements externes. Un cycle d'actualité, une mention de célébrité, un post communautaire d'un grand créateur, ou un fil Reddit reprenant votre vidéo peuvent provoquer des pics de vues complètement invisibles à tout modèle construit sur les propres métriques de votre vidéo. Quand cela se produit, la courbe réelle divergera de la projection — non pas parce que le modèle est faux, mais parce qu'une variable externe qu'il n'avait pas de données pour modéliser a été introduite." },
                { type: "body", text: "Il ne peut pas se substituer à vos données YouTube Studio. Le prédicteur est le plus utile dans les trois à sept premiers jours de la vie d'une vidéo, quand vous avez des données d'engagement réelles mais pas encore assez de performance historique pour voir où la courbe se dirige. Après 30 jours, vos analytiques Studio actuelles vous en disent plus que n'importe quelle projection ne peut le faire." },
            ],
        },
        {
            quote: "Le score vous dit où l'algorithme voit actuellement votre vidéo. La courbe vous dit où elle va probablement aller. Ce que vous faites dans les premières 48 heures détermine sur quelle courbe vous finissez.",
        },
        {
            h2: "Comment agir sur les résultats",
            blocks: [
                { type: "body", text: "Si le score est inférieur à 0.8 et que la vidéo a moins de trois jours, l'intervention à plus fort levier est la miniature. Des changements de CTR dans les premières 48 heures peuvent encore faire évoluer le score suffisamment pour changer la famille de courbes — ce qui est la différence entre un schéma de décroissance et un schéma de performance moyenne. La rétention et l'engagement sont plus difficiles à changer rétroactivement ; le packaging ne l'est pas." },
                { type: "body", text: "Si le score est entre 0.8 et 1.5 et que la vidéo est en ligne depuis quatre à sept jours, la projection montre une portée moyenne avec un réaliste potentiel de longue traîne. L'action la plus utile ici est la promotion croisée — pousser les sources de trafic existantes (post communautaire, autres vidéos, liens externes) pour maintenir une vélocité suffisante que l'algorithme continue à échantillonner la vidéo vers de nouvelles audiences au-delà de la première semaine." },
                { type: "body", text: "Si le score est supérieur à 1.5, le modèle attend une seconde poussée autour des jours 12–15. L'action à plus fort levier à ce stade est l'engagement avec les premiers commentaires — qui signale la réactivité du créateur à l'algorithme — et éviter tout changement rapide dans les métadonnées de la vidéo pendant la fenêtre de poussée initiale, car ceux-ci peuvent interrompre le cycle de distribution avant qu'il ait pleinement couru." },
            ],
        },
    ],
    authorBio: "Je construis des outils qui aident les créateurs à comprendre ce que leurs données disent réellement — avant qu'ils ne passent du temps sur les mauvaises variables.",
    related: [
        { id: "analyze-viral-content", title: "Comment analyser le contenu viral et trouver les formats gagnants", category: "Recherche",  thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop" },
        { id: "hook-killing-videos",   title: "Pourquoi votre accroche tue vos vidéos (et comment y remédier)",  category: "Production", thumb: "https://images.unsplash.com/photo-1574717024453-354056aec766?w=400&auto=format&fit=crop" },
        { id: "loop-effect-retention", title: "L'effet boucle : comment la rétention façonne le regard de l'algorithme sur votre chaîne", category: "Analytique", thumb: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GERMAN
// ─────────────────────────────────────────────────────────────────────────────
export const de = {
    hero: {
        title: "So nutzt du den YouTube Views Predictor (und was der Score wirklich bedeutet)",
        lead:  "Die meisten Creator schauen auf die 90-Tage-Zahl und gehen weiter. Der eigentliche Wert liegt im Score, der Kurvenform, und was sie über dein Video verraten, bevor es zu spät ist zu handeln.",
        cover: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", alt: "YouTube Analytics Dashboard" },
    },
    lead: "Der Views Predictor ist keine Kristallkugel. Er ist ein Diagnosewerkzeug. Die Prognose sagt weniger als der Score — und der Score wird fast vollständig von zwei oder drei Inputs bestimmt, die du kontrollierst.",
    sections: [
        {
            h2: "Was der Predictor wirklich macht",
            blocks: [
                { type: "body", text: "Die Engine arbeitet in fünf Phasen. Zuerst wandelt sie deine aktuellen Views und dein Engagement in einen Algorithm-Signal-Score um. Dann kalibriert sie eine tägliche Spitzenabrufrate aus deinen vorhandenen Daten. Drittens wendet sie eine View-Decay-Kurve an — unterschiedlich für Long Form und Shorts, unterschiedlich bei jedem Score-Level — um 90 Tage in die Zukunft zu projizieren. Viertens wendet sie eine Audience-Pool-Obergrenze basierend auf deinem Sprachmarkt und deiner Nische an. Fünftens gibt sie die Kurve aus, die du auf dem Bildschirm siehst." },
                { type: "body", text: "Was die meisten überrascht: Der Algorithm-Score, nicht die View-Anzahl, bestimmt die Form der Kurve. Ein Video mit 500 Views und einem Score von 2.4 wird eine aggressivere Wachstumsprognose generieren als ein Video mit 50.000 Views und einem Score von 0.6. Die aktuelle View-Anzahl kalibriert die Basislinie. Der Score bestimmt, ob die Kurve steigt, sich stabilisiert oder verfällt." },
                { type: "callout", kind: "info", title: "Die zentrale Erkenntnis", text: "Der Predictor prognostiziert keine Views. Er prognostiziert die algorithmische Trajektorie, die durch deine aktuellen Performance-Signale impliziert wird. Der Unterschied ist wichtig: Eine Trajektorie kann geändert werden. Eine Prognose nicht." },
            ],
        },
        {
            h2: "Der Algorithm-Score — was einfließt",
            blocks: [
                { type: "body", text: "Der Score wird für Long Form und Shorts unterschiedlich berechnet, weil die Signale, die YouTube für jedes Format verwendet, tatsächlich verschieden sind. Für Long Form kombiniert die Engine CTR, Retention und gewichtetes Engagement (Likes ×1, Kommentare ×3, Shares ×8, gewonnene Abos ×5) mit einem Authority-Multiplikator, der aus der durchschnittlichen View-Performance deines Kanals abgeleitet wird. Für Shorts ersetzt die Swipe-Rate den CTR und die Completion-Rate die Retention, mit zusätzlichen viralen Triggern bei Completion-Raten über 85% oder 95%." },
                { type: "body", text: "Der Authority-Multiplikator ist der Teil, den die meisten Creator übersehen. Er passt den Score danach an, wie dein aktuelles Video im Vergleich zu deinem Kanaldurchschnitt abschneidet. Ein Video, das doppelt so viele Views wie üblich hat, erhöht den Multiplikator; ein Video mit der Hälfte deines Durchschnitts senkt ihn. Das bedeutet, dass dieselben CTR- und Retention-Zahlen für einen 500-Abonnenten-Kanal und einen 500.000-Abonnenten-Kanal unterschiedliche Scores erzeugen — was korrekt ist, weil YouTubes Algorithmus sie unterschiedlich behandelt." },
                { type: "stats", items: [
                    { value: "×1",  label: "Likes-Gewichtung",       sub: "Basis-Engagement" },
                    { value: "×3",  label: "Kommentar-Gewichtung",   sub: "Diskussionssignal",    accent: true },
                    { value: "×8",  label: "Share-Gewichtung",       sub: "Stärkstes Signal" },
                    { value: "×5",  label: "Abo-Gewichtung",         sub: "Intentionssignal" },
                ]},
                { type: "body", text: "Shares tragen bei weitem das höchste Engagement-Gewicht. Ein Video, das Shares bei selbst 0,5% der Views generiert, sendet ein Distributionssignal, das Kommentare und Likes nicht in gleicher Rate replizieren können. Wenn dein Engagement-Score niedrig ist und du eine Metrik verbessern kannst, sind Shares das Ziel mit dem höchsten Hebel — obwohl sie auch am schwierigsten intentional zu generieren sind." },
            ],
        },
        {
            h2: "Score-Schwellenwerte und was sie vorhersagen",
            blocks: [
                { type: "body", text: "Der Score ordnet sich vier Kurvenfamilien zu, jede mit einer eigenen Form. Unter 0.8 folgt das Video einem schnellen Decay-Muster: ein starker erster Tag durch Abonnenten und Benachrichtigungen, gefolgt von einem nahezu vollständigen Einbruch bis Tag fünf. Die 90-Tage-Zahl wird nahe an der 7-Tage-Zahl liegen, weil fast der gesamte Traffic in der ersten Woche ankommt." },
                { type: "body", text: "Zwischen 0.8 und 1.5 nähert sich die Engine einer durchschnittlichen Performance-Kurve an: ein schärferer Peak an Tag zwei, ein graduelleres Schulterplateau, und bedeutsamer Traffic, der bis zur 30-Tage-Fenstergrenze anhält. Das ist der Bereich, in dem die meisten Videos landen. Die 30-Tage-Zahl wird deutlich höher sein als die 7-Tage-Zahl." },
                { type: "callout", kind: "tip", title: "Über 2.2 — das virale Muster", text: "Über 2.2 wendet das Modell die virale Kurve an: ein verzögerter Peak um Tag vier, ein starker zweiter Peak an den Tagen 13–16, und ein langsamer Verfall danach. Wenn dein Score in diesem Bereich liegt, ist das Wichtigste, was du tun kannst, frühe Kommentare sofort zu beantworten — der Algorithmus liest Creator-Engagement in den ersten 48 Stunden als Qualitätssignal, das den anfänglichen Push verlängern kann." },
            ],
        },
        {
            h2: "Long Form vs Shorts — nicht dieselbe Berechnung",
            blocks: [
                { type: "body", text: "Die beiden Formate verwenden völlig unterschiedliche Input-Logik und völlig unterschiedliche Kurvenfamilien. Für Long Form sind CTR und Retention die primären Score-Treiber. Ein 6% CTR und 50% Retention ist der Schwellenwert, ab dem die Engine bedeutsame algorithmische Distribution erwartet — darunter fällt die Kurve unabhängig von den Engagement-Zahlen in das Decay-Muster zurück." },
                { type: "body", text: "Für Shorts ist die Swipe-Rate das CTR-Äquivalent, aber sie wirkt umgekehrt: eine niedrige Swipe-Rate ist gut. Unter 30% ist die grüne Zone; über 50% wird unabhängig von anderen Metriken eine Schwach-Signal-Kurve aktiviert. Die Completion-Rate hat einen nicht-linearen Effekt — das Überqueren von 85% und 95% aktiviert Multiplikatoren (2.5× und 3×, mit einem zusätzlichen 5× über 105% für loop-induzierenden Content), die die projizierte Trajektorie dramatisch verändern können." },
                { type: "stats", items: [
                    { value: "<30%",  label: "Shorts Swipe Rate",      sub: "Grüne Zone — starkes Signal" },
                    { value: "85%+",  label: "Shorts Completion",      sub: "Algo-Boost aktiviert",        accent: true },
                    { value: "6%+",   label: "Long Form CTR",          sub: "Distributions-Schwellenwert" },
                    { value: "50%+",  label: "Long Form Retention",    sub: "Erweitertes Push-Signal" },
                ]},
                { type: "body", text: "Eine praktische Konsequenz: Wenn du beide Formate produzierst, vergleiche ihre Scores nicht direkt. Ein Shorts-Score von 1.8 und ein Long Form-Score von 1.8 sind keine gleichwertigen Prognosen — es sind Scores innerhalb verschiedener Kurvenfamilien, die auf verschiedene Signale kalibriert sind. Die absolute Zahl hat nur Bedeutung relativ zu dem Format, in dem sie berechnet wurde." },
            ],
        },
        {
            h2: "Wie du die 90-Tage-Kurve liest",
            blocks: [
                { type: "body", text: "Die Kurve hat zwei Segmente: die Vergangenheitslinie (grün, durchgehend) und die Zukunftslinie (lila, gestrichelt), getrennt durch den 'Heute'-Marker bei deinem Video-Alter. Das vergangene Segment zeigt die Trajektorie, die durch deine aktuellen Daten impliziert wird — nicht unbedingt die genaue Tag-für-Tag-Geschichte, aber die Kurvenform, die deine aktuelle kumulative View-Zahl und dein Score rückwärts projizieren." },
                { type: "body", text: "Das zukünftige Segment ist die Prognose. Drei Dinge zu beachten: die Peak-Position (wann erreicht die Kurve ihr Maximum, und ist das in der Vergangenheit oder Zukunft?), die Schulterform (wie steil fällt sie nach dem Peak ab?), und der Unterschied zwischen den 30-Tage- und 90-Tage-Zahlen. Eine große Lücke zwischen 30 und 90 Tagen weist auf ein Video mit Long-Tail-Potenzial hin. Eine kleine Lücke weist auf ein frontgeladenes Video hin, bei dem der Großteil des Werts bereits angekommen ist oder in den ersten Monat fallen wird." },
                { type: "callout", kind: "tip", title: "Die zwei Modi", text: "Wechsle zwischen Kumulativ- und Tages-Ansichtsmodus. Kumulativ zeigt Gesamtviews über die Zeit — nützlich zum Verständnis der Gesamttrajektorie. Täglich zeigt die Abrufrate pro Tag — nützlich zur Identifizierung des Peak-Tags, der Abfallrate und ob in der zweiten oder dritten Woche ein zweiter Push erwartet wird. Für Videos mit einem Score über 1.5 zeigt der Tages-Ansichtsmodus oft einen zweiten Peak, den die kumulative Ansicht verdeckt." },
            ],
        },
        {
            h2: "Die häufigsten Eingabefehler",
            blocks: [
                { type: "body", text: "Das Video-Alter ist der Input, der die verzerrten Ergebnisse produziert, wenn er falsch ist. Wenn du '3' für ein Video eingibst, das tatsächlich 12 Tage alt ist, kalibriert die Engine den Peak auf Tag drei eines Videos mit deiner aktuellen View-Anzahl — was eine dramatisch andere Kurve produziert als dieselben Daten an Tag zwölf. Gib die tatsächliche Anzahl von Tagen seit dem Upload ein, auch wenn es unangenehm ist, weil das Video bis jetzt weniger Views hat als erwartet." },
                { type: "callout", kind: "warn", title: "Durchschnittliche vorherige Views", text: "Das ist der Input, den die meisten Leute überspringen. Er steuert den Authority-Multiplikator — die Komponente, die den Score danach anpasst, wie dein aktuelles Video im Vergleich zu deiner Kanal-Basislinie abschneidet. Ihn leer zu lassen setzt den Multiplikator auf 1.0, was für einen brandneuen Kanal korrekt ist, aber den Score für etablierte Kanäle, deren aktuelles Video ihren Durchschnitt unterschreitet, systematisch überschätzt." },
                { type: "body", text: "Das Abonnenten-Feld wird verwendet, um einen Benachrichtigungs-Floor zu berechnen — eine minimale tägliche Spitzenrate, die aus dem geschätzten Anteil der Abonnenten abgeleitet wird, die Benachrichtigungen sehen und anklicken. Es treibt den Score nicht an, stellt aber sicher, dass die Projektion nicht unter das fällt, was deine Abonnentenbasis allein plausiblerweise liefern könnte." },
            ],
        },
        {
            quote: "Der Score sagt dir, wo der Algorithmus dein Video gerade sieht. Die Kurve sagt dir, wo es wahrscheinlich hingeht. Was du in den ersten 48 Stunden tust, bestimmt, auf welcher Kurve du landest.",
        },
        {
            h2: "Wie du auf die Ergebnisse reagierst",
            blocks: [
                { type: "body", text: "Wenn der Score unter 0.8 liegt und das Video weniger als drei Tage alt ist, ist das Thumbnail die Intervention mit dem höchsten Hebel. CTR-Änderungen in den ersten 48 Stunden können den Score noch genug bewegen, um die Kurvenfamilie zu wechseln — das ist der Unterschied zwischen einem Decay-Muster und einem Durchschnittsleistungs-Muster. Retention und Engagement sind rückwirkend schwieriger zu ändern; Packaging nicht." },
                { type: "body", text: "Wenn der Score zwischen 0.8 und 1.5 liegt und das Video seit vier bis sieben Tagen live ist, zeigt die Prognose durchschnittliche Reichweite mit realistischem Long-Tail-Potenzial. Die nützlichste Aktion hier ist Cross-Promotion — bestehende Traffic-Quellen pushen (Community-Post, andere Videos, externe Links), um genug Geschwindigkeit aufrechtzuerhalten, dass der Algorithmus das Video weiterhin in neue Audiences jenseits der ersten Woche samplet." },
                { type: "body", text: "Wenn der Score über 1.5 liegt, erwartet das Modell einen zweiten Push um die Tage 12–15. Die Aktion mit dem höchsten Hebel in dieser Phase ist das Engagement mit frühen Kommentaren — was dem Algorithmus Creator-Reaktionsfähigkeit signalisiert — und das Vermeiden von schnellen Änderungen an den Metadaten des Videos während des anfänglichen Push-Fensters, da diese den Distributionszyklus unterbrechen können, bevor er vollständig abgelaufen ist." },
            ],
        },
    ],
    authorBio: "Ich baue Tools, die Creatorn helfen zu verstehen, was ihre Daten wirklich sagen — bevor sie Zeit mit den falschen Variablen verbringen.",
    related: [
        { id: "analyze-viral-content", title: "Viralen Content analysieren und gewinnende Formate finden",                   category: "Analyse",   thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop" },
        { id: "hook-killing-videos",   title: "Warum dein Hook deine Videos tötet (und wie du es behebst)",                    category: "Produktion", thumb: "https://images.unsplash.com/photo-1574717024453-354056aec766?w=400&auto=format&fit=crop" },
        { id: "loop-effect-retention", title: "Der Loop-Effekt: Wie Retention die Wahrnehmung deines Kanals durch den Algorithmus prägt", category: "Analytik", thumb: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&auto=format&fit=crop" },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// JAPANESE
// ─────────────────────────────────────────────────────────────────────────────
export const ja = {
    hero: {
        title: "YouTubeビュー予測ツールの使い方（スコアが実際に意味するもの）",
        lead:  "ほとんどのクリエイターは90日間の数字を見て終わりにします。本当の価値はスコアと曲線の形状にあります。それらは手遅れになる前に動画について何を教えてくれるかを示しています。",
        cover: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", alt: "YouTubeアナリティクスダッシュボード" },
    },
    lead: "ビュー予測ツールは水晶玉ではありません。診断ツールです。予測はスコアほど多くを語りません。そしてスコアはほぼ完全に、あなたがコントロールできる2〜3の入力値によって決まります。",
    sections: [
        {
            h2: "予測ツールが実際に行っていること",
            blocks: [
                { type: "body", text: "エンジンは5つのステージで動作します。まず、現在の再生数とエンゲージメントをアルゴリズムシグナルスコアに変換します。次に、既存データから1日あたりのピーク再生数を較正します。第3に、再生数減衰曲線を適用します（Long FormとShortsで異なり、各スコアレベルでも異なります）。第4に、言語市場とニッチに基づいてオーディエンスプールの上限を適用します。第5に、画面に表示される曲線を出力します。" },
                { type: "body", text: "ほとんどの人を驚かせること：再生数ではなく、アルゴリズムスコアが曲線の形を決定します。500回再生でスコア2.4の動画は、50,000回再生でスコア0.6の動画よりも積極的な成長予測を生成します。現在の再生数はベースラインを較正します。スコアは曲線が上昇するか、横ばいになるか、衰退するかを決定します。" },
                { type: "callout", kind: "info", title: "重要な洞察", text: "予測ツールは再生数を予測しません。現在のパフォーマンスシグナルによって示唆されるアルゴリズム的軌跡を予測します。この違いは重要です：軌跡は変えられます。予測は変えられません。" },
            ],
        },
        {
            h2: "アルゴリズムスコア — 何が入るか",
            blocks: [
                { type: "body", text: "スコアはLong FormとShortsで異なる方法で計算されます。YouTubeが各フォーマットで使用するシグナルが本質的に異なるからです。Long Formでは、エンジンはCTR、維持率、重み付けされたエンゲージメント（いいね×1、コメント×3、シェア×8、獲得登録者×5）をチャンネルの平均再生回数パフォーマンスから導出されたオーソリティ乗数と組み合わせます。Shortsでは、スワイプ率がCTRを置き換え、完了率が維持率を置き換え、完了率が85%または95%を超えた場合に追加のバイラルトリガーが適用されます。" },
                { type: "body", text: "オーソリティ乗数はほとんどのクリエイターが見逃す部分です。現在の動画がチャンネル平均と比較してどのようにパフォームしているかに基づいてスコアを調整します。通常の再生数の2倍の動画は乗数を増加させます。平均の半分の動画は乗数を減少させます。" },
                { type: "stats", items: [
                    { value: "×1",  label: "いいねの重み",         sub: "基本エンゲージメント" },
                    { value: "×3",  label: "コメントの重み",       sub: "議論シグナル",         accent: true },
                    { value: "×8",  label: "シェアの重み",         sub: "最強シグナル" },
                    { value: "×5",  label: "登録者獲得の重み",     sub: "インテントシグナル" },
                ]},
                { type: "body", text: "シェアは圧倒的に最も高いエンゲージメントウェイトを持っています。再生数の0.5%でさえシェアを生成する動画は、コメントやいいねが同じ率では複製できない配信シグナルを送っています。エンゲージメントスコアが低く、1つのメトリクスを改善できるなら、シェアが最もレバレッジの高いターゲットです。" },
            ],
        },
        {
            h2: "スコアの閾値と予測されること",
            blocks: [
                { type: "body", text: "スコアは4つの曲線ファミリーにマップされ、それぞれ異なる形状を持っています。0.8未満では、動画は急速な減衰パターンに従います：登録者と通知からの強い初日プッシュ、その後5日目までにほぼ完全に落ち込みます。ほぼすべてのトラフィックが最初の週に届くため、90日間の数字は7日間の数字に近くなります。" },
                { type: "body", text: "0.8から1.5の間では、エンジンは平均パフォーマンス曲線にブレンドされます：より鋭い2日目のピーク、より緩やかな肩の減衰、30日間のウィンドウまで持続する意味のあるトラフィック。ほとんどの動画がこの範囲に着地します。30日間の数字は7日間の数字より意味のある程度高くなります。" },
                { type: "callout", kind: "tip", title: "2.2以上 — バイラルパターン", text: "2.2以上では、モデルはバイラル曲線を適用します：4日目頃に遅延したピーク、13〜16日目に強い二次ピーク、その後ゆっくりした減衰。スコアがこの範囲にある場合、最も重要なことは早期のコメントにすぐに反応することです。アルゴリズムは最初の48時間のクリエイターエンゲージメントを品質シグナルとして読み取り、初期プッシュを延長できます。" },
            ],
        },
        {
            h2: "Long Form vs Shorts — 同じ計算ではない",
            blocks: [
                { type: "body", text: "2つのフォーマットはまったく異なる入力ロジックとまったく異なる曲線ファミリーを使用します。Long Formでは、CTRと維持率がスコアの主要ドライバーです。6%のCTRと50%の維持率が、エンジンが意味のあるアルゴリズム配信を期待する閾値です。それ以下では、エンゲージメント数に関係なく曲線は減衰パターンにデフォルトします。" },
                { type: "body", text: "Shortsでは、スワイプ率がCTRの同等物ですが、逆に機能します：低いスワイプ率が良いのです。30%未満がグリーンゾーンです。50%を超えると、他のメトリクスに関係なく弱いシグナル曲線がトリガーされます。完了率は非線形効果があります。85%と95%を超えると乗数が有効化され（2.5×と3×、ループを誘発するコンテンツでは105%超で追加5×）、予測軌跡を劇的に変えることができます。" },
                { type: "stats", items: [
                    { value: "<30%",  label: "Shortsスワイプ率",     sub: "グリーンゾーン — 強いシグナル" },
                    { value: "85%+",  label: "Shorts完了率",         sub: "アルゴブースト有効化",          accent: true },
                    { value: "6%+",   label: "Long Form CTR",        sub: "配信閾値" },
                    { value: "50%+",  label: "Long Form維持率",      sub: "拡張プッシュシグナル" },
                ]},
                { type: "body", text: "実用的な結果：両方のフォーマットを制作する場合、スコアを直接比較しないでください。Shortsスコア1.8とLong Formスコア1.8は同等の予測ではありません。異なるシグナルに較正された異なる曲線ファミリー内のスコアです。絶対数は計算されたフォーマットに対して相対的にのみ意味を持ちます。" },
            ],
        },
        {
            h2: "90日曲線の読み方",
            blocks: [
                { type: "body", text: "曲線には2つのセグメントがあります：過去のライン（緑、実線）と未来のライン（紫、破線）、動画年齢での「今日」マーカーで区切られています。過去のセグメントは現在のデータによって示唆された軌跡を示します。セグメントが実際に何が起こったかを考えると非現実的に見える場合、最も可能性の高い説明は動画年齢の入力が間違っていることです。" },
                { type: "body", text: "未来のセグメントが予測です。3つのことを探してください：ピーク位置（曲線はいつピークに達するか、それは過去か未来か？）、肩の形状（ピーク後どのくらい急激に減衰するか？）、30日と90日の数字の差。30日と90日の大きなギャップは長尾の可能性を持つ動画を示します。小さなギャップはフロントロードされた動画を示し、ほとんどの価値はすでに届いているか最初の月に届くことを示しています。" },
                { type: "callout", kind: "tip", title: "2つのモード", text: "累積と日次の表示モードを切り替えてください。累積は時間の経過とともに総再生数を示します。日次は1日あたりの再生率を示します — ピーク日、減衰率、2週目または3週目に2次プッシュが予期されるかどうかを特定するのに役立ちます。スコアが1.5を超える動画では、日次再生数モードはしばしば累積ビューが隠す2次ピークを明らかにします。" },
            ],
        },
        {
            h2: "最も一般的な入力の間違い",
            blocks: [
                { type: "body", text: "動画年齢は間違っている場合に最も歪んだ結果をもたらす入力です。実際には12日古い動画に「3」を入力すると、エンジンは現在の再生数を持つ動画の3日目にピークを較正します。これは12日目の同じデータとはまったく異なる曲線を生成します。今の時点で予想よりも少ない再生数でも不快であっても、アップロードからの実際の日数を入力してください。" },
                { type: "callout", kind: "warn", title: "平均前回再生数", text: "これはほとんどの人がスキップする入力です。オーソリティ乗数を制御します。これはチャンネルのベースラインに対して現在の動画がどのようにパフォームしているかに基づいてスコアを調整するコンポーネントです。空白のままにするとデフォルトで乗数が1.0になります。これはまったく新しいチャンネルには正しいですが、現在の動画が平均を下回っている確立されたチャンネルのスコアを体系的に過大評価します。" },
                { type: "body", text: "登録者フィールドは通知フロアを計算するために使用されます。これは通知を見てクリックする登録者の推定割合から導出される最小ピーク1日再生率です。スコアを駆動しませんが、予測が登録者ベースだけで合理的に届けられるものを下回らないことを保証します。" },
            ],
        },
        {
            quote: "スコアはアルゴリズムが現在あなたの動画をどこで見ているかを示します。曲線はどこへ行く可能性があるかを示します。最初の48時間に何をするかが、どの曲線に乗るかを決定します。",
        },
        {
            h2: "結果に基づいてどう行動するか",
            blocks: [
                { type: "body", text: "スコアが0.8未満で動画が3日未満の場合、最も高いレバレッジを持つ介入はサムネイルです。最初の48時間のCTR変更はスコアを曲線ファミリーを変えるほど動かすことができます。これは減衰パターンと平均パフォーマンスパターンの違いです。維持率とエンゲージメントは遡及的に変えることがより難しいです。パッケージングはそうではありません。" },
                { type: "body", text: "スコアが0.8から1.5の間で動画が4〜7日間ライブの場合、予測は現実的な長尾の可能性を持つ平均的なリーチを示しています。ここで最も有用なアクションはクロスプロモーションです。アルゴリズムが最初の週を超えて新しいオーディエンスに動画をサンプリングし続けるのに十分な速度を維持するために、既存のトラフィックソース（コミュニティポスト、他の動画、外部リンク）をプッシュします。" },
                { type: "body", text: "スコアが1.5を超えている場合、モデルは12〜15日頃に2次プッシュを期待します。この段階で最も高いレバレッジを持つアクションは早期コメントへのエンゲージメントです。これはアルゴリズムにクリエイターの応答性をシグナルします。また、配信サイクルが完全に実行される前に中断する可能性があるため、最初のプッシュウィンドウ中に動画のメタデータを急速に変更することを避けてください。" },
            ],
        },
    ],
    authorBio: "クリエイターが間違った変数に時間を費やす前に、データが実際に何を言っているかを理解するのを助けるツールを構築しています。",
    related: [
        { id: "analyze-viral-content", title: "バイラルコンテンツを分析して勝てるフォーマットを見つける方法",         category: "リサーチ",      thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop" },
        { id: "hook-killing-videos",   title: "なぜあなたのフックが動画を台無しにしているのか（修正方法）",           category: "制作",           thumb: "https://images.unsplash.com/photo-1574717024453-354056aec766?w=400&auto=format&fit=crop" },
        { id: "loop-effect-retention", title: "ループ効果：維持率がアルゴリズムのチャンネル評価をどう形成するか",    category: "アナリティクス", thumb: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&auto=format&fit=crop" },
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