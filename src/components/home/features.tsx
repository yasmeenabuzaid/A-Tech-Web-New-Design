"use client";

import React from "react";
import { Code2, Boxes, Shield, LucideIcon, Cpu } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, Variants } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8 }}
      className="relative bg-white/5 border border-[#9306FF]/10 p-6 rounded-3xl hover:bg-[#9306FF]/10 hover:border-[#9306FF]/40 hover:shadow-[0_20px_40px_rgba(147,6,255,0.1)] transition-colors duration-500 group overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(147, 6, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.03] ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#9306FF]/20 group-hover:ring-[#9306FF]/40">
          
          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#9306FF] shadow-[0_0_10px_#9306FF,0_0_20px_#9306FF]"
          />

          <Icon size={26} className="text-gray-400 transition-colors duration-300 group-hover:text-white" />
        </div>
        
        <h3 className="mb-2 text-xl font-semibold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-sm font-light leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const Features: React.FC = () => {
  const featuresData = [
    { icon: Code2, title: "Precision", description: "Bespoke solutions architected to your exact specifications with pixel-perfect accuracy." },
    { icon: Cpu, title: "Neural Net", description: "Infusing advanced AI models seamlessly into your core business logic." },
    { icon: Shield, title: "Security", description: "Military-grade encryption and strict compliance to protect your assets." },
    { icon: Boxes, title: "Ecosystem", description: "Unified systems acting as a cohesive brain for your entire operation." }
  ];

  return (
    <section className="relative py-28 z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="flex flex-col mb-20 space-y-4 max-w-2xl">
          <motion.div 
            variants={cardVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9306FF]/10 border border-[#9306FF]/20 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#9306FF]" />
            <span className="text-xs font-bold tracking-wider text-[#d8b4ff] uppercase">Capabilities</span>
          </motion.div>
          
          <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight">
            Engineering <span className="text-[#9306FF] drop-shadow-[0_0_30px_rgba(147,6,255,0.8)]">Superiority.</span>
          </motion.h2>
          
          <motion.p variants={cardVariants} className="text-gray-400 font-light text-lg leading-relaxed">
            Elite code meets absolute business dominance. We don't just build software, we engineer digital ecosystems that define industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((f, i) => (
            <FeatureCard key={i} {...f} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};