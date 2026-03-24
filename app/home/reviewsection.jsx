"use client";

import React, { useState, useEffect } from 'react';

const ReviewSection = () => {
    const reviews = [
        {
            name: "Sarah Williams",
            title: "Engineering Director",
            company: "SteelFrame Industries",
            text: "Working with this team has been a game-changer for our projects. Their BIM coordination services are top-notch, and they consistently deliver accurate takeoffs. The level of expertise is truly impressive.",
            image: "https://i.pravatar.cc/150?u=sarah",
        },
        {
            name: "James Rodriguez",
            title: "Construction Manager",
            company: "MetalWorks Corp",
            text: "Excellent communication and fast turnaround times. The steel detailing was precise and met all our requirements. Their team is responsive and professional. We'll definitely use their services again.",
            image: "https://i.pravatar.cc/150?u=james",
        },
        {
            name: "Emily Thompson",
            title: "Senior Architect",
            company: "Design & Build Associates",
            text: "Their connection design services saved us weeks on our project timeline. The technical accuracy and problem-solving abilities of the team are remarkable. A reliable partner for structural steel projects.",
            image: "https://i.pravatar.cc/150?u=emily",
        },
        {
            name: "David Miller",
            title: "Project Head",
            company: "SkyHigh Construction",
            text: "The quality of detailing and the attention to detail is second to none. They handled our complex industrial framework with ease and delivered ahead of schedule.",
            image: "https://i.pravatar.cc/150?u=david",
        },
        {
            name: "Sofia Chen",
            title: "Structural Engineer",
            company: "Urban Detailing",
            text: "Highly recommended for any large-scale commercial projects. Their team deeply understands structural requirements and provides innovative solutions to complex problems.",
            image: "https://i.pravatar.cc/150?u=sofia",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    // Helper to get visible reviews with wrapping
    const getVisibleReviews = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(reviews[(currentIndex + i) % reviews.length]);
        }
        return visible;
    };

    return (
        <section className="bg-[#1a2c3d] rounded-[4vw] mt-[5vw] p-[6vw] flex flex-col items-center overflow-hidden">
            {/* Pill Above Title */}
            <div className="px-[1.5vw] py-[0.5vw] bg-[#0081bb]/10 border border-[#0081bb]/20 rounded-full mb-[2vw] flex items-center gap-[0.5vw]">
                <span className="text-[#0081bb] text-[1vw]">★</span>
                <span className="text-[#0081bb] text-[0.85vw] font-bold uppercase tracking-wider">Client Testimonials</span>
            </div>

            {/* Header */}
            <h2 className="text-[4.5vw] font-black text-white tracking-tight text-center mb-[4vw]">
                Hear From Those <span className="text-[#0081bb] relative">
                    We Serve
                    <div className="absolute -bottom-[0.8vw] left-0 w-full h-[0.3vw] bg-[#0081bb] rounded-full" />
                </span>
            </h2>

            {/* Slider Container */}
            <div className="flex gap-[2vw] w-full max-w-[90vw]">
                {getVisibleReviews().map((review, index) => (
                    <div
                        key={`${currentIndex}-${index}`}
                        className={`flex-1 rounded-[2.5vw] p-[2.5vw] transition-all duration-700 relative
                            ${index === 1
                                ? 'bg-white scale-105 z-10 shadow-[0_2vw_5vw_rgba(0,0,0,0.2)]'
                                : 'bg-[#2d4052]/40 opacity-60 scale-95 border border-white/5 shadow-xl'
                            }`}
                    >
                        {/* Quote Icon */}
                        <div className={`w-[3.5vw] h-[3.5vw] rounded-full flex items-center justify-center mb-[1.5vw]
                            ${index === 1 ? 'bg-[#0081bb] text-white' : 'bg-[#4a5f77]/30 text-white'}`}>
                            <svg className="w-[1.4vw] h-[1.4vw]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H16.017C14.9124 7 14.017 7.89543 14.017 9V12M3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 15.1046 10 14V9C10 7.89543 9.10457 7 8 7H5C3.89543 7 3 7.89543 3 9V12" />
                            </svg>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-[0.4vw] mb-[1.5vw]">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <svg key={s} className="w-[1.4vw] h-[1.4vw] text-[#0081bb]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        {/* Text */}
                        <p className={`text-[1vw] leading-relaxed mb-[2.5vw] font-medium
                            ${index === 1 ? 'text-[#4a5f77]' : 'text-white/80'}`}>
                            "{review.text}"
                        </p>

                        {/* Author */}
                        <div className={`flex items-center gap-[1.2vw] border-t pt-[2vw] 
                            ${index === 1 ? 'border-gray-100' : 'border-white/10'}`}>
                            <div className="relative">
                                <img src={review.image} alt={review.name} className="w-[4vw] h-[4vw] rounded-full object-cover border-[0.25vw] border-[#0081bb]/20" />
                                <div className="absolute bottom-[0.3vw] right-[0.3vw] w-[0.9vw] h-[0.9vw] bg-green-500 rounded-full border-[0.2vw] border-white shadow-sm"></div>
                            </div>
                            <div className="flex flex-col">
                                <h4 className={`text-[1.3vw] font-black leading-none
                                    ${index === 1 ? 'text-[#0f2a4a]' : 'text-white'}`}>{review.name}</h4>
                                <span className={`text-[0.9vw] font-bold mt-[0.4vw]
                                    ${index === 1 ? 'text-[#4a5f77]' : 'text-white/60'}`}>{review.title}</span>
                                <span className="text-[0.9vw] text-[#0081bb] font-black">{review.company}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="flex gap-[1vw] mt-[5vw]">
                {reviews.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-[0.8vw] rounded-full transition-all duration-500
                            ${currentIndex === i ? 'bg-[#0081bb] w-[2.5vw]' : 'bg-[#4a5f77]/40 w-[0.8vw]'}`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default ReviewSection;
