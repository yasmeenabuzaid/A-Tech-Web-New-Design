"use client";

import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";

interface Client {
  name: string;
  logoUrl: string;
  website?: string;
}

const clients: Client[] = [
  { name: "JKT Networks", logoUrl: "/logos/jkt.png", website: "https://www.jktnetworks.com/en" },
  { name: "JIBA Jordan", logoUrl: "/logos/jiba.png", website: "https://jibajordan.com/en" },
  { name: "ExPickup", logoUrl: "/logos/expickup.png", website: "https://expickup.net/" },
  { name: "Venus For Chemicals", logoUrl: "/logos/venus.png", website: "#" },
  { name: "Velar Chocolate", logoUrl: "/logos/velarchocolate.png", website: "#" },
  { name: "Jordan Hub", logoUrl: "/logos/jordanHub.png", website: "https://www.jordan-hub.com/en" },
  { name: "Rak Bank", logoUrl: "/logos/rakBank.png", website: "#" },
  { name: "Evo Platform", logoUrl: "/logos/evoPlatform.png", website: "#" },
];

const duplicatedClients: Client[] = [...clients, ...clients, ...clients];

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const tickerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 1, delay: 0.2 } 
  }
};

const ClientShowcase: FC = () => {
  return (
    <section className="py-24 relative overflow-hidden ">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          display: flex;
          width: fit-content;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 25s;
          }
        }
      `}</style>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-[#9306FF]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.5 }} 
          variants={fadeInUpVariants}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#9306FF]/30 bg-[#9306FF]/10 mb-6 shadow-[0_0_15px_rgba(147,6,255,0.2)]">
            <Star size={16} className="text-[#9306FF]" fill="#9306FF" />
            <span className="text-[#9306FF] text-xs font-bold uppercase tracking-widest">Trusted Partners</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6">
            Empowering <span className="text-[#9306FF] drop-shadow-[0_0_20px_rgba(147,6,255,0.5)]">Industry Leaders.</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-6">
            From robust networks to seamless logistics and retail, we engineer the digital backbone for ambitious enterprises pushing the boundaries of their industries.
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm italic font-light">
            <ShieldCheck size={14} className="text-[#9306FF]/60" />
            <span>Some platforms remain private or restricted per client privacy requests.</span>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tickerVariants}
          className="w-full overflow-hidden relative"
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          <div className="animate-scroll gap-16 md:gap-24 py-8 items-center">
            {duplicatedClients.map((client, idx) => {
              const isLink = client.website && client.website !== "#";
              
              const content = (
                <div className="flex flex-col items-center justify-center group min-w-max">
                  <img 
                    src={client.logoUrl} 
                    alt={`${client.name} Logo`} 
                    className="h-12 md:h-16 w-auto object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(147,6,255,0.4)] transition-all duration-500"
                  />
                  <span className="mt-4 text-[10px] md:text-xs font-bold text-[#9306FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest">
                    {client.name}
                  </span>
                </div>
              );

              return isLink ? (
                <a 
                  key={idx} 
                  href={client.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  {content}
                </a>
              ) : (
                <div key={idx} className="cursor-default">
                  {content}
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ClientShowcase;