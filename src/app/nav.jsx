"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import './navbar.scss';
import Image from 'next/image';
import logo from './logo.png';

const NAV_LINKS = [
    { label: "Calculator",  href: "./youtube-revenue-calculator" },
    { label: "Predictor",   href: "./youtube-views-predictor" },
    { 
        label: "Guide", 
        href: "#", 
        subLinks: [
            { label: "How much do YouTubers actually make?", href: "./how-much-do-youtubers-make" },
            { label: "YouTube earnings by country", href: "./youtube-earnings-by-country-calculator" },
            { label: "How much does 100k views pay you?", href: "./how-much-do-100k-youtube-views-pay" },
            { label: "YouTube RPM by niche", href: "./youtube-rpm-calculator-by-niche" }
       
        ] 
    },
    { label: "Niches",      href: "./niches" },
    { label: "Blog",        href: "./blog" },
];

export default function Navbar() {
    const navRef     = useRef();
    const burgerRef  = useRef();
    const mobileRef  = useRef();
    const overlayRef = useRef();
    const dropdownRef = useRef();

    const [menuOpen, setMenuOpen] = useState(false);
    const [guideOpen, setGuideOpen] = useState(false);
    const menuTlRef = useRef(null);

    // ── Entrance Animation ──────────────────────────────────────────
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

            tl.fromTo(navRef.current,
                { filter: "blur(15px)", opacity: 0, scale: 0.5 },
                { filter: "blur(0px)",  opacity: 1, scale: 1, duration: 0.85 }
            )
            .fromTo(".nav__logo",
                { filter: "blur(8px)", opacity: 0, x: -12 },
                { filter: "blur(0px)", opacity: 1, x: 0, duration: 0.55 },
                "-=0.45"
            )
            .fromTo(".nav__link",
                { filter: "blur(6px)", opacity: 0, y: -8 },
                { filter: "blur(0px)", opacity: 1, y: 0, stagger: 0.07, duration: 0.45 },
                "-=0.35"
            )
            .fromTo(".nav__btn--solid",
                { filter: "blur(8px)", opacity: 0, scale: 0.88 },
                { filter: "blur(0px)", opacity: 1, scale: 1, duration: 0.45, ease: "back.out(1.7)" },
                "-=0.25"
            );
        });
        return () => ctx.revert();
    }, []);

    // ── Scroll Logic ───────────────────────────────────────────────
    useEffect(() => {
        let lastY    = 0;
        let hidden   = false;
        const NAV_H  = navRef.current?.offsetHeight ?? 76;
        const THRESH = 80;

        const onScroll = () => {
            const y    = window.scrollY;
            const diff = y - lastY;

            if (y < THRESH) {
                if (hidden) {
                    gsap.to(navRef.current, { y: 0, duration: 0.45, ease: "power3.out" });
                    hidden = false;
                }
            } else if (diff > 4 && !hidden) {
                gsap.to(navRef.current, { y: -(NAV_H + 8), duration: 0.4, ease: "power2.inOut" });
                setGuideOpen(false); // Ferme le dropdown au scroll
                hidden = true;
            } else if (diff < -4 && hidden) {
                gsap.to(navRef.current, { y: 0, duration: 0.45, ease: "power3.out" });
                hidden = false;
            }
            lastY = y;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // ── Mobile Menu Timeline ───────────────────────────────────────
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

    // ── Dropdown Hover Handlers ────────────────────────────────────
    function handleGuideEnter() {
        setGuideOpen(true);
        gsap.fromTo(dropdownRef.current, 
            { opacity: 0, y: 10, filter: "blur(5px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.4, display: "block", ease: "expo.out" }
        );
    }

    function handleGuideLeave() {
        gsap.to(dropdownRef.current, { 
            opacity: 0, 
            y: 10, 
            filter: "blur(5px)", 
            duration: 0.3, 
            onComplete: () => {
                setGuideOpen(false);
                gsap.set(dropdownRef.current, { display: "none" });
            }
        });
    }

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
                            <li 
                                key={l.label} 
                                className="nav__item-container"
                                onMouseEnter={l.subLinks ? handleGuideEnter : null}
                                onMouseLeave={l.subLinks ? handleGuideLeave : null}
                            >
                                <a
                                    href={l.href}
                                    className={`nav__link ${l.subLinks ? 'nav__link--has-sub' : ''}`}
                                    onMouseEnter={!l.subLinks ? handleLinkEnter : null}
                                    onMouseLeave={!l.subLinks ? handleLinkLeave : null}
                                >
                                    {l.label}
                                    {l.subLinks && <span className="nav__link-caret">▾</span>}
                                </a>

                                {l.subLinks && (
                                    <div ref={dropdownRef} className="nav__dropdown" style={{ display: 'none' }}>
                                        <div className="nav__dropdown-inner">
                                            {l.subLinks.map(sub => (
                                                <a key={sub.label} href={sub.href} className="nav__dropdown-item">
                                                    {sub.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
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
                            <li key={l.label} className="mobile-nav__item">
                                {!l.subLinks ? (
                                    <a href={l.href} className="mobile-nav__link" onClick={closeMenu}>
                                        <span className="mobile-nav__link-arrow">→</span>
                                        {l.label}
                                    </a>
                                ) : (
                                    <div className="mobile-nav__sub-container">
                                        <span className="mobile-nav__link mobile-nav__link--label">
                                            <span className="mobile-nav__link-arrow">▾</span>
                                            {l.label}
                                        </span>
                                        <ul className="mobile-nav__sub-list">
                                            {l.subLinks.map(sub => (
                                                <li key={sub.label}>
                                                    <a href={sub.href} className="mobile-nav__sub-link" onClick={closeMenu}>
                                                        {sub.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
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