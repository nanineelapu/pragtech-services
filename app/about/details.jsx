"use client";

import React from 'react';

const Details = () => {
    return (
        <section className="mx-auto flex w-full max-w-[90vw] flex-col items-center gap-8 py-8 pb-24 md:mt-4 md:gap-12 md:py-12 md:pb-40">
            {/* Main Text Container - Cream theme */}
            <div className="w-full rounded-[3vw] bg-[#faf9f6] p-8 shadow-[0_2vw_5vw_rgba(21,58,32,0.05)] border border-[#153a20]/5 text-left leading-relaxed sm:p-10 md:p-14">
                <p className="text-[1.3vw] text-[#153a20] font-medium leading-[2] eb-garamond italic">
                    Pragmatic Technical Services provides{" "}
                    <span className="text-[#4dbb6b] font-bold">top-notch Structural Steel Detailing and Engineering solutions</span>{" "}
                    with over{" "}
                    <span className="text-[#4dbb6b] font-bold">500+ years of combined experience.</span>{" "}
                    An exceptional team of professionals with expertise in their respective fields and well versed in{" "}
                    <span className="text-[#4dbb6b] font-bold md:whitespace-nowrap">AISC, CISC, NISD, AWS, OSHA</span>{" "}
                    and other Standard Industry Practices. From designing to building, we give our best to ensure that a project is executed to perfection. Our team has worked on more than{" "}
                    <span className="text-[#4dbb6b] font-bold">3500+ projects</span>{" "}
                    with varying capacities —{" "}
                    <span className="text-[#4dbb6b] font-bold">Power plants, Stadiums, Conveyors, Hospitals and Schools</span>{" "}
                    are a few examples. Leveraging cutting-edge technologies like{" "}
                    <span className="text-[#4dbb6b] font-bold italic underline decoration-[0.2vw] underline-offset-[0.4vw]">SDS/2 and Tekla Structures,</span>{" "}
                    we deliver precise and efficient structural detailing solutions. We look forward to expanding globally and working on a wider range of projects. With technology improving every minute, we are proud to say that we keep up with the latest trends by updating our equipment and software regularly. Pragmatic Technical Services was established specifically to export{" "}
                    <span className="text-[#4dbb6b] font-bold">high quality structural and miscellaneous steel detailing services</span>{" "}
                    for steel fabricators, steel erectors and construction firms.
                </p>
            </div>

            {/* Vision & Mission Cards - Alternating Theme */}
            <div className="flex w-full flex-col gap-6 md:flex-row md:gap-10">
                {/* Vision Card - Dark Green */}
                <div className="flex-1 rounded-[2.5vw] bg-[#153a20] p-10 shadow-2xl transition-all duration-500 hover:translate-y-[-1vw] border border-white/5 group">
                    <div className="mb-8 flex items-center gap-6">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 shadow-lg backdrop-blur-md transition-transform group-hover:rotate-12">
                            <svg className="h-8 w-8 text-[#4dbb6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h3 className="text-[3vw] font-black tracking-tight text-white anton-regular uppercase">Our Vision</h3>
                    </div>
                    <p className="text-[1.2vw] font-medium leading-[1.8] text-white/80 eb-garamond italic">
                        To become a leading global provider of engineering solutions, recognized for our commitment to excellence, innovation, and integrity. We are dedicated to empowering our employees, believing that strong individuals build resilient institutions. Guided by professionalism and passion, we strive to set an example by addressing societal needs and embracing our social responsibilities.
                    </p>
                </div>

                {/* Mission Card - Cream */}
                <div className="flex-1 rounded-[2.5vw] bg-[#faf9f6] p-10 shadow-xl border border-[#153a20]/5 transition-all duration-500 hover:translate-y-[-1vw] group">
                    <div className="mb-8 flex items-center gap-6">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#153a20]/5 border border-[#153a20]/10 shadow-sm transition-transform group-hover:rotate-12">
                            <svg className="h-8 w-8 text-[#153a20]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                <circle cx="12" cy="12" r="3" />
                                <circle cx="12" cy="12" r="7" strokeDasharray="4 4" />
                            </svg>
                        </div>
                        <h3 className="text-[3vw] font-black tracking-tight text-[#153a20] anton-regular uppercase">Our Mission</h3>
                    </div>
                    <p className="text-[1.2vw] font-medium leading-[1.8] text-[#153a20]/80 eb-garamond italic">
                        With our strong foundation of expertise, our mission is to deliver world-class structural detailing solutions through precision, innovation, and integrity. We empower our skilled team to exceed global industry standards, build lasting partnerships across borders, and embrace sustainable practices driven by technology.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Details;
