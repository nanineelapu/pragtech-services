"use client";

import { Geist, Geist_Mono, Anton, EB_Garamond } from "next/font/google";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";
import { Preloader } from "./Preloader";
import { AnimatePresence } from "framer-motion";

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
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    // Session-based check to only show preloader once per visit and ONLY on home page
    const checkLoadingStatus = () => {
      const isHome = pathname === "/";
      const loadedInSession = sessionStorage.getItem("pragtech_loaded") === "true";

      if (!isHome || loadedInSession) {
        setLoading(false);
      }
      setHasChecked(true);
    };

    checkLoadingStatus();
  }, [pathname]);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${ebGaramond.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col" suppressHydrationWarning>
        <AnimatePresence mode="wait">
          {loading && hasChecked && (
            <Preloader 
              key="preloader" 
              onLoadComplete={() => {
                setLoading(false);
                if (typeof window !== "undefined") {
                  sessionStorage.setItem("pragtech_loaded", "true");
                }
              }} 
            />
          )}
        </AnimatePresence>
        
        {/* Only show content after we've verified if preloader is needed */}
        {hasChecked && (
          <SmoothScroll>
            <Navbar />
            <main className="grow">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        )}

        {/* Global technical styling to prevent background flash */}
        <style jsx global>{`
          body {
            background-color: #ffffff;
          }
        `}</style>
      </body>
    </html>
  );
}


