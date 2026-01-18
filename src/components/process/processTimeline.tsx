"use client";
import React from "react";
import { Search, Palette, Code, TestTube, Rocket, Headphones } from "lucide-react";
import { ProcessStep } from "./processStep";

const steps = [
    {
        number: "01",
        title: "Discovery & Analysis",
        icon: Search,
        description: "Understanding the Client's Pain Points",
        details: "We begin by diving deep into your business challenges. Through stakeholder interviews, process mapping, and competitive analysis, we uncover the root causes—not just symptoms.",
        deliverables: ["Requirements Document", "Technical Feasibility Report", "Project Roadmap"],
    },
    {
        number: "02",
        title: "UI/UX Design",
        icon: Palette,
        description: "Prototyping and Wireframing",
        details: "Design isn't decoration—it's strategy. Our UX team creates intuitive interfaces backed by user research and behavioral psychology.",
        deliverables: ["Wireframes & User Flows", "Interactive Prototypes", "Design System"],
    },
    {
        number: "03",
        title: "Agile Development",
        icon: Code,
        description: "Sprint-Based Coding",
        details: "Our senior engineers work in focused 2-week sprints, delivering working software incrementally with full visibility into the codebase.",
        deliverables: ["Functional Software", "Sprint Demos", "Code Documentation"],
    },
    {
        number: "04",
        title: "QA & Testing",
        icon: TestTube,
        description: "Rigorous Bug Squashing",
        details: "Quality is non-negotiable. Our team performs automated testing, security audits, and performance benchmarking.",
        deliverables: ["Test Coverage Reports", "Bug Tracking", "Performance Metrics"],
    },
    {
        number: "05",
        title: "Deployment",
        icon: Rocket,
        description: "Going Live",
        details: "Launch day is carefully orchestrated. We handle cloud infrastructure, database migrations, and monitoring setup.",
        deliverables: ["Production Environment", "Deployment Docs", "Training Materials"],
    },
    {
        number: "06",
        title: "Maintenance & Support",
        icon: Headphones,
        description: "Long-Term Partnership",
        details: "Our relationship doesn't end at launch. We provide 24/7 monitoring, security patches, and feature enhancements.",
        deliverables: ["Support Portal", "Health Reports", "Roadmap Updates"],
    },
];

export const ProcessTimeline = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-1 -ml-0.5"
                         style={{ background: "linear-gradient(to bottom, #9306FF, #6d05cc, #9306FF)" }}></div>

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <ProcessStep 
                                key={step.number} 
                                step={step} 
                                isEven={index % 2 === 0} 
                                isLast={index === steps.length - 1} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};