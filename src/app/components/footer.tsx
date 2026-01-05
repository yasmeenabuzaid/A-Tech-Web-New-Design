"use client";

import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link"; // استيراد Link من Next.js

export function Footer() {
    return (
        <footer className="text-white" style={{ backgroundColor: "#031338" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center mb-4">
                            <img
                                src={"/images/logo-light.png"}
                                className="w-40 h-10 rounded-lg flex items-center justify-center"
                            />
                        </div>
                        <p className="text-gray-400 text-sm">
                            Empowering businesses with custom code and complete ecosystems.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4">Solutions</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/services" // هنا استخدمنا Link مع المسار المناسب
                                    className="text-gray-400 hover:text-[#9306FF] transition-colors text-sm"
                                >
                                    Custom Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products"
                                    className="text-gray-400 hover:text-[#9306FF] transition-colors text-sm"
                                >
                                    ERP & POS Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/process"
                                    className="text-gray-400 hover:text-[#9306FF] transition-colors text-sm"
                                >
                                    Our Process
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-gray-400 hover:text-[#9306FF] transition-colors text-sm"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Industries */}
                    <div>
                        <h3 className="mb-4">Industries</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/retail"
                                    className="text-gray-400 hover:text-[#9306FF] transition-colors text-sm"
                                >
                                    Retail & E-commerce
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/hospitality"
                                    className="text-gray-400 hover:text-[#9306FF] transition-colors text-sm"
                                >
                                    Hospitality & Restaurants
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/resources"
                                    className="text-gray-400 hover:text-[#9306FF] transition-colors text-sm"
                                >
                                    Resources & Case Studies
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center text-gray-400">
                                <Mail size={16} className="mr-2" />
                                support@a-tech.dev
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Phone size={16} className="mr-2" />
                                +962779300014
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Phone size={16} className="mr-2" />
                                +962771016006
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Phone size={16} className="mr-2" />
                                +962795240885
                            </li>

                            <li className="flex items-center text-gray-400">
                                <MapPin size={16} className="mr-2" />
                                Amman, Jordan
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#9306FF] transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#9306FF] transition-colors"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#9306FF] transition-colors"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; 2025 A-Tech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
