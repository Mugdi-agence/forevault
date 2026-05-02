// footer.jsx
"use client"
import { useRef } from "react";
import gsap from "gsap";
import './footer.scss';
import logo from './logo.png';
import { getFooterConfig } from "../content/footer";

const SOCIALS = [
    { label: "𝕏", href: "https://x.com/Mugdi_studio" },
];

export default function Footer({ lang = "en" }) {
    const footerRef = useRef();
    const topRef    = useRef();
    const colsRef   = useRef();
    const bottomRef = useRef();

    const { tagline, copy, groups } = getFooterConfig(lang);

    function onLinkEnter(e) {
        gsap.to(e.currentTarget, { x: 4, duration: 0.2, ease: "power2.out" });
    }
    function onLinkLeave(e) {
        gsap.to(e.currentTarget, { x: 0, duration: 0.3, ease: "elastic.out(1, 0.5)" });
    }

    return (
        <footer ref={footerRef} className="footer2">
            <div className="footer2__inner">

                {/* ── Top: brand ── */}
                <div ref={topRef} className="footer2__top">
                    <div className="footer2__brand">
                        <a href={`/${lang}`} className="footer2__logo">
                            <img src={logo.src} alt="Forevault" className="footer2__logo-image" />
                        </a>
                        <p className="footer2__tagline">
                            {tagline.split("\n").map((line, i) => (
                                <span key={i}>{line}{i === 0 && <br />}</span>
                            ))}
                        </p>
                        <div className="footer2__socials">
                            {SOCIALS.map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    className="footer2__social"
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Columns ── */}
                    <div ref={colsRef} className="footer2__cols">
                        {Object.entries(groups).map(([group, links]) => (
                            <div key={group} className="footer2-col">
                                <p className="footer2-col__title">{group}</p>
                                <ul className="footer2-col__list">
                                    {links.map(link => (
                                        <li key={link.label ?? link.href}>
                                            <a
                                                href={link.href}
                                                className="footer2-col__link"
                                                onMouseEnter={onLinkEnter}
                                                onMouseLeave={onLinkLeave}
                                                {...(link.target ? { target: link.target, rel: "noopener noreferrer" } : {})}
                                            >
                                                {link.label ?? link.href}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer2__divider" />

                {/* ── Bottom ── */}
                <div ref={bottomRef} className="footer2__bottom">
                    <p className="footer2__copy">
                        © {new Date().getFullYear()} Forevault. {copy}
                    </p>
                    <p className="footer2__made">
                        Powered By Mugdi For Creators
                    </p>
                </div>

            </div>
        </footer>
    );
}