"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function ResourcesCTA() {
  return (
    <section className="py-32 relative overflow-hidden  border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#9306FF]/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <Sparkles className="w-12 h-12 text-[#9306FF] mx-auto mb-8 animate-pulse" />
          <h2 className="text-5xl font-black mb-6 text-white tracking-tight">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-light max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve similar results in your business.
          </p>
          <a href="/contact" className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#9306FF] to-[#6d05cc] rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
            <button className="relative px-10 py-5 rounded-full font-bold text-white bg-[#030712] border border-[#9306FF]/50 hover:bg-[#9306FF]/10 transition-all duration-300 flex items-center gap-2">
              Schedule a Consultation
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}