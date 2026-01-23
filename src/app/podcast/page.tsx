"use client";

import { PodcastSection } from "@/components/PodcastSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function PodcastPage() {
  return (
    <main className="min-h-screen bg-rich-black selection:bg-congo-yellow selection:text-black overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-grow pt-24 min-h-screen"
      >
        <PodcastSection />
      </motion.div>

      <Footer />
    </main>
  );
}
