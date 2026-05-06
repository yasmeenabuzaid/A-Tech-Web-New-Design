"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Package, UtensilsCrossed, Users, Heart, DollarSign, Check } from "lucide-react";

export function ERPFeatures() {
  const erpFeatures = [
    { icon: ShoppingCart, title: "E-commerce Integration", benefit: "Seamlessly Syncs Physical Stock with Online Sales", description: "Your brick-and-mortar inventory and online store work as one unified system. When a customer buys online, stock automatically adjusts across all channels. No overselling, no manual updates, no headaches.", highlights: ["Real-time inventory synchronization", "Multi-channel order management", "Automated stock alerts and reordering", "Unified customer data across touchpoints"] },
    { icon: Package, title: "Inventory Management", benefit: "Real-Time Tracking Across Multiple Warehouses", description: "See exactly what you have, where it is, and when to reorder. Our intelligent inventory system tracks every item across unlimited locations, with barcode scanning, batch tracking, and expiration date management.", highlights: ["Multi-warehouse & location support", "Barcode & QR code scanning", "Automated low-stock notifications", "FIFO/LIFO costing methods", "Lot & serial number tracking"] },
    { icon: UtensilsCrossed, title: "Menu Management (Restaurants)", benefit: "Built for Hospitality: Modifiers & Kitchen Display", description: "Restaurant-specific features that understand your workflow. Manage complex menus with modifiers, combo deals, and seasonal items. Orders flow directly to kitchen displays with timing and priority management.", highlights: ["Drag-and-drop menu builder", "Unlimited modifiers & variations", "Kitchen Display System (KDS)", "Recipe costing & ingredient tracking", "Time-based menu switching"] },
    { icon: Users, title: "HR System", benefit: "Payroll, Shifts, and Employee Performance in One Place", description: "From scheduling to payroll, manage your entire workforce effortlessly. Track hours, process payroll, monitor performance metrics, and ensure compliance—all integrated with your POS for commission tracking.", highlights: ["Automated shift scheduling", "Integrated payroll processing", "Performance reviews & KPI tracking", "Employee self-service portal", "Commission calculation tied to sales"] },
    { icon: Heart, title: "CRM & Loyalty", benefit: "Turn One-Time Buyers into Lifetime Customers", description: "Know your customers intimately. Track purchase history, preferences, and behavior. Launch targeted campaigns, manage loyalty programs, and automate personalized marketing—all powered by real transaction data.", highlights: ["Profiles with purchase history", "Points-based & tiered loyalty", "Automated email & SMS campaigns", "Birthday & anniversary rewards", "Customer segmentation & analytics"] },
    { icon: DollarSign, title: "Finance & Accounting", benefit: "Integrated Accounting That Writes Itself", description: "Your books stay current automatically. Every sale, refund, and expense flows directly into your accounting system. Generate financial reports, track profitability by product or location, and simplify tax season.", highlights: ["Automated general ledger entries", "Profit & loss by location/product", "Tax calculation & reporting", "Integration with QuickBooks & Xero", "Customizable financial dashboards"] },
  ];

  return (
    <section className="py-32  text-white relative border-t border-white/5">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#9306FF]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-[#9306FF]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            The Complete{" "}
            <span className="text-[#9306FF] drop-shadow-[0_0_20px_rgba(147,6,255,0.4)]">
              ERP Feature Set
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
            Everything you need to run a modern business, all in one place
          </p>
        </motion.div>

        <div className="space-y-8">
          {erpFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/[0.02] rounded-[2rem] transition-all duration-500 border border-white/5 hover:border-[#9306FF]/30 hover:bg-white/[0.04] group overflow-hidden"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left Column: Icon & Title */}
                  <div className="lg:col-span-2 p-10 flex flex-col justify-center relative border-b lg:border-b-0 lg:border-r border-white/5">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#9306FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-[#9306FF]/10 border border-[#9306FF]/30 shadow-[0_0_20px_rgba(147,6,255,0.15)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon size={30} className="text-[#d8b4ff]" />
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-3 tracking-tight text-white">
                        {feature.title}
                      </h3>
                      <p className="text-lg font-medium leading-relaxed text-[#9306FF]">
                        {feature.benefit}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Description & Highlights */}
                  <div className="lg:col-span-3 p-10 relative">
                    <p className="text-gray-400 mb-8 text-lg leading-relaxed font-light">
                      {feature.description}
                    </p>
                    <div className="bg-white/[0.02] rounded-2xl p-6 border border-white/5">
                      <ul className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                        {feature.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start text-base group/item">
                            <span className="mr-3 mt-1.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center transition-all shadow-[0_0_8px_rgba(147,6,255,0.3)] bg-[#9306FF]/20 group-hover/item:bg-[#9306FF] group-hover/item:shadow-[0_0_12px_#9306FF]">
                              <Check size={10} strokeWidth={4} className="text-white opacity-80 group-hover/item:opacity-100" />
                            </span>
                            <span className="text-gray-300 font-medium transition-colors group-hover/item:text-white">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}