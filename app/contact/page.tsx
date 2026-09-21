"use client";

import { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageCircle,
    CheckCircle2,
    AlertCircle,
    Building2,
} from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        serviceType: "Umrah Package",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
        "idle"
    );

    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API form submission
        setTimeout(() => {
            setStatus("success");
            setFormData({
                name: "",
                phone: "",
                email: "",
                serviceType: "Umrah Package",
                message: "",
            });
        }, 1200);
    };

    const handleWhatsAppDirect = () => {
        const text = `Assalamu Alaikum. My name is ${formData.name || "a pilgrim"}. I am inquiring about ${formData.serviceType}. ${formData.message ? `Message: ${formData.message}` : ""
            }`;
        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
            "_blank"
        );
    };

    return (
        <div className="min-h-screen bg-[#FAF8F2] text-[#1F2925]">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#064E3B] py-16 text-white md:py-24">
                <div className="aria-hidden:true pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
                <div className="aria-hidden:true pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#C9A227]">
                            <Building2 className="h-3.5 w-3.5" />
                            <span>We're Here to Assist You</span>
                        </div>

                        <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Contact Our Travel Desk
                        </h1>

                        <p className="mt-4 text-base leading-relaxed text-emerald-100/90 sm:text-lg">
                            Have questions regarding Umrah dates, Hajj registration, or visa assistance? Visit our Mumbai office or send us a message directly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                        {/* Contact Details Column */}
                        <div className="lg:col-span-5 space-y-6">
                            <div>
                                <h2 className="font-serif text-2xl font-bold text-[#064E3B] sm:text-3xl">
                                    Get in Touch
                                </h2>
                                <p className="mt-2 text-xs leading-relaxed text-[#1F2925]/80 sm:text-sm">
                                    Our dedicated pilgrimage consultants are available to guide you through package selection, documentation, and flight bookings.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {/* Office Address Card */}
                                <div className="flex items-start gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#064E3B]/10 text-[#064E3B]">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-sm font-bold text-[#064E3B]">
                                            Mumbai Main Office
                                        </h3>
                                        <p className="mt-1 text-xs text-[#1F2925]/80 leading-relaxed">
                                            123 Pilgrimage House, Near CST Station, Fort,
                                            <br />
                                            Mumbai, Maharashtra 400001, India
                                        </p>
                                    </div>
                                </div>

                                {/* Phone & WhatsApp Card */}
                                <div className="flex items-start gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#064E3B]/10 text-[#064E3B]">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-sm font-bold text-[#064E3B]">
                                            Phone & Support
                                        </h3>
                                        <p className="mt-1 text-xs text-[#1F2925]/80">
                                            Primary Helpline:{" "}
                                            <a
                                                href={`tel:+${whatsappNumber}`}
                                                className="font-medium text-[#064E3B] underline hover:text-[#C9A227]"
                                            >
                                                +{whatsappNumber}
                                            </a>
                                        </p>
                                        <p className="text-xs text-[#1F2925]/80">
                                            WhatsApp Desk:{" "}
                                            <a
                                                href={`https://wa.me/${whatsappNumber}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium text-[#25D366] underline"
                                            >
                                                Available 24/7
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Email Card */}
                                <div className="flex items-start gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#064E3B]/10 text-[#064E3B]">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-sm font-bold text-[#064E3B]">
                                            Email Inquiries
                                        </h3>
                                        <p className="mt-1 text-xs text-[#1F2925]/80">
                                            Support: info@albarakah-tours.com
                                        </p>
                                        <p className="text-xs text-[#1F2925]/80">
                                            Bookings: packages@albarakah-tours.com
                                        </p>
                                    </div>
                                </div>

                                {/* Working Hours Card */}
                                <div className="flex items-start gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#064E3B]/10 text-[#064E3B]">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-sm font-bold text-[#064E3B]">
                                            Office Hours
                                        </h3>
                                        <p className="mt-1 text-xs text-[#1F2925]/80">
                                            Monday - Saturday: 10:00 AM – 7:30 PM
                                        </p>
                                        <p className="text-xs text-[#1F2925]/80">
                                            Sunday: Closed (WhatsApp Emergency Support Active)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick WhatsApp Banner */}
                            <div className="rounded-2xl bg-[#064E3B] p-6 text-white shadow-md">
                                <h3 className="font-serif text-base font-bold text-[#C9A227]">
                                    Prefer Instant Chat?
                                </h3>
                                <p className="mt-1 text-xs text-emerald-100/90 leading-relaxed">
                                    Connect with our staff on WhatsApp for immediate package details and pricing quotes.
                                </p>
                                <button
                                    onClick={handleWhatsAppDirect}
                                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#20bd5a] transition-all"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    <span>Start WhatsApp Chat</span>
                                </button>
                            </div>
                        </div>

                        {/* Contact Form Column */}
                        <div className="lg:col-span-7">
                            <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm sm:p-8">
                                <h2 className="font-serif text-2xl font-bold text-[#064E3B]">
                                    Send Us an Inquiry
                                </h2>
                                <p className="mt-1 text-xs text-[#1F2925]/70 sm:text-sm">
                                    Fill out the form below and our team will contact you within 24 hours.
                                </p>

                                {status === "success" && (
                                    <div className="mt-6 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-xs font-medium text-emerald-800 border border-emerald-200">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                                        <span>
                                            JazakAllah Khair! Your message has been sent successfully. Our team will reach out shortly.
                                        </span>
                                    </div>
                                )}

                                {status === "error" && (
                                    <div className="mt-6 flex items-center gap-3 rounded-2xl bg-red-50 p-4 text-xs font-medium text-red-800 border border-red-200">
                                        <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                                        <span>
                                            Something went wrong. Please try again or contact us directly on WhatsApp.
                                        </span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="block text-xs font-bold text-[#064E3B]">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                placeholder="e.g. Tufail Ahmed"
                                                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-[#FAF8F2] px-4 py-3 text-xs text-[#1F2925] outline-none focus:border-[#064E3B] focus:bg-white"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-[#064E3B]">
                                                Mobile / WhatsApp Number *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, phone: e.target.value })
                                                }
                                                placeholder="e.g. +91 98332 06053"
                                                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-[#FAF8F2] px-4 py-3 text-xs text-[#1F2925] outline-none focus:border-[#064E3B] focus:bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="block text-xs font-bold text-[#064E3B]">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                placeholder="e.g. name@example.com"
                                                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-[#FAF8F2] px-4 py-3 text-xs text-[#1F2925] outline-none focus:border-[#064E3B] focus:bg-white"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-[#064E3B]">
                                                Interested Service *
                                            </label>
                                            <select
                                                value={formData.serviceType}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, serviceType: e.target.value })
                                                }
                                                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-[#FAF8F2] px-4 py-3 text-xs text-[#1F2925] outline-none focus:border-[#064E3B] focus:bg-white"
                                            >
                                                <option value="Umrah Package">Economy Umrah Package</option>
                                                <option value="Standard Deluxe Umrah">Standard Deluxe Umrah</option>
                                                <option value="VIP 5-Star Umrah">VIP 5-Star Front-Row Umrah</option>
                                                <option value="Ramadan Umrah">Ramadan Umrah Package</option>
                                                <option value="Hajj Inquiry">Hajj Registration / Inquiry</option>
                                                <option value="Visa Only">Saudi Visa Assistance</option>
                                                <option value="Custom Family Tour">Customized Family Group Tour</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[#064E3B]">
                                            Message / Special Requirements
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            placeholder="Specify preferred dates, number of pilgrims, elderly care requirements, or hotel choices..."
                                            className="mt-1.5 w-full rounded-xl border border-gray-200 bg-[#FAF8F2] px-4 py-3 text-xs text-[#1F2925] outline-none focus:border-[#064E3B] focus:bg-white"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#064E3B] px-6 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#04382a] disabled:opacity-50"
                                    >
                                        <Send className="h-4 w-4" />
                                        <span>
                                            {status === "submitting" ? "Sending Inquiry..." : "Submit Inquiry"}
                                        </span>
                                    </button>
                                </form>
                            </div>

                            {/* Map Placeholder Frame */}
                            <div className="mt-8 overflow-hidden rounded-3xl border border-emerald-900/10 bg-white p-2 shadow-sm">
                                <div className="relative h-64 w-full rounded-2xl bg-[#EFECE6] flex flex-col items-center justify-center text-center p-6">
                                    <MapPin className="h-8 w-8 text-[#064E3B] mb-2" />
                                    <h4 className="font-serif text-sm font-bold text-[#064E3B]">
                                        Interactive Office Map
                                    </h4>
                                    <p className="mt-1 text-xs text-[#1F2925]/70 max-w-sm">
                                        Located conveniently near CST Station, Fort, Mumbai for easy in-person consultation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}