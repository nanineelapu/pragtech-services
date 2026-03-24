"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const HomeSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.1 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-[140vw] md:h-[50vw] overflow-hidden group bg-[#faf9f6]">
            {/* Background Image with Layered Overlays */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Steel Detailing Expert - Precision Industrial Backdrop"
                    fill
                    className="opacity-10 grayscale group-hover:scale-105 transition-transform duration-700 ease-out object-cover"
                    priority
                />

                {/* Technical Grid Overlay - Subtle and Forest Green */}
                <div className="absolute inset-0 opacity-[0.08]">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#153a20" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* New Gradient Style - Soft Corner Glows */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(77,187,107,0.1)_0%,transparent_40%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(21,58,32,0.05)_0%,transparent_40%)]" />
            </div>

            {/* Main Content Container */}
            <div className={`relative h-full flex flex-col items-center justify-center text-center px-[6vw] md:px-[4vw] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[5vw]"}`}>

                {/* Decorative Frame Elements (Refined Forest Green) */}
                <div className={`absolute top-[20vw] bottom-[20vw] md:top-[10vw] md:bottom-[10vw] left-[10vw] right-[10vw] md:left-[15vw] md:right-[15vw] pointer-events-none transition-all duration-1000 delay-500 scale-[1.1] ${isVisible ? "scale-100 opacity-100" : "opacity-0"}`}>
                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] border-t-[0.5vw] md:border-t-[0.2vw] border-l-[0.5vw] md:border-l-[0.2vw] border-[#153a20]/20" />
                    <div className="absolute top-0 right-0 w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] border-t-[0.5vw] md:border-t-[0.2vw] border-r-[0.5vw] md:border-r-[0.2vw] border-[#153a20]/20" />
                    <div className="absolute bottom-0 left-0 w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] border-b-[0.5vw] md:border-b-[0.2vw] border-l-[0.5vw] md:border-l-[0.2vw] border-[#153a20]/20" />
                    <div className="absolute bottom-0 right-0 w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] border-b-[0.5vw] md:border-b-[0.2vw] border-r-[0.5vw] md:border-r-[0.2vw] border-[#153a20]/20" />

                    {/* Decorative square markers at edges */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5vw] h-[1.5vw] md:w-[0.6vw] md:h-[0.6vw] bg-[#4dbb6b]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1.5vw] h-[1.5vw] md:w-[0.6vw] md:h-[0.6vw] bg-[#4dbb6b]" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[1.5vw] h-[1.5vw] md:w-[0.6vw] md:h-[0.6vw] bg-[#4dbb6b]" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[1.5vw] h-[1.5vw] md:w-[0.6vw] md:h-[0.6vw] bg-[#4dbb6b]" />
                </div>

                {/* Text Block - Dark Green for Premium Feel on Light BG */}
                <div className="z-10 flex flex-col items-center gap-[3vw] md:gap-[1vw]">
                    <h1 className={`text-[#153a20] text-[15.5vw] md:text-[12vw] font-black leading-[0.8] tracking-tight anton-regular select-none uppercase transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2vw]"}`}>
                        PRECISION
                    </h1>

                    {/* Green Separator Line with Detail */}
                    <div className={`relative w-[70vw] md:w-[35vw] h-px bg-linear-to-r from-transparent via-[#4dbb6b] to-transparent my-[3vw] md:my-[1vw] transition-all duration-1000 delay-400 ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}>
                        <div className="absolute inset-0 blur-[2vw] md:blur-[0.4vw] bg-[#4dbb6b]/20" />

                        {/* Technical marker on the line */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[3vw] md:w-[1vw] h-[3vw] md:h-[1vw] bg-[#faf9f6] border border-[#4dbb6b] rotate-45 flex items-center justify-center">
                            <div className="w-[1vw] md:w-[0.2vw] h-[1vw] md:h-[0.2vw] bg-[#4dbb6b] rounded-full" />
                        </div>
                    </div>

                    <h2 className={`text-[#4dbb6b] text-[4.2vw] md:text-[3vw] font-black tracking-[1.5vw] md:tracking-[0.8vw] uppercase anton-regular transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 tracking-[1.5vw] md:tracking-[0.8vw]" : "opacity-0 tracking-[-1vw]"}`}>
                        IN EVERY DETAIL
                    </h2>

                    <div className={`mt-[5vw] md:mt-[2.5vw] flex flex-col items-center gap-[1.5vw] md:gap-[0.5vw] transition-all duration-1000 delay-800 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                        <h3 className="text-[#153a20]/80 text-[3.2vw] md:text-[1.8vw] font-black tracking-[0.8vw] md:tracking-[0.3vw] uppercase anton-regular">
                            STEEL DETAILING EXPERTS
                        </h3>
                        <p className="max-w-[80vw] text-[#153a20]/60 text-[3.2vw] md:text-[1.4vw] font-medium tracking-[0.1vw] eb-garamond italic">
                            Your projects are in safe hands with global structural precision.
                        </p>
                    </div>
                </div>

                {/* Interactive Slider representation - Green Accents */}
                <div className="absolute bottom-[8vw] md:bottom-[3vw] flex items-center gap-[3vw] md:gap-[1.2vw]">
                    <div className="w-[4vw] md:w-[1.4vw] h-[4vw] md:h-[1.4vw] rounded-full border-2 border-[#4dbb6b] flex items-center justify-center">
                        <div className="w-[1.5vw] md:w-[0.5vw] h-[1.5vw] md:h-[0.5vw] rounded-full bg-[#4dbb6b]" />
                    </div>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-[1.5vw] md:w-[0.6vw] h-[1.5vw] md:h-[0.6vw] rounded-full bg-[#153a20]/10 hover:bg-[#153a20]/30 transition-colors cursor-pointer" />
                    ))}
                </div>
            </div>

            {/* Subtle Vignette for Depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(21,58,32,0.03)_100%)] pointer-events-none" />
        </section>
    );
};

export default HomeSection;
