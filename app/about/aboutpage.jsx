"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutPage = () => {
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

    const imageVariants = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5, ease: "easeOut" }
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-[#faf9f6] w-full">
            {/* High Performance Full Width Hero Section */}
            <section className="relative w-full overflow-hidden bg-linear-to-br from-[#0c1f11] via-[#153a20] to-black pt-[35vw] lg:py-[12vw] min-h-[150vw] lg:min-h-screen flex flex-col items-center lg:justify-center text-center px-[6vw] lg:px-[4vw]">
                {/* Background Animation Layer */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                    className="absolute inset-0"
                >
                    {/* Minimal Technical Background Details */}
                    <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                            backgroundSize: '8vw 8vw'
                        }}
                    />

                    {/* Non-Animated Gradient Glows for Performance */}
                    <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#4dbb6b]/5 blur-[15vw] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#4dbb6b]/3 blur-[15vw] rounded-full" />
                </motion.div>

                {/* Main Hero Header Hierarchy */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="relative z-10 flex flex-col items-center w-full"
                >
                    {/* Header Label */}
                    <motion.div
                        variants={itemVariants}
                        className="px-[4vw] lg:px-[1.5vw] py-[1.5vw] lg:py-[0.5vw] bg-[#4dbb6b]/10 border border-[#4dbb6b]/20 rounded-full mb-[6vw] lg:mb-[3vw] flex items-center gap-[1.50vw] lg:gap-[0.8vw]"
                    >
                        <span className="text-[#4dbb6b] text-[2.5vw] lg:text-[1.2vw]">◈</span>
                        <span className="text-[#4dbb6b] text-[1.8vw] lg:text-[0.8vw] font-black uppercase tracking-[0.4vw] anton-regular">Engineering Overview</span>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center mb-[8vw] lg:mb-[4vw] text-white"
                    >
                        <span className="text-[6.5vw] lg:text-[4.5vw] font-light leading-tight tracking-tight eb-garamond italic">
                            The Science of
                        </span>
                        <h1 className="text-[16vw] lg:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase anton-regular">
                            Pragtech
                        </h1>
                    </motion.div>

                    {/* Performance Optimized Narrative text (No Blur) */}
                    <motion.p
                        variants={itemVariants}
                        className="max-w-[85vw] lg:max-w-[45vw] text-[4.2vw] lg:text-[1.5vw] text-white/60 font-medium leading-[1.6] lg:leading-[1.8] mb-[10vw] lg:mb-[5vw] eb-garamond italic"
                    >
                        Forging the future of structural integrity through high-precision computational detailing. We are the silent engine behind the world's most <span className="text-[#4dbb6b] font-bold">complex</span> industrial frameworks.
                    </motion.p>

                    {/* Action Bar: High-contrast buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center gap-[4vw] lg:gap-[2vw] w-full sm:w-auto"
                    >
                        <button className="w-full sm:w-auto px-[8vw] lg:px-[5vw] py-[3.5vw] lg:py-[1.2vw] bg-[#4dbb6b] hover:bg-white hover:text-[#153a20] text-white font-black rounded-full transition-all shadow-xl active:scale-95 text-[3.5vw] lg:text-[1vw] tracking-[0.2vw] uppercase anton-regular cursor-pointer whitespace-nowrap">
                            Browse Our Legacy
                        </button>
                        <button className="w-full sm:w-auto px-[8vw] lg:px-[5vw] py-[3.5vw] lg:py-[1.2vw] bg-white/5 hover:bg-white text-white hover:text-[#153a20] border border-white/20 rounded-full transition-all active:scale-95 text-[3.5vw] lg:text-[1vw] tracking-[0.2vw] uppercase anton-regular cursor-pointer whitespace-nowrap">
                            Initiate Connection
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Who We Are Title Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="flex flex-col items-center py-[12vw] lg:py-[4vw] text-center w-full"
            >
                <div className="flex items-center gap-[4vw] lg:gap-[2vw] mb-[4vw] lg:mb-[2vw]">
                    <motion.div
                        variants={{
                            hidden: { scaleX: 0, opacity: 0 },
                            visible: { scaleX: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
                        }}
                        className="hidden sm:block w-[10vw] h-px bg-linear-to-r from-transparent to-[#153a20]/20 origin-right"
                    />
                    <motion.h2
                        variants={itemVariants}
                        className="text-[10vw] lg:text-[5vw] font-black text-[#153a20] tracking-tighter uppercase anton-regular"
                    >
                        Who We Are
                    </motion.h2>
                    <motion.div
                        variants={{
                            hidden: { scaleX: 0, opacity: 0 },
                            visible: { scaleX: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
                        }}
                        className="hidden sm:block w-[10vw] h-px bg-linear-to-l from-transparent to-[#153a20]/20 origin-left"
                    />
                </div>
                <motion.div
                    variants={{
                        hidden: { scale: 0, opacity: 0 },
                        visible: { scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.5 } }
                    }}
                    className="w-[8vw] lg:w-[4vw] h-[1vw] lg:h-[0.3vw] bg-[#4dbb6b] rounded-full"
                />
            </motion.section>
        </div>
    );
};

export default AboutPage;

