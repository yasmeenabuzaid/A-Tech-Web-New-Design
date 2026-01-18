"use client";
import { ShoppingBag } from "lucide-react";

export function RetailHero() {
  return (
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
            Retail & E-commerce <span style={{ color: "#9306FF" }}>Unified</span>
          </h1>
          <p className="text-xl text-gray-300">
            The modern retail landscape demands seamless integration between
            physical and digital storefronts. Our platform eliminates the
            complexity of multi-channel commerce with a unified system that
            keeps inventory, customer data, and financials perfectly
            synchronized.
          </p>
        </div>
      </div>
    </section>
  );
}