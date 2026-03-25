"use client";

import React from 'react';

const Technologies = () => {
    const techLogos = [
        { name: "BLUEBEAM", color: "#0078d4" },
        { name: "Tekla", color: "#0f172a" },
        { name: "AUTOCAD", color: "#f44336" },
        { name: "SDS/2", color: "#003b71" },
    ];

    return (
        <section className="bg-navy rounded-[6vw] lg:rounded-[4vw] mt-[8vw] lg:mt-[5vw] p-[8vw] lg:p-[6vw] relative overflow-hidden flex flex-col items-start w-[92%] mx-auto">
            {/* Header Content - Dynamic Row on Mobile */}
            <div className="w-full flex flex-row lg:flex-col items-center lg:items-start gap-[4vw] lg:gap-0 mb-[10vw] lg:mb-[6vw] relative z-10">
                <div className="w-1/2 lg:w-full">
                    <h2 className="text-[7.5vw] lg:text-[4vw] font-black text-white tracking-tighter leading-tight uppercase font-heading">
                        Tech <br className="lg:hidden" /> <span className="text-teal">Stack</span>
                    </h2>
                    <div className="w-[12vw] lg:w-[8vw] h-[0.8vw] lg:h-[0.3vw] bg-teal mt-[2vw] lg:mt-[1.5vw] rounded-full" />
                </div>

                <div className="w-1/2 lg:w-full lg:mt-[1.5vw]">
                    <p className="text-[2.8vw] lg:text-[1.1vw] text-white/50 font-medium max-w-full lg:max-w-[30vw] italic lg:not-italic text-right lg:text-left font-body">
                        Leveraging advanced industrial tools for structural precision.
                    </p>
                </div>
            </div>

            {/* Logos Grid - 2x2 for Mobile, 4x1 for Laptop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[4vw] lg:gap-[2vw] w-full relative z-10">
                {techLogos.map((tech, index) => (
                    <div
                        key={index}
                        className="bg-[#faf9f6] rounded-[4vw] lg:rounded-[2vw] h-[25vw] lg:h-[12vw] flex flex-col items-center justify-center p-[4vw] lg:p-[2vw] shadow-2xl transition-all duration-500 hover:scale-[1.05] group"
                    >
                        <div className="text-center overflow-hidden w-full">
                            <span
                                className="text-[4.5vw] lg:text-[2.2vw] font-black tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity block truncate px-2 font-heading"
                                style={{ color: tech.color }}
                            >
                                {tech.name}
                            </span>
                        </div>
                        {/* Interactive underline */}
                        <div className="w-0 group-hover:w-[40%] h-[0.5vw] lg:h-[0.2vw] bg-teal mt-[2vw] lg:mt-[1vw] transition-all duration-300 rounded-full" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Technologies;
