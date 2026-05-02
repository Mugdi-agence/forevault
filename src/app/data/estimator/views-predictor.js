const ytViewsPredictor = {
    "en": {
      "meta": {
        "slug": "youtube-views-predictor",
        "title": "YouTube Views Predictor — 90-Day Forecast Tool",
        "description": "Estimate how your YouTube video will perform over the next 90 days. Enter CTR, retention, engagement and channel data to get a realistic view curve."
      },
      "hero": {
        "eyebrow": "How YouTube performance really works",
        "title": "YouTube Views Predictor: understanding the curve behind your numbers",
        "lead": [
          "After publishing a video, the hardest part is not the wait — it is not knowing whether the wait means anything. A video that sits at 3K views on day two might reach 200K by day 30, or it might end at 8K. Both outcomes start the same way. The difference is in signals that happen mostly in the first 48 to 96 hours, and most creators do not have a useful framework for reading them.",
          "What makes view prediction genuinely difficult is not a lack of data — you have CTR, retention, engagement, watch time, and channel history. It is that those signals interact with each other in non-linear ways, and the relationship between day-3 performance and day-30 performance changes depending on which phase of distribution the video is currently in.",
          "This page explains how the model works, what it is actually measuring, and — importantly — where the model breaks down. Because it does break down in certain situations, and knowing those situations prevents misreading the output.",
          "Methodology note: this predictor is built on observed view curve archetypes from creator-reported data, not on access to YouTube's internal systems. It models realistic probability ranges, not guaranteed outcomes. Individual video performance can deviate significantly from any prediction based on factors the model cannot observe."
        ]
      },
      "stats": [
        { "value": "90 days", "label": "Full view curve forecast" },
        { "value": "50+",     "label": "Niches modeled" },
        { "value": "80+",     "label": "Language markets compared" },
        { "value": "±25%",   "label": "Typical forecast range" }
      ],
      "sections": [
        {
          "title": "What the model is actually measuring",
          "blocks": [
            {
              "type": "text",
              "value": "The predictor does not have access to YouTube's internal data. What it has is a model built from observed patterns: how videos with similar algorithm signals tend to behave over 90 days, segmented by format, niche, language market, and channel authority. Here is what each input is actually doing in that model."
            },
            {
              "type": "card-grid",
              "cards": [
                {
                  "title": "Algorithm score — the central output",
                  "body": "The algorithm score combines CTR, retention or completion rate, engagement signals, and channel authority into a single composite. This score then selects which of four curve archetypes — weak, average, strong, or viral — the prediction uses as its basis, with smooth blending between them. A score above roughly 1.5 typically corresponds to videos that receive extended browse and suggested distribution. Below 0.8, the curve tends to decay fast after the first day."
                },
                {
                  "title": "Audience pool and language market cap",
                  "body": "Every niche-language combination has a ceiling. An English-language finance video can theoretically reach a much larger audience than the same concept in a smaller language market, not because the content is better but because the addressable pool is larger. The model applies a realistic cap based on estimated market size and niche audience share."
                },
                {
                  "title": "Long-form vs Shorts — genuinely different curves",
                  "body": "Long-form and Shorts do not just have different RPM. They have structurally different view curves. Long-form typically builds a shoulder plateau around days 4–14 as browse and suggested distribution kicks in after the algorithm test window. Shorts can spike earlier and harder, but tend to decay faster unless loop signals are strong."
                },
                {
                  "title": "CTR and retention — why both matter together",
                  "body": "High CTR without retention means the thumbnail and title are doing their job but the video is not. High retention without CTR means the video satisfies the people who watch it, but not enough people are clicking to find it. In the model, CTR and retention are multiplied together rather than added — which means a weakness in either one creates a larger drag than a weakness in a less important signal."
                },
                {
                  "title": "Engagement weighting",
                  "body": "Shares are weighted more heavily than likes in the model because they have a stronger relationship with extended distribution in practice. A video that gets shared at scale is reaching new audiences by definition. Subscriber gains are weighted similarly because they indicate the viewer found enough value to want more, which correlates with content that performs well in browse features."
                },
                {
                  "title": "Channel authority — context for the signals",
                  "body": "The same CTR and retention numbers mean different things on a channel with 500K average views per video versus a channel with 2K average views. The model includes an authority multiplier that reflects this: consistent channels at scale get some distributional benefit from their track record, while newer or inconsistent channels are treated more conservatively."
                }
              ]
            }
          ]
        },
        {
          "title": "Where the model breaks down",
          "blocks": [
            { "type": "text", "value": "A model built on historical patterns cannot anticipate structural changes. Here is where this one is most likely to be wrong." },
            { "type": "text", "value": "Trend-driven videos violate the assumptions the model is built on. When a topic suddenly becomes culturally significant — a news event, a viral moment, a policy change — related videos can have view curves that look nothing like the observed archetypes. The model will usually underpredict these videos significantly." },
            { "type": "text", "value": "Very new channels also create estimation problems. The channel authority component of the model is calibrated against channels with meaningful history. A channel with 5 videos has very little pattern to draw from." },
            { "type": "text", "value": "Cross-platform spillover — a video going viral on Twitter or Instagram and driving YouTube views from outside the platform's normal distribution — is invisible to the model." },
            { "type": "text", "value": "And seasonality affects both views and engagement in ways that vary by niche and market. The model does not apply a seasonal correction." }
          ]
        },
        {
          "title": "Why growth and monetization advice online misleads creators",
          "blocks": [
            { "type": "text", "value": "Most advice about YouTube growth treats the process as more predictable than it is. This is where most creators get it wrong — not through lack of effort, but through applying frameworks that oversimplify a genuinely variable system." },
            { "type": "text", "value": "The screenshot problem is significant. One viral video gets posted everywhere. The 40 average videos that came before and after it do not. The result is that most creators have a reference library of exceptional performances, not typical ones." },
            { "type": "text", "value": "The same problem applies to 'views x $X' income estimates. The formula ignores niche, geography, retention, format, and ad market timing — which is to say, it ignores the variables that actually determine the result." }
          ]
        },
        {
          "title": "What realistic outcome spreads look like",
          "blocks": [
            { "type": "text", "value": "These scenarios illustrate how the same starting-point metrics can lead to different 90-day outcomes depending on niche and audience profile. They are ranges, not predictions for specific channels." },
            {
              "type": "card-grid",
              "cards": [
                {
                  "title": "Gaming channel — 50K views at day 3, strong engagement",
                  "body": "Gaming can produce fast early spikes but has a harder time building the shoulder plateau that extends long-tail distribution. With strong algorithm signals, a 90-day total of 200K–280K is plausible. With average signals, the curve often flattens faster after the first week. The variance within 'gaming' is itself wide."
                },
                {
                  "title": "Finance channel — 50K views at day 3, solid retention",
                  "body": "Finance videos with genuine search demand tend to build a longer tail than entertainment content because the topic remains relevant beyond the initial distribution window. A 90-day range of 350K–650K is plausible with strong signals and a US-heavy audience."
                },
                {
                  "title": "Tutorial channel — 50K views at day 3, high search potential",
                  "body": "Tutorials for topics with consistent demand can build a distribution tail that extends well past 90 days. For tutorial channels, month 6 RPM is sometimes more informative than month 1 views."
                },
                {
                  "title": "US finance channel — 100K at day 5, 9 minutes, 52% retention",
                  "body": "A realistic 90-day projection might land between 380K and 720K views if CTR and engagement stay consistent with the early signals. The wide range reflects the genuine uncertainty in whether browse and suggested distribution maintains itself through the shoulder phase."
                },
                {
                  "title": "Gaming channel, same starting metrics",
                  "body": "The higher competition density in gaming combined with typically lower watch time usually produces a more compressed 90-day range — something like 190K–350K is plausible under similar signal conditions. Monetization per view is also lower."
                },
                {
                  "title": "The underlying point",
                  "body": "Same starting views, same video age, very different probable trajectories. This is why comparing channels without matching niche, language market, retention profile, and audience geography is almost always a misleading exercise."
                }
              ]
            }
          ]
        },
        {
          "title": "Forecasting errors that look reasonable but distort decisions",
          "blocks": [
            {
              "type": "list",
              "items": [
                "Using early views as a final signal — day 3 performance tells you about the notification burst and early algorithm test. It does not tell you about browse and suggested distribution, which often determines the shoulder and tail phases.",
                "Comparing channels without context — niche, language market, and audience profile create fundamentally different operating environments.",
                "Isolating one metric — CTR without retention, or engagement without CTR, gives a partial picture that can lead to wrong conclusions.",
                "Planning from exceptional data points — one peak video is not a baseline. A channel's decision-making should be built on the distribution of its performances."
              ]
            }
          ]
        },
        {
          "title": "Common myths about YouTube view growth",
          "blocks": [
            {
              "type": "list",
              "items": [
                "'Strong early views always lead to a strong final result' is false — the algorithm test window (days 1–4) is arguably more decisive for long-form content than the initial notification burst.",
                "'All videos in my niche should perform similarly' is false — competition density, subtopic demand, and audience size all vary within a single broad niche.",
                "'Shorts always grow faster' is false, or at least incomplete — Shorts can spike quickly, but the long-tail behavior is compressed relative to long-form.",
                "'Channel authority does not matter for distribution' is false — consistent performance history affects how conservatively or generously the algorithm tests new videos."
              ]
            }
          ]
        },
        {
          "title": "Using scenario modeling instead of single-point estimates",
          "blocks": [
            { "type": "text", "value": "The most useful way to use this predictor is not to find 'the' forecast for a video — it is to run several scenarios and understand what conditions would need to be true for each outcome. That kind of reasoning turns a prediction tool into a decision support tool." },
            { "type": "text", "value": "Once you model real inputs instead of gut-feel estimates, patterns become visible that are hard to see in analytics alone. A channel that consistently gets strong CTR but weak retention has a different strategic problem than one with the reverse." }
          ]
        },
        {
          "title": "Model limits and appropriate use",
          "blocks": [
            { "type": "text", "value": "This is a structured approximation built from observed behavioral patterns and audience-size constraints. It is most useful for comparative analysis between channel configurations and for identifying which signal variables are limiting performance. It is not reliable for trend-driven content, very new channels with minimal history, or any situation where external traffic sources might significantly affect results." },
            { "type": "text", "value": "Use the output as a planning range with honest uncertainty, not as a forecast to be held to." }
          ]
        }
      ],
      "faq": [
        {
          "q": "How accurate is the YouTube Views Predictor?",
          "a": "When the input metrics are close to real values, the forecast tends to fall within roughly ±25% of actual outcomes for videos that follow typical distribution patterns. The accuracy degrades meaningfully for trend-driven content, videos that receive significant external traffic, very new channels, or any video that experiences unexpected algorithm behavior."
        },
        {
          "q": "What is the algorithm score and why does it matter?",
          "a": "The algorithm score aggregates CTR, retention or completion rate, engagement signals, and channel authority into a single composite that maps to different view curve archetypes. Above roughly 1.5, the model predicts extended browse and suggested distribution. Below 0.8, it predicts rapid post-spike decay. It is a model construct, not a YouTube metric."
        },
        {
          "q": "Why does my niche change the forecast so much?",
          "a": "Because each niche has a different audience pool size and audience share estimate, which affects the cap applied to the raw prediction. Finance in English has a much larger addressable pool than the same topic in a smaller language market. Niche competition density also shapes how aggressively the model assumes the algorithm will compete for attention with other content."
        },
        {
          "q": "Does the language or country choice actually matter?",
          "a": "Yes. The language market selection applies a realistic audience ceiling to the forecast. A video in a market with 40 million monthly views in a given niche cannot realistically reach 10 million views on a single video — the pool does not support it."
        },
        {
          "q": "Long-form or Shorts — which format predicts more reliably?",
          "a": "Long-form predictions tend to be more stable because the distribution curve is more consistent across videos in the same signal tier. Shorts predictions are more variable because Shorts performance is more binary — a video either catches a loop or it doesn't."
        },
        {
          "q": "What should I enter if I don't have Analytics data yet?",
          "a": "Use conservative defaults: around 40–45% retention and 4–5% CTR for long-form, or 75–80% completion with under 45% swipe rate for Shorts. Replace them with real data as soon as it is available."
        },
        {
          "q": "Is this Views Predictor free to use?",
          "a": "Yes, it is free and does not require an account. The model runs locally in your browser, so you can test scenarios without any setup and without sending channel data to external servers."
        }
      ],
      "disclaimer": "The YouTube Views Predictor uses aggregated creator-reported data and observed distribution patterns to model realistic 90-day view curves. Real performance can still shift significantly because of trend events, platform changes, external traffic sources, competition changes, or audience behavior that does not match historical patterns. Use this tool for planning and education, not guarantees.",
      "tool": { "type": "predictor", "props": {} }
    },
    "fr": {
      "meta": {
        "slug": "youtube-views-predictor",
        "title": "Prédicteur de vues YouTube — Outil de prévision sur 90 jours",
        "description": "Estimez les performances de votre vidéo YouTube sur les 90 prochains jours. Entrez le CTR, la rétention, l'engagement et les données de chaîne pour obtenir une courbe de vues réaliste."
      },
      "hero": {
        "eyebrow": "Comment fonctionne réellement la performance YouTube",
        "title": "Prédicteur de vues YouTube : comprendre la courbe derrière vos chiffres",
        "lead": [
          "Après avoir publié une vidéo, la partie la plus difficile n'est pas l'attente — c'est de ne pas savoir si cette attente signifie quelque chose. Une vidéo à 3K vues au deuxième jour peut atteindre 200K au jour 30, ou se terminer à 8K. Les deux issues commencent de la même façon. La différence réside dans des signaux qui se produisent principalement dans les 48 à 96 premières heures, et la plupart des créateurs ne disposent pas d'un cadre utile pour les interpréter.",
          "Ce qui rend la prédiction de vues vraiment difficile n'est pas un manque de données — vous avez le CTR, la rétention, l'engagement, le temps de visionnage et l'historique de la chaîne. C'est que ces signaux interagissent les uns avec les autres de manière non linéaire, et la relation entre la performance au jour 3 et la performance au jour 30 change selon la phase de distribution dans laquelle se trouve la vidéo.",
          "Cette page explique comment le modèle fonctionne, ce qu'il mesure réellement, et — surtout — où il atteint ses limites. Car il atteint ses limites dans certaines situations, et les connaître évite de mal interpréter les résultats.",
          "Note méthodologique : ce prédicteur est construit sur des archétypes de courbes de vues observés à partir de données rapportées par des créateurs, et non sur l'accès aux systèmes internes de YouTube. Il modélise des fourchettes de probabilité réalistes, pas des résultats garantis."
        ]
      },
      "stats": [
        { "value": "90 jours", "label": "Prévision complète de la courbe de vues" },
        { "value": "50+",      "label": "Niches modélisées" },
        { "value": "80+",      "label": "Marchés linguistiques comparés" },
        { "value": "±25%",    "label": "Fourchette de prévision typique" }
      ],
      "sections": [
        {
          "title": "Ce que le modèle mesure réellement",
          "blocks": [
            {
              "type": "text",
              "value": "Le prédicteur n'a pas accès aux données internes de YouTube. Il s'appuie sur un modèle construit à partir de tendances observées : comment les vidéos présentant des signaux algorithmiques similaires ont tendance à se comporter sur 90 jours, segmentées par format, niche, marché linguistique et autorité de chaîne."
            },
            {
              "type": "card-grid",
              "cards": [
                {
                  "title": "Score algorithmique — la sortie centrale",
                  "body": "Le score algorithmique combine le CTR, le taux de rétention ou de complétion, les signaux d'engagement et l'autorité de la chaîne en un composite unique. Ce score sélectionne ensuite parmi quatre archétypes de courbes — faible, moyen, fort ou viral — la base utilisée pour la prédiction. Un score supérieur à environ 1,5 correspond généralement aux vidéos qui bénéficient d'une distribution étendue via la navigation et les suggestions. En dessous de 0,8, la courbe tend à décroître rapidement après le premier jour."
                },
                {
                  "title": "Audience potentielle et plafond du marché linguistique",
                  "body": "Chaque combinaison niche-langue a un plafond. Une vidéo de finance en anglais peut théoriquement atteindre une audience bien plus large que le même concept sur un marché linguistique plus restreint, non pas parce que le contenu est meilleur, mais parce que la base d'audience adressable est plus grande. Le modèle applique un plafond réaliste basé sur la taille estimée du marché et la part d'audience de la niche."
                },
                {
                  "title": "Vidéo longue vs Shorts — des courbes structurellement différentes",
                  "body": "Les vidéos longues et les Shorts n'ont pas seulement des RPM différents. Leurs courbes de vues sont structurellement différentes. Les vidéos longues construisent généralement un plateau autour des jours 4 à 14, quand la distribution via la navigation et les suggestions s'enclenche après la fenêtre de test algorithmique. Les Shorts peuvent culminer plus tôt et plus fortement, mais tendent à décroître plus vite si les signaux de boucle ne sont pas forts."
                },
                {
                  "title": "CTR et rétention — pourquoi les deux comptent ensemble",
                  "body": "Un CTR élevé sans rétention signifie que la miniature et le titre font leur travail, mais pas la vidéo. Une rétention élevée sans CTR signifie que la vidéo satisfait ceux qui la regardent, mais pas assez de personnes cliquent pour la trouver. Dans le modèle, CTR et rétention sont multipliés plutôt qu'additionnés — ce qui signifie qu'une faiblesse dans l'un ou l'autre crée un frein plus important qu'une faiblesse sur un signal moins déterminant."
                },
                {
                  "title": "Pondération de l'engagement",
                  "body": "Les partages sont pondérés plus fortement que les likes dans le modèle, car ils ont une relation plus forte avec la distribution étendue en pratique. Une vidéo massivement partagée atteint par définition de nouvelles audiences. Les abonnements sont pondérés de manière similaire, car ils indiquent que le spectateur a trouvé suffisamment de valeur pour en vouloir davantage."
                },
                {
                  "title": "Autorité de la chaîne — le contexte des signaux",
                  "body": "Les mêmes chiffres de CTR et de rétention ont une signification différente sur une chaîne avec 500K vues moyennes par vidéo par rapport à une chaîne avec 2K vues. Le modèle inclut un multiplicateur d'autorité qui reflète cela : les chaînes cohérentes à grande échelle bénéficient d'un avantage distributionnel lié à leur historique, tandis que les chaînes plus récentes ou inconsistantes sont traitées de manière plus conservative."
                }
              ]
            }
          ]
        },
        {
          "title": "Où le modèle atteint ses limites",
          "blocks": [
            { "type": "text", "value": "Un modèle construit sur des tendances historiques ne peut pas anticiper les changements structurels. Voici où celui-ci est le plus susceptible de se tromper." },
            { "type": "text", "value": "Les vidéos portées par une tendance violent les hypothèses sur lesquelles le modèle est construit. Quand un sujet devient soudainement culturellement significatif — un événement d'actualité, un moment viral, un changement de politique — les vidéos associées peuvent avoir des courbes de vues qui ne ressemblent en rien aux archétypes observés. Le modèle sous-estimera généralement considérablement ces vidéos." },
            { "type": "text", "value": "Les chaînes très récentes posent également des problèmes d'estimation. La composante d'autorité de chaîne du modèle est calibrée sur des chaînes avec un historique significatif. Une chaîne avec 5 vidéos offre très peu de données sur lesquelles s'appuyer." },
            { "type": "text", "value": "Le déversement cross-plateforme — une vidéo devenant virale sur Twitter ou Instagram et générant des vues YouTube en dehors de la distribution normale de la plateforme — est invisible pour le modèle." },
            { "type": "text", "value": "Et la saisonnalité affecte à la fois les vues et l'engagement de manière variable selon la niche et le marché. Le modèle n'applique pas de correction saisonnière." }
          ]
        },
        {
          "title": "Pourquoi les conseils de croissance en ligne induisent les créateurs en erreur",
          "blocks": [
            { "type": "text", "value": "La plupart des conseils sur la croissance YouTube traitent le processus comme plus prévisible qu'il ne l'est. C'est là que la plupart des créateurs se trompent — non par manque d'efforts, mais en appliquant des cadres qui simplifient à l'excès un système genuinement variable." },
            { "type": "text", "value": "Le problème des captures d'écran est significatif. Une vidéo virale est partagée partout. Les 40 vidéos moyennes qui l'ont précédée et suivie ne le sont pas. Il en résulte que la plupart des créateurs ont une bibliothèque de performances exceptionnelles, pas typiques." },
            { "type": "text", "value": "Le même problème s'applique aux estimations de revenus 'vues x X€'. Cette formule ignore la niche, la géographie, la rétention, le format et le timing du marché publicitaire — c'est-à-dire les variables qui déterminent réellement le résultat." }
          ]
        },
        {
          "title": "À quoi ressemblent des fourchettes de résultats réalistes",
          "blocks": [
            { "type": "text", "value": "Ces scénarios illustrent comment des métriques de départ identiques peuvent mener à des résultats très différents à 90 jours selon la niche et le profil d'audience. Ce sont des fourchettes, pas des prédictions pour des chaînes spécifiques." },
            {
              "type": "card-grid",
              "cards": [
                {
                  "title": "Chaîne Gaming — 50K vues au jour 3, fort engagement",
                  "body": "Le gaming peut produire des pics précoces rapides mais a plus de mal à construire le plateau intermédiaire qui étend la distribution longue traîne. Avec des signaux algorithmiques forts, un total à 90 jours de 200K–280K est plausible. Avec des signaux moyens, la courbe s'aplatit souvent plus vite après la première semaine."
                },
                {
                  "title": "Chaîne Finance — 50K vues au jour 3, rétention solide",
                  "body": "Les vidéos de finance avec une vraie demande de recherche tendent à construire une longue traîne plus durable que le contenu de divertissement, car le sujet reste pertinent au-delà de la fenêtre de distribution initiale. Une fourchette à 90 jours de 350K–650K est plausible avec de forts signaux et une audience majoritairement américaine."
                },
                {
                  "title": "Chaîne Tutoriels — 50K vues au jour 3, fort potentiel de recherche",
                  "body": "Les tutoriels sur des sujets à demande constante peuvent construire une traîne de distribution qui s'étend bien au-delà de 90 jours. Pour les chaînes de tutoriels, le RPM du mois 6 est parfois plus informatif que les vues du mois 1."
                },
                {
                  "title": "Chaîne Finance US — 100K au jour 5, 9 minutes, 52% de rétention",
                  "body": "Une projection réaliste à 90 jours pourrait se situer entre 380K et 720K vues si le CTR et l'engagement restent cohérents avec les signaux précoces. La large fourchette reflète l'incertitude réelle quant au maintien de la distribution via navigation et suggestions pendant la phase intermédiaire."
                },
                {
                  "title": "Chaîne Gaming, mêmes métriques de départ",
                  "body": "La densité de concurrence plus élevée dans le gaming combinée à un temps de visionnage typiquement plus faible produit généralement une fourchette à 90 jours plus resserrée — quelque chose comme 190K–350K est plausible dans des conditions de signaux similaires."
                },
                {
                  "title": "Le point fondamental",
                  "body": "Mêmes vues de départ, même ancienneté de vidéo, des trajectoires probables très différentes. C'est pourquoi comparer des chaînes sans tenir compte de la niche, du marché linguistique, du profil de rétention et de la géographie de l'audience est presque toujours un exercice trompeur."
                }
              ]
            }
          ]
        },
        {
          "title": "Erreurs de prévision qui semblent raisonnables mais faussent les décisions",
          "blocks": [
            {
              "type": "list",
              "items": [
                "Utiliser les vues précoces comme signal définitif — la performance au jour 3 vous renseigne sur le burst de notification et le test algorithmique initial. Elle ne vous renseigne pas sur la distribution via navigation et suggestions, qui détermine souvent les phases intermédiaire et longue traîne.",
                "Comparer des chaînes sans contexte — niche, marché linguistique et profil d'audience créent des environnements d'exploitation fondamentalement différents.",
                "Isoler une seule métrique — le CTR sans la rétention, ou l'engagement sans le CTR, donne une image partielle qui peut mener à de mauvaises conclusions.",
                "Planifier à partir de points de données exceptionnels — une vidéo au pic n'est pas une ligne de base. Les décisions d'une chaîne doivent s'appuyer sur la distribution de ses performances."
              ]
            }
          ]
        },
        {
          "title": "Idées reçues sur la croissance des vues YouTube",
          "blocks": [
            {
              "type": "list",
              "items": [
                "'Des vues précoces fortes mènent toujours à un résultat final fort' est faux — la fenêtre de test algorithmique (jours 1–4) est sans doute plus décisive pour le contenu long format que le burst de notification initial.",
                "'Toutes les vidéos de ma niche devraient performer de manière similaire' est faux — densité de concurrence, demande par sous-sujet et taille d'audience varient au sein d'une même niche large.",
                "'Les Shorts croissent toujours plus vite' est faux, ou au moins incomplet — les Shorts peuvent piquer rapidement, mais le comportement longue traîne est compressé par rapport au long format.",
                "'L'autorité de la chaîne n'a pas d'importance pour la distribution' est faux — l'historique de performance constant affecte la manière plus ou moins conservatrice dont l'algorithme teste les nouvelles vidéos."
              ]
            }
          ]
        },
        {
          "title": "Utiliser la modélisation de scénarios plutôt que des estimations ponctuelles",
          "blocks": [
            { "type": "text", "value": "La façon la plus utile d'utiliser ce prédicteur n'est pas de trouver 'la' prévision pour une vidéo — c'est d'exécuter plusieurs scénarios et de comprendre quelles conditions devraient être réunies pour chaque résultat. Ce type de raisonnement transforme un outil de prédiction en outil d'aide à la décision." },
            { "type": "text", "value": "Une fois que vous modélisez des données réelles plutôt que des estimations instinctives, des tendances deviennent visibles qu'il est difficile de voir dans les analytics seuls. Une chaîne qui obtient systématiquement un fort CTR mais une faible rétention a un problème stratégique différent de celle avec l'inverse." }
          ]
        },
        {
          "title": "Limites du modèle et utilisation appropriée",
          "blocks": [
            { "type": "text", "value": "Il s'agit d'une approximation structurée construite à partir de tendances comportementales observées et de contraintes de taille d'audience. Elle est la plus utile pour l'analyse comparative entre configurations de chaînes et pour identifier quelles variables de signal limitent les performances. Elle n'est pas fiable pour le contenu porté par des tendances, les chaînes très récentes avec peu d'historique, ou toute situation où des sources de trafic externes pourraient significativement affecter les résultats." },
            { "type": "text", "value": "Utilisez les résultats comme une fourchette de planification avec une incertitude honnête, pas comme une prévision à tenir pour acquise." }
          ]
        }
      ],
      "faq": [
        {
          "q": "Quelle est la précision du prédicteur de vues YouTube ?",
          "a": "Quand les métriques saisies sont proches des valeurs réelles, la prévision tend à se situer dans une fourchette d'environ ±25% des résultats réels pour les vidéos qui suivent des tendances de distribution typiques. La précision se dégrade significativement pour le contenu porté par des tendances, les vidéos recevant beaucoup de trafic externe, les chaînes très récentes, ou toute vidéo connaissant un comportement algorithmique inattendu."
        },
        {
          "q": "Qu'est-ce que le score algorithmique et pourquoi est-il important ?",
          "a": "Le score algorithmique agrège le CTR, le taux de rétention ou de complétion, les signaux d'engagement et l'autorité de la chaîne en un composite unique qui correspond à différents archétypes de courbes de vues. Au-dessus d'environ 1,5, le modèle prédit une distribution étendue via navigation et suggestions. En dessous de 0,8, il prédit une décroissance rapide post-pic. C'est un construit du modèle, pas une métrique YouTube."
        },
        {
          "q": "Pourquoi ma niche change-t-elle autant la prévision ?",
          "a": "Parce que chaque niche a une taille d'audience potentielle et une part d'audience estimée différentes, ce qui affecte le plafond appliqué à la prédiction brute. La finance en anglais a un bassin adressable bien plus large que le même sujet sur un marché linguistique plus restreint. La densité de concurrence dans la niche influence également la manière dont le modèle suppose que l'algorithme va concurrencer pour l'attention."
        },
        {
          "q": "Le choix de la langue ou du pays a-t-il vraiment une importance ?",
          "a": "Oui. La sélection du marché linguistique applique un plafond d'audience réaliste à la prévision. Une vidéo sur un marché avec 40 millions de vues mensuelles dans une niche donnée ne peut pas réalistement atteindre 10 millions de vues sur une seule vidéo — le bassin ne le permet pas."
        },
        {
          "q": "Vidéo longue ou Shorts — quel format se prédit le mieux ?",
          "a": "Les prédictions pour les vidéos longues tendent à être plus stables car la courbe de distribution est plus cohérente entre les vidéos du même niveau de signal. Les prédictions pour les Shorts sont plus variables car leur performance est plus binaire — une vidéo crée une boucle ou pas."
        },
        {
          "q": "Que dois-je entrer si je n'ai pas encore de données Analytics ?",
          "a": "Utilisez des valeurs par défaut conservatives : environ 40–45% de rétention et 4–5% de CTR pour les vidéos longues, ou 75–80% de complétion avec moins de 45% de taux de balayage pour les Shorts. Remplacez-les par des données réelles dès qu'elles sont disponibles."
        },
        {
          "q": "Ce prédicteur de vues est-il gratuit ?",
          "a": "Oui, il est gratuit et ne nécessite pas de compte. Le modèle s'exécute localement dans votre navigateur, vous pouvez donc tester des scénarios sans configuration et sans envoyer les données de votre chaîne vers des serveurs externes."
        }
      ],
      "disclaimer": "Le prédicteur de vues YouTube utilise des données agrégées rapportées par des créateurs et des tendances de distribution observées pour modéliser des courbes de vues réalistes sur 90 jours. Les performances réelles peuvent encore varier considérablement en raison d'événements de tendance, de changements de plateforme, de sources de trafic externes, de changements de concurrence ou de comportements d'audience ne correspondant pas aux tendances historiques. Utilisez cet outil pour la planification et l'éducation, pas comme des garanties.",
      "tool": { "type": "predictor", "props": {} }
    },
    "es": {
      "meta": {
        "slug": "youtube-views-predictor",
        "title": "Predictor de vistas de YouTube — Herramienta de pronóstico a 90 días",
        "description": "Estima el rendimiento de tu video de YouTube en los próximos 90 días. Ingresa CTR, retención, engagement y datos del canal para obtener una curva de vistas realista."
      },
      "hero": {
        "eyebrow": "Cómo funciona realmente el rendimiento en YouTube",
        "title": "Predictor de vistas de YouTube: entendiendo la curva detrás de tus números",
        "lead": [
          "Después de publicar un video, lo más difícil no es la espera — es no saber si esa espera significa algo. Un video con 3K vistas al día dos podría alcanzar 200K al día 30, o terminar en 8K. Ambos resultados comienzan igual. La diferencia está en señales que ocurren principalmente en las primeras 48 a 96 horas, y la mayoría de los creadores no tienen un marco útil para interpretarlas.",
          "Lo que hace que predecir vistas sea genuinamente difícil no es la falta de datos — tienes CTR, retención, engagement, tiempo de visualización e historial del canal. Es que esas señales interactúan entre sí de maneras no lineales, y la relación entre el rendimiento del día 3 y el del día 30 cambia según en qué fase de distribución se encuentre el video.",
          "Esta página explica cómo funciona el modelo, qué está midiendo realmente y — lo más importante — dónde falla el modelo. Porque sí falla en ciertas situaciones, y conocerlas evita malinterpretar los resultados.",
          "Nota metodológica: este predictor se basa en arquetipos de curvas de vistas observados en datos reportados por creadores, no en acceso a los sistemas internos de YouTube. Modela rangos de probabilidad realistas, no resultados garantizados."
        ]
      },
      "stats": [
        { "value": "90 días", "label": "Pronóstico completo de la curva de vistas" },
        { "value": "50+",     "label": "Nichos modelados" },
        { "value": "80+",     "label": "Mercados lingüísticos comparados" },
        { "value": "±25%",   "label": "Rango de pronóstico típico" }
      ],
      "sections": [
        {
          "title": "Lo que el modelo mide realmente",
          "blocks": [
            { "type": "text", "value": "El predictor no tiene acceso a los datos internos de YouTube. Lo que tiene es un modelo construido a partir de patrones observados: cómo los videos con señales algorítmicas similares tienden a comportarse durante 90 días, segmentados por formato, nicho, mercado lingüístico y autoridad del canal." },
            {
              "type": "card-grid",
              "cards": [
                { "title": "Puntuación algorítmica — la salida central", "body": "La puntuación algorítmica combina CTR, tasa de retención o finalización, señales de engagement y autoridad del canal en un compuesto único. Esta puntuación selecciona cuál de cuatro arquetipos de curva — débil, promedio, fuerte o viral — usa la predicción como base. Una puntuación superior a 1,5 corresponde generalmente a videos que reciben distribución extendida por navegación y sugerencias. Por debajo de 0,8, la curva tiende a decaer rápido." },
                { "title": "Audiencia potencial y límite del mercado lingüístico", "body": "Cada combinación nicho-idioma tiene un techo. Un video de finanzas en inglés puede teóricamente alcanzar una audiencia mucho mayor que el mismo concepto en un mercado lingüístico más pequeño. El modelo aplica un límite realista basado en el tamaño estimado del mercado y la cuota de audiencia del nicho." },
                { "title": "Largo vs. Shorts — curvas genuinamente diferentes", "body": "Los videos largos y los Shorts no solo tienen RPM distintos. Tienen curvas de vistas estructuralmente diferentes. Los videos largos construyen un plateau alrededor de los días 4–14. Los Shorts pueden subir antes y con más fuerza, pero tienden a decaer más rápido si las señales de bucle no son fuertes." },
                { "title": "CTR y retención — por qué ambos importan juntos", "body": "CTR alto sin retención significa que la miniatura y el título cumplen su función, pero el video no. Retención alta sin CTR significa que el video satisface a quienes lo ven, pero no hay suficientes clics. En el modelo, CTR y retención se multiplican en lugar de sumarse." },
                { "title": "Ponderación del engagement", "body": "Los compartidos tienen más peso que los likes en el modelo por su relación más fuerte con la distribución extendida. Las suscripciones se ponderan de forma similar porque indican que el espectador encontró suficiente valor para querer más." },
                { "title": "Autoridad del canal — contexto para las señales", "body": "Los mismos números de CTR y retención significan cosas distintas en un canal con 500K vistas promedio por video versus uno con 2K. El modelo incluye un multiplicador de autoridad que refleja esto: los canales consistentes a escala obtienen cierto beneficio distributivo de su historial." }
              ]
            }
          ]
        },
        {
          "title": "Dónde falla el modelo",
          "blocks": [
            { "type": "text", "value": "Un modelo construido sobre patrones históricos no puede anticipar cambios estructurales." },
            { "type": "text", "value": "Los videos impulsados por tendencias violan las suposiciones del modelo. Cuando un tema se vuelve culturalmente significativo de repente, los videos relacionados pueden tener curvas que no se parecen en nada a los arquetipos observados." },
            { "type": "text", "value": "Los canales muy nuevos también crean problemas de estimación. El componente de autoridad del canal está calibrado contra canales con historial significativo." },
            { "type": "text", "value": "El desbordamiento entre plataformas — un video haciéndose viral en Twitter o Instagram — es invisible para el modelo." },
            { "type": "text", "value": "Y la estacionalidad afecta tanto las vistas como el engagement de formas que varían por nicho y mercado. El modelo no aplica corrección estacional." }
          ]
        },
        {
          "title": "Por qué los consejos de crecimiento en línea engañan a los creadores",
          "blocks": [
            { "type": "text", "value": "La mayoría de los consejos sobre crecimiento en YouTube tratan el proceso como más predecible de lo que es. Aquí es donde la mayoría de los creadores se equivocan — no por falta de esfuerzo, sino por aplicar marcos que simplifican en exceso un sistema genuinamente variable." },
            { "type": "text", "value": "El problema de las capturas de pantalla es significativo. Un video viral se publica en todas partes. Los 40 videos promedio que vinieron antes y después no. El resultado es que la mayoría de los creadores tienen una biblioteca de referencia de rendimientos excepcionales, no típicos." },
            { "type": "text", "value": "El mismo problema aplica a las estimaciones de ingresos 'vistas x $X'. La fórmula ignora nicho, geografía, retención, formato y timing del mercado publicitario." }
          ]
        },
        {
          "title": "Cómo son los rangos de resultados realistas",
          "blocks": [
            { "type": "text", "value": "Estos escenarios ilustran cómo las mismas métricas de partida pueden llevar a resultados muy diferentes a 90 días según el nicho y el perfil de audiencia." },
            {
              "type": "card-grid",
              "cards": [
                { "title": "Canal de Gaming — 50K vistas al día 3, fuerte engagement", "body": "El gaming puede producir picos tempranos rápidos pero tiene más dificultad para construir el plateau que extiende la distribución de larga cola. Con señales fuertes, un total a 90 días de 200K–280K es plausible." },
                { "title": "Canal de Finanzas — 50K vistas al día 3, retención sólida", "body": "Los videos de finanzas con demanda de búsqueda real tienden a construir una cola más larga. Un rango a 90 días de 350K–650K es plausible con señales fuertes y audiencia mayoritariamente estadounidense." },
                { "title": "Canal de Tutoriales — 50K vistas al día 3, alto potencial de búsqueda", "body": "Los tutoriales sobre temas con demanda constante pueden construir una cola de distribución que se extiende mucho más allá de los 90 días." },
                { "title": "Canal de finanzas EE.UU. — 100K al día 5, 9 minutos, 52% retención", "body": "Una proyección realista a 90 días podría situarse entre 380K y 720K vistas si el CTR y el engagement se mantienen consistentes con las señales tempranas." },
                { "title": "Canal de Gaming, mismas métricas iniciales", "body": "La mayor densidad de competencia en gaming combinada con un tiempo de visualización típicamente menor produce un rango a 90 días más comprimido — algo como 190K–350K es plausible." },
                { "title": "El punto fundamental", "body": "Mismas vistas iniciales, misma antigüedad del video, trayectorias probables muy diferentes. Por eso comparar canales sin considerar nicho, mercado lingüístico, perfil de retención y geografía casi siempre es engañoso." }
              ]
            }
          ]
        },
        {
          "title": "Errores de pronóstico que distorsionan las decisiones",
          "blocks": [
            {
              "type": "list",
              "items": [
                "Usar las vistas tempranas como señal definitiva — el rendimiento del día 3 habla del burst de notificaciones y el test algorítmico inicial, no de la distribución por navegación y sugerencias.",
                "Comparar canales sin contexto — nicho, mercado lingüístico y perfil de audiencia crean entornos fundamentalmente diferentes.",
                "Aislar una sola métrica — CTR sin retención, o engagement sin CTR, da una imagen parcial que lleva a conclusiones erróneas.",
                "Planificar desde puntos de datos excepcionales — un video en su pico no es una línea base."
              ]
            }
          ]
        },
        {
          "title": "Mitos comunes sobre el crecimiento de vistas en YouTube",
          "blocks": [
            {
              "type": "list",
              "items": [
                "'Las vistas tempranas fuertes siempre llevan a un resultado final fuerte' es falso — la ventana de prueba algorítmica (días 1–4) es más decisiva que el burst de notificaciones.",
                "'Todos los videos de mi nicho deberían rendir de manera similar' es falso — la densidad de competencia, la demanda por subtema y el tamaño de audiencia varían dentro de un mismo nicho.",
                "'Los Shorts siempre crecen más rápido' es falso, o al menos incompleto — pueden pegar rápido, pero el comportamiento de larga cola es más comprimido.",
                "'La autoridad del canal no importa para la distribución' es falso — el historial de rendimiento constante afecta cómo el algoritmo prueba nuevos videos."
              ]
            }
          ]
        },
        {
          "title": "Usar modelado de escenarios en vez de estimaciones puntuales",
          "blocks": [
            { "type": "text", "value": "La forma más útil de usar este predictor no es encontrar 'el' pronóstico para un video — es ejecutar varios escenarios y entender qué condiciones deberían darse para cada resultado. Ese razonamiento convierte una herramienta de predicción en una de apoyo a decisiones." },
            { "type": "text", "value": "Una vez que modelas datos reales en lugar de estimaciones intuitivas, se vuelven visibles patrones difíciles de ver en las analíticas. Un canal que obtiene sistemáticamente CTR fuerte pero retención débil tiene un problema estratégico diferente al del caso inverso." }
          ]
        },
        {
          "title": "Límites del modelo y uso apropiado",
          "blocks": [
            { "type": "text", "value": "Es una aproximación estructurada construida a partir de patrones conductuales observados. Es más útil para análisis comparativo entre configuraciones de canal y para identificar qué variables de señal limitan el rendimiento. No es fiable para contenido impulsado por tendencias, canales muy nuevos o situaciones donde fuentes de tráfico externas podrían afectar significativamente los resultados." },
            { "type": "text", "value": "Usa los resultados como un rango de planificación con incertidumbre honesta, no como un pronóstico definitivo." }
          ]
        }
      ],
      "faq": [
        { "q": "¿Qué tan preciso es el Predictor de Vistas de YouTube?", "a": "Cuando las métricas ingresadas están cerca de los valores reales, el pronóstico tiende a caer dentro de aproximadamente ±25% de los resultados reales para videos que siguen patrones de distribución típicos. La precisión se degrada para contenido tendencia, videos con tráfico externo significativo, canales muy nuevos o videos con comportamiento algorítmico inesperado." },
        { "q": "¿Qué es la puntuación algorítmica y por qué importa?", "a": "Agrega CTR, tasa de retención o finalización, señales de engagement y autoridad del canal en un compuesto único. Por encima de 1,5, el modelo predice distribución extendida. Por debajo de 0,8, predice decaimiento rápido post-pico. Es un constructo del modelo, no una métrica de YouTube." },
        { "q": "¿Por qué mi nicho cambia tanto el pronóstico?", "a": "Porque cada nicho tiene un tamaño de audiencia potencial distinto que afecta el límite aplicado a la predicción bruta. Finanzas en inglés tiene un pool adressable mucho mayor que el mismo tema en un mercado lingüístico más pequeño." },
        { "q": "¿El idioma o el país realmente importan?", "a": "Sí. La selección del mercado lingüístico aplica un techo de audiencia realista. Un mercado con 40 millones de vistas mensuales en un nicho no puede soportar que un solo video llegue a 10 millones." },
        { "q": "¿Largo o Shorts — cuál predice mejor?", "a": "Los videos largos tienden a predecirse con más estabilidad. Los Shorts son más variables porque su rendimiento es más binario." },
        { "q": "¿Qué ingreso si aún no tengo datos de Analytics?", "a": "Usa valores conservadores: 40–45% de retención y 4–5% de CTR para videos largos, o 75–80% de finalización y menos del 45% de tasa de deslizamiento para Shorts." },
        { "q": "¿Este predictor es gratuito?", "a": "Sí, es gratuito y no requiere cuenta. El modelo corre en tu navegador sin enviar datos a servidores externos." }
      ],
      "disclaimer": "El Predictor de Vistas de YouTube usa datos agregados reportados por creadores y patrones de distribución observados para modelar curvas de vistas realistas a 90 días. El rendimiento real puede variar significativamente por eventos de tendencia, cambios de plataforma, fuentes de tráfico externas o comportamiento de audiencia que no coincide con los patrones históricos. Usa esta herramienta para planificación y educación, no como garantías.",
      "tool": { "type": "predictor", "props": {} }
    },
    "de": {
      "meta": {
        "slug": "youtube-views-predictor",
        "title": "YouTube Views Predictor — 90-Tage-Prognose-Tool",
        "description": "Schätzen Sie, wie Ihr YouTube-Video in den nächsten 90 Tagen abschneiden wird. Geben Sie CTR, Zuschauerbindung, Engagement und Kanaldaten ein, um eine realistische Aufrufe-Kurve zu erhalten."
      },
      "hero": {
        "eyebrow": "Wie YouTube-Performance wirklich funktioniert",
        "title": "YouTube Views Predictor: Die Kurve hinter Ihren Zahlen verstehen",
        "lead": [
          "Nach der Veröffentlichung eines Videos ist das Schwierigste nicht das Warten — sondern nicht zu wissen, ob das Warten etwas bedeutet. Ein Video mit 3K Aufrufen am zweiten Tag könnte bis Tag 30 200K erreichen oder bei 8K enden. Beide Ergebnisse beginnen gleich. Der Unterschied liegt in Signalen, die hauptsächlich in den ersten 48 bis 96 Stunden auftreten, und die meisten Creator haben keinen nützlichen Rahmen, um sie zu lesen.",
          "Was die Vorhersage von Aufrufen wirklich schwierig macht, ist kein Datenmangel — Sie haben CTR, Zuschauerbindung, Engagement, Wiedergabezeit und Kanalhistorie. Es ist, dass diese Signale nichtlinear miteinander interagieren und sich die Beziehung zwischen Tag-3- und Tag-30-Performance je nach Distributionsphase des Videos verändert.",
          "Diese Seite erklärt, wie das Modell funktioniert, was es wirklich misst und — wichtig — wo es versagt. Denn es versagt in bestimmten Situationen, und diese zu kennen verhindert Fehlinterpretationen.",
          "Methodischer Hinweis: Dieser Prädiktor basiert auf beobachteten Aufrufe-Kurven-Archetypen aus Creator-Daten, nicht auf Zugang zu YouTubes internen Systemen. Er modelliert realistische Wahrscheinlichkeitsbereiche, keine garantierten Ergebnisse."
        ]
      },
      "stats": [
        { "value": "90 Tage", "label": "Vollständige Aufrufe-Kurvenprognose" },
        { "value": "50+",     "label": "Modellierte Nischen" },
        { "value": "80+",     "label": "Verglichene Sprachmärkte" },
        { "value": "±25%",   "label": "Typischer Prognosebereich" }
      ],
      "sections": [
        {
          "title": "Was das Modell tatsächlich misst",
          "blocks": [
            { "type": "text", "value": "Der Prädiktor hat keinen Zugang zu YouTubes internen Daten. Er hat ein Modell, das aus beobachteten Mustern aufgebaut ist: wie Videos mit ähnlichen Algorithmus-Signalen über 90 Tage tendieren, segmentiert nach Format, Nische, Sprachmarkt und Kanalautorität." },
            {
              "type": "card-grid",
              "cards": [
                { "title": "Algorithmus-Score — die zentrale Ausgabe", "body": "Der Algorithmus-Score kombiniert CTR, Zuschauerbindungs- oder Abschlussrate, Engagement-Signale und Kanalautorität zu einem einzigen Composite. Über ca. 1,5 entspricht dies typischerweise Videos mit erweiterter Browse- und Suggested-Distribution. Unter 0,8 neigt die Kurve dazu, nach dem ersten Tag schnell zu zerfallen." },
                { "title": "Zielgruppen-Pool und Sprachmarktgrenze", "body": "Jede Nischen-Sprachen-Kombination hat eine Obergrenze. Ein englischsprachiges Finanz-Video kann theoretisch eine viel größere Zielgruppe erreichen als dasselbe Konzept in einem kleineren Sprachmarkt. Das Modell wendet eine realistische Obergrenze basierend auf der geschätzten Marktgröße an." },
                { "title": "Lang-Format vs. Shorts — grundlegend unterschiedliche Kurven", "body": "Lang-Format und Shorts haben nicht nur unterschiedliche RPMs. Sie haben strukturell unterschiedliche Aufrufe-Kurven. Lang-Format baut typischerweise ein Schulterplateau um die Tage 4–14 auf. Shorts können früher und stärker steigen, neigen aber dazu, schneller zu zerfallen." },
                { "title": "CTR und Zuschauerbindung — warum beide zusammen zählen", "body": "Hohe CTR ohne Zuschauerbindung bedeutet, dass Thumbnail und Titel ihre Arbeit tun, das Video aber nicht. Hohe Zuschauerbindung ohne CTR bedeutet, dass das Video befriedigt, aber nicht genug Klicks erhält. Im Modell werden CTR und Zuschauerbindung multipliziert statt addiert." },
                { "title": "Engagement-Gewichtung", "body": "Shares werden im Modell stärker gewichtet als Likes, da sie in der Praxis eine stärkere Beziehung zu erweiterter Distribution haben. Abonnenten-Gewinne werden ähnlich gewichtet." },
                { "title": "Kanalautorität — Kontext für die Signale", "body": "Dieselben CTR- und Zuschauerbindungszahlen bedeuten unterschiedliche Dinge für einen Kanal mit 500K durchschnittlichen Aufrufen pro Video versus einen mit 2K. Das Modell enthält einen Autoritätsmultiplikator, der dies widerspiegelt." }
              ]
            }
          ]
        },
        {
          "title": "Wo das Modell versagt",
          "blocks": [
            { "type": "text", "value": "Ein auf historischen Mustern aufgebautes Modell kann keine Strukturveränderungen antizipieren." },
            { "type": "text", "value": "Trend-getriebene Videos verletzen die Annahmen des Modells. Wenn ein Thema plötzlich kulturell bedeutsam wird, können verwandte Videos Kurven haben, die den beobachteten Archetypen nicht ähneln." },
            { "type": "text", "value": "Sehr neue Kanäle schaffen ebenfalls Schätzprobleme. Die Kanalautoritätskomponente ist gegen Kanäle mit bedeutsamer Geschichte kalibriert." },
            { "type": "text", "value": "Plattformübergreifender Overflow — ein Video wird auf Twitter oder Instagram viral — ist für das Modell unsichtbar." },
            { "type": "text", "value": "Und Saisonalität beeinflusst sowohl Aufrufe als auch Engagement auf Weisen, die je nach Nische und Markt variieren. Das Modell wendet keine Saisonkorrektur an." }
          ]
        },
        {
          "title": "Warum Wachstumsratschläge online Creator irreführen",
          "blocks": [
            { "type": "text", "value": "Die meisten Ratschläge zum YouTube-Wachstum behandeln den Prozess als vorhersehbarer, als er ist." },
            { "type": "text", "value": "Das Screenshot-Problem ist erheblich. Ein virales Video wird überall gepostet. Die 40 durchschnittlichen Videos davor und danach nicht. Das Ergebnis ist, dass die meisten Creator eine Referenzbibliothek außergewöhnlicher Leistungen haben, keine typischen." },
            { "type": "text", "value": "Dasselbe Problem gilt für 'Aufrufe x X€'-Einkommensschätzungen. Die Formel ignoriert Nische, Geografie, Zuschauerbindung, Format und Ad-Market-Timing." }
          ]
        },
        {
          "title": "Wie realistische Ergebnisbereiche aussehen",
          "blocks": [
            { "type": "text", "value": "Diese Szenarien illustrieren, wie dieselben Ausgangsmetriken zu unterschiedlichen 90-Tage-Ergebnissen führen können." },
            {
              "type": "card-grid",
              "cards": [
                { "title": "Gaming-Kanal — 50K Aufrufe an Tag 3, starkes Engagement", "body": "Gaming kann frühe schnelle Spitzen produzieren, hat aber Schwierigkeiten, das Schulterplateau aufzubauen. Mit starken Algorithmus-Signalen ist ein 90-Tage-Gesamt von 200K–280K plausibel." },
                { "title": "Finanz-Kanal — 50K Aufrufe an Tag 3, solide Zuschauerbindung", "body": "Finanz-Videos mit echter Suchnachfrage tendieren dazu, einen längeren Tail aufzubauen. Ein 90-Tage-Bereich von 350K–650K ist mit starken Signalen und einem US-schweren Publikum plausibel." },
                { "title": "Tutorial-Kanal — 50K Aufrufe an Tag 3, hohes Suchpotenzial", "body": "Tutorials zu Themen mit konstanter Nachfrage können einen Distribution-Tail aufbauen, der weit über 90 Tage hinausreicht." },
                { "title": "US-Finanz-Kanal — 100K an Tag 5, 9 Minuten, 52% Zuschauerbindung", "body": "Eine realistische 90-Tage-Projektion könnte zwischen 380K und 720K Aufrufen liegen, wenn CTR und Engagement mit den frühen Signalen konsistent bleiben." },
                { "title": "Gaming-Kanal, gleiche Ausgangsmetriken", "body": "Die höhere Wettbewerbsdichte im Gaming kombiniert mit typischerweise niedrigerer Wiedergabezeit produziert normalerweise einen komprimierteren 90-Tage-Bereich — etwa 190K–350K ist plausibel." },
                { "title": "Der grundlegende Punkt", "body": "Gleiche Ausgangsaufrufe, gleiches Videoalter, sehr unterschiedliche wahrscheinliche Trajektorien. Deshalb ist es fast immer irreführend, Kanäle ohne Berücksichtigung von Nische, Sprachmarkt, Zuschauerbindungsprofil und Publikumsgeografie zu vergleichen." }
              ]
            }
          ]
        },
        {
          "title": "Prognosefehler, die Entscheidungen verzerren",
          "blocks": [
            {
              "type": "list",
              "items": [
                "Frühe Aufrufe als endgültiges Signal verwenden — Tag-3-Performance sagt etwas über den Notifications-Burst aus, nicht über Browse- und Suggested-Distribution.",
                "Kanäle ohne Kontext vergleichen — Nische, Sprachmarkt und Publikumsprofil schaffen grundlegend unterschiedliche Umgebungen.",
                "Eine Metrik isolieren — CTR ohne Zuschauerbindung oder Engagement ohne CTR gibt ein unvollständiges Bild.",
                "Von Ausnahmedatenpunkten planen — ein Spitzenvideo ist keine Baseline."
              ]
            }
          ]
        },
        {
          "title": "Verbreitete Mythen über YouTube-Aufrufe-Wachstum",
          "blocks": [
            {
              "type": "list",
              "items": [
                "'Starke frühe Aufrufe führen immer zu einem starken Endergebnis' ist falsch — das Algorithmus-Testfenster (Tage 1–4) ist entscheidender als der Notifications-Burst.",
                "'Alle Videos in meiner Nische sollten ähnlich abschneiden' ist falsch — Wettbewerbsdichte und Nachfrage variieren innerhalb einer breiten Nische.",
                "'Shorts wachsen immer schneller' ist falsch oder zumindest unvollständig — sie können schnell steigen, aber das Long-Tail-Verhalten ist gegenüber Lang-Format komprimiert.",
                "'Kanalautorität spielt für die Distribution keine Rolle' ist falsch — konsistente Performance-Historie beeinflusst, wie konservativ oder großzügig der Algorithmus neue Videos testet."
              ]
            }
          ]
        },
        {
          "title": "Szenario-Modellierung statt Einzelpunkt-Schätzungen verwenden",
          "blocks": [
            { "type": "text", "value": "Die nützlichste Art, diesen Prädiktor zu verwenden, ist nicht, 'die' Prognose für ein Video zu finden — es ist, mehrere Szenarien durchzuspielen und zu verstehen, welche Bedingungen für jedes Ergebnis zutreffen müssten." },
            { "type": "text", "value": "Sobald Sie echte Eingaben statt Bauchgefühl-Schätzungen modellieren, werden Muster sichtbar, die in Analytics allein schwer zu erkennen sind." }
          ]
        },
        {
          "title": "Modellgrenzen und angemessene Verwendung",
          "blocks": [
            { "type": "text", "value": "Dies ist eine strukturierte Annäherung, die aus beobachteten Verhaltensmustern und Zielgruppengröße-Einschränkungen aufgebaut ist. Am nützlichsten für vergleichende Analysen zwischen Kanalkonfigurationen und zur Identifizierung limitierender Signal-Variablen." },
            { "type": "text", "value": "Verwenden Sie die Ausgabe als Planungsbereich mit ehrlicher Unsicherheit, nicht als verbindliche Prognose." }
          ]
        }
      ],
      "faq": [
        { "q": "Wie genau ist der YouTube Views Predictor?", "a": "Wenn die eingegebenen Metriken nahe den realen Werten liegen, tendiert die Prognose dazu, innerhalb von etwa ±25% der tatsächlichen Ergebnisse zu liegen. Die Genauigkeit verschlechtert sich für Trend-Content, Videos mit erheblichem externen Traffic, sehr neue Kanäle oder unerwartetes Algorithmusverhalten." },
        { "q": "Was ist der Algorithmus-Score und warum ist er wichtig?", "a": "Er aggregiert CTR, Zuschauerbindungsrate, Engagement-Signale und Kanalautorität zu einem Composite. Über 1,5 prognostiziert das Modell erweiterte Browse- und Suggested-Distribution. Unter 0,8 schnellen Zerfall. Es ist ein Modell-Konstrukt, keine YouTube-Metrik." },
        { "q": "Warum verändert meine Nische die Prognose so stark?", "a": "Weil jede Nische eine andere Zielgruppengröße hat, die die Obergrenze der Rohvorhersage beeinflusst. Finanzen auf Englisch hat einen viel größeren adressierbaren Pool als dasselbe Thema auf einem kleineren Sprachmarkt." },
        { "q": "Spielt die Sprach- oder Länderwahl wirklich eine Rolle?", "a": "Ja. Die Sprachmarktauswahl wendet eine realistische Zielgruppenobergrenze an. Ein Video in einem Markt mit 40 Millionen monatlichen Aufrufen kann nicht realistisch 10 Millionen Aufrufe auf einem einzelnen Video erreichen." },
        { "q": "Lang-Format oder Shorts — welches Format lässt sich besser vorhersagen?", "a": "Lang-Format-Prognosen sind stabiler. Shorts-Prognosen sind variabler, da ihre Performance binärer ist." },
        { "q": "Was soll ich eingeben, wenn ich noch keine Analytics-Daten habe?", "a": "Verwenden Sie konservative Standardwerte: etwa 40–45% Zuschauerbindung und 4–5% CTR für Lang-Format, oder 75–80% Abschluss mit unter 45% Swipe-Rate für Shorts." },
        { "q": "Ist der Views Predictor kostenlos?", "a": "Ja, er ist kostenlos und erfordert kein Konto. Das Modell läuft lokal in Ihrem Browser." }
      ],
      "disclaimer": "Der YouTube Views Predictor verwendet aggregierte Creator-Daten und beobachtete Distributionsmuster, um realistische 90-Tage-Aufrufe-Kurven zu modellieren. Reale Performance kann sich aufgrund von Trend-Events, Plattformänderungen oder externen Traffic-Quellen erheblich unterscheiden. Verwenden Sie dieses Tool zur Planung und Bildung, nicht als Garantien.",
      "tool": { "type": "predictor", "props": {} }
    },
    "pt": {
      "meta": {
        "slug": "youtube-views-predictor",
        "title": "Previsor de Visualizações do YouTube — Ferramenta de previsão de 90 dias",
        "description": "Estime como seu vídeo do YouTube se sairá nos próximos 90 dias. Insira CTR, retenção, engajamento e dados do canal para obter uma curva de visualizações realista."
      },
      "hero": {
        "eyebrow": "Como o desempenho no YouTube realmente funciona",
        "title": "Previsor de Visualizações do YouTube: entendendo a curva por trás dos seus números",
        "lead": [
          "Após publicar um vídeo, a parte mais difícil não é a espera — é não saber se essa espera significa alguma coisa. Um vídeo com 3K visualizações no segundo dia pode chegar a 200K no dia 30, ou terminar em 8K. Ambos os resultados começam da mesma forma. A diferença está em sinais que ocorrem principalmente nas primeiras 48 a 96 horas, e a maioria dos criadores não tem uma estrutura útil para interpretá-los.",
          "O que torna a previsão de visualizações genuinamente difícil não é a falta de dados — você tem CTR, retenção, engajamento, tempo de exibição e histórico do canal. É que esses sinais interagem entre si de maneiras não lineares, e a relação entre o desempenho do dia 3 e o dia 30 muda dependendo de qual fase de distribuição o vídeo está.",
          "Esta página explica como o modelo funciona, o que ele está realmente medindo e — importante — onde o modelo falha. Porque ele falha em certas situações, e conhecê-las evita interpretar mal os resultados.",
          "Nota metodológica: este previsor é construído com base em arquétipos de curvas de visualizações observados a partir de dados reportados por criadores, não em acesso aos sistemas internos do YouTube. Ele modela faixas de probabilidade realistas, não resultados garantidos."
        ]
      },
      "stats": [
        { "value": "90 dias", "label": "Previsão completa da curva de visualizações" },
        { "value": "50+",     "label": "Nichos modelados" },
        { "value": "80+",     "label": "Mercados linguísticos comparados" },
        { "value": "±25%",   "label": "Faixa típica de previsão" }
      ],
      "sections": [
        {
          "title": "O que o modelo realmente mede",
          "blocks": [
            { "type": "text", "value": "O previsor não tem acesso aos dados internos do YouTube. O que ele tem é um modelo construído a partir de padrões observados: como vídeos com sinais algorítmicos similares tendem a se comportar ao longo de 90 dias, segmentados por formato, nicho, mercado linguístico e autoridade do canal." },
            {
              "type": "card-grid",
              "cards": [
                { "title": "Pontuação algorítmica — a saída central", "body": "A pontuação algorítmica combina CTR, taxa de retenção ou conclusão, sinais de engajamento e autoridade do canal em um único composto. Pontuação acima de 1,5 corresponde tipicamente a vídeos com distribuição estendida por navegação e sugestões. Abaixo de 0,8, a curva tende a decair rapidamente." },
                { "title": "Pool de audiência e limite do mercado linguístico", "body": "Cada combinação nicho-idioma tem um teto. Um vídeo de finanças em inglês pode teoricamente alcançar uma audiência muito maior do que o mesmo conceito em um mercado linguístico menor. O modelo aplica um limite realista com base no tamanho estimado do mercado." },
                { "title": "Formato longo vs. Shorts — curvas genuinamente diferentes", "body": "Vídeos longos e Shorts não têm apenas RPMs diferentes. Têm curvas de visualizações estruturalmente diferentes. Vídeos longos constroem um platô ao redor dos dias 4–14. Shorts podem crescer mais cedo e com mais força, mas tendem a decair mais rapidamente." },
                { "title": "CTR e retenção — por que ambos importam juntos", "body": "CTR alto sem retenção significa que thumbnail e título fazem seu trabalho, mas o vídeo não. Retenção alta sem CTR significa que o vídeo satisfaz quem assiste, mas não há cliques suficientes. No modelo, CTR e retenção são multiplicados, não somados." },
                { "title": "Ponderação do engajamento", "body": "Os compartilhamentos têm mais peso do que as curtidas no modelo por sua relação mais forte com a distribuição estendida. Os ganhos de inscritos são ponderados de forma semelhante." },
                { "title": "Autoridade do canal — contexto para os sinais", "body": "Os mesmos números de CTR e retenção significam coisas diferentes em um canal com 500K de visualizações médias por vídeo versus um com 2K. O modelo inclui um multiplicador de autoridade que reflete isso." }
              ]
            }
          ]
        },
        {
          "title": "Onde o modelo falha",
          "blocks": [
            { "type": "text", "value": "Um modelo construído em padrões históricos não pode antecipar mudanças estruturais." },
            { "type": "text", "value": "Vídeos impulsionados por tendências violam as suposições do modelo. Quando um tópico de repente se torna culturalmente significativo, vídeos relacionados podem ter curvas que não se assemelham aos arquétipos observados." },
            { "type": "text", "value": "Canais muito novos também criam problemas de estimativa. A componente de autoridade do canal é calibrada com canais com histórico significativo." },
            { "type": "text", "value": "O transbordamento entre plataformas — um vídeo viralizar no Twitter ou Instagram — é invisível para o modelo." },
            { "type": "text", "value": "E a sazonalidade afeta tanto as visualizações quanto o engajamento de formas que variam por nicho e mercado. O modelo não aplica correção sazonal." }
          ]
        },
        {
          "title": "Por que os conselhos de crescimento online enganam os criadores",
          "blocks": [
            { "type": "text", "value": "A maioria dos conselhos sobre crescimento no YouTube trata o processo como mais previsível do que é." },
            { "type": "text", "value": "O problema das capturas de tela é significativo. Um vídeo viral é publicado em todos os lugares. Os 40 vídeos medianos que vieram antes e depois não. O resultado é que a maioria dos criadores tem uma biblioteca de referência de desempenhos excepcionais, não típicos." },
            { "type": "text", "value": "O mesmo problema se aplica às estimativas de receita 'visualizações x R$X'. A fórmula ignora nicho, geografia, retenção, formato e timing do mercado publicitário." }
          ]
        },
        {
          "title": "Como são as faixas de resultados realistas",
          "blocks": [
            { "type": "text", "value": "Esses cenários ilustram como as mesmas métricas de partida podem levar a resultados de 90 dias muito diferentes dependendo do nicho e do perfil de audiência." },
            {
              "type": "card-grid",
              "cards": [
                { "title": "Canal de Gaming — 50K visualizações no dia 3, forte engajamento", "body": "O gaming pode produzir picos iniciais rápidos, mas tem mais dificuldade em construir o platô de ombro que estende a distribuição de cauda longa. Com sinais fortes, um total de 90 dias de 200K–280K é plausível." },
                { "title": "Canal de Finanças — 50K visualizações no dia 3, retenção sólida", "body": "Vídeos de finanças com demanda de busca real tendem a construir uma cauda mais longa. Uma faixa de 90 dias de 350K–650K é plausível com sinais fortes e audiência majoritariamente americana." },
                { "title": "Canal de Tutoriais — 50K visualizações no dia 3, alto potencial de busca", "body": "Tutoriais sobre tópicos com demanda constante podem construir uma cauda de distribuição que se estende bem além dos 90 dias." },
                { "title": "Canal de finanças EUA — 100K no dia 5, 9 minutos, 52% de retenção", "body": "Uma projeção realista de 90 dias pode cair entre 380K e 720K visualizações se CTR e engajamento se mantiverem consistentes com os sinais iniciais." },
                { "title": "Canal de Gaming, mesmas métricas iniciais", "body": "A maior densidade de concorrência no gaming combinada com tempo de exibição tipicamente menor produz uma faixa de 90 dias mais comprimida — algo como 190K–350K é plausível." },
                { "title": "O ponto fundamental", "body": "Mesmas visualizações iniciais, mesma idade do vídeo, trajetórias prováveis muito diferentes. Por isso comparar canais sem considerar nicho, mercado linguístico, perfil de retenção e geografia da audiência é quase sempre enganoso." }
              ]
            }
          ]
        },
        {
          "title": "Erros de previsão que distorcem decisões",
          "blocks": [
            {
              "type": "list",
              "items": [
                "Usar visualizações iniciais como sinal definitivo — o desempenho do dia 3 fala sobre o burst de notificações, não sobre a distribuição por navegação e sugestões.",
                "Comparar canais sem contexto — nicho, mercado linguístico e perfil de audiência criam ambientes fundamentalmente diferentes.",
                "Isolar uma única métrica — CTR sem retenção, ou engajamento sem CTR, dá uma imagem parcial que pode levar a conclusões erradas.",
                "Planejar a partir de pontos de dados excepcionais — um vídeo no pico não é uma linha de base."
              ]
            }
          ]
        },
        {
          "title": "Mitos comuns sobre o crescimento de visualizações no YouTube",
          "blocks": [
            {
              "type": "list",
              "items": [
                "'Visualizações iniciais fortes sempre levam a um resultado final forte' é falso — a janela de teste algorítmico (dias 1–4) é mais decisiva do que o burst de notificações.",
                "'Todos os vídeos do meu nicho deveriam ter desempenho similar' é falso — densidade de concorrência e tamanho de audiência variam dentro de um mesmo nicho.",
                "'Shorts sempre crescem mais rápido' é falso, ou pelo menos incompleto — podem crescer rapidamente, mas o comportamento de cauda longa é mais comprimido.",
                "'A autoridade do canal não importa para a distribuição' é falso — o histórico de desempenho consistente afeta como o algoritmo testa novos vídeos."
              ]
            }
          ]
        },
        {
          "title": "Usando modelagem de cenários em vez de estimativas pontuais",
          "blocks": [
            { "type": "text", "value": "A forma mais útil de usar este previsor não é encontrar 'a' previsão para um vídeo — é executar vários cenários e entender quais condições precisariam ser verdadeiras para cada resultado." },
            { "type": "text", "value": "Quando você modela dados reais em vez de estimativas intuitivas, padrões se tornam visíveis que são difíceis de ver apenas nas análises. Um canal que consistentemente obtém CTR forte mas retenção fraca tem um problema estratégico diferente do caso inverso." }
          ]
        },
        {
          "title": "Limites do modelo e uso apropriado",
          "blocks": [
            { "type": "text", "value": "Esta é uma aproximação estruturada construída a partir de padrões comportamentais observados. É mais útil para análise comparativa entre configurações de canal e para identificar quais variáveis de sinal estão limitando o desempenho." },
            { "type": "text", "value": "Use os resultados como uma faixa de planejamento com incerteza honesta, não como uma previsão definitiva." }
          ]
        }
      ],
      "faq": [
        { "q": "Qual é a precisão do Previsor de Visualizações do YouTube?", "a": "Quando as métricas inseridas estão próximas dos valores reais, a previsão tende a cair dentro de aproximadamente ±25% dos resultados reais. A precisão diminui para conteúdo de tendência, vídeos com tráfego externo significativo, canais muito novos ou comportamento algorítmico inesperado." },
        { "q": "O que é a pontuação algorítmica e por que ela importa?", "a": "Ela agrega CTR, taxa de retenção, sinais de engajamento e autoridade do canal em um composto único. Acima de 1,5, o modelo prevê distribuição estendida. Abaixo de 0,8, prevê decaimento rápido. É um construto do modelo, não uma métrica do YouTube." },
        { "q": "Por que meu nicho muda tanto a previsão?", "a": "Porque cada nicho tem um tamanho de pool de audiência diferente que afeta o limite aplicado à previsão bruta. Finanças em inglês tem um pool endereçável muito maior do que o mesmo tema em um mercado linguístico menor." },
        { "q": "A escolha de idioma ou país realmente importa?", "a": "Sim. A seleção do mercado linguístico aplica um teto de audiência realista. Um mercado com 40 milhões de visualizações mensais em um determinado nicho não pode realisticamente suportar 10 milhões de visualizações em um único vídeo." },
        { "q": "Formato longo ou Shorts — qual prevê melhor?", "a": "Previsões de formato longo tendem a ser mais estáveis. Previsões de Shorts são mais variáveis porque o desempenho é mais binário." },
        { "q": "O que devo inserir se ainda não tenho dados do Analytics?", "a": "Use valores padrão conservadores: cerca de 40–45% de retenção e 4–5% de CTR para formato longo, ou 75–80% de conclusão com menos de 45% de taxa de deslize para Shorts." },
        { "q": "Este Previsor de Visualizações é gratuito?", "a": "Sim, é gratuito e não requer uma conta. O modelo roda localmente no seu navegador, sem enviar dados do canal para servidores externos." }
      ],
      "disclaimer": "O Previsor de Visualizações do YouTube usa dados agregados reportados por criadores e padrões de distribuição observados para modelar curvas de visualizações realistas de 90 dias. O desempenho real pode ainda variar significativamente por eventos de tendência, mudanças na plataforma, fontes de tráfego externas ou comportamento de audiência que não corresponde aos padrões históricos. Use esta ferramenta para planejamento e educação, não como garantias.",
      "tool": { "type": "predictor", "props": {} }
    },
    "ja": {
      "meta": {
        "slug": "youtube-views-predictor",
        "title": "YouTube再生回数予測ツール — 90日間予測",
        "description": "YouTubeの動画が今後90日間でどのようなパフォーマンスを示すかを見積もります。CTR、視聴維持率、エンゲージメント、チャンネルデータを入力して、現実的な再生曲線を取得してください。"
      },
      "hero": {
        "eyebrow": "YouTubeのパフォーマンスが実際にどのように機能するか",
        "title": "YouTube再生回数予測：数字の裏にある曲線を理解する",
        "lead": [
          "動画を公開した後、最も難しいのは待つことではなく、その待ちが何を意味するのかわからないことです。2日目に3K再生の動画が30日目には200Kに達することもあれば、8Kで終わることもあります。どちらも同じように始まります。違いは最初の48〜96時間に起こるシグナルにあり、ほとんどのクリエイターはそれを読み解く有用な枠組みを持っていません。",
          "再生回数を予測することが本当に難しいのは、データが不足しているからではありません。CTR、視聴維持率、エンゲージメント、視聴時間、チャンネル履歴があります。これらのシグナルが非線形に相互作用し、3日目のパフォーマンスと30日目の関係が、動画が現在どの配信フェーズにあるかによって変化することが問題です。",
          "このページでは、モデルがどのように機能するか、実際に何を測定しているか、そして——重要なことに——モデルが破綻する場合について説明します。特定の状況では破綻し、それを知ることで出力の誤読を防げます。",
          "方法論的注記：この予測ツールは、YouTubeの内部システムへのアクセスではなく、クリエイターが報告したデータから観察された再生曲線のアーキタイプに基づいています。現実的な確率範囲をモデル化したものであり、保証された結果ではありません。"
        ]
      },
      "stats": [
        { "value": "90日間", "label": "完全な再生曲線予測" },
        { "value": "50+",   "label": "モデル化されたニッチ" },
        { "value": "80+",   "label": "比較された言語市場" },
        { "value": "±25%", "label": "典型的な予測範囲" }
      ],
      "sections": [
        {
          "title": "モデルが実際に測定していること",
          "blocks": [
            { "type": "text", "value": "この予測ツールはYouTubeの内部データにアクセスできません。観察されたパターンから構築されたモデルを使用しています：類似したアルゴリズムシグナルを持つ動画が、フォーマット、ニッチ、言語市場、チャンネル権威によってセグメント化されて90日間でどのように動作するか。" },
            {
              "type": "card-grid",
              "cards": [
                { "title": "アルゴリズムスコア — 中心的な出力", "body": "アルゴリズムスコアは、CTR、視聴維持率または完了率、エンゲージメントシグナル、チャンネル権威を単一の複合値に組み合わせます。スコア1.5以上は通常、ブラウズや関連動画での拡張配信を受ける動画に対応します。0.8以下では、初日後に急速に減衰する傾向があります。" },
                { "title": "オーディエンスプールと言語市場の上限", "body": "ニッチと言語の組み合わせにはそれぞれ上限があります。英語の金融動画は理論上、より小規模な言語市場の同じコンセプトよりもはるかに大きなオーディエンスに到達できます。モデルは市場規模の推定値とニッチのオーディエンスシェアに基づいた現実的な上限を適用します。" },
                { "title": "長尺動画 vs ショート — 根本的に異なる曲線", "body": "長尺動画とショートはRPMが異なるだけでなく、構造的に異なる再生曲線を持ちます。長尺動画はアルゴリズムテスト期間後、4〜14日頃にブラウズや関連動画配信が活発になりプラトーを形成します。ショートは早く急激にスパイクする可能性がありますが、ループシグナルが強くない限り早く減衰します。" },
                { "title": "CTRと視聴維持率 — なぜ両方が重要か", "body": "CTRが高く視聴維持率が低い場合、サムネイルとタイトルは機能しているが動画が機能していないことを意味します。CTRが低く視聴維持率が高い場合、動画は視聴者を満足させているが発見されにくいことを意味します。モデルでは、CTRと視聴維持率は加算ではなく乗算されます。" },
                { "title": "エンゲージメントの重み付け", "body": "シェアはいいねよりも高い重みが付けられています。スケールでシェアされる動画は新しいオーディエンスに届いています。登録者増加も同様に重み付けされます。" },
                { "title": "チャンネル権威 — シグナルのコンテキスト", "body": "同じCTRと視聴維持率の数値でも、動画あたり平均500K回再生のチャンネルと2K回のチャンネルでは意味が異なります。モデルには権威乗数が含まれています：規模で一貫したチャンネルはトラックレコードから分配上の恩恵を受け、新しいチャンネルはより保守的に扱われます。" }
              ]
            }
          ]
        },
        {
          "title": "モデルが破綻する場合",
          "blocks": [
            { "type": "text", "value": "歴史的パターンに基づいたモデルは、構造的変化を予測できません。" },
            { "type": "text", "value": "トレンド駆動の動画はモデルが基づく前提に反します。あるトピックが突然文化的に重要になった場合、関連動画は観察されたアーキタイプに似ない再生曲線を持つことがあります。" },
            { "type": "text", "value": "非常に新しいチャンネルも推定問題を引き起こします。チャンネル権威コンポーネントは、意味のある履歴を持つチャンネルに対して較正されています。" },
            { "type": "text", "value": "クロスプラットフォームの波及効果——TwitterやInstagramでの動画バイラル——はモデルには見えません。" },
            { "type": "text", "value": "季節性はニッチと市場によって異なる方法で再生回数とエンゲージメントの両方に影響します。モデルは季節補正を適用しません。" }
          ]
        },
        {
          "title": "オンラインの成長アドバイスがクリエイターを誤解させる理由",
          "blocks": [
            { "type": "text", "value": "YouTubeの成長に関するほとんどのアドバイスは、プロセスを実際よりも予測可能なものとして扱います。" },
            { "type": "text", "value": "スクリーンショットの問題は重大です。1つのバイラル動画がどこにでも投稿されます。その前後の40本の平均的な動画はそうではありません。その結果、ほとんどのクリエイターは典型的なパフォーマンスではなく、例外的なパフォーマンスの参照ライブラリを持っています。" },
            { "type": "text", "value": "同じ問題が「再生回数×X円」収益見積もりにも当てはまります。この公式はニッチ、地域、視聴維持率、フォーマット、広告市場タイミングを無視しています。" }
          ]
        },
        {
          "title": "現実的な結果範囲の見え方",
          "blocks": [
            { "type": "text", "value": "これらのシナリオは、同じ出発点の指標がニッチとオーディエンスプロファイルによって異なる90日間の結果につながる可能性があることを示しています。" },
            {
              "type": "card-grid",
              "cards": [
                { "title": "ゲーミングチャンネル — 3日目に50K再生、強いエンゲージメント", "body": "ゲーミングは早い初期スパイクを生み出せますが、ロングテール配信を延長するプラトーを構築するのが難しい傾向があります。強いアルゴリズムシグナルで、90日合計200K〜280Kは妥当です。" },
                { "title": "金融チャンネル — 3日目に50K再生、しっかりした視聴維持率", "body": "本物の検索需要を持つ金融動画は、トピックが初期配信窓を超えても関連性があるため、エンターテインメントコンテンツよりも長いテールを構築する傾向があります。強いシグナルとUS重視のオーディエンスで350K〜650Kは妥当です。" },
                { "title": "チュートリアルチャンネル — 3日目に50K再生、高い検索ポテンシャル", "body": "一定需要のあるトピックのチュートリアルは、90日をはるかに超えて延びる配信テールを構築できます。" },
                { "title": "US金融チャンネル — 5日目に100K、9分、52%視聴維持率", "body": "CTRとエンゲージメントが初期シグナルと一致していれば、現実的な90日予測は380K〜720K再生の間に落ち着く可能性があります。" },
                { "title": "ゲーミングチャンネル、同じ出発点の指標", "body": "ゲーミングのより高い競合密度と典型的により低い視聴時間の組み合わせは、通常より圧縮された90日範囲を生み出します——190K〜350Kは同様のシグナル条件下で妥当です。" },
                { "title": "根本的なポイント", "body": "同じ初期再生回数、同じ動画年齢、非常に異なる可能性のある軌跡。これが、ニッチ、言語市場、視聴維持率プロファイル、オーディエンス地域を一致させずにチャンネルを比較することがほぼ常に誤解を招く理由です。" }
              ]
            }
          ]
        },
        {
          "title": "合理的に見えるが判断を歪める予測エラー",
          "blocks": [
            {
              "type": "list",
              "items": [
                "初期再生回数を最終シグナルとして使用する——3日目のパフォーマンスは通知バーストと初期アルゴリズムテストについて教えてくれますが、プラトーとテールフェーズを決定することが多いブラウズや関連動画配信については教えてくれません。",
                "コンテキストなしにチャンネルを比較する——ニッチ、言語市場、オーディエンスプロファイルは根本的に異なる運営環境を作り出します。",
                "1つの指標を単独で見る——視聴維持率なしのCTR、またはCTRなしのエンゲージメントは間違った結論につながる部分的な画像を与えます。",
                "例外的なデータポイントから計画する——1本のピーク動画はベースラインではありません。"
              ]
            }
          ]
        },
        {
          "title": "YouTube再生回数成長に関する一般的な誤解",
          "blocks": [
            {
              "type": "list",
              "items": [
                "「強い初期再生回数は常に強い最終結果につながる」は誤り——アルゴリズムテスト期間（1〜4日目）は初期通知バーストよりも決定的です。",
                "「私のニッチのすべての動画は同様にパフォーマンスするべきだ」は誤り——競合密度、サブトピック需要、オーディエンスサイズはすべて単一の広いニッチ内で異なります。",
                "「ショートは常により速く成長する」は誤り、または少なくとも不完全——ショートは素早くスパイクする可能性がありますが、ロングテールの動作は長尺動画と比べて圧縮されています。",
                "「チャンネル権威は配信に関係ない」は誤り——一貫したパフォーマンス履歴は、アルゴリズムが新しい動画をどれだけ保守的またはおおらかにテストするかに影響します。"
              ]
            }
          ]
        },
        {
          "title": "単一点推定の代わりにシナリオモデリングを使用する",
          "blocks": [
            { "type": "text", "value": "この予測ツールを使用する最も有用な方法は、動画の「唯一の」予測を見つけることではなく、いくつかのシナリオを実行し、各結果のためにどのような条件が必要かを理解することです。" },
            { "type": "text", "value": "直感的な推定の代わりに実際の入力をモデル化すると、分析だけでは見えにくいパターンが見えてきます。" }
          ]
        },
        {
          "title": "モデルの限界と適切な使用法",
          "blocks": [
            { "type": "text", "value": "これは観察された行動パターンとオーディエンスサイズの制約から構築された構造化された近似です。チャンネル設定間の比較分析と、どのシグナル変数がパフォーマンスを制限しているかを特定するのに最も役立ちます。" },
            { "type": "text", "value": "出力を正直な不確実性を持つ計画範囲として使用してください。確約された予測としてではなく。" }
          ]
        }
      ],
      "faq": [
        { "q": "YouTube再生回数予測ツールの精度はどの程度ですか？", "a": "入力指標が実際の値に近い場合、典型的な配信パターンに従う動画については、予測は実際の結果の約±25%以内に収まる傾向があります。トレンド主導のコンテンツ、大量の外部トラフィックを受ける動画、非常に新しいチャンネル、予期しないアルゴリズム動作を経験する動画では精度が低下します。" },
        { "q": "アルゴリズムスコアとは何で、なぜ重要なのですか？", "a": "アルゴリズムスコアは、CTR、視聴維持率または完了率、エンゲージメントシグナル、チャンネル権威を、異なる再生曲線アーキタイプにマッピングする単一の複合値に集約します。1.5以上では拡張ブラウズと関連動画配信を予測します。0.8以下では急速なポストスパイク減衰を予測します。これはモデル構成であり、YouTubeの指標ではありません。" },
        { "q": "なぜニッチによって予測がこんなに変わるのですか？", "a": "各ニッチには異なるオーディエンスプールサイズとオーディエンスシェア推定値があり、生の予測に適用される上限に影響するからです。英語の金融は、より小規模な言語市場の同じトピックよりもはるかに大きな対応可能なプールを持っています。" },
        { "q": "言語や国の選択は実際に重要ですか？", "a": "はい。言語市場の選択は予測に現実的なオーディエンス上限を適用します。特定のニッチで月間4千万再生のある市場の動画は、1本の動画で1千万再生に現実的に到達できません——プールがそれを支えません。" },
        { "q": "長尺動画とショート——どちらのフォーマットがより信頼性高く予測できますか？", "a": "長尺動画の予測は、配信曲線が同じシグナルレベルの動画間でより一貫しているため、より安定する傾向があります。ショートの予測はより変動します——動画がループするかしないかはバイナリです。" },
        { "q": "まだAnalyticsデータがない場合は何を入力すればよいですか？", "a": "保守的なデフォルト値を使用してください：長尺動画の場合は約40〜45%の視聴維持率と4〜5%のCTR、ショートの場合は45%未満のスワイプ率で75〜80%の完了率。実際のデータが利用可能になったらすぐに置き換えてください。" },
        { "q": "この再生回数予測ツールは無料で使えますか？", "a": "はい、無料でアカウントは必要ありません。モデルはブラウザでローカルに実行されるため、外部サーバーにチャンネルデータを送信せずにシナリオをテストできます。" }
      ],
      "disclaimer": "YouTube再生回数予測ツールは、集計されたクリエイターが報告したデータと観察された配信パターンを使用して、現実的な90日間の再生曲線をモデル化します。実際のパフォーマンスは、トレンドイベント、プラットフォームの変更、外部トラフィックソース、競合の変化、または歴史的パターンと一致しないオーディエンスの行動により大幅に異なる場合があります。このツールは計画と教育のために使用してください。保証としてではありません。",
      "tool": { "type": "predictor", "props": {} }
    },
    "ko": {
      "meta": {
        "slug": "youtube-views-predictor",
        "title": "YouTube 조회수 예측기 — 90일 예측 도구",
        "description": "YouTube 동영상이 향후 90일 동안 어떻게 성과를 낼지 예측하세요. CTR, 시청 지속 시간, 참여도, 채널 데이터를 입력하여 현실적인 조회수 곡선을 확인하세요."
      },
      "hero": {
        "eyebrow": "YouTube 성과가 실제로 작동하는 방식",
        "title": "YouTube 조회수 예측기: 숫자 뒤의 곡선 이해하기",
        "lead": [
          "동영상을 게시한 후 가장 어려운 부분은 기다리는 것이 아닙니다 — 그 기다림이 무엇을 의미하는지 모르는 것입니다. 2일째에 3K 조회수의 동영상은 30일까지 200K에 도달할 수도 있고, 8K로 끝날 수도 있습니다. 두 결과 모두 같은 방식으로 시작됩니다. 차이는 주로 첫 48~96시간에 발생하는 신호에 있으며, 대부분의 크리에이터들은 이를 읽는 유용한 프레임워크가 없습니다.",
          "조회수 예측을 진정으로 어렵게 만드는 것은 데이터 부족이 아닙니다 — CTR, 시청 지속 시간, 참여도, 시청 시간, 채널 기록이 있습니다. 이 신호들이 비선형적인 방식으로 상호작용하고, 3일째 성과와 30일째 성과의 관계가 동영상이 현재 어떤 배포 단계에 있는지에 따라 달라지는 것이 문제입니다.",
          "이 페이지는 모델이 어떻게 작동하는지, 실제로 무엇을 측정하는지, 그리고 — 중요하게 — 어디서 모델이 실패하는지 설명합니다.",
          "방법론적 참고사항: 이 예측기는 YouTube의 내부 시스템에 대한 접근이 아닌 크리에이터 보고 데이터에서 관찰된 조회수 곡선 원형을 기반으로 구축되었습니다. 현실적인 확률 범위를 모델링하며, 보장된 결과가 아닙니다."
        ]
      },
      "stats": [
        { "value": "90일", "label": "완전한 조회수 곡선 예측" },
        { "value": "50+",  "label": "모델링된 틈새 시장" },
        { "value": "80+",  "label": "비교된 언어 시장" },
        { "value": "±25%","label": "일반적인 예측 범위" }
      ],
      "sections": [
        {
          "title": "모델이 실제로 측정하는 것",
          "blocks": [
            { "type": "text", "value": "예측기는 YouTube의 내부 데이터에 접근할 수 없습니다. 관찰된 패턴에서 구축된 모델을 사용합니다: 유사한 알고리즘 신호를 가진 동영상들이 형식, 틈새, 언어 시장, 채널 권위에 따라 90일 동안 어떻게 동작하는지." },
            {
              "type": "card-grid",
              "cards": [
                { "title": "알고리즘 점수 — 핵심 출력", "body": "알고리즘 점수는 CTR, 시청 지속률 또는 완료율, 참여도 신호, 채널 권위를 단일 복합값으로 결합합니다. 약 1.5 이상의 점수는 일반적으로 탐색 및 추천을 통한 확장 배포를 받는 동영상에 해당합니다. 0.8 미만에서는 첫날 이후 빠르게 감소하는 경향이 있습니다." },
                { "title": "오디언스 풀과 언어 시장 상한", "body": "틈새-언어의 각 조합에는 상한선이 있습니다. 영어 금융 동영상은 더 작은 언어 시장의 동일한 개념보다 이론상 훨씬 더 많은 오디언스에 도달할 수 있습니다. 콘텐츠가 더 좋아서가 아니라 도달 가능한 풀이 더 크기 때문입니다." },
                { "title": "긴 영상 vs 숏츠 — 구조적으로 다른 곡선", "body": "긴 영상과 숏츠는 RPM만 다른 것이 아닙니다. 구조적으로 다른 조회수 곡선을 가집니다. 긴 영상은 일반적으로 4~14일경 탐색 및 추천 배포가 시작되면서 어깨 정체기를 형성합니다. 숏츠는 더 일찍 더 강하게 급등할 수 있지만 루프 신호가 강하지 않으면 더 빨리 감소하는 경향이 있습니다." },
                { "title": "CTR과 시청 지속 시간 — 왜 둘 다 중요한가", "body": "시청 지속 시간 없이 CTR이 높다는 것은 썸네일과 제목은 역할을 하고 있지만 동영상은 그렇지 않다는 것을 의미합니다. CTR 없이 시청 지속 시간이 높다는 것은 동영상이 시청자를 만족시키지만 충분한 클릭이 없다는 것을 의미합니다. 모델에서 CTR과 시청 지속 시간은 더하기가 아닌 곱하기로 계산됩니다." },
                { "title": "참여도 가중치", "body": "공유는 모델에서 좋아요보다 더 높게 가중됩니다. 대규모로 공유되는 동영상은 정의상 새로운 오디언스에게 도달하고 있습니다. 구독자 증가도 유사하게 가중됩니다." },
                { "title": "채널 권위 — 신호의 맥락", "body": "동일한 CTR과 시청 지속 시간 숫자라도 동영상당 평균 500K 조회수 채널과 2K 조회수 채널에서 다른 의미를 가집니다. 모델에는 이를 반영하는 권위 배수가 포함되어 있습니다." }
              ]
            }
          ]
        },
        {
          "title": "모델이 실패하는 경우",
          "blocks": [
            { "type": "text", "value": "역사적 패턴을 기반으로 구축된 모델은 구조적 변화를 예측할 수 없습니다." },
            { "type": "text", "value": "트렌드 중심 동영상은 모델이 기반한 가정을 위반합니다. 주제가 갑자기 문화적으로 중요해지면 관련 동영상은 관찰된 원형과 전혀 다른 조회수 곡선을 가질 수 있습니다." },
            { "type": "text", "value": "매우 새로운 채널도 추정 문제를 만듭니다. 채널 권위 구성 요소는 의미 있는 기록을 가진 채널에 대해 보정됩니다." },
            { "type": "text", "value": "크로스 플랫폼 파급 효과 — 트위터나 인스타그램에서 바이럴이 되는 동영상 — 는 모델에 보이지 않습니다." },
            { "type": "text", "value": "그리고 계절성은 틈새와 시장에 따라 다양한 방식으로 조회수와 참여도 모두에 영향을 미칩니다. 모델은 계절 보정을 적용하지 않습니다." }
          ]
        },
        {
          "title": "온라인 성장 조언이 크리에이터를 오도하는 이유",
          "blocks": [
            { "type": "text", "value": "YouTube 성장에 관한 대부분의 조언은 프로세스를 실제보다 더 예측 가능한 것으로 취급합니다." },
            { "type": "text", "value": "스크린샷 문제는 심각합니다. 바이럴 동영상 하나가 모든 곳에 게시됩니다. 그 전후에 온 40개의 평균적인 동영상은 그렇지 않습니다. 그 결과 대부분의 크리에이터들은 전형적인 성과가 아닌 예외적인 성과의 참고 라이브러리를 갖게 됩니다." },
            { "type": "text", "value": "같은 문제가 '조회수 × X원' 수익 추정에도 적용됩니다. 이 공식은 틈새, 지역, 시청 지속 시간, 형식, 광고 시장 타이밍을 무시합니다." }
          ]
        },
        {
          "title": "현실적인 결과 범위의 모습",
          "blocks": [
            { "type": "text", "value": "이 시나리오들은 동일한 시작 지점 지표가 틈새와 오디언스 프로필에 따라 얼마나 다른 90일 결과로 이어질 수 있는지를 보여줍니다." },
            {
              "type": "card-grid",
              "cards": [
                { "title": "게이밍 채널 — 3일째 50K 조회수, 강한 참여도", "body": "게이밍은 빠른 초기 급등을 만들어낼 수 있지만 롱테일 배포를 연장하는 어깨 정체기를 형성하기 더 어렵습니다. 강한 알고리즘 신호로 90일 합계 200K~280K는 타당합니다." },
                { "title": "금융 채널 — 3일째 50K 조회수, 견고한 시청 지속 시간", "body": "실제 검색 수요를 가진 금융 동영상은 주제가 초기 배포 기간을 넘어서도 관련성이 있기 때문에 엔터테인먼트 콘텐츠보다 더 긴 테일을 형성하는 경향이 있습니다. 강한 신호와 미국 중심 오디언스로 350K~650K는 타당합니다." },
                { "title": "튜토리얼 채널 — 3일째 50K 조회수, 높은 검색 잠재력", "body": "지속적인 수요가 있는 주제의 튜토리얼은 90일을 훨씬 넘어 확장되는 배포 테일을 구축할 수 있습니다." },
                { "title": "미국 금융 채널 — 5일째 100K, 9분, 52% 시청 지속 시간", "body": "CTR과 참여도가 초기 신호와 일관성을 유지한다면 현실적인 90일 예측은 380K~720K 조회수 사이에 있을 수 있습니다." },
                { "title": "게이밍 채널, 동일한 시작 지표", "body": "게이밍의 더 높은 경쟁 밀도와 일반적으로 낮은 시청 시간의 조합은 보통 더 압축된 90일 범위를 만들어냅니다 — 유사한 신호 조건에서 190K~350K 정도가 타당합니다." },
                { "title": "근본적인 요점", "body": "동일한 시작 조회수, 동일한 동영상 연령, 매우 다른 가능한 궤적. 이것이 틈새, 언어 시장, 시청 지속 시간 프로필, 오디언스 지역을 일치시키지 않고 채널을 비교하는 것이 거의 항상 오해를 불러일으키는 이유입니다." }
              ]
            }
          ]
        },
        {
          "title": "합리적으로 보이지만 결정을 왜곡하는 예측 오류",
          "blocks": [
            {
              "type": "list",
              "items": [
                "초기 조회수를 최종 신호로 사용하기 — 3일째 성과는 알림 버스트와 초기 알고리즘 테스트에 대해 알려줍니다. 어깨 단계와 테일 단계를 종종 결정하는 탐색 및 추천 배포에 대해서는 알려주지 않습니다.",
                "맥락 없이 채널 비교하기 — 틈새, 언어 시장, 오디언스 프로필은 근본적으로 다른 운영 환경을 만들어냅니다.",
                "하나의 지표만 단독으로 보기 — 시청 지속 시간 없는 CTR, 또는 CTR 없는 참여도는 잘못된 결론으로 이어질 수 있는 부분적인 그림을 제공합니다.",
                "예외적인 데이터 포인트에서 계획하기 — 최고 동영상 하나는 기준선이 아닙니다."
              ]
            }
          ]
        },
        {
          "title": "YouTube 조회수 성장에 관한 일반적인 오해",
          "blocks": [
            {
              "type": "list",
              "items": [
                "'강한 초기 조회수는 항상 강한 최종 결과로 이어진다'는 거짓 — 알고리즘 테스트 기간(1~4일)이 초기 알림 버스트보다 결정적입니다.",
                "'내 틈새의 모든 동영상은 비슷하게 성과를 내야 한다'는 거짓 — 경쟁 밀도, 하위 주제 수요, 오디언스 크기는 모두 단일 넓은 틈새 내에서 다릅니다.",
                "'숏츠는 항상 더 빠르게 성장한다'는 거짓 또는 적어도 불완전 — 빠르게 급등할 수 있지만 롱테일 동작은 긴 형식에 비해 압축되어 있습니다.",
                "'채널 권위는 배포에 중요하지 않다'는 거짓 — 일관된 성과 기록은 알고리즘이 새 동영상을 얼마나 보수적으로 또는 관대하게 테스트하는지에 영향을 미칩니다."
              ]
            }
          ]
        },
        {
          "title": "단일 지점 추정 대신 시나리오 모델링 사용하기",
          "blocks": [
            { "type": "text", "value": "이 예측기를 사용하는 가장 유용한 방법은 동영상의 '단일' 예측을 찾는 것이 아닙니다 — 여러 시나리오를 실행하고 각 결과를 위해 어떤 조건이 충족되어야 하는지 이해하는 것입니다." },
            { "type": "text", "value": "직관적 추정 대신 실제 입력을 모델링하면, 분석만으로는 보기 어려운 패턴이 보이기 시작합니다." }
          ]
        },
        {
          "title": "모델 한계와 적절한 사용",
          "blocks": [
            { "type": "text", "value": "이것은 관찰된 행동 패턴과 오디언스 크기 제약에서 구축된 구조화된 근사치입니다. 채널 설정 간 비교 분석과 어떤 신호 변수가 성과를 제한하는지 파악하는 데 가장 유용합니다." },
            { "type": "text", "value": "출력을 정직한 불확실성을 가진 계획 범위로 사용하세요. 확정된 예측으로 취급하지 마세요." }
          ]
        }
      ],
      "faq": [
        { "q": "YouTube 조회수 예측기의 정확도는 어느 정도입니까?", "a": "입력 지표가 실제 값에 가까울 때, 일반적인 배포 패턴을 따르는 동영상의 경우 예측은 실제 결과의 약 ±25% 이내에 들어오는 경향이 있습니다. 트렌드 중심 콘텐츠, 상당한 외부 트래픽을 받는 동영상, 매우 새로운 채널, 예상치 못한 알고리즘 동작을 경험하는 동영상에서는 정확도가 크게 떨어집니다." },
        { "q": "알고리즘 점수란 무엇이며 왜 중요합니까?", "a": "CTR, 시청 지속률 또는 완료율, 참여도 신호, 채널 권위를 다양한 조회수 곡선 원형에 매핑되는 단일 복합값으로 집계합니다. 약 1.5 이상에서 모델은 확장 탐색 및 추천 배포를 예측합니다. 0.8 미만에서는 빠른 포스트 급등 감소를 예측합니다. 이것은 모델 구성이며 YouTube 지표가 아닙니다." },
        { "q": "왜 내 틈새가 예측을 그렇게 많이 변화시킵니까?", "a": "각 틈새에는 원시 예측에 적용되는 상한에 영향을 미치는 다른 오디언스 풀 크기와 오디언스 공유 추정치가 있기 때문입니다. 영어 금융은 더 작은 언어 시장의 동일한 주제보다 훨씬 더 큰 도달 가능한 풀을 가지고 있습니다." },
        { "q": "언어나 국가 선택이 실제로 중요합니까?", "a": "네. 언어 시장 선택은 예측에 현실적인 오디언스 상한선을 적용합니다. 특정 틈새에서 월 4천만 조회수를 가진 시장의 동영상은 단일 동영상으로 현실적으로 1천만 조회수에 도달할 수 없습니다." },
        { "q": "긴 형식 또는 숏츠 — 어느 형식이 더 신뢰성 있게 예측됩니까?", "a": "긴 형식 예측은 배포 곡선이 동일한 신호 등급의 동영상 전반에서 더 일관되기 때문에 더 안정적인 경향이 있습니다. 숏츠 예측은 더 변동적입니다 — 동영상이 루프를 잡거나 잡지 않거나 하는 이진적입니다." },
        { "q": "아직 Analytics 데이터가 없으면 무엇을 입력해야 합니까?", "a": "보수적인 기본값을 사용하세요: 긴 형식의 경우 약 40~45% 시청 지속 시간과 4~5% CTR, 또는 숏츠의 경우 45% 미만 스와이프율로 75~80% 완료율. 실제 데이터가 가능해지는 즉시 교체하세요." },
        { "q": "이 조회수 예측기는 무료로 사용할 수 있습니까?", "a": "네, 무료이며 계정이 필요하지 않습니다. 모델은 브라우저에서 로컬로 실행되므로 외부 서버에 채널 데이터를 보내지 않고도 시나리오를 테스트할 수 있습니다." }
      ],
      "disclaimer": "YouTube 조회수 예측기는 집계된 크리에이터 보고 데이터와 관찰된 배포 패턴을 사용하여 현실적인 90일 조회수 곡선을 모델링합니다. 실제 성과는 트렌드 이벤트, 플랫폼 변경, 외부 트래픽 소스, 경쟁 변화, 또는 역사적 패턴과 일치하지 않는 오디언스 행동으로 인해 크게 달라질 수 있습니다. 이 도구는 계획과 교육을 위해 사용하세요. 보장으로 취급하지 마세요.",
      "tool": { "type": "predictor", "props": {} }
    }
  };
  
  export default ytViewsPredictor;