"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectSection = ({ px = "4vw", py = "5vw", width = "92%", ...props }) => {
    const projects = [
        {
            title: "Commercial Steel Structure",
            desc: "We now have complete visibility into structural integrity across 100% of steel connections, not just a sample.",
            stat: "100%",
            statLabel: "Precision",
            author: "Natalia García Jané",
            role: "Senior Ops Manager",
            side: "right"
        },
        {
            title: "Industrial Framework optimization",
            desc: "Our framework detailing allows agents to meet quality bars 50% faster than traditional methods.",
            stat: "50%",
            statLabel: "Faster",
            author: "Marissa Taylor",
            role: "Product Support",
            side: "left"
        }
    ];

    const slideInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section
            className={`bg-transparent rounded-[6vw] lg:rounded-[4vw] mt-0 flex flex-col items-start mx-auto self-center overflow-hidden ${props.className || ""}`}
            style={{
                paddingLeft: px, paddingRight: px, paddingTop: py, paddingBottom: py,
                width: width,
            }}
            {...props}
        >
            {/* Header Content - Left Aligned */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full text-left mb-[10vw] lg:mb-[6vw] px-[2vw] lg:px-0"
            >
                <h2 className="text-[12vw] lg:text-[4vw] font-black text-navy tracking-tighter leading-none uppercase ">
                    Our <span className="text-teal">Projects</span>
                </h2>
                <div className="w-[15vw] lg:w-[8vw] h-[0.8vw] lg:h-[0.3vw] bg-teal mt-[2.5vw] lg:mt-[1.5vw] rounded-full" />
            </motion.div>

            {/* Projects Container */}
            <div className="flex flex-col gap-[12vw] lg:gap-[8vw] w-full mb-[12vw] lg:mb-[6vw]">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex flex-row lg:flex-row items-center gap-[4vw] w-full ${project.side === 'left' ? 'flex-row-reverse lg:flex-row-reverse' : ''}`}
                    >
                        {/* Text Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={project.side === 'right' ? slideInLeft : slideInRight}
                            className="flex-1 flex flex-col gap-[3vw] lg:gap-[2vw]"
                        >
                            <div className="h-[4vw] lg:h-[2vw] w-fit opacity-80">
                                <span className="text-[4vw] lg:text-[1.8vw] font-black text-navy tracking-tighter uppercase font-heading">PRAGTECH</span>
                            </div>

                            <p className="text-[3.8vw] lg:text-[2vw] font-bold text-navy leading-[1.3] tracking-tight text-left font-body">
                                "{project.desc}"
                            </p>

                            {/* Author section */}
                            <div className="flex items-center gap-[2.5vw] lg:gap-[1.2vw] mt-[2vw] lg:mt-[1vw]">
                                <div className="w-[8vw] h-[8vw] lg:w-[3.5vw] lg:h-[3.5vw] rounded-full bg-slate-200 overflow-hidden relative border border-navy/10 shrink-0">
                                    <div className="absolute inset-0 bg-linear-to-br from-slate-300 to-slate-400" />
                                </div>
                                <div className="flex flex-col truncate">
                                    <span className="text-[2.8vw] lg:text-[1.1vw] font-bold text-navy truncate font-heading">{project.author.split(' ')[0]}</span>
                                    <span className="text-[2.2vw] lg:text-[0.9vw] text-navy/60 font-medium truncate font-body">{project.role.split(' ')[0]}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Result Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={project.side === 'right' ? slideInRight : slideInLeft}
                            className="w-[45%] lg:w-[35vw] aspect-4/5 lg:aspect-square bg-teal/10 rounded-[4vw] lg:rounded-[3vw] p-[4vw] lg:p-[3vw] flex flex-col relative overflow-hidden group"
                        >
                            <div className="absolute top-[3vw] lg:top-[2vw] right-[3vw] lg:right-[2vw] w-[5vw] lg:w-[2vw] h-[5vw] lg:h-[2vw] rounded-full border border-navy/20 flex items-center justify-center opacity-40">
                                <svg className="w-[2.5vw] lg:w-[1vw] h-[2.5vw] lg:h-[1vw]" viewBox="0 0 24 24" fill="none" stroke="#0f172a">
                                    <path d="M15 10l5 5m0 0l-5 5m5-5H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div className="flex flex-col relative z-10">
                                <motion.span
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="text-[10vw] lg:text-[6vw] font-black text-navy leading-none tracking-tighter font-heading"
                                >
                                    {project.stat}
                                </motion.span>
                                <span className="text-[3vw] lg:text-[1.2vw] font-bold text-navy/70 mt-[1.5vw] lg:mt-[1vw] max-w-[90%] leading-tight uppercase font-heading">
                                    {project.statLabel}
                                </span>
                            </div>

                            {/* 3D Illustration placeholder */}
                            <div className="mt-auto relative h-[25vw] lg:h-[15vw] w-full transform group-hover:scale-105 transition-transform duration-700">
                                <div className="absolute bottom-0 right-0 w-[25vw] lg:w-[18vw] h-[25vw] lg:h-[18vw] bg-black/5 rounded-[2vw] rotate-6 border border-black/5" />
                                <motion.div
                                    initial={{ rotate: -15, scale: 0.8 }}
                                    whileInView={{ rotate: -3, scale: 1 }}
                                    transition={{ delay: 0.6, duration: 1, type: "spring" }}
                                    className="absolute bottom-[2vw] lg:bottom-[2vw] right-[2vw] lg:right-[2vw] w-[25vw] lg:w-[18vw] h-[25vw] lg:h-[18vw] bg-white/20 backdrop-blur-sm rounded-[2vw] border border-white/20 flex items-center justify-center text-navy/20 text-[5vw] lg:text-[4vw] font-black"
                                >
                                    STEEL
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full flex justify-center mt-[4vw] lg:mt-[2vw]"
            >
                <Link href="/projects" className="flex items-center gap-[3vw] lg:gap-[1.2vw] px-[7vw] lg:px-[4vw] py-[3.2vw] lg:py-[1.5vw] bg-navy hover:bg-navy/90 text-white font-black rounded-full lg:rounded-[5vw] transition-all shadow-xl active:scale-95 text-[3.2vw] lg:text-[1.1vw] tracking-wider uppercase group font-heading cursor-pointer">
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
                </Link>
            </motion.div>
        </section>
    );
};

export default ProjectSection;
