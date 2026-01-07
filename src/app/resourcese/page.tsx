"use client";
import { FileText, ArrowRight, Calendar, Clock } from "lucide-react";

export function Resources() {
    const caseStudies = [
        {
            title: "Urban Fashion Retailer: From Stockout Chaos to 99.9% Inventory Accuracy",
            category: "Retail Case Study",
            client: "12-Location Fashion Chain",
            challenge:
                "Frequent overselling, 8 hours daily manual reconciliation, disconnected online/offline inventory",
            process: [
                "Discovery: Mapped current workflows and pain points across all 12 locations",
                "Design: Created unified inventory dashboard with real-time sync architecture",
                "Development: Built custom integrations with Shopify and existing POS",
                "QA: Stress-tested with Black Friday simulation",
                "Deployment: Phased rollout starting with 2 pilot stores",
                "Support: 24/7 monitoring during critical sales periods",
            ],
            outcome:
                "99.9% inventory accuracy, $50K annual savings from eliminated overselling, 34% increase in online sales confidence, reconciliation reduced from 8 hours to 15 minutes daily",
            metrics: {
                timeSaved: "42 hours/week",
                revenue: "+34%",
                roi: "4.2 months",
            },
        },
        {
            title: "The Bistro Group: Cutting Labor Costs 28% While Improving Service",
            category: "Hospitality Case Study",
            client: "5-Location Casual Dining Chain",
            challenge:
                "36% labor costs, 8% food waste, slow table turns, no centralized management visibility",
            process: [
                "Discovery: Analyzed historical sales data and staffing patterns",
                "Design: Created predictive scheduling algorithm and kitchen workflow optimization",
                "Development: Integrated POS, KDS, and HR systems with custom reporting",
                "QA: Live testing during peak dinner service",
                "Deployment: Simultaneous launch across all 5 locations with on-site training",
                "Support: Weekly optimization reviews for first 3 months",
            ],
            outcome:
                "Labor costs reduced from 36% to 27%, food waste cut to 4.2%, 40% increase in table turns, real-time multi-location visibility for ownership",
            metrics: {
                savings: "$170K/year",
                foodWaste: "-47%",
                efficiency: "+40%",
            },
        },
    ];

    const blogPosts = [
        {
            title: "Digital Transformation in Retail: Why Unified Commerce is Non-Negotiable in 2025",
            excerpt:
                "The days of treating online and offline as separate channels are over. Modern consumers expect seamless experiences, and your systems must keep up. Here's how unified commerce drives real ROI...",
            date: "December 10, 2025",
            readTime: "8 min read",
            category: "Digital Transformation",
        },
        {
            title: "The Hidden Cost of Manual Inventory Management (And How to Fix It)",
            excerpt:
                "Spreadsheets and gut feelings might have worked in 2010, but they're costing you thousands monthly in 2025. We break down the real impact of outdated inventory practices and the path forward...",
            date: "December 5, 2025",
            readTime: "6 min read",
            category: "Retail Operations",
        },
        {
            title: "Why Custom ERPs Beat Off-the-Shelf Software for Growing Businesses",
            excerpt:
                "Generic ERPs force you to change your processes to fit their limitations. Custom-built systems do the opposite—they amplify your competitive advantages. Here's when customization makes financial sense...",
            date: "November 28, 2025",
            readTime: "10 min read",
            category: "Enterprise Software",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section
                className="text-white py-20"
                style={{ backgroundColor: "#031338" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                            <FileText
                                size={16}
                                className="mr-2"
                                style={{ color: "#9306FF" }}
                            />
                            <span className="text-sm">
                                Resources & Insights
                            </span>
                        </div>
                        <h1 className="text-5xl mb-6">
                            Learn From Real{" "}
                            <span style={{ color: "#9306FF" }}>
                                Success Stories
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Explore detailed case studies, industry insights,
                            and practical guides from our work with hundreds of
                            businesses across retail, hospitality, and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2
                            className="text-4xl mb-4"
                            style={{ color: "#031338" }}
                        >
                            Featured Case Studies
                        </h2>
                        <p className="text-xl text-gray-600">
                            Deep dives into client transformations, from
                            challenge to measurable results
                        </p>
                    </div>

                    <div className="space-y-12">
                        {caseStudies.map((study, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                            >
                                {/* Header */}
                                <div className="p-8 border-b border-gray-200">
                                    <div className="flex items-start justify-between gap-6">
                                        <div className="flex-1">
                                            <div
                                                className="inline-block px-4 py-1 rounded-full text-sm mb-4"
                                                style={{
                                                    backgroundColor:
                                                        "rgba(147, 6, 255, 0.1)",
                                                    color: "#9306FF",
                                                }}
                                            >
                                                {study.category}
                                            </div>
                                            <h3
                                                className="text-3xl mb-3"
                                                style={{ color: "#031338" }}
                                            >
                                                {study.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                Client:{" "}
                                                <span
                                                    style={{ color: "#031338" }}
                                                >
                                                    {study.client}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="flex gap-4">
                                            {Object.entries(study.metrics).map(
                                                ([key, value]) => (
                                                    <div
                                                        key={key}
                                                        className="text-center bg-white px-6 py-4 rounded-xl"
                                                    >
                                                        <div
                                                            className="text-2xl mb-1"
                                                            style={{
                                                                color: "#9306FF",
                                                            }}
                                                        >
                                                            {value}
                                                        </div>
                                                        <div className="text-xs text-gray-500 capitalize">
                                                            {key
                                                                .replace(
                                                                    /([A-Z])/g,
                                                                    " $1"
                                                                )
                                                                .trim()}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="grid lg:grid-cols-3 gap-8">
                                        {/* The Problem */}
                                        <div>
                                            <h4
                                                className="mb-4 flex items-center"
                                                style={{ color: "#031338" }}
                                            >
                                                <span
                                                    className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white text-sm"
                                                    style={{
                                                        backgroundColor:
                                                            "#9306FF",
                                                    }}
                                                >
                                                    1
                                                </span>
                                                The Problem
                                            </h4>
                                            <p className="text-gray-600">
                                                {study.challenge}
                                            </p>
                                        </div>

                                        {/* The Process */}
                                        <div>
                                            <h4
                                                className="mb-4 flex items-center"
                                                style={{ color: "#031338" }}
                                            >
                                                <span
                                                    className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white text-sm"
                                                    style={{
                                                        backgroundColor:
                                                            "#9306FF",
                                                    }}
                                                >
                                                    2
                                                </span>
                                                The SDLC Process Applied
                                            </h4>
                                            <ul className="space-y-2">
                                                {study.process.map(
                                                    (step, i) => (
                                                        <li
                                                            key={i}
                                                            className="text-sm text-gray-600 flex items-start"
                                                        >
                                                            <span
                                                                className="mr-2 mt-1"
                                                                style={{
                                                                    color: "#9306FF",
                                                                }}
                                                            >
                                                                →
                                                            </span>
                                                            <span>{step}</span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        {/* The Outcome */}
                                        <div>
                                            <h4
                                                className="mb-4 flex items-center"
                                                style={{ color: "#031338" }}
                                            >
                                                <span
                                                    className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white text-sm"
                                                    style={{
                                                        backgroundColor:
                                                            "#9306FF",
                                                    }}
                                                >
                                                    3
                                                </span>
                                                The Outcome
                                            </h4>
                                            <p className="text-gray-600 mb-4">
                                                {study.outcome}
                                            </p>
                                            {/* <button className="flex items-center text-sm" style={{ color: '#9306FF' }}>
                        Read Full Case Study
                        <ArrowRight size={16} className="ml-2" />
                      </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2
                            className="text-4xl mb-4"
                            style={{ color: "#031338" }}
                        >
                            Latest Insights
                        </h2>
                        <p className="text-xl text-gray-600">
                            Expert perspectives on digital transformation,
                            retail innovation, and enterprise software
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <article
                                key={index}
                                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer"
                            >
                                {/* Featured Image Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <FileText
                                            size={48}
                                            style={{
                                                color: "#9306FF",
                                                opacity: 0.3,
                                            }}
                                        />
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span
                                            className="px-3 py-1 rounded-full text-xs text-white"
                                            style={{
                                                backgroundColor: "#9306FF",
                                            }}
                                        >
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <span className="flex items-center">
                                            <Calendar
                                                size={14}
                                                className="mr-1"
                                            />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center">
                                            <Clock size={14} className="mr-1" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h3
                                        className="text-xl mb-3 group-hover:text-[#9306FF] transition-colors"
                                        style={{ color: "#031338" }}
                                    >
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <button
                                        className="flex items-center text-sm group/btn"
                                        style={{ color: "#9306FF" }}
                                    >
                                        Read Article
                                        <ArrowRight
                                            size={16}
                                            className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                                        />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Downloadable Resources */}
            {/* <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2
                            className="text-4xl mb-4"
                            style={{ color: "#031338" }}
                        >
                            Free Downloadable Guides
                        </h2>
                        <p className="text-xl text-gray-600">
                            In-depth resources to guide your digital
                            transformation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl border-2 border-gray-200 hover:border-[#9306FF] transition-colors">
                            <h3
                                className="text-2xl mb-3"
                                style={{ color: "#031338" }}
                            >
                                The 2025 Retail Technology Buyer's Guide
                            </h3>
                            <p className="text-gray-600 mb-6">
                                A comprehensive 42-page guide covering how to
                                evaluate POS systems, ERP platforms, and custom
                                development partners. Includes ROI calculators
                                and vendor comparison checklists.
                            </p>
                            <button
                                className="px-6 py-3 rounded-lg text-white transition-all hover:shadow-lg"
                                style={{ backgroundColor: "#9306FF" }}
                            >
                                Download Free Guide
                            </button>
                        </div>

                        <div className="p-8 rounded-2xl border-2 border-gray-200 hover:border-[#9306FF] transition-colors">
                            <h3
                                className="text-2xl mb-3"
                                style={{ color: "#031338" }}
                            >
                                Restaurant Profitability Audit Template
                            </h3>
                            <p className="text-gray-600 mb-6">
                                A ready-to-use spreadsheet that helps you
                                identify profit leaks in your restaurant
                                operations. Covers food costs, labor
                                optimization, menu engineering, and more.
                            </p>
                            <button
                                className="px-6 py-3 rounded-lg text-white transition-all hover:shadow-lg"
                                style={{ backgroundColor: "#9306FF" }}
                            >
                                Download Free Template
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* CTA */}
            <section
                className="py-20 text-white"
                style={{ backgroundColor: "#031338" }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl mb-6">
                        Ready to Write Your Success Story?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Let's discuss how we can help you achieve similar
                        results in your business.
                    </p>
                    <a href="/contact">
                        <button
                            className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-xl"
                            style={{ backgroundColor: "#9306FF" }}
                        >
                            Schedule a Consultation
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
}
export default Resources;