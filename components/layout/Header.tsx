"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, Compass } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Hajj", href: "/hajj" },
        { name: "Umrah", href: "/umrah" },
        { name: "Services", href: "/services" },
        { name: "Tours", href: "/tours" },
        { name: "Guide", href: "/guide" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const mobileLinks = [
        { name: "Home", href: "/" },
        { name: "Hajj Packages", href: "/hajj" },
        { name: "Umrah Packages", href: "/umrah" },
        { name: "Travel Services", href: "/services" },
        { name: "Tours & Holidays", href: "/tours" },
        { name: "Hajj & Umrah Guide", href: "/guide" },
        { name: "About Us", href: "/about" },
        { name: "Reviews", href: "/reviews" },
        { name: "Gallery", href: "/gallery" },
        { name: "Blog", href: "/blog" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <>
            <header
                className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled
                    ? "bg-white/95 shadow-md backdrop-blur-md border-b border-emerald-900/10 py-3"
                    : "bg-[#FAF8F2] py-4 border-b border-emerald-900/5"
                    }`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Brand Logo / Identity */}
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#064E3B] text-white shadow-sm transition-transform group-hover:scale-105">
                                <Compass className="h-5 w-5 text-[#C9A227]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif text-lg font-bold leading-tight tracking-tight text-[#064E3B] sm:text-xl">
                                    AL-HUDA
                                </span>
                                <span className="text-[10px] font-semibold tracking-wider text-[#C9A227] uppercase">
                                    World Tours & Travels
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation Links */}
                        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xs font-semibold uppercase tracking-wider text-[#1F2925]/80 transition-colors hover:text-[#064E3B] hover:underline underline-offset-4"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Header Action CTAs (Desktop) */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                    "Assalamu Alaikum. I would like to enquire about your travel packages."
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-[#25D366]/30 bg-[#25D366]/10 px-3.5 py-2 text-xs font-bold text-[#1F2925] transition-colors hover:bg-[#25D366] hover:text-white"
                            >
                                <MessageCircle className="h-4 w-4 text-[#25D366] hover:text-white" />
                                <span>WhatsApp</span>
                            </a>

                            <Link
                                href={`tel:+${whatsappNumber}`}
                                className="inline-flex items-center gap-1.5 rounded-lg border justify-center bg-[#064E3B] px-4 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#043d2e] hover:shadow-md"
                            >
                                <Phone className="h-4 w-4" />
                                <span>Call Us</span>
                            </Link>
                        </div>

                        {/* Mobile Hamburger Toggle */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden rounded-lg p-2 text-[#064E3B] hover:bg-emerald-900/5 focus:outline-none"
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white">
                    {/* Drawer Top Header */}
                    <div className="flex items-center justify-between border-b border-gray-100 p-4 bg-[#FAF8F2]">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#064E3B] text-white">
                                <Compass className="h-4 w-4 text-[#C9A227]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif text-base font-bold text-[#064E3B]">
                                    AL-HUDA
                                </span>
                                <span className="text-[9px] font-medium tracking-wider text-[#C9A227] uppercase">
                                    World Tours & Travels
                                </span>
                            </div>
                        </Link>

                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Nav Links */}
                    <div className="flex-1 overflow-y-auto px-6 py-6">
                        <nav className="space-y-3">
                            {mobileLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#1F2925] transition-colors hover:bg-[#FAF8F2] hover:text-[#064E3B]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Quick Action Footer in Drawer */}
                    <div className="border-t border-gray-100 p-4 bg-[#FAF8F2] space-y-2">
                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-sm"
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span>Connect on WhatsApp</span>
                        </a>
                        <a
                            href={`tel:+${whatsappNumber}`}
                            className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#064E3B]"
                        >
                            <Phone className="h-4 w-4" />
                            <span>Call Us Directly</span>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}