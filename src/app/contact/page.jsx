import Navbar from "../nav";
import AboutAnimator from "../AboutAnimator";
import "../legal.scss";

export const metadata = {
    title: "Contact — Forevault.ink",
    description: "Get in touch with Forevault for support, feedback, bug reports, or collaboration inquiries.",
};

export default function ContactPage() {
    return (
        <div className="lg-root">
            <Navbar />
            <a href="/" className="lg-back">
                <span className="lg-back__arrow">←</span>
                Back to Forevault
            </a>

            <AboutAnimator extraTargets=".contact-group">
                <div className="about-inner">
                    <span className="about-eyebrow">Get in touch</span>
                    <h1 className="about-name">Contact Forevault</h1>
                    <p className="about-age">Support · Feedback · Collaborations</p>

                    <div className="about-rule" />

                    <p className="about-p">
                        Forevault is an independent project developed by a single creator.
                        If you have a question, found a bug, or want to suggest an improvement,
                        you can reach out directly using the contact details below.
                    </p>
                    <p className="about-p">
                        Every message is read personally.
                        Response times are usually between 24 and 48 hours.
                    </p>

                    <div className="contact-group" style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                        <p className="about-p" style={{ margin: 0 }}>
                            <strong className="about-hl">Email</strong><br />
                            For all inquiries, please contact:<br />
                            <a href="mailto:contact.mugdi@gmail.com">contact.mugdi@gmail.com</a>
                        </p>
                        <p className="about-p" style={{ margin: 0 }}>
                            <strong className="about-hl">Purpose of contact</strong><br />
                            • Feature requests or improvements<br />
                            • Bug reports or technical issues<br />
                            • General questions about the tools<br />
                            • Collaboration inquiries
                        </p>
                        <p className="about-p" style={{ margin: 0 }}>
                            <strong className="about-hl">Response time</strong><br />
                            Usually within 24–48 hours depending on availability.
                        </p>
                    </div>
                </div>

                <div className="about-footer">
                    <span className="about-footer__label">Forevault.ink</span>
                    <span className="about-footer__dot" />
                    <span className="about-footer__version">Contact page</span>
                    <span className="about-footer__dot" />
                    <span className="about-footer__label">Direct support</span>
                </div>
            </AboutAnimator>
        </div>
    );
}