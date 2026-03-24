"use client";

import React from 'react';
import Image from 'next/image';

const ProjectSection = ({ px = "4vw", py = "5vw", width = "92%", ...props }) => {
    const projects = [
        {
            title: "Commercial Steel Structure",
            desc: "We now have complete visibility into structural integrity across 100% of steel connections, not just a sample.",
            stat: "100%",
            statLabel: "Precision",
            author: "Natalia García Jané",
            role: "Senior Ops Manager",
            logo: "/logo_placeholder.png",
            side: "right"
        },
        {
            title: "Industrial Framework optimization",
            desc: "Our framework detailing allows agents to meet quality bars 50% faster than traditional methods.",
            stat: "50%",
            statLabel: "Faster",
            author: "Marissa Taylor",
            role: "Product Support",
            logo: "/logo_placeholder.png",
            side: "left"
        }
    ];

    return (
        <section
            className={`bg-[#faf9f6] rounded-[6vw] lg:rounded-[4vw] mt-0 flex flex-col items-start mx-auto self-center ${props.className || ""}`}
            style={{
                paddingLeft: px, paddingRight: px, paddingTop: py, paddingBottom: py,
                width: width,
            }}
            {...props}
        >
            {/* Header Content - Left Aligned */}
            <div className="w-full text-left mb-[10vw] lg:mb-[6vw] px-[2vw] lg:px-0">
                <h2 className="text-[12vw] lg:text-[4vw] font-black text-[#153a20] tracking-tighter leading-none uppercase">
                    Our <span className="text-[#4dbb6b]">Projects</span>
                </h2>
                <div className="w-[15vw] lg:w-[8vw] h-[0.8vw] lg:h-[0.3vw] bg-[#4dbb6b] mt-[2.5vw] lg:mt-[1.5vw] rounded-full" />
            </div>

            {/* Projects Container */}
            <div className="flex flex-col gap-[12vw] lg:gap-[8vw] w-full mb-[12vw] lg:mb-[6vw]">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex flex-row lg:flex-row items-center gap-[4vw] w-full ${project.side === 'left' ? 'flex-row-reverse lg:flex-row-reverse' : ''}`}
                    >
                        {/* Text Content - 55% width on mobile */}
                        <div className="w-[55%] lg:flex-1 flex flex-col gap-[3vw] lg:gap-[2vw]">
                            {/* Company Logo placeholder */}
                            <div className="h-[4vw] lg:h-[2vw] w-fit opacity-80">
                                <span className="text-[4vw] lg:text-[1.8vw] font-black text-[#153a20] tracking-tighter uppercase">PRAGTECH</span>
                            </div>

                            <p className="text-[3.8vw] lg:text-[2vw] font-bold text-[#153a20] leading-[1.3] tracking-tight text-left">
                                "{project.desc}"
                            </p>

                            {/* Author section */}
                            <div className="flex items-center gap-[2.5vw] lg:gap-[1.2vw] mt-[2vw] lg:mt-[1vw]">
                                <div className="w-[8vw] h-[8vw] lg:w-[3.5vw] lg:h-[3.5vw] rounded-full bg-slate-200 overflow-hidden relative border border-[#153a20]/10 shrink-0">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400" />
                                </div>
                                <div className="flex flex-col truncate">
                                    <span className="text-[2.8vw] lg:text-[1.1vw] font-bold text-[#153a20] truncate">{project.author.split(' ')[0]}</span>
                                    <span className="text-[2.2vw] lg:text-[0.9vw] text-[#153a20]/60 font-medium truncate">{project.role.split(' ')[0]}</span>
                                </div>
                            </div>
                        </div>

                        {/* Result Card - 45% width on mobile */}
                        <div className="w-[45%] lg:w-[35vw] aspect-[4/5] lg:aspect-square bg-[#cfe9d5] rounded-[4vw] lg:rounded-[3vw] p-[4vw] lg:p-[3vw] flex flex-col relative overflow-hidden group">
                            {/* Top small icon placeholder */}
                            <div className="absolute top-[3vw] lg:top-[2vw] right-[3vw] lg:right-[2vw] w-[5vw] lg:w-[2vw] h-[5vw] lg:h-[2vw] rounded-full border border-[#153a20]/20 flex items-center justify-center opacity-40">
                                <svg className="w-[2.5vw] lg:w-[1vw] h-[2.5vw] lg:h-[1vw]" viewBox="0 0 24 24" fill="none" stroke="#153a20">
                                    <path d="M15 10l5 5m0 0l-5 5m5-5H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div className="flex flex-col relative z-10">
                                <span className="text-[10vw] lg:text-[6vw] font-black text-[#153a20] leading-none tracking-tighter">{project.stat}</span>
                                <span className="text-[3vw] lg:text-[1.2vw] font-bold text-[#153a20]/70 mt-[1.5vw] lg:mt-[1vw] max-w-[90%] leading-tight uppercase">
                                    {project.statLabel}
                                </span>
                            </div>

                            {/* 3D Illustration placeholder */}
                            <div className="mt-auto relative h-[25vw] lg:h-[15vw] w-full transform group-hover:scale-105 transition-transform duration-700">
                                <div className="absolute bottom-0 right-0 w-[25vw] lg:w-[18vw] h-[25vw] lg:h-[18vw] bg-black/5 rounded-[2vw] rotate-6 border border-black/5" />
                                <div className="absolute bottom-[2vw] lg:bottom-[2vw] right-[2vw] lg:right-[2vw] w-[25vw] lg:w-[18vw] h-[25vw] lg:h-[18vw] bg-white/20 backdrop-blur-sm rounded-[2vw] -rotate-3 border border-white/20 flex items-center justify-center text-[#153a20]/20 text-[5vw] lg:text-[4vw] font-black">
                                    STEEL
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="w-full flex justify-center mt-[4vw] lg:mt-[2vw]">
                <button className="flex items-center gap-[3vw] lg:gap-[1.2vw] px-[10vw] lg:px-[4vw] py-[4vw] lg:py-[1.5vw] bg-[#153a20] hover:bg-[#1a4a2a] text-white font-black rounded-full lg:rounded-[5vw] transition-all shadow-xl active:scale-95 text-[4vw] lg:text-[1.1vw] tracking-wider uppercase group">
                    Explore All
                    <svg
                        className="w-[5vw] lg:w-[1.4vw] h-[5vw] lg:h-[1.4vw] transition-transform duration-300 group-hover:translate-x-[0.3vw]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default ProjectSection;
