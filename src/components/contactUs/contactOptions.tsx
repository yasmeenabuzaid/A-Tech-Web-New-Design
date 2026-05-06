"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MessageSquare, Calendar, BookOpen } from "lucide-react";


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

export function ContactOptions() {
  const options = [
    { 
      icon: MessageSquare, 
      title: "Live Chat", 
      desc: "Get instant answers from our team during business hours", 
      btn: "Start Chat", 
      style: "bg-[#9306FF] border-transparent hover:shadow-[0_0_20px_rgba(147,6,255,0.4)] text-white" 
    },
    { 
      icon: Calendar, 
      title: "Schedule a Call", 
      desc: "Book a time that works best for your schedule", 
      btn: "View Calendar", 
      style: "bg-white/5 border-white/10 hover:bg-[#9306FF]/10 hover:border-[#9306FF]/50 text-white" 
    },
    { 
      icon: BookOpen, 
      title: "Knowledge Base", 
      desc: "Find answers in our comprehensive documentation", 
      btn: "Browse Docs", 
      style: "bg-white/5 border-white/10 hover:bg-[#9306FF]/10 hover:border-[#9306FF]/50 text-white" 
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } } as Variants}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
            Other Ways to <span className="text-[#9306FF] drop-shadow-[0_0_15px_rgba(147,6,255,0.4)]">Connect</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Choose the method that works best for you and your team
          </motion.p>
        </motion.div>

        {/* Options Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } } as Variants}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {options.map((opt, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp} 
              className="text-center p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-[#9306FF]/30 group-hover:bg-[#9306FF]/10 shadow-inner">
                <opt.icon size={28} className="text-gray-300 group-hover:text-[#d8b4ff] transition-colors" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                {opt.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 mb-8 font-light leading-relaxed min-h-[60px]">
                {opt.desc}
              </p>
              
              {/* Action Button */}
              <button className={`w-full px-6 py-3.5 rounded-xl border transition-all font-bold group-hover:scale-[1.02] active:scale-[0.98] ${opt.style}`}>
                {opt.btn}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}