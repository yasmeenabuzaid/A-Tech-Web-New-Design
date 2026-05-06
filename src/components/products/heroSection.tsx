"use client";
import { Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <section className="relative text-white py-32 overflow-hidden  min-h-[70vh] flex items-center justify-center text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#9306FF]/15 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center px-5 py-2 rounded-full bg-[#9306FF]/10 backdrop-blur-md mb-8 border border-[#9306FF]/20 shadow-[0_0_15px_rgba(147,6,255,0.15)]">
            <Zap size={16} className="mr-2 text-[#d8b4ff] animate-pulse" />
            <span className="text-sm font-bold tracking-widest text-[#d8b4ff] uppercase">All-in-One Business OS</span>
          </motion.div>
          
          {/* Title */}
          <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">
            Why Piece Together Tools When You Can Have <br/>
            <span className="text-[#9306FF] drop-shadow-[0_0_30px_rgba(147,6,255,0.6)]">One Powerful Ecosystem?</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p variants={fadeInUp} className="text-sm md:text-2xl text-gray-400 mb-12 leading-relaxed font-light">
            Our integrated ERP and Smart POS platform eliminates the chaos of
            disconnected systems. From inventory to accounting, everything works
            together seamlessly—so you can focus on growing your business, not
            managing software.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-5 rounded-full font-bold text-white transition-all duration-500 relative group overflow-hidden bg-white/5 border border-[#9306FF]/30 hover:border-[#9306FF] hover:shadow-[0_0_40px_rgba(147,6,255,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9306FF]/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book a Live Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}