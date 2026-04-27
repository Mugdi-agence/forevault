import Navbar from "../nav";
import LegalAnimator from "../LegalAnimator";
import "../legal.scss";

export const metadata = {
    title: "Privacy Policy — Forevault.ink",
    description: "Learn how Forevault.ink handles your data, what we collect, and your rights as a user.",
};

const SECTIONS = [
    {
        num:   "01",
        title: "Introduction & Commitment",
        content: (
            <>
                <p className="legal-p">
                    Forevault.ink is committed to protecting your privacy. This
                    Privacy Policy explains what information we collect (and what
                    we do not), how it is used, and what rights you have regarding
                    your data when you visit or use our Service.
                </p>
                <p className="legal-p">
                    This policy is written in plain English because we believe
                    everyone has the right to understand how their data is
                    handled — not just lawyers.
                </p>
            </>
        ),
    },
    {
        num:   "02",
        title: "Data We Do Not Collect",
        content: (
            <>
                <p className="legal-p">
                    Forevault.ink does <strong>not</strong> collect, store, or
                    process any personally identifiable information (PII). There
                    are no user accounts, no registration forms, and no database
                    of personal records. Specifically:
                </p>
                <ul className="legal-ul">
                    <li>We do not collect your name, email address, or phone number</li>
                    <li>We do not store the values you enter into the calculator</li>
                    <li>We do not build user profiles or track individual users across sessions</li>
                    <li>We do not sell, rent, or trade any user data to third parties</li>
                </ul>
                <div className="legal-note">
                    <span className="legal-note__icon">ℹ️</span>
                    <span>
                        All calculations happen entirely in your browser. No form data
                        is transmitted to our servers.
                    </span>
                </div>
            </>
        ),
    },
    {
        num:   "03",
        title: "Analytics & Usage Data",
        content: (
            <>
                <p className="legal-p">
                    To understand how visitors interact with the Service and to
                    improve the user experience, we use the following analytics
                    tools:
                </p>
                <ul className="legal-ul">
                    <li>
                        <strong>Google Analytics (GA4)</strong> — collects
                        anonymised usage data such as page views, session duration,
                        device type, and approximate geographic region. IP addresses
                        are anonymised before storage.
                    </li>
                    <li>
                        <strong>Vercel Analytics</strong> — provides lightweight,
                        privacy-friendly performance metrics (load times, error rates)
                        without tracking individual users.
                    </li>
                </ul>
                <p className="legal-p">
                    These tools collect data in aggregate. We cannot identify you
                    personally from analytics data. You can opt out of Google
                    Analytics tracking by installing the{" "}
                    <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Google Analytics Opt-out Browser Add-on
                    </a>.
                </p>
            </>
        ),
    },
    {
        num:   "04",
        title: "Cookies",
        content: (
            <>
                <p className="legal-p">
                    Forevault.ink uses cookies to improve the browsing experience
                    and deliver relevant advertising. Cookies are small text files
                    stored in your browser. We use the following categories:
                </p>
                <ul className="legal-ul">
                    <li>
                        <strong>Essential cookies</strong> — required for basic
                        site functionality. These cannot be disabled without affecting
                        core features.
                    </li>
                    <li>
                        <strong>Analytics cookies</strong> — set by Google Analytics
                        to track aggregated usage patterns. These are anonymised and
                        do not identify individuals.
                    </li>
                    <li>
                        <strong>Advertising cookies</strong> — set by Google AdSense
                        and other ad networks to serve contextually relevant ads.
                        These may track your browsing behaviour across websites.
                    </li>
                </ul>
                <p className="legal-p">
                    You can manage or disable cookies at any time through your
                    browser settings. Note that disabling certain cookies may
                    affect your experience on this and other websites. Refer to
                    your browser's help section for instructions:
                </p>
                <ul className="legal-ul">
                    <li>Chrome: Settings → Privacy and Security → Cookies</li>
                    <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
                    <li>Safari: Preferences → Privacy → Cookies</li>
                    <li>Edge: Settings → Cookies and Site Permissions</li>
                </ul>
            </>
        ),
    },
    {
        num:   "05",
        title: "Advertising",
        content: (
            <>
                <p className="legal-p">
                    Forevault.ink may display advertisements served by third-party
                    ad networks, including <strong>Google AdSense</strong>.
                    These networks may use cookies and web beacons to collect
                    data about your visits to this and other websites in order to
                    provide advertisements tailored to your interests.
                </p>
                <p className="legal-p">
                    We do not have access to, or control over, the cookies used
                    by third-party advertisers. You can opt out of personalised
                    advertising from Google by visiting{" "}
                    <a
                        href="https://www.google.com/settings/ads"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Google Ad Settings
                    </a>
                    {" "}or the{" "}
                    <a
                        href="https://optout.aboutads.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Network Advertising Initiative opt-out page
                    </a>.
                </p>
                <div className="legal-warn">
                    <span className="legal-warn__icon">ℹ️</span>
                    <span>
                        Forevault.ink is an independent tool. While the core calculator is free to use,
                        the standalone website includes third-party advertising (Google AdSense) to
                        support development, hosting costs, and future updates.
                    </span>
                </div>
            </>
        ),
    },
    {
        num:   "06",
        title: "Third-Party Services",
        content: (
            <>
                <p className="legal-p">
                    The Service may contain links to or integrate with third-party
                    services (e.g. YouTube, social media platforms). This Privacy
                    Policy does not apply to those third-party services. We
                    encourage you to read their respective privacy policies before
                    interacting with them.
                </p>
                <p className="legal-p">
                    Third-party services currently integrated or referenced:
                </p>
                <ul className="legal-ul">
                    <li>
                        Google LLC (Analytics, AdSense) —{" "}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                            Google Privacy Policy
                        </a>
                    </li>
                    <li>
                        Vercel Inc. (Hosting, Analytics) —{" "}
                        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                            Vercel Privacy Policy
                        </a>
                    </li>
                </ul>
            </>
        ),
    },
    {
        num:   "07",
        title: "Your Rights",
        content: (
            <>
                <p className="legal-p">
                    Depending on your jurisdiction, you may have the following
                    rights regarding your personal data:
                </p>
                <ul className="legal-ul">
                    <li><strong>Right of access</strong> — request a copy of data held about you</li>
                    <li><strong>Right to erasure</strong> — request deletion of any data associated with you</li>
                    <li><strong>Right to object</strong> — object to processing of your data for certain purposes</li>
                    <li><strong>Right to restrict processing</strong> — request that processing be limited</li>
                    <li><strong>Right to data portability</strong> — receive your data in a portable format</li>
                </ul>
                <p className="legal-p">
                    As Forevault.ink does not collect personally identifiable
                    information, most of these rights have limited practical
                    application. However, if you believe we hold data about you
                    or have concerns about how your data is processed, please
                    contact us.
                </p>
            </>
        ),
    },
    {
        num:   "08",
        title: "Contact",
        content: (
            <p className="legal-p">
                For any questions, concerns, or requests relating to this Privacy
                Policy or your personal data, please reach out through the official
                Forevault social media channels. We aim to respond to all privacy
                enquiries within 14 business days. We do not currently have a
                dedicated privacy email but will provide one as the service grows.
            </p>
        ),
    },
    {
        num:   "09",
        title: "Changes to This Policy",
        content: (
            <p className="legal-p">
                We reserve the right to update this Privacy Policy at any time.
                Changes will be effective immediately upon posting to the Service
                with an updated effective date. We encourage you to review this
                page periodically. Your continued use of the Service after any
                changes constitutes your acceptance of the updated policy.
            </p>
        ),
    },
];

export default function PrivacyPage() {
    return (
        <div className="lg-root">
            <Navbar />
            <a href="/" className="lg-back">
                <span className="lg-back__arrow">←</span>
                Back to Forevault
            </a>

            <LegalAnimator>
                <div className="legal-hero">
                    <span className="legal-hero__badge">Legal</span>
                    <h1 className="legal-hero__title">Privacy Policy</h1>
                    <p className="legal-hero__meta">
                        Effective date: January 1, 2026 &nbsp;·&nbsp; Last updated: March 2026
                    </p>
                </div>

                <div className="legal-body">
                    {SECTIONS.map((s, i) => (
                        <div key={s.num}>
                            <section className="legal-section">
                                <div className="legal-section__head">
                                    <span className="legal-section__num">{s.num}</span>
                                    <h2 className="legal-section__title">{s.title}</h2>
                                </div>
                                {s.content}
                            </section>
                            {i < SECTIONS.length - 1 && (
                                <div className="legal-sep" style={{ marginTop: "2rem" }} />
                            )}
                        </div>
                    ))}
                </div>

                <div className="legal-foot">
                    <span className="legal-foot__copy">© 2026 Forevault.ink — All rights reserved</span>
                    <span className="legal-foot__updated">
                        <span />
                        Last updated March 2026
                    </span>
                </div>
            </LegalAnimator>
        </div>
    );
}