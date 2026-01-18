import React from "react";

export const TechStack = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 font-bold" style={{ color: "#031338" }}>
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600">We work with industry-leading frameworks and tools</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-left">
          {[
            {
              category: "Frontend",
              items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Vue.js & Angular"],
            },
            {
              category: "Backend",
              items: ["Node.js & Express", "Python & Django", ".NET Core", "Ruby on Rails"],
            },
            {
              category: "Mobile",
              items: ["React Native", "Swift (iOS)", "Kotlin (Android)", "Flutter"],
            },
            {
              category: "Cloud & DevOps",
              items: ["AWS & Azure", "Docker & Kubernetes", "GitHub Actions", "Terraform"],
            },
          ].map((stack, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="mb-4 text-lg font-bold" style={{ color: "#9306FF" }}>
                {stack.category}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {stack.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};