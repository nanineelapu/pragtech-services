import Image from "next/image";
import { Montserrat, Roboto } from "next/font/google";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";

// Global Metadata for SEO
export const metadata = {
  title: {
    default: "Pragtech Ltd | Pragtech Steel Detailing & Engineering UK",
    template: "%s | Pragtech Ltd"
  },
  description: "Pragtech Ltd provides premium structural engineering and precision steel detailing services in the UK and globally. Operating in 6+ countries with high-end engineering expertise.",
  keywords: ["steel detailing UK", "structural engineering", "industrial design", "precision engineering", "Pragtech Ltd", "steel construction", "BIM", "London steel detailing"],
  authors: [{ name: "Pragtech Ltd" }],
  creator: "Pragtech Ltd",
  publisher: "Pragtech Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Pragtech Ltd Technical Services",
    description: "Premium structural engineering and precision steel detailing services globally. Operating in 6+ countries.",
    url: "https://pragtech.co.uk",
    siteName: "Pragtech Ltd",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragtech Ltd | Precision Steel Detailing",
    description: "Precision in every detail of steel detailing and engineering. Operating in 6+ countries.",
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

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col font-body text-pretty bg-white" suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          <main className="grow relative">
            {/* Page Content */}
            <div className="relative z-10 w-full min-h-screen">
              {children}
            </div>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
