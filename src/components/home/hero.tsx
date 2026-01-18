"use client";
import React from "react";
import { Zap, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative text-white overflow-hidden" style={{ backgroundColor: "#031338" }}>
      {/* Background Blur Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: "#9306FF" }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: "#9306FF" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Zap size={16} className="mr-2" style={{ color: "#9306FF" }} />
              <span className="text-sm">Futuristic Stability</span>
            </div>

            <h1 className="text-5xl lg:text-6xl mb-6 leading-tight font-bold">
              Empowering Business with <span style={{ color: "#9306FF" }}>Custom Code</span> & <span style={{ color: "#9306FF" }}>Complete Ecosystems</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We don&apos;t just build software—we architect digital transformation. From bespoke enterprise solutions to our powerful all-in-one ERP/POS platform, we deliver innovation backed by proven methodology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-lg text-white flex items-center justify-center group transition-all hover:shadow-[0_0_20px_rgba(147,6,255,0.4)]" style={{ backgroundColor: "#9306FF" }}>
                Build a Solution
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              <button className="px-8 py-4 rounded-lg border-2 flex items-center justify-center group transition-all hover:bg-white/10" style={{ borderColor: "#9306FF", color: "#9306FF" }}>
                Try Our ERP
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>

          {/* Right Visual (The Code and Dashboard Card) */}
          <div className="relative">
            <div className="rounded-2xl p-8 backdrop-blur-sm border border-white/20" style={{ background: "linear-gradient(135deg, rgba(147, 6, 255, 0.1) 0%, rgba(3, 19, 56, 0.3) 100%)" }}>
              {/* Code Snippet */}
              <div className="bg-[#1a1a2e] rounded-lg p-6 mb-4 font-mono shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm">
                  <div className="text-purple-400">const <span className="text-blue-300">solution</span> = {"{"}</div>
                  <div className="ml-4 text-gray-300">custom: <span className="text-green-300">&apos;tailored&apos;</span>,</div>
                  <div className="ml-4 text-gray-300">scalable: <span className="text-green-300">true</span>,</div>
                  <div className="ml-4 text-gray-300">ecosystem: <span className="text-yellow-300">[&apos;ERP&apos;, &apos;POS&apos;]</span></div>
                  <div className="text-purple-400">{"}"};</div>
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="bg-white rounded-lg p-4 shadow-xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-600 font-medium">Dashboard Overview</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#9306FF" }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-12 rounded" style={{ backgroundColor: "rgba(147, 6, 255, 0.1)" }}></div>
                  <div className="h-12 rounded" style={{ backgroundColor: "rgba(147, 6, 255, 0.2)" }}></div>
                  <div className="h-12 rounded" style={{ backgroundColor: "rgba(147, 6, 255, 0.3)" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};