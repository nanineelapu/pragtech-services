"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GlobalPresence = () => {
    const locations = [
        { city: "Alpharetta", region: "USA (HQ)", desc: "Core strategic operations and North American hub." },
        { city: "London", region: "UK", desc: "Corporate liaison and European business development." },
        { city: "Hyderabad", region: "INDIA", desc: "High-performance engineering and global delivery center." }
    ];

    return (
        <section className="w-full py-[15vw] lg:py-[10vw] px-[6vw] lg:px-[4vw] bg-transparent overflow-hidden">
            <div className="max-w-[92vw] mx-auto flex flex-col lg:flex-row items-center gap-[10vw] lg:gap-[6vw]">
                {/* Map Visual Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative w-full lg:w-1/2 aspect-video rounded-[6vw] lg:rounded-[3vw] overflow-hidden shadow-2xl border border-navy/5"
                >
                    <Image
                        src="/global_presence_map_1775105524373.png"
                        alt="Pragtech Global Presence Map"
                        fill
                        className="object-cover"
                    />
                    {/* Glowing Overlay Grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1)_0%,transparent_100%)] pointer-events-none" />
                </motion.div>

                {/* Text Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-teal text-[3.2vw] lg:text-[1.1vw] font-black tracking-[0.5vw] uppercase font-heading">Connectivity</span>
                        <h2 className="text-[10vw] lg:text-[5vw] font-black text-navy tracking-tighter uppercase leading-none mt-[2vw] mb-[6vw] lg:mb-[3vw] font-heading">
                            GLOBAL <br /> <span className="text-teal">FOOTPRINT</span>
                        </h2>
                        <p className="text-[4.2vw] lg:text-[1.4vw] text-navy/60 font-medium leading-relaxed italic mb-[8vw] lg:mb-[4vw] max-w-[85vw] lg:max-w-full font-body">
                            We support clients across the UK and worldwide, providing fast communication and reliable detailing across all time zones. Our team is available whenever you need us, ensuring smooth coordination from start to finish.
                        </p>
                    </motion.div>

                    {/* Location List Nodes */}
                    <div className="flex flex-col gap-[6vw] lg:gap-[2.5vw] w-full">
                        {locations.map((loc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="flex items-start gap-[4vw] lg:gap-[1.5vw] group"
                            >
                                <div className="w-[10vw] lg:w-[3vw] h-[10vw] lg:h-[3vw] rounded-full bg-teal/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-teal group-hover:text-white border border-teal/20">
                                    <span className="text-teal group-hover:text-white text-[4.5vw] lg:text-[1.2vw]">◈</span>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-navy text-[5vw] lg:text-[1.6vw] font-black uppercase tracking-tight font-heading leading-none mb-[1vw]">
                                        {loc.city} <span className="text-teal font-medium ml-2 text-[3.5vw] lg:text-[1vw]">/ {loc.region}</span>
                                    </h3>
                                    <p className="text-navy/50 text-[3.8vw] lg:text-[1.1vw] font-body">
                                        {loc.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalPresence;
