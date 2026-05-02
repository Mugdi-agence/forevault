const rpmByNiche = {
    en: {
      meta: {
        slug: "rpm-calculator-by-country",
        title: "YouTube RPM by Country Calculator | Forevault",
        description:
          "Estimate YouTube earnings by country using realistic RPM assumptions, audience geography, niche context, retention, and video format.",
      },
      tool: {
        type: "calculator",
        props: { mode: "country" },
      },
      hero: {
        eyebrow: "Understanding geography and YouTube earnings",
        title: "YouTube earnings by country: why location changes everything",
        lead: [
          "Geography is probably the most underestimated variable in YouTube monetization. Two creators with similar view counts and similar content types can look at their RPM on the same day and see numbers that barely overlap — and a significant part of that gap comes down to where their audiences live.",
          "This happens because YouTube's ad revenue does not come from views directly. It comes from ad auctions. And those auctions play out differently in different markets. Advertisers competing for US, UK, Canadian, or Australian audiences typically bid more aggressively than advertisers targeting lower-purchasing-power markets. The creator does not set that rate. The market does.",
          "What follows is an honest breakdown of why country matters, how large the differences can actually be, and where country-based revenue estimates break down — because they do, and knowing where helps you read the numbers more accurately.",
          "A note on data: the country-based RPM relationships described here reflect observed patterns in creator-reported data and advertiser market behavior. Country rankings shift with economic conditions, advertiser spending cycles, and platform policy changes. The ranges on this page are not static.",
        ],
      },
      stats: [
        { value: "80+", label: "Countries in the model" },
        { value: "50+", label: "Niches with RPM context" },
        { value: "12", label: "Display currencies" },
        { value: "±20%", label: "Typical planning range" },
      ],
      sections: [
        {
          title: "How country actually affects the revenue equation",
          blocks: [
            {
              type: "text",
              value:
                "Geography interacts with several other variables at once. Understanding each piece separately makes the overall pattern clearer.",
            },
            {
              type: "card-grid",
              cards: [
                {
                  title: "RPM is what the geography variable actually moves",
                  body: "RPM — the amount a creator keeps per 1,000 views after YouTube's share — is the metric that geography most directly affects. A strong country mix can push RPM up meaningfully.",
                },
                {
                  title: "Advertiser demand is not evenly distributed",
                  body: "Ad budgets concentrate in markets where advertisers expect returns. Markets with higher consumer purchasing power and stronger e-commerce infrastructure attract more advertiser competition, which drives up CPM and consequently RPM.",
                },
                {
                  title: "The same niche earns differently by region",
                  body: "A finance channel with mostly US viewers and a finance channel with mostly viewers from lower-bid markets will not have the same RPM even if the content quality and view counts are similar.",
                },
                {
                  title: "Retention still matters — geography is not enough alone",
                  body: "A high-value audience from a premium market does not automatically translate to strong revenue if viewers leave early. Retention affects how much ad inventory can actually be delivered.",
                },
                {
                  title: "Video length and mid-rolls still apply",
                  body: "Geography multiplies what is already there. A long-form video over 8 minutes with mid-rolls and a US-heavy audience benefits from both the geography premium and the additional ad inventory.",
                },
                {
                  title: "Shorts and the geographic variable",
                  body: "Geography matters for Shorts too, but the base RPM is low enough that the absolute difference between country tiers is smaller in dollar terms.",
                },
              ],
            },
          ],
        },
        {
          title: "Where country-based estimates break down",
          blocks: [
            {
              type: "text",
              value:
                "The country hierarchy that most income discussions present — US at the top, followed by UK, Canada, Australia, certain Western European markets — is a reasonable starting framework. It is not a fixed ranking, and relying on it too heavily leads to predictable errors.",
            },
            {
              type: "text",
              value:
                "Country-level RPM fluctuates with local economic conditions, advertiser campaign cycles, and seasonal spending patterns. The gap between the US and a mid-tier market can narrow significantly during a slow US Q1 ad market and widen again in Q4.",
            },
            {
              type: "text",
              value:
                "Niche also modulates geography in ways that are not always obvious. Some niches have genuinely global advertiser demand, which compresses the country premium. Others are so US-centric that the gap between US traffic and non-US traffic is extreme.",
            },
            {
              type: "text",
              value:
                "And then there is the mixed-audience problem. Very few channels have a pure geographic distribution. Most have a blend of viewer locations, which means the effective RPM is a weighted average of those country-level rates.",
            },
          ],
        },
        {
          title: "Why country-based comparisons mislead creators",
          blocks: [
            {
              type: "text",
              value:
                "Most income advice online treats geography as a side note — a small modifier on top of a view-based estimate. In practice, country mix can be one of the largest single variables in the entire revenue equation.",
            },
            {
              type: "text",
              value:
                "The problem is compounded by how income data gets shared. CPM screenshots get posted without country context. Average RPM numbers circulate without specifying the geographic mix they were drawn from.",
            },
            {
              type: "text",
              value:
                "This is why two creators in identical niches with identical monthly view counts can have such different revenue experiences — and why comparing channels is often meaningless without knowing the audience geography on both sides.",
            },
          ],
        },
        {
          title: "Country-mix comparison: same traffic, different economics",
          blocks: [
            {
              type: "text",
              value:
                "These scenarios are deliberately not perfectly matched — that is the point. Real channels have different combinations of variables, and the revenue differences reflect that reality.",
            },
            {
              type: "card-grid",
              cards: [
                {
                  title: "US finance channel — 100K views, 9-minute video, strong US-heavy audience",
                  body: "With roughly 52% retention and a predominantly US viewer base, a realistic RPM might fall around $8 to $18. Revenue estimate: approximately $800 to $1,800.",
                },
                {
                  title: "Gaming channel — same 100K views, geographically distributed audience",
                  body: "Lower advertiser demand in gaming combined with a broader geographic spread pushes RPM down to roughly $1.50–$4.00. Revenue: around $150 to $400.",
                },
                {
                  title: "Educational tutorial — UK/Canada-heavy audience, 100K views",
                  body: "A practical RPM range around $4 to $10, producing roughly $400 to $1,000. The range is wide because subtopic and audience mix both matter.",
                },
              ],
            },
          ],
        },
        {
          title: "Where geography analysis usually fails in practice",
          blocks: [
            {
              type: "list",
              items: [
                "Skipping audience-country analysis entirely — then attributing RPM fluctuations to algorithm changes when geography shifts are the more likely cause.",
                "Using global average benchmarks — those averages blend markets with fundamentally different advertiser economics.",
                "Comparing channels by views only — without geography context, view-count comparisons cannot explain income gaps.",
                "Treating geography as a fixed characteristic — audience location can shift gradually over time as content strategy evolves.",
              ],
            },
          ],
        },
        {
          title: "Common myths about earnings by country",
          blocks: [
            {
              type: "list",
              items: [
                '"All countries pay about the same" is false — geography is one of the strongest RPM drivers.',
                '"More views always means more money" is an oversimplification — 100K views in one country configuration can produce several times more revenue than 100K views in another.',
                '"CPM is what creators earn" is false — RPM is much closer to what lands in the creator\'s account.',
                '"Shorts behave like long-form for geography premiums" is false — Shorts have a different absolute impact than long-form.',
              ],
            },
          ],
        },
        {
          title: "How to read these country-based estimates",
          blocks: [
            {
              type: "text",
              value:
                "The estimates here are most useful as comparative tools — helping you understand the relative difference between audience configurations, not as precise forecasts for any specific month.",
            },
            {
              type: "text",
              value:
                "For your own channel specifically, YouTube Studio's geographic breakdown is the only accurate source. These external benchmarks tell you what tends to happen under certain conditions — your analytics tell you what is actually happening with your audience.",
            },
          ],
        },
      ],
      ctas: [
        {
          icon: "🌍",
          label: "RPM by Country",
          description: "See how geography changes revenue",
          href: "/youtube/rpm-calculator-by-country",
        },
        {
          icon: "📊",
          label: "Revenue Calculator",
          description: "Estimate earnings by views and RPM",
          href: "/youtube/revenue-calculator",
        },
        {
          icon: "⚠️",
          label: "Why is my RPM low?",
          description: "Understand the real causes",
          href: "/youtube/how-much-do-youtubers-make",
        },
      ],
      related: [
        { slug: "youtube-rpm-usa", label: "YouTube RPM in the USA" },
        { slug: "youtube-rpm-uk", label: "YouTube RPM in the UK" },
        { slug: "youtube-rpm-canada", label: "YouTube RPM in Canada" },
        { slug: "youtube-rpm-australia", label: "YouTube RPM in Australia" },
        { slug: "youtube-rpm-germany", label: "YouTube RPM in Germany" },
        { slug: "youtube-rpm-france", label: "YouTube RPM in France" },
      ],
      faq: [
        {
          q: "Why do YouTube earnings vary by country?",
          a: "Because advertisers do not pay the same rates everywhere. Ad auctions in markets with higher purchasing power and stronger advertiser competition produce higher CPM, which flows through to higher RPM for creators.",
        },
        {
          q: "Which countries usually pay the most on YouTube?",
          a: "The US, UK, Canada, Australia, and parts of Western Europe often sit near the top. But this is not a fixed ranking — it shifts with economic conditions, advertiser spending cycles, and niche.",
        },
        {
          q: "What is the difference between RPM and CPM?",
          a: "CPM is what advertisers pay before YouTube takes its cut. RPM is what the creator actually keeps per 1,000 views.",
        },
        {
          q: "Does audience geography matter more than views?",
          a: "In some configurations, yes. Two channels with matching view counts but different country distributions can end up with revenue that differs by a factor of three or more.",
        },
        {
          q: "Do Shorts pay the same across countries?",
          a: "Shorts vary with audience geography, but the pooled revenue model means the base RPM is already low. Country premiums exist in Shorts but have a smaller absolute dollar impact than in long-form.",
        },
        {
          q: "Does a US audience always mean high earnings?",
          a: "Not automatically. US traffic creates favorable conditions, but niche, retention, and video length still matter.",
        },
        {
          q: "What retention rate should I enter?",
          a: "If you do not have your own analytics yet, 45% is a reasonable long-form starting point.",
        },
        {
          q: "Is this calculator free?",
          a: "Yes. It is free to use, no account required, and the estimate runs locally in the browser.",
        },
      ],
      disclaimer:
        "Forevault estimates rely on aggregated creator benchmarks and market data. Real AdSense earnings still vary with ad demand, seasonality, geography, ad blockers, policy changes, and individual video performance. This content is for planning and education only, not financial advice. See our Terms of Use and our Privacy Policy.",
      toolHint: "This page explains how country affects earnings and why geography changes the math.",
    },
  
    fr: {
      meta: {
        slug: "rpm-calculator-by-country",
        title: "RPM YouTube par pays | Forevault",
        description:
          "Estimez les revenus YouTube par pays avec des hypothèses réalistes de RPM, géographie de l’audience et contexte de niche.",
      },
      tool: {
        type: "calculator",
        props: { mode: "country" },
      },
      hero: {
        eyebrow: "Comprendre la géographie et les revenus YouTube",
        title: "Revenus YouTube par pays : pourquoi la localisation change tout",
        lead: [
          "La géographie est probablement la variable la plus sous-estimée dans la monétisation YouTube. Deux créateurs avec des vues proches et des contenus similaires peuvent regarder leur RPM le même jour et voir des chiffres qui se recoupent à peine.",
          "Cela s’explique parce que les revenus publicitaires ne viennent pas directement des vues, mais des enchères publicitaires. Or ces enchères se jouent différemment selon les marchés.",
          "Ce qui suit est une explication honnête de pourquoi le pays compte, à quel point les écarts peuvent réellement être grands, et où les estimations par pays deviennent moins fiables.",
          "Note sur les données : les relations RPM/pays décrites ici reflètent des tendances observées à partir de données de créateurs et du comportement du marché publicitaire. Les classements par pays évoluent avec l’économie, les cycles publicitaires et les changements de politique de la plateforme.",
        ],
      },
      stats: [
        { value: "80+", label: "Pays modélisés" },
        { value: "50+", label: "Niches contextualisées" },
        { value: "12", label: "Devises affichées" },
        { value: "±20%", label: "Fourchette de planification" },
      ],
      sections: [
        {
          title: "Comment le pays agit sur l’équation de revenu",
          blocks: [
            {
              type: "text",
              value:
                "La géographie interagit avec plusieurs variables en même temps. Comprendre chaque pièce séparément rend le schéma global beaucoup plus clair.",
            },
            {
              type: "card-grid",
              cards: [
                {
                  title: "Le RPM est la vraie métrique déplacée par la géographie",
                  body: "Le RPM correspond à ce que le créateur conserve par 1 000 vues après la part de YouTube. C’est la métrique la plus directement impactée par la répartition géographique.",
                },
                {
                  title: "La demande publicitaire n’est pas répartie uniformément",
                  body: "Les budgets se concentrent dans les marchés où les annonceurs espèrent un meilleur retour. Les marchés à fort pouvoir d’achat attirent davantage de concurrence et donc un RPM plus élevé.",
                },
                {
                  title: "Une même niche ne paie pas pareil selon la région",
                  body: "Une chaîne finance avec surtout des viewers US et une autre avec une audience plus internationale n’auront pas le même RPM, même si les vues et la qualité sont proches.",
                },
                {
                  title: "La rétention reste essentielle",
                  body: "Une audience premium ne garantit pas un bon revenu si les viewers quittent tôt. La rétention influence directement le volume d’inventaire publicitaire servi.",
                },
                {
                  title: "La durée vidéo et les mid-rolls comptent toujours",
                  body: "Une vidéo longue de plus de 8 minutes avec mid-rolls bénéficie à la fois du bonus géographique et de l’inventaire pub additionnel.",
                },
                {
                  title: "Shorts et variable géographique",
                  body: "La géographie compte aussi pour les Shorts, mais l’impact absolu est plus faible en dollars parce que le RPM de base est déjà bas.",
                },
              ],
            },
          ],
        },
        {
          title: "Où les estimations par pays se dégradent",
          blocks: [
            {
              type: "text",
              value:
                "Le classement pays habituel — US, UK, Canada, Australie, puis certains marchés d’Europe de l’Ouest — est un bon point de départ, mais ce n’est pas un classement fixe.",
            },
            {
              type: "text",
              value:
                "Le RPM national fluctue avec les conditions économiques locales, les cycles de campagnes publicitaires et la saisonnalité. L’écart entre les États-Unis et un marché intermédiaire peut se resserrer en début d’année puis se ré-élargir au quatrième trimestre.",
            },
            {
              type: "text",
              value:
                "La niche module aussi la géographie. Certaines niches ont une demande mondiale qui réduit la prime pays. D’autres sont tellement centrées sur les États-Unis que l’écart devient très fort.",
            },
            {
              type: "text",
              value:
                "Et très peu de chaînes ont une distribution géographique pure. Le plus souvent, le RPM effectif est une moyenne pondérée des pays représentés dans l’audience.",
            },
          ],
        },
        {
          title: "Pourquoi les comparaisons par pays induisent souvent en erreur",
          blocks: [
            {
              type: "text",
              value:
                "La plupart des conseils financiers sur YouTube traitent la géographie comme un simple ajustement. En réalité, le mix pays peut être l’une des plus grosses variables de toute l’équation.",
            },
            {
              type: "text",
              value:
                "Le problème est aggravé par la manière dont les chiffres sont partagés : captures d’écran de CPM sans contexte pays, RPM moyen sans préciser le mix géographique, etc.",
            },
            {
              type: "text",
              value:
                "C’est pourquoi deux créateurs dans la même niche et avec le même volume de vues peuvent avoir des revenus très différents.",
            },
          ],
        },
        {
          title: "Comparaison de mix pays : même trafic, économie différente",
          blocks: [
            {
              type: "text",
              value:
                "Ces scénarios ne sont volontairement pas parfaitement identiques — c’est justement le but. Les vraies chaînes ont des combinaisons de variables différentes.",
            },
            {
              type: "card-grid",
              cards: [
                {
                  title: "Chaîne finance US — 100K vues, vidéo de 9 min, audience US forte",
                  body: "Avec environ 52% de rétention et une base d’audience majoritairement US, un RPM réaliste peut se situer entre 8$ et 18$.",
                },
                {
                  title: "Chaîne gaming — 100K vues, audience dispersée",
                  body: "La concurrence publicitaire plus faible et la dispersion géographique font souvent descendre le RPM vers 1,50$–4,00$.",
                },
                {
                  title: "Tutoriel éducatif — audience UK/Canada dominante",
                  body: "Un RPM pratique autour de 4$ à 10$ est plausible, avec une forte dépendance au sous-sujet et au mix pays.",
                },
              ],
            },
          ],
        },
        {
          title: "Les erreurs de terrain les plus courantes",
          blocks: [
            {
              type: "list",
              items: [
                "Ne pas analyser la géographie de l’audience.",
                "Utiliser des moyennes mondiales qui mélangent des marchés très différents.",
                "Comparer uniquement les vues sans contexte pays.",
                "Considérer la géographie comme figée alors qu’elle évolue avec la stratégie.",
              ],
            },
          ],
        },
        {
          title: "Idées reçues fréquentes",
          blocks: [
            {
              type: "list",
              items: [
                '"Tous les pays paient pareil" est faux.',
                '"Plus de vues = toujours plus d’argent" est beaucoup trop simpliste.',
                '"Le CPM est ce que gagnent les créateurs" est faux.',
                '"Les Shorts suivent les mêmes primes pays que les longues vidéos" est faux.',
              ],
            },
          ],
        },
        {
          title: "Comment lire ces estimations",
          blocks: [
            {
              type: "text",
              value:
                "Ces estimations servent surtout à comparer des configurations d’audience, pas à prévoir un mois précis.",
            },
            {
              type: "text",
              value:
                "Pour votre chaîne, la seule source vraiment fiable reste le détail géographique dans YouTube Studio. Les benchmarks externes donnent une direction, vos analytics donnent la réalité.",
            },
          ],
        },
      ],
      ctas: [
        {
          icon: "🌍",
          label: "RPM par pays",
          description: "Voir comment la géographie change le revenu",
          href: "/youtube/rpm-calculator-by-country",
        },
        {
          icon: "📊",
          label: "Calculateur de revenus",
          description: "Estimer les gains avec les vues et le RPM",
          href: "/youtube/revenue-calculator",
        },
        {
          icon: "⚠️",
          label: "Pourquoi mon RPM est bas ?",
          description: "Comprendre les vraies causes",
          href: "how-much-do-youtubers-make",
        },
      ],
      related: [
        { slug: "youtube-rpm-usa", label: "RPM YouTube aux États-Unis" },
        { slug: "youtube-rpm-uk", label: "RPM YouTube au Royaume-Uni" },
        { slug: "youtube-rpm-canada", label: "RPM YouTube au Canada" },
        { slug: "youtube-rpm-australia", label: "RPM YouTube en Australie" },
        { slug: "youtube-rpm-germany", label: "RPM YouTube en Allemagne" },
        { slug: "youtube-rpm-france", label: "RPM YouTube en France" },
      ],
      faq: [
        {
          q: "Pourquoi les revenus YouTube varient-ils selon le pays ?",
          a: "Parce que les annonceurs ne paient pas les mêmes montants partout. Les enchères sont plus fortes sur les marchés à plus fort pouvoir d’achat.",
        },
        {
          q: "Quels pays paient généralement le plus sur YouTube ?",
          a: "Les États-Unis, le Royaume-Uni, le Canada, l’Australie et certaines parties de l’Europe de l’Ouest sont souvent en haut du classement.",
        },
        {
          q: "Quelle est la différence entre RPM et CPM ?",
          a: "Le CPM est ce que paient les annonceurs avant la part de YouTube. Le RPM est ce que conserve réellement le créateur.",
        },
        {
          q: "La géographie de l’audience compte-t-elle plus que les vues ?",
          a: "Dans certaines configurations, oui. Deux chaînes avec le même volume de vues peuvent avoir des revenus très différents selon le mix pays.",
        },
        {
          q: "Les Shorts paient-ils pareil selon les pays ?",
          a: "La géographie compte aussi pour les Shorts, mais l’impact absolu est plus faible car le RPM de base est déjà bas.",
        },
        {
          q: "Avoir une audience US garantit-il de hauts revenus ?",
          a: "Pas automatiquement. La niche, la rétention et la durée vidéo comptent toujours.",
        },
        {
          q: "Quel taux de rétention dois-je saisir ?",
          a: "Sans données personnelles, 45% est un bon point de départ pour du long format.",
        },
        {
          q: "Le calculateur est-il gratuit ?",
          a: "Oui, il est gratuit, sans compte, et s’exécute localement dans le navigateur.",
        },
      ],
      disclaimer:
        "Les estimations Forevault reposent sur des benchmarks agrégés et des données de marché. Les revenus AdSense réels varient selon la demande publicitaire, la saisonnalité, la géographie, les bloqueurs de pub, les changements de politique et les différences vidéo par vidéo. Ce contenu est destiné à la planification et à l’éducation, pas à un conseil financier. Consultez nos Conditions d’utilisation et notre Politique de confidentialité.",
      toolHint: "Cette page explique comment le pays influence les revenus et pourquoi la géographie change le calcul.",
    },
  
    es: {
      meta: {
        slug: "rpm-calculator-by-country",
        title: "RPM de YouTube por país | Forevault",
        description:
          "Estima ingresos de YouTube por país con RPM realista, geografía de audiencia y contexto de nicho.",
      },
      tool: { type: "calculator", props: { mode: "country" } },
      hero: {
        eyebrow: "Entendiendo geografía e ingresos",
        title: "Ingresos de YouTube por país: por qué la ubicación lo cambia todo",
        lead: [
          "La geografía es probablemente la variable más subestimada en la monetización de YouTube.",
          "Los ingresos no vienen directamente de las vistas, sino de las subastas publicitarias.",
          "Lo que sigue explica por qué el país importa, cuánto pueden cambiar los resultados y dónde fallan las estimaciones por país.",
          "Los rangos aquí reflejan patrones observados en datos de creadores y comportamiento del mercado publicitario.",
        ],
      },
      stats: [
        { value: "80+", label: "Países modelados" },
        { value: "50+", label: "Nichos con contexto RPM" },
        { value: "12", label: "Monedas mostradas" },
        { value: "±20%", label: "Rango de planificación" },
      ],
      sections: [
        {
          title: "Cómo afecta el país a los ingresos",
          blocks: [
            { type: "text", value: "La geografía interactúa con otras variables al mismo tiempo." },
            {
              type: "card-grid",
              cards: [
                { title: "RPM", body: "Es la métrica que mueve directamente la geografía." },
                { title: "Demanda publicitaria", body: "Los mercados con mayor poder adquisitivo atraen más competencia." },
                { title: "Nicho", body: "Una misma categoría puede rendir diferente según la región." },
                { title: "Retención", body: "Más retención = más inventario publicitario servido." },
                { title: "Duración y mid-rolls", body: "Más de 8 minutos permite anuncios en medio del video." },
                { title: "Shorts", body: "La geografía también importa, pero el impacto absoluto es menor." },
              ],
            },
          ],
        },
        {
          title: "Dónde se rompen las estimaciones por país",
          blocks: [
            { type: "text", value: "El ranking de países típico es un buen inicio, pero no es fijo." },
            { type: "text", value: "El RPM nacional fluctúa con economía, campañas y estacionalidad." },
            { type: "text", value: "El nicho también puede reducir o ampliar la prima por país." },
            { type: "text", value: "La mayoría de los canales tienen una mezcla de países, no una distribución pura." },
          ],
        },
        {
          title: "Por qué las comparaciones por país engañan",
          blocks: [
            { type: "text", value: "La geografía suele tratarse como un detalle, pero puede ser una de las variables más grandes." },
            { type: "text", value: "Muchos screenshots no incluyen contexto de país o mezcla geográfica." },
            { type: "text", value: "Por eso dos canales iguales en vistas pueden tener ingresos muy distintos." },
          ],
        },
        {
          title: "Comparación de mezcla por país",
          blocks: [
            { type: "text", value: "Los escenarios no están perfectamente igualados a propósito." },
            {
              type: "card-grid",
              cards: [
                { title: "Canal de finanzas en EE. UU.", body: "RPM aproximado de 8$ a 18$ y 800$ a 1.800$ de ingresos." },
                { title: "Canal gaming distribuido globalmente", body: "RPM de 1,50$ a 4,00$ y 150$ a 400$ de ingresos." },
                { title: "Tutorial educativo con UK/Canadá", body: "RPM de 4$ a 10$ y 400$ a 1.000$ de ingresos." },
              ],
            },
          ],
        },
        {
          title: "Errores comunes",
          blocks: [
            {
              type: "list",
              items: [
                "No analizar la geografía de la audiencia.",
                "Usar promedios globales que mezclan mercados distintos.",
                "Comparar solo vistas sin contexto de país.",
                "Tratar la geografía como algo fijo.",
              ],
            },
          ],
        },
        {
          title: "Mitos frecuentes",
          blocks: [
            {
              type: "list",
              items: [
                '"Todos los países pagan igual" es falso.',
                '"Más vistas siempre = más dinero" es demasiado simple.',
                '"CPM es lo que gana el creador" es falso.',
                '"Shorts tiene las mismas primas por país que el formato largo" es falso.',
              ],
            },
          ],
        },
        {
          title: "Cómo leer estas estimaciones",
          blocks: [
            { type: "text", value: "Sirven para comparar configuraciones de audiencia, no para predecir un mes exacto." },
            { type: "text", value: "Para tu canal, la fuente más fiable sigue siendo el desglose geográfico de YouTube Studio." },
          ],
        },
      ],
      ctas: [
        { icon: "🌍", label: "RPM por país", description: "Ver cómo cambia la geografía", href: "/youtube/rpm-calculator-by-country" },
        { icon: "📊", label: "Calculadora de ingresos", description: "Estimar ingresos con vistas y RPM", href: "/youtube/revenue-calculator" },
        { icon: "⚠️", label: "¿Por qué mi RPM es bajo?", description: "Entender las causas reales", href: "/youtube/why-is-my-youtube-rpm-low" },
      ],
      related: [
        { slug: "youtube-rpm-usa", label: "RPM de YouTube en EE. UU." },
        { slug: "youtube-rpm-uk", label: "RPM de YouTube en Reino Unido" },
        { slug: "youtube-rpm-canada", label: "RPM de YouTube en Canadá" },
        { slug: "youtube-rpm-australia", label: "RPM de YouTube en Australia" },
        { slug: "youtube-rpm-germany", label: "RPM de YouTube en Alemania" },
        { slug: "youtube-rpm-france", label: "RPM de YouTube en Francia" },
      ],
      faq: [
        { q: "¿Por qué los ingresos varían según el país?", a: "Porque los anunciantes no pagan lo mismo en todos los mercados." },
        { q: "¿Qué países pagan más en YouTube?", a: "EE. UU., Reino Unido, Canadá, Australia y parte de Europa occidental suelen estar arriba." },
        { q: "¿Cuál es la diferencia entre RPM y CPM?", a: "CPM es el coste para el anunciante y RPM es lo que conserva el creador." },
        { q: "¿Importa más la geografía que las vistas?", a: "En algunas configuraciones, sí." },
        { q: "¿Shorts paga igual por país?", a: "La geografía importa, pero el efecto absoluto es menor." },
        { q: "¿Un público de EE. UU. garantiza altos ingresos?", a: "No. El nicho, la retención y la duración siguen importando." },
        { q: "¿Qué retención debo poner?", a: "Si no tienes datos, 45% es un buen punto de partida." },
        { q: "¿Es gratis?", a: "Sí, es gratis y no requiere cuenta." },
      ],
      disclaimer:
        "Las estimaciones de Forevault se basan en benchmarks agregados y datos de mercado. Los ingresos reales de AdSense varían con la demanda publicitaria, la estacionalidad, la geografía, los bloqueadores, los cambios de política y la variación por vídeo.",
      toolHint: "Esta página explica cómo el país influye en los ingresos y por qué cambia el cálculo.",
    },
  
    de: {
      meta: {
        slug: "rpm-calculator-by-country",
        title: "YouTube RPM nach Land | Forevault",
        description:
          "Schätze YouTube-Einnahmen nach Land mit realistischen RPM-Annahmen, Zielgruppen-Geografie und Nischenkontext.",
      },
      tool: { type: "calculator", props: { mode: "country" } },
      hero: {
        eyebrow: "Geografie und Einnahmen verstehen",
        title: "YouTube-Einnahmen nach Land: warum der Standort alles verändert",
        lead: [
          "Geografie ist wahrscheinlich die am meisten unterschätzte Variable bei YouTube-Monetarisierung.",
          "Einnahmen entstehen nicht direkt aus Views, sondern aus Anzeigenauktionen.",
          "Diese Seite erklärt, warum Land wichtig ist, wie groß die Unterschiede werden können und wo Länder-Schätzungen ungenau werden.",
          "Die Werte hier basieren auf beobachteten Mustern aus Creator-Daten und Werbemarkt-Verhalten.",
        ],
      },
      stats: [
        { value: "80+", label: "Modellierte Länder" },
        { value: "50+", label: "Nischen mit Kontext" },
        { value: "12", label: "Währungen" },
        { value: "±20%", label: "Planungsspanne" },
      ],
      sections: [
        {
          title: "Wie Land die Einnahmen beeinflusst",
          blocks: [
            { type: "text", value: "Geografie wirkt immer zusammen mit anderen Variablen." },
            {
              type: "card-grid",
              cards: [
                { title: "RPM", body: "Die Geografie verschiebt direkt den RPM." },
                { title: "Werbenachfrage", body: "Märkte mit höherer Kaufkraft ziehen mehr Wettbewerb an." },
                { title: "Nische", body: "Die gleiche Nische kann je Region anders performen." },
                { title: "Retention", body: "Mehr Watchtime bedeutet mehr auslieferbare Werbung." },
                { title: "Videolänge", body: "Über 8 Minuten werden Mid-Rolls möglich." },
                { title: "Shorts", body: "Geografie zählt auch dort, aber mit geringerem absoluten Effekt." },
              ],
            },
          ],
        },
        {
          title: "Wo Länder-Schätzungen brechen",
          blocks: [
            { type: "text", value: "Die übliche Länderreihenfolge ist ein Startpunkt, aber kein fixer Maßstab." },
            { type: "text", value: "Der nationale RPM schwankt mit Konjunktur, Kampagnen und Saison." },
            { type: "text", value: "Einige Nischen haben globale Nachfrage und damit geringere Länderprämien." },
            { type: "text", value: "Die meisten Kanäle haben eine gemischte Länderstruktur." },
          ],
        },
        {
          title: "Warum Länder-Vergleiche Creator oft täuschen",
          blocks: [
            { type: "text", value: "Geografie wird oft wie ein Nebenfaktor behandelt, kann aber einer der größten Treiber sein." },
            { type: "text", value: "Screenshots ohne Länder-Kontext sind als Referenz nur eingeschränkt brauchbar." },
            { type: "text", value: "Zwei Kanäle mit gleichen Views können daher völlig unterschiedliche Einnahmen haben." },
          ],
        },
        {
          title: "Country-Mix-Vergleich",
          blocks: [
            { type: "text", value: "Die Szenarien sind bewusst nicht perfekt gleich, weil reale Kanäle es auch nicht sind." },
            {
              type: "card-grid",
              cards: [
                { title: "US-Finanzkanal", body: "RPM ca. 8$–18$, Einnahmen ca. 800$–1.800$." },
                { title: "Gaming-Kanal mit globaler Streuung", body: "RPM ca. 1,50$–4,00$, Einnahmen ca. 150$–400$." },
                { title: "Educational Tutorial mit UK/Canada", body: "RPM ca. 4$–10$, Einnahmen ca. 400$–1.000$." },
              ],
            },
          ],
        },
        {
          title: "Typische Fehler",
          blocks: [
            {
              type: "list",
              items: [
                "Die Zielgruppen-Geografie nicht analysieren.",
                "Globale Durchschnittswerte verwenden, die völlig unterschiedliche Märkte mischen.",
                "Nur Views vergleichen.",
                "Geografie als unveränderlich behandeln.",
              ],
            },
          ],
        },
        {
          title: "Häufige Mythen",
          blocks: [
            {
              type: "list",
              items: [
                '"Alle Länder zahlen gleich" ist falsch.',
                '"Mehr Views = immer mehr Geld" ist zu simpel.',
                '"CPM ist das, was Creator verdienen" ist falsch.',
                '"Shorts hat die gleichen Länderprämien wie Longform" ist falsch.',
              ],
            },
          ],
        },
        {
          title: "Wie man die Schätzungen liest",
          blocks: [
            { type: "text", value: "Sie helfen beim Vergleichen von Audience-Konfigurationen, nicht bei der Vorhersage eines exakten Monats." },
            { type: "text", value: "Für deinen Kanal ist der geografische Breakdown in YouTube Studio die einzig wirklich verlässliche Quelle." },
          ],
        },
      ],
      ctas: [
        { icon: "🌍", label: "RPM nach Land", description: "Sieh den Einfluss der Geografie", href: "/youtube/rpm-calculator-by-country" },
        { icon: "📊", label: "Einnahmenrechner", description: "Einnahmen mit Views und RPM schätzen", href: "/youtube/revenue-calculator" },
        { icon: "⚠️", label: "Warum ist mein RPM niedrig?", description: "Die echten Ursachen verstehen", href: "/youtube/why-is-my-youtube-rpm-low" },
      ],
      related: [
        { slug: "youtube-rpm-usa", label: "YouTube RPM in den USA" },
        { slug: "youtube-rpm-uk", label: "YouTube RPM in Großbritannien" },
        { slug: "youtube-rpm-canada", label: "YouTube RPM in Kanada" },
        { slug: "youtube-rpm-australia", label: "YouTube RPM in Australien" },
        { slug: "youtube-rpm-germany", label: "YouTube RPM in Deutschland" },
        { slug: "youtube-rpm-france", label: "YouTube RPM in Frankreich" },
      ],
      faq: [
        { q: "Warum variieren YouTube-Einnahmen nach Land?", a: "Weil Werbetreibende nicht überall gleich viel bezahlen." },
        { q: "Welche Länder zahlen meist am meisten?", a: "USA, UK, Kanada, Australien und Teile Westeuropas." },
        { q: "Was ist der Unterschied zwischen RPM und CPM?", a: "CPM ist der Preis für Werbetreibende, RPM das, was Creator behalten." },
        { q: "Ist Geografie wichtiger als Views?", a: "In manchen Konfigurationen ja." },
        { q: "Zahlen Shorts pro Land gleich?", a: "Geografie zählt, aber der absolute Effekt ist kleiner." },
        { q: "Garantiert ein US-Publikum hohe Einnahmen?", a: "Nein, Nische, Retention und Länge zählen weiter." },
        { q: "Welche Retention soll ich eingeben?", a: "Ohne eigene Daten sind 45% ein guter Startwert." },
        { q: "Ist der Rechner kostenlos?", a: "Ja, kostenlos und ohne Account." },
      ],
      disclaimer:
        "Forevault-Schätzungen basieren auf aggregierten Creator-Benchmarks und Marktdaten. Reale AdSense-Einnahmen schwanken mit Werbenachfrage, Saisonalität, Geografie, Adblockern, Policy-Änderungen und Video-zu-Video-Varianz.",
      toolHint: "Diese Seite erklärt, wie das Land die Einnahmen verändert und warum sich die Rechnung verschiebt.",
    },
  
    ja: {
      meta: {
        slug: "rpm-calculator-by-country",
        title: "国別YouTube RPM | Forevault",
        description:
          "地域、ニッチ、維持率、動画形式を踏まえて国別にYouTube収益を推定します。",
      },
      tool: { type: "calculator", props: { mode: "country" } },
      hero: {
        eyebrow: "地域と収益を理解する",
        title: "国別のYouTube収益：なぜ場所がすべてを変えるのか",
        lead: [
          "地理はYouTube収益化で最も過小評価されやすい変数のひとつです。",
          "収益は再生回数そのものではなく、広告オークションから生まれます。",
          "このページでは、なぜ国が重要なのか、どれほど差が出るのか、どこで推定が崩れるのかを説明します。",
          "掲載値はクリエイターの報告データと広告市場の観測に基づく傾向です。",
        ],
      },
      stats: [
        { value: "80+", label: "対象国" },
        { value: "50+", label: "RPM文脈付きニッチ" },
        { value: "12", label: "通貨表示" },
        { value: "±20%", label: "計画レンジ" },
      ],
      sections: [
        {
          title: "国が収益に与える影響",
          blocks: [
            { type: "text", value: "地理は他の変数と同時に作用します。" },
            {
              type: "card-grid",
              cards: [
                { title: "RPM", body: "地理が直接動かすのはRPMです。" },
                { title: "広告需要", body: "購買力の高い市場ほど競争が強くなります。" },
                { title: "ニッチ", body: "同じカテゴリでも地域で収益性が変わります。" },
                { title: "維持率", body: "視聴維持率が高いほど配信可能な広告が増えます。" },
                { title: "8分超", body: "8分を超えるとミッドロールが可能になります。" },
                { title: "Shorts", body: "地域は重要ですが、絶対差は小さめです。" },
              ],
            },
          ],
        },
        {
          title: "国別推定が崩れる場所",
          blocks: [
            { type: "text", value: "国の順位はスタート地点であって固定ではありません。" },
            { type: "text", value: "国別RPMは景気、キャンペーン、季節性で変動します。" },
            { type: "text", value: "グローバル需要の強いニッチは国差が縮みます。" },
            { type: "text", value: "多くのチャンネルは複数国の混合です。" },
          ],
        },
        {
          title: "なぜ国別比較は誤解を生むのか",
          blocks: [
            { type: "text", value: "地理は脇役のように扱われがちですが、最大級の変数です。" },
            { type: "text", value: "国の文脈がないスクリーンショットは参考として不十分です。" },
            { type: "text", value: "同じ再生数でも国の構成が違えば収益は大きく変わります。" },
          ],
        },
        {
          title: "国ミックス比較",
          blocks: [
            { type: "text", value: "現実のチャンネルは条件が揃っていないため、完全比較ではありません。" },
            {
              type: "card-grid",
              cards: [
                { title: "米国の金融チャンネル", body: "RPM約8〜18ドル、収益約800〜1,800ドル。" },
                { title: "世界分散型のゲームチャンネル", body: "RPM約1.50〜4.00ドル、収益約150〜400ドル。" },
                { title: "UK/Canada中心の教育動画", body: "RPM約4〜10ドル、収益約400〜1,000ドル。" },
              ],
            },
          ],
        },
        {
          title: "よくあるミス",
          blocks: [
            {
              type: "list",
              items: [
                "視聴者の国を分析しない。",
                "全世界平均を使う。",
                "再生回数だけで比較する。",
                "地理を固定値として扱う。",
              ],
            },
          ],
        },
        {
          title: "よくある誤解",
          blocks: [
            {
              type: "list",
              items: [
                "「国による差は小さい」は誤りです。",
                "「再生回数が増えれば必ず増収」は単純化しすぎです。",
                "「CPMがクリエイター収益」は誤りです。",
                "「Shortsは長尺と同じ国プレミアム」は誤りです。",
              ],
            },
          ],
        },
        {
          title: "この推定の読み方",
          blocks: [
            { type: "text", value: "目的は、視聴者構成の違いを比較することです。" },
            { type: "text", value: "自分のチャンネルでは、YouTube Studioの地域別データが最も正確です。" },
          ],
        },
      ],
      ctas: [
        { icon: "🌍", label: "国別RPM", description: "地域の影響を見る", href: "/youtube/rpm-calculator-by-country" },
        { icon: "📊", label: "収益計算機", description: "再生数とRPMで推定", href: "/youtube/revenue-calculator" },
        { icon: "⚠️", label: "RPMが低い理由", description: "本当の原因を理解", href: "/youtube/why-is-my-youtube-rpm-low" },
      ],
      related: [
        { slug: "youtube-rpm-usa", label: "米国のYouTube RPM" },
        { slug: "youtube-rpm-uk", label: "英国のYouTube RPM" },
        { slug: "youtube-rpm-canada", label: "カナダのYouTube RPM" },
        { slug: "youtube-rpm-australia", label: "オーストラリアのYouTube RPM" },
        { slug: "youtube-rpm-germany", label: "ドイツのYouTube RPM" },
        { slug: "youtube-rpm-france", label: "フランスのYouTube RPM" },
      ],
      faq: [
        { q: "なぜ国によって収益は変わるの？", a: "広告主の支払い額が市場ごとに違うからです。" },
        { q: "どの国が高い？", a: "米国、英国、カナダ、オーストラリア、西欧が上位に来やすいです。" },
        { q: "RPMとCPMの違いは？", a: "CPMは広告主の支払い、RPMはクリエイターの受け取りです。" },
        { q: "地理は再生回数より重要？", a: "構成によってははい。" },
        { q: "Shortsでも国差は同じ？", a: "地理は重要ですが、絶対差は小さめです。" },
        { q: "米国視聴者なら高収益？", a: "必ずしもそうではありません。" },
        { q: "維持率は何を入れる？", a: "データがなければ45%が目安です。" },
        { q: "無料？", a: "はい、無料でアカウント不要です。" },
      ],
      disclaimer:
        "Forevaultの推定は、クリエイターベンチマークと市場データの集計に基づきます。実際のAdSense収益は、広告需要、季節性、地域、広告ブロック、ポリシー変更、動画ごとの差によって変動します。",
      toolHint: "このページは、国が収益にどう影響するかを説明します。",
    },
  
    ko: {
      meta: {
        slug: "rpm-calculator-by-country",
        title: "국가별 유튜브 RPM | Forevault",
        description:
          "지역, 니치, 유지율, 영상 형식을 반영해 국가별 유튜브 수익을 추정합니다.",
      },
      tool: { type: "calculator", props: { mode: "country" } },
      hero: {
        eyebrow: "지역과 수익 이해하기",
        title: "국가별 유튜브 수익: 왜 위치가 모든 것을 바꾸는가",
        lead: [
          "지리는 유튜브 수익화에서 가장 과소평가되는 변수 중 하나입니다.",
          "수익은 조회수 자체가 아니라 광고 경매에서 나옵니다.",
          "이 페이지는 왜 국가가 중요한지, 차이가 얼마나 큰지, 어디서 추정이 흔들리는지 설명합니다.",
          "여기 수치는 크리에이터 벤치마크와 광고 시장 관찰을 바탕으로 합니다.",
        ],
      },
      stats: [
        { value: "80+", label: "모델링된 국가" },
        { value: "50+", label: "RPM 문맥 니치" },
        { value: "12", label: "표시 통화" },
        { value: "±20%", label: "계획 범위" },
      ],
      sections: [
        {
          title: "국가가 수익에 미치는 영향",
          blocks: [
            { type: "text", value: "지리는 다른 변수들과 동시에 작동합니다." },
            {
              type: "card-grid",
              cards: [
                { title: "RPM", body: "지리가 직접 움직이는 값은 RPM입니다." },
                { title: "광고 수요", body: "구매력이 높은 시장일수록 경쟁이 강합니다." },
                { title: "니치", body: "같은 카테고리도 지역에 따라 수익성이 다릅니다." },
                { title: "유지율", body: "시청 시간이 길수록 광고 노출 기회가 늘어납니다." },
                { title: "8분 기준", body: "8분을 넘으면 미드롤 광고가 가능합니다." },
                { title: "Shorts", body: "지역은 중요하지만 절대 차이는 더 작습니다." },
              ],
            },
          ],
        },
        {
          title: "국가별 추정이 깨지는 지점",
          blocks: [
            { type: "text", value: "국가 순위는 시작점일 뿐 고정값이 아닙니다." },
            { type: "text", value: "국가별 RPM은 경기, 캠페인, 계절성에 따라 변동합니다." },
            { type: "text", value: "글로벌 수요가 강한 니치는 국가 프리미엄이 줄어듭니다." },
            { type: "text", value: "대부분의 채널은 여러 국가가 섞인 구조입니다." },
          ],
        },
        {
          title: "국가 비교가 크리에이터를 오해하게 만드는 이유",
          blocks: [
            { type: "text", value: "지리는 부수적인 요소처럼 보이지만 실제로는 큰 변수입니다." },
            { type: "text", value: "국가 맥락 없는 스크린샷은 기준값으로 부족합니다." },
            { type: "text", value: "같은 조회수라도 국가 구성이 다르면 수익은 크게 달라집니다." },
          ],
        },
        {
          title: "국가 믹스 비교",
          blocks: [
            { type: "text", value: "현실 채널은 조건이 모두 같지 않기 때문에 완전 비교가 아닙니다." },
            {
              type: "card-grid",
              cards: [
                { title: "미국 금융 채널", body: "RPM 약 8~18달러, 수익 약 800~1,800달러." },
                { title: "지역 분산형 게임 채널", body: "RPM 약 1.50~4.00달러, 수익 약 150~400달러." },
                { title: "UK/Canada 중심 교육 영상", body: "RPM 약 4~10달러, 수익 약 400~1,000달러." },
              ],
            },
          ],
        },
        {
          title: "흔한 실수",
          blocks: [
            { type: "list", items: ["시청자 국가 분석을 하지 않기", "전 세계 평균을 쓰기", "조회수만 비교하기", "지리를 고정값으로 보기"] },
          ],
        },
        {
          title: "흔한 오해",
          blocks: [
            { type: "list", items: ["모든 국가는 거의 비슷하게 지급한다", "조회수가 많으면 항상 더 많이 번다", "CPM이 크리에이터 수익이다", "Shorts는 롱폼과 같은 국가 프리미엄을 가진다"] },
          ],
        },
        {
          title: "이 추정을 읽는 법",
          blocks: [
            { type: "text", value: "목표는 시청자 구성을 비교하는 것입니다." },
            { type: "text", value: "자신의 채널에서는 YouTube Studio의 지역별 데이터가 가장 정확합니다." },
          ],
        },
      ],
      ctas: [
        { icon: "🌍", label: "국가별 RPM", description: "지역의 영향을 보기", href: "/youtube/rpm-calculator-by-country" },
        { icon: "📊", label: "수익 계산기", description: "조회수와 RPM으로 추정", href: "/youtube/revenue-calculator" },
        { icon: "⚠️", label: "RPM이 낮은 이유", description: "진짜 원인 이해", href: "/youtube/why-is-my-youtube-rpm-low" },
      ],
      related: [
        { slug: "youtube-rpm-usa", label: "미국 YouTube RPM" },
        { slug: "youtube-rpm-uk", label: "영국 YouTube RPM" },
        { slug: "youtube-rpm-canada", label: "캐나다 YouTube RPM" },
        { slug: "youtube-rpm-australia", label: "호주 YouTube RPM" },
        { slug: "youtube-rpm-germany", label: "독일 YouTube RPM" },
        { slug: "youtube-rpm-france", label: "프랑스 YouTube RPM" },
      ],
      faq: [
        { q: "왜 국가별로 수익이 달라지나요?", a: "광고주가 시장마다 같은 금액을 지불하지 않기 때문입니다." },
        { q: "어느 나라가 가장 높은가요?", a: "미국, 영국, 캐나다, 호주, 서유럽이 상위권에 오기 쉽습니다." },
        { q: "RPM과 CPM의 차이는?", a: "CPM은 광고주 비용, RPM은 크리에이터 실제 수익입니다." },
        { q: "지리가 조회수보다 중요한가요?", a: "구성에 따라 그렇습니다." },
        { q: "Shorts도 국가 차이가 같나요?", a: "지리는 중요하지만 절대 차이는 더 작습니다." },
        { q: "미국 시청자가 많으면 무조건 높은가요?", a: "아니요. 니치와 유지율도 중요합니다." },
        { q: "유지율은 얼마를 넣나요?", a: "데이터가 없으면 45%가 무난합니다." },
        { q: "무료인가요?", a: "네, 무료이고 계정이 필요 없습니다." },
      ],
      disclaimer:
        "Forevault의 추정치는 크리에이터 벤치마크와 시장 데이터 집계에 기반합니다. 실제 AdSense 수익은 광고 수요, 시즌성, 지역, 광고 차단, 정책 변화, 영상별 편차에 따라 달라집니다.",
      toolHint: "이 페이지는 국가가 수익에 미치는 영향과 계산 변화의 이유를 설명합니다.",
    },
  
    pt: {
      meta: {
        slug: "rpm-calculator-by-country",
        title: "RPM do YouTube por país | Forevault",
        description:
          "Estime ganhos no YouTube por país com RPM realista, geografia da audiência e contexto de nicho.",
      },
      tool: { type: "calculator", props: { mode: "country" } },
      hero: {
        eyebrow: "Entendendo geografia e receita",
        title: "Receita do YouTube por país: por que a localização muda tudo",
        lead: [
          "A geografia é provavelmente a variável mais subestimada na monetização do YouTube.",
          "A receita não vem diretamente das views, mas dos leilões de anúncios.",
          "Esta página mostra por que o país importa, quanto a diferença pode crescer e onde as estimativas por país falham.",
          "Os valores refletem padrões observados em dados de criadores e comportamento do mercado de anúncios.",
        ],
      },
      stats: [
        { value: "80+", label: "Países modelados" },
        { value: "50+", label: "Nichos com contexto RPM" },
        { value: "12", label: "Moedas exibidas" },
        { value: "±20%", label: "Faixa de planejamento" },
      ],
      sections: [
        {
          title: "Como o país afeta a receita",
          blocks: [
            { type: "text", value: "A geografia interage com outras variáveis ao mesmo tempo." },
            {
              type: "card-grid",
              cards: [
                { title: "RPM", body: "É a métrica que a geografia realmente movimenta." },
                { title: "Demanda de anúncios", body: "Mercados com maior poder de compra atraem mais competição." },
                { title: "Nicho", body: "A mesma categoria pode performar diferente por região." },
                { title: "Retenção", body: "Mais retenção = mais anúncios entregues." },
                { title: "Duração e mid-rolls", body: "Mais de 8 minutos permite anúncios no meio do vídeo." },
                { title: "Shorts", body: "A geografia importa, mas o impacto absoluto é menor." },
              ],
            },
          ],
        },
        {
          title: "Onde a estimativa por país quebra",
          blocks: [
            { type: "text", value: "A ordem tradicional dos países é um ponto de partida, não uma regra fixa." },
            { type: "text", value: "O RPM nacional oscila com economia, campanhas e sazonalidade." },
            { type: "text", value: "Alguns nichos têm demanda global, reduzindo a diferença entre países." },
            { type: "text", value: "A maioria dos canais tem público misto, não uma distribuição pura por país." },
          ],
        },
        {
          title: "Por que comparações por país confundem criadores",
          blocks: [
            { type: "text", value: "A geografia costuma ser tratada como detalhe, mas pode ser uma das maiores variáveis." },
            { type: "text", value: "Capturas de tela sem contexto geográfico têm utilidade limitada." },
            { type: "text", value: "Dois canais com as mesmas views podem ter receitas muito diferentes." },
          ],
        },
        {
          title: "Comparação de mix de países",
          blocks: [
            { type: "text", value: "Os cenários não são perfeitamente iguais de propósito — canais reais não são." },
            {
              type: "card-grid",
              cards: [
                { title: "Canal de finanças nos EUA", body: "RPM de cerca de US$ 8 a US$ 18 e receita de US$ 800 a US$ 1.800." },
                { title: "Canal de gaming distribuído globalmente", body: "RPM de US$ 1,50 a US$ 4,00 e receita de US$ 150 a US$ 400." },
                { title: "Tutorial educacional com UK/Canadá", body: "RPM de US$ 4 a US$ 10 e receita de US$ 400 a US$ 1.000." },
              ],
            },
          ],
        },
        {
          title: "Erros comuns",
          blocks: [
            { type: "list", items: ["Não analisar a geografia da audiência", "Usar médias globais", "Comparar só views", "Tratar a geografia como fixa"] },
          ],
        },
        {
          title: "Mitos comuns",
          blocks: [
            { type: "list", items: ["Todos os países pagam igual", "Mais views sempre = mais dinheiro", "CPM é o ganho do criador", "Shorts tem a mesma premiação por país do long form"] },
          ],
        },
        {
          title: "Como ler essas estimativas",
          blocks: [
            { type: "text", value: "Elas servem para comparar configurações de público, não para prever um mês exato." },
            { type: "text", value: "Para seu canal, o breakdown geográfico do YouTube Studio é a fonte mais confiável." },
          ],
        },
      ],
      ctas: [
        { icon: "🌍", label: "RPM por país", description: "Veja o impacto da geografia", href: "/youtube/rpm-calculator-by-country" },
        { icon: "📊", label: "Calculadora de receita", description: "Estime ganhos por views e RPM", href: "/youtube/revenue-calculator" },
        { icon: "⚠️", label: "Por que meu RPM está baixo?", description: "Entenda as causas reais", href: "/youtube/why-is-my-youtube-rpm-low" },
      ],
      related: [
        { slug: "youtube-rpm-usa", label: "RPM do YouTube nos EUA" },
        { slug: "youtube-rpm-uk", label: "RPM do YouTube no Reino Unido" },
        { slug: "youtube-rpm-canada", label: "RPM do YouTube no Canadá" },
        { slug: "youtube-rpm-australia", label: "RPM do YouTube na Austrália" },
        { slug: "youtube-rpm-germany", label: "RPM do YouTube na Alemanha" },
        { slug: "youtube-rpm-france", label: "RPM do YouTube na França" },
      ],
      faq: [
        { q: "Por que a receita varia por país?", a: "Porque os anunciantes não pagam o mesmo em todos os mercados." },
        { q: "Quais países pagam mais?", a: "EUA, Reino Unido, Canadá, Austrália e parte da Europa Ocidental costumam liderar." },
        { q: "Qual a diferença entre RPM e CPM?", a: "CPM é o custo para o anunciante; RPM é o que o criador fica." },
        { q: "Geografia importa mais que views?", a: "Em algumas configurações, sim." },
        { q: "Shorts paga igual por país?", a: "A geografia importa, mas o efeito absoluto é menor." },
        { q: "Público dos EUA garante receita alta?", a: "Não necessariamente. Nicho e retenção continuam importando." },
        { q: "Qual retenção devo colocar?", a: "Se não tiver dados, 45% é uma boa base." },
        { q: "É grátis?", a: "Sim, grátis e sem conta." },
      ],
      disclaimer:
        "As estimativas da Forevault se baseiam em benchmarks agregados de criadores e dados de mercado. A receita real do AdSense varia com demanda de anúncios, sazonalidade, geografia, bloqueadores, mudanças de política e variação por vídeo.",
      toolHint: "Esta página explica como o país afeta a receita e por que a conta muda.",
    },
  };
  
  export default rpmByNiche;