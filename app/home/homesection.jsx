"use client";

import React from "react";
import Image from "next/image";

const HomeSection = () => {
    return (
        <section className="relative w-full h-[45vw] rounded-[4vw] overflow-hidden group">
            {/* Background Image with Layered Overlays */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Steel Detailing Expert - Precision Industrial Backdrop"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-75 group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                />
                {/* Tech Grid Overlay (Simulated via SVG for better control) */}
                <div className="absolute inset-0 opacity-[0.15]">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0081c3" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Blue Tint Layer (Matching the image's blue tone) */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-transparent to-black/60" />
            </div>

            {/* Main Content Container */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-[4vw]">

                {/* Decorative Frame Elements (The corners shown in target image) */}
                <div className="absolute top-[10vw] bottom-[10vw] left-[15vw] right-[15vw] pointer-events-none">
                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-[1.5vw] h-[1.5vw] border-t-[0.2vw] border-l-[0.2vw] border-blue-500" />
                    <div className="absolute top-0 right-0 w-[1.5vw] h-[1.5vw] border-t-[0.2vw] border-r-[0.2vw] border-blue-500" />
                    <div className="absolute bottom-0 left-0 w-[1.5vw] h-[1.5vw] border-b-[0.2vw] border-l-[0.2vw] border-blue-500" />
                    <div className="absolute bottom-0 right-0 w-[1.5vw] h-[1.5vw] border-b-[0.2vw] border-r-[0.2vw] border-blue-500" />

                    {/* Decorative square markers at edges */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.6vw] h-[0.6vw] bg-blue-500" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[0.6vw] h-[0.6vw] bg-blue-500" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[0.6vw] h-[0.6vw] bg-blue-500" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[0.6vw] h-[0.6vw] bg-blue-500" />
                </div>

                {/* Text Block */}
                <div className="z-10 flex flex-col items-center gap-[1.5vw]">
                    <h1 className="text-white text-[9vw] font-black leading-none tracking-tight select-none">
                        PRECISION
                    </h1>

                    {/* Blue Separator Line with Glow */}
                    <div className="relative w-[30vw] h-[0.15vw] bg-linear-to-r from-transparent via-blue-500 to-transparent">
                        <div className="absolute inset-0 blur-[0.4vw] bg-blue-500/50" />

                        {/* Circle markers on the line */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[0.8vw] h-[0.8vw] rounded-full border-[0.12vw] border-blue-500 bg-black shadow-[0_0_1vw_rgba(59,130,246,0.8)]" />
                    </div>

                    <h2 className="text-[#0081c3] text-[2.8vw] font-black tracking-widest uppercase mt-[0.5vw]">
                        IN EVERY DETAIL
                    </h2>

                    <div className="mt-[2vw] flex flex-col items-center gap-[0.5vw]">
                        <h3 className="text-white text-[2vw] font-bold tracking-[0.2vw] uppercase">
                            STEEL DETAILING EXPERTS
                        </h3>
                        <p className="text-white/80 text-[1.2vw] font-medium tracking-[0.1vw]">
                            YOUR PROJECTS ARE IN SAFE HANDS!
                        </p>
                    </div>
                </div>

                {/* Bottom Navigation Indicators (Slider representation) */}
                <div className="absolute bottom-[3vw] flex items-center gap-[0.8vw]">
                    <div className="w-[1.2vw] h-[1.2vw] rounded-full bg-blue-500 ring-[0.15vw] ring-offset-[0.2vw] ring-offset-transparent ring-blue-500" />
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="w-[0.5vw] h-[0.5vw] rounded-full bg-white/40 ring-[0.1vw] ring-transparent hover:bg-white/70 transition-colors" />
                    ))}
                </div>
            </div>

            {/* Fine Gradient for Text Readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
        </section>
    );
};

export default HomeSection;
