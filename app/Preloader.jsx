"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1200); // Fast, snappy loader

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{
                            scale: [0.9, 1.05, 1],
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            times: [0, 0.7, 1]
                        }}
                        className="w-[30vw] md:w-[10vw]"
                    >
                        <img
                            src="https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/logo_clean_transparent.webp"
                            alt="Pragtech Logo"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;

