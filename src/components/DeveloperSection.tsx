"use client";

import { motion } from "framer-motion";
import { User, Rocket, Code, ArrowRight, Zap, Target, Laptop } from "lucide-react";
import Image from "next/image";

export const DeveloperSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-rich-black to-neutral-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-40 left-[-10%] w-[40vw] h-[40vw] bg-congo-yellow/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-[-10%] w-[40vw] h-[40vw] bg-congo-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative group">
              {/* Image Placeholder */}
              <div className="aspect-[3/4] w-full rounded-2xl bg-neutral-800 mb-8 relative overflow-hidden shadow-2xl border border-white/10"> 
                  <Image src="/images/kerellos-nasa-adc-challenge-2024 copy.png" alt="Kerellos Abdelmalak" fill className="object-cover" />
              </div>

              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                  Kerellos<br />Abdelmalak
                </h2>
                <p className="text-congo-yellow font-bold tracking-widest uppercase text-sm">
                  Web Developer & Technical Lead
                </p>
              </div>

              <div className="mt-8 space-y-4 text-white/70">
                <p>Huntley High School</p>
                <p>Senior</p>
                <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-600/30">
                  <Rocket size={14} /> NASA ADC 2025 Finalist
                </div>
              </div>

              <a 
                href="https://kerellos.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider border-b-2 border-white/20 pb-1 hover:border-congo-yellow hover:text-congo-yellow transition-all group/link"
              >
                kerellos.com <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Built For Impact */}
            <div>
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-6 text-congo-red">
                Built For Impact
              </h3>
              <div className="prose prose-invert prose-lg text-white/80 leading-relaxed space-y-6">
                <p>
                  Kerellos leads the technical execution behind Voices for Congo, translating a bold mission into a fast, accessible, and reliable web experience. His role is to architect a platform that can scale as the mission grows.
                </p>
                <p>
                  Originally from Egypt, Kerellos brings a global perspective to digital accessibility, understanding how culture and infrastructure shape information delivery. He builds with a focus on reach—ensuring that impactful storytelling is not just seen, but experienced seamlessly on any device, anywhere in the world.
                </p>
                <p>
                  He is also a NASA ADC 2025 Finalist, bringing the same competition-tested focus on execution, iteration, and delivery to a mission that deserves real quality, not a rushed prototype.
                </p>
              </div>
            </div>

            {/* Design Systematized */}
            <div>
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-6 text-congo-yellow">
                Design, Systematized
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                From route-based theming to animation choreography, Kerellos ensures the site feels cohesive across every page and every device. The goal is a design system that reads as intentional, where typography, color, spacing, and motion reinforce trust.
              </p>
            </div>

            {/* Future Trajectory Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-3">
                <Target className="text-white" /> Future Trajectory
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-congo-red mt-2.5 flex-shrink-0" />
                  <p className="text-white/80">Electrical Engineering track with a focus on building systems that work in the real world.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-congo-red mt-2.5 flex-shrink-0" />
                  <p className="text-white/80">Many side projects that sharpen speed, problem-solving, and craft.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-congo-red mt-2.5 flex-shrink-0" />
                  <p className="text-white/80">Mission-driven work that turns design into access, especially for education and health.</p>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
