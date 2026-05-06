import React from "react";
import { Hero } from "../components/home/hero";
import { Features } from "../components/home/features";
import { DualOffering } from "../components/home/dualOffering";
import { StatsSection } from "../components/home/statsAndCTA"; 
import {ContactSection}  from "../components/home/contactSection"; 

import PartnerCarousel from "../components/home/partnerCarousel";
import GlobalPartners from "../components/home/globalPartners";
import HomeServices from "../components/home/homeServices";
import { ContactForm} from "../components/contactUs/contactForm";
import { ContactInfo} from "../components/contactUs/contactInfo";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:text-white font-sans overflow-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#9306FF]/5 blur-[150px] pointer-events-none z-0"></div>

      <div className="relative z-10">
        <Hero />
        <Features />
        <GlobalPartners />
        <HomeServices />
        <DualOffering />
        <PartnerCarousel />
        <StatsSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 text-white">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}