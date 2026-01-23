"use client";

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";

interface Episode {
  id: number;
  title: string;
  description: string;
  duration: string;
  transcriptLink?: string;
  audioSrc?: string;
}

interface AudioContextType {
  currentEpisode: Episode | null;
  isPlaying: boolean;
  progress: number;
  duration: number;
  volume: number;
  playEpisode: (episode: Episode) => void;
  togglePlay: () => void;
  setVolume: (vol: number) => void;
  seek: (time: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element on mount
    audioRef.current = new Audio();
    
    const audio = audioRef.current;
    
    const handleTimeUpdate = () => setProgress(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  const playEpisode = (episode: Episode) => {
    if (!audioRef.current || !episode.audioSrc) return;

    if (currentEpisode?.id === episode.id) {
      togglePlay();
      return;
    }

    setCurrentEpisode(episode);
    audioRef.current.src = episode.audioSrc;
    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch((e) => console.error("Playback failed:", e));
  };

  const togglePlay = () => {
    if (!audioRef.current || !currentEpisode) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  };

  const updateVolume = (vol: number) => {
    if (audioRef.current) {
      const clampedVol = Math.max(0, Math.min(1, vol));
      audioRef.current.volume = clampedVol;
      setVolume(clampedVol);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        currentEpisode,
        isPlaying,
        progress,
        duration,
        volume,
        playEpisode,
        togglePlay,
        setVolume: updateVolume,
        seek,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
