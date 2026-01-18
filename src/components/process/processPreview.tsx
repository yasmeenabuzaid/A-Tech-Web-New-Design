import React from "react";
import Link from "next/link"; 
import { ArrowRight } from "lucide-react";

export const ProcessPreview = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-12 border border-purple-100 shadow-sm">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "#031338" }}>
            From Concept to Launch in <span style={{ color: "#9306FF" }}>6 Strategic Steps</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our proven SDLC methodology ensures your project stays on time, on budget, and exceeds expectations. Every phase is collaborative, transparent, and focused on delivering real business value.
          </p>
          
          <Link href="/process">
            <button className="px-8 py-4 rounded-lg text-white font-bold transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2" 
                    style={{ backgroundColor: "#9306FF" }}>
              Explore Our Process
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);