"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Clock, FileText } from "lucide-react";

export function BlogPosts() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const blogPosts = [
    { title: "Digital Transformation in Retail: Why Unified Commerce is Non-Negotiable in 2025", excerpt: "The days of treating online and offline as separate channels are over. Modern consumers expect seamless experiences, and your systems must keep up. Here's how unified commerce drives real ROI...", date: "Dec 10, 2025", readTime: "8 min", category: "Transformation" },
    { title: "The Hidden Cost of Manual Inventory Management (And How to Fix It)", excerpt: "Spreadsheets and gut feelings might have worked in 2010, but they're costing you thousands monthly in 2025. We break down the real impact of outdated inventory practices and the path forward...", date: "Dec 5, 2025", readTime: "6 min", category: "Operations" },
    { title: "Why Custom ERPs Beat Off-the-Shelf Software for Growing Businesses", excerpt: "Generic ERPs force you to change your processes to fit their limitations. Custom-built systems do the opposite—they amplify your competitive advantages. Here's when customization makes financial sense...", date: "Nov 28, 2025", readTime: "10 min", category: "Software" },
  ];

  return (
    <section className="py-32  text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-tight">Latest Insights</h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl">Expert perspectives on digital transformation, retail innovation, and enterprise software</p>
          </div>
          <button className="text-[#9306FF] font-semibold flex items-center gap-2 hover:text-[#d8b4ff] transition-colors">
            View All Articles <ArrowRight size={20} />
          </button>
        </div>

        {/* Interactive List Layout */}
        <div className="border-t border-white/10">
          {blogPosts.map((post, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.article
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group border-b border-white/10 py-8 relative cursor-pointer overflow-hidden transition-all duration-500"
              >
                {/* Hover Background Reveal */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#9306FF]/5 to-transparent transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />

                <div className="grid md:grid-cols-12 gap-6 items-center relative z-10 px-4">
                  
                  {/* Meta Info (Left) */}
                  <div className="md:col-span-3 flex flex-col gap-2">
                    <span className="text-[#9306FF] font-bold text-sm tracking-widest uppercase">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                      <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
                      <span className="flex items-center"><Clock size={14} className="mr-1" /> {post.readTime}</span>
                    </div>
                  </div>

                  {/* Title & Excerpt (Middle) */}
                  <div className="md:col-span-8">
                    <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-300'}`}>
                      {post.title}
                    </h3>
                    
                    {/* Animated Excerpt Reveal on Hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-400 font-light leading-relaxed">
                            {post.excerpt}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Icon/Arrow (Right) */}
                  <div className="md:col-span-1 flex justify-end items-center">
                    <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-[#9306FF] border-[#9306FF] text-white shadow-[0_0_20px_rgba(147,6,255,0.4)]' : 'border-white/20 text-gray-500'}`}>
                      <ArrowRight size={20} className={`transition-transform duration-300 ${isHovered ? '-rotate-45' : 'rotate-0'}`} />
                    </div>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}