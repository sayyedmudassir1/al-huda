import {
    ArrowRight,
    CheckCircle2,
    ClipboardList,
    FileCheck2,
    Headphones,
    PlaneTakeoff,
} from "lucide-react";

type JourneyStep = {
    number: string;
    title: string;
    description: string;
    icon: React.ComponentType<{
        className?: string;
        strokeWidth?: number;
    }>;
};

const journeySteps: JourneyStep[] = [
    {
        number: "01",
        title: "Tell Us Your Requirements",
        description:
            "Share your destination, preferred dates, number of travellers and the kind of travel assistance you need.",
        icon: ClipboardList,
    },
    {
        number: "02",
        title: "Receive Suitable Options",
        description:
            "We discuss available package or travel arrangements based on the requirements you have shared.",
        icon: Headphones,
    },
    {
        number: "03",
        title: "Confirm Your Arrangements",
        description:
            "Review the relevant details and proceed with the arrangements that you choose to confirm.",
        icon: FileCheck2,
    },
    {
        number: "04",
        title: "Get Ready to Travel",
        description:
            "Complete the required documentation and prepare for the confirmed arrangements before departure.",
        icon: CheckCircle2,
    },
    {
        number: "05",
        title: "Travel With Confidence",
        description:
            "Set out on your journey with the confirmed travel information and support available to you.",
        icon: PlaneTakeoff,
    },
];

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            aria-labelledby="how-it-works-heading"
            className="relative overflow-hidden bg-[#123C30] py-20 sm:py-24 lg:py-28"
        >
            {/* Background details */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0B5D45]/60 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-[#B28A2E]/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#D8C89A]/30 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#E6C96A]">
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        How It Works
                    </span>

                    <h2
                        id="how-it-works-heading"
                        className="mt-5 font-[var(--font-playfair)] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
                    >
                        From Planning to{" "}
                        <span className="text-[#E6C96A]">Departure</span>
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                        A straightforward process designed to help you understand your
                        options and move forward one step at a time.
                    </p>
                </div>

                {/* Desktop timeline */}
                <div className="relative mt-14 hidden lg:block">
                    {/* Connecting line */}
                    <div
                        aria-hidden="true"
                        className="absolute left-[10%] right-[10%] top-7 h-px bg-linear-to-r from-transparent via-[#D8C89A]/40 to-transparent"
                    />

                    <ol className="grid grid-cols-5 gap-5">
                        {journeySteps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <li key={step.number} className="relative text-center">
                                    {/* Number / icon */}
                                    <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D8C89A]/50 bg-[#123C30] text-[#E6C96A] shadow-[0_0_0_8px_rgba(18,60,48,1)]">
                                        <Icon
                                            className="h-5.5 w-5.5"
                                            strokeWidth={1.7}
                                            aria-hidden="true"
                                        />

                                        <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border border-[#123C30] bg-[#E6C96A] px-1 text-[9px] font-bold text-[#173F33]">
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3 className="mt-7 font-[var(--font-playfair)] text-lg font-semibold leading-snug text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-xs leading-5 text-white/55">
                                        {step.description}
                                    </p>
                                </li>
                            );
                        })}
                    </ol>
                </div>

                {/* Mobile / tablet timeline */}
                <ol className="relative mt-12 space-y-0 lg:hidden">
                    {/* Vertical line */}
                    <div
                        aria-hidden="true"
                        className="absolute bottom-10 left-6 top-10 w-px bg-[#D8C89A]/25 sm:left-7"
                    />

                    {journeySteps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <li
                                key={step.number}
                                className="relative flex gap-5 pb-9 last:pb-0 sm:gap-6"
                            >
                                {/* Icon */}
                                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D8C89A]/50 bg-[#123C30] text-[#E6C96A] sm:h-14 sm:w-14">
                                    <Icon
                                        className="h-5 w-5 sm:h-5.5 sm:w-5.5"
                                        strokeWidth={1.7}
                                        aria-hidden="true"
                                    />

                                    <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border border-[#123C30] bg-[#E6C96A] px-1 text-[8px] font-bold text-[#173F33]">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="min-w-0 flex-1 pt-0.5">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#E6C96A]/80">
                                        Step {index + 1}
                                    </p>

                                    <h3 className="mt-1.5 font-[var(--font-playfair)] text-xl font-semibold leading-snug text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-white/55">
                                        {step.description}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ol>

                {/* Bottom message */}
                <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-center sm:mt-16 sm:p-7">
                    <p className="font-[var(--font-playfair)] text-lg font-medium leading-relaxed text-white sm:text-xl">
                        Your journey starts with a conversation.
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/50 sm:text-sm">
                        Requirements, availability and final arrangements are confirmed
                        individually for each journey.
                    </p>
                </div>
            </div>
        </section>
    );
}
