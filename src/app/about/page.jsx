"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../legal.scss";
import Navbar from "../nav";

export default function AboutPage() {
    const boxRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(boxRef.current, {
                opacity: 0,
                y: 40,
                scale: .97,
                duration: .9,
                ease: "expo.out",
            });
            gsap.from(".about-eyebrow, .about-name, .about-age", {
                opacity: 0,
                y: 14,
                duration: .55,
                stagger: .08,
                delay: .3,
                ease: "power3.out",
            });
            gsap.from(".about-rule", {
                scaleX: 0,
                transformOrigin: "left center",
                duration: .6,
                delay: .52,
                ease: "expo.out",
            });
            gsap.from(".about-p", {
                opacity: 0,
                y: 10,
                duration: .5,
                stagger: .09,
                delay: .6,
                ease: "power2.out",
            });
        }, boxRef);
        return () => ctx.revert();
    }, []);

    return (
        
        <div className="lg-root">
        <Navbar/>

        <a href="/" className="lg-back">
            <span className="lg-back__arrow">←</span>
            Back to Forevault
        </a>

        <div className="about-box" ref={boxRef}>

            <span className="about-deco-quote" aria-hidden="true">"</span>

            <div className="about-inner">

                <span className="about-eyebrow">About Forevault</span>

                <h1 className="about-name">Understanding YouTube Monetization, Clearly.</h1>
                <p className="about-age">Independent analytics project by Qodan</p>

                <div className="about-rule" />

                <p className="about-p">
                    Forevault is an independent YouTube monetization analytics project
                    created and maintained by Qodan, a student developer and YouTube
                    creator focused on understanding how real AdSense revenue works
                    behind the scenes.
                </p>

                <p className="about-p">
                    The project started after a simple observation: most online advice
                    about YouTube earnings is either oversimplified, outdated, or based
                    on isolated screenshots with no context. After Shorts, geography
                    shifts, and changes in advertiser demand, the old “views × number”
                    logic simply stopped making sense.
                </p>

                <p className="about-p">
                    Forevault was built to solve that problem.
                </p>

                <p className="about-p">
                    Instead of guessing income from views alone, the platform models
                    revenue using the variables that actually affect monetization in
                    practice: niche, audience geography, retention behavior, video
                    format, and length. The goal is not to predict exact payouts, but
                    to give creators realistic planning ranges grounded in observed
                    creator benchmarks and market patterns.
                </p>

                <p className="about-p">
                    Everything on this site — from the tools to the educational guides —
                    is built and updated directly by Qodan. User feedback, creator
                    reports, and ongoing research continuously shape the estimation
                    model.
                </p>

                <p className="about-p">
                    This project is developed independently alongside school studies,
                    and evolves weekly as new insights about YouTube monetization
                    emerge.
                </p>

                <p className="about-p" style={{ marginTop: ".4rem", fontStyle: "italic", opacity: .6 }}>
                    Forevault exists for creators who want to understand how the
                    monetization system really works, not how it is usually simplified online.
                </p>

            </div>

            <div className="about-footer">
                <span className="about-footer__label">Forevault.ink</span>
                <span className="about-footer__dot" />
                <span className="about-footer__version">Version 1.0 — Live 2026</span>
                <span className="about-footer__dot" />
                <span className="about-footer__label">Independent project</span>
            </div>

        </div>
    </div>
    );
}