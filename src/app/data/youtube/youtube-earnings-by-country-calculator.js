const earningByCountry = {
  en: {
    meta: {
      slug: "youtube-earnings-by-country-calculator",
      title: "YouTube Earnings by Country — RPM & Revenue by Location",
      description: "Discover how audience geography affects your YouTube RPM and revenue. Compare earnings by country with real benchmark data.",
    },
    hero: {
      eyebrow: "Understanding geography and YouTube earnings",
      title: "YouTube earnings by country: why location changes everything",
      lead: [
        "Geography is probably the most underestimated variable in YouTube monetization. Two creators with similar view counts and similar content types can look at their RPM on the same day and see numbers that barely overlap — and a significant part of that gap comes down to where their audiences live.",
        "This happens because YouTube\'s ad revenue does not come from views directly. It comes from ad auctions. And those auctions play out differently in different markets. Advertisers competing for US, UK, Canadian, or Australian audiences typically bid more aggressively than advertisers targeting lower-purchasing-power markets. The creator does not set that rate. The market does.",
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
          { type: "text", value: "Geography interacts with several other variables at once. Understanding each piece separately makes the overall pattern clearer." },
          {
            type: "card-grid",
            cards: [
              { title: "RPM is what the geography variable actually moves", body: "RPM — the amount a creator keeps per 1,000 views after YouTube\'s share — is the metric that geography most directly affects. A strong country mix can push RPM up meaningfully. A weak one can suppress it even when niche and video quality are both solid. This is why tracking RPM by country in YouTube Studio is often more informative than tracking overall RPM alone." },
              { title: "Advertiser demand is not evenly distributed", body: "Ad budgets concentrate in markets where advertisers expect returns. Markets with higher consumer purchasing power and stronger e-commerce infrastructure — the US being the clearest example — attract more advertiser competition, which drives up CPM and consequently RPM. This is not a YouTube-specific quirk; it reflects how digital advertising markets work globally." },
              { title: "The same niche earns differently by region", body: "A finance channel with mostly US viewers and a finance channel with mostly viewers from lower-bid markets will not have the same RPM even if the content quality and view counts are similar. The niche determines which advertisers are competing; the geography determines how hard they compete. Both variables have to be favorable at the same time for RPM to be strong." },
              { title: "Retention still matters — geography is not enough alone", body: "A high-value audience from a premium market does not automatically translate to strong revenue if viewers leave early. Retention affects how much ad inventory can actually be delivered. A viewer from the US who leaves at 15% of a video represents less monetization potential than a viewer from a lower-bid market who watches through 80%. Country helps, but it cannot fully compensate for weak watch behavior." },
              { title: "Video length and mid-rolls still apply", body: "Geography multiplies what is already there. A long-form video over 8 minutes with mid-rolls and a US-heavy audience benefits from both the geography premium and the additional ad inventory. A Shorts video from the same creator in the same market will earn less per view because it is using a different monetization model entirely, regardless of geography." },
              { title: "Shorts and the geographic variable", body: "Geography matters for Shorts too, but the base RPM is low enough that the absolute difference between country tiers is smaller in dollar terms. A premium audience in a Shorts context still beats a low-bid audience, but neither will match long-form revenue. This is worth knowing before drawing conclusions from Shorts revenue data about country performance." },
            ],
          },
        ],
      },
      {
        title: "Where country-based estimates break down",
        blocks: [
          { type: "text", value: "The country hierarchy that most income discussions present — US at the top, followed by UK, Canada, Australia, certain Western European markets — is a reasonable starting framework. It is not a fixed ranking, and relying on it too heavily leads to predictable errors." },
          { type: "text", value: "Country-level RPM fluctuates with local economic conditions, advertiser campaign cycles, and seasonal spending patterns. The gap between the US and a mid-tier market can narrow significantly during a slow US Q1 ad market and widen again in Q4. A creator who draws conclusions from Q4 data about their country mix may be reading a seasonal effect rather than a structural one." },
          { type: "text", value: "Niche also modulates geography in ways that are not always obvious. Some niches have genuinely global advertiser demand — certain software categories, for example — which compresses the country premium. Others are so US-centric that the gap between US traffic and non-US traffic is extreme. Country estimates that do not account for niche context are only partially informative." },
          { type: "text", value: "And then there is the mixed-audience problem. Very few channels have a pure geographic distribution. Most have a blend of viewer locations, which means the effective RPM is a weighted average of those country-level rates — and that weighted average can shift month to month as audience composition changes." },
        ],
      },
      {
        title: "Why country-based comparisons mislead creators",
        blocks: [
          { type: "text", value: "Most income advice online treats geography as a side note — a small modifier on top of a view-based estimate. In practice, country mix can be one of the largest single variables in the entire revenue equation." },
          { type: "text", value: "The problem is compounded by how income data gets shared. CPM screenshots get posted without country context. Average RPM numbers circulate without specifying the geographic mix they were drawn from. A creator with 90% US traffic posting their RPM is not providing a reference point that applies to a creator with 50% international traffic. But those numbers end up in the same discussions and get treated as equivalent benchmarks." },
          { type: "text", value: "This is why two creators in identical niches with identical monthly view counts can have such different revenue experiences — and why comparing channels is often meaningless without knowing the audience geography on both sides." },
        ],
      },
      {
        title: "Country-mix comparison: same traffic, different economics",
        blocks: [
          { type: "text", value: "These scenarios are deliberately not perfectly matched — that is the point. Real channels have different combinations of variables, and the revenue differences reflect that reality." },
          {
            type: "card-grid",
            cards: [
              { title: "US finance channel — 100K views, 9-minute video, strong US-heavy audience", body: "With roughly 52% retention and a predominantly US viewer base, a realistic RPM might fall around $8 to $18. Revenue estimate: approximately $800 to $1,800. Both the geography and niche are working in the creator\'s favor simultaneously — this is what the upper end of the range requires." },
              { title: "Gaming channel — same 100K views, geographically distributed audience", body: "Lower advertiser demand in gaming combined with a broader geographic spread pushes RPM down to roughly $1.50–$4.00. Revenue: around $150 to $400. Identical headline view count. The country mix difference alone accounts for much of the gap, before even factoring in the niche difference." },
              { title: "Educational tutorial — UK/Canada-heavy audience, 100K views", body: "A practical RPM range around $4 to $10, producing roughly $400 to $1,000. The range is wide because within educational there is substantial variation in advertiser demand by subtopic, and because the UK/Canada mix — while strong — does not quite match the top-tier US-heavy configuration. The middle of the range is probably more realistic than either extreme." },
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
              "Using global average benchmarks — those averages blend markets with fundamentally different advertiser economics, making them unreliable for any individual channel configuration.",
              "Comparing channels by views only — without geography context, view-count comparisons cannot explain income gaps. Two channels with identical views in different geographic distributions are measuring different things.",
              "Treating geography as a fixed characteristic — audience location can shift gradually over time as content strategy evolves, and the RPM implications of those shifts take time to show up clearly in data.",
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
              "All countries pay about the same is false — geography is one of the strongest RPM drivers, and the range between top and bottom markets is very wide in absolute terms.",
              "More views always means more money is an oversimplification — 100K views in one country configuration can produce several times more revenue than 100K views in another. The number is not the whole story.",
              "CPM is what creators earn is false — CPM is advertiser-side pricing before YouTube\'s share. RPM is much closer to what lands in the creator\'s account.",
              "Shorts behave like long-form for geography premiums is false — the base RPM for Shorts is low enough that country premiums have a different absolute impact than in long-form.",
            ],
          },
        ],
      },
      {
        title: "How to read these country-based estimates",
        blocks: [
          { type: "text", value: "The estimates here are most useful as comparative tools — helping you understand the relative difference between audience configurations, not as precise forecasts for any specific month. If you are trying to understand why two channels perform differently, or evaluating content strategy decisions that might affect your geographic reach, these ranges provide useful directional context." },
          { type: "text", value: "For your own channel specifically, YouTube Studio\'s geographic breakdown is the only accurate source. These external benchmarks tell you what tends to happen under certain conditions — your analytics tell you what is actually happening with your audience." },
        ],
      },
    ],
    faq: [
      { q: "Why do YouTube earnings vary by country?", a: "Because advertisers do not pay the same rates everywhere. Ad auctions in markets with higher purchasing power and stronger advertiser competition produce higher CPM, which flows through to higher RPM for creators. This reflects how digital advertising markets work globally, not a YouTube-specific policy." },
      { q: "Which countries usually pay the most on YouTube?", a: "The US, UK, Canada, Australia, and parts of Western Europe often sit near the top. But this is not a fixed ranking — it shifts with economic conditions, advertiser spending cycles, and niche. Some niches have genuinely global demand that compresses country premiums; others are highly US-centric. The country hierarchy is a useful starting point, not a rule." },
      { q: "What is the difference between RPM and CPM?", a: "CPM is what advertisers pay before YouTube takes its cut. RPM is what the creator actually keeps per 1,000 views. For country-based analysis, RPM is the more relevant metric because it reflects what the creator actually receives after the entire revenue chain plays out." },
      { q: "Does audience geography matter more than views?", a: "In some configurations, yes. Two channels with matching view counts but different country distributions can end up with revenue that differs by a factor of three or more. Geography does not override everything, but it interacts with niche and retention in ways that can make it the dominant variable in a given comparison." },
      { q: "Do Shorts pay the same across countries?", a: "Shorts vary with audience geography, but the pooled revenue model means the base RPM is already low. Country premiums exist in Shorts but have a smaller absolute dollar impact than in long-form. Drawing conclusions about country performance from Shorts data can be misleading if you later apply those conclusions to long-form content." },
      { q: "Does a US audience always mean high earnings?", a: "Not automatically. US traffic creates favorable conditions, but niche, retention, and video length still matter. A US-heavy audience watching a 5-minute video with weak retention in a low-advertiser-demand niche will not produce the same RPM as the same audience watching an 11-minute finance tutorial with strong watch behavior. Geography helps; it does not guarantee." },
      { q: "What retention rate should I enter?", a: "If you do not have your own analytics yet, 45% is a reasonable long-form starting point. Your actual retention — shaped by your specific topic, format, and audience — is the only number that accurately reflects your channel\'s monetization context." },
      { q: "Is this calculator free?", a: "Yes. It is free to use, no account required, and the estimate runs locally in the browser." },
    ],
    disclaimer: "Forevault estimates rely on aggregated creator benchmarks and market data. Real AdSense earnings still vary with ad demand, seasonality, geography, ad blockers, policy changes, and individual video performance. This content is for planning and education only, not financial advice.",
    tool: { type: "calculator", props: {} },
  },

  fr: {
    meta: {
      slug: "youtube-earnings-by-country-calculator",
      title: "Revenus YouTube par pays — RPM et revenus selon la localisation",
      description: "Découvrez comment la géographie de votre audience affecte votre RPM et vos revenus YouTube. Comparez les gains par pays avec des données réelles.",
    },
    hero: {
      eyebrow: "Comprendre la géographie et les revenus YouTube",
      title: "Revenus YouTube par pays : pourquoi la localisation change tout",
      lead: [
        "La géographie est probablement la variable la plus sous-estimée de la monétisation YouTube. Deux créateurs avec un nombre de vues et un type de contenu similaires peuvent regarder leur RPM le même jour et voir des chiffres qui ne se chevauchent presque pas — et une grande partie de cet écart s\'explique par le lieu de résidence de leur audience.",
        "Cela se produit parce que les revenus publicitaires de YouTube ne proviennent pas directement des vues. Ils proviennent des enchères publicitaires. Et ces enchères se déroulent différemment selon les marchés.",
        "Ce qui suit est une analyse honnête de l\'importance du pays, de l\'ampleur réelle des différences et des limites des estimations de revenus basées sur les pays.",
        "Note sur les données : les relations de RPM basées sur les pays décrites ici reflètent les tendances observées. Les classements par pays évoluent en fonction des conditions économiques et des changements de politique de la plateforme.",
      ],
    },
    stats: [
      { value: "80+", label: "Pays dans le modèle" },
      { value: "50+", label: "Niches avec contexte RPM" },
      { value: "12", label: "Devises d\'affichage" },
      { value: "±20%", label: "Marge de planification typique" },
    ],
    sections: [
      {
        title: "Comment le pays affecte réellement l\'équation des revenus",
        blocks: [
          { type: "text", value: "La géographie interagit avec plusieurs autres variables simultanément. Comprendre chaque élément séparément rend le schéma global plus clair." },
          {
            type: "card-grid",
            cards: [
              { title: "Le RPM est ce que la variable géographique fait réellement bouger", body: "Le RPM est l\'indicateur le plus directement affecté par la géographie. Une bonne répartition par pays peut faire grimper le RPM de manière significative. C\'est pourquoi le suivi du RPM par pays dans YouTube Studio est souvent plus instructif que le suivi du RPM global seul." },
              { title: "La demande publicitaire n\'est pas répartie uniformément", body: "Les budgets publicitaires se concentrent sur les marchés où les annonceurs attendent des retours. Les États-Unis attirent plus de concurrence publicitaire, ce qui fait grimper le CPM et par conséquent le RPM." },
              { title: "La même niche génère des revenus différents selon la région", body: "Une chaîne financière avec principalement des spectateurs américains et une autre avec des spectateurs issus de marchés à enchères plus faibles n\'auront pas le même RPM. La niche détermine quels annonceurs sont en concurrence ; la géographie détermine l\'intensité de cette concurrence." },
              { title: "La rétention reste importante — la géographie seule ne suffit pas", body: "Une audience de grande valeur issue d\'un marché premium ne se traduit pas automatiquement par de forts revenus si les spectateurs partent tôt. La rétention affecte la quantité d\'inventaire publicitaire diffusée." },
              { title: "La durée de la vidéo et les publicités mid-roll s\'appliquent toujours", body: "La géographie multiplie ce qui est déjà là. Une vidéo longue de plus de 8 minutes avec des publicités mid-roll et une audience américaine bénéficie à la fois de la prime géographique et de l\'inventaire publicitaire supplémentaire." },
              { title: "Les Shorts et la variable géographique", body: "La géographie compte aussi pour les Shorts, mais le RPM de base est suffisamment bas pour que la différence absolue entre les niveaux de pays soit plus petite en termes monétaires." },
            ],
          },
        ],
      },
      {
        title: "Où les estimations par pays atteignent leurs limites",
        blocks: [
          { type: "text", value: "La hiérarchie des pays — les États-Unis en tête, suivis du Royaume-Uni, du Canada, de l\'Australie — est un cadre de départ raisonnable. Ce n\'est pas un classement fixe." },
          { type: "text", value: "Le RPM au niveau d\'un pays fluctue avec les conditions économiques locales, les cycles de campagnes publicitaires et les modèles de dépenses saisonnières." },
          { type: "text", value: "La niche module également la géographie. Certaines niches ont une demande publicitaire mondiale qui compresse la prime nationale. D\'autres sont très centrées sur les États-Unis." },
          { type: "text", value: "Très peu de chaînes ont une distribution géographique pure. Le RPM effectif est une moyenne pondérée des taux par pays." },
        ],
      },
      {
        title: "Pourquoi les comparaisons par pays induisent les créateurs en erreur",
        blocks: [
          { type: "text", value: "La plupart des conseils sur les revenus en ligne traitent la géographie comme une note annexe. En pratique, la répartition par pays peut être l\'une des variables les plus importantes de toute l\'équation des revenus." },
          { type: "text", value: "Le problème est aggravé par la façon dont les données de revenus sont partagées. Des captures d\'écran de CPM sont publiées sans contexte géographique." },
          { type: "text", value: "C\'est pourquoi deux créateurs dans des niches identiques avec des nombres de vues identiques peuvent avoir des expériences de revenus si différentes." },
        ],
      },
      {
        title: "Comparaison de la répartition par pays : même trafic, économie différente",
        blocks: [
          { type: "text", value: "Ces scénarios ne sont délibérément pas parfaitement assortis. Les chaînes réelles ont différentes combinaisons de variables." },
          {
            type: "card-grid",
            cards: [
              { title: "Chaîne financière américaine — 100K vues, 9 min, audience fortement américaine", body: "Avec environ 52% de rétention et une base de spectateurs principalement américaine, un RPM réaliste se situe entre 8 $ et 18 $. Estimation des revenus : environ 800 $ à 1 800 $." },
              { title: "Chaîne gaming — 100K vues, audience répartie géographiquement", body: "Une demande publicitaire plus faible et un mix géographique large font baisser le RPM à environ 1,50 $ à 4,00 $. Revenus : 150 $ à 400 $." },
              { title: "Tutoriel éducatif — audience UK/Canada, 100K vues", body: "Fourchette RPM : 4 $ à 10 $, soit environ 400 $ à 1 000 $. La fourchette est large car la demande varie selon le sous-thème." },
            ],
          },
        ],
      },
      {
        title: "Où l\'analyse géographique échoue généralement",
        blocks: [
          {
            type: "list",
            items: [
              "Ignorer totalement l\'analyse de l\'audience par pays — puis attribuer les fluctuations du RPM aux changements d\'algorithme.",
              "Utiliser des références moyennes mondiales — ces moyennes mélangent des marchés avec des économies publicitaires fondamentalement différentes.",
              "Comparer les chaînes uniquement par les vues — sans contexte géographique, les comparaisons ne peuvent expliquer les écarts de revenus.",
              "Traiter la géographie comme une caractéristique fixe — l\'emplacement de l\'audience peut changer progressivement au fil du temps.",
            ],
          },
        ],
      },
      {
        title: "Mythes courants sur les revenus par pays",
        blocks: [
          {
            type: "list",
            items: [
              "Tous les pays paient à peu près la même chose — faux. La géographie est l\'un des moteurs de RPM les plus forts.",
              "Plus de vues signifie toujours plus d\'argent — 100K vues dans une configuration de pays peuvent produire plusieurs fois plus qu\'une autre.",
              "Le CPM est ce que les créateurs gagnent — faux. Le RPM est beaucoup plus proche de ce qui atterrit sur le compte.",
              "Les Shorts se comportent comme les formats longs pour les primes géographiques — faux.",
            ],
          },
        ],
      },
      {
        title: "Comment lire ces estimations par pays",
        blocks: [
          { type: "text", value: "Les estimations ici sont particulièrement utiles comme outils de comparaison pour comprendre la différence relative entre les configurations d\'audience." },
          { type: "text", value: "Pour votre propre chaîne, la répartition géographique de YouTube Studio est la seule source précise." },
        ],
      },
    ],
    faq: [
      { q: "Pourquoi les revenus YouTube varient-ils selon les pays ?", a: "Parce que les annonceurs ne paient pas les mêmes tarifs partout. Les enchères publicitaires sur les marchés ayant un pouvoir d\'achat plus élevé produisent un CPM plus élevé, ce qui se traduit par un RPM plus élevé pour les créateurs." },
      { q: "Quels pays paient généralement le plus sur YouTube ?", a: "Les États-Unis, le Royaume-Uni, le Canada, l\'Australie et certaines parties de l\'Europe occidentale. Mais ce classement n\'est pas fixe." },
      { q: "Quelle est la différence entre RPM et CPM ?", a: "Le CPM est ce que les annonceurs paient avant que YouTube ne prenne sa part. Le RPM est ce que le créateur conserve réellement pour 1 000 vues." },
      { q: "La géographie de l\'audience compte-elle plus que les vues ?", a: "Dans certaines configurations, oui. Deux chaînes avec les mêmes vues mais des distributions par pays différentes peuvent avoir des revenus qui diffèrent d\'un facteur de trois ou plus." },
      { q: "Les Shorts paient-ils la même chose d\'un pays à l\'autre ?", a: "Les Shorts varient selon la géographie, mais le modèle de revenus mutualisés signifie que le RPM de base est déjà faible." },
      { q: "Une audience américaine signifie-t-elle toujours des revenus élevés ?", a: "Pas automatiquement. La niche, la rétention et la durée de la vidéo comptent toujours." },
      { q: "Quel taux de rétention dois-je saisir ?", a: "Si vous n\'avez pas encore vos propres analyses, 45 % est un point de départ raisonnable pour les formats longs." },
      { q: "Ce calculateur est-il gratuit ?", a: "Oui. Son utilisation est gratuite, aucun compte n\'est requis." },
    ],
    disclaimer: "Les estimations de Forevault s\'appuient sur des références de créateurs agrégées et des données de marché. Les revenus réels AdSense varient toujours. Ce contenu est destiné à la planification et à l\'éducation uniquement, et non à des conseils financiers.",
    tool: { type: "calculator", props: {} },
  },

  es: {
    meta: {
      slug: "youtube-earnings-by-country-calculator",
      title: "Ganancias de YouTube por país — RPM e ingresos según ubicación",
      description: "Descubre cómo la geografía de tu audiencia afecta tu RPM e ingresos en YouTube. Compara ganancias por país con datos reales.",
    },
    hero: {
      eyebrow: "Entendiendo la geografía y los ingresos de YouTube",
      title: "Ingresos de YouTube por país: por qué la ubicación lo cambia todo",
      lead: [
        "La geografía es probablemente la variable más subestimada en la monetización de YouTube. Dos creadores con recuentos de visitas y tipos de contenido similares pueden mirar su RPM el mismo día y ver números que apenas coinciden.",
        "Esto sucede porque los ingresos por publicidad de YouTube no provienen directamente de las vistas. Provienen de subastas de anuncios que se desarrollan de manera diferente en distintos mercados.",
        "Lo que sigue es un desglose honesto de por qué importa el país, qué tan grandes pueden ser realmente las diferencias y dónde fallan las estimaciones de ingresos basadas en países.",
        "Una nota sobre los datos: las relaciones de RPM basadas en países reflejan patrones observados. Los rangos en esta página no son estáticos.",
      ],
    },
    stats: [
      { value: "80+", label: "Países en el modelo" },
      { value: "50+", label: "Nichos con contexto de RPM" },
      { value: "12", label: "Monedas de visualización" },
      { value: "±20%", label: "Rango típico de planificación" },
    ],
    sections: [
      {
        title: "Cómo afecta realmente el país a la ecuación de ingresos",
        blocks: [
          { type: "text", value: "La geografía interactúa con varias otras variables a la vez. Comprender cada pieza por separado hace que el patrón general sea más claro." },
          {
            type: "card-grid",
            cards: [
              { title: "El RPM es lo que la variable geográfica realmente mueve", body: "El RPM es la métrica que la geografía afecta más directamente. Una sólida combinación de países puede aumentar significativamente el RPM, mientras que una débil puede suprimirlo." },
              { title: "La demanda de los anunciantes no se distribuye uniformemente", body: "Los presupuestos publicitarios se concentran en los mercados donde los anunciantes esperan retornos. EE. UU. atrae más competencia de anunciantes, lo que aumenta el CPM y consecuentemente el RPM." },
              { title: "El mismo nicho gana de manera diferente según la región", body: "Un canal de finanzas con espectadores principalmente de EE. UU. y uno con espectadores de mercados de ofertas más bajas no tendrán el mismo RPM, incluso con el mismo contenido." },
              { title: "La retención sigue siendo importante", body: "Una audiencia de alto valor no genera automáticamente grandes ingresos si los espectadores se van temprano. La retención afecta cuánto inventario de anuncios se puede entregar." },
              { title: "La duración del video y los mid-rolls todavía se aplican", body: "La geografía multiplica lo que ya está allí. Un video de más de 8 minutos con mid-rolls y audiencia de EE. UU. beneficia de ambas ventajas." },
              { title: "Los Shorts y la variable geográfica", body: "La geografía también es importante para los Shorts, pero el RPM base es lo suficientemente bajo como para que la diferencia absoluta entre los niveles de países sea menor en términos de dólares." },
            ],
          },
        ],
      },
      {
        title: "Dónde fallan las estimaciones basadas en el país",
        blocks: [
          { type: "text", value: "La jerarquía de países — EE. UU. en la cima, seguido por Reino Unido, Canadá, Australia — es un marco inicial razonable. No es una clasificación fija." },
          { type: "text", value: "El RPM a nivel de país fluctúa con las condiciones económicas locales y los patrones de gasto estacionales." },
          { type: "text", value: "El nicho también modula la geografía. Algunos nichos tienen demanda global que comprime la prima del país." },
          { type: "text", value: "Muy pocos canales tienen una distribución geográfica pura. El RPM efectivo es un promedio ponderado de esas tasas por país." },
        ],
      },
      {
        title: "Por qué las comparaciones basadas en el país engañan a los creadores",
        blocks: [
          { type: "text", value: "La mayoría de los consejos sobre ingresos en línea tratan la geografía como una nota al margen. En la práctica, la combinación de países puede ser una de las variables más grandes en toda la ecuación de ingresos." },
          { type: "text", value: "Se publican capturas de pantalla de CPM sin contexto geográfico. Los números de RPM promedio circulan sin especificar la mezcla geográfica." },
          { type: "text", value: "Es por esto que dos creadores en nichos idénticos con recuentos de vistas idénticos pueden tener experiencias de ingresos tan diferentes." },
        ],
      },
      {
        title: "Comparación de mezcla de países: mismo tráfico, economía diferente",
        blocks: [
          { type: "text", value: "Estos escenarios deliberadamente no coinciden perfectamente. Los canales reales tienen diferentes combinaciones de variables." },
          {
            type: "card-grid",
            cards: [
              { title: "Canal de finanzas de EE. UU. — 100K vistas, 9 min, fuerte audiencia de EE. UU.", body: "Con aproximadamente 52% de retención y una base predominantemente de EE. UU., un RPM realista podría rondar entre $8 y $18. Estimación de ingresos: $800 a $1,800." },
              { title: "Canal de juegos — 100K vistas, audiencia distribuida geográficamente", body: "La menor demanda en los juegos combinada con una distribución geográfica más amplia empuja el RPM hacia abajo a $1.50–$4.00. Ingresos: $150 a $400." },
              { title: "Tutorial educativo — audiencia UK/Canadá, 100K vistas", body: "Un rango de RPM de $4 a $10, que produce $400 a $1,000. La mezcla de Reino Unido/Canadá no coincide exactamente con la configuración de primer nivel de EE. UU." },
            ],
          },
        ],
      },
      {
        title: "Dónde suele fallar el análisis geográfico en la práctica",
        blocks: [
          {
            type: "list",
            items: [
              "Omitir por completo el análisis de la audiencia por país — y luego atribuir las fluctuaciones de RPM a cambios en el algoritmo.",
              "Usar puntos de referencia promedio mundiales — esos promedios combinan mercados con economías publicitarias fundamentalmente diferentes.",
              "Comparar canales solo por vistas — sin contexto geográfico, no se pueden explicar las brechas de ingresos.",
              "Tratar la geografía como una característica fija — la ubicación de la audiencia puede cambiar gradualmente con el tiempo.",
            ],
          },
        ],
      },
      {
        title: "Mitos comunes sobre los ingresos por país",
        blocks: [
          {
            type: "list",
            items: [
              "Todos los países pagan más o menos lo mismo — falso. La geografía es uno de los impulsores de RPM más fuertes.",
              "Más vistas siempre significa más dinero — 100K vistas en la configuración de un país pueden producir varias veces más ingresos que en otro.",
              "El CPM es lo que ganan los creadores — falso. El RPM está mucho más cerca de lo que llega a la cuenta del creador.",
              "Los Shorts se comportan como el formato largo para las primas geográficas — falso.",
            ],
          },
        ],
      },
      {
        title: "Cómo leer estas estimaciones basadas en el país",
        blocks: [
          { type: "text", value: "Las estimaciones aquí son más útiles como herramientas comparativas para entender la diferencia relativa entre las configuraciones de audiencia." },
          { type: "text", value: "Para tu propio canal, el desglose geográfico de YouTube Studio es la única fuente precisa." },
        ],
      },
    ],
    faq: [
      { q: "¿Por qué los ingresos de YouTube varían según el país?", a: "Porque los anunciantes no pagan las mismas tarifas en todas partes. Las subastas en mercados con mayor poder adquisitivo producen un CPM más alto, lo que se traduce en un RPM más alto para los creadores." },
      { q: "¿Qué países suelen pagar más en YouTube?", a: "EE. UU., Reino Unido, Canadá, Australia y partes de Europa occidental. Pero esta no es una clasificación fija." },
      { q: "¿Cuál es la diferencia entre RPM y CPM?", a: "El CPM es lo que pagan los anunciantes antes de que YouTube se lleve su parte. El RPM es lo que el creador realmente conserva por cada 1,000 vistas." },
      { q: "¿Importa más la geografía de la audiencia que las vistas?", a: "En algunas configuraciones, sí. Dos canales con vistas idénticas pero diferentes distribuciones por países pueden tener ingresos que difieren en un factor de tres o más." },
      { q: "¿Los Shorts pagan lo mismo en todos los países?", a: "Los Shorts varían con la geografía, pero el modelo de ingresos combinados significa que el RPM base ya es bajo." },
      { q: "¿Una audiencia de EE. UU. significa siempre altos ingresos?", a: "No automáticamente. El nicho, la retención y la duración del video siguen importando." },
      { q: "¿Qué tasa de retención debo ingresar?", a: "Si aún no tienes tus propias analíticas, el 45% es un punto de partida razonable para formatos largos." },
      { q: "¿Esta calculadora es gratuita?", a: "Sí. Su uso es gratuito, no requiere cuenta." },
    ],
    disclaimer: "Las estimaciones de Forevault se basan en puntos de referencia de creadores agregados y datos de mercado. Los ingresos reales de AdSense varían siempre. Este contenido es solo para fines educativos y de planificación, no es asesoramiento financiero.",
    tool: { type: "calculator", props: {} },
  },

  de: {
    meta: {
      slug: "youtube-earnings-by-country-calculator",
      title: "YouTube-Einnahmen nach Land — RPM und Umsatz nach Standort",
      description: "Erfahren Sie, wie die Geografie Ihres Publikums Ihren YouTube-RPM und Umsatz beeinflusst. Vergleichen Sie Einnahmen nach Land mit echten Benchmarks.",
    },
    hero: {
      eyebrow: "Geografie und YouTube-Einnahmen verstehen",
      title: "YouTube-Einnahmen nach Land: Warum der Standort alles verändert",
      lead: [
        "Die Geografie ist wahrscheinlich die am meisten unterschätzte Variable bei der YouTube-Monetarisierung. Zwei Creator mit ähnlichen Aufrufzahlen können am selben Tag ihren RPM betrachten und völlig unterschiedliche Zahlen sehen.",
        "Dies geschieht, weil die YouTube-Werbeeinnahmen nicht direkt durch Aufrufe entstehen. Sie entstehen durch Werbe-Auktionen, die in verschiedenen Märkten unterschiedlich ablaufen.",
        "Was folgt, ist eine ehrliche Analyse, warum das Land wichtig ist und wo länderbasierte Umsatzschätzungen an ihre Grenzen stoßen.",
        "Hinweis zu den Daten: Die hier beschriebenen länderbasierten RPM-Zusammenhänge spiegeln beobachtete Muster wider. Die Spannen auf dieser Seite sind nicht statisch.",
      ],
    },
    stats: [
      { value: "80+", label: "Länder im Modell" },
      { value: "50+", label: "Nischen mit RPM-Kontext" },
      { value: "12", label: "Anzeigewährungen" },
      { value: "±20%", label: "Typischer Planungsbereich" },
    ],
    sections: [
      {
        title: "Wie das Land die Umsatzgleichung tatsächlich beeinflusst",
        blocks: [
          { type: "text", value: "Geografie interagiert mit mehreren anderen Variablen gleichzeitig. Jedes Teil separat zu verstehen, macht das Gesamtbild klarer." },
          {
            type: "card-grid",
            cards: [
              { title: "RPM ist das, was die Geografie-Variable tatsächlich bewegt", body: "RPM ist die Kennzahl, die die Geografie am direktesten beeinflusst. Ein starker Ländermix kann den RPM deutlich nach oben treiben; ein schwacher kann ihn unterdrücken." },
              { title: "Die Nachfrage der Werbetreibenden ist nicht gleichmäßig verteilt", body: "Werbebudgets konzentrieren sich auf Märkte, in denen Werbetreibende Renditen erwarten. Die USA ziehen mehr Wettbewerb unter Werbetreibenden an, was den CPM und RPM in die Höhe treibt." },
              { title: "Dieselbe Nische verdient je nach Region unterschiedlich", body: "Ein Finanzkanal mit hauptsächlich US-Zuschauern und einer mit Zuschauern aus Märkten mit niedrigeren Geboten werden nicht denselben RPM haben." },
              { title: "Zuschauerbindung zählt weiterhin", body: "Ein hochwertiges Publikum aus einem Premium-Markt führt nicht automatisch zu starken Einnahmen, wenn die Zuschauer früh abschalten." },
              { title: "Videolänge und Mid-Rolls gelten weiterhin", body: "Die Geografie multipliziert das, was bereits vorhanden ist. Ein Long-Form-Video über 8 Minuten mit Mid-Rolls und US-Publikum profitiert von beiden Faktoren." },
              { title: "Shorts und die geografische Variable", body: "Geografie ist auch bei Shorts wichtig, aber der Basis-RPM ist niedrig genug, dass der absolute Unterschied zwischen Länder-Ebenen kleiner ist." },
            ],
          },
        ],
      },
      {
        title: "Wo länderbasierte Schätzungen scheitern",
        blocks: [
          { type: "text", value: "Die Länderhierarchie — USA an der Spitze, gefolgt von Großbritannien, Kanada, Australien — ist ein vernünftiger Startrahmen. Es ist kein fixes Ranking." },
          { type: "text", value: "Der RPM auf Länderebene schwankt mit lokalen wirtschaftlichen Bedingungen und saisonalen Ausgabenmustern." },
          { type: "text", value: "Die Nische moduliert die Geografie auch. Einige Nischen haben eine wirklich globale Nachfrage, die den Länder-Aufschlag komprimiert." },
          { type: "text", value: "Sehr wenige Kanäle haben eine rein geografische Verteilung. Der effektive RPM ist ein gewichteter Durchschnitt der Länderraten." },
        ],
      },
      {
        title: "Warum länderbasierte Vergleiche Creator in die Irre führen",
        blocks: [
          { type: "text", value: "Die meisten Online-Ratschläge zum Thema Einkommen behandeln Geografie als Randnotiz. In der Praxis kann der Ländermix eine der größten Variablen in der gesamten Umsatzgleichung sein." },
          { type: "text", value: "CPM-Screenshots werden ohne geografischen Kontext gepostet. Durchschnittliche RPM-Zahlen kursieren ohne den geografischen Mix anzugeben." },
          { type: "text", value: "Deshalb können zwei Creator in identischen Nischen mit identischen Aufrufzahlen so unterschiedliche Umsatzerfahrungen machen." },
        ],
      },
      {
        title: "Ländermix-Vergleich: gleicher Traffic, andere Wirtschaft",
        blocks: [
          { type: "text", value: "Diese Szenarien sind absichtlich nicht perfekt aufeinander abgestimmt. Echte Kanäle weisen unterschiedliche Kombinationen von Variablen auf." },
          {
            type: "card-grid",
            cards: [
              { title: "US-Finanzkanal — 100k Aufrufe, 9 Min, starkes US-Publikum", body: "Bei 52% Zuschauerbindung und überwiegend US-Publikum liegt ein realistischer RPM bei 8 bis 18 US-Dollar. Umsatzschätzung: ca. 800 bis 1.800 US-Dollar." },
              { title: "Gaming-Kanal — gleiche 100k Aufrufe, geografisch verteiltes Publikum", body: "Geringere Werbenachfrage plus breitere geografische Streuung drückt den RPM auf etwa 1,50 bis 4,00 US-Dollar. Einnahmen: ca. 150 bis 400 US-Dollar." },
              { title: "Bildungs-Tutorial — starkes UK/Kanada-Publikum, 100k Aufrufe", body: "Eine praktische RPM-Spanne von 4 bis 10 US-Dollar, die etwa 400 bis 1.000 US-Dollar einbringt." },
            ],
          },
        ],
      },
      {
        title: "Wo geografische Analysen in der Praxis meist fehlschlagen",
        blocks: [
          {
            type: "list",
            items: [
              "Die Analyse des Zuschauerlandes komplett überspringen — und dann RPM-Schwankungen auf Algorithmusänderungen zurückführen.",
              "Verwendung globaler Durchschnitts-Benchmarks — diese Durchschnitte vermischen Märkte mit grundlegend unterschiedlicher Werbeökonomie.",
              "Vergleich von Kanälen nur nach Aufrufen — ohne Geografiekontext können Aufrufvergleiche keine Einkommenslücken erklären.",
              "Geografie als feststehendes Merkmal behandeln — der Standort des Publikums kann sich im Laufe der Zeit allmählich verschieben.",
            ],
          },
        ],
      },
      {
        title: "Häufige Mythen über Einnahmen nach Land",
        blocks: [
          {
            type: "list",
            items: [
              "Alle Länder zahlen in etwa gleich viel — falsch. Geografie ist einer der stärksten RPM-Treiber.",
              "Mehr Aufrufe bedeuten immer mehr Geld — 100.000 Aufrufe in einer Länderkonfiguration können ein Vielfaches einer anderen bringen.",
              "CPM ist das, was Creator verdienen — falsch. RPM ist viel näher an dem, was auf dem Konto des Creators landet.",
              "Shorts verhalten sich bei Länderaufschlägen wie Long-Form — falsch.",
            ],
          },
        ],
      },
      {
        title: "Wie diese länderbasierten Schätzungen zu lesen sind",
        blocks: [
          { type: "text", value: "Die Schätzungen hier sind am nützlichsten als Vergleichsinstrumente, nicht als präzise Prognosen für einen bestimmten Monat." },
          { type: "text", value: "Speziell für Ihren eigenen Kanal ist die geografische Aufschlüsselung im YouTube Studio die einzige genaue Quelle." },
        ],
      },
    ],
    faq: [
      { q: "Warum variieren YouTube-Einnahmen je nach Land?", a: "Weil Werbetreibende nicht überall die gleichen Preise zahlen. Höhere Kaufkraft und stärkerer Wettbewerb erzeugen höhere CPMs und folglich höhere RPMs." },
      { q: "Welche Länder zahlen normalerweise am meisten auf YouTube?", a: "Die USA, Großbritannien, Kanada, Australien und Teile Westeuropas. Aber dies ist kein fixes Ranking." },
      { q: "Was ist der Unterschied zwischen RPM und CPM?", a: "CPM ist das, was Werbetreibende zahlen, bevor YouTube seinen Anteil nimmt. RPM ist das, was der Creator tatsächlich pro 1.000 Aufrufe behält." },
      { q: "Ist die Geografie des Publikums wichtiger als Aufrufe?", a: "In einigen Konfigurationen, ja. Zwei Kanäle mit identischen Aufrufzahlen können Einnahmen erzielen, die sich um das Dreifache unterscheiden." },
      { q: "Zahlen Shorts in allen Ländern gleich?", a: "Shorts variieren mit der Geografie, aber das gebündelte Einnahmemodell bedeutet, dass der Basis-RPM bereits niedrig ist." },
      { q: "Bedeutet ein US-Publikum immer hohe Einnahmen?", a: "Nicht automatisch. Nische, Zuschauerbindung und Videolänge spielen weiterhin eine Rolle." },
      { q: "Welche Zuschauerbindungsrate sollte ich eingeben?", a: "Wenn Sie noch keine eigenen Analytics haben, sind 45% ein vernünftiger Startpunkt für Long-Form-Videos." },
      { q: "Ist dieser Rechner kostenlos?", a: "Ja. Er ist kostenlos zu nutzen, es ist kein Konto erforderlich." },
    ],
    disclaimer: "Die Schätzungen von Forevault basieren auf aggregierten Creator-Benchmarks und Marktdaten. Die tatsächlichen AdSense-Einnahmen variieren weiterhin. Dieser Inhalt dient nur der Planung und Aufklärung, nicht als Finanzberatung.",
    tool: { type: "calculator", props: {} },
  },

  pt: {
    meta: {
      slug: "youtube-earnings-by-country-calculator",
      title: "Ganhos do YouTube por país — RPM e receita por localização",
      description: "Descubra como a geografia do seu público afeta seu RPM e receita no YouTube. Compare ganhos por país com dados reais.",
    },
    hero: {
      eyebrow: "Entendendo a geografia e os ganhos do YouTube",
      title: "Ganhos do YouTube por país: por que a localização muda tudo",
      lead: [
        "A geografia é provavelmente a variável mais subestimada na monetização do YouTube. Dois criadores com números de visualizações semelhantes podem olhar para seu RPM no mesmo dia e ver números que mal se sobrepõem.",
        "Isso acontece porque a receita de anúncios do YouTube não vem diretamente das visualizações. Vem dos leilões de anúncios que ocorrem de maneira diferente em diferentes mercados.",
        "O que se segue é uma análise honesta de por que o país importa e onde as estimativas de receita baseadas no país falham.",
        "Nota sobre os dados: as relações de RPM baseadas em países refletem padrões observados. As faixas nesta página não são estáticas.",
      ],
    },
    stats: [
      { value: "80+", label: "Países no modelo" },
      { value: "50+", label: "Nichos com contexto de RPM" },
      { value: "12", label: "Moedas de exibição" },
      { value: "±20%", label: "Faixa típica de planejamento" },
    ],
    sections: [
      {
        title: "Como o país realmente afeta a equação da receita",
        blocks: [
          { type: "text", value: "A geografia interage com várias outras variáveis ao mesmo tempo. Entender cada peça separadamente torna o padrão geral mais claro." },
          {
            type: "card-grid",
            cards: [
              { title: "RPM é o que a variável geográfica realmente move", body: "RPM é a métrica que a geografia afeta mais diretamente. Um mix de países forte pode elevar o RPM significativamente; um fraco pode suprimi-lo." },
              { title: "A demanda dos anunciantes não é distribuída uniformemente", body: "Os orçamentos de anúncios se concentram em mercados onde os anunciantes esperam retorno. Os EUA atraem mais concorrência, o que aumenta o CPM e, consequentemente, o RPM." },
              { title: "O mesmo nicho ganha de forma diferente por região", body: "Um canal de finanças com espectadores dos EUA e um com espectadores de mercados de lances mais baixos não terão o mesmo RPM." },
              { title: "A retenção ainda é importante", body: "Um público de alto valor não gera automaticamente forte receita se os espectadores saírem cedo. A retenção afeta quanto inventário de anúncios pode ser entregue." },
              { title: "O comprimento do vídeo e os mid-rolls ainda se aplicam", body: "A geografia multiplica o que já existe. Um vídeo longo de mais de 8 minutos com mid-rolls e público dos EUA beneficia-se de ambas as vantagens." },
              { title: "Shorts e a variável geográfica", body: "A geografia também importa para o Shorts, mas o RPM base é baixo o suficiente para que a diferença absoluta entre as faixas de países seja menor." },
            ],
          },
        ],
      },
      {
        title: "Onde as estimativas baseadas no país falham",
        blocks: [
          { type: "text", value: "A hierarquia de países — EUA no topo, seguidos por Reino Unido, Canadá, Austrália — é uma estrutura inicial razoável. Não é um ranking fixo." },
          { type: "text", value: "O RPM em nível de país flutua com as condições econômicas locais e padrões de gastos sazonais." },
          { type: "text", value: "O nicho também modula a geografia. Alguns nichos têm demanda global genuína que comprime o prêmio do país." },
          { type: "text", value: "Muito poucos canais têm uma distribuição geográfica pura. O RPM efetivo é uma média ponderada dessas taxas por país." },
        ],
      },
      {
        title: "Por que as comparações por país enganam os criadores",
        blocks: [
          { type: "text", value: "A maioria dos conselhos online sobre renda trata a geografia como uma nota de rodapé. Na prática, a mistura de países pode ser uma das maiores variáveis em toda a equação de receita." },
          { type: "text", value: "Capturas de tela de CPM são postadas sem contexto geográfico. Números de RPM médio circulam sem especificar a mistura geográfica." },
          { type: "text", value: "É por isso que dois criadores em nichos idênticos com o mesmo número de visualizações podem ter experiências de receita tão diferentes." },
        ],
      },
      {
        title: "Comparação de mix de países: mesmo tráfego, economia diferente",
        blocks: [
          { type: "text", value: "Esses cenários deliberadamente não coincidem perfeitamente. Canais reais têm diferentes combinações de variáveis." },
          {
            type: "card-grid",
            cards: [
              { title: "Canal de finanças nos EUA — 100 mil views, 9 min, forte público nos EUA", body: "Com cerca de 52% de retenção e público dos EUA, um RPM realista fica em torno de $8 a $18. Estimativa de receita: $800 a $1.800." },
              { title: "Canal de jogos — 100 mil views, público distribuído geograficamente", body: "Menor demanda em jogos combinada com distribuição geográfica mais ampla empurra o RPM para $1,50–$4,00. Receita: $150 a $400." },
              { title: "Tutorial educacional — público UK/Canadá, 100 mil views", body: "Faixa de RPM de $4 a $10, gerando de $400 a $1.000. A mistura Reino Unido/Canadá não atinge o pico da configuração dos EUA." },
            ],
          },
        ],
      },
      {
        title: "Onde a análise geográfica geralmente falha na prática",
        blocks: [
          {
            type: "list",
            items: [
              "Pular completamente a análise de público-país — e então atribuir flutuações de RPM a mudanças no algoritmo.",
              "Usar benchmarks de média global — essas médias misturam mercados com economia de publicidade fundamentalmente diferente.",
              "Comparar canais apenas por visualizações — sem contexto de país, as contagens de visualizações não podem explicar as diferenças de receita.",
              "Tratar a geografia como algo estático — a localização do público pode mudar com o tempo com a evolução da estratégia de conteúdo.",
            ],
          },
        ],
      },
      {
        title: "Mitos comuns sobre ganhos por país",
        blocks: [
          {
            type: "list",
            items: [
              "Todos os países pagam a mesma coisa — falso. A geografia é um dos maiores influenciadores de RPM.",
              "Mais views é igual a mais dinheiro — 100 mil views em um país podem render o triplo de outro.",
              "CPM é o que os criadores ganham — falso. O RPM é o que cai na conta do criador.",
              "Os Shorts se comportam como os vídeos longos — falso.",
            ],
          },
        ],
      },
      {
        title: "Como ler essas estimativas de país",
        blocks: [
          { type: "text", value: "As estimativas aqui são mais úteis como ferramentas comparativas para entender a diferença entre públicos." },
          { type: "text", value: "Para o seu canal especificamente, os dados geográficos do YouTube Studio são a única fonte real." },
        ],
      },
    ],
    faq: [
      { q: "Por que os ganhos do YouTube variam de acordo com o país?", a: "Porque os anunciantes não pagam as mesmas taxas em todos os lugares. Mercados com maior poder de compra geram CPM mais alto e, consequentemente, RPM mais alto para criadores." },
      { q: "Quais países geralmente pagam mais no YouTube?", a: "Os EUA, Reino Unido, Canadá, Austrália e Europa Ocidental geralmente estão no topo. Mas isso varia com a economia e o nicho." },
      { q: "Qual é a diferença entre RPM e CPM?", a: "CPM é o que os anunciantes pagam antes da parte do YouTube. RPM é o que o criador embolsa a cada mil visualizações." },
      { q: "A geografia do público importa mais que as visualizações?", a: "Em algumas configurações, sim. Dois canais com as mesmas visualizações mas públicos de países diferentes podem ter rendas triplicadas." },
      { q: "Os Shorts pagam o mesmo em todos os países?", a: "O público importa nos Shorts, mas o modelo de fundo de criadores já torna a base do RPM pequena." },
      { q: "Um público dos EUA sempre significa altos ganhos?", a: "Não é automático. Nicho e retenção importam profundamente." },
      { q: "Que taxa de retenção devo inserir?", a: "Se você não tem dados, 45% é um excelente ponto de partida para vídeos longos." },
      { q: "Esta calculadora é gratuita?", a: "Sim. Totalmente gratuita, sem necessidade de conta." },
    ],
    disclaimer: "As estimativas do Forevault são baseadas em pesquisas e médias do mercado. Os ganhos do AdSense variam sempre. Use esta página para educação e planejamento estratégico, não como consultoria financeira.",
    tool: { type: "calculator", props: {} },
  },

  ja: {
    meta: {
      slug: "youtube-earnings-by-country-calculator",
      title: "国別YouTube収益 — 地域別RPMと収益",
      description: "視聴者の地域があなたのYouTubeのRPMと収益にどのように影響するかをご覧ください。実際のデータで国別に収益を比較しましょう。",
    },
    hero: {
      eyebrow: "地域とYouTube収益の理解",
      title: "国別YouTube収益：視聴者の場所がすべてを変える理由",
      lead: [
        "地理的要因は、YouTube収益化において最も過小評価されている変数です。再生回数とコンテンツの種類が似ている2人のクリエイターでも、同じ日にRPMを比較すると、数字が全く異なることがあります。",
        "これは、YouTubeの広告収益が直接再生回数から発生するわけではないためです。収益は広告オークションから生まれます。そして、そのオークションは市場ごとに異なる動きをします。",
        "以下の内容は、国が重要である理由、実際の違いの大きさ、そして国別の収益予測がどこで破綻するのかについての率直な分析です。",
        "データに関する注意: ここで説明する国別のRPMの傾向は、クリエイターの報告データや広告市場の行動に基づくパターンを反映しています。このページの数値は固定的なものではありません。",
      ],
    },
    stats: [
      { value: "80+", label: "モデル対象国" },
      { value: "50+", label: "分析済みニッチ分野" },
      { value: "12", label: "対応通貨" },
      { value: "±20%", label: "標準的な誤差範囲" },
    ],
    sections: [
      {
        title: "国が収益の計算式に実際に与える影響",
        blocks: [
          { type: "text", value: "地理的要因は、他の複数の変数と同時に相互作用します。各要素を個別に理解することで、全体的なパターンがより明確になります。" },
          {
            type: "card-grid",
            cards: [
              { title: "RPMは地理的変数によって実際に変動する指標です", body: "RPMは、地理的影響を最も直接的に受ける指標です。優良な国の構成比率が高ければRPMは大きく上昇し、構成が悪ければ低迷します。" },
              { title: "広告主の需要は均等ではありません", body: "広告予算は、リターンが見込める市場に集中します。米国を筆頭に、購買力が高い市場は広告主の競争を呼び込み、CPMとRPMを押し上げます。" },
              { title: "同じニッチでも地域によって収益が異なります", body: "視聴者の大半が米国のチャンネルと、単価の低い市場のチャンネルとでは、RPMは同じになりません。" },
              { title: "視聴者維持率が重要です", body: "単価の高い市場の視聴者であっても、すぐに離脱してしまえば高い収益には直結しません。" },
              { title: "動画の長さとミッドロール広告の影響", body: "地理的要因は、既存の条件を掛け合わせます。8分以上の長尺動画でミッドロール広告を設定し、米国中心の視聴者を持つ場合、両方の恩恵を受けます。" },
              { title: "Shortsと地理的変数", body: "ShortsにもRPMの国別影響はありますが、ベースとなるRPMが低いため、金額としての差は小さくなります。" },
            ],
          },
        ],
      },
      {
        title: "国別予測の限界",
        blocks: [
          { type: "text", value: "米国をトップとした一般的な国別階層は妥当な出発点ですが、固定されたランキングではありません。" },
          { type: "text", value: "国レベルのRPMは、現地の経済状況、キャンペーンサイクル、季節的な支出パターンによって変動します。" },
          { type: "text", value: "ニッチも地理的影響を調整します。一部のソフトウェア分野などは世界的な需要があり、国による差が縮まります。" },
          { type: "text", value: "純粋に1つの国からの視聴者だけで構成されているチャンネルはほとんどありません。実効RPMは各国のレートの加重平均となります。" },
        ],
      },
      {
        title: "国別の比較がクリエイターを誤解させる理由",
        blocks: [
          { type: "text", value: "ネット上の収益に関するアドバイスの大半は、地理的要因を単なる補足として扱っています。しかし実際には、国別の割合は収益計算において最も大きな単一変数になり得ます。" },
          { type: "text", value: "RPMのスクリーンショットが視聴者の国別データなしで共有されることが問題を複雑にしています。" },
          { type: "text", value: "同じニッチ、同じ月間再生回数でも収益に大きな差が出るのはこのためです。" },
        ],
      },
      {
        title: "国の割合の比較: 同じトラフィック、異なる経済効果",
        blocks: [
          { type: "text", value: "これらのシナリオは意図的に完全に一致させていません。実際のチャンネルは様々な変数の組み合わせです。" },
          {
            type: "card-grid",
            cards: [
              { title: "米国の金融チャンネル — 10万再生、9分の動画、米国視聴者が大半", body: "維持率が約52%で米国視聴者がメインの場合、現実的なRPMは8ドル〜18ドル程度。予想収益：約800ドル〜1,800ドル。" },
              { title: "ゲームチャンネル — 同じ10万再生、視聴者が世界に分散", body: "広告需要の低さと地理的な分散により、RPMは1.50ドル〜4.00ドル程度。収益：約150ドル〜400ドル。" },
              { title: "教育系チュートリアル — 英国/カナダ視聴者が多め、10万再生", body: "実用的なRPMは4ドル〜10ドルの範囲で、約400ドル〜1,000ドルの収益になります。" },
            ],
          },
        ],
      },
      {
        title: "地理的分析が実際に失敗するよくある例",
        blocks: [
          {
            type: "list",
            items: [
              "視聴者の国別分析を完全に無視する — 地理的な変化が原因である可能性が高いのに、RPMの変動をアルゴリズムの変更のせいにする。",
              "世界平均のベンチマークを使用する — 経済状況が異なる市場をごちゃ混ぜにした平均値は個々のチャンネルには当てはまりません。",
              "再生回数だけでチャンネルを比較する — 地理的文脈なしでは、収益の格差を説明できません。",
              "地理的要因を固定された特徴として扱う — コンテンツ戦略の進化に伴って視聴者の地域は徐々に変化します。",
            ],
          },
        ],
      },
      {
        title: "国別収益に関するよくある神話（誤解）",
        blocks: [
          {
            type: "list",
            items: [
              "「どの国でも支払額はほぼ同じ」は嘘です — 地理的要因はRPMの最大の要因の一つです。",
              "「再生回数が多い＝収益が多い」は単純化しすぎです — 同じ10万再生でも、視聴者の国によって収益は数倍異なります。",
              "「CPMはクリエイターの収益」は嘘です — CPMはYouTubeの手数料が引かれる前の広告主側の価格です。",
              "「Shortsの国別プレミアムは長尺動画と同じ」は嘘です。",
            ],
          },
        ],
      },
      {
        title: "この国別予測データの読み方",
        blocks: [
          { type: "text", value: "ここでの予測データは、特定の月の正確な予測としてではなく、視聴者構成の違いを理解するための比較ツールとして最も役立ちます。" },
          { type: "text", value: "あなたのチャンネルに最も正確な情報は、YouTube Studioの国別データのみです。" },
        ],
      },
    ],
    faq: [
      { q: "なぜYouTubeの収益は国によって異なるのですか？", a: "広告主が支払う料金が世界中で同じではないためです。購買力が高く、競争が激しい市場での広告オークションはCPMが高くなり、結果としてクリエイターのRPMも高くなります。" },
      { q: "YouTubeで最も単価が高い国はどこですか？", a: "米国、英国、カナダ、オーストラリア、そして西ヨーロッパの一部が上位を占めることが多いです。" },
      { q: "RPMとCPMの違いは何ですか？", a: "CPMはYouTubeの手数料を引く前の広告主の支払額です。RPMは1,000回再生あたりにクリエイターが実際に受け取る金額です。" },
      { q: "視聴者の地域は再生回数よりも重要ですか？", a: "状況によっては「はい」です。同じ再生回数でも、国別の割合が異なれば、収益が3倍以上の差になることがあります。" },
      { q: "Shortsの収益はどの国でも同じですか？", a: "国によって異なりますが、プールされた収益モデルのため、ベースとなるRPM自体が低くなっています。" },
      { q: "米国の視聴者がいれば常に高収益になりますか？", a: "そうとは限りません。ニッチや視聴者維持率が低ければRPMは上がりません。" },
      { q: "視聴者維持率の入力には何を使えばいいですか？", a: "ご自身のデータがまだない場合は、長尺動画のスタートポイントとして45%を入力するのが妥当です。" },
      { q: "この計算機は無料ですか？", a: "はい。完全に無料で使用でき、アカウント登録は不要です。" },
    ],
    disclaimer: "Forevaultの予測値は、集計されたクリエイターデータと市場データに基づいています。実際のAdSense収益は変動します。このコンテンツは教育および計画の目的であり、財務的アドバイスではありません。",
    tool: { type: "calculator", props: {} },
  },

  ko: {
    meta: {
      slug: "youtube-earnings-by-country-calculator",
      title: "국가별 유튜브 수익 — 지역별 RPM 및 수익",
      description: "시청자의 지역이 유튜브 RPM과 수익에 어떤 영향을 미치는지 알아보세요. 실제 데이터로 국가별 수익을 비교해 보세요.",
    },
    hero: {
      eyebrow: "지리와 유튜브 수익의 이해",
      title: "국가별 유튜브 수익: 시청 지역이 모든 것을 결정하는 이유",
      lead: [
        "지리적 요인은 유튜브 수익 창출에서 가장 과소평가되는 변수일 것입니다. 조회수와 콘텐츠 유형이 비슷한 두 크리에이터가 같은 날 RPM을 확인했을 때 전혀 다른 숫자를 볼 수 있으며, 그 차이의 상당 부분은 시청자가 어디에 거주하느냐에 달려 있습니다.",
        "이는 유튜브의 광고 수익이 조회수에서 직접 나오지 않기 때문입니다. 수익은 광고 입찰을 통해 발생하며, 그 입찰은 시장마다 다르게 진행됩니다.",
        "아래 내용은 국가가 중요한 이유와 국가 기반 수익 추정치가 어느 지점에서 한계를 가지는지에 대한 솔직한 분석입니다.",
        "데이터 관련 참고: 여기에 설명된 국가별 RPM 관계는 크리에이터가 보고한 데이터와 광고 시장의 패턴을 반영합니다. 국가 순위는 경제 상황에 따라 바뀔 수 있습니다.",
      ],
    },
    stats: [
      { value: "80+", label: "모델 포함 국가" },
      { value: "50+", label: "분석된 니치 분야" },
      { value: "12", label: "표시 통화" },
      { value: "±20%", label: "일반적인 오차 범위" },
    ],
    sections: [
      {
        title: "국가가 수익 구조에 미치는 실제 영향",
        blocks: [
          { type: "text", value: "지리적 요인은 여러 다른 변수들과 동시에 상호작용합니다. 각 요소를 개별적으로 이해하면 전체적인 패턴이 더 명확해집니다." },
          {
            type: "card-grid",
            cards: [
              { title: "RPM은 지리적 변수가 실제로 움직이는 지표입니다", body: "RPM은 지리적 요인의 영향을 가장 직접적으로 받는 지표입니다. 좋은 국가 비율은 RPM을 크게 올릴 수 있고, 나쁜 비율은 영상 품질이 좋아도 RPM을 억제할 수 있습니다." },
              { title: "광고주 수요는 균등하게 분배되지 않습니다", body: "광고 예산은 광고주가 수익을 기대하는 시장에 집중됩니다. 미국이 대표적으로 광고주 경쟁을 유발하여 CPM과 RPM을 상승시킵니다." },
              { title: "같은 니치(주제)라도 지역에 따라 수익이 다릅니다", body: "주로 미국 시청자를 보유한 금융 채널과 단가가 낮은 시장의 시청자를 보유한 금융 채널은 조회수가 같아도 RPM이 다릅니다." },
              { title: "시청 지속 시간(유지율)이 여전히 중요합니다", body: "고단가 시장의 프리미엄 시청자라도 영상을 빨리 끄면 높은 수익으로 직결되지 않습니다." },
              { title: "동영상 길이와 미드롤 광고의 영향", body: "지리적 요인은 기존의 조건을 배가시킵니다. 8분 이상의 롱폼 영상에 미드롤 광고를 넣고 미국 시청자가 많다면 두 가지 혜택을 동시에 받습니다." },
              { title: "Shorts와 지리적 변수", body: "쇼츠에서도 국가는 중요하지만, 기본 RPM 자체가 낮기 때문에 달러 환산 시 국가 등급 간의 절대적인 금액 차이는 작습니다." },
            ],
          },
        ],
      },
      {
        title: "국가 기반 추정치의 한계",
        blocks: [
          { type: "text", value: "미국을 최상위로 하고 영국, 캐나다, 호주 등이 뒤따르는 일반적인 국가 계층 구조는 합리적인 출발점입니다. 하지만 이는 고정된 순위가 아닙니다." },
          { type: "text", value: "국가 수준의 RPM은 현지 경제 상황과 계절적 지출 패턴에 따라 변동합니다." },
          { type: "text", value: "니치(주제) 역시 지리적 영향을 조절합니다. 전 세계적인 수요가 있는 카테고리는 국가 간 차이가 적습니다." },
          { type: "text", value: "단일 국가의 시청자만 있는 채널은 거의 없습니다. 실효 RPM은 각 국가별 요율의 가중 평균입니다." },
        ],
      },
      {
        title: "국가 기반 비교가 크리에이터를 오해하게 만드는 이유",
        blocks: [
          { type: "text", value: "온라인에 떠도는 대부분의 수익 관련 조언은 지리적 요인을 부가적인 요소로만 취급합니다. 실제로는 국가 비율이 전체 수익 방정식에서 가장 큰 단일 변수 중 하나가 될 수 있습니다." },
          { type: "text", value: "지리적 맥락 없이 CPM 스크린샷이 게시되거나 국가 비율 명시 없이 평균 RPM이 돌아다닙니다." },
          { type: "text", value: "양측의 시청자 지리를 모른 채 채널을 비교하는 것은 대체로 무의미합니다." },
        ],
      },
      {
        title: "국가 비율 비교: 같은 트래픽, 다른 경제 구조",
        blocks: [
          { type: "text", value: "이 시나리오들은 의도적으로 변수를 다르게 설정했습니다. 실제 채널들은 다양한 변수 조합을 가집니다." },
          {
            type: "card-grid",
            cards: [
              { title: "미국 금융 채널 — 10만 조회수, 9분 영상, 미국 시청자 압도적", body: "약 52%의 유지율과 미국 시청자 기반을 가질 때 현실적인 RPM은 8달러~18달러 수준입니다. 예상 수익: 약 800달러~1,800달러." },
              { title: "게임 채널 — 동일한 10만 조회수, 시청자 지역 분산", body: "게임 분야의 낮은 광고주 수요와 분산된 지리로 인해 RPM은 약 1.50달러~4.00달러로 떨어집니다. 수익: 약 150달러~400달러." },
              { title: "교육용 튜토리얼 — 영국/캐나다 시청자 다수, 10만 조회수", body: "실제 RPM 범위는 4달러~10달러이며, 약 400달러~1,000달러의 수익을 냅니다." },
            ],
          },
        ],
      },
      {
        title: "실제 지리적 분석이 자주 실패하는 경우",
        blocks: [
          {
            type: "list",
            items: [
              "시청자 국가 분석을 완전히 건너뛰기 — 지역 변화가 원인인데 알고리즘 변경 탓으로 돌립니다.",
              "글로벌 평균 벤치마크 사용 — 광고 경제가 다른 시장들을 섞어놓은 평균은 개별 채널에 적용하기 어렵습니다.",
              "조회수만으로 채널 비교 — 지리적 맥락 없는 조회수 비교는 수익 격차를 설명하지 못합니다.",
              "지리를 고정된 특징으로 취급 — 콘텐츠 전략이 진화함에 따라 시청자 위치도 점진적으로 이동합니다.",
            ],
          },
        ],
      },
      {
        title: "국가별 수익에 대한 흔한 오해",
        blocks: [
          {
            type: "list",
            items: [
              "모든 국가는 비슷하게 지불한다는 거짓 — 지리는 가장 강력한 RPM 동인이며 최상위 시장과 최하위 시장의 차이는 매우 큽니다.",
              "조회수가 많으면 무조건 돈을 많이 번다는 단순화 — 한 국가 구성에서의 10만 조회수가 다른 구성에서보다 몇 배의 수익을 낼 수 있습니다.",
              "CPM이 크리에이터의 수익이다는 거짓 — CPM은 유튜브 몫을 떼기 전 광고주가 지불하는 금액입니다.",
              "쇼츠의 지리적 프리미엄은 롱폼과 같다는 거짓 — 쇼츠의 기본 RPM이 너무 낮아 국가별 프리미엄의 절대적 영향이 다릅니다.",
            ],
          },
        ],
      },
      {
        title: "이 국가 기반 추정치 데이터를 읽는 방법",
        blocks: [
          { type: "text", value: "이 데이터는 시청자 구성 간의 상대적 차이를 이해하는 비교 도구로 가장 유용합니다. 방향성을 파악하는 참고용으로 사용하세요." },
          { type: "text", value: "본인 채널에 대한 가장 정확한 소스는 유튜브 스튜디오의 지리적 데이터뿐입니다." },
        ],
      },
    ],
    faq: [
      { q: "왜 유튜브 수익은 국가마다 다른가요?", a: "광고주들이 모든 곳에서 동일한 요금을 지불하지 않기 때문입니다. 구매력이 높고 광고주 경쟁이 치열한 시장은 더 높은 CPM을 생성하고, 이는 크리에이터의 높은 RPM으로 이어집니다." },
      { q: "유튜브에서 단가가 가장 높은 국가는 어디인가요?", a: "미국, 영국, 캐나다, 호주 및 서유럽 일부 국가가 상위권에 있습니다. 경제 상황과 니치에 따라 변동합니다." },
      { q: "RPM과 CPM의 차이는 무엇인가요?", a: "CPM은 광고주가 지불하는 단가이고, RPM은 크리에이터가 실제로 가져가는 1,000회당 수익입니다." },
      { q: "시청자 지역이 조회수보다 더 중요한가요?", a: "상황에 따라 그렇습니다. 조회수가 같아도 시청자 국가 분포가 다르면 수익이 3배 이상 차이 날 수 있습니다." },
      { q: "쇼츠는 국가에 상관없이 수익이 같나요?", a: "쇼츠도 지역에 따라 다르지만, 펀드 수익 모델 특성상 기본 RPM이 낮아 국가 간 절대적 금액 차이는 작습니다." },
      { q: "미국 시청자가 많으면 항상 높은 수익을 보장하나요?", a: "자동으로 보장되지는 않습니다. 시청 지속 시간(유지율)이 낮으면 프리미엄 시청자라도 수익이 적습니다." },
      { q: "시청 지속 시간(유지율)은 몇 퍼센트로 입력해야 하나요?", a: "자체 데이터가 없다면 롱폼 영상의 경우 45%를 시작점으로 잡는 것이 합리적입니다." },
      { q: "이 계산기는 무료인가요?", a: "네, 계정 가입 없이 완전히 무료로 사용할 수 있습니다." },
    ],
    disclaimer: "Forevault의 추정치는 집계된 크리에이터 벤치마크와 시장 데이터에 의존합니다. 실제 수익은 광고 수요, 계절성 등에 따라 변동됩니다. 본 내용은 정보 제공 목적이며 재무적 조언이 아닙니다.",
    tool: { type: "calculator", props: {} },
  },
};

export default earningByCountry;