"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Details = () => {
    // Advanced Animation Variants
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.95,
            rotateX: 10
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 20,
                mass: 1,
                duration: 0.8
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="mx-auto flex w-full max-w-[92vw] lg:max-w-[90vw] flex-col items-center gap-8 py-8 pb-24 mt-4 lg:mt-4 lg:gap-12 md:py-12 md:pb-40 overflow-hidden perspective-1000">
            {/* Main Text Container - Premium Paper Style */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textVariants}
                className="w-full rounded-[6vw] lg:rounded-[3vw] bg-white p-8 lg:p-14 shadow-[0_2vw_5vw_rgba(15,23,42,0.05)] border border-navy/5 text-left leading-relaxed relative overflow-hidden group"
            >
                {/* Subtle Decorative Background Element */}
                <div className="absolute top-0 right-0 w-[20vw] h-[20vw] bg-teal/5 rounded-full blur-[6vw] -translate-y-1/2 translate-x-1/2" />

                <p className="relative z-10 text-[4.5vw] lg:text-[1.3vw] text-navy font-medium leading-[1.8] lg:leading-loose font-body italic">
                    Pragmatic Technical Services provides{" "}
                    <span className="text-teal font-bold underline decoration-teal/20 underline-offset-4">top-notch Structural Steel Detailing and Engineering solutions</span>{" "}
                    with over{" "}
                    <span className="text-teal font-bold">500+ years of combined experience.</span>{" "}
                    An exceptional team of professionals with expertise in their respective fields and well versed in{" "}
                    <span className="text-teal font-bold lg:whitespace-nowrap">AISC, CISC, NISD, AWS, OSHA</span>{" "}
                    and other Standard Industry Practices. From designing to building, we give our best to ensure that a project is executed to perfection. Our team has worked on more than{" "}
                    <span className="text-teal font-bold">3500+ projects</span>{" "}
                    with varying capacities —{" "}
                    <span className="text-teal font-bold italic">Power plants, Stadiums, Conveyors, Hospitals and Schools</span>{" "}
                    are a few examples. Leveraging cutting-edge technologies like{" "}
                    <span className="text-teal font-bold italic underline decoration-[1vw] lg:decoration-[0.2vw] underline-offset-[1.5vw] lg:underline-offset-[0.4vw]">SDS/2 and Tekla Structures,</span>{" "}
                    we deliver precise and efficient structural detailing solutions. We look forward to expanding globally and working on a wider range of projects. With technology improving every minute, we are proud to say that we keep up with the latest trends by updating our equipment and software regularly. Pragmatic Technical Services was established specifically to export{" "}
                    <span className="text-teal font-bold">high quality structural and miscellaneous steel detailing services</span>{" "}
                    for steel fabricators, steel erectors and construction firms.
                </p>
            </motion.div>

            {/* Vision & Mission Cards - High Contrast Industrial Grid */}
            <div className="flex w-full flex-col gap-6 lg:flex-row lg:gap-10">
                {/* Vision Card - Deep Navy / Teal Accent */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    className="flex-1 rounded-[6vw] lg:rounded-[2.5vw] bg-navy p-8 lg:p-10 shadow-2xl transition-all duration-500 hover:shadow-teal/10 border border-white/5 group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-[2vw] opacity-10">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <path d="M0 0H60M0 20H60M0 40H60M20 0V60M40 0V60" stroke="white" strokeWidth="1" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <div className="mb-6 lg:mb-8 flex items-center gap-5 lg:gap-6">
                            <div className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-teal/20 shadow-lg backdrop-blur-md transition-all duration-500 group-hover:bg-teal group-hover:scale-110">
                                <svg className="h-7 w-7 lg:h-8 lg:w-8 text-teal group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-[8vw] lg:text-[3vw] font-black tracking-tight text-white font-heading uppercase">Our Vision</h3>
                        </div>
                        <p className="text-[4.2vw] lg:text-[1.2vw] font-medium leading-[1.7] lg:leading-[1.8] text-white/70 font-body">
                            To become a leading global provider of engineering solutions, recognized for our commitment to excellence, innovation, and integrity. We are dedicated to empowering our employees, believing that strong individuals build resilient institutions.
                        </p>
                    </div>
                </motion.div>

                {/* Mission Card - Clean White / Teal Accent */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    className="flex-1 rounded-[6vw] lg:rounded-[2.5vw] bg-white p-8 lg:p-10 shadow-xl border border-navy/5 transition-all duration-500 group hover:shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute bottom-0 left-0 p-[2vw] opacity-10">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <circle cx="30" cy="30" r="28" stroke="#0F172A" strokeWidth="1" strokeDasharray="4 4" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <div className="mb-6 lg:mb-8 flex items-center gap-5 lg:gap-6">
                            <div className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-navy text-white transition-all duration-500 group-hover:bg-teal group-hover:scale-110">
                                <svg className="h-7 w-7 lg:h-8 lg:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-[8vw] lg:text-[3vw] font-black tracking-tight text-navy font-heading uppercase">Our Mission</h3>
                        </div>
                        <p className="text-[4.2vw] lg:text-[1.2vw] font-medium leading-[1.7] lg:leading-[1.8] text-navy/70 font-body">
                            With our strong foundation of expertise, our mission is to deliver world-class structural detailing solutions through precision, innovation, and integrity. We empower our skilled team to exceed global industry standards.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Details;
