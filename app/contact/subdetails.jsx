"use client";

import React from 'react';

const SubDetails = () => {
    return (
        <section className="flex flex-col items-center justify-center py-[8vw] px-[4vw] bg-[#223547] relative">
            {/* Subtle radial glow background */}
            <div className="absolute inset-0 bg-radial-gradient from-[#0081bb]/5 to-transparent pointer-events-none" />
            
            <p className="max-w-[70vw] text-[1.8vw] font-medium text-white/90 text-center leading-[1.6] tracking-tight relative z-10">
                Our team is always available to assist you, whether you have questions, need support, or want to explore collaboration opportunities. Send us a message today, and together, let's create something truly remarkable!
            </p>
        </section>
    );
};

export default SubDetails;
