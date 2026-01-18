"use client";
import { Package, CreditCard, BarChart3 } from "lucide-react";

export function RetailSolution() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4" style={{ color: "#031338" }}>
            Our <span style={{ color: "#9306FF" }}>Solution</span>: The
            Inventory + POS + Finance Loop
          </h2>
          <p className="text-xl text-gray-600">
            A seamlessly integrated system where every component works together
            automatically
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Inventory */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: "rgba(147, 6, 255, 0.1)" }}
            >
              <Package size={28} style={{ color: "#9306FF" }} />
            </div>
            <h3 className="text-2xl mb-4" style={{ color: "#031338" }}>
              Smart Inventory
            </h3>
            <p className="text-gray-600 mb-6">
              One source of truth for all your stock, whether it&apos;s in-store,
              online, or across multiple warehouses. Real-time updates prevent
              overselling and automate reordering.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#9306FF" }}>
                  →
                </span>
                Multi-location tracking
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#9306FF" }}>
                  →
                </span>
                Automated stock alerts
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#9306FF" }}>
                  →
                </span>
                Barcode & SKU management
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#9306FF" }}>
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
            <h3 className="text-2xl mb-4" style={{ color: "#031338" }}>
              Unified POS
            </h3>
            <p className="text-gray-600 mb-6">
              Lightning-fast checkout that automatically syncs with inventory
              and e-commerce. Accept any payment method, work offline, and get
              instant sales insights.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#9306FF" }}>
                  →
                </span>
                Instant inventory deduction
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#9306FF" }}>
                  →
                </span>
                Multi-tender payments
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#9306FF" }}>
                  →
                </span>
                Customer loyalty integration
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#9306FF" }}>
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
              style={{ backgroundColor: "rgba(147, 6, 255, 0.1)" }}
            >
              <BarChart3 size={28} style={{ color: "#9306FF" }} />
            </div>
            <h3 className="text-2xl mb-4" style={{ color: "#031338" }}>
              Automated Finance
            </h3>
            <p className="text-gray-600 mb-6">
              Every transaction automatically flows into your accounting system.
              No manual data entry, instant financial reports, and simplified
              tax preparation.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#9306FF" }}>
                  →
                </span>
                Auto-generated ledger entries
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#9306FF" }}>
                  →
                </span>
                Real-time P&L reports
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#9306FF" }}>
                  →
                </span>
                Tax calculation & reporting
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#9306FF" }}>
                  →
                </span>
                QuickBooks/Xero integration
              </li>
            </ul>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="bg-white p-8 rounded-2xl">
          <h3 className="text-center text-2xl mb-8" style={{ color: "#031338" }}>
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
                <span className="text-white text-2xl">1</span>
              </div>
              <p className="text-sm text-gray-600">
                Customer purchases in-store or online
              </p>
            </div>

            <div className="hidden md:block" style={{ color: "#9306FF" }}>
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
                <span className="text-white text-2xl">2</span>
              </div>
              <p className="text-sm text-gray-600">
                Inventory instantly updates across all channels
              </p>
            </div>

            <div className="hidden md:block" style={{ color: "#9306FF" }}>
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
                <span className="text-white text-2xl">3</span>
              </div>
              <p className="text-sm text-gray-600">
                Transaction auto-records in accounting
              </p>
            </div>

            <div className="hidden md:block" style={{ color: "#9306FF" }}>
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
                <span className="text-white text-2xl">4</span>
              </div>
              <p className="text-sm text-gray-600">
                Real-time reports show exact business health
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}