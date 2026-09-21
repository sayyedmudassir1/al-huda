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
  title: "Hajj, Umrah & Travel Services in Mumbai",
  description: "Explore Hajj and Umrah packages, visa and passport assistance, flights, railway tickets, hotels and tours with Al-Huda World Tours & Travels.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Al-Huda World Tours & Travels | From Passport to Pilgrimage",
    description: "Hajj, Umrah and complete travel assistance for individuals, families and groups.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 01 — Primary conversion area The visitor should immediately understand: who we are, what we offer and what to do next. */}
      <HeroSection />

      {/* 02 — Compact trust/service reassurance Keeps the first screen focused while quickly communicating the breadth of assistance available. */}
      <TrustStrip />

      {/* 03 — Core travel services Eight primary service categories. */}
      <ServicesSection />

      {/* 04 — Hajj Dedicated pilgrimage-focused conversion section. */}
      <HajjSection />

      {/* 05 — Umrah Main Umrah package discovery area. */}
      <UmrahSection />

      {/* 06 — Package discovery Designed to eventually connect to CMS/package data. */}
      <PackageSearch />

      {/* 07 — Trust and differentiation Uses factual service benefits rather than unsupported claims or fabricated statistics. */}
      <WhyChooseUs />

      {/* 08 — Process Explains what happens after a visitor makes an enquiry. */}
      <HowItWorks />

      {/* 09 — High-intent customized enquiry CTA */}
      <CustomizedJourneyCTA />

      {/* 10 — Social proof The reusable component will show genuine reviews when they are supplied. Until then it can display an appropriate empty/placeholder state. */}
      <ReviewsSection />

      {/* 11 — Authentic company photography Images will eventually come from the CMS/media system. */}
      <GallerySection />

      {/* 12 — Educational content Supports both users and long-term organic SEO. */}
      <GuideSection />

      {/* 13 — Common questions Answers should remain tied to actual package/service information rather than fabricated pricing or policies. */}
      <FAQSection />

      {/* 14 — Final conversion opportunity */}
      <FinalCTA />
    </>
  );
}
