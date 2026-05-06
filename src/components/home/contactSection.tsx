// ContactSection.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Sparkles } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="py-22 relative z-10 overflow-hidden border-t border-white/5">
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#9306FF]/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#9306FF]/10 border border-[#9306FF]/20 mb-6 shadow-[0_0_10px_rgba(147,6,255,0.1)]">
              <Sparkles size={14} className="text-[#d8b4ff]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d8b4ff]">Start a Project</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter leading-tight">
              Let's Build The <br />
              <span className="text-[#9306FF] drop-shadow-[0_0_25px_rgba(147,6,255,0.6)]">Future Together.</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              Whether you're looking to integrate advanced AI models, rebuild your ecosystem, or launch a breakthrough product, our elite engineers are ready to execute your vision.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col gap-4 border-l-2 border-[#9306FF]/30 pl-6">
              <div className="text-white font-medium">Direct Inquiries</div>
              <a href="mailto:hello@atech.com" className="text-[#d8b4ff] hover:text-white transition-colors flex items-center gap-2 text-sm font-light">
                <Mail size={16} /> hello@atech-sdlc.com
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-[#0B101E]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group">
              
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#9306FF] to-transparent opacity-50"></div>

              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                
                <div className="relative">
                  <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${focusedInput === 'name' ? 'text-[#9306FF]' : 'text-gray-500'}`}>
                    <User size={18} />
                  </div>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Your Full Name" 
                    onFocus={() => setFocusedInput('name')}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#9306FF]/50 focus:bg-[#9306FF]/5 transition-all duration-300 shadow-inner"
                  />
                </div>

                <div className="relative">
                  <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${focusedInput === 'email' ? 'text-[#9306FF]' : 'text-gray-500'}`}>
                    <Mail size={18} />
                  </div>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="Work Email Address" 
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#9306FF]/50 focus:bg-[#9306FF]/5 transition-all duration-300 shadow-inner"
                  />
                </div>

                <div className="relative">
                  <div className={`absolute top-4 left-0 pl-4 pointer-events-none transition-colors duration-300 ${focusedInput === 'message' ? 'text-[#9306FF]' : 'text-gray-500'}`}>
                    <MessageSquare size={18} />
                  </div>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project or system requirements..." 
                    onFocus={() => setFocusedInput('message')}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#9306FF]/50 focus:bg-[#9306FF]/5 transition-all duration-300 shadow-inner resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white transition-all duration-500 relative group/btn overflow-hidden bg-[#9306FF] hover:bg-[#b047ff] hover:shadow-[0_0_40px_rgba(147,6,255,0.6)] mt-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9306FF]/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Initialize Project <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </span>
                </button>
                
                <p className="text-center text-gray-500 text-xs mt-4 font-light">
                  Your data is protected by military-grade encryption.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};