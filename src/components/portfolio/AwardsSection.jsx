import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Award, Star, Smartphone, Users } from 'lucide-react';

const awards = [
  {
    title: "Appreciation Certificate",
    organization: "KAU - Faculty of Computing and Information Technology - CyberSecurity Club",
    date: "May 2025",
    description: "Recognized for outstanding contributions...",
    icon: Award,
    highlight: false,
    color: "from-red-500/20 to-red-600/20",
    borderColor: "border-red-500/50",
  },
  {
    title: "iPhone 16 Award for Security Research",
    organization: "SAFCSP - BlackHat MEA",
    date: "November 2024",
    description: "Rewarded with an iPhone 16 for Remotely Rebooting a Vital Signs Monitor Device",
    icon: Smartphone,
    highlight: false,
    color: "from-red-500/20 to-red-600/20",
    borderColor: "border-red-500/50",
  },
  {
    title: "1st Place in CTF Competition",
    organization: "ZINAD IT - TechHub Event",
    date: "September 2024",
    description: "Team 0Day and I secured first place in ZinadIT CTF (TechHub)",
    icon: Trophy,
    highlight: false,
    color: "from-red-500/20 to-red-600/20",
    borderColor: "border-red-500/50",
  },
];

export default function AwardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="min-h-screen py-20 lg:py-32 relative" ref={ref}>
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="lg:ml-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-16 text-center lg:text-left"
          >
            <span className="text-red-500 text-sm tracking-widest uppercase">Recognition</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Awards & Achievements
            </h2>
          </motion.div>

          {/* Awards Grid */}
          <div className="space-y-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: award.highlight ? '0 0 40px rgba(239, 68, 68, 0.1)' : '0 0 40px rgba(239, 68, 68, 0.1)',
                  }}
                  className={`p-8 border-2 rounded-2xl backdrop-blur-sm transition-all duration-500 bg-gradient-to-br ${award.color} ${award.borderColor}`}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${award.color} border-2 ${award.borderColor} flex items-center justify-center`}
                      >
                        <award.icon className="text-white" size={40} />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-white">{award.title}</h3>
                            {award.highlight && (
                              <Star className="text-yellow-500" size={20} fill="currentColor" />
                            )}
                          </div>
                          <p className="text-red-500 font-medium">{award.organization}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">{award.date}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  {award.highlight && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                      className="absolute -top-4 -right-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                        <Trophy size={24} className="text-white" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 text-center">
              <Award className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">3+</div>
              <div className="text-gray-400 text-sm">Major Awards</div>
            </div>
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 text-center">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-gray-400 text-sm">Students Trained</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



            //<div className="p-6 border border-white/10 rounded-xl bg-white/5 text-center">
              //<Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              //<div className="text-3xl font-bold text-white mb-1">1st</div>
              //<div className="text-gray-400 text-sm">Place CTF Winner</div>
            //</div>