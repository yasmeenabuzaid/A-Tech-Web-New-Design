"use client";

import React from "react";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";
import Link from "next/link"; 

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-transparent text-gray-400 border-t border-white/5 overflow-hidden z-10">
      
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#9306FF]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <img
                src="/images/logo-light.png"
                alt="A-Tech Logo"
                className="h-8 w-auto relative z-10 transition-transform group-hover:scale-105 duration-500"
              />
            </Link>
            <p className="text-sm leading-relaxed font-light mb-8 max-w-sm">
              Empowering global enterprises with bespoke architecture, custom code, and seamlessly integrated digital ecosystems.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/a-tech" },
                { icon: Facebook, href: "https://www.facebook.com/atech.jo" }, 
                { icon: Instagram, href: "https://www.instagram.com/atech.jo" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#9306FF] hover:border-[#9306FF] hover:text-white hover:shadow-[0_0_15px_rgba(147,6,255,0.4)] transition-all duration-300 group"
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Solutions</h3>
            <ul className="space-y-4">
              {[
                { name: "Custom Development", href: "/custom-project" },
                { name: "ERP & POS Products", href: "https://a-tech-store.vercel.app/en" },
                { name: "Our Process", href: "/process" },
                { name: "Blog Insights", href: "/blog" }
              ].map((link, idx) => (
                <li key={idx}>
                  {link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-light hover:text-white transition-colors group flex items-center">
                      <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-[#9306FF] transition-all duration-300" />
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm font-light hover:text-white transition-colors group flex items-center">
                      <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-[#9306FF] transition-all duration-300" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Connect</h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start group cursor-default">
                <Mail size={18} className="mr-3 text-gray-500 group-hover:text-[#9306FF] transition-colors mt-0.5" />
                <a href="mailto:support@a-tech.dev" className="hover:text-white transition-colors">support@a-tech.dev</a>
              </li>
              <li className="flex items-start group cursor-default">
                <Phone size={18} className="mr-3 text-gray-500 group-hover:text-[#9306FF] transition-colors mt-0.5" />
                <div className="flex flex-col space-y-2">
                  <a href="tel:+962779300014" className="hover:text-white transition-colors">+962 779 300 014</a>
                  <a href="tel:+962771016006" className="hover:text-white transition-colors">+962 771 016 006</a>
                  <a href="tel:+962795240885" className="hover:text-white transition-colors">+962 795 240 885</a>
                </div>
              </li>
              <li className="flex items-start group cursor-default pt-2">
                <MapPin size={18} className="mr-3 text-gray-500 group-hover:text-[#9306FF] transition-colors mt-0.5" />
                <span>Amman, Jordan<br/>Aqaba, Jordan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
          <p>&copy; {new Date().getFullYear()} A-Tech. All rights reserved.</p>
          <div className="flex space-x-6">
            {/* <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link> */}
            {/* <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};