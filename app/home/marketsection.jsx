"use client";

import React from 'react';
import Image from 'next/image';

const MarketSection = ({ px = "3.5vw", py = "3vw", width = "80%", height = "auto", ...props }) => {
    const markets = [
        {
            title: "STRUCTURAL STEEL DETAILING",
            desc: "Our team of detailers can handle projects of any size and complexity.",
            image: "/structural_detailing.png",
            overlay: "bg-black/60",
        },
        {
            title: "MISC STEEL DETAILING",
            desc: "Our steel detailing services including Grating, Stairs, Handrails, Ladders, Girts, Canopies, Gates etc.",
            image: "/misc_detailing.png",
            overlay: "bg-[#0081c3]/40 bg-gradient-to-t from-[#0081c3]/80 to-transparent",
            showLearnMore: true,
        },
        {
            title: "CONNECTION DESIGN",
            desc: "Pragmatic provides connection design service throughout multiple countries with a timely delivery.",
            image: "/connection_design.png",
            overlay: "bg-black/60",
        },
    ];

    return (
        <section
            className={`bg-white rounded-[4vw] mt-[5vw] flex flex-col items-center mx-auto self-center ${props.className || ""}`}
            style={{
                paddingLeft: px, paddingRight: px, paddingTop: py, paddingBottom: py,
                width: width,
                height: height
            }}
            {...props}
        >
            {/* Header Content */}
            <div className="text-center mb-[4vw] mt-[5vw]">
                <h2 className="text-[3vw] font-black text-[#0f2a4a] tracking-tight">
                    Markets We <span className="text-[#0081c3]">Serve</span>
                </h2>
                <p className="text-[1.1vw] max-w-[40vw] mx-auto mt-[1vw] text-[#2e4a6b] font-medium opacity-80 leading-relaxed">
                    Delivering world-class steel detailing and engineering solutions across diverse industries
                </p>
                {/* Accent Line */}
                <div className="w-[8vw] h-[0.3vw] bg-[#0081c3] mx-auto mt-[2vw] rounded-full" />
            </div>

            {/* Markets Grid */}
            <div className="grid grid-cols-3 gap-[2vw] w-full mb-[4vw]">
                {markets.map((market, index) => (
                    <div
                        key={index}
                        className="group relative h-[22vw] rounded-[1.8vw] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_1.5vw_4vw_rgba(0,0,0,0.15)]"
                    >
                        {/* Background Image */}
                        <Image
                            src={market.image}
                            alt={market.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Semi-transparent Overlay */}
                        <div className={`absolute inset-0 ${market.overlay}`} />

                        {/* Top-left characteristic bracket/icon */}
                        <div className="absolute top-[2vw] left-[2vw] w-[1.5vw] h-[1.5vw] border-l-[0.2vw] border-t-[0.2vw] border-[#0081c3]" />

                        {/* Text Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-[2.5vw]">
                            <h3 className="text-[1.4vw] font-black text-white leading-tight mb-[0.8vw] tracking-wide uppercase">
                                {market.title}
                            </h3>
                            <p className="text-[0.9vw] text-white/90 font-medium leading-relaxed max-w-[90%]">
                                {market.desc}
                            </p>

                            {market.showLearnMore && (
                                <button className="mt-[1vw] text-[0.85vw] font-bold text-white flex items-center gap-[0.5vw] hover:underline transition-all">
                                    Learn More
                                    <svg className="w-[1vw] h-[1vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <button className="flex items-center gap-[1vw] px-[3vw] py-[1.2vw] bg-[#0081c3] hover:bg-[#006ca3] text-white font-black rounded-[2.5vw] transition-all shadow-[0_1vw_3vw_rgba(0,129,195,0.3)] active:scale-95 text-[1.1vw] tracking-wide">
                View All Services
                <svg className="w-[1.2vw] h-[1.2vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </section>
    );
};

export default MarketSection;
