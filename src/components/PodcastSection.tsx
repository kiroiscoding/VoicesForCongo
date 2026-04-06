"use client";

import { motion } from "framer-motion";
import { Mic, ScrollText, Play, Radio, Clock, Pause } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAudio } from "@/context/AudioContext";
import Image from "next/image";

interface Episode {
  id: number;
  title: string;
  description: string;
  duration: string;
  transcriptLink?: string;
  audioSrc?: string;
}

const episodes: Episode[] = [
  {
    id: 1,
    title: "Episode 1: The Overview",
    description: "\"The Conflict in Congo\" explores the hidden crisis, the human cost of our technology, and how you can help. Join me as we dive deep into the history, the current reality, and the path forward for the DRC.",
    duration: "7 min",
    transcriptLink: "https://docs.google.com/document/d/1QJpq1iKB1a_9ddrZU48lQu59D6lbOBXyjRG84HKFhD0/edit?tab=t.0",
    audioSrc: "/audio/Abigail 03-31-2026.mp3",
  },
  {
    id: 2,
    title: "Episode 2: The History",
    description: "Uncovering the colonial roots of the conflict and how historical exploitation has shaped the modern crisis in the Democratic Republic of Congo.",
    duration: "22 min",
  },
  {
    id: 3,
    title: "Episode 3: The Solution",
    description: "What can we actually do? Discussing legislation, consumer habits, and supporting organizations on the ground.",
    duration: "18 min",
  }
];

export const PodcastSection = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>(episodes[0]);
  const { currentEpisode, isPlaying, playEpisode, togglePlay } = useAudio();

  // Determine if the *selected* episode is the one currently playing in the global context
  const isSelectedPlaying = currentEpisode?.id === selectedEpisode.id && isPlaying;

  const handlePlayClick = () => {
    if (currentEpisode?.id === selectedEpisode.id) {
      togglePlay();
    } else {
      playEpisode(selectedEpisode);
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-rich-black relative py-12">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-congo-red/5 blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Feature Area (Left/Top) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              key={selectedEpisode.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-video lg:aspect-square max-h-[500px] w-full rounded-3xl overflow-hidden relative shadow-2xl border border-white/10 group">
                <Image
                  src="/images/abbi_PIC.JPG"
                  alt="Abigail McKoy — Host of Voices for Congo"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-congo-red/75 to-deep-purple/85" />
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Visualizer Animation (Active only when playing) */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-end justify-center gap-2 p-8 opacity-50">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 md:w-4 bg-white rounded-t-full"
                      animate={isSelectedPlaying ? { height: ["20%", "80%", "40%"] } : { height: "20%" }}
                      transition={isSelectedPlaying ? {
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.1,
                      } : { duration: 0.5 }}
                    />
                  ))}
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 text-white border border-white/30">
                     <Mic size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedEpisode.title}</h3>
                  <p className="text-white/70 uppercase tracking-widest text-sm">Abigail McKoy</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              key={`desc-${selectedEpisode.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                 <span className="flex h-3 w-3 relative">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-congo-red opacity-75 ${!isSelectedPlaying && "hidden"}`}></span>
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${isSelectedPlaying ? "bg-congo-red" : "bg-white/20"}`}></span>
                </span>
                <span className={`${isSelectedPlaying ? "text-congo-red" : "text-white/40"} font-bold tracking-widest uppercase text-sm`}>
                  {isSelectedPlaying ? "Now Playing" : "Ready to Play"}
                </span>
              </div>
              
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {selectedEpisode.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                 {selectedEpisode.transcriptLink && (
                   <Link 
                    href={selectedEpisode.transcriptLink}
                    target="_blank"
                    className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 group"
                  >
                    <ScrollText size={20} className="group-hover:scale-110 transition-transform" />
                    Read Transcript
                  </Link>
                 )}
                 
                 {selectedEpisode.audioSrc ? (
                   <button 
                    onClick={handlePlayClick}
                    className="bg-congo-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-congo-blue/20"
                   >
                    {isSelectedPlaying ? <Pause size={20} /> : <Play size={20} />}
                    {isSelectedPlaying ? "Pause" : "Listen Now"}
                  </button>
                 ) : (
                   <button disabled className="bg-white/10 text-white/50 cursor-not-allowed px-8 py-4 rounded-full font-bold text-lg border border-white/10 flex items-center justify-center gap-3">
                    <Play size={20} />
                    Listen (Coming Soon)
                  </button>
                 )}
              </div>
            </motion.div>
          </div>

          {/* Episode List (Right/Bottom) */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Radio size={20} className="text-congo-blue" />
              All Episodes
            </h3>
            
            <div className="space-y-4">
              {episodes.map((episode) => {
                const isThisPlaying = currentEpisode?.id === episode.id && isPlaying;
                const isSelected = selectedEpisode.id === episode.id;

                return (
                  <motion.button
                    key={episode.id}
                    onClick={() => setSelectedEpisode(episode)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 group ${
                      isSelected 
                        ? "bg-white/10 border-congo-blue/50 ring-1 ring-congo-blue/50" 
                        : "bg-transparent border-white/5 hover:bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected ? "bg-congo-blue text-white" : "bg-white/10 text-white/40 group-hover:text-white"
                    }`}>
                      {isThisPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <h4 className={`font-bold truncate ${isSelected ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                        {episode.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-white/40 mt-1">
                        <span className="flex items-center gap-1"><Clock size={10} /> {episode.duration}</span>
                      </div>
                    </div>

                    {isThisPlaying && (
                      <div className="flex gap-1 items-end h-4">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1 bg-congo-red rounded-full"
                            animate={{ height: ["20%", "100%", "20%"] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
