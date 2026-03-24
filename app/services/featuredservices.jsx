"use client";

import React, { useState } from 'react';

const featuredData = [
    {
        id: 1,
        badge: "Service 1 of 5",
        title: "STRUCTURAL STEEL DETAILING",
        desc: "At Pragmatic Technical Services, our team of highly skilled detailers manages projects of any size and complexity with high precision.",
    },
    {
        id: 2,
        badge: "Service 2 of 5",
        title: "MISC STEEL DETAILING",
        desc: "At Pragmatic Technical Services, we deliver comprehensive detailing solutions for gratings, ladders, and other miscellaneous steel elements.",
    },
    {
        id: 3,
        badge: "Service 3 of 5",
        title: "CONNECTION DESIGN",
        desc: "We provide expert steel connection design through our engineering partners worldwide, ensuring timely and reliable delivery.",
    },
    {
        id: 4,
        badge: "Service 4 of 5",
        title: "INDUSTRIAL STEEL DETAILING",
        desc: "We provide specialized steel detailing for industrial facilities, including warehouses and manufacturing plants.",
    },
    {
        id: 5,
        badge: "Service 5 of 5",
        title: "BIM SERVICES",
        desc: "At Pragmatic Technical Services, we harness the power of 3D digital models for superior coordination across all trades.",
    }
];

const FeaturedServices = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Starting at Service 3 (middle) as per image

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % featuredData.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + featuredData.length) % featuredData.length);

    const activeItem = featuredData[activeIndex];

    return (
        <section className="relative bg-[#172635] py-[6vw] px-[2vw] flex flex-col items-center overflow-hidden font-sans">
            {/* White Rounded Container */}
            <div className="relative z-10 w-full max-w-[95vw] lg:max-w-[1300px] bg-white rounded-[3rem] p-[4vw] shadow-[0_2rem_5rem_rgba(0,0,0,0.6)] flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-[4vw]">
                    <h2 className="text-[#172635] text-[3.2vw] font-black tracking-tight leading-tight">
                        Featured <span className="text-[#0fb2f6]">Services</span>
                    </h2>
                    <p className="text-gray-500 text-[1.1vw] font-medium mt-[0.5vw]">
                        Explore our most popular service offerings
                    </p>
                </div>

                {/* Slider Component */}
                <div className="relative w-full flex items-center justify-between gap-[4vw] px-[2vw]">

                    {/* Navigation Arrows - Using absolute positioning for better alignment like the image */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 z-20 w-[3.5vw] h-[3.5vw] rounded-full bg-[#0082c9] hover:bg-[#0070a8] text-white flex items-center justify-center transition-all shadow-lg -translate-x-1/2"
                    >
                        <svg className="w-[1.5vw] h-[1.5vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Left: Main Placeholder Image (Black Background) */}
                    <div className="flex-1 aspect-4/3 bg-black rounded-3xl shadow-inner relative overflow-hidden transition-all duration-500">
                        {/* Overlay to signify "Black Background Temporarily" */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-gray-700 font-bold text-[1vw] uppercase tracking-widest">{activeItem.title} Image</span>
                        </div>
                    </div>

                    {/* Right: Content Section */}
                    <div className="flex-1 flex flex-col items-start text-left px-[1vw]">
                        {/* Badge */}
                        <div className="px-[1.2vw] py-[0.4vw] rounded-full bg-[#0fb2f6]/10 border border-[#0fb2f6]/20 mb-[1.5vw]">
                            <span className="text-[#0fb2f6] text-[0.85vw] font-bold tracking-wide uppercase">
                                {activeItem.badge}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[#172635] text-[3.5vw] font-black leading-tight mb-[1.2vw] uppercase">
                            {activeItem.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-[1.1vw] font-medium leading-relaxed mb-[2.5vw] max-w-[32vw]">
                            {activeItem.desc}
                        </p>

                        {/* Action Button */}
                        <button className="px-[2.5vw] py-[0.9vw] bg-[#0082c9] hover:bg-[#0070a8] text-white text-[1vw] font-bold rounded-lg flex items-center gap-[0.8vw] shadow-lg transition-all group active:scale-95">
                            LEARN MORE
                            <svg className="w-[1.2vw] h-[1.2vw] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 z-20 w-[3.5vw] h-[3.5vw] rounded-full bg-[#0082c9] hover:bg-[#0070a8] text-white flex items-center justify-center transition-all shadow-lg translate-x-1/2"
                    >
                        <svg className="w-[1.5vw] h-[1.5vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </div>

                {/* Page Indicator Bar */}
                <div className="w-[3.5vw] h-[0.6vw] bg-[#0082c9] rounded-full mt-[4vw] mb-[4vw]" />

                {/* Bottom Thumbnails */}
                <div className="flex items-center gap-[1.2vw] w-full justify-center px-[2vw]">
                    {featuredData.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => setActiveIndex(index)}
                            className={`flex-1 aspect-video rounded-[0.8rem] cursor-pointer transition-all duration-300 relative overflow-hidden
                                ${activeIndex === index
                                    ? 'border-[0.25vw] border-[#0fb2f6] shadow-[0_0_1.5vw_rgba(15,178,246,0.3)] scale-105'
                                    : 'border-[0.1vw] border-gray-200 opacity-60 hover:opacity-100 hover:border-[#0fb2f6]/40'
                                }
                            `}
                        >
                            <div className="absolute inset-0 bg-black flex items-center justify-center px-2">
                                <span className={`text-[0.6vw] font-black uppercase text-center leading-none ${activeIndex === index ? 'text-[#0fb2f6]' : 'text-gray-600'}`}>
                                    {item.title.split(' ')[0]}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedServices;