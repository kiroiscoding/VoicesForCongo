"use client";

import { motion } from "framer-motion";
import { Mic, ScrollText, HeartHandshake, ExternalLink } from "lucide-react";
import Link from "next/link";

const ActionCard = ({ icon: Icon, title, desc, link, linkText, color, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 + index * 0.1 }}
    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
    className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-start gap-4 backdrop-blur-sm transition-colors"
  >
    <div className={`p-3 rounded-full ${color} bg-opacity-20 text-white`}>
      <Icon size={24} />
    </div>
    <h3 className="text-2xl font-bold text-white">{title}</h3>
    <p className="text-white/70 mb-4">{desc}</p>
    {link && (
      <Link 
        href={link} 
        target="_blank"
        className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-congo-yellow hover:text-white transition-colors"
      >
        {linkText} <ExternalLink size={14} />
      </Link>
    )}
  </motion.div>
);

export const ActionSection = () => {
  return (
    <section className="min-h-[80vh] py-12 bg-rich-black relative flex flex-col justify-center">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-congo-blue font-bold tracking-widest uppercase text-sm">Step 5: Implementation</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">Take Action</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Awareness is the first step. Action is the second. Here is how you can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActionCard 
            index={0}
            icon={ScrollText}
            title="Legislation"
            desc="Write to your representatives. Demand stricter consequences for war crimes and better oversight on resource supply chains."
            color="bg-congo-blue"
            link="#" // Placeholder
            linkText="Find Representatives"
          />
           <ActionCard 
            index={1}
            icon={HeartHandshake}
            title="Support"
            desc="Donate to organizations on the ground like Focus Congo that are helping former child soldiers and survivors of violence."
            color="bg-congo-yellow"
            link="#" // Placeholder
            linkText="Donate Now"
          />
           <ActionCard 
            index={2}
            icon={ExternalLink}
            title="Conscious Consumption"
            desc="Be aware of where your electronics come from. Support initiatives for conflict-free minerals."
            color="bg-congo-red"
            link="#" // Placeholder
            linkText="Learn More"
          />
        </div>

      </div>
    </section>
  );
};
