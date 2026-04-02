"use client";

import React from "react";
import { motion } from "framer-motion";

const DetailsPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-transparent pt-[12vw] lg:pt-[8vw] pb-[6vw] lg:pb-[2vw] text-center w-full overflow-x-hidden">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="px-[6vw] lg:px-[4vw] w-full"
            >
                {/* Heading Label Decor - Animated Expansion */}
                <motion.div
                    variants={{
                        hidden: { scaleX: 0, opacity: 0 },
                        visible: { scaleX: 1, opacity: 1, transition: { duration: 1, ease: "circOut" } }
                    }}
                    className="w-[12vw] lg:w-[5vw] h-[1.2vw] lg:h-[0.3vw] bg-teal mx-auto mb-[6vw] lg:mb-[2.5vw] rounded-full origin-center"
                />

                {/* Main Heading Hierarchy */}
                <motion.h1
                    variants={itemVariants}
                    className="text-[12vw] lg:text-[4vw] font-black text-navy uppercase anton-regular tracking-tighter leading-[0.9] mb-[4vw] lg:mb-[2vw]"
                >
                    Complete Service <br className="lg:hidden" /> <span className="text-teal">Portfolio</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="max-w-[85vw] lg:max-w-[45vw] mx-auto text-[4.5vw] lg:text-[1.4vw] text-navy/70 eb-garamond leading-relaxed"
                >
                    A multi-dimensional network of structural detailing excellence tailored to elevate global industrial frameworks.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default DetailsPage;
