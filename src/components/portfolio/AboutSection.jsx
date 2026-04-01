import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, Users, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Shield, label: "eJPTv2, eCPPT, PT1 & CRTA", value: "Certified" },
  ];

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen py-20 lg:py-32 relative flex flex-col items-center justify-center" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 flex justify-center">
        <div className="max-w-4xl w-full flex flex-col items-center text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex flex-col items-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-red-500 text-sm tracking-widest flex items-center gap-2 uppercase font-semibold bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/20"
            >
              Profile
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-extrabold text-white mt-6 mb-8 drop-shadow-lg"
            >
              Offensive Security Specialist
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6 text-gray-300 leading-relaxed max-w-3xl text-sm md:text-base md:leading-loose"
            >
              <p>
                Ambitious and committed <span className="text-red-400 font-medium">offensive security</span> and
                senior <span className="text-white font-semibold">computer science student</span> with a solid
                and growing background in <span className="text-red-400">vulnerability assessment</span> and
                <span className="text-red-400"> penetration testing</span>.
              </p>
              <p>
                Hands-on experience conducting <span className="text-white font-semibold">real-world security assessments</span>,
                combined with a consistent commitment to learning new attack techniques. Motivated to identify
                security weaknesses and translate findings into practical, actionable security improvements.
              </p>
              <p>
                Known for <span className="text-white font-semibold">strong analytical skills</span>, adaptability, and a
                <span className="text-red-400 font-medium"> leadership-driven approach</span> to teamwork. Dedicated to
                developing deeper offensive security expertise and delivering reliable, high-impact testing results.
              </p>
            </motion.div>

            {/* Highlight Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row justify-center gap-6 mt-12 w-full max-w-2xl"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="w-full sm:flex-1 p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md text-center flex flex-col items-center justify-center hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 shadow-xl"
                >
                  <item.icon className="w-8 h-8 text-red-500 mb-3 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <div className="text-white text-base md:text-lg font-bold">{item.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToExperience}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-red-500/50 hover:text-red-400 transition-colors cursor-pointer z-10"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
