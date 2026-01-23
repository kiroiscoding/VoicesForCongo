"use client";

import { ContextSection } from "@/components/ContextSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function ContextPage() {
  return (
    <main className="min-h-screen bg-rich-black selection:bg-congo-yellow selection:text-black overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-grow pt-24 min-h-screen"
      >
        <ContextSection />
      </motion.div>

      <Footer />
    </main>
  );
}
