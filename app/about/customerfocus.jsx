"use client";

import React from 'react';

const CustomerFocus = () => {
    const focusItems = [
        {
            id: "01",
            title: "Precision Delivery",
            desc: "Deliver on time with extreme technical accuracy.",
            bg: "bg-[#fefe9a]", // Light Yellow/Lime
        },
        {
            id: "02",
            title: "Inventive Design",
            desc: "Giving highest importance to creativity and innovation.",
            bg: "bg-[#e2e0ff]", // Light Purple
        },
        {
            id: "03",
            title: "Industry Standard",
            desc: "Strict compliance with international industry guidelines.",
            bg: "bg-[#d9f99d]", // Light Green
        },
        {
            id: "04",
            title: "Global Quality",
            desc: "Meeting world-class standards in every structural detail.",
            bg: "bg-[#baeafc]", // Light Blue
        }
    ];

    return (
        <section className="mx-auto flex w-full max-w-[92vw] flex-col items-center py-[15vw] lg:py-[8vw] bg-[#faf9f6]">
            {/* Main Heading */}
            <div className="text-center mb-[10vw] lg:mb-[6vw]">
                <h2 className="text-[12vw] lg:text-[5vw] font-black text-[#153a20] tracking-tighter uppercase anton-regular">
                    The PragTech <span className="text-[#4dbb6b]">Focus</span>
                </h2>
                <div className="w-[8vw] lg:w-[4vw] h-[0.8vw] lg:h-[0.3vw] bg-[#4dbb6b] mx-auto mt-[1vw] rounded-full" />
            </div>

            {/* Method Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[4vw] lg:gap-[2vw] w-full px-[2vw]">
                {focusItems.map((item, index) => (
                    <div 
                        key={index}
                        className={`${item.bg} p-[6vw] lg:p-[2.5vw] min-h-[45vw] lg:min-h-[18vw] rounded-tr-[12vw] lg:rounded-tr-[5vw] rounded-bl-[12vw] lg:rounded-bl-[5vw] shadow-sm transition-all duration-500 hover:shadow-xl hover:translate-y-[-0.5vw] group cursor-default flex flex-col justify-between`}
                    >
                        {/* Number Indicator */}
                        <div className="text-[10vw] lg:text-[4vw] font-black text-[#153a20] anton-regular opacity-80 leading-none">
                            {item.id}
                        </div>

                        {/* Text Content */}
                        <div className="mt-auto">
                            <h3 className="text-[6vw] lg:text-[1.5vw] font-black text-[#153a20] anton-regular uppercase leading-tight mb-[1vw] lg:mb-[0.5vw]">
                                {item.title}
                            </h3>
                            
                            {/* Hover Reveal Description (Always visible on mobile) */}
                            <div className="h-auto lg:h-0 overflow-hidden opacity-100 lg:opacity-0 group-hover:lg:h-auto group-hover:lg:opacity-100 transition-all duration-500 ease-in-out">
                                <p className="text-[3.8vw] lg:text-[0.9vw] text-[#153a20]/70 font-medium eb-garamond italic pt-[1vw] lg:pt-[0.5vw]">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Slogan */}
            <div className="mt-[12vw] lg:mt-[6vw] text-center max-w-[85vw] lg:max-w-[50vw]">
                <p className="text-[4.5vw] lg:text-[1.4vw] font-medium text-[#153a20] eb-garamond italic leading-[1.6]">
                    "Our focus is not just on the drawing, but on the success of the execution. We are committed to high-quality structural detailing at every stage."
                </p>
            </div>
        </section>
    );
};

export default CustomerFocus;
