"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Compass,
    CheckCircle2,
    Calendar,
    MapPin,
    Clock,
    Send,
    PhoneCall,
    MessageCircle,
    ChevronDown,
    Building2,
    Plane,
    Sparkles,
    Award,
    Users,
} from "lucide-react";

interface UmrahPackage {
    id: string;
    name: string;
    badge?: string;
    category: "Economy" | "Standard" | "Premium" | "Ramadan";
    duration: string;
    makkahHotel: string;
    makkahDistance: string;
    madinahHotel: string;
    madinahDistance: string;
    inclusions: string[];
    description: string;
}

const UMRAH_PACKAGES: UmrahPackage[] = [
    {
        id: "umrah-economy",
        name: "Economy Umrah Package",
        badge: "Best Value",
        category: "Economy",
        duration: "14 - 15 Days",
        makkahHotel: "3-Star Standard Hotel",
        makkahDistance: "600m - 800m (Or Shuttle Available)",
        madinahHotel: "3-Star Standard Hotel",
        madinahDistance: "Within 400m - 500m",
        inclusions: [
            "Return Flight Ticket (Mumbai Departure)",
            "Tourist / Umrah Visa with Insurance",
            "Hotel Accommodation in Makkah & Madinah",
            "Air-Conditioned Bus Transfers (Jeddah-Makkah-Madinah)",
            "Guided Ziyarat in Makkah & Madinah",
            "Full Board Indian Buffet Meals",
            "24/7 Local Group Assistance",
        ],
        description: "Budget-friendly Umrah package tailored for individuals and families seeking comfortable, essential facilities.",
    },
    {
        id: "umrah-deluxe",
        name: "Standard Deluxe Umrah Package",
        badge: "Most Popular",
        category: "Standard",
        duration: "14 - 15 Days",
        makkahHotel: "4-Star Hotel",
        makkahDistance: "300m - 400m from Haram Courtyard",
        madinahHotel: "4-Star Hotel",
        madinahDistance: "Within 200m - 300m",
        inclusions: [
            "Direct Flight Options from Mumbai",
            "Express Visa Processing & Health Insurance",
            "Prime 4-Star Accommodations near Haram",
            "Luxury AC Coach Internal Transportation",
            "Complete Guided Ziyarat with Historical Overview",
            "Daily Buffet Breakfast, Lunch & Dinner",
            "Complimentary Umrah Kit (Bag, Ihram/Abaya)",
        ],
        description: "Balances close hotel proximity with premium comfort and direct transport links.",
    },
    {
        id: "umrah-vip-luxury",
        name: "VIP 5-Star Front-Row Package",
        badge: "Executive VIP",
        category: "Premium",
        duration: "10 - 15 Days",
        makkahHotel: "5-Star Front-Row Hotel (Tower Category)",
        makkahDistance: "Direct Access to Haram Plaza",
        madinahHotel: "5-Star Front-Row Hotel",
        madinahDistance: "Direct Access to Prophet's Mosque",
        inclusions: [
            "Direct Business / Direct Economy Flights",
            "Priority Visa & Fast-Track Airport Services",
            "Luxury 5-Star Front-Row Hotels with Haram Views",
            "Private GMC or Luxury Executive Transfers",
            "Personalized Ziyarat with Dedicated Guide",
            "Full Board International & Indian Gourmet Dining",
            "24/7 Dedicated Concierge & Assistance",
        ],
        description: "Designed for elders, corporate executives, and pilgrims seeking seamless luxury and immediate Haram access.",
    },
    {
        id: "umrah-ramadan-special",
        name: "Special Ramadan Umrah Package",
        badge: "Ramadan Season",
        category: "Ramadan",
        duration: "15 Days / Full Month Options",
        makkahHotel: "4-Star / 5-Star Hotel",
        makkahDistance: "Walking Distance to Haram",
        madinahHotel: "4-Star / 5-Star Hotel",
        madinahDistance: "Walking Distance to Markaziah",
        inclusions: [
            "Scheduled Ramadan Flights from Mumbai",
            "Umrah Visa & Processing Clearance",
            "Hotel Stay covering Lailat-ul-Qadr & Eid options",
            "Suhoor & Iftar Meal Arrangements Included",
            "Group Assistance for Taraweeh & Itikaf",
            "AC Coach Transfers between Holy Cities",
        ],
        description: "Immerse yourself in the spiritual atmosphere of the Holy Month with dedicated Ramadan group logistics.",
    },
];

const UMRAH_FAQS = [
    {
        question: "Can I perform Umrah on a Tourist Visa from Mumbai?",
        answer:
            "Yes. Indian passport holders with valid Tourist Visas (or specific Umrah visas) can perform Umrah. Our team handles complete visa clearance, eligibility checks, and required travel insurance.",
    },
    {
        question: "Are customized family or private Umrah packages available?",
        answer:
            "Absoloutely. We design customized Umrah itineraries where you choose your preferred departure dates, airlines, specific hotel properties in Makkah and Madinah, and private SUV transfers.",
    },
    {
        question: "What is included in the complimentary Umrah Kit?",
        answer:
            "Standard and VIP packages typically include a travel bag, Ihram clothes (for men) or headscarf/guide (for women), Tawaf counter, waist belt, and pocket pilgrim guide booklet.",
    },
    {
        question: "How far in advance should I book my Umrah package?",
        answer:
            "We recommend booking at least 30 to 45 days before your desired departure date to secure optimum flight timing, hotel proximity, and visa approvals.",
    },
];

export default function UmrahPage() {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    const filteredPackages =
        activeCategory === "All"
            ? UMRAH_PACKAGES
            : UMRAH_PACKAGES.filter((pkg) => pkg.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#FAF8F2] text-[#1F2925]">
            {/* Hero Header */}
            <section className="relative overflow-hidden bg-[#064E3B] py-16 text-white md:py-24">
                <div className="aria-hidden:true pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
                <div className="aria-hidden:true pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#C9A227]">
                            <Compass className="h-3.5 w-3.5" />
                            <span>Blessed Journeys Throughout the Year</span>
                        </div>

                        <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Umrah Packages & Custom Tours
                        </h1>

                        <p className="mt-4 text-base leading-relaxed text-emerald-100/90 sm:text-lg">
                            Embark on your sacred pilgrimage with verified hotel proximity, seamless visa clearance, and dedicated ground support from Mumbai.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-emerald-100 sm:text-sm">
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-[#C9A227]" />
                                Mumbai Direct Flights
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-[#C9A227]" />
                                Near-Haram Accommodations
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-[#C9A227]" />
                                Complete Guided Ziyarat
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Highlights Strip */}
            <section className="bg-white py-12 border-b border-emerald-900/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#064E3B]/10 text-[#064E3B]">
                                <Building2 className="h-6 w-6" />
                            </div>
                            <h3 className="mt-3 font-serif text-sm font-bold text-[#064E3B]">
                                Verified Hotels
                            </h3>
                            <p className="mt-1 text-xs text-[#1F2925]/70">
                                Guaranteed distance and walking proximity to Haram
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center p-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#064E3B]/10 text-[#064E3B]">
                                <Plane className="h-6 w-6" />
                            </div>
                            <h3 className="mt-3 font-serif text-sm font-bold text-[#064E3B]">
                                Confirmed Flights
                            </h3>
                            <p className="mt-1 text-xs text-[#1F2925]/70">
                                Direct BOM to JED / MED scheduled routes
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center p-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#064E3B]/10 text-[#064E3B]">
                                <Award className="h-6 w-6" />
                            </div>
                            <h3 className="mt-3 font-serif text-sm font-bold text-[#064E3B]">
                                Complete Catering
                            </h3>
                            <p className="mt-1 text-xs text-[#1F2925]/70">
                                Fresh Indian buffet breakfast, lunch & dinner
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center p-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#064E3B]/10 text-[#064E3B]">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="mt-3 font-serif text-sm font-bold text-[#064E3B]">
                                Group Leaders
                            </h3>
                            <p className="mt-1 text-xs text-[#1F2925]/70">
                                Experienced religious guides & local coordination
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Package Filter & Listing */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="font-serif text-3xl font-bold tracking-tight text-[#064E3B] sm:text-4xl">
                            Explore Our Umrah Packages
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1F2925]/80 sm:text-base">
                            Filter by package category to discover options matching your schedule, budget, and accommodation preferences.
                        </p>

                        {/* Category Filter Buttons */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                            {["All", "Economy", "Standard", "Premium", "Ramadan"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${activeCategory === cat
                                        ? "bg-[#064E3B] text-white shadow-md"
                                        : "bg-white text-[#064E3B] border border-emerald-900/10 hover:bg-emerald-50"
                                        }`}
                                >
                                    {cat === "All" ? "All Packages" : `${cat} Packages`}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                        {filteredPackages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className="relative flex flex-col justify-between rounded-3xl border border-emerald-900/10 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#064E3B]/30 hover:shadow-md"
                            >
                                {pkg.badge && (
                                    <div className="absolute -top-3.5 right-6 rounded-full bg-[#C9A227] px-3.5 py-1 text-[11px] font-bold text-[#064E3B] shadow-sm">
                                        {pkg.badge}
                                    </div>
                                )}

                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="rounded-md bg-[#064E3B]/10 px-2.5 py-1 text-xs font-semibold text-[#064E3B]">
                                            {pkg.category}
                                        </span>
                                        <span className="text-xs font-medium text-[#1F2925]/60 flex items-center gap-1">
                                            <Clock className="h-3.5 w-3.5 text-[#C9A227]" />
                                            {pkg.duration}
                                        </span>
                                    </div>

                                    <h3 className="mt-4 font-serif text-2xl font-bold text-[#064E3B]">
                                        {pkg.name}
                                    </h3>

                                    <p className="mt-2 text-xs leading-relaxed text-[#1F2925]/75 sm:text-sm">
                                        {pkg.description}
                                    </p>

                                    <div className="mt-6 space-y-3 rounded-2xl bg-[#FAF8F2] p-4 text-xs text-[#1F2925]/80">
                                        <div className="flex items-start gap-2">
                                            <MapPin className="h-4 w-4 shrink-0 text-[#C9A227] mt-0.5" />
                                            <div>
                                                <strong className="text-[#064E3B]">Makkah Stay:</strong> {pkg.makkahHotel}
                                                <span className="block text-[11px] text-gray-500">{pkg.makkahDistance}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <MapPin className="h-4 w-4 shrink-0 text-[#C9A227] mt-0.5" />
                                            <div>
                                                <strong className="text-[#064E3B]">Madinah Stay:</strong> {pkg.madinahHotel}
                                                <span className="block text-[11px] text-gray-500">{pkg.madinahDistance}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#064E3B]">
                                            Package Highlights:
                                        </h4>
                                        <ul className="mt-3 grid grid-cols-1 gap-2 text-xs text-[#1F2925]/80 sm:grid-cols-2">
                                            {pkg.inclusions.map((inc, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#064E3B] mt-0.5" />
                                                    <span>{inc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="w-full sm:w-auto">
                                        <span className="text-[11px] text-gray-500 block">Pricing & Availability</span>
                                        <span className="text-sm font-bold text-[#064E3B]">Enquire for Best Rates</span>
                                    </div>

                                    <div className="flex w-full sm:w-auto items-center gap-2">
                                        <a
                                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                                `Assalamu Alaikum. I want to enquire about the ${pkg.name}.`
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#20bd5a]"
                                        >
                                            <MessageCircle className="h-4 w-4" />
                                            <span>WhatsApp</span>
                                        </a>

                                        <a
                                            href={`tel:+${whatsappNumber}`}
                                            className="inline-flex items-center justify-center rounded-xl border border-[#064E3B]/20 bg-[#FAF8F2] p-3 text-[#064E3B] hover:bg-[#064E3B] hover:text-white"
                                            aria-label="Call travel desk"
                                        >
                                            <PhoneCall className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white border-t border-emerald-900/10">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="font-serif text-3xl font-bold text-[#064E3B]">
                            Umrah Frequently Asked Questions
                        </h2>
                        <p className="mt-2 text-sm text-[#1F2925]/80">
                            Clear answers to help you prepare for your Umrah journey.
                        </p>
                    </div>

                    <div className="mt-10 space-y-3">
                        {UMRAH_FAQS.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={index}
                                    className="overflow-hidden rounded-xl border border-emerald-900/10 bg-[#FAF8F2]"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(isOpen ? null : index)}
                                        className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-emerald-50/50"
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
                                        <div className="border-t border-gray-200/60 px-6 py-4 text-xs leading-relaxed text-[#1F2925]/80 sm:text-sm">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-[#064E3B] py-12 text-white">
                <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                        Need a Customized Family Umrah Package?
                    </h2>
                    <p className="mt-2 text-xs text-emerald-100/90 sm:text-sm">
                        Specify your preferred dates, hotel choices, and family group size for a personalized quote.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                "Assalamu Alaikum. I would like a customized Umrah quote for my family."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#20bd5a]"
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span>Get Custom Quote on WhatsApp</span>
                        </a>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3 text-xs font-bold text-[#064E3B] shadow-md hover:bg-[#b89421]"
                        >
                            <Send className="h-4 w-4" />
                            <span>Contact Travel Desk</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}