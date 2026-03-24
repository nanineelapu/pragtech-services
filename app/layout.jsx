import { Geist, Geist_Mono, Anton, EB_Garamond } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./globals.css";

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

export const metadata = {
  title: "PragTech",
  description: "PragTech Services",
};

import SmoothScroll from "./SmoothScroll";

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
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}


