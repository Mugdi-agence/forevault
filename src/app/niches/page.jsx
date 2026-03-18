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

// ── Format badge ───────────────────────────────────────────
const FORMAT_META = {
    "Long-form": { label: "Long-form", cls: "long"   },
    "Shorts":    { label: "Shorts",    cls: "shorts"  },
    "Both":      { label: "Both",      cls: "both"    },
};

function FormatBadge({ format }) {
    const meta = FORMAT_META[format] ?? FORMAT_META["Long-form"];
    return (
        <span className={`niche-card__format niche-card__format--${meta.cls}`}>
            {meta.label === "Shorts" ? "▶ Shorts" : meta.label === "Long-form" ? "▬ Long-form" : "⇄ Both"}
        </span>
    );
}

// ── NicheCard ──────────────────────────────────────────────
function NicheCard({ niche, index, openId, setOpenId }) {
    const detailRef = useRef();
    const cardRef   = useRef();
    const router    = useRouter();

    const open = openId === niche.id;

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
            gsap.to(el, { height: 0, opacity: 0, duration: 0.32, ease: "expo.in" });
        }
    }, [open]);

    function toggle() {
        const isOpening = !open;
        setOpenId(isOpening ? niche.id : null);

        // Track uniquement à l'ouverture
        if (isOpening && typeof gtag === "function") {
            gtag("event", "niche_expanded", {
                niche_id:         niche.id,
                niche_label:      niche.niche,
                niche_format:     niche.format,
                niche_faceless:   niche.faceless ?? "unknown",
                niche_rpm:        niche.rpm,
                niche_saturation: niche.saturation,
                niche_potential:  niche.economic_potential,
                niche_trending:   niche.trending ? "yes" : "no",
                niche_popularity: niche.popularite,
            });
        }
    }

    function goToCalculator() {
        // Track le clic CTA vers le calculateur
        if (typeof gtag === "function") {
            gtag("event", "niche_cta_click", {
                niche_id:         niche.id,
                niche_label:      niche.niche,
                niche_format:     niche.format,
                niche_faceless:   niche.faceless ?? "unknown",
                niche_rpm:        niche.rpm,
                niche_trending:   niche.trending ? "yes" : "no",
                destination:      "calculator",
            });
        }

        const fmt   = niche.format === "Shorts" ? "shorts" : "long";
        const query = `?niche=${niche.id}&format=${fmt}`;
        router.push(`/calculator${query}`);
    }

    const rpmColor = niche.rpm >= 12 ? "high" : niche.rpm >= 6 ? "mid" : "low";

    return (
        <div ref={cardRef} className={`niche-card ${open ? "niche-card--open" : ""} ${niche.trending ? "niche-card--trending" : ""}`}>

            <div className="niche-card__row" onClick={toggle}>
                <div className="niche-card__left">
                    <span className={`niche-card__rpm niche-card__rpm--${rpmColor}`}>
                        ${niche.rpm.toFixed(2)}
                    </span>
                    <div className="niche-card__info">
                        <p className="niche-card__name">{niche.niche}</p>
                        <div className="niche-card__pills">
                            <FormatBadge format={niche.format} />
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

            <div ref={detailRef} className="niche-card__detail" style={{ height: 0, overflow: "hidden", opacity: 0 }}>
                <div className="niche-card__detail-inner">
                    <div className="niche-card__stats">
                        <StatRow label="Base RPM">
                            <strong>${niche.rpm.toFixed(2)}</strong> / 1 000 views
                        </StatRow>
                        <StatRow label="Format">
                            <FormatBadge format={niche.format} />
                        </StatRow>
                        <StatRow label="Saturation">
                            <ScoreBar value={niche.saturation} variant="danger" />
                        </StatRow>
                        <StatRow label="Revenue potential">
                            <ScoreBar value={niche.economic_potential} variant="success" />
                        </StatRow>
                        <StatRow label="Ease of creation">
                            <ScoreBar value={niche.creation_ease} variant="neutral" />
                        </StatRow>
                        <StatRow label="Type">
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

// ── Toolbar constants ──────────────────────────────────────
const SORT_OPTIONS = [
    { value: "rpm_desc",  label: "RPM ↓" },
    { value: "rpm_asc",   label: "RPM ↑" },
    { value: "sat_asc",   label: "Low saturation" },
    { value: "potential", label: "Best potential" },
];

const FORMAT_FILTERS = [
    { value: "all",       label: "All formats" },
    { value: "Long-form", label: "▬ Long-form"  },
    { value: "Shorts",    label: "▶ Shorts"     },
    { value: "Both",      label: "⇄ Both"       },
];

// ── Page ───────────────────────────────────────────────────
export default function NicheFinder() {
    const headerRef  = useRef();
    const [search,       setSearch]       = useState("");
    const [sort,         setSort]         = useState("rpm_desc");
    const [filterPop,    setFilterPop]    = useState("all");
    const [filterFormat, setFilterFormat] = useState("all");
    const [openId,       setOpenId]       = useState(null);
    const [visibleCount, setVisibleCount] = useState(12);

    useEffect(() => {
        gsap.from(headerRef.current, { opacity: 0, y: -20, duration: 0.7, ease: "expo.out" });
    }, []);

    // Track la recherche (avec debounce pour ne pas spammer)
    useEffect(() => {
        if (!search) return;
        const timer = setTimeout(() => {
            if (typeof gtag === "function") {
                gtag("event", "niche_search", {
                    search_query:   search,
                    filter_format:  filterFormat,
                    results_count:  filtered.length,
                });
            }
        }, 800);
        return () => clearTimeout(timer);
    }, [search]);

    // Track les changements de filtre format
    function handleFormatFilter(value) {
        setFilterFormat(value);
        if (typeof gtag === "function") {
            gtag("event", "niche_filter_format", {
                filter_value: value,
            });
        }
    }

    const filtered = niches
        .filter(n => {
            const matchSearch  = n.niche.toLowerCase().includes(search.toLowerCase())
                              || n.topic.toLowerCase().includes(search.toLowerCase());
            const matchPop     = filterPop    === "all" || n.popularite === filterPop;
            const matchFormat  = filterFormat === "all" || n.format     === filterFormat;
            return matchSearch && matchPop && matchFormat;
        })
        .sort((a, b) => {
            if (a.trending && !b.trending) return -1;
            if (!a.trending && b.trending) return 1;
            if (sort === "rpm_desc")  return b.rpm - a.rpm;
            if (sort === "rpm_asc")   return a.rpm - b.rpm;
            if (sort === "sat_asc")   return a.saturation - b.saturation;
            if (sort === "potential") return b.potentiel_economique - a.potentiel_economique;
            return 0;
        });

    useEffect(() => {
        if (openId && !filtered.find(n => n.id === openId)) setOpenId(null);
    }, [filtered, openId]);

    useEffect(() => { setVisibleCount(12); }, [search, sort, filterPop, filterFormat]);

    const displayed = filtered.slice(0, visibleCount);

    // Compteurs par format pour les badges du filtre
    const formatCounts = niches.reduce((acc, n) => {
        acc[n.format] = (acc[n.format] || 0) + 1;
        return acc;
    }, {});

    // 🔥 Track le "Show more"
    function handleShowMore() {
        setVisibleCount(v => v + 12);
        if (typeof gtag === "function") {
            gtag("event", "niche_show_more", {
                visible_before: visibleCount,
                visible_after:  visibleCount + 12,
                total_filtered: filtered.length,
                filter_format:  filterFormat,
            });
        }
    }

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
                    {/* Search */}
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
                        {/* Format filter */}
                        <div className="nf-toggle nf-toggle--format">
                            {FORMAT_FILTERS.map(f => (
                                <button
                                    key={f.value}
                                    className={`nf-toggle__btn ${filterFormat === f.value ? "nf-toggle__btn--active" : ""}`}
                                    onClick={() => handleFormatFilter(f.value)}
                                >
                                    {f.label}
                                    {f.value !== "all" && (
                                        <span className="nf-toggle__count">
                                            {formatCounts[f.value] ?? 0}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="nf-count">
                    {filtered.length} niche{filtered.length !== 1 ? "s" : ""}
                    {filterFormat !== "all" && (
                        <span className="nf-count__format"> · {filterFormat}</span>
                    )}
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

                {filtered.length > visibleCount && (
                    <div className="nf-showmore-wrap">
                        <button
                            className="nf-showmore"
                            onClick={handleShowMore}
                        >
                            Show More ({filtered.length - visibleCount} remaining)
                        </button>
                    </div>
                )}

            </div>
        </div>
        <Footer />
        </>
    );
}