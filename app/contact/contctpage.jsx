"use client";

import React from 'react';

const ContctPage = () => {
    return (
        <section
            className="relative w-full min-h-[100vh] flex flex-col items-center justify-center text-center px-[5vw] overflow-hidden pt-[4vw]"
            style={{
                background: `radial-gradient(circle at center, rgba(77, 187, 107, 0.08) 0%, transparent 70%), linear-gradient(to bottom, #0c1f11 0%, #153a20 50%, #0c1f11 100%)`
            }}
        >
            {/* Background Narrative Watermark - Reduced scale */}
            <div className="absolute top-[6vw] left-0 w-full text-center text-white/3 text-[16vw] font-black anton-regular pointer-events-none select-none tracking-tighter uppercase whitespace-nowrap">
                CONNECT
            </div>

            {/* Pill Above Title - Balanced scale */}
            <div className="relative z-10 px-[1.2vw] py-[0.4vw] bg-[#4dbb6b] text-[#153a20] rounded-full mb-[2.5vw] flex items-center gap-[0.6vw] animate-in fade-in slide-in-from-top-4 duration-700">
                <span className="text-[1vw]">◈</span>
                <span className="text-[0.8vw] font-black uppercase tracking-widest anton-regular">GLOBAL SUPPORT HUB</span>
            </div>

            {/* Main Heading Hierarchy - Reduced scale */}
            <div className="relative z-10 flex flex-col items-center mb-[3.5vw] animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <h1 className="text-[9vw] font-black text-white anton-regular leading-[0.8] tracking-tighter uppercase">
                    INITIATE <br /> <span className="text-[#4dbb6b]">CONNECTION</span>
                </h1>
            </div>

            {/* Subtext - Reduced scale */}
            <p className="relative z-10 max-w-[45vw] text-[1.5vw] text-[#faf9f6]/70 eb-garamond italic leading-relaxed mb-[4.5vw]">
                Ready to transform your structural vision into reality? Reach out for expert BIM modeling, estimation, and detailing support across all time zones.
            </p>

            {/* Action Buttons - Scaled down */}
            <div className="relative z-10 flex items-center gap-[1.2vw]">
                <button className="px-[3vw] py-[1.1vw] bg-[#4dbb6b] hover:bg-white text-[#153a20] font-black rounded-full transition-all active:scale-95 text-[0.9vw] tracking-[0.15vw] uppercase anton-regular cursor-pointer">
                    Direct Message
                </button>
                <div className="w-px h-[2.5vw] bg-white/20 mx-[1vw]" />
                <button className="px-[3vw] py-[1.1vw] border border-white/20 hover:border-[#4dbb6b] text-white font-black rounded-full transition-all hover:text-[#4dbb6b] text-[0.9vw] tracking-[0.15vw] uppercase anton-regular cursor-pointer">
                    Technical Sales
                </button>
            </div>
        </section>
    );
};

export default ContctPage;
