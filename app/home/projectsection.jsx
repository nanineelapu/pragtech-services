"use client";

import React from 'react';
import Image from 'next/image';

const ProjectSection = ({ px = "4vw", py = "5vw", width = "92%", ...props }) => {
    const projects = [
        {
            title: "Commercial Steel Structure",
            desc: "We now have complete visibility into structural integrity across 100% of steel connections, not just a sample. This allows us to verify every bolt before fabrication.",
            stat: "100%",
            statLabel: "Precision in connections",
            author: "Natalia García Jané",
            role: "Senior Operations Manager",
            logo: "/logo_placeholder.png",
            side: "right"
        },
        {
            title: "Industrial Framework optimization",
            desc: "Our framework detailing allows agents to meet quality bars 50% faster than traditional methods. The speed of iteration is the competitive difference.",
            stat: "50%",
            statLabel: "Faster delivery time",
            author: "Marissa Taylor",
            role: "Manager Product Support",
            logo: "/logo_placeholder.png",
            side: "left"
        }
    ];

    return (
        <section
            className={`bg-[#faf9f6] rounded-[4vw] mt-0 flex flex-col items-start mx-auto self-center ${props.className || ""}`}
            style={{
                paddingLeft: px, paddingRight: px, paddingTop: py, paddingBottom: py,
                width: width,
            }}
            {...props}
        >
            {/* Header Content - Left Aligned */}
            <div className="w-full text-left mb-[6vw]">
                <h2 className="text-[4vw] font-black text-[#153a20] tracking-tighter leading-none">
                    Our <span className="text-[#4dbb6b]">Projects</span>
                </h2>
                <div className="w-[8vw] h-[0.3vw] bg-[#4dbb6b] mt-[1.5vw] rounded-full" />
            </div>

            {/* Projects Container */}
            <div className="flex flex-col gap-[8vw] w-full mb-[6vw]">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row items-center gap-[4vw] w-full ${project.side === 'left' ? 'lg:flex-row-reverse' : ''}`}
                    >
                        {/* Text Content */}
                        <div className="flex-1 flex flex-col gap-[2vw]">
                            {/* Company Logo placeholder */}
                            <div className="h-[2vw] w-fit opacity-80">
                                <span className="text-[1.8vw] font-black text-[#153a20] tracking-tighter">PRAGTECH</span>
                            </div>

                            <p className="text-[2vw] font-bold text-[#153a20] leading-[1.3] tracking-tight">
                                "{project.desc}"
                            </p>

                            {/* Author section */}
                            <div className="flex items-center gap-[1.2vw] mt-[1vw]">
                                <div className="w-[3.5vw] h-[3.5vw] rounded-full bg-slate-200 overflow-hidden relative border border-[#153a20]/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[1.1vw] font-bold text-[#153a20]">{project.author}</span>
                                    <span className="text-[0.9vw] text-[#153a20]/60 font-medium">{project.role}</span>
                                </div>
                            </div>
                        </div>

                        {/* Result Card - The Green Themed Card */}
                        <div className="w-full lg:w-[35vw] aspect-[4/5] lg:aspect-square bg-[#cfe9d5] rounded-[3vw] p-[3vw] flex flex-col relative overflow-hidden group">
                            {/* Top small icon placeholder */}
                            <div className="absolute top-[2vw] right-[2vw] w-[2vw] h-[2vw] rounded-full border border-[#153a20]/20 flex items-center justify-center opacity-40">
                                <svg className="w-[1vw] h-[1vw]" viewBox="0 0 24 24" fill="none" stroke="#153a20">
                                    <path d="M15 10l5 5m0 0l-5 5m5-5H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div className="flex flex-col relative z-10">
                                <span className="text-[6vw] font-black text-[#153a20] leading-none tracking-tighter">{project.stat}</span>
                                <span className="text-[1.2vw] font-bold text-[#153a20]/70 mt-[1vw] max-w-[80%] leading-tight">
                                    {project.statLabel}
                                </span>
                            </div>

                            {/* 3D Illustration placeholder - using a placeholder image for steel components */}
                            <div className="mt-auto relative h-[15vw] w-full transform group-hover:scale-105 transition-transform duration-700">
                                <div className="absolute bottom-0 right-0 w-[18vw] h-[18vw] bg-black/5 rounded-[2vw] rotate-6 border border-black/5" />
                                <div className="absolute bottom-[2vw] right-[2vw] w-[18vw] h-[18vw] bg-white/20 backdrop-blur-sm rounded-[2vw] -rotate-3 border border-white/20 flex items-center justify-center text-[#153a20]/20 text-[4vw] font-black">
                                    STEEL
                                </div>
                            </div>

                            {/* Learn More link */}
                            <div className="absolute bottom-[2.5vw] right-[3vw] flex items-center gap-[0.5vw] text-[#153a20] font-bold text-[1vw] opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>Read more</span>
                                <div className="w-[1.8vw] h-[1.8vw] bg-[#153a20]/10 rounded-full flex items-center justify-center">
                                    <svg className="w-[1vw] h-[1vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="w-full flex justify-center mt-[2vw]">
                <button className="flex items-center gap-[1.2vw] px-[4vw] py-[1.5vw] bg-[#153a20] hover:bg-[#1a4a2a] text-white font-black rounded-[5vw] transition-all shadow-xl active:scale-95 text-[1.1vw] tracking-wider uppercase group">
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
            </div>
        </section>
    );
};

export default ProjectSection;
