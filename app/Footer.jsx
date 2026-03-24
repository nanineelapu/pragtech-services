import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <footer className="footer-section px-[2vw] pb-[5vw] mt-[5vw]">
                <div className="bg-white rounded-[4vw] p-[4vw] shadow-[0_-1vw_5vw_rgba(0,0,0,0.05)] relative overflow-hidden">
                    {/* Subtle Grid Background */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-[0.05]"
                        style={{
                            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                            backgroundSize: '3vw 3vw'
                        }}
                    />

                    <div className="relative z-10">
                        <div className="grid grid-cols-12 gap-[4vw]">
                            {/* Company Info Column */}
                            <div className="col-span-3">
                                <div className="flex items-center gap-[0.5vw] mb-[2vw]">
                                    <div className="p-[0.8vw] bg-[#273A4D] rounded-[1vw]">
                                        <span className="text-white text-[1.5vw] font-black leading-none">P</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[1.8vw] font-black text-[#0f2a4a] leading-none tracking-tighter">
                                            PRAGMATIC
                                        </h2>
                                        <span className="text-[0.7vw] tracking-[0.2vw] text-[#0081bb] font-bold mt-[0.3vw]">TECHNICAL SERVICES</span>
                                    </div>
                                </div>
                                <p className="text-[0.95vw] text-[#4a5f77] font-medium leading-relaxed mb-[2vw]">
                                    Leading provider of steel detailing and structural engineering solutions for commercial and industrial projects worldwide.
                                </p>

                                {/* Social Icons */}
                                <div className="flex items-center gap-[1vw]">
                                    {['fb', 'tw', 'ln', 'ig'].map((social) => (
                                        <button key={social} className="w-[3vw] h-[3vw] rounded-full bg-[#f4f7f9] flex items-center justify-center text-[#4a5f77] hover:bg-[#0081bb] hover:text-white transition-all shadow-sm">
                                            {social === 'fb' && (
                                                <svg className="w-[1.2vw] h-[1.2vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                                            )}
                                            {social === 'tw' && (
                                                <svg className="w-[1.2vw] h-[1.2vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                            )}
                                            {social === 'ln' && (
                                                <svg className="w-[1.2vw] h-[1.2vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                                            )}
                                            {social === 'ig' && (
                                                <svg className="w-[1.2vw] h-[1.2vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.059-1.266-.07-1.646-.07-4.85s.011-3.584.07-4.85c.062-1.366.336-2.633 1.31-3.608.975-.975 2.242-1.25 3.608-1.312 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.62 6.76 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.337-.2 6.76-2.62 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Links Column */}
                            <div className="col-span-2">
                                <h3 className="text-[1.3vw] font-black text-[#0f2a4a] mb-[2vw]">Quick Links</h3>
                                <ul className="flex flex-col gap-[1vw]">
                                    {[
                                        { name: 'Home', href: '/' },
                                        { name: 'About', href: '/about' },
                                        { name: 'Services', href: '/services' },
                                        { name: 'Projects', href: '/projects' },
                                        { name: 'Career', href: '/career' }
                                    ].map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-[1vw] text-[#4a5f77] font-medium hover:text-[#0081bb] transition-colors">{link.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Services Column */}
                            <div className="col-span-3">
                                <h3 className="text-[1.3vw] font-black text-[#0f2a4a] mb-[2vw]">Our Services</h3>
                                <ul className="flex flex-col gap-[1vw]">
                                    {['Steel Detailing', 'Connection Design', 'BIM Services', 'Material Take-Off', 'Estimation'].map((service) => (
                                        <li key={service}>
                                            <Link href="/services" className="text-[1vw] text-[#4a5f77] font-medium hover:text-[#0081bb] transition-colors">{service}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Column */}
                            <div className="col-span-4">
                                <h3 className="text-[1.3vw] font-black text-[#0f2a4a] mb-[2vw]">Contact Info</h3>
                                <ul className="flex flex-col gap-[1.5vw]">
                                    <li className="flex items-start gap-[1vw]">
                                        <div className="w-[2vw] h-[2vw] rounded-full bg-[#f4f7f9] flex items-center justify-center text-[#0081bb] shrink-0">
                                            <svg className="w-[1vw] h-[1vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <p className="text-[1vw] text-[#4a5f77] font-medium leading-relaxed">
                                            1107 State HWY 103W, San Augustine, TX 75972, USA
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-[1vw]">
                                        <div className="w-[2vw] h-[2vw] rounded-full bg-[#f4f7f9] flex items-center justify-center text-[#0081bb] shrink-0">
                                            <svg className="w-[1vw] h-[1vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <Link href="/contact" className="text-[1vw] text-[#4a5f77] font-medium hover:text-[#0081bb]">+1 281-648-8137</Link>
                                    </li>
                                    <li className="flex items-center gap-[1vw]">
                                        <div className="w-[2vw] h-[2vw] rounded-full bg-[#f4f7f9] flex items-center justify-center text-[#0081bb] shrink-0">
                                            <svg className="w-[1vw] h-[1vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <a href="mailto:info@pragmatich.com" className="text-[1vw] text-[#4a5f77] font-medium hover:text-[#0081bb]">info@pragmatich.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer Bottom */}
                        <div className="mt-[5vw] pt-[2vw] border-t border-[#f0f4f7] flex items-center justify-between">
                            <p className="text-[0.9vw] text-[#4a5f77] font-medium">
                                2018 - 2025 © Copyrights <span className="text-[#0f2a4a] font-bold">Pragmatic</span> | Developed by <span className="text-[#0081bb] font-bold">Swio Corporate</span>
                            </p>
                            <div className="flex items-center gap-[3vw]">
                                <div className="flex items-center gap-[1vw]">
                                    <Link href="/about" className="text-[0.9vw] text-[#4a5f77] font-bold hover:text-[#0081bb]">About</Link>
                                    <span className="text-[#d1dce5]">|</span>
                                    <Link href="/career" className="text-[0.9vw] text-[#4a5f77] font-bold hover:text-[#0081bb]">Career</Link>
                                    <span className="text-[#d1dce5]">|</span>
                                    <Link href="/contact" className="text-[0.9vw] text-[#4a5f77] font-bold hover:text-[#0081bb]">Contact</Link>
                                </div>
                                {/* Back to Top */}
                                <button className="w-[3.5vw] h-[3.5vw] bg-[#f4f7f9] rounded-full flex items-center justify-center text-[#4a5f77] hover:bg-[#0081bb] hover:text-white transition-all shadow-sm group">
                                    <svg className="w-[1.5vw] h-[1.5vw] transform transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;