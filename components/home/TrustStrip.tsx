import { Headphones, Plane, ShieldCheck, Sparkles, Ticket, UsersRound } from "lucide-react";

const trustItems = [
    {
        title: "Complete Travel Assistance",
        description: "Support for pilgrimage and travel arrangements from planning to departure.",
        icon: Sparkles,
    },
    {
        title: "Personalized Packages",
        description: "Options shaped around individual, family and group requirements.",
        icon: UsersRound,
    },
    {
        title: "Visa & Documentation Support",
        description: "Assistance with applicable travel documentation and visa processes.",
        icon: ShieldCheck,
    },
    {
        title: "Flight & Railway Booking",
        description: "Travel booking assistance for applicable domestic and international journeys.",
        icon: Plane,
    },
    {
        title: "Hajj & Umrah Assistance",
        description: "Travel support for pilgrims preparing for their sacred journey.",
        icon: Ticket,
    },
    {
        title: "Dedicated Customer Support",
        description: "Accessible assistance throughout the planning process.",
        icon: Headphones,
    },
];

export function TrustStrip() {
    return (
        <section aria-label="Al-Huda travel services" className="relative z-10 border-b border-[#E8E2D5] bg-[#FFFEFA]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                {/* 
          Mobile: Horizontal scrolling keeps the section compact without shrinking content.
          Desktop: Converts naturally into a six-column grid.
        */}
                <div
                    className="-mx-5 flex snap-x snap-mandatory overflow-x-auto px-5 scrollbar-none sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-6 lg:overflow-visible lg:px-0"
                    role="list"
                >
                    {trustItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                role="listitem"
                                className="flex w-[82vw] shrink-0 snap-start border-r border-[#E8E2D5] py-6 pr-6 sm:w-[55vw] sm:pr-8 lg:w-auto lg:px-5 lg:py-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                            >
                                <div className="flex min-w-0 items-start gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#DCCFA5] bg-[#F7F2E4] text-[#064E3B]">
                                        <Icon aria-hidden="true" className="h-4.5 w-4.5" strokeWidth={1.8} />
                                    </div>

                                    <div className="min-w-0">
                                        <h2 className="text-sm font-semibold leading-5 text-[#1F2925]">
                                            {item.title}
                                        </h2>
                                        <p className="mt-1.5 text-xs leading-5 text-[#68736E]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Small mobile scroll cue between cards. Hidden on the final item and desktop. */}
                                {index < trustItems.length - 1 && (
                                    <div aria-hidden="true" className="ml-5 mt-2 h-1 w-1 shrink-0 rounded-full bg-[#C9A227] lg:hidden" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
