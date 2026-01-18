"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <img
              src="/images/logo.png"
              className="w-30 h-10 rounded-lg flex items-center justify-center"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#9306FF] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/process"
              className="text-gray-700 hover:text-[#9306FF] transition-colors"
            >
              Our Process
            </Link>
            <Link
              href="/Serviceses"
              className="text-gray-700 hover:text-[#9306FF] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/Products"
              className="text-gray-700 hover:text-[#9306FF] transition-colors"
            >
              Products
            </Link>
            <Link
              href="/Industries"
              className="text-gray-700 hover:text-[#9306FF] transition-colors"
            >
              Industries
            </Link>
            <Link
              href="/resourcese"
              className="text-gray-700 hover:text-[#9306FF] transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/bloge"
              className="text-gray-700 hover:text-[#9306FF] transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/contactUs"
              className="px-6 py-2 rounded-lg text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "#9306FF" }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link
              href="/"
              className="block w-full text-left px-4 py-2 text-gray-700"
            >
              Home
            </Link>
            <Link
              href="/process"
              className="block w-full text-left px-4 py-2 text-gray-700"
            >
              Our Process
            </Link>
            <Link
              href="/services"
              className="block w-full text-left px-4 py-2 text-gray-700"
            >
              Services
            </Link>
            <Link
              href="/products"
              className="block w-full text-left px-4 py-2 text-gray-700"
            >
              Products
            </Link>
            <Link
              href="/retail"
              className="block w-full text-left px-4 py-2 text-gray-700"
            >
              Industries
            </Link>
            <Link
              href="/resources"
              className="block w-full text-left px-4 py-2 text-gray-700"
            >
              Resources
            </Link>
            <Link
              href="/blog"
              className="block w-full text-left px-4 py-2 text-gray-700"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block w-full mt-4 px-6 py-2 rounded-lg text-white"
              style={{ backgroundColor: "#9306FF" }}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
