"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MarketSection = ({ px = "4vw", py = "6vw", width = "92%", ...props }) => {
    const markets = [
        {
            title: "Structural Steel Detailing",
            desc: "Accurate detailing for beams, frames & more.",
            image: "https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/Market%20image%202.webp"
        },
        {
            title: "Miscellaneous Metal Detailing",
            desc: "Stairs, platforms, handrails & custom steelwork.",
            image: "https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/Market%20image%201.webp"
        },
        {
            title: "Cold Rolled SFS Detailing",
            desc: "Precise detailing for light gauge steel framing.",
            image: "https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/Gemini_Generated_Image_5yxq2u5yxq2u5yxq.webp"
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.7,
                ease: "easeOut"
            }
        })
    };

    return (
        <section
            className={`bg-transparent rounded-[5vw] lg:rounded-[3vw] relative overflow-hidden flex flex-col items-center mx-auto self-center ${props.className || ""}`}
            style={{
                paddingLeft: px, paddingRight: px, paddingTop: py, paddingBottom: py,
                width: width,
            }}
            {...props}
        >
            {/* Header Area */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-[4.5vw] lg:mb-[3vw] relative z-20"
            >
                <div className="inline-block px-[1.5vw] py-[0.4vw] bg-teal/20 rounded-full mb-[1.5vw] lg:mb-[0.8vw]">
                    <span className="text-teal text-[2.2vw] lg:text-[0.8vw] font-bold tracking-[0.2em] uppercase">Sector Expertise</span>
                </div>
                <h2 className="text-[6.5vw] lg:text-[3.2vw] font-black text-navy tracking-tight font-heading leading-tight">
                    MARKETS WE <span className="text-teal">SERVE</span>
                </h2>
                <div className="w-[10vw] lg:w-[5vw] h-[0.6vw] lg:h-[0.2vw] bg-teal mx-auto mt-[1.2vw] lg:mt-[0.8vw] rounded-full" />
            </motion.div>

            {/* Market Cards Layout */}
            <div className="w-full flex flex-col lg:flex-row justify-center gap-[3.5vw] lg:gap-[1.2vw] relative z-20 px-[2vw]">
                {markets.map((market, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="flex-1 group cursor-pointer"
                    >
                        <div className="flex flex-col h-full rounded-[1.5vw] lg:rounded-[0.4vw] overflow-hidden border border-white/10 shadow-xl bg-[#f8fafc]">
                            {/* Card Header (Title Bar) */}
                            <div className="bg-[#e2e8f0] py-[2.2vw] lg:py-[1vw] px-[2vw] text-center border-b border-navy/5">
                                <h3 className="text-[3.8vw] lg:text-[1.2vw] font-black text-navy leading-tight font-heading tracking-tight">
                                    {market.title}
                                </h3>
                            </div>

                            {/* Card Image Content */}
                            <div className="relative h-[42vw] lg:h-[18vw] w-full bg-white overflow-hidden p-[1.5vw]">
                                <Image
                                    src={market.image}
                                    alt={market.title}
                                    fill
                                    unoptimized
                                    className="object-contain p-[1.5vw] opacity-90 transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>

                            {/* Card Footer (Description Bar) */}
                            <div className="bg-white py-[3vw] lg:py-[1.2vw] px-[3vw] text-center border-t border-navy/5">
                                <p className="text-[2.8vw] lg:text-[0.9vw] text-navy/80 font-bold font-body leading-relaxed">
                                    {market.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* View All Button */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-[6vw] lg:mt-[3vw] relative z-20"
            >
                <button className="flex items-center gap-[2vw] lg:gap-[1vw] px-[6vw] py-[2.8vw] lg:px-[2.5vw] lg:py-[1vw] bg-teal hover:bg-teal/90 text-navy font-black rounded-full transition-all shadow-lg active:scale-95 text-[3vw] lg:text-[0.9vw] tracking-wide group font-heading">
                    Explore All Markets
                    <div className="w-[4.5vw] h-[4.5vw] lg:w-[1.6vw] lg:h-[1.6vw] bg-navy/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <svg className="w-[2.5vw] h-[2.5vw] lg:w-[0.9vw] lg:h-[0.9vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </button>
            </motion.div>

            {/* Background Texture/Gradient moved to global - keeping it subtle here */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-b from-blue-400/5 to-transparent" />
            </div>
        </section>


    );
};

export default MarketSection;

