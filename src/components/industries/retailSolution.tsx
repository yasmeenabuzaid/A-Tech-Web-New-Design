"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Package, CreditCard, BarChart3, LucideIcon } from "lucide-react";

interface PillarProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface FlowStep {
  num: string;
  text: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

const PillarCard: React.FC<PillarProps> = ({ icon: Icon, title, description, features, highlighted = false }) => (
  <motion.div 
    variants={itemVariants} 
    className={`${
      highlighted 
        ? "bg-gradient-to-br from-[#9306FF]/10 to-transparent border-[#9306FF]/30 shadow-[0_0_30px_rgba(147,6,255,0.1)]" 
        : "bg-white/[0.02] border-white/10 hover:border-white/20"
    } p-8 md:p-10 rounded-[2rem] transition-colors group relative overflow-hidden`}
  >
    {highlighted && <div className="absolute top-0 right-0 w-32 h-32 bg-[#9306FF]/20 blur-[50px]" />}
    
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 ${
      highlighted ? "bg-[#9306FF] shadow-[0_0_20px_rgba(147,6,255,0.5)]" : "bg-white/5 border border-white/10"
    }`}>
      <Icon size={30} className={highlighted ? "text-white" : "text-[#9306FF]"} />
    </div>

    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{title}</h3>
    
    <p className={`mb-8 font-light leading-relaxed ${highlighted ? "text-gray-300" : "text-gray-400"}`}>
      {description}
    </p>

    <ul className="space-y-3 text-sm font-light relative z-10">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start">
          <span className={`mr-3 mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
            highlighted ? "bg-[#d8b4ff] shadow-[0_0_8px_#d8b4ff]" : "bg-[#9306FF]"
          }`} />
          <span className={highlighted ? "text-gray-200" : "text-gray-300"}>{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export function RetailSolution() {
  const steps: FlowStep[] = [
    { num: "1", text: "Customer purchases in-store or online" },
    { num: "2", text: "Inventory instantly updates across channels" },
    { num: "3", text: "Transaction auto-records in accounting" },
    { num: "4", text: "Real-time reports show exact health" }
  ];

  return (
    <section className="py-20 md:py-32 text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 md:mb-20">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-white">

            Our <span className="text-[#9306FF] md:ml-3 drop-shadow-[0_0_30px_rgba(147,6,255,0.8)]">Solution : </span> <br className="hidden md:block"/>
            The Inventory + POS + Finance Loop
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }} 
            className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto px-4"
          >
            A seamlessly integrated system where every component works together automatically
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 md:mb-24"
        >
          <PillarCard 
            icon={Package}
            title="Smart Inventory"
            description="One source of truth for all your stock, whether it's in-store, online, or across multiple warehouses."
            features={["Multi-location tracking", "Automated stock alerts", "Barcode & SKU management", "Purchase order automation"]}
          />

          <PillarCard 
            icon={CreditCard}
            title="Unified POS"
            description="Lightning-fast checkout that automatically syncs with inventory and e-commerce. Accept any payment method."
            features={["Instant inventory deduction", "Multi-tender payments", "Customer loyalty integration", "Offline mode with sync"]}
            highlighted
          />

          <PillarCard 
            icon={BarChart3}
            title="Automated Finance"
            description="Every transaction automatically flows into your accounting system. No manual data entry, instant reports."
            features={["Auto-generated ledger entries", "Real-time P&L reports", "Tax calculation & reporting", "QuickBooks/Xero integration"]}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] relative overflow-hidden"
        >
          <h3 className="text-center text-2xl md:text-3xl font-bold mb-12 md:mb-16 text-white tracking-tight">How It All Connects</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-white/10 z-0">
               <motion.div 
                 initial={{ width: 0 }} 
                 whileInView={{ width: "100%" }} 
                 viewport={{ once: true }} 
                 transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                 className="h-full bg-gradient-to-r from-[#9306FF] via-[#d8b4ff] to-[#9306FF]"
               />
            </div>

            {steps.map((step, index) => (
              <div key={index} className="flex-1 text-center relative z-10 flex flex-col items-center w-full">
                <motion.div 
                  initial={{ scale: 0 }} 
                  whileInView={{ scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ type: "spring", delay: 0.5 + (index * 0.4) }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#030712] border-2 border-[#9306FF] shadow-[0_0_20px_rgba(147,6,255,0.4)]"
                >
                  <span className="text-white text-xl md:text-2xl font-black">{step.num}</span>
                </motion.div>
                <p className="text-sm md:text-base text-gray-300 font-light max-w-[200px] mx-auto px-2">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}