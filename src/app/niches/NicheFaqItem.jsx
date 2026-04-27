"use client";
import { useState } from "react";

export default function NicheFaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`nf-faq__item ${open ? "nf-faq__item--open" : ""}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
        >
            <button
                className="nf-faq__q"
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
            >
                <span itemProp="name">{q}</span>
                <span className="nf-faq__chevron" aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
            {open && (
                <div
                    className="nf-faq__a"
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