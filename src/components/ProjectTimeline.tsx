"use client";

import { motion } from "framer-motion";

const TimelineItem = ({ number, title, desc, index, isLast }: { number: string, title: string, desc: string, index: number, isLast?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4 }}
    className="relative flex gap-8 group"
  >
    {!isLast && (
      <div className="absolute left-6 top-16 bottom-0 w-px bg-white/10 group-hover:bg-congo-blue/50 transition-colors duration-500" />
    )}

    <div className="flex-shrink-0 relative z-10">
      <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center text-congo-yellow font-bold text-xl shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:border-congo-blue group-hover:text-congo-blue transition-colors duration-300">
        {number}
      </div>
    </div>

    <div className="pb-16">
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-congo-blue transition-colors duration-300">{title}</h3>
      <p className="text-white/60 text-lg leading-relaxed max-w-2xl">{desc}</p>
    </div>
  </motion.div>
);

export const ProjectTimeline = () => {
  return (
    <section className="py-24 bg-neutral-900 border-t border-white/5 relative overflow-hidden">
      {/* Static subtle color accents — no blur on mobile */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-congo-blue/5 md:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-congo-red/5 md:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Project <span className="text-congo-blue">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-white/60 text-xl max-w-2xl mx-auto"
          >
            A comprehensive Global Scholar Capstone project spanning research, expert interviews, and solution implementation.
          </motion.p>
        </div>

        <div className="pl-4 md:pl-0 max-w-3xl mx-auto">
          <TimelineItem number="1" title="Defining the Question" desc="Identifying the core issue: Addressing the consequences of the Rwanda-Congo Conflict." index={0} />
          <TimelineItem number="2" title="Investigate & Research" desc="Deep dive into root causes, neocolonialism, and interviews with experts like Sandrine and Focus Congo." index={1} />
          <TimelineItem number="3" title="Propose Solutions" desc="Connecting Western consumption (Apple, Tesla) to the conflict and proposing legislative action." index={2} />
          <TimelineItem number="4" title="Create Artifact" desc="Developing 'The Conflict in Congo' podcast to spread awareness and drive support." index={3} />
          <TimelineItem number="5" title="Take Action" desc="Refining the approach to include a digital platform for resources and donation channels." index={4} isLast />
        </div>
      </div>
    </section>
  );
};
