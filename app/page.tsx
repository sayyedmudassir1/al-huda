import { CustomizedJourneyCTA } from "@/components/home/CustomizedJourneyCTA";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { GallerySection } from "@/components/home/GallerySection";
import { GuideSection } from "@/components/home/GuideSection";
import HajjSection from "@/components/home/HajjSection";
import { HeroSection } from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import PackageSearch from "@/components/home/PackageSearch";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import ServicesSection from "@/components/home/ServicesSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import UmrahSection from "@/components/home/UmrahSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hajj, Umrah & Travel Services in Mumbai | Al-Huda World Tours",
  description: "Explore verified Hajj and Umrah packages, visa and passport assistance, flights, hotels, and customized tours with Al-Huda World Tours & Travels in Mumbai.",
  alternates: {
    canonical: "https://alhudaworldtours.com",
  },
  openGraph: {
    title: "Al-Huda World Tours & Travels | From Passport to Pilgrimage",
    description: "Hajj, Umrah and complete travel assistance for individuals, families and groups from Mumbai, Maharashtra.",
    url: "https://alhudaworldtours.com",
    siteName: "Al-Huda World Tours & Travels",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://alhudaworldtours.com/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Al-Huda World Tours & Travels - Hajj and Umrah Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Huda World Tours & Travels | From Passport to Pilgrimage",
    description: "Your complete travel partner from Mumbai for Hajj, Umrah, visas, flights, and holidays.",
    images: ["https://alhudaworldtours.com/images/og-home.jpg"],
  },
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://alhudaworldtours.com/#travelagency",
        "name": "Al-Huda World Tours & Travels",
        "description": "Your complete travel partner from Mumbai — From Passport to Pilgrimage. Specializing in Hajj, Umrah, visa assistance, passport services, flights, and tours.",
        "url": "https://alhudaworldtours.com",
        "telephone": "+91-9833206053",
        "priceRange": "₹5000 - ₹5,00,000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mohammed Ali Road / Crawford Market Hub",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400003",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 18.9500,
          "longitude": 72.8300
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "20:00"
        },
        "areaServed": [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Navi Mumbai" },
          { "@type": "City", "name": "Thane" },
          { "@type": "City", "name": "Mira Road" }
        ],
        "sameAs": [
          "https://www.facebook.com/alhudaworldtours",
          "https://www.instagram.com/alhudaworldtours"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://alhudaworldtours.com/#website",
        "url": "https://alhudaworldtours.com",
        "name": "Al-Huda World Tours & Travels",
        "publisher": {
          "@id": "https://alhudaworldtours.com/#travelagency"
        },
        "inLanguage": "en-IN"
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Semantic Page Content Wrapper with Negative Space & Hierarchy */}
      <div className="flex flex-col gap-16 md:gap-24 overflow-x-hidden bg-[#FAF8F2]">

        {/* 01 — Primary Conversion Hero Area (LCP Optimized) */}
        <section aria-label="Hero Section" className="relative">
          <HeroSection />
        </section>

        {/* 02 — Compact Trust & Service Reassurance Strip */}
        <section aria-label="Trust Reassurance" className="border-y border-[#064E3B]/10 bg-white/50 py-6">
          <TrustStrip />
        </section>

        {/* 03 — Core Travel Services Category Grid */}
        <section id="services" aria-labelledby="services-heading" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <ServicesSection />
        </section>

        {/* 04 — Hajj Pilgrimage-Focused Conversion Section */}
        <section id="hajj-packages" aria-labelledby="hajj-heading" className="bg-[#064E3B]/5 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HajjSection />
          </div>
        </section>

        {/* 05 — Umrah Package Discovery & Categories */}
        <section id="umrah-packages" aria-labelledby="umrah-heading" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <UmrahSection />
        </section>

        {/* 06 — Interactive Package Search & Filter Engine */}
        <section id="package-finder" aria-labelledby="finder-heading" className="bg-white py-12 border-y border-[#064E3B]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PackageSearch />
          </div>
        </section>

        {/* 07 — Trust and Brand Differentiation Factors */}
        <section aria-labelledby="why-us-heading" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <WhyChooseUs />
        </section>

        {/* 08 — Step-by-Step Customer Journey Timeline */}
        <section aria-labelledby="journey-timeline" className="bg-[#064E3B]/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HowItWorks />
          </div>
        </section>

        {/* 09 — High-Intent Customized Enquiry Conversion CTA */}
        <section aria-labelledby="custom-enquiry" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <CustomizedJourneyCTA />
        </section>

        {/* 10 — Social Proof & Genuine Customer Testimonials */}
        <section id="reviews" aria-labelledby="testimonials-heading" className="bg-white py-16 border-y border-[#064E3B]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ReviewsSection />
          </div>
        </section>

        {/* 11 — Authentic Visual Gallery & Lightbox */}
        <section id="gallery" aria-labelledby="gallery-heading" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <GallerySection />
        </section>

        {/* 12 — Educational Guides for Pilgrims & Travelers */}
        <section id="guides" aria-labelledby="guides-heading" className="bg-[#064E3B]/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GuideSection />
          </div>
        </section>

        {/* 13 — Dynamic FAQ Accordion Section */}
        <section id="faq" aria-labelledby="faq-heading" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <FAQSection />
        </section>

        {/* 14 — Final High-Impact Conversion & Contact CTA */}
        <section id="contact" aria-labelledby="final-cta-heading" className="bg-[#064E3B] text-white py-20 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FinalCTA />
          </div>
        </section>

      </div>
    </>
  );
}