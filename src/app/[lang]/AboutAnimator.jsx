"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutAnimator({ children, extraTargets = "" }) {
    const boxRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(boxRef.current, {
                opacity: 0, y: 40, scale: .97,
                duration: .9, ease: "expo.out",
            });
            gsap.from(".about-eyebrow, .about-name, .about-age", {
                opacity: 0, y: 14,
                duration: .55, stagger: .08, delay: .3,
                ease: "power3.out",
            });
            gsap.from(".about-rule", {
                scaleX: 0,
                transformOrigin: "left center",
                duration: .6, delay: .52,
                ease: "expo.out",
            });
            gsap.from(`.about-p${extraTargets ? `, ${extraTargets}` : ""}`, {
                opacity: 0, y: 10,
                duration: .5, stagger: .09, delay: .6,
                ease: "power2.out",
            });
        }, boxRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="about-box" ref={boxRef}>
            {children}
        </div>
    );
}