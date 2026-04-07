"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import './navbar.scss';
import Image from 'next/image';
import logo from './logo.png';

const NAV_LINKS = [
    { label: "Calculator",  href: "./youtube-revenue-calculator" },
    { label: "Predictor",   href: "./predictor" },
    { label: "How it works", href: "../#how-it-works" },
    { label: "Niches",      href: "./niches" },
    { label: "Blog",        href: "./blog" },
];

export default function Navbar() {
    const navRef     = useRef();
    const burgerRef  = useRef();
    const mobileRef  = useRef();
    const overlayRef = useRef();

    const [menuOpen, setMenuOpen] = useState(false);
    const menuTlRef = useRef(null);

    // ── Entrance: blur(15px) + opacity(0) + scale(0.5) → clear ────────────
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

            // Nav container
            tl.fromTo(navRef.current,
                { filter: "blur(15px)", opacity: 0, scale: 0.5 },
                { filter: "blur(0px)",  opacity: 1, scale: 1, duration: 0.85 }
            )
            // Logo
            .fromTo(".nav__logo",
                { filter: "blur(8px)", opacity: 0, x: -12 },
                { filter: "blur(0px)", opacity: 1, x: 0, duration: 0.55 },
                "-=0.45"
            )
            // Links staggered
            .fromTo(".nav__link",
                { filter: "blur(6px)", opacity: 0, y: -8 },
                { filter: "blur(0px)", opacity: 1, y: 0, stagger: 0.07, duration: 0.45 },
                "-=0.35"
            )
            // CTA
            .fromTo(".nav__btn--solid",
                { filter: "blur(8px)", opacity: 0, scale: 0.88 },
                { filter: "blur(0px)", opacity: 1, scale: 1, duration: 0.45, ease: "back.out(1.7)" },
                "-=0.25"
            );
        });

        return () => ctx.revert();
    }, []);

    // ── Scroll: hide on down, reveal on up ────────────────────────────────
    useEffect(() => {
        let lastY    = 0;
        let hidden   = false;
        const NAV_H  = navRef.current?.offsetHeight ?? 76;
        const THRESH = 80; // don't trigger before 80px of scroll

        const onScroll = () => {
            const y    = window.scrollY;
            const diff = y - lastY;

            if (y < THRESH) {
                // Always visible near top
                if (hidden) {
                    gsap.to(navRef.current, { y: 0, duration: 0.45, ease: "power3.out" });
                    hidden = false;
                }
            } else if (diff > 4 && !hidden) {
                // Scrolling DOWN → slide out upward
                gsap.to(navRef.current, { y: -(NAV_H + 8), duration: 0.4, ease: "power2.inOut" });
                hidden = true;
            } else if (diff < -4 && hidden) {
                // Scrolling UP → slide back in
                gsap.to(navRef.current, { y: 0, duration: 0.45, ease: "power3.out" });
                hidden = false;
            }

            lastY = y;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    useEffect(() => {
        menuTlRef.current = gsap.timeline({ paused: true, defaults: { ease: "expo.out" } })
            .to(overlayRef.current, {
                opacity: 1,
                pointerEvents: "all",
                duration: 0.3,
            })
            .fromTo(mobileRef.current,
                { filter: "blur(10px)", opacity: 0, y: -20 },
                { filter: "blur(0px)",  opacity: 1, y: 0, duration: 0.45 },
                "<0.05"
            )
            .fromTo(".mobile-nav__link",
                { filter: "blur(4px)", opacity: 0, x: -16 },
                { filter: "blur(0px)", opacity: 1, x: 0, stagger: 0.06, duration: 0.38 },
                "-=0.25"
            )
            .fromTo(".mobile-nav__cta",
                { filter: "blur(6px)", opacity: 0, y: 10 },
                { filter: "blur(0px)", opacity: 1, y: 0, duration: 0.35, ease: "back.out(1.5)" },
                "-=0.2"
            );
    }, []);

    function toggleMenu() {
        if (!menuOpen) {
            setMenuOpen(true);
            menuTlRef.current.play();
        } else {
            menuTlRef.current.reverse().then(() => setMenuOpen(false));
        }
    }

    function closeMenu() {
        menuTlRef.current.reverse().then(() => setMenuOpen(false));
    }

    // ── Magnetic hover ─────────────────────────────────────────────────────
    function handleLinkEnter(e) {
        gsap.to(e.currentTarget, { y: -2, duration: 0.22, ease: "power2.out" });
    }
    function handleLinkLeave(e) {
        gsap.to(e.currentTarget, { y: 0, duration: 0.4, ease: "elastic.out(1, 0.5)" });
    }

    return (
        <>
            <nav ref={navRef} className="nav">
                <div className="nav__inner">

                    <a href="/" className="nav__logo">
                        <Image src={logo} alt="Logo" className="nav__logo-image" />
                    </a>

                    <ul className="nav__links">
                        {NAV_LINKS.map(l => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    className="nav__link"
                                    onMouseEnter={handleLinkEnter}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="nav__actions">
                        <a href="./niches" className="nav__btn nav__btn--solid">Get started</a>
                    </div>

                    <button
                        ref={burgerRef}
                        className={`nav__burger ${menuOpen ? "nav__burger--open" : ""}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>

                </div>
            </nav>

            <div
                ref={overlayRef}
                className={`mobile-overlay ${menuOpen ? "mobile-overlay--visible" : ""}`}
                onClick={closeMenu}
            />

            {menuOpen && (
                <div ref={mobileRef} className="mobile-nav">
                    <ul className="mobile-nav__links">
                        {NAV_LINKS.map(l => (
                            <li key={l.href}>
                                <a href={l.href} className="mobile-nav__link" onClick={closeMenu}>
                                    <span className="mobile-nav__link-arrow">→</span>
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mobile-nav__cta">
                        <a href="./niches" className="nav__btn nav__btn--solid">Get started</a>
                    </div>
                </div>
            )}
        </>
    );
}