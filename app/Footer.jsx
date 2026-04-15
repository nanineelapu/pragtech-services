"use client";

import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full relative px-[4vw] lg:px-0">
            {/* High Performance Solid Navy Footer */}
            <div className="bg-[#0F172A] overflow-hidden relative transition-all duration-500 rounded-t-[8vw] lg:rounded-none">
                <div className="relative z-10 p-[6vw] lg:p-[3.5vw]">
                    <h2 className="sr-only">Architecting the future of structural steel through high-precision detailing and engineering oversight. Pragtech Ltd operates in more than 6 countries, providing SDS/2 and Tekla detailing, BIM modelling, and structural engineering services.</h2>
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-[8vw] lg:gap-[2.5vw] items-start">

                        {/* BRANDING & DESCRIPTION (Moved to top on mobile) */}
                        <div className="order-first lg:order-last lg:col-span-5 flex flex-col gap-[3vw] lg:gap-[1.5vw] items-start lg:items-end text-left lg:text-right w-full">
                            <div className="flex flex-col gap-[1.5vw] lg:gap-[1vw] items-start lg:items-end min-w-full">
                                <div className="flex flex-col items-start gap-[2vw]">
                                    <div className="relative h-[12vw] lg:h-[4.5vw] w-[35vw] lg:w-[12vw]">
                                        <img
                                            src="https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/logo_clean_transparent.webp"
                                            alt="Pragtech Ltd Logo"
                                            className="w-full h-full object-contain lg:object-right transition-transform"
                                        />
                                    </div>
                                    <p className="text-[3.2vw] lg:text-[0.7vw] tracking-[0.5vw] lg:tracking-[0.4vw] text-[#14b8a6] font-bold uppercase font-heading opacity-80">PRAGTECH LTD</p>
                                </div>
                            </div>
                            <p className="text-[4vw] lg:text-[1.1vw] pt-[2vw] lg:pt-0 text-white/50 font-medium leading-relaxed max-w-full lg:max-w-[30vw] font-body">
                                Architecting the future of structural steel through high-precision detailing and engineering oversight. Operating in more than 6 countries.
                            </p>

                            {/* Global Offices Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[6vw] lg:gap-[2vw] w-full text-[3.5vw] lg:text-[0.9vw] text-white/40 font-medium font-body mt-[4vw] lg:mt-[1vw]">
                                <div className="flex flex-col gap-[1vw] items-start lg:items-end">
                                    <h4 className="text-[#14b8a6] font-bold uppercase tracking-wider mb-[0.5vw]">Corporate Office</h4>
                                    <p>8, Spey Glen Drive, Harwell</p>
                                    <p>Didcot, OX11 6LX, UK</p>
                                </div>
                                <div className="flex flex-col gap-[1vw] items-start lg:items-end border-t border-white/5 pt-[6vw] lg:border-none lg:pt-0">
                                    <h4 className="text-[#14b8a6] font-bold uppercase tracking-wider mb-[0.5vw]">Head Sales Office</h4>
                                    <p>71-75 Shelton Street, London</p>
                                    <p>WC2H 9JQ, United Kingdom</p>
                                </div>
                            </div>

                            {/* Communication Hub */}
                            <div className="flex flex-col gap-[4vw] lg:gap-[1vw] items-start lg:items-end w-full border-t border-white/5 pt-[8vw] lg:pt-[1vw] mt-[4vw] lg:mt-0">
                                <div className="flex flex-col lg:flex-row gap-[3vw] lg:gap-[1.5vw] items-start lg:items-center text-[3.8vw] lg:text-[0.9vw]">
                                    <a href="mailto:info@pragtech.co.uk" className="text-[#14b8a6] hover:text-white transition-all font-bold">info@pragtech.co.uk</a>
                                    <span className="hidden lg:block text-white/10">|</span>
                                    <a href="mailto:mann@pragtech.co.uk" className="text-[#14b8a6] hover:text-white transition-all font-bold">mann@pragtech.co.uk</a>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-[3vw] lg:gap-[3.1vw] items-start lg:items-center text-[3.8vw] lg:text-[0.9vw]">
                                    <a href="tel:+447404710491" className="text-white/60 hover:text-[#14b8a6] transition-all">+44 7404 710491</a>
                                    <span className="hidden lg:block text-white/10">•</span>
                                    <a href="tel:+447304120818" className="text-white/60 hover:text-[#14b8a6] transition-all">+44 7304120818</a>
                                </div>
                                <p className="text-white/20 mt-[4vw] lg:mt-[0.5vw] text-[3vw] lg:text-[0.7vw] uppercase tracking-widest font-black">Company Reg: 16973363</p>
                            </div>

                            {/* Social Icons & Back to Top */}
                            <div className="flex items-center gap-[4vw] lg:gap-[1vw] mt-[2vw] lg:mt-[1vw]">
                                {[
                                    { id: 'ln', href: 'https://www.linkedin.com/company/pragtech-ltd/' },
                                    { id: 'tw', href: '#' },
                                    { id: 'ig', href: 'https://www.instagram.com/pragtech_ltd?igsh=MW5wYmptZ293a2lkYw==' }
                                ].map((social) => (
                                    <a
                                        key={social.id}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-[12vw] h-[12vw] lg:w-[3.5vw] lg:h-[3.5vw] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#14b8a6] hover:text-white hover:border-[#14b8a6] transition-all group"
                                    >
                                        {social.id === 'ln' && (
                                            <svg className="w-[5vw] lg:w-[1.4vw] h-[5vw] lg:h-[1.4vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                                        )}
                                        {social.id === 'tw' && (
                                            <svg className="w-[5vw] lg:w-[1.4vw] h-[5vw] lg:h-[1.4vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                        )}
                                        {social.id === 'ig' && (
                                            <svg className="w-[5vw] lg:w-[1.4vw] h-[5vw] lg:h-[1.4vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                        )}
                                    </a>
                                ))}

                                {/* Back to Top - Glass Style */}
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="ml-[2vw] lg:ml-[1vw] w-[12vw] h-[12vw] lg:w-[3.5vw] lg:h-[3.5vw] bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-white hover:text-[#0f172a] transition-all group shadow-xl cursor-pointer"
                                >
                                    <svg className="w-[5vw] lg:w-[1.4vw] h-[5vw] lg:h-[1.4vw] transform transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* LINK ROWS */}
                        <div className="lg:col-span-7 flex flex-col gap-[6vw] lg:gap-[2.5vw] w-full">
                            {[
                                {
                                    title: 'Menu',
                                    links: [
                                        { name: 'Home', href: '/' },
                                        { name: 'About Us', href: '/about' },
                                        { name: 'Services', href: '/services' },
                                        { name: 'Projects', href: '/projects' },
                                        { name: 'Careers', href: '/career' },
                                        { name: 'Company Overview', href: 'https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/PROJECT%20IMAGES/Pragtech_Brochure_Full%20Page.pdf' }
                                    ]
                                },
                                {
                                    title: 'Services',
                                    links: [
                                        { name: 'Structural Steel Detailing', href: '/services#structural-steel-detailing' },
                                        { name: 'Miscellaneous Metalwork', href: '/services#miscellaneous-metalwork' },
                                        { name: 'Cold‑Rolled SFS Detailing', href: '/services#cold-rolled-sfs-detailing' },
                                        { name: 'Cladding Detailing', href: '/services#cladding-detailing' }
                                    ]
                                },
                                {
                                    title: 'Capabilities',
                                    links: [
                                        { name: 'BIM Modelling', href: '/services#bim-modelling' },
                                        { name: 'GA / Shop Drawings', href: '/services#ga-shop-drawings' },
                                        { name: 'Connection Design', href: '/services#connection-design' },
                                        { name: 'As‑Built Modelling', href: '/services#as-built-modelling' }
                                    ]
                                }
                            ].map((section) => (
                                <div key={section.title} className="flex flex-col gap-[2vw] lg:gap-[0.5vw] group">
                                    <div className="flex items-center gap-[4vw] lg:gap-[1.5vw]">
                                        <h3 className="text-[3.5vw] lg:text-[1vw] font-black text-white/40 tracking-[0.4vw] lg:tracking-[0.3vw] uppercase italic shrink-0 font-heading">
                                            {section.title}
                                        </h3>
                                        {/* Tech Arrow Symbol */}
                                        <div className="flex-1 h-px bg-white/10 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-linear-to-r from-[#14b8a6] to-transparent w-full -translate-x-full lg:group-hover:translate-x-0 transition-transform duration-700" />
                                        </div>
                                        <svg className="w-[4vw] lg:w-[1.2vw] h-[4vw] lg:h-[1.2vw] text-[#14b8a6] transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>

                                    {/* Horizontal Sub-links */}
                                    <ul className="flex flex-wrap items-center gap-x-[6vw] lg:gap-x-[2.5vw] gap-y-[2vw] lg:gap-y-[0.5vw] pl-[0.5vw]">
                                        {section.links.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    target={link.name === 'Company Overview' ? '_blank' : '_self'}
                                                    rel={link.name === 'Company Overview' ? 'noopener noreferrer' : ''}
                                                    className="text-[4.2vw] lg:text-[1.2vw] font-bold text-white hover:text-[#14b8a6] transition-all relative group/link font-body"
                                                >
                                                    {link.name}
                                                    <span className="absolute -bottom-[0.5vw] lg:-bottom-[0.2vw] left-0 w-0 h-[2px] lg:h-[2px] bg-[#14b8a6] transition-all duration-300 group-hover/link:w-full" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};
export default Footer;
