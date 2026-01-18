import React from "react";

export const ServicesHero = () => {
  return (
    <section 
      className="relative text-white py-24 overflow-hidden" 
      style={{ backgroundColor: "#031338" }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" 
          style={{ backgroundColor: "#9306FF" }} 
        />
        <div 
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl" 
          style={{ backgroundColor: "#9306FF" }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/5">
            <span className="text-sm font-medium">Custom Software Development</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Build <span style={{ color: "#9306FF" }}>Exactly</span> What Your Business Needs
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 leading-relaxed">
            No templates. No compromises. Just powerful, scalable software engineered to solve your unique challenges. Our full-stack development team brings enterprise-grade solutions to businesses of all sizes.
          </p>
        </div>
      </div>
    </section>
  );
};