import {
    Compass,
    FileCheck2,
    Headphones,
    HeartHandshake,
    Info,
    Plane,
} from "lucide-react";

type TrustPoint = {
    title: string;
    description: string;
    icon: React.ComponentType<{
        className?: string;
        strokeWidth?: number;
    }>;
};

const trustPoints: TrustPoint[] = [
    {
        title: "Complete Travel Assistance",
        description:
            "Support across pilgrimage and travel-related arrangements, from initial planning through the details of your journey.",
        icon: Compass,
    },
    {
        title: "Personalized Service",
        description:
            "Travel requirements differ from person to person. We focus on understanding your needs before discussing suitable options.",
        icon: HeartHandshake,
    },
    {
        title: "Clear Package Information",
        description:
            "Package details are presented with a focus on clarity, so you can understand what is available before making arrangements.",
        icon: Info,
    },
    {
        title: "Dedicated Support",
        description:
            "Get a direct point of contact for questions, requirements and assistance related to your travel plans.",
        icon: Headphones,
    },
    {
        title: "Pilgrimage & Travel Services",
        description:
            "Hajj, Umrah and broader travel services are brought together in one place for convenient planning.",
        icon: Plane,
    },
    {
        title: "Customer-Centered Approach",
        description:
            "Our approach is built around listening to your requirements and helping you understand the available choices.",
        icon: FileCheck2,
    },
];

export default function WhyChooseUs() {
    return (
        <section
            id="why-al-huda"
            aria-labelledby="why-al-huda-heading"
            className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
        >
            {/* Subtle decorative elements */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7F2E4] blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-[#0B5D45]/5 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Intro */}
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#D8C89A]/70 bg-[#F7F2E4] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6A18]">
                            <HeartHandshake
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                            />
                            Why Al-Huda
                        </span>

                        <h2
                            id="why-al-huda-heading"
                            className="mt-5 font-[var(--font-playfair)] text-3xl font-semibold leading-tight text-[#123C30] sm:text-4xl lg:text-5xl"
                        >
                            Travel Planning With{" "}
                            <span className="text-[#B28A2E]">Clarity & Care</span>
                        </h2>
                    </div>

                    <div className="max-w-2xl lg:pb-1">
                        <p className="text-base leading-7 text-[#59635F]">
                            Planning a pilgrimage or an important journey involves more
                            than simply choosing a ticket or package. Our service approach
                            brings travel arrangements, documentation support and
                            personalized assistance together in one place.
                        </p>

                        <p className="mt-4 text-sm leading-6 text-[#7A837F]">
                            We aim to make each step easier to understand, while keeping
                            package information and final arrangements subject to actual
                            availability and confirmation.
                        </p>
                    </div>
                </div>

                {/* Trust points */}
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
                    {trustPoints.map((point, index) => {
                        const Icon = point.icon;

                        return (
                            <article
                                key={point.title}
                                className="group relative overflow-hidden rounded-2xl border border-[#E7E1D4] bg-[#FFFEFA] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D8C89A] hover:shadow-[0_16px_40px_rgba(18,60,48,0.07)] sm:p-7"
                            >
                                {/* Number */}
                                <span
                                    aria-hidden="true"
                                    className="absolute right-5 top-5 font-[var(--font-playfair)] text-4xl font-semibold text-[#123C30]/4.5"
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* Icon */}
                                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[#D8C89A]/60 bg-[#F7F2E4] text-[#0B5D45] transition-colors duration-300 group-hover:bg-[#0B5D45] group-hover:text-white">
                                    <Icon
                                        className="h-5.5 w-5.5"
                                        strokeWidth={1.8}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3 className="mt-6 font-[var(--font-playfair)] text-xl font-semibold text-[#173F33]">
                                    {point.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#68716D]">
                                    {point.description}
                                </p>

                                {/* Bottom accent */}
                                <div
                                    aria-hidden="true"
                                    className="mt-6 h-px w-10 bg-[#D8C89A] transition-all duration-300 group-hover:w-16"
                                />
                            </article>
                        );
                    })}
                </div>

                {/* Supporting statement */}
                <div className="mt-12 rounded-2xl bg-[#123C30] p-6 sm:p-8 lg:mt-14 lg:p-10">
                    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E6C96A]">
                                One Journey, One Point of Contact
                            </p>

                            <h3 className="mt-3 max-w-2xl font-[var(--font-playfair)] text-2xl font-semibold leading-tight text-white sm:text-3xl">
                                Tell us what you need. We&apos;ll help you understand the
                                available arrangements.
                            </h3>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                                Whether you are planning Hajj, Umrah or another trip, start
                                with your requirements and let the conversation guide the next
                                steps.
                            </p>
                        </div>

                        <a
                            href="#contact"
                            className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#E6C96A] px-6 text-sm font-semibold text-[#173F33] transition-colors hover:bg-[#F0D982] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C96A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#123C30] sm:w-fit"
                        >
                            Discuss Your Journey
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
