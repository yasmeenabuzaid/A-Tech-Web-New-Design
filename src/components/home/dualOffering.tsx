"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants, Transition } from "framer-motion";
import { Code2, Boxes, ArrowRight, CheckCircle2, Cpu } from "lucide-react";

interface OfferingCardProps {
  type: "software" | "business";
}

const smoothEaseTuple: [number, number, number, number] = [0.22, 1, 0.36, 1];

const OfferingCard: React.FC<OfferingCardProps> = ({ type }) => {
  const isSoftware = type === "software";

  const cardVariants: Variants = {
    initial: { opacity: 0, x: isSoftware ? -30 : 30, y: 20 },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  const floatingTransition: Transition = {
    duration: isSoftware ? 6 : 7,
    repeat: Infinity,
    ease: "easeInOut",
    delay: isSoftware ? 0 : 0.5,
  };

  const targetHref = isSoftware ? "/custom-project" : "https://atech-workspace.com/en";

  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 1.2,
        ease: smoothEaseTuple,
        delay: isSoftware ? 0.2 : 0.4,
      }}
      className="w-full flex" 
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={floatingTransition}
        className={`group relative backdrop-blur-2xl border rounded-[2.5rem] p-8 md:p-10 transition-all duration-700 overflow-hidden w-full h-full flex-1 flex flex-col
          ${
            isSoftware
              ? "bg-white/[0.02] border-white/10 text-right items-end hover:bg-white/[0.04] hover:border-[#9306FF]/30 hover:shadow-[0_0_40px_rgba(147,6,255,0.1)]"
              : "bg-gradient-to-br from-[#9306FF]/[0.05] to-transparent border-[#9306FF]/20 text-left items-start hover:border-[#9306FF]/40 hover:shadow-[0_0_50px_rgba(147,6,255,0.15)]"
          }`}
      >
        {/* Shimmer Effect */}
        <motion.div
          animate={{ left: ["-100%", "200%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut",
          }}
          className="absolute top-0 bottom-0 w-[150px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-[30deg] z-0 pointer-events-none"
        />

        {/* Inner Pulse for Business */}
        {!isSoftware && (
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_0_30px_rgba(147,6,255,0.2)] pointer-events-none z-0"
          />
        )}

        {/* Background Blobs */}
        <motion.div
          animate={
            isSoftware
              ? { x: [0, 20, 0], y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }
              : { scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }
          }
          transition={{
            duration: isSoftware ? 10 : 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute w-40 h-40 bg-[#9306FF]/20 blur-[60px] rounded-full pointer-events-none z-0 ${
            isSoftware ? "-top-10 -right-10" : "top-10 right-10"
          }`}
        />

        {/* Content */}
        <div
          className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-all duration-500 group-hover:scale-105 flex-shrink-0
          ${
            isSoftware
              ? "bg-white/5 border border-white/10 group-hover:bg-[#9306FF]/10 group-hover:border-[#9306FF]/30"
              : "bg-[#9306FF]/10 border border-[#9306FF]/30 shadow-[0_0_15px_rgba(147,6,255,0.2)] group-hover:bg-[#9306FF]/20"
          }`}
        >
          {isSoftware ? (
            <Code2
              size={26}
              className="text-gray-300 group-hover:text-white transition-colors duration-500"
            />
          ) : (
            <Boxes
              size={26}
              className="text-[#d8b4ff] group-hover:text-white transition-colors duration-500"
            />
          )}
        </div>

        <h3 className="relative z-10 text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight leading-tight flex-shrink-0">
          {isSoftware ? (
            <>
              Custom Core<br />Development
            </>
          ) : (
            <>
              All-in-One<br />Business OS
            </>
          )}
        </h3>

        <p
          className={`relative z-10 text-gray-400 mb-8 leading-relaxed font-light text-base max-w-sm transition-colors duration-500 group-hover:text-gray-200 
          ${isSoftware ? "ml-auto" : "mr-auto"}`}
        >
          {isSoftware
            ? "Bespoke digital architecture engineered for absolute scale and market dominance."
            : "Complete command center. Fully integrated ERP & POS for modern enterprises."}
        </p>

        <ul className="relative z-10 space-y-4 mb-10 w-full flex-grow flex flex-col">
          {(isSoftware
            ? ["Enterprise Systems", "Cloud Integration"]
            : ["Intelligent POS", "Inventory Control"]
          ).map((text, i) => (
            <li
              key={i}
              className={`flex items-center gap-3 text-sm text-gray-300 group-hover:text-white transition-colors duration-300 ${
                isSoftware ? "justify-end" : "justify-start"
              }`}
            >
              {isSoftware ? (
                <>
                  {" "}
                  {text}{" "}
                  <CheckCircle2 size={16} className="text-[#9306FF] flex-shrink-0" />{" "}
                </>
              ) : (
                <>
                  {" "}
                  <CheckCircle2 size={16} className="text-[#9306FF] flex-shrink-0" />{" "}
                  {text}{" "}
                </>
              )}
            </li>
          ))}
        </ul>

        <Link href={targetHref} passHref legacyBehavior>
          <a
            target={!isSoftware ? "_blank" : "_self"} 
            rel="noopener noreferrer"
            className={`relative z-10 flex items-center gap-2 text-sm font-medium text-white transition-all duration-300 group/btn px-6 py-3 rounded-full border shadow-sm group-hover:scale-[1.02] active:scale-[0.98] flex-shrink-0
            ${
              isSoftware
                ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 shadow-inner"
                : "bg-gradient-to-r from-[#9306FF] to-[#7e00e6] border-transparent hover:shadow-[0_0_20px_rgba(147,6,255,0.4)]"
            }`}
          >
            {isSoftware ? (
              <>
                {" "}
                Discover{" "}
                <ArrowRight
                  size={16}
                  className="rotate-180 group-hover/btn:-translate-x-1 transition-transform duration-300 text-[#d8b4ff]"
                />{" "}
              </>
            ) : (
              <>
                {" "}
                Explore OS{" "}
                <ArrowRight
                  size={16}
                  className="group-hover/btn:translate-x-1 transition-transform duration-300"
                />{" "}
              </>
            )}
          </a>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export const DualOffering: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative z-10 overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#9306FF]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Central Timeline Element */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] hidden lg:block z-0">
          <div className="absolute inset-0 bg-white/[0.03]" />
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: smoothEaseTuple }}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-[#9306FF]/60 to-transparent shadow-[0_0_15px_rgba(147,6,255,0.5)]"
          />
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-[#9306FF]/50 z-20 flex items-center justify-center shadow-[0_0_20px_rgba(147,6,255,0.3)]"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Cpu size={18} className="text-[#d8b4ff]" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[-10px] rounded-full border border-[#9306FF]/30 pointer-events-none"
            />
          </motion.div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-stretch relative z-10">
          <OfferingCard type="software" />
          <OfferingCard type="business" />
        </div>
      </div>
    </section>
  );
};