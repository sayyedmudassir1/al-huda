"use client";

import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    BedDouble,
    Check,
    Clock3,
    MapPin,
    MessageCircle,
    Plane,
    UsersRound,
} from "lucide-react";

type HajjPackage = {
    id: string;
    category: "Economy" | "Standard" | "Premium" | "Customized";
    name: string;
    duration: string | null;
    departure: string | null;
    makkah: string | null;
    madinah: string | null;
    accommodation: string | null;
    transport: string | null;
    meals: string | null;
    image: string;
};

const hajjPackages: HajjPackage[] = [
    {
        id: "hajj-economy",
        category: "Economy",
        name: "Hajj Economy Package",
        duration: null,
        departure: "Mumbai",
        makkah: null,
        madinah: null,
        accommodation: null,
        transport: null,
        meals: null,
        image: "/images/hajj/hajj-economy.webp",
    },
    {
        id: "hajj-standard",
        category: "Standard",
        name: "Hajj Standard Package",
        duration: null,
        departure: "Mumbai",
        makkah: null,
        madinah: null,
        accommodation: null,
        transport: null,
        meals: null,
        image: "/images/hajj/hajj-standard.webp",
    },
    {
        id: "hajj-premium",
        category: "Premium",
        name: "Hajj Premium Package",
        duration: null,
        departure: "Mumbai",
        makkah: null,
        madinah: null,
        accommodation: null,
        transport: null,
        meals: null,
        image: "/images/hajj/hajj-premium.webp",
    },
];

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

function getWhatsAppHref(packageName: string) {
    const message = encodeURIComponent(
        `Assalamu Alaikum, I would like to enquire about the ${packageName}. Please share the available details.`
    );

    return whatsappNumber
        ? `https://wa.me/${whatsappNumber}?text=${message}`
        : "/contact?service=hajj";
}

function PackageDetail({
    icon: Icon,
    label,
    value,
}: {
    icon: typeof Clock3;
    label: string;
    value: string | null;
}) {
    return (
        <div className="flex items-start gap-2.5">
            <Icon
                className="mt-0.5 h-4 w-4 shrink-0 text-[#9A7A25]"
                strokeWidth={1.8}
                aria-hidden="true"
            />

            <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A918D]">
                    {label}
                </p>

                <p className="mt-0.5 text-xs font-medium text-[#34423C]">
                    {value || "Details to be confirmed"}
                </p>
            </div>
        </div>
    );
}

function HajjPackageCard({ pkg }: { pkg: HajjPackage }) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5DFD1] bg-white shadow-[0_8px_30px_rgba(18,60,48,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8C89A] hover:shadow-[0_18px_45px_rgba(18,60,48,0.10)]">
            {/* Image */}
            <div className="relative aspect-16/10 overflow-hidden bg-[#E8E3D8]">
                <Image
                    src={pkg.image}
                    alt={`${pkg.name} — Hajj package`}
                    fill
                    sizes="(max-width: 767px) 92vw, (max-width: 1023px) 45vw, 31vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#123C30]/65 via-transparent to-transparent" />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#123C30]/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F5E7B8] backdrop-blur-sm">
                    {pkg.category}
                </span>

                {/* Image caption */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
                    <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/75">
                            Hajj Pilgrimage
                        </p>

                        <h3 className="mt-1 font-[var(--font-playfair)] text-xl font-semibold leading-tight">
                            {pkg.name}
                        </h3>
                    </div>

                    <Plane
                        className="mb-0.5 h-5 w-5 shrink-0 text-[#E6C96A]"
                        strokeWidth={1.7}
                        aria-hidden="true"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Primary details */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 border-b border-[#EEE9DF] pb-5">
                    <PackageDetail
                        icon={Clock3}
                        label="Duration"
                        value={pkg.duration}
                    />

                    <PackageDetail
                        icon={MapPin}
                        label="Departure"
                        value={pkg.departure}
                    />

                    <PackageDetail
                        icon={BedDouble}
                        label="Makkah Stay"
                        value={pkg.makkah}
                    />

                    <PackageDetail
                        icon={BedDouble}
                        label="Madinah Stay"
                        value={pkg.madinah}
                    />
                </div>

                {/* Included information */}
                <div className="mt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A918D]">
                        Package Information
                    </p>

                    <ul className="mt-3 space-y-2.5">
                        <li className="flex items-start gap-2 text-xs leading-5 text-[#59635F]">
                            <Check
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0B5D45]"
                                strokeWidth={2.2}
                                aria-hidden="true"
                            />
                            Accommodation:
                            <span className="font-medium text-[#34423C]">
                                {pkg.accommodation || "To be confirmed"}
                            </span>
                        </li>

                        <li className="flex items-start gap-2 text-xs leading-5 text-[#59635F]">
                            <Check
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0B5D45]"
                                strokeWidth={2.2}
                                aria-hidden="true"
                            />
                            Transport:
                            <span className="font-medium text-[#34423C]">
                                {pkg.transport || "To be confirmed"}
                            </span>
                        </li>

                        <li className="flex items-start gap-2 text-xs leading-5 text-[#59635F]">
                            <Check
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0B5D45]"
                                strokeWidth={2.2}
                                aria-hidden="true"
                            />
                            Meals:
                            <span className="font-medium text-[#34423C]">
                                {pkg.meals || "To be confirmed"}
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Actions */}
                <div className="mt-auto grid grid-cols-2 gap-2.5 pt-6">
                    <Link
                        href={`/hajj/${pkg.id}`}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#D8C89A] px-3 text-xs font-semibold text-[#123C30] transition-colors hover:bg-[#F7F2E4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B28A2E] focus-visible:ring-offset-2"
                    >
                        View Details
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>

                    <Link
                        href={getWhatsAppHref(pkg.name)}
                        target={whatsappNumber ? "_blank" : undefined}
                        rel={whatsappNumber ? "noopener noreferrer" : undefined}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#0B5D45] px-3 text-xs font-semibold text-white transition-colors hover:bg-[#084A38] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D45] focus-visible:ring-offset-2"
                    >
                        <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        Enquire
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default function HajjSection() {
    return (
        <section
            id="hajj"
            aria-labelledby="hajj-heading"
            className="relative overflow-hidden bg-[#123C30] py-20 sm:py-24 lg:py-28"
        >
            {/* Subtle background details */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#B28A2E]/10 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#0B5D45]/60 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#D8C89A]/30 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#E6C96A]">
                            <UsersRound className="h-3.5 w-3.5" aria-hidden="true" />
                            Hajj Packages
                        </span>

                        <h2
                            id="hajj-heading"
                            className="mt-5 font-[var(--font-playfair)] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
                        >
                            Begin Your Hajj Journey With{" "}
                            <span className="text-[#E6C96A]">Clarity & Care</span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                            Explore available Hajj package categories and speak with our
                            team about the arrangements, documentation and travel
                            requirements relevant to your journey.
                        </p>
                    </div>

                    <Link
                        href="/hajj"
                        className="inline-flex min-h-11 w-fit items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-[#D8C89A]/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C96A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#123C30]"
                    >
                        View All Hajj Packages
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>

                {/* Package cards */}
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
                    {hajjPackages.map((pkg) => (
                        <HajjPackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>

                {/* Customized package CTA */}
                <div className="mt-8 overflow-hidden rounded-2xl border border-[#D8C89A]/25 bg-white/[0.06]">
                    <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 lg:px-8">
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B28A2E]/15 text-[#E6C96A]">
                                <UsersRound className="h-5 w-5" aria-hidden="true" />
                            </div>

                            <div>
                                <h3 className="font-[var(--font-playfair)] text-lg font-semibold text-white">
                                    Looking for a customized Hajj arrangement?
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-white/60">
                                    Share your travel requirements and we can discuss suitable
                                    options with you.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/contact?service=hajj-custom"
                            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#E6C96A] px-5 text-sm font-semibold text-[#173F33] transition-colors hover:bg-[#F0D982] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C96A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#123C30]"
                        >
                            Request a Quote
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>

                {/* Important package note */}
                <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-white/45">
                    Package details, accommodation, transportation, inclusions and
                    pricing are subject to availability and final confirmation. Please
                    contact us for current package information.
                </p>
            </div>
        </section>
    );
}