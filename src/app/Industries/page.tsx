"use client";
import {
    ShoppingBag,
    TrendingUp,
    RefreshCw,
    CheckCircle,
    Package,
    CreditCard,
    BarChart3,
} from "lucide-react";

export function IndustryRetail() {
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
                            <ShoppingBag
                                size={16}
                                className="mr-2"
                                style={{ color: "#9306FF" }}
                            />
                            <span className="text-sm">Industry Solutions</span>
                        </div>
                        <h1 className="text-5xl mb-6">
                            Retail & E-commerce{" "}
                            <span style={{ color: "#9306FF" }}>Unified</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            The modern retail landscape demands seamless
                            integration between physical and digital
                            storefronts. Our platform eliminates the complexity
                            of multi-channel commerce with a unified system that
                            keeps inventory, customer data, and financials
                            perfectly synchronized.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Challenge */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2
                                className="text-4xl mb-6"
                                style={{ color: "#031338" }}
                            >
                                The{" "}
                                <span style={{ color: "#9306FF" }}>
                                    Challenge
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-6">
                                Today's retailers face a fragmented technology
                                landscape. Different systems for POS,
                                e-commerce, inventory, and accounting create
                                data silos, manual reconciliation, and
                                operational chaos.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 text-red-500">
                                        ✗
                                    </span>
                                    <div>
                                        <span className="text-gray-700">
                                            Overselling due to out-of-sync
                                            inventory across channels
                                        </span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 text-red-500">
                                        ✗
                                    </span>
                                    <div>
                                        <span className="text-gray-700">
                                            Hours spent manually reconciling
                                            sales data
                                        </span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 text-red-500">
                                        ✗
                                    </span>
                                    <div>
                                        <span className="text-gray-700">
                                            Disconnected customer experiences
                                            across touchpoints
                                        </span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 text-red-500">
                                        ✗
                                    </span>
                                    <div>
                                        <span className="text-gray-700">
                                            Inability to get real-time business
                                            insights
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 style={{ color: "#031338" }}>
                                            Traditional Approach
                                        </h4>
                                        <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">
                                            Fragmented
                                        </span>
                                    </div>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div className="flex justify-between">
                                            <span>POS System</span>
                                            <span className="text-gray-400">
                                                → Manual export
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>E-commerce Platform</span>
                                            <span className="text-gray-400">
                                                → Separate inventory
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Accounting Software</span>
                                            <span className="text-gray-400">
                                                → Manual entry
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>CRM Tool</span>
                                            <span className="text-gray-400">
                                                → Disconnected data
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="bg-white p-6 rounded-xl shadow-sm border-2"
                                    style={{ borderColor: "#9306FF" }}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 style={{ color: "#031338" }}>
                                            A-Tech Approach
                                        </h4>
                                        <span
                                            className="px-3 py-1 text-white rounded-full text-sm"
                                            style={{
                                                backgroundColor: "#9306FF",
                                            }}
                                        >
                                            Unified
                                        </span>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-700">
                                                All-in-One Platform
                                            </span>
                                            <CheckCircle
                                                size={16}
                                                style={{ color: "#9306FF" }}
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-700">
                                                Real-time Sync
                                            </span>
                                            <CheckCircle
                                                size={16}
                                                style={{ color: "#9306FF" }}
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-700">
                                                Automated Accounting
                                            </span>
                                            <CheckCircle
                                                size={16}
                                                style={{ color: "#9306FF" }}
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-700">
                                                Unified Customer View
                                            </span>
                                            <CheckCircle
                                                size={16}
                                                style={{ color: "#9306FF" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Solution */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl mb-4"
                            style={{ color: "#031338" }}
                        >
                            Our{" "}
                            <span style={{ color: "#9306FF" }}>Solution</span>:
                            The Inventory + POS + Finance Loop
                        </h2>
                        <p className="text-xl text-gray-600">
                            A seamlessly integrated system where every component
                            works together automatically
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        {/* Inventory */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                                style={{
                                    backgroundColor: "rgba(147, 6, 255, 0.1)",
                                }}
                            >
                                <Package
                                    size={28}
                                    style={{ color: "#9306FF" }}
                                />
                            </div>
                            <h3
                                className="text-2xl mb-4"
                                style={{ color: "#031338" }}
                            >
                                Smart Inventory
                            </h3>
                            <p className="text-gray-600 mb-6">
                                One source of truth for all your stock, whether
                                it's in-store, online, or across multiple
                                warehouses. Real-time updates prevent
                                overselling and automate reordering.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start">
                                    <span
                                        className="mr-2"
                                        style={{ color: "#9306FF" }}
                                    >
                                        →
                                    </span>
                                    Multi-location tracking
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="mr-2"
                                        style={{ color: "#9306FF" }}
                                    >
                                        →
                                    </span>
                                    Automated stock alerts
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="mr-2"
                                        style={{ color: "#9306FF" }}
                                    >
                                        →
                                    </span>
                                    Barcode & SKU management
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="mr-2"
                                        style={{ color: "#9306FF" }}
                                    >
                                        →
                                    </span>
                                    Purchase order automation
                                </li>
                            </ul>
                        </div>

                        {/* POS */}
                        <div
                            className="bg-white p-8 rounded-2xl shadow-sm border-2"
                            style={{ borderColor: "#9306FF" }}
                        >
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                                style={{ backgroundColor: "#9306FF" }}
                            >
                                <CreditCard size={28} className="text-white" />
                            </div>
                            <h3
                                className="text-2xl mb-4"
                                style={{ color: "#031338" }}
                            >
                                Unified POS
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Lightning-fast checkout that automatically syncs
                                with inventory and e-commerce. Accept any
                                payment method, work offline, and get instant
                                sales insights.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start">
                                    <span
                                        className="mr-2"
                                        style={{ color: "#9306FF" }}
                                    >
                                        →
                                    </span>
                                    Instant inventory deduction
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="mr-2"
                                        style={{ color: "#9306FF" }}
                                    >
                                        →
                                    </span>
                                    Multi-tender payments
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="mr-2"
                                        style={{ color: "#9306FF" }}
                                    >
                                        →
                                    </span>
                                    Customer loyalty integration
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="mr-2"
                                        style={{ color: "#9306FF" }}
                                    >
                                        →
                                    </span>
                                    Offline mode with sync
                                </li>
                            </ul>
                        </div>

                        {/* Finance */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                                style={{
                                    backgroundColor: "rgba(147, 6, 255, 0.1)",
                                }}
                            >
                                <BarChart3
                                    size={28}
                                    style={{ color: "#9306FF" }}
                                />
                            </div>
                            <h3
                                className="text-2xl mb-4"
                                style={{ color: "#031338" }}
                            >
                                Automated Finance
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Every transaction automatically flows into your
                                accounting system. No manual data entry, instant
                                financial reports, and simplified tax
                                preparation.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start">
                                    <span
                                        className="mr-2"
                                        style={{ color: "#9306FF" }}
                                    >
                                        →
                                    </span>
                                    Auto-generated ledger entries
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="mr-2"
                                        style={{ color: "#9306FF" }}
                                    >
                                        →
                                    </span>
                                    Real-time P&L reports
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="mr-2"
                                        style={{ color: "#9306FF" }}
                                    >
                                        →
                                    </span>
                                    Tax calculation & reporting
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="mr-2"
                                        style={{ color: "#9306FF" }}
                                    >
                                        →
                                    </span>
                                    QuickBooks/Xero integration
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Flow Diagram */}
                    <div className="bg-white p-8 rounded-2xl">
                        <h3
                            className="text-center text-2xl mb-8"
                            style={{ color: "#031338" }}
                        >
                            How It All Connects
                        </h3>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex-1 text-center">
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #9306FF 0%, #6d05cc 100%)",
                                    }}
                                >
                                    <span className="text-white text-2xl">
                                        1
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Customer purchases in-store or online
                                </p>
                            </div>

                            <div
                                className="hidden md:block"
                                style={{ color: "#9306FF" }}
                            >
                                →
                            </div>

                            <div className="flex-1 text-center">
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #9306FF 0%, #6d05cc 100%)",
                                    }}
                                >
                                    <span className="text-white text-2xl">
                                        2
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Inventory instantly updates across all
                                    channels
                                </p>
                            </div>

                            <div
                                className="hidden md:block"
                                style={{ color: "#9306FF" }}
                            >
                                →
                            </div>

                            <div className="flex-1 text-center">
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #9306FF 0%, #6d05cc 100%)",
                                    }}
                                >
                                    <span className="text-white text-2xl">
                                        3
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Transaction auto-records in accounting
                                </p>
                            </div>

                            <div
                                className="hidden md:block"
                                style={{ color: "#9306FF" }}
                            >
                                →
                            </div>

                            <div className="flex-1 text-center">
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #9306FF 0%, #6d05cc 100%)",
                                    }}
                                >
                                    <span className="text-white text-2xl">
                                        4
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Real-time reports show exact business health
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Result */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl mb-4"
                            style={{ color: "#031338" }}
                        >
                            The <span style={{ color: "#9306FF" }}>Result</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Measurable impact on your bottom line and
                            operational efficiency
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div
                                className="text-5xl mb-4"
                                style={{ color: "#9306FF" }}
                            >
                                42%
                            </div>
                            <h4 className="mb-2" style={{ color: "#031338" }}>
                                Time Saved
                            </h4>
                            <p className="text-gray-600 text-sm">
                                On inventory management and reconciliation tasks
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="text-5xl mb-4"
                                style={{ color: "#9306FF" }}
                            >
                                99.8%
                            </div>
                            <h4 className="mb-2" style={{ color: "#031338" }}>
                                Inventory Accuracy
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Eliminating overselling and stockouts
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="text-5xl mb-4"
                                style={{ color: "#9306FF" }}
                            >
                                3x
                            </div>
                            <h4 className="mb-2" style={{ color: "#031338" }}>
                                Faster Checkout
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Improving customer experience and throughput
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="text-5xl mb-4"
                                style={{ color: "#9306FF" }}
                            >
                                100%
                            </div>
                            <h4 className="mb-2" style={{ color: "#031338" }}>
                                Automated Accounting
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Zero manual data entry for financial records
                            </p>
                        </div>
                    </div>

                    {/* Case Study Teaser */}
                    <div
                        className="mt-16 p-10 rounded-2xl"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(147, 6, 255, 0.05) 0%, rgba(3, 19, 56, 0.02) 100%)",
                        }}
                    >
                        <div className="flex items-start gap-6">
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: "#9306FF" }}
                            >
                                <TrendingUp size={28} className="text-white" />
                            </div>
                            <div>
                                <h3
                                    className="text-2xl mb-3"
                                    style={{ color: "#031338" }}
                                >
                                    Success Story: Urban Outfitters Chain
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    A 12-location fashion retailer was losing
                                    $50K annually to overselling and stockouts.
                                    After implementing our unified platform,
                                    they achieved 99.9% inventory accuracy,
                                    reduced reconciliation time from 8 hours to
                                    15 minutes daily, and increased online sales
                                    by 34% due to confident stock availability.
                                </p>
                                {/* <button
                                    className="flex items-center"
                                    style={{ color: "#9306FF" }}
                                >
                                    Read Full Case Study →
                                </button> */}
                            </div>
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
                        Ready to Unify Your Retail Operations?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        See how our platform can eliminate data silos and
                        transform your multi-channel retail business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-xl"
                            style={{ backgroundColor: "#9306FF" }}
                        >
                            Schedule a Demo
                        </button>
                        <button className="px-8 py-4 rounded-lg border-2 border-white text-white transition-all hover:bg-white/10">
                            Download Retail Guide
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default IndustryRetail;