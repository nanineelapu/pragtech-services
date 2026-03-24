"use client";

import React from 'react';

const Technologies = () => {
    const techLogos = [
        { name: "BLUEBEAM", color: "#0078d4" },
        { name: "Tekla", color: "#000000" },
        { name: "AUTOCAD", color: "#f44336" },
        { name: "SDS/2", color: "#003b71" },
    ];

    return (
        <section className="bg-[#1a2c3d]  mt-[5vw] p-[6vw] flex flex-col items-center">
            {/* Header Content */}
            <div className="text-center mb-[5vw]">
                <h2 className="text-[4.5vw] font-black text-white tracking-tight">
                    Technology That <span className="text-[#0081c3]">Drives Us</span>
                    <div className="w-[10vw] h-[0.4vw] bg-[#0081c3] mx-auto mt-[1.5vw] rounded-full" />
                </h2>
            </div>

            {/* Logos Grid */}
            <div className="grid grid-cols-4 gap-[3vw] w-full max-w-[90vw]">
                {techLogos.map((tech, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[1.5vw] aspect-16/10 flex items-center justify-center p-[2vw] shadow-[0_0_3vw_rgba(0,129,195,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_1vw_4vw_rgba(255,255,255,0.1)]"
                    >
                        <div className="text-center">
                            {/* Placeholder for actual logo images */}
                            <span
                                className="text-[2.2vw] font-black tracking-tighter"
                                style={{ color: tech.color }}
                            >
                                {tech.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Technologies;
