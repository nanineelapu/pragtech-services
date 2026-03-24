"use client";

import React from 'react';
import Image from 'next/image';

const ProjectSection = ({ px = "3.5vw", py = "3vw", width = "80%", height = "auto", ...props }) => {
    const projects = [
        {
            title: "Structural Steel - Commercial Building",
            category: "Civil",
            image: "", // Black placeholder
        },
        {
            title: "Industrial Steel Framework",
            category: "Mechanical",
            image: "", // Black placeholder
        },
        {
            title: "Steel Bridge Construction",
            category: "Infrastructure",
            image: "", // Black placeholder
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
            <div className="text-center mb-[4vw]">
                <h2 className="text-[4vw] font-black text-[#0f2a4a] tracking-tight">
                    Our <span className="text-[#0081c3] relative">
                        Projects
                        <div className="absolute -bottom-[0.5vw] left-0 w-full h-[0.3vw] bg-[#0081c3] rounded-full" />
                    </span>
                </h2>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-3 gap-[2.5vw] w-full mb-[4vw]">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative h-[30vw] rounded-[2.5vw] overflow-hidden bg-black flex flex-col items-center justify-center p-[2vw] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_2vw_5vw_rgba(0,0,0,0.2)]"
                    >
                        {/* Overlay/Gradient for text readability (even on black) */}
                        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60 z-10" />

                        {/* Text Content */}
                        <div className="relative z-20 flex flex-col items-center text-center">
                            <h3 className="text-[1.8vw] font-black text-white leading-tight mb-[1vw] tracking-wide max-w-[80%]">
                                {project.title}
                            </h3>

                            {/* Category Pill */}
                            <div className="px-[1.5vw] py-[0.5vw] bg-[#0081bb]/20 border border-[#0081bb]/40 rounded-full">
                                <span className="text-[0.9vw] font-bold text-[#0081bb] uppercase tracking-widest">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        {/* Circular Arrow Button */}
                        <div className="absolute bottom-[2.5vw] z-20">
                            <button className="w-[3.5vw] h-[3.5vw] bg-[#273A4D]/80 hover:bg-[#0081c3] text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-white/20">
                                <svg
                                    className="w-[1.5vw] h-[1.5vw] transform transition-transform duration-300 group-hover:translate-x-[0.2vw]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <button className="flex items-center gap-[1.2vw] px-[4vw] py-[1.5vw] bg-[#0081c3] hover:bg-[#006ca3] text-white font-black rounded-[3vw] transition-all shadow-[0_1.5vw_4vw_rgba(0,129,195,0.3)] active:scale-95 text-[1.2vw] tracking-wider uppercase group">
                View All Projects
                <svg
                    className="w-[1.4vw] h-[1.4vw] transition-transform duration-300 group-hover:translate-x-[0.3vw]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </section>
    );
};

export default ProjectSection;
