"use client";

import Link from "next/link";
import { BookOpen, ArrowRight, CheckSquare, Compass, ShieldAlert } from "lucide-react";

export interface GuideArticle {
    id: string;
    slug: string;
    title: string;
    category: "Umrah" | "Hajj" | "Travel Preparation" | "Documentation";
    summary: string;
    readTime: string;
}

const DEFAULT_GUIDES: GuideArticle[] = [
    {
        id: "1",
        slug: "umrah-step-by-step-guide",
        title: "Umrah Step-by-Step Guide for First-Time Pilgrims",
        category: "Umrah",
        summary:
            "A clear breakdown of Ihram, Tawaf, Sa'i, and Halq/Taqseer to help you perform your rituals with confidence.",
        readTime: "6 min read",
    },
    {
        id: "2",
        slug: "essential-umrah-packing-checklist",
        title: "What to Pack for Umrah: Essential Checklist",
        category: "Travel Preparation",
        summary:
            "Practical packing list tailored for pilgrims traveling from Mumbai, covering clothing, footwear, medicines, and documents.",
        readTime: "4 min read",
    },
    {
        id: "3",
        slug: "required-documents-for-umrah-visa",
        title: "Umrah Visa & Passport Documentation Requirements",
        category: "Documentation",
        summary:
            "Current documentation rules, passport validity rules, photo specifications, and visa processing guidelines.",
        readTime: "5 min read",
    },
    {
        id: "4",
        slug: "hajj-preparation-overview",
        title: "Preparing Physically & Spiritually for Hajj",
        category: "Hajj",
        summary:
            "Important milestones, physical fitness tips, and logistics overview for upcoming Hajj pilgrimage planning.",
        readTime: "7 min read",
    },
];

interface GuideSectionProps {
    articles?: GuideArticle[];
}

export function GuideSection({ articles = DEFAULT_GUIDES }: GuideSectionProps) {
    return (
        <section className="relative overflow-hidden bg-white py-16 md:py-24">
            {/* Background accents */}
            <div className="aria-hidden:true pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#064E3B]/5 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#064E3B]/20 bg-[#064E3B]/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#064E3B]">
                            <Compass className="h-3.5 w-3.5 text-[#C9A227]" />
                            <span>Pilgrimage & Travel Educational Hub</span>
                        </div>

                        <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#064E3B] sm:text-4xl lg:text-5xl">
                            Prepare for Your Journey
                        </h2>

                        <p className="mt-2 max-w-xl text-base text-[#1F2925]/80 sm:text-lg">
                            Practical guides, packing checklists, and documentation steps to help you travel with clarity and peace of mind.
                        </p>
                    </div>

                    <Link
                        href="/guide"
                        className="group inline-flex items-center gap-2 rounded-xl bg-[#FAF8F2] px-5 py-3 text-xs font-bold text-[#064E3B] border border-emerald-900/10 transition-all hover:bg-[#064E3B] hover:text-white"
                    >
                        <span>Explore All Guides & Articles</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Article Cards Grid */}
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {articles.map((item) => (
                        <article
                            key={item.id}
                            className="group flex flex-col justify-between rounded-2xl border border-emerald-900/10 bg-[#FAF8F2]/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#064E3B]/30 hover:bg-white hover:shadow-md"
                        >
                            <div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="rounded-md bg-[#064E3B]/10 px-2.5 py-1 font-semibold text-[#064E3B]">
                                        {item.category}
                                    </span>
                                    <span className="text-[#1F2925]/60">{item.readTime}</span>
                                </div>

                                <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-[#064E3B] transition-colors group-hover:text-[#C9A227]">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-xs leading-relaxed text-[#1F2925]/75 line-clamp-3 sm:text-sm">
                                    {item.summary}
                                </p>
                            </div>

                            <div className="mt-6 border-t border-gray-200/60 pt-4">
                                <Link
                                    href={`/guide/${item.slug}`}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] transition-colors group-hover:text-[#C9A227]"
                                >
                                    <span>Read Full Guide</span>
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Guidance Disclaimer Note */}
                <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-xs text-amber-900/80 flex items-start gap-3">
                    <ShieldAlert className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
                    <p>
                        <strong className="font-semibold text-amber-950">Notice on Religious Information:</strong> Educational guides are provided strictly for general travel preparation and administrative guidance. For specific Islamic rulings and religious affairs, pilgrims are encouraged to consult recognized scholars or local Islamic authorities.
                    </p>
                </div>
            </div>
        </section>
    );
}