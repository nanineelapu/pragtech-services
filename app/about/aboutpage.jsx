"use client";

import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-[#faf9f6] w-full">
            {/* High Performance Full Width Hero Section */}
            <section className="relative w-full overflow-hidden bg-linear-to-br from-[#0c1f11] via-[#153a20] to-black py-[12vw] flex flex-col items-center justify-center text-center px-[4vw]">
                {/* Minimal Technical Background Details */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: '4vw 4vw'
                    }}
                />

                {/* Non-Animated Gradient Glows for Performance */}
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#4dbb6b]/5 blur-[15vw] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#4dbb6b]/3 blur-[15vw] rounded-full" />

                {/* Main Hero Header Hierarchy */}
                <div className="relative z-10 flex flex-col items-center w-full">
                    {/* Header Label */}
                    <div className="px-[1.5vw] py-[0.5vw] bg-[#4dbb6b]/10 border border-[#4dbb6b]/20 rounded-full mb-[3vw] flex items-center gap-[0.8vw]">
                        <span className="text-[#4dbb6b] text-[1.2vw]">◈</span>
                        <span className="text-[#4dbb6b] text-[0.8vw] font-black uppercase tracking-[0.4vw] anton-regular">Engineering Overview</span>
                    </div>

                    <div className="flex flex-col items-center mb-[4vw] text-white">
                        <span className="text-[4.5vw] font-light leading-tight tracking-tight eb-garamond italic">
                            The Science of
                        </span>
                        <h1 className="text-[10vw] font-black leading-[0.8] tracking-tighter uppercase anton-regular">
                            Pragtech
                        </h1>
                    </div>

                    {/* Performance Optimized Narrative text (No Blur) */}
                    <p className="max-w-[45vw] text-[1.5vw] text-white/60 font-medium leading-[1.8] mb-[5vw] eb-garamond italic">
                        Forging the future of structural integrity through high-precision computational detailing. We are the silent engine behind the world's most <span className="text-[#4dbb6b] font-bold">complex</span> industrial frameworks.
                    </p>

                    {/* Action Bar: High-contrast buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-[2vw]">
                        <button className="px-[5vw] py-[1.2vw] bg-[#4dbb6b] hover:bg-white hover:text-[#153a20] text-white font-black rounded-full transition-all shadow-xl active:scale-95 text-[1vw] tracking-[0.2vw] uppercase anton-regular cursor-pointer">
                            Browse Our Legacy
                        </button>
                        <button className="px-[5vw] py-[1.2vw] bg-white/5 hover:bg-white text-white hover:text-[#153a20] border border-white/20 rounded-full transition-all active:scale-95 text-[1vw] tracking-[0.2vw] uppercase anton-regular cursor-pointer">
                            Initiate Connection
                        </button>
                    </div>
                </div>
            </section>

            {/* Who We Are Title Section */}
            <section className="flex flex-col items-center py-[4vw] text-center w-full">
                <div className="flex items-center gap-[2vw] mb-[2vw]">
                    <div className="w-[10vw] h-px bg-linear-to-r from-transparent to-[#153a20]/20" />
                    <h2 className="text-[5vw] font-black text-[#153a20] tracking-tighter uppercase anton-regular">
                        Who We Are
                    </h2>
                    <div className="w-[10vw] h-px bg-linear-to-l from-transparent to-[#153a20]/20" />
                </div>
                <div className="w-[4vw] h-[0.3vw] bg-[#4dbb6b] rounded-full" />
            </section>
        </div>
    );
};

export default AboutPage;

