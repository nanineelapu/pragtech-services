"use client";

import React from 'react';
import Image from 'next/image';

const FirstSection = ({ px = "3.5vw", py = "3vw", width = "80%", height = "auto", ...props }) => {
    const stats = [
        {
            value: "210+",
            title: "Global Clients",
            desc: "Worldwide partnerships",
            icon: (
                <svg className="w-[1.2vw] h-[1.2vw] text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            bgColor: "bg-blue-50",
            borderColor: "border-blue-400",
            circleColor: "bg-blue-100",
        },
        {
            value: "3000+",
            title: "Projects Completed",
            desc: "Successfully delivered",
            icon: (
                <svg className="w-[1.2vw] h-[1.2vw] text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-7h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            bgColor: "bg-purple-50",
            borderColor: "border-purple-400",
            circleColor: "bg-purple-100",
        },
        {
            value: "180+",
            title: "Engineers",
            desc: "Skilled professionals",
            icon: (
                <svg className="w-[1.2vw] h-[1.2vw] text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            bgColor: "bg-orange-50",
            borderColor: "border-orange-400",
            circleColor: "bg-orange-100",
        },
        {
            value: "3+",
            title: "Countries Served",
            desc: "Expanding globally",
            icon: (
                <svg className="w-[1.2vw] h-[1.2vw] text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
            ),
            bgColor: "bg-green-50",
            borderColor: "border-green-400",
            circleColor: "bg-green-100",
        },
        {
            value: "100%",
            title: "Customer Satisfaction",
            desc: "Top-rated service",
            icon: (
                <svg className="w-[1.2vw] h-[1.2vw] text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            bgColor: "bg-teal-50",
            borderColor: "border-teal-400",
            circleColor: "bg-teal-100",
        },
    ];

    const whyChooseUsData = [
        {
            title: "Precise Drawings",
            desc: "Accurate and detailed steel fabrication drawings.",
        },
        {
            title: "AISC Certified Detailer.",
            desc: "Internationally recognized quality management system ensuring excellence.",
        },
        {
            title: "24/7 Support",
            desc: "We're here whenever you'd like to talk.",
        },
    ];

    return (
        <section
            className={`bg-white rounded-[4vw] overflow-hidden flex flex-col gap-[3vw] mt-[5vw] mx-auto self-center ${props.className || ""}`}
            style={{
                paddingLeft: px, paddingRight: px, paddingTop: py, paddingBottom: py,
                width: width,
                height: height
            }}
            {...props}
        >
            {/* Hero Image Section */}
            <div className="relative w-full h-[30vw] rounded-[2.5vw] overflow-hidden shadow-2xl">
                <Image
                    src="/steel_hero.png"
                    alt="Steel Construction Project"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-[3.5vw]">
                    <h1 className="text-white text-[3vw] font-black leading-tight tracking-tight mb-[1vw]">
                        Building Excellence in <br /> Steel Construction
                    </h1>
                    <p className="text-white/90 text-[1.1vw] max-w-[55%] leading-relaxed">
                        With over 15 years of expertise in structural steel detailing, we deliver precision-engineered solutions for commercial, industrial, and infrastructure projects worldwide.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-5 gap-[1.5vw]">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`relative p-[1.5vw] bg-white rounded-[1.2vw] border-t-[0.2vw] ${stat.borderColor} shadow-[0_0.8vw_2.5vw_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 hover:scale-105`}
                    >
                        <div className={`w-[2.8vw] h-[2.8vw] ${stat.bgColor} rounded-[0.8vw] flex items-center justify-center mb-[1vw] relative z-10`}>
                            {stat.icon}
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-[2.2vw] font-black text-[#0f2a4a] leading-tight">
                                {stat.value}
                            </h3>
                            <h4 className="text-[1vw] font-bold text-[#2e4a6b] mt-[0.2vw]">
                                {stat.title}
                            </h4>
                            <p className="text-[0.75vw] text-gray-500 font-medium mt-[0.1vw]">
                                {stat.desc}
                            </p>
                        </div>
                        {/* Decorative background glow */}
                        <div className={`absolute -bottom-[2vw] -right-[2vw] w-[8vw] h-[8vw] ${stat.circleColor} rounded-full opacity-20 blur-2xl pointer-events-none`} />
                    </div>
                ))}
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-[#f0f7fb] rounded-[2vw] p-[3.5vw] flex flex-col items-center gap-[2.5vw]">
                <h2 className="text-[2vw] font-black text-[#0f2a4a] tracking-tight">
                    Why Choose Us for Steel Detailing
                </h2>
                <div className="grid grid-cols-3 gap-[2vw] w-full">
                    {whyChooseUsData.map((item, index) => (
                        <div key={index} className="bg-white p-[2vw] rounded-[1.5vw] shadow-[0_0.6vw_1.5vw_rgba(0,0,0,0.04)] flex flex-col gap-[1vw] transition-all hover:shadow-xl">
                            <div className="w-[3.5vw] h-[3.5vw] flex items-center justify-center bg-transparent">
                                <svg className="w-[3vw] h-[3vw] text-[#0081c3]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-[1.3vw] font-black text-[#0f2a4a]">
                                    {item.title}
                                </h3>
                                <p className="text-[0.95vw] text-[#2e4a6b] leading-relaxed mt-[0.5vw] font-medium opacity-80">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FirstSection;