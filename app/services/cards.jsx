import React from 'react';

const services = [
    {
        title: "STRUCTURAL STEEL DETAILING",
        desc: "At Pragmatic Technical Services, our team of highly skilled detailers manages projects of any size and...",
    },
    {
        title: "MISC STEEL DETAILING",
        desc: "At Pragmatic Technical Services, we deliver comprehensive detailing solutions for gratings,...",
    },
    {
        title: "CONNECTION DESIGN",
        desc: "We provide expert steel connection design through our engineering partners worldwide, ensuring time...",
    },
    {
        title: "INDUSTRIAL STEEL DETAILING SERVICES",
        desc: "We provide specialized steel detailing for industrial facilities, including warehouses, manufacturing...",
    },
    {
        title: "ESTIMATION & MATERIAL TAKE OFF SERVICES",
        desc: "We provide accurate and detailed estimation services, paired with comprehensive material...",
    },
    {
        title: "DECK SERVICES",
        desc: "At Pragmatic Technical Services, we specialize in precise and efficient deck detailing for projects of...",
    },
    {
        title: "BUILDING INFORMATION MODELING (BIM) SERVICES",
        desc: "At Pragmatic Technical Services, we harness the power of 3D digital models integrated with project...",
    },
    {
        title: "SPECIALIZED STRUCTURES",
        desc: "Expert detailing for complex and unique structural projects including high-rise buildings, industrial...",
    },
    {
        title: "COMMERCIAL STEEL DETAILING SERVICES",
        desc: "Comprehensive steel detailing solutions for commercial construction projects including office...",
    }
];

const Cards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vw]">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="flex flex-col justify-end bg-[#1a2d3e] p-[2vw] rounded-[1vw] aspect-16/10 text-left border border-white/5 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                >
                    <h3 className="text-white font-black text-[1.4vw] leading-tight mb-[0.8vw] uppercase">
                        {service.title}
                    </h3>
                    <p className="text-gray-400 text-[0.85vw] font-medium leading-relaxed mb-[1.2vw] line-clamp-2">
                        {service.desc}
                    </p>
                    <div className="text-[#0fb2f6] font-bold text-[0.8vw] uppercase flex items-center gap-1 group">
                        Learn More
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;