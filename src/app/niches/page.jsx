// niche-finder.jsx
"use client"
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { niches } from "../constants";
import gsap from "gsap";
import Navbar from "../nav";
import Footer from "../footer";
import './niche-finder.scss';

function ScoreBar({ value, max = 5, variant = "default" }) {
    return (
        <div className="score-bar">
            {Array.from({ length: max }).map((_, i) => (
                <span
                    key={i}
                    className={`score-bar__pip score-bar__pip--${variant} ${i < value ? "score-bar__pip--on" : ""}`}
                />
            ))}
        </div>
    );
}

function StatRow({ label, children }) {
    return (
        <div className="niche-stat">
            <span className="niche-stat__label">{label}</span>
            <span className="niche-stat__value">{children}</span>
        </div>
    );
}

// ── openId + setOpenId viennent du parent ──────────────────
function NicheCard({ niche, index, openId, setOpenId }) {
    const detailRef = useRef();
    const cardRef   = useRef();
    const router    = useRouter();

    const open = openId === niche.id;

    // ── Entrance animation ─────────────────────────────────
    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        gsap.killTweensOf(el);
        gsap.fromTo(el,
            { opacity: 0, y: 24 },
            {
                opacity: 1, y: 0,
                duration: 0.5,
                delay: index * 0.055,
                ease: "power3.out",
                clearProps: "opacity,transform",
            }
        );
        return () => gsap.killTweensOf(el);
    }, []);

    // ── Sync animation quand open change ──────────────────
    useEffect(() => {
        const el = detailRef.current;
        if (!el) return;

        if (open) {
            gsap.fromTo(el,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.45, ease: "expo.out", clearProps: "height" }
            );
            gsap.from(el.querySelectorAll(".niche-stat, .niche-card__actions"), {
                opacity: 0, y: 8,
                stagger: 0.05, duration: 0.35, delay: 0.1,
                ease: "power2.out",
                clearProps: "opacity,transform",
            });
        } else {
            gsap.to(el, {
                height: 0, opacity: 0,
                duration: 0.32, ease: "expo.in",
            }, "<");
        }
    }, [open]);

    function toggle() {
        setOpenId(open ? null : niche.id);
    }

    function goToCalculator() {
        router.push(`/calculator?niche=${niche.id}`);
    }

    const rpmColor = niche.rpm_long >= 20 ? "high" : niche.rpm_long >= 10 ? "mid" : "low";

    return (
        <div ref={cardRef} className={`niche-card ${open ? "niche-card--open" : ""} ${niche.trending ? "niche-card--trending" : ""}`}>

            <div className="niche-card__row" onClick={toggle}>
                <div className="niche-card__left">
                    <span className={`niche-card__rpm niche-card__rpm--${rpmColor}`}>
                        ${niche.rpm_long.toFixed(2)}
                    </span>
                    <div className="niche-card__info">
                        <p className="niche-card__name">{niche.niche}</p>
                        <div className="niche-card__pills">
                            <span className={`niche-card__pill niche-card__pill--${niche.popularite}`}>
                                {niche.popularite}
                            </span>
                            {niche.trending && (
                                <span className="niche-card__pill niche-card__pill--trending">
                                    🔥 trending
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <button
                    className={`niche-card__toggle ${open ? "niche-card__toggle--open" : ""}`}
                    onClick={e => { e.stopPropagation(); toggle(); }}
                    aria-label="Toggle details"
                >
                    <span className="niche-card__chevron">›</span>
                </button>
            </div>

            {/* ── toujours dans le DOM, affiché/masqué par GSAP ── */}
            <div ref={detailRef} className="niche-card__detail" style={{ height: 0, overflow: "hidden", opacity: 0 }}>
                <div className="niche-card__detail-inner">
                    <div className="niche-card__stats">
                        <StatRow label="RPM Long Form">
                            <strong>${niche.rpm_long.toFixed(2)}</strong> / 1000 views
                        </StatRow>
                        <StatRow label="RPM Shorts">
                            <strong>${niche.rpm_shorts.toFixed(2)}</strong> / 1000 views
                        </StatRow>
                        <StatRow label="Saturation">
                            <ScoreBar value={niche.saturation} variant="danger" />
                        </StatRow>
                        <StatRow label="Revenue potential">
                            <ScoreBar value={niche.potentiel_economique} variant="success" />
                        </StatRow>
                        <StatRow label="Ease of creation">
                            <ScoreBar value={niche.facilite_creation} variant="neutral" />
                        </StatRow>
                        <StatRow label="type">
                            <span>{niche.faceless}</span>
                        </StatRow>
                    </div>
                    <div className="niche-card__actions">
                        <button className="niche-card__cta" onClick={goToCalculator}>
                            Calculate revenues
                            <span className="niche-card__cta-arrow">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const SORT_OPTIONS = [
    { value: "rpm_desc",  label: "RPM ↓" },
    { value: "rpm_asc",   label: "RPM ↑" },
    { value: "sat_asc",   label: "Low saturation" },
    { value: "potential", label: "Best potential" },
];

export default function NicheFinder() {
    const headerRef = useRef();
    const [search,    setSearch]    = useState("");
    const [sort,      setSort]      = useState("rpm_desc");
    const [filterPop, setFilterPop] = useState("all");
    const [openId,    setOpenId]    = useState(null); // ← une seule carte ouverte
    const [visibleCount, setVisibleCount] = useState(12); // pour "Show More"

    useEffect(() => {
        gsap.from(headerRef.current, {
            opacity: 0, y: -20,
            duration: 0.7, ease: "expo.out",
        });
    }, []);

    // Ferme la carte ouverte si elle disparaît du filtre
    const filtered = niches
        .filter(n => {
            const matchSearch = n.niche.toLowerCase().includes(search.toLowerCase());
            const matchPop    = filterPop === "all" || n.popularite === filterPop;
            return matchSearch && matchPop;
        })
        .sort((a, b) => {
            if (a.trending && !b.trending) return -1;
            if (!a.trending && b.trending) return 1;
            if (sort === "rpm_desc")  return b.rpm_long - a.rpm_long;
            if (sort === "rpm_asc")   return a.rpm_long - b.rpm_long;
            if (sort === "sat_asc")   return a.saturation - b.saturation;
            if (sort === "potential") return b.potentiel_economique - a.potentiel_economique;
            return 0;
        });

    // Si la carte ouverte est filtrée dehors → reset
    useEffect(() => {
        if (openId && !filtered.find(n => n.id === openId)) {
            setOpenId(null);
        }
    }, [filtered, openId]);

    // Reset le "count" si search/filter change
    useEffect(() => {
        setVisibleCount(12);
    }, [search, sort, filterPop]);

    const displayed = filtered.slice(0, visibleCount);

    return (
        <>
        <Navbar />
        <div className="nf-page">
            <div className="nf-inner">

                <div ref={headerRef} className="nf-header">
                    <span className="nf-header__badge">Niches</span>
                    <h1 className="nf-header__title">Niche Finder</h1>
                    <p className="nf-header__sub">
                        Compare every niche by RPM, saturation and revenue potential
                    </p>
                </div>

                <div className="nf-toolbar">
                    <div className="nf-search">
                        <span className="nf-search__icon">⌕</span>
                        <input
                            className="nf-search__input"
                            type="text"
                            placeholder="Search a niche…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="nf-filters">
                        <div className="nf-toggle">
                            {["all", "mainstream", "niché"].map(v => (
                                <button
                                    key={v}
                                    className={`nf-toggle__btn ${filterPop === v ? "nf-toggle__btn--active" : ""}`}
                                    onClick={() => setFilterPop(v)}
                                >
                                    {v === "all" ? "All" : v.charAt(0).toUpperCase() + v.slice(1)}
                                </button>
                            ))}
                        </div>
                        <select
                            className="nf-select"
                            value={sort}
                            onChange={e => setSort(e.target.value)}
                        >
                            {SORT_OPTIONS.map(o => (
                                <option key={o.value} value={o.value}>{o.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <p className="nf-count">
                    {filtered.length} niche{filtered.length !== 1 ? "s" : ""}
                </p>

                <div className="nf-list">
                    {filtered.length === 0 ? (
                        <p className="nf-empty">No niche matches your search.</p>
                    ) : (
                        displayed.map((n, i) => (
                            <NicheCard
                                key={n.id}
                                niche={n}
                                index={i}
                                openId={openId}
                                setOpenId={setOpenId}
                            />
                        ))
                    )}
                </div>

                {/* Bouton Show More */}
                {filtered.length > visibleCount && (
                    <div className="nf-showmore-wrap">
                        <button
                            className="nf-showmore"
                            onClick={() => setVisibleCount(v => v + 12)}
                        >
                            Show More
                        </button>
                    </div>
                )}

            </div>
        </div>
        <Footer />
        </>
    );
}