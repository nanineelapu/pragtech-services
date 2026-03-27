"use client";

import React from "react";
import HomeSection from "./homesection";

import MarketSection from "./marketsection";
import ProjectSection from "./projectsection";
import Technologies from "./technologies";
import ReviewSection from "./reviewsection";

const PragtechHome = () => {
    return (
        <main className="min-h-screen bg-[#ffffff] flex flex-col gap-[5vw] overflow-x-hidden">
            <HomeSection />

            <MarketSection />
            <ProjectSection />
            <Technologies />
            <ReviewSection />
        </main>
    );
};

export default PragtechHome;
