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
            <ProjectSection />
            <Technologies />
            <ReviewSection />
        </div>
    );
};

export default PragtechHome;
