"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ContctPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const watermarkVariants = {
        hidden: { opacity: 0, scale: 0.8, letterSpacing: "0.5em" },
        visible: {
            opacity: 0.05,
            scale: 1,
            letterSpacing: "0.1em",
            transition: { duration: 2, ease: "easeOut" }
        }
    };

    return (
        <section
            className="relative w-full min-h-[150vw] lg:min-h-screen flex flex-col items-center lg:justify-center text-center px-[6vw] lg:px-[5vw] overflow-hidden pt-[35vw] lg:pt-[4vw] bg-navy"
        >
            {/* Structural Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: '8vw 8vw'
                    }}
                />
            </div>

            {/* Dynamic Background Gradients */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(19,142,127,0.15)_0%,transparent_70%]" />
                <div className="absolute inset-0 bg-linear-to-b from-black via-navy to-black opacity-100" />
            </div>

            {/* Background Narrative Watermark */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={watermarkVariants}
                className="absolute top-[18vw] lg:top-[6vw] left-0 w-full text-center text-white/10 text-[22vw] lg:text-[16vw] font-black font-heading pointer-events-none select-none tracking-tighter uppercase whitespace-nowrap z-0"
            >
                CONNECT
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative z-10 flex flex-col items-center w-full"
            >
                {/* Pill Above Title */}
                <motion.div
                    variants={itemVariants}
                    className="px-[4vw] lg:px-[1.2vw] py-[1.5vw] lg:py-[0.4vw] bg-teal/10 border border-teal/20 text-teal rounded-full mb-[8vw] lg:mb-[2.5vw] flex items-center gap-[1.5vw] lg:gap-[0.6vw]"
                >
                    <span className="text-[3vw] lg:text-[1vw]">◈</span>
                    <span className="text-[2.5vw] lg:text-[0.8vw] font-black uppercase tracking-[0.4vw] font-heading">GLOBAL SUPPORT HUB</span>
                </motion.div>

                {/* Main Heading Hierarchy */}
                <motion.div variants={itemVariants} className="flex flex-col items-center mb-[8vw] lg:mb-[3.5vw]">
                    <h1 className="text-[14vw] lg:text-[9vw] font-black text-white font-heading leading-[0.8] tracking-tighter uppercase">
                        INITIATE <br /> <span className="text-teal">CONNECTION</span>
                    </h1>
                </motion.div>

                {/* Subtext */}
                <motion.p
                    variants={itemVariants}
                    className="max-w-[90vw] lg:max-w-[45vw] text-[4.2vw] lg:text-[1.5vw] text-white/60 font-body italic leading-relaxed mb-[10vw] lg:mb-[4.5vw]"
                >
                    Ready to transform your structural vision into reality? Reach out for expert BIM modeling, estimation, and detailing support across all time zones.
                </motion.p>

                {/* Action Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-[4vw] lg:gap-[1.2vw] w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-[10vw] lg:px-[3vw] py-[3.5vw] lg:py-[1.1vw] bg-teal hover:bg-white text-navy font-black rounded-full transition-all active:scale-95 text-[3.5vw] lg:text-[0.9vw] tracking-[0.15vw] uppercase font-heading cursor-pointer whitespace-nowrap">
                        Direct Message
                    </button>
                    <div className="hidden sm:block w-px h-[2.5vw] bg-white/20 mx-[1vw]" />
                    <button className="w-full sm:w-auto px-[10vw] lg:px-[3vw] py-[3.5vw] lg:py-[1.1vw] border border-white/20 hover:border-teal text-white font-black rounded-full transition-all hover:text-navy hover:bg-white text-[3.5vw] lg:text-[0.9vw] tracking-[0.15vw] uppercase font-heading cursor-pointer whitespace-nowrap">
                        Technical Sales
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContctPage;
