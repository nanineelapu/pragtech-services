"use client";

import React from 'react';

const CustomerFocus = () => {
    return (
        <section className="flex flex-col items-center mt-[5vw] w-full max-w-[90vw] pb-[8vw]">
            {/* Pill Above Title */}
            <div className="px-[1.2vw] py-[0.6vw] bg-[#0081bb]/10 border border-[#0081bb]/20 rounded-full mb-[2.5vw] flex items-center gap-[0.6vw]">
                {/* Group/Multiple Users Icon */}
                <svg className="w-[1.2vw] h-[1.2vw]  text-[#0081bb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm-2.438-6.197c1.332-1.077 2.438-2.617 2.438-4.803a4 4 0 00-6-3.464" />
                </svg>
                <span className="text-[#0081bb] text-[0.9vw] font-black uppercase tracking-widest">Our Approach</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[3.5vw] font-black text-white tracking-tight mb-[5vw]">
                Customer <span className="text-[#0081bb] relative">
                    Focus
                    <div className="absolute -bottom-[0.8vw] left-[10%] w-[80%] h-[0.4vw] bg-[#0081bb] rounded-full" />
                </span>
            </h2>

            {/* White Card container */}
            <div className="bg-white rounded-[2vw] p-[5vw] shadow-[0_2vw_5vw_rgba(0,0,0,0.1)] w-full">

                {/* Description Paragraph */}
                <p className="text-[1.1vw] text-[#4a5f77] font-medium leading-loose mb-[3.5vw]">
                    Our clients will be given the best there is to offer. Our team of We are dedicated to delivering the highest quality solutions tailored to our clients' needs. Our team of experts meticulously analyzes, researches, and evaluates every project—leaving no detail overlooked. Each solution is the result of careful consideration, weighing all possibilities to ensure it aligns with the client's vision and adds tangible value. We prioritize timely delivery, foster creativity and innovation, and strictly adhere to industry guidelines and professional ethics. Our services consistently meet international standards—while remaining cost-effective and client-focused at every stage.
                </p>

                {/* 2x2 Grid of Option Blocks */}
                <div className="grid grid-cols-2 gap-[1.5vw] mb-[4vw]">

                    {/* Item 1 */}
                    <div className="bg-[#0081bb] rounded-[0.8vw] p-[1.5vw] flex items-center gap-[1.2vw] text-white shadow-[0_0.8vw_2vw_rgba(0,129,187,0.3)] hover:bg-[#006ca3] transition-colors">
                        <svg className="w-[1.6vw] h-[1.6vw] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-[1.05vw] font-medium tracking-wide">Deliver on time with precision</span>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-[#0081bb] rounded-[0.8vw] p-[1.5vw] flex items-center gap-[1.2vw] text-white shadow-[0_0.8vw_2vw_rgba(0,129,187,0.3)] hover:bg-[#006ca3] transition-colors">
                        <svg className="w-[1.6vw] h-[1.6vw] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span className="text-[1.05vw] font-medium tracking-wide">Importance to creativity and innovation</span>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-[#0081bb] rounded-[0.8vw] p-[1.5vw] flex items-center gap-[1.2vw] text-white shadow-[0_0.8vw_2vw_rgba(0,129,187,0.3)] hover:bg-[#006ca3] transition-colors">
                        <svg className="w-[1.6vw] h-[1.6vw] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="text-[1.05vw] font-medium tracking-wide">Comply with industry guidelines</span>
                    </div>

                    {/* Item 4 */}
                    <div className="bg-[#0081bb] rounded-[0.8vw] p-[1.5vw] flex items-center gap-[1.2vw] text-white shadow-[0_0.8vw_2vw_rgba(0,129,187,0.3)] hover:bg-[#006ca3] transition-colors">
                        <svg className="w-[1.6vw] h-[1.6vw] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path strokeLinecap="round" d="M12 2c-3.3 0-6 4.5-6 10s2.7 10 6 10 6-4.5 6-10S15.3 2 12 2z" />
                            <path strokeLinecap="round" d="M2.5 12h19" />
                        </svg>
                        <span className="text-[1.05vw] font-medium tracking-wide">Meet international standards</span>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="text-center mt-[2vw]">
                    <span className="text-[#0f2a4a] text-[1.1vw] font-black tracking-wide">
                        Creative experts solving complex engineering challenges—24/7,{" "}
                    </span>
                    <span className="text-[#0081bb] text-[1.1vw] font-black tracking-wide">
                        with quality you can trust.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default CustomerFocus;
