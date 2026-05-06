"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShoppingCart, CheckCircle, BarChart3, ExternalLink, ArrowRight } from "lucide-react";

interface ProductCard3DProps {
  children: React.ReactNode;
  glowColor: string;
}

const ProductCard3D: React.FC<ProductCard3DProps> = ({ children, glowColor }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative h-full p-8 md:p-12 rounded-[2.5rem] overflow-hidden transition-all duration-500 ease-out transform preserve-3d
        bg-gradient-to-br from-white/[0.03] to-[${glowColor}]/[0.02] backdrop-blur-md border 
        ${isHovered ? `border-[#9306FF]/50 shadow-[0_0_50px_rgba(147,6,255,0.15)] scale-[1.01] md:scale-[1.02]` : "border-white/10"}
      `}
    >
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ transform: "translateZ(0px)" }}>
        <div
          className={`absolute top-0 right-0 w-[300px] h-[300px] bg-[${glowColor}]/10 blur-[100px] rounded-full transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      {children}
    </motion.div>
  );
};

export function CoreProducts() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const posFeatures = [
    "Intuitive interface that requires zero training",
    "Multi-tender payments (cash, card, mobile, gift cards)",
    "Offline mode with auto-sync",
    "Built-in receipt printing & email",
  ];

  const erpFeatures = [
    "Complete business management (see features below)",
    "Role-based access for unlimited users",
    "Custom workflows & automation",
    "Real-time analytics & reporting",
    "Feature request",
  ];

  return (
    <section className="py-10 md:py-22 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-[#9306FF]/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
            Two Core Products,<br />
            <span className="text-[#9306FF] drop-shadow-[0_0_20px_rgba(147,6,255,0.4)]">Infinite Possibilities</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            Choose one or both—they work even better together
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative perspective-[2000px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full"
          >
            <ProductCard3D glowColor="#9306FF">
              <div className="relative z-10 h-full flex flex-col" style={{ transform: "translateZ(30px)" }}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 md:mb-10 gap-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#9306FF]/10 border border-[#9306FF]/30 shadow-[0_0_30px_rgba(147,6,255,0.3)]">
                    <ShoppingCart size={32} className="text-[#d8b4ff] md:hidden" />
                    <ShoppingCart size={36} className="text-[#d8b4ff] hidden md:block" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white sm:text-right">
                    Smart POS
                  </h3>
                </div>

                <p className="text-base md:text-lg mb-8 md:mb-10 text-gray-300 leading-relaxed font-light min-h-0 lg:min-h-[120px]">
                  Lightning-fast, touch-friendly point of sale designed for high-volume environments. Process transactions in seconds, accept all payment types, and work offline when the internet goes down.
                </p>

                <div className="bg-white/[0.02] rounded-2xl p-6 md:p-8 mb-8 md:mb-10 border border-white/5" style={{ transform: "translateZ(20px)" }}>
                  <ul className="space-y-4">
                    {posFeatures.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle size={20} className="mr-3.5 mt-1 flex-shrink-0 text-[#9306FF] drop-shadow-[0_0_8px_rgba(147,6,255,0.5)]" />
                        <span className="text-gray-200 text-sm md:text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-white/10 mt-auto" style={{ transform: "translateZ(25px)" }}>
                  <a href="https://atech-workspace.com" target="_blank" rel="noopener noreferrer" className="block sm:inline-block w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-white transition-all duration-300 bg-[#9306FF] hover:bg-[#7a05d6] hover:shadow-[0_0_30px_rgba(147,6,255,0.4)] flex items-center justify-center">
                      Open <ExternalLink size={18} className="ml-2" />
                    </button>
                  </a>
                </div>
              </div>
            </ProductCard3D>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <ProductCard3D glowColor="#9306FF">
              <div className="relative z-10 h-full flex flex-col" style={{ transform: "translateZ(30px)" }}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 md:mb-10 gap-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                    <BarChart3 size={32} className="text-white md:hidden" />
                    <BarChart3 size={36} className="text-white hidden md:block" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white sm:text-right">
                    In-House ERP
                  </h3>
                </div>

                <p className="text-base md:text-lg mb-8 md:mb-10 text-gray-300 leading-relaxed font-light min-h-0 lg:min-h-[120px]">
                  The nerve center of your business. Manage everything from procurement to payroll in one unified platform. Customizable to your industry, scalable as you grow.
                </p>

                <div className="bg-white/[0.02] rounded-2xl p-6 md:p-8 mb-8 md:mb-10 border border-white/5" style={{ transform: "translateZ(20px)" }}>
                  <ul className="space-y-4">
                    {erpFeatures.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle size={20} className="mr-3.5 mt-1 flex-shrink-0 text-white/70" />
                        <span className="text-gray-200 text-sm md:text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-white/10 mt-auto" style={{ transform: "translateZ(25px)" }}>
                  <a href="https://atech-workspace.com/sales-requests" target="_blank" rel="noopener noreferrer" className="block sm:inline-block w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-white transition-all duration-300 bg-white/5 border border-white/20 hover:border-[#9306FF]/60 hover:bg-[#9306FF]/10 hover:shadow-[0_0_30px_rgba(147,6,255,0.2)] flex items-center justify-center group">
                      Get Demo <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </a>
                </div>
              </div>
            </ProductCard3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
}