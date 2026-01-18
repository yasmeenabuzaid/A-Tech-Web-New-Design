"use client";

export function ContactOptions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4" style={{ color: "#031338" }}>
            Other Ways to Connect
          </h2>
          <p className="text-xl text-gray-600">
            Choose the method that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-gray-50">
            <h3 className="text-xl mb-3" style={{ color: "#031338" }}>
              Live Chat
            </h3>
            <p className="text-gray-600 mb-4">
              Get instant answers from our team during business hours
            </p>
            <button
              className="px-6 py-3 rounded-lg text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: "#9306FF" }}
            >
              Start Chat
            </button>
          </div>

          <div className="text-center p-8 rounded-xl bg-gray-50">
            <h3 className="text-xl mb-3" style={{ color: "#031338" }}>
              Schedule a Call
            </h3>
            <p className="text-gray-600 mb-4">
              Book a time that works for your schedule
            </p>
            <button
              className="px-6 py-3 rounded-lg border-2 transition-all hover:bg-purple-50"
              style={{
                borderColor: "#9306FF",
                color: "#9306FF",
              }}
            >
              View Calendar
            </button>
          </div>

          <div className="text-center p-8 rounded-xl bg-gray-50">
            <h3 className="text-xl mb-3" style={{ color: "#031338" }}>
              Knowledge Base
            </h3>
            <p className="text-gray-600 mb-4">
              Find answers in our comprehensive documentation
            </p>
            <button
              className="px-6 py-3 rounded-lg border-2 transition-all hover:bg-purple-50"
              style={{
                borderColor: "#9306FF",
                color: "#9306FF",
              }}
            >
              Browse Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}