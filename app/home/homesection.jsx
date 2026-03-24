"use client";

import React from "react";
import Image from "next/image";

const HomeSection = () => {
    return (
        <section className="relative w-full h-[50vw] overflow-hidden group bg-[#153a20]">
            {/* Background Image with Layered Overlays */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Steel Detailing Expert - Precision Industrial Backdrop"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-20 grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                />

                {/* Technical Grid Overlay - Refined to Green */}
                <div className="absolute inset-0 opacity-[0.2]">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4dbb6b" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Forest Green Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#153a20] via-transparent to-transparent opacity-60" />
            </div>

            {/* Main Content Container */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-[4vw]">

                {/* Decorative Frame Elements (Green Structural Markers) */}
                <div className="absolute top-[10vw] bottom-[10vw] left-[15vw] right-[15vw] pointer-events-none">
                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-[1.5vw] h-[1.5vw] border-t-[0.2vw] border-l-[0.2vw] border-[#4dbb6b]/40" />
                    <div className="absolute top-0 right-0 w-[1.5vw] h-[1.5vw] border-t-[0.2vw] border-r-[0.2vw] border-[#4dbb6b]/40" />
                    <div className="absolute bottom-0 left-0 w-[1.5vw] h-[1.5vw] border-b-[0.2vw] border-l-[0.2vw] border-[#4dbb6b]/40" />
                    <div className="absolute bottom-0 right-0 w-[1.5vw] h-[1.5vw] border-b-[0.2vw] border-r-[0.2vw] border-[#4dbb6b]/40" />

                    {/* Decorative square markers at edges */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.6vw] h-[0.6vw] bg-[#4dbb6b]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[0.6vw] h-[0.6vw] bg-[#4dbb6b]" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[0.6vw] h-[0.6vw] bg-[#4dbb6b]" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[0.6vw] h-[0.6vw] bg-[#4dbb6b]" />
                </div>

                {/* Text Block - Standardized Fonts */}
                <div className="z-10 flex flex-col items-center gap-[1vw]">
                    <h1 className="text-white text-[12vw] font-black leading-[0.8] tracking-tight anton-regular select-none uppercase">
                        PRECISION
                    </h1>

                    {/* Green Separator Line with Detail */}
                    <div className="relative w-[35vw] h-px bg-linear-to-r from-transparent via-[#4dbb6b] to-transparent my-[1vw]">
                        <div className="absolute inset-0 blur-[0.4vw] bg-[#4dbb6b]/30" />

                        {/* Technical marker on the line */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[1vw] h-[1vw] bg-[#153a20] border border-[#4dbb6b] rotate-45 flex items-center justify-center">
                            <div className="w-[0.2vw] h-[0.2vw] bg-[#4dbb6b] rounded-full" />
                        </div>
                    </div>

                    <h2 className="text-[#4dbb6b] text-[3vw] font-black tracking-[0.8vw] uppercase anton-regular">
                        IN EVERY DETAIL
                    </h2>

                    <div className="mt-[2.5vw] flex flex-col items-center gap-[0.5vw]">
                        <h3 className="text-white/90 text-[1.8vw] font-black tracking-[0.3vw] uppercase anton-regular">
                            STEEL DETAILING EXPERTS
                        </h3>
                        <p className="text-white/70 text-[1.4vw] font-medium tracking-[0.1vw] eb-garamond italic">
                            Your projects are in safe hands with global structural precision.
                        </p>
                    </div>
                </div>

                {/* Interactive Slider representation - Green Accents */}
                <div className="absolute bottom-[3vw] flex items-center gap-[1.2vw]">
                    <div className="w-[1.4vw] h-[1.4vw] rounded-full border-2 border-[#4dbb6b] flex items-center justify-center">
                        <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#4dbb6b]" />
                    </div>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-[0.6vw] h-[0.6vw] rounded-full bg-white/20 hover:bg-white/50 transition-colors cursor-pointer" />
                    ))}
                </div>
            </div>

            {/* Final Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />
        </section>
    );
};

export default HomeSection;
