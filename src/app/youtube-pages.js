export const youtubePages = [
    { slug: 'revenue-calculator', type: 'calculator', title: 'YouTube Revenue Calculator' },
    { slug: 'rpm-calculator-by-niche', type: 'calculator', title: 'YouTube RPM Calculator by Niche' },
    { slug: 'rpm-calculator-by-country', type: 'calculator', title: 'YouTube RPM Calculator by Country' },
    { slug: 'views-to-money-calculator', type: 'calculator', title: 'YouTube Views to Money Calculator' },
    { slug: 'subscribers-to-money-calculator', type: 'calculator', title: 'YouTube Subscribers to Money Calculator' },
    { slug: 'shorts-revenue-calculator', type: 'calculator', title: 'YouTube Shorts Revenue Calculator' },
    { slug: 'live-stream-revenue-calculator', type: 'calculator', title: 'YouTube Live Stream Revenue Calculator' },
  
    { slug: 'how-much-do-1k-views-pay', type: 'views', title: 'How much do 1K views pay?' },
    { slug: 'how-much-do-10k-views-pay', type: 'views', title: 'How much do 10K views pay?' },
    { slug: 'how-much-do-50k-views-pay', type: 'views', title: 'How much do 50K views pay?' },
    { slug: 'how-much-do-100k-views-pay', type: 'views', title: 'How much do 100K views pay?' },
    { slug: 'how-much-do-500k-views-pay', type: 'views', title: 'How much do 500K views pay?' },
    { slug: 'how-much-do-1m-views-pay', type: 'views', title: 'How much do 1M views pay?' },
    { slug: 'how-much-do-10m-views-pay', type: 'views', title: 'How much do 10M views pay?' },
  
    { slug: 'youtube-rpm-usa', type: 'country', title: 'YouTube RPM in the USA' },
    { slug: 'youtube-rpm-uk', type: 'country', title: 'YouTube RPM in the UK' },
    { slug: 'youtube-rpm-canada', type: 'country', title: 'YouTube RPM in Canada' },
    { slug: 'youtube-rpm-australia', type: 'country', title: 'YouTube RPM in Australia' },
    { slug: 'youtube-rpm-germany', type: 'country', title: 'YouTube RPM in Germany' },
    { slug: 'youtube-rpm-france', type: 'country', title: 'YouTube RPM in France' },
  
    { slug: 'youtube-rpm-gaming', type: 'niche', title: 'YouTube RPM for Gaming' },
    { slug: 'youtube-rpm-finance', type: 'niche', title: 'YouTube RPM for Finance' },
    { slug: 'youtube-rpm-education', type: 'niche', title: 'YouTube RPM for Education' },
    { slug: 'youtube-rpm-tech', type: 'niche', title: 'YouTube RPM for Tech' },
    { slug: 'youtube-rpm-fitness', type: 'niche', title: 'YouTube RPM for Fitness' },
  
    { slug: 'how-do-youtubers-get-paid', type: 'knowledge', title: 'How Do YouTubers Get Paid?' },
    { slug: 'how-much-do-youtubers-make-per-subscriber', type: 'knowledge', title: 'How Much Do YouTubers Make per Subscriber?' },
    { slug: 'how-much-do-youtubers-make-per-like', type: 'knowledge', title: 'How Much Do YouTubers Make per Like?' },
    { slug: 'what-is-a-good-youtube-rpm', type: 'knowledge', title: 'What Is a Good YouTube RPM?' },
    { slug: 'why-is-my-youtube-rpm-low', type: 'knowledge', title: 'Why Is My YouTube RPM Low?' },
  ];
  
  export const getYouTubePage = (slug) =>
    youtubePages.find((page) => page.slug === slug) || null;