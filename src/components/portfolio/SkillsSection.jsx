import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Terminal, Network, Bug, Database, Code2 } from "lucide-react";

const buckets = [
  {
    title: "Offensive Security",
    icon: Shield,
    items: ["Web App Pentesting", "Active Directory Attacks", "Privilege Escalation", "Reporting & Risk Rating"],
  },
  {
    title: "Tooling",
    icon: Terminal,
    items: ["Nmap", "Burp Suite", "ffuf / gobuster", "BloodHound", "SQLmap", "Impacket", "Metasploit (when needed)"],
  },
  {
    title: "Networking",
    icon: Network,
    items: ["TCP/IP", "DNS", "HTTP(S)", "SMB/LDAP/Kerberos basics", "Wireshark analysis"],
  },
  {
    title: "Research",
    icon: Bug,
    items: ["Vulnerability Analysis", "Exploit Reproduction", "PoC Validation", "Attack Path Thinking"],
  },
  {
    title: "Backend / Data",
    icon: Database,
    items: ["SQL basics", "Linux administration", "Windows internals basics"],
  },
  {
    title: "Code",
    icon: Code2,
    items: ["Python", "Bash", "Java", "C", "Automation scripts"],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-20">
        <div className="lg:ml-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-16 text-center lg:text-left"
          >
            <span className="text-red-500 text-sm tracking-widest uppercase">Stack</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">Skills & Tools</h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              A focused toolkit for real-world security testing and building repeatable workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {buckets.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <b.icon className="text-red-500" size={22} />
                  </div>
                  <div className="text-white font-semibold">{b.title}</div>
                </div>

                <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
                  {b.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500/70 flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 h-px bg-white/10" />
                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>Always improving</span>
                  <span className="text-red-500">↗</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
