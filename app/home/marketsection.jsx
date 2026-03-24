"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MarketSection = ({ px = "4vw", py = "10vw", width = "92%", ...props }) => {
    const markets = [
        {
            title: "STRUCTURAL STEEL",
            desc: "Expert detailing for projects of any size and complexity.",
            image: "/structural_detailing.png",
            pos: "left"
        },
        {
            title: "MISC STEEL",
            desc: "Detailing for Stairs, Handrails, and Ladders.",
            image: "/misc_detailing.png",
            pos: "center"
        },
        {
            title: "CONNECTION DESIGN",
            desc: "Precise connection design across global projects.",
            image: "/connection_design.png",
            pos: "right"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
            pathLength: 1, 
            opacity: 1, 
            transition: { duration: 2, ease: "easeInOut" } 
        }
    };

    return (
        <section
            className={`bg-white rounded-[6vw] lg:rounded-[4vw] mt-0 relative overflow-hidden flex flex-col items-center mx-auto self-center ${props.className || ""}`}
            style={{
                paddingLeft: px, paddingRight: px, paddingTop: py, paddingBottom: py,
                width: width,
                minHeight: typeof window !== 'undefined' && window.innerWidth < 1024 ? "auto" : "65vw"
            }}
            {...props}
        >
            {/* Technical Arrow Network Background - Animated SVG Reveal */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 opacity-15" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#153a20" />
                    </marker>
                </defs>

                <motion.g 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    fill="none" 
                    stroke="#153a20" 
                    strokeWidth="2" 
                    markerEnd="url(#arrowhead)"
                >
                    <motion.path variants={pathVariants} d="M500,100 L260,465" strokeDasharray="10,10" />
                    <motion.path variants={pathVariants} d="M500,100 L770,565" strokeDasharray="10,10" />
                    <motion.path variants={pathVariants} d="M500,100 L530,825" strokeDasharray="10,10" />
                </motion.g>

                <motion.circle 
                    initial={{ scale: 0 }} 
                    whileInView={{ scale: 1 }} 
                    viewport={{ once: true }}
                    cx="500" cy="100" r="4" fill="#153a20" 
                />
            </svg>

            {/* Header Content */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-[8vw] lg:mb-[4vw] relative z-20"
            >
                <h2 className="text-[7.5vw] lg:text-[3.5vw] font-black text-[#153a20] tracking-tight whitespace-nowrap">
                    Markets We <span className="text-[#4dbb6b]">Serve</span>
                </h2>
                <div className="w-[12vw] lg:w-[6vw] h-[0.8vw] lg:h-[0.3vw] bg-[#4dbb6b] mx-auto mt-[2vw] lg:mt-[1vw] rounded-full" />
                <p className="text-[3vw] lg:text-[1.1vw] max-w-[80vw] lg:max-w-[35vw] mx-auto mt-[3vw] lg:mt-[1.5vw] text-[#153a20]/80 font-medium leading-relaxed">
                    A multi-dimensional network of engineering excellence spreading across global structures.
                </p>
            </motion.div>

            {/* Desktop Market Cards Container */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="hidden lg:block relative w-full h-[45vw] mt-[4vw] z-10 pointer-events-none"
            >
                {/* Structural Steel - Top Left */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -60 },
                        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "circOut" } }
                    }}
                    className="absolute pointer-events-auto group hover:scale-[1.03] active:scale-[0.98] transition-transform duration-500"
                    style={{ top: "0", left: "8%", width: "25vw" }}
                >
                    <div className="relative h-[16vw] rounded-[1.8vw] overflow-hidden shadow-[0_1.5vw_4vw_rgba(21,58,32,0.1)] border border-[#153a20]/10">
                        <Image src={markets[0].image} alt={markets[0].title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-linear-to-t from-[#153a20] via-[#153a20]/40 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-[1.8vw]">
                            <h3 className="text-[1.2vw] font-black text-white leading-tight mb-[0.5vw] uppercase tracking-wide">{markets[0].title}</h3>
                            <p className="text-[0.8vw] text-white/80 font-medium leading-relaxed max-w-[90%]">{markets[0].desc}</p>
                        </div>
                        <div className="absolute top-[1.2vw] left-[1.2vw] w-[1vw] h-[1vw] border-l-[0.15vw] border-t-[0.15vw] border-[#4dbb6b]" />
                    </div>
                </motion.div>

                {/* Connection Design - Top Right */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 60 },
                        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "circOut" } }
                    }}
                    className="absolute pointer-events-auto group hover:scale-[1.03] active:scale-[0.98] transition-transform duration-500"
                    style={{ top: "0", right: "8%", width: "25vw" }}
                >
                    <div className="relative h-[16vw] rounded-[1.8vw] overflow-hidden shadow-[0_1.5vw_4vw_rgba(21,58,32,0.1)] border border-[#153a20]/10">
                        <Image src={markets[2].image} alt={markets[2].title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-linear-to-t from-[#153a20] via-[#153a20]/40 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-[1.8vw]">
                            <h3 className="text-[1.2vw] font-black text-white leading-tight mb-[0.5vw] uppercase tracking-wide">{markets[2].title}</h3>
                            <p className="text-[0.8vw] text-white/80 font-medium leading-relaxed max-w-[90%]">{markets[2].desc}</p>
                        </div>
                        <div className="absolute top-[1.2vw] left-[1.2vw] w-[1vw] h-[1vw] border-l-[0.15vw] border-t-[0.15vw] border-[#4dbb6b]" />
                    </div>
                </motion.div>

                {/* Misc Steel - Middle Down */}
                <motion.div
                    variants={cardVariants}
                    className="absolute pointer-events-auto group hover:scale-[1.03] active:scale-[0.98] transition-transform duration-500"
                    style={{ top: "16vw", left: "50%", transform: "translateX(-50%)", width: "25vw" }}
                >
                    <div className="relative h-[16vw] rounded-[1.8vw] overflow-hidden shadow-[0_1.5vw_4vw_rgba(21,58,32,0.1)] border border-[#153a20]/10">
                        <Image src={markets[1].image} alt={markets[1].title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-linear-to-t from-[#153a20] via-[#153a20]/40 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-[1.8vw]">
                            <h3 className="text-[1.2vw] font-black text-white leading-tight mb-[0.5vw] uppercase tracking-wide">{markets[1].title}</h3>
                            <p className="text-[0.8vw] text-white/80 font-medium leading-relaxed max-w-[90%]">{markets[1].desc}</p>
                        </div>
                        <div className="absolute top-[1.2vw] left-[1.2vw] w-[1vw] h-[1vw] border-l-[0.15vw] border-t-[0.15vw] border-[#4dbb6b]" />
                    </div>
                </motion.div>
            </motion.div>

            {/* Mobile Market Cards */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col lg:hidden gap-[6vw] w-full px-[2vw] relative z-20"
            >
                {markets.map((market, index) => (
                    <motion.div 
                        key={index} 
                        variants={cardVariants}
                        className="w-full group"
                    >
                        <div className="relative h-[55vw] rounded-[4vw] overflow-hidden shadow-2xl border border-[#153a20]/5">
                            <Image src={market.image} alt={market.title} fill className="object-cover" />
                            <div className="absolute inset-0 bg-linear-to-t from-[#153a20] via-[#153a20]/60 to-transparent" />
                            <div className="absolute inset-0 flex flex-col justify-end p-[5vw]">
                                <h3 className="text-[5vw] font-black text-white leading-tight mb-[1vw] uppercase tracking-wide">{market.title}</h3>
                                <p className="text-[3vw] text-white/90 font-medium leading-relaxed">{market.desc}</p>
                            </div>
                            <div className="absolute top-[4vw] left-[4vw] w-[4vw] h-[4vw] border-l-[0.5vw] border-t-[0.5vw] border-[#4dbb6b]" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* View All Button */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-[6vw] lg:mt-[2vw] relative z-20"
            >
                <button className="flex items-center gap-[2vw] lg:gap-[1vw] px-[8vw] py-[3.5vw] lg:px-[3vw] lg:py-[1.2vw] bg-[#153a20] hover:bg-[#1a4a2a] text-white font-black rounded-full transition-all shadow-xl active:scale-95 text-[3.5vw] lg:text-[1vw] tracking-wide group">
                    Explore All Markets
                    <div className="w-[5vw] h-[5vw] lg:w-[1.8vw] lg:h-[1.8vw] bg-white/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <svg className="w-[3vw] h-[3vw] lg:w-[1vw] lg:h-[1vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </button>
            </motion.div>
        </section >
    );
};

export default MarketSection;
