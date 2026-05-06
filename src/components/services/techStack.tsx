"use client";
import React from "react";
import { motion } from "framer-motion";

export const TechStack: React.FC = () => {
  const techStackData = [
    { category: "Frontend", skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Vue.js & Angular"] },
    { category: "Backend", skills: ["Node.js & Express", "Python & Django", ".NET Core", "Ruby on Rails","Laravel"] },
    { category: "Mobile", skills: ["React Native", "Swift (iOS)", "Kotlin (Android)", "Flutter"] },
    { category: "Cloud & DevOps", skills: ["AWS & Azure", "Docker & Kubernetes", "GitHub Actions", "Terraform"] }
  ];

  return (
    <section className="py-20 md:py-32 relative z-10 border-t border-white/5 ">
      <div className="absolute bottom-0 right-0 w-full max-w-[500px] h-[500px] bg-[#9306FF]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tighter">Our Technology Arsenal</h2>
          <p className="text-base md:text-xl text-gray-400 font-light max-w-2xl mx-auto px-4">
            We work with industry-leading frameworks to ensure your product scales flawlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {techStackData.map((stack, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-[#9306FF]/30 transition-all duration-500 group text-left"
            >
              <div className="h-1 w-12 bg-gradient-to-r from-[#9306FF] to-transparent rounded-full mb-6 group-hover:w-full transition-all duration-700" />
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">{stack.category}</h3>
              <ul className="space-y-4">
                {stack.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-sm md:text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9306FF]/50 mr-3 shadow-[0_0_8px_#9306FF]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};