"use client";

import Link from "next/link";
import {
    Building2,
    ShieldCheck,
    HeartHandshake,
    Users,
    Award,
    Compass,
    CheckCircle2,
    MessageCircle,
    Clock,
    MapPin,
    Sparkles,
} from "lucide-react";

const CORE_VALUES = [
    {
        title: "Amanah (Trust & Honesty)",
        description:
            "We treat every pilgrimage booking as a sacred trust. What we promise regarding hotel distance, flight timings, and catering is exactly what we deliver.",
        icon: ShieldCheck,
    },
    {
        title: "Khidmat (Dedicated Pilgrim Service)",
        description:
            "Our team on the ground in Makkah and Madinah works tirelessly to serve pilgrims—especially elders, families, and first-time travelers.",
        icon: HeartHandshake,
    },
    {
        title: "Insaaf (Fair & Transparent Pricing)",
        description:
            "No hidden costs or surprise surcharges. All package inclusions, visa fees, and hotel taxes are clearly communicated upfront.",
        icon: Award,
    },
    {
        title: "Sunnah-Guided Guidance",
        description:
            "Accompanying scholars and experienced group leaders ensure all rituals of Umrah and Hajj are performed according to authentic Islamic teachings.",
        icon: Compass,
    },
];

const MILESTONES = [
    {
        year: "2004",
        title: "Establishment in Mumbai",
        description: "Founded with a mission to offer honest, pilgrim-centric travel management.",
    },
    {
        year: "2010",
        title: "Ministry Recognition",
        description: "Obtained official certifications and direct airline group quota authorizations.",
    },
    {
        year: "2018",
        title: "Front-Row Hotel Partnerships",
        description: "Secured direct allotment agreements with premier properties near Makkah and Madinah Haram plazas.",
    },
    {
        year: "2026",
        title: "20+ Years of Service",
        description: "Having served over 25,000 pilgrims with verified satisfaction and repeat family trust.",
    },
];

export default function AboutPage() {
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
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Over Two Decades of Sacred Service</span>
                        </div>

                        <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            About Al-Barakah Tours
                        </h1>

                        <p className="mt-4 text-base leading-relaxed text-emerald-100/90 sm:text-lg">
                            Dedicated to facilitating blessed journeys to Makkah Mukarramah and Madinah Munawwarah with uncompromising honesty, comfort, and scholar-guided logistics.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                                Our Sacred Mission
                            </span>
                            <h2 className="mt-2 font-serif text-2xl font-bold text-[#064E3B] sm:text-4xl">
                                Serving the Guests of Allah (Hujjaj & Dhuyuf-ur-Rahman)
                            </h2>
                            <p className="mt-4 text-xs leading-relaxed text-[#1F2925]/80 sm:text-base">
                                For over 20 years, Al-Barakah Tours & Travels has been a trusted name in Mumbai for Hajj and Umrah services. We understand that pilgrimage is a once-in-a-lifetime spiritual journey, and our duty is to remove all logistical anxiety so you can focus entirely on Ibadah.
                            </p>
                            <p className="mt-3 text-xs leading-relaxed text-[#1F2925]/80 sm:text-base">
                                From guaranteed hotel proximities to authentic Indian meal catering and guided Ziyarat, every detail is engineered to ensure tranquility and spiritual comfort for you and your elders.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-emerald-900/10 pt-6">
                                <div>
                                    <h3 className="font-serif text-2xl font-bold text-[#064E3B]">
                                        25,000+
                                    </h3>
                                    <p className="text-xs text-[#1F2925]/70">Pilgrims Served</p>
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl font-bold text-[#064E3B]">
                                        20+ Years
                                    </h3>
                                    <p className="text-xs text-[#1F2925]/70">Industry Leadership</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm sm:p-8">
                            <h3 className="font-serif text-xl font-bold text-[#064E3B]">
                                Why Mumbai Families Trust Us
                            </h3>

                            <ul className="mt-6 space-y-4 text-xs text-[#1F2925]/80 sm:text-sm">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#064E3B] mt-0.5" />
                                    <span>
                                        <strong>Verified Hotel Distance:</strong> Accurate walking distance metrics provided for both Makkah and Madinah accommodations.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#064E3B] mt-0.5" />
                                    <span>
                                        <strong>Scholarly Guidance:</strong> Experienced Alims lead every group tour, conducting orientation sessions before departure.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#064E3B] mt-0.5" />
                                    <span>
                                        <strong>Elderly Care Focus:</strong> Wheelchair arrangements, ground support, and close hotel placements for senior family members.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#064E3B] mt-0.5" />
                                    <span>
                                        <strong>Complete Visa Clearances:</strong> End-to-end processing of Umrah, Tourist, and Hajj documentation.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="bg-white py-16 border-y border-emerald-900/10 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="font-serif text-3xl font-bold text-[#064E3B] sm:text-4xl">
                            Our Core Guiding Principles
                        </h2>
                        <p className="mt-3 text-xs text-[#1F2925]/80 sm:text-sm">
                            Built upon Islamic ethics and transparent hospitality to protect and honor your sacred journey.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {CORE_VALUES.map((val, idx) => {
                            const Icon = val.icon;
                            return (
                                <div
                                    key={idx}
                                    className="rounded-2xl border border-emerald-900/10 bg-[#FAF8F2] p-6 text-center shadow-sm"
                                >
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#064E3B]/10 text-[#064E3B]">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-4 font-serif text-base font-bold text-[#064E3B]">
                                        {val.title}
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-[#1F2925]/75">
                                        {val.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Journey Milestones Timeline */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="font-serif text-3xl font-bold text-[#064E3B] sm:text-4xl">
                            Our History & Growth
                        </h2>
                        <p className="mt-3 text-xs text-[#1F2925]/80 sm:text-sm">
                            Two decades of continuous commitment to improving pilgrim comfort and logistics.
                        </p>
                    </div>

                    <div className="mt-12 space-y-6">
                        {MILESTONES.map((ms, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col md:flex-row items-start md:items-center gap-4 rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm"
                            >
                                <div className="flex h-12 w-24 shrink-0 items-center justify-center rounded-xl bg-[#064E3B] text-white font-serif font-bold text-lg">
                                    {ms.year}
                                </div>
                                <div>
                                    <h3 className="font-serif text-base font-bold text-[#064E3B]">
                                        {ms.title}
                                    </h3>
                                    <p className="mt-1 text-xs text-[#1F2925]/75 leading-relaxed sm:text-sm">
                                        {ms.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Callout Action */}
            <section className="bg-[#064E3B] py-16 text-white">
                <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
                        Ready to Plan Your Sacred Pilgrimage?
                    </h2>
                    <p className="mt-3 text-xs text-emerald-100/90 sm:text-sm lg:text-base">
                        Speak directly with our team in Mumbai or visit our Fort office for personalized consultation.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                "Assalamu Alaikum. I would like to inquire about your travel packages."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-[#20bd5a]"
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp Consultation</span>
                        </a>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3.5 text-xs font-bold text-[#064E3B] shadow-md hover:bg-[#b89421]"
                        >
                            <MapPin className="h-4 w-4" />
                            <span>Contact Office</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}