"use client";

import React from "react";
import {  Code2,  Boxes,  ArrowRight,  Zap,  Shield,  Users,  TrendingUp,} from "lucide-react";


export function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative text-white overflow-hidden"
                style={{ backgroundColor: "#031338" }}
            >
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl"
                        style={{ backgroundColor: "#9306FF" }}
                    ></div>
                    <div
                        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
                        style={{ backgroundColor: "#9306FF" }}
                    ></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                                <Zap
                                    size={16}
                                    className="mr-2"
                                    style={{ color: "#9306FF" }}
                                />
                                <span className="text-sm">
                                    Futuristic Stability
                                </span>
                            </div>

                            <h1 className="text-5xl lg:text-6xl mb-6 leading-tight">
                                Empowering Business with{" "}
                                <span style={{ color: "#9306FF" }}>
                                    Custom Code
                                </span>{" "}
                                &{" "}
                                <span style={{ color: "#9306FF" }}>
                                    Complete Ecosystems
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 mb-8">
                                We don't just build software—we architect
                                digital transformation. From bespoke enterprise
                                solutions to our powerful all-in-one ERP/POS
                                platform, we deliver innovation backed by proven
                                methodology.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    // onClick={() => onNavigate("services")}
                                    className="px-8 py-4 rounded-lg text-white flex items-center justify-center group transition-all hover:shadow-xl"
                                    style={{ backgroundColor: "#9306FF" }}
                                >
                                    Build a Solution
                                    <ArrowRight
                                        className="ml-2 group-hover:translate-x-1 transition-transform"
                                        size={20}
                                    />
                                </button>

                                <button
                                    // onClick={() => onNavigate("products")}
                                    className="px-8 py-4 rounded-lg border-2 flex items-center justify-center group transition-all hover:bg-white/10"
                                    style={{
                                        borderColor: "#9306FF",
                                        color: "#9306FF",
                                    }}
                                >
                                    Try Our ERP
                                    <ArrowRight
                                        className="ml-2 group-hover:translate-x-1 transition-transform"
                                        size={20}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Right Visual */}
                        <div className="relative">
                            <div
                                className="rounded-2xl p-8 backdrop-blur-sm border border-white/20"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(147, 6, 255, 0.1) 0%, rgba(3, 19, 56, 0.3) 100%)",
                                }}
                            >
                                {/* Code Snippet Visual */}
                                <div className="bg-[#1a1a2e] rounded-lg p-6 mb-4">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <code className="text-sm">
                                        <div className="text-purple-400">
                                            const{" "}
                                            <span className="text-blue-300">
                                                solution
                                            </span>{" "}
                                            = {`{`}
                                        </div>
                                        <div className="ml-4 text-gray-300">
                                            custom:{" "}
                                            <span className="text-green-300">
                                                "tailored"
                                            </span>
                                            ,
                                        </div>
                                        <div className="ml-4 text-gray-300">
                                            scalable:{" "}
                                            <span className="text-green-300">
                                                true
                                            </span>
                                            ,
                                        </div>
                                        <div className="ml-4 text-gray-300">
                                            ecosystem:{" "}
                                            <span className="text-yellow-300">
                                                ["ERP", "POS"]
                                            </span>
                                        </div>
                                        <div className="text-purple-400">
                                            {`}`};
                                        </div>
                                    </code>
                                </div>

                                {/* Dashboard Preview */}
                                <div className="bg-white rounded-lg p-4">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-sm text-gray-600">
                                            Dashboard Overview
                                        </span>
                                        <div className="flex gap-1">
                                            <div
                                                className="w-2 h-2 rounded-full"
                                                style={{
                                                    backgroundColor: "#9306FF",
                                                }}
                                            ></div>
                                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div
                                            className="h-12 rounded"
                                            style={{
                                                backgroundColor:
                                                    "rgba(147, 6, 255, 0.1)",
                                            }}
                                        ></div>
                                        <div
                                            className="h-12 rounded"
                                            style={{
                                                backgroundColor:
                                                    "rgba(147, 6, 255, 0.2)",
                                            }}
                                        ></div>
                                        <div
                                            className="h-12 rounded"
                                            style={{
                                                backgroundColor:
                                                    "rgba(147, 6, 255, 0.3)",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Propositions */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl mb-4"
                            style={{ color: "#031338" }}
                        >
                            Why Choose A-Tech?
                        </h2>
                        <p className="text-xl text-gray-600">
                            The perfect blend of custom innovation and proven
                            platforms
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                style={{
                                    backgroundColor: "rgba(147, 6, 255, 0.1)",
                                }}
                            >
                                <Code2 size={24} style={{ color: "#9306FF" }} />
                            </div>
                            <h3 className="mb-3" style={{ color: "#031338" }}>
                                Custom Built
                            </h3>
                            <p className="text-gray-600">
                                Bespoke solutions engineered to your exact
                                specifications, not forced into templates.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                style={{
                                    backgroundColor: "rgba(147, 6, 255, 0.1)",
                                }}
                            >
                                <Boxes size={24} style={{ color: "#9306FF" }} />
                            </div>
                            <h3 className="mb-3" style={{ color: "#031338" }}>
                                Complete Ecosystem
                            </h3>
                            <p className="text-gray-600">
                                Our integrated ERP and POS solutions work
                                seamlessly together, out of the box.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                style={{
                                    backgroundColor: "rgba(147, 6, 255, 0.1)",
                                }}
                            >
                                <Shield
                                    size={24}
                                    style={{ color: "#9306FF" }}
                                />
                            </div>
                            <h3 className="mb-3" style={{ color: "#031338" }}>
                                Enterprise Security
                            </h3>
                            <p className="text-gray-600">
                                Bank-level encryption and compliance standards
                                protect your most sensitive data.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                style={{
                                    backgroundColor: "rgba(147, 6, 255, 0.1)",
                                }}
                            >
                                <TrendingUp
                                    size={24}
                                    style={{ color: "#9306FF" }}
                                />
                            </div>
                            <h3 className="mb-3" style={{ color: "#031338" }}>
                                Proven ROI
                            </h3>
                            <p className="text-gray-600">
                                Our clients see an average 40% efficiency
                                increase within the first 6 months.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dual Offering */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Custom Development */}
                        <div
                            className="p-12 rounded-2xl text-white relative overflow-hidden group cursor-pointer"
                            style={{ backgroundColor: "#031338" }}
                            // onClick={() => onNavigate("services")}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div
                                    className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
                                    style={{ backgroundColor: "#9306FF" }}
                                ></div>
                            </div>
                            <div className="relative">
                                <Code2
                                    size={48}
                                    style={{ color: "#9306FF" }}
                                    className="mb-6"
                                />
                                <h3 className="text-3xl mb-4">
                                    Custom Software Development
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    From web platforms to mobile apps, we build
                                    exactly what your business needs. No bloat,
                                    no compromise—just powerful, scalable
                                    solutions crafted by senior engineers.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center">
                                        <ArrowRight
                                            size={20}
                                            className="mr-2"
                                            style={{ color: "#9306FF" }}
                                        />
                                        <span>Web & Mobile Applications</span>
                                    </li>
                                    <li className="flex items-center">
                                        <ArrowRight
                                            size={20}
                                            className="mr-2"
                                            style={{ color: "#9306FF" }}
                                        />
                                        <span>
                                            Cloud Infrastructure & DevOps
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <ArrowRight
                                            size={20}
                                            className="mr-2"
                                            style={{ color: "#9306FF" }}
                                        />
                                        <span>
                                            API Integration & Automation
                                        </span>
                                    </li>
                                </ul>
                                <button
                                    className="flex items-center group/btn"
                                    style={{ color: "#9306FF" }}
                                >
                                    Explore Services
                                    <ArrowRight
                                        className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                                        size={20}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Product Ecosystem */}
                        <div
                            className="p-12 rounded-2xl relative overflow-hidden group cursor-pointer"
                            style={{
                                background:
                                    "linear-gradient(135deg, #9306FF 0%, #6d05cc 100%)",
                            }}
                            // onClick={() => onNavigate("products")}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl bg-white/20"></div>
                            </div>
                            <div className="relative text-white">
                                <Boxes size={48} className="mb-6" />
                                <h3 className="text-3xl mb-4">
                                    All-in-One Business OS
                                </h3>
                                <p className="text-purple-100 mb-6">
                                    Why piece together fragmented tools? Our
                                    integrated ERP and POS platform gives you
                                    everything from inventory to accounting in
                                    one powerful, unified system.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center">
                                        <ArrowRight
                                            size={20}
                                            className="mr-2"
                                        />
                                        <span>
                                            Smart POS & Payment Processing
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <ArrowRight
                                            size={20}
                                            className="mr-2"
                                        />
                                        <span>
                                            Real-Time Inventory Management
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <ArrowRight
                                            size={20}
                                            className="mr-2"
                                        />
                                        <span>
                                            Integrated HR, CRM & Finance
                                        </span>
                                    </li>
                                </ul>
                                <button className="flex items-center text-white group/btn">
                                    View Products
                                    <ArrowRight
                                        className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                                        size={20}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl mb-4"
                            style={{ color: "#031338" }}
                        >
                            Trusted by Industry Leaders
                        </h2>
                        <p className="text-xl text-gray-600">
                            Join hundreds of businesses transforming their
                            operations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl">
                            <div
                                className="text-5xl mb-4"
                                style={{ color: "#9306FF" }}
                            >
                                500+
                            </div>
                            <h4 className="mb-2" style={{ color: "#031338" }}>
                                Projects Delivered
                            </h4>
                            <p className="text-gray-600">
                                Across retail, hospitality, healthcare, and
                                finance sectors
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl">
                            <div
                                className="text-5xl mb-4"
                                style={{ color: "#9306FF" }}
                            >
                                98%
                            </div>
                            <h4 className="mb-2" style={{ color: "#031338" }}>
                                Client Satisfaction
                            </h4>
                            <p className="text-gray-600">
                                Long-term partnerships built on trust and
                                results
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl">
                            <div
                                className="text-5xl mb-4"
                                style={{ color: "#9306FF" }}
                            >
                                24/7
                            </div>
                            <h4 className="mb-2" style={{ color: "#031338" }}>
                                Support & Monitoring
                            </h4>
                            <p className="text-gray-600">
                                Always-on support keeps your business running
                                smoothly
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-20 text-white"
                style={{ backgroundColor: "#031338" }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Whether you need a custom solution or want to experience
                        our all-in-one platform, we're here to help you succeed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            // onClick={() => onNavigate("contact")}
                            className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-xl"
                            style={{ backgroundColor: "#9306FF" }}
                        >
                            Get a Quote
                        </button>
                        <button
                            // onClick={() => onNavigate("process")}
                            className="px-8 py-4 rounded-lg border-2 border-white text-white transition-all hover:bg-white/10"
                        >
                            See How We Work
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;