import React from "react";
import { Code2, Boxes, Shield, TrendingUp } from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(147, 6, 255, 0.1)" }}>
      <Icon size={24} style={{ color: "#9306FF" }} />
    </div>
    <h3 className="text-xl font-bold mb-3" style={{ color: "#031338" }}>{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export const Features = () => {
  const featuresData = [
    { icon: Code2, title: "Custom Built", description: "Bespoke solutions engineered to your exact specifications, not forced into templates." },
    { icon: Boxes, title: "Complete Ecosystem", description: "Our integrated ERP and POS solutions work seamlessly together, out of the box." },
    { icon: Shield, title: "Enterprise Security", description: "Bank-level encryption and compliance standards protect your most sensitive data." },
    { icon: TrendingUp, title: "Proven ROI", description: "Our clients see an average 40% efficiency increase within the first 6 months." }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#031338" }}>Why Choose A-Tech?</h2>
          <p className="text-xl text-gray-600">The perfect blend of custom innovation and proven platforms</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((f, i) => <FeatureCard key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
};