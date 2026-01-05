"use client";
import {
    ShoppingCart,
    Package,
    UtensilsCrossed,
    Users,
    Heart,
    DollarSign,
    BarChart3,
    Zap,
    CheckCircle,
} from "lucide-react";

export function Products() {
    const erpFeatures = [
        {
            icon: ShoppingCart,
            title: "E-commerce Integration",
            benefit: "Seamlessly Syncs Physical Stock with Online Sales",
            description:
                "Your brick-and-mortar inventory and online store work as one unified system. When a customer buys online, stock automatically adjusts across all channels. No overselling, no manual updates, no headaches.",
            highlights: [
                "Real-time inventory synchronization",
                "Multi-channel order management (Shopify, WooCommerce, custom)",
                "Automated stock alerts and reordering",
                "Unified customer data across touchpoints",
            ],
        },
        {
            icon: Package,
            title: "Inventory Management",
            benefit: "Real-Time Tracking Across Multiple Warehouses",
            description:
                "See exactly what you have, where it is, and when to reorder. Our intelligent inventory system tracks every item across unlimited locations, with barcode scanning, batch tracking, and expiration date management.",
            highlights: [
                "Multi-warehouse & multi-location support",
                "Barcode & QR code scanning",
                "Automated low-stock notifications",
                "FIFO/LIFO costing methods",
                "Lot & serial number tracking",
            ],
        },
        {
            icon: UtensilsCrossed,
            title: "Menu Management (Restaurants)",
            benefit:
                "Built for Hospitality: Modifiers, Kitchen Display, and More",
            description:
                "Restaurant-specific features that understand your workflow. Manage complex menus with modifiers, combo deals, and seasonal items. Orders flow directly to kitchen displays with timing and priority management.",
            highlights: [
                "Drag-and-drop menu builder",
                "Unlimited modifiers & variations",
                "Kitchen Display System (KDS) integration",
                "Recipe costing & ingredient tracking",
                "Time-based menu switching (breakfast/lunch/dinner)",
            ],
        },
        {
            icon: Users,
            title: "HR System",
            benefit: "Payroll, Shifts, and Employee Performance in One Place",
            description:
                "From scheduling to payroll, manage your entire workforce effortlessly. Track hours, process payroll, monitor performance metrics, and ensure compliance—all integrated with your POS for commission tracking.",
            highlights: [
                "Automated shift scheduling & time tracking",
                "Integrated payroll processing",
                "Performance reviews & KPI tracking",
                "Employee self-service portal",
                "Commission calculation tied to sales",
            ],
        },
        {
            icon: Heart,
            title: "CRM & Loyalty",
            benefit: "Turn One-Time Buyers into Lifetime Customers",
            description:
                "Know your customers intimately. Track purchase history, preferences, and behavior. Launch targeted campaigns, manage loyalty programs, and automate personalized marketing—all powered by real transaction data.",
            highlights: [
                "Customer profiles with purchase history",
                "Points-based & tiered loyalty programs",
                "Automated email & SMS campaigns",
                "Birthday & anniversary rewards",
                "Customer segmentation & analytics",
            ],
        },
        {
            icon: DollarSign,
            title: "Finance & Accounting",
            benefit: "Integrated Accounting That Writes Itself",
            description:
                "Your books stay current automatically. Every sale, refund, and expense flows directly into your accounting system. Generate financial reports, track profitability by product or location, and simplify tax season.",
            highlights: [
                "Automated general ledger entries",
                "Profit & loss by location/product/staff",
                "Tax calculation & reporting",
                "Integration with QuickBooks & Xero",
                "Customizable financial dashboards",
            ],
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section
                className="text-white py-20 relative overflow-hidden"
                style={{ backgroundColor: "#031338" }}
            >
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
                        style={{ backgroundColor: "#9306FF" }}
                    ></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                            <Zap
                                size={16}
                                className="mr-2"
                                style={{ color: "#9306FF" }}
                            />
                            <span className="text-sm">
                                All-in-One Business OS
                            </span>
                        </div>
                        <h1 className="text-5xl mb-6">
                            Why Piece Together Tools When You Can Have{" "}
                            <span style={{ color: "#9306FF" }}>
                                One Powerful Ecosystem
                            </span>
                            ?
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Our integrated ERP and Smart POS platform eliminates
                            the chaos of disconnected systems. From inventory to
                            accounting, everything works together seamlessly—so
                            you can focus on growing your business, not managing
                            software.
                        </p>
                        <button
                            className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-xl"
                            style={{ backgroundColor: "#9306FF" }}
                        >
                            Book a Live Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Core Products */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl mb-4"
                            style={{ color: "#031338" }}
                        >
                            Two Core Products, Infinite Possibilities
                        </h2>
                        <p className="text-xl text-gray-600">
                            Choose one or both—they work even better together
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Smart POS */}
                        <div
                            className="bg-gradient-to-br from-purple-50 to-white border-2 rounded-2xl p-10"
                            style={{ borderColor: "#9306FF" }}
                        >
                            <div
                                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                                style={{ backgroundColor: "#9306FF" }}
                            >
                                <ShoppingCart
                                    size={32}
                                    className="text-white"
                                />
                            </div>
                            <h3
                                className="text-3xl mb-4"
                                style={{ color: "#031338" }}
                            >
                                Smart POS
                            </h3>
                            <p className="text-lg mb-6 text-gray-600">
                                Lightning-fast, touch-friendly point of sale
                                designed for high-volume environments. Process
                                transactions in seconds, accept all payment
                                types, and work offline when the internet goes
                                down.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={20}
                                        className="mr-3 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span className="text-gray-700">
                                        Intuitive interface that requires zero
                                        training
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={20}
                                        className="mr-3 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span className="text-gray-700">
                                        Multi-tender payments (cash, card,
                                        mobile, gift cards)
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={20}
                                        className="mr-3 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span className="text-gray-700">
                                        Offline mode with auto-sync
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={20}
                                        className="mr-3 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span className="text-gray-700">
                                        Built-in receipt printing & email
                                    </span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-between pt-6 border-t border-purple-200">
                                {/* <div>
                  <span className="text-3xl" style={{ color: '#9306FF' }}>$79</span>
                  <span className="text-gray-600">/month per terminal</span>
                </div> */}
                                <a
                                    href="https://atech-workspace.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button
                                        className="px-6 py-3 rounded-lg text-white transition-all hover:shadow-lg"
                                        style={{ backgroundColor: "#9306FF" }}
                                    >
                                        Open
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* In-House ERP */}
                        <div
                            className="border-2 rounded-2xl p-10"
                            style={{
                                borderColor: "#031338",
                                backgroundColor: "#031338",
                            }}
                        >
                            <div
                                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #9306FF 0%, #6d05cc 100%)",
                                }}
                            >
                                <BarChart3 size={32} className="text-white" />
                            </div>
                            <h3 className="text-3xl mb-4 text-white">
                                In-House ERP
                            </h3>
                            <p className="text-lg mb-6 text-gray-300">
                                The nerve center of your business. Manage
                                everything from procurement to payroll in one
                                unified platform. Customizable to your industry,
                                scalable as you grow.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={20}
                                        className="mr-3 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span className="text-gray-300">
                                        Complete business management (see
                                        features below)
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={20}
                                        className="mr-3 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span className="text-gray-300">
                                        Role-based access for unlimited users
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={20}
                                        className="mr-3 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span className="text-gray-300">
                                        Custom workflows & automation
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={20}
                                        className="mr-3 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span className="text-gray-300">
                                        Real-time analytics & reporting
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={20}
                                        className="mr-3 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span className="text-gray-300">
                                        Feature request
                                    </span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                                {/* <div>
                                    <span
                                        className="text-3xl"
                                        style={{ color: "#9306FF" }}
                                    >
                                        $299
                                    </span>
                                    <span className="text-gray-300">
                                        /month per location
                                    </span>
                                </div> */}
                                <a
                                    href="https://atech-workspace.com/sales-requests"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button
                                        className="px-6 py-3 rounded-lg border-2 text-white transition-all hover:bg-white/10"
                                        style={{ borderColor: "#9306FF" }}
                                    >
                                        Get Demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bundle Offer */}
                    {/* <div
                        className="mt-8 p-6 rounded-xl text-center"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(147, 6, 255, 0.1) 0%, rgba(3, 19, 56, 0.05) 100%)",
                        }}
                    >
                        <p className="text-lg">
                            <span style={{ color: "#9306FF" }}>
                                Bundle & Save:
                            </span>{" "}
                            Get both POS + ERP for{" "}
                            <span
                                className="text-2xl"
                                style={{ color: "#031338" }}
                            >
                                $349/month
                            </span>
                            <span className="text-gray-600">
                                {" "}
                                (save $29/month)
                            </span>
                        </p>
                    </div> */}
                </div>
            </section>

            {/* ERP Feature Deep Dive */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl mb-4"
                            style={{ color: "#031338" }}
                        >
                            The Complete{" "}
                            <span style={{ color: "#9306FF" }}>
                                ERP Feature Set
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Everything you need to run a modern business, all in
                            one place
                        </p>
                    </div>

                    <div className="space-y-12">
                        {erpFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden"
                                >
                                    <div className="grid lg:grid-cols-5 gap-8 p-8">
                                        {/* Icon & Title */}
                                        <div className="lg:col-span-2">
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                                    style={{
                                                        background:
                                                            "linear-gradient(135deg, #9306FF 0%, #6d05cc 100%)",
                                                    }}
                                                >
                                                    <Icon
                                                        size={28}
                                                        className="text-white"
                                                    />
                                                </div>
                                                <div>
                                                    <h3
                                                        className="text-2xl mb-2"
                                                        style={{
                                                            color: "#031338",
                                                        }}
                                                    >
                                                        {feature.title}
                                                    </h3>
                                                    <p
                                                        className="text-lg"
                                                        style={{
                                                            color: "#9306FF",
                                                        }}
                                                    >
                                                        {feature.benefit}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description & Highlights */}
                                        <div className="lg:col-span-3">
                                            <p className="text-gray-600 mb-6">
                                                {feature.description}
                                            </p>
                                            <ul className="grid md:grid-cols-2 gap-3">
                                                {feature.highlights.map(
                                                    (highlight, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start text-sm"
                                                        >
                                                            <span
                                                                className="mr-2 mt-1"
                                                                style={{
                                                                    color: "#9306FF",
                                                                }}
                                                            >
                                                                ✓
                                                            </span>
                                                            <span className="text-gray-700">
                                                                {highlight}
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Industry Fit */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl mb-4"
                            style={{ color: "#031338" }}
                        >
                            Built for Your Industry
                        </h2>
                        <p className="text-xl text-gray-600">
                            Pre-configured workflows for specific business types
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div
                            className="p-8 rounded-2xl"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(147, 6, 255, 0.05) 0%, rgba(3, 19, 56, 0.02) 100%)",
                            }}
                        >
                            <h3
                                className="text-2xl mb-4"
                                style={{ color: "#031338" }}
                            >
                                Retail & E-commerce
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Perfect for multi-channel retailers. Manage
                                physical stores and online sales from one
                                dashboard with synchronized inventory, unified
                                customer data, and omnichannel fulfillment.
                            </p>
                            <button
                                className="text-sm flex items-center"
                                style={{ color: "#9306FF" }}
                            >
                                Learn More About Retail Solutions →
                            </button>
                        </div>

                        <div
                            className="p-8 rounded-2xl"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(147, 6, 255, 0.05) 0%, rgba(3, 19, 56, 0.02) 100%)",
                            }}
                        >
                            <h3
                                className="text-2xl mb-4"
                                style={{ color: "#031338" }}
                            >
                                Hospitality & Restaurants
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Designed for food service. From menu engineering
                                to kitchen workflows, table management to
                                delivery integration—everything hospitality
                                businesses need to thrive.
                            </p>
                            <button
                                className="text-sm flex items-center"
                                style={{ color: "#9306FF" }}
                            >
                                Explore Hospitality Features →
                            </button>
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
                    <h2 className="text-4xl mb-6">See It in Action</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Book a personalized demo and we'll show you exactly how
                        our platform can transform your operations.
                    </p>
                    <button
                        className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-xl"
                        style={{ backgroundColor: "#9306FF" }}
                    >
                        Schedule Your Demo
                    </button>
                </div>
            </section>
        </div>
    );
}
export default Products;