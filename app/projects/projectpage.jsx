"use client";

import React from 'react';

const projects = [
    { title: "STADIUM INFRASTRUCTURE", category: "Structural", size: "large", id: "01" },
    { title: "COMMERCIAL HUB", category: "Commercial", size: "small", id: "02" },
    { title: "INDUSTRIAL GRID", category: "Industrial", size: "medium", id: "03" },
    { title: "BRIDGE DETAILING", category: "Infrastructure", size: "medium", id: "04" },
    { title: "HEALTHCARE CENTER", category: "Specialized", size: "small", id: "05" },
    { title: "MARITIME FACILITY", category: "Structural", size: "large", id: "06" }
];

const ProjectHero = () => {
    return (
        <div className="w-full bg-[#faf9f6]">
            {/* HERO SECTION - Enhanced with Gradient via Styles */}
            <section
                className="relative w-full min-h-[150vw] lg:min-h-[55vw] flex flex-col items-center pt-[35vw] lg:pt-0 lg:justify-center text-center px-[4vw] lg:px-[5vw] overflow-hidden"
                style={{
                    background: `radial-gradient(circle at center, rgba(77, 187, 107, 0.1) 0%, transparent 70%), linear-gradient(to bottom, #0c1f11 0%, #153a20 50%, #0c1f11 100%)`
                }}
            >
                {/* Background Blueprint Decorative */}
                <div className="absolute inset-0 opacity-[0.1] pointer-events-none select-none">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 20 L100 20 M0 40 L100 40 M0 60 L100 60 M0 80 L100 80 M20 0 L20 100 M40 0 L40 100 M60 0 L60 100 M80 0 L80 100" stroke="#4dbb6b" strokeWidth="0.1" fill="none" />
                    </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center animate-in fade-in slide-in-from-bottom-10 duration-1000 mt-[10vw] lg:mt-0 w-full max-w-[92vw] lg:max-w-[85vw]">
                    <div className="flex items-center gap-[2vw] lg:gap-[1vw] mb-[4vw] lg:mb-[2vw]">
                        <div className="w-[8vw] lg:w-[3vw] h-px bg-[#4dbb6b]" />
                        <span className="text-[#4dbb6b] text-[3vw] lg:text-[1vw] font-black tracking-[0.5vw] uppercase anton-regular">The Blueprint Collection</span>
                        <div className="w-[8vw] lg:w-[3vw] h-px bg-[#4dbb6b]" />
                    </div>

                    <h1 className="text-[15vw] lg:text-[10vw] font-black text-white anton-regular uppercase leading-[0.8] mb-[6vw] lg:mb-[3vw] tracking-tighter">
                        ENGINEERING <br /> <span className="text-[#4dbb6b]">PORTFOLIO</span>
                    </h1>

                    <p className="max-w-[90vw] lg:max-w-[50vw] text-[4.2vw] lg:text-[1.6vw] text-[#faf9f6]/70 eb-garamond italic leading-relaxed mb-[8vw] lg:mb-[5vw]">
                        A testament to structural precision across continents. From intricate industrial grids to landmark commercial skyscrapers, we detail the future of steel.
                    </p>

                    {/* Filter Capsules */}
                    <div className="flex items-center gap-[2vw] lg:gap-[1vw] flex-wrap justify-center px-[4vw]">
                        {['All Projects', 'Structural', 'Miscellaneous', 'Industrial', 'BIM Solutions'].map((filter, i) => (
                            <button key={i} className={`px-[5vw] lg:px-[2vw] py-[2vw] lg:py-[0.8vw] rounded-full text-[3vw] lg:text-[0.8vw] anton-regular uppercase tracking-widest transition-all ${i === 0 ? 'bg-[#4dbb6b] text-[#153a20]' : 'border border-white/20 text-white/60 hover:border-[#4dbb6b] hover:text-white'
                                }`}>
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ASYMMETRICAL MOSAIC GALLERY */}
            <section className="w-full py-[15vw] lg:py-[10vw] px-[4vw] lg:px-[5vw]">
                <div className="grid grid-cols-12 gap-[2vw] lg:gap-[1.5vw] auto-rows-[25vw] lg:auto-rows-[16vw]">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-[2vw] lg:rounded-[1.5vw] bg-white border border-[#153a20]/5 shadow-lg transition-all duration-700 cursor-pointer
                                ${project.size === 'large' ? 'col-span-8 row-span-2' : project.size === 'medium' ? 'col-span-4 row-span-2' : 'col-span-4 row-span-1'}
                            `}
                        >
                            {/* Technical Overlay (Blueprint feel) */}
                            <div className="absolute inset-0 bg-[#153a20] opacity-0 group-hover:opacity-[0.97] transition-all duration-500 z-10 flex flex-col justify-center p-[3vw] lg:p-[2.5vw]">
                                <span className="text-[#4dbb6b] text-[2vw] lg:text-[0.8vw] font-black anton-regular mb-[1vw] lg:mb-[0.8vw]">{project.category}</span>
                                <h3 className="text-[3.5vw] lg:text-[2.2vw] text-white anton-regular uppercase leading-tight mb-[1.5vw] lg:mb-[1.5vw]">
                                    {project.title}
                                </h3>
                                <p className="hidden lg:block text-[1vw] text-white/60 eb-garamond italic mb-[2vw]">
                                    Detailed with 0.001mm precision using TEKLA structures and global BIM standards.
                                </p>
                                <div className="w-fit border-b border-[#4dbb6b] text-[#4dbb6b] anton-regular text-[1.8vw] lg:text-[0.7vw] uppercase tracking-widest pb-[0.2vw]">
                                    Explore →
                                </div>
                            </div>

                            {/* Base Card Info */}
                            <div className="absolute inset-0 flex flex-col justify-end p-[2.5vw] lg:p-[1.8vw] bg-linear-to-t from-black/20 to-transparent">
                                <div className="flex items-center justify-between relative z-0">
                                    <div className="flex flex-col">
                                        <span className="text-[#153a20]/40 text-[1.5vw] lg:text-[0.8vw] anton-regular">{project.id}</span>
                                        <h4 className="text-[2.8vw] lg:text-[1.5vw] text-[#153a20] anton-regular uppercase transition-opacity group-hover:opacity-0 leading-none">
                                            {project.title}
                                        </h4>
                                    </div>
                                    <div className="w-[6vw] lg:w-[2.8vw] h-[6vw] lg:h-[2.8vw] rounded-full border border-[#153a20]/10 flex items-center justify-center text-[#153a20] text-[2.5vw] lg:text-[1.2vw] group-hover:border-[#4dbb6b] transition-all">
                                        ↗
                                    </div>
                                </div>
                            </div>

                            {/* Ghosted Tech Icon in background */}
                            <div className="absolute top-[1.5vw] lg:top-[1.5vw] right-[1.5vw] lg:right-[1.5vw] text-[8vw] lg:text-[6vw] text-[#153a20]/[0.02] anton-regular font-black select-none group-hover:opacity-0 transition-opacity">
                                ◈
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="w-full flex justify-center mt-[12vw] lg:mt-[6vw]">
                    <button className="flex items-center gap-[3vw] lg:gap-[1.2vw] px-[8vw] lg:px-[4vw] py-[3.5vw] lg:py-[1.2vw] bg-[#153a20] text-white rounded-full anton-regular uppercase tracking-[0.2vw] transition-all hover:bg-[#4dbb6b] hover:text-[#153a20] active:scale-95 shadow-xl text-[3.5vw] lg:text-[0.9vw] whitespace-nowrap">
                        View Complete Archive
                        <span className="ml-[1vw] lg:ml-[0.5vw]">↓</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProjectHero;
