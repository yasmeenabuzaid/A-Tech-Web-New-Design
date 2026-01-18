"use client";
import { ShoppingCart, CheckCircle, BarChart3 } from "lucide-react";

export function CoreProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4" style={{ color: "#031338" }}>
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
              <ShoppingCart size={32} className="text-white" />
            </div>
            <h3 className="text-3xl mb-4" style={{ color: "#031338" }}>
              Smart POS
            </h3>
            <p className="text-lg mb-6 text-gray-600">
              Lightning-fast, touch-friendly point of sale designed for
              high-volume environments. Process transactions in seconds, accept
              all payment types, and work offline when the internet goes down.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="mr-3 mt-1 flex-shrink-0"
                  style={{ color: "#9306FF" }}
                />
                <span className="text-gray-700">
                  Intuitive interface that requires zero training
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="mr-3 mt-1 flex-shrink-0"
                  style={{ color: "#9306FF" }}
                />
                <span className="text-gray-700">
                  Multi-tender payments (cash, card, mobile, gift cards)
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
            <h3 className="text-3xl mb-4 text-white">In-House ERP</h3>
            <p className="text-lg mb-6 text-gray-300">
              The nerve center of your business. Manage everything from
              procurement to payroll in one unified platform. Customizable to
              your industry, scalable as you grow.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle
                  size={20}
                  className="mr-3 mt-1 flex-shrink-0"
                  style={{ color: "#9306FF" }}
                />
                <span className="text-gray-300">
                  Complete business management (see features below)
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
                <span className="text-gray-300">Feature request</span>
              </li>
            </ul>
            <div className="flex items-center justify-between pt-6 border-t border-gray-700">
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
      </div>
    </section>
  );
}