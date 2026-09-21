"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export interface GalleryItem {
    id: string;
    title: string;
    category:
    | "Hajj"
    | "Umrah"
    | "Makkah"
    | "Madinah"
    | "Ziyarat"
    | "Departures"
    | "Our Team"
    | "Our Office";
    imageUrl: string;
    altText: string;
    caption?: string;
}

interface GallerySectionProps {
    /**
     * List of images from CMS/Media library.
     * If empty or undefined, component displays an authentic placeholder state.
     */
    items?: GalleryItem[];
}

const CATEGORIES = [
    "All",
    "Hajj",
    "Umrah",
    "Makkah",
    "Madinah",
    "Ziyarat",
    "Departures",
    "Our Office",
] as const;

export function GallerySection({ items = [] }: GallerySectionProps) {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filteredItems = items.filter((item) => {
        if (activeCategory === "All") return true;
        return item.category === activeCategory;
    });

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const nextImage = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
        }
    };

    const prevImage = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex(
                (prev) => (prev! - 1 + filteredItems.length) % filteredItems.length
            );
        }
    };

    return (
        <section className="relative overflow-hidden bg-[#FAF8F2] py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#064E3B]/20 bg-[#064E3B]/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#064E3B]">
                        <Camera className="h-3.5 w-3.5 text-[#C9A227]" />
                        <span>Authentic Moments & Journeys</span>
                    </div>

                    <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#064E3B] sm:text-4xl lg:text-5xl">
                        Moments From Our Journeys
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base text-[#1F2925]/80 sm:text-lg">
                        A glimpse into the sacred places, departure moments, and pilgrimage arrangements organized by Al-Huda World Tours & Travels.
                    </p>
                </div>

                {items.length > 0 ? (
                    <>
                        {/* Category Filter Tabs */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all sm:text-sm ${activeCategory === cat
                                        ? "bg-[#064E3B] text-white shadow-sm"
                                        : "bg-white text-[#1F2925]/80 border border-gray-200 hover:bg-[#064E3B]/10"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Gallery Grid */}
                        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {filteredItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    onClick={() => openLightbox(index)}
                                    className="group relative cursor-pointer overflow-hidden rounded-xl border border-emerald-900/10 bg-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="aspect-square relative w-full overflow-hidden">
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.altText}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4 text-white">
                                        <span className="text-[10px] font-semibold tracking-wider uppercase text-[#C9A227]">
                                            {item.category}
                                        </span>
                                        <h4 className="font-serif text-sm font-semibold text-white">
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    /* Placeholder State when no images are supplied */
                    <div className="mt-10 rounded-2xl border border-dashed border-emerald-900/20 bg-white/60 p-8 text-center sm:p-12">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#064E3B]/10 text-[#064E3B]">
                            <ImageIcon className="h-7 w-7" />
                        </div>

                        <h3 className="mt-4 font-serif text-xl font-bold text-[#064E3B]">
                            Authentic Photography Coming Soon
                        </h3>

                        <p className="mx-auto mt-2 max-w-md text-sm text-[#1F2925]/70">
                            We prioritize real photographs of our pilgrim groups, offices, and journeys over generic stock images. Authentic media will be uploaded here shortly.
                        </p>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && filteredItems[lightboxIndex] && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    {/* Navigation Controls */}
                    {filteredItems.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors"
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        </>
                    )}

                    {/* Active Image Box */}
                    <div className="relative max-h-[85vh] max-w-4xl w-full flex flex-col items-center">
                        <div className="relative h-[65vh] w-full">
                            <Image
                                src={filteredItems[lightboxIndex].imageUrl}
                                alt={filteredItems[lightboxIndex].altText}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="mt-4 text-center text-white">
                            <h3 className="font-serif text-lg font-bold">
                                {filteredItems[lightboxIndex].title}
                            </h3>
                            {filteredItems[lightboxIndex].caption && (
                                <p className="text-xs text-gray-300 mt-1">
                                    {filteredItems[lightboxIndex].caption}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}