"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, X, Volume2, VolumeX, Maximize2, SkipBack, SkipForward } from "lucide-react";
import { useAudio } from "@/context/AudioContext";
import { useState } from "react";

export const MiniPlayer = () => {
  const { currentEpisode, isPlaying, togglePlay, progress, duration, seek, volume, setVolume } = useAudio();
  const [isExpanded, setIsExpanded] = useState(true);

  if (!currentEpisode) return null;

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 right-6 z-50 w-full max-w-sm"
      >
        <div className="bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Progress Bar */}
          <div 
            className="h-1 bg-white/10 w-full cursor-pointer relative group"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const percent = (e.clientX - rect.left) / rect.width;
              seek(percent * duration);
            }}
          >
            <div 
              className="absolute left-0 top-0 bottom-0 bg-congo-blue transition-all duration-100"
              style={{ width: `${(progress / duration) * 100}%` }}
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              style={{ left: `${(progress / duration) * 100}%` }}
            />
          </div>

          <div className="p-4">
            <div className="flex items-center gap-4">
              {/* Cover Art Thumbnail */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-congo-red to-deep-purple flex-shrink-0 flex items-center justify-center">
                {isPlaying ? (
                  <div className="flex gap-0.5 items-end h-4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-white rounded-full"
                        animate={{ height: ["20%", "80%", "20%"] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="w-2 h-2 rounded-full bg-white/50" />
                )}
              </div>

              <div className="flex-grow min-w-0">
                <h4 className="text-white font-bold text-sm truncate">{currentEpisode.title}</h4>
                <p className="text-white/40 text-xs truncate">Abigail McKoy • Voices for Congo</p>
              </div>

              <button 
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
              </button>
            </div>

            {/* Controls Row */}
            <div className="mt-4 flex items-center justify-between gap-4 text-white/60">
              <span className="text-xs w-10">{formatTime(progress)}</span>
              
              <div className="flex items-center gap-4">
                <button onClick={() => seek(progress - 10)} className="hover:text-white transition-colors">
                  <SkipBack size={16} />
                </button>
                <button onClick={() => seek(progress + 10)} className="hover:text-white transition-colors">
                  <SkipForward size={16} />
                </button>
              </div>

              <div className="flex items-center gap-2 group relative">
                <button onClick={() => setVolume(volume === 0 ? 1 : 0)} className="hover:text-white transition-colors">
                  {volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-16 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
