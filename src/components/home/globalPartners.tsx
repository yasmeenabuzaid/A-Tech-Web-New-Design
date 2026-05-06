"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { MapPin, Share2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface Particle {
  id: number;
  size: number;
  top: string;
  left: string;
  moveX: number;
  moveY: number;
  duration: number;
}

interface mousePos {
  x: number;
  y: number;
}

interface FeatureItem {
  title: string;
  desc: string;
}

export default function GlobalPartners(): ReactNode {
  const [mousePos, setMousePos] = useState<mousePos>({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [bgX, setBgX] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const x = (e.clientX - window.innerWidth / 2) / 10;
      const y = (e.clientY - window.innerHeight / 2) / 15;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let currentX = 0;
    const animate = (): void => {
      currentX -= 1.2;
      setBgX(currentX);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const generatedParticles: Particle[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      moveX: (Math.random() - 0.5) * 100,
      moveY: (Math.random() - 0.5) * 100,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(generatedParticles);
  }, []);

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const featureItems: FeatureItem[] = [
    { title: 'Global Presence', desc: 'Active operations and partnerships spanning multiple continents.' },
    { title: 'Unified Network', desc: 'Building bridges through robust technological solutions.' }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-12 md:py-24 overflow-hidden ">
      <style>{`
        .perspective-view { perspective: 2500px; }
        .preserve-3d { transform-style: preserve-3d; }
        .earth-map-texture {
          background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/The_earth_at_night.jpg/1280px-The_earth_at_night.jpg');
          background-size: auto 100%;
          background-repeat: repeat-x;
          filter: grayscale(40%) brightness(1.2) contrast(1.1);
        }
        .earth-overlay-purple {
          background: rgba(147, 6, 255, 0.5); 
          mix-blend-mode: color;
        }
        .earth-glow-overlay {
           background: radial-gradient(circle at center, rgba(147, 6, 255, 0.4) 0%, rgba(5, 0, 15, 0.4) 100%);
           mix-blend-mode: screen; 
        }
      `}</style>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#9306FF]/50"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              boxShadow: `0 0 12px rgba(147,6,255,0.8)`
            }}
            animate={{ x: [0, p.moveX, 0], y: [0, p.moveY, 0], opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            className="relative h-[400px] sm:h-[500px] lg:h-[550px] flex justify-center items-center perspective-view order-2 lg:order-1"
          >
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] bg-[#9306FF]/30 rounded-full blur-[100px] sm:blur-[120px] lg:blur-[140px] mix-blend-screen"></div>
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 preserve-3d relative flex justify-center items-center">
              <div 
                className="absolute inset-0 rounded-full overflow-hidden earth-map-texture z-10"
                style={{ 
                  backgroundPositionX: `${bgX + (mousePos.x * 5)}px`,
                  backgroundPositionY: `${mousePos.y}px`
                }}
              >
                <div className="absolute inset-0 earth-overlay-purple rounded-full"></div>
                <div className="absolute inset-0 earth-glow-overlay rounded-full"></div>
              </div>
              <div 
                className="absolute inset-0 rounded-full pointer-events-none z-20"
                style={{
                  boxShadow: `
                    inset -20px -15px 40px rgba(0, 0, 0, 0.7), 
                    inset 10px 10px 30px rgba(147, 6, 255, 0.4), 
                    inset 0 0 10px rgba(255, 255, 255, 0.1)
                  `
                }}
              ></div>
              <div 
                className="absolute inset-0 preserve-3d z-30 transition-transform duration-300 ease-out"
                style={{ transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)` }}
              >
                <div className="absolute inset-[-25px] sm:inset-[-35px] lg:inset-[-40px] rounded-full border-[1.5px] border-[#9306FF]/30 preserve-3d" style={{ transform: 'rotateX(65deg) rotateY(25deg)' }}>
                  <div className="w-full h-full animate-[spin_4s_linear_infinite] relative">
                    <div className="absolute top-0 left-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full shadow-[0_0_15px_#fff,0_0_30px_#9306FF] -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                <div className="absolute inset-[-10px] sm:inset-[-15px] lg:inset-[-20px] rounded-full border border-[#9306FF]/20 preserve-3d" style={{ transform: 'rotateX(110deg) rotateY(-20deg)' }}>
                  <div className="w-full h-full animate-[spin_7s_linear_infinite_reverse] relative">
                    <div className="absolute top-0 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#9306FF] rounded-full shadow-[0_0_10px_#9306FF] -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                <div className="absolute inset-[-45px] sm:inset-[-55px] lg:inset-[-65px] rounded-full border border-white/10 preserve-3d" style={{ transform: 'rotateX(45deg) rotateY(-45deg)' }}>
                  <div className="w-full h-full animate-[spin_10s_linear_infinite] relative">
                    <div className="absolute top-1/4 left-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#d8b4ff] rounded-full shadow-[0_0_12px_#d8b4ff] -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.div variants={fadeInUpVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#9306FF]/40 bg-[#9306FF]/15 mb-6 md:mb-8 shadow-[0_0_15px_rgba(147,6,255,0.2)]">
              <Share2 size={14} className="text-[#d8b4ff]" />
              <span className="text-[#d8b4ff] text-[10px] sm:text-xs font-bold uppercase tracking-widest">Global Reach, Boundless Vision</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUpVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 tracking-tighter leading-tight text-white max-w-xl lg:max-w-none">
              CONNECTING <br/> 
              <span className="text-[#9306FF] drop-shadow-[0_0_30px_rgba(147,6,255,0.8)]">THE WORLD.</span>
            </motion.h2>
            
            <motion.p variants={fadeInUpVariants} className="text-base sm:text-lg text-gray-300 mb-10 md:mb-12 font-medium leading-relaxed max-w-xl">
              We operate across all corners of the globe, driven by the belief that true innovation knows no borders. Empowering businesses worldwide with seamless integration and shared excellence.
            </motion.p>

            <motion.div variants={fadeInUpVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl lg:max-w-none">
              {featureItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/5 border border-[#9306FF]/10 p-6 rounded-3xl hover:bg-[#9306FF]/10 hover:border-[#9306FF]/40 hover:shadow-[0_0_20px_rgba(147,6,255,0.15)] transition-all duration-500 group text-left"
                >
                  <h4 className="text-[#d8b4ff] font-bold mb-2 flex items-center gap-2">
                    <MapPin size={16} className="text-[#9306FF]" /> {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}