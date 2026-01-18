"use client";

export function IndustryFit() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4" style={{ color: "#031338" }}>
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
            <h3 className="text-2xl mb-4" style={{ color: "#031338" }}>
              Retail & E-commerce
            </h3>
            <p className="text-gray-600 mb-4">
              Perfect for multi-channel retailers. Manage physical stores and
              online sales from one dashboard with synchronized inventory,
              unified customer data, and omnichannel fulfillment.
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
            <h3 className="text-2xl mb-4" style={{ color: "#031338" }}>
              Hospitality & Restaurants
            </h3>
            <p className="text-gray-600 mb-4">
              Designed for food service. From menu engineering to kitchen
              workflows, table management to delivery integration—everything
              hospitality businesses need to thrive.
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
  );
}