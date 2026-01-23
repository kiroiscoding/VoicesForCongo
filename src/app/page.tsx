"use client";

import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-rich-black selection:bg-congo-yellow selection:text-black overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
        className="flex-grow flex flex-col min-h-screen"
      >
        <Hero />
        <Mission />
        <ProjectTimeline />
      </motion.div>

      <Footer />
    </main>
  );
}
