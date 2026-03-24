"use client";

import React from "react";
import HomeSection from "./homesection";
import FirstSection from "./firstsection";
import MarketSection from "./marketsection";
import ProjectSection from "./projectsection";
import Technologies from "./technologies";
import ReviewSection from "./reviewsection";

const PragtechHome = () => {
    return (
        <main className="min-h-screen bg-[#273A4D] flex flex-col gap-[5vw]">
            <HomeSection />
            <FirstSection />
            <MarketSection />
            <ProjectSection />
            <Technologies />
            <ReviewSection />
        </main>
    );
};

export default PragtechHome;