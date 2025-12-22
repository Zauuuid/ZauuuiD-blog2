import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, PenLine, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="h-full flex items-center justify-center relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="lg:ml-20 max-w-3xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center lg:text-left mb-12"
          >
            <span className="text-red-500 text-sm tracking-widest uppercase">Writings</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Technical Blog
            </h2>
            <p className="text-gray-400 text-lg">
              I share my learning Journey, thoughts, research, and findings on cybersecurity, penetration testing, and offensive security on Medium.
            </p>
          </motion.div>

          {/* Medium Card */}
          <motion.a
            href="https://medium.com/@ZauuuiDmulla19"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -10 }}
            className="block p-10 border-2 border-red-500/30 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent backdrop-blur-sm group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="black">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Medium</h3>
                  <p className="text-red-500 font-medium">@ZauuuiDmulla19</p>
                </div>
              </div>
              <ExternalLink className="text-gray-500 group-hover:text-red-500 transition-colors" size={32} />
            </div>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Explore my articles on penetration testing methodologies, security research, vulnerability analysis, and real-world attack scenarios.
            </p>

            <div className="flex items-center gap-3 text-red-500 font-medium">
              <span>Read My Articles</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </div>
          </motion.a>

          {/* Topics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <p className="text-gray-500 text-sm mb-4 text-center lg:text-left">Topics I Write About:</p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {['Penetration Testing', 'Red Teaming', 'Active Directory', 'Web Security', 'OSINT', 'Vulnerability Research'].map((topic, index) => (
                <motion.span
                  key={topic}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="px-4 py-2 bg-white/5 text-gray-400 rounded-full text-sm border border-white/10 hover:border-red-500/50 hover:text-red-500 transition-colors"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
