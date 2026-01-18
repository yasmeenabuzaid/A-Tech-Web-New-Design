"use client";
import { CheckCircle } from "lucide-react";

export function RetailChallenge() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6" style={{ color: "#031338" }}>
              The <span style={{ color: "#9306FF" }}>Challenge</span>
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Today&apos;s retailers face a fragmented technology landscape.
              Different systems for POS, e-commerce, inventory, and accounting
              create data silos, manual reconciliation, and operational chaos.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-red-500">✗</span>
                <div>
                  <span className="text-gray-700">
                    Overselling due to out-of-sync inventory across channels
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-red-500">✗</span>
                <div>
                  <span className="text-gray-700">
                    Hours spent manually reconciling sales data
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-red-500">✗</span>
                <div>
                  <span className="text-gray-700">
                    Disconnected customer experiences across touchpoints
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-red-500">✗</span>
                <div>
                  <span className="text-gray-700">
                    Inability to get real-time business insights
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h4 style={{ color: "#031338" }}>Traditional Approach</h4>
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">
                    Fragmented
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>POS System</span>
                    <span className="text-gray-400">→ Manual export</span>
                  </div>
                  <div className="flex justify-between">
                    <span>E-commerce Platform</span>
                    <span className="text-gray-400">→ Separate inventory</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accounting Software</span>
                    <span className="text-gray-400">→ Manual entry</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CRM Tool</span>
                    <span className="text-gray-400">→ Disconnected data</span>
                  </div>
                </div>
              </div>

              <div
                className="bg-white p-6 rounded-xl shadow-sm border-2"
                style={{ borderColor: "#9306FF" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 style={{ color: "#031338" }}>A-Tech Approach</h4>
                  <span
                    className="px-3 py-1 text-white rounded-full text-sm"
                    style={{ backgroundColor: "#9306FF" }}
                  >
                    Unified
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">All-in-One Platform</span>
                    <CheckCircle size={16} style={{ color: "#9306FF" }} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Real-time Sync</span>
                    <CheckCircle size={16} style={{ color: "#9306FF" }} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Automated Accounting</span>
                    <CheckCircle size={16} style={{ color: "#9306FF" }} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Unified Customer View</span>
                    <CheckCircle size={16} style={{ color: "#9306FF" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}