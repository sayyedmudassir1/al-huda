"use client";

import { useState } from "react";
import Link from "next/link";
import {
    HelpCircle,
    Search,
    ChevronDown,
    MessageCircle,
    PhoneCall,
    FileText,
    ShieldCheck,
    CreditCard,
    Plane,
    Send,
} from "lucide-react";

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category: "General & Visa" | "Packages & Accommodation" | "Flights & Travel" | "Payments & Refunds";
}

const FAQ_ITEMS: FAQItem[] = [
    {
        id: "faq-1",
        category: "General & Visa",
        question: "How long does Umrah visa processing take from Mumbai?",
        answer:
            "Standard Umrah visa processing usually takes 3 to 5 working days after submitting all valid documents, including passport copies, PAN card, and photos. Express processing is also available upon request.",
    },
    {
        id: "faq-2",
        category: "General & Visa",
        question: "What is the minimum passport validity required for Umrah travel?",
        answer:
            "Your passport must be valid for at least 6 months from your intended date of travel and must have at least two blank pages side-by-side for visa stamping and border control.",
    },
    {
        id: "faq-3",
        category: "Packages & Accommodation",
        question: "How far are the hotels from Masjid al-Haram in Makkah?",
        answer:
            "Hotel distance varies by package tier. Our Deluxe and Executive packages feature 4-star and 5-star hotels located within 150 to 300 meters (a 3 to 5-minute walk) from Haram. Economy packages feature clean hotels 600 to 800 meters away with complimentary 24/7 shuttle service.",
    },
    {
        id: "faq-4",
        category: "Packages & Accommodation",
        question: "Are Indian meals provided during the pilgrimage?",
        answer:
            "Yes, all our group packages include daily authentic Indian buffet meals (Breakfast, Lunch, and Dinner) prepared fresh by experienced Indian chefs in Makkah and Madinah.",
    },
    {
        id: "faq-5",
        category: "Flights & Travel",
        question: "Which airlines are used for departures from Mumbai?",
        answer:
            "We operate departures from Chhatrapati Shivaji Maharaj International Airport (BOM) using top direct and indirect carriers including Saudi Arabian Airlines, Air India, IndiGo, and Flynas.",
    },
    {
        id: "faq-6",
        category: "Flights & Travel",
        question: "Are guided Ziyarat tours included in Makkah and Madinah?",
        answer:
            "Yes, all standard and deluxe group packages include fully guided Ziyarat tours in air-conditioned buses with an experienced English/Hindi/Urdu speaking guide to historic sites such as Mount Uhud, Masjid Quba, Jabal al-Nour, and Mina.",
    },
    {
        id: "faq-7",
        category: "Payments & Refunds",
        question: "What is the payment schedule and booking deposit amount?",
        answer:
            "A booking deposit of ₹25,000 per person is required to confirm your seat and flight reservation. The remaining balance can be paid in installments up to 15 days prior to departure.",
    },
    {
        id: "faq-8",
        category: "Payments & Refunds",
        question: "Are foreign currency and TCS taxes handled transparently?",
        answer:
            "Yes, we provide itemized GST and TCS receipts compliant with RBI regulations. Our team also assists pilgrims with purchasing SAR (Saudi Riyal) forex cards or cash before departure.",
    },
];

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [expandedId, setExpandedId] = useState<string | null>("faq-1");

    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    const toggleAccordion = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const filteredFaqs = FAQ_ITEMS.filter((item) => {
        const matchesCategory =
            selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch =
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#FAF8F2] text-[#1F2925]">
            {/* Hero Header */}
            <section className="relative overflow-hidden bg-[#064E3B] py-16 text-white md:py-24">
                <div className="aria-hidden:true pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
                <div className="aria-hidden:true pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#C9A227]">
                            <HelpCircle className="h-3.5 w-3.5" />
                            <span>Pilgrim Help & Knowledge Base</span>
                        </div>

                        <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Frequently Asked Questions
                        </h1>

                        <p className="mt-4 text-base leading-relaxed text-emerald-100/90 sm:text-lg">
                            Find instant answers regarding visa rules, hotel distances, flights from Mumbai, meal arrangements, and payment policies.
                        </p>

                        {/* Search Input Bar */}
                        <div className="relative mt-8 mx-auto max-w-xl">
                            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search questions (e.g. visa duration, meals, hotels)..."
                                className="w-full rounded-2xl bg-white pl-12 pr-4 py-3.5 text-xs font-medium text-[#1F2925] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    {/* Filter Categories */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {[
                            "All",
                            "General & Visa",
                            "Packages & Accommodation",
                            "Flights & Travel",
                            "Payments & Refunds",
                        ].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${selectedCategory === cat
                                        ? "bg-[#064E3B] text-white shadow-md"
                                        : "bg-white text-[#064E3B] border border-emerald-900/10 hover:bg-emerald-50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* FAQ Accordion List */}
                    <div className="mt-10 space-y-4">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq) => {
                                const isOpen = expandedId === faq.id;
                                return (
                                    <div
                                        key={faq.id}
                                        className="overflow-hidden rounded-2xl border border-emerald-900/10 bg-white transition-all duration-200 hover:border-[#064E3B]/30"
                                    >
                                        <button
                                            onClick={() => toggleAccordion(faq.id)}
                                            className="flex w-full items-center justify-between p-5 text-left sm:p-6"
                                        >
                                            <span className="font-serif text-base font-bold text-[#064E3B] sm:text-lg">
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={`h-5 w-5 shrink-0 text-[#C9A227] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {isOpen && (
                                            <div className="border-t border-gray-100 bg-[#FAF8F2]/50 px-5 py-4 sm:px-6 sm:py-5">
                                                <p className="text-xs leading-relaxed text-[#1F2925]/80 sm:text-sm">
                                                    {faq.answer}
                                                </p>
                                                <div className="mt-4 flex items-center justify-between border-t border-gray-200/60 pt-3">
                                                    <span className="text-[10px] font-semibold text-[#064E3B]/60 uppercase tracking-wider">
                                                        Category: {faq.category}
                                                    </span>
                                                    <a
                                                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                                            `Assalamu Alaikum. I have a detailed query regarding: ${faq.question}`
                                                        )}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1 text-xs font-bold text-[#064E3B] hover:text-[#C9A227]"
                                                    >
                                                        <MessageCircle className="h-3.5 w-3.5" />
                                                        <span>Ask More Details</span>
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        ) : (
                            <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
                                <HelpCircle className="mx-auto h-10 w-10 text-gray-400" />
                                <h3 className="mt-4 font-serif text-lg font-bold text-[#064E3B]">
                                    No matching questions found
                                </h3>
                                <p className="mt-1 text-xs text-gray-500">
                                    Try searching for keywords like "visa", "hotel", or "flights".
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Still Have Questions CTA */}
            <section className="bg-[#064E3B] py-12 text-white">
                <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                        Still Have Unanswered Questions?
                    </h2>
                    <p className="mt-2 text-xs text-emerald-100/90 sm:text-sm">
                        Our Mumbai travel specialists are available via WhatsApp or direct call to assist you with custom requirements.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                "Assalamu Alaikum. I checked your FAQ page but have specific questions regarding Umrah packages."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#20bd5a]"
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span>Chat on WhatsApp</span>
                        </a>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3 text-xs font-bold text-[#064E3B] shadow-md hover:bg-[#b89421]"
                        >
                            <Send className="h-4 w-4" />
                            <span>Contact Page</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}