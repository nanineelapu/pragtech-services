"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ReviewSection = () => {
    const reviews = [
        {
            name: "Sarah Williams",
            title: "Engineering Director",
            company: "SteelFrame",
            text: "Working with this team has been a game-changer. Their BIM coordination services are top-notch.",
            image: "https://i.pravatar.cc/150?u=sarah",
        },
        {
            name: "James Rodriguez",
            title: "Construction Manager",
            company: "MetalWorks",
            text: "Excellent communication and fast turnaround. The steel detailing was precise and met all our requirements.",
            image: "https://i.pravatar.cc/150?u=james",
        },
        {
            name: "Emily Thompson",
            title: "Senior Architect",
            company: "Design & Build",
            text: "Their connection design services saved us weeks. Remarkable technical accuracy and problem-solving.",
            image: "https://i.pravatar.cc/150?u=emily",
        },
        {
            name: "David Miller",
            title: "Project Head",
            company: "SkyHigh",
            text: "Quality and attention to detail is second to none. Handled our complex industrial framework with ease.",
            image: "https://i.pravatar.cc/150?u=david",
        },
        {
            name: "Sofia Chen",
            title: "Structural Engineer",
            company: "Urban Detailing",
            text: "Highly recommended for large-scale projects. They provide innovative solutions to complex problems.",
            image: "https://i.pravatar.cc/150?u=sofia",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-[#faf9f6] rounded-[6vw] lg:rounded-[4vw] mt-[8vw] lg:mt-[5vw] py-[12vw] lg:py-[8vw] px-[6vw] lg:px-[4vw] flex flex-col items-center overflow-hidden w-[92%] mx-auto"
        >
            {/* Header Content */}
            <div className="w-full flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-[4vw] lg:gap-0 mb-[10vw] lg:mb-[2vw]">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-1/2 lg:w-full"
                >
                    <h2 className="text-[8vw] lg:text-[4vw] font-black text-[#153a20] tracking-tighter leading-none uppercase">
                        CLIENT <br className="lg:hidden" /> <span className="text-[#4dbb6b]">VOICES</span>
                    </h2>
                    <div className="w-[12vw] lg:w-[6vw] h-[0.8vw] lg:h-[0.3vw] bg-[#4dbb6b] ml-0 mt-[2vw] rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-1/2 lg:w-full lg:mt-[2vw]"
                >
                    <p className="text-[3vw] lg:text-[1.1vw] text-[#153a20]/40 font-bold uppercase tracking-widest text-right lg:text-left">
                        Trusted globally <br className="lg:hidden" /> since 2012
                    </p>
                </motion.div>
            </div>

            {/* Circular Orbit Slider */}
            <div className="relative w-full h-[100vw] lg:h-[40vw] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: -50 }}
                        transition={{ duration: 0.6, ease: "circOut" }}
                        className="absolute flex flex-col items-center justify-center text-center p-[4vw] z-20"
                    >
                        {/* Circular Review Pod */}
                        <div className="relative rounded-full aspect-square border-2 border-[#153a20]/10 flex flex-col items-center justify-center bg-white shadow-2xl w-[85vw] lg:w-[35vw]">
                            {/* Quote Icon */}
                            <div className="absolute top-[10%] bg-[#4dbb6b] text-white w-[10vw] lg:w-[3vw] h-[10vw] lg:h-[3vw] rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-[4vw] lg:w-[1.2vw] h-[4vw] lg:h-[1.2vw]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H16.017C14.9124 7 14.017 7.89543 14.017 9V12M3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 15.1046 10 14V9C10 7.89543 9.10457 7 8 7H5C3.89543 7 3 7.89543 3 9V12" />
                                </svg>
                            </div>

                            {/* Main Text Content */}
                            <div className="max-w-[85%] lg:max-w-[75%] flex flex-col items-center">
                                <p className="text-[#153a20] text-[3.8vw] lg:text-[1.2vw] font-bold leading-relaxed italic mb-[5vw] lg:mb-[2vw]">
                                    "{reviews[currentIndex].text}"
                                </p>

                                {/* Author Info */}
                                <div className="flex flex-col items-center">
                                    <div className="w-[15vw] lg:w-[4.5vw] h-[15vw] lg:h-[4.5vw] rounded-full overflow-hidden border-2 border-[#4dbb6b] mb-[3vw] lg:mb-[1vw]">
                                        <img src={reviews[currentIndex].image} alt={reviews[currentIndex].name} className="w-full h-full object-cover" />
                                    </div>
                                    <h4 className="text-[#153a20] text-[4.5vw] lg:text-[1.4vw] font-black tracking-tight">{reviews[currentIndex].name}</h4>
                                    <span className="text-[#4dbb6b] text-[2.5vw] lg:text-[0.8vw] font-bold uppercase tracking-widest mt-1 lg:mt-0">{reviews[currentIndex].company}</span>
                                </div>
                            </div>

                            {/* Background Decorative Circle */}
                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#4dbb6b]/10 animate-[spin_60s_linear_infinite]" />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Orbiting Ring - Visual Only */}
                <div className="hidden lg:block absolute w-[55vw] h-[55vw] rounded-full border border-[#153a20]/5 pointer-events-none" />
            </div>

            {/* Pagination Dots */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex gap-[2.5vw] lg:gap-[1vw] mt-[8vw] lg:mt-[4vw]"
            >
                {reviews.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-[2vw] lg:h-[0.8vw] rounded-full transition-all duration-500
                            ${currentIndex === i ? 'bg-[#153a20] w-[6vw] lg:w-[2.5vw]' : 'bg-[#153a20]/20 w-[2vw] lg:w-[0.8vw]'}`}
                    ></button>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default ReviewSection;
