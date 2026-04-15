import Image from "next/image";
import { Montserrat, Roboto } from "next/font/google";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";
import Preloader from "./Preloader";

// Global Metadata for SEO
export const metadata = {
  metadataBase: new URL('https://pragtech.services'),
  icons: {
    icon: 'https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/favicon.ico',
    shortcut: 'https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/favicon.ico',
    apple: 'https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/favicon.ico',
  },
  title: {
    default: "Pragtech Ltd | Precision Steel Detailing & Structural Engineering UK",
    template: "%s | Pragtech Ltd"
  },
  description: "Pragtech Ltd provides premium structural engineering and precision steel detailing services in the UK and globally. Experts in BIM modeling, Tekla detailing, and industrial framework design.",
  keywords: [
    "steel detailing UK", 
    "structural engineering", 
    "precision engineering", 
    "Pragtech Ltd", 
    "steel construction drawings", 
    "BIM modeling services", 
    "Tekla steel detailing", 
    "London structural engineering",
    "industrial steel design",
    "fabrication drawings",
    "connection design"
  ],
  authors: [{ name: "Pragtech Ltd", url: "https://pragtech.services" }],
  creator: "Pragtech Ltd",
  publisher: "Pragtech Ltd",
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Pragtech Ltd | Engineering & Steel Detailing Excellence",
    description: "Premium structural engineering and precision steel detailing services globally. Operating in 6+ countries with high-end technical expertise.",
    url: "https://pragtech.services",
    siteName: "Pragtech Ltd",
    images: [
      {
        url: 'https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/Gemini_Generated_Image_czcteyczcteyczct.webp',
        width: 1200,
        height: 630,
        alt: 'Pragtech Ltd Engineering Excellence',
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragtech Ltd | Precision Steel Detailing",
    description: "Precision in every detail of steel detailing and engineering. Experts in complex industrial frameworks.",
    images: ['https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/Gemini_Generated_Image_czcteyczcteyczct.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pragtech Ltd",
  "url": "https://pragtech.services",
  "logo": "https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/favicon.ico",
  "sameAs": [
    "https://www.linkedin.com/company/pragtech-ltd"
  ],
  "description": "Pragtech Ltd provides premium structural engineering and precision steel detailing services in the UK and globally.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "UK"
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
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
