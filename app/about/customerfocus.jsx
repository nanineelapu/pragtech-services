"use client";

import React from 'react';

const CustomerFocus = () => {
    return (
        <section className="mx-auto flex w-full max-w-[85vw] flex-col items-center px-4 py-12 pb-16 md:mt-20 md:pb-24">
            {/* Pill Above Title */}
            <div className="mb-6 flex items-center gap-2 rounded-full border border-[#0081bb]/20 bg-[#0081bb]/10 px-4 py-2">
                {/* Group/Multiple Users Icon */}
                <svg className="h-4 w-4 text-[#0081bb] sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm-2.438-6.197c1.332-1.077 2.438-2.617 2.438-4.803a4 4 0 00-6-3.464" />
                </svg>
                <span className="text-xs font-black uppercase tracking-widest text-[#0081bb] sm:text-sm">Our Approach</span>
            </div>

            {/* Main Heading */}
            <h2 className="mb-8 text-center text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Customer <span className="relative text-[#0081bb]">
                    Focus
                    <div className="absolute -bottom-3 left-[10%] h-1.5 w-[80%] rounded-full bg-[#0081bb]" />
                </span>
            </h2>

            {/* White Card container */}
            <div className="w-full rounded-3xl bg-white  shadow-2xl mt-[2vw] sm:p-10 md:p-12 lg:p-14">

                {/* Description Paragraph */}
                <p className="mb-8 text-base font-medium leading-[1.7vw] text-[#0f2a4a] sm:text-lg md:text-xl">
                    Our clients will be given the best there is to offer. Our team of We are dedicated to delivering the highest quality solutions tailored to our clients' needs. Our team of experts meticulously analyzes, researches, and evaluates every project—leaving no detail overlooked. Each solution is the result of careful consideration, weighing all possibilities to ensure it aligns with the client's vision and adds tangible value. We prioritize timely delivery, foster creativity and innovation, and strictly adhere to industry guidelines and professional ethics. Our services consistently meet international standards—while remaining cost-effective and client-focused at every stage.
                </p>

                {/* 2x2 Grid of Option Blocks */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">

                    {/* Item 1 */}
                    <div className="flex items-center gap-4 rounded-xl bg-[#0081bb] p-5 text-white shadow-lg transition-colors hover:bg-[#006ca3] sm:p-6">
                        <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-base font-medium tracking-wide sm:text-lg">Deliver on time with precision</span>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center gap-4 rounded-xl bg-[#0081bb] p-5 text-white shadow-lg transition-colors hover:bg-[#006ca3] sm:p-6">
                        <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span className="text-base font-medium tracking-wide sm:text-lg">Importance to creativity and innovation</span>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center gap-4 rounded-xl bg-[#0081bb] p-5 text-white shadow-lg transition-colors hover:bg-[#006ca3] sm:p-6">
                        <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="text-base font-medium tracking-wide sm:text-lg">Comply with industry guidelines</span>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-center gap-4 rounded-xl bg-[#0081bb] p-5 text-white shadow-lg transition-colors hover:bg-[#006ca3] sm:p-6">
                        <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path strokeLinecap="round" d="M12 2c-3.3 0-6 4.5-6 10s2.7 10 6 10 6-4.5 6-10S15.3 2 12 2z" />
                            <path strokeLinecap="round" d="M2.5 12h19" />
                        </svg>
                        <span className="text-base font-medium tracking-wide sm:text-lg">Meet international standards</span>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="mt-8 text-center sm:mt-10">
                    <span className="text-base font-black tracking-wide text-[#0f2a4a] sm:text-lg lg:text-xl">
                        Creative experts solving complex engineering challenges—24/7,{" "}
                    </span>
                    <span className="text-base font-black tracking-wide text-[#0081bb] sm:text-lg lg:text-xl">
                        with quality you can trust.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default CustomerFocus;
