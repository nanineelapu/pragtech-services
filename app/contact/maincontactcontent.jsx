"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MainContactContent = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formsubmit.co/ajax/naniatworkmail@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                setIsSubmitted(true);
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
            <div className="absolute top-0 right-0 w-[50vw] lg:w-[30vw] h-[50vw] lg:h-[30vw] bg-navy/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

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
                        {/* Sales HQ Card */}
                        <motion.div variants={cardVariants} className="group bg-white/80 backdrop-blur-md rounded-[4vw] lg:rounded-[2vw] p-[6vw] lg:p-[3vw] flex flex-col items-start border border-navy/5 hover:border-teal/40 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="flex items-center gap-[4vw] lg:gap-[1.2rem] mb-[4vw] lg:mb-[2vw]">
                                <div className="p-[2.5vw] lg:p-[0.8vw] bg-[#ffffff] rounded-xl border border-navy/5">
                                    <img src="https://flagcdn.com/gb.svg" className="w-[8vw] lg:w-[2.5vw] h-auto rounded-sm shadow-sm" alt="UK" />
                                </div>
                                <span className="text-[6vw] lg:text-[1.8vw] font-black text-navy anton-regular tracking-tight uppercase">London</span>
                            </div>
                            <span className="text-teal font-black text-[2.5vw] lg:text-[0.8vw] uppercase tracking-[0.2vw] mb-[4vw] lg:mb-[1.5vw] anton-regular">Head Sales Office</span>
                            <p className="text-navy/70 text-[4.2vw] lg:text-[1.1vw] eb-garamond font-medium leading-relaxed mb-auto">
                                71-75 Shelton Street, Covent Garden <br />
                                London, WC2H 9JQ, United Kingdom
                            </p>
                            <div className="mt-[5vw] lg:mt-[2vw] pt-[4vw] lg:pt-[1.5vw] border-t border-navy/5 w-full flex flex-col gap-1">
                                <span className="text-navy font-black text-[5vw] lg:text-[1.2vw] anton-regular tracking-tight">+44 7304 120818</span>
                                <span className="text-navy/40 text-[3vw] lg:text-[0.8vw] font-bold uppercase tracking-widest">Sales Inquiry</span>
                            </div>
                        </motion.div>

                        {/* Corporate Card */}
                        <motion.div variants={cardVariants} className="group bg-white/80 backdrop-blur-md rounded-[4vw] lg:rounded-[2vw] p-[6vw] lg:p-[3vw] flex flex-col items-start border border-navy/5 hover:border-teal/40 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="flex items-center gap-[4vw] lg:gap-[1.2rem] mb-[4vw] lg:mb-[2vw]">
                                <div className="p-[2.5vw] lg:p-[0.8vw] bg-[#ffffff] rounded-xl border border-navy/5">
                                    <img src="https://flagcdn.com/gb.svg" className="w-[8vw] lg:w-[2.5vw] h-auto rounded-sm shadow-sm" alt="UK" />
                                </div>
                                <span className="text-[6vw] lg:text-[1.8vw] font-black text-navy anton-regular tracking-tight uppercase">Didcot</span>
                            </div>
                            <span className="text-teal font-black text-[2.5vw] lg:text-[0.8vw] uppercase tracking-[0.2vw] mb-[4vw] lg:mb-[1.5vw] anton-regular">Corporate Office</span>
                            <p className="text-navy/70 text-[4.2vw] lg:text-[1.1vw] eb-garamond font-medium leading-relaxed mb-auto">
                                8, Spey Glen Drive, Harwell <br />
                                Didcot, OX11 6LX, United Kingdom
                            </p>
                            <div className="mt-[5vw] lg:mt-[2vw] pt-[4vw] lg:pt-[1.5vw] border-t border-navy/5 w-full flex flex-col gap-1">
                                <span className="text-navy font-black text-[5vw] lg:text-[1.2vw] anton-regular tracking-tight">+44 7404 710491</span>
                                <span className="text-navy/40 text-[3vw] lg:text-[0.8vw] font-bold uppercase tracking-widest">Operations Support</span>
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

                    {isSubmitted ? (
                        <div className="relative z-10 flex flex-col items-center justify-center text-center py-[10vw] lg:py-[5vw] gap-[5vw] lg:gap-[2vw] animate-in fade-in zoom-in duration-700">
                            <div className="w-[18vw] h-[18vw] lg:w-[6vw] lg:h-[6vw] bg-teal rounded-full flex items-center justify-center mb-2 shadow-[0_0_30px_rgba(20,184,166,0.4)]">
                                <svg className="w-[10vw] h-[10vw] lg:w-[3vw] lg:h-[3vw] text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-[9vw] lg:text-[3vw] font-black text-white anton-regular uppercase tracking-tight">Transmission <span className="text-teal">Complete</span></h3>
                            <p className="text-[#faf9f6]/60 eb-garamond text-[4.5vw] lg:text-[1.2vw] italic max-w-[80vw] lg:max-w-[20vw]">
                                Your project parameters have been successfully received. We will establish a communication link shortly.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="mt-[4vw] lg:mt-[2vw] text-teal font-black text-[4vw] lg:text-[1vw] uppercase tracking-widest anton-regular hover:text-white transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="relative z-10 flex flex-col gap-[6vw] lg:gap-[2.5vw]"
                        >
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New Contact Inquiry - Pragtech Services" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_autoresponse" value="Thank you for contacting Pragtech Services. We have received your inquiry and our team will get back to you shortly. We look forward to discussing your project needs." />

                            <div className="grid grid-cols-1 gap-[4vw] lg:gap-[2vw]">
                                <div className="flex flex-col gap-[2vw] lg:gap-[0.8vw]">
                                    <label className="text-[3vw] lg:text-[0.8vw] font-black text-teal uppercase tracking-widest anton-regular">Operator Name</label>
                                    <input
                                        name="full_name"
                                        className="px-[4vw] lg:px-[1.5vw] py-[3.5vw] lg:py-[1.2vw] bg-white/5 border border-white/10 rounded-[2vw] lg:rounded-[1vw] text-white text-[4vw] lg:text-[1.1vw] outline-none focus:border-teal focus:bg-white/10 transition-all font-medium placeholder:text-white/20"
                                        placeholder="E.g. John Doe"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-[2vw] lg:gap-[0.8vw]">
                                    <label className="text-[3vw] lg:text-[0.8vw] font-black text-teal uppercase tracking-widest anton-regular">Encrypted Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="px-[4vw] lg:px-[1.5vw] py-[3.5vw] lg:py-[1.2vw] bg-white/5 border border-white/10 rounded-[2vw] lg:rounded-[1vw] text-white text-[4vw] lg:text-[1.1vw] outline-none focus:border-teal focus:bg-white/10 transition-all font-medium placeholder:text-white/20"
                                        placeholder="operator@domain.com"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-[2vw] lg:gap-[0.8vw]">
                                    <label className="text-[3vw] lg:text-[0.8vw] font-black text-teal uppercase tracking-widest anton-regular">Communication Node</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="px-[4vw] lg:px-[1.5vw] py-[3.5vw] lg:py-[1.2vw] bg-white/5 border border-white/10 rounded-[2vw] lg:rounded-[1vw] text-white text-[4vw] lg:text-[1.1vw] outline-none focus:border-teal focus:bg-white/10 transition-all font-medium placeholder:text-white/20"
                                        placeholder="+44 XXXX XXXXXX"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-[2vw] lg:gap-[0.8vw]">
                                    <label className="text-[3vw] lg:text-[0.8vw] font-black text-teal uppercase tracking-widest anton-regular">Message Payload</label>
                                    <textarea
                                        name="message"
                                        className="px-[4vw] lg:px-[1.5vw] py-[3.5vw] lg:py-[1.2vw] bg-white/5 border border-white/10 rounded-[2vw] lg:rounded-[1vw] text-white text-[4vw] lg:text-[1.1vw] outline-none focus:border-teal focus:bg-white/10 transition-all min-h-[35vw] lg:min-h-[12vw] resize-none font-medium placeholder:text-white/20"
                                        placeholder="Describe the project scope or inquiry details..."
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-[4vw] lg:gap-[1.2vw] py-[4vw] lg:py-[1.5vw] bg-white/3 p-[4vw] lg:p-[2vw] rounded-[3vw] lg:rounded-[1.5vw] border-white/5">
                                <input type="checkbox" className="mt-[1vw] lg:mt-[0.3vw] w-[4vw] lg:w-[1.2vw] h-[4vw] lg:h-[1.2vw] accent-teal" required />
                                <p className="text-[3vw] lg:text-[0.75vw] text-white/40 eb-garamond leading-relaxed italic">
                                    I verify that the information provided is accurate and I agree to receive project-related communications from PRAGTECH. Your data is handled per our <span className="text-teal underline cursor-pointer hover:text-white transition-colors">Privacy Protocols</span>.
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex items-center justify-center gap-[4vw] lg:gap-[1.2vw] w-full py-[4.5vw] lg:py-[1.5vw] bg-teal hover:bg-white text-navy font-black rounded-full text-[4.5vw] lg:text-[1.2vw] uppercase tracking-[0.2vw] anton-regular transition-all shadow-[0_1.5vw_4vw_rgba(20,184,166,0.2)] active:scale-95 group disabled:opacity-50"
                            >
                                {isSubmitting ? 'Transmitting...' : 'Send'}
                                <svg className="w-[5vw] lg:w-[1.4vw] h-[5vw] lg:h-[1.4vw] transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default MainContactContent;
