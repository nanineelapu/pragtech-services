"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CustomerFocus = () => {
    const focusItems = [
        {
            id: "01",
            title: "Precision Delivery",
            desc: "Deliver on time with extreme technical accuracy.",
            bg: "bg-navy text-white",
        },
        {
            id: "02",
            title: "Inventive Design",
            desc: "Giving highest importance to creativity and innovation.",
            bg: "bg-teal text-navy",
        },
        {
            id: "03",
            title: "Industry Standard",
            desc: "Strict compliance with international industry guidelines.",
            bg: "bg-gray-light text-navy",
        },
        {
            id: "04",
            title: "Global Quality",
            desc: "Meeting world-class standards in every structural detail.",
            bg: "bg-white border border-navy/10 text-navy",
        }
    ];

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

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            rotate: -2,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section className="mx-auto flex w-full max-w-[92vw] flex-col items-center py-[15vw] lg:py-[8vw] bg-transparent overflow-hidden">
            {/* Main Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center mb-[10vw] lg:mb-[6vw]"
            >
                <h2 className="text-[12vw] lg:text-[5vw] font-black text-navy tracking-tighter uppercase anton-regular">
                    The Pragtech Ltd <span className="text-teal">Focus</span>
                </h2>
                <div className="w-[8vw] lg:w-[4vw] h-[0.8vw] lg:h-[0.3vw] bg-teal mx-auto mt-[1vw] rounded-full" />
            </motion.div>

            {/* Method Cards Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[4vw] lg:gap-[2vw] w-full px-[2vw]"
            >
                {focusItems.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className={`${item.bg} p-[6vw] lg:p-[2.5vw] min-h-[45vw] lg:min-h-[18vw] rounded-tr-[12vw] lg:rounded-tr-[5vw] rounded-bl-[12vw] lg:rounded-bl-[5vw] shadow-sm transition-all duration-500 hover:shadow-xl hover:translate-y-[-0.5vw] group cursor-default flex flex-col justify-between`}
                    >
                        {/* Number Indicator */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 0.8, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="text-[10vw] lg:text-[4vw] font-black text-inherit anton-regular leading-none"
                        >
                            {item.id}
                        </motion.div>

                        {/* Text Content */}
                        <div className="mt-auto">
                            <h3 className="text-[6vw] lg:text-[1.5vw] font-black text-inherit anton-regular uppercase leading-tight mb-[1vw] lg:mb-[0.5vw]">
                                {item.title}
                            </h3>

                            {/* Hover Reveal Description */}
                            <div className="h-auto lg:h-0 overflow-hidden opacity-100 lg:opacity-0 group-hover:lg:h-auto group-hover:lg:opacity-100 transition-all duration-500 ease-in-out">
                                <p className="text-[3.8vw] lg:text-[0.9vw] text-inherit opacity-70 font-medium eb-garamond italic pt-[1vw] lg:pt-[0.5vw]">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom Slogan */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="mt-[12vw] lg:mt-[6vw] text-center max-w-[85vw] lg:max-w-[50vw]"
            >
                <p className="text-[4.5vw] lg:text-[1.4vw] font-medium text-navy eb-garamond italic leading-[1.6]">
                    "Our focus is not just on the drawing, but on the success of the execution. We are committed to high-quality structural detailing at every stage."
                </p>
            </motion.div>
        </section>
    );
};

export default CustomerFocus;
