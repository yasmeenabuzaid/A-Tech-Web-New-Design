"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const ServicesHero: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 z-10 text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-[#9306FF]/15 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9306FF]/10 border border-[#9306FF]/20 mb-6 shadow-[0_0_15px_rgba(147,6,255,0.15)]">
            <Sparkles size={14} className="text-[#d8b4ff]" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#d8b4ff]">Custom Software Engineering</span>
          </motion.div>
  <motion.h2 variants={fadeInUp} className="text-2xl md:text-5xl font-black mb-8 tracking-tighter leading-tight text-white">
  Build <span className="text-[#9306FF] drop-shadow-[0_0_30px_rgba(147,6,255,0.6)]">Exactly</span> <br/>
  What Your Business Needs.
</motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto px-4">
            No templates. No compromises. Just powerful, scalable software engineered to solve your unique challenges.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};