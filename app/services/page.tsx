"use client";

import Link from "next/link";
import {
    Compass,
    Building2,
    FileText,
    Plane,
    HeartHandshake,
    ShieldCheck,
    CheckCircle2,
    MessageCircle,
    PhoneCall,
    ArrowRight,
    Globe,
    Award,
    Users,
} from "lucide-react";

interface ServiceItem {
    id: string;
    title: string;
    category: string;
    icon: React.ElementType;
    description: string;
    features: string[];
    ctaLink: string;
    ctaText: string;
}

const SERVICES: ServiceItem[] = [
    {
        id: "umrah-services",
        title: "Umrah Pilgrimage Packages",
        category: "Core Sacred Service",
        icon: Compass,
        description:
            "Comprehensive year-round Umrah services tailored for individuals, families, and groups departing from Mumbai. Includes flights, verified near-Haram hotels, and guided Ziyarat.",
        features: [
            "Economy, Deluxe & VIP 5-Star Front-Row Packages",
            "Specialized Ramadan & School Holiday Groups",
            "Direct flights from Mumbai (BOM) to Jeddah/Madinah",
            "Complete Guided Ziyarat with experienced Islamic scholars",
            "Full board authentic Indian buffet catering",
        ],
        ctaLink: "/umrah",
        ctaText: "Explore Umrah Packages",
    },
    {
        id: "hajj-services",
        title: "Hajj Pilgrimage Guidance",
        category: "Core Sacred Service",
        icon: Building2,
        description:
            "Full-service Hajj coordination delivering complete logistical ease, Mina tent management, direct flights, and comprehensive spiritual guidance throughout the rites.",
        features: [
            "Category A & B Air-Conditioned Mina & Arafat Camps",
            "Pre-Hajj guidance seminars & practical training in Mumbai",
            "Full board nutritious meal service in Mina, Arafat & Hotels",
            "Dedicated group leaders & medical assistance teams",
            "Official visa processing, insurance, and airport assistance",
        ],
        ctaLink: "/hajj",
        ctaText: "View Hajj Services",
    },
    {
        id: "visa-passport",
        title: "Visa & Passport Assistance",
        category: "Travel Logistics",
        icon: FileText,
        description:
            "End-to-end travel document clearance for Saudi Arabia (Umrah, Tourist, Business) along with passport renewal guidance and mandatory travel health insurance.",
        features: [
            "Fast-track Saudi Tourist & Umrah Visa Processing",
            "Passport renewal and police verification guidance",
            "Mandatory medical insurance & biometric appointments",
            "Attestation and documentation verification",
            "Clear, transparent fee structure with zero hidden charges",
        ],
        ctaLink: "/contact",
        ctaText: "Enquire About Visas",
    },
    {
        id: "flight-hotel",
        title: "Flights & Hotel Booking",
        category: "Travel Logistics",
        icon: Plane,
        description:
            "Standalone hotel reservations in Makkah and Madinah with guaranteed distances, plus direct and connecting flight ticketing across major airlines.",
        features: [
            "Direct group allocations on Saudi Arabian Airlines, Flynas & Air India",
            "Verified distance guarantees from Haram & Markaziah",
            "Budget 3-Star to Luxury 5-Star Clock Tower suites",
            "Special wheelchair-accessible room requests",
            "Intercity transfers (GMC / Private Luxury Coaches)",
        ],
        ctaLink: "/contact",
        ctaText: "Book Hotel / Flight",
    },
    {
        id: "ziyarat-tours",
        title: "Islamic Heritage & Ziyarat Tours",
        category: "Specialized Tours",
        icon: Globe,
        description:
            "Guided historical tours across Makkah Mukarramah, Madinah Munawwarah, and extended Islamic heritage destinations (Badr, Taif, Jordan, Palestine/Al-Aqsa).",
        features: [
            "Detailed historical context provided by local guides",
            "Taif day tours with cable car and rose factory visits",
            "Historical battlefield visits (Badr, Uhud, Khandaq)",
            "Air-conditioned luxury coach transfers",
            "Customized family/private Ziyarat itineraries",
        ],
        ctaLink: "/contact",
        ctaText: "Plan Ziyarat Tour",
    },
    {
        id: "custom-groups",
        title: "Customized & Private Group Tours",
        category: "Bespoke Service",
        icon: Users,
        description:
            "Tailor-made itineraries designed specifically for private family groups, corporate delegations, or elderly pilgrims requiring specialized care.",
        features: [
            "Flexibility to select exact departure dates and duration",
            "Dedicated private VIP transport (GMC / SUV / Private Van)",
            "Tailored dining options and diet-specific catering",
            "Personal guide and 24/7 dedicated local coordinator",
            "Wheelchair assistance and priority ground clearance",
        ],
        ctaLink: "/contact",
        ctaText: "Request Custom Quote",
    },
];

export default function ServicesPage() {
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
                            <HeartHandshake className="h-3.5 w-3.5" />
                            <span>Dedicated Pilgrimage Services</span>
                        </div>

                        <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Our Services & Tour Management
                        </h1>

                        <p className="mt-4 text-base leading-relaxed text-emerald-100/90 sm:text-lg">
                            From full-service Hajj and Umrah packages to fast-track visa processing and custom family itineraries, we ensure complete peace of mind at every step.
                        </p>
                    </div>
                </div>
            </section>

            {/* Trust Badges Bar */}
            <section className="bg-white py-10 border-b border-emerald-900/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#064E3B]/10 text-[#064E3B]">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-serif text-xs font-bold text-[#064E3B]">
                                    Verified Approvals
                                </h4>
                                <p className="text-[11px] text-[#1F2925]/70">Ministry Authorized</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#064E3B]/10 text-[#064E3B]">
                                <Building2 className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-serif text-xs font-bold text-[#064E3B]">
                                    Hotel Distance Guarantee
                                </h4>
                                <p className="text-[11px] text-[#1F2925]/70">Verified Walking Distance</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#064E3B]/10 text-[#064E3B]">
                                <Award className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-serif text-xs font-bold text-[#064E3B]">
                                    20+ Years Experience
                                </h4>
                                <p className="text-[11px] text-[#1F2925]/70">Trusted Mumbai Agency</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#064E3B]/10 text-[#064E3B]">
                                <PhoneCall className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-serif text-xs font-bold text-[#064E3B]">
                                    24/7 Ground Assistance
                                </h4>
                                <p className="text-[11px] text-[#1F2925]/70">Mumbai & KSA Teams</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List Grid */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    className="flex flex-col justify-between rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#064E3B]/30 hover:shadow-md sm:p-8"
                                >
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#064E3B]/10 text-[#064E3B]">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <span className="rounded-full bg-[#FAF8F2] px-3 py-1 text-[11px] font-semibold text-[#C9A227]">
                                                {service.category}
                                            </span>
                                        </div>

                                        <h3 className="mt-5 font-serif text-xl font-bold text-[#064E3B]">
                                            {service.title}
                                        </h3>

                                        <p className="mt-2 text-xs leading-relaxed text-[#1F2925]/75 sm:text-sm">
                                            {service.description}
                                        </p>

                                        <div className="mt-6 border-t border-gray-100 pt-4">
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#064E3B]">
                                                Key Highlights:
                                            </h4>
                                            <ul className="mt-3 space-y-2 text-xs text-[#1F2925]/80">
                                                {service.features.map((feat, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#064E3B] mt-0.5" />
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-4 border-t border-gray-100">
                                        <Link
                                            href={service.ctaLink}
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#064E3B] px-4 py-3 text-xs font-bold text-white transition-all hover:bg-[#04382a]"
                                        >
                                            <span>{service.ctaText}</span>
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Callout Section */}
            <section className="bg-[#064E3B] py-16 text-white">
                <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
                        Have Specific Requirements or Group Travel Plans?
                    </h2>
                    <p className="mt-3 text-xs text-emerald-100/90 sm:text-sm lg:text-base">
                        Speak directly with our Mumbai travel consultants to configure flight bookings, hotel preferences, and visa arrangements for your family or organization.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                "Assalamu Alaikum. I would like to inquire about your travel services."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-[#20bd5a]"
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span>Chat on WhatsApp</span>
                        </a>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3.5 text-xs font-bold text-[#064E3B] shadow-md hover:bg-[#b89421]"
                        >
                            <FileText className="h-4 w-4" />
                            <span>Submit Inquiry Form</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}