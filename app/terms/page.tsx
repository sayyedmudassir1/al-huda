"use client";

import Link from "next/link";
import {
    FileText,
    ShieldCheck,
    AlertCircle,
    HelpCircle,
    MessageCircle,
    Send,
    Scale,
    CreditCard,
    Plane,
    XCircle,
} from "lucide-react";

export default function TermsPage() {
    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    return (
        <div className="min-h-screen bg-[#FAF8F2] text-[#1F2925]">
            {/* Hero Header */}
            <section className="relative overflow-hidden bg-[#064E3B] py-16 text-white md:py-20">
                <div className="aria-hidden:true pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
                <div className="aria-hidden:true pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#C9A227]">
                            <Scale className="h-3.5 w-3.5" />
                            <span>Legal & Service Policies</span>
                        </div>

                        <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl">
                            Terms & Conditions
                        </h1>

                        <p className="mt-4 text-xs leading-relaxed text-emerald-100/90 sm:text-sm">
                            Please review our official terms governing booking confirmations, visa processing, payment schedules, and cancellation policies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Terms Body Content */}
            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm sm:p-10">
                        <div className="prose prose-emerald max-w-none space-y-8 text-xs leading-relaxed text-[#1F2925]/80 sm:text-sm">

                            {/* Introduction */}
                            <div>
                                <h2 className="font-serif text-lg font-bold text-[#064E3B] sm:text-xl border-b border-gray-100 pb-2">
                                    1. Acceptance of Terms
                                </h2>
                                <p className="mt-3">
                                    By confirming a booking with our travel agency (verbally, electronically, or in person at our Mumbai office), you agree to comply with and be bound by the following terms and conditions. These terms apply to all Umrah, Hajj, and custom pilgrimage packages operated by us.
                                </p>
                            </div>

                            {/* Passport & Documentation */}
                            <div>
                                <h2 className="font-serif text-lg font-bold text-[#064E3B] sm:text-xl border-b border-gray-100 pb-2 flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-[#C9A227]" />
                                    2. Passport & Visa Requirements
                                </h2>
                                <ul className="mt-3 list-disc pl-5 space-y-2">
                                    <li>
                                        Passports must have a minimum validity of 6 months from the date of travel and contain at least 2 blank pages side-by-side.
                                    </li>
                                    <li>
                                        Visa approval is subject to the sole discretion of the Ministry of Hajj & Umrah, Kingdom of Saudi Arabia (KSA). Our agency acts as a facilitator and cannot guarantee visa issuance if rejection occurs due to regulatory or personal history restrictions.
                                    </li>
                                    <li>
                                        Pilgrims are required to supply authentic documents (PAN card, original passport, photos) as mandated by Indian authorities and KSA regulations.
                                    </li>
                                </ul>
                            </div>

                            {/* Payments & Rates */}
                            <div>
                                <h2 className="font-serif text-lg font-bold text-[#064E3B] sm:text-xl border-b border-gray-100 pb-2 flex items-center gap-2">
                                    <CreditCard className="h-4 w-4 text-[#C9A227]" />
                                    3. Payment Schedule & Foreign Exchange
                                </h2>
                                <ul className="mt-3 list-disc pl-5 space-y-2">
                                    <li>
                                        A deposit of ₹25,000 per seat is required at the time of initial booking confirmation.
                                    </li>
                                    <li>
                                        The remaining balance must be cleared at least 15 days prior to the scheduled departure date from Mumbai airport.
                                    </li>
                                    <li>
                                        All prices are calculated based on current airfare rates and SAR (Saudi Riyal) exchange values. Fluctuations exceeding 3% in currency rates or airline fuel surcharges before ticket issuance may result in price adjustments.
                                    </li>
                                </ul>
                            </div>

                            {/* Cancellation & Refunds */}
                            <div>
                                <h2 className="font-serif text-lg font-bold text-[#064E3B] sm:text-xl border-b border-gray-100 pb-2 flex items-center gap-2">
                                    <XCircle className="h-4 w-4 text-[#C9A227]" />
                                    4. Cancellation & Refund Policy
                                </h2>
                                <p className="mt-3">
                                    In the event that a pilgrim cancels their reservation, cancellation fees will apply as follows:
                                </p>
                                <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
                                    <table className="w-full text-left text-xs">
                                        <thead className="bg-[#064E3B]/10 font-bold text-[#064E3B]">
                                            <tr>
                                                <th className="p-3">Time of Cancellation</th>
                                                <th className="p-3">Applicable Deduction</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr>
                                                <td className="p-3">More than 30 days before departure</td>
                                                <td className="p-3">₹5,000 service fee per person</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3">15 to 30 days before departure</td>
                                                <td className="p-3">50% of total package cost</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3">Less than 15 days before departure</td>
                                                <td className="p-3">100% non-refundable (ticket & hotel locks)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Flights, Hotels & Services */}
                            <div>
                                <h2 className="font-serif text-lg font-bold text-[#064E3B] sm:text-xl border-b border-gray-100 pb-2 flex items-center gap-2">
                                    <Plane className="h-4 w-4 text-[#C9A227]" />
                                    5. Accommodation & Flight Contingencies
                                </h2>
                                <ul className="mt-3 list-disc pl-5 space-y-2">
                                    <li>
                                        Hotel check-in/check-out times follow standard KSA hotel policies (usually Check-in at 4:00 PM and Check-out at 12:00 PM).
                                    </li>
                                    <li>
                                        Flight schedules and delays are governed directly by the respective airline operator. We hold no responsibility for airline delays, baggage loss, or schedule modifications imposed by flight carriers.
                                    </li>
                                    <li>
                                        Room upgrades or specific floor preferences are subject to availability upon arrival at the hotel desk.
                                    </li>
                                </ul>
                            </div>

                            {/* Disclaimers */}
                            <div className="rounded-2xl border border-[#C9A227]/30 bg-[#FAF8F2] p-4 text-xs">
                                <div className="flex items-center gap-2 font-bold text-[#064E3B]">
                                    <AlertCircle className="h-4 w-4 text-[#C9A227]" />
                                    <span>Important Note:</span>
                                </div>
                                <p className="mt-1 text-[#1F2925]/80">
                                    Pilgrims with pre-existing medical conditions are advised to obtain personal travel health insurance. Our staff provides full ground support in Makkah and Madinah, but medical costs incurred locally remain the pilgrim's responsibility.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Support CTA */}
            <section className="bg-[#064E3B] py-12 text-white">
                <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                        Questions Regarding Our Booking Terms?
                    </h2>
                    <p className="mt-2 text-xs text-emerald-100/90 sm:text-sm">
                        Contact our Mumbai support team directly to discuss payment options, cancellation insurance, or custom contracts.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                "Assalamu Alaikum. I have a question regarding your terms and conditions."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#20bd5a]"
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp Legal Desk</span>
                        </a>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3 text-xs font-bold text-[#064E3B] shadow-md hover:bg-[#b89421]"
                        >
                            <Send className="h-4 w-4" />
                            <span>Contact Desk</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}