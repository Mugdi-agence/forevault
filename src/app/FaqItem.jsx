"use client";
import { useState } from "react";

export default function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`calc-faq__item ${open ? "calc-faq__item--open" : ""}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
        >
            <button
                className="calc-faq__q"
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
            >
                <span itemProp="name">{q}</span>
                <span className="calc-faq__chevron" aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
            {open && (
                <div
                    className="calc-faq__a"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                >
                    <p itemProp="text">{a}</p>
                </div>
            )}
        </div>
    );
}