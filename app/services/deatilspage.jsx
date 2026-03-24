import React from "react";

const DetailsPage = () => {
    return (
        <section className="bg-[#faf9f6] pt-[8vw] pb-[2vw] px-[4vw] text-center w-full">
            {/* Heading Label Decor */}
            <div className="w-[4vw] h-[0.3vw] bg-[#4dbb6b] mx-auto mb-[2.5vw] rounded-full" />

            {/* Main Heading Hierarchy */}
            <h1 className="text-[5vw] font-black text-[#153a20] uppercase anton-regular tracking-tighter leading-none mb-[2vw]">
                Complete Service <span className="text-[#4dbb6b]">Portfolio</span>
            </h1>

            <p className="max-w-[45vw] mx-auto text-[1.4vw] text-[#153a20]/70 eb-garamond italic leading-relaxed">
                A multi-dimensional network of structural detailing excellence tailored to elevate global industrial frameworks.
            </p>
        </section>
    );
};

export default DetailsPage;
