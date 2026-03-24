"use client";

import React, { useState, useEffect } from 'react';

const ReviewSection = () => {
    const reviews = [
        {
            name: "Sarah Williams",
            title: "Engineering Director",
            company: "SteelFrame Industries",
            text: "Working with this team has been a game-changer. Their BIM coordination services are top-notch.",
            image: "https://i.pravatar.cc/150?u=sarah",
        },
        {
            name: "James Rodriguez",
            title: "Construction Manager",
            company: "MetalWorks Corp",
            text: "Excellent communication and fast turnaround. The steel detailing was precise and met all our requirements.",
            image: "https://i.pravatar.cc/150?u=james",
        },
        {
            name: "Emily Thompson",
            title: "Senior Architect",
            company: "Design & Build Associates",
            text: "Their connection design services saved us weeks. Remarkable technical accuracy and problem-solving.",
            image: "https://i.pravatar.cc/150?u=emily",
        },
        {
            name: "David Miller",
            title: "Project Head",
            company: "SkyHigh Construction",
            text: "Quality and attention to detail is second to none. Handled our complex industrial framework with ease.",
            image: "https://i.pravatar.cc/150?u=david",
        },
        {
            name: "Sofia Chen",
            title: "Structural Engineer",
            company: "Urban Detailing",
            text: "Highly recommended for large-scale projects. They provide innovative solutions to complex problems.",
            image: "https://i.pravatar.cc/150?u=sofia",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    const getReviews = () => {
        const len = reviews.length;
        const prev = (currentIndex - 1 + len) % len;
        const next = (currentIndex + 1) % len;
        return [
            { ...reviews[prev], type: 'prev' },
            { ...reviews[currentIndex], type: 'active' },
            { ...reviews[next], type: 'next' },
        ];
    };

    return (
        <section className="bg-[#faf9f6] rounded-[4vw] mt-[5vw] py-[8vw] px-[4vw] flex flex-col items-center overflow-hidden w-[92%] mx-auto">
            {/* Header Content */}
            <div className="w-full text-center mb-[8vw]">
                <h2 className="text-[4vw] font-black text-[#153a20] tracking-tighter leading-none">
                    Hear From Those <br /> <span className="text-[#4dbb6b]">We Serve</span>
                </h2>
                <div className="w-[6vw] h-[0.3vw] bg-[#4dbb6b] mx-auto mt-[2vw] rounded-full" />
            </div>

            {/* Circular Orbit Slider */}
            <div className="relative w-full h-[40vw] flex items-center justify-center">
                {getReviews().map((review, idx) => {
                    const isPrev = review.type === 'prev';
                    const isNext = review.type === 'next';
                    const isActive = review.type === 'active';

                    return (
                        <div
                            key={`${review.name}-${review.type}`}
                            className={`absolute transition-all duration-700 ease-in-out flex flex-col items-center justify-center text-center p-[4vw]
                                ${isActive ? 'z-20 scale-100 opacity-100' : 'z-10 scale-75 opacity-20'}
                                ${isPrev ? '-translate-x-[35vw]' : ''}
                                ${isNext ? 'translate-x-[35vw]' : ''}
                            `}
                        >
                            {/* Circular Review Pod */}
                            <div className={`relative rounded-full aspect-square border-2 border-[#153a20]/10 flex flex-col items-center justify-center transition-all duration-700
                                ${isActive ? 'w-[35vw] bg-white shadow-2xl' : 'w-[25vw] bg-[#153a20]/2'}
                            `}>
                                {/* Quote Icon */}
                                <div className="absolute top-[10%] bg-[#4dbb6b] text-white w-[3vw] h-[3vw] rounded-full flex items-center justify-center shadow-lg">
                                    <svg className="w-[1.2vw] h-[1.2vw]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H16.017C14.9124 7 14.017 7.89543 14.017 9V12M3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 15.1046 10 14V9C10 7.89543 9.10457 7 8 7H5C3.89543 7 3 7.89543 3 9V12" />
                                    </svg>
                                </div>

                                {/* Main Text Content (Only visible clearly for active) */}
                                <div className="max-w-[75%] flex flex-col items-center">
                                    <p className="text-[#153a20] text-[1.2vw] font-bold leading-relaxed italic mb-[2vw]">
                                        "{review.text}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-[4.5vw] h-[4.5vw] rounded-full overflow-hidden border-2 border-[#4dbb6b] mb-[1vw]">
                                            <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                                        </div>
                                        <h4 className="text-[#153a20] text-[1.4vw] font-black tracking-tight">{review.name}</h4>
                                        <span className="text-[#4dbb6b] text-[0.8vw] font-bold uppercase tracking-widest">{review.company}</span>
                                    </div>
                                </div>

                                {/* Background Decorative Circle */}
                                <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#4dbb6b]/10 animate-[spin_60s_linear_infinite]" />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-[1vw] mt-[4vw]">
                {reviews.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-[0.8vw] rounded-full transition-all duration-500
                            ${currentIndex === i ? 'bg-[#153a20] w-[2.5vw]' : 'bg-[#153a20]/20 w-[0.8vw]'}`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default ReviewSection;
