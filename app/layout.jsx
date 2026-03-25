import { Geist, Geist_Mono, Anton, EB_Garamond } from "next/font/google";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";

// Global Metadata for SEO
export const metadata = {
  title: {
    default: "PragTech Technical Services | Precision Steel Detailing & Engineering",
    template: "%s | PragTech Technical Services"
  },
  description: "PragTech offers premium structural engineering and precision steel detailing services globally. Expert solutions for complex industrial and commercial projects.",
  keywords: ["steel detailing", "structural engineering", "industrial design", "precision engineering", "PragTech", "steel construction", "BIM"],
  authors: [{ name: "PragTech Technical Services" }],
  creator: "PragTech",
  publisher: "PragTech Technical Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PragTech Technical Services",
    description: "Premium structural engineering and precision steel detailing services globally.",
    url: "https://pragtech.services", // Placeholder - adjust if needed
    siteName: "PragTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PragTech Technical Services",
    description: "Precision in every detail of steel detailing and engineering.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${ebGaramond.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col" suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}


