"use client";

import React from 'react';

const ProjectHero = () => {
    return (
        <section className="flex flex-col items-center justify-start min-h-screen text-center px-[4vw] relative overflow-hidden bg-[#273A4D] pt-[8vw]">
            {/* Background elements are usually images/SVGs, I'll provide the layout structure first */}
            {/* Pill Above Title */}
            <div className="px-[1.5vw] py-[0.5vw] bg-[#0081bb]/10 border border-[#0081bb]/20 rounded-full mb-[3vw] flex items-center gap-[0.5vw] transition-all hover:bg-[#0081bb]/20 cursor-default relative z-10">
                <svg className="w-[1vw] h-[1vw] text-[#0081bb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="text-[#0081bb] text-[0.9vw] font-black uppercase tracking-widest">Our Portfolio</span>
            </div>

            {/* Main Heading Hierarchy */}
            <div className="flex flex-col items-center mb-[3vw] relative z-10">
                <span className="text-[6.5vw] font-black text-white leading-tight tracking-tight uppercase">
                    Our
                </span>
                <h1 className="text-[8.5vw] font-black text-[#0081bb] leading-[0.9] tracking-tighter uppercase">
                    Projects
                </h1>
            </div>

            {/* Subtext */}
            <p className="max-w-[45vw] text-[1.2vw] text-white/80 font-medium leading-relaxed mb-[4vw]">
                Explore our diverse portfolio of successful steel detailing projects. From stadiums to hospitals, we bring precision and excellence to every structure.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-[1.5vw] mb-[6vw]">
                <button className="px-[3vw] py-[1.2vw] bg-[#0081bb] hover:bg-[#006ca3] text-white font-black rounded-[0.8vw] transition-all shadow-[0_1.5vw_4vw_rgba(0,129,195,0.3)] active:scale-95 text-[1.1vw] tracking-wide uppercase">
                    View All Projects
                </button>
                <button className="px-[3vw] py-[1.2vw] bg-[#34495e]/60 hover:bg-[#34495e] border border-white/10 text-white font-black rounded-[0.8vw] transition-all active:scale-95 text-[1.1vw] tracking-wide uppercase">
                    Start Your Project
                </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-[1.5vw] items-center">
                <button className="flex items-center gap-[0.8vw] px-[2vw] py-[0.8vw] bg-[#0081bb] text-white font-black rounded-[0.8vw] text-[0.9vw] uppercase tracking-wider shadow-[0_0.8vw_2vw_rgba(0,129,187,0.2)] transition-all hover:-translate-y-[0.2vw]">
                    <svg className="w-[1.2vw] h-[1.2vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    All Projects
                </button>

                <button className="flex items-center gap-[0.8vw] px-[2vw] py-[0.8vw] bg-[#34495e]/40 border border-white/5 text-white/50 font-black rounded-[0.8vw] text-[0.9vw] uppercase tracking-wider transition-all hover:text-white hover:border-white/20 hover:bg-[#34495e]/60">
                    <svg className="w-[1.2vw] h-[1.2vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Structural Steel
                </button>

                <button className="flex items-center gap-[0.8vw] px-[2vw] py-[0.8vw] bg-[#34495e]/40 border border-white/5 text-white/50 font-black rounded-[0.8vw] text-[0.9vw] uppercase tracking-wider transition-all hover:text-white hover:border-white/20 hover:bg-[#34495e]/60">
                    <svg className="w-[1.2vw] h-[1.2vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                    </svg>
                    Miscellaneous
                </button>
            </div>

            {/* Project Gallery Container */}
            <div className="w-full max-w-[90vw] bg-white rounded-[2vw] p-[3vw] mt-[5vw] shadow-[0_2vw_5vw_rgba(0,0,0,0.1)] relative z-10 mb-[8vw]">
                {/* Project Grid */}
                <div className="grid grid-cols-3 gap-[2vw]">
                    {[
                        "BRIDGE",
                        "DECORATIVE HANDRAILS",
                        "COMMERCIAL BUILDING",
                        "INDUSTRIAL BUILDING",
                        "WAREHOUSE",
                        "COMMERCIAL BUILDING"
                    ].map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-[1.2vw] aspect-4/3 bg-[#f8f9fa] border border-gray-100 flex flex-col justify-end shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-[0.5vw]">
                            {/* Placeholder for Project Image */}
                            <div className="absolute inset-0 bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                <span className="text-gray-300 font-bold uppercase tracking-widest text-[1vw]">Project Image</span>
                            </div>

                            {/* Card Content Area - Dark Overlay */}
                            <div className="relative z-10 bg-[#0f2a4a]/90 p-[1.5vw] text-center backdrop-blur-sm transform transition-transform duration-500 group-hover:bg-[#0f2a4a]">
                                <h3 className="text-white font-black text-[1.1vw] uppercase tracking-wider mb-[0.8vw]">
                                    {project}
                                </h3>
                                {/* Signature Blue Underline */}
                                <div className="w-[3vw] h-[0.2vw] bg-[#0081bb] mx-auto rounded-full transition-all duration-500 group-hover:w-[5vw]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    );
};

export default ProjectHero;