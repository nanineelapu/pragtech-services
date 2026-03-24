"use client";

import React from 'react';

const Details = () => {
    return (
        <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 py-8 pb-24 md:mt-12 md:gap-16 md:py-12 md:pb-40">
            {/* Main Text Container */}
            <div className="w-full max-w-5xl rounded-3xl bg-white p-6 shadow-xl text-left leading-relaxed sm:p-10 md:p-12">
                <p className="text-base text-[#4a5f77] font-medium sm:text-lg lg:text-[1.1rem]">
                    Pragmatic Technical Services provides{" "}
                    <span className="text-[#0081bb] font-bold">top-notch Structural Steel Detailing and Engineering solutions</span>{" "}
                    with over{" "}
                    <span className="text-[#0081bb] font-bold">500+ years of combined experience.</span>{" "}
                    An exceptional team of professionals with expertise in their respective fields and well versed in{" "}
                    <span className="text-[#0081bb] font-bold">AISC, CISC, NISD, AWS, OSHA</span>{" "}
                    and other Standard Industry Practices. From designing to building, we give our best to ensure that a project is executed to perfection. Our team has worked on more than{" "}
                    <span className="text-[#0081bb] font-bold">3500+ projects</span>{" "}
                    with varying capacities —{" "}
                    <span className="text-[#0081bb] font-bold">Power plants, Stadiums, Conveyors, Hospitals and Schools</span>{" "}
                    are a few examples. Leveraging cutting-edge technologies like{" "}
                    <span className="text-[#0081bb] font-bold">SDS/2 and Tekla Structures,</span>{" "}
                    we deliver precise and efficient structural detailing solutions. We look forward to expanding globally and working on a wider range of projects. With technology improving every minute, we are proud to say that we keep up with the latest trends by updating our equipment and software regularly. Pragmatic Technical Services was established specifically to export{" "}
                    <span className="text-[#0081bb] font-bold">high quality structural and miscellaneous steel detailing services</span>{" "}
                    for steel fabricators, steel erectors and construction firms.
                </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="flex w-full flex-col gap-6 px-4 sm:px-0 md:flex-row md:gap-8">
                {/* Vision Card */}
                <div className="flex-1 rounded-2xl bg-[#0081bb] p-8 shadow-2xl transition-transform hover:scale-[1.02] sm:p-10 md:p-12">
                    <div className="mb-6 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 shadow-sm backdrop-blur-sm sm:h-14 sm:w-14">
                            <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">Our Vision</h3>
                    </div>
                    <p className="text-base font-medium leading-relaxed text-white/90 sm:text-lg">
                        To become a leading global provider of engineering solutions, recognized for our commitment to excellence, innovation, and integrity. We are dedicated to empowering our employees, believing that strong individuals build resilient institutions. Guided by professionalism and passion, we strive to set an example by addressing societal needs and embracing our social responsibilities. These values define who we are, and we uphold them with unwavering dedication.
                    </p>
                </div>

                {/* Mission Card */}
                <div className="flex-1 rounded-2xl bg-white p-8 shadow-xl transition-transform hover:scale-[1.02] sm:p-10 md:p-12">
                    <div className="mb-6 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0081bb]/20 bg-[#0081bb]/10 shadow-sm sm:h-14 sm:w-14">
                            <svg className="h-6 w-6 text-[#0081bb] sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                <circle cx="12" cy="12" r="3" />
                                <circle cx="12" cy="12" r="7" strokeDasharray="4 4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-black tracking-tight text-[#0f2a4a] sm:text-3xl lg:text-4xl">Our Mission</h3>
                    </div>
                    <p className="text-base font-medium leading-relaxed text-[#4a5f77] sm:text-lg">
                        With our strong foundation of expertise, our mission is to deliver world-class structural detailing solutions through precision, innovation, and integrity. We empower our skilled team to exceed global industry standards, build lasting partnerships across borders, and embrace sustainable practices. Driven by technology and guided by responsibility, we are committed to shaping a smarter, stronger future for the engineering world.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Details;