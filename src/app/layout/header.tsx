"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { motion, AnimatePresence } from "framer-motion";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  
  const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "Our Process", href: "/process" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#030308]/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9306FF]/30 to-transparent opacity-50"></div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer group relative">
            <div className="absolute inset-0 bg-[#9306FF]/20 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="/images/logo-light.png" 
              alt="A-Tech Logo"
              className="w-auto h-8 relative z-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5" 
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground" 
                      className="absolute inset-0 rounded-full bg-[#9306FF]/10 border border-[#9306FF]/20 shadow-[0_0_15px_rgba(147,6,255,0.1)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white overflow-hidden transition-all hover:border-[#9306FF]/50 hover:shadow-[0_0_20px_rgba(147,6,255,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#9306FF]/0 via-[#9306FF]/10 to-[#9306FF]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Get a Quote</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#05050a]/95 backdrop-blur-3xl border-b border-white/10 shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "text-[#9306FF] bg-[#9306FF]/5 font-semibold" 
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 px-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#9306FF] to-[#6d05cc] text-white font-semibold shadow-[0_0_20px_rgba(147,6,255,0.3)]"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};