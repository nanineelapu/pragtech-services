"use client";

import React, { useState } from 'react';

const jobPositions = [
    { title: "Senior Steel Detailer", type: "Full-Time", dept: "SDS/2 & Tekla", jd: "Lead complex 3D modeling for industrial structures. Ensure compliance with AISC/CISC standards using SDS/2 and Tekla structures." },
    { title: "Junior Steel Detailer", type: "Trainee", dept: "Engineering", jd: "Support modeling of minor steel components and miscellaneous framing. Develop core expertise in automated detailing software." },
    { title: "Cladding Specialist", type: "Full-Time", dept: "Cladding", jd: "Produce accurate and coordinated cladding detailing for industrial and commercial building envelopes. Deliver panel layouts, bracket arrangements, and fixing details using Tekla Structures and AutoCAD." },
    { title: "Estimation Specialist", type: "Full-Time", dept: "MTO Division", jd: "Conduct comprehensive weight analysis and material take-offs. Provide accurate structural tonnage budgets for global bidding." },
];

const OpenPostitions = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleApply = (job) => {
        setSelectedJob(job);
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    const closePortal = () => {
        setSelectedJob(null);
        document.body.style.overflow = 'auto'; // Re-enable scroll
    };

    return (
        <section id="open-positions" className="w-full bg-transparent py-[15vw] lg:py-[10vw] px-[6vw] lg:px-[5vw] flex flex-col items-center">
            {/* Header Hierarchy */}
            <div className="text-center mb-[12vw] lg:mb-[6vw]">
                <span className="text-teal text-[3vw] lg:text-[1vw] font-black tracking-[0.5vw] uppercase anton-regular">Current Openings</span>
                <h2 className="text-[12vw] lg:text-[6vw] font-black text-navy anton-regular uppercase tracking-tighter leading-none mt-[2vw] lg:mt-[1vw]">
                    TECHNICAL <span className="text-teal">HUB</span>
                </h2>
                <div className="w-[15vw] lg:w-[10vw] h-[1vw] lg:h-[0.3vw] bg-navy mx-auto mt-[4vw] lg:mt-[2vw] rounded-full" />
            </div>

            {/* Grid Assembly */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[6vw] lg:gap-[2vw] w-full max-w-[90vw]">
                {jobPositions.map((job, index) => (
                    <div
                        key={index}
                        className="group bg-white/80 backdrop-blur-md rounded-[5vw] lg:rounded-[2vw] p-[8vw] lg:p-[2.5vw] border border-navy/5 shadow-[0_1.5vw_4vw_rgba(15,23,42,0.03)] hover:shadow-2xl transition-all duration-700 hover:-translate-y-[0.5vw] flex flex-col justify-between min-h-[70vw] lg:min-h-[22vw]"
                    >
                        <div>
                            {/* Metadata Pills */}
                            <div className="flex items-center gap-[2vw] lg:gap-[0.8vw] mb-[6vw] lg:mb-[2vw]">
                                <span className="px-[3vw] lg:px-[1vw] py-[1vw] lg:py-[0.3vw] bg-teal/10 text-teal text-[2.5vw] lg:text-[0.7vw] font-black anton-regular uppercase rounded-full">
                                    {job.type}
                                </span>
                                <span className="text-navy/30 text-[2.5vw] lg:text-[0.7vw] font-bold tracking-[0.1vw] uppercase anton-regular">
                                    / {job.dept}
                                </span>
                            </div>

                            {/* Job Title */}
                            <h3 className="text-[6vw] lg:text-[1.8vw] font-black text-navy anton-regular leading-[1.1] mb-[4vw] lg:mb-[2vw] uppercase group-hover:text-teal transition-colors">
                                {job.title}
                            </h3>
                        </div>

                        {/* Bottom Action Area */}
                        <div>
                            <p className="text-[3.8vw] lg:text-[1.1vw] text-navy/60 eb-garamond mb-[6vw] lg:mb-[2.5vw] leading-tight">
                                {job.jd}
                            </p>

                            <button
                                onClick={() => handleApply(job)}
                                className="w-full py-[3.5vw] lg:py-[1vw] bg-navy hover:bg-teal text-white hover:text-navy font-black rounded-full text-[3.5vw] lg:text-[0.9vw] anton-regular uppercase tracking-[0.15vw] transition-all shadow-lg cursor-pointer"
                            >
                                Apply for Role
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Application Modal Portal */}
            {selectedJob && (
                <div className="fixed inset-0 z-[200] flex items-start justify-center px-[4vw] lg:px-0 pt-[15vw] lg:pt-[8vw] overflow-y-auto pb-[10vw]">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-navy/60 backdrop-blur-md animate-in fade-in duration-500"
                        onClick={closePortal}
                    />

                    {/* Modal Container */}
                    <div className="relative w-full max-w-[95vw] lg:max-w-[45vw] bg-white rounded-[8vw] lg:rounded-[2vw] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.3)] border border-white/50 animate-in zoom-in-95 duration-500 flex flex-col overscroll-contain">
                        {/* Modal Header */}
                        <div className="bg-navy p-[4vw] lg:p-[1.2vw] flex items-center justify-between shrink-0">
                            <div>
                                <h2 className="text-white text-[5.5vw] lg:text-[1.8vw] font-black anton-regular tracking-tight uppercase leading-none">
                                    Apply for Position
                                </h2>
                                <p className="text-teal text-[3vw] lg:text-[0.85vw] font-black uppercase tracking-widest mt-[0.5vw] anton-regular">
                                    {selectedJob.title}
                                </p>
                            </div>
                            <button
                                onClick={closePortal}
                                className="w-[8vw] h-[8vw] lg:w-[2.5vw] lg:h-[2.5vw] bg-white/10 hover:bg-white/20 text-white flex items-center justify-center rounded-full transition-all group active:scale-90"
                            >
                                <svg className="w-[4vw] h-[4vw] lg:w-[1vw] lg:h-[1vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Form Body */}
                        <form className="p-[4vw] lg:p-[1.8vw] flex flex-col gap-[2vw] lg:gap-[1vw]">
                            {/* Input Group: Name */}
                            <div className="flex flex-col gap-[0.5vw] lg:gap-[0.3vw]">
                                <label className="text-navy text-[2.5vw] lg:text-[0.7vw] font-black uppercase tracking-widest anton-regular">Full Name*</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-white border border-navy/10 px-[4vw] lg:px-[0.8vw] py-[2.2vw] lg:py-[0.5vw] rounded-[1vw] lg:rounded-[0.4vw] text-navy text-[3.5vw] lg:text-[0.9vw] focus:outline-none focus:border-teal transition-all eb-garamond"
                                    required
                                />
                            </div>

                            {/* Two Column Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2vw] lg:gap-[1vw]">
                                <div className="flex flex-col gap-[0.5vw] lg:gap-[0.3vw]">
                                    <label className="text-navy text-[2.5vw] lg:text-[0.7vw] font-black uppercase tracking-widest anton-regular">Email Address*</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white border border-navy/10 px-[4vw] lg:px-[0.8vw] py-[2.2vw] lg:py-[0.5vw] rounded-[1vw] lg:rounded-[0.4vw] text-navy text-[3.5vw] lg:text-[0.9vw] focus:outline-none focus:border-teal transition-all eb-garamond"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-[0.5vw] lg:gap-[0.3vw]">
                                    <label className="text-navy text-[2.5vw] lg:text-[0.7vw] font-black uppercase tracking-widest anton-regular">Phone Number*</label>
                                    <input
                                        type="tel"
                                        placeholder="+1 234 567 8900"
                                        className="w-full bg-white border border-navy/10 px-[4vw] lg:px-[0.8vw] py-[2.2vw] lg:py-[0.5vw] rounded-[1vw] lg:rounded-[0.4vw] text-navy text-[3.5vw] lg:text-[0.9vw] focus:outline-none focus:border-teal transition-all eb-garamond"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Preferred Location */}
                            <div className="flex flex-col gap-[0.5vw] lg:gap-[0.3vw]">
                                <label className="text-navy text-[2.5vw] lg:text-[0.7vw] font-black uppercase tracking-widest anton-regular">Preferred Location*</label>
                                <select className="w-full bg-white border border-navy/10 px-[4vw] lg:px-[0.8vw] py-[2.2vw] lg:py-[0.5vw] rounded-[1vw] lg:rounded-[0.4vw] text-navy text-[3.5vw] lg:text-[0.9vw] focus:outline-none focus:border-teal transition-all eb-garamond appearance-none cursor-pointer">
                                    <option>Select a location</option>
                                    <option>London, UK (Global HQ)</option>
                                    <option>USA</option>
                                    <option>Dubai, UAE</option>
                                    <option>Toronto, Canada</option>
                                    <option>Sydney, Australia</option>
                                </select>
                            </div>

                            {/* Resume Upload Area */}
                            <div className="flex flex-col gap-[0.5vw] lg:gap-[0.3vw]">
                                <label className="text-navy text-[2.5vw] lg:text-[0.7vw] font-black uppercase tracking-widest anton-regular">Resume (PDF)*</label>
                                <label className="w-full border border-dashed border-navy/10 hover:border-teal bg-white/50 p-[3vw] lg:p-[1.2vw] rounded-[1.5vw] lg:rounded-[0.6vw] flex flex-col items-center justify-center gap-[1vw] lg:gap-[0.3vw] cursor-pointer transition-all group">
                                    <input type="file" className="hidden" accept=".pdf" />
                                    <div className="w-[8vw] h-[8vw] lg:w-[2.2vw] lg:h-[2.2vw] bg-navy/5 group-hover:bg-teal/10 rounded-full flex items-center justify-center transition-all">
                                        <svg className="w-[4vw] h-[4vw] lg:w-[1vw] lg:h-[1vw] text-navy/40 group-hover:text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg>
                                    </div>
                                    <span className="text-navy/60 text-[3vw] lg:text-[0.85vw] eb-garamond group-hover:text-navy">Upload resume (PDF, max 5MB)</span>
                                </label>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-[3vw] lg:gap-[1.2vw] mt-[2vw]">
                                <button
                                    type="button"
                                    onClick={closePortal}
                                    className="w-full py-[2.5vw] lg:py-[0.7vw] border border-navy/10 hover:bg-navy/5 text-navy font-black rounded-full text-[3.2vw] lg:text-[0.85vw] eb-garamond uppercase tracking-[0.1vw] transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="w-full py-[2.5vw] lg:py-[0.7vw] bg-navy hover:bg-teal text-white hover:text-navy font-black rounded-full text-[3.2vw] lg:text-[0.85vw] eb-garamond uppercase tracking-[0.1vw] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-[1.5vw] lg:gap-[0.4vw]"
                                >
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Footer Note */}
            <p className="mt-[12vw] lg:mt-[8vw] text-navy/40 text-[4vw] lg:text-[1.2vw] eb-garamond max-w-[85vw] lg:max-w-[30vw] text-center italic">
                * Pragmatic Technical Services is an equal opportunity employer committed to structural excellence and engineering innovation.
            </p>
        </section>
    );
};

export default OpenPostitions;
