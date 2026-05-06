"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ from, to, duration = 2 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOutProgress * (to - from) + from);
        
        if (ref.current) {
          ref.current.textContent = currentCount.toString();
        }
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{from}</span>;
};

export function StatsSection() {
  const stats = [
    { label: "Enterprise Projects", value: 500, suffix: "+" },
    { label: "System Uptime", value: 99, suffix: ".9%" },
    { label: "Dedicated Support", value: "24/7", isStatic: true },
  ];

  return (
    <section className="w-full py-20 flex justify-center items-center bg-transparent">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden py-20 md:py-24">
          
          <div className="absolute top-0 left-[-50%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-45deg] animate-[shimmer_8s_infinite] pointer-events-none opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center flex flex-col items-center justify-center"
              >
                <div className="text-6xl md:text-7xl font-black mb-4 tracking-tighter text-white flex items-baseline">
                  {stat.isStatic ? (
                    stat.value
                  ) : (
                    <>
                      <AnimatedCounter from={0} to={stat.value as number} />
                      <span className="text-white ml-1">{stat.suffix}</span>
                    </>
                  )}
                </div>
                <h4 className="text-xs md:text-sm font-semibold text-white uppercase tracking-[0.2em] opacity-60">
                  {stat.label}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}