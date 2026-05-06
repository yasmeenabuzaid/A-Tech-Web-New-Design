"use client";
import React from "react";
import { ServicesHero } from "@/components/services/servicesHero";
import { ServicesGrid } from "@/components/services/servicesGrid";
import { TechStack } from "@/components/services/techStack";
import { ProcessPreview, ProcessWheel, ProcessBenefits } from '@/components/services/processSection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">      
      <ServicesHero />
      <ServicesGrid />
      <TechStack />
      
      <ProcessPreview />
      <ProcessWheel />
      <ProcessBenefits />
    </div>
  );
}