import React from "react";
import { Code2, Boxes, ArrowRight } from "lucide-react";

export const DualOffering = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Custom Development Card */}
          <div className="p-12 rounded-2xl text-white relative overflow-hidden group cursor-pointer" style={{ backgroundColor: "#031338" }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: "#9306FF" }} />
            </div>
            <div className="relative z-10">
              <Code2 size={48} style={{ color: "#9306FF" }} className="mb-6" />
              <h3 className="text-3xl font-bold mb-4">Custom Software Development</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">From web platforms to mobile apps, we build exactly what your business needs.</p>
              <ul className="space-y-3 mb-8">
                {["Web & Mobile Applications", "Cloud Infrastructure & DevOps", "API Integration & Automation"].map((text, i) => (
                  <li key={i} className="flex items-center">
                    <ArrowRight size={20} className="mr-2 text-[#9306FF]" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center font-bold text-[#9306FF] group/btn">
                Explore Services <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Business OS Card */}
          <div className="p-12 rounded-2xl text-white relative overflow-hidden group cursor-pointer" style={{ background: "linear-gradient(135deg, #9306FF 0%, #6d05cc 100%)" }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl bg-white/20" />
            </div>
            <div className="relative z-10">
              <Boxes size={48} className="mb-6 text-white" />
              <h3 className="text-3xl font-bold mb-4">All-in-One Business OS</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">integrated ERP and POS platform gives you everything in one unified system.</p>
              <ul className="space-y-3 mb-8">
                {["Smart POS & Payments", "Real-Time Inventory", "Integrated HR & CRM"].map((text, i) => (
                  <li key={i} className="flex items-center">
                    <ArrowRight size={20} className="mr-2 text-white/70" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center font-bold text-white group/btn">
                View Products <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};