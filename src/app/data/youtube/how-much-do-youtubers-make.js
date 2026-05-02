const youtubersMake = {
    en: {
      meta: {
        slug: "how-much-do-youtubers-make",
        title: "How Much Do YouTubers Actually Make? | Forevault",
        description:
          "Understand how much YouTubers actually make using RPM, niche, geography, retention, and video length benchmarks.",
      },
  
      tool: {
        type: "calculator",
        props: { mode: "standard" },
      },
  
      hero: {
        eyebrow: "Understanding creator earnings",
        title: "How much do YouTubers actually make?",
        lead: [
          "The question gets asked constantly, partly because YouTube income looks like a simple relationship — more views, more money. But that model breaks almost immediately once you look at how the revenue actually gets calculated. Two creators with comparable monthly numbers can end up in genuinely different financial situations, and neither of them is doing anything wrong.",
          "What makes creator income hard to generalize is that multiple variables compound each other: niche affects advertiser demand, geography affects bid rates, retention affects how much inventory gets served, format determines which monetization model applies. Change one variable significantly and the whole output shifts.",
          "This page is an attempt to explain that structure clearly — including where the estimates on this topic (including ours) tend to be unreliable, and what the realistic spread of outcomes looks like for different kinds of channels.",
          "Note on sourcing: the ranges below draw from creator-reported benchmarks and ad market observations. They are not official YouTube figures and do not represent any individual channel's guaranteed outcome.",
        ],
      },
  
      stats: [
        { value: "80+", label: "Countries in the model" },
        { value: "50+", label: "Niches with RPM ranges" },
        { value: "12", label: "Display currencies" },
        { value: "±20%", label: "Typical estimate range" },
      ],
  
      sections: [
        {
          title: "The variables behind the income gap",
          blocks: [
            {
              type: "text",
              value:
                "These are not minor adjustments to a base rate. Each one can substantially change what a creator earns from the same number of views.",
            },
            {
              type: "card-grid",
              cards: [
                {
                  title: "RPM — the real income metric",
                  body: "RPM is what creators actually keep per 1,000 views after YouTube takes its share. Understanding this number is more important than views for income planning. A channel can have impressive view counts and still have a weak RPM if the audience geography is unfavorable or if not many views convert into monetized impressions.",
                },
                {
                  title: "CPM — advertiser cost, not creator payout",
                  body: "CPM is what advertisers pay before YouTube takes its cut. It reflects advertiser demand in a given niche and market. A high CPM screenshot does not tell you a creator's income — it tells you what the advertisers were bidding.",
                },
                {
                  title: "Why niche drives the spread",
                  body: "The topic creates a specific audience, and advertisers value those audiences differently. Finance, business, software, and legal content attracts bids from advertisers with large customer acquisition budgets. Gaming and lifestyle content can still build large audiences, but advertiser competition is usually lower.",
                },
                {
                  title: "Why geography changes outcomes",
                  body: "Audience location is one of the variables most income comparisons omit. Views from the US, UK, Canada, or Australia typically generate higher RPM because advertiser budgets and competition in those markets are stronger.",
                },
                {
                  title: "How retention affects ad delivery",
                  body: "Retention's most discussed role is algorithmic — better watch time helps with distribution. Its effect on direct revenue is mentioned less: more watch time means more ad placements can realistically be served per view.",
                },
                {
                  title: "Video length and the 8-minute threshold",
                  body: "Once a long-form video crosses 8 minutes, mid-roll placements become an option. That one variable can shift revenue notably on a video with solid retention. It does not automatically mean longer is better.",
                },
                {
                  title: "Shorts — a separate monetization structure",
                  body: "Shorts do not use the standard ad auction model. They draw from a pooled revenue fund distributed by watch time proportion. The effective RPM is typically far below long-form, which means Shorts and long-form operate in different monetization systems.",
                },
              ],
            },
          ],
        },
  
        {
          title: "Where income estimates go wrong — including this one",
          blocks: [
            {
              type: "text",
              value:
                "Most income numbers online are incomplete in ways that are hard to spot unless you know what to look for.",
            },
            {
              type: "text",
              value:
                "A common problem is that CPM gets presented as if it were RPM. Someone posts a screenshot of their CPM — the advertiser-side number — and implies or directly states that is what they earned. It is not. CPM is always higher than RPM because it is pre-cut.",
            },
            {
              type: "text",
              value:
                "Geography gets omitted constantly. A creator with 90% US traffic showing their RPM is not providing a benchmark that generalizes to someone with 60% international traffic. Those are different channels in different monetization environments, even if the view counts match.",
            },
            {
              type: "text",
              value:
                "Screenshot culture compounds this. One excellent month circulates widely. The months below or above it do not. The result is that a large portion of income reference points in creator communities are from outlier periods rather than typical performance.",
            },
            {
              type: "text",
              value:
                "Our own estimates carry similar limitations. They reflect observed patterns, not individual channel guarantees. Ad market shifts, policy changes, and audience behavior changes can all move results in ways a benchmark model cannot anticipate.",
            },
          ],
        },
  
        {
          title: "What the income spread actually looks like",
          blocks: [
            {
              type: "text",
              value:
                "These scenarios are not perfectly comparable by design — real channels never are. They illustrate how the same view count produces very different revenue under different conditions.",
            },
            {
              type: "card-grid",
              cards: [
                {
                  title: "US finance channel — 100K views, 9-minute video",
                  body: "Around 52% retention, mostly US traffic. A realistic RPM range in this configuration is roughly $8 to $18. Revenue: approximately $800 to $1,800, potentially higher during Q4 when ad spending intensifies.",
                },
                {
                  title: "Gaming channel — 100K views, geographically distributed",
                  body: "Lower advertiser competition in the gaming space plus a broader geographic mix typically pushes RPM to around $1.50–$4.00. Revenue: roughly $150 to $400.",
                },
                {
                  title: "Education / software tutorial — 100K views, mixed Tier-1 audience",
                  body: "An 11-minute tutorial with about 48% retention and audience split across US, UK, Canada, and elsewhere. RPM in this range can vary more than most expect — anywhere from $4 to $10 is plausible.",
                },
              ],
            },
          ],
        },
  
        {
          title: "The practical errors behind bad income estimates",
          blocks: [
            {
              type: "list",
              items: [
                "Estimating from view count alone — views are the output, not the driver.",
                "Confusing CPM with RPM — one is advertiser cost, the other is creator payout.",
                "Ignoring traffic geography — country mix can swing revenue by several multiples at identical view counts.",
                "Treating a single screenshot as a typical outcome — short-term performance spikes do not describe a channel's actual earning pattern.",
              ],
            },
          ],
        },
  
        {
          title: "Common misconceptions about what YouTubers make",
          blocks: [
            {
              type: "list",
              items: [
                "\"More views always means more money\" is an oversimplification — niche, geography, retention, and format can each change the value of those views substantially.",
                "CPM is not what creators earn — CPM is advertiser-side pricing. RPM is much closer to the creator payout.",
                "Shorts revenue works differently — Shorts use a pooled fund model, not the ad auction that applies to long-form.",
                "Longer videos are not automatically better for revenue — extra duration only improves earnings when retention holds and the additional runtime creates real ad inventory.",
              ],
            },
          ],
        },
  
        {
          title: "Methodology and realistic limits",
          blocks: [
            {
              type: "text",
              value:
                "The ranges on this page combine market-side pricing patterns with creator-reported performance data, then translated into scenario ranges that reflect actual variation rather than tidy averages. They are most useful as comparative tools — understanding why different channel types perform differently — rather than as precise forecasts.",
            },
            {
              type: "text",
              value:
                "Ad demand, seasonality, and YouTube policy changes can all shift outcomes faster than any benchmark model can track. If you have your own YouTube Studio data, those numbers will always be more accurate than these estimates for your specific channel.",
            },
          ],
        },
      ],
  
      ctas: [
        {
          icon: "◈",
          label: "Revenue Calculator",
          description: "Estimate earnings across all variables",
          href: "/youtube/revenue-calculator",
        },
        {
          icon: "◎",
          label: "RPM by Country",
          description: "Compare country premiums directly",
          href: "/youtube/rpm-calculator-by-country",
        },
        // Removed the "Why is my RPM low?" link as requested
      ],
  
      related: [
        { slug: "youtube-rpm-usa", label: "YouTube RPM in the USA" },
        { slug: "youtube-rpm-finance", label: "YouTube RPM for Finance" },
        { slug: "what-is-a-good-youtube-rpm", label: "What is a good YouTube RPM?" },
      ],
  
      faq: [
        {
          q: "How accurate is this calculator?",
          a: "It gives a planning range, not a guaranteed payout. The model uses observed RPM ranges by niche with adjustments for geography, format, length, and retention. It is most useful for direction and comparison. Your real Studio numbers, once you have them, will always outperform this model for your specific channel.",
        },
        {
          q: "What is the difference between RPM and CPM on YouTube?",
          a: "CPM is what advertisers pay before YouTube takes its cut. RPM is what the creator actually keeps per 1,000 views. If you want the more realistic income metric, use RPM.",
        },
        {
          q: "Why do Shorts pay less than long-form videos?",
          a: "Because Shorts use a different economic model built around a shared revenue pool, not individual ad auctions. Reach can be excellent with Shorts; direct ad revenue per view is usually much lower than long-form.",
        },
        {
          q: "Which YouTube niche has the best RPM?",
          a: "Finance, investing, software, real estate, law, and some business topics often sit near the top because those audiences are more commercially valuable to advertisers.",
        },
        {
          q: "Does video length really change revenue?",
          a: "Yes. Once a video passes 8 minutes, mid-roll ads become possible. That can help revenue materially, assuming viewers stay engaged.",
        },
        {
          q: "How does audience geography influence revenue?",
          a: "Significantly. Viewers from the US, UK, Canada, and similar high-value markets often generate stronger RPM because advertisers bid more aggressively there.",
        },
        {
          q: "What retention rate should I enter?",
          a: "If you do not have your own analytics yet, 45% is a solid long-form starting point. Then update it with your real Studio numbers.",
        },
        {
          q: "Is the calculator free?",
          a: "Yes. It is free, no account required, and the estimate runs locally in the browser.",
        },
      ],
  
      disclaimer:
        "Forevault estimates rely on aggregated creator benchmarks and market data. Real AdSense earnings still move with ad demand, seasonality, geography, ad blockers, policy shifts, and plain old video-to-video variance. This content is for planning and education only, not financial advice. See our Terms of Use and Privacy Policy.",
  
      toolHint: "This page explains how the calculator works and why earnings vary so much.",
    },
  
    fr: {
      meta: {
        slug: "how-much-do-youtubers-make",
        title: "Combien gagnent vraiment les YouTubeurs ? | Forevault",
        description:
          "Comprenez combien gagnent réellement les YouTubeurs grâce au RPM, à la niche, à la géographie et à la rétention.",
      },
      tool: { type: "calculator", props: { mode: "standard" } },
      hero: {
        eyebrow: "Comprendre les revenus des créateurs",
        title: "Combien gagnent vraiment les YouTubeurs ?",
        lead: [
          "La question revient sans cesse, parce que les revenus YouTube semblent suivre une logique simple : plus de vues, plus d’argent. En réalité, ce raisonnement s’effondre très vite dès qu’on regarde comment les revenus sont réellement calculés.",
          "Deux créateurs avec des chiffres mensuels proches peuvent se retrouver dans des situations financières très différentes, et aucun des deux ne fait forcément quelque chose de mal.",
          "Ce qui rend les revenus difficiles à généraliser, c’est que plusieurs variables s’additionnent : la niche influence la demande publicitaire, la géographie influence les enchères, la rétention influence l’inventaire publicitaire servi, et le format détermine le modèle de monétisation applicable.",
          "Les estimations ci-dessous s’appuient sur des benchmarks de créateurs et des observations du marché publicitaire. Elles ne sont pas officielles et ne garantissent aucun résultat individuel.",
        ],
      },
      stats: [
        { value: "80+", label: "Pays modélisés" },
        { value: "50+", label: "Niches avec fourchettes RPM" },
        { value: "12", label: "Devises affichées" },
        { value: "±20%", label: "Fourchette typique" },
      ],
      sections: [
        {
          title: "Les variables derrière l’écart de revenus",
          blocks: [
            {
              type: "text",
              value:
                "Ce ne sont pas de petits ajustements sur un taux de base. Chacun peut modifier fortement ce qu’un créateur gagne pour un même volume de vues.",
            },
            {
              type: "card-grid",
              cards: [
                {
                  title: "RPM — la vraie métrique de revenu",
                  body: "Le RPM est ce qu’un créateur conserve par 1 000 vues après la part de YouTube. C’est la métrique la plus utile pour planifier des revenus.",
                },
                {
                  title: "CPM — coût annonceur, pas revenu créateur",
                  body: "Le CPM correspond à ce que paient les annonceurs avant la coupe de YouTube. Il reflète la demande publicitaire, pas le paiement final du créateur.",
                },
                {
                  title: "Pourquoi la niche change l’écart",
                  body: "Finance, business, logiciel ou juridique attirent des enchères plus élevées que gaming ou lifestyle.",
                },
                {
                  title: "Pourquoi la géographie change les résultats",
                  body: "Les vues provenant des États-Unis, du Royaume-Uni, du Canada ou de l’Australie génèrent en général un RPM plus élevé.",
                },
                {
                  title: "Comment la rétention influence la diffusion des pubs",
                  body: "Plus de temps de visionnage signifie davantage d’opportunités publicitaires réellement servies par vue.",
                },
                {
                  title: "Durée vidéo et seuil des 8 minutes",
                  body: "Au-delà de 8 minutes, les mid-rolls deviennent possibles. Cela peut faire grimper le revenu si la rétention reste bonne.",
                },
                {
                  title: "Shorts — un modèle séparé",
                  body: "Les Shorts fonctionnent avec un fonds de revenus mutualisé, pas avec le même modèle d’enchères que les longues vidéos.",
                },
              ],
            },
          ],
        },
        {
          title: "Là où les estimations se trompent — y compris celle-ci",
          blocks: [
            {
              type: "text",
              value:
                "La plupart des chiffres de revenus en ligne sont incomplets d’une manière qu’on ne remarque pas toujours tout de suite.",
            },
            {
              type: "text",
              value:
                "Un problème fréquent consiste à présenter le CPM comme s’il s’agissait du RPM. Le CPM est le chiffre côté annonceur, avant la part de YouTube. Ce n’est pas le revenu réel du créateur.",
            },
            {
              type: "text",
              value:
                "La géographie est souvent omise. Un créateur avec 90% de trafic US ne fournit pas un benchmark généralisable à quelqu’un dont 60% de l’audience est internationale.",
            },
            {
              type: "text",
              value:
                "La culture du screenshot aggrave le problème. Un excellent mois circule partout, mais pas les mois moyens. Beaucoup de points de référence sont donc des exceptions, pas des normes.",
            },
            {
              type: "text",
              value:
                "Nos propres estimations ont les mêmes limites : elles reflètent des tendances observées, pas des garanties individuelles.",
            },
          ],
        },
        {
          title: "À quoi ressemble vraiment l’écart de revenus",
          blocks: [
            {
              type: "text",
              value:
                "Ces scénarios ne sont pas parfaitement comparables par conception : les chaînes réelles ne le sont jamais.",
            },
            {
              type: "card-grid",
              cards: [
                {
                  title: "Chaîne finance US — 100K vues, vidéo de 9 minutes",
                  body: "Avec environ 52% de rétention et un public majoritairement américain, le RPM réaliste se situe souvent entre 8$ et 18$. Le revenu se situe alors autour de 800$ à 1 800$.",
                },
                {
                  title: "Chaîne gaming — 100K vues, audience dispersée",
                  body: "La concurrence publicitaire plus faible et une audience géographiquement plus variée font descendre le RPM autour de 1,50$ à 4,00$. Revenu : environ 150$ à 400$.",
                },
                {
                  title: "Tutoriel éducation / logiciel — 100K vues",
                  body: "Une vidéo de 11 minutes avec environ 48% de rétention et une audience répartie entre US, UK, Canada et autres marchés de niveau 1 peut varier entre 4$ et 10$ de RPM.",
                },
              ],
            },
          ],
        },
        {
          title: "Les erreurs pratiques derrière les mauvaises estimations",
          blocks: [
            {
              type: "list",
              items: [
                "Estimer à partir des vues seules — les vues sont le résultat, pas le moteur.",
                "Confondre CPM et RPM — l’un est le coût annonceur, l’autre est le revenu créateur.",
                "Ignorer la géographie du trafic — la répartition par pays peut multiplier les revenus.",
                "Prendre un seul screenshot comme résultat typique — les pics ne décrivent pas un canal.",
              ],
            },
          ],
        },
        {
          title: "Idées reçues fréquentes sur les revenus YouTube",
          blocks: [
            {
              type: "list",
              items: [
                "« Plus de vues = plus d’argent » est une simplification excessive.",
                "Le CPM n’est pas ce que gagne le créateur.",
                "Les Shorts fonctionnent différemment et rapportent généralement moins par vue.",
                "Les vidéos plus longues ne sont pas automatiquement meilleures : la rétention doit suivre.",
              ],
            },
          ],
        },
        {
          title: "Méthodologie et limites réalistes",
          blocks: [
            {
              type: "text",
              value:
                "Les fourchettes de cette page combinent des patterns de marché et des données rapportées par des créateurs, puis les traduisent en scénarios qui reflètent la vraie variation plutôt qu’une moyenne trop propre.",
            },
            {
              type: "text",
              value:
                "La demande publicitaire, la saisonnalité et les changements de politique YouTube peuvent faire bouger les résultats plus vite qu’un modèle de référence ne peut le suivre.",
            },
          ],
        },
      ],
      ctas: [
        {
          icon: "◈",
          label: "Calculateur de revenus",
          description: "Estimez les revenus avec toutes les variables",
          href: "/youtube/revenue-calculator",
        },
        {
          icon: "◎",
          label: "RPM par pays",
          description: "Comparez directement les pays",
          href: "/youtube/rpm-calculator-by-country",
        },
        // Supprimé le lien "Pourquoi mon RPM est bas ?" conformément à l'instruction
      ],
      related: [
        { slug: "youtube-rpm-usa", label: "RPM YouTube aux États-Unis" },
        { slug: "youtube-rpm-finance", label: "RPM YouTube Finance" },
        { slug: "what-is-a-good-youtube-rpm", label: "Qu’est-ce qu’un bon RPM YouTube ?" },
      ],
      faq: [
        {
          q: "Quelle est la précision de ce calculateur ?",
          a: "Il donne une fourchette de planification, pas un paiement garanti. Le modèle utilise des plages de RPM observées selon la niche, avec des ajustements pour la géographie, le format, la durée et la rétention.",
        },
        {
          q: "Quelle est la différence entre RPM et CPM sur YouTube ?",
          a: "Le CPM est ce que paient les annonceurs avant la part de YouTube. Le RPM est ce que le créateur conserve réellement par 1 000 vues.",
        },
        {
          q: "Pourquoi les Shorts paient-ils moins que les vidéos longues ?",
          a: "Parce qu’ils utilisent un modèle différent fondé sur un fonds mutualisé, pas sur des enchères publicitaires individuelles.",
        },
        {
          q: "Quelle niche YouTube a le meilleur RPM ?",
          a: "La finance, l’investissement, le logiciel, l’immobilier, le droit et certaines niches business sont souvent en haut du classement.",
        },
        {
          q: "La durée vidéo change-t-elle vraiment les revenus ?",
          a: "Oui. Au-delà de 8 minutes, les mid-rolls deviennent possibles, ce qui peut augmenter les revenus si la rétention reste bonne.",
        },
        {
          q: "Comment la géographie de l’audience influence-t-elle les revenus ?",
          a: "Les audiences en provenance des marchés à fort pouvoir d’achat génèrent souvent un RPM plus élevé.",
        },
        {
          q: "Quel taux de rétention dois-je entrer ?",
          a: "Si vous n’avez pas encore vos analytics, 45% est une bonne base de départ pour du long format.",
        },
        {
          q: "Le calculateur est-il gratuit ?",
          a: "Oui. Il est gratuit, sans compte, et le calcul se fait localement dans le navigateur.",
        },
      ],
      disclaimer:
        "Les estimations Forevault reposent sur des benchmarks agrégés de créateurs et des données de marché. Les revenus AdSense réels varient avec la demande pub, la saisonnalité, la géographie, les bloqueurs de pub, les changements de politique et la variance vidéo par vidéo. Ce contenu est destiné à la planification et à l’éducation, pas à un conseil financier.",
      toolHint: "Cette page explique comment le calculateur fonctionne et pourquoi les revenus varient autant.",
    },
  
    es: {
      meta: {
        slug: "how-much-do-youtubers-make",
        title: "¿Cuánto ganan realmente los YouTubers? | Forevault",
        description:
          "Entiende cuánto ganan realmente los YouTubers con RPM, nicho, geografía, retención y duración de video.",
      },
      tool: { type: "calculator", props: { mode: "standard" } },
      hero: {
        eyebrow: "Entendiendo los ingresos de creadores",
        title: "¿Cuánto ganan realmente los YouTubers?",
        lead: [
          "La pregunta aparece constantemente porque los ingresos de YouTube parecen seguir una lógica simple: más vistas, más dinero. Pero esa idea se rompe enseguida cuando miras cómo se calculan realmente los ingresos.",
          "Dos creadores con cifras mensuales parecidas pueden terminar en situaciones financieras muy distintas, y eso no significa que uno esté haciendo algo mal.",
          "Lo difícil de generalizar es que varias variables se combinan: el nicho afecta la demanda publicitaria, la geografía afecta las pujas, la retención afecta cuántos anuncios se sirven y el formato determina el modelo de monetización.",
          "Las estimaciones de esta página se basan en benchmarks de creadores y observaciones del mercado publicitario. No son cifras oficiales de YouTube ni garantizan un resultado individual.",
        ],
      },
      stats: [
        { value: "80+", label: "Países modelados" },
        { value: "50+", label: "Nichos con rangos RPM" },
        { value: "12", label: "Monedas mostradas" },
        { value: "±20%", label: "Rango típico" },
      ],
      sections: [
        {
          title: "Las variables detrás de la diferencia de ingresos",
          blocks: [
            {
              type: "text",
              value:
                "No son pequeños ajustes sobre una tarifa base. Cada variable puede cambiar de forma notable lo que gana un creador con el mismo número de vistas.",
            },
            {
              type: "card-grid",
              cards: [
                { title: "RPM — la métrica real", body: "El RPM es lo que el creador conserva por cada 1.000 vistas después de la parte de YouTube." },
                { title: "CPM — coste del anunciante", body: "El CPM es lo que pagan los anunciantes antes del recorte de YouTube." },
                { title: "Por qué el nicho cambia el rango", body: "Finanzas, negocios, software y legal suelen atraer pujas más altas que gaming o lifestyle." },
                { title: "Por qué la geografía cambia el resultado", body: "Las vistas de EE. UU., Reino Unido, Canadá o Australia suelen generar un RPM más alto." },
                { title: "Cómo la retención afecta la entrega de anuncios", body: "Más tiempo de visionado permite servir más anuncios por vista." },
                { title: "Duración y umbral de 8 minutos", body: "Superar los 8 minutos permite mid-rolls, lo que puede aumentar los ingresos." },
                { title: "Shorts — un sistema distinto", body: "Los Shorts funcionan con un fondo compartido, no con el mismo modelo que el formato largo." },
              ],
            },
          ],
        },
        {
          title: "Dónde fallan las estimaciones",
          blocks: [
            { type: "text", value: "Muchos números de ingresos online están incompletos y eso no siempre se nota a primera vista." },
            { type: "text", value: "Un error frecuente es presentar CPM como si fuera RPM. No es lo mismo." },
            { type: "text", value: "La geografía también suele omitirse: un canal con 90% de tráfico de EE. UU. no sirve como benchmark universal." },
            { type: "text", value: "La cultura del screenshot empeora el problema porque difunde meses excepcionales como si fueran normales." },
            { type: "text", value: "Nuestras propias estimaciones también tienen límites: reflejan patrones observados, no garantías individuales." },
          ],
        },
        {
          title: "Cómo se ve realmente la dispersión de ingresos",
          blocks: [
            { type: "text", value: "Estos escenarios no son perfectamente comparables porque los canales reales nunca lo son." },
            {
              type: "card-grid",
              cards: [
                { title: "Canal de finanzas USA — 100K vistas, video de 9 minutos", body: "RPM aproximado de 8$ a 18$, con ingresos de 800$ a 1.800$." },
                { title: "Canal gaming — 100K vistas, audiencia distribuida", body: "RPM de 1,50$ a 4,00$, con ingresos de 150$ a 400$." },
                { title: "Tutorial educativo / software — 100K vistas", body: "RPM de 4$ a 10$, con ingresos de 400$ a 1.000$." },
              ],
            },
          ],
        },
        {
          title: "Errores prácticos detrás de malas estimaciones",
          blocks: [
            {
              type: "list",
              items: [
                "Estimar solo a partir de las vistas.",
                "Confundir CPM con RPM.",
                "Ignorar la geografía del tráfico.",
                "Tomar una sola captura como resultado típico.",
              ],
            },
          ],
        },
        {
          title: "Ideas equivocadas comunes",
          blocks: [
            {
              type: "list",
              items: [
                "«Más vistas siempre significa más dinero» es demasiado simple.",
                "El CPM no es lo que gana el creador.",
                "Shorts funciona de forma distinta y suele pagar menos por vista.",
                "Los videos más largos no son automáticamente mejores si la retención cae.",
              ],
            },
          ],
        },
        {
          title: "Metodología y límites realistas",
          blocks: [
            {
              type: "text",
              value:
                "Los rangos de esta página combinan patrones del mercado publicitario con datos reportados por creadores, y los convierten en escenarios que reflejan variación real en lugar de promedios demasiado limpios.",
            },
            {
              type: "text",
              value:
                "La demanda publicitaria, la estacionalidad y los cambios de política de YouTube pueden mover los resultados más rápido de lo que cualquier modelo de referencia puede seguir.",
            },
          ],
        },
      ],
      ctas: [
        { icon: "◈", label: "Calculadora de ingresos", description: "Estima ingresos con todas las variables", href: "/youtube/revenue-calculator" },
        { icon: "◎", label: "RPM por país", description: "Compara directamente el país", href: "/youtube/rpm-calculator-by-country" },
        // Eliminado el enlace "¿Por qué mi RPM es bajo?" según la instrucción
      ],
      related: [
        { slug: "youtube-rpm-usa", label: "RPM de YouTube en EE. UU." },
        { slug: "youtube-rpm-finance", label: "RPM de YouTube para finanzas" },
        { slug: "what-is-a-good-youtube-rpm", label: "¿Qué es un buen RPM de YouTube?" },
      ],
      faq: [
        { q: "¿Qué tan precisa es esta calculadora?", a: "Da un rango de planificación, no un pago garantizado." },
        { q: "¿Cuál es la diferencia entre RPM y CPM en YouTube?", a: "CPM es el coste para el anunciante; RPM es lo que conserva el creador por cada 1.000 vistas." },
        { q: "¿Por qué Shorts paga menos que el formato largo?", a: "Porque usa un modelo basado en fondo compartido." },
        { q: "¿Qué nicho tiene el mejor RPM?", a: "Finanzas, inversión, software, bienes raíces y derecho suelen estar arriba." },
        { q: "¿La duración del video cambia los ingresos?", a: "Sí. Superar los 8 minutos permite mid-rolls." },
        { q: "¿Cómo influye la geografía de la audiencia?", a: "Los mercados con más valor publicitario suelen dar un RPM más alto." },
        { q: "¿Qué retención debo poner?", a: "Si no tienes datos, 45% es una base razonable para formato largo." },
        { q: "¿La calculadora es gratis?", a: "Sí, es gratis, sin cuenta y se ejecuta localmente en el navegador." },
      ],
      disclaimer:
        "Las estimaciones de Forevault se basan en benchmarks agregados y datos de mercado. Los ingresos reales de AdSense varían con la demanda publicitaria, la estacionalidad, la geografía, los bloqueadores de anuncios, los cambios de política y la variación vídeo a vídeo.",
      toolHint: "Esta página explica cómo funciona la calculadora y por qué los ingresos varían tanto.",
    },
  
    de: {
      meta: {
        slug: "how-much-do-youtubers-make",
        title: "Wie viel verdienen YouTuber wirklich? | Forevault",
        description:
          "Verstehe, wie viel YouTuber wirklich verdienen – mit RPM, Nische, Geografie, Retention und Videolänge.",
      },
      tool: { type: "calculator", props: { mode: "standard" } },
      hero: {
        eyebrow: "Creator-Einnahmen verstehen",
        title: "Wie viel verdienen YouTuber wirklich?",
        lead: [
          "Die Frage taucht ständig auf, weil YouTube-Einnahmen auf den ersten Blick einfach wirken: mehr Views, mehr Geld. Dieses Modell bricht aber schnell zusammen, sobald man sieht, wie die Einnahmen wirklich berechnet werden.",
          "Zwei Creator mit ähnlichen Monatszahlen können in völlig unterschiedlichen finanziellen Situationen landen, ohne dass einer von ihnen etwas falsch macht.",
          "Das Problem bei pauschalen Aussagen ist, dass mehrere Variablen gleichzeitig wirken: die Nische beeinflusst die Werbenachfrage, die Geografie beeinflusst die Gebote, die Retention beeinflusst die ausgelieferte Werbeinventur und das Format bestimmt das Monetarisierungsmodell.",
          "Die Schätzungen auf dieser Seite basieren auf Creator-Benchmarks und Beobachtungen des Werbemarktes. Sie sind keine offiziellen YouTube-Werte und keine Garantie für einzelne Kanäle.",
        ],
      },
      stats: [
        { value: "80+", label: "Modellierte Länder" },
        { value: "50+", label: "Nischen mit RPM-Spannen" },
        { value: "12", label: "Angezeigte Währungen" },
        { value: "±20%", label: "Typische Spanne" },
      ],
      sections: [
        {
          title: "Die Variablen hinter der Einnahmenlücke",
          blocks: [
            {
              type: "text",
              value:
                "Das sind keine kleinen Anpassungen an einer Basisrate. Jede einzelne Variable kann das Einkommen bei gleicher View-Zahl deutlich verändern.",
            },
            {
              type: "card-grid",
              cards: [
                { title: "RPM — die echte Einkommensmetrik", body: "RPM ist das, was Creator pro 1.000 Views nach YouTubes Anteil tatsächlich behalten." },
                { title: "CPM — Werbekosten, nicht Creator-Einnahmen", body: "CPM ist der Preis, den Werbetreibende vor YouTubes Anteil zahlen." },
                { title: "Warum die Nische die Spanne bestimmt", body: "Finance, Business, Software und Recht ziehen meist höhere Gebote an als Gaming oder Lifestyle." },
                { title: "Warum Geografie die Ergebnisse verändert", body: "Views aus den USA, Großbritannien, Kanada oder Australien erzeugen meist höhere RPMs." },
                { title: "Wie Retention die Werbeauslieferung beeinflusst", body: "Mehr Watchtime bedeutet mehr realistisch auslieferbare Anzeigen pro View." },
                { title: "Videolänge und die 8-Minuten-Schwelle", body: "Ab 8 Minuten werden Mid-Rolls möglich, was die Einnahmen steigern kann." },
                { title: "Shorts — ein separates Modell", body: "Shorts laufen über einen gemeinsamen Revenue-Pool, nicht über dasselbe Modell wie Longform." },
              ],
            },
          ],
        },
        {
          title: "Wo Schätzungen schiefgehen",
          blocks: [
            { type: "text", value: "Viele Einnahmenzahlen online sind unvollständig und das fällt nicht immer sofort auf." },
            { type: "text", value: "Ein häufiger Fehler ist, CPM als RPM darzustellen. Das ist nicht dasselbe." },
            { type: "text", value: "Auch die Geografie wird oft weggelassen: Ein Kanal mit 90% US-Traffic ist kein universeller Maßstab." },
            { type: "text", value: "Screenshot-Kultur verschärft das Problem, weil Ausnahmemonate als Normalfall wirken." },
            { type: "text", value: "Auch unsere Schätzungen haben Grenzen: Sie zeigen beobachtete Muster, keine individuellen Garantien." },
          ],
        },
        {
          title: "Wie die Einkommensspanne wirklich aussieht",
          blocks: [
            { type: "text", value: "Diese Szenarien sind absichtlich nicht perfekt vergleichbar, weil reale Kanäle es auch nicht sind." },
            {
              type: "card-grid",
              cards: [
                { title: "US-Finanzkanal — 100K Views, 9 Minuten", body: "RPM etwa 8$ bis 18$, Einnahmen rund 800$ bis 1.800$." },
                { title: "Gaming-Kanal — 100K Views, geografisch verteilt", body: "RPM etwa 1,50$ bis 4,00$, Einnahmen rund 150$ bis 400$." },
                { title: "Education / Software Tutorial — 100K Views", body: "RPM etwa 4$ bis 10$, Einnahmen rund 400$ bis 1.000$." },
              ],
            },
          ],
        },
        {
          title: "Praktische Fehler hinter schlechten Schätzungen",
          blocks: [
            {
              type: "list",
              items: [
                "Nur anhand der Views schätzen.",
                "CPM und RPM verwechseln.",
                "Die Geografie des Traffics ignorieren.",
                "Ein einzelnes Screenshot-Ergebnis als typisch ansehen.",
              ],
            },
          ],
        },
        {
          title: "Häufige Irrtümer über YouTube-Einnahmen",
          blocks: [
            {
              type: "list",
              items: [
                "Mehr Views = mehr Geld ist zu simpel.",
                "CPM ist nicht das, was Creator verdienen.",
                "Shorts funktioniert anders und zahlt pro View meist weniger.",
                "Längere Videos sind nicht automatisch besser, wenn die Retention sinkt.",
              ],
            },
          ],
        },
        {
          title: "Methodik und realistische Grenzen",
          blocks: [
            {
              type: "text",
              value:
                "Die Spannen auf dieser Seite kombinieren Marktpreise mit Creator-Berichten und formen daraus Szenarien, die echte Variation widerspiegeln statt zu glatte Durchschnittswerte.",
            },
            {
              type: "text",
              value:
                "Werbenachfrage, Saisonalität und YouTube-Policy-Änderungen können Ergebnisse schneller verschieben, als es ein Benchmark-Modell abbilden kann.",
            },
          ],
        },
      ],
      ctas: [
        { icon: "◈", label: "Einnahmenrechner", description: "Einnahmen mit allen Variablen schätzen", href: "/youtube/revenue-calculator" },
        { icon: "◎", label: "RPM nach Land", description: "Länder direkt vergleichen", href: "/youtube/rpm-calculator-by-country" },
        // Entfernt den Link "Warum ist mein RPM niedrig?" gemäß Anweisung
      ],
      related: [
        { slug: "youtube-rpm-usa", label: "YouTube RPM in den USA" },
        { slug: "youtube-rpm-finance", label: "YouTube RPM für Finance" },
        { slug: "what-is-a-good-youtube-rpm", label: "Was ist ein guter YouTube RPM?" },
      ],
      faq: [
        { q: "Wie genau ist dieser Rechner?", a: "Er liefert eine Planungs-Spanne, keine garantierte Auszahlung." },
        { q: "Was ist der Unterschied zwischen RPM und CPM auf YouTube?", a: "CPM ist der Preis für Werbetreibende; RPM ist das, was Creator behalten." },
        { q: "Warum zahlen Shorts weniger als Longform?", a: "Weil Shorts auf einem gemeinsamen Revenue-Pool basieren." },
        { q: "Welche Nische hat den besten RPM?", a: "Finance, Investing, Software, Immobilien und Recht liegen oft oben." },
        { q: "Ändert Videolänge wirklich die Einnahmen?", a: "Ja. Über 8 Minuten werden Mid-Rolls möglich." },
        { q: "Wie beeinflusst Geografie die Einnahmen?", a: "Märkte mit höherem Werbewert erzeugen meist höheren RPM." },
        { q: "Welche Retention soll ich eingeben?", a: "Ohne eigene Daten ist 45% ein sinnvoller Startwert für Longform." },
        { q: "Ist der Rechner kostenlos?", a: "Ja, kostenlos, ohne Account, direkt im Browser." },
      ],
      disclaimer:
        "Forevault-Schätzungen basieren auf aggregierten Creator-Benchmarks und Marktdaten. Reale AdSense-Einnahmen schwanken mit Werbenachfrage, Saisonalität, Geografie, Adblockern, Policy-Änderungen und Video-zu-Video-Varianz.",
      toolHint: "Diese Seite erklärt, wie der Rechner funktioniert und warum Einnahmen so stark variieren.",
    },
  
    ja: {
      meta: {
        slug: "how-much-do-youtubers-make",
        title: "YouTuberは実際いくら稼ぐのか | Forevault",
        description:
          "RPM、ジャンル、地域、視聴維持率、動画の長さを使ってYouTuberの収益を理解します。",
      },
      tool: { type: "calculator", props: { mode: "standard" } },
      hero: {
        eyebrow: "クリエイター収益を理解する",
        title: "YouTuberは実際いくら稼ぐのか",
        lead: [
          "「再生回数が増えれば収益も増える」という単純な考え方は、YouTube収益の仕組みを見た瞬間に崩れます。",
          "月間の数字が似ていても、収益面では大きく違う結果になることがあります。",
          "その理由は複数の要素が同時に作用するからです。ジャンルは広告需要に、地域は入札額に、維持率は配信できる広告量に、形式は収益モデルに影響します。",
          "このページの数値は、クリエイターのベンチマークと広告市場の観測に基づくもので、公式のYouTube値ではありません。",
        ],
      },
      stats: [
        { value: "80+", label: "対象国" },
        { value: "50+", label: "RPMレンジ付きニッチ" },
        { value: "12", label: "表示通貨" },
        { value: "±20%", label: "一般的な範囲" },
      ],
      sections: [
        {
          title: "収益差を生む要因",
          blocks: [
            { type: "text", value: "これは小さな補正ではありません。同じ再生数でも収益は大きく変わります。" },
            {
              type: "card-grid",
              cards: [
                { title: "RPM", body: "YouTubeの取り分を差し引いた後、1,000再生あたりにクリエイターが受け取る金額です。" },
                { title: "CPM", body: "広告主が支払う金額で、クリエイター収益そのものではありません。" },
                { title: "ジャンル", body: "Finance、Business、Software、Legalは高くなりやすいです。" },
                { title: "地域", body: "米国、英国、カナダ、豪州の視聴者はRPMが高くなりやすいです。" },
                { title: "維持率", body: "視聴維持率が高いほど、広告配信の機会が増えます。" },
                { title: "8分の境界", body: "8分を超えるとミッドロール広告が可能になります。" },
                { title: "Shorts", body: "Shortsは長尺と別のプール型モデルで収益化されます。" },
              ],
            },
          ],
        },
        {
          title: "推定が外れやすい場所",
          blocks: [
            { type: "text", value: "オンラインの収益数値は、不完全な形で共有されることが多いです。" },
            { type: "text", value: "CPMをRPMのように見せる誤りはとても多いです。" },
            { type: "text", value: "地域情報が抜けたままでは、参考値として十分ではありません。" },
            { type: "text", value: "スクリーンショット文化は、例外的な月を標準のように見せてしまいます。" },
            { type: "text", value: "このページの推定も、個別の保証ではなく観測パターンに基づくものです。" },
          ],
        },
        {
          title: "実際の収益差のイメージ",
          blocks: [
            { type: "text", value: "実際のチャンネルは条件が揃っていないため、完全な比較にはなりません。" },
            {
              type: "card-grid",
              cards: [
                { title: "米国向けFinanceチャンネル — 10万再生", body: "RPMは約8〜18ドル、収益は約800〜1,800ドル。" },
                { title: "Gamingチャンネル — 地域分散型", body: "RPMは約1.50〜4.00ドル、収益は約150〜400ドル。" },
                { title: "教育 / ソフトウェアチュートリアル — 10万再生", body: "RPMは約4〜10ドル、収益は約400〜1,000ドル。" },
              ],
            },
          ],
        },
        {
          title: "よくある計算ミス",
          blocks: [
            { type: "list", items: ["再生回数だけで推定する", "CPMとRPMを混同する", "視聴地域を無視する", "1回のスクリーンショットを平均値として扱う"] },
          ],
        },
        {
          title: "よくある誤解",
          blocks: [
            { type: "list", items: ["再生回数が多ければ必ず儲かるわけではない", "CPMはクリエイター収益ではない", "Shortsは別モデルで動く", "長い動画が必ず有利とは限らない"] },
          ],
        },
        {
          title: "方法論と限界",
          blocks: [
            { type: "text", value: "このページのレンジは、市場データとクリエイター報告を組み合わせて、現実のばらつきを反映するように作っています。" },
            { type: "text", value: "広告需要、季節性、YouTubeの方針変更によって結果はすぐに動きます。" },
          ],
        },
      ],
      ctas: [
        { icon: "◈", label: "収益計算機", description: "すべての変数で収益を推定", href: "/youtube/revenue-calculator" },
        { icon: "◎", label: "国別RPM", description: "国ごとの差を比較", href: "/youtube/rpm-calculator-by-country" },
        // 「RPMが低い理由」のリンクを削除しました（指示に従い）
      ],
      related: [
        { slug: "youtube-rpm-usa", label: "米国のYouTube RPM" },
        { slug: "youtube-rpm-finance", label: "FinanceのYouTube RPM" },
        { slug: "what-is-a-good-youtube-rpm", label: "良いYouTube RPMとは？" },
      ],
      faq: [
        { q: "この計算機の精度は？", a: "実際の収益に対する計画レンジを示します。" },
        { q: "RPMとCPMの違いは？", a: "CPMは広告主の支払い、RPMはクリエイターの受け取り額です。" },
        { q: "なぜShortsは低いの？", a: "共有プール型の収益化だからです。" },
        { q: "どのニッチが高い？", a: "Finance、Investing、Software、Real Estate、Legal などです。" },
        { q: "動画の長さは影響する？", a: "はい。8分超でミッドロールが可能になります。" },
        { q: "地域は収益に影響する？", a: "高価値市場の視聴者はRPMが高くなりやすいです。" },
        { q: "維持率は何を入れる？", a: "データがなければ45%が目安です。" },
        { q: "無料で使える？", a: "はい、無料でアカウント不要です。" },
      ],
      disclaimer:
        "Forevaultの推定は、クリエイターベンチマークと市場データの集計に基づいています。実際のAdSense収益は、広告需要、季節性、地域、広告ブロッカー、ポリシー変更、動画ごとの差で変動します。",
      toolHint: "このページでは、計算機の仕組みと収益差の理由を説明します。",
    },
  
    ko: {
      meta: {
        slug: "how-much-do-youtubers-make",
        title: "유튜버는 실제로 얼마를 벌까? | Forevault",
        description:
          "RPM, 니치, 지역, 시청 유지율, 영상 길이를 통해 유튜버 수익을 이해하세요.",
      },
      tool: { type: "calculator", props: { mode: "standard" } },
      hero: {
        eyebrow: "크리에이터 수익 이해하기",
        title: "유튜버는 실제로 얼마를 벌까?",
        lead: [
          "유튜브 수익은 겉보기엔 단순합니다. 조회수가 많을수록 돈도 많아 보이죠. 하지만 실제 계산 방식은 훨씬 복잡합니다.",
          "월간 수치가 비슷한 두 채널도 수익은 크게 다를 수 있고, 그것이 곧 누가 잘못하고 있다는 뜻은 아닙니다.",
          "니치는 광고 수요에, 지역은 입찰가에, 유지율은 노출되는 광고량에, 형식은 수익 모델에 영향을 줍니다.",
          "이 페이지의 수치는 크리에이터 벤치마크와 광고 시장 관찰을 바탕으로 한 것이며, YouTube 공식 수치는 아닙니다.",
        ],
      },
      stats: [
        { value: "80+", label: "모델링된 국가" },
        { value: "50+", label: "RPM 범위 니치" },
        { value: "12", label: "표시 통화" },
        { value: "±20%", label: "일반적인 범위" },
      ],
      sections: [
        {
          title: "수익 차이를 만드는 변수",
          blocks: [
            { type: "text", value: "이 변수들은 미세한 보정이 아닙니다. 같은 조회수도 수익이 크게 달라질 수 있습니다." },
            {
              type: "card-grid",
              cards: [
                { title: "RPM", body: "YouTube 수수료를 제외한 1,000 조회당 실제 수익입니다." },
                { title: "CPM", body: "광고주가 지불하는 비용이며, 크리에이터 수익 자체는 아닙니다." },
                { title: "니치", body: "Finance, Business, Software, Legal은 높은 광고 수요를 받기 쉽습니다." },
                { title: "지역", body: "미국, 영국, 캐나다, 호주 트래픽은 RPM이 높은 편입니다." },
                { title: "유지율", body: "시청 유지율이 높을수록 광고 노출 기회가 늘어납니다." },
                { title: "8분 기준", body: "8분이 넘으면 미드롤 광고가 가능해집니다." },
                { title: "Shorts", body: "Shorts는 롱폼과 다른 풀(pool) 기반 수익 구조를 사용합니다." },
              ],
            },
          ],
        },
        {
          title: "추정이 틀어지는 지점",
          blocks: [
            { type: "text", value: "온라인의 수익 수치는 완전하지 않은 경우가 많습니다." },
            { type: "text", value: "CPM을 RPM처럼 보여주는 실수가 흔합니다." },
            { type: "text", value: "지역 정보가 빠진 비교는 신뢰하기 어렵습니다." },
            { type: "text", value: "스크린샷 문화는 예외적인 월을 평균처럼 보이게 합니다." },
            { type: "text", value: "이 페이지의 수치도 보장값이 아니라 관찰 패턴입니다." },
          ],
        },
        {
          title: "실제 수익 차이의 모습",
          blocks: [
            { type: "text", value: "실제 채널은 조건이 다르기 때문에 완벽한 비교는 아닙니다." },
            {
              type: "card-grid",
              cards: [
                { title: "미국 금융 채널 — 10만 조회", body: "RPM 약 8~18달러, 수익 약 800~1,800달러." },
                { title: "Gaming 채널 — 지역 분산형", body: "RPM 약 1.50~4.00달러, 수익 약 150~400달러." },
                { title: "교육/소프트웨어 튜토리얼 — 10만 조회", body: "RPM 약 4~10달러, 수익 약 400~1,000달러." },
              ],
            },
          ],
        },
        {
          title: "흔한 계산 실수",
          blocks: [
            { type: "list", items: ["조회수만으로 추정하기", "CPM과 RPM을 혼동하기", "시청 지역을 무시하기", "한 번의 스크린샷을 평균으로 보기"] },
          ],
        },
        {
          title: "흔한 오해",
          blocks: [
            { type: "list", items: ["조회수가 많으면 무조건 많이 번다", "CPM은 크리에이터 수익이 아니다", "Shorts는 다른 구조다", "긴 영상이 항상 유리한 것은 아니다"] },
          ],
        },
        {
          title: "방법론과 한계",
          blocks: [
            { type: "text", value: "이 페이지의 범위는 시장 데이터와 크리에이터 보고를 조합해 현실적인 변동을 반영합니다." },
            { type: "text", value: "광고 수요, 시즌성, 정책 변화는 결과를 빠르게 바꿀 수 있습니다." },
          ],
        },
      ],
      ctas: [
        { icon: "◈", label: "수익 계산기", description: "모든 변수로 수익 추정", href: "/youtube/revenue-calculator" },
        { icon: "◎", label: "국가별 RPM", description: "국가 차이를 직접 비교", href: "/youtube/rpm-calculator-by-country" },
        // "RPM이 낮은 이유" 링크 삭제함 (지시에 따라)
      ],
      related: [
        { slug: "youtube-rpm-usa", label: "미국 YouTube RPM" },
        { slug: "youtube-rpm-finance", label: "Finance YouTube RPM" },
        { slug: "what-is-a-good-youtube-rpm", label: "좋은 YouTube RPM은?" },
      ],
      faq: [
        { q: "이 계산기의 정확도는?", a: "실제 수익을 위한 계획 범위를 보여줍니다." },
        { q: "RPM과 CPM의 차이는?", a: "CPM은 광고주 비용, RPM은 크리에이터 실제 수익입니다." },
        { q: "왜 Shorts는 낮은가요?", a: "공유 풀 기반 수익화이기 때문입니다." },
        { q: "어떤 니치가 높은가요?", a: "Finance, Investing, Software, Real Estate, Legal 등이 높습니다." },
        { q: "영상 길이가 영향을 주나요?", a: "네, 8분을 넘으면 미드롤이 가능해집니다." },
        { q: "지역이 수익에 영향 주나요?", a: "고가치 시장 시청자는 RPM이 더 높은 편입니다." },
        { q: "유지율은 무엇을 넣나요?", a: "데이터가 없으면 45%가 무난합니다." },
        { q: "무료인가요?", a: "네, 무료이며 계정이 필요 없습니다." },
      ],
      disclaimer:
        "Forevault의 추정치는 크리에이터 벤치마크와 시장 데이터 집계에 기반합니다. 실제 AdSense 수익은 광고 수요, 시즌성, 지역, 광고 차단, 정책 변화, 영상별 편차에 따라 달라집니다.",
      toolHint: "이 페이지는 계산기의 작동 방식과 수익 차이의 이유를 설명합니다.",
    },
  
    pt: {
      meta: {
        slug: "how-much-do-youtubers-make",
        title: "Quanto os YouTubers realmente ganham? | Forevault",
        description:
          "Entenda quanto os YouTubers realmente ganham usando RPM, nicho, geografia, retenção e duração do vídeo.",
      },
      tool: { type: "calculator", props: { mode: "standard" } },
      hero: {
        eyebrow: "Entendendo a renda de criadores",
        title: "Quanto os YouTubers realmente ganham?",
        lead: [
          "A pergunta aparece o tempo todo porque a renda do YouTube parece simples: mais visualizações, mais dinheiro. Mas essa ideia quebra rapidamente quando você olha para a forma real de cálculo.",
          "Dois criadores com números mensais parecidos podem acabar em situações financeiras bem diferentes, e isso não significa que alguém esteja fazendo algo errado.",
          "O motivo é que várias variáveis se combinam: o nicho afeta a demanda de anúncios, a geografia afeta os lances, a retenção afeta quantos anúncios são exibidos e o formato define o modelo de monetização.",
          "As estimativas desta página usam benchmarks de criadores e observações do mercado de anúncios. Não são números oficiais do YouTube e não garantem resultados individuais.",
        ],
      },
      stats: [
        { value: "80+", label: "Países modelados" },
        { value: "50+", label: "Nichos com faixas de RPM" },
        { value: "12", label: "Moedas exibidas" },
        { value: "±20%", label: "Faixa típica" },
      ],
      sections: [
        {
          title: "As variáveis por trás da diferença de renda",
          blocks: [
            { type: "text", value: "Não são pequenos ajustes. Cada variável pode mudar bastante o ganho para o mesmo número de views." },
            {
              type: "card-grid",
              cards: [
                { title: "RPM", body: "É o que o criador realmente fica por 1.000 views depois da parte do YouTube." },
                { title: "CPM", body: "É o que os anunciantes pagam antes do corte do YouTube." },
                { title: "Nicho", body: "Finance, Business, Software e Legal tendem a atrair lances mais altos." },
                { title: "Geografia", body: "Views de EUA, Reino Unido, Canadá e Austrália costumam ter RPM mais alto." },
                { title: "Retenção", body: "Mais tempo assistido significa mais oportunidades de anúncios." },
                { title: "8 minutos", body: "Ao passar de 8 minutos, mid-rolls ficam disponíveis." },
                { title: "Shorts", body: "Shorts usa um modelo separado baseado em fundo compartilhado." },
              ],
            },
          ],
        },
        {
          title: "Onde as estimativas erram",
          blocks: [
            { type: "text", value: "Muitos números de renda na internet são incompletos e isso nem sempre fica claro." },
            { type: "text", value: "É comum mostrar CPM como se fosse RPM. Não é a mesma coisa." },
            { type: "text", value: "A geografia também costuma sumir: um canal com 90% de tráfego dos EUA não é um benchmark universal." },
            { type: "text", value: "A cultura de screenshots faz meses excepcionais parecerem normais." },
            { type: "text", value: "Nossas estimativas também têm limites: elas refletem padrões observados, não garantias individuais." },
          ],
        },
        {
          title: "Como a diferença de renda realmente aparece",
          blocks: [
            { type: "text", value: "Esses cenários não são perfeitamente comparáveis de propósito — canais reais nunca são." },
            {
              type: "card-grid",
              cards: [
                { title: "Canal de finanças nos EUA — 100K views, vídeo de 9 minutos", body: "RPM entre US$ 8 e US$ 18, com renda de US$ 800 a US$ 1.800." },
                { title: "Canal de gaming — audiência distribuída", body: "RPM entre US$ 1,50 e US$ 4,00, com renda de US$ 150 a US$ 400." },
                { title: "Tutorial de educação / software — 100K views", body: "RPM entre US$ 4 e US$ 10, com renda de US$ 400 a US$ 1.000." },
              ],
            },
          ],
        },
        {
          title: "Erros práticos por trás de estimativas ruins",
          blocks: [
            { type: "list", items: ["Estimar só pelas views", "Confundir CPM com RPM", "Ignorar a geografia do tráfego", "Tratar um screenshot como resultado típico"] },
          ],
        },
        {
          title: "Mitos comuns",
          blocks: [
            { type: "list", items: ["Mais views sempre = mais dinheiro", "CPM não é o que o criador ganha", "Shorts funciona diferente e paga menos por view", "Vídeos mais longos não são automaticamente melhores"] },
          ],
        },
        {
          title: "Metodologia e limites realistas",
          blocks: [
            { type: "text", value: "As faixas desta página combinam padrões de mercado com dados relatados por criadores, gerando cenários que refletem variação real." },
            { type: "text", value: "Demanda de anúncios, sazonalidade e mudanças de política do YouTube podem alterar os resultados rapidamente." },
          ],
        },
      ],
      ctas: [
        { icon: "◈", label: "Calculadora de receita", description: "Estime ganhos com todas as variáveis", href: "/youtube/revenue-calculator" },
        { icon: "◎", label: "RPM por país", description: "Compare o impacto dos países", href: "/youtube/rpm-calculator-by-country" },
        // Removido o link "Por que meu RPM está baixo?" conforme instruções
      ],
      related: [
        { slug: "youtube-rpm-usa", label: "RPM do YouTube nos EUA" },
        { slug: "youtube-rpm-finance", label: "RPM do YouTube em Finanças" },
        { slug: "what-is-a-good-youtube-rpm", label: "O que é um bom RPM no YouTube?" },
      ],
      faq: [
        { q: "Quão precisa é esta calculadora?", a: "Ela fornece uma faixa de planejamento, não um pagamento garantido." },
        { q: "Qual a diferença entre RPM e CPM no YouTube?", a: "CPM é o custo para o anunciante; RPM é o quanto o criador fica." },
        { q: "Por que Shorts paga menos?", a: "Porque usa um modelo de fundo compartilhado." },
        { q: "Qual nicho tem o melhor RPM?", a: "Finanças, investimento, software, imóveis e direito costumam ficar no topo." },
        { q: "A duração do vídeo realmente muda a receita?", a: "Sim. Acima de 8 minutos, os mid-rolls ficam disponíveis." },
        { q: "Como a geografia afeta a receita?", a: "Mercados com maior valor publicitário tendem a gerar RPM mais alto." },
        { q: "Que retenção devo colocar?", a: "Se não tiver dados, 45% é uma boa base para long-form." },
        { q: "A calculadora é gratuita?", a: "Sim, é gratuita, sem conta, e roda localmente no navegador." },
      ],
      disclaimer:
        "As estimativas da Forevault se baseiam em benchmarks agregados de criadores e dados de mercado. A receita real do AdSense varia com demanda de anúncios, sazonalidade, geografia, bloqueadores, mudanças de política e variação por vídeo.",
      toolHint: "Esta página explica como a calculadora funciona e por que a renda varia tanto.",
    },
  };
  
  export default youtubersMake;