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
            className={`bg-[#555961] rounded-[8vw] lg:rounded-[4vw] overflow-hidden mt-[10vw] lg:mt-[5vw] mx-auto self-center ${props.className || ""}`}
            style={{
                paddingLeft: px, paddingRight: px, paddingTop: py, paddingBottom: py,
                width: width,
            }}
            {...props}
        >
            {/* Top Grid: Hero Image and Typography */}
            <div className="grid grid-cols-12 gap-[8vw] lg:gap-[5vw] items-center mb-[10vw] lg:mb-[5vw]">
                {/* Left side: Square Hero Image with Glass Floating Badges */}
                <div className="col-span-12 lg:col-span-6 relative flex flex-col items-center group px-[5vw] lg:px-0">
                    <div className="relative w-full aspect-square max-w-[75vw] lg:max-w-[32vw] rounded-[6vw] lg:rounded-[2.5vw] overflow-hidden shadow-2xl border border-white/10">
                        <Image
                            src="/steel_hero.png"
                            alt="Structural Engineering"
                            fill
                            className="object-cover brightness-105 transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    {/* Glass Floating Badges */}
                    <div className="absolute left-[2vw] lg:-left-[2vw] bottom-[15%] bg-orange/30 backdrop-blur-md border border-white/20 px-[4vw] lg:px-[2vw] py-[2.5vw] lg:py-[1.2vw] rounded-[3vw] lg:rounded-[1.5vw] shadow-2xl flex items-center gap-[2vw] lg:gap-[1vw] animate-bounce-slow z-10">
                        <span className="text-orange text-[6vw] lg:text-[2.5vw] font-black leading-none tracking-tighter">5x</span>
                        <span className="text-orange/90 text-[2vw] lg:text-[0.8vw] font-bold uppercase tracking-widest leading-none">Efficiency <br /> In Workload</span>
                    </div>

                    <div className="absolute right-[2vw] lg:-right-[2vw] top-[20%] bg-teal/30 backdrop-blur-md border border-white/20 px-[4vw] lg:px-[2vw] py-[2.5vw] lg:py-[1.2vw] rounded-[3vw] lg:rounded-[1.5vw] shadow-2xl flex items-center gap-[2vw] lg:gap-[1vw] animate-bounce-delayed z-10">
                        <span className="text-teal text-[6vw] lg:text-[2.5vw] font-black leading-none tracking-tighter">100%</span>
                        <span className="text-teal/90 text-[2vw] lg:text-[0.8vw] font-bold uppercase tracking-widest leading-none">Precision <br /> Guaranteed</span>
                    </div>
                </div>

                {/* Right side: Bold Typography Section */}
                <div className="col-span-12 lg:col-span-6 flex flex-col gap-[4vw] lg:gap-[2vw] text-center lg:text-left items-center lg:items-start">
                    <h1 className="text-white text-[8vw] lg:text-[4vw] font-black leading-[1.1] tracking-tighter">
                        Elevate the standard for <br className="lg:hidden" /> every <br className="hidden xl:block" /> structural solution.
                    </h1>
                    <p className="text-white/70 text-[3.8vw] lg:text-[1.2vw] font-medium leading-relaxed max-w-[85vw] lg:max-w-[35vw]">
                        Pragtech Ltd is a UK-based steel detailing company providing high-quality structural detailing
                        services to contractors, fabricators, and engineering firms worldwide
                    </p>
                    <div className="flex gap-[2vw] lg:gap-[1vw] mt-[2vw] lg:mt-[1vw]">
                        <div className="w-[12vw] lg:w-[4vw] h-[1.2vw] lg:h-[0.4vw] bg-teal rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Split Content with Right-Aligned "Root" Cards */}
            <div className="grid grid-cols-12 gap-[8vw] lg:gap-[4vw] w-full items-start pt-[10vw] lg:pt-[5vw] border-t border-white/10">
                {/* Left side description */}
                <div className="col-span-12 lg:col-span-7 flex flex-col gap-[4vw] lg:gap-[2vw] text-center lg:text-left items-center lg:items-start">
                    <h3 className="text-white text-[6vw] lg:text-[2vw] font-bold tracking-tight">
                        Precision Engineering Meets <br /> Modern Technology
                    </h3>
                    <p className="text-white/60 text-[3.8vw] lg:text-[1.1vw] leading-relaxed font-medium max-w-[85vw] lg:max-w-full">
                        Our integrated approach combines decades of practical expertise with cutting-edge digital oversight.
                        We don't just detail steel; we architect the backbone of modern infrastructure with a
                        relentless focus on safety and fabricability.
                    </p>
                    <div className="flex gap-[2vw] lg:gap-[1vw] mt-[3vw] lg:mt-[1.5vw]">
                        <button className="px-[8vw] py-[3vw] lg:px-[2.5vw] lg:py-[1vw] bg-teal text-navy font-black rounded-[10vw] lg:rounded-[5vw] text-[3.5vw] lg:text-[1vw] hover:bg-white transition-all shadow-lg hover:shadow-white/10">
                            View Our Tech Stack
                        </button>
                    </div>
                </div>

                {/* Right side "Root" aligned cards */}
                <div className="col-span-12 lg:col-span-5 flex flex-col items-center lg:items-end gap-[4vw] lg:gap-[1.5vw] [--offset-multiplier:0] lg:[--offset-multiplier:1]">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group bg-white/5 backdrop-blur-lg border border-white/10 p-[5vw] lg:p-[2vw] rounded-[5vw] lg:rounded-[2vw] w-full lg:max-w-[90%] flex items-center justify-between hover:bg-white/10 transition-all cursor-default overflow-hidden relative"
                            style={{ marginRight: `calc(var(--offset-multiplier, 0) * ${index * 2}vw)` }}
                        >
                            <div className="flex flex-col">
                                <span className="text-white text-[7vw] lg:text-[2.5vw] font-black leading-tight tracking-tighter">{stat.value}</span>
                                <span className="text-white/50 text-[3vw] lg:text-[1vw] font-bold uppercase tracking-widest">{stat.title}</span>
                            </div>
                            <div className="text-right">
                                <p className="text-white/40 text-[2.5vw] lg:text-[0.8vw] font-medium leading-normal">{stat.desc}</p>
                            </div>
                            {/* Accent line for "root" structure */}
                            <div className="absolute left-0 top-0 bottom-0 w-[1vw] lg:w-[0.3vw] bg-teal scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
