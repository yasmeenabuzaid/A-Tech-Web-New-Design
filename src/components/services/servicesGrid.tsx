"use client";

import React from "react";
import { Smartphone, Globe, Cloud, Plug, Database, Lock, Zap, BarChart } from "lucide-react";
import { ServiceCard } from "./serviceCard";

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Modern, responsive web platforms built with React, Next.js, and cutting-edge frameworks.",
    features: ["Progressive Web Apps (PWA)", "Enterprise dashboards", "E-commerce platforms", "Real-time collaboration tools"],
    color: "#9306FF",
  },
  {
    icon: BarChart,
    title: "Data Analytics & BI",
    description: "Turn raw data into actionable insights with custom analytics solutions.",
    features: ["Custom dashboards", "Predictive analytics", "Data visualization", "BI integration"],
    color: "#031338",
  },
];

export const ServicesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};