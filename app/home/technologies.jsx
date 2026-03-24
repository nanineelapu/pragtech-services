"use client";

import React from 'react';

const Technologies = () => {
    const techLogos = [
        { name: "BLUEBEAM", color: "#0078d4" },
        { name: "Tekla", color: "#153a20" },
        { name: "AUTOCAD", color: "#f44336" },
        { name: "SDS/2", color: "#003b71" },
    ];

    return (
        <section className="bg-[#153a20] rounded-[4vw] mt-[5vw] p-[6vw] relative overflow-hidden flex flex-col items-start w-[92%] mx-auto">
            {/* Custom SVG Arrow Animation Background */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-20">
                <svg width="100%" height="100" viewBox="0 0 1000 100" className="w-full">
                    {/* Central expanding line */}
                    <line x1="500" y1="50" x2="500" y2="50" stroke="#faf9f6" strokeWidth="2">
                        <animate attributeName="x1" from="500" to="0" dur="2s" fill="freeze" begin="0s" repeatCount="indefinite" />
                        <animate attributeName="x2" from="500" to="1000" dur="2s" fill="freeze" begin="0s" repeatCount="indefinite" />
                    </line>
                    {/* Left Arrowhead */}
                    <path d="M500,40 L490,50 L500,60" fill="none" stroke="#faf9f6" strokeWidth="2">
                        <animateTransform attributeName="transform" type="translate" from="0 0" to="-500 0" dur="2s" begin="0s" repeatCount="indefinite" />
                    </path>
                    {/* Right Arrowhead */}
                    <path d="M500,40 L510,50 L500,60" fill="none" stroke="#faf9f6" strokeWidth="2">
                        <animateTransform attributeName="transform" type="translate" from="0 0" to="500 0" dur="2s" begin="0s" repeatCount="indefinite" />
                    </path>
                </svg>
            </div>

            {/* Header Content - Left Aligned */}
            <div className="w-full text-left mb-[6vw] relative z-10">
                <h2 className="text-[4vw] font-black text-white tracking-tighter leading-none">
                    Technology That <br /> <span className="text-[#4dbb6b]">Drives Us</span>
                </h2>
                <div className="w-[8vw] h-[0.3vw] bg-[#4dbb6b] mt-[1.5vw] rounded-full" />
                <p className="text-[1.1vw] text-white/50 font-medium mt-[1.5vw] max-w-[30vw]">
                    Leveraging the industry's most advanced tools to deliver unparalleled precision.
                </p>
            </div>

            {/* Logos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2vw] w-full relative z-10">
                {techLogos.map((tech, index) => (
                    <div
                        key={index}
                        className="bg-[#faf9f6] rounded-[2vw] h-[12vw] flex flex-col items-center justify-center p-[2vw] shadow-2xl transition-all duration-500 hover:scale-[1.05] group"
                    >
                        <div className="text-center">
                            <span
                                className="text-[2.2vw] font-black tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity"
                                style={{ color: tech.color }}
                            >
                                {tech.name}
                            </span>
                        </div>
                        {/* Interactive underline */}
                        <div className="w-0 group-hover:w-[40%] h-[0.2vw] bg-[#4dbb6b] mt-[1vw] transition-all duration-300 rounded-full" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Technologies;
