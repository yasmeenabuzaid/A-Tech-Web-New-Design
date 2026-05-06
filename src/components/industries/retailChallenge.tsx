"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Layers, Zap, AlertCircle } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

export function RetailChallenge() {
  const painPoints = [
    "Overselling due to out-of-sync inventory across channels",
    "Hours spent manually reconciling sales data",
    "Disconnected customer experiences across touchpoints",
    "Inability to get real-time business insights"
  ];

  const traditionalItems = [
    { label: "POS System", sub: "Manual export" },
    { label: "E-commerce Platform", sub: "Separate inventory" },
    { label: "Accounting Software", sub: "Manual entry" },
    { label: "CRM Tool", sub: "Disconnected data" }
  ];

  const unifiedFeatures = [
    "All-in-One Platform",
    "Real-time Sync",
    "Automated Accounting",
    "Unified Customer View"
  ];

  return (
    <section className="pt-0 py-32 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#9306FF]/10 blur-[150px] md:blur-[200px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6">
              <AlertCircle size={14} className="text-[#9306FF]" /> The Problem
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-white">
              The <span className="text-[#9306FF] md:ml-3 drop-shadow-[0_0_30px_rgba(147,6,255,0.8)]">Challenge</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 font-light mb-10 leading-relaxed">
              Today&apos;s retailers face a fragmented technology landscape. Different systems for POS, e-commerce, and inventory create operational chaos.
            </motion.p>
            
            <motion.div variants={containerVariants} className="space-y-4 md:space-y-5">
              {painPoints.map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-start group">
                  <div className="mr-4 mt-1 w-6 h-6 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center flex-shrink-0">
                    <X size={10} className="text-red-400/50 group-hover:text-red-400/80 transition-colors" />
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base group-hover:text-gray-200 transition-colors">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6 relative"
          >
            <div className="absolute left-6 md:left-[3rem] top-[40%] bottom-[20%] w-[1px] bg-gradient-to-b from-white/10 via-[#9306FF]/30 to-[#9306FF] z-0 hidden sm:block" />

            <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-md relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-3 opacity-60">
                  <Layers className="text-gray-500" size={24} />
                  <h4 className="text-lg md:text-xl font-bold text-gray-400">Traditional Approach</h4>
                </div>
                <span className="px-4 py-1.5 bg-[#030712] border border-white/10 text-gray-400 rounded-full text-[10px] md:text-xs font-medium tracking-widest uppercase flex items-center gap-2 w-max">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/60 animate-pulse" />
                  Fragmented
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {traditionalItems.map((item, i) => (
                  <div key={i} className="bg-white/[0.02] border border-dashed border-white/10 p-4 rounded-2xl flex flex-col gap-2">
                    <span className="text-gray-300 text-sm">{item.label}</span>
                    <span className="flex items-center gap-1.5 text-gray-500 text-[10px] md:text-xs">
                      <ArrowRight size={12} className="text-red-400/40"/> {item.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#9306FF]/10 to-[#9306FF]/[0.02] border border-[#9306FF]/30 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-[0_0_40px_rgba(147,6,255,0.1)] relative z-10 overflow-hidden sm:translate-x-4 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#9306FF]/20 blur-[60px] pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#9306FF] shadow-[0_0_15px_rgba(147,6,255,0.5)]">
                    <Zap className="text-white" size={18} />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">A-Tech Approach</h4>
                </div>
                <span className="px-4 py-1.5 bg-[#9306FF] text-white rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(147,6,255,0.4)] w-max">
                  Unified
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {unifiedFeatures.map((feature, i) => (
                  <div key={i} className="flex justify-between items-center bg-white/[0.03] border border-[#9306FF]/20 p-4 rounded-2xl group hover:bg-[#9306FF]/10 transition-colors">
                    <span className="text-gray-200 text-sm font-medium">{feature}</span>
                    <CheckCircle2 size={18} className="text-[#d8b4ff] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-[0_0_8px_rgba(147,6,255,0.5)]" />
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}