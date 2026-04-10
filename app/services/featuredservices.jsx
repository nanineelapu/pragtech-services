"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const featuredData = [
    {
        id: "01",
        title: "Structural Steel Detailing",
        desc: "At Pragtech Ltd, we deliver precise structural steel detailing for a wide range of industrial and commercial projects, including warehouses, factories, data centres, distribution hubs, retail spaces, offices, hospitals, schools, stadiums, bridges, and other complex structures. All detailing is completed in‑house for full quality control. Using Tekla Structures, SDS/2, AutoCAD, and other advanced tools, we produce accurate 3D models, fabrication‑ready drawings, and CNC outputs that support efficient production and smooth site erection.",
        tag: "In-House Detail"
    },
    {
        id: "02",
        title: "Miscellaneous Metalwork",
        desc: "At Pragtech Ltd, we provide accurate detailing for all miscellaneous and secondary steel elements, including gratings, stairs, handrails, ladders, guardrails, wall rails, platforms, canopies, gates, girts, and custom metalwork. We specialise in staircase and railing systems, delivering clear, compliant, and fabrication‑ready details for industrial, commercial, and specialised projects.",
        tag: "Specialised Design"
    },
    {
        id: "03",
        title: "Cold‑Rolled SFS Detailing",
        desc: "At Pragtech Ltd, we deliver accurate and coordinated cold‑rolled SFS detailing for industrial, commercial, and residential projects. Our scope includes panel layouts, stud arrangements, openings, brackets, and fixing details, all aligned with manufacturer requirements and project specifications.",
        tag: "Integrated Detail"
    },
    {
        id: "04",
        title: "Cladding Detailing",
        desc: "At Pragtech Ltd, we provide accurate and coordinated cladding detailing for industrial, commercial, and specialised building envelopes. Our scope includes panel layouts, fixing details, bracket arrangements, support systems, and interface coordination with steel, SFS, and architectural elements.",
        tag: "Building Envelopes"
    },
    {
        id: "05",
        title: "BIM Modelling & Coordination",
        desc: "At Pragtech Ltd, we provide accurate BIM modelling and coordination services that support clash detection, trade integration, and smooth project delivery. Our models align structural steel, SFS, cladding, and architectural elements to ensure clear communication and reduced on‑site issues.",
        tag: "Clash Detection"
    },
    {
        id: "06",
        title: "GA / Shop Drawings",
        desc: "At Pragtech Ltd, we produce coordinated GA and shop drawings for fabrication and installation. We work closely with engineers and fabricators to develop buildable, cost‑efficient, and code‑compliant details that align with project requirements and fabrication capabilities.",
        tag: "Technical Support"
    },
    {
        id: "07",
        title: "Connection Design Support",
        desc: "At Pragtech Ltd, we provide reliable connection design support for structural steel projects of all sizes. We develop buildable, cost‑efficient, and code‑compliant connection details that align with project requirements and fabrication capabilities.",
        tag: "Quantity Survey"
    },
    {
        id: "08",
        title: "As‑Built / Record Modelling",
        desc: "At Pragtech Ltd, we prepare accurate as‑built and record models based on site‑verified information, red‑line markups, and final construction data. Our team updates structural steel, miscellaneous metalwork, SFS, and cladding models to reflect the exact conditions of what was installed on site.",
        tag: "Record Modelling"
    }
];

const FeaturedServices = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % featuredData.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + featuredData.length) % featuredData.length);

    const activeItem = featuredData[activeIndex];

    return (
        <section className="relative w-full bg-transparent py-[10vw] lg:py-[6vw] px-[5vw] overflow-hidden flex flex-col items-center">

            {/* Background Watermark */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`bg-${activeIndex}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.04, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1 }}
                    className="absolute top-[10vw] lg:top-[5vw] left-0 w-full text-center text-navy text-[20vw] lg:text-[15vw] font-black font-heading pointer-events-none select-none tracking-tighter uppercase whitespace-nowrap"
                >
                    {activeItem.title}
                </motion.div>
            </AnimatePresence>

            {/* Main Wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-[90vw] lg:max-w-[85vw] flex flex-col items-center"
            >
                {/* Header Label */}
                <div className="flex items-center gap-[4vw] lg:gap-[1vw] mb-[10vw] lg:mb-[6vw]">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-[10vw] lg:w-[3vw] h-px bg-teal origin-left"
                    />
                    <span className="text-teal text-[3vw] lg:text-[0.9vw] font-black tracking-[0.5vw] uppercase font-heading">Featured Capabilities</span>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-[10vw] lg:w-[3vw] h-px bg-teal origin-right"
                    />
                </div>

                {/* Content Split */}
                <div className="w-full flex flex-col lg:flex-row mt-[7vw] items-start gap-[10vw] lg:gap-[5vw]">

                    {/* Left: Active Detail Panel */}
                    <div className="w-full lg:w-[45%] lg:sticky lg:top-[14vw]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className=" rounded-[4vw] lg:rounded-[1.5vw] p-[8vw] lg:p-[4vw] shadow-xl flex flex-col gap-[3vw] lg:gap-[1.5vw]"
                            >
                                {/* Number + Tag Row */}
                                <div className="flex items-center justify-between">
                                    <span className="text-teal text-[8vw] lg:text-[3vw] font-black font-heading leading-none">
                                        {activeItem.id}
                                    </span>
                                    <span className="text-[2.8vw] lg:text-[0.75vw] font-bold tracking-[0.2vw] uppercase font-heading px-[3vw] lg:px-[1.2vw] py-[1vw] lg:py-[0.4vw] rounded-full bg-teal/20 border border-teal text-teal">
                                        {activeItem.tag}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-[8vw] lg:text-[3vw] font-black text-navy font-heading uppercase leading-[0.85] tracking-tighter">
                                    {activeItem.title}
                                </h3>

                                {/* Teal divider */}
                                <div className="w-[12vw] lg:w-[3vw] h-[0.5vw] lg:h-[0.2vw] bg-teal rounded-full" />

                                {/* Description */}
                                <p className="text-[3.8vw] lg:text-[1.1vw] text-navy/80 font-body leading-[1.75]">
                                    {activeItem.desc}
                                </p>

                                {/* Prev / Next */}
                                <div className="flex items-center gap-[3vw] lg:gap-[1.5vw] mt-[2vw] lg:mt-[1vw]">
                                    <button
                                        onClick={prevSlide}
                                        className="w-[11vw] h-[11vw] lg:w-[3.5vw] lg:h-[3.5vw] rounded-full border border-navy/30 text-navy hover:bg-navy hover:text-white transition-all flex items-center justify-center cursor-pointer"
                                    >
                                        ←
                                    </button>
                                    <div className="flex-1 h-[0.4vw] lg:h-[0.2vw] bg-navy/15 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={false}
                                            animate={{ width: `${((activeIndex + 1) / featuredData.length) * 100}%` }}
                                            transition={{ duration: 0.7, ease: "circOut" }}
                                            className="h-full bg-teal rounded-full"
                                        />
                                    </div>
                                    <button
                                        onClick={nextSlide}
                                        className="w-[11vw] h-[11vw] lg:w-[3.5vw] lg:h-[3.5vw] rounded-full border border-navy/30 text-navy hover:bg-navy hover:text-white transition-all flex items-center justify-center cursor-pointer"
                                    >
                                        →
                                    </button>
                                    <span className="text-navy/50 text-[3vw] lg:text-[0.85vw] font-heading font-bold tabular-nums">
                                        {String(activeIndex + 1).padStart(2, '0')} / {String(featuredData.length).padStart(2, '0')}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Transparent Glass Service List */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-[2vw] lg:gap-[0.6vw]">
                        {featuredData.map((item, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <motion.button
                                    key={item.id}
                                    onClick={() => setActiveIndex(index)}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.06 }}
                                    className={`group w-full flex items-center gap-[3vw] lg:gap-[1.5vw] px-[4vw] lg:px-[2vw] py-[3vw] lg:py-[1.1vw] rounded-[3vw] lg:rounded-[0.8vw] text-left transition-all duration-400 cursor-pointer border ${isActive
                                        ? 'bg-white/30 backdrop-blur-sm border-navy/20 shadow-md scale-[1.01]'
                                        : 'bg-white/15 backdrop-blur-sm border-white/20 hover:bg-white/25 hover:border-navy/15 hover:scale-[1.005]'
                                        }`}
                                >
                                    {/* Number */}
                                    <span className={`text-[3.5vw] lg:text-[0.95vw] font-black font-heading shrink-0 w-[7vw] lg:w-[2.5vw] transition-colors duration-300 ${isActive ? 'text-teal' : 'text-navy/40 group-hover:text-teal/80'
                                        }`}>
                                        {item.id}
                                    </span>

                                    {/* Title */}
                                    <span className={`flex-1 text-[3.8vw] lg:text-[1.1vw] font-black font-heading uppercase tracking-tight transition-colors duration-300 ${isActive ? 'text-navy' : 'text-navy/70 group-hover:text-navy'
                                        }`}>
                                        {item.title}
                                    </span>

                                    {/* Tag — desktop only */}
                                    <span className={`hidden lg:block shrink-0 text-[0.65vw] font-bold tracking-[0.12vw] uppercase font-heading px-[0.9vw] py-[0.3vw] rounded-full transition-all duration-300 ${isActive
                                        ? 'bg-teal text-white'
                                        : 'bg-navy/10 text-navy/50 group-hover:bg-navy/20 group-hover:text-navy/80'
                                        }`}>
                                        {item.tag}
                                    </span>

                                    {/* Arrow */}
                                    <motion.div
                                        animate={{ rotate: isActive ? 45 : 0 }}
                                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                                        className={`shrink-0 w-[7vw] h-[7vw] lg:w-[2vw] lg:h-[2vw] rounded-full flex items-center justify-center text-[3vw] lg:text-[0.85vw] border transition-all duration-300 ${isActive
                                            ? 'bg-teal border-teal text-white'
                                            : 'border-navy/25 text-navy/40 group-hover:border-navy/60 group-hover:text-navy'
                                            }`}
                                    >
                                        →
                                    </motion.div>
                                </motion.button>
                            );
                        })}
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default FeaturedServices;
