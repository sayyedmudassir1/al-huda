"use client";

import { useState } from "react";
import Link from "next/link";
import {
    BookOpen,
    Clock,
    CheckCircle2,
    FileText,
    Compass,
    Briefcase,
    Heart,
    MessageCircle,
    X,
    ChevronRight,
    ShieldCheck,
    Send,
} from "lucide-react";

interface GuideArticle {
    id: string;
    category: "Umrah" | "Travel Preparation" | "Documentation" | "Hajj";
    readTime: string;
    title: string;
    summary: string;
    sections: {
        heading: string;
        content: string[];
    }[];
}

const GUIDE_ARTICLES: GuideArticle[] = [
    {
        id: "umrah-step-by-step",
        category: "Umrah",
        readTime: "6 min read",
        title: "Umrah Step-by-Step Guide for First-Time Pilgrims",
        summary:
            "A clear breakdown of Ihram, Tawaf, Sa'i, and Halq/Taqseer to help you perform your rituals with confidence.",
        sections: [
            {
                heading: "1. Entering Ihram & Intention (Niyyah)",
                content: [
                    "Perform Ghusl (ritual purification) and wear the two unstitched white towels (for men) or modest clothing (for women) before crossing the Miqat.",
                    "Perform 2 Rak'ahs Sunnat-ul-Ihram and recite the Talbiyah: 'Labbayk Allahumma Labbayk...'",
                    "Refrain from prohibited acts in Ihram (perfume, trimming hair/nails, covering face/head for men).",
                ],
            },
            {
                heading: "2. Performing Tawaf around the Holy Kaaba",
                content: [
                    "Enter Masjid al-Haram with your right foot, reciting the supplication for entering the mosque.",
                    "Begin Tawaf at Hajar al-Aswad (The Black Stone), keeping the Kaaba on your left side.",
                    "Complete 7 anti-clockwise circuits, reciting prayers and dhikr.",
                    "Perform 2 Rak'ahs of prayer behind Maqam Ibrahim (or anywhere in Haram) and drink Zamzam water.",
                ],
            },
            {
                heading: "3. Sa'i between Safa and Marwah",
                content: [
                    "Proceed to Mount Safa, face the Kaaba, and make sincere dua.",
                    "Walk toward Mount Marwah. Men should trot briskly between the green light markers.",
                    "Complete 7 rounds (Safa to Marwah is 1 round; Marwah to Safa is 2).",
                ],
            },
            {
                heading: "4. Halq or Taqseer (Exiting Ihram)",
                content: [
                    "Men shave their head completely (Halq) or trim hair evenly all around (Taqseer).",
                    "Women trim a fingertip's length (approx 1 inch) from the end of their hair.",
                    "With this step completed, your Umrah is fulfilled and Ihram restrictions are lifted.",
                ],
            },
        ],
    },
    {
        id: "packing-checklist",
        category: "Travel Preparation",
        readTime: "4 min read",
        title: "What to Pack for Umrah: Essential Checklist",
        summary:
            "Practical packing list tailored for pilgrims traveling from Mumbai, covering clothing, footwear, medicines, and documents.",
        sections: [
            {
                heading: "Essential Attire & Ihram",
                content: [
                    "2 to 3 sets of Ihram towels (for men) with waist belt/pouch.",
                    "3 to 4 pairs of light, breathable cotton Kurta Pyjama or Abayas.",
                    "Comfortable, slip-on walking sandals (non-stitched above ankles for Ihram).",
                ],
            },
            {
                heading: "Personal Care & Toiletries (Unscented)",
                content: [
                    "Unscented soap, unscented Vaseline/lotion (prevents chafing during Ihram).",
                    "Foldable prayer mat, pocket Tawaf counter, small shoulder bag for shoes.",
                    "Sunscreen, sunglasses, and collapsible water bottle.",
                ],
            },
            {
                heading: "Medical & Health Kit",
                content: [
                    "Prescription medications with doctor's prescriptions.",
                    "Pain relievers, ORS hydration packets, band-aids, muscle pain balm.",
                    "Throat lozenges and cough syrup (common during group travel).",
                ],
            },
        ],
    },
    {
        id: "visa-documentation-guide",
        category: "Documentation",
        readTime: "5 min read",
        title: "Umrah Visa & Passport Documentation Requirements",
        summary:
            "Current documentation rules, passport validity rules, photo specifications, and visa processing guidelines.",
        sections: [
            {
                heading: "Passport Validity Rules",
                content: [
                    "Passport must have a minimum validity of 6 months from the intended travel date.",
                    "Must have at least 2 blank pages side-by-side for visa stamping and entry control.",
                ],
            },
            {
                heading: "Photo Specifications & Documents Required",
                content: [
                    "Recent passport-size photo with white background (80% face view, no glasses).",
                    "Pan Card copy (mandatory for RBI TCS compliance on foreign travel).",
                    "Front and back copy of Indian Passport.",
                ],
            },
            {
                heading: "Vaccination & Health Insurance",
                content: [
                    "Meningococcal Vaccination certificate (ACYW135) as required by KSA Ministry.",
                    "Comprehensive travel health insurance coverage (included with our visa processing).",
                ],
            },
        ],
    },
    {
        id: "hajj-preparation-guide",
        category: "Hajj",
        readTime: "7 min read",
        title: "Preparing Physically & Spiritually for Hajj",
        summary:
            "Important milestones, physical fitness tips, and logistics overview for upcoming Hajj pilgrimage planning.",
        sections: [
            {
                heading: "Physical Preparation & Fitness",
                content: [
                    "Begin daily 30-minute walking routines 2 months prior to departure.",
                    "Get used to walking in warm weather and breaking in your Ihram sandals.",
                    "Consult your general physician for a thorough medical checkup.",
                ],
            },
            {
                heading: "Spiritual & Mental Readiness",
                content: [
                    "Attend pre-Hajj training seminars held by our scholars in Mumbai.",
                    "Memorize essential duas for Arafat, Mina, and Muzdalifah.",
                    "Seek forgiveness from family members and resolve outstanding debts before departure.",
                ],
            },
            {
                heading: "Logistical & Camp Awareness",
                content: [
                    "Familiarize yourself with Mina tent zone maps and group leader contact numbers.",
                    "Keep essential items in a lightweight backpack for the 5 days of Hajj rites.",
                ],
            },
        ],
    },
];

export default function GuidePage() {
    const [selectedArticle, setSelectedArticle] = useState<GuideArticle | null>(
        null
    );
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    const filteredArticles =
        activeCategory === "All"
            ? GUIDE_ARTICLES
            : GUIDE_ARTICLES.filter((art) => art.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#FAF8F2] text-[#1F2925]">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#064E3B] py-16 text-white md:py-24">
                <div className="aria-hidden:true pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
                <div className="aria-hidden:true pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#C9A227]">
                            <BookOpen className="h-3.5 w-3.5" />
                            <span>Pilgrim Knowledge Center</span>
                        </div>

                        <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Pilgrimage Guides & Resources
                        </h1>

                        <p className="mt-4 text-base leading-relaxed text-emerald-100/90 sm:text-lg">
                            Essential step-by-step rituals, practical packing advice, and official visa requirements to help you prepare for a seamless journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Tabs & Articles Listing */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {["All", "Umrah", "Travel Preparation", "Documentation", "Hajj"].map(
                            (cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${activeCategory === cat
                                            ? "bg-[#064E3B] text-white shadow-md"
                                            : "bg-white text-[#064E3B] border border-emerald-900/10 hover:bg-emerald-50"
                                        }`}
                                >
                                    {cat === "All" ? "All Guides" : cat}
                                </button>
                            )
                        )}
                    </div>

                    {/* Cards Grid */}
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {filteredArticles.map((article) => (
                            <div
                                key={article.id}
                                className="flex flex-col justify-between rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#064E3B]/30 hover:shadow-md sm:p-8"
                            >
                                <div>
                                    <div className="flex items-center justify-between">
                                        <span className="rounded-md bg-[#064E3B]/10 px-2.5 py-1 text-xs font-semibold text-[#064E3B]">
                                            {article.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs font-medium text-[#1F2925]/60">
                                            <Clock className="h-3.5 w-3.5 text-[#C9A227]" />
                                            {article.readTime}
                                        </span>
                                    </div>

                                    <h2 className="mt-4 font-serif text-2xl font-bold text-[#064E3B]">
                                        {article.title}
                                    </h2>

                                    <p className="mt-3 text-xs leading-relaxed text-[#1F2925]/75 sm:text-sm">
                                        {article.summary}
                                    </p>
                                </div>

                                <div className="mt-8 border-t border-gray-100 pt-6">
                                    <button
                                        onClick={() => setSelectedArticle(article)}
                                        className="inline-flex items-center gap-2 text-xs font-bold text-[#064E3B] hover:text-[#C9A227] transition-colors"
                                    >
                                        <span>Read Full Guide</span>
                                        <ChevronRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Article Detail Modal / Reader Drawer */}
            {selectedArticle && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
                    <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-10">
                        {/* Modal Header */}
                        <div className="flex items-start justify-between border-b border-gray-100 pb-4">
                            <div>
                                <span className="rounded-md bg-[#064E3B]/10 px-2.5 py-1 text-xs font-semibold text-[#064E3B]">
                                    {selectedArticle.category}
                                </span>
                                <span className="ml-3 text-xs font-medium text-[#1F2925]/60">
                                    {selectedArticle.readTime}
                                </span>
                                <h2 className="mt-3 font-serif text-2xl font-bold text-[#064E3B] sm:text-3xl">
                                    {selectedArticle.title}
                                </h2>
                            </div>

                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-black"
                                aria-label="Close modal"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Modal Content Body */}
                        <div className="mt-6 space-y-8">
                            <p className="text-xs leading-relaxed text-[#1F2925]/80 sm:text-sm font-medium">
                                {selectedArticle.summary}
                            </p>

                            {selectedArticle.sections.map((sec, idx) => (
                                <div key={idx} className="space-y-3">
                                    <h3 className="font-serif text-base font-bold text-[#064E3B] border-l-4 border-[#C9A227] pl-3">
                                        {sec.heading}
                                    </h3>
                                    <ul className="space-y-2 text-xs text-[#1F2925]/80 sm:text-sm pl-2">
                                        {sec.content.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#064E3B] mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Modal Footer */}
                        <div className="mt-8 border-t border-gray-100 pt-6 flex flex-wrap items-center justify-between gap-4">
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                    `Assalamu Alaikum. I have a question regarding the guide: ${selectedArticle.title}`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#20bd5a]"
                            >
                                <MessageCircle className="h-4 w-4" />
                                <span>Ask Question on WhatsApp</span>
                            </a>

                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="rounded-xl border border-gray-300 px-5 py-2.5 text-xs font-bold text-gray-700 hover:bg-gray-50"
                            >
                                Close Reader
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom CTA */}
            <section className="bg-[#064E3B] py-12 text-white">
                <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                        Have Questions About Passport or Visa Guidance?
                    </h2>
                    <p className="mt-2 text-xs text-emerald-100/90 sm:text-sm">
                        Our Mumbai travel team provides direct consultations to verify your document eligibility before booking.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                "Assalamu Alaikum. I need guidance regarding Umrah visa documentation."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#20bd5a]"
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp Consultation</span>
                        </a>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3 text-xs font-bold text-[#064E3B] shadow-md hover:bg-[#b89421]"
                        >
                            <Send className="h-4 w-4" />
                            <span>Contact Desk</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}