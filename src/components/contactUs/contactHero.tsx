"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden text-center flex flex-col items-center justify-center bg-transparent border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-[#9306FF]/15 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />
      
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={{ visible: { transition: { staggerChildren: 0.1 } } } as Variants}
          className="max-w-3xl flex flex-col items-center"
        >
          {/* Get In Touch Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-[0_0_15px_rgba(147,6,255,0.1)]">
            <Sparkles size={14} className="text-[#d8b4ff]" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#d8b4ff]">Get In Touch</span>
          </motion.div>
          
          {/* Main Title */}
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter leading-tight">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-[#9306FF] drop-shadow-[0_0_30px_rgba(147,6,255,0.6)]">Extraordinary</span>
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl text-center px-4">
            Whether you need a custom solution or want to explore our ERP/POS platform, we're here to help. Fill out the form below and we'll be in touch within 24 hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}