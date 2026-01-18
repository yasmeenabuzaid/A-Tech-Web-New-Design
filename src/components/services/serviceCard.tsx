"use client";
import React from "react";
import { LucideIcon } from "lucide-react";

interface ServiceProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export const ServiceCard = ({ icon: Icon, title, description, features, color }: ServiceProps) => {
  return (
    <div
      className="group bg-white border-2 border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl"
      style={{ borderColor: "rgb(243 244 246)" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = color; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgb(243 244 246)"; }}
    >
      <div className="flex items-start gap-6">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${color}15` }} 
        >
          <Icon size={32} style={{ color: color }} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl mb-3 font-bold" style={{ color: "#031338" }}>
            {title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start text-sm text-gray-700">
                <span className="mr-2 mt-1 font-bold" style={{ color: color }}>
                  ▸
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};