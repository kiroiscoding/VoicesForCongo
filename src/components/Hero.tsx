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
  const [particles, setParticles] = useState<{ width: number; height: number; top: string; left: string; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map(() => ({
      width: Math.random() * 4 + 1,
      height: Math.random() * 4 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-rich-black text-white px-4 pt-20">
      {/* Crossfading photo slideshow with Ken Burns zoom */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.38 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
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
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay so text pops */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85 pointer-events-none z-[1]" />


      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-congo-blue/20 blur-[100px]"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-congo-red/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-congo-yellow/10 blur-[120px]"
        />

        {/* Floating Particles */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: p.width,
              height: p.height,
              top: p.top,
              left: p.left,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center perspective-1000 -mt-16">
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-congo-yellow font-medium tracking-widest uppercase mb-6 text-sm md:text-base"
        >
          Global Scholar Capstone 2025-2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tighter mb-8"
        >
          The <motion.span
            animate={{ color: ["#fff", "#0077FF", "#fff"] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-congo-blue"
          >Rwanda</motion.span>-<motion.span
            animate={{ color: ["#fff", "#CE1021", "#fff"] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="text-congo-red"
          >Congo</motion.span> Conflict.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative inline-block"
        >
          <span className="text-4xl md:text-6xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-congo-yellow via-white to-congo-yellow opacity-90 drop-shadow-2xl">
            VOICES FOR CONGO
          </span>
          <motion.div 
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-congo-blue to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <ArrowDown className="animate-bounce" />
      </motion.div>
    </section>
  );
};
