"use client";

import React, { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Layers, Hexagon, Code2 } from "lucide-react";

export const StepVisuals = memo(({ step }: { step: number }) => {
  return (
    <div className="w-full h-full flex items-center justify-center perspective-[1000px] pointer-events-none">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="step0" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5 }} className="relative w-64 h-64 flex items-center justify-center">
            <motion.div animate={{ rotateZ: 360, rotateX: 60 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute w-[250px] h-[250px] border-2 border-[#9306FF]/30 rounded-full" />
            <motion.div animate={{ rotateZ: -360, rotateY: 60 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-[250px] h-[250px] border-2 border-[#9306FF]/10 rounded-full" />
            <div className="w-24 h-24 bg-[#9306FF] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(147,6,255,0.4)]">
              <User size={40} className="text-white" />
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5 }} className="relative w-64 h-64 flex items-center justify-center">
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute z-30 w-32 h-32 bg-[#9306FF] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(147,6,255,0.4)] transform rotate-12">
              <Layers size={40} className="text-white" />
            </motion.div>
            <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute z-20 w-32 h-32 bg-white/5 border border-white/20 rounded-2xl transform -rotate-12 translate-y-8 translate-x-8" />
            <div className="absolute z-10 w-32 h-32 bg-[#9306FF]/10 border border-[#9306FF]/20 rounded-2xl transform rotate-6 -translate-y-8 -translate-x-8" />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5 }} className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#9306FF]/20 rounded-full blur-[60px] animate-pulse"></div>
            <motion.div animate={{ rotateZ: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[200px] h-[200px] border-[2px] border-dashed border-[#9306FF]/50 rounded-full" />
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="relative z-10">
              <Hexagon size={100} className="text-[#9306FF] drop-shadow-[0_0_30px_rgba(147,6,255,0.6)]" fill="#9306FF" strokeWidth={0} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 size={35} className="text-white" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

StepVisuals.displayName = "StepVisuals";