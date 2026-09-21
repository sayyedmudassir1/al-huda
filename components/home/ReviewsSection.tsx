"use client";

import { useState } from "react";
import { Star, MessageSquare, ExternalLink, Quote, ShieldCheck } from "lucide-react";

export interface ReviewItem {
    id: string;
    authorName: string;
    city: string;
    rating: number;
    serviceCategory: string; // e.g. "Umrah Package", "Hajj Guidance", "Visa Assistance"
    travelYear?: string;
    comment: string;
    isVerified?: boolean;
}

interface ReviewsSectionProps {
    /**
     * Reviews passed from CMS or backend.
     * If empty or undefined, the component renders an elegant placeholder state as required.
     */
    reviews?: ReviewItem[];
    /**
     * Optional direct link to the company's Google Business profile.
     */
    googleReviewsUrl?: string;
}

export function ReviewsSection({
    reviews = [], // Default to empty array to test placeholder/empty state safely
    googleReviewsUrl = "https://maps.google.com",
}: ReviewsSectionProps) {
    const [filter, setFilter] = useState<string>("All");

    const categories = ["All", "Umrah", "Hajj", "Travel Services"];

    const filteredReviews = reviews.filter((rev) => {
        if (filter === "All") return true;
        return rev.serviceCategory.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <section className="relative overflow-hidden bg-[#FAF8F2] py-16 md:py-24">
            {/* Subtle Background Elements */}
            <div className="aria-hidden:true pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-[#064E3B]/5 blur-3xl" />
            <div className="aria-hidden:true pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#C9A227]/5 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#064E3B]/20 bg-[#064E3B]/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#064E3B]">
                        <Quote className="h-3.5 w-3.5 text-[#C9A227]" />
                        <span>Genuine Pilgrim & Traveller Experiences</span>
                    </div>

                    <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#064E3B] sm:text-4xl lg:text-5xl">
                        What Our Travellers Say
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base text-[#1F2925]/80 sm:text-lg">
                        Real feedback from individuals and families in Mumbai and beyond who trusted Al-Huda World Tours & Travels with their journeys.
                    </p>
                </div>

                {/* Reviews Present vs Placeholder State */}
                {reviews.length > 0 ? (
                    <>
                        {/* Optional Filter Tabs */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all sm:text-sm ${filter === cat
                                        ? "bg-[#064E3B] text-white shadow-sm"
                                        : "bg-white text-[#1F2925]/80 hover:bg-[#064E3B]/10 border border-gray-200"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Grid of Reviews */}
                        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {filteredReviews.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col justify-between rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                                >
                                    <div>
                                        {/* Rating & Verified badge */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1 text-[#C9A227]">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-4 w-4 ${i < item.rating
                                                            ? "fill-[#C9A227] text-[#C9A227]"
                                                            : "text-gray-300"
                                                            }`}
                                                    />
                                                ))}
                                            </div>

                                            {item.isVerified && (
                                                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#064E3B]">
                                                    <ShieldCheck className="h-3.5 w-3.5 text-[#064E3B]" />
                                                    Verified
                                                </span>
                                            )}
                                        </div>

                                        {/* Review Content */}
                                        <p className="mt-4 text-sm leading-relaxed text-[#1F2925]/90 italic">
                                            "{item.comment}"
                                        </p>
                                    </div>

                                    {/* Author Details */}
                                    <div className="mt-6 border-t border-gray-100 pt-4 flex items-center justify-between">
                                        <div>
                                            <h4 className="font-semibold text-[#064E3B] text-sm">
                                                {item.authorName}
                                            </h4>
                                            <p className="text-xs text-[#1F2925]/60">
                                                {item.city} {item.travelYear ? `• ${item.travelYear}` : ""}
                                            </p>
                                        </div>

                                        <span className="rounded-md bg-[#FAF8F2] px-2.5 py-1 text-[11px] font-medium text-[#064E3B] border border-emerald-900/10">
                                            {item.serviceCategory}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    /* Elegant Placeholder Section when no reviews are supplied */
                    <div className="mt-10 rounded-2xl border border-dashed border-emerald-900/20 bg-white/60 p-8 text-center sm:p-12">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#064E3B]/10 text-[#064E3B]">
                            <MessageSquare className="h-7 w-7" />
                        </div>

                        <h3 className="mt-4 font-serif text-xl font-bold text-[#064E3B]">
                            Customer Reviews Will Appear Here
                        </h3>

                        <p className="mx-auto mt-2 max-w-md text-sm text-[#1F2925]/70">
                            We take pride in delivering honest, reliable, and transparent travel services. Verified pilgrim and traveller testimonials will be added here.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={googleReviewsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-semibold text-[#064E3B] border border-emerald-900/20 shadow-sm transition-all hover:bg-[#064E3B] hover:text-white"
                            >
                                <span>View Our Google Reviews</span>
                                <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                        </div>
                    </div>
                )}

                {/* Secondary Callout for Google Reviews */}
                {reviews.length > 0 && (
                    <div className="mt-12 text-center">
                        <a
                            href={googleReviewsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-[#064E3B] underline underline-offset-4 hover:text-[#C9A227] transition-colors"
                        >
                            <span>View all verified feedback on Google Reviews</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}