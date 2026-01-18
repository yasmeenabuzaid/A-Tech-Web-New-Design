"use client";
import {
  ShoppingCart,
  Package,
  UtensilsCrossed,
  Users,
  Heart,
  DollarSign,
} from "lucide-react";

export function ERPFeatures() {
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
      benefit: "Built for Hospitality: Modifiers, Kitchen Display, and More",
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4" style={{ color: "#031338" }}>
            The Complete{" "}
            <span style={{ color: "#9306FF" }}>ERP Feature Set</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to run a modern business, all in one place
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
                        <Icon size={28} className="text-white" />
                      </div>
                      <div>
                        <h3
                          className="text-2xl mb-2"
                          style={{ color: "#031338" }}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className="text-lg"
                          style={{ color: "#9306FF" }}
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
                      {feature.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span
                            className="mr-2 mt-1"
                            style={{ color: "#9306FF" }}
                          >
                            ✓
                          </span>
                          <span className="text-gray-700">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}