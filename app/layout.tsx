import type { Viewport } from "next";
import {
  Inter,
  Noto_Naskh_Arabic,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { metadata as siteMetaData } from "./metadata";
import { Header, MobileBottomBar, Footer } from "@/components/layout";

export const metadata = siteMetaData;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: "--font-naskh",
  subsets: ["arabic"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#064E3B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${playfairDisplay.variable} ${notoNaskhArabic.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#FAF8F2] font-sans text-[#1F2925] antialiased">
        <Header />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-[#064E3B] focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:ring-offset-2"
        >
          Skip to main content
        </a>

        <main id="main-content">{children}</main>

        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}