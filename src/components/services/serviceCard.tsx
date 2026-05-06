"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronRight, LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
  delay: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative h-full min-h-[380px] p-6 md:p-8 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out transform preserve-3d
        bg-gradient-to-br from-white/[0.03] to-[#9306FF]/[0.05] backdrop-blur-md border 
        ${isHovered ? 'border-[#9306FF]/60 shadow-[0_0_40px_rgba(147,6,255,0.2)] scale-[1.02] md:scale-105' : 'border-[#9306FF]/15 hover:-translate-y-2'}
      `}
    >
      <Icon 
        size={140} 
        className={`absolute -bottom-10 -right-10 transition-all duration-500 z-0 ${
          isHovered ? 'text-[#9306FF]/10 rotate-12 scale-110' : 'text-white/[0.02] rotate-0 scale-100'
        }`} 
      />

      <div className="relative z-10 flex flex-col h-full text-left">
        <div className="flex items-center gap-4 mb-6" style={{ transform: "translateZ(30px)" }}>
          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 border ${
            isHovered 
              ? 'bg-[#9306FF]/20 border-[#9306FF]/60 shadow-[0_0_15px_rgba(147,6,255,0.4)]' 
              : 'bg-white/5 border-white/10'
          }`}>
            <Icon size={24} className={`transition-colors ${isHovered ? 'text-white' : 'text-gray-400'}`} />
          </div>
          <h3 className={`text-xl md:text-2xl font-bold tracking-tight leading-tight transition-colors ${isHovered ? 'text-[#d8b4ff]' : 'text-white'}`}>
            {service.title}
          </h3>
        </div>
        
        <div className="mb-8" style={{ transform: "translateZ(20px)" }}>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base font-medium">
            "{service.description}"
          </p>
        </div>

        <div className="mt-auto border-t border-[#9306FF]/20 pt-6" style={{ transform: "translateZ(25px)" }}>
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className={`flex items-start text-xs md:text-sm transition-colors ${isHovered ? 'text-gray-200' : 'text-gray-400'}`}>
                <ChevronRight size={16} className={`mr-2 flex-shrink-0 mt-0.5 transition-colors ${isHovered ? 'text-[#9306FF]' : 'text-[#9306FF]/50'}`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div 
        className={`absolute bottom-0 left-0 h-1 bg-[#9306FF] transition-all duration-500 ease-out ${
          isHovered ? 'w-full shadow-[0_0_20px_#9306FF]' : 'w-0'
        }`}
      />
    </motion.div>
  );
};