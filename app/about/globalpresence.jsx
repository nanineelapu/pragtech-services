"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GlobalPresence = () => {
    const locations = [
        { city: "London", region: "UK (HQ)", desc: "Global headquarters and strategic corporate hub." },
        { city: "Dubai", region: "UAE", desc: "Strategic operations and Middle Eastern business hub." },
        { city: "Toronto", region: "CANADA", desc: "North American service expansion and client liaison." },
        { city: "Sydney", region: "AUSTRALIA", desc: "Asia-Pacific regional operations and support." },
        { city: "USA", region: "USA", desc: "Strategic North American engineering and support hub." }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="w-full py-[8vw] lg:py-[5vw] bg-transparent overflow-hidden">
            <div className="max-w-[92vw] mx-auto flex flex-col items-center">
                {/* Header Section - Centered for Impact */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-[12vw] lg:mb-[6vw] max-w-[85vw] lg:max-w-[60vw]"
                >
                    <span className="text-teal text-[3.2vw] lg:text-[1.1vw] font-black tracking-[0.5vw] uppercase font-heading">Connectivity</span>
                    <h2 className="text-[10vw] lg:text-[5vw] font-black text-navy tracking-tighter uppercase leading-none mt-[2vw] mb-[4vw] font-heading">
                        GLOBAL <span className="text-teal">FOOTPRINT</span>
                    </h2>
                    <p className="text-[4.2vw] lg:text-[1.4vw] text-navy/60 font-medium leading-relaxed italic font-body">
                        We support clients across the UK and worldwide, providing fast communication and reliable detailing across all time zones. Our team is available whenever you need us, ensuring smooth coordination from start to finish.
                    </p>
                </motion.div>

                {/* Modular Location Grid - Highly readable modular structure */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4vw] lg:gap-[2.5vw] w-full px-[4vw] lg:px-0"
                >
                    {locations.map((loc, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="flex flex-col p-[6vw] lg:p-[2.5vw] bg-white/50 backdrop-blur-sm rounded-[5vw] lg:rounded-[2vw] border border-navy/5 hover:border-teal/30 transition-all duration-500 hover:shadow-xl group"
                        >
                            <div className="flex items-center gap-[3vw] lg:gap-[1vw] mb-[3vw] lg:mb-[1vw]">
                                <div className="w-[10vw] lg:w-[2.5vw] h-[10vw] lg:h-[2.5vw] rounded-full bg-teal/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-teal group-hover:text-white border border-teal/20">
                                    <span className="text-teal group-hover:text-white text-[4.5vw] lg:text-[1vw]">◈</span>
                                </div>
                                <h3 className="text-navy text-[5vw] lg:text-[1.4vw] font-black uppercase tracking-tight font-heading leading-none">
                                    {loc.city} <span className="text-teal font-medium ml-1 text-[3.5vw] lg:text-[0.9vw]">/ {loc.region}</span>
                                </h3>
                            </div>
                            <p className="text-navy/50 text-[3.8vw] lg:text-[1.1vw] font-body leading-snug pl-[13vw] lg:pl-[3.5vw]">
                                {loc.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalPresence;
