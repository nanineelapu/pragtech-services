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
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleApply = (job) => {
        setSelectedJob(job);
        setIsSubmitted(false);
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    const closePortal = () => {
        setSelectedJob(null);
        setUploadedFile(null);
        setIsSubmitted(false);
        document.body.style.overflow = 'auto'; // Re-enable scroll
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formsubmit.co/ajax/info@pragtech.co.uk", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                setIsSubmitted(true);
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[6vw] lg:gap-[1.8vw] w-full max-w-[90vw]">
                {jobPositions.map((job, index) => (
                    <div
                        key={index}
                        className="group bg-white/80 backdrop-blur-md rounded-[4vw] lg:rounded-[1.5vw] p-[7vw] lg:p-[2.2vw] border border-navy/5 shadow-[0_1vw_3vw_rgba(15,23,42,0.02)] hover:shadow-2xl transition-all duration-700 hover:-translate-y-[0.4vw] flex flex-col justify-between min-h-[65vw] lg:min-h-[20vw]"
                    >
                        <div>
                            {/* Metadata Pills */}
                            <div className="flex items-center gap-[2vw] lg:gap-[0.6vw] mb-[5vw] lg:mb-[1.8vw]">
                                <span className="px-[3vw] lg:px-[0.9vw] py-[1vw] lg:py-[0.25vw] bg-teal/10 text-teal text-[2.5vw] lg:text-[0.65vw] font-black anton-regular uppercase rounded-full">
                                    {job.type}
                                </span>
                                <span className="text-navy/30 text-[2.5vw] lg:text-[0.65vw] font-bold tracking-[0.1vw] uppercase anton-regular">
                                    / {job.dept}
                                </span>
                            </div>

                            {/* Job Title */}
                            <h3 className="text-[5.5vw] lg:text-[1.6vw] font-black text-navy anton-regular leading-[1.1] mb-[4vw] lg:mb-[1.8vw] uppercase group-hover:text-teal transition-colors">
                                {job.title}
                            </h3>
                        </div>

                        {/* Bottom Action Area */}
                        <div>
                            <p className="text-[3.6vw] lg:text-[1vw] text-navy/60 eb-garamond mb-[5vw] lg:mb-[2vw] leading-tight">
                                {job.jd}
                            </p>

                            <button
                                onClick={() => handleApply(job)}
                                className="w-full py-[3.5vw] lg:py-[0.8vw] bg-navy hover:bg-teal text-white hover:text-navy font-black rounded-full text-[3.5vw] lg:text-[0.85vw] anton-regular uppercase tracking-[0.15vw] transition-all shadow-lg cursor-pointer"
                            >
                                Apply for Role
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Application Modal Portal */}
            {selectedJob && (
                <div className="fixed inset-0 z-[200] flex items-start justify-center px-[4vw] lg:px-0 pt-[25vw] lg:pt-[8.5vw] overflow-y-auto pb-[5vw]">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-navy/60 backdrop-blur-md animate-in fade-in duration-500"
                        onClick={closePortal}
                    />

                    {/* Modal Container */}
                    <div className="relative w-full max-w-[95vw] lg:max-w-[42vw] max-h-[90vh] bg-white rounded-[6vw] lg:rounded-[1.5vw] shadow-[0_32px_80px_rgba(0,0,0,0.3)] border border-white/50 animate-in zoom-in-95 duration-500 flex flex-col overflow-hidden">
                        {/* Modal Header */}
                        <div className="bg-navy p-[3vw] lg:p-[0.8vw] flex items-center justify-between shrink-0">
                            <div>
                                <h2 className="text-white text-[4.5vw] lg:text-[1.4vw] font-black anton-regular tracking-tight uppercase leading-none">
                                    Apply for Position
                                </h2>
                                <p className="text-teal text-[2.5vw] lg:text-[0.7vw] font-black uppercase tracking-widest mt-[0.2vw] anton-regular">
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

                        {/* Modal Content */}
                        <div className="flex-1 overflow-y-auto overscroll-contain">
                            {isSubmitted ? (
                                <div className="p-[6vw] lg:p-[3vw] flex flex-col items-center justify-center text-center gap-[3vw] lg:gap-[1.2vw] animate-in fade-in zoom-in duration-500">
                                    <div className="w-[15vw] h-[15vw] lg:w-[5vw] lg:h-[5vw] bg-teal rounded-full flex items-center justify-center mb-2 shadow-[0_10px_30px_rgba(20,184,166,0.3)]">
                                        <svg className="w-[8vw] h-[8vw] lg:w-[2.5vw] lg:h-[2.5vw] text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-[7vw] lg:text-[2vw] font-black text-navy anton-regular uppercase tracking-tight">Application <span className="text-teal">Received</span></h3>
                                    <p className="text-[4vw] lg:text-[1vw] text-navy/60 eb-garamond max-w-[80vw] lg:max-w-[25vw] leading-relaxed italic">
                                        Thank you for applying for the <span className="text-navy font-bold">{selectedJob.title}</span> role. Our recruitment team will review your credentials shortly.
                                    </p>
                                    <button
                                        onClick={closePortal}
                                        className="mt-[3vw] lg:mt-[1.5vw] px-[8vw] lg:px-[2.5vw] py-[3vw] lg:py-[0.8vw] bg-navy text-white rounded-full anton-regular uppercase text-[3.2vw] lg:text-[0.85vw] tracking-[0.2vw] hover:bg-teal hover:text-navy transition-all shadow-xl active:scale-95"
                                    >
                                        Return to Careers
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="p-[5vw] lg:p-[1.5vw] flex flex-col gap-[3vw] lg:gap-[1vw]"
                                >
                                    {/* FormSubmit Configuration */}
                                    <input type="hidden" name="_subject" value={`New Job Application: ${selectedJob.title}`} />
                                    <input type="hidden" name="position" value={selectedJob.title} />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_autoresponse" value={`Thank you for applying for the ${selectedJob.title} position at Pragtech Services. We have received your application and resume. Our team will reach out to you if your profile matches our requirements.`} />

                                    {/* Input Group: Name */}
                                    <div className="flex flex-col gap-[0.2vw] lg:gap-[0.2vw]">
                                        <label className="text-navy text-[2.5vw] lg:text-[0.65vw] font-black uppercase tracking-widest anton-regular">Full Name*</label>
                                        <input
                                            type="text"
                                            name="full_name"
                                            placeholder="John Doe"
                                            className="w-full bg-white border border-navy/10 px-[3vw] lg:px-[0.8vw] py-[2.2vw] lg:py-[0.5vw] rounded-[1vw] lg:rounded-[0.3vw] text-navy text-[3.5vw] lg:text-[0.9vw] focus:outline-none focus:border-teal transition-all eb-garamond"
                                            required
                                        />
                                    </div>

                                    {/* Two Column Grid */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3vw] lg:gap-[1vw]">
                                        <div className="flex flex-col gap-[0.2vw] lg:gap-[0.2vw]">
                                            <label className="text-navy text-[2.5vw] lg:text-[0.65vw] font-black uppercase tracking-widest anton-regular">Email Address*</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="info@pragtech.co.uk"
                                                className="w-full bg-white border border-navy/10 px-[3vw] lg:px-[0.8vw] py-[2.2vw] lg:py-[0.5vw] rounded-[1vw] lg:rounded-[0.3vw] text-navy text-[3.5vw] lg:text-[0.9vw] focus:outline-none focus:border-teal transition-all eb-garamond"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col gap-[0.2vw] lg:gap-[0.2vw]">
                                            <label className="text-navy text-[2.5vw] lg:text-[0.65vw] font-black uppercase tracking-widest anton-regular">Phone Number*</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="+44 7404 710491"
                                                className="w-full bg-white border border-navy/10 px-[3vw] lg:px-[0.8vw] py-[2.2vw] lg:py-[0.5vw] rounded-[1vw] lg:rounded-[0.3vw] text-navy text-[3.5vw] lg:text-[0.9vw] focus:outline-none focus:border-teal transition-all eb-garamond"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Preferred Location */}
                                    <div className="flex flex-col gap-[0.2vw] lg:gap-[0.2vw]">
                                        <label className="text-navy text-[2.5vw] lg:text-[0.65vw] font-black uppercase tracking-widest anton-regular">Preferred Location*</label>
                                        <select
                                            name="location"
                                            className="w-full bg-white border border-navy/10 px-[3vw] lg:px-[0.8vw] py-[2.2vw] lg:py-[0.5vw] rounded-[1vw] lg:rounded-[0.3vw] text-navy text-[3.5vw] lg:text-[0.9vw] focus:outline-none focus:border-teal transition-all eb-garamond appearance-none cursor-pointer"
                                            required
                                        >
                                            <option value="">Select a location</option>
                                            <option value="London">London, UK (Global HQ)</option>
                                            <option value="USA">USA</option>
                                            <option value="Dubai">Dubai, UAE</option>
                                            <option value="Toronto">Toronto, Canada</option>
                                            <option value="Sydney">Sydney, Australia</option>
                                        </select>
                                    </div>

                                    {/* Resume Upload Area */}
                                    <div className="flex flex-col gap-[0.5vw] lg:gap-[0.5vw]">
                                        <label className="text-navy text-[3vw] lg:text-[0.75vw] font-black uppercase tracking-widest anton-regular">Resume (PDF)*</label>
                                        <label className={`w-full border-2 border-dashed ${uploadedFile ? 'border-teal bg-teal/5' : 'border-navy/10 bg-white/50'} hover:border-teal p-[3.5vw] lg:p-[1.4vw] rounded-[1.5vw] lg:rounded-[0.8vw] flex flex-col items-center justify-center gap-[1.5vw] lg:gap-[0.4vw] cursor-pointer transition-all group relative overflow-hidden`}>
                                            <input
                                                type="file"
                                                name="resume"
                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                                accept=".pdf"
                                                onChange={(e) => setUploadedFile(e.target.files[0])}
                                                required
                                            />
                                            <div className={`w-[10vw] h-[10vw] lg:w-[2.5vw] lg:h-[2.5vw] ${uploadedFile ? 'bg-teal/20' : 'bg-navy/5'} group-hover:bg-teal/10 rounded-full flex items-center justify-center transition-all`}>
                                                <svg className={`w-[5vw] h-[5vw] lg:w-[1.4vw] lg:h-[1.4vw] ${uploadedFile ? 'text-teal' : 'text-navy/40'} group-hover:text-teal`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col items-center gap-[0.5vw] lg:gap-[0.1vw]">
                                                <span className={`text-[3.2vw] lg:text-[0.85vw] eb-garamond font-bold ${uploadedFile ? 'text-teal' : 'text-navy/60'} group-hover:text-navy text-center`}>
                                                    {uploadedFile ? uploadedFile.name : 'Click to upload resume'}
                                                </span>
                                                <span className="text-[2.5vw] lg:text-[0.65vw] text-navy/30 eb-garamond uppercase tracking-widest leading-none">
                                                    PDF format only (Max 5MB)
                                                </span>
                                            </div>
                                        </label>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="grid grid-cols-2 gap-[3vw] lg:gap-[1vw] pt-[1vw] mt-[1vw]">
                                        <button
                                            type="button"
                                            onClick={closePortal}
                                            className="w-full py-[3vw] lg:py-[0.8vw] border border-navy/10 hover:bg-navy/5 text-navy font-black rounded-full text-[3.2vw] lg:text-[0.85vw] eb-garamond uppercase tracking-[0.1vw] transition-all"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-[3vw] lg:py-[0.8vw] bg-navy hover:bg-teal text-white hover:text-navy font-black rounded-full text-[3.2vw] lg:text-[0.85vw] eb-garamond uppercase tracking-[0.1vw] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-[1.5vw] lg:gap-[0.4vw] disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin h-[3.5vw] w-[3.5vw] lg:h-[1vw] lg:w-[1vw]" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing...
                                                </>
                                            ) : 'Submit Application'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default OpenPostitions;
