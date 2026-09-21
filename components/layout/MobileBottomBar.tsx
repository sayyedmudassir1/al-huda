"use client";

import Link from "next/link";
import { PhoneCall, MessageCircle, Send } from "lucide-react";

export function MobileBottomBar() {
    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    const defaultMessage = encodeURIComponent(
        "Assalamu Alaikum. I am interested in travel assistance/packages from Al-Huda World Tours & Travels."
    );

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-emerald-900/10 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-md lg:hidden">
            <div className="mx-auto flex max-w-md items-center justify-between gap-2">
                {/* Direct Call Button */}
                <a
                    href={`tel:+${whatsappNumber}`}
                    className="flex flex-1 flex-col items-center justify-center rounded-xl bg-[#FAF8F2] py-2 text-center text-[#064E3B] border border-emerald-900/10 transition-colors active:bg-emerald-100"
                    aria-label="Call Al-Huda Travel Desk"
                >
                    <PhoneCall className="h-4 w-4 text-[#064E3B]" />
                    <span className="mt-1 text-[10px] font-bold tracking-tight">Call</span>
                </a>

                {/* WhatsApp Button */}
                <a
                    href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 flex-col items-center justify-center rounded-xl bg-[#25D366] py-2 text-center text-white shadow-sm transition-colors active:bg-[#1fa150]"
                    aria-label="WhatsApp Al-Huda Travel Desk"
                >
                    <MessageCircle className="h-4 w-4 fill-current" />
                    <span className="mt-1 text-[10px] font-bold tracking-tight">WhatsApp</span>
                </a>

                {/* Enquire Button */}
                <Link
                    href="/contact"
                    className="flex flex-1 flex-col items-center justify-center rounded-xl bg-[#064E3B] py-2 text-center text-white shadow-sm transition-colors active:bg-[#043d2e]"
                    aria-label="Get a personalized quote"
                >
                    <Send className="h-4 w-4 text-[#C9A227]" />
                    <span className="mt-1 text-[10px] font-bold tracking-tight">Enquire</span>
                </Link>
            </div>
        </div>
    );
}