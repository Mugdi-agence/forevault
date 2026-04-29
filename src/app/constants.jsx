// ─────────────────────────────────────────────────────────────────────────────
// LANGUAGES — Estimated monthly views on YouTube (source: industry reports,
// SimilarWeb, YouTube internal estimates ~2024-2025)
// Total YouTube platform: ~2 100 Billion views / month
// ─────────────────────────────────────────────────────────────────────────────
export const languages = [
  { id: 'en', name: 'English',     flag: '🇺🇸', monthlyViews: 900e9  }, // ~43% of platform
  { id: 'es', name: 'Spanish',     flag: '🇪🇸', monthlyViews: 200e9  }, // ~9.5%
  { id: 'pt', name: 'Portuguese',  flag: '🇧🇷', monthlyViews: 150e9  }, // ~7.1%
  { id: 'hi', name: 'Hindi',       flag: '🇮🇳', monthlyViews: 120e9  }, // ~5.7%
  { id: 'ar', name: 'Arabic',      flag: '🇸🇦', monthlyViews: 100e9  }, // ~4.8%
  { id: 'id', name: 'Indonesian',  flag: '🇮🇩', monthlyViews:  80e9  }, // ~3.8%
  { id: 'zh', name: 'Chinese',     flag: '🇨🇳', monthlyViews:  75e9  }, // ~3.6% (YouTube accessible)
  { id: 'ru', name: 'Russian',     flag: '🇷🇺', monthlyViews:  70e9  }, // ~3.3%
  { id: 'fr', name: 'French',      flag: '🇫🇷', monthlyViews:  60e9  }, // ~2.9%
  { id: 'de', name: 'German',      flag: '🇩🇪', monthlyViews:  50e9  }, // ~2.4%
  { id: 'ja', name: 'Japanese',    flag: '🇯🇵', monthlyViews:  45e9  }, // ~2.1%
  { id: 'ko', name: 'Korean',      flag: '🇰🇷', monthlyViews:  40e9  }, // ~1.9%
  { id: 'tr', name: 'Turkish',     flag: '🇹🇷', monthlyViews:  35e9  }, // ~1.7%
  { id: 'it', name: 'Italian',     flag: '🇮🇹', monthlyViews:  25e9  }, // ~1.2%
  { id: 'pl', name: 'Polish',      flag: '🇵🇱', monthlyViews:  20e9  }, // ~1.0%
  { id: 'th', name: 'Thai',        flag: '🇹🇭', monthlyViews:  20e9  }, // ~1.0%
  { id: 'nl', name: 'Dutch',       flag: '🇳🇱', monthlyViews:  15e9  }, // ~0.7%
];

export const countryRPM = [
  // TIER 1 - Premium ad markets
  { id: 'us', name: 'United States',        tier: 1, multiplier: 2.20 },
  { id: 'ch', name: 'Switzerland',         tier: 1, multiplier: 2.00 },
  { id: 'au', name: 'Australia',           tier: 1, multiplier: 1.80 },
  { id: 'sg', name: 'Singapore',           tier: 1, multiplier: 1.80 },
  { id: 'uk', name: 'United Kingdom',      tier: 1, multiplier: 1.70 },
  { id: 'ca', name: 'Canada',              tier: 1, multiplier: 1.65 },
  { id: 'jp', name: 'Japan',               tier: 1, multiplier: 1.60 },
  { id: 'no', name: 'Norway',              tier: 1, multiplier: 1.55 },
  { id: 'dk', name: 'Denmark',             tier: 1, multiplier: 1.50 },
  { id: 'se', name: 'Sweden',              tier: 1, multiplier: 1.45 },
  { id: 'de', name: 'Germany',             tier: 1, multiplier: 1.40 },
  { id: 'ie', name: 'Ireland',             tier: 1, multiplier: 1.35 },
  { id: 'fr', name: 'France',              tier: 1, multiplier: 1.00 },

  // TIER 2 - Good advertising markets
  { id: 'nl', name: 'Netherlands',         tier: 2, multiplier: 1.10 },
  { id: 'kr', name: 'South Korea',         tier: 2, multiplier: 1.10 },
  { id: 'ae', name: 'United Arab Emirates',tier: 2, multiplier: 1.25 },
  { id: 'qa', name: 'Qatar',               tier: 2, multiplier: 1.20 },
  { id: 'be', name: 'Belgium',             tier: 2, multiplier: 1.05 },
  { id: 'at', name: 'Austria',             tier: 2, multiplier: 1.00 },
  { id: 'es', name: 'Spain',               tier: 2, multiplier: 0.90 },
  { id: 'it', name: 'Italy',               tier: 2, multiplier: 0.85 },
  { id: 'nz', name: 'New Zealand',         tier: 2, multiplier: 1.20 },

  // TIER 3 - Emerging markets
  { id: 'pl', name: 'Poland',              tier: 3, multiplier: 0.65 },
  { id: 'br', name: 'Brazil',              tier: 3, multiplier: 0.50 },
  { id: 'mx', name: 'Mexico',              tier: 3, multiplier: 0.50 },
  { id: 'tr', name: 'Turkey',              tier: 3, multiplier: 0.45 },
  { id: 'za', name: 'South Africa',        tier: 3, multiplier: 0.55 },
  { id: 'ar', name: 'Argentina',           tier: 3, multiplier: 0.40 },
  { id: 'co', name: 'Colombia',            tier: 3, multiplier: 0.35 },
  { id: 'ma', name: 'Morocco',             tier: 3, multiplier: 0.30 },
  { id: 'dz', name: 'Algeria',             tier: 3, multiplier: 0.25 },
  { id: 'tn', name: 'Tunisia',             tier: 3, multiplier: 0.25 },
  { id: 'in', name: 'India',               tier: 3, multiplier: 0.30 },
  { id: 'id', name: 'Indonesia',           tier: 3, multiplier: 0.30 },
  { id: 'th', name: 'Thailand',            tier: 3, multiplier: 0.35 },
  { id: 'ph', name: 'Philippines',         tier: 3, multiplier: 0.25 },
  { id: 'vn', name: 'Vietnam',             tier: 3, multiplier: 0.20 },
  { id: 'eg', name: 'Egypt',               tier: 3, multiplier: 0.20 },
  { id: 'ng', name: 'Nigeria',             tier: 3, multiplier: 0.20 },
];

// ─────────────────────────────────────────────────────────────────────────────
// NICHES — audienceShare = fraction of total monthly YouTube views captured
// by this niche across all languages (used for pool calculation)
// Sources: Tubular Labs, YouTube Creator Academy, industry studies
// Total platform: ~2 100B views/month
// ─────────────────────────────────────────────────────────────────────────────
export const niches = [
  // ── LONG FORM ────────────────────────────────────────────────────────────────
  {
    id: "finance",
    niche: "Finance & Investment",
    topic: "Tips for investing in stocks",
    rpm: 18,
    audienceShare: 0.014,   // ~1.4% → ~29.4B views/month globally
    faceless: "faceless",
    saturation: 5,
    economic_potential: 5,
    creation_ease: 2,
    popularity: "high-intent",
    trending: false,
    format: "Long-form"
  },
  {
    id: "tech",
    niche: "Technology & Software",
    topic: "Latest gadget reviews and coding tutorials",
    rpm: 12,
    audienceShare: 0.036,   // ~3.6% → ~75.6B views/month
    faceless: "faceless",
    saturation: 5,
    economic_potential: 4,
    creation_ease: 3,
    popularity: "high-intent",
    trending: true,
    format: "Long-form"
  },
  {
    id: "ai",
    niche: "AI Tools & Automation",
    topic: "Tutorials on new AI tools and workflows",
    rpm: 14,
    audienceShare: 0.014,   // ~1.4% → ~29.4B (niche en forte croissance)
    faceless: "faceless",
    saturation: 3,
    economic_potential: 5,
    creation_ease: 2,
    popularity: "high-intent",
    trending: true,
    format: "Long-form"
  },
  {
    id: "business",
    niche: "Business & Entrepreneurship",
    topic: "Startup case studies and marketing strategies",
    rpm: 13,
    audienceShare: 0.018,   // ~1.8% → ~37.8B
    faceless: "faceless",
    saturation: 4,
    economic_potential: 4,
    creation_ease: 3,
    popularity: "high-intent",
    trending: false,
    format: "Long-form"
  },
  {
    id: "education",
    niche: "Education & How-To",
    topic: "Language lessons and science explainers",
    rpm: 7,
    audienceShare: 0.072,   // ~7.2% → ~151B (un des plus gros segments)
    faceless: "faceless",
    saturation: 4,
    economic_potential: 3,
    creation_ease: 2,
    popularity: "high-intent",
    trending: false,
    format: "Long-form"
  },
  {
    id: "health",
    niche: "Health & Wellness",
    topic: "Nutrition advice and mental health tips",
    rpm: 9,
    audienceShare: 0.034,   // ~3.4% → ~71.4B
    faceless: "faceless",
    saturation: 4,
    economic_potential: 4,
    creation_ease: 3,
    popularity: "high-intent",
    trending: false,
    format: "Long-form"
  },
  {
    id: "fitness",
    niche: "Fitness & Weight Loss",
    topic: "At-home workout routines",
    rpm: 6,
    audienceShare: 0.026,   // ~2.6% → ~54.6B
    faceless: "faceless",
    saturation: 5,
    economic_potential: 4,
    creation_ease: 2,
    popularity: "high-intent",
    trending: false,
    format: "Long-form"
  },
  {
    id: "food",
    niche: "Food & Cooking",
    topic: "Easy recipe tutorials",
    rpm: 4,
    audienceShare: 0.058,   // ~5.8% → ~121.8B (très populaire)
    faceless: "faceless",
    saturation: 4,
    economic_potential: 3,
    creation_ease: 2,
    popularity: "high-intent",
    trending: false,
    format: "Long-form"
  },
  {
    id: "diy",
    niche: "DIY & Crafts",
    topic: "Home improvement projects",
    rpm: 4,
    audienceShare: 0.024,   // ~2.4% → ~50.4B
    faceless: "faceless",
    saturation: 4,
    economic_potential: 3,
    creation_ease: 2,
    popularity: "high-intent",
    trending: false,
    format: "Long-form"
  },
  {
    id: "entertainment",
    niche: "Entertainment & Comedy",
    topic: "Funny sketches and pop culture commentary",
    rpm: 2.5,
    audienceShare: 0.110,   // ~11% → ~231B (catégorie dominante)
    faceless: "face",
    saturation: 5,
    economic_potential: 2,
    creation_ease: 3,
    popularity: "low-intent",
    trending: false,
    format: "Long-form"
  },
  {
    id: "pop_culture",
    niche: "Pop Culture & Commentary",
    topic: "Social experiments and viral trends",
    rpm: 2.5,
    audienceShare: 0.046,   // ~4.6% → ~96.6B
    faceless: "faceless",
    saturation: 4,
    economic_potential: 2,
    creation_ease: 3,
    popularity: "low-intent",
    trending: true,
    format: "Long-form"
  },
  {
    id: "gaming",
    niche: "Gaming & Esports",
    topic: "Gameplay highlights and tutorials",
    rpm: 2.8,
    audienceShare: 0.092,   // ~9.2% → ~193.2B (2ème plus grande)
    faceless: "faceless",
    saturation: 5,
    economic_potential: 2,
    creation_ease: 3,
    popularity: "low-intent",
    trending: false,
    format: "Long-form"
  },
  {
    id: "kids",
    niche: "Kids & Family",
    topic: "Child-friendly cartoons and toy reviews",
    rpm: 0.8,
    audienceShare: 0.082,   // ~8.2% → ~172.2B (énorme segment)
    faceless: "faceless",
    saturation: 5,
    economic_potential: 1,
    creation_ease: 2,
    popularity: "low-intent",
    trending: false,
    format: "Long-form"
  },
  {
    id: "travel",
    niche: "Travel & Adventure",
    topic: "Destination guides and travel vlogs",
    rpm: 3.5,
    audienceShare: 0.026,   // ~2.6% → ~54.6B
    faceless: "face",
    saturation: 3,
    economic_potential: 2,
    creation_ease: 3,
    popularity: "low-intent",
    trending: false,
    format: "Long-form"
  },
  {
    id: "beauty",
    niche: "Beauty & Fashion",
    topic: "Makeup tutorials and style tips",
    rpm: 4.5,
    audienceShare: 0.038,   // ~3.8% → ~79.8B
    faceless: "face",
    saturation: 4,
    economic_potential: 3,
    creation_ease: 3,
    popularity: "medium-intent",
    trending: false,
    format: "Long-form"
  },
  {
    id: "motivation",
    niche: "Motivation & Personal Development",
    topic: "Inspirational speeches and self-improvement",
    rpm: 4,
    audienceShare: 0.018,   // ~1.8% → ~37.8B
    faceless: "faceless",
    saturation: 4,
    economic_potential: 3,
    creation_ease: 3,
    popularity: "high-intent",
    trending: false,
    format: "Long-form"
  },
  {
    id: "animals",
    niche: "Pets & Animals",
    topic: "Funny animal videos and pet care tips",
    rpm: 1.8,
    audienceShare: 0.028,   // ~2.8% → ~58.8B
    faceless: "faceless",
    saturation: 4,
    economic_potential: 2,
    creation_ease: 2,
    popularity: "low-intent",
    trending: false,
    format: "Long-form"
  },

  {
    id: "clip_song",
    niche: "Music & Clip Song",
    topic: "Lyric videos, music clips, and song compilations",
    rpm: 1.5,
    audienceShare: 0.21,    // ~21% → massive audience base
    faceless: "faceless",
    saturation: 5,
    economic_potential: 1,
    creation_ease: 3,
    popularity: "high-intent",
    trending: false,
    format: "Long-form"
  },

  {
    id: "animation",
    niche: "Animation (2D & 3D)",
    topic: "Animated stories, explainers, and character-driven series",
    rpm: 4.5,
    audienceShare: 0.045,   // ~4.5% → large but competitive segment
    faceless: "faceless",
    saturation: 3,
    economic_potential: 3,
    creation_ease: 1,
    popularity: "high-intent",
    trending: true,
    format: "Long-form"
  },

  // ── SHORTS ────────────────────────────────────────────────────────────────────
  // Les Shorts ont des audienceShare légèrement plus élevés (feed algorithmique agressif)

  {
    id: "short_business",
    niche: "Business, Money & Marketing (Shorts)",
    topic: "Make money online, digital marketing, personal finance",
    rpm: 10,                 // plus haut RPM réaliste
    audienceShare: 0.06,
    faceless: "faceless",
    saturation: 4,
    economic_potential: 5,
    creation_ease: 2,
    popularity: "high-intent",
    trending: false,
    format: "Shorts"
  },
  {
    id: "short_finance",
    niche: "Finance & Investing (Shorts)",
    topic: "Investing tips, crypto basics, saving & budgeting",
    rpm: 12,                 // toujours élevé en RPM
    audienceShare: 0.04,
    faceless: "faceless",
    saturation: 4,
    economic_potential: 5,
    creation_ease: 2,
    popularity: "high-intent",
    trending: true,
    format: "Shorts"
  },
  {
    id: "short_education",
    niche: "Education & Facts (Shorts)",
    topic: "Education, science facts, history facts, learning tips",
    rpm: 9,
    audienceShare: 0.05,
    faceless: "faceless",
    saturation: 3,
    economic_potential: 4,
    creation_ease: 2,
    popularity: "high-intent",
    trending: false,
    format: "Shorts"
  },
  {
    id: "short_tech_auto",
    niche: "Tech, Cars & Gadgets (Shorts)",
    topic: "Tech reviews, gadgets, cars, comparisons",
    rpm: 9,
    audienceShare: 0.055,
    faceless: "faceless",
    saturation: 4,
    economic_potential: 4,
    creation_ease: 2,
    popularity: "high-intent",
    trending: true,
    format: "Shorts"
  },
  {
    id: "short_health_fitness",
    niche: "Health & Fitness (Shorts)",
    topic: "Workouts, wellness tips, health hacks",
    rpm: 7,
    audienceShare: 0.045,
    faceless: "faceless",
    saturation: 4,
    economic_potential: 3,
    creation_ease: 2,
    popularity: "high-intent",
    trending: false,
    format: "Shorts"
  },
  {
    id: "short_food_cooking",
    niche: "Food & Cooking (Shorts)",
    topic: "Quick recipes, kitchen tips",
    rpm: 6,
    audienceShare: 0.048,
    faceless: "faceless",
    saturation: 4,
    economic_potential: 3,
    creation_ease: 2,
    popularity: "high-intent",
    trending: false,
    format: "Shorts"
  },
  {
    id: "short_lifestyle_fashion",
    niche: "Lifestyle & Fashion (Shorts)",
    topic: "Lifestyle tips, fashion, style transformations",
    rpm: 6,
    audienceShare: 0.05,
    faceless: "faceless",
    saturation: 3,
    economic_potential: 3,
    creation_ease: 2,
    popularity: "medium-intent",
    trending: false,
    format: "Shorts"
  },
  {
    id: "short_gaming",
    niche: "Gaming Clips & Highlights (Shorts)",
    topic: "Best moments from popular games",
    rpm: 4,
    audienceShare: 0.072,
    faceless: "faceless",
    saturation: 5,
    economic_potential: 2,
    creation_ease: 1,
    popularity: "low-intent",
    trending: true,
    format: "Shorts"
  },
  {
    id: "short_entertainment",
    niche: "Entertainment, Viral & Pets (Shorts)",
    topic: "Comedy sketches, comedy challenges, celebrity, pets, satisfying clips",
    rpm: 5,
    audienceShare: 0.13,
    faceless: "face",
    saturation: 5,
    economic_potential: 2,
    creation_ease: 2,
    popularity: "low-intent",
    trending: true,
    format: "Shorts"
  },
  {
    id: "short_diy",
    niche: "DIY, Hacks & Home Tips (Shorts)",
    topic: "Life hacks, DIY, home improvement tips",
    rpm: 6,
    audienceShare: 0.04,
    faceless: "faceless",
    saturation: 3,
    economic_potential: 3,
    creation_ease: 2,
    popularity: "high-intent",
    trending: false,
    format: "Shorts"
  },
  {
    id: "short_ranking",
    niche: "Ranking, Lists & Reviews (Shorts)",
    topic: "Top 5 gadgets, tools, products, events",
    rpm: 8,
    audienceShare: 0.04,
    faceless: "faceless",
    saturation: 4,
    economic_potential: 4,
    creation_ease: 2,
    popularity: "high-intent",
    trending: true,
    format: "Shorts"
  },
  {
    id: "short_travel",
    niche: "Travel & Destinations (Shorts)",
    topic: "Travel tips, destinations, mini itineraries",
    rpm: 5,
    audienceShare: 0.03,
    faceless: "faceless",
    saturation: 3,
    economic_potential: 3,
    creation_ease: 2,
    popularity: "medium-intent",
    trending: true,
    format: "Shorts"
  },
  {
    id: "short_motivation",
    niche: "Motivation & Mindset (Shorts)",
    topic: "Motivational quotes, success tips, life lessons",
    rpm: 4,
    audienceShare: 0.025,
    faceless: "faceless",
    saturation: 3,
    economic_potential: 3,
    creation_ease: 2,
    popularity: "medium-intent",
    trending: false,
    format: "Shorts"
  }
];