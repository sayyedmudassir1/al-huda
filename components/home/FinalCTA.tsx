"use client";

import Link from "next/link";
import { MessageCircle, PhoneCall, Send, Sparkles } from "lucide-react";

export function FinalCTA() {
    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    const defaultMessage = encodeURIComponent(
        "Assalamu Alaikum. I would like to enquire about your travel and pilgrimage packages from Mumbai."
    );

    return (
        <section className="relative overflow-hidden bg-[#064E3B] py-16 text-white md:py-24">
            {/* Aesthetic Background Pattern & Glows */}
            <div className="aria-hidden:true pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
            <div className="aria-hidden:true pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                {/* Decorative Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#C9A227]">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Start Planning Your Journey Today</span>
                </div>

                {/* Heading */}
                <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                    Ready for Your Journey?
                </h2>

                {/* Supporting Copy */}
                <p className="mx-auto mt-4 max-w-2xl text-base text-emerald-100/90 sm:text-lg">
                    Whether you're planning Hajj, Umrah, a family holiday, or simply need assistance with flight tickets, visas, or passports, Al-Huda World Tours & Travels is here to assist.
                </p>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                    {/* WhatsApp Primary CTA */}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#20bd5a] hover:shadow-xl sm:w-auto"
                    >
                        <MessageCircle className="h-5 w-5 fill-current" />
                        <span>WhatsApp Us</span>
                    </a>

                    {/* Call CTA */}
                    <a
                        href={`tel:+${whatsappNumber}`}
                        className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#064E3B] sm:w-auto"
                    >
                        <PhoneCall className="h-5 w-5" />
                        <span>Call Us</span>
                    </a>

                    {/* Quote Form Anchor */}
                    <Link
                        href="#main-content"
                        className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#C9A227] px-7 py-4 text-sm font-bold text-[#064E3B] shadow-lg transition-all hover:bg-[#b89421] sm:w-auto"
                    >
                        <Send className="h-5 w-5" />
                        <span>Get a Quote</span>
                    </Link>
                </div>

                {/* Brand Tagline Banner */}
                <div className="mt-14 border-t border-emerald-800/80 pt-8">
                    <p className="font-serif text-lg font-bold tracking-wide text-white/90 sm:text-xl">
                        AL-HUDA WORLD TOURS & TRAVELS
                    </p>
                    <p className="mt-1 text-xs text-[#C9A227] sm:text-sm font-medium">
                        Your Complete Travel Partner — From Passport to Pilgrimage.
                    </p>
                </div>
            </div>
        </section>
    );
}