"use client";

import React from 'react';

const CarrerPage = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-[4vw] relative overflow-hidden bg-[#faf9f6] pt-[8vw]">
            {/* Pill Above Title */}
            <div className="px-[1.5vw] py-[0.5vw] bg-[#0081bb]/10 border border-[#0081bb]/20 rounded-full mb-[3vw] flex items-center gap-[0.5vw] transition-all hover:bg-[#0081bb]/20 cursor-default relative z-10">
                <span className="text-[#0081bb] text-[1.2vw]">🚀</span>
                <span className="text-[#0081bb] text-[0.9vw] font-black uppercase tracking-widest">Join Our Team</span>
            </div>

            {/* Main Heading Hierarchy */}
            <div className="flex flex-col items-center mb-[3.5vw] relative z-10">
                <span className="text-[6.5vw] font-black text-white leading-tight tracking-tight uppercase">
                    Build Your
                </span>
                <h1 className="text-[8.5vw] font-black text-[#0081bb] leading-[0.9] tracking-tighter uppercase">
                    Career With Us
                </h1>
            </div>

            {/* Subtext */}
            <p className="max-w-[50vw] text-[1.3vw] text-white/90 font-medium leading-[1.8] mb-[4.5vw] relative z-10">
                Join a team of passionate steel detailing experts and grow your career in an innovative and supportive environment. Shape the future of structural engineering with us.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-[2vw] relative z-10">
                <button className="px-[3.5vw] py-[1.2vw] bg-[#0081bb] hover:bg-[#006ca3] text-white font-black rounded-[0.8vw] transition-all shadow-[0_1.5vw_4vw_rgba(0,129,195,0.4)] active:scale-95 text-[1.1vw] tracking-wider uppercase">
                    View Open Positions
                </button>
                <button className="px-[3.5vw] py-[1.2vw] bg-[#34495e]/60 hover:bg-[#34495e] border border-white/20 text-white font-black rounded-[0.8vw] transition-all active:scale-95 text-[1.1vw] tracking-wider uppercase">
                    Learn About Culture
                </button>
            </div>
        </section>
    );
};

export default CarrerPage;
