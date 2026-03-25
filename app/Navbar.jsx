"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(prev => prev !== isScrolled ? isScrolled : prev);

            // Handle Active Scrolling State
            setIsScrolling(true);

            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            scrollTimeout.current = setTimeout(() => {
                setIsScrolling(false);
            }, 200); // Stabilized threshold to prevent jitter
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    // Close menu when pathname changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services', hasDropdown: true },
        { name: 'Projects', href: '/projects' },
        { name: 'Careers', href: '/career' },
    ];

    // Animation Variants for the Expansion effect - Sped up for better responsiveness
    const navVariants = {
        hidden: {
            y: -100,
            opacity: 0,
            scale: 0.98,
            filter: "blur(8px)",
            width: "22vw",
            x: "-50%"
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            width: "90vw",
            x: "-50%",
            transition: {
                type: "spring",
                stiffness: 90,
                damping: 22,
                mass: 1,
                delay: 0.05,
                width: {
                    type: "spring",
                    stiffness: 70,
                    damping: 25,
                    delay: 0.25
                },
                filter: { duration: 0.8, ease: "easeOut" }
            }
        }
    };

    // Shared transition for inner content - Faster materialization
    const contentFade = {
        initial: {
            opacity: 0,
            y: 12,
            filter: "blur(3px)"
        },
        animate: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                delay: 0.6, // Materializes quickly after expansion begins
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <>
            <motion.nav
                initial="hidden"
                animate="visible"
                variants={navVariants}
                className="fixed top-[3vw] md:top-[1.2vw] left-1/2 z-100 flex items-center justify-center bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20 rounded-full lg:rounded-[4vw] min-h-[12vw] md:min-h-[4.5vw] py-[3.5vw] md:py-[0.8vw] px-[4vw] overflow-hidden"
            >
                {/* Left Side: Navigation Links */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={contentFade}
                    className="flex-1 hidden lg:flex items-center gap-[0.5vw] whitespace-nowrap"
                >
                    <div className="flex items-center gap-[0.5vw]">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-[1.2vw] py-[0.7vw] text-[1.1vw] font-medium transition-all duration-300 flex items-center gap-[0.4vw] font-body ${isActive ? "text-[#14b8a6] font-bold" : "text-[#111] hover:text-[#14b8a6]"
                                        }`}
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <svg className="w-[0.8vw] h-[0.8vw] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Mobile Contact Button (Replacement for left side on mobile) */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={contentFade}
                    className="lg:hidden flex-1"
                >
                    <Link
                        href="/contact"
                        className="flex items-center gap-[1.2vw] px-[3.5vw] py-[1.8vw] bg-[#0f172a] hover:bg-[#14b8a6] hover:text-white text-white font-semibold rounded-full transition-all shadow-[0_6px_16px_rgba(20,184,166,0.2)] active:scale-95 text-[2.8vw] group w-fit font-heading"
                    >
                        Contact
                        <div className="w-[4.2vw] h-[4.2vw] bg-white/20 rounded-full flex items-center justify-center group-hover:bg-[#0f172a]/20">
                            <svg className="w-[2.4vw] h-[2.4vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </Link>
                </motion.div>

                {/* Middle: Logo Area */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={contentFade}
                    className="flex flex-col items-center justify-center cursor-pointer transform flex-none hover:scale-110 active:scale-95 mx-[4vw] lg:mx-[1vw]"
                >
                    <Link href="/" className="flex flex-col items-center">
                        <span className={`transition-all duration-700 text-[#111] font-black leading-tight tracking-tight font-heading ${scrolled ? "text-[3.8vw] md:text-[1.8vw]" : "text-[4.2vw] md:text-[2vw]"}`}>
                            PRAGTECH
                        </span>
                        <span className={`transition-all duration-700 text-[#111] font-bold tracking-[0.3em] opacity-60 uppercase font-heading ${scrolled ? "text-[1.2vw] md:text-[0.5vw]" : "text-[1.4vw] md:text-[0.6vw]"}`}>
                            Technical Services
                        </span>
                    </Link>
                </motion.div>

                {/* Right Side: Action Area */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={contentFade}
                    className="flex-1 flex items-center justify-end gap-[2.5vw] whitespace-nowrap"
                >
                    {/* Desktop Phone/Action */}
                    <div className="hidden lg:flex items-center gap-[2.5vw]">
                        <Link
                            href="tel:+12816488137"
                            className="text-[#111] font-medium text-[1.1vw] hover:text-[#14b8a6] transition-colors font-body"
                        >
                            +1 281-648-8137
                        </Link>
                        <Link
                            href="/contact"
                            className="flex items-center gap-[0.8vw] px-[2.2vw] py-[1vw] bg-[#0f172a] hover:bg-[#14b8a6] hover:text-white text-white font-semibold rounded-[1.2vw] transition-all shadow-[0_8px_24px_rgba(20,184,166,0.25)] active:scale-95 text-[1.1vw] group font-heading"
                        >
                            Contact Us
                            <div className="w-[1.6vw] h-[1.6vw] bg-white/20 rounded-full flex items-center justify-center group-hover:bg-[#0f172a]/20">
                                <svg className="w-[1vw] h-[1vw] transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-[#111] hover:text-[#14b8a6] transition-all active:scale-90 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-[5.5vw] h-[4vw]">
                            <span className={`absolute left-0 block w-full h-[2px] bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-[1.8vw]' : 'top-0'}`}></span>
                            <span className={`absolute left-0 block w-full h-[2px] bg-current transform transition-all duration-300 ease-in-out top-[1.8vw] ${isMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100'}`}></span>
                            <span className={`absolute left-0 block w-full h-[2px] bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-[1.8vw]' : 'top-[3.6vw]'}`}></span>
                        </div>
                    </button>
                </motion.div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-90 transition-all duration-500 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                {/* Backdrop - Blur removed to keep page sharp */}
                <div
                    className="absolute inset-0 bg-black/40"
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Content - Enhanced Glassmorphism */}
                <div
                    className={`absolute top-[22vw] right-[4vw] left-[4vw] transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
                >
                    <div className="bg-white/10 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20">
                        <div className="p-6 flex flex-col gap-3">
                            {navLinks.map((link, index) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`flex items-center justify-between p-5 rounded-[1.8rem] transition-all duration-300 ${isActive
                                            ? "bg-[#0f172a] text-white shadow-[0_10px_25px_rgba(15,23,42,0.3)]"
                                            : "hover:bg-white/10 text-[#111]"
                                            }`}
                                        style={{
                                            transitionDelay: `${index * 40}ms`,
                                            transform: isMenuOpen ? 'translateX(0)' : 'translateX(10px)'
                                        }}
                                    >
                                        <span className="text-[5.5vw] font-bold tracking-tight font-heading">{link.name}</span>
                                        {isActive ? (
                                            <div className="w-[2.2vw] h-[2.2vw] rounded-full bg-[#14b8a6] shadow-[0_0_10px_#14b8a6]" />
                                        ) : (
                                            link.hasDropdown && (
                                                <svg className="w-[5vw] h-[5vw] opacity-40 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                                </svg>
                                            )
                                        )}
                                    </Link>
                                );
                            })}

                            <div className="mt-2 pt-6 border-t border-black/5 flex flex-col gap-4">
                                <Link
                                    href="tel:+12816488137"
                                    className="flex items-center gap-4 p-4 text-[#111] group"
                                >
                                    <div className="w-[12vw] h-[12vw] rounded-2xl bg-black/5 flex items-center justify-center transition-all group-hover:bg-[#14b8a6]/10 group-hover:text-[#14b8a6]">
                                        <svg className="w-[6vw] h-[6vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-[2.5vw] uppercase tracking-widest opacity-40 font-bold">Call Us</span>
                                        <span className="text-[4.5vw] font-bold">+1 281-648-8137</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;