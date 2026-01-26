"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mic, ScrollText, HeartHandshake, ExternalLink, X, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ActionCard = ({ icon: Icon, title, desc, links, color, index, onAction }: any) => (
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
    
    <div className="flex flex-col gap-2 w-full">
      {links.map((link: any, i: number) => (
        link.action ? (
          <button
            key={i}
            onClick={() => onAction(link.action)}
            className="flex items-center justify-between text-sm font-bold uppercase tracking-wide text-white/60 hover:text-congo-yellow transition-colors py-2 border-b border-white/5 last:border-0 w-full text-left"
          >
            {link.text} <ScrollText size={14} />
          </button>
        ) : (
          <Link 
            key={i}
            href={link.url} 
            target="_blank"
            className="flex items-center justify-between text-sm font-bold uppercase tracking-wide text-white/60 hover:text-congo-yellow transition-colors py-2 border-b border-white/5 last:border-0"
          >
            {link.text} <ExternalLink size={14} />
          </Link>
        )
      ))}
    </div>
  </motion.div>
);

const LetterTemplate = ({ onClose }: { onClose: () => void }) => {
  const [copied, setCopied] = useState(false);
  const letter = `Hi my name is ____ and I am a citizen from *insert state*. I am writing to you to encourage you to take action to end the conflict happening in the Democratic Republic of Congo. Currently, there are over a hundred militia groups occupying the Congo, leading to mass murders, rapes, and the enlistment of child soldiers. It is your duty, as a member of the government, to speak up for those who do not have a voice, such as the Congolese people. Legislation is needed to push for peace in the Democratic republic of Congo and to hold those who committed war crimes accountable. Thank you for your time, and I hope you consider taking action, as the Congolese people need our attention.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(letter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-neutral-900 border border-white/10 p-8 rounded-3xl max-w-2xl w-full relative shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-white mb-2">Write to Legislators</h3>
        <p className="text-white/60 mb-6">Copy this template to send to your representatives.</p>

        <div className="bg-black/50 p-6 rounded-xl border border-white/5 mb-6 text-white/80 font-mono text-sm leading-relaxed whitespace-pre-wrap">
          {letter}
        </div>

        <button 
          onClick={handleCopy}
          className="w-full bg-congo-blue text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? "Copied to Clipboard!" : "Copy Template"}
        </button>
      </motion.div>
    </motion.div>
  );
};

export const ActionSection = () => {
  const [showLetter, setShowLetter] = useState(false);

  const handleAction = (action: string) => {
    if (action === "show_letter") {
      setShowLetter(true);
    }
  };

  return (
    <section className="min-h-[80vh] py-12 bg-rich-black relative flex flex-col justify-center">
      <AnimatePresence>
        {showLetter && <LetterTemplate onClose={() => setShowLetter(false)} />}
      </AnimatePresence>

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
            desc="Encourage accountability for militia groups in the DRC partaking in war crimes."
            color="bg-congo-blue"
            onAction={handleAction}
            links={[
              { text: "Sign Petition", url: "https://www.change.org/p/encourage-accountability-for-militia-groups-in-the-drc-partaking-in-war-crimes/sfs/copy/1102188210?recruiter=1102188210&recruited_by_id=d8cd4430-a463-11ea-90bb-d329ba6c12ea&utm_source=share_petition&utm_campaign=starter_onboarding_share_social&utm_medium=copylink" },
              { text: "View Email Template", action: "show_letter" }
            ]}
          />
           <ActionCard 
            index={1}
            icon={HeartHandshake}
            title="Support"
            desc="Donate to organizations on the ground providing critical aid and support to survivors."
            color="bg-congo-yellow"
            links={[
              { text: "Focus Congo", url: "https://www.focuscongo.com/en/spende/" },
              { text: "Panzi Foundation", url: "https://panzifoundation.org/donate/" },
              { text: "UN Crisis Relief", url: "https://crisisrelief.un.org/en/donate-drc-crisis" },
              { text: "Save the Children", url: "https://www.savethechildren.org" },
            ]}
          />
           <ActionCard 
            index={2}
            icon={ExternalLink}
            title="Conscious Consumption"
            desc="Be aware of where your electronics come from. Support initiatives for conflict-free minerals."
            color="bg-congo-red"
            links={[
              { text: "Learn More", url: "https://www.savethechildren.org" } // Placeholder, maybe add a specific article later
            ]}
          />
        </div>

      </div>
    </section>
  );
};
