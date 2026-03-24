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
            {/* Technical Hub-and-Spoke Connectivity */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="hidden lg:block w-full h-full opacity-[0.12]" viewBox="0 0 1000 800" preserveAspectRatio="none">
                    <defs>
                        <marker id="arrowhead-fine" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                            <polygon points="0 0, 8 3, 0 6" fill="#153a20" />
                        </marker>
                    </defs>

                    <motion.g
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        fill="none"
                        stroke="#153a20"
                        strokeWidth="1.5"
                        markerEnd="url(#arrowhead-fine)"
                    >
                        {/* Connecting Paths to Card Anchors */}
                        <motion.path variants={pathVariants} d="M500,180 L250,320" strokeDasharray="8,8" />
                        <motion.path variants={pathVariants} d="M500,180 L750,320" strokeDasharray="8,8" />
                        <motion.path variants={pathVariants} d="M500,180 L500,520" strokeDasharray="8,8" />
                    </motion.g>

                    <motion.circle
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        cx="500" cy="180" r="3" fill="#153a20"
                    />
                </svg>
            </div>

            {/* Header Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-[12vw] lg:mb-[6vw] relative z-20"
            >
                <div className="inline-block px-[2vw] py-[0.5vw] bg-[#4dbb6b]/10 rounded-full mb-[2vw] lg:mb-[1vw]">
                    <span className="text-[#153a20] text-[2.5vw] lg:text-[0.9vw] font-bold tracking-[0.2em] uppercase">Sector Expertise</span>
                </div>
                <h2 className="text-[9vw] lg:text-[4.5vw] font-black text-[#153a20] tracking-tight whitespace-nowrap anton-regular">
                    MARKETS WE <span className="text-[#4dbb6b]">SERVE</span>
                </h2>
                <div className="w-[12vw] lg:w-[6vw] h-[0.8vw] lg:h-[0.3vw] bg-[#4dbb6b] mx-auto mt-[2vw] lg:mt-[1vw] rounded-full" />
            </motion.div>

            {/* Desktop Market Cards (Optimized Staggered Grid) */}
            <div className="hidden lg:flex w-full justify-center gap-[4vw] relative z-10 min-h-[40vw]">
                {/* Lateral Cards (Top Row) */}
                <div className="flex flex-row justify-center gap-[30vw] w-full items-start pt-[2vw]">
                    {/* Structural Steel */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -40, y: 20 },
                            visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="group w-[25vw] cursor-pointer"
                    >
                        <div className="relative h-[18vw] rounded-[2vw] overflow-hidden shadow-[0_2vw_5vw_rgba(0,0,0,0.08)] bg-white border border-[#153a20]/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_3vw_6vw_rgba(77,187,107,0.15)]">
                            <Image src={markets[0].image} alt={markets[0].title} fill className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-linear-to-t from-[#153a20] via-[#153a20]/20 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-[2vw] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-[1.5vw] font-black text-white leading-tight anton-regular mb-[0.5vw] uppercase">{markets[0].title}</h3>
                                <p className="text-[0.9vw] text-white/70 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{markets[0].desc}</p>
                            </div>
                            <div className="absolute top-[1.5vw] right-[1.5vw] w-[3.5vw] h-[3.5vw] rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <svg className="w-[1.2vw] h-[1.2vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth={2.5} /></svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connection Design */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 40, y: 20 },
                            visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="group w-[25vw] cursor-pointer"
                    >
                        <div className="relative h-[18vw] rounded-[2vw] overflow-hidden shadow-[0_2vw_5vw_rgba(0,0,0,0.08)] bg-white border border-[#153a20]/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_3vw_6vw_rgba(77,187,107,0.15)]">
                            <Image src={markets[2].image} alt={markets[2].title} fill className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-linear-to-t from-[#153a20] via-[#153a20]/20 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-[2vw] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-[1.5vw] font-black text-white leading-tight anton-regular mb-[0.5vw] uppercase">{markets[2].title}</h3>
                                <p className="text-[0.9vw] text-white/70 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{markets[2].desc}</p>
                            </div>
                            <div className="absolute top-[1.5vw] right-[1.5vw] w-[3.5vw] h-[3.5vw] rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <svg className="w-[1.2vw] h-[1.2vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth={2.5} /></svg>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Vertical Anchor (Bottom Row) */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 group w-[25vw] cursor-pointer"
                >
                    <div className="relative h-[18vw] rounded-[2vw] overflow-hidden shadow-[0_2vw_5vw_rgba(0,0,0,0.08)] bg-white border border-[#153a20]/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_3vw_6vw_rgba(77,187,107,0.15)]">
                        <Image src={markets[1].image} alt={markets[1].title} fill className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-linear-to-t from-[#153a20] via-[#153a20]/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-[2vw] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-[1.5vw] font-black text-white leading-tight anton-regular mb-[0.5vw] uppercase">{markets[1].title}</h3>
                            <p className="text-[0.9vw] text-white/70 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{markets[1].desc}</p>
                        </div>
                        <div className="absolute top-[1.5vw] right-[1.5vw] w-[3.5vw] h-[3.5vw] rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <svg className="w-[1.2vw] h-[1.2vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth={2.5} /></svg>
                        </div>
                    </div>
                </motion.div>
            </div>

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
