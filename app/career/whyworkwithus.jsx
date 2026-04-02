"use client";

import React from 'react';

const advantages = [
    {
        title: "PRECISION CULTURE",
        desc: "Master the art of 0.001mm accuracy. We foster an environment where technical perfection is the daily standard.",
        icon: "◈"
    },
    {
        title: "SOFTWARE MASTERY",
        desc: "Advance your expertise in Tekla, SDS/2, and BIM workflows. We provide the latest tools for the highest performance.",
        icon: "⬡"
    },
    {
        title: "GLOBAL PROJECTS",
        desc: "Make your mark on high-integrity industrial and commercial structures across the USA, India, and the UK.",
        icon: "◬"
    }
];

const WhyWorkWithUs = () => {
    return (
        <section className="w-full bg-transparent py-[15vw] lg:py-[10vw] px-[6vw] lg:px-[5vw] flex flex-col items-center">
            {/* Section Header */}
            <div className="flex items-center gap-[3vw] lg:gap-[1vw] mb-[12vw] lg:mb-[6vw]">
                <div className="w-[8vw] lg:w-[3vw] h-px bg-navy/10" />
                <h2 className="text-[8vw] lg:text-[3.5vw] font-black text-navy anton-regular uppercase tracking-tighter">
                    THE PRAGTECH <span className="text-teal">ADVANTAGE</span>
                </h2>
                <div className="w-[8vw] lg:w-[3vw] h-px bg-navy/10" />
            </div>

            {/* Advantages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[6vw] lg:gap-[2.5vw] w-full max-w-[90vw]">
                {advantages.map((adv, i) => (
                    <div
                        key={i}
                        className="group relative bg-white/80 backdrop-blur-sm rounded-[5vw] lg:rounded-[2vw] p-[8vw] lg:p-[3vw] border border-navy/5 shadow-[0_1.5vw_4vw_rgba(15,23,42,0.03)] transition-all duration-500 hover:-translate-y-[0.5vw] hover:shadow-2xl overflow-hidden"
                    >
                        {/* Ghosted Icon */}
                        <div className="absolute top-[2vw] lg:top-[1vw] right-[2vw] lg:right-[1vw] text-[20vw] lg:text-[8vw] text-navy/2 anton-regular pointer-events-none group-hover:text-teal/5 transition-colors">
                            {adv.icon}
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-[7vw] lg:text-[2vw] font-black text-navy anton-regular leading-none mb-[3vw] lg:mb-[1.5vw] uppercase">
                                {adv.title}
                            </h3>
                            <p className="text-[4.2vw] lg:text-[1.2vw] text-navy/70 eb-garamond italic leading-relaxed">
                                {adv.desc}
                            </p>

                            {/* Decorative Bar */}
                            <div className="w-[10vw] lg:w-[3vw] h-[0.8vw] lg:h-[0.3vw] bg-teal mt-[6vw] lg:mt-[2.5vw] rounded-full" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyWorkWithUs;
