"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        title: "STRUCTURAL STEEL DETAILING",
        desc: "Precision managed projects of any size and complexity, utilizing world-class engineering standards to deliver high-integrity structural frameworks.",
        icon: "◈"
    },
    {
        title: "MISC STEEL DETAILING",
        desc: "Comprehensive detailing solutions for gratings, handrails, and ladders, ensuring every secondary structural element is perfectly integrated.",
        icon: "⬡"
    },
    {
        title: "CONNECTION DESIGN",
        desc: "Expert steel connection design through global engineering partners, ensuring structural safety and time-efficient fabrication.",
        icon: "◆"
    },
    {
        title: "INDUSTRIAL STEEL SERVICES",
        desc: "Specialized detailing for complex industrial facilities including warehouses, manufacturing plants, and heavy-duty structural grids.",
        icon: "▼"
    },
    {
        title: "ESTIMATION & MTO SERVICES",
        desc: "Accurate and detailed material take-offs and estimation services to streamline construction budgeting and procurement.",
        icon: "◢"
    },
    {
        title: "BUILDING BIM SERVICES",
        desc: "Harnessing the power of 3D digital models integrated with real-time project data for clash detection and seamless coordination.",
        icon: "■"
    }
];

const Cards = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row gap-[10vw] lg:gap-[6vw] w-full max-w-[92vw] lg:max-w-[82vw] mx-auto min-h-[40vw] text-left px-[4vw] lg:px-0 bg-transparent mt-[12vw] lg:mt-[8vw]">
            {/* LEFT SIDE: The Interactive List */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-[45%] flex flex-col gap-[1vw] lg:gap-[0.5vw]"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)}
                        className={`group relative p-[4vw] lg:p-[1.8vw] rounded-2xl lg:rounded-xl cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-navy translate-x-0 lg:translate-x-1' : 'hover:bg-navy/5'
                            }`}
                    >
                        <div className="flex items-center gap-[4vw] lg:gap-[1.5vw]">
                            <span className={`text-[4vw] lg:text-[1.2vw] font-heading transition-colors ${activeIndex === index ? 'text-teal' : 'text-navy/30'
                                }`}>
                                0{index + 1}
                            </span>
                            <h3 className={`text-[5.5vw] lg:text-[1.8vw] font-black font-heading uppercase transition-colors ${activeIndex === index ? 'text-white' : 'text-navy'
                                }`}>
                                {service.title}
                            </h3>
                        </div>
                        {/* Dynamic Progress Bar Under Active */}
                        {activeIndex === index && (
                            <motion.div
                                layoutId="activeUnderline"
                                className="absolute bottom-0 left-[4vw] lg:left-[1.8vw] right-[4vw] lg:right-[1.8vw] h-[2px] bg-teal"
                            />
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* RIGHT SIDE: The Reveal Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full lg:w-[55%] relative min-h-[80vw] lg:h-auto lg:min-h-0"
            >
                <div className="lg:sticky lg:top-[12vw] lg:mt-[5vw] bg-[#555961] rounded-[8vw] lg:rounded-[3vw] p-[8vw] lg:p-[4vw] shadow-2xl overflow-hidden min-h-[30vw] flex flex-col justify-center">
                    {/* Background Detail - Animated Icon */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`icon-${activeIndex}`}
                            initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
                            animate={{ scale: 1, opacity: 0.2, rotate: 0 }}
                            exit={{ scale: 1.2, opacity: 0, rotate: 15 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute top-[-10vw] right-[-10vw] lg:top-[-5vw] lg:right-[-5vw] text-[35vw] lg:text-[20vw] font-black text-white font-heading pointer-events-none select-none"
                        >
                            {services[activeIndex].icon}
                        </motion.div>
                    </AnimatePresence>

                    {/* Content Display */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            <span className="text-navy text-[3vw] lg:text-[1vw] font-black tracking-[0.3vw] uppercase mb-[2vw] lg:mb-[1vw] block font-heading">
                                Service Excellence
                            </span>
                            <h2 className="text-[8vw] lg:text-[3vw] font-black text-white font-heading uppercase leading-[0.9] mb-[4vw] lg:mb-[2vw] max-w-full lg:max-w-[80%]">
                                {services[activeIndex].title}
                            </h2>
                            <p className="text-[4.2vw] lg:text-[1.3vw] text-white/70 font-body leading-relaxed mb-[6vw] lg:mb-[3vw]">
                                {services[activeIndex].desc}
                            </p>

                            <button className="flex items-center gap-[3vw] lg:gap-[1vw] text-navy font-black text-[3.5vw] lg:text-[1vw] uppercase tracking-wider group/btn font-heading">
                                Learn more about this service
                                <div className="w-[8vw] h-[8vw] lg:w-[1.8vw] lg:h-[1.8vw] border border-navy rounded-full flex items-center justify-center group-hover/btn:bg-navy group-hover/btn:text-white transition-all">
                                    →
                                </div>
                            </button>
                        </motion.div>
                    </AnimatePresence>

                    {/* Visual Floor Decor */}
                    <div className="absolute bottom-0 left-0 w-full h-[1vw] lg:h-[0.5vw] bg-navy/20" />
                </div>
            </motion.div>
        </div>
    );
};

export default Cards;
