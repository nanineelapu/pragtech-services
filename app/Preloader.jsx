"use client";

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export function Preloader({ onLoadComplete }) {
  useEffect(() => {
    // Auto-complete after 3.5 seconds
    const timer = setTimeout(() => {
      onLoadComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center overflow-hidden z-200">
      <div className="relative flex flex-col items-center">
        {/* Gears Container - Tightly Interlocked */}
        <div className="relative w-80 h-64 mb-8">
          {/* Large Gear - Center Left */}
          <motion.div
            className="absolute top-1/2 left-8 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
              <defs>
                <linearGradient id="darkGreenGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a5f3a" />
                  <stop offset="50%" stopColor="#134d2e" />
                  <stop offset="100%" stopColor="#0f3d23" />
                </linearGradient>
                <filter id="shadow1">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                </filter>
              </defs>
              {/* Gear Teeth - More realistic */}
              {[...Array(16)].map((_, i) => {
                const angle = (i * 22.5);
                return (
                  <g key={i} transform={`rotate(${angle} 70 70)`}>
                    <rect
                      x="65"
                      y="5"
                      width="10"
                      height="18"
                      rx="1"
                      fill="url(#darkGreenGradient1)"
                    />
                  </g>
                );
              })}
              {/* Main Body */}
              <circle cx="70" cy="70" r="50" fill="url(#darkGreenGradient1)" filter="url(#shadow1)" />
              {/* Inner detail ring */}
              <circle cx="70" cy="70" r="42" fill="none" stroke="#0f3d23" strokeWidth="2" opacity="0.5" />
              {/* Center hole */}
              <circle cx="70" cy="70" r="20" fill="white" />
              {/* Center bolt */}
              <circle cx="70" cy="70" r="14" fill="url(#darkGreenGradient1)" />
              {/* Bolt holes */}
              {[0, 90, 180, 270].map((angle) => {
                const x = 70 + Math.cos((angle * Math.PI) / 180) * 32;
                const y = 70 + Math.sin((angle * Math.PI) / 180) * 32;
                return <circle key={angle} cx={x} cy={y} r="4" fill="#0f3d23" />;
              })}
            </svg>
          </motion.div>

          {/* Medium Gear - Top Right (Interlocking with Large) */}
          <motion.div
            className="absolute top-6 right-20"
            animate={{ rotate: -360 }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <defs>
                <linearGradient id="darkGreenGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e6b45" />
                  <stop offset="50%" stopColor="#165635" />
                  <stop offset="100%" stopColor="#0f3d23" />
                </linearGradient>
                <filter id="shadow2">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3"/>
                </filter>
              </defs>
              {/* Gear Teeth */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30);
                return (
                  <g key={i} transform={`rotate(${angle} 50 50)`}>
                    <rect
                      x="46"
                      y="6"
                      width="8"
                      height="14"
                      rx="1"
                      fill="url(#darkGreenGradient2)"
                    />
                  </g>
                );
              })}
              {/* Main Body */}
              <circle cx="50" cy="50" r="36" fill="url(#darkGreenGradient2)" filter="url(#shadow2)" />
              {/* Inner detail ring */}
              <circle cx="50" cy="50" r="30" fill="none" stroke="#0f3d23" strokeWidth="1.5" opacity="0.5" />
              {/* Center hole */}
              <circle cx="50" cy="50" r="14" fill="white" />
              {/* Center bolt */}
              <circle cx="50" cy="50" r="10" fill="url(#darkGreenGradient2)" />
              {/* Bolt holes */}
              {[45, 135, 225, 315].map((angle) => {
                const x = 50 + Math.cos((angle * Math.PI) / 180) * 22;
                const y = 50 + Math.sin((angle * Math.PI) / 180) * 22;
                return <circle key={angle} cx={x} cy={y} r="3" fill="#0f3d23" />;
              })}
            </svg>
          </motion.div>

          {/* Small Gear - Bottom Right (Interlocking with Medium) */}
          <motion.div
            className="absolute bottom-8 right-4"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none">
              <defs>
                <linearGradient id="darkGreenGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a5f3a" />
                  <stop offset="50%" stopColor="#134d2e" />
                  <stop offset="100%" stopColor="#0a2a17" />
                </linearGradient>
                <filter id="shadow3">
                  <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.3"/>
                </filter>
              </defs>
              {/* Gear Teeth */}
              {[...Array(10)].map((_, i) => {
                const angle = (i * 36);
                return (
                  <g key={i} transform={`rotate(${angle} 37.5 37.5)`}>
                    <rect
                      x="34.5"
                      y="5"
                      width="6"
                      height="11"
                      rx="0.5"
                      fill="url(#darkGreenGradient3)"
                    />
                  </g>
                );
              })}
              {/* Main Body */}
              <circle cx="37.5" cy="37.5" r="27" fill="url(#darkGreenGradient3)" filter="url(#shadow3)" />
              {/* Inner detail ring */}
              <circle cx="37.5" cy="37.5" r="22" fill="none" stroke="#0a2a17" strokeWidth="1" opacity="0.5" />
              {/* Center hole */}
              <circle cx="37.5" cy="37.5" r="10" fill="white" />
              {/* Center bolt */}
              <circle cx="37.5" cy="37.5" r="7" fill="url(#darkGreenGradient3)" />
              {/* Bolt holes */}
              {[0, 120, 240].map((angle) => {
                const x = 37.5 + Math.cos((angle * Math.PI) / 180) * 16;
                const y = 37.5 + Math.sin((angle * Math.PI) / 180) * 16;
                return <circle key={angle} cx={x} cy={y} r="2.5" fill="#0a2a17" />;
              })}
            </svg>
          </motion.div>

          {/* Extra Small Gear - Bottom Left (Interlocking with Large) */}
          <motion.div
            className="absolute bottom-12 left-2"
            animate={{ rotate: -360 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg width="65" height="65" viewBox="0 0 65 65" fill="none">
              <defs>
                <linearGradient id="darkGreenGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e6b45" />
                  <stop offset="50%" stopColor="#134d2e" />
                  <stop offset="100%" stopColor="#0f3d23" />
                </linearGradient>
                <filter id="shadow4">
                  <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.3"/>
                </filter>
              </defs>
              {/* Gear Teeth */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45);
                return (
                  <g key={i} transform={`rotate(${angle} 32.5 32.5)`}>
                    <rect
                      x="30"
                      y="4"
                      width="5"
                      height="10"
                      rx="0.5"
                      fill="url(#darkGreenGradient4)"
                    />
                  </g>
                );
              })}
              {/* Main Body */}
              <circle cx="32.5" cy="32.5" r="23" fill="url(#darkGreenGradient4)" filter="url(#shadow4)" />
              {/* Inner detail ring */}
              <circle cx="32.5" cy="32.5" r="19" fill="none" stroke="#0f3d23" strokeWidth="1" opacity="0.5" />
              {/* Center hole */}
              <circle cx="32.5" cy="32.5" r="9" fill="white" />
              {/* Center bolt */}
              <circle cx="32.5" cy="32.5" r="6" fill="url(#darkGreenGradient4)" />
            </svg>
          </motion.div>
        </div>

        {/* Brand Name Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl font-bold bg-linear-to-r from-[#1a5f3a] via-[#134d2e] to-[#0f3d23] bg-clip-text text-transparent underline decoration-[#4dbb6b]/30"
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "0.1em", opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            PRAGTECH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-gray-600 mt-2 text-sm tracking-wider uppercase font-medium"
          >
            Technical Services
          </motion.p>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex gap-2 mt-8"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-linear-to-r from-[#1a5f3a] to-[#0f3d23]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
