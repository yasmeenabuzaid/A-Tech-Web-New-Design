"use client";
import {
    UtensilsCrossed,
    Clock,
    Users,
    CheckCircle,
    ChefHat,
    Smartphone,
    Receipt,
    TrendingUp,
} from "lucide-react";

export function IndustryHospitality() {
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
                            <UtensilsCrossed
                                size={16}
                                className="mr-2"
                                style={{ color: "#9306FF" }}
                            />
                            <span className="text-sm">Industry Solutions</span>
                        </div>
                        <h1 className="text-5xl mb-6">
                            Hospitality & Restaurant{" "}
                            <span style={{ color: "#9306FF" }}>Excellence</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Running a restaurant is orchestrating chaos into
                            harmony. Our platform is purpose-built for food
                            service—from the front-of-house to the kitchen, from
                            inventory to payroll. We understand the unique
                            demands of hospitality because we've spent years
                            perfecting solutions for restaurants, cafes, bars,
                            and catering businesses.
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
                                The restaurant industry operates on razor-thin
                                margins where every minute and every dollar
                                counts. Traditional systems aren't built for the
                                speed, complexity, and chaos of food service.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 text-red-500">
                                        ✗
                                    </span>
                                    <div>
                                        <span className="text-gray-700">
                                            Order errors between front-of-house
                                            and kitchen
                                        </span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 text-red-500">
                                        ✗
                                    </span>
                                    <div>
                                        <span className="text-gray-700">
                                            Food waste from poor ingredient
                                            tracking
                                        </span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 text-red-500">
                                        ✗
                                    </span>
                                    <div>
                                        <span className="text-gray-700">
                                            Labor scheduling nightmares and
                                            overtime overruns
                                        </span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 text-red-500">
                                        ✗
                                    </span>
                                    <div>
                                        <span className="text-gray-700">
                                            Inability to analyze menu
                                            profitability by dish
                                        </span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 text-red-500">
                                        ✗
                                    </span>
                                    <div>
                                        <span className="text-gray-700">
                                            Slow table turns due to inefficient
                                            workflows
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h3
                                className="text-2xl mb-6"
                                style={{ color: "#031338" }}
                            >
                                Restaurant Pain Points
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-xl">
                                    <div className="flex items-center justify-between mb-2">
                                        <span style={{ color: "#031338" }}>
                                            Average Food Cost %
                                        </span>
                                        <span className="text-red-600">
                                            32-35%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-red-500 h-2 rounded-full"
                                            style={{ width: "34%" }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Without proper tracking: Over-ordering,
                                        waste, theft
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl">
                                    <div className="flex items-center justify-between mb-2">
                                        <span style={{ color: "#031338" }}>
                                            Labor Cost %
                                        </span>
                                        <span className="text-red-600">
                                            30-35%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-red-500 h-2 rounded-full"
                                            style={{ width: "33%" }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Manual scheduling leads to overstaffing
                                        and overtime
                                    </p>
                                </div>

                                <div
                                    className="bg-white p-6 rounded-xl border-2"
                                    style={{ borderColor: "#9306FF" }}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span style={{ color: "#031338" }}>
                                            With A-Tech
                                        </span>
                                        <span style={{ color: "#9306FF" }}>
                                            22-26% Total
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="h-2 rounded-full"
                                            style={{
                                                width: "24%",
                                                backgroundColor: "#9306FF",
                                            }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Optimized costs through intelligent
                                        automation
                                    </p>
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
                            The Complete Restaurant Loop
                        </h2>
                        <p className="text-xl text-gray-600">
                            Menu + Kitchen + POS + HR working in perfect harmony
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        {/* Menu Management */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                                style={{
                                    backgroundColor: "rgba(147, 6, 255, 0.1)",
                                }}
                            >
                                <UtensilsCrossed
                                    size={28}
                                    style={{ color: "#9306FF" }}
                                />
                            </div>
                            <h3
                                className="text-2xl mb-4"
                                style={{ color: "#031338" }}
                            >
                                Intelligent Menu Management
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Build complex menus with unlimited modifiers,
                                combo meals, and variations. Our system
                                understands restaurant logic—from happy hour
                                pricing to allergy warnings.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Drag-and-drop menu builder with
                                        categories & subcategories
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Unlimited modifiers (size, temperature,
                                        add-ons, substitutions)
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Time-based menu switching
                                        (breakfast/lunch/dinner/late-night)
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Recipe costing & profitability analysis
                                        per dish
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Allergen tagging & dietary filters
                                        (vegan, gluten-free, etc.)
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Kitchen Display */}
                        <div
                            className="bg-white p-8 rounded-2xl shadow-sm border-2"
                            style={{ borderColor: "#9306FF" }}
                        >
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                                style={{ backgroundColor: "#9306FF" }}
                            >
                                <ChefHat size={28} className="text-white" />
                            </div>
                            <h3
                                className="text-2xl mb-4"
                                style={{ color: "#031338" }}
                            >
                                Kitchen Display System (KDS)
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Orders flow instantly from servers to kitchen
                                screens. No lost tickets, no handwriting errors,
                                no chaos. Just organized workflow with timing
                                and priority management.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Real-time order routing to specific
                                        kitchen stations
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Color-coded priority system based on
                                        order time
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Course firing (appetizers, mains,
                                        desserts timed perfectly)
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Order modification alerts (special
                                        requests, allergies)
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Average prep time tracking & kitchen
                                        performance metrics
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* POS */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                                style={{
                                    backgroundColor: "rgba(147, 6, 255, 0.1)",
                                }}
                            >
                                <Receipt
                                    size={28}
                                    style={{ color: "#9306FF" }}
                                />
                            </div>
                            <h3
                                className="text-2xl mb-4"
                                style={{ color: "#031338" }}
                            >
                                Restaurant-Specific POS
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Built for the speed of food service. Table
                                management, split checks, tip pooling, and
                                coursing—all in an interface servers can master
                                in 15 minutes.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Visual table layout with drag-and-drop
                                        assignments
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Split checks by seat, item, or custom
                                        amounts
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Integrated tip management & auto-pooling
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Online ordering & delivery platform
                                        integration
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Bar tab management with auto-close
                                        timers
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* HR */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                                style={{
                                    backgroundColor: "rgba(147, 6, 255, 0.1)",
                                }}
                            >
                                <Users size={28} style={{ color: "#9306FF" }} />
                            </div>
                            <h3
                                className="text-2xl mb-4"
                                style={{ color: "#031338" }}
                            >
                                Smart HR & Scheduling
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Predict busy periods, auto-schedule based on
                                historical data, and track performance. Reduce
                                labor costs without sacrificing service quality.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        AI-powered scheduling based on
                                        forecasted demand
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Clock-in/out from POS with GPS
                                        verification
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Overtime alerts & labor cost tracking in
                                        real-time
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Performance metrics (sales per hour,
                                        table turns, tips)
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle
                                        size={16}
                                        className="mr-2 mt-1 flex-shrink-0"
                                        style={{ color: "#9306FF" }}
                                    />
                                    <span>
                                        Integrated payroll with tip distribution
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Integration Flow */}
                    <div className="bg-white p-8 rounded-2xl">
                        <h3
                            className="text-center text-2xl mb-8"
                            style={{ color: "#031338" }}
                        >
                            The Complete Workflow
                        </h3>
                        <div className="grid md:grid-cols-5 gap-4">
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #9306FF 0%, #6d05cc 100%)",
                                    }}
                                >
                                    <Smartphone
                                        size={24}
                                        className="text-white"
                                    />
                                </div>
                                <p className="text-sm">
                                    Server takes order on POS
                                </p>
                            </div>

                            <div className="flex items-center justify-center">
                                <span
                                    className="text-2xl"
                                    style={{ color: "#9306FF" }}
                                >
                                    →
                                </span>
                            </div>

                            <div className="text-center">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #9306FF 0%, #6d05cc 100%)",
                                    }}
                                >
                                    <ChefHat size={24} className="text-white" />
                                </div>
                                <p className="text-sm">
                                    Kitchen receives on KDS instantly
                                </p>
                            </div>

                            <div className="flex items-center justify-center">
                                <span
                                    className="text-2xl"
                                    style={{ color: "#9306FF" }}
                                >
                                    →
                                </span>
                            </div>

                            <div className="text-center">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #9306FF 0%, #6d05cc 100%)",
                                    }}
                                >
                                    <Clock size={24} className="text-white" />
                                </div>
                                <p className="text-sm">
                                    Ingredients auto-deducted, costs tracked
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
                            Real restaurants, real results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div
                                className="text-5xl mb-4"
                                style={{ color: "#9306FF" }}
                            >
                                28%
                            </div>
                            <h4 className="mb-2" style={{ color: "#031338" }}>
                                Labor Cost Reduction
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Through optimized scheduling and performance
                                tracking
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="text-5xl mb-4"
                                style={{ color: "#9306FF" }}
                            >
                                18%
                            </div>
                            <h4 className="mb-2" style={{ color: "#031338" }}>
                                Food Waste Reduction
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Via precise ingredient tracking and inventory
                                management
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="text-5xl mb-4"
                                style={{ color: "#9306FF" }}
                            >
                                35%
                            </div>
                            <h4 className="mb-2" style={{ color: "#031338" }}>
                                Faster Table Turns
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Streamlined workflows from order to payment
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="text-5xl mb-4"
                                style={{ color: "#9306FF" }}
                            >
                                92%
                            </div>
                            <h4 className="mb-2" style={{ color: "#031338" }}>
                                Order Accuracy
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Eliminating kitchen errors and customer
                                complaints
                            </p>
                        </div>
                    </div>

                    {/* Case Study */}
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
                                    Success Story: The Bistro Group (5
                                    Locations)
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    A casual dining chain struggling with 36%
                                    labor costs and 8% food waste. Within 90
                                    days of implementing our platform, they
                                    reduced labor to 27%, cut food waste to
                                    4.2%, and increased table turns by 40%. The
                                    owners now have real-time visibility across
                                    all locations from their phone.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 mb-4">
                                    <div>
                                        <div
                                            className="text-2xl mb-1"
                                            style={{ color: "#9306FF" }}
                                        >
                                            $127K
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Annual savings on labor
                                        </p>
                                    </div>
                                    <div>
                                        <div
                                            className="text-2xl mb-1"
                                            style={{ color: "#9306FF" }}
                                        >
                                            $43K
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Reduced food waste annually
                                        </p>
                                    </div>
                                    <div>
                                        <div
                                            className="text-2xl mb-1"
                                            style={{ color: "#9306FF" }}
                                        >
                                            3.2 months
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            ROI payback period
                                        </p>
                                    </div>
                                </div>
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
                        Transform Your Restaurant Operations
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        See our hospitality platform in action. We'll show you
                        exactly how to reduce costs, improve speed, and delight
                        more customers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-xl"
                            style={{ backgroundColor: "#9306FF" }}
                        >
                            Book a Restaurant Demo
                        </button>
                        <button className="px-8 py-4 rounded-lg border-2 border-white text-white transition-all hover:bg-white/10">
                            Download Hospitality Guide
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default IndustryHospitality ;