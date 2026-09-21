"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    CalendarDays,
    ChevronDown,
    Clock3,
    Search,
    UsersRound,
} from "lucide-react";

type SearchFilters = {
    journey: string;
    departure: string;
    month: string;
    duration: string;
    travellers: string;
    roomType: string;
};

const initialFilters: SearchFilters = {
    journey: "",
    departure: "",
    month: "",
    duration: "",
    travellers: "2",
    roomType: "",
};

const journeyOptions = [
    { value: "hajj", label: "Hajj" },
    { value: "umrah", label: "Umrah" },
];

const departureOptions = [
    { value: "mumbai", label: "Mumbai" },
    { value: "other", label: "Other / Flexible" },
];

const durationOptions = [
    { value: "7-10", label: "7–10 Days" },
    { value: "10-15", label: "10–15 Days" },
    { value: "15-20", label: "15–20 Days" },
    { value: "20+", label: "20+ Days" },
    { value: "flexible", label: "Flexible" },
];

const roomOptions = [
    { value: "double", label: "Double Sharing" },
    { value: "triple", label: "Triple Sharing" },
    { value: "quad", label: "Quad Sharing" },
    { value: "family", label: "Family Room" },
    { value: "flexible", label: "Flexible" },
];

const monthOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function SelectField({
    label,
    name,
    value,
    onChange,
    options,
    placeholder,
}: {
    label: string;
    name: keyof SearchFilters;
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[] | string[];
    placeholder: string;
}) {
    const normalizedOptions = options.map((option) =>
        typeof option === "string"
            ? { value: option.toLowerCase(), label: option }
            : option
    );

    return (
        <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#59635F]">
                {label}
            </span>

            <span className="relative block">
                <select
                    name={name}
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    className="min-h-12 w-full appearance-none rounded-xl border border-[#DDD7CA] bg-white px-4 pr-11 text-sm text-[#263A33] outline-none transition-colors hover:border-[#BFB5A0] focus:border-[#0B5D45] focus:ring-2 focus:ring-[#0B5D45]/10"
                >
                    <option value="">{placeholder}</option>

                    {normalizedOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#69736E]"
                    aria-hidden="true"
                />
            </span>
        </label>
    );
}

function NumberField({
    value,
    onChange,
}: {
    value: string;
    onChange: (value: string) => void;
}) {
    return (
        <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#59635F]">
                Travellers
            </span>

            <span className="relative block">
                <UsersRound
                    className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#69736E]"
                    aria-hidden="true"
                />

                <input
                    type="number"
                    name="travellers"
                    min={1}
                    max={50}
                    inputMode="numeric"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    className="min-h-12 w-full rounded-xl border border-[#DDD7CA] bg-white pl-11 pr-4 text-sm text-[#263A33] outline-none transition-colors placeholder:text-[#929995] hover:border-[#BFB5A0] focus:border-[#0B5D45] focus:ring-2 focus:ring-[#0B5D45]/10"
                    placeholder="2"
                    aria-label="Number of travellers"
                />
            </span>
        </label>
    );
}

export default function PackageSearch() {
    const [filters, setFilters] = useState<SearchFilters>(initialFilters);
    const [submitted, setSubmitted] = useState(false);

    function updateFilter<K extends keyof SearchFilters>(
        key: K,
        value: SearchFilters[K]
    ) {
        setFilters((current) => ({
            ...current,
            [key]: value,
        }));

        setSubmitted(false);
    }

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitted(true);

        /*
         * Future CMS/API integration:
         *
         * 1. Convert `filters` into query parameters.
         * 2. Fetch currently published packages.
         * 3. Apply availability and pricing rules server-side.
         * 4. Render real package results.
         *
         * No package availability or pricing is claimed here.
         */
    }

    function clearFilters() {
        setFilters(initialFilters);
        setSubmitted(false);
    }

    return (
        <section
            id="package-search"
            aria-labelledby="package-search-heading"
            className="relative overflow-hidden bg-[#F1EDE3] py-16 sm:py-20 lg:py-24"
        >
            {/* Background decoration */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#D8C89A]/20 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-[#0B5D45]/5 blur-3xl"
            />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#D8C89A]/70 bg-[#F7F2E4] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6A18]">
                        <Search className="h-3.5 w-3.5" aria-hidden="true" />
                        Find Your Package
                    </span>

                    <h2
                        id="package-search-heading"
                        className="mt-5 font-[var(--font-playfair)] text-3xl font-semibold leading-tight text-[#123C30] sm:text-4xl lg:text-5xl"
                    >
                        Start With Your{" "}
                        <span className="text-[#B28A2E]">Travel Requirements</span>
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#59635F] sm:text-base">
                        Tell us what you are looking for and use these preferences as a
                        starting point for finding suitable Hajj or Umrah options.
                    </p>
                </div>

                {/* Search panel */}
                <div className="mt-10 overflow-hidden rounded-3xl border border-[#DDD5C5] bg-white shadow-[0_18px_60px_rgba(18,60,48,0.08)] sm:mt-12">
                    <div className="border-b border-[#ECE7DD] bg-[#FFFEFA] px-5 py-5 sm:px-7">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F2E4] text-[#8A6A18]">
                                <CalendarDays className="h-5 w-5" aria-hidden="true" />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-[#173F33]">
                                    Package Preferences
                                </h3>

                                <p className="mt-0.5 text-xs text-[#7A837F]">
                                    Select the details that matter to your journey.
                                </p>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="p-5 sm:p-7"
                        aria-label="Search travel packages"
                    >
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <SelectField
                                label="Journey"
                                name="journey"
                                value={filters.journey}
                                onChange={(value) => updateFilter("journey", value)}
                                options={journeyOptions}
                                placeholder="Select journey"
                            />

                            <SelectField
                                label="Departure"
                                name="departure"
                                value={filters.departure}
                                onChange={(value) => updateFilter("departure", value)}
                                options={departureOptions}
                                placeholder="Select departure"
                            />

                            <SelectField
                                label="Travel Month"
                                name="month"
                                value={filters.month}
                                onChange={(value) => updateFilter("month", value)}
                                options={monthOptions}
                                placeholder="Select month"
                            />

                            <SelectField
                                label="Duration"
                                name="duration"
                                value={filters.duration}
                                onChange={(value) => updateFilter("duration", value)}
                                options={durationOptions}
                                placeholder="Select duration"
                            />

                            <NumberField
                                value={filters.travellers}
                                onChange={(value) => updateFilter("travellers", value)}
                            />

                            <SelectField
                                label="Room Type"
                                name="roomType"
                                value={filters.roomType}
                                onChange={(value) => updateFilter("roomType", value)}
                                options={roomOptions}
                                placeholder="Select room type"
                            />
                        </div>

                        {/* Actions */}
                        <div className="mt-7 flex flex-col gap-3 border-t border-[#ECE7DD] pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <button
                                type="button"
                                onClick={clearFilters}
                                className="order-2 min-h-11 rounded-xl px-4 text-sm font-medium text-[#69736E] transition-colors hover:bg-[#F7F4ED] hover:text-[#123C30] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D45] sm:order-1"
                            >
                                Clear Filters
                            </button>

                            <button
                                type="submit"
                                className="order-1 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0B5D45] px-7 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#084A38] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D45] focus-visible:ring-offset-2 sm:order-2"
                            >
                                <Search className="h-4 w-4" aria-hidden="true" />
                                Search Packages
                            </button>
                        </div>
                    </form>
                </div>

                {/* Search state / future results */}
                {submitted && (
                    <div
                        role="status"
                        aria-live="polite"
                        className="mt-5 rounded-2xl border border-[#D8C89A]/60 bg-white px-5 py-5 shadow-sm sm:px-6"
                    >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F7F2E4] text-[#8A6A18]">
                                    <Clock3 className="h-4 w-4" aria-hidden="true" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-[#173F33]">
                                        Your preferences have been captured.
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-[#69736E]">
                                        Live package results will appear here once the package
                                        catalogue and availability system are connected.
                                    </p>
                                </div>
                            </div>

                            <Link
                                href="/contact?service=package-search"
                                className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-[#D8C89A] px-4 text-xs font-semibold text-[#123C30] transition-colors hover:bg-[#F7F2E4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B28A2E] focus-visible:ring-offset-2"
                            >
                                Ask for Options
                                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                )}

                {/* Helpful note */}
                <div className="mx-auto mt-7 flex max-w-2xl items-start gap-2.5 text-center sm:items-center">
                    <UsersRound
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#8A6A18] sm:mt-0"
                        aria-hidden="true"
                    />

                    <p className="text-[11px] leading-5 text-[#747C78]">
                        Package availability, pricing, accommodation and inclusions can
                        change. Final details should always be confirmed before booking.
                    </p>
                </div>
            </div>
        </section>
    );
}
