// src/app/blog/home/page.jsx
// ─────────────────────────────────────────────────────────────────────────────
// SERVER COMPONENT (SSR) — page d'accueil du blog
// ─────────────────────────────────────────────────────────────────────────────

import dynamic from "next/dynamic";
import Navbar  from "../../nav";
import Footer  from "../../footer";
import "./blog-home-styles.scss";

export const metadata = {
    title: "Creator Notes — YouTube Strategy, Growth & Monetization",
    description:
        "Straight talk on YouTube algorithm, retention, viral formats and channel monetization. " +
        "In-depth guides written for creators who want to understand the system.",
};

const BlogHome = dynamic(
    () => import("./BlogHome"),
    {
        ssr: true,
        loading: () => (
            <div className="bh-loading" aria-label="Loading…">
                <span className="bh-loading__spinner" />
            </div>
        ),
    }
);

export default function BlogHomePage() {
    return (
        <div className="bh-app">
            <Navbar />
            <main className="bh-main">
                <BlogHome />
            </main>
            <Footer />
        </div>
    );
}
