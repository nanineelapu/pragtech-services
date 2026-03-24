import React from 'react';

const ServicesPage = ({
    badge = "Our Services",
    titleLine1 = "Steel Detailing",
    titleLine2 = "Solutions",
    subtitle = "ONE SINGLE SOURCE FOR STEEL DETAILING EXCELLENCE",
    primaryLabel = "Explore Services",
    secondaryLabel = "Get Quote"
}) => {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#172635] overflow-hidden font-sans select-none">
            {/* Background Texture & Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#243f56_0%,#1a2d3e_45%,#172635_100%)] z-0" />

            {/* Central Content Assembly */}
            <div className="relative z-10 flex flex-col items-center text-center px-[4vw]">

                {/* Badge Container */}
                {badge && (
                    <div className="flex items-center gap-[0.6vw] px-[1.2vw] py-[0.5vw] mb-[2vw] rounded-full bg-[#1b3e58]/80 border border-[#2b587a]/60 backdrop-blur-md shadow-[0_0.2vw_1vw_rgba(0,0,0,0.3)]">
                        <span className="text-[#0fb2f6] text-[0.8vw] font-bold tracking-[0.1vw] uppercase">
                            {badge}
                        </span>
                    </div>
                )}

                {/* Primary Headline Section */}
                <div className="flex flex-col mb-[1.8vw]">
                    <h1 className="text-white text-[5.2vw] font-black leading-none drop-shadow-[0_0.5vw_0.8vw_rgba(0,0,0,0.2)]">
                        {titleLine1}
                    </h1>
                    {titleLine2 && (
                        <h2 className="text-[#0fb2f6] text-[5.2vw] font-black leading-none -mt-[0.5vw]">
                            {titleLine2}
                        </h2>
                    )}
                </div>

                {/* Wide-Track Descriptive Subtitle */}
                {subtitle && (
                    <p className="text-[#a0aab2] text-[0.85vw] font-semibold tracking-[0.45vw] uppercase mb-[3.2vw] max-w-[55vw]">
                        {subtitle}
                    </p>
                )}

                {/* CTA Buttons Layout */}
                <div className="flex items-center gap-[1.8vw] mt-[0.5vw]">
                    {primaryLabel && (
                        <button className="px-[2.4vw] py-[0.8vw] rounded-[0.5vw] bg-[#0082c9] hover:bg-[#0070a8] text-white text-[1vw] font-bold transition-all duration-300 transform hover:-translate-y-[0.2vw] active:scale-95 shadow-[0_0.5vw_2vw_-0.5vw_rgba(0,130,201,0.39)]">
                            {primaryLabel}
                        </button>
                    )}

                    {secondaryLabel && (
                        <button className="px-[2.4vw] py-[0.8vw] rounded-[0.5vw] bg-[#3a4a58]/90 border border-white/5 text-white text-[1vw] font-bold backdrop-blur-md transition-all duration-300 transform hover:-translate-y-[0.2vw] active:scale-95 shadow-[0_0.5vw_2vw_-1vw_rgba(0,0,0,0.4)]">
                            {secondaryLabel}
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ServicesPage;