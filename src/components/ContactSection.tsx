"use client";

import { motion } from "framer-motion";
import { User, MapPin, Mail, GraduationCap, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="min-h-screen py-24 bg-rich-black text-white relative overflow-hidden flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-congo-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-congo-red/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >

          {/* Left Column: Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm w-full max-w-md relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-congo-blue/20 to-congo-red/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div className="aspect-[3/4] w-full rounded-2xl bg-neutral-800 mb-8 relative overflow-hidden shadow-2xl">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 group-hover:text-white/40 transition-colors">
                  <User size={64} strokeWidth={1} />
                  <span className="mt-4 text-sm font-medium uppercase tracking-widest">Add Photo</span>
                </div>
                {/* 
                  UNCOMMENT TO ADD IMAGE:
                  <Image src="/abigail.jpg" alt="Abigail McKoy" fill className="object-cover" /> 
                */}
              </div>

              <h2 className="text-4xl font-bold mb-2">Abigail McKoy</h2>
              <p className="text-congo-blue font-medium text-lg mb-8 uppercase tracking-widest">
                <a href="https://global-illinois.org/" target="_blank" rel="noopener noreferrer" className="hover:text-congo-yellow transition-colors">
                  Illinois Global Scholar
                </a>
              </p>

              <div className="space-y-6 text-white/80">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/item:bg-congo-yellow/20 transition-colors">
                    <GraduationCap size={20} className="text-congo-yellow" />
                  </div>
                  <span className="font-medium">Class of 2026</span>
                </div>
                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/item:bg-congo-red/20 transition-colors">
                    <MapPin size={20} className="text-congo-red" />
                  </div>
                  <span className="font-medium">Huntley High School</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Message */}
          <div className="space-y-12">

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-5xl md:text-6xl font-bold mb-6">Let's Connect.</h3>
              <p className="text-xl text-white/60 leading-relaxed max-w-lg mb-10">
                Interested in learning more about the project, collaborating, or just want to say hello? I'd love to hear from you.
              </p>

              <div className="space-y-8">
                <a href="mailto:abigail.r.mckoy@student158.org" className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02]">
                  <div className="w-16 h-16 rounded-full bg-vibrant-teal/20 flex items-center justify-center text-vibrant-teal group-hover:scale-110 transition-transform">
                    <Mail size={32} />
                  </div>
                  <div>
                    <span className="block text-sm text-white/50 uppercase tracking-widest mb-1">Email Me</span>
                    <span className="text-base sm:text-lg md:text-2xl font-bold text-white group-hover:text-vibrant-teal transition-colors break-all">abigail.r.mckoy@student158.org</span>
                  </div>
                </a>

                <div className="p-8 rounded-2xl bg-gradient-to-r from-congo-blue/10 to-congo-red/10 border border-white/10 relative">
                  <span className="absolute top-6 left-6 text-6xl text-white/5 font-serif">"</span>
                  <p className="text-xl font-medium text-white italic relative z-10 text-center leading-relaxed">
                    It is necessary that we speak up for people whose voices are silenced. I learned that I could use my own voice and help others through my own actions.
                  </p>
                  <p className="text-center text-white/40 mt-6 text-sm uppercase tracking-wider font-bold">— Abigail McKoy</p>
                </div>
              </div>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
