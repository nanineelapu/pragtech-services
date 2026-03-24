"use client";

import React from 'react';
import Image from 'next/image';

const FirstSection = ({ px = "4vw", py = "6vw", width = "92%", ...props }) => {
    const stats = [
        {
            value: "210+",
            title: "Global Clients",
            desc: "Trusted worldwide",
            borderColor: "border-blue-400",
        },
        {
            value: "3000+",
            title: "Projects Done",
            desc: "Successfully delivered",
            borderColor: "border-purple-400",
        },
        {
            value: "180+",
            title: "Engineers",
            desc: "Skilled professionals",
            borderColor: "border-orange-400",
        }
    ];

    return (
        <section
            className={`bg-[#153a20] rounded-[4vw] overflow-hidden mt-[5vw] mx-auto self-center ${props.className || ""}`}
            style={{
                paddingLeft: px, paddingRight: px, paddingTop: py, paddingBottom: py,
                width: width,
            }}
            {...props}
        >
            {/* Top Grid: Hero Image and Typography */}
            <div className="grid grid-cols-12 gap-[5vw] items-center mb-[5vw]">
                {/* Left side: Square Hero Image with Glass Floating Badges */}
                <div className="col-span-12 lg:col-span-6 relative flex flex-col items-center group">
                    <div className="relative w-full aspect-square max-w-[32vw] rounded-[2.5vw] overflow-hidden shadow-2xl border border-white/10">
                        <Image
                            src="/steel_hero.png"
                            alt="Structural Engineering"
                            fill
                            className="object-cover brightness-105 transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    {/* Glass Floating Badges */}
                    <div className="absolute left-[-2vw] bottom-[15%] bg-[#faf3d1]/30 backdrop-blur-md border border-white/20 px-[2vw] py-[1.2vw] rounded-[1.5vw] shadow-2xl flex items-center gap-[1vw] animate-bounce-slow z-10">
                        <span className="text-[#faf3d1] text-[2.5vw] font-black leading-none tracking-tighter">5x</span>
                        <span className="text-[#faf3d1]/90 text-[0.8vw] font-bold uppercase tracking-widest leading-none">Efficiency <br /> In Workload</span>
                    </div>

                    <div className="absolute right-[-2vw] top-[20%] bg-[#cfe9d5]/30 backdrop-blur-md border border-white/20 px-[2vw] py-[1.2vw] rounded-[1.5vw] shadow-2xl flex items-center gap-[1vw] animate-bounce-delayed z-10">
                        <span className="text-[#cfe9d5] text-[2.5vw] font-black leading-none tracking-tighter">100%</span>
                        <span className="text-[#cfe9d5]/90 text-[0.8vw] font-bold uppercase tracking-widest leading-none">Precision <br /> Guaranteed</span>
                    </div>
                </div>

                {/* Right side: Bold Typography Section */}
                <div className="col-span-12 lg:col-span-6 flex flex-col gap-[2vw] text-left">
                    <h1 className="text-white text-[4vw] font-black leading-[1.1] tracking-tighter">
                        Elevate the standard for every <br className="hidden xl:block" /> structural solution.
                    </h1>
                    <p className="text-white/70 text-[1.2vw] font-medium leading-relaxed max-w-[35vw]">
                        AI-driven detailing and structural engineering built for high-scale demands.
                        Automatically optimize designs, identify structural gaps, and trigger real-time precision audits.
                    </p>
                    <div className="flex gap-[1vw] mt-[1vw]">
                        <div className="w-[4vw] h-[0.4vw] bg-[#cfe9d5] rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Split Content with Right-Aligned "Root" Cards */}
            <div className="grid grid-cols-12 gap-[4vw] w-full items-start pt-[5vw] border-t border-white/10">
                {/* Left side description */}
                <div className="col-span-12 lg:col-span-7 flex flex-col gap-[2vw]">
                    <h3 className="text-white text-[2vw] font-bold tracking-tight">
                        Precision Engineering Meets <br /> Modern Technology
                    </h3>
                    <p className="text-white/60 text-[1.1vw] leading-relaxed font-medium">
                        Our integrated approach combines decades of practical expertise with cutting-edge digital oversight.
                        We don't just detail steel; we architect the backbone of modern infrastructure with a
                        relentless focus on safety and fabricability.
                    </p>
                    <div className="flex gap-[1vw] mt-[1.5vw]">
                        <button className="px-[2.5vw] py-[1vw] bg-[#cfe9d5] text-[#153a20] font-black rounded-[5vw] text-[1vw] hover:bg-white transition-all shadow-lg hover:shadow-white/10">
                            View Our Tech Stack
                        </button>
                    </div>
                </div>

                {/* Right side "Root" aligned cards */}
                <div className="col-span-12 lg:col-span-5 flex flex-col items-end gap-[1.5vw]">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group bg-white/5 backdrop-blur-lg border border-white/10 p-[2vw] rounded-[2vw] w-full flex items-center justify-between hover:bg-white/10 transition-all cursor-default overflow-hidden relative"
                            style={{ marginRight: `${index * 2}vw`, maxWidth: "90%" }}
                        >
                            <div className="flex flex-col">
                                <span className="text-white text-[2.5vw] font-black leading-tight tracking-tighter">{stat.value}</span>
                                <span className="text-white/50 text-[1vw] font-bold uppercase tracking-widest">{stat.title}</span>
                            </div>
                            <div className="text-right">
                                <p className="text-white/40 text-[0.8vw] font-medium leading-normal">{stat.desc}</p>
                            </div>
                            {/* Accent line for "root" structure */}
                            <div className="absolute left-0 top-0 bottom-0 w-[0.3vw] bg-[#cfe9d5] scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
