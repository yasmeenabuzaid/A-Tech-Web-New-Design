"use client";
import { TrendingUp } from "lucide-react";

export function RetailResults() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4" style={{ color: "#031338" }}>
            The <span style={{ color: "#9306FF" }}>Result</span>
          </h2>
          <p className="text-xl text-gray-600">
            Measurable impact on your bottom line and operational efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4" style={{ color: "#9306FF" }}>
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
            <div className="text-5xl mb-4" style={{ color: "#9306FF" }}>
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
            <div className="text-5xl mb-4" style={{ color: "#9306FF" }}>
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
            <div className="text-5xl mb-4" style={{ color: "#9306FF" }}>
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
              <h3 className="text-2xl mb-3" style={{ color: "#031338" }}>
                Success Story: Urban Outfitters Chain
              </h3>
              <p className="text-gray-600 mb-4">
                A 12-location fashion retailer was losing $50K annually to
                overselling and stockouts. After implementing our unified
                platform, they achieved 99.9% inventory accuracy, reduced
                reconciliation time from 8 hours to 15 minutes daily, and
                increased online sales by 34% due to confident stock
                availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}