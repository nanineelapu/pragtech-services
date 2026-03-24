"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Career', href: '/career' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[3vw] py-[1.2vw] bg-[#f8f9fa] shadow-[0_0.2vw_1vw_rgba(0,0,0,0.05)] border-b-[0.1vw] border-gray-100">
            {/* Logo Area */}
            <div className="flex flex-col">
                <span className="text-[2.2vw] font-black text-[#0f2a4a] leading-tight tracking-tight">
                    PRAGTECH
                </span>
                <span className="text-[0.8vw] font-bold text-[#0f2a4a] tracking-[0.2em] opacity-80 uppercase">
                    Technical Services
                </span>
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-[0.5vw]">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`px-[1.6vw] py-[0.7vw] rounded-[2vw] text-[1.1vw] font-bold transition-all duration-200 ${isActive
                                ? "bg-[#0081c3] text-white shadow-[0_0.3vw_1.2vw_rgba(0,129,195,0.3)]"
                                : "text-[#2e4a6b] hover:text-[#0081c3]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </div>

            {/* Action Area */}
            <div className="flex items-center gap-[1.5vw]">
                {/* Phone Contact */}
                <Link
                    href="/contact"
                    className="hidden sm:flex items-center gap-[1vw] px-[1.2vw] py-[0.6vw] bg-white rounded-[2vw] border-[0.1vw] border-gray-100 shadow-[0_0.2vw_0.8vw_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors cursor-pointer"
                >
                    <div className="w-[2.5vw] h-[2.5vw] flex items-center justify-center bg-[#d1e9f7] rounded-[2vw]">
                        <svg className="w-[1.4vw] h-[1.4vw] text-[#0081c3]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                    </div>
                    <span className="text-[#0f2a4a] font-bold text-[1vw]">
                        +1 281-648-8137
                    </span>
                </Link>

                {/* Contact Button */}
                <Link
                    href="/contact"
                    className="flex items-center gap-[0.6vw] px-[2vw] py-[0.8vw] bg-[#0081c3] hover:bg-[#006ca3] text-white font-bold rounded-[2vw] transition-all shadow-[0_0.3vw_1.2vw_rgba(0,129,195,0.3)] active:scale-95 text-[1vw] uppercase"
                >
                    Contact Us
                    <svg className="w-[1.1vw] h-[1.1vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;