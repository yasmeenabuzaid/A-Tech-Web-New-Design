"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  desc: string;
}

const stats: StatItem[] = [
  { value: "42%", label: "Time Saved", desc: "On inventory management and reconciliation tasks" },
  { value: "99.8%", label: "Inventory Accuracy", desc: "Eliminating overselling and stockouts" },
  { value: "3x", label: "Faster Checkout", desc: "Improving customer experience and throughput" },
  { value: "100%", label: "Automated Accounting", desc: "Zero manual data entry for financial records" }
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

export function RetailResults() {
  return (
    <section className="py-20 md:py-24 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-white"
          >
            The <span className="text-[#9306FF] md:ml-3 drop-shadow-[0_0_30px_rgba(147,6,255,0.8)]">Result</span>
          </motion.h2>
          <motion.p 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp} 
            transition={{ delay: 0.1 }} 
            className="text-lg md:text-xl text-white font-light px-4 opacity-90"
          >
            Measurable impact on your bottom line and operational efficiency
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              custom={index}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={cardVariants}
              className=" rounded-[2rem] p-8 text-center group  transition-colors"
            >
              <div className="text-5xl md:text-6xl font-black mb-4 text-white transition-colors duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                {stat.value}
              </div>
              <h4 className="text-base md:text-lg font-bold text-white mb-3 tracking-wide uppercase">
                {stat.label}
              </h4>
              <p className="text-white text-xs md:text-sm font-light leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#9306FF]/10 via-white/5 to-transparent border border-white/10 rounded-3xl p-8  relative overflow-hidden group hover:border-[#9306FF]/50 transition-colors cursor-pointer"
        >
          <div className="absolute top-0 left-0 w-1/2 h-full bg-[#9306FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[50px] pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 relative z-10">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#9306FF] flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(147,6,255,0.4)] group-hover:scale-110 transition-transform duration-500">
              <TrendingUp size={32} className="text-white md:hidden" />
              <TrendingUp size={36} className="text-white hidden md:block" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Success Story: Urban Outfitters Chain
                </h3>
                <ArrowUpRight className="text-white opacity-50 group-hover:opacity-100 group-hover:text-[#9306FF] transition-all hidden md:block flex-shrink-0" size={28} />
              </div>
              <p className="text-white text-base md:text-lg font-light leading-relaxed max-w-4xl opacity-80 group-hover:opacity-100 transition-opacity">
                A 12-location fashion retailer was losing $50K annually to overselling and stockouts. After implementing our unified platform, they achieved 99.9% inventory accuracy, reduced reconciliation time from 8 hours to 15 minutes daily, and increased online sales by 34% due to confident stock availability.
              </p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}