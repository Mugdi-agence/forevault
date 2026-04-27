import Navbar from "../nav";
import Footer from "../footer";
import RevenueEngine from "../Revenue-Engine";
import CalcContent from "./Calccontent";
import '../styles.scss';

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How accurate is the YouTube revenue calculator?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our calculator uses real RPM benchmarks sourced from creator communities and industry reports, adjusted by niche, geography, video format, watch time, and retention rate. Estimates typically fall within ±20–30% of actual AdSense earnings. Always cross-reference with your own YouTube Studio analytics for precise figures."
            }
        },
        {
            "@type": "Question",
            "name": "What is RPM on YouTube?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "RPM (Revenue Per Mille) is the amount a creator earns per 1,000 video views after YouTube's 45% revenue share. RPM accounts for all monetization sources including ads, channel memberships, and YouTube Premium revenue. It differs from CPM, which is the rate advertisers pay before YouTube's cut."
            }
        },
        {
            "@type": "Question",
            "name": "Why do YouTube Shorts earn much less than long-form videos?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "YouTube Shorts are monetized through the Shorts Revenue Pool rather than standard AdSense impressions. Creators receive a proportional share of a collective pool based on watch time, not individual ad placements. This results in an effective RPM roughly 50–100x lower than long-form content. Shorts are best used as a growth funnel to drive subscribers to your long-form catalog."
            }
        },
        {
            "@type": "Question",
            "name": "Which YouTube niche has the highest RPM?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Finance, investing, and business niches consistently have the highest YouTube RPM, often ranging from $10 to $30+ per 1,000 views. Software tutorials, legal advice, and real estate follow closely. Entertainment, gaming, and vlog content typically fall at the lower end, between $1 and $3 RPM. You can explore all niche RPMs using our Niche Finder tool."
            }
        },
        {
            "@type": "Question",
            "name": "Does video duration affect YouTube earnings?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Videos over 8 minutes unlock mid-roll ad placements, which can increase revenue by 30–60% compared to pre-roll only. Videos over 15 minutes can include two mid-roll ads, and 30+ minute videos allow multiple placements. Our calculator automatically factors in the duration multiplier when you enter your video length."
            }
        },
        {
            "@type": "Question",
            "name": "How does audience geography impact YouTube revenue?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Advertiser CPMs vary dramatically by country. Viewers from the United States, United Kingdom, Canada, and Australia generate significantly higher ad revenue — often 4–6× more than viewers from lower-purchasing-power markets. Our calculator includes a geography multiplier for 80+ countries so you can model revenue based on your actual audience location."
            }
        },
        {
            "@type": "Question",
            "name": "What average retention rate should I enter?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The average YouTube retention rate across all channels is approximately 40–50%. If you're unsure, start with 45% as a baseline. High-performing channels in engaged niches often see 55–65% retention, which our calculator rewards with a higher revenue multiplier. You can find your actual retention rate in YouTube Studio under Analytics → Audience Retention."
            }
        },
        {
            "@type": "Question",
            "name": "Is Forevault's calculator free to use?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the YouTube revenue calculator on Forevault is completely free to use with no account required. All calculations happen locally in your browser — no data is stored or sent to our servers."
            }
        }
    ]
};

export default function Calculator() {
    return (
        <>
            <Navbar />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <RevenueEngine />
            <CalcContent />
            <Footer />
            <div className="fonds" />
        </>
    );
}