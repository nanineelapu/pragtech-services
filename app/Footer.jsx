import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full px-[4vw] pb-[4vw] mt-[5vw] relative">
            {/* The Floating Green Glass Pod */}
            <div className="bg-[#153a20] rounded-[4vw] overflow-hidden relative shadow-2xl transition-all duration-500">
                {/* Glass Overlay Effect */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl z-0" />

                {/* Subtle Technical Grid Background */}
                <div
                    className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: '4vw 4vw'
                    }}
                />

                <div className="relative z-10 p-[5vw]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[4vw]">
                        {/* Column 1: Branding & Description (4 cols) */}
                        <div className="lg:col-span-5 flex flex-col gap-[2vw]">
                            <div className="flex flex-col gap-[0.5vw]">
                                <h2 className="text-[2.2vw] font-black text-white leading-none tracking-tighter uppercase">
                                    Pragtech
                                </h2>
                                <span className="text-[0.7vw] tracking-[0.4vw] text-[#4dbb6b] font-bold uppercase">
                                    Engineering Excellence
                                </span>
                            </div>
                            <p className="text-[1.1vw] text-white/50 font-medium leading-relaxed max-w-[30vw]">
                                Architecting the future of structural steel through high-precision AI-driven detailing and global engineering oversight.
                            </p>

                            {/* Social Icons - Redesigned for Glass Theme */}
                            <div className="flex gap-[1vw] mt-[1vw]">
                                {['ln', 'tw', 'fb'].map((social) => (
                                    <button key={social} className="w-[3.5vw] h-[3.5vw] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#4dbb6b] hover:text-white hover:border-[#4dbb6b] transition-all group">
                                        {social === 'ln' && (
                                            <svg className="w-[1.4vw] h-[1.4vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                                        )}
                                        {social === 'tw' && (
                                            <svg className="w-[1.4vw] h-[1.4vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                        )}
                                        {social === 'fb' && (
                                            <svg className="w-[1.4vw] h-[1.4vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Column 2: MENU (2 cols) */}
                        <div className="lg:col-span-2 flex flex-col gap-[2.5vw]">
                            <h3 className="text-[1vw] font-black text-white/40 tracking-[0.3vw] uppercase">Menu</h3>
                            <ul className="flex flex-col gap-[1.2vw]">
                                {['Customers', 'Resources', 'Careers', 'Projects'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-[1.2vw] font-bold text-white hover:text-[#4dbb6b] transition-colors">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: COMPANY (2 cols) */}
                        <div className="lg:col-span-2 flex flex-col gap-[2.5vw]">
                            <h3 className="text-[1vw] font-black text-white/40 tracking-[0.3vw] uppercase">Company</h3>
                            <ul className="flex flex-col gap-[1.2vw]">
                                {['Help', 'Terms', 'Cookies', 'Security', 'Privacy'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-[1.2vw] font-bold text-white hover:text-[#4dbb6b] transition-colors">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: SOCIAL (3 cols) */}
                        <div className="lg:col-span-3 flex flex-col gap-[2.5vw]">
                            <h3 className="text-[1vw] font-black text-white/40 tracking-[0.3vw] uppercase">Social</h3>
                            <ul className="flex flex-col gap-[1.2vw]">
                                {['X (Twitter)', 'LinkedIn', 'Instagram', 'Facebook'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-[1.2vw] font-bold text-white hover:text-[#4dbb6b] transition-colors">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom: Floating Minimal Row */}
                    <div className="mt-[6vw] pt-[2.5vw] border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-[2vw]">
                        <p className="text-[1vw] text-white/30 font-medium">
                            Designed by <span className="text-white/60 font-black">Swio Corporate</span>. © 2025 All Rights Reserved.
                        </p>

                        <div className="flex items-center gap-[4vw]">
                            <div className="flex gap-[2vw]">
                                <Link href="#" className="text-[0.9vw] font-black text-white/40 hover:text-white transition-colors">Legal</Link>
                                <Link href="#" className="text-[0.9vw] font-black text-white/40 hover:text-white transition-colors">Compliance</Link>
                            </div>

                            {/* Back to Top - Glass Style */}
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="w-[4vw] h-[4vw] bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-white hover:text-[#153a20] transition-all group shadow-xl"
                            >
                                <svg className="w-[1.8vw] h-[1.8vw] transform transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

