import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, Award, GraduationCap } from 'lucide-react';
import CRTA from "../../assets/certs/CRTA.png";
import Dante from "../../assets/certs/Dante.png";
import eCPPT from "../../assets/certs/eCPPT.png";
import eJPTv2 from "../../assets/certs/eJPTv2_Cert.png";
import KAUST from "../../assets/certs/KAUST-Advanced.png";
import Udacity from "../../assets/certs/Udacity-Foundation.png";
import OSCP from "../../assets/certs/coming-soon.png"
import PT1 from "../../assets/certs/PT1.png"


const experiences = [
  {
    type: 'contract',
    title: 'Penetration Tester',
    company: 'Confidential',
    date: 'Oct 2025 - Nov 2025',
    location: 'Medinah',
    description: [
      'Professionally performed authorized external and internal penetration testing across infrastructure, network services, web security, and Active Directory',
      'Identified key exploitation opportunities and post-exploitation paths',
      'Documented all findings in a comprehensive, well-organized security assessment report'
    ],
  },
  {
    type: 'seasonal',
    title: 'Cybersecurity Awareness Trainer',
    company: 'Cerebra',
    date: 'Oct 2025',
    location: 'Medinah',
    description: [
      'Conducted three-day cybersecurity awareness sessions for two organizations',
      'Delivered training to both executive and non-executive staff across multiple departments',
      'Covered essential topics: privacy, social media safety, phishing awareness, and Wi-Fi security'
    ],
  },
  {
    type: 'volunteer',
    title: 'Vice Leader',
    company: 'Cybersecurity Club - King Abdulaziz University',
    date: '2024 - Present',
    location: 'Medinah',
    description: [
      'Leading club activities and initiatives in cybersecurity education',
      'Instructor and mentor, sharing knowledge with club members',
      'Organizing workshops, CTF competitions, and training sessions'
    ],
  },
];

const education = {
  degree: 'Bachelor of Computer Science',
  institution: 'Arab Open University',
  date: '2022 - 2026 (Expected)',
  location: 'Medinah, Saudi Arabia',
  achievements: ['Certificate of Excellence (2022-2023)'],
};

const certifications = [
  {
    title: "eJPTv2 - Junior Penetration Testing",
    issuer: "INE",
    year: "Sep 2024",
    image: eJPTv2,
  }
];



export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const experienceTypeStyles = {
    volunteer: {
      border: 'border-yellow-500',
      ping: 'bg-yellow-500',
      badge: 'bg-yellow-500/20 text-yellow-500',
      label: 'Volunteer',
    },
    contract: {
      border: 'border-red-500',
      ping: 'bg-black',
      badge: 'bg-red-500/20 text-red-500',
      label: 'Contract',
    },
    seasonal: {
      border: 'border-red-500',
      ping: 'bg-black',
      badge: 'bg-red-500/20 text-red-500',
      label: 'Seasonal',
    },
  };
  return (
    <section id="experience" className="min-h-screen py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-20">
        <div className="lg:ml-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-16"
          >
            <span className="text-red-500 text-sm tracking-widest uppercase">Journey</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Professional Experience
            </h2>
            
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="p-8 border-2 border-red-500/30 rounded-xl bg-gradient-to-r from-red-500/10 to-transparent">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-red-500" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{education.degree}</h3>
                  <p className="text-red-500 font-medium mb-2">{education.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {education.date}
                    </span>
                    <span>📍 {education.location}</span>
                  </div>
                  {education.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Award className="text-red-500" size={16} />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative mb-16">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="absolute left-0 md:left-8 top-0 w-px bg-gradient-to-b from-red-500 via-red-500/50 to-transparent"
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    className={`absolute left-0 md:left-8 top-0 w-4 h-4 -translate-x-1/2 
                      bg-[#0a0a0a] border-2 rounded-full
                      ${experienceTypeStyles[exp.type]?.border || 'border-red-500'}
                    `}
                  >
                    <div
                      className={`absolute inset-0 rounded-full animate-ping opacity-20
                        ${experienceTypeStyles[exp.type]?.ping || 'bg-red-500'}
                      `}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10, borderColor: 'rgba(0, 212, 170, 0.5)' }}
                    className="p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          {experienceTypeStyles[exp.type] && (
                            <span
                              className={`text-xs px-2 py-1 rounded-full
                                ${experienceTypeStyles[exp.type].badge}
                              `}
                            >
                              {experienceTypeStyles[exp.type].label}
                            </span>
                          )}
                        </div>
                        <p className="text-red-500 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm">
                        <div className="flex items-center gap-2 text-gray-500 mb-1">
                          <Calendar size={14} />
                          {exp.date}
                        </div>
                        <div className="text-gray-500">📍 {exp.location}</div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-red-500 mt-1.5">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-red-500" size={24} />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.1 + index * 0.05 }}
                  className="perspective"
                >
                  <div className="relative h-64 w-full preserve-3d transition-transform duration-700 hover-flip">

                    {/* FRONT */}
                    <div className="absolute inset-0 backface-hidden p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
                      <h4 className="text-white font-medium text-sm mb-2">{cert.title}</h4>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-red-500">{cert.issuer}</span>
                        <span className="text-gray-500">{cert.year}</span>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 p-3 border border-red-500/30 rounded-lg bg-[#0a0a0a]">
                      <div className="h-full w-full flex items-center justify-center rounded-md border border-white/10 bg-black/40 overflow-hidden">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
