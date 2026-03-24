"use client";

import React from 'react';

const ContctPage = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-[4vw] relative overflow-hidden bg-[#273A4D] pt-[6vw]">
            {/* Pill Above Title */}
            <div className="px-[1.5vw] py-[0.5vw] bg-[#0081bb]/10 border border-[#0081bb]/20 rounded-full mb-[3vw] flex items-center gap-[0.5vw] transition-all hover:bg-[#0081bb]/20 cursor-default relative z-10">
                <svg className="w-[1.2vw] h-[1.2vw] text-[#0081bb]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-[#0081bb] text-[0.9vw] font-black uppercase tracking-widest">Get In Touch</span>
            </div>

            {/* Main Heading Hierarchy */}
            <h1 className="text-[9.5vw] font-black leading-[1.1] tracking-tighter mb-[3.5vw] relative z-10">
                <span className="text-white">Contact</span>
                <span className="text-[#0081bb] ml-[1.5vw]">Us</span>
            </h1>

            {/* Subtext */}
            <p className="max-w-[48vw] text-[1.2vw] text-white/90 font-medium leading-[1.8] mb-[4.5vw] relative z-10 mx-auto">
                Let's discuss your steel detailing project and bring your vision to life. We're here to help with expertise and precision.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-[2vw] relative z-10">
                <button className="px-[3.5vw] py-[1.2vw] bg-[#0081bb] hover:bg-[#006ca3] text-white font-black rounded-[0.8vw] transition-all shadow-[0_1.5vw_4vw_rgba(0,129,195,0.4)] active:scale-95 text-[1.1vw] tracking-wider uppercase">
                    Send Message
                </button>
                <button className="px-[3.5vw] py-[1.2vw] bg-[#34495e]/60 hover:bg-[#34495e] border border-white/20 text-white font-black rounded-[0.8vw] transition-all active:scale-95 text-[1.1vw] tracking-wider uppercase">
                    Call Us Now
                </button>
            </div>
        </section>
    );
};

export default ContctPage;
