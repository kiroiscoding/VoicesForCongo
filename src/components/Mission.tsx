"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.4 },
};

export const Mission = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.span
          {...fadeUp}
          className="text-congo-blue font-bold tracking-widest uppercase text-sm"
        >
          The Mission
        </motion.span>

        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-5xl font-bold mt-6 mb-12 leading-tight"
        >
          Investigating the intersection of <span className="text-congo-red">resource exploitation</span>, <span className="text-congo-yellow">colonial history</span>, and <span className="text-congo-blue">human rights</span>.
        </motion.h2>

        <motion.div
          {...fadeUp}
          className="text-lg md:text-xl text-black/70 leading-relaxed font-medium"
        >
          <p className="mb-6">
            The Democratic Republic of Congo holds a vast amount of resources including copper, cobalt, diamonds, and gold.
            Because of this richness, the country has been exploited by foreign powers and neighboring nations like Rwanda.
          </p>
          <p>
            This project aims to answer: <span className="text-black font-bold">What is an effective way to address the consequences of the Rwanda-Congo Conflict?</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
