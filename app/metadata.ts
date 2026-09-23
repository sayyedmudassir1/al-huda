import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://alhudaworldtours.com"),
  title: {
    default:
      "Al-Huda World Tours & Travels | Hajj, Umrah & Travel Services in Mumbai",
    template: "%s | Al-Huda World Tours & Travels",
  },
  description:
    "Your Complete Travel Partner — From Passport to Pilgrimage. Verified Hajj and Umrah packages from Mumbai, visa assistance, passport services, flights, and international tours.",
  applicationName: "Al-Huda World Tours & Travels",
  creator: "Al-Huda World Tours & Travels",
  publisher: "Al-Huda World Tours & Travels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "Al-Huda World Tours and Travels",
    "Al Huda Travels Mumbai",
    "Hajj packages from Mumbai",
    "Umrah packages from Mumbai",
    "Hajj and Umrah travel agency Mumbai",
    "Ramzan Umrah packages from Mumbai",
    "Flight booking Mumbai",
    "Visa assistance Mumbai",
    "Passport assistance Mumbai",
    "Corporate and leisure travel agency Mumbai",
    "International tour packages from Mumbai",
    "Ziyarat packages from Mumbai",
  ],
  alternates: {
    canonical: "https://alhudaworldtours.com",
    languages: {
      "en-IN": "https://alhudaworldtours.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://alhudaworldtours.com",
    siteName: "Al-Huda World Tours & Travels",
    title: "Al-Huda World Tours & Travels | From Passport to Pilgrimage",
    description:
      "Your Complete Travel Partner — From Passport to Pilgrimage. Specializing in Hajj, Umrah, visa assistance, and global tours from Mumbai.",
    images: [
      {
        url: "https://alhudaworldtours.com/images/og-global.jpg",
        width: 1200,
        height: 630,
        alt: "Al-Huda World Tours & Travels - Mumbai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AlHudaTours",
    creator: "@AlHudaTours",
    title: "Al-Huda World Tours & Travels | From Passport to Pilgrimage",
    description:
      "Your Complete Travel Partner — From Passport to Pilgrimage. Hajj, Umrah, flights, and visas.",
    images: ["https://alhudaworldtours.com/images/og-global.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Travel & Tourism",
  classification: "Hajj & Umrah Pilgrimage Agency",
  referrer: "origin-when-cross-origin",
  verification: {
    google: "google-site-verification=YOUR_PRODUCTION_GSC_CODE",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};
