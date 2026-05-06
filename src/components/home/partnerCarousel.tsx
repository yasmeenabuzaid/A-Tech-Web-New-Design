"use client";

import React, { useState, FC } from "react";
import { motion, Variants } from "framer-motion";
import { Star, Building2, Hexagon, Triangle, Circle, Briefcase, LucideIcon } from "lucide-react";

interface Company {
  name: string;
  icon: LucideIcon;
}

const companies: Company[] = [
  { name: "AeroSpace X", icon: Hexagon },
  { name: "NovaTech", icon: Triangle },
  { name: "Global Systems", icon: Circle },
  { name: "CyberCore", icon: Building2 },
  { name: "Pinnacle Data", icon: Briefcase },
];

const duplicatedCompanies: Company[] = [...companies, ...companies, ...companies];

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const companyTickerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 1 } 
  }
};

const ClientShowcase: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 pb-0 relative overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          display: flex;
          width: fit-content;
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 15s;
          }
        }
        .glass-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(147,6,255,0.05) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 6, 255, 0.15);
        }
      `}</style>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-[#9306FF]/20 blur-[100px] md:blur-[150px] rounded-[100%] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.5 }} 
          variants={fadeInUpVariants}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#9306FF]/40 bg-[#9306FF]/15 mb-6 shadow-[0_0_15px_rgba(147,6,255,0.2)]">
            <Star size={14} className="text-[#d8b4ff]" fill="currentColor" />
            <span className="text-[#d8b4ff] text-xs font-bold uppercase tracking-widest">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight">
            CLIENT <span className="text-[#9306FF] drop-shadow-[0_0_25px_rgba(147,6,255,0.7)]">SUCCESS.</span>
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={companyTickerVariants}
          className="w-full overflow-hidden mb-24 md:mb-32 relative mask-image-linear"
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          <div className="animate-scroll gap-12 md:gap-16 py-4">
            {duplicatedCompanies.map((company, idx) => {
              const Icon = company.icon;
              return (
                <div key={idx} className="flex items-center gap-3 opacity-50 hover:opacity-100 hover:text-[#d8b4ff] transition-all duration-300 cursor-pointer min-w-max group">
                  <Icon size={24} className="text-[#9306FF] group-hover:drop-shadow-[0_0_10px_#9306FF] md:size-[28px]" />
                  <span className="text-lg md:text-xl font-bold text-gray-400 group-hover:text-white transition-colors tracking-wide">{company.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ClientShowcase;