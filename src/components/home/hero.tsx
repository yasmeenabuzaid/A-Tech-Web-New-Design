"use client";

import React, { useRef } from "react";
import { ArrowRight, Cpu, Code2, Network } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import Link from 'next/link';
interface NodeProps {
  delay: number;
  pos: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  tz: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const visualVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const nodes: NodeProps[] = [
    { 
      delay: 1.2, 
      pos: "top-20 right-2", 
      icon: <Network size={16} className="text-white" />, 
      label: "Neural Net", 
      value: "AI.train()", 
      tz: 150 
    },
    { 
      delay: 1.4, 
      pos: "bottom-8 left-8", 
      icon: <Code2 size={18} className="text-[#c89bf5]" />, 
      label: "Architecture", 
      value: "<System.Build />", 
      tz: 120 
    },
  ];

  const floatingBackgroundSymbols = [
    { symbol: "</>", size: 20, x: "5%", delay: 0 },
    { symbol: "{ }", size: 24, x: "15%", delay: 0.1 },
    { symbol: "AI", size: 18, x: "25%", delay: 0.2 },
    { symbol: "</>", size: 22, x: "35%", delay: 0.15 },
    { symbol: "{ }", size: 26, x: "45%", delay: 0.3 },
    { symbol: "()", size: 16, x: "55%", delay: 0.25 },
    { symbol: "</>", size: 20, x: "65%", delay: 0.05 },
    { symbol: "AI", size: 24, x: "75%", delay: 0.2 },
    { symbol: "{ }", size: 18, x: "82%", delay: 0.35 },
    { symbol: "</>", size: 22, x: "88%", delay: 0.1 },
    { symbol: "()", size: 26, x: "94%", delay: 0.4 },
    { symbol: "{ }", size: 16, x: "98%", delay: 0.25 },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-8 pb-20 overflow-hidden z-10 min-h-[90vh] flex items-center "
    >
      <div className="absolute inset-0 z-0 pointer-events-none lg:hidden">
        {floatingBackgroundSymbols.map((item, index) => (
          <motion.div
            key={index}
            className="absolute font-mono font-bold text-[#9306FF]/30 opacity-50"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 1, 1, 0], 
              rotate: 360 
            }}
            transition={{ 
              duration: 4 + Math.random() * 3, 
              ease: "linear", 
              delay: item.delay, 
              repeat: Infinity 
            }}
            style={{ 
              left: item.x, 
              fontSize: `${item.size}px` 
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-20 pointer-events-auto flex flex-col items-center text-center lg:items-start lg:text-left mt-16 lg:mt-0" 
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9306FF]/10 border border-[#9306FF]/30 backdrop-blur-md mb-6 lg:mb-8 shadow-[0_0_20px_rgba(147,6,255,0.25)]">
              <Cpu size={12} className="text-[#9306FF] animate-pulse" />
              <span className="text-[10px] lg:text-xs font-bold text-[#d8b4ff] tracking-widest uppercase">AI-Powered Engineering</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl lg:text-7xl font-bold tracking-tighter mb-6 leading-[1.1] text-white">
              Architecting <br className="hidden lg:block" />
              <span className="relative">
                <span className="text-[#9306FF] drop-shadow-[0_0_30px_rgba(147,6,255,0.8)]">
                  Digital Eminence.
                </span>
                <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9306FF]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base lg:text-lg text-gray-300 mb-10 leading-relaxed font-light max-w-md lg:max-w-lg">
              We craft bespoke, high-performance software and enterprise ecosystems. Precision-engineered for scale, security, and absolute market dominance.
            </motion.p>

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start w-full">
              <Link href="/custom-project">
              <button className="px-6 py-3.5 lg:px-8 lg:py-4 rounded-xl text-sm lg:text-base text-white font-bold flex items-center justify-center transition-all duration-300 relative group overflow-hidden bg-[#9306FF] hover:bg-[#b047ff] hover:shadow-[0_0_40px_rgba(147,6,255,0.6)]">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={visualVariants}
            className="hidden lg:flex relative h-[600px] items-center justify-center perspective-[1500px] pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#9306FF]/25 blur-[100px] rounded-full"></div>
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <motion.div
                animate={{ rotateZ: 360, rotateX: [60, 65, 60] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-[340px] h-[340px] border-[1.5px] border-[#9306FF]/40 rounded-xl shadow-[0_0_15px_rgba(147,6,255,0.2)]"
                style={{ transform: "rotateX(60deg) translateZ(20px)" }}
              />
              <motion.div
                animate={{ rotateZ: -360, rotateX: [60, 55, 60] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[260px] h-[260px] border-[1.5px] border-[#d8b4ff]/30 rounded-xl"
                style={{ transform: "rotateX(60deg) rotateY(45deg) translateZ(40px)" }}
              />
              <motion.div
                animate={{ rotateZ: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px] rounded-full border-2 border-white/10 border-dashed"
                style={{ transform: "rotateX(65deg) translateZ(30px)" }}
              >
                <div className="absolute top-0 left-1/2 w-12 h-1.5 bg-[#c89bf5] rounded-full shadow-[0_0_20px_#9306FF]"></div>
                <div className="absolute bottom-0 left-1/4 w-8 h-1.5 bg-white rounded-full shadow-[0_0_15px_#fff]"></div>
              </motion.div>
              <div className="absolute w-[180px] h-[400px] flex justify-between overflow-hidden" style={{ transform: "translateZ(10px)" }}>
                <motion.div animate={{ y: [400, -100] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="w-[2px] h-24 bg-gradient-to-t from-transparent via-[#9306FF] to-transparent opacity-80"></motion.div>
                <motion.div animate={{ y: [400, -100] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }} className="w-[2px] h-32 bg-gradient-to-t from-transparent via-white to-transparent opacity-60"></motion.div>
                <motion.div animate={{ y: [400, -100] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.2 }} className="w-[3px] h-20 bg-gradient-to-t from-transparent via-[#d8b4ff] to-transparent opacity-90"></motion.div>
              </div>
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-30"
                style={{ transform: "translateZ(90px)" }}
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl scale-110 shadow-[0_0_40px_rgba(147,6,255,0.3)]"></div>
                <img
                  src="/images/logo-light.png"
                  alt="A-Tech Core"
                  className="w-56 md:w-72 relative z-30 drop-shadow-[0_0_25px_rgba(147,6,255,0.9)]"
                />
              </motion.div>
              <motion.div
                animate={{ y: [-15, 15, -15], rotateZ: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-16 left-8 text-4xl font-mono text-[#9306FF]/60 font-bold z-10"
                style={{ transform: "translateZ(60px)" }}
              >
                {"{ }"}
              </motion.div>
              <motion.div
                animate={{ y: [15, -15, 15], rotateZ: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute bottom-24 right-8 text-4xl font-mono text-white/40 font-bold z-10"
                style={{ transform: "translateZ(110px)" }}
              >
                {"</>"}
              </motion.div>
              {nodes.map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, y: [0, i === 0 ? -12 : 12, 0] }}
                  transition={{ 
                    opacity: { delay: node.delay, duration: 0.5 },
                    scale: { delay: node.delay, duration: 0.5 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className={`absolute ${node.pos} bg-[#0a0a0f]/90 backdrop-blur-xl border border-[#9306FF]/40 px-4 py-3 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center gap-3 z-40`}
                  style={{ transform: `translateZ(${node.tz}px)` }}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${i === 0 ? 'from-[#9306FF] to-[#4c0285]' : ''} flex items-center justify-center`}>
                    {node.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-300 uppercase tracking-widest">{node.label}</span>
                    <span className="text-xs font-mono text-white">{node.value}</span>
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                transition={{ 
                  opacity: { delay: 1.6, duration: 0.5 },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-28 -left-4 bg-[#05050a]/80 backdrop-blur-md border border-[#9306FF]/50 px-3 py-1.5 rounded-full flex items-center gap-2 z-40"
                style={{ transform: "translateZ(80px)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9306FF] opacity-100"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9306FF]"></span>
                </span>
                <span className="text-[10px] text-[#e2c7ff] font-mono font-bold">100% Scalable</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};