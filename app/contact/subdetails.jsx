"use client";

import React from 'react';

const SubDetails = () => {
    return (
        <section className="flex flex-col items-center justify-center py-[15vw] lg:py-[10vw] px-[6vw] relative bg-transparent overflow-hidden">
            {/* Background Narrative Grid Overlay - Refined for light theme */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 20 L100 20 M0 50 L100 50 M0 80 L100 80 M20 0 L20 100 M50 0 L50 100 M80 0 L80 100" stroke="#153a20" strokeWidth="0.1" fill="none" />
                </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-[85vw] lg:max-w-[70vw]">
                {/* Visual Anchor Node */}
                <div className="w-[15vw] lg:w-[3.5vw] h-[15vw] lg:h-[3.5vw] bg-[#153a20] rounded-full flex items-center justify-center mb-[8vw] lg:mb-[4vw] shadow-[0_1vw_3vw_rgba(21,58,32,0.1)] transition-transform duration-500 hover:scale-110">
                    <span className="text-[#4dbb6b] text-[6vw] lg:text-[1.4vw]">◈</span>
                </div>

                <p className="text-[5.5vw] lg:text-[2vw] font-medium text-[#153a20] text-center leading-[1.6] lg:leading-[1.6] eb-garamond italic tracking-tight">
                    "Our team remains globally synchronized to accelerate your vision. Whether navigating complex structural puzzles or exploring new frontiers of BIM detailing, we are your permanent partner in precision."
                </p>

                {/* Architectural Divider */}
                <div className="mt-[8vw] lg:mt-[4vw] flex items-center gap-[4vw] lg:gap-[1.5vw]">
                    <div className="w-[15vw] lg:w-[8vw] h-px bg-[#153a20]/10" />
                    <span className="text-[2.5vw] lg:text-[0.7vw] font-black text-[#153a20]/20 tracking-[0.4vw] uppercase anton-regular">PRAGTECH</span>
                    <div className="w-[15vw] lg:w-[8vw] h-px bg-[#153a20]/10" />
                </div>
            </div>
        </section>
    );
};

export default SubDetails;
