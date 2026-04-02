"use client";

import React from "react";
import Image from "next/image";
import HomeSection from "./homesection";
import MarketSection from "./marketsection";
import ProjectSection from "./projectsection";
import Technologies from "./technologies";
import ReviewSection from "./reviewsection";

const PragtechHome = () => {
    return (
        <div className="flex flex-col gap-[10vw] lg:gap-[5vw]">
            <HomeSection />
            <MarketSection />
            
            <div className="relative w-full">
                {/* Specific Background for Projects & Technologies */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <Image
                        src="https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/Gemini_Generated_Image_y1h0mny1h0mny1h0%20%281%29.webp"
                        alt="Section Background"
                        fill
                        className="object-cover object-center opacity-80"
                    />
                    {/* Readability/Transition Overlays */}
                    <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white" />
                </div>

                <div className="relative z-10 flex flex-col gap-[10vw] lg:gap-[5vw]">
                    <ProjectSection />
                    <Technologies />
                </div>
            </div>

            <ReviewSection />
        </div>
    );
};

export default PragtechHome;
