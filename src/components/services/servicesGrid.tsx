"use client";
import React from "react";
import { Globe, Smartphone, Cloud, Plug, Database, Lock, Zap, BarChart } from "lucide-react";
import { ServiceCard } from "./serviceCard";

export const ServicesGrid: React.FC = () => {
  const servicesData = [
    { icon: Globe, title: 'Web Applications', description: 'Modern, responsive web platforms built with React, Next.js, and cutting-edge frameworks.', features: ['Progressive Web Apps (PWA)', 'Enterprise dashboards', 'E-commerce platforms', 'Real-time collaboration'] },
    { icon: Smartphone, title: 'Mobile Apps', description: 'Native and cross-platform mobile experiences that users love.', features: ['React Native development', 'Native iOS & Android', 'Offline-first architecture', 'Push notifications'] },
    { icon: Cloud, title: 'Cloud Infrastructure', description: 'Scalable, secure cloud architecture on AWS, Azure, and Google Cloud.', features: ['Serverless architecture', 'Kubernetes orchestration', 'Auto-scaling', 'Disaster recovery'] },
    { icon: Plug, title: 'API Integration', description: 'Connect your systems seamlessly with robust API development.', features: ['RESTful & GraphQL APIs', 'Payment gateways', 'CRM & ERP connectors', 'Webhook automation'] },
    { icon: Database, title: 'Database Design', description: 'Optimized data architecture for performance and reliability.', features: ['SQL & NoSQL solutions', 'Data migration', 'Performance optimization', 'Backup strategies'] },
    { icon: Lock, title: 'Security', description: 'Enterprise-grade security measures and regulatory compliance built-in.', features: ['GDPR & SOC 2 compliance', 'Penetration testing', 'Data encryption', 'Security audits'] },
    { icon: Zap, title: 'DevOps', description: 'Streamlined deployment pipelines and infrastructure as code.', features: ['CI/CD pipeline setup', 'Automated testing', 'Infrastructure monitoring', 'Performance analytics'] },
    { icon: BarChart, title: 'Data Analytics', description: 'Turn raw data into actionable insights with custom analytics solutions.', features: ['Custom dashboards', 'Predictive analytics', 'Data visualization', 'BI integration'] }
  ];

  return (
    <section className="py-12 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};