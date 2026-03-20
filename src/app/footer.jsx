// Footer.jsx
"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './footer.scss';

gsap.registerPlugin(ScrollTrigger);

const LINKS = {
    Services: [
        { label: "Terms Of Service", href: "./terms" },
        { label: "Privacy Policy", href: "./privacy" },
        { label: "About", href: "./about" }
    ],

    Product: [
        { label: "Calculator", href: "./calculator" },
        // { label: "Predictor", href: "./predictor" },
        { label: "how it works", href: "../#how-it-works" },
        { label: "Niches", href: "./niches" }
    ],
};

// const SOCIALS = [
//     { label: "𝕏", href: "#" },
//     { label: "▶", href: "#" },
//     { label: "◎", href: "#" },
//     { label: "⌥", href: "#" },
// ];

// Namespacing pour éviter les conflits : footer2
export default function Footer() {
    const footerRef  = useRef();
    const topRef     = useRef();
    const colsRef    = useRef();
    const bottomRef  = useRef();

    // ── Link hover ──
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
                        <a href="/" className="footer2__logo">
                            <span className="footer2__logo-icon">◈</span>
                            <span className="footer2__logo-text">Forevault</span>
                        </a>
                        <p className="footer2__tagline">
                            Estimate, compare and optimise<br />your YouTube revenue.
                        </p>
                        <div className="footer2__socials">
                            {/* {SOCIALS.map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    className="footer2__social"
                                    aria-label={s.label}
                                >
                                    {s.label}
                                </a>
                            ))} */}
                        </div>
                    </div>

                    {/* ── Columns ── */}
                    <div ref={colsRef} className="footer2__cols">
                        {Object.entries(LINKS).map(([group, links]) => (
                            <div key={group} className="footer2-col">
                                <p className="footer2-col__title">{group}</p>
                                <ul className="footer2-col__list">
                                    {links.map(link =>
                                        <li key={link.label ?? link.text ?? link.href}>
                                            <a
                                                href={link.href}
                                                className="footer2-col__link"
                                                onMouseEnter={onLinkEnter}
                                                onMouseLeave={onLinkLeave}
                                                {...(link.target ? { target: link.target, rel: "noopener noreferrer" } : {})}
                                            >
                                                {link.label ?? link.text ?? link.href}
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer2__divider" />

                {/* ── Bottom ── */}
                <div ref={bottomRef} className="footer2__bottom">
                    <p className="footer2__copy">
                        © {new Date().getFullYear()} Forevault. All rights reserved.
                    </p>
                    <p className="footer2__made">
                        Powered By Mugdi For Creators
                    </p>
                </div>

            </div>
        </footer>
    );
}