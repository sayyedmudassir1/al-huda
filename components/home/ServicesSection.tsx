import Link from "next/link";
import {
    ArrowRight,
    BookOpen,
    Compass,
    FileText,
    Hotel,
    Map,
    Plane,
    Ticket,
    TrainFront,
} from "lucide-react";

type ServiceItem = {
    title: string;
    description: string;
    href: string;
    icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
    accent?: string;
};

const services: ServiceItem[] = [
    {
        title: "Hajj Packages",
        description:
            "Explore pilgrimage packages designed around different travel preferences and requirements.",
        href: "/hajj",
        icon: Compass,
        accent: "Pilgrimage",
    },
    {
        title: "Umrah Packages",
        description:
            "Find Umrah travel options with support for planning, documentation and arrangements.",
        href: "/umrah",
        icon: BookOpen,
        accent: "Pilgrimage",
    },
    {
        title: "Passport Assistance",
        description:
            "Get guidance and assistance with passport-related travel documentation.",
        href: "/services/passport",
        icon: FileText,
        accent: "Documentation",
    },
    {
        title: "Visa Assistance",
        description:
            "Travel documentation support for eligible destinations and journeys.",
        href: "/services/visa",
        icon: FileText,
        accent: "Documentation",
    },
    {
        title: "Flight Tickets",
        description:
            "Flight booking assistance for domestic and international travel requirements.",
        href: "/services/flights",
        icon: Plane,
        accent: "Travel Booking",
    },
    {
        title: "Railway Tickets",
        description:
            "Railway ticket booking assistance for convenient travel planning.",
        href: "/services/railway",
        icon: TrainFront,
        accent: "Travel Booking",
    },
    {
        title: "Hotel Booking",
        description:
            "Hotel booking assistance for pilgrimage, business and leisure travel.",
        href: "/services/hotels",
        icon: Hotel,
        accent: "Accommodation",
    },
    {
        title: "Tours & Holidays",
        description:
            "Plan domestic and international holidays with travel arrangements suited to your needs.",
        href: "/tours",
        icon: Map,
        accent: "Travel Experiences",
    },
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className="bg-[#FAF8F2] py-16 sm:py-20 lg:py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#D8C89A]/60 bg-[#F7F2E4] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6A18]">
                        <Ticket className="h-3.5 w-3.5" aria-hidden="true" />
                        Our Services
                    </span>

                    <h2
                        id="services-heading"
                        className="mt-5 font-[var(--font-playfair)] text-3xl font-semibold leading-tight text-[#123C30] sm:text-4xl lg:text-5xl"
                    >
                        Everything You Need for{" "}
                        <span className="text-[#B28A2E]">Your Journey</span>
                    </h2>

                    <p className="mt-4 text-base leading-7 text-[#59635F] sm:text-lg">
                        From pilgrimage planning to everyday travel arrangements, explore
                        the services available through Al-Huda World Tours & Travels.
                    </p>
                </div>

                {/* Services grid */}
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="group relative flex min-h-62.5 flex-col overflow-hidden rounded-2xl border border-[#E7E1D4] bg-white p-6 shadow-[0_8px_30px_rgba(18,60,48,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8C89A] hover:shadow-[0_16px_40px_rgba(18,60,48,0.09)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B28A2E] focus-visible:ring-offset-2"
                            >
                                {/* Decorative corner */}
                                <div
                                    aria-hidden="true"
                                    className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#F7F2E4] transition-transform duration-500 group-hover:scale-150"
                                />

                                {/* Icon */}
                                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[#D8C89A]/60 bg-[#F7F2E4] text-[#0B5D45] transition-colors duration-300 group-hover:bg-[#0B5D45] group-hover:text-white">
                                    <Icon
                                        className="h-5.5 w-5.5"
                                        strokeWidth={1.8}
                                        aria-hidden="true"
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative mt-6 flex flex-1 flex-col">
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9A7A25]">
                                        {service.accent}
                                    </span>

                                    <h3 className="mt-2 font-[var(--font-playfair)] text-xl font-semibold text-[#173F33]">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#68716D]">
                                        {service.description}
                                    </p>

                                    {/* Learn more */}
                                    <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-[#0B5D45]">
                                        <span>Learn More</span>

                                        <ArrowRight
                                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Supporting note */}
                <div className="mt-10 flex justify-center">
                    <div className="flex max-w-2xl items-start gap-3 rounded-xl border border-[#E7E1D4] bg-white/70 px-5 py-4 text-center sm:items-center sm:text-left">
                        <span
                            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7F2E4] text-[#8A6A18]"
                            aria-hidden="true"
                        >
                            <Map className="h-4 w-4" />
                        </span>

                        <p className="text-xs leading-5 text-[#68716D] sm:text-sm">
                            Services and arrangements can vary depending on your journey,
                            destination and requirements. Contact us for details relevant to
                            your travel plans.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
