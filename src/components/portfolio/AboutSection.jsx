import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, Users } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Shield, label: "eJPTv2, eCPPT, PT1 & CRTA", value: "Certified" },
    { icon: Users, label: "Leadership", value: "Vice Leader" },
  ];

  return (
    <section id="about" className="min-h-screen py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-20">
        <div className="lg:ml-20 max-w-4xl">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-red-500 text-sm tracking-widest uppercase"
            >
              Profile
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6"
            >
              Offensive Security Specialist
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4 text-gray-400 leading-relaxed"
            >
              <p>
                Ambitious and committed <span className="text-red-500">offensive security</span> and 
                senior <span className="text-white font-medium">computer science student</span> with a solid 
                and growing background in <span className="text-red-500">vulnerability assessment</span> and 
                <span className="text-red-500"> penetration testing</span>.
              </p>
              <p>
                Hands-on experience conducting <span className="text-white">real-world security assessments</span>, 
                combined with a consistent commitment to learning new attack techniques. Motivated to identify 
                security weaknesses and translate findings into practical, actionable security improvements.
              </p>
              <p>
                Known for <span className="text-white">strong analytical skills</span>, adaptability, and a 
                <span className="text-red-500"> leadership-driven approach</span> to teamwork. Dedicated to 
                developing deeper offensive security expertise and delivering reliable, high-impact testing results.
              </p>
            </motion.div>

            {/* Highlight Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10"

            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -5, borderColor: 'rgba(0, 212, 170, 0.5)' }}
                  className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm text-center"
                >
                  <item.icon className="w-6 h-6 text-red-500 mx-auto mb-2" />
                  <div className="text-white text-sm font-medium">{item.value}</div>
                  <div className="text-gray-500 text-xs mt-1">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
