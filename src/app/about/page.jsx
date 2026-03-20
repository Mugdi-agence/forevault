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
            {/* ── back link ───────────────────────────────────────────────── */}
            <a href="/" className="lg-back">
                <span className="lg-back__arrow">←</span>
                Back to Forevault
            </a>

            {/* ── about box ───────────────────────────────────────────────── */}
            <div className="about-box" ref={boxRef}>

                {/* decorative giant quote mark top-left */}
                <span className="about-deco-quote" aria-hidden="true">"</span>

                <div className="about-inner">

                    <span className="about-eyebrow">About the creator</span>

                    <h1 className="about-name">Hey, I'm Qodan.</h1>
                    <p className="about-age">17 years old · High school student · Builder</p>

                    <div className="about-rule" />

                    <p className="about-p">
                        I'm a high school student passionate about{" "}
                        <strong>web development</strong> and{" "}
                        <strong>YouTube content creation</strong>. While exploring the
                        creator economy, I kept running into the same frustrating
                        problem — there was no reliable way to forecast real YouTube
                        earnings, especially after Shorts completely changed the
                        monetisation landscape.
                    </p>

                    <p className="about-p">
                        So I built{" "}
                        <strong className="about-hl">Forevault.ink</strong>
                        {" "}to fix that. The goal is simple: give every creator
                        — from 100 subscribers to 10 million — a transparent,
                        data-driven tool to estimate revenue based on real RPM
                        benchmarks, niche specifics, geography, and video format.
                    </p>

                    <p className="about-p">
                        The entire site is built by me, usually squeezed in between
                        math classes and exam prep. What started as a weekend side
                        project has grown into something I'm genuinely proud of — and
                        it's still evolving every week.
                    </p>

                    <p className="about-p">
                        Every piece of user feedback I receive directly shapes the
                        algorithm. My goal for <strong>2026</strong> is to make the
                        revenue predictor as close to real-world AdSense figures as
                        possible — no fluff, no vague ranges, just honest estimates
                        you can actually plan around.
                    </p>

                    <p className="about-p" style={{ marginTop: ".4rem", fontStyle: "italic", opacity: .6 }}>
                        Thanks for being here. This one's for every creator who's ever
                        wondered whether the numbers will ever make sense.
                    </p>

                </div>

                {/* ── footer strip ────────────────────────────────────────── */}
                <div className="about-footer">
                    <span className="about-footer__label">Forevault.ink</span>
                    <span className="about-footer__dot" />
                    <span className="about-footer__version">v1.0 · Live 2026</span>
                    <span className="about-footer__dot" />
                    <span className="about-footer__label">Built with fun !</span>
                </div>

            </div>
        </div>
    );
}