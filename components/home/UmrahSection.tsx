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

type UmrahPackage = {
    id: string;
    category: "Economy" | "Standard" | "Premium" | "Family" | "Ramadan";
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

const umrahPackages: UmrahPackage[] = [
    {
        id: "umrah-economy",
        category: "Economy",
        name: "Umrah Economy Package",
        duration: null,
        departure: "Mumbai",
        makkah: null,
        madinah: null,
        accommodation: null,
        transport: null,
        meals: null,
        image: "/images/umrah/umrah-economy.webp",
    },
    {
        id: "umrah-standard",
        category: "Standard",
        name: "Umrah Standard Package",
        duration: null,
        departure: "Mumbai",
        makkah: null,
        madinah: null,
        accommodation: null,
        transport: null,
        meals: null,
        image: "/images/umrah/umrah-standard.webp",
    },
    {
        id: "umrah-premium",
        category: "Premium",
        name: "Umrah Premium Package",
        duration: null,
        departure: "Mumbai",
        makkah: null,
        madinah: null,
        accommodation: null,
        transport: null,
        meals: null,
        image: "/images/umrah/umrah-premium.webp",
    },
    {
        id: "umrah-family",
        category: "Family",
        name: "Umrah Family Package",
        duration: null,
        departure: "Mumbai",
        makkah: null,
        madinah: null,
        accommodation: null,
        transport: null,
        meals: null,
        image: "/images/umrah/umrah-family.webp",
    },
    {
        id: "umrah-ramadan",
        category: "Ramadan",
        name: "Umrah Ramadan Package",
        duration: null,
        departure: "Mumbai",
        makkah: null,
        madinah: null,
        accommodation: null,
        transport: null,
        meals: null,
        image: "/images/umrah/umrah-ramadan.webp",
    },
];

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

function getWhatsAppHref(packageName: string) {
    const message = encodeURIComponent(
        `Assalamu Alaikum, I would like to enquire about the ${packageName}. Please share the available details.`
    );

    return whatsappNumber
        ? `https://wa.me/${whatsappNumber}?text=${message}`
        : "/contact?service=umrah";
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
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8A918D]">
                    {label}
                </p>

                <p className="mt-0.5 text-xs font-medium text-[#34423C]">
                    {value || "Details to be confirmed"}
                </p>
            </div>
        </div>
    );
}

function UmrahPackageCard({ pkg }: { pkg: UmrahPackage }) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5DFD1] bg-white shadow-[0_8px_30px_rgba(18,60,48,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8C89A] hover:shadow-[0_18px_45px_rgba(18,60,48,0.10)]">
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E3D8]">
                <Image
                    src={pkg.image}
                    alt={`${pkg.name} — Umrah package`}
                    fill
                    sizes="(max-width: 639px) 92vw, (max-width: 1023px) 45vw, 31vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#123C30]/70 via-transparent to-transparent" />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#123C30]/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F5E7B8] backdrop-blur-sm">
                    {pkg.category}
                </span>

                {/* Image caption */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
                    <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/75">
                            Umrah Pilgrimage
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

                <div className="mt-auto grid grid-cols-2 gap-2.5 pt-6">
                    <Link
                        href={`/umrah/${pkg.id}`}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#D8C89A] px-3 text-xs font-semibold text-[#123C30] transition-colors hover:bg-[#F7F2E4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B28A2E] focus-visible:ring-offset-2"
                    >
                        View Package
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

export default function UmrahSection() {
    return (
        <section
            id="umrah"
            aria-labelledby="umrah-heading"
            className="relative overflow-hidden bg-[#FAF8F2] py-20 sm:py-24 lg:py-28"
        >
            {/* Decorative background elements */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-[#D8C89A]/20 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#0B5D45]/5 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#D8C89A]/70 bg-[#F7F2E4] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6A18]">
                            <UsersRound className="h-3.5 w-3.5" aria-hidden="true" />
                            Umrah Packages
                        </span>

                        <h2
                            id="umrah-heading"
                            className="mt-5 font-[var(--font-playfair)] text-3xl font-semibold leading-tight text-[#123C30] sm:text-4xl lg:text-5xl"
                        >
                            Plan Your Umrah Journey With{" "}
                            <span className="text-[#B28A2E]">Care & Clarity</span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#59635F] sm:text-base">
                            Explore different Umrah package categories and discuss your
                            preferred travel dates, accommodation requirements and other
                            arrangements with our team.
                        </p>
                    </div>

                    <Link
                        href="/umrah"
                        className="inline-flex min-h-11 w-fit items-center gap-2 rounded-xl border border-[#D8C89A] bg-white px-5 text-sm font-semibold text-[#123C30] transition-colors hover:bg-[#F7F2E4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B28A2E] focus-visible:ring-offset-2"
                    >
                        View All Umrah Packages
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>

                {/* Package cards */}
                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
                    {umrahPackages.map((pkg) => (
                        <UmrahPackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>

                {/* Customized Umrah CTA */}
                <div className="mt-8 overflow-hidden rounded-2xl border border-[#E3DCCB] bg-white">
                    <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 lg:px-8">
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F2E4] text-[#8A6A18]">
                                <UsersRound className="h-5 w-5" aria-hidden="true" />
                            </div>

                            <div>
                                <h3 className="font-[var(--font-playfair)] text-lg font-semibold text-[#173F33]">
                                    Need a customized Umrah package?
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-[#68716D]">
                                    Tell us your requirements and we can discuss available
                                    options for your journey.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/contact?service=umrah-custom"
                            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0B5D45] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#084A38] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D45] focus-visible:ring-offset-2"
                        >
                            Get a Quote
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>

                {/* Package note */}
                <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-[#8A918D]">
                    Package details, accommodation, transportation, inclusions and
                    pricing are subject to availability and final confirmation. Please
                    contact us for current package information.
                </p>
            </div>
        </section>
    );
}