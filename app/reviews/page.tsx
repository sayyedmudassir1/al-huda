"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Star,
    Quote,
    CheckCircle,
    MessageCircle,
    ThumbsUp,
    Filter,
    Plus,
    X,
    Send,
    MapPin,
    Calendar,
    UserCheck,
} from "lucide-react";

interface Review {
    id: string;
    author: string;
    location: string;
    packageType: "Economy Umrah" | "Deluxe Umrah" | "Hajj Group" | "Custom Family Package";
    travelDate: string;
    rating: number;
    comment: string;
    verified: boolean;
}

const INITIAL_REVIEWS: Review[] = [
    {
        id: "rev-1",
        author: "Mohammed Aslam Khan",
        location: "Kurla, Mumbai",
        packageType: "Deluxe Umrah",
        travelDate: "December 2025",
        rating: 5,
        comment:
            "Alhamdulillah, everything promised was delivered. The hotel in Makkah was less than 5 minutes walk from Haram. Special thanks to the Mumbai tour guide who accompanied our group throughout the Ziayarat in Madinah.",
        verified: true,
    },
    {
        id: "rev-2",
        author: "Shaheen Begum & Family",
        location: "Andheri West, Mumbai",
        packageType: "Custom Family Package",
        travelDate: "January 2026",
        rating: 5,
        comment:
            "Traveling with senior parents and young children can be stressful, but the ground transport and private room setup were extremely comfortable. The visa and flight check-in process from Mumbai airport was seamless.",
        verified: true,
    },
    {
        id: "rev-3",
        author: "Tariq Shaikh",
        location: "Bhiwandi, Maharashtra",
        packageType: "Economy Umrah",
        travelDate: "February 2026",
        rating: 5,
        comment:
            "Great value for money. The Indian food served daily reminded us of home, and the bus transfers between Jeddah, Makkah, and Madinah were punctual and air-conditioned.",
        verified: true,
    },
    {
        id: "rev-4",
        author: "Rizwan Siddiqui",
        location: "South Mumbai",
        packageType: "Hajj Group",
        travelDate: "Hajj 2025",
        rating: 5,
        comment:
            "Our first Hajj experience was organized with utter sincerity. The pre-departure orientation in Mumbai gave us complete clarity on Hajj rituals and logistics.",
        verified: true,
    },
];

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
    const [selectedFilter, setSelectedFilter] = useState<string>("All");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Form State for New Review Submission
    const [formData, setFormData] = useState({
        author: "",
        location: "",
        packageType: "Economy Umrah" as Review["packageType"],
        travelDate: "",
        rating: 5,
        comment: "",
    });

    const whatsappNumber =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919833206053";

    const filteredReviews =
        selectedFilter === "All"
            ? reviews
            : reviews.filter((r) => r.packageType === selectedFilter);

    const handleSubmitReview = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.author || !formData.comment) return;

        const newReview: Review = {
            id: `rev-${Date.now()}`,
            author: formData.author,
            location: formData.location || "Mumbai",
            packageType: formData.packageType,
            travelDate: formData.travelDate || "Recent Journey",
            rating: formData.rating,
            comment: formData.comment,
            verified: false,
        };

        setReviews([newReview, ...reviews]);
        setIsModalOpen(false);
        setFormData({
            author: "",
            location: "",
            packageType: "Economy Umrah",
            travelDate: "",
            rating: 5,
            comment: "",
        });
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
                            <Star className="h-3.5 w-3.5 fill-[#C9A227]" />
                            <span>Pilgrim Experiences</span>
                        </div>

                        <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Pilgrim Reviews & Testimonials
                        </h1>

                        <p className="mt-4 text-base leading-relaxed text-emerald-100/90 sm:text-lg">
                            Read authentic feedback from Mumbai pilgrims who completed their Umrah and Hajj journeys with our team.
                        </p>

                        {/* Quick Stats Grid */}
                        <div className="mt-10 grid grid-cols-2 gap-4 border-t border-emerald-800/80 pt-8 sm:grid-cols-4">
                            <div>
                                <p className="font-serif text-2xl font-bold text-[#C9A227]">4.9 / 5</p>
                                <p className="text-xs text-emerald-200">Average Rating</p>
                            </div>
                            <div>
                                <p className="font-serif text-2xl font-bold text-[#C9A227]">2,500+</p>
                                <p className="text-xs text-emerald-200">Pilgrims Served</p>
                            </div>
                            <div>
                                <p className="font-serif text-2xl font-bold text-[#C9A227]">100%</p>
                                <p className="text-xs text-emerald-200">Verified Visas</p>
                            </div>
                            <div>
                                <p className="font-serif text-2xl font-bold text-[#C9A227]">24/7</p>
                                <p className="text-xs text-emerald-200">On-Ground Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Reviews Section */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header Controls */}
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        {/* Filter Buttons */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="mr-2 inline-flex items-center gap-1 text-xs font-bold text-[#064E3B]">
                                <Filter className="h-3.5 w-3.5 text-[#C9A227]" /> Filter:
                            </span>
                            {[
                                "All",
                                "Economy Umrah",
                                "Deluxe Umrah",
                                "Hajj Group",
                                "Custom Family Package",
                            ].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedFilter(cat)}
                                    className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${selectedFilter === cat
                                        ? "bg-[#064E3B] text-white shadow-md"
                                        : "bg-white text-[#064E3B] border border-emerald-900/10 hover:bg-emerald-50"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Write a Review CTA Button */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-5 py-2.5 text-xs font-bold text-[#064E3B] shadow-sm hover:bg-[#b89421] transition-colors"
                        >
                            <Plus className="h-4 w-4" />
                            <span>Share Your Feedback</span>
                        </button>
                    </div>

                    {/* Review Cards Grid */}
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {filteredReviews.map((rev) => (
                            <div
                                key={rev.id}
                                className="relative flex flex-col justify-between rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#064E3B]/30 hover:shadow-md sm:p-8"
                            >
                                <div>
                                    {/* Top Bar inside Card */}
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h2 className="font-serif text-lg font-bold text-[#064E3B] flex items-center gap-2">
                                                <span>{rev.author}</span>
                                                {rev.verified && (
                                                    <span
                                                        className="inline-flex items-center text-emerald-600"
                                                        title="Verified Pilgrim"
                                                    >
                                                        <UserCheck className="h-4 w-4" />
                                                    </span>
                                                )}
                                            </h2>
                                            <div className="mt-1 flex items-center gap-3 text-xs text-[#1F2925]/60">
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="h-3 w-3 text-[#C9A227]" />
                                                    {rev.location}
                                                </span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3 text-[#C9A227]" />
                                                    {rev.travelDate}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Star Rating */}
                                        <div className="flex items-center gap-0.5">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-4 w-4 ${i < rev.rating
                                                        ? "fill-[#C9A227] text-[#C9A227]"
                                                        : "text-gray-200"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="mt-4">
                                        <span className="rounded-md bg-[#064E3B]/10 px-2.5 py-1 text-xs font-semibold text-[#064E3B]">
                                            {rev.packageType}
                                        </span>
                                    </div>

                                    {/* Comment Body */}
                                    <p className="mt-4 text-xs leading-relaxed text-[#1F2925]/80 sm:text-sm italic relative pl-4 border-l-2 border-[#C9A227]">
                                        "{rev.comment}"
                                    </p>
                                </div>

                                {/* Card Footer */}
                                <div className="mt-6 border-t border-gray-100 pt-4 flex items-center justify-between text-xs text-gray-500">
                                    <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                                        <CheckCircle className="h-3.5 w-3.5" /> Verified Journey
                                    </span>
                                    <a
                                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                            `Assalamu Alaikum. I saw the review by ${rev.author} regarding${rev.packageType}. I would like to inquire about similar packages.`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 font-bold text-[#064E3B] hover:text-[#C9A227]"
                                    >
                                        <MessageCircle className="h-3.5 w-3.5" />
                                        <span>Inquire Package</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Review Submission Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
                    <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                            <h2 className="font-serif text-xl font-bold text-[#064E3B]">
                                Share Your Experience
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmitReview} className="mt-6 space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-[#064E3B]">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.author}
                                    onChange={(e) =>
                                        setFormData({ ...formData, author: e.target.value })
                                    }
                                    placeholder="e.g. Salim Merchant"
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-xs text-[#1F2925] focus:border-[#064E3B] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[#064E3B]">
                                    Your Area / City
                                </label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) =>
                                        setFormData({ ...formData, location: e.target.value })
                                    }
                                    placeholder="e.g. Bandra, Mumbai"
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-xs text-[#1F2925] focus:border-[#064E3B] focus:outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-[#064E3B]">
                                        Package Traveled
                                    </label>
                                    <select
                                        value={formData.packageType}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                packageType: e.target.value as Review["packageType"],
                                            })
                                        }
                                        className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-xs text-[#1F2925] focus:border-[#064E3B] focus:outline-none bg-white"
                                    >
                                        <option value="Economy Umrah">Economy Umrah</option>
                                        <option value="Deluxe Umrah">Deluxe Umrah</option>
                                        <option value="Hajj Group">Hajj Group</option>
                                        <option value="Custom Family Package">
                                            Custom Family Package
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-[#064E3B]">
                                        Travel Month / Year
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.travelDate}
                                        onChange={(e) =>
                                            setFormData({ ...formData, travelDate: e.target.value })
                                        }
                                        placeholder="e.g. Feb 2026"
                                        className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-xs text-[#1F2925] focus:border-[#064E3B] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[#064E3B]">
                                    Rating
                                </label>
                                <div className="mt-1 flex items-center gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() =>
                                                setFormData({ ...formData, rating: star })
                                            }
                                            className="p-1"
                                        >
                                            <Star
                                                className={`h-6 w-6 ${star <= formData.rating
                                                    ? "fill-[#C9A227] text-[#C9A227]"
                                                    : "text-gray-300"
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[#064E3B]">
                                    Your Experience / Review *
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.comment}
                                    onChange={(e) =>
                                        setFormData({ ...formData, comment: e.target.value })
                                    }
                                    placeholder="Tell future pilgrims about the hotel distance, food, guidance, and ground support..."
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 text-xs text-[#1F2925] focus:border-[#064E3B] focus:outline-none"
                                ></textarea>
                            </div>

                            <div className="pt-4 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#064E3B] px-5 py-2 text-xs font-bold text-white shadow-md hover:bg-[#04382a]"
                                >
                                    <Send className="h-3.5 w-3.5" />
                                    <span>Submit Review</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Bottom Consultation CTA */}
            <section className="bg-[#064E3B] py-12 text-white">
                <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                        Ready to Plan Your Sacred Journey?
                    </h2>
                    <p className="mt-2 text-xs text-emerald-100/90 sm:text-sm">
                        Speak directly with our Mumbai team for custom dates, group discounts, and hotel preferences.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                "Assalamu Alaikum. I read your pilgrim reviews and would like to consult about an upcoming Umrah booking."
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
                            <span>Explore All Packages</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}