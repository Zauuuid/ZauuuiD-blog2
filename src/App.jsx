import React, { useState, useEffect, useRef } from "react";
import Home from "@/pages/Home";
import { Toaster } from "sonner";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const audioRef = useRef(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    // Create audio instance only once
    if (!audioRef.current) {
      const audioUrl = import.meta.env.BASE_URL + "bg-music.mp3";
      const audio = new Audio(audioUrl);
      audio.loop = true;
      audio.volume = 0.5;
      audioRef.current = audio;
    }
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (audioRef.current && !audioRef.current.paused) {
          audioRef.current.pause();
          audioRef.current.wasPlaying = true;
        }
      } else {
        if (audioRef.current && audioRef.current.wasPlaying) {
          audioRef.current.play().catch(() => {});
          audioRef.current.wasPlaying = false;
        }
      }
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const handleEnter = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
    }
    setEntered(true);
  };

  return (
    <>
      <AnimatePresence>
        {!entered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onClick={handleEnter}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white cursor-pointer"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="flex flex-col items-center gap-4 px-4 text-center"
            >
              <h1 className="text-2xl md:text-4xl font-light tracking-[0.3em] uppercase opacity-90">
                [ Click to Enter ]
              </h1>
              <p className="text-gray-500 text-xs md:text-sm tracking-widest uppercase mt-4 animate-pulse">
                Click anywhere on the screen
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Home audioRef={audioRef} />
      <Toaster richColors position="bottom-right" />
    </>
  );
}
