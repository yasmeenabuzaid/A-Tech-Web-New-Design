"use client";
import { FileText } from "lucide-react";

export function ResourcesHero() {
  return (
    <section
      className="text-white py-20"
      style={{ backgroundColor: "#031338" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <FileText
              size={16}
              className="mr-2"
              style={{ color: "#9306FF" }}
            />
            <span className="text-sm">Resources & Insights</span>
          </div>
          <h1 className="text-5xl mb-6">
            Learn From Real{" "}
            <span style={{ color: "#9306FF" }}>Success Stories</span>
          </h1>
          <p className="text-xl text-gray-300">
            Explore detailed case studies, industry insights, and practical
            guides from our work with hundreds of businesses across retail,
            hospitality, and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}