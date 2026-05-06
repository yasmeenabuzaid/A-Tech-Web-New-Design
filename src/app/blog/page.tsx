"use client";

import { useState } from "react";
import { Calendar, Clock, ArrowRight, Search, Tag, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
  author: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 'unified-commerce-2025',
    title: 'Digital Transformation in Retail: Why Unified Commerce is Non-Negotiable in 2025',
    excerpt: 'The days of treating online and offline as separate channels are over. Modern consumers expect seamless experiences, and your systems must keep up. Here\'s how unified commerce drives real ROI...',
    date: 'December 10, 2025',
    readTime: '8 min read',
    category: 'Digital Transformation',
    author: 'Sarah Chen, Head of Retail Solutions',
    tags: ['Retail', 'E-commerce', 'Digital Transformation', 'Omnichannel'],
    content: [
      'The retail landscape has fundamentally changed. Customers no longer think in terms of "online" versus "in-store"—they expect a seamless experience regardless of where they interact with your brand. Yet many retailers still operate with fragmented systems that create friction at every turn.',

      '**The Cost of Fragmentation**\n\nConsider this scenario: A customer browses your website, adds items to their cart, but decides to complete the purchase in-store. With disconnected systems, that cart doesn\'t follow them. The in-store associate can\'t see their browsing history, preferences, or wishlist. You\'ve just lost valuable data and created a frustrating customer experience.',

      'Our research shows that retailers with fragmented systems experience:\n• 23% higher cart abandonment rates\n• 40% more customer service inquiries about stock availability\n• 18% lower customer lifetime value\n• An average of 12 hours per week spent on manual reconciliation',

      '**What is Unified Commerce?**\n\nUnified commerce goes beyond omnichannel. It\'s not just about being present on multiple channels—it\'s about having a single, centralized system that powers all of them. One inventory count. One customer profile. One source of truth.',

      '**The Bottom Line**\n\nUnified commerce isn\'t a luxury—it\'s table stakes for competing in 2025. Customers expect it. Your margins depend on it. The technology exists today to make it happen seamlessly.'
    ]
  }
];

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    "all",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen p-20 text-white ">
        
        <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Article Hero */}
        <article className="relative z-10 border-b border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#9306FF]/15 blur-[120px] rounded-full pointer-events-none z-0"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <button
              onClick={() => setSelectedPost(null)}
              className="text-gray-400 hover:text-[#d8b4ff] mb-8 flex items-center transition-colors group"
            >
              <ArrowRight size={16} className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </button>

            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="inline-block px-4 py-2 rounded-full mb-6 text-sm bg-[#9306FF]/10 border border-[#9306FF]/20 text-[#d8b4ff] shadow-[0_0_15px_rgba(147,6,255,0.15)]">
                {selectedPost.category}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-400 font-light border-t border-white/10 pt-6">
                <span className="text-white font-medium">{selectedPost.author}</span>
                <span className="flex items-center">
                  <Calendar size={16} className="mr-2 text-[#9306FF]" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-2 text-[#9306FF]" />
                  {selectedPost.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </article>

        {/* Article Content */}
        <div className="py-16 relative z-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
              className="prose prose-lg prose-invert max-w-none text-gray-300 font-light leading-relaxed"
            >
              {selectedPost.content.map((paragraph, index) => {
                if (paragraph.includes("**")) {
                  const parts = paragraph.split("**");
                  return (
                    <p key={index} className="mb-6">
                      {parts.map((part, i) =>
                        i % 2 === 1 ? (
                          <strong key={i} className="text-white font-bold tracking-wide">
                            {part}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                }
                else if (paragraph.includes("\n•")) {
                  const [intro, ...items] = paragraph.split("\n");
                  return (
                    <div key={index} className="mb-8 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-inner">
                      {intro && <p className="mb-4 text-white font-medium">{intro}</p>}
                      <ul className="space-y-3 ml-2">
                        {items.map((item, i) =>
                          item.startsWith("•") && (
                            <li key={i} className="flex items-start text-gray-300">
                              <span className="text-[#9306FF] mr-3 font-bold mt-1">•</span>
                              <span>{item.substring(1).trim()}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  );
                }
                else {
                  return <p key={index} className="mb-6">{paragraph}</p>;
                }
              })}
            </motion.div>

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 flex-wrap">
                <Tag size={20} className="text-[#9306FF]" />
                {selectedPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-[#9306FF]/10 border border-[#9306FF]/20 text-[#d8b4ff] rounded-full text-sm hover:bg-[#9306FF]/20 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

           
          </div>
        </div>
      </div>
    );
  }


  return (
    <section className="relative pb-20 z-10 overflow-hidden text-center flex flex-col items-center justify-center min-h-[60vh]">
      
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#9306FF]/15 blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9306FF]/10 border border-[#9306FF]/20 mb-6 shadow-[0_0_15px_rgba(147,6,255,0.15)]">
              <Sparkles size={14} className="text-[#d8b4ff]" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#d8b4ff]">A-Tech Knowledge Base</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              Insights & <span className="text-[#9306FF] drop-shadow-[0_0_30px_rgba(147,6,255,0.6)]">Expertise</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
              Deep dives into digital transformation, enterprise software strategy, and engineering superiority from our top minds.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- SEARCH & FILTER SECTION --- */}
      <section className="py-6 sticky top-0 z-40  backdrop-blur-xl border-y border-white/5 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="w-full md:w-96 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#9306FF] transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#9306FF]/50 focus:bg-[#9306FF]/5 focus:outline-none transition-all duration-300 shadow-inner"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                    selectedCategory === category
                      ? "bg-[#9306FF] text-white border-[#9306FF] shadow-[0_0_15px_rgba(147,6,255,0.4)]"
                      : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- BLOG POSTS GRID --- */}
      <section className="py-24 relative z-10 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence>
            {filteredPosts.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <Search size={32} className="text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-400 font-light">Try adjusting your search or category filter.</p>
              </motion.div>
            ) : (
              <motion.div 
                variants={containerVariants} initial="hidden" animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={fadeInUp}
                    onClick={() => setSelectedPost(post)}
                    className="bg-[#0B101E]/80 backdrop-blur-md border border-white/5 rounded-[2rem] overflow-hidden group cursor-pointer hover:border-[#9306FF]/40 hover:shadow-[0_0_40px_rgba(147,6,255,0.15)] transition-all duration-500 flex flex-col h-full"
                  >
                    {/* Featured Image Placeholder (Neon Style) */}
                    <div className="h-52 bg-[#05050A] relative overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9306FF]/20 to-transparent opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
                     <img 
    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
    alt={post.title}
    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
  />
                      
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#9306FF]/20 text-[#d8b4ff] border border-[#9306FF]/30 backdrop-blur-md">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-light">
                        <span className="flex items-center">
                          <Calendar size={14} className="mr-1.5 text-[#9306FF]" /> {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock size={14} className="mr-1.5 text-[#9306FF]" /> {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d8b4ff] transition-colors leading-snug tracking-tight">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 mb-8 text-sm leading-relaxed font-light line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto border-t border-white/10 pt-6 flex items-center justify-between">
                        <span className="text-xs text-gray-400 font-medium">
                          By {post.author.split(",")[0]}
                        </span>
                        <button className="flex items-center text-sm font-bold text-[#9306FF] group-hover:text-[#b047ff] transition-colors">
                          Read Article
                          <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* --- NEWSLETTER CTA --- */}
      <section className="py-24 relative z-10 border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#9306FF]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">Stay Ahead of the Curve</h2>
          <p className="text-xl text-gray-400 font-light mb-10">
            Get the latest engineering insights, system architecture strategies, and retail tech news delivered monthly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto bg-white/5 p-2 rounded-full border border-white/10 shadow-inner">
            <input
              type="email"
              placeholder="Enter your work email..."
              className="flex-1 px-6 py-4 rounded-full bg-transparent text-white placeholder-gray-500 focus:outline-none focus:bg-white/5 transition-colors"
            />
            <button className="px-8 py-4 rounded-full font-bold text-white bg-[#9306FF] hover:bg-[#a62eff] hover:shadow-[0_0_20px_rgba(147,6,255,0.4)] transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
    </section>
  );
}

export default Blog;