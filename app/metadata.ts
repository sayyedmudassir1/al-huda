import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://alhudatoursandtravels.in"),
  title: {
    default: "Al-Huda World Tours & Travels",
    template: "%s | Al-Huda World Tours & Travels",
  },
  description:
    "Your Complete Travel Partner — From Passport to Pilgrimage. Hajj, Umrah, flights, visa assistance, passport assistance, railway tickets, hotels and tours.",
  applicationName: "Al-Huda World Tours & Travels",
  creator: "Al-Huda World Tours & Travels",
  publisher: "Al-Huda World Tours & Travels",
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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Al-Huda World Tours & Travels",
    title: "Al-Huda World Tours & Travels",
    description: "Your Complete Travel Partner — From Passport to Pilgrimage.",
    url: "https://alhudatoursandtravels.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Huda World Tours & Travels",
    description: "Your Complete Travel Partner — From Passport to Pilgrimage.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "travel",
  icons: {
    icon: "/favicon.ico",
  },
};
