"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function RetailCTA() {
  return (
    <section className="py-32 relative overflow-hidden  ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px]  rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          
        >
          <div className="absolute inset-0  rounded-[3rem] pointer-events-none"></div>
          
          <Sparkles className="w-12 h-12 text-[#9306FF] mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
            Ready to Unify Your <br className="hidden md:block"/> Retail Operations?
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-light max-w-2xl mx-auto">
            See how our platform can eliminate data silos and transform your multi-channel retail business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="px-10 py-5 rounded-full font-bold text-white bg-[#9306FF] shadow-[0_0_30px_rgba(147,6,255,0.4)] hover:shadow-[0_0_50px_rgba(147,6,255,0.6)] hover:-translate-y-1 transition-all duration-300">
              Schedule a Demo
            </button>
            <button className="px-10 py-5 rounded-full font-bold text-white bg-white/[0.05] border border-white/20 hover:border-[#9306FF]/50 hover:bg-[#9306FF]/10 transition-all duration-300">
              Download Retail Guide
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}