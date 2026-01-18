"use client";

export function CTASection() {
  return (
    <section
      className="py-20 text-white"
      style={{ backgroundColor: "#031338" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl mb-6">See It in Action</h2>
        <p className="text-xl text-gray-300 mb-8">
          Book a personalized demo and we&apos;ll show you exactly how our platform
          can transform your operations.
        </p>
        <button
          className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-xl"
          style={{ backgroundColor: "#9306FF" }}
        >
          Schedule Your Demo
        </button>
      </div>
    </section>
  );
}