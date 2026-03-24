"use client";

import React from 'react';

const jobPositions = [
    { title: "SENIOR DETAILER", type: "Full-Time", dept: "Engineering" },
    { title: "BIM MODELER", type: "Full-Time", dept: "Digital" },
    { title: "STEEL CHECKER", type: "Contract", dept: "Quality" },
    { title: "PROJECT MANAGER", type: "Full-Time", dept: "Operations" },
    { title: "TRAINEE ENGINEER", type: "Full-Time", dept: "Junior" },
    { title: "SALES EXECUTIVE", type: "Full-Time", dept: "Growth" },
    { title: "CONNECTION ENGINEER", type: "Consultant", dept: "Global" },
    { title: "ESTIMATOR", type: "Full-Time", dept: "Finance" }
];

const OpenPostitions = () => {
    return (
        <section className="w-full bg-[#faf9f6] py-[15vw] lg:py-[10vw] px-[6vw] lg:px-[5vw] flex flex-col items-center">
            {/* Header Hierarchy */}
            <div className="text-center mb-[12vw] lg:mb-[6vw]">
                <span className="text-[#4dbb6b] text-[3vw] lg:text-[1vw] font-black tracking-[0.5vw] uppercase anton-regular">Current Openings</span>
                <h2 className="text-[12vw] lg:text-[6vw] font-black text-[#153a20] anton-regular uppercase tracking-tighter leading-none mt-[2vw] lg:mt-[1vw]">
                    TECHNICAL <span className="text-[#4dbb6b]">HUB</span>
                </h2>
                <div className="w-[15vw] lg:w-[10vw] h-[1vw] lg:h-[0.3vw] bg-[#153a20] mx-auto mt-[4vw] lg:mt-[2vw] rounded-full" />
            </div>

            {/* Grid Assembly */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[6vw] lg:gap-[2vw] w-full max-w-[90vw]">
                {jobPositions.map((job, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-[5vw] lg:rounded-[2vw] p-[8vw] lg:p-[2.5vw] border border-[#153a20]/5 shadow-[0_1.5vw_4vw_rgba(21,58,32,0.03)] hover:shadow-2xl transition-all duration-700 hover:-translate-y-[0.5vw] flex flex-col justify-between min-h-[70vw] lg:min-h-[22vw]"
                    >
                        <div>
                            {/* Metadata Pills */}
                            <div className="flex items-center gap-[2vw] lg:gap-[0.8vw] mb-[6vw] lg:mb-[2vw]">
                                <span className="px-[3vw] lg:px-[1vw] py-[1vw] lg:py-[0.3vw] bg-[#4dbb6b]/10 text-[#4dbb6b] text-[2.5vw] lg:text-[0.7vw] font-black anton-regular uppercase rounded-full">
                                    {job.type}
                                </span>
                                <span className="text-[#153a20]/30 text-[2.5vw] lg:text-[0.7vw] font-bold tracking-[0.1vw] uppercase anton-regular">
                                    / {job.dept}
                                </span>
                            </div>

                            {/* Job Title */}
                            <h3 className="text-[6vw] lg:text-[1.8vw] font-black text-[#153a20] anton-regular leading-[1.1] mb-[4vw] lg:mb-[2vw] uppercase group-hover:text-[#4dbb6b] transition-colors">
                                {job.title}
                            </h3>
                        </div>

                        {/* Bottom Action Area */}
                        <div>
                            <p className="text-[3.8vw] lg:text-[1.1vw] text-[#153a20]/60 eb-garamond mb-[6vw] lg:mb-[2.5vw] leading-tight">
                                Opportunity to work on high-stakes global infrastructure.
                            </p>

                            <button className="w-full py-[3.5vw] lg:py-[1vw] bg-[#153a20] hover:bg-[#4dbb6b] text-white hover:text-[#153a20] font-black rounded-full text-[3.5vw] lg:text-[0.9vw] anton-regular uppercase tracking-[0.15vw] transition-all shadow-lg cursor-pointer">
                                Apply for Role
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Note */}
            <p className="mt-[12vw] lg:mt-[8vw] text-[#153a20]/40 text-[4vw] lg:text-[1.2vw] eb-garamond max-w-[85vw] lg:max-w-[30vw] text-center italic">
                * PragTech is an equal opportunity employer committed to structural excellence and engineering innovation.
            </p>
        </section>
    );
};

export default OpenPostitions;
