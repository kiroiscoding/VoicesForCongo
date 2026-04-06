"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

// Add new photos to public/images/heropagepictures/ and add the path here
const heroImages = [
  "/images/heropagepictures/photo1.jpg",
  "/images/heropagepictures/congo-rwanda-explainer-new4-zwjv-videoSixteenByNineJumbo1600.jpg",
  "/images/heropagepictures/SafricaRDC-scaled.jpg",
  "/images/heropagepictures/congo-un-peacekeeping-GettyImages-2153762977.webp",
  "/images/heropagepictures/GettyImages-2196675167.webp",
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-rich-black text-white px-4 pt-20">

      {/* Crossfading photo slideshow — Ken Burns only on desktop */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.38 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0 will-change-[opacity]"
        >
          {isMobile ? (
            // On mobile: no Ken Burns zoom, just a plain crossfade
            <Image
              src={heroImages[currentIndex]}
              alt="Democratic Republic of Congo"
              fill
              className="object-cover object-center"
              priority={currentIndex === 0}
            />
          ) : (
            // On desktop: Ken Burns zoom
            <motion.div
              className="absolute inset-0 will-change-transform"
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7, ease: "easeOut" }}
            >
              <Image
                src={heroImages[currentIndex]}
                alt="Democratic Republic of Congo"
                fill
                className="object-cover object-center"
                priority={currentIndex === 0}
              />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85 pointer-events-none z-[1]" />

      {/* Animated blobs — desktop only (too heavy for mobile) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2] hidden md:block">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-congo-blue/20 blur-[100px] will-change-transform"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-congo-red/20 blur-[100px] will-change-transform"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-congo-yellow/10 blur-[120px] will-change-transform"
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center -mt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-congo-yellow font-medium tracking-widest uppercase mb-6 text-sm md:text-base"
        >
          Global Scholar Capstone 2025-2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tighter mb-8"
        >
          The{" "}
          <motion.span
            animate={isMobile ? {} : { color: ["#fff", "#0077FF", "#fff"] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-congo-blue"
          >
            Rwanda
          </motion.span>
          -{" "}
          <motion.span
            animate={isMobile ? {} : { color: ["#fff", "#CE1021", "#fff"] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="text-congo-red"
          >
            Congo
          </motion.span>{" "}
          Conflict.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative inline-block"
        >
          <span className="text-4xl md:text-6xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-congo-yellow via-white to-congo-yellow opacity-90 drop-shadow-2xl">
            VOICES FOR CONGO
          </span>
          <motion.div
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-congo-blue to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10"
      >
        <ArrowDown className="animate-bounce" />
      </motion.div>
    </section>
  );
};
