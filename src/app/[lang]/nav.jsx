"use client"
import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import './navbar.scss';
import Image from 'next/image';
import logo from './logo.png';
import { getNavLinks, getNavCta } from "../content/nav";

const LANGUAGES = [
    { code: "en", label: "English",    native: "English",   flag: "🇬🇧" },
    { code: "fr", label: "French",     native: "Français",  flag: "🇫🇷" },
    { code: "es", label: "Spanish",    native: "Español",   flag: "🇪🇸" },
    { code: "de", label: "German",     native: "Deutsch",   flag: "🇩🇪" },
    { code: "pt", label: "Portuguese", native: "Português", flag: "🇧🇷" },
    { code: "ja", label: "Japanese",   native: "日本語",     flag: "🇯🇵" },
    { code: "ko", label: "Korean",     native: "한국어",     flag: "🇰🇷" },
];

export default function Navbar({ lang = "en" }) {
    const NAV_LINKS = getNavLinks(lang);
    const cta       = getNavCta(lang);
    const router    = useRouter();
    const pathname  = usePathname();

    const navRef      = useRef();
    const burgerRef   = useRef();
    const mobileRef   = useRef();
    const overlayRef  = useRef();
    const dropdownRef = useRef();
    const langDropRef = useRef();
    const closeTimerRef = useRef(null);
    const itemRefs    = useRef([]);

    const [menuOpen,  setMenuOpen]  = useState(false);
    const [guideOpen, setGuideOpen] = useState(false);
    const [langOpen,  setLangOpen]  = useState(false);
    const menuTlRef = useRef(null);

    const currentLang = LANGUAGES.find(l => l.code === lang) ?? LANGUAGES[0];

    function switchLang(code) {
        const segments = pathname.split("/").filter(Boolean);
        if (LANGUAGES.some(l => l.code === segments[0])) segments[0] = code;
        else segments.unshift(code);
        router.push("/" + segments.join("/"));
        closeLang(true);
    }

    const openLang = useCallback(() => {
        if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; }
        if (langOpen) return;
        setLangOpen(true);
        const el = langDropRef.current;
        gsap.set(el, { display: "block" });
        gsap.fromTo(el,
            { opacity: 0, y: -8, scale: 0.96, transformOrigin: "top right" },
            { opacity: 1, y: 0,  scale: 1,    duration: 0.3, ease: "expo.out" }
        );
        gsap.fromTo(itemRefs.current,
            { opacity: 0, y: 6 },
            { opacity: 1, y: 0, stagger: 0.025, duration: 0.25, ease: "power2.out", delay: 0.08 }
        );
    }, [langOpen]);

    const closeLang = useCallback((immediate = false) => {
        const doClose = () => {
            const el = langDropRef.current;
            if (!el) return;
            gsap.to(el, {
                opacity: 0, y: -6, scale: 0.96, transformOrigin: "top right",
                duration: 0.18, ease: "power2.in",
                onComplete: () => { gsap.set(el, { display: "none" }); setLangOpen(false); }
            });
        };
        if (immediate) doClose();
        else closeTimerRef.current = setTimeout(doClose, 130);
    }, []);

    const cancelClose = useCallback(() => {
        if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; }
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({ defaults: { ease: "expo.out" } })
                .fromTo(navRef.current,
                    { filter: "blur(15px)", opacity: 0, scale: 0.5 },
                    { filter: "blur(0px)",  opacity: 1, scale: 1, duration: 0.85 })
                .fromTo(".nav__logo",
                    { filter: "blur(8px)", opacity: 0, x: -12 },
                    { filter: "blur(0px)", opacity: 1, x: 0, duration: 0.55 }, "-=0.45")
                .fromTo(".nav__link",
                    { filter: "blur(6px)", opacity: 0, y: -8 },
                    { filter: "blur(0px)", opacity: 1, y: 0, stagger: 0.07, duration: 0.45 }, "-=0.35")
                .fromTo(".nav__btn--solid",
                    { filter: "blur(8px)", opacity: 0, scale: 0.88 },
                    { filter: "blur(0px)", opacity: 1, scale: 1, duration: 0.45, ease: "back.out(1.7)" }, "-=0.25");
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        let lastY = 0, hidden = false;
        const NAV_H = navRef.current?.offsetHeight ?? 76;
        const onScroll = () => {
            const y = window.scrollY, diff = y - lastY;
            if (y < 80) {
                if (hidden) { gsap.to(navRef.current, { y: 0, duration: 0.45, ease: "power3.out" }); hidden = false; }
            } else if (diff > 4 && !hidden) {
                gsap.to(navRef.current, { y: -(NAV_H + 8), duration: 0.4, ease: "power2.inOut" });
                setGuideOpen(false); closeLang(true); hidden = true;
            } else if (diff < -4 && hidden) {
                gsap.to(navRef.current, { y: 0, duration: 0.45, ease: "power3.out" }); hidden = false;
            }
            lastY = y;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [closeLang]);

    useEffect(() => {
        menuTlRef.current = gsap.timeline({ paused: true, defaults: { ease: "expo.out" } })
            .to(overlayRef.current, { opacity: 1, pointerEvents: "all", duration: 0.3 })
            .fromTo(mobileRef.current,
                { filter: "blur(10px)", opacity: 0, y: -20 },
                { filter: "blur(0px)",  opacity: 1, y: 0, duration: 0.45 }, "<0.05")
            .fromTo(".mobile-nav__link",
                { filter: "blur(4px)", opacity: 0, x: -16 },
                { filter: "blur(0px)", opacity: 1, x: 0, stagger: 0.06, duration: 0.38 }, "-=0.25")
            .fromTo(".mobile-nav__cta",
                { filter: "blur(6px)", opacity: 0, y: 10 },
                { filter: "blur(0px)", opacity: 1, y: 0, duration: 0.35, ease: "back.out(1.5)" }, "-=0.2");
    }, []);

    function toggleMenu() {
        if (!menuOpen) { setMenuOpen(true); menuTlRef.current.play(); }
        else { menuTlRef.current.reverse().then(() => setMenuOpen(false)); }
    }
    function closeMenu() { menuTlRef.current.reverse().then(() => setMenuOpen(false)); }

    function handleGuideEnter() {
        setGuideOpen(true);
        gsap.fromTo(dropdownRef.current,
            { opacity: 0, y: 10, filter: "blur(5px)" },
            { opacity: 1, y: 0,  filter: "blur(0px)", duration: 0.4, display: "block", ease: "expo.out" });
    }
    function handleGuideLeave() {
        gsap.to(dropdownRef.current, {
            opacity: 0, y: 10, filter: "blur(5px)", duration: 0.3,
            onComplete: () => { setGuideOpen(false); gsap.set(dropdownRef.current, { display: "none" }); },
        });
    }
    function handleLinkEnter(e) { gsap.to(e.currentTarget, { y: -2, duration: 0.22, ease: "power2.out" }); }
    function handleLinkLeave(e) { gsap.to(e.currentTarget, { y: 0,  duration: 0.4,  ease: "elastic.out(1, 0.5)" }); }

    return (
        <>
            <nav ref={navRef} className="nav">
                <div className="nav__inner">

                    <a href={`/${lang}`} className="nav__logo">
                        <Image src={logo} alt="Logo" className="nav__logo-image" />
                    </a>

                    <ul className="nav__links">
                        {NAV_LINKS.map(l => (
                            <li key={l.label} className="nav__item-container"
                                onMouseEnter={l.subLinks ? handleGuideEnter : null}
                                onMouseLeave={l.subLinks ? handleGuideLeave : null}>
                                <a href={l.href}
                                    className={`nav__link ${l.subLinks ? "nav__link--has-sub" : ""}`}
                                    onMouseEnter={!l.subLinks ? handleLinkEnter : null}
                                    onMouseLeave={!l.subLinks ? handleLinkLeave : null}>
                                    {l.label}
                                    {l.subLinks && <span className="nav__link-caret">▾</span>}
                                </a>
                                {l.subLinks && (
                                    <div ref={dropdownRef} className="nav__dropdown" style={{ display: "none" }}>
                                        <div className="nav__dropdown-inner">
                                            {l.subLinks.map(sub => (
                                                <a key={sub.label} href={sub.href} className="nav__dropdown-item">{sub.label}</a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="nav__actions">

                        {/* ── Lang selector ── */}
                        <div
                            className={`nav__lang ${langOpen ? "nav__lang--open" : ""}`}
                            onMouseEnter={openLang}
                            onMouseLeave={() => closeLang()}
                        >
                            <button className="nav__lang-trigger" aria-label="Select language" aria-expanded={langOpen}>
                                <span className="nav__lang-flag">{currentLang.flag}</span>
                                <span className="nav__lang-code">{currentLang.code.toUpperCase()}</span>
                                <svg className="nav__lang-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>

                            <div
                                ref={langDropRef}
                                className="nav__lang-dropdown"
                                style={{ display: "none" }}
                                onMouseEnter={cancelClose}
                                onMouseLeave={() => closeLang()}
                            >
                                <div className="nav__lang-inner">
                                    <p className="nav__lang-heading">Language / Langue</p>
                                    <div className="nav__lang-grid">
                                        {LANGUAGES.map((l, i) => (
                                            <button
                                                key={l.code}
                                                ref={el => { itemRefs.current[i] = el; }}
                                                className={`nav__lang-item ${l.code === lang ? "nav__lang-item--active" : ""}`}
                                                onClick={() => switchLang(l.code)}
                                            >
                                                <span className="nav__lang-item-flag">{l.flag}</span>
                                                <span className="nav__lang-item-native">{l.native}</span>
                                                {l.code === lang && (
                                                    <svg className="nav__lang-item-check" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                        <path d="M1.5 5.5L4.5 8.5L9.5 2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href={cta.href} className="nav__btn nav__btn--solid">{cta.label}</a>
                    </div>

                    <button ref={burgerRef}
                        className={`nav__burger ${menuOpen ? "nav__burger--open" : ""}`}
                        onClick={toggleMenu} aria-label="Toggle menu">
                        <span /><span /><span />
                    </button>
                </div>
            </nav>

            <div ref={overlayRef}
                className={`mobile-overlay ${menuOpen ? "mobile-overlay--visible" : ""}`}
                onClick={closeMenu} />

            {menuOpen && (
                <div ref={mobileRef} className="mobile-nav">
                    <ul className="mobile-nav__links">
                        {NAV_LINKS.map(l => (
                            <li key={l.label} className="mobile-nav__item">
                                {!l.subLinks ? (
                                    <a href={l.href} className="mobile-nav__link" onClick={closeMenu}>
                                        <span className="mobile-nav__link-arrow">→</span>{l.label}
                                    </a>
                                ) : (
                                    <div className="mobile-nav__sub-container">
                                        <span className="mobile-nav__link mobile-nav__link--label">
                                            <span className="mobile-nav__link-arrow">▾</span>{l.label}
                                        </span>
                                        <ul className="mobile-nav__sub-list">
                                            {l.subLinks.map(sub => (
                                                <li key={sub.label}>
                                                    <a href={sub.href} className="mobile-nav__sub-link" onClick={closeMenu}>{sub.label}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* ── Lang mobile ── */}
                    <div className="mobile-nav__langs">
                        <p className="mobile-nav__langs-label">Language</p>
                        <div className="mobile-nav__langs-grid">
                            {LANGUAGES.map(l => (
                                <button
                                    key={l.code}
                                    className={`mobile-nav__lang-btn ${l.code === lang ? "mobile-nav__lang-btn--active" : ""}`}
                                    onClick={() => { switchLang(l.code); closeMenu(); }}
                                >
                                    <span className="mobile-nav__lang-flag">{l.flag}</span>
                                    <span className="mobile-nav__lang-native">{l.native}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mobile-nav__cta">
                        <a href={cta.href} className="nav__btn nav__btn--solid">{cta.label}</a>
                    </div>
                </div>
            )}
        </>
    );
}