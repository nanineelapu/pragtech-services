"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const featuredData = [
    {
        id: "01",
        title: "STRUCTURAL STEEL",
        desc: "Management of high-complexity projects utilizing world-class engineering standards for structural integrity.",
        tag: "Core Engineering"
    },
    {
        id: "02",
        title: "MISC STEEL DETAIL",
        desc: "Comprehensive solutions for precise secondary structural elements including gratings, handrails, and ladders.",
        tag: "Secondary Design"
    },
    {
        id: "03",
        title: "CONNECTION DESIGN",
        desc: "Expert steel connection engineering through global partners, ensuring time-efficient fabrication and safety.",
        tag: "Global Partners"
    },
    {
        id: "04",
        title: "INDUSTRIAL STEEL",
        desc: "Specialized detailing for complex industrial facilities, warehouses, and heavy-duty manufacturing grids.",
        tag: "Heavy Industry"
    },
    {
        id: "05",
        title: "BIM MODELING",
        desc: "Harnessing 3D digital models for superior coordination, clash detection, and seamless project execution.",
        tag: "Digital Twins"
    }
];

const FeaturedServices = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % featuredData.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + featuredData.length) % featuredData.length);

    const activeItem = featuredData[activeIndex];

    const slideVariants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.5, ease: "easeOut" }
    };

    return (
        <section className="relative w-full bg-[#faf9f6] py-[15vw] lg:py-[10vw] px-[5vw] overflow-hidden flex flex-col items-center">
            {/* Background Narrative Watermark - Inverted to Green Trace */}
            <AnimatePresence mode="wait">
                <motion.div 
                    key={`bg-${activeIndex}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.04, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1 }}
                    className="absolute top-[10vw] lg:top-[5vw] left-0 w-full text-center text-[#153a20] text-[25vw] lg:text-[20vw] font-black anton-regular pointer-events-none select-none tracking-tighter uppercase whitespace-nowrap"
                >
                    {activeItem.title}
                </motion.div>
            </AnimatePresence>

            {/* Main Carousel Wrapper */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-[95vw] lg:max-w-[90vw] flex flex-col items-center"
            >

                {/* Header Label */}
                <div className="flex items-center gap-[4vw] lg:gap-[1vw] mb-[10vw] lg:mb-[6vw]">
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-[10vw] lg:w-[3vw] h-px bg-[#4dbb6b] origin-left" 
                    />
                    <span className="text-[#4dbb6b] text-[3vw] lg:text-[0.9vw] font-black tracking-[0.5vw] uppercase anton-regular">Featured Capabilities</span>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-[10vw] lg:w-[3vw] h-px bg-[#4dbb6b] origin-right" 
                    />
                </div>

                {/* Content Split: Text & Preview */}
                <div className="w-full flex flex-col lg:flex-row items-center gap-[12vw] lg:gap-[6vw] min-h-[35vw]">

                    {/* Left Side: Active Content */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left min-h-[50vw] lg:min-h-0">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={activeIndex}
                                {...slideVariants}
                                className="w-full h-full flex flex-col items-center lg:items-start"
                            >
                                <span className="text-[10vw] lg:text-[4vw] text-[#4dbb6b] anton-regular leading-none mb-[2vw] lg:mb-[1vw]">
                                    {activeItem.id}
                                </span>
                                <h3 className="text-[12vw] lg:text-[7vw] font-black text-[#153a20] anton-regular uppercase leading-[0.8] mb-[4vw] lg:mb-[2vw] tracking-tighter">
                                    {activeItem.title}
                                </h3>
                                <p className="text-[4.5vw] lg:text-[1.8vw] text-[#153a20]/70 eb-garamond italic leading-[1.6] mb-[8vw] lg:mb-[4vw] max-w-[85vw] lg:max-w-[40vw]">
                                    "{activeItem.desc}"
                                </p>

                                <div className="flex flex-col lg:flex-row items-center gap-[4vw] lg:gap-[1.5vw]">
                                    <button className="px-[10vw] lg:px-[4vw] py-[3.5vw] lg:py-[1.2vw] bg-[#153a20] hover:bg-[#4dbb6b] text-white rounded-full anton-regular uppercase tracking-widest text-[3.2vw] lg:text-[0.8vw] transition-all active:scale-95 cursor-pointer shadow-xl whitespace-nowrap">
                                        Request Details
                                    </button>
                                    <span className="text-[#153a20]/20 text-[3.2vw] lg:text-[0.8vw] font-bold tracking-[0.2vw] uppercase anton-regular">
                                        / {activeItem.tag}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Side: Navigation & Timeline */}
                    <div className="w-full lg:w-[35vw] flex flex-col gap-[6vw] lg:gap-[3vw]">
                        {/* Selector List */}
                        <div className="flex flex-col gap-[2vw] lg:gap-[1vw]">
                            {featuredData.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`group flex items-center justify-between p-[4vw] lg:p-[1.5vw] border-b transition-all duration-500 ${activeIndex === index ? 'border-[#4dbb6b] bg-[#153a20]/5' : 'border-[#153a20]/10 hover:border-[#153a20]/30'
                                        }`}
                                >
                                    <span className={`text-[4vw] lg:text-[1.2vw] anton-regular uppercase transition-colors ${activeIndex === index ? 'text-[#153a20]' : 'text-[#153a20]/30 group-hover:text-[#153a20]/60'
                                        }`}>
                                        {item.title}
                                    </span>
                                    <motion.div 
                                        animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                        className={`w-[8vw] h-[8vw] lg:w-[2.5vw] lg:h-[2.5vw] rounded-full border flex items-center justify-center transition-all ${activeIndex === index ? 'bg-[#4dbb6b] border-[#4dbb6b] text-white' : 'border-[#153a20]/10 text-[#153a20]/30'
                                        }`}>
                                        →
                                    </motion.div>
                                </button>
                            ))}
                        </div>

                        {/* Pagination Progress */}
                        <div className="flex items-center gap-[4vw] lg:gap-[2vw] mt-[4vw] lg:mt-[2vw]">
                            <button onClick={prevSlide} className="w-[12vw] h-[12vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-[#153a20]/5 text-[#153a20] hover:bg-[#153a20] hover:text-white transition-all cursor-pointer flex items-center justify-center shadow-sm">
                                ←
                            </button>
                            <div className="flex-1 h-px bg-[#153a20]/10 relative overflow-hidden">
                                <motion.div
                                    initial={false}
                                    animate={{ width: `${((activeIndex + 1) / featuredData.length) * 100}%` }}
                                    transition={{ duration: 0.7, ease: "circOut" }}
                                    className="absolute inset-y-0 left-0 bg-[#4dbb6b]"
                                />
                            </div>
                            <button onClick={nextSlide} className="w-[12vw] h-[12vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-[#153a20]/5 text-[#153a20] hover:bg-[#153a20] hover:text-white transition-all cursor-pointer flex items-center justify-center shadow-sm">
                                →
                            </button>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default FeaturedServices;
