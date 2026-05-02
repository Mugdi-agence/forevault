"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LegalAnimator({ children }) {
    const boxRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(boxRef.current, {
                opacity: 0, y: 38, scale: .97,
                duration: .85, ease: "expo.out",
            });
            gsap.from(".legal-section", {
                opacity: 0, y: 12,
                duration: .45, stagger: .06, delay: .4,
                ease: "power2.out",
            });
        }, boxRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="legal-box" ref={boxRef}>
            {children}
        </div>
    );
}