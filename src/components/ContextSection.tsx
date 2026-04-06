"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Stat Component from original ContextSection
const Stat = ({ label, value, color, delay }: { label: string, value: string, color: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
    className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm cursor-default"
  >
    <span className={`text-4xl md:text-5xl font-bold ${color}`}>{value}</span>
    <span className="text-white/70 text-sm md:text-base font-medium uppercase tracking-wide">{label}</span>
  </motion.div>
);

// CauseNode Component from RootsSection
const CauseNode = ({ title, desc, delay }: { title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    whileHover={{ scale: 1.05 }}
    className="flex-1 p-8 rounded-2xl bg-white text-black min-w-[280px] shadow-2xl relative z-10"
  >
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-black/70 leading-relaxed">{desc}</p>
  </motion.div>
);

// ExpertCard Component from ExpertsSection
const ExpertCard = ({ name, role, insight, color, index }: { name: string, role: string, insight: string, color: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 group relative overflow-hidden"
  >
    <div className={`absolute top-0 left-0 w-full h-1 ${color} opacity-50 group-hover:opacity-100 transition-opacity`} />
    <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
    <p className="text-white/50 text-sm mb-6 uppercase tracking-wider">{role}</p>
    <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors relative z-10">
      "{insight}"
    </p>
    <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full ${color} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`} />
  </motion.div>
);

export const ContextSection = () => {
  return (
    <div className="flex flex-col">
      {/* 1. Context Overview */}
      <section className="flex flex-col bg-rich-black text-white relative py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: text + stats */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                  A Resource Curse & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-congo-red to-orange-500">
                    Humanitarian Crisis
                  </span>
                </h2>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-white/80 leading-relaxed mb-8"
              >
                The Democratic Republic of Congo holds vast resources: copper, cobalt, diamonds, and gold. 
                Yet, this wealth has fueled conflict rather than prosperity. Tensions with Rwanda and the M23 rebel group 
                have destabilized the region, leading to over 100 active armed groups.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="p-6 border-l-4 border-congo-yellow bg-white/5 rounded-r-xl mb-8"
              >
                <p className="text-xl text-white/90 italic">
                  The most affected? <span className="text-congo-yellow font-bold">Women and children.</span>
                  <br/>
                  Mass killings, enforced disappearances, and sexual violence have become weapons of war.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <Stat label="Active Armed Groups" value="100+" color="text-congo-red" delay={0.2} />
                <Stat label="Refugees Displaced" value="7M+" color="text-congo-blue" delay={0.3} />
                <Stat label="Key Resource" value="Cobalt" color="text-vibrant-teal" delay={0.4} />
                <Stat label="Primary Victims" value="Civilians" color="text-congo-yellow" delay={0.5} />
              </div>
            </div>

            {/* Right: photo at natural portrait ratio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/images/context.jpeg"
                alt="A young Congolese child sits among the belongings of displaced families"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-white/70 text-xs uppercase tracking-widest font-medium">
                A displaced child in Eastern DRC
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Roots (Cycle of Conflict) */}
      <section className="min-h-[80vh] py-24 bg-congo-blue relative overflow-hidden flex items-center text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 skew-x-12" />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-black/60 font-bold tracking-widest uppercase text-sm">Step 2: Root Causes</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 text-white">The Cycle of Conflict</h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start justify-between">
            <CauseNode 
              title="Neocolonialism" 
              desc="Global powers exploit the DRC for resources like Cobalt (for EVs) and Gold, funding instability to keep prices low."
              delay={0.2}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="hidden md:flex items-center self-center text-white/50"
            >
              <ArrowRight size={32} />
            </motion.div>

            <CauseNode 
              title="Neighboring Instability" 
              desc="Rwanda & neighboring nations, influenced by the 1994 Genocide aftermath, invade or back rebel groups like M23."
              delay={0.5}
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="hidden md:flex items-center self-center text-white/50"
            >
              <ArrowRight size={32} />
            </motion.div>

            <CauseNode 
              title="Human Cost" 
              desc="Women and children bear the brunt of the violence. Weak peace treaties fail to hold perpetrators accountable."
              delay={0.8}
            />
          </div>
        </div>
      </section>

      {/* 3. Research (Expert Insights) */}
      <section className="min-h-[80vh] py-24 bg-black text-white flex items-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-congo-blue font-bold tracking-widest uppercase text-sm">Step 3: Investigate</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">Expert Insights</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Research driven by interviews with cultural experts, activists, and humanitarian organizations.
            </p>
          </motion.div>

          {/* Photo strip between heading and cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-64 rounded-3xl overflow-hidden mb-12 border border-white/10"
          >
            <Image
              src="/images/303201-1468x710.jpg"
              alt="Congolese civilians displaced by conflict"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-8">
              <p className="text-white/80 text-lg md:text-2xl font-medium italic max-w-3xl">
                "The world must not look away from what is happening in the Congo."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ExpertCard 
              index={0}
              name="Sandrine"
              role="Cultural Reference"
              insight="Colonialism led to the divide. The DRC has problems along its borders with Rwanda/Uganda, but those in the capital often remain unaware of the full extent of the conflict."
              color="bg-congo-yellow"
            />
            <ExpertCard 
              index={1}
              name="Delvy G Mouity"
              role="Conflict Analyst"
              insight="The conflict is deeply rooted in the 1994 Rwandan Genocide. Those who fled to the DRC gave Rwanda a reason to invade. Clinics now struggle to help women assaulted in the chaos."
              color="bg-congo-red"
            />
            <ExpertCard 
              index={2}
              name="MONUSCO"
              role="UN Stabilization Mission"
              insight="The UN has deployed troops to protect citizens, but international involvement remains complex. Documentation shows the scale of the crisis requires global attention."
              color="bg-congo-blue"
            />
            <ExpertCard 
              index={3}
              name="Pappy Orion"
              role="Founder, Focus Congo"
              insight="I was a child soldier. The DRC suffers because of its resources. Large countries profit from the instability, funding armed groups. The world stays silent."
              color="bg-vibrant-teal"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
