"use client";

export function ResourcesCTA() {
  return (
    <section
      className="py-20 text-white"
      style={{ backgroundColor: "#031338" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl mb-6">Ready to Write Your Success Story?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Let&apos;s discuss how we can help you achieve similar results in your
          business.
        </p>
        <a href="/contact">
          <button
            className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-xl"
            style={{ backgroundColor: "#9306FF" }}
          >
            Schedule a Consultation
          </button>
        </a>
      </div>
    </section>
  );
}