"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Compass,
    CheckCircle2,
    Calendar,
    MapPin,
    Clock,
    Shield,
    Send,
    PhoneCall,
    MessageCircle,
    HelpCircle,
    ChevronDown,
    Info,
    Building2,
    Plane,
    FileText,
} from "lucide-react";

interface HajjPackage {
    id: string;
    name: string;
    badge?: string;
    duration: string;
    makkahHotel: string;
    makkahDistance: string;
    madinahHotel: string;
    madinahDistance: string;
    inclusions: string[];
    notes: string;
}

const HAJJ_PACKAGES: HajjPackage[] = [
    {
        id: "hajj-economy",
        name: "Economy Hajj Package",
        badge: "Most Popular",
        duration: "35 - 40 Days",
        makkahHotel: "Standard Hotel / Building (Azizia)",
        makkahDistance: "Shuttle Service to Haram",
        madinahHotel: "3-Star Hotel Category",
        madinahDistance: "Within 300m - 500m of Haram",
        inclusions: [
            "Return Flight Ticket (Mumbai / Saudi Route)",
            "Hajj Visa Processing Assistance",
            "Azizia Accommodation with Shuttle Service",
            "Madinah Hotel Accommodation",
            "Mina & Arafat Tents (As per Saudi Hajj Ministry)",
            "Complete Guided Ziyarat in Madinah",
            "Buffet/Packed Meals Included",
            "Dedicated Group Leader & Religious Guide",
        ],
        notes: "Ideal for pilgrims seeking a complete, budget-conscious Hajj pilgrimage with full group guidance.",
    },
    {
        id: "hajj-shifting-deluxe",
        name: "Shifting Deluxe Hajj Package",
        badge: "Recommended",
        duration: "25 - 30 Days",
        makkahHotel: "5-Star Hotel (Near Haram) + Azizia Stay",
        makkahDistance: "Walking distance prior to Hajj days",
        madinahHotel: "4-Star / 5-Star Hotel",
        madinahDistance: "Within 200m of Haram",
        inclusions: [
            "Direct Air Tickets from Mumbai",
            "Hajj Visa Processing & Insurance",
            "5-Star Makkah Stay (Before/After Hajj) + Azizia Base",
            "Close Proximity Hotel in Madinah",
            "Upgraded Mina Tents with Air Conditioning",
            "Private AC Bus Transfers for Manasik",
            "Full Board Catering (Indian / International Cuisine)",
            "Complimentary Laundry & Pilgrimage Kit",
        ],
        notes: "Combines proximity luxury in Makkah and Madinah with standard protocol stays during the peak days of Hajj.",
    },
    {
        id: "hajj-non-shifting-vip",
        name: "Non-Shifting VIP Hajj Package",
        badge: "Premium VIP",
        duration: "14 - 20 Days (Short Hajj)",
        makkahHotel: "5-Star Luxury Front-Row Hotel",
        makkahDistance: "Direct access to Haram Courtyard",
        madinahHotel: "5-Star Luxury Hotel",
        madinahDistance: "Direct access to Prophet's Mosque",
        inclusions: [
            "Direct Business / Direct Economy Flights",
            "Priority Hajj Visa & Express Processing",
            "Continuous Non-Shifting 5-Star Makkah Hotel",
            "Continuous 5-Star Madinah Hotel Stay",
            "VIP Arafat & Mina Air-Conditioned Tents",
            "Private GMC / Luxury Bus Internal Transportation",
            "24/7 Personal Guidance & Scholar Support",
            "Full Board Premium Dining Experience",
        ],
        notes: "Designed for professionals and elders requiring maximum comfort, direct Haram access, and shortened duration.",
    },
];

const HAJJ_FAQS = [
    {
        question: "When do Hajj registrations usually open in Mumbai?",
        answer:
            "Hajj registrations typically open several months prior to the Dhul Hijjah season following official announcements from the Saudi Ministry of Hajj & Umrah and local regulatory bodies. Early application is strongly advised to secure quotas.",
    },
    {
        question: "What is the difference between Shifting and Non-Shifting Hajj packages?",
        answer:
            "In a Shifting package, pilgrims stay at an accommodation in Azizia (near Mina) during peak Hajj days and move to a hotel near the Haram before or after Hajj. In a Non-Shifting package, you maintain your primary 5-star hotel room near the Haram throughout the entire journey without moving baggage.",
    },
    {
        question: "Are flights directly from Mumbai included in these packages?",
        answer:
            "Yes, all listed Hajj packages originate from Mumbai (BOM) with scheduled direct or convenient connecting flights to Jeddah or Madinah.",
    },
    {
        question: "What documents are required for Hajj registration?",
        answer:
            "Required documents include an original passport valid for at least 6 months, recent passport-size photographs with a white background, PAN card, Aadhaar card, health/vaccination certificates, and emergency contact details.",
    },
];

export default function HajjPage() {
    const [selectedPackage, setSelectedPackage] = useState<string>("hajj-shifting-deluxe");
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    return (
        <div className="min-h-screen bg-[#FAF8F2] text-[#1F2925]">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#064E3B] py-16 text-white md:py-24">
                <div className="aria-hidden:true pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
                <div className="aria-hidden:true pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#C9A227]">
                            <Compass className="h-3.5 w-3.5" />
                            <span>Sacred Pilgrimage from Mumbai</span>
                        </div>

                        <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Hajj Packages & Guidance
                        </h1>

                        <p className="mt-4 text-base leading-relaxed text-emerald-100/90 sm:text-lg">
                            Fulfill your sacred obligation with complete peace of mind. Al-Huda World Tours & Travels provides transparent Hajj arrangements, experienced group leaders, and dedicated ground support.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-emerald-100 sm:text-sm">
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-[#C9A227]" />
                                Mumbai Departures
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-[#C9A227]" />
                                Full Administrative Support
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-[#C9A227]" />
                                Experienced Religious Guides
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview & Key Highlights */}
            <section className="py-12 md:py-16 bg-white border-b border-emerald-900/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="rounded-2xl border border-emerald-900/10 bg-[#FAF8F2] p-6 shadow-sm">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#064E3B] text-[#C9A227]">
                                <Shield className="h-5 w-5" />
                            </div>
                            <h3 className="mt-4 font-serif text-lg font-bold text-[#064E3B]">
                                Transparent & Reliable
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-[#1F2925]/80 sm:text-sm">
                                Clear itinerary structures, verified hotel allotments, and direct assistance for visa and government documentation.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-emerald-900/10 bg-[#FAF8F2] p-6 shadow-sm">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#064E3B] text-[#C9A227]">
                                <Building2 className="h-5 w-5" />
                            </div>
                            <h3 className="mt-4 font-serif text-lg font-bold text-[#064E3B]">
                                Comfortable Accommodations
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-[#1F2925]/80 sm:text-sm">
                                Carefully selected options ranging from economy Azizia bases to premier 5-star hotels fronting the Haram.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-emerald-900/10 bg-[#FAF8F2] p-6 shadow-sm">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#064E3B] text-[#C9A227]">
                                <Plane className="h-5 w-5" />
                            </div>
                            <h3 className="mt-4 font-serif text-lg font-bold text-[#064E3B]">
                                End-to-End Logistics
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-[#1F2925]/80 sm:text-sm">
                                From Mumbai airport check-in to internal Saudi transfers, Mina camp arrangements, and Madinah Ziyarat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hajj Packages List */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="font-serif text-3xl font-bold tracking-tight text-[#064E3B] sm:text-4xl">
                            Featured Hajj Packages
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1F2925]/80 sm:text-base">
                            Explore our structured package categories for the upcoming Hajj pilgrimage. Select a package to inquire directly with our Mumbai travel desk.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {HAJJ_PACKAGES.map((pkg) => {
                            const isSelected = selectedPackage === pkg.id;
                            return (
                                <div
                                    key={pkg.id}
                                    className={`relative flex flex-col justify-between rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 ${isSelected
                                            ? "border-[#064E3B] ring-2 ring-[#064E3B]/20 shadow-md"
                                            : "border-emerald-900/10 hover:border-emerald-900/30"
                                        }`}
                                >
                                    {pkg.badge && (
                                        <div className="absolute -top-3.5 right-6 rounded-full bg-[#C9A227] px-3.5 py-1 text-[11px] font-bold text-[#064E3B] shadow-sm">
                                            {pkg.badge}
                                        </div>
                                    )}

                                    <div>
                                        <h3 className="font-serif text-2xl font-bold text-[#064E3B]">
                                            {pkg.name}
                                        </h3>

                                        <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#C9A227]">
                                            <Clock className="h-4 w-4" />
                                            <span>Duration: {pkg.duration}</span>
                                        </div>

                                        <div className="mt-6 space-y-3 rounded-2xl bg-[#FAF8F2] p-4 text-xs text-[#1F2925]/80">
                                            <div>
                                                <span className="font-bold text-[#064E3B] block">Makkah Hotel:</span>
                                                {pkg.makkahHotel} ({pkg.makkahDistance})
                                            </div>
                                            <div>
                                                <span className="font-bold text-[#064E3B] block">Madinah Hotel:</span>
                                                {pkg.madinahHotel} ({pkg.madinahDistance})
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#064E3B]">
                                                Key Inclusions:
                                            </h4>
                                            <ul className="mt-3 space-y-2 text-xs text-[#1F2925]/80">
                                                {pkg.inclusions.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#064E3B] mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                        <p className="mb-4 text-xs italic text-gray-500">{pkg.notes}</p>
                                        <div className="flex flex-col gap-2">
                                            <a
                                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                                    `Assalamu Alaikum. I am interested in inquiring about the ${pkg.name} from Mumbai.`
                                                )}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#20bd5a]"
                                            >
                                                <MessageCircle className="h-4 w-4" />
                                                <span>Inquire on WhatsApp</span>
                                            </a>

                                            <a
                                                href={`tel:+${whatsappNumber}`}
                                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#064E3B]/20 bg-[#FAF8F2] px-4 py-2.5 text-xs font-bold text-[#064E3B] transition-all hover:bg-[#064E3B] hover:text-white"
                                            >
                                                <PhoneCall className="h-4 w-4" />
                                                <span>Call Travel Desk</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Documentation Note */}
            <section className="bg-white py-12 border-y border-emerald-900/10">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6 flex flex-col md:flex-row items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-900">
                            <FileText className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="font-serif text-lg font-bold text-amber-950">
                                Important Registration Notice
                            </h3>
                            <p className="mt-1 text-xs leading-relaxed text-amber-900/80 sm:text-sm">
                                Hajj slots and quotas are strictly subject to Saudi Ministry guidelines and government rules. We advise all intending pilgrims from Mumbai and surrounding regions to submit original documents early to ensure hassle-free processing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-20 bg-[#FAF8F2]">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="font-serif text-3xl font-bold text-[#064E3B]">
                            Hajj Frequently Asked Questions
                        </h2>
                        <p className="mt-2 text-sm text-[#1F2925]/80">
                            Clear answers regarding Hajj packages, rules, and booking procedures.
                        </p>
                    </div>

                    <div className="mt-10 space-y-3">
                        {HAJJ_FAQS.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={index}
                                    className="overflow-hidden rounded-xl border border-emerald-900/10 bg-white"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(isOpen ? null : index)}
                                        className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-emerald-50/40"
                                    >
                                        <span className="font-serif text-base font-semibold text-[#064E3B]">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`h-5 w-5 shrink-0 text-[#064E3B] transition-transform ${isOpen ? "rotate-180 text-[#C9A227]" : ""
                                                }`}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div className="border-t border-gray-100 px-6 py-4 text-xs leading-relaxed text-[#1F2925]/80 sm:text-sm">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section className="bg-[#064E3B] py-12 text-white">
                <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                        Have Questions About Hajj Registrations?
                    </h2>
                    <p className="mt-2 text-xs text-emerald-100/90 sm:text-sm">
                        Contact our Mumbai travel team directly for current availability, eligibility guidance, and customized group bookings.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                "Assalamu Alaikum. I would like to inquire about Hajj package details."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#20bd5a]"
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span>Connect on WhatsApp</span>
                        </a>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3 text-xs font-bold text-[#064E3B] shadow-md hover:bg-[#b89421]"
                        >
                            <Send className="h-4 w-4" />
                            <span>Visit Contact Page</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}