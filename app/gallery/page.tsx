"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Image as ImageIcon,
    Camera,
    MapPin,
    X,
    Filter,
    Maximize2,
    MessageCircle,
    ChevronRight,
    Send,
} from "lucide-react";

interface GalleryItem {
    id: string;
    title: string;
    category: "Makkah" | "Madinah" | "Ziyarat" | "Pilgrim Experience";
    location: string;
    imageUrl: string;
    caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: "gal-1",
        title: "The Holy Kaaba at Night",
        category: "Makkah",
        location: "Masjid al-Haram, Makkah",
        imageUrl:
            "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=80&w=1200",
        caption:
            "Peaceful night view of Mataf around the Kaaba during Umrah Tawaf.",
    },
    {
        id: "gal-2",
        title: "Al-Masjid an-Nabawi Courtyard",
        category: "Madinah",
        location: "Madinah al-Munawwarah",
        imageUrl:
            "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=1200",
        caption:
            "The iconic umbrella awnings and minarets of the Prophet's Mosque.",
    },
    {
        id: "gal-3",
        title: "Mount Uhud Historical Site",
        category: "Ziyarat",
        location: "Madinah",
        imageUrl:
            "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=1200",
        caption:
            "Pilgrims visiting Mount Uhud during guided Madinah Ziyarat tour.",
    },
    {
        id: "gal-4",
        title: "Group Departure from Mumbai",
        category: "Pilgrim Experience",
        location: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
        imageUrl:
            "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1200",
        caption:
            "Our pilgrim group receiving guidance and Ihram assistance before boarding.",
    },
    {
        id: "gal-5",
        title: "Jabal al-Nour & Cave Hira",
        category: "Ziyarat",
        location: "Makkah Mukarramah",
        imageUrl:
            "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=1200",
        caption:
            "Panoramic view of Jabal al-Nour where the first divine revelation was received.",
    },
    {
        id: "gal-6",
        title: "Rawdah Rasoolullah (SAW)",
        category: "Madinah",
        location: "Masjid an-Nabawi",
        imageUrl:
            "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=1200",
        caption:
            "Serene moments in the Green Dome area of Madinah Sharif.",
    },
];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    const filteredItems =
        selectedCategory === "All"
            ? GALLERY_ITEMS
            : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-[#FAF8F2] text-[#1F2925]">
            {/* Hero Header */}
            <section className="relative overflow-hidden bg-[#064E3B] py-16 text-white md:py-24">
                <div className="aria-hidden:true pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
                <div className="aria-hidden:true pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#C9A227]">
                            <Camera className="h-3.5 w-3.5" />
                            <span>Sacred Moments</span>
                        </div>

                        <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Pilgrimage Gallery
                        </h1>

                        <p className="mt-4 text-base leading-relaxed text-emerald-100/90 sm:text-lg">
                            Explore glimpses of Makkah Mukarramah, Madinah Munawwarah, Ziyarat locations, and group journeys arranged from Mumbai.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Filter & Grid */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Category Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <span className="mr-2 inline-flex items-center gap-1 text-xs font-bold text-[#064E3B]">
                            <Filter className="h-3.5 w-3.5 text-[#C9A227]" /> Filter:
                        </span>
                        {["All", "Makkah", "Madinah", "Ziyarat", "Pilgrim Experience"].map(
                            (cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${selectedCategory === cat
                                            ? "bg-[#064E3B] text-white shadow-md"
                                            : "bg-white text-[#064E3B] border border-emerald-900/10 hover:bg-emerald-50"
                                        }`}
                                >
                                    {cat}
                                </button>
                            )
                        )}
                    </div>

                    {/* Grid Layout */}
                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setActiveItem(item)}
                                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                    {/* Top Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="rounded-md bg-[#064E3B]/80 backdrop-blur-md px-2.5 py-1 text-xs font-semibold text-white">
                                            {item.category}
                                        </span>
                                    </div>

                                    {/* Expand Icon */}
                                    <div className="absolute top-4 right-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Maximize2 className="h-4 w-4" />
                                    </div>

                                    {/* Bottom Text */}
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <h2 className="font-serif text-lg font-bold">
                                            {item.title}
                                        </h2>
                                        <p className="mt-1 inline-flex items-center gap-1 text-xs text-emerald-200">
                                            <MapPin className="h-3 w-3 text-[#C9A227]" />
                                            {item.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {activeItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
                    <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                            <div>
                                <span className="rounded-md bg-[#064E3B]/10 px-2.5 py-1 text-xs font-semibold text-[#064E3B]">
                                    {activeItem.category}
                                </span>
                                <h2 className="mt-1 font-serif text-xl font-bold text-[#064E3B]">
                                    {activeItem.title}
                                </h2>
                            </div>
                            <button
                                onClick={() => setActiveItem(null)}
                                className="rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-black"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Modal Image Display */}
                        <div className="relative max-h-[60vh] w-full overflow-hidden bg-black">
                            <img
                                src={activeItem.imageUrl}
                                alt={activeItem.title}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        {/* Modal Footer & Details */}
                        <div className="p-6">
                            <p className="text-xs text-gray-600 sm:text-sm">
                                {activeItem.caption}
                            </p>
                            <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#064E3B]">
                                <MapPin className="h-3.5 w-3.5 text-[#C9A227]" />
                                {activeItem.location}
                            </p>

                            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-4">
                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                        `Assalamu Alaikum. I am interested in packages that include tours to ${activeItem.title} (${activeItem.location}).`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#20bd5a]"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    <span>Inquire About Package for This Route</span>
                                </a>

                                <button
                                    onClick={() => setActiveItem(null)}
                                    className="rounded-xl border border-gray-300 px-5 py-2.5 text-xs font-bold text-gray-700 hover:bg-gray-50"
                                >
                                    Close Lightbox
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="bg-[#064E3B] py-12 text-white">
                <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                        Want to Join Our Next Umrah Batch from Mumbai?
                    </h2>
                    <p className="mt-2 text-xs text-emerald-100/90 sm:text-sm">
                        Get personalized itineraries, group departure schedules, and transparent pricing.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                "Assalamu Alaikum. I viewed your gallery and want details on upcoming Umrah departure batches."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#20bd5a]"
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp Consultation</span>
                        </a>

                        <Link
                            href="/packages"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3 text-xs font-bold text-[#064E3B] shadow-md hover:bg-[#b89421]"
                        >
                            <Send className="h-4 w-4" />
                            <span>View Packages</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}