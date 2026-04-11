"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
    { title: "Industrial Power Plant", category: "Heavy Industrial", size: "large", id: "01" },
    { title: "Metropolitan Stadium", category: "Commercial", size: "small", id: "02" },
    { title: "University Complex", category: "Institutional", size: "medium", id: "03" },
    { title: "Hospital Infrastructure", category: "Healthcare", size: "medium", id: "04" },
    { title: "Conveyor Systems", category: "Material Handling", size: "small", id: "05" },
    { title: "Maritime Facility", category: "Infrastructure", size: "large", id: "06" }
];

const ProjectHero = () => {
    const [activeProject, setActiveProject] = useState(null);

    // Hero Animation Variants - Consistent with HomeSection
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const frameVariants = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5, delay: 0.2, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className="w-full bg-transparent select-none">
            {/* HERO SECTION - White Theme */}
            <section className="relative w-full h-[140vw] md:h-[50vw] overflow-hidden group bg-transparent pt-[12vw] md:pt-[4.5vw]">
                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.08]">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="grid-projects" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0f172a" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-projects)" />
                    </svg>
                </div>

                {/* Layered Gradient Glows */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(19,142,127,0.1)_0%,transparent_40%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(15,23,42,0.05)_0%,transparent_40%)]" />

                {/* Main Content Container */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="relative h-full flex flex-col items-center justify-center text-center px-[6vw] md:px-[4vw]"
                >
                    {/* Decorative Frame Elements */}
                    <motion.div
                        variants={frameVariants}
                        className="absolute top-[20vw] bottom-[20vw] md:top-[10vw] md:bottom-[10vw] left-[10vw] right-[10vw] md:left-[15vw] md:right-[15vw] pointer-events-none"
                    >
                        <div className="absolute top-0 left-0 w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] border-t-[0.5vw] md:border-t-[0.2vw] border-l-[0.5vw] md:border-l-[0.2vw] border-navy/20" />
                        <div className="absolute top-0 right-0 w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] border-t-[0.5vw] md:border-t-[0.2vw] border-r-[0.5vw] md:border-r-[0.2vw] border-navy/20" />
                        <div className="absolute bottom-0 left-0 w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] border-b-[0.5vw] md:border-b-[0.2vw] border-l-[0.5vw] md:border-l-[0.2vw] border-navy/20" />
                        <div className="absolute bottom-0 right-0 w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] border-b-[0.5vw] md:border-b-[0.2vw] border-r-[0.5vw] md:border-r-[0.2vw] border-navy/20" />

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5vw] h-[1.5vw] md:w-[0.6vw] md:h-[0.6vw] bg-teal" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1.5vw] h-[1.5vw] md:w-[0.6vw] md:h-[0.6vw] bg-teal" />
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[1.5vw] h-[1.5vw] md:w-[0.6vw] md:h-[0.6vw] bg-teal" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[1.5vw] h-[1.5vw] md:w-[0.6vw] md:h-[0.6vw] bg-teal" />
                    </motion.div>

                    {/* Text Block */}
                    <div className="z-10 flex flex-col items-center gap-[3vw] md:gap-[1vw] -mt-[10vw] md:-mt-[5vw]">
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="px-[4vw] lg:px-[1.5vw] py-[1.5vw] lg:py-[0.5vw] bg-teal/10 border border-teal/20 rounded-full mb-[8vw] lg:mb-[3vw] flex items-center gap-[1.5vw] lg:gap-[0.8vw]"
                        >
                            <span className="text-teal text-[2.5vw] lg:text-[1.2vw]">◈</span>
                            <span className="text-teal text-[1.8vw] lg:text-[0.8vw] font-black uppercase tracking-[0.4vw] font-heading">Global Project Archive</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-navy text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tight font-heading select-none uppercase"
                        >
                            PROJECT <br /> <span className="text-teal">SHOWCASE</span>
                        </motion.h1>

                        {/* Teal Separator Line */}
                        <motion.div
                            variants={{
                                hidden: { scaleX: 0, opacity: 0 },
                                visible: { scaleX: 1, opacity: 1, transition: { duration: 1.2, delay: 0.5, ease: "circOut" } }
                            }}
                            className="relative w-[70vw] md:w-[35vw] h-px bg-linear-to-r from-transparent via-teal to-transparent my-[3vw] md:my-[1vw]"
                        >
                            <div className="absolute inset-0 blur-[2vw] md:blur-[0.4vw] bg-teal/20" />
                            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[3vw] md:w-[1vw] h-[3vw] md:h-[1vw] bg-white border border-teal rotate-45 flex items-center justify-center">
                                <div className="w-[1vw] md:w-[0.2vw] h-[1vw] md:h-[0.2vw] bg-teal rounded-full" />
                            </div>
                        </motion.div>

                        <motion.p variants={itemVariants} className="max-w-[85vw] lg:max-w-[60vw] text-navy/60 text-[3.8vw] md:text-[1.4vw] font-medium tracking-[0.05vw] font-body italic leading-relaxed">
                            Successfully completed 250+ projects across various sectors including power plants,
                            stadiums, conveyors, hospitals, and schools. We utilise SDS/2 and Tekla software
                            to deliver high-quality detailing, along with expertise in structural steel,
                            miscellaneous metalwork, cold-rolled steel (SFS), and cladding services.
                        </motion.p>
                    </div>
                </motion.div>
                {/* Subtle Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.03)_100%)] pointer-events-none" />
            </section>



            {/* ASYMMETRICAL MOSAIC GALLERY */}
            <section className="w-full py-[15vw] lg:py-[10vw] px-[4vw] lg:px-[5vw]">
                <div className="grid grid-cols-12 gap-[2vw] lg:gap-[1.5vw] auto-rows-[25vw] lg:auto-rows-[16vw]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={cardVariants}
                            onClick={() => setActiveProject(activeProject === index ? null : index)}
                            className={`group relative overflow-hidden rounded-[2vw] lg:rounded-[1.5vw] bg-[#f8f9fa] border border-navy/5 shadow-lg transition-all duration-700 cursor-pointer
                                ${project.size === 'large' ? 'col-span-12 lg:col-span-8 row-span-2' : project.size === 'medium' ? 'col-span-6 lg:col-span-4 row-span-2' : 'col-span-6 lg:col-span-4 row-span-1'}
                                ${activeProject === index ? 'ring-2 ring-teal ring-inset shadow-2xl' : ''}
                            `}
                        >
                            {/* Technical Overlay - Now reactive to click + hover */}
                            <div className={`absolute inset-0 bg-[#0f172a] transition-all duration-500 z-10 flex flex-col justify-center p-[4vw] lg:p-[2.5vw]
                                ${activeProject === index ? 'opacity-[0.98] blur-0' : 'opacity-0 lg:group-hover:opacity-[0.97]'}
                            `}>
                                <div className="flex items-center justify-between mb-[1vw] lg:mb-[0.8vw]">
                                    <span className="text-[#14b8a6] text-[2.6vw] lg:text-[0.8vw] font-black uppercase tracking-widest font-heading">{project.category}</span>
                                    {activeProject === index && (
                                        <div className="lg:hidden w-[8vw] h-[8vw] rounded-full bg-white/5 flex items-center justify-center text-white/40 text-[4vw]">✕</div>
                                    )}
                                </div>
                                <h3 className="text-[4vw] lg:text-[2.2vw] text-white font-black uppercase leading-tight mb-[2vw] lg:mb-[1.5vw] font-heading break-words">
                                    {project.title}
                                </h3>
                                <p className={`text-[2.4vw] lg:text-[1vw] text-white/50 italic mb-[3vw] lg:mb-[2vw] font-body leading-snug max-w-[95%]
                                    ${activeProject === index ? 'block' : 'hidden lg:block'}
                                `}>
                                    Precision detailing through TEKLA & SDS/2 for structural excellence.
                                </p>
                                <div className="w-fit border-b border-teal text-teal font-black text-[2.4vw] lg:text-[0.7vw] uppercase tracking-widest pb-[0.2vw] font-heading">
                                    View Technical Specs →
                                </div>
                            </div>

                            {/* Base Card Info */}
                            <div className="absolute inset-0 flex flex-col justify-end p-[2.5vw] lg:p-[1.8vw] bg-linear-to-t from-black/20 to-transparent">
                                <div className="flex items-center justify-between relative z-0">
                                    <div className="flex flex-col">
                                        <span className="text-navy/40 text-[2.5vw] lg:text-[0.8vw] font-heading">{project.id}</span>
                                        <h4 className="text-[3.5vw] lg:text-[1.5vw] text-navy font-black uppercase transition-opacity group-hover:opacity-0 leading-none font-heading">
                                            {project.title}
                                        </h4>
                                    </div>
                                    <div className="w-[8vw] lg:w-[2.8vw] h-[8vw] lg:h-[2.8vw] rounded-full border border-navy/10 flex items-center justify-center text-navy text-[3vw] lg:text-[1.2vw] group-hover:border-teal transition-all">
                                        ↗
                                    </div>
                                </div>
                            </div>

                            {/* Ghosted Tech Icon */}
                            <div className="absolute top-[1.5vw] lg:top-[1.5vw] right-[1.5vw] lg:right-[1.5vw] text-[8vw] lg:text-[6vw] text-navy/2 font-black select-none group-hover:opacity-0 transition-opacity font-heading">
                                ◈
                            </div>
                        </motion.div>
                    ))}
                </div>


            </section>
        </div>
    );
};

export default ProjectHero;
