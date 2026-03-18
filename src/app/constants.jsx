export const countryRPM = [

  // TIER 1 - Premium ad markets
  { id: 'us', name: 'États-Unis', tier: 1, multiplier: 2.20 },
  { id: 'ch', name: 'Suisse', tier: 1, multiplier: 2.00 },
  { id: 'au', name: 'Australie', tier: 1, multiplier: 1.80 },
  { id: 'sg', name: 'Singapour', tier: 1, multiplier: 1.80 },
  { id: 'uk', name: 'Royaume-Uni', tier: 1, multiplier: 1.70 },
  { id: 'ca', name: 'Canada', tier: 1, multiplier: 1.65 },
  { id: 'jp', name: 'Japon', tier: 1, multiplier: 1.60 },
  { id: 'no', name: 'Norvège', tier: 1, multiplier: 1.55 },
  { id: 'dk', name: 'Danemark', tier: 1, multiplier: 1.50 },
  { id: 'se', name: 'Suède', tier: 1, multiplier: 1.45 },
  { id: 'de', name: 'Allemagne', tier: 1, multiplier: 1.40 },
  { id: 'ie', name: 'Irlande', tier: 1, multiplier: 1.35 },
  { id: 'fr', name: 'France', tier: 1, multiplier: 1.00 },

  // TIER 2 - Good advertising markets
  { id: 'nl', name: 'Pays-Bas', tier: 2, multiplier: 1.10 },
  { id: 'kr', name: 'Corée du Sud', tier: 2, multiplier: 1.10 },
  { id: 'ae', name: 'Émirats Arabes Unis', tier: 2, multiplier: 1.25 },
  { id: 'qa', name: 'Qatar', tier: 2, multiplier: 1.20 },
  { id: 'il', name: 'Israël', tier: 2, multiplier: 1.10 },
  { id: 'be', name: 'Belgique', tier: 2, multiplier: 1.05 },
  { id: 'at', name: 'Autriche', tier: 2, multiplier: 1.00 },
  { id: 'es', name: 'Espagne', tier: 2, multiplier: 0.90 },
  { id: 'it', name: 'Italie', tier: 2, multiplier: 0.85 },
  { id: 'nz', name: 'Nouvelle-Zélande', tier: 2, multiplier: 1.20 },

  // TIER 3 - Emerging markets
  { id: 'pl', name: 'Pologne', tier: 3, multiplier: 0.65 },
  { id: 'br', name: 'Brésil', tier: 3, multiplier: 0.50 },
  { id: 'mx', name: 'Mexique', tier: 3, multiplier: 0.50 },
  { id: 'tr', name: 'Turquie', tier: 3, multiplier: 0.45 },
  { id: 'za', name: 'Afrique du Sud', tier: 3, multiplier: 0.55 },
  { id: 'ar', name: 'Argentine', tier: 3, multiplier: 0.40 },
  { id: 'co', name: 'Colombie', tier: 3, multiplier: 0.35 },
  { id: 'ma', name: 'Maroc', tier: 3, multiplier: 0.30 },
  { id: 'dz', name: 'Algérie', tier: 3, multiplier: 0.25 },
  { id: 'tn', name: 'Tunisie', tier: 3, multiplier: 0.25 },
  { id: 'in', name: 'Inde', tier: 3, multiplier: 0.30 },
  { id: 'id', name: 'Indonésie', tier: 3, multiplier: 0.30 },
  { id: 'th', name: 'Thaïlande', tier: 3, multiplier: 0.35 },
  { id: 'ph', name: 'Philippines', tier: 3, multiplier: 0.25 },
  { id: 'vn', name: 'Vietnam', tier: 3, multiplier: 0.20 },
  { id: 'eg', name: 'Égypte', tier: 3, multiplier: 0.20 },
  { id: 'ng', name: 'Nigéria', tier: 3, multiplier: 0.20 }

];

export const niches = [
  {
    "id": "finance",
    "niche": "Finance & Investment",
    "topic": "Tips for investing in stocks",
    "rpm": 18, // 🔥 souvent 15–30+
    "faceless": "faceless",
    "saturation": 5,
    "economic_potential": 5,
    "creation_ease": 2,
    "popularity": "high-intent",
    "trending": false,
    "format": "Long-form"
  },
  {
    "id": "tech",
    "niche": "Technology & Software",
    "topic": "Latest gadget reviews and coding tutorials",
    "rpm": 12, // 8–18
    "faceless": "faceless",
    "saturation": 5,
    "economic_potential": 4,
    "creation_ease": 3,
    "popularity": "high-intent",
    "trending": true,
    "format": "Long-form"
  },
  {
    "id": "ai",
    "niche": "AI Tools & Automation",
    "topic": "Tutorials on new AI tools and workflows",
    "rpm": 14, // 🔥 très monétisable en 2026
    "faceless": "faceless",
    "saturation": 3,
    "economic_potential": 5,
    "creation_ease": 2,
    "popularity": "high-intent",
    "trending": true,
    "format": "Long-form"
  },
  {
    "id": "business",
    "niche": "Business & Entrepreneurship",
    "topic": "Startup case studies and marketing strategies",
    "rpm": 13, // 10–20
    "faceless": "faceless",
    "saturation": 4,
    "economic_potential": 4,
    "creation_ease": 3,
    "popularity": "high-intent",
    "trending": false,
    "format": "Long-form"
  },
  {
    "id": "education",
    "niche": "Education & How-To",
    "topic": "Language lessons and science explainers",
    "rpm": 7, // 4–10
    "faceless": "faceless",
    "saturation": 4,
    "economic_potential": 3,
    "creation_ease": 2,
    "popularity": "high-intent",
    "trending": false,
    "format": "Long-form"
  },
  {
    "id": "health",
    "niche": "Health & Wellness",
    "topic": "Nutrition advice and mental health tips",
    "rpm": 9, // 6–15 (attention contenu sensible)
    "faceless": "faceless",
    "saturation": 4,
    "economic_potential": 4,
    "creation_ease": 3,
    "popularity": "high-intent",
    "trending": false,
    "format": "Long-form"
  },
  {
    "id": "fitness",
    "niche": "Fitness & Weight Loss",
    "topic": "At-home workout routines",
    "rpm": 6, // 3–10
    "faceless": "faceless",
    "saturation": 5,
    "economic_potential": 4,
    "creation_ease": 2,
    "popularity": "high-intent",
    "trending": false,
    "format": "Long-form"
  },
  {
    "id": "food",
    "niche": "Food & Cooking",
    "topic": "Easy recipe tutorials",
    "rpm": 4, // souvent bas (2–6)
    "faceless": "faceless",
    "saturation": 4,
    "economic_potential": 3,
    "creation_ease": 2,
    "popularity": "high-intent",
    "trending": false,
    "format": "Long-form"
  },
  {
    "id": "diy",
    "niche": "DIY & Crafts",
    "topic": "Home improvement projects",
    "rpm": 4, // 3–7
    "faceless": "faceless",
    "saturation": 4,
    "economic_potential": 3,
    "creation_ease": 2,
    "popularity": "high-intent",
    "trending": false,
    "format": "Long-form"
  },
  {
    "id": "entertainment",
    "niche": "Entertainment & Comedy",
    "topic": "Funny sketches and pop culture commentary",
    "rpm": 2.5, // très dépendant du volume
    "faceless": "face",
    "saturation": 5,
    "economic_potential": 2,
    "creation_ease": 3,
    "popularity": "low-intent",
    "trending": false,
    "format": "Long-form"
  },
  {
    "id": "pop_culture",
    "niche": "Pop Culture & Commentary",
    "topic": "Social experiments and viral trends",
    "rpm": 2.5,
    "faceless": "faceless",
    "saturation": 4,
    "economic_potential": 2,
    "creation_ease": 3,
    "popularity": "low-intent",
    "trending": true,
    "format": "Long-form"
  },
  {
    "id": "gaming",
    "niche": "Gaming & Esports",
    "topic": "Gameplay highlights and tutorials",
    "rpm": 2.8, // souvent 1.5–4
    "faceless": "faceless",
    "saturation": 5,
    "economic_potential": 2,
    "creation_ease": 3,
    "popularity": "low-intent",
    "trending": false,
    "format": "Long-form"
  },
  {
    "id": "kids",
    "niche": "Kids & Family",
    "topic": "Child-friendly cartoons and toy reviews",
    "rpm": 0.8, // ⚠️ COPPA
    "faceless": "faceless",
    "saturation": 5,
    "economic_potential": 1,
    "creation_ease": 2,
    "popularity": "low-intent",
    "trending": false,
    "format": "Long-form"
  },
  {
    "id": "travel",
    "niche": "Travel & Adventure",
    "topic": "Destination guides and travel vlogs",
    "rpm": 3.5, // 2–7
    "faceless": "face",
    "saturation": 3,
    "economic_potential": 2,
    "creation_ease": 3,
    "popularity": "low-intent",
    "trending": false,
    "format": "Long-form"
  },
  {
    "id": "beauty",
    "niche": "Beauty & Fashion",
    "topic": "Makeup tutorials and style tips",
    "rpm": 4.5, // 3–8
    "faceless": "face",
    "saturation": 4,
    "economic_potential": 3,
    "creation_ease": 3,
    "popularity": "medium-intent",
    "trending": false,
    "format": "Long-form"
  },
  {
    "id": "motivation",
    "niche": "Motivation & Personal Development",
    "topic": "Inspirational speeches and self-improvement",
    "rpm": 4, // souvent plus bas que prévu
    "faceless": "faceless",
    "saturation": 4,
    "economic_potential": 3,
    "creation_ease": 3,
    "popularity": "high-intent",
    "trending": false,
    "format": "Long-form"
  },
  {
    "id": "animals",
    "niche": "Pets & Animals",
    "topic": "Funny animal videos and pet care tips",
    "rpm": 1.8,
    "faceless": "faceless",
    "saturation": 4,
    "economic_potential": 2,
    "creation_ease": 2,
    "popularity": "low-intent",
    "trending": false,
    "format": "Long-form"
  },

  // SHORTS ⚠️ RPM BEAUCOUP PLUS BAS
  {
    "id": "short_entertainment",
    "niche": "Entertainment & Humor (Shorts)",
    "topic": "Viral comedy sketches and challenges",
    "rpm": 6,
    "faceless": "face",
    "saturation": 5,
    "economic_potential": 2,
    "creation_ease": 2,
    "popularity": "low-intent",
    "trending": true,
    "format": "Shorts"
  },
  {
    "id": "short_gaming",
    "niche": "Gaming Clips & Highlights (Shorts)",
    "topic": "Best moments from popular games",
    "rpm": 5,
    "faceless": "faceless",
    "saturation": 5,
    "economic_potential": 2,
    "creation_ease": 1,
    "popularity": "low-intent",
    "trending": true,
    "format": "Shorts"
  },
  {
    "id": "short_food",
    "niche": "Quick Cooking & Recipes (Shorts)",
    "topic": "60-second easy recipes",
    "rpm": 7,
    "faceless": "faceless",
    "saturation": 4,
    "economic_potential": 3,
    "creation_ease": 2,
    "popularity": "high-intent",
    "trending": false,
    "format": "Shorts"
  },
  {
    "id": "short_facts",
    "niche": "Quick Facts & Education (Shorts)",
    "topic": "Interesting history or science facts",
    "rpm": 8,
    "faceless": "faceless",
    "saturation": 3,
    "economic_potential": 3,
    "creation_ease": 2,
    "popularity": "high-intent",
    "trending": false,
    "format": "Shorts"
  },
  {
    "id": "short_diy",
    "niche": "DIY & Life Hacks (Shorts)",
    "topic": "Fast home improvement tips",
    "rpm": 7,
    "faceless": "faceless",
    "saturation": 3,
    "economic_potential": 3,
    "creation_ease": 2,
    "popularity": "high-intent",
    "trending": false,
    "format": "Shorts"
  },
  {
    "id": "short_satisfying",
    "niche": "Satisfying Visuals (Shorts)",
    "topic": "Oddly satisfying ASMR clips",
    "rpm": 3,
    "faceless": "faceless",
    "saturation": 5,
    "economic_potential": 1,
    "creation_ease": 1,
    "popularity": "low-intent",
    "trending": true,
    "format": "Shorts"
  },
  {
    "id": "short_celeb",
    "niche": "Celebrity News & Drama (Shorts)",
    "topic": "Quick celebrity gossip updates",
    "rpm": 5,
    "faceless": "faceless",
    "saturation": 4,
    "economic_potential": 2,
    "creation_ease": 1,
    "popularity": "low-intent",
    "trending": true,
    "format": "Shorts"
  },
  {
    "id": "short_ranking",
    "niche": "Lists & Ranking Videos (Shorts)",
    "topic": "Top 5 trending gadgets or events",
    "rpm": 8,
    "faceless": "faceless",
    "saturation": 4,
    "economic_potential": 3,
    "creation_ease": 2,
    "popularity": "high-intent",
    "trending": true,
    "format": "Shorts"
  },
  {
    "id": "short_pets",
    "niche": "Pet Stories & Animal Clips (Shorts)",
    "topic": "Cute pets doing funny things",
    "rpm": 4,
    "faceless": "faceless",
    "saturation": 4,
    "economic_potential": 1,
    "creation_ease": 1,
    "popularity": "low-intent",
    "trending": false,
    "format": "Shorts"
  },
  {
    "id": "short_fashion",
    "niche": "Fashion & Transformation (Shorts)",
    "topic": "Quick style makeovers and tips",
    "rpm": 7,
    "faceless": "faceless",
    "saturation": 3,
    "economic_potential": 3,
    "creation_ease": 2,
    "popularity": "medium-intent",
    "trending": false,
    "format": "Shorts"
  }
];