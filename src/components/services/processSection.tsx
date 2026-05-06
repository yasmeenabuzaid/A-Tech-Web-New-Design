"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Search, Palette, Code, TestTube, Rocket, 
  Headphones, CheckCircle2, ChevronLeft, ChevronRight, 
  MousePointerClick, Sparkles, LucideIcon 
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  icon: LucideIcon;
  description: string;
  details: string;
  deliverables: string[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const steps: Step[] = [
  { number: "01", title: "Discovery", icon: Search, description: "Understanding Pain Points", details: "We dive deep into business challenges through interviews and process mapping to uncover root causes and define success metrics.", deliverables: ["Requirements Doc", "Technical Feasibility"] },
  { number: "02", title: "UI/UX Design", icon: Palette, description: "Prototyping & Wireframes", details: "Design is strategy. We create intuitive interfaces backed by user research, behavioral psychology, and your brand identity.", deliverables: ["Interactive Prototypes", "Design System"] },
  { number: "03", title: "Development", icon: Code, description: "Agile Sprints", details: "Senior engineers work in focused 2-week sprints, delivering working software incrementally with full transparency.", deliverables: ["Functional Software", "Sprint Demos"] },
  { number: "04", title: "QA & Testing", icon: TestTube, description: "Bug Squashing", details: "Quality is non-negotiable. We perform automated testing, security audits, and benchmarking to ensure absolute stability.", deliverables: ["Test Reports", "Security Audit"] },
  { number: "05", title: "Deployment", icon: Rocket, description: "Going Live", details: "Launch day is perfectly orchestrated. We handle cloud infrastructure configuration, data migrations, and system monitoring.", deliverables: ["Production Env", "Training Materials"] },
  { number: "06", title: "Maintenance", icon: Headphones, description: "Long-Term Partnership", details: "The relationship doesn't end at launch. We provide 24/7 monitoring, security patches, and continuous feature updates.", deliverables: ["24/7 Monitoring", "Roadmap Updates"] },
];

export const ProcessPreview: React.FC = () => (
  <section className="relative pb-16 z-10 text-center flex flex-col items-center justify-center min-h-[50vh]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={containerVariants} 
        className="max-w-3xl flex flex-col items-center"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm">
          <Sparkles size={14} className="text-[#d8b4ff]" />
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#d8b4ff]">Our Proven Methodology</span>
        </motion.div>
        
        <motion.h2 variants={fadeInUp} className="text-2xl md:text-5xl font-black mb-8 tracking-tighter leading-tight text-white">
          The <span className="text-[#9306FF]">A-Tech SDLC</span>
        </motion.h2>
        
        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl text-center px-4">
          Transparent, Methodical, Collaborative. Software development shouldn't feel like a black box. Our structured approach keeps you informed at every stage.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export const ProcessWheel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const ActiveIcon = activeStep.icon;

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % steps.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const anglePerStep = 360 / steps.length;

  return (
    <section className="py-16 md:py-24 relative flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-12 lg:hidden">
          <h2 className="text-3xl font-black text-white tracking-tight mb-4">The Engineering Wheel</h2>
          <p className="text-gray-400 font-light text-base">Interactive journey of our process.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col items-center order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-12 text-gray-500 text-[10px] md:text-sm font-medium uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <MousePointerClick size={16} className="text-[#9306FF] animate-pulse" />
              <span>Click any phase</span>
            </div>

            <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] flex items-center justify-center">
              
              <div className="absolute w-16 h-16 md:w-28 md:h-28 bg-white/5 border-2 border-[#9306FF] rounded-full flex items-center justify-center shadow-lg z-20 transition-all duration-500">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ scale: 0, opacity: 0, rotate: -90 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ActiveIcon className="text-white" size={28} />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute inset-6 md:inset-8 border border-white/10 rounded-full pointer-events-none" />
              <div className="absolute inset-12 md:inset-16 border border-white/5 rounded-full pointer-events-none" />

              <motion.div
                className="absolute inset-0 border-[1.5px] border-dashed border-white/20 rounded-full z-10"
                animate={{ rotate: -activeIndex * anglePerStep }}
                transition={{ type: "spring", stiffness: 40, damping: 15 }}
              >
                {steps.map((step, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <div
                      key={i}
                      className="absolute inset-0 pointer-events-none"
                      style={{ transform: `rotate(${i * anglePerStep}deg)` }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                        <motion.button
                          animate={{ rotate: activeIndex * anglePerStep - i * anglePerStep }}
                          transition={{ type: "spring", stiffness: 40, damping: 15 }}
                          onClick={() => setActiveIndex(i)}
                          className={`group relative w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center font-black text-sm md:text-lg transition-all duration-300 cursor-pointer
                            ${isActive 
                              ? 'bg-[#9306FF] text-white scale-110 md:scale-125 border-2 border-white z-30' 
                              : 'bg-transparent border border-white/20 text-gray-500 hover:text-white z-20'}
                          `}
                        >
                          <span className="relative z-10">{step.number}</span>
                        </motion.button>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <div className="mt-12 md:mt-16 flex items-center justify-center gap-6 bg-white/5 border border-white/10 px-6 py-3 rounded-full shadow-md">
              <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors">
                <ChevronLeft size={20} />
              </button>
              <span className="text-gray-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase w-20 md:w-24 text-center">
                {activeIndex + 1} OF {steps.length}
              </span>
              <button onClick={handleNext} className="w-10 h-10 rounded-full bg-[#9306FF] hover:bg-[#b04dff] flex items-center justify-center text-white transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative h-full flex flex-col justify-center order-1 lg:order-2">
            <div className="hidden lg:block mb-10">
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">The Engineering Wheel</h2>
              <p className="text-gray-400 font-light text-xl">Interactive journey of our process.</p>
            </div>

            <div className="relative bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-sm overflow-hidden min-h-[400px] md:min-h-[420px] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col h-full flex-grow"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl md:text-6xl font-black text-[#9306FF]">
                      {activeStep.number}
                    </span>
                    <div>
                      <span className="text-[#9306FF] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase block mb-1">
                        Phase {activeStep.number}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {activeStep.title}
                      </h3>
                    </div>
                  </div>

                  <h4 className="text-base md:text-lg text-gray-300 font-medium mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#9306FF]" />
                    {activeStep.description}
                  </h4>

                  <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                    {activeStep.details}
                  </p>
                  
                  <div className="border-t border-white/10 pt-6">
                    <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 block">Key Deliverables</span>
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                      {activeStep.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-medium text-gray-300">
                          <CheckCircle2 size={14} className="text-[#9306FF]" />
                          {item}
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 text-[10px] md:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300 px-4 py-2.5 md:px-5 md:py-2.5 rounded-full uppercase tracking-widest group"
                    >
                      Next Step
                      <ArrowRight size={16} className="text-[#9306FF] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProcessBenefits: React.FC = () => {
  const benefits = [
    { title: "Full Transparency", description: "Access our project management tools, view sprint progress in real-time, and participate in decision-making.", highlight: "Direct Access" },
    { title: "Risk Mitigation", description: "Early prototyping, continuous testing, and iterative development catch issues when they're easy to fix.", highlight: "Battle-Tested" },
    { title: "Faster Time-to-Market", description: "Agile sprints deliver working features every two weeks. Start seeing ROI before completion.", highlight: "Agile Sprints" }
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tighter">
            Why Our <span className="text-[#9306FF]">Process Works</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed px-4">
            Built on industry best practices and battle-tested over 500+ successful projects.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 relative group"
            >
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mb-6 px-3 py-1 bg-white/5 border border-white/10 rounded-full inline-block text-[#d8b4ff]">
                {benefit.highlight}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};