"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HomeSection = () => {
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const loaded = sessionStorage.getItem("pragtech_loaded") === "true";
            setHasLoaded(loaded);
        }
    }, []);

    // Animation Variants - Zero duration if already loaded to prevent re-animation
    const containerVariants = {
        hidden: { opacity: hasLoaded ? 1 : 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: hasLoaded ? 0 : 0.15,
                delayChildren: hasLoaded ? 0 : 3.8,
                duration: hasLoaded ? 0 : 0.8,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: hasLoaded ? 1 : 0, y: hasLoaded ? 0 : 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: hasLoaded ? 0 : 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const frameVariants = {
        hidden: { opacity: hasLoaded ? 1 : 0, scale: hasLoaded ? 1 : 1.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: hasLoaded ? 0 : 1.5, delay: hasLoaded ? 0 : 3.5, ease: "easeOut" }
        }
    };

    const lineVariants = {
        hidden: { scaleX: hasLoaded ? 1 : 0, opacity: hasLoaded ? 1 : 0 },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: { duration: hasLoaded ? 0 : 1.2, delay: hasLoaded ? 0 : 0.8, ease: "circOut" }
        }
    };

    return (
        <section className="relative w-full h-[140vw] md:h-[50vw] overflow-hidden group bg-[#ffffff]">
            {/* Background Image with Layered Overlays */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Steel Detailing Expert - Precision Industrial Backdrop"
                    fill
                    className="opacity-10 grayscale group-hover:scale-105 transition-transform duration-1000 ease-out object-cover"
                    priority
                />

                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.08]">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#153a20" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* New Gradient Style */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(77,187,107,0.1)_0%,transparent_40%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(21,58,32,0.05)_0%,transparent_40%)]" />
            </div>

            {/* Main Content Container */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative h-full flex flex-col items-center justify-center text-center px-[6vw] md:px-[4vw]"
            >
                {/* Decorative Frame Elements */}
                <motion.div
                    variants={frameVariants}
                    className="absolute top-[20vw] bottom-[20vw] md:top-[10vw] md:bottom-[10vw] left-[10vw] right-[10vw] md:left-[15vw] md:right-[15vw] pointer-events-none"
                >
                    <div className="absolute top-0 left-0 w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] border-t-[0.5vw] md:border-t-[0.2vw] border-l-[0.5vw] md:border-l-[0.2vw] border-[#153a20]/20" />
                    <div className="absolute top-0 right-0 w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] border-t-[0.5vw] md:border-t-[0.2vw] border-r-[0.5vw] md:border-r-[0.2vw] border-[#153a20]/20" />
                    <div className="absolute bottom-0 left-0 w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] border-b-[0.5vw] md:border-b-[0.2vw] border-l-[0.5vw] md:border-l-[0.2vw] border-[#153a20]/20" />
                    <div className="absolute bottom-0 right-0 w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] border-b-[0.5vw] md:border-b-[0.2vw] border-r-[0.5vw] md:border-r-[0.2vw] border-[#153a20]/20" />

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5vw] h-[1.5vw] md:w-[0.6vw] md:h-[0.6vw] bg-[#4dbb6b]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1.5vw] h-[1.5vw] md:w-[0.6vw] md:h-[0.6vw] bg-[#4dbb6b]" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[1.5vw] h-[1.5vw] md:w-[0.6vw] md:h-[0.6vw] bg-[#4dbb6b]" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[1.5vw] h-[1.5vw] md:w-[0.6vw] md:h-[0.6vw] bg-[#4dbb6b]" />
                </motion.div>

                {/* Text Block */}
                <div className="z-10 flex flex-col items-center gap-[3vw] md:gap-[1vw]">
                    <motion.h1
                        variants={itemVariants}
                        className="text-[#153a20] text-[15.5vw] md:text-[12vw] font-black leading-[0.8] tracking-tight anton-regular select-none uppercase"
                    >
                        PRECISION
                    </motion.h1>

                    {/* Green Separator Line */}
                    <motion.div
                        variants={lineVariants}
                        className="relative w-[70vw] md:w-[35vw] h-px bg-linear-to-r from-transparent via-[#4dbb6b] to-transparent my-[3vw] md:my-[1vw]"
                    >
                        <div className="absolute inset-0 blur-[2vw] md:blur-[0.4vw] bg-[#4dbb6b]/20" />
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[3vw] md:w-[1vw] h-[3vw] md:h-[1vw] bg-[#ffffff] border border-[#4dbb6b] rotate-45 flex items-center justify-center">
                            <div className="w-[1vw] md:w-[0.2vw] h-[1vw] md:h-[0.2vw] bg-[#4dbb6b] rounded-full" />
                        </div>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-[#4dbb6b] text-[4.2vw] md:text-[3vw] font-black tracking-[1.5vw] md:tracking-[0.8vw] uppercase anton-regular"
                    >
                        IN EVERY DETAIL
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        className="mt-[5vw] md:mt-[2.5vw] flex flex-col items-center gap-[1.5vw] md:gap-[0.5vw]"
                    >
                        <h3 className="text-[#153a20]/80 text-[3.2vw] md:text-[1.8vw] font-black tracking-[0.8vw] md:tracking-[0.3vw] uppercase anton-regular">
                            STEEL DETAILING EXPERTS
                        </h3>
                        <p className="max-w-[80vw] text-[#153a20]/60 text-[3.2vw] md:text-[1.4vw] font-medium tracking-[0.1vw] eb-garamond italic">
                            Your projects are in safe hands with global structural precision.
                        </p>
                    </motion.div>
                </div>

                {/* Interactive Slider representation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: hasLoaded ? 0.5 : 2, duration: 1 }}
                    className="absolute bottom-[8vw] md:bottom-[3vw] flex items-center gap-[3vw] md:gap-[1.2vw]"
                >
                    <div className="w-[4vw] md:w-[1.4vw] h-[4vw] md:h-[1.4vw] rounded-full border-2 border-[#4dbb6b] flex items-center justify-center">
                        <div className="w-[1.5vw] md:w-[0.5vw] h-[1.5vw] md:h-[0.5vw] rounded-full bg-[#4dbb6b]" />
                    </div>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-[1.5vw] md:w-[0.6vw] h-[1.5vw] md:h-[0.6vw] rounded-full bg-[#153a20]/10 hover:bg-[#153a20]/30 transition-colors cursor-pointer" />
                    ))}
                </motion.div>
            </motion.div>

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(21,58,32,0.03)_100%)] pointer-events-none" />
        </section>
    );
};

export default HomeSection;
