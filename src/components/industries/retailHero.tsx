"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles } from "lucide-react";

export function RetailHero() {
  return (
    <section className="relative text-white py-32 min-h-[60vh] flex items-center justify-center overflow-hidden ">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#9306FF]/15 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center px-5 py-2 rounded-full bg-white/[0.03] backdrop-blur-md mb-8 border border-white/10 shadow-[0_0_20px_rgba(147,6,255,0.15)] group"
        >
          <ShoppingBag size={16} className="mr-2 text-[#d8b4ff]" />
          <span className="text-sm font-semibold tracking-wide text-gray-200">Industry Solutions</span>
        </motion.div>
  <motion.h1 
  initial={{ opacity: 0, y: 20 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8, delay: 0.1 }}
  className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight text-white max-w-4xl"
>
  Retail & E-commerce
  <span className="text-[#9306FF] ml-3 drop-shadow-[0_0_30px_rgba(147,6,255,0.8)]">
    Unified
  </span>
</motion.h1>

<motion.p 
  initial={{ opacity: 0 }} 
  animate={{ opacity: 1 }} 
  transition={{ duration: 1, delay: 0.3 }}
  className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl"
>
  The modern retail landscape demands seamless integration between physical and digital storefronts. Our platform eliminates the complexity of multi-channel commerce with a unified system that keeps inventory, customer data, and financials perfectly synchronized.
</motion.p>
      </div>
    </section>
  );
}
