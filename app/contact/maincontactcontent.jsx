"use client";

import React from 'react';

const MainContactContent = () => {
    return (
        <section className="bg-[#273A4D] py-[8vw] px-[4vw]">
            <div className="max-w-[90vw] mx-auto grid grid-cols-[1fr_0.8fr] gap-[5vw]">
                {/* Left Column: Locations */}
                <div className="flex flex-col">
                    <h2 className="text-[2.5vw] font-black text-white mb-[4vw] tracking-tight">
                        Locations
                    </h2>

                    <div className="grid grid-cols-2 gap-[2vw]">
                        {/* USA HQ Card */}
                        <div className="bg-white rounded-[1.5vw] p-[2.5vw] flex flex-col items-start shadow-xl">
                            <div className="flex items-center gap-[1vw] mb-[1.5vw]">
                                <img src="https://flagcdn.com/us.svg" className="w-[3vw] h-[2vw] rounded-sm object-cover" alt="USA Flag" />
                                <span className="text-[1.3vw] font-black text-[#0f2a4a]">USA</span>
                            </div>
                            <span className="text-[#0081bb] font-black text-[1vw] uppercase mb-[1vw]">Head Quarter</span>
                            <p className="text-[#4a5f77] text-[1vw] font-medium leading-relaxed mb-auto">
                                4080, MCGinnis ferry road suite #1403, ALPHARETTA, GA 30005, USA.
                            </p>
                            <span className="text-[#0081bb] font-black text-[1vw] mt-[1.5vw]">+1 770-809-0806</span>
                        </div>

                        {/* South Central Region Card */}
                        <div className="bg-white rounded-[1.5vw] p-[2.5vw] flex flex-col items-start shadow-xl border border-gray-100">
                             <span className="text-[1.3vw] font-black text-[#0081bb] mb-[1vw]">South Central Region</span>
                             <p className="text-[#4a5f77] text-[1vw] font-medium leading-relaxed mb-auto">
                                1107 State HWY 103W, San Augustine, TX 75972, USA
                             </p>
                             <span className="text-[#0081bb] font-black text-[1vw] mt-[1.5vw]">+1 281-648-8137</span>
                        </div>

                        {/* India HQ Card */}
                        <div className="bg-white rounded-[1.5vw] p-[2.5vw] flex flex-col items-start shadow-xl border border-gray-100">
                            <div className="flex items-center gap-[1vw] mb-[1.5vw]">
                                <img src="https://flagcdn.com/in.svg" className="w-[3vw] h-[2vw] rounded-sm object-cover" alt="India Flag" />
                                <span className="text-[1.3vw] font-black text-[#0f2a4a]">India</span>
                            </div>
                            <span className="text-[#0081bb] font-black text-[1vw] uppercase mb-[1vw]">Head Quarters</span>
                            <p className="text-[#4a5f77] text-[1vw] font-medium leading-relaxed mb-auto">
                                MJR Magnifique & IT Park, Gachibowli, Hyderabad, Telangana, India – 500008
                            </p>
                            <span className="text-[#0081bb] font-black text-[1vw] mt-[1.5vw]">+1 281-648-8137</span>
                        </div>

                        {/* UK Office Card */}
                        <div className="bg-white rounded-[1.5vw] p-[2.5vw] flex flex-col items-start shadow-xl border border-gray-100">
                            <div className="flex items-center gap-[1vw] mb-[1.5vw]">
                                <img src="https://flagcdn.com/gb.svg" className="w-[3vw] h-[2vw] rounded-sm object-cover" alt="UK Flag" />
                                <span className="text-[1.3vw] font-black text-[#0f2a4a]">UK</span>
                            </div>
                            <span className="text-[#0081bb] font-black text-[1vw] uppercase mb-[1vw]">Corporate Office</span>
                            <p className="text-[#4a5f77] text-[1vw] font-medium leading-relaxed mb-auto">
                                3B, Hamelyn Close Basingstoke Hampshire RG21 8UY, UK
                            </p>
                            <span className="text-[#0081bb] font-black text-[1vw] mt-[1.5vw]">+44 2868065002</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="bg-white rounded-[2vw] p-[4vw] shadow-[0_2vw_5vw_rgba(0,0,0,0.2)]">
                    <form className="flex flex-col gap-[2vw]">
                        <div className="flex flex-col gap-[0.5vw]">
                            <label className="text-[1vw] font-black text-[#0f2a4a] flex gap-[0.2vw]">Name<span className="text-red-500">*</span></label>
                            <input className="px-[1.5vw] py-[1.2vw] bg-[#f8f9fa] border border-gray-200 rounded-[0.8vw] text-[1vw] outline-none focus:border-[#0081bb] transition-all" placeholder="Your name" />
                        </div>

                        <div className="flex flex-col gap-[0.5vw]">
                            <label className="text-[1vw] font-black text-[#0f2a4a] flex gap-[0.2vw]">Email<span className="text-red-500">*</span></label>
                            <input className="px-[1.5vw] py-[1.2vw] bg-[#f8f9fa] border border-gray-200 rounded-[0.8vw] text-[1vw] outline-none focus:border-[#0081bb] transition-all" placeholder="Your email address" />
                        </div>

                        <div className="flex flex-col gap-[0.5vw]">
                            <label className="text-[1vw] font-black text-[#0f2a4a] flex gap-[0.2vw]">Phone<span className="text-red-500">*</span></label>
                            <input className="px-[1.5vw] py-[1.2vw] bg-[#f8f9fa] border border-gray-200 rounded-[0.8vw] text-[1vw] outline-none focus:border-[#0081bb] transition-all" placeholder="Your phone number" />
                        </div>

                        <div className="flex flex-col gap-[0.5vw]">
                            <label className="text-[1vw] font-black text-[#0f2a4a]">Message (optional)</label>
                            <textarea className="px-[1.5vw] py-[1.2vw] bg-[#f8f9fa] border border-gray-200 rounded-[0.8vw] text-[1vw] outline-none focus:border-[#0081bb] transition-all min-h-[12vw] resize-none" placeholder="Tell us why you are contacting us" />
                        </div>

                        <div className="flex items-start gap-[1vw] py-[1vw] bg-[#f8f9fa] p-[1.5vw] rounded-[0.8vw] border border-gray-100">
                             <input type="checkbox" className="mt-[0.3vw] w-[1.2vw] h-[1.2vw]" />
                             <p className="text-[0.75vw] text-[#4a5f77] leading-relaxed">
                                By providing your phone number, you agree to receive marketing messages, customer care messages, and account notifications from PRAGMATICH. Message and data rates may apply. Message frequency varies. Reply STOP at any time to opt out. Reply HELP for more information. View our <span className="text-[#0081bb] underline cursor-pointer">Privacy Policy</span> | <span className="text-[#0081bb] underline cursor-pointer">Terms & Conditions</span>.
                             </p>
                        </div>

                        <button className="flex items-center justify-center gap-[1vw] w-full py-[1.2vw] bg-[#0081bb] hover:bg-[#006ca3] text-white font-black rounded-[0.8vw] text-[1.2vw] uppercase tracking-wide transition-all shadow-xl group">
                            Submit Form
                            <svg className="w-[1.2vw] h-[1.2vw] rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MainContactContent;
