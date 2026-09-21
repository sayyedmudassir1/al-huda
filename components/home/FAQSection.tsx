"use client";

import { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight } from "lucide-react";

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category?: "Umrah" | "Hajj" | "General & Services" | "Documentation";
}

const DEFAULT_FAQS: FAQItem[] = [
    {
        id: "faq-1",
        question: "How much does Umrah cost from Mumbai?",
        category: "Umrah",
        answer:
            "Umrah package costs vary based on the season (e.g., Economy, Ramadan), hotel distance from Masjid al-Haram and Masjid an-Nabawi, duration of stay, and airline choice. Please request a customized quote or contact our team directly for current, up-to-date pricing.",
    },
    {
        id: "faq-2",
        question: "What does an Umrah package usually include?",
        category: "Umrah",
        answer:
            "Our packages typically cover visa processing assistance, return flight bookings, hotel accommodation in Makkah and Madinah, ground transfers, and Ziyarat guidance. Specific inclusions depend on whether you select an Economy, Standard, or Premium package.",
    },
    {
        id: "faq-3",
        question: "Are flights and railway tickets included in your services?",
        category: "General & Services",
        answer:
            "Yes. In addition to complete Hajj and Umrah packages, Al-Huda World Tours & Travels provides standalone domestic and international flight ticketing, as well as railway ticket booking assistance for applicable routes.",
    },
    {
        id: "faq-4",
        question: "Can I customize my Umrah or travel itinerary?",
        category: "Umrah",
        answer:
            "Yes, we offer customized Umrah and holiday packages. You can choose your preferred departure dates, airlines, specific hotel categories in Makkah and Madinah, and room arrangements according to your family or group requirements.",
    },
    {
        id: "faq-5",
        question: "What documents are required for passport and visa assistance?",
        category: "Documentation",
        answer:
            "Required documents usually include an original passport with at least 6 months validity, passport-size photographs with a white background, PAN card, and relevant personal details. Specific visa requirements depend on your destination and current government regulations.",
    },
    {
        id: "faq-6",
        question: "How early should I book my Hajj or Umrah package?",
        category: "Hajj",
        answer:
            "We recommend booking at least 30 to 45 days in advance for Umrah to secure preferred flight schedules and hotel proximity to the Haram, especially during peak seasons like Ramadan. Hajj bookings follow specific government timelines and quota announcements.",
    },
];

interface FAQSectionProps {
    faqs?: FAQItem[];
}

export function FAQSection({ faqs = DEFAULT_FAQS }: FAQSectionProps) {
    const [openId, setOpenId] = useState<string | null>("faq-1");

    const toggleFAQ = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    return (
        <section className="relative overflow-hidden bg-[#FAF8F2] py-16 md:py-24">
            {/* Background radial soft light */}
            <div className="aria-hidden:true pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-[#064E3B]/5 blur-3xl" />

            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#064E3B]/20 bg-[#064E3B]/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#064E3B]">
                        <HelpCircle className="h-3.5 w-3.5 text-[#C9A227]" />
                        <span>Clear Information & Guidance</span>
                    </div>

                    <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#064E3B] sm:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base text-[#1F2925]/80 sm:text-lg">
                        Find answers to common questions regarding our packages, booking procedures, travel documentation, and service policies.
                    </p>
                </div>

                {/* Accordion List */}
                <div className="mt-10 space-y-3">
                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div
                                key={faq.id}
                                className="overflow-hidden rounded-xl border border-emerald-900/10 bg-white transition-all duration-200"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-emerald-50/40"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-serif text-base font-semibold text-[#064E3B] sm:text-lg">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`h-5 w-5 shrink-0 text-[#064E3B] transition-transform duration-300 ${isOpen ? "rotate-180 text-[#C9A227]" : ""
                                            }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="border-t border-gray-100 px-6 py-4 text-sm leading-relaxed text-[#1F2925]/80 sm:text-base">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Unanswered Questions Callout */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm sm:flex-row sm:p-8">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#064E3B]/10 text-[#064E3B]">
                            <MessageSquare className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-serif text-lg font-bold text-[#064E3B]">
                                Have a specific question not listed here?
                            </h3>
                            <p className="text-xs text-[#1F2925]/70 sm:text-sm">
                                Our Mumbai travel desk is ready to assist you with tailored information.
                            </p>
                        </div>
                    </div>

                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                            "Assalamu Alaikum. I have a question regarding your travel and pilgrimage services."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#064E3B] px-5 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#043d2e]"
                    >
                        <span>Ask Us on WhatsApp</span>
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}