"use client";
import { Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="text-white py-20 relative overflow-hidden"
      style={{ backgroundColor: "#031338" }}
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "#9306FF" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Zap
              size={16}
              className="mr-2"
              style={{ color: "#9306FF" }}
            />
            <span className="text-sm">All-in-One Business OS</span>
          </div>
          <h1 className="text-5xl mb-6">
            Why Piece Together Tools When You Can Have{" "}
            <span style={{ color: "#9306FF" }}>One Powerful Ecosystem</span>?
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Our integrated ERP and Smart POS platform eliminates the chaos of
            disconnected systems. From inventory to accounting, everything works
            together seamlessly—so you can focus on growing your business, not
            managing software.
          </p>
          <button
            className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-xl"
            style={{ backgroundColor: "#9306FF" }}
          >
            Book a Live Demo
          </button>
        </div>
      </div>
    </section>
  );
}