import React from "react";

export const StatsSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl mb-4" style={{ color: "#031338" }}>
          Trusted by Industry Leaders
        </h2>
        <p className="text-xl text-gray-600">
          Join hundreds of businesses transforming their operations
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl">
          <div className="text-5xl mb-4" style={{ color: "#9306FF" }}>
            500+
          </div>
          <h4 className="mb-2" style={{ color: "#031338" }}>
            Projects Delivered
          </h4>
          <p className="text-gray-600">
            Across retail, hospitality, healthcare, and finance sectors
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl">
          <div className="text-5xl mb-4" style={{ color: "#9306FF" }}>
            98%
          </div>
          <h4 className="mb-2" style={{ color: "#031338" }}>
            Client Satisfaction
          </h4>
          <p className="text-gray-600">
            Long-term partnerships built on trust and results
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl">
          <div className="text-5xl mb-4" style={{ color: "#9306FF" }}>
            24/7
          </div>
          <h4 className="mb-2" style={{ color: "#031338" }}>
            Support & Monitoring
          </h4>
          <p className="text-gray-600">
            Always-on support keeps your business running smoothly
          </p>
        </div>
      </div>
    </div>
  </section>
);

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export const CTASection = ({
  title = "Ready to Transform Your Business?",
  description = "Whether you need a custom solution or want to experience our all-in-one platform.", 
  buttonText = "Get a Quote", 
}: CTASectionProps) => (
  <section
    className="py-20 text-white"
    style={{ backgroundColor: "#031338" }}
  >
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-xl text-gray-300 mb-8">{description}</p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          className="px-8 py-4 rounded-lg font-bold transition-all hover:scale-105"
          style={{ backgroundColor: "#9306FF" }}
        >
          {buttonText}
        </button>
        
        <button className="px-8 py-4 rounded-lg border-2 border-white font-bold hover:bg-white/10 transition-all">
          See How We Work
        </button>
      </div>
    </div>
  </section>
);