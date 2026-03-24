"use client";

import React, { useState } from 'react';

const services = [
    {
        title: "STRUCTURAL STEEL DETAILING",
        desc: "Precision managed projects of any size and complexity, utilizing world-class engineering standards to deliver high-integrity structural frameworks.",
        icon: "◈"
    },
    {
        title: "MISC STEEL DETAILING",
        desc: "Comprehensive detailing solutions for gratings, handrails, and ladders, ensuring every secondary structural element is perfectly integrated.",
        icon: "⬡"
    },
    {
        title: "CONNECTION DESIGN",
        desc: "Expert steel connection design through global engineering partners, ensuring structural safety and time-efficient fabrication.",
        icon: "◆"
    },
    {
        title: "INDUSTRIAL STEEL SERVICES",
        desc: "Specialized detailing for complex industrial facilities including warehouses, manufacturing plants, and heavy-duty structural grids.",
        icon: "▼"
    },
    {
        title: "ESTIMATION & MTO SERVICES",
        desc: "Accurate and detailed material take-offs and estimation services to streamline construction budgeting and procurement.",
        icon: "◢"
    },
    {
        title: "BUILDING BIM SERVICES",
        desc: "Harnessing the power of 3D digital models integrated with real-time project data for clash detection and seamless coordination.",
        icon: "■"
    }
];

const Cards = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row gap-[10vw] lg:gap-[4vw] w-full min-h-[40vw] text-left px-[4vw] lg:px-0 bg-[#faf9f6]">
            {/* LEFT SIDE: The Interactive List */}
            <div className="w-full lg:w-1/2 flex flex-col gap-[1vw] lg:gap-[0.5vw]">
                {services.map((service, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)}
                        className={`group relative p-[4vw] lg:p-[1.5vw] rounded-2xl lg:rounded-xl cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-[#153a20] translate-x-0 lg:translate-x-1' : 'hover:bg-[#153a20]/5'
                            }`}
                    >
                        <div className="flex items-center gap-[4vw] lg:gap-[1.5vw]">
                            <span className={`text-[4vw] lg:text-[1.2vw] anton-regular transition-colors ${activeIndex === index ? 'text-[#4dbb6b]' : 'text-[#153a20]/30'
                                }`}>
                                0{index + 1}
                            </span>
                            <h3 className={`text-[5.5vw] lg:text-[1.8vw] font-black anton-regular uppercase transition-colors ${activeIndex === index ? 'text-white' : 'text-[#153a20]'
                                }`}>
                                {service.title}
                            </h3>
                        </div>
                        {/* Dynamic Progress Bar Under Active */}
                        {activeIndex === index && (
                            <div className="absolute bottom-0 left-[4vw] lg:left-[1.5vw] right-[4vw] lg:right-[1.5vw] h-[2px] bg-[#4dbb6b] origin-left scale-x-100 transition-transform duration-500" />
                        )}
                    </div>
                ))}
            </div>

            {/* RIGHT SIDE: The Reveal Card */}
            <div className="w-full lg:w-1/2 relative min-h-[80vw] lg:h-auto lg:min-h-0">
                <div className="lg:sticky lg:top-[10vw] bg-[#153a20] rounded-[8vw] lg:rounded-[3vw] p-[8vw] lg:p-[4vw] shadow-2xl overflow-hidden min-h-[30vw] flex flex-col justify-center">
                    {/* Background Detail */}
                    <div className="absolute top-[-10vw] right-[-10vw] lg:top-[-5vw] lg:right-[-5vw] text-[35vw] lg:text-[20vw] font-black text-white/5 anton-regular pointer-events-none select-none opacity-20 lg:opacity-100">
                        {services[activeIndex].icon}
                    </div>

                    {/* Content Display */}
                    <div className="relative z-10 transition-all duration-500 transform animate-in fade-in zoom-in-95">
                        <span className="text-[#4dbb6b] text-[3vw] lg:text-[1vw] font-black tracking-[0.3vw] uppercase mb-[2vw] lg:mb-[1vw] block">
                            Service Excellence
                        </span>
                        <h2 className="text-[8vw] lg:text-[3vw] font-black text-white anton-regular uppercase leading-[0.9] mb-[4vw] lg:mb-[2vw] max-w-full lg:max-w-[80%]">
                            {services[activeIndex].title}
                        </h2>
                        <p className="text-[4.2vw] lg:text-[1.3vw] text-white/70 eb-garamond italic leading-relaxed mb-[6vw] lg:mb-[3vw]">
                            {services[activeIndex].desc}
                        </p>

                        <button className="flex items-center gap-[3vw] lg:gap-[1vw] text-[#4dbb6b] font-black text-[3.5vw] lg:text-[1vw] uppercase tracking-wider group/btn">
                            Learn more about this service
                            <div className="w-[8vw] h-[8vw] lg:w-[1.8vw] lg:h-[1.8vw] border border-[#4dbb6b]/30 rounded-full flex items-center justify-center group-hover/btn:bg-[#4dbb6b] group-hover/btn:text-[#153a20] transition-all">
                                →
                            </div>
                        </button>
                    </div>

                    {/* Visual Floor Decor */}
                    <div className="absolute bottom-0 left-0 w-full h-[1vw] lg:h-[0.5vw] bg-[#4dbb6b]/20" />
                </div>
            </div>
        </div>
    );
};

export default Cards;
