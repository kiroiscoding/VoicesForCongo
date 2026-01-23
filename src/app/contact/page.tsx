"use client";

import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-rich-black selection:bg-congo-yellow selection:text-black overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-grow pt-24 min-h-screen"
      >
        <ContactSection />
      </motion.div>

      <Footer />
    </main>
  );
}
