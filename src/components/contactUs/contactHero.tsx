"use client";

export function ContactHero() {
  return (
    <section
      className="text-white py-20"
      style={{ backgroundColor: "#031338" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl mb-6">
            Let&apos;s Build Something{" "}
            <span style={{ color: "#9306FF" }}>Extraordinary</span>
          </h1>
          <p className="text-xl text-gray-300">
            Whether you need a custom solution or want to explore our ERP/POS
            platform, we&apos;re here to help. Fill out the form below and we&apos;ll be
            in touch within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}