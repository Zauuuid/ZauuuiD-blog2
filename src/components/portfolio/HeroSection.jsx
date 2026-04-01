import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const nameLetters = siteConfig.name.split('');

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Geometric Ring */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/5 rounded-full hidden md:block z-0 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        {/* Glassmorphism Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-2xl bg-black/40 backdrop-blur-2xl border border-red-500/20 rounded-3xl p-8 md:p-12 mb-16 md:mb-0 shadow-[0_0_50px_rgba(239,68,68,0.15)] flex flex-col items-center text-center relative overflow-hidden group"
        >
          {/* Subtle top glare effect for glass */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Glowing Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="w-40 h-40 rounded-full border-2 border-red-500/50 p-1 mb-6 relative cursor-pointer shadow-[0_0_30px_rgba(239,68,68,0.5)] group-hover:shadow-[0_0_50px_rgba(239,68,68,0.7)] transition-shadow duration-500"
          >
            <img
              src={siteConfig.avatarUrl}
              alt={siteConfig.name}
              className="w-full h-full rounded-full object-cover relative z-10 bg-zinc-900 shadow-inner"
            />
          </motion.div>

          {/* Glitch/Typewriter Name */}
          <motion.div className="mb-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wider flex flex-wrap justify-center gap-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.05, duration: 0.2 }}
                  className="inline-block"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Edgy Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {siteConfig.badges.map((badge, idx) => (
              <span key={idx} className={`px-4 py-1.5 rounded-full font-mono tracking-wider text-xs md:text-sm ${idx % 2 === 0
                  ? 'border border-red-500/30 bg-red-500/10 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                  : 'border border-white/10 bg-white/5 text-gray-300'
                }`}>
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Subtitle Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-gray-400 text-sm md:text-base max-w-md mb-8 italic"
          >
            {siteConfig.bio}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mt-2"
          >
            {siteConfig.socials.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-red-400 hover:border-red-400/50 hover:bg-red-400/10 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-300 backdrop-blur-sm"
                >
                  <Icon size={22} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2.5, duration: 0.5 },
          y: { delay: 2.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-red-500/50 hover:text-red-400 transition-colors cursor-pointer z-10"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
