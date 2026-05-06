"use client";
import { ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-32 relative z-10 border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#9306FF]/20 blur-[150px] rounded-[100%] pointer-events-none mix-blend-screen z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="bg-gradient-to-br from-white/[0.03] to-[#9306FF]/[0.05] backdrop-blur-2xl border border-[#9306FF]/30 p-16 md:p-24 rounded-[3rem] shadow-[0_0_50px_rgba(147,6,255,0.15)] relative overflow-hidden text-center"
        >
          <Quote size={160} className="absolute -top-10 -right-10 text-white/[0.02] rotate-12" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter text-white">See It in Action</h2>
            <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto">
              Book a personalized demo and we'll show you exactly how our platform
              can transform your operations.
            </p>
            <button className="px-10 py-5 rounded-full font-bold text-white transition-all duration-500 relative group overflow-hidden bg-white/5 border border-[#9306FF]/40 hover:border-[#9306FF] hover:shadow-[0_0_40px_rgba(147,6,255,0.4)] mx-auto flex items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9306FF]/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center gap-2">
                Schedule Your Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}