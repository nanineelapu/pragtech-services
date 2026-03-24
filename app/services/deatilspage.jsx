import React from "react";

const DetailsPage = () => {
    return (
        <section className="bg-[#faf9f6] pt-[8vw] lg:pt-[8vw] pb-[2vw] text-center w-full overflow-x-hidden">
            <div className="px-[6vw] lg:px-[4vw] w-full">
                {/* Heading Label Decor */}
                <div className="w-[10vw] lg:w-[4vw] h-[1vw] lg:h-[0.3vw] bg-[#4dbb6b] mx-auto mb-[6vw] lg:mb-[2.5vw] rounded-full" />

                {/* Main Heading Hierarchy */}
                <h1 className="text-[12vw] lg:text-[5vw] font-black text-[#153a20] uppercase anton-regular tracking-tighter leading-none mb-[4vw] lg:mb-[2vw]">
                    Complete Service <span className="text-[#4dbb6b]">Portfolio</span>
                </h1>

                <p className="max-w-[85vw] lg:max-w-[45vw] mx-auto text-[4.5vw] lg:text-[1.4vw] text-[#153a20]/70 eb-garamond italic leading-relaxed">
                    A multi-dimensional network of structural detailing excellence tailored to elevate global industrial frameworks.
                </p>
            </div>
        </section>
    );
};

export default DetailsPage;
