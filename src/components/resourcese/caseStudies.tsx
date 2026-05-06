"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { AlertCircle, CheckCircle2, Building2, Cog, ArrowRight } from "lucide-react";

interface Metrics {
  [key: string]: string;
}

interface CaseStudy {
  title: string;
  category: string;
  client: string;
  challenge: string;
  process: string[];
  outcome: string;
  metrics: Metrics;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Urban Fashion Retailer: From Stockout Chaos to 99.9% Inventory Accuracy",
    category: "Retail Case Study",
    client: "12-Location Fashion Chain",
    challenge: "Frequent overselling, 8 hours daily manual reconciliation, disconnected online/offline inventory",
    process: [
      "Discovery: Mapped workflows",
      "Design: Unified dashboard",
      "Dev: Shopify & POS integration",
      "QA: Black Friday simulation",
    ],
    outcome: "99.9% inventory accuracy, $50K annual savings from eliminated overselling, reconciliation reduced to 15 mins.",
    metrics: { timeSaved: "42 hrs/wk", revenue: "+34%", roi: "4.2 mo" },
  },
  {
    title: "The Bistro Group: Cutting Labor Costs 28% While Improving Service",
    category: "Hospitality Case Study",
    client: "5-Location Casual Dining Chain",
    challenge: "36% labor costs, 8% food waste, slow table turns, no centralized management visibility",
    process: [
      "Discovery: Analyzed sales data",
      "Design: Predictive scheduling",
      "Dev: Integrated POS & HR",
      "Deployment: Simultaneous launch",
    ],
    outcome: "Labor costs reduced to 27%, food waste cut to 4.2%, 40% increase in table turns, real-time visibility.",
    metrics: { savings: "$170K/yr", waste: "-47%", turns: "+40%" },
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const arrowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, x: -10 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.4 } }
};

export function CaseStudies() {
  const formatMetricKey = (key: string) => {
    const result = key.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  return (
    <section className="py-24 md:py-32 text-white relative overflow-hidden bg-transparent border-t border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9306FF]/10 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#9306FF]/5 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter"
          >
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#d8b4ff]">Transformations</span>
          </motion.h2>
          <motion.p 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp} 
            className="text-lg text-gray-400 font-light max-w-2xl mx-auto"
          >
            From complex challenges to streamlined operations. See how our ecosystem drives measurable growth.
          </motion.p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {caseStudies.map((study, index) => {
            const [mainTitle, subTitle] = study.title.split(": ");

            return (
              <motion.div 
                key={index}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={staggerContainer}
                className="relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-6 lg:p-12 hover:border-white/10 transition-colors duration-500 shadow-2xl"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-12 border-b border-white/10 pb-12">
                  <div className="lg:w-2/3">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="px-4 py-1.5 bg-[#9306FF]/10 border border-[#9306FF]/30 text-[#d8b4ff] rounded-full text-xs font-bold tracking-widest uppercase">
                        {study.category}
                      </span>
                      <span className="flex items-center gap-2 text-gray-300 text-sm font-medium bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                        <Building2 size={14} className="text-gray-400" /> {study.client}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-white">
                      {mainTitle}
                      {subTitle && (
                        <span className="block text-gray-400 font-bold mt-2 text-xl md:text-2xl">
                          {subTitle}
                        </span>
                      )}
                    </h3>
                  </div>

                  <div className="lg:w-1/3 flex flex-row flex-wrap lg:flex-col gap-4 w-full">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="flex-1 bg-gradient-to-r from-[#9306FF]/10 to-transparent border border-[#9306FF]/20 rounded-2xl p-4 flex flex-col justify-center">
                        <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold mb-1">
                          {formatMetricKey(key)}
                        </span>
                        <span className="text-2xl md:text-3xl font-black text-white drop-shadow-[0_0_10px_rgba(147,6,255,0.5)]">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 lg:gap-6 relative">
                  
                  <motion.div variants={cardVariants} className="flex-1 bg-white/[0.03] border border-red-500/10 hover:border-red-500/30 rounded-3xl p-6 md:p-8 transition-colors duration-300 group">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <AlertCircle className="text-red-400" size={24} />
                    </div>
                    <h4 className="text-lg font-bold mb-3 text-white">1. The Challenge</h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {study.challenge}
                    </p>
                  </motion.div>

                  <motion.div variants={arrowVariants} className="flex items-center justify-center py-2 lg:py-0">
                    <div className="w-10 h-10 rounded-full bg-[#9306FF]/20 flex items-center justify-center shadow-[0_0_15px_rgba(147,6,255,0.3)]">
                       <ArrowRight className="text-[#d8b4ff] rotate-90 lg:rotate-0" size={20} />
                    </div>
                  </motion.div>

                  <motion.div variants={cardVariants} className="flex-1 bg-white/[0.03] border border-blue-500/10 hover:border-blue-500/30 rounded-3xl p-6 md:p-8 transition-colors duration-300 group">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Cog className="text-blue-400" size={24} />
                    </div>
                    <h4 className="text-lg font-bold mb-4 text-white">2. Our Process</h4>
                    <ul className="space-y-2">
                      {study.process.map((step, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-2.5 mt-1.5 flex-shrink-0" />
                          <span className="font-light">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={arrowVariants} className="flex items-center justify-center py-2 lg:py-0">
                    <div className="w-10 h-10 rounded-full bg-[#9306FF]/20 flex items-center justify-center shadow-[0_0_15px_rgba(147,6,255,0.3)]">
                       <ArrowRight className="text-[#d8b4ff] rotate-90 lg:rotate-0" size={20} />
                    </div>
                  </motion.div>

                  <motion.div variants={cardVariants} className="flex-1 bg-white/[0.03] border border-green-500/10 hover:border-green-500/30 rounded-3xl p-6 md:p-8 transition-colors duration-300 group relative overflow-hidden">
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500/10 blur-[40px] rounded-full pointer-events-none" />
                    <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <CheckCircle2 className="text-green-400" size={24} />
                    </div>
                    <h4 className="text-lg font-bold mb-3 text-white relative z-10">3. The Outcome</h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-light relative z-10">
                      {study.outcome}
                    </p>
                  </motion.div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}