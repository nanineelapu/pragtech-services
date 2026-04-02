"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CarrerPage = () => {
    // Animation Variants - Consistent with HomeSection for brand unity
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

    const lineVariants = {
        hidden: { scaleX: 0, opacity: 0 },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: { duration: 1.2, delay: 0.5, ease: "circOut" }
        }
    };

    return (
        <div className="relative w-full min-h-auto lg:min-h-screen flex flex-col items-center bg-transparent select-none transition-colors duration-300">
            {/* High Performance Full Width Hero Section */}
            <section className="relative w-full h-[140vw] md:h-[50vw] overflow-hidden group bg-transparent pt-[12vw] md:pt-[4.5vw]">
                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.08]">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="grid-careers" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0f172a" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-careers)" />
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
                    <div className="z-10 flex flex-col items-center gap-[3vw] md:gap-[1vw]">
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="px-[4vw] lg:px-[1.5vw] py-[1.5vw] lg:py-[0.5vw] bg-teal/10 border border-teal/20 rounded-full mb-[2vw] lg:mb-[1vw] flex items-center gap-[1.5vw] lg:gap-[0.8vw]"
                        >
                            <span className="text-teal text-[2.5vw] lg:text-[1.2vw]">◈</span>
                            <span className="text-teal text-[1.8vw] lg:text-[0.8vw] font-black uppercase tracking-[0.4vw] font-heading">Open Positions Available</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-navy text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tight font-heading select-none uppercase"
                        >
                            JOIN THE FUTURE OF <br /> <span className="text-teal text-[10vw] md:text-[6vw]">STEEL DETAILING</span>
                        </motion.h1>

                        {/* Teal Separator Line */}
                        <motion.div
                            variants={lineVariants}
                            className="relative w-[70vw] md:w-[35vw] h-px bg-linear-to-r from-transparent via-teal to-transparent my-[3vw] md:my-[1vw]"
                        >
                            <div className="absolute inset-0 blur-[2vw] md:blur-[0.4vw] bg-teal/20" />
                            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[3vw] md:w-[1vw] h-[3vw] md:h-[1vw] bg-white border border-teal rotate-45 flex items-center justify-center">
                                <div className="w-[1vw] md:w-[0.2vw] h-[1vw] md:h-[0.2vw] bg-teal rounded-full" />
                            </div>
                        </motion.div>

                        <motion.p variants={itemVariants} className="max-w-[85vw] lg:max-w-[50vw] text-navy/60 text-[3.8vw] md:text-[1.4vw] font-medium tracking-[0.05vw] font-body italic leading-relaxed">
                            We are searching for the next generation of detailing experts. Build a career defined by precision, technology, and global structural impact.
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div 
                            variants={itemVariants}
                            className="mt-[6vw] md:mt-[2vw] flex items-center gap-[4vw] md:gap-[2.5vw] z-20"
                        >
                            <button className="group relative px-[8vw] md:px-[3vw] py-[3.5vw] md:py-[1.2vw] bg-navy text-white text-[3.2vw] md:text-[0.9vw] font-bold uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(15,23,42,0.5)] font-heading cursor-pointer whitespace-nowrap">
                                <span className="relative z-10 transition-colors duration-500 group-hover:text-white font-heading">Explore Opportunities</span>
                                <div className="absolute inset-0 bg-linear-to-b from-[#1e293b] to-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                                <span className="absolute inset-0 flex items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] font-heading">
                                    Explore Opportunities
                                </span>
                            </button>

                            <div className="w-px h-[8vw] md:h-[3vw] bg-navy/10" />

                            <button className="group px-[8vw] md:px-[3vw] py-[3.3vw] md:py-[1.1vw] border border-navy/20 text-navy text-[3.2vw] md:text-[0.9vw] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-navy hover:text-white transition-all duration-500 font-heading relative overflow-hidden cursor-pointer whitespace-nowrap">
                                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Our Culture</span>
                                <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Subtle Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.03)_100%)] pointer-events-none" />
            </section>
        </div>
    );
};

export default CarrerPage;
