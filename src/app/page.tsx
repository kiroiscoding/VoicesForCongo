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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-grow flex flex-col"
      >
        <Hero />
        <Mission />
        <ProjectTimeline />
      </motion.div>

      <Footer />
    </main>
  );
}
