"use client";

import { useState } from "react";
import {
    Sparkles,
    Send,
    PhoneCall,
    CheckCircle2,
    Calendar,
    Users,
    MapPin,
    HelpCircle,
} from "lucide-react";

interface FormState {
    fullName: string;
    phone: string;
    journeyType: "Umrah" | "Hajj" | "Holiday / Tour" | "Flight / Visa Assistance" | "Other";
    departureCity: string;
    travelMonth: string;
    travellersCount: string;
    specialNotes: string;
}

const INITIAL_FORM: FormState = {
    fullName: "",
    phone: "",
    journeyType: "Umrah",
    departureCity: "Mumbai",
    travelMonth: "Next 1-2 Months",
    travellersCount: "2 Travellers",
    specialNotes: "",
};

export function CustomizedJourneyCTA() {
    const [form, setForm] = useState<FormState>(INITIAL_FORM);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const constructWhatsAppMessage = () => {
        const message = `*Customized Journey Enquiry — Al-Huda World Tours & Travels*
----------------------------------------
• *Name:* ${form.fullName || "Not specified"}
• *Contact:* ${form.phone || "Not specified"}
• *Journey Type:* ${form.journeyType}
• *Departure City:* ${form.departureCity}
• *Preferred Travel:* ${form.travelMonth}
• *No. of Travellers:* ${form.travellersCount}
• *Special Requirements:* ${form.specialNotes || "None"}
----------------------------------------
_Requesting a custom quote and personal consultation._`;

        return encodeURIComponent(message);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate quick form submission & lead capture
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);

            // Open WhatsApp directly with prefilled structured lead details
            const waUrl = `https://wa.me/${whatsappNumber}?text=${constructWhatsAppMessage()}`;
            window.open(waUrl, "_blank", "noopener,noreferrer");
        }, 400);
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F2] via-emerald-950/5 to-[#FAF8F2] py-16 md:py-24">
            {/* Soft background accents */}
            <div className="aria-hidden:true pointer-events-none absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#064E3B]/5 blur-3xl" />
            <div className="aria-hidden:true pointer-events-none absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
                    {/* Left Column — Value Proposition & Context */}
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#064E3B]">
                            <Sparkles className="h-3.5 w-3.5 text-[#C9A227]" />
                            <span>Tailored Travel Solutions</span>
                        </div>

                        <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#064E3B] sm:text-4xl lg:text-5xl lg:leading-tight">
                            Looking for a Customized Journey?
                        </h2>

                        <p className="mt-4 text-base text-[#1F2925]/80 sm:text-lg">
                            Whether you require private family accommodation near the Haram, specific flight schedules from Mumbai, or bespoke holiday tours, our team plans every detail to suit your schedule and budget.
                        </p>

                        {/* Quick Benefits Checklist */}
                        <ul className="mt-8 space-y-3.5">
                            {[
                                "Personalized hotel distance & room category choices",
                                "Flexible flight dates & preferred airlines from Mumbai",
                                "Dedicated family, group, or individual itinerary support",
                                "Full guidance on documentation, visas, and transfers",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#064E3B]" />
                                    <span className="text-sm font-medium text-[#1F2925] sm:text-base">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Contact Fallback */}
                        <div className="mt-8 flex flex-col gap-3 rounded-xl border border-emerald-900/10 bg-white/70 p-4 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#1F2925]/60">
                                    Prefer direct phone consultation?
                                </p>
                                <p className="text-sm font-medium text-[#064E3B]">
                                    Speak directly with our Mumbai travel desk
                                </p>
                            </div>
                            <a
                                href={`tel:+${whatsappNumber}`}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#064E3B]/10 px-4 py-2 text-sm font-semibold text-[#064E3B] transition-colors hover:bg-[#064E3B] hover:text-white"
                            >
                                <PhoneCall className="h-4 w-4" />
                                <span>Call Us</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column — High-Conversion Form */}
                    <div className="mt-10 lg:mt-0 lg:col-span-7">
                        <div className="relative rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-xl shadow-emerald-950/5 sm:p-8 lg:p-10">
                            <div className="border-b border-gray-100 pb-5">
                                <h3 className="font-serif text-2xl font-bold text-[#064E3B]">
                                    Request a Customized Quote
                                </h3>
                                <p className="mt-1 text-xs text-[#1F2925]/70 sm:text-sm">
                                    Fill in your details and receive a customized itinerary with transparent details.
                                </p>
                            </div>

                            {submitted ? (
                                <div className="my-8 rounded-xl bg-emerald-50/80 p-6 text-center border border-emerald-200">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#064E3B] text-white">
                                        <CheckCircle2 className="h-6 w-6" />
                                    </div>
                                    <h4 className="mt-3 font-serif text-xl font-bold text-[#064E3B]">
                                        Enquiry Details Ready!
                                    </h4>
                                    <p className="mt-2 text-sm text-[#1F2925]/80">
                                        Your customized quote request has been generated. If WhatsApp did not open automatically, click the button below to connect with us instantly.
                                    </p>
                                    <a
                                        href={`https://wa.me/${whatsappNumber}?text=${constructWhatsAppMessage()}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#064E3B] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#053f30]"
                                    >
                                        <span>Continue on WhatsApp</span>
                                        <Send className="h-4 w-4" />
                                    </a>
                                    <button
                                        onClick={() => {
                                            setSubmitted(false);
                                            setForm(INITIAL_FORM);
                                        }}
                                        className="mt-3 text-xs font-semibold text-[#064E3B] underline underline-offset-4 hover:text-[#C9A227]"
                                    >
                                        Submit another enquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:space-y-5">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        {/* Full Name */}
                                        <div>
                                            <label
                                                htmlFor="fullName"
                                                className="block text-xs font-semibold text-[#1F2925] sm:text-sm"
                                            >
                                                Full Name <span className="text-red-600">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                required
                                                placeholder="e.g. Tufail Ahmed"
                                                value={form.fullName}
                                                onChange={handleChange}
                                                className="mt-1.5 w-full rounded-lg border border-gray-300 bg-[#FAF8F2]/50 px-3.5 py-2.5 text-sm text-[#1F2925] placeholder-gray-400 focus:border-[#064E3B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20"
                                            />
                                        </div>

                                        {/* Phone / WhatsApp */}
                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-xs font-semibold text-[#1F2925] sm:text-sm"
                                            >
                                                Phone / WhatsApp No. <span className="text-red-600">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                placeholder="+91 98332 06053"
                                                value={form.phone}
                                                onChange={handleChange}
                                                className="mt-1.5 w-full rounded-lg border border-gray-300 bg-[#FAF8F2]/50 px-3.5 py-2.5 text-sm text-[#1F2925] placeholder-gray-400 focus:border-[#064E3B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        {/* Journey Type */}
                                        <div>
                                            <label
                                                htmlFor="journeyType"
                                                className="block text-xs font-semibold text-[#1F2925] sm:text-sm"
                                            >
                                                Journey / Service Required
                                            </label>
                                            <select
                                                id="journeyType"
                                                name="journeyType"
                                                value={form.journeyType}
                                                onChange={handleChange}
                                                className="mt-1.5 w-full rounded-lg border border-gray-300 bg-[#FAF8F2]/50 px-3.5 py-2.5 text-sm text-[#1F2925] focus:border-[#064E3B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20"
                                            >
                                                <option value="Umrah">Umrah Package</option>
                                                <option value="Hajj">Hajj Package</option>
                                                <option value="Holiday / Tour">Holiday / Group Tour</option>
                                                <option value="Flight / Visa Assistance">
                                                    Flight / Visa / Passport
                                                </option>
                                                <option value="Other">Other Travel Assistance</option>
                                            </select>
                                        </div>

                                        {/* Departure City */}
                                        <div>
                                            <label
                                                htmlFor="departureCity"
                                                className="block text-xs font-semibold text-[#1F2925] sm:text-sm"
                                            >
                                                Departure City
                                            </label>
                                            <div className="relative mt-1.5">
                                                <input
                                                    type="text"
                                                    id="departureCity"
                                                    name="departureCity"
                                                    placeholder="e.g. Mumbai"
                                                    value={form.departureCity}
                                                    onChange={handleChange}
                                                    className="w-full rounded-lg border border-gray-300 bg-[#FAF8F2]/50 px-3.5 py-2.5 pl-9 text-sm text-[#1F2925] placeholder-gray-400 focus:border-[#064E3B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20"
                                                />
                                                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        {/* Travel Month */}
                                        <div>
                                            <label
                                                htmlFor="travelMonth"
                                                className="block text-xs font-semibold text-[#1F2925] sm:text-sm"
                                            >
                                                Expected Travel Time
                                            </label>
                                            <div className="relative mt-1.5">
                                                <select
                                                    id="travelMonth"
                                                    name="travelMonth"
                                                    value={form.travelMonth}
                                                    onChange={handleChange}
                                                    className="w-full rounded-lg border border-gray-300 bg-[#FAF8F2]/50 px-3.5 py-2.5 pl-9 text-sm text-[#1F2925] focus:border-[#064E3B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20"
                                                >
                                                    <option value="Immediate / This Month">Immediate / This Month</option>
                                                    <option value="Next 1-2 Months">Next 1-2 Months</option>
                                                    <option value="Ramadan 2027">Ramadan Season</option>
                                                    <option value="Hajj Season">Upcoming Hajj Season</option>
                                                    <option value="Flexible Dates">Flexible Dates</option>
                                                </select>
                                                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            </div>
                                        </div>

                                        {/* Travellers Count */}
                                        <div>
                                            <label
                                                htmlFor="travellersCount"
                                                className="block text-xs font-semibold text-[#1F2925] sm:text-sm"
                                            >
                                                Number of Travellers
                                            </label>
                                            <div className="relative mt-1.5">
                                                <select
                                                    id="travellersCount"
                                                    name="travellersCount"
                                                    value={form.travellersCount}
                                                    onChange={handleChange}
                                                    className="w-full rounded-lg border border-gray-300 bg-[#FAF8F2]/50 px-3.5 py-2.5 pl-9 text-sm text-[#1F2925] focus:border-[#064E3B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20"
                                                >
                                                    <option value="1 Solo Traveller">1 Solo Traveller</option>
                                                    <option value="2 Travellers">2 Travellers</option>
                                                    <option value="Family (3-5 Persons)">Family (3-5 Persons)</option>
                                                    <option value="Group (6+ Persons)">Group (6+ Persons)</option>
                                                </select>
                                                <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Special Notes */}
                                    <div>
                                        <label
                                            htmlFor="specialNotes"
                                            className="block text-xs font-semibold text-[#1F2925] sm:text-sm"
                                        >
                                            Specific Requirements or Questions (Optional)
                                        </label>
                                        <textarea
                                            id="specialNotes"
                                            name="specialNotes"
                                            rows={2}
                                            placeholder="e.g. Looking for 4-star hotels near Haram, senior citizen care, or specific airlines..."
                                            value={form.specialNotes}
                                            onChange={handleChange}
                                            className="mt-1.5 w-full rounded-lg border border-gray-300 bg-[#FAF8F2]/50 px-3.5 py-2.5 text-sm text-[#1F2925] placeholder-gray-400 focus:border-[#064E3B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20"
                                        />
                                    </div>

                                    {/* Submit CTA */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-[#064E3B] px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[#043d2e] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:ring-offset-2 disabled:opacity-70"
                                    >
                                        <span>{isSubmitting ? "Preparing Request..." : "Request Customized Quote"}</span>
                                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </button>

                                    <div className="flex items-center justify-center gap-2 text-center text-xs text-[#1F2925]/60">
                                        <HelpCircle className="h-3.5 w-3.5 text-[#064E3B]" />
                                        <span>Free consultation • No obligation • Direct WhatsApp assistance</span>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}