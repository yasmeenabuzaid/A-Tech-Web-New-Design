"use client";
import React from "react";
import { FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function ResourcesHero() {
  return (
    <section className="relative text-white py-32 min-h-[60vh] flex items-center justify-center overflow-hidden ">
      {/* Animated Background Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#9306FF]/20 blur-[150px] rounded-full pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center px-5 py-2 rounded-full bg-white/[0.03] backdrop-blur-md mb-8 border border-white/10 shadow-[0_0_20px_rgba(147,6,255,0.15)] overflow-hidden group"
        >
          <motion.div 
            animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#9306FF]/30 to-transparent skew-x-12"
          />
          <FileText size={16} className="mr-2 text-[#d8b4ff] relative z-10" />
          <span className="text-sm font-semibold tracking-wide text-gray-200 relative z-10">Resources & Insights</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight text-white max-w-4xl"
        >
          Learn From Real <br/>
          <span className="relative inline-block mt-2">
            <span  className="text-[#9306FF] drop-shadow-[0_0_30px_rgba(147,6,255,0.8)]">
              Success Stories
            </span>
            <motion.span 
              initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-0 left-0 h-2 bg-[#9306FF]/40 blur-sm rounded-full"
            />
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl"
        >
          Explore detailed case studies, industry insights, and practical
          guides from our work with hundreds of businesses across retail,
          hospitality, and beyond.
        </motion.p>
      </div>
    </section>
  );
}
