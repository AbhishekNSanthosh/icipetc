"use client";

import React, { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate initial loading time with progress
    const duration = 2000; // 2 seconds
    const intervalTime = 20; // Update every 20ms
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Fade out after loading completes
    const fadeTimer = setTimeout(() => {
      setLoading(false);
      // Remove from DOM after transition
      setTimeout(() => setShow(false), 500);
    }, duration + 500);

    return () => {
      clearInterval(timer);
      clearTimeout(fadeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo/Text */}
        <div className="relative">
          <div className="absolute inset-0 bg-conference-primary/20 blur-xl rounded-full animate-pulse"></div>
          <h1 className="relative text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-conference-primary via-conference-highlight to-conference-secondary tracking-tighter animate-in fade-in zoom-in duration-700">
            ICIPETC-26
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 h-1.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-conference-primary via-conference-highlight to-conference-secondary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="mt-4 text-sm font-medium text-gray-400 animate-pulse flex items-center gap-2">
          <span>Loading Experience...</span>
          <span className="text-xs font-bold text-conference-primary">
            {Math.round(progress)}%
          </span>
        </p>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
