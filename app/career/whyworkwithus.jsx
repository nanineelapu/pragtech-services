"use client";

import React from 'react';

const WhyWorkWithUs = () => {
    return (
        <section className="flex flex-col items-center w-full max-w-[90vw] pb-[8vw]">
            {/* White Card container */}
            <div className="bg-white rounded-[2vw] p-[5vw] shadow-[0_2vw_5vw_rgba(0,0,0,0.1)] w-full text-center">
                <h2 className="text-[3.5vw] font-black text-[#0f2a4a] mb-[3vw] tracking-tight">
                    Why Work With Us?
                </h2>
                
                {/* Description Paragraph */}
                <p className="max-w-[70vw] mx-auto text-[1.2vw] text-[#4a5f77] font-medium leading-loose">
                    At Pragmatic Technical Services, we believe in nurturing talent and providing growth opportunities. Join a team of passionate professionals working on cutting-edge structural steel projects worldwide. We offer competitive salaries, flexible work arrangements, and a collaborative environment.
                </p>
            </div>
        </section>
    );
};

export default WhyWorkWithUs;
