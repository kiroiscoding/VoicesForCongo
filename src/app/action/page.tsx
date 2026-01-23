"use client";

import { ActionSection } from "@/components/ActionSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function ActionPage() {
  return (
    <main className="min-h-screen bg-rich-black selection:bg-congo-yellow selection:text-black overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-grow pt-24 min-h-screen"
      >
        <ActionSection />
      </motion.div>

      <Footer />
    </main>
  );
}
