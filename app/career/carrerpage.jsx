"use client";

import React from 'react';

const CarrerPage = () => {
    return (
        <section
            className="relative w-full pt-[35vw] lg:pt-[3vw] min-h-[150vw] lg:min-h-screen flex flex-col items-center lg:justify-center text-center px-[6vw] lg:px-[3vw] overflow-hidden"
            style={{
                background: `radial-gradient(circle at center, rgba(77, 187, 107, 0.08) 0%, transparent 70%), linear-gradient(to bottom, #0c1f11 0%, #153a20 50%, #0c1f11 100%)`
            }}
        >
            {/* Background Narrative Watermark - Reduced scale */}
            <div className="absolute top-[15vw] lg:top-[8vw] left-0 w-full text-center text-white/3 text-[22vw] lg:text-[16vw] font-black anton-regular pointer-events-none select-none tracking-tighter uppercase whitespace-nowrap">
                CAREERS
            </div>

            {/* Pill Above Title - Reduced padding/text */}
            <div className="relative z-10 px-[4vw] lg:px-[1.2vw] py-[2vw] lg:py-[0.4vw] bg-[#4dbb6b] text-[#153a20] rounded-full mb-[8vw] lg:mb-[2.5vw] flex items-center gap-[1.5vw] lg:gap-[0.6vw] animate-in fade-in slide-in-from-top-4 duration-700">
                <span className="text-[3vw] lg:text-[1vw]">◈</span>
                <span className="text-[2.5vw] lg:text-[0.8vw] font-black uppercase tracking-widest anton-regular">Open Positions Available</span>
            </div>

            {/* Main Heading Hierarchy - Reduced H1 */}
            <div className="relative z-10 flex flex-col items-center mb-[8vw] lg:mb-[3.5vw] animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <h1 className="text-[13vw] lg:text-[8vw] font-black text-white anton-regular leading-[0.8] tracking-tighter uppercase">
                    JOIN THE FUTURE OF <br /> <span className="text-[#4dbb6b]">STEEL DETAILING</span>
                </h1>
            </div>

            {/* Subtext - Reduced scale */}
            <p className="relative z-10 max-w-[90vw] lg:max-w-[45vw] text-[4.2vw] lg:text-[1.5vw] text-[#faf9f6]/70 eb-garamond italic leading-relaxed mb-[10vw] lg:mb-[4.5vw]">
                We are searching for the next generation of detailing experts. Build a career defined by precision, technology, and global structural impact.
            </p>

            {/* Action Buttons - Reduced padding/text */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-[4vw] lg:gap-[1.2vw] w-full sm:w-auto">
                <button className="w-full sm:w-auto px-[10vw] lg:px-[3vw] py-[3.5vw] lg:py-[1.1vw] bg-[#4dbb6b] hover:bg-white text-[#153a20] font-black rounded-full transition-all active:scale-95 text-[3.5vw] lg:text-[0.9vw] tracking-[0.15vw] uppercase anton-regular cursor-pointer whitespace-nowrap">
                    Explore Opportunities
                </button>
                <div className="hidden sm:block w-px h-[2.5vw] bg-white/20 mx-[1vw]" />
                <button className="w-full sm:w-auto px-[10vw] lg:px-[3vw] py-[3.5vw] lg:py-[1.1vw] border border-white/20 hover:border-[#4dbb6b] text-white font-black rounded-full transition-all hover:text-[#4dbb6b] text-[3.5vw] lg:text-[0.9vw] tracking-[0.15vw] uppercase anton-regular cursor-pointer whitespace-nowrap">
                    Our Culture
                </button>
            </div>
        </section>
    );
};

export default CarrerPage;
