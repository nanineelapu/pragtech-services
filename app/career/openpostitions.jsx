"use client";

import React from 'react';

const OpenPostitions = () => {
    const jobPositions = [
        "Detailer", "Modeler", "Checker", "Project Manager",
        "Trainee Engineer", "Sales Executive", "Structural Connection Engineer", "Estimator"
    ];

    return (
        <section className="flex flex-col items-center w-full max-w-[90vw] pb-[10vw]">
            {/* White Container holding all positions */}
            <div className="bg-white rounded-[2.5vw] p-[5vw] shadow-[0_2vw_6vw_rgba(0,0,0,0.12)] w-full flex flex-col items-center">
                
                {/* Section Header */}
                <h2 className="text-[4.5vw] font-black text-[#0f2a4a] tracking-tight mb-[1.5vw]">
                    Open <span className="text-[#0081bb] relative">
                        Positions
                        <div className="absolute -bottom-[1vw] left-[10%] w-[80%] h-[0.3vw] bg-[#0081bb] rounded-full" />
                    </span>
                </h2>

                {/* Job Cards Grid */}
                <div className="grid grid-cols-4 gap-[2vw] w-full mt-[5vw]">
                    {jobPositions.map((job, index) => (
                        <div key={index} className="bg-white rounded-[1.2vw] border border-gray-100 p-[2.5vw] flex flex-col items-start shadow-[0_1vw_3vw_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-[0.5vw] transition-all duration-300">
                            
                            {/* Job Icon Placeholder Pill */}
                            <div className="w-[3.2vw] h-[3.2vw] bg-[#0081bb]/10 rounded-[0.8vw] flex items-center justify-center mb-[2vw]">
                                <svg className="w-[1.6vw] h-[1.6vw] text-[#0081bb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                            {/* Job Title */}
                            <h3 className="text-[1.35vw] font-black text-[#0f2a4a] leading-tight mb-[2vw]">
                                {job}
                            </h3>

                            {/* Apply Button */}
                            <button className="flex items-center justify-center gap-[0.5vw] w-full py-[0.8vw] bg-[#0081bb] hover:bg-[#006ca3] text-white font-black rounded-[0.6vw] text-[1vw] uppercase tracking-wide transition-all shadow-md group">
                                Apply Now
                                <svg className="w-[1vw] h-[1vw] transform transition-transform group-hover:translate-x-[0.2vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OpenPostitions;
