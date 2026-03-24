"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services', hasDropdown: true },
        { name: 'Projects', href: '/projects' },
        { name: 'Career', href: '/career' },
    ];

    return (
        <nav
            className="fixed top-[1.2vw] left-1/2 -translate-x-1/2 w-[90vw] z-50 flex items-center justify-between px-[4vw] py-[0.8vw] bg-white/20 backdrop-blur-xl shadow-[0_0.4vw_2vw_rgba(0,0,0,0.06)] border-[0.1vw] border-white/20 rounded-[4vw]"
        >

            {/* Left Side: Navigation Links (Components) */}
            <div className="flex-1 hidden lg:flex items-center gap-[0.5vw]">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`px-[1.2vw] py-[0.7vw] text-[1.1vw] font-medium transition-all duration-300 flex items-center gap-[0.4vw] ${isActive ? "text-[#0081c3] font-bold" : "text-[#111] hover:text-[#0081c3]"
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

            {/* Middle: Logo Area */}
            <div className={`flex-none flex flex-col items-center justify-center cursor-pointer transition-all duration-500 transform ${scrolled ? "scale-80" : "scale-85"} hover:scale-110 active:scale-95`}>
                <Link href="/" className="flex flex-col items-center">
                    <span className={`transition-all duration-500 text-[#111] font-black leading-tight tracking-tight ${scrolled ? "text-[1.8vw]" : "text-[2vw]"}`}>
                        PRAGTECH
                    </span>
                    <span className={`transition-all duration-500 text-[#111] font-bold tracking-[0.3em] opacity-60 uppercase ${scrolled ? "text-[0.5vw]" : "text-[0.6vw]"}`}>
                        Technical Services
                    </span>
                </Link>
            </div>

            {/* Right Side: Action Area (Buttons) */}
            <div className="flex-1 flex items-center justify-end gap-[2.5vw]">
                {/* Phone number link */}
                <Link
                    href="tel:+12816488137"
                    className="hidden sm:block text-[#111] font-medium text-[1.1vw] hover:text-[#0081c3] transition-colors"
                >
                    +1 281-648-8137
                </Link>

                {/* Green Contact Us style button */}
                <Link
                    href="/contact"
                    className="flex items-center gap-[0.8vw] px-[2.2vw] py-[1vw] bg-[#153a20] hover:bg-[#999b74] text-white font-semibold rounded-[1.2vw] transition-all shadow-[0_0.4vw_1.2vw_rgba(77,187,107,0.25)] active:scale-95 text-[1.1vw]"
                >
                    Contact Us
                    <div className="w-[1.6vw] h-[1.6vw] bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-[1vw] h-[1vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;
