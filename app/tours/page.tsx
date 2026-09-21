"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Compass,
    MapPin,
    Clock,
    CheckCircle2,
    Globe,
    Calendar,
    MessageCircle,
    PhoneCall,
    ChevronDown,
    Sparkles,
    Users,
    ShieldCheck,
    Send,
} from "lucide-react";

interface TourPackage {
    id: string;
    title: string;
    badge?: string;
    location: string;
    duration: string;
    type: "Full Day" | "Half Day" | "Multi-Day Tour";
    overview: string;
    sitesCovered: string[];
    inclusions: string[];
}

const TOUR_PACKAGES: TourPackage[] = [
    {
        id: "makkah-ziyarat",
        title: "Complete Makkah Historical Ziyarat",
        badge: "Essential",
        location: "Makkah Mukarramah",
        duration: "4 - 5 Hours",
        type: "Half Day",
        overview:
            "A guided historical tour of the sacred sites surrounding Makkah Mukarramah with detailed commentary on Islamic history and prophetic traditions.",
        sitesCovered: [
            "Jabal al-Nour (Cave of Hira)",
            "Jabal Thawr (Cave of Thawr)",
            "Jabal al-Rahmah (Mount Arafat)",
            "Mina & Muzdalifah Pilgrim Grounds",
            "Jannat al-Mu'alla Cemetery",
            "Masjid al-Jinn",
        ],
        inclusions: [
            "Air-Conditioned Luxury Coach Transport",
            "Experienced Multilingual Islamic Guide",
            "Complimentary Refreshments & Water",
            "Hotel Pick-up and Drop-off in Makkah",
        ],
    },
    {
        id: "madinah-ziyarat",
        title: "Madinah Sacred Landmarks & Battlefields Tour",
        badge: "Most Popular",
        location: "Madinah Munawwarah",
        duration: "5 - 6 Hours",
        type: "Half Day",
        overview:
            "Explore the blessed landmarks of Madinah, visiting historical mosques established during the time of Prophet Muhammad (PBUH) and key battlegrounds.",
        sitesCovered: [
            "Masjid Quba (First Mosque in Islam)",
            "Masjid al-Qiblatayn (Mosque of the Two Qiblas)",
            "Mount Uhud & Martyrs' Cemetery (Shuhada Uhud)",
            "Sab'ah Masajid (Seven Mosques / Khandaq Area)",
            "Date Gardens of Madinah",
            "Jannat al-Baqi Overview",
        ],
        inclusions: [
            "Hotel Pick-up and Return in Madinah",
            "AC Coach Transfer",
            "Historical Background Commentary by Islamic Scholar",
            "Fresh Madinah Dates & Water Refreshments",
        ],
    },
    {
        id: "taif-day-tour",
        title: "Taif Mountain & Heritage Day Trip",
        badge: "Day Excursion",
        location: "Taif City",
        duration: "Full Day (8 - 10 Hours)",
        type: "Full Day",
        overview:
            "Escape the city for a scenic mountain trip to Taif, visiting historic mosques associated with the Prophet's journey, famous rose factories, and fruit orchards.",
        sitesCovered: [
            "Masjid Abdullah ibn Abbas",
            "Masjid Addas",
            "Taif Cable Car & Al Hada Mountains",
            "Historic Taif Old Souk & Market",
            "Traditional Rose Water Factory",
        ],
        inclusions: [
            "Private or Group AC Bus Transport from Makkah",
            "Guided Sightseeing & Old Souk Tour",
            "Traditional Arabic Lunch / Indian Meal",
            "Rose Factory Entry Tickets",
        ],
    },
    {
        id: "jordan-aqsa-heritage",
        title: "Jordan & Al-Aqsa Islamic Heritage Expedition",
        badge: "International Group",
        location: "Jordan & Palestine",
        duration: "7 - 10 Days",
        type: "Multi-Day Tour",
        overview:
            "A comprehensive spiritual journey connecting the third holiest site in Islam, Al-Aqsa Mosque, with historical Islamic heritage monuments across Jordan.",
        sitesCovered: [
            "Masjid al-Aqsa & Dome of the Rock (Jerusalem)",
            "Hebron (Masjid Ibrahimi / Prophet Ibrahim Shrine)",
            "Amman & Cave of the Seven Sleepers (Ashab al-Kahf)",
            "Battlefield of Mu'tah & Companions' Tombs",
            "Dead Sea & Prophet Shoaib Shrine",
        ],
        inclusions: [
            "Return Flights & Border Crossing Clearances",
            "4-Star / 5-Star Hotel Accommodations",
            "Full Board Meals (Breakfast, Lunch, Dinner)",
            "Complete Visa & Border Entry Fee Management",
            "Dedicated Islamic Tour Historian",
        ],
    },
];

const TOUR_FAQS = [
    {
        question: "Are Ziyarat tours included in standard Umrah packages?",
        answer:
            "Yes, basic Makkah and Madinah Ziyarat tours are included in all our standard and deluxe Umrah packages. Specialized excursions like the Taif Day Trip or private SUV tours can be added separately.",
    },
    {
        question: "Can we request a private vehicle for family Ziyarat?",
        answer:
            "Absoloutely. We offer private SUVs (GMC Yukon, Hyundai H1, or private sedans) with dedicated drivers and private guides tailored to your family's schedule.",
    },
    {
        question: "How far in advance should we book international heritage tours (e.g. Jordan/Al-Aqsa)?",
        answer:
            "Due to visa clearances and border permissions, international heritage group tours require booking at least 60 to 90 days prior to departure.",
    },
];

export default function ToursPage() {
    const [activeFilter, setActiveFilter] = useState<string>("All");
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    const filteredTours =
        activeFilter === "All"
            ? TOUR_PACKAGES
            : TOUR_PACKAGES.filter((tour) => tour.type === activeFilter);

    return (
        <div className="min-h-screen bg-[#FAF8F2] text-[#1F2925]">
            {/* Hero Header */}
            <section className="relative overflow-hidden bg-[#064E3B] py-16 text-white md:py-24">
                <div className="aria-hidden:true pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
                <div className="aria-hidden:true pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#C9A227]">
                            <Globe className="h-3.5 w-3.5" />
                            <span>Discover the History of Islam</span>
                        </div>

                        <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Islamic Heritage & Ziyarat Tours
                        </h1>

                        <p className="mt-4 text-base leading-relaxed text-emerald-100/90 sm:text-lg">
                            Enrich your pilgrimage with scholar-guided visits to sacred landmarks in Makkah, Madinah, Taif, and international Islamic historical routes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Feature Highlights */}
            <section className="bg-white py-10 border-b border-emerald-900/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        <div className="flex flex-col items-center text-center p-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#064E3B]/10 text-[#064E3B]">
                                <Compass className="h-5 w-5" />
                            </div>
                            <h3 className="mt-2 font-serif text-xs font-bold text-[#064E3B]">
                                Scholar Guides
                            </h3>
                            <p className="text-[11px] text-[#1F2925]/70">Detailed historical context</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#064E3B]/10 text-[#064E3B]">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <h3 className="mt-2 font-serif text-xs font-bold text-[#064E3B]">
                                AC Luxury Transport
                            </h3>
                            <p className="text-[11px] text-[#1F2925]/70">Coaches & private SUVs</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#064E3B]/10 text-[#064E3B]">
                                <Users className="h-5 w-5" />
                            </div>
                            <h3 className="mt-2 font-serif text-xs font-bold text-[#064E3B]">
                                Family Flexibility
                            </h3>
                            <p className="text-[11px] text-[#1F2925]/70">Custom private arrangements</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#064E3B]/10 text-[#064E3B]">
                                <Sparkles className="h-5 w-5" />
                            </div>
                            <h3 className="mt-2 font-serif text-xs font-bold text-[#064E3B]">
                                Organized Logistics
                            </h3>
                            <p className="text-[11px] text-[#1F2925]/70">Seamless hotel pickups</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tour Listings Section */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="font-serif text-3xl font-bold tracking-tight text-[#064E3B] sm:text-4xl">
                            Featured Ziyarat & Heritage Itineraries
                        </h2>
                        <p className="mx-auto mt-2 max-w-2xl text-xs text-[#1F2925]/80 sm:text-sm">
                            Filter tours by duration and type to plan your educational and spiritual excursions.
                        </p>

                        {/* Filter Buttons */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                            {["All", "Half Day", "Full Day", "Multi-Day Tour"].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setActiveFilter(type)}
                                    className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${activeFilter === type
                                            ? "bg-[#064E3B] text-white shadow-md"
                                            : "bg-white text-[#064E3B] border border-emerald-900/10 hover:bg-emerald-50"
                                        }`}
                                >
                                    {type === "All" ? "All Excursions" : type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {filteredTours.map((tour) => (
                            <div
                                key={tour.id}
                                className="relative flex flex-col justify-between rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#064E3B]/30 hover:shadow-md sm:p-8"
                            >
                                {tour.badge && (
                                    <div className="absolute -top-3.5 right-6 rounded-full bg-[#C9A227] px-3.5 py-1 text-[11px] font-bold text-[#064E3B] shadow-sm">
                                        {tour.badge}
                                    </div>
                                )}

                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="rounded-md bg-[#064E3B]/10 px-2.5 py-1 text-xs font-semibold text-[#064E3B]">
                                            {tour.location}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs font-medium text-[#1F2925]/60">
                                            <Clock className="h-3.5 w-3.5 text-[#C9A227]" />
                                            {tour.duration}
                                        </span>
                                    </div>

                                    <h3 className="mt-4 font-serif text-2xl font-bold text-[#064E3B]">
                                        {tour.title}
                                    </h3>

                                    <p className="mt-2 text-xs leading-relaxed text-[#1F2925]/75 sm:text-sm">
                                        {tour.overview}
                                    </p>

                                    {/* Covered Landmarks */}
                                    <div className="mt-6 rounded-2xl bg-[#FAF8F2] p-4 border border-emerald-900/5">
                                        <h4 className="text-xs font-bold text-[#064E3B]">
                                            Key Sacred Sites & Landmarks:
                                        </h4>
                                        <ul className="mt-3 grid grid-cols-1 gap-2 text-xs text-[#1F2925]/80 sm:grid-cols-2">
                                            {tour.sitesCovered.map((site, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <MapPin className="h-3.5 w-3.5 shrink-0 text-[#C9A227] mt-0.5" />
                                                    <span>{site}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tour Inclusions */}
                                    <div className="mt-6">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#064E3B]">
                                            Tour Inclusions:
                                        </h4>
                                        <ul className="mt-3 space-y-1.5 text-xs text-[#1F2925]/80">
                                            {tour.inclusions.map((inc, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#064E3B] mt-0.5" />
                                                    <span>{inc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div>
                                        <span className="text-[11px] text-gray-500 block">Tour Pricing</span>
                                        <span className="text-xs font-bold text-[#064E3B]">
                                            Included in Umrah Package / Custom Private Quote
                                        </span>
                                    </div>

                                    <a
                                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                            `Assalamu Alaikum. I want to inquire about the ${tour.title}.`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#20bd5a]"
                                    >
                                        <MessageCircle className="h-4 w-4" />
                                        <span>Inquire via WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white py-16 border-t border-emerald-900/10">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="font-serif text-3xl font-bold text-[#064E3B]">
                            Ziyarat Tour Questions
                        </h2>
                        <p className="mt-2 text-xs text-[#1F2925]/80 sm:text-sm">
                            Everything you need to know about preparing for historical tours.
                        </p>
                    </div>

                    <div className="mt-10 space-y-3">
                        {TOUR_FAQS.map((faq, index) => {
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
                                        <span className="font-serif text-sm font-semibold text-[#064E3B] sm:text-base">
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
                        Want to Arrange a Private Family Ziyarat Tour?
                    </h2>
                    <p className="mt-2 text-xs text-emerald-100/90 sm:text-sm">
                        Contact our desk to reserve dedicated luxury transport and a personal scholar guide for your group.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                "Assalamu Alaikum. I would like to book a private family Ziyarat tour."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#20bd5a]"
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span>Book via WhatsApp</span>
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