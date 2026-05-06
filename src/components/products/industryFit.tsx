"use client";

import React from "react";
import { ArrowRight, Building2, Store, LucideIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  delay?: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      delay: delay 
    }
  })
};

const IndustryCard: React.FC<IndustryCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText, 
  delay = 0 
}) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={delay}
      className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-[#0B101E]/80 backdrop-blur-xl border border-white/10 group hover:border-[#9306FF]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,6,255,0.15)] relative overflow-hidden h-full"
    >
      <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-[#9306FF]/10 rounded-full blur-[40px] md:blur-[50px] group-hover:bg-[#9306FF]/20 transition-colors duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#9306FF]/10 border border-[#9306FF]/30 flex items-center justify-center mb-6 md:mb-8 shadow-[0_0_15px_rgba(147,6,255,0.2)]">
          <Icon size={28} className="text-[#d8b4ff]" />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-8 md:mb-10 text-base md:text-lg leading-relaxed font-light flex-grow">
          {description}
        </p>
        
        <button className="flex items-center text-sm font-bold text-[#9306FF] group-hover:text-[#b047ff] transition-colors w-fit">
          {buttonText} 
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export function IndustryFit() {
  const industries = [
    {
      icon: Store,
      title: "Retail & E-commerce",
      description: "Perfect for multi-channel retailers. Manage physical stores and online sales from one dashboard with synchronized inventory, unified customer data, and omnichannel fulfillment.",
      buttonText: "Learn More About Retail Solutions",
      delay: 0
    },
    {
      icon: Building2,
      title: "Hospitality & Restaurants",
      description: "Designed for food service. From menu engineering to kitchen workflows, table management to delivery integration—everything hospitality businesses need to thrive.",
      buttonText: "Explore Hospitality Features",
      delay: 0.2
    }
  ];

  return (
    <section className="py-20 md:py-32 relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
            Built for <span className="text-[#9306FF] drop-shadow-[0_0_20px_rgba(147,6,255,0.4)]">Your Industry</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto px-4">
            Pre-configured workflows for specific business types
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              buttonText={industry.buttonText}
              delay={industry.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}