"use client";

import React from 'react';

const AboutPage = () => {
    return (
        <div className="flex flex-col items-center mt-[5vw] w-full">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-[4vw] pt-[5vw]">
                {/* Pill Above Title */}
                <div className="px-[1.2vw] py-[0.6vw] bg-[#0081bb]/10 border border-[#0081bb]/20 rounded-full mb-[2.5vw] flex items-center gap-[0.6vw]">
                    <span className="text-[#ff9800] text-[1.2vw]">⚡</span>
                    <span className="text-[#0081bb] text-[0.9vw] font-black uppercase tracking-widest">About Us</span>
                </div>

                {/* Main Heading Hierarchy */}
                <div className="flex flex-col items-center mb-[3.5vw]">
                    <span className="text-[4.5vw] font-black text-white leading-tight tracking-tight">
                        Precision in
                    </span>
                    <h1 className="text-[7.5vw] font-black text-[#0081bb] leading-[0.9] tracking-tighter uppercase">
                        Steel Detailing
                    </h1>
                </div>

                {/* Subtext */}
                <p className="max-w-[55vw] text-[1.3vw] text-white/90 font-medium leading-[1.8] mb-[4.5vw]">
                    We are a team of expert steel detailers dedicated to delivering high-quality structural and miscellaneous steel detailing services. With cutting-edge technology and years of experience, we <span className="text-[#0081bb] font-bold underline decoration-[0.2vw] underline-offset-[0.4vw]">bring</span> your projects to life with precision and efficiency.
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-[2vw]">
                    <button className="px-[3.5vw] py-[1.2vw] bg-[#0081bb] hover:bg-[#006ca3] text-white font-black rounded-[0.8vw] transition-all shadow-[0_1.5vw_4vw_rgba(0,129,195,0.3)] active:scale-95 text-[1.1vw] tracking-wider uppercase">
                        Our Services
                    </button>
                    <button className="px-[3.5vw] py-[1.2vw] bg-[#34495e]/60 hover:bg-[#34495e] border border-white/20 text-white font-black rounded-[0.8vw] transition-all active:scale-95 text-[1.1vw] tracking-wider uppercase">
                        Contact Us
                    </button>
                </div>
            </section>

            {/* Who We Are Title Section */}
            <section className="flex flex-col items-center py-[10vw] mt-[5vw] pb-[0vw] text-center w-full">
                <p style={{ fontSize: '4vw' }} className="text-white font-black tracking-tighter uppercase mb-[2vw]">
                    Who We Are
                </p>
            </section>
            <div className="w-[8vw] h-[0.8vw] bg-[#0081bb] shadow-[0_0_1.5vw_rgba(0,129,187,0.4)]"></div>

        </div>
    );
};

export default AboutPage;

