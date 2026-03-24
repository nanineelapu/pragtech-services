"use client";

import React from 'react';
import Image from 'next/image';

const MarketSection = ({ px = "4vw", py = "10vw", width = "92%", ...props }) => {
    const markets = [
        {
            title: "STRUCTURAL STEEL",
            desc: "Expert detailing for projects of any size and complexity.",
            image: "/structural_detailing.png",
            pos: { top: "35%", left: "15%" },
            branchDash: "800",
        },
        {
            title: "MISC STEEL",
            desc: "Detailing for Stairs, Handrails, and Ladders.",
            image: "/misc_detailing.png",
            pos: { top: "45%", right: "12%" },
            branchDash: "1000",
        },
        {
            title: "CONNECTION DESIGN",
            desc: "Precise connection design across global projects.",
            image: "/connection_design.png",
            pos: { bottom: "10%", left: "42%" },
            branchDash: "1200",
        },
    ];

    return (
        <section
            className={`bg-white rounded-[4vw] mt-[5vw] relative overflow-hidden flex flex-col items-center mx-auto self-center ${props.className || ""}`}
            style={{
                paddingLeft: px, paddingRight: px, paddingTop: py, paddingBottom: py,
                width: width,
                minHeight: "65vw"
            }}
            {...props}
        >
            {/* Organic SVG Roots Background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <g fill="none" stroke="#153a20" strokeLinecap="round">
                    {/* ROOT 1: To Structural (Upper Left) */}
                    <path d="M500,100 C510,200 450,250 350,300 L150,350" strokeWidth="4" filter="url(#glow)" />
                    {/* Micro-roots for Root 1 */}
                    <path d="M480,180 Q430,220 400,210" strokeWidth="1.5" opacity="0.6" />
                    <path d="M420,240 Q380,270 410,290" strokeWidth="1" opacity="0.4" />
                    <path d="M250,325 Q220,310 180,330" strokeWidth="1.2" opacity="0.5" />

                    {/* ROOT 2: To Misc (Upper Right) */}
                    <path d="M500,100 C520,220 600,300 750,380 L880,450" strokeWidth="4" filter="url(#glow)" />
                    {/* Micro-roots for Root 2 */}
                    <path d="M540,180 Q600,210 630,190" strokeWidth="1.5" opacity="0.6" />
                    <path d="M650,280 Q720,260 700,310" strokeWidth="1" opacity="0.4" />
                    <path d="M780,400 Q830,380 810,430" strokeWidth="1.2" opacity="0.5" />

                    {/* ROOT 3: To Connection (Bottom Middle) */}
                    <path d="M500,100 C480,300 550,500 480,700 L420,900" strokeWidth="4" filter="url(#glow)" />
                    {/* Micro-roots for Root 3 */}
                    <path d="M490,350 Q430,400 380,380" strokeWidth="1.5" opacity="0.6" />
                    <path d="M510,550 Q580,600 550,650" strokeWidth="1" opacity="0.4" />
                    <path d="M450,780 Q400,800 380,750" strokeWidth="1.2" opacity="0.5" />

                    {/* Central Root Mass */}
                    <path d="M500,100 Q490,130 480,150" strokeWidth="6" opacity="0.8" />
                    <path d="M500,100 Q510,130 520,150" strokeWidth="6" opacity="0.8" />
                </g>

                {/* Glowing Nodes at Tips */}
                <circle cx="150" cy="350" r="5" fill="#4dbb6b" filter="url(#glow)" />
                <circle cx="880" cy="450" r="5" fill="#4dbb6b" filter="url(#glow)" />
                <circle cx="420" cy="900" r="5" fill="#4dbb6b" filter="url(#glow)" />
            </svg>

            {/* Header Content (Stays on top) */}
            <div className="text-center mb-[4vw] relative z-10">
                <h2 className="text-[3.5vw] font-black text-[#0f2a4a] tracking-tight whitespace-nowrap">
                    Markets We <span className="text-[#4dbb6b]">Serve</span>
                </h2>
                <div className="w-[6vw] h-[0.3vw] bg-[#4dbb6b] mx-auto mt-[1vw] rounded-full" />
                <p className="text-[1.1vw] max-w-[35vw] mx-auto mt-[1.5vw] text-[#2e4a6b] font-medium opacity-80 leading-relaxed">
                    A multi-dimensional network of engineering excellence spreading across global structures.
                </p>
            </div>

            {/* Market Cards at Tips */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {markets.map((market, index) => (
                    <div
                        key={index}
                        className="absolute pointer-events-auto group transition-all duration-500 hover:scale-[1.05]"
                        style={{
                            ...market.pos,
                            width: "22vw"
                        }}
                    >
                        <div className="relative h-[15vw] rounded-[1.8vw] overflow-hidden shadow-[0_1.5vw_4vw_rgba(21,58,32,0.15)] border border-[#153a20]/10">
                            <Image
                                src={market.image}
                                alt={market.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Theme Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-[#153a20] via-[#153a20]/40 to-transparent" />

                            {/* Text Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-[1.8vw]">
                                <h3 className="text-[1.2vw] font-black text-white leading-tight mb-[0.5vw] uppercase tracking-wide">
                                    {market.title}
                                </h3>
                                <p className="text-[0.8vw] text-white/80 font-medium leading-relaxed max-w-[90%]">
                                    {market.desc}
                                </p>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-[1.2vw] left-[1.2vw] w-[1vw] h-[1vw] border-l-[0.15vw] border-t-[0.15vw] border-[#4dbb6b]" />
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button (Bottom Middle) */}
            <div className="mt-[6vw] relative z-20">
                <button className="flex items-center gap-[1vw] px-[3vw] py-[1.2vw] bg-[#153a20] hover:bg-[#1a4a2a] text-white font-black rounded-[5vw] transition-all shadow-xl active:scale-95 text-[1vw] tracking-wide group">
                    Explore All Markets
                    <div className="w-[1.8vw] h-[1.8vw] bg-white/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <svg className="w-[1vw] h-[1vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </button>
            </div>
        </section>
    );
};

export default MarketSection;

