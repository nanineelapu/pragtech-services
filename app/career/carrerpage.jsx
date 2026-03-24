"use client";

import React from 'react';

const CarrerPage = () => {
    return (
        <section
            className="relative w-full pt-[3vw] min-h-[100vh] flex flex-col items-center justify-center text-center px-[3vw] overflow-hidden"
            style={{
                background: `radial-gradient(circle at center, rgba(77, 187, 107, 0.08) 0%, transparent 70%), linear-gradient(to bottom, #0c1f11 0%, #153a20 50%, #0c1f11 100%)`
            }}
        >
            {/* Background Narrative Watermark - Reduced scale */}
            <div className="absolute top-[8vw] left-0 w-full text-center text-white/3 text-[16vw] font-black anton-regular pointer-events-none select-none tracking-tighter uppercase whitespace-nowrap">
                CAREERS
            </div>

            {/* Pill Above Title - Reduced padding/text */}
            <div className="relative z-10 px-[1.2vw] py-[0.4vw] bg-[#4dbb6b] text-[#153a20] rounded-full mb-[2.5vw] flex items-center gap-[0.6vw] animate-in fade-in slide-in-from-top-4 duration-700">
                <span className="text-[1vw]">◈</span>
                <span className="text-[0.8vw] font-black uppercase tracking-widest anton-regular">Open Positions Available</span>
            </div>

            {/* Main Heading Hierarchy - Reduced H1 */}
            <div className="relative z-10 flex flex-col items-center mb-[3.5vw] animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <h1 className="text-[8vw] font-black text-white anton-regular leading-[0.8] tracking-tighter uppercase">
                    JOIN THE FUTURE OF <br /> <span className="text-[#4dbb6b]">STEEL DETAILING</span>
                </h1>
            </div>

            {/* Subtext - Reduced scale */}
            <p className="relative z-10 max-w-[45vw] text-[1.5vw] text-[#faf9f6]/70 eb-garamond italic leading-relaxed mb-[4.5vw]">
                We are searching for the next generation of detailing experts. Build a career defined by precision, technology, and global structural impact.
            </p>

            {/* Action Buttons - Reduced padding/text */}
            <div className="relative z-10 flex items-center gap-[1.2vw]">
                <button className="px-[3vw] py-[1.1vw] bg-[#4dbb6b] hover:bg-white text-[#153a20] font-black rounded-full transition-all active:scale-95 text-[0.9vw] tracking-[0.15vw] uppercase anton-regular cursor-pointer">
                    Explore Opportunities
                </button>
                <div className="w-px h-[2.5vw] bg-white/20 mx-[1vw]" />
                <button className="px-[3vw] py-[1.1vw] border border-white/20 hover:border-[#4dbb6b] text-white font-black rounded-full transition-all hover:text-[#4dbb6b] text-[0.9vw] tracking-[0.15vw] uppercase anton-regular cursor-pointer">
                    Our Culture
                </button>
            </div>
        </section>
    );
};

export default CarrerPage;
