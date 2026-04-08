"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MainContactContent = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "circOut", delay: 0.4 }
        }
    };

    return (
        <section className="bg-transparent py-[15vw] lg:py-[10vw] px-[6vw] lg:px-[4vw] relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[50vw] lg:w-[30vw] h-[50vw] lg:h-[30vw] bg-navy/2 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-[92vw] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[10vw] lg:gap-[6vw] relative z-10">
                {/* Left Column: Technical Nodes (Locations) */}
                <motion.div
                    id="location-hubs"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="flex flex-col gap-[8vw] lg:gap-[4vw]"
                >
                    <motion.div variants={cardVariants} className="flex flex-col">
                        <h2 className="text-[10vw] lg:text-[4vw] font-black text-navy tracking-tighter leading-none anton-regular uppercase">
                            Global <span className="text-teal">Connectivity</span>
                        </h2>
                        <div className="w-[15vw] lg:w-[8vw] h-[1vw] lg:h-[0.3vw] bg-teal mt-[3vw] lg:mt-[1.5vw]" />
                        <p className="mt-[4vw] lg:mt-[2vw] text-[4.2vw] lg:text-[1.4vw] text-navy/60 eb-garamond italic max-w-full lg:max-w-[35vw]">
                            Strategic hubs positioned to deliver precision engineering across four continents.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vw] lg:gap-[2.5vw]">
                        {/* UK HQ Card */}
                        <motion.div variants={cardVariants} className="group bg-white/80 backdrop-blur-md rounded-[4vw] lg:rounded-[2vw] p-[6vw] lg:p-[3vw] flex flex-col items-start border border-navy/5 hover:border-teal/40 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="flex items-center gap-[4vw] lg:gap-[1.2rem] mb-[4vw] lg:mb-[2vw]">
                                <div className="p-[2.5vw] lg:p-[0.8vw] bg-[#ffffff] rounded-xl border border-navy/5">
                                    <img src="https://flagcdn.com/gb.svg" className="w-[8vw] lg:w-[2.5vw] h-auto rounded-sm shadow-sm" alt="UK" />
                                </div>
                                <span className="text-[6vw] lg:text-[1.8vw] font-black text-navy anton-regular tracking-tight uppercase">UK</span>
                            </div>
                            <span className="text-teal font-black text-[2.5vw] lg:text-[0.8vw] uppercase tracking-[0.2vw] mb-[4vw] lg:mb-[1.5vw] anton-regular">Global Headquarters</span>
                            <p className="text-navy/70 text-[4.2vw] lg:text-[1.1vw] eb-garamond font-medium leading-relaxed mb-auto">
                                London, United Kingdom <br />
                                <span className="text-teal/60 italic text-[3.5vw] lg:text-[0.9vw]">[Address details updating shortly]</span>
                            </p>
                            <div className="mt-[5vw] lg:mt-[2vw] pt-[4vw] lg:pt-[1.5vw] border-t border-navy/5 w-full">
                                <span className="text-navy font-black text-[5vw] lg:text-[1.2vw] anton-regular tracking-tight">+44 2868065002</span>
                            </div>
                        </motion.div>

                        {/* USA Card */}
                        <motion.div variants={cardVariants} className="group bg-white/80 backdrop-blur-md rounded-[4vw] lg:rounded-[2vw] p-[6vw] lg:p-[3vw] flex flex-col items-start border border-navy/5 hover:border-teal/40 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="flex items-center gap-[4vw] lg:gap-[1.2rem] mb-[4vw] lg:mb-[2vw]">
                                <div className="p-[2.5vw] lg:p-[0.8vw] bg-[#ffffff] rounded-xl border border-navy/5">
                                    <img src="https://flagcdn.com/us.svg" className="w-[8vw] lg:w-[2.5vw] h-auto rounded-sm shadow-sm" alt="USA" />
                                </div>
                                <span className="text-[6vw] lg:text-[1.8vw] font-black text-navy anton-regular tracking-tight uppercase">USA</span>
                            </div>
                            <span className="text-teal font-black text-[2.5vw] lg:text-[0.8vw] uppercase tracking-[0.2vw] mb-[4vw] lg:mb-[1.5vw] anton-regular">North American Hub</span>
                            <p className="text-navy/70 text-[4.2vw] lg:text-[1.1vw] eb-garamond font-medium leading-relaxed mb-auto">
                                4080, McGinnis Ferry Road <br /> Suite #1403, Alpharetta, <br /> GA 30005, USA.
                            </p>
                            <div className="mt-[5vw] lg:mt-[2vw] pt-[4vw] lg:pt-[1.5vw] border-t border-navy/5 w-full">
                                <span className="text-navy font-black text-[5vw] lg:text-[1.2vw] anton-regular tracking-tight">+1 770-809-0806</span>
                            </div>
                        </motion.div>

                        {/* India Card */}
                        <motion.div variants={cardVariants} className="group bg-white/80 backdrop-blur-md rounded-[4vw] lg:rounded-[2vw] p-[6vw] lg:p-[3vw] flex flex-col items-start border border-navy/5 hover:border-teal/40 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="flex items-center gap-[4vw] lg:gap-[1.2rem] mb-[4vw] lg:mb-[2vw]">
                                <div className="p-[2.5vw] lg:p-[0.8vw] bg-[#ffffff] rounded-xl border border-navy/5">
                                    <img src="https://flagcdn.com/in.svg" className="w-[8vw] lg:w-[2.5vw] h-auto rounded-sm shadow-sm" alt="India" />
                                </div>
                                <span className="text-[6vw] lg:text-[1.8vw] font-black text-navy anton-regular tracking-tight uppercase">India</span>
                            </div>
                            <span className="text-teal font-black text-[2.5vw] lg:text-[0.8vw] uppercase tracking-[0.2vw] mb-[4vw] lg:mb-[1.5vw] anton-regular">Center of Excellence</span>
                            <p className="text-navy/70 text-[4.2vw] lg:text-[1.1vw] eb-garamond font-medium leading-relaxed mb-auto">
                                MJR Magnifique IT Park, <br /> Gachibowli, Hyderabad, <br /> Telangana, India – 500008
                            </p>
                            <div className="mt-[5vw] lg:mt-[2vw] pt-[4vw] lg:pt-[1.5vw] border-t border-navy/5 w-full">
                                <span className="text-navy font-black text-[5vw] lg:text-[1.2vw] anton-regular tracking-tight">+91 91542 45831</span>
                            </div>
                        </motion.div>

                        {/* UAE Card */}
                        <motion.div variants={cardVariants} className="group bg-white/80 backdrop-blur-md rounded-[4vw] lg:rounded-[2vw] p-[6vw] lg:p-[3vw] flex flex-col items-start border border-navy/5 hover:border-teal/40 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="flex items-center gap-[4vw] lg:gap-[1.2rem] mb-[4vw] lg:mb-[2vw]">
                                <div className="p-[2.5vw] lg:p-[0.8vw] bg-[#ffffff] rounded-xl border border-navy/5">
                                    <img src="https://flagcdn.com/ae.svg" className="w-[8vw] lg:w-[2.5vw] h-auto rounded-sm shadow-sm" alt="UAE" />
                                </div>
                                <span className="text-[6vw] lg:text-[1.8vw] font-black text-navy anton-regular tracking-tight uppercase">UAE</span>
                            </div>
                            <span className="text-teal font-black text-[2.5vw] lg:text-[0.8vw] uppercase tracking-[0.2vw] mb-[4vw] lg:mb-[1.5vw] anton-regular">Middle East Hub</span>
                            <p className="text-navy/70 text-[4.2vw] lg:text-[1.1vw] eb-garamond font-medium leading-relaxed mb-auto">
                                Dubai, United Arab Emirates <br />
                                <span className="text-teal/60 italic text-[3.5vw] lg:text-[0.9vw]">[Address details updating shortly]</span>
                            </p>
                            <div className="mt-[5vw] lg:mt-[2vw] pt-[4vw] lg:pt-[1.5vw] border-t border-navy/5 w-full">
                                <span className="text-navy font-black text-[5vw] lg:text-[1.2vw] anton-regular tracking-tight">+971 770-809-0806</span>
                            </div>
                        </motion.div>

                        {/* Canada Card */}
                        <motion.div variants={cardVariants} className="group bg-white/80 backdrop-blur-md rounded-[4vw] lg:rounded-[2vw] p-[6vw] lg:p-[3vw] flex flex-col items-start border border-navy/5 hover:border-teal/40 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="flex items-center gap-[4vw] lg:gap-[1.2rem] mb-[4vw] lg:mb-[2vw]">
                                <div className="p-[2.5vw] lg:p-[0.8vw] bg-[#ffffff] rounded-xl border border-navy/5">
                                    <img src="https://flagcdn.com/ca.svg" className="w-[8vw] lg:w-[2.5vw] h-auto rounded-sm shadow-sm" alt="Canada" />
                                </div>
                                <span className="text-[6vw] lg:text-[1.8vw] font-black text-navy anton-regular tracking-tight uppercase">Canada</span>
                            </div>
                            <span className="text-teal font-black text-[2.5vw] lg:text-[0.8vw] uppercase tracking-[0.2vw] mb-[4vw] lg:mb-[1.5vw] anton-regular">Service Expansion</span>
                            <p className="text-navy/70 text-[4.2vw] lg:text-[1.1vw] eb-garamond font-medium leading-relaxed mb-auto">
                                Toronto, Ontario, Canada <br />
                                <span className="text-teal/60 italic text-[3.5vw] lg:text-[0.9vw]">[Address details updating shortly]</span>
                            </p>
                            <div className="mt-[5vw] lg:mt-[2vw] pt-[4vw] lg:pt-[1.5vw] border-t border-navy/5 w-full">
                                <span className="text-navy font-black text-[5vw] lg:text-[1.2vw] anton-regular tracking-tight">+1 281-648-8137</span>
                            </div>
                        </motion.div>

                        {/* Australia Card */}
                        <motion.div variants={cardVariants} className="group bg-white/80 backdrop-blur-md rounded-[4vw] lg:rounded-[2vw] p-[6vw] lg:p-[3vw] flex flex-col items-start border border-navy/5 hover:border-teal/40 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="flex items-center gap-[4vw] lg:gap-[1.2rem] mb-[4vw] lg:mb-[2vw]">
                                <div className="p-[2.5vw] lg:p-[0.8vw] bg-[#ffffff] rounded-xl border border-navy/5">
                                    <img src="https://flagcdn.com/au.svg" className="w-[8vw] lg:w-[2.5vw] h-auto rounded-sm shadow-sm" alt="Australia" />
                                </div>
                                <span className="text-[6vw] lg:text-[1.8vw] font-black text-navy anton-regular tracking-tight uppercase">Australia</span>
                            </div>
                            <span className="text-teal font-black text-[2.5vw] lg:text-[0.8vw] uppercase tracking-[0.2vw] mb-[4vw] lg:mb-[1.5vw] anton-regular">APAC Regional hub</span>
                            <p className="text-navy/70 text-[4.2vw] lg:text-[1.1vw] eb-garamond font-medium leading-relaxed mb-auto">
                                Sydney, NSW, Australia <br />
                                <span className="text-teal/60 italic text-[3.5vw] lg:text-[0.9vw]">[Address details updating shortly]</span>
                            </p>
                            <div className="mt-[5vw] lg:mt-[2vw] pt-[4vw] lg:pt-[1.5vw] border-t border-navy/5 w-full">
                                <span className="text-navy font-black text-[5vw] lg:text-[1.2vw] anton-regular tracking-tight">+61 1107-HWY-103W</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column: Secure Contact Interface (Form) */}
                <motion.div
                    id="contact-form"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={formVariants}
                    className="bg-navy rounded-[8vw] lg:rounded-[3vw] p-[8vw] lg:p-[4.5vw] shadow-[0_4vw_10vw_-2vw_rgba(15,23,42,0.4)] relative overflow-hidden flex flex-col h-fit"
                >
                    {/* Decorative form subtle grid */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 10 L100 10 M0 30 L100 30 M20 0 L20 100 M80 0 L80 100" stroke="#14b8a6" strokeWidth="0.1" fill="none" />
                        </svg>
                    </div>

                    <div className="relative z-10 mb-[8vw] lg:mb-[4vw]">
                        <h3 className="text-[8vw] lg:text-[2.5vw] font-black text-white anton-regular uppercase tracking-tight">
                            Secure <span className="text-teal">Transmission</span>
                        </h3>
                        <p className="text-[#faf9f6]/40 eb-garamond text-[3.5vw] lg:text-[1vw] italic">Initialize project consultation or general inquiry.</p>
                    </div>

                    <form className="relative z-10 flex flex-col gap-[6vw] lg:gap-[2.5vw]">
                        <div className="grid grid-cols-1 gap-[4vw] lg:gap-[2vw]">
                            <div className="flex flex-col gap-[2vw] lg:gap-[0.8vw]">
                                <label className="text-[3vw] lg:text-[0.8vw] font-black text-teal uppercase tracking-widest anton-regular">Operator Name</label>
                                <input className="px-[4vw] lg:px-[1.5vw] py-[3.5vw] lg:py-[1.2vw] bg-white/5 border border-white/10 rounded-[2vw] lg:rounded-[1vw] text-white text-[4vw] lg:text-[1.1vw] outline-none focus:border-teal focus:bg-white/10 transition-all font-medium placeholder:text-white/20" placeholder="E.g. John Doe" />
                            </div>

                            <div className="flex flex-col gap-[2vw] lg:gap-[0.8vw]">
                                <label className="text-[3vw] lg:text-[0.8vw] font-black text-teal uppercase tracking-widest anton-regular">Encrypted Email</label>
                                <input className="px-[4vw] lg:px-[1.5vw] py-[3.5vw] lg:py-[1.2vw] bg-white/5 border border-white/10 rounded-[2vw] lg:rounded-[1vw] text-white text-[4vw] lg:text-[1.1vw] outline-none focus:border-teal focus:bg-white/10 transition-all font-medium placeholder:text-white/20" placeholder="operator@domain.com" />
                            </div>

                            <div className="flex flex-col gap-[2vw] lg:gap-[0.8vw]">
                                <label className="text-[3vw] lg:text-[0.8vw] font-black text-teal uppercase tracking-widest anton-regular">Communication Node</label>
                                <input className="px-[4vw] lg:px-[1.5vw] py-[3.5vw] lg:py-[1.2vw] bg-white/5 border border-white/10 rounded-[2vw] lg:rounded-[1vw] text-white text-[4vw] lg:text-[1.1vw] outline-none focus:border-teal focus:bg-white/10 transition-all font-medium placeholder:text-white/20" placeholder="+1 (XXX) XXX-XXXX" />
                            </div>

                            <div className="flex flex-col gap-[2vw] lg:gap-[0.8vw]">
                                <label className="text-[3vw] lg:text-[0.8vw] font-black text-teal uppercase tracking-widest anton-regular">Message Payload</label>
                                <textarea className="px-[4vw] lg:px-[1.5vw] py-[3.5vw] lg:py-[1.2vw] bg-white/5 border border-white/10 rounded-[2vw] lg:rounded-[1vw] text-white text-[4vw] lg:text-[1.1vw] outline-none focus:border-teal focus:bg-white/10 transition-all min-h-[35vw] lg:min-h-[12vw] resize-none font-medium placeholder:text-white/20" placeholder="Describe the project scope or inquiry details..." />
                            </div>
                        </div>

                        <div className="flex items-start gap-[4vw] lg:gap-[1.2vw] py-[4vw] lg:py-[1.5vw] bg-white/3 p-[4vw] lg:p-[2vw] rounded-[3vw] lg:rounded-[1.5vw] border-white/5">
                            <input type="checkbox" className="mt-[1vw] lg:mt-[0.3vw] w-[4vw] lg:w-[1.2vw] h-[4vw] lg:h-[1.2vw] accent-teal" />
                            <p className="text-[3vw] lg:text-[0.75vw] text-white/40 eb-garamond leading-relaxed italic">
                                I verify that the information provided is accurate and I agree to receive project-related communications from PRAGTECH. Your data is handled per our <span className="text-teal underline cursor-pointer hover:text-white transition-colors">Privacy Protocols</span>.
                            </p>
                        </div>

                        <button className="flex items-center justify-center gap-[4vw] lg:gap-[1.2vw] w-full py-[4.5vw] lg:py-[1.5vw] bg-teal hover:bg-white text-navy font-black rounded-full text-[4.5vw] lg:text-[1.2vw] uppercase tracking-[0.2vw] anton-regular transition-all shadow-[0_1.5vw_4vw_rgba(20,184,166,0.2)] active:scale-95 group">
                            Send Transmission
                            <svg className="w-[5vw] lg:w-[1.4vw] h-[5vw] lg:h-[1.4vw] transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default MainContactContent;
