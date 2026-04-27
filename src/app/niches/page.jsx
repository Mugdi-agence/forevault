import Navbar from "../nav";
import Footer from "../footer";
import NicheFinder from "./NicheFinder";
import NicheContent from "./NicheContent";
import './niche-finder.scss';

export const metadata = {
    title: "YouTube Niche Finder — Compare RPM, Saturation & Revenue Potential",
    description:
        "Compare 50+ YouTube niches by real RPM benchmarks, market saturation, " +
        "revenue potential, and ease of content creation. Find the best niche for your channel.",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "What is the highest-paying YouTube niche in 2025?", "acceptedAnswer": { "@type": "Answer", "text": "Finance, investing, and insurance content consistently leads in RPM, often achieving $15–$30+ per 1,000 views in English-language Tier 1 markets. Business strategy, B2B software tutorials, and legal advice follow closely." } },
        { "@type": "Question", "name": "What is RPM and how is it different from CPM?", "acceptedAnswer": { "@type": "Answer", "text": "RPM (Revenue Per Mille) is the amount a creator earns per 1,000 video views after YouTube's 45% share. CPM is what advertisers pay before the cut. RPM ≈ CPM × 0.55." } },
        { "@type": "Question", "name": "Should I choose a niche based only on RPM?", "acceptedAnswer": { "@type": "Answer", "text": "No. RPM is one of five factors: addressable audience size, your ability to produce consistent content, saturation vs. your differentiation angle, and format alignment. A high-RPM niche you abandon beats nothing." } },
        { "@type": "Question", "name": "Do YouTube Shorts have good RPM?", "acceptedAnswer": { "@type": "Answer", "text": "Shorts effective RPM is typically $0.02–$0.08, compared to $2–$20+ for long-form. Use Shorts for subscriber growth and long-form for monetization." } },
        { "@type": "Question", "name": "What does faceless mean in the niche data?", "acceptedAnswer": { "@type": "Answer", "text": "Faceless niches are content categories where you don't appear on camera — animations, voiceovers, screen recordings, or stock footage. Finance explainers and software tutorials are common examples." } }
    ]
};

export default function NichesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Navbar />
            <NicheFinder />
            <NicheContent />
            <Footer />
        </>
    );
}