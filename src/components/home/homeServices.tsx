"use client";

import React, { useRef, useState, FC } from "react";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { Smartphone, Globe, Cloud, Plug, Database, Lock, ChevronRight, Sparkles, LucideIcon } from "lucide-react";
import Link from "next/link";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const servicesData: Service[] = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Modern, responsive web platforms built with React, Next.js, and cutting-edge frameworks.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps (iOS & Android)',
    description: 'Native and cross-platform mobile experiences that users love.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure cloud architecture on AWS, Azure, and Google Cloud.',
  },
  {
    icon: Plug,
    title: 'API Integration',
    description: 'Connect your systems seamlessly with robust API development and third-party integrations.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Optimized data architecture for performance, reliability, and scalability.',
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security measures and regulatory compliance built-in.',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  }),
};

interface ServiceCardProps {
  service: Service;
  delay: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  idx: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ service, delay, hoveredIndex, setHoveredIndex, idx }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;
  const isHovered = hoveredIndex === idx;

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

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHoveredIndex(null);
  };

  return (
    <motion.div
      ref={cardRef}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden transition-all duration-500 transform preserve-3d h-full min-h-[250px] ${
        isHovered
          ? "scale-105 border-[#9306FF]/60 shadow-[0_0_40px_rgba(147,6,255,0.2)]"
          : "border-[#9306FF]/15 hover:-translate-y-2"
      }`}
    >
      <Icon 
        size={140} 
        className={`absolute -bottom-10 -right-10 transition-all duration-500 z-0 ${ 
          isHovered ? "text-[#9306FF]/10 rotate-12 scale-110" : "text-white/[0.02] rotate-0 scale-100" 
        }`}
      />
      
      <div
        className="relative z-10 flex flex-col h-full"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 border shrink-0 ${
              isHovered
                ? "bg-[#9306FF]/20 border-[#9306FF]/60 shadow-[0_0_15px_rgba(147,6,255,0.4)]"
                : "bg-white/5 border-white/10"
            }`}
          >
            <Icon 
              size={20} 
              className={`md:size-[24px] transition-colors ${ isHovered ? "text-white" : "text-gray-400" }`}
            />
          </div>  

          <h3
            className={`text-xl md:text-2xl font-bold tracking-tight leading-tight transition-colors ${
              isHovered ? "text-[#d8b4ff]" : "text-white"
            }`}
          >
            {service.title}
          </h3>
        </div>
        
        <div className="mb-8" style={{ transform: "translateZ(20px)" }}>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base font-medium">
            "{service.description}"
          </p>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 h-1 bg-[#9306FF] transition-all duration-500 ease-out ${
          isHovered ? "w-full shadow-[0_0_20px_#9306FF]" : "w-0"
        }`}
      ></div>
    </motion.div>
  );
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8 } 
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { delay: 0.5 } 
  },
};

export default function HomeServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-24 relative z-10">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] md:w-[800px] md:h-[300px] bg-[#9306FF]/20 blur-[100px] md:blur-[150px] rounded-[100%] pointer-events-none mix-blend-screen z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#9306FF]/40 bg-[#9306FF]/15 mb-6 shadow-[0_0_15px_rgba(147,6,255,0.2)]">
            <Sparkles size={14} className="text-[#d8b4ff]" />
            <span className="text-[#d8b4ff] text-xs font-bold uppercase tracking-widest">
              Our Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
           Our
 <span className="text-[#9306FF] ml-5 drop-shadow-[0_0_25px_rgba(147,6,255,0.7)]">Services</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg font-medium max-w-2xl mx-auto">
            We craft bespoke software and enterprise ecosystems, built to scale and secure your market position.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              idx={index} 
              service={service} 
              delay={index * 0.1} 
              hoveredIndex={hoveredIndex} 
              setHoveredIndex={setHoveredIndex} 
            />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={buttonVariants}
          className="flex justify-center mt-16 md:mt-20"
        >
          <Link href="/services">
            <button className="px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm md:text-base text-white transition-all duration-500 relative group overflow-hidden bg-white/5 border border-[#9306FF]/30 hover:border-[#9306FF] hover:shadow-[0_0_40px_rgba(147,6,255,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9306FF]/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore All Services{" "}
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}