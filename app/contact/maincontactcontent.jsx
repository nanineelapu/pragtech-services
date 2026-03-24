"use client";

import React from 'react';

const MainContactContent = () => {
    return (
        <section className="bg-[#faf9f6] py-[10vw] px-[4vw] relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-[#153a20]/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-[92vw] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[6vw] relative z-10">
                {/* Left Column: Technical Nodes (Locations) */}
                <div className="flex flex-col gap-[4vw]">
                    <div className="flex flex-col">
                        <h2 className="text-[4vw] font-black text-[#153a20] tracking-tighter leading-none anton-regular uppercase">
                            Global <span className="text-[#4dbb6b]">Connectivity</span>
                        </h2>
                        <div className="w-[8vw] h-[0.3vw] bg-[#4dbb6b] mt-[1.5vw]" />
                        <p className="mt-[2vw] text-[1.4vw] text-[#153a20]/60 eb-garamond italic max-w-[35vw]">
                            Strategic hubs positioned to deliver precision engineering across four continents.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5vw]">
                        {/* USA HQ Card */}
                        <div className="group bg-white rounded-[2vw] p-[3vw] flex flex-col items-start border border-[#153a20]/5 hover:border-[#4dbb6b]/40 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="flex items-center gap-[1.2rem] mb-[2vw]">
                                <div className="p-[0.8vw] bg-[#faf9f6] rounded-xl border border-[#153a20]/5">
                                    <img src="https://flagcdn.com/us.svg" className="w-[2.5vw] h-auto rounded-sm shadow-sm" alt="USA" />
                                </div>
                                <span className="text-[1.8vw] font-black text-[#153a20] anton-regular tracking-tight uppercase">USA</span>
                            </div>
                            <span className="text-[#4dbb6b] font-black text-[0.8vw] uppercase tracking-[0.2vw] mb-[1.5vw] anton-regular">Global Headquarters</span>
                            <p className="text-[#153a20]/70 text-[1.1vw] eb-garamond font-medium leading-relaxed mb-auto">
                                4080, McGinnis Ferry Road <br /> Suite #1403, Alpharetta, <br /> GA 30005, USA.
                            </p>
                            <div className="mt-[2vw] pt-[1.5vw] border-t border-[#153a20]/5 w-full">
                                <span className="text-[#153a20] font-black text-[1.2vw] anton-regular tracking-tight">+1 770-809-0806</span>
                            </div>
                        </div>

                        {/* South Central Card */}
                        <div className="group bg-white rounded-[2vw] p-[3vw] flex flex-col items-start border border-[#153a20]/5 hover:border-[#4dbb6b]/40 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="flex items-center gap-[1.2rem] mb-[2vw]">
                                <div className="w-[3vw] h-[3vw] bg-[#153a20] rounded-xl flex items-center justify-center">
                                    <span className="text-[#4dbb6b] text-[1.2vw]">◈</span>
                                </div>
                                <span className="text-[1.8vw] font-black text-[#153a20] anton-regular tracking-tight uppercase">South Central</span>
                            </div>
                            <span className="text-[#4dbb6b]/60 font-black text-[0.8vw] uppercase tracking-[0.2vw] mb-[1.5vw] anton-regular">Regional Center</span>
                            <p className="text-[#153a20]/70 text-[1.1vw] eb-garamond font-medium leading-relaxed mb-auto">
                                1107 State HWY 103W, <br /> San Augustine, <br /> TX 75972, USA
                            </p>
                            <div className="mt-[2vw] pt-[1.5vw] border-t border-[#153a20]/5 w-full">
                                <span className="text-[#153a20] font-black text-[1.2vw] anton-regular tracking-tight">+1 281-648-8137</span>
                            </div>
                        </div>

                        {/* India HQ Card */}
                        <div className="group bg-white rounded-[2vw] p-[3vw] flex flex-col items-start border border-[#153a20]/5 hover:border-[#4dbb6b]/40 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="flex items-center gap-[1.2rem] mb-[2vw]">
                                <div className="p-[0.8vw] bg-[#faf9f6] rounded-xl border border-[#153a20]/5">
                                    <img src="https://flagcdn.com/in.svg" className="w-[2.5vw] h-auto rounded-sm shadow-sm" alt="India" />
                                </div>
                                <span className="text-[1.8vw] font-black text-[#153a20] anton-regular tracking-tight uppercase">India</span>
                            </div>
                            <span className="text-[#4dbb6b] font-black text-[0.8vw] uppercase tracking-[0.2vw] mb-[1.5vw] anton-regular">Center of Excellence</span>
                            <p className="text-[#153a20]/70 text-[1.1vw] eb-garamond font-medium leading-relaxed mb-auto">
                                MJR Magnifique IT Park, <br /> Gachibowli, Hyderabad, <br /> Telangana, India – 500008
                            </p>
                            <div className="mt-[2vw] pt-[1.5vw] border-t border-[#153a20]/5 w-full">
                                <span className="text-[#153a20] font-black text-[1.2vw] anton-regular tracking-tight">+91 040-XXXX-XXXX</span>
                            </div>
                        </div>

                        {/* UK Card */}
                        <div className="group bg-white rounded-[2vw] p-[3vw] flex flex-col items-start border border-[#153a20]/5 hover:border-[#4dbb6b]/40 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="flex items-center gap-[1.2rem] mb-[2vw]">
                                <div className="p-[0.8vw] bg-[#faf9f6] rounded-xl border border-[#153a20]/5">
                                    <img src="https://flagcdn.com/gb.svg" className="w-[2.5vw] h-auto rounded-sm shadow-sm" alt="UK" />
                                </div>
                                <span className="text-[1.8vw] font-black text-[#153a20] anton-regular tracking-tight uppercase">UK</span>
                            </div>
                            <span className="text-[#4dbb6b] font-black text-[0.8vw] uppercase tracking-[0.2vw] mb-[1.5vw] anton-regular">Corporate Liaison</span>
                            <p className="text-[#153a20]/70 text-[1.1vw] eb-garamond font-medium leading-relaxed mb-auto">
                                3B, Hamelyn Close Basingstoke <br /> Hampshire RG21 8UY, UK
                            </p>
                            <div className="mt-[2vw] pt-[1.5vw] border-t border-[#153a20]/5 w-full">
                                <span className="text-[#153a20] font-black text-[1.2vw] anton-regular tracking-tight">+44 2868065002</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Secure Contact Interface (Form) */}
                <div className="bg-[#153a20] rounded-[3vw] p-[4.5vw] shadow-[0_4vw_10vw_-2vw_rgba(21,58,32,0.4)] relative overflow-hidden flex flex-col h-fit">
                    {/* Decorative form subtle grid */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 10 L100 10 M0 30 L100 30 M20 0 L20 100 M80 0 L80 100" stroke="#4dbb6b" strokeWidth="0.1" fill="none" />
                        </svg>
                    </div>

                    <div className="relative z-10 mb-[4vw]">
                        <h3 className="text-[2.5vw] font-black text-white anton-regular uppercase tracking-tight">
                            Secure <span className="text-[#4dbb6b]">Transmission</span>
                        </h3>
                        <p className="text-[#faf9f6]/40 eb-garamond text-[1vw] italic">Initialize project consultation or general inquiry.</p>
                    </div>

                    <form className="relative z-10 flex flex-col gap-[2.5vw]">
                        <div className="grid grid-cols-1 gap-[2vw]">
                            <div className="flex flex-col gap-[0.8vw]">
                                <label className="text-[0.8vw] font-black text-[#4dbb6b] uppercase tracking-widest anton-regular">Operator Name</label>
                                <input className="px-[1.5vw] py-[1.2vw] bg-white/5 border border-white/10 rounded-[1vw] text-white text-[1.1vw] outline-none focus:border-[#4dbb6b] focus:bg-white/10 transition-all font-medium" placeholder="E.g. John Doe" />
                            </div>

                            <div className="flex flex-col gap-[0.8vw]">
                                <label className="text-[0.8vw] font-black text-[#4dbb6b] uppercase tracking-widest anton-regular">Encrypted Email</label>
                                <input className="px-[1.5vw] py-[1.2vw] bg-white/5 border border-white/10 rounded-[1vw] text-white text-[1.1vw] outline-none focus:border-[#4dbb6b] focus:bg-white/10 transition-all font-medium" placeholder="operator@domain.com" />
                            </div>

                            <div className="flex flex-col gap-[0.8vw]">
                                <label className="text-[0.8vw] font-black text-[#4dbb6b] uppercase tracking-widest anton-regular">Communication Node</label>
                                <input className="px-[1.5vw] py-[1.2vw] bg-white/5 border border-white/10 rounded-[1vw] text-white text-[1.1vw] outline-none focus:border-[#4dbb6b] focus:bg-white/10 transition-all font-medium" placeholder="+1 (XXX) XXX-XXXX" />
                            </div>

                            <div className="flex flex-col gap-[0.8vw]">
                                <label className="text-[0.8vw] font-black text-[#4dbb6b] uppercase tracking-widest anton-regular">Message Payload</label>
                                <textarea className="px-[1.5vw] py-[1.2vw] bg-white/5 border border-white/10 rounded-[1vw] text-white text-[1.1vw] outline-none focus:border-[#4dbb6b] focus:bg-white/10 transition-all min-h-[12vw] resize-none font-medium" placeholder="Describe the project scope or inquiry details..." />
                            </div>
                        </div>

                        <div className="flex items-start gap-[1.2vw] py-[1.5vw] bg-white/[0.03] p-[2vw] rounded-[1.5vw] border border-white/[0.05]">
                            <input type="checkbox" className="mt-[0.3vw] w-[1.2vw] h-[1.2vw] accent-[#4dbb6b]" />
                            <p className="text-[0.75vw] text-white/40 eb-garamond leading-relaxed italic">
                                I verify that the information provided is accurate and I agree to receive project-related communications from PRAGTECH. Your data is handled per our <span className="text-[#4dbb6b] underline cursor-pointer hover:text-white transition-colors">Privacy Protocols</span>.
                            </p>
                        </div>

                        <button className="flex items-center justify-center gap-[1.2vw] w-full py-[1.5vw] bg-[#4dbb6b] hover:bg-white text-[#153a20] font-black rounded-full text-[1.2vw] uppercase tracking-[0.2vw] anton-regular transition-all shadow-[0_1.5vw_4vw_rgba(77,187,107,0.2)] active:scale-95 group">
                            Send Transmission
                            <svg className="w-[1.4vw] h-[1.4vw] transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MainContactContent;
