import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import AudioController from "@/components/AudioController";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
];

export default function Navigation({ activeSection = "home", audioRef }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Desktop left nav */}
      <motion.nav
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="fixed left-0 top-0 h-full w-20 hidden lg:flex flex-col items-center justify-between py-8 z-50"
      >
        {/* Logo and Audio */}
        <div className="flex flex-col items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.08 }}
            onClick={() => scrollTo("home")}
            className="cursor-pointer"
          >
            <div className="w-10 h-10 bg-black border border-white/20 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all">
              <span className="text-white font-black text-lg">Z</span>
            </div>
          </motion.div>
          <AudioController audioRef={audioRef} />
        </div>

        {/* Dots */}
        <div className="flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="group relative flex items-center justify-center"
                whileHover={{ scale: 1.15 }}
                aria-label={item.label}
              >
                <span
                  className={[
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    isActive ? "bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.9)]" : "bg-white/20 group-hover:bg-white/40",
                  ].join(" ")}
                />
                <span className="absolute left-7 whitespace-nowrap text-xs tracking-widest uppercase text-gray-500 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Bottom hint */}
        <div className="text-[10px] tracking-[0.4em] text-gray-600 rotate-90 origin-center mb-10 select-none">
          SCROLL
        </div>
      </motion.nav>

      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className="px-5 py-4 flex items-center justify-between backdrop-blur-xl bg-black/30 border-b border-white/5">
          <div className="flex items-center gap-4">
            <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
              <div className="w-9 h-9 bg-black border border-white/20 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <span className="text-white font-black">Z</span>
              </div>
              <span className="text-white font-semibold tracking-wide">ZauuuiD</span>
            </button>
            <AudioController audioRef={audioRef} orientation="horizontal" />
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="px-5 py-4 bg-black/70 backdrop-blur-xl border-b border-white/10"
            >
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={[
                      "px-4 py-3 rounded-xl border text-sm text-left transition",
                      activeSection === item.id
                        ? "border-white/60 bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                        : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
