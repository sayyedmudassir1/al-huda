"use client";

import Link from "next/link";
import {
    Compass,
    MapPin,
    Phone,
    Mail,
    Clock,
    ShieldCheck,
    Heart,
    ArrowUpRight,
} from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    return (
        <footer className="relative bg-[#043327] text-white pt-16 pb-24 lg:pb-12 border-t border-[#C9A227]/20">
            {/* Soft Background Accent */}
            <div className="aria-hidden:true pointer-events-none absolute bottom-0 left-1/2 h-96 w-full -translate-x-1/2 bg-gradient-to-t from-black/20 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
                    {/* Column 1: Brand & Overview (Spans 2 columns on desktop) */}
                    <div className="lg:col-span-2 space-y-4">
                        <Link href="/" className="inline-flex items-center gap-2.5">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#064E3B] text-white border border-[#C9A227]/30">
                                <Compass className="h-5 w-5 text-[#C9A227]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif text-xl font-bold tracking-wide text-white">
                                    AL-HUDA
                                </span>
                                <span className="text-[10px] font-medium tracking-wider text-[#C9A227] uppercase">
                                    World Tours & Travels
                                </span>
                            </div>
                        </Link>

                        <p className="max-w-sm text-xs leading-relaxed text-emerald-100/80 sm:text-sm">
                            Your trusted travel partner in Mumbai for complete Hajj & Umrah pilgrimage packages, air ticketing, visa processing assistance, and customized holiday itineraries.
                        </p>

                        <div className="pt-2 flex items-center gap-3 text-xs text-emerald-200/90">
                            <ShieldCheck className="h-4 w-4 text-[#C9A227]" />
                            <span>Dedicated Customer Support & Transparent Guidance</span>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-3">
                        <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C9A227]">
                            Navigation
                        </h3>
                        <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/80">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/hajj" className="hover:text-white transition-colors">
                                    Hajj Packages
                                </Link>
                            </li>
                            <li>
                                <Link href="/umrah" className="hover:text-white transition-colors">
                                    Umrah Packages
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white transition-colors">
                                    Travel Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/tours" className="hover:text-white transition-colors">
                                    Holiday Tours
                                </Link>
                            </li>
                            <li>
                                <Link href="/guide" className="hover:text-white transition-colors">
                                    Pilgrimage Guide
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Information & Legal */}
                    <div className="space-y-3">
                        <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C9A227]">
                            Information
                        </h3>
                        <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/80">
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/reviews" className="hover:text-white transition-colors">
                                    Pilgrim Reviews
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:text-white transition-colors">
                                    Photo Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-white transition-colors">
                                    Frequently Asked Questions
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Mumbai Office Desk */}
                    <div className="space-y-3">
                        <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C9A227]">
                            Mumbai Office
                        </h3>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/80">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 shrink-0 text-[#C9A227] mt-0.5" />
                                <span>Mumbai, Maharashtra, India</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 shrink-0 text-[#C9A227]" />
                                <a
                                    href={`tel:+${whatsappNumber}`}
                                    className="hover:text-white transition-colors"
                                >
                                    +91 9833206053
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 shrink-0 text-[#C9A227]" />
                                <a
                                    href="mailto:info@alhudatours.com"
                                    className="hover:text-white transition-colors"
                                >
                                    alhudaworldtravels@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock className="h-4 w-4 shrink-0 text-[#C9A227]" />
                                <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Disclaimer Note */}
                <div className="mt-12 rounded-xl border border-emerald-800/60 bg-[#064E3B]/40 p-4 text-xs text-emerald-200/70">
                    <p>
                        <strong className="text-emerald-100 font-semibold">Important Notice:</strong> Package details, prices, flight schedules, and visa requirements are subject to change based on government policies, Saudi Ministry guidelines, and airfare updates. Religious information provided is for travel planning guidance only.
                    </p>
                </div>

                {/* Bottom Bar / Copyright */}
                <div className="mt-8 border-t border-emerald-800/80 pt-6 flex flex-col items-center justify-between gap-4 text-xs text-emerald-300/70 sm:flex-row">
                    <p>
                        © {currentYear} Al-Huda World Tours & Travels. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1">
                        <span>Crafted with clarity for pilgrims worldwide</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}