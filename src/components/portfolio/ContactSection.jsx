import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Linkedin, Github, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast.success("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error(error);
    toast.error("Failed to send message. Please try again.");
  } finally {
    setSending(false);
  }
};

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/zayed-bawazeer-70a05b205/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/verasolo1', label: 'GitHub' },
    { icon: Mail, href: 'mailto:ZauuuiDmulla19@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 lg:py-32 relative" ref={ref}>


      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="lg:ml-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center lg:text-left mb-16"
          >
            <span className="text-red-500 text-sm tracking-widest uppercase">Contact</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Let's Get in Touch
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg">
              Discuss a project or just want to say Hi? My inbox is open for all.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#00d4aa] h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#00d4aa] h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-red-500 resize-none"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-medium h-12"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <MapPin className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-500">Medinah, Saudi Arabia</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <Mail className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-500">ZauuuiDmulla19@gmail.com</p>
                  </div>
                </div>
              </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-14 h-14 border border-white/10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500/50 transition-colors"
                  >
                    <link.icon size={22} />
                  </motion.a>
                ))}
              </div>

              {/* Quick Response */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="p-6 border border-red-500/30 rounded-xl bg-red-500/5"
              >
                <h4 className="text-white font-medium mb-2">Quick Response</h4>
                <p className="text-gray-400 text-sm">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="mt-20 pt-8 border-t border-white/10 text-center"
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Zayed Bawazeer. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


    //  {/* Animated Background */}
    //  <div className="absolute right-0 bottom-0 w-96 h-96 opacity-30 hidden lg:block">
    //    <img
     //     src="https://64.media.tumblr.com/6da0d4558ef3317ed4e025d57b81747e/8b7c3064577d5057-e6/s1280x1920/12b2ca8ef552a665f1138cc05c24f1a8b86f3953.gifv"
     //     alt="Decoration"
       //   className="w-full h-full object-contain"
    //    />
    //  </div>