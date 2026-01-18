"use client";
import { Smartphone, Globe, Cloud, Plug, Database, Lock, Zap, BarChart } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Modern, responsive web platforms built with React, Next.js, and cutting-edge frameworks.',
      features: [
        'Progressive Web Apps (PWA)',
        'Enterprise dashboards & portals',
        'E-commerce platforms',
        'Real-time collaboration tools'
      ],
      color: '#9306FF'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps (iOS & Android)',
      description: 'Native and cross-platform mobile experiences that users love.',
      features: [
        'React Native development',
        'Native iOS (Swift) & Android (Kotlin)',
        'Offline-first architecture',
        'Push notifications & deep linking'
      ],
      color: '#031338'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud architecture on AWS, Azure, and Google Cloud.',
      features: [
        'Serverless architecture',
        'Kubernetes orchestration',
        'Auto-scaling & load balancing',
        'Disaster recovery & backups'
      ],
      color: '#9306FF'
    },
    {
      icon: Plug,
      title: 'API Integration',
      description: 'Connect your systems seamlessly with robust API development and third-party integrations.',
      features: [
        'RESTful & GraphQL APIs',
        'Payment gateway integration',
        'CRM & ERP connectors',
        'Webhook automation'
      ],
      color: '#031338'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Optimized data architecture for performance, reliability, and scalability.',
      features: [
        'SQL & NoSQL solutions',
        'Data migration services',
        'Performance optimization',
        'Backup & replication strategies'
      ],
      color: '#9306FF'
    },
    {
      icon: Lock,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures and regulatory compliance built-in.',
      features: [
        'GDPR, HIPAA, SOC 2 compliance',
        'Penetration testing',
        'Data encryption (at rest & in transit)',
        'Security audits & monitoring'
      ],
      color: '#031338'
    },
    {
      icon: Zap,
      title: 'DevOps & Automation',
      description: 'Streamlined deployment pipelines and infrastructure as code.',
      features: [
        'CI/CD pipeline setup',
        'Automated testing frameworks',
        'Infrastructure monitoring',
        'Performance analytics'
      ],
      color: '#9306FF'
    },
    {
      icon: BarChart,
      title: 'Data Analytics & BI',
      description: 'Turn raw data into actionable insights with custom analytics solutions.',
      features: [
        'Custom dashboards & reporting',
        'Predictive analytics',
        'Data visualization',
        'Business intelligence integration'
      ],
      color: '#031338'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="text-white py-20" style={{ backgroundColor: '#031338' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm">Custom Software Development</span>
            </div>
            <h1 className="text-5xl mb-6">
              Build <span style={{ color: '#9306FF' }}>Exactly</span> What Your Business Needs
            </h1>
            <p className="text-xl text-gray-300">
              No templates. No compromises. Just powerful, scalable software engineered to solve your unique challenges. Our full-stack development team brings enterprise-grade solutions to businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-transparent hover:shadow-2xl transition-all duration-300"
                  style={{
                    '--hover-border': service.color
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = service.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(243 244 246)';
                  }}
                >
                  <div className="flex items-start gap-6">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <Icon size={32} style={{ color: service.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3" style={{ color: '#031338' }}>{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <span className="mr-2 mt-1" style={{ color: service.color }}>▸</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4" style={{ color: '#031338' }}>Our Technology Stack</h2>
            <p className="text-xl text-gray-600">We work with industry-leading frameworks and tools</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="mb-4" style={{ color: '#9306FF' }}>Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Vue.js & Angular</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4" style={{ color: '#9306FF' }}>Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>.NET Core</li>
                <li>Ruby on Rails</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4" style={{ color: '#9306FF' }}>Mobile</h3>
              <ul className="space-y-2 text-gray-600">
                <li>React Native</li>
                <li>Swift (iOS)</li>
                <li>Kotlin (Android)</li>
                <li>Flutter</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4" style={{ color: '#9306FF' }}>Cloud & DevOps</h3>
              <ul className="space-y-2 text-gray-600">
                <li>AWS & Azure</li>
                <li>Docker & Kubernetes</li>
                <li>GitHub Actions</li>
                <li>Terraform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-12">
            <div className="max-w-3xl">
              <h2 className="text-4xl mb-6" style={{ color: '#031338' }}>
                From Concept to Launch in <span style={{ color: '#9306FF' }}>6 Strategic Steps</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our proven SDLC methodology ensures your project stays on time, on budget, and exceeds expectations. Every phase is collaborative, transparent, and focused on delivering real business value.
              </p>
              <button className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-xl"
                      style={{ backgroundColor: '#9306FF' }}>
                Explore Our Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white" style={{ backgroundColor: '#031338' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Let&apos;s Build Something Extraordinary</h2>
          <p className="text-xl text-gray-300 mb-8">
            Have a complex challenge? Need a scalable solution? Our team is ready to architect your next breakthrough.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-xl"
                    style={{ backgroundColor: '#9306FF' }}>
              Get a Custom Quote
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-white text-white transition-all hover:bg-white/10">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Services;