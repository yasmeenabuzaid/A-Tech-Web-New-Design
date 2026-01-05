"use client";
import {
    Search,
    Palette,
    Code,
    TestTube,
    Rocket,
    Headphones,
    ArrowRight,
} from "lucide-react";

export function Process() {
    const steps = [
        {
            number: "01",
            title: "Discovery & Analysis",
            icon: Search,
            description: "Understanding the Client's Pain Points",
            details:
                "We begin by diving deep into your business challenges. Through stakeholder interviews, process mapping, and competitive analysis, we uncover the root causes—not just symptoms. Our discovery workshops identify bottlenecks, inefficiencies, and hidden opportunities that standard consultants miss.",
            deliverables: [
                "Requirements Document",
                "Technical Feasibility Report",
                "Project Roadmap",
            ],
        },
        {
            number: "02",
            title: "UI/UX Design",
            icon: Palette,
            description: "Prototyping and Wireframing",
            details:
                "Design isn't decoration—it's strategy. Our UX team creates intuitive interfaces backed by user research and behavioral psychology. From low-fidelity wireframes to high-fidelity interactive prototypes, we validate every design decision before a single line of code is written.",
            deliverables: [
                "Wireframes & User Flows",
                "Interactive Prototypes",
                "Design System Documentation",
            ],
        },
        {
            number: "03",
            title: "Agile Development",
            icon: Code,
            description: "Sprint-Based Coding",
            details:
                "Our senior engineers work in focused 2-week sprints, delivering working software incrementally. You see progress continuously, provide feedback in real-time, and maintain full visibility into the codebase. We use modern frameworks, cloud-native architecture, and industry best practices.",
            deliverables: [
                "Functional Software Modules",
                "Sprint Demos",
                "Code Documentation",
            ],
        },
        {
            number: "04",
            title: "QA & Testing",
            icon: TestTube,
            description: "Rigorous Bug Squashing",
            details:
                "Quality is non-negotiable. Our dedicated QA team performs automated testing, manual exploratory testing, security audits, and performance benchmarking. We catch bugs before your users do, ensuring enterprise-grade reliability from day one.",
            deliverables: [
                "Test Coverage Reports",
                "Bug Tracking Dashboard",
                "Performance Metrics",
            ],
        },
        {
            number: "05",
            title: "Deployment",
            icon: Rocket,
            description: "Going Live",
            details:
                "Launch day is carefully orchestrated. We handle cloud infrastructure setup, database migrations, DNS configuration, SSL certificates, and monitoring tools. Our phased rollout strategy minimizes risk with staging environments, canary deployments, and instant rollback capabilities.",
            deliverables: [
                "Production Environment",
                "Deployment Documentation",
                "Training Materials",
            ],
        },
        {
            number: "06",
            title: "Maintenance & Support",
            icon: Headphones,
            description: "Long-Term Partnership",
            details:
                "Our relationship doesn't end at launch. We provide 24/7 monitoring, proactive maintenance, security patches, and feature enhancements. Think of us as your extended engineering team—always available, always improving, always one step ahead.",
            deliverables: [
                "24/7 Support Portal",
                "Monthly Health Reports",
                "Feature Roadmap Updates",
            ],
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section
                className="text-white py-20"
                style={{ backgroundColor: "#031338" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                            <span className="text-sm">
                                Our Proven Methodology
                            </span>
                        </div>
                        <h1 className="text-5xl mb-6">
                            The{" "}
                            <span style={{ color: "#9306FF" }}>
                                A-Tech SDLC
                            </span>
                            : Transparent, Methodical, Collaborative
                        </h1>
                        <p className="text-xl text-gray-300">
                            Software development shouldn't feel like a black
                            box. Our structured approach keeps you informed at
                            every stage, from concept to deployment and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        {/* Gradient Line */}
                        <div
                            className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-1 -ml-0.5"
                            style={{
                                background:
                                    "linear-gradient(to bottom, #9306FF, #6d05cc, #9306FF)",
                            }}
                        ></div>

                        {/* Steps */}
                        <div className="space-y-16">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                const isEven = index % 2 === 0;

                                return (
                                    <div key={step.number} className="relative">
                                        <div
                                            className={`lg:grid lg:grid-cols-2 gap-8 items-center ${
                                                isEven
                                                    ? ""
                                                    : "lg:grid-flow-dense"
                                            }`}
                                        >
                                            {/* Content */}
                                            <div
                                                className={`${
                                                    isEven
                                                        ? "lg:text-right lg:pr-12"
                                                        : "lg:col-start-2 lg:pl-12"
                                                }`}
                                            >
                                                <div
                                                    className="inline-block px-4 py-2 rounded-full mb-4 text-sm"
                                                    style={{
                                                        backgroundColor:
                                                            "rgba(147, 6, 255, 0.1)",
                                                        color: "#9306FF",
                                                    }}
                                                >
                                                    Step {step.number}
                                                </div>
                                                <h3
                                                    className="text-3xl mb-3"
                                                    style={{ color: "#031338" }}
                                                >
                                                    {step.title}
                                                </h3>
                                                <p
                                                    className="text-lg mb-4"
                                                    style={{ color: "#9306FF" }}
                                                >
                                                    {step.description}
                                                </p>
                                                <p className="text-gray-600 mb-6">
                                                    {step.details}
                                                </p>

                                                <div
                                                    className={`${
                                                        isEven
                                                            ? "lg:flex lg:justify-end"
                                                            : ""
                                                    }`}
                                                >
                                                    <div
                                                        className={`inline-block bg-gray-50 p-4 rounded-lg ${
                                                            isEven
                                                                ? "lg:text-right"
                                                                : ""
                                                        }`}
                                                    >
                                                        <h4
                                                            className="text-sm mb-2"
                                                            style={{
                                                                color: "#031338",
                                                            }}
                                                        >
                                                            Key Deliverables:
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {step.deliverables.map(
                                                                (
                                                                    deliverable,
                                                                    i
                                                                ) => (
                                                                    <li
                                                                        key={i}
                                                                        className="text-sm text-gray-600 flex items-center"
                                                                    >
                                                                        {isEven ? (
                                                                            <>
                                                                                <span>
                                                                                    {
                                                                                        deliverable
                                                                                    }
                                                                                </span>
                                                                                <ArrowRight
                                                                                    size={
                                                                                        14
                                                                                    }
                                                                                    className="ml-2"
                                                                                    style={{
                                                                                        color: "#9306FF",
                                                                                    }}
                                                                                />
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <ArrowRight
                                                                                    size={
                                                                                        14
                                                                                    }
                                                                                    className="mr-2"
                                                                                    style={{
                                                                                        color: "#9306FF",
                                                                                    }}
                                                                                />
                                                                                <span>
                                                                                    {
                                                                                        deliverable
                                                                                    }
                                                                                </span>
                                                                            </>
                                                                        )}
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Icon */}
                                            <div
                                                className={`${
                                                    isEven
                                                        ? "lg:col-start-2"
                                                        : "lg:col-start-1"
                                                } flex ${
                                                    isEven
                                                        ? "lg:justify-start lg:pl-12"
                                                        : "lg:justify-end lg:pr-12"
                                                } my-8 lg:my-0`}
                                            >
                                                <div className="relative">
                                                    <div
                                                        className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg"
                                                        style={{
                                                            background:
                                                                "linear-gradient(135deg, #9306FF 0%, #6d05cc 100%)",
                                                        }}
                                                    >
                                                        <Icon
                                                            size={40}
                                                            className="text-white"
                                                        />
                                                    </div>
                                                    {/* Connector to timeline */}
                                                    <div
                                                        className="hidden lg:block absolute top-1/2 w-12 h-0.5 -mt-px"
                                                        style={{
                                                            backgroundColor:
                                                                "#9306FF",
                                                            [isEven
                                                                ? "right"
                                                                : "left"]:
                                                                "100%",
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mobile connector line */}
                                        {index < steps.length - 1 && (
                                            <div
                                                className="lg:hidden w-1 h-16 mx-12 mt-8"
                                                style={{
                                                    background:
                                                        "linear-gradient(to bottom, #9306FF, #6d05cc)",
                                                }}
                                            ></div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Benefits */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl mb-4"
                            style={{ color: "#031338" }}
                        >
                            Why Our Process Works
                        </h2>
                        <p className="text-xl text-gray-600">
                            Built on industry best practices and battle-tested
                            over 500+ projects
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl">
                            <h3
                                className="text-2xl mb-4"
                                style={{ color: "#9306FF" }}
                            >
                                Full Transparency
                            </h3>
                            <p className="text-gray-600">
                                Access our project management tools, view sprint
                                progress in real-time, and participate in every
                                design decision. No surprises, no scope creep.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl">
                            <h3
                                className="text-2xl mb-4"
                                style={{ color: "#9306FF" }}
                            >
                                Risk Mitigation
                            </h3>
                            <p className="text-gray-600">
                                Early prototyping, continuous testing, and
                                iterative development mean we catch issues when
                                they're easy to fix—not after launch.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl">
                            <h3
                                className="text-2xl mb-4"
                                style={{ color: "#9306FF" }}
                            >
                                Faster Time-to-Market
                            </h3>
                            <p className="text-gray-600">
                                Agile sprints deliver working features every two
                                weeks. Start seeing ROI before the project even
                                finishes, and pivot based on real user feedback.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section
                className="py-20 text-white"
                style={{ backgroundColor: "#031338" }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Let's discuss your challenges and map out a custom
                        development roadmap.
                    </p>
                    <button
                        className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-xl"
                        style={{ backgroundColor: "#9306FF" }}
                    >
                        Schedule a Discovery Call
                    </button>
                </div>
            </section>
        </div>
    );
}
export default  Process;