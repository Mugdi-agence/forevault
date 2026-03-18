// Navbar.jsx
"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import './navbar.scss';

const NAV_LINKS = [
    { label: "Calculator",  href: "./calculator" },
    // { label: "Predictor",  href: "./predictor" },
    { label: "how it works",      href: "../#how-it-works" },
    { label: "Niches",      href: "./niches" },
];

export default function Navbar() {
    const navRef      = useRef();
    const logoRef     = useRef();
    const linksRef    = useRef();
    const ctaRef      = useRef();
    const burgerRef   = useRef();
    const mobileRef   = useRef();
    const overlayRef  = useRef();

    const [menuOpen,   setMenuOpen]   = useState(false);
    const [scrolled,   setScrolled]   = useState(false);
    const menuTlRef = useRef(null);

    // ── Entrance ───────────────────────────────────────────
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

            tl.from(navRef.current, {
                y: -80,
                opacity: 0,
                duration: 0.9,
            })
            .from(logoRef.current, {
                opacity: 0,
                x: -16,
                duration: 0.6,
            }, "-=0.5")
            .from(".nav__link", {
                opacity: 0,
                y: -10,
                stagger: 0.07,
                duration: 0.5,
            }, "-=0.4")
            .from(ctaRef.current, {
                opacity: 0,
                scale: 0.88,
                duration: 0.45,
                ease: "back.out(1.7)",
            }, "-=0.3");
        });

        return () => ctx.revert();
    }, []);

    // ── Scroll blur ────────────────────────────────────────
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // ── Mobile menu GSAP timeline ──────────────────────────
    useEffect(() => {
        menuTlRef.current = gsap.timeline({ paused: true, defaults: { ease: "expo.out" } })
            .to(overlayRef.current, {
                opacity: 1,
                pointerEvents: "all",
                duration: 0.35,
            })
            .from(mobileRef.current, {
                y: -30,
                opacity: 0,
                duration: 0.45,
            }, "<0.05")
            .from(".mobile-nav__link", {
                opacity: 0,
                x: -20,
                stagger: 0.07,
                duration: 0.4,
            }, "-=0.25")
            .from(".mobile-nav__cta", {
                opacity: 0,
                y: 10,
                duration: 0.35,
                ease: "back.out(1.5)",
            }, "-=0.2");
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

    // ── Link hover magnetic effect ─────────────────────────
    function handleLinkEnter(e) {
        gsap.to(e.currentTarget, { y: -2, duration: 0.25, ease: "power2.out" });
    }
    function handleLinkLeave(e) {
        gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: "elastic.out(1, 0.5)" });
    }

    return (
        <>
            <nav ref={navRef} className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
                <div className="nav__inner">

                    {/* Logo */}
                    <a ref={logoRef} href="/" className="nav__logo">
                        <span className="nav__logo-icon">◈</span>
                        <span className="nav__logo-text">Forevault</span>
                    </a>

                    {/* Desktop links */}
                    <ul ref={linksRef} className="nav__links">
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

                    {/* Desktop CTA */}
                    <div ref={ctaRef} className="nav__actions">
                        <a href="./niches" className="nav__btn nav__btn--solid">Get started</a>
                    </div>

                    {/* Burger */}
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

            {/* Mobile overlay */}
            <div
                ref={overlayRef}
                className={`mobile-overlay ${menuOpen ? "mobile-overlay--visible" : ""}`}
                onClick={closeMenu}
            ></div>

            {/* Mobile drawer */}
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