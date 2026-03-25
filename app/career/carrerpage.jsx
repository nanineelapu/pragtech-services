"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CarrerPage = () => {
    // Animation Variants
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

    const watermarkVariants = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5, ease: "easeOut" }
        }
    };

    return (
        <section
            className="relative w-full pt-[35vw] lg:pt-[3vw] min-h-[150vw] lg:min-h-screen flex flex-col items-center lg:justify-center text-center px-[6vw] lg:px-[3vw] overflow-hidden"
            style={{
                background: `radial-gradient(circle at center, rgba(77, 187, 107, 0.08) 0%, transparent 70%), linear-gradient(to bottom, #0c1f11 0%, #153a20 50%, #0c1f11 100%)`
            }}
        >
            {/* Background Narrative Watermark - Reduced scale */}
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={watermarkVariants}
                className="absolute top-[15vw] lg:top-[8vw] left-0 w-full text-center text-white/3 text-[22vw] lg:text-[16vw] font-black anton-regular pointer-events-none select-none tracking-tighter uppercase whitespace-nowrap"
            >
                CAREERS
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative z-10 flex flex-col items-center w-full"
            >
                {/* Pill Above Title - Reduced padding/text */}
                <motion.div 
                    variants={itemVariants}
                    className="px-[4vw] lg:px-[1.2vw] py-[2vw] lg:py-[0.4vw] bg-[#4dbb6b] text-[#153a20] rounded-full mb-[8vw] lg:mb-[2.5vw] flex items-center gap-[1.5vw] lg:gap-[0.6vw]"
                >
                    <span className="text-[3vw] lg:text-[1vw]">◈</span>
                    <span className="text-[2.5vw] lg:text-[0.8vw] font-black uppercase tracking-widest anton-regular">Open Positions Available</span>
                </motion.div>

                {/* Main Heading Hierarchy - Reduced H1 */}
                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col items-center mb-[8vw] lg:mb-[3.5vw]"
                >
                    <h1 className="text-[13vw] lg:text-[8vw] font-black text-white anton-regular leading-[0.8] tracking-tighter uppercase">
                        JOIN THE FUTURE OF <br /> <span className="text-[#4dbb6b]">STEEL DETAILING</span>
                    </h1>
                </motion.div>

                {/* Subtext - Reduced scale */}
                <motion.p 
                    variants={itemVariants}
                    className="max-w-[90vw] lg:max-w-[45vw] text-[4.2vw] lg:text-[1.5vw] text-[#faf9f6]/70 eb-garamond italic leading-relaxed mb-[10vw] lg:mb-[4.5vw]"
                >
                    We are searching for the next generation of detailing experts. Build a career defined by precision, technology, and global structural impact.
                </motion.p>

                {/* Action Buttons - Reduced padding/text */}
                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center gap-[4vw] lg:gap-[1.2vw] w-full sm:w-auto"
                >
                    <button className="w-full sm:w-auto px-[10vw] lg:px-[3vw] py-[3.5vw] lg:py-[1.1vw] bg-[#4dbb6b] hover:bg-white text-[#153a20] font-black rounded-full transition-all active:scale-95 text-[3.5vw] lg:text-[0.9vw] tracking-[0.15vw] uppercase anton-regular cursor-pointer whitespace-nowrap">
                        Explore Opportunities
                    </button>
                    <div className="hidden sm:block w-px h-[2.5vw] bg-white/20 mx-[1vw]" />
                    <button className="w-full sm:w-auto px-[10vw] lg:px-[3vw] py-[3.5vw] lg:py-[1.1vw] border border-white/20 hover:border-[#4dbb6b] text-white font-black rounded-full transition-all hover:text-[#4dbb6b] text-[3.5vw] lg:text-[0.9vw] tracking-[0.15vw] uppercase anton-regular cursor-pointer whitespace-nowrap">
                        Our Culture
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CarrerPage;
