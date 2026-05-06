"use client";

import React, { FC } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactInfo: FC = () => {
  return (
    <div className="lg:col-span-2 text-white bg-transparent p-4 sm:p-6 md:p-8 lg:p-0">
      <div className="sticky top-24 space-y-12">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight" style={{ color: "#9306FF" }}>
            Get In Touch
          </h2>
          <p className="text-base leading-relaxed max-w-2xl text-gray-100">
            We&apos;re excited to learn about your project. Our team typically responds
            within a few hours during business hours.
          </p>
        </div>

        <div className="space-y-10">
          <div className="flex items-start gap-5 group">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
              style={{ backgroundColor: "rgba(147, 6, 255, 0.1)" }}
            >
              <Mail size={24} style={{ color: "#9306FF" }} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2" style={{ color: "#9306FF" }}>
                Email Us
              </h4>
              <a href="mailto:support@a-tech.dev" className="text-base text-gray-100 hover:text-white transition-colors block font-medium">
                support@a-tech.dev
              </a>
              <p className="text-sm text-gray-400 mt-1 font-light">
                We&apos;ll respond within 24 hours
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 group">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
              style={{ backgroundColor: "rgba(147, 6, 255, 0.1)" }}
            >
              <Phone size={24} style={{ color: "#9306FF" }} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2" style={{ color: "#9306FF" }}>
                Call Us
              </h4>
              <div className="space-y-1 text-base text-gray-100 font-medium">
                <a href="tel:+962779300014" className="block hover:text-white transition-colors tracking-wide">+962 77 930 0014</a>
                <a href="tel:+962771016006" className="block hover:text-white transition-colors tracking-wide">+962 77 101 6006</a>
                <a href="tel:+962795240885" className="block hover:text-white transition-colors tracking-wide">+962 79 524 0885</a>
              </div>
              <p className="text-sm text-gray-400 mt-1 font-light">
                Sun-Thu
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 group">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
              style={{ backgroundColor: "rgba(147, 6, 255, 0.1)" }}
            >
              <MapPin size={24} style={{ color: "#9306FF" }} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2" style={{ color: "#9306FF" }}>
                Visit Us
              </h4>
              <p className="text-base text-gray-100 font-medium leading-relaxed">
                Almadina Almonawara Street,<br/> Alsa&apos;ad 5 Building, Office 309
              </p>
              <p className="text-base text-gray-100 font-bold mt-1">
                Jordan, Amman
              </p>
            </div>
          </div>
        </div>

<div className="w-full h-40 md:h-55 bg-gray-200 rounded-3xl overflow-hidden shadow-xl relative group border border-gray-800">
  <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition" />
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.4747214838567!2d35.86469021155921!3d31.988636073894686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1544cb3015f%3A0x13a42b4e25f64d8a!2sA-tech!5e1!3m2!1sen!2sjo!4v1765843855103!5m2!1sen!2sjo"
    className="absolute inset-0 w-full h-full border-0 grayscale-0 transition"
    loading="lazy"
    title="A-tech Location Map"
  />
</div>
      </div>
    </div>
  );
};

export default ContactInfo;