"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const ReviewSection = () => {
    const reviews = [
        {
            name: "Marcus V. Sterling",
            role: "Managing Director",
            company: "Apex Infrastructure Group",
            text: "Pragtech's BIM implementation was the backbone of our 40-story residential project. Their precision in structural detailing eliminated 95% of on-site coordination errors and significantly accelerated our delivery timeline.",
            image: "/assets/reviews/rev1.png",
            rating: 5,
            size: "large"
        },
        {
            name: "Elena K. Novak",
            role: "Senior Design Lead",
            company: "Studio Vertex Architects",
            text: "Their attention to detail in steel connectivity design is unmatched. They don't just provide drawings; they provide engineered solutions that work on the first try.",
            image: "/assets/reviews/rev2.png",
            rating: 5,
            size: "small"
        },
        {
            name: "Julian Thorne",
            role: "Chief Operations Officer",
            company: "IronGate Global Infra",
            text: "Reliability and technical depth are the hallmarks of Pragtech. Their structural detailing team handled our massive industrial complex with absolute precision.",
            image: "/assets/reviews/rev3.png",
            rating: 4,
            size: "small"
        },
        {
            name: "Sophia L. Chambers",
            role: "Lead Structural Engineer",
            company: "Urban Core Engineering",
            text: "Digitizing our legacy blueprints into highly accurate LOD 400 BIM models was a game-changer. Pragtech is truly a partner in digital transformation.",
            image: "/assets/reviews/rev4.png",
            rating: 5,
            size: "small"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="relative py-24 lg:py-32 px-6 lg:px-12 overflow-hidden bg-[#fafbfc]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-teal/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-navy/5 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Area */}
                <div className="flex flex-col mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <div className="h-[2px] w-12 bg-teal" />
                        <span className="text-teal font-bold tracking-[0.2em] uppercase text-xs lg:text-sm">Client Testimonials</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-black text-navy leading-[1.1] tracking-tight max-w-2xl"
                    >
                        TRUSTED BY <span className="text-teal">INDUSTRY TITANS</span> GLOBALLY
                    </motion.h2>
                </div>

                {/* Grid Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className={`group relative bg-white border border-slate-100 p-8 lg:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between
                                ${review.size === 'large' ? 'lg:col-span-2' : 'lg:col-span-1'}
                            `}
                        >
                            {/* Card Content */}
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                className={i < review.rating ? "fill-teal text-teal" : "text-slate-200"}
                                            />
                                        ))}
                                    </div>
                                    <Quote className="text-teal/10 group-hover:text-teal/20 transition-colors" size={48} strokeWidth={1.5} />
                                </div>

                                <p className={`text-navy/80 font-medium leading-relaxed mb-10
                                    ${review.size === 'large' ? 'text-xl lg:text-2xl' : 'text-lg'}
                                `}>
                                    "{review.text}"
                                </p>
                            </div>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-lg">
                                        <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-teal text-white p-1 rounded-full shadow-md">
                                        <CheckCircle2 size={12} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-navy font-bold text-lg leading-tight">{review.name}</h4>
                                    <p className="text-slate-500 text-sm font-medium">
                                        {review.role} <span className="text-teal/60 mx-1">•</span> {review.company}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Trust Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap justify-center lg:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    <span className="text-navy/40 font-bold uppercase tracking-widest text-xs">A Decade of Excellence</span>
                    <span className="text-navy/40 font-bold uppercase tracking-widest text-xs">ISO 9001 Certified</span>
                    <span className="text-navy/40 font-bold uppercase tracking-widest text-xs">Global Standards</span>
                    <span className="text-navy/40 font-bold uppercase tracking-widest text-xs">Digitizing Infrastructure</span>
                </motion.div>
            </div>
        </section>
    );
};

export default ReviewSection;

