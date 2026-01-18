"use client";
import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react";

interface StepProps {
    step: {
        number: string;
        title: string;
        icon: LucideIcon;
        description: string;
        details: string;
        deliverables: string[];
    };
    isEven: boolean;
    isLast: boolean;
}

export const ProcessStep = ({ step, isEven, isLast }: StepProps) => {
    const Icon = step.icon;

    return (
        <div className="relative">
            <div className={`lg:grid lg:grid-cols-2 gap-8 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
                
                {/* Content Side */}
                <div className={`${isEven ? "lg:text-right lg:pr-12" : "lg:col-start-2 lg:pl-12"}`}>
                    <div className="inline-block px-4 py-2 rounded-full mb-4 text-sm font-bold"
                         style={{ backgroundColor: "rgba(147, 6, 255, 0.1)", color: "#9306FF" }}>
                        Step {step.number}
                    </div>
                    <h3 className="text-3xl font-bold mb-3" style={{ color: "#031338" }}>{step.title}</h3>
                    <p className="text-lg font-semibold mb-4" style={{ color: "#9306FF" }}>{step.description}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.details}</p>

                    {/* Deliverables Box */}
                    <div className={isEven ? "lg:flex lg:justify-end" : ""}>
                        <div className={`inline-block bg-gray-50 p-4 rounded-lg border border-gray-100 ${isEven ? "lg:text-right" : ""}`}>
                            <h4 className="text-sm font-bold mb-2 uppercase tracking-wider" style={{ color: "#031338" }}>
                                Key Deliverables:
                            </h4>
                            <ul className="space-y-1">
                                {step.deliverables.map((item, i) => (
                                    <li key={i} className={`text-sm text-gray-600 flex items-center ${isEven ? "lg:justify-end" : ""}`}>
                                        {isEven ? (
                                            <>{item} <ArrowRight size={14} className="ml-2 text-[#9306FF]" /></>
                                        ) : (
                                            <><ArrowRight size={14} className="mr-2 text-[#9306FF]" /> {item}</>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Icon Side */}
                <div className={`${isEven ? "lg:col-start-2" : "lg:col-start-1"} flex ${isEven ? "lg:justify-start lg:pl-12" : "lg:justify-end lg:pr-12"} my-8 lg:my-0`}>
                    <div className="relative">
                        <div className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl z-10 relative transform transition-transform hover:scale-110"
                             style={{ background: "linear-gradient(135deg, #9306FF 0%, #6d05cc 100%)" }}>
                            <Icon size={40} className="text-white" />
                        </div>
                        {/* Horizontal Connector to Center Line */}
                        <div className="hidden lg:block absolute top-1/2 w-12 h-0.5 -mt-px bg-[#9306FF]"
                             style={{ [isEven ? "right" : "left"]: "100%" }}></div>
                    </div>
                </div>
            </div>

            {/* Mobile Vertical Connector Line */}
            {!isLast && (
                <div className="lg:hidden w-1 h-16 mx-12 mt-8"
                     style={{ background: "linear-gradient(to bottom, #9306FF, #6d05cc)" }}></div>
            )}
        </div>
    );
};