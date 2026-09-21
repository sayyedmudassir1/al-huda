"use client";

import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    CheckCircle2,
    MessageCircle,
    ShieldCheck,
} from "lucide-react";

/*
 * Business configuration
 *
 * Keep business-specific information centralized.
 * Replace the placeholder WhatsApp number once the actual
 * business number is provided.
 */
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

const whatsappMessage = encodeURIComponent(
    "Assalamu Alaikum. I would like to know more about Hajj and Umrah packages and travel services. Please share the available options."
);

const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`
    : "#contact";

const trustPoints = [
    "Complete Travel Assistance",
    "Personalized Packages",
    "Documentation Support",
];

export function HeroSection() {
    return (
        <section
            aria-labelledby="hero-heading"
            className="relative isolate overflow-hidden bg-[#064E3B]"
        >
            {/*
        Hero image
    
        IMPORTANT:
        This is intentionally referencing a local placeholder.
        Replace it with an authentic company/pilgrimage image
        when the final photography is available.
    
        Recommended image characteristics:
        - 1600px+ wide
        - WebP/AVIF
        - authentic pilgrimage/travel photography
        - no artificial customers
        - strong composition with negative space for text
      */}
            <Image
                src="/images/hero/pilgrimage-hero.webp"
                alt="Pilgrimage and travel journey"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />

            {/* 
        Layered overlays preserve text readability while keeping
        the photography visible.
    
        No excessive gradient effects are used.
      */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[#052E24]/65"
            />

            <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-r from-[#03251D]/90 via-[#064E3B]/65 to-transparent"
            />

            {/* Subtle atmospheric highlight */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#052E24]/40 to-transparent"
            />

            <div className="relative mx-auto flex min-h-170 w-full max-w-7xl items-center px-5 py-24 sm:px-8 lg:min-h-190 lg:px-10 lg:py-28">
                <div className="w-full max-w-3xl">
                    {/* 
            Small brand positioning label.
            This is intentionally restrained rather than decorative.
          */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md">
                        <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-[#C9A227]"
                        />
                        <span>Hajj • Umrah • Travel Services</span>
                    </div>

                    <h1
                        id="hero-heading"
                        className="max-w-3xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        Your Complete Journey{" "}
                        <span className="text-[#E2C45C]">Starts Here</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                        Hajj • Umrah • Flights • Visa • Passport • Emigration • Railways •
                        Hotels & Tours
                    </p>

                    <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                        At Al-Huda World Tours and Travels, we help individuals, families
                        and groups plan their journeys with reliable travel assistance,
                        clear information and personalized support.
                    </p>

                    {/* Primary actions */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <Link
                            href="/hajj"
                            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3.5 text-sm font-semibold text-[#17352B] shadow-lg shadow-black/10 transition-all duration-200 hover:bg-[#D8B63D] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#064E3B]"
                        >
                            Explore Hajj Packages
                            <ArrowRight
                                aria-hidden="true"
                                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                            />
                        </Link>

                        <Link
                            href="/umrah"
                            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#064E3B]"
                        >
                            Explore Umrah Packages
                            <ArrowRight
                                aria-hidden="true"
                                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>

                    {/* Secondary conversion action */}
                    <div className="mt-4">
                        <Link
                            href="/contact?service=custom-quote"
                            className="inline-flex min-h-11 items-center justify-center rounded-xl px-2 py-2 text-sm font-medium text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            Get a Personalized Quote
                        </Link>
                    </div>

                    {/* Trust reassurance */}
                    <div className="mt-9 grid max-w-2xl grid-cols-1 gap-3 border-t border-white/15 pt-6 sm:grid-cols-3 sm:gap-4">
                        {trustPoints.map((point) => (
                            <div
                                key={point}
                                className="flex items-center gap-2 text-sm text-white/80"
                            >
                                <CheckCircle2
                                    aria-hidden="true"
                                    className="h-4 w-4 shrink-0 text-[#D8B63D]"
                                />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>

                    {/* WhatsApp conversion */}
                    <div className="mt-7">
                        <a
                            href={whatsappHref}
                            target={WHATSAPP_NUMBER ? "_blank" : undefined}
                            rel={WHATSAPP_NUMBER ? "noopener noreferrer" : undefined}
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#064E3B] shadow-lg transition-all duration-200 hover:bg-[#F7F4EA] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#064E3B]"
                            aria-label="Contact Al-Huda World Tours and Travels on WhatsApp"
                        >
                            <MessageCircle aria-hidden="true" className="h-5 w-5" />
                            WhatsApp Us
                        </a>
                    </div>
                </div>

                {/* Desktop-only trust marker */}
                <div className="absolute bottom-10 right-10 hidden max-w-xs lg:block">
                    <div className="rounded-2xl border border-white/15 bg-black/20 p-4 backdrop-blur-md">
                        <div className="flex items-start gap-3">
                            <ShieldCheck
                                aria-hidden="true"
                                className="mt-0.5 h-5 w-5 shrink-0 text-[#D8B63D]"
                            />
                            <div>
                                <p className="text-sm font-semibold text-white">
                                    Travel assistance with clarity
                                </p>
                                <p className="mt-1 text-xs leading-5 text-white/65">
                                    Clear information, personalized support and assistance for
                                    your journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
