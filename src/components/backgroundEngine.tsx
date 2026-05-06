'use client';
import React, { useState, useEffect, FC } from 'react';

const BackgroundEngine: FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      requestAnimationFrame(() => setMousePos({ x: e.clientX, y: e.clientY }));
    };

    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#030108]">
      
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { transform: translate(30px, -50px) scale(1.1) rotate(120deg); }
          66% { transform: translate(-20px, 20px) scale(0.9) rotate(240deg); }
          100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
        }
        .animate-blob {
          animation: blob 25s infinite alternate ease-in-out;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
      `}</style>

      <div className="absolute inset-0 w-full h-full opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[#9306FF]/20 mix-blend-screen blur-[120px] rounded-full animate-blob"></div>
        
        <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-[#4F46E5]/15 mix-blend-screen blur-[120px] rounded-full animate-blob animation-delay-2000"></div>
        
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] bg-[#7E22CE]/15 mix-blend-screen blur-[130px] rounded-full animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>

      <div 
        className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#9306FF15_1px,transparent_1px),linear-gradient(to_bottom,#9306FF15_1px,transparent_1px)] bg-[size:60px_60px] transition-opacity duration-300"
        style={{
          WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
        }}
      ></div>

      <div 
        className="absolute inset-0 z-20 transition-opacity duration-300 mix-blend-screen"
        style={{ 
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(147, 6, 255, 0.08), transparent 40%)` 
        }}
      />
      <div 
        className="absolute inset-0 z-30 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      <div className="absolute inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,#030108_100%)] opacity-80"></div>

    </div>
  );
}

export default BackgroundEngine;