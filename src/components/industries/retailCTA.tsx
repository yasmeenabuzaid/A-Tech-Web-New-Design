"use client";

export function RetailCTA() {
  return (
    <section
      className="py-20 text-white"
      style={{ backgroundColor: "#031338" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl mb-6">
          Ready to Unify Your Retail Operations?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          See how our platform can eliminate data silos and transform your
          multi-channel retail business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-xl"
            style={{ backgroundColor: "#9306FF" }}
          >
            Schedule a Demo
          </button>
          <button className="px-8 py-4 rounded-lg border-2 border-white text-white transition-all hover:bg-white/10">
            Download Retail Guide
          </button>
        </div>
      </div>
    </section>
  );
}