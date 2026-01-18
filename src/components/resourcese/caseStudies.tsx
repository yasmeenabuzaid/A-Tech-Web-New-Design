"use client";

export function CaseStudies() {
  const caseStudies = [
    {
      title:
        "Urban Fashion Retailer: From Stockout Chaos to 99.9% Inventory Accuracy",
      category: "Retail Case Study",
      client: "12-Location Fashion Chain",
      challenge:
        "Frequent overselling, 8 hours daily manual reconciliation, disconnected online/offline inventory",
      process: [
        "Discovery: Mapped current workflows and pain points across all 12 locations",
        "Design: Created unified inventory dashboard with real-time sync architecture",
        "Development: Built custom integrations with Shopify and existing POS",
        "QA: Stress-tested with Black Friday simulation",
        "Deployment: Phased rollout starting with 2 pilot stores",
        "Support: 24/7 monitoring during critical sales periods",
      ],
      outcome:
        "99.9% inventory accuracy, $50K annual savings from eliminated overselling, 34% increase in online sales confidence, reconciliation reduced from 8 hours to 15 minutes daily",
      metrics: {
        timeSaved: "42 hours/week",
        revenue: "+34%",
        roi: "4.2 months",
      },
    },
    {
      title: "The Bistro Group: Cutting Labor Costs 28% While Improving Service",
      category: "Hospitality Case Study",
      client: "5-Location Casual Dining Chain",
      challenge:
        "36% labor costs, 8% food waste, slow table turns, no centralized management visibility",
      process: [
        "Discovery: Analyzed historical sales data and staffing patterns",
        "Design: Created predictive scheduling algorithm and kitchen workflow optimization",
        "Development: Integrated POS, KDS, and HR systems with custom reporting",
        "QA: Live testing during peak dinner service",
        "Deployment: Simultaneous launch across all 5 locations with on-site training",
        "Support: Weekly optimization reviews for first 3 months",
      ],
      outcome:
        "Labor costs reduced from 36% to 27%, food waste cut to 4.2%, 40% increase in table turns, real-time multi-location visibility for ownership",
      metrics: {
        savings: "$170K/year",
        foodWaste: "-47%",
        efficiency: "+40%",
      },
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl mb-4" style={{ color: "#031338" }}>
            Featured Case Studies
          </h2>
          <p className="text-xl text-gray-600">
            Deep dives into client transformations, from challenge to measurable
            results
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="p-8 border-b border-gray-200">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div
                      className="inline-block px-4 py-1 rounded-full text-sm mb-4"
                      style={{
                        backgroundColor: "rgba(147, 6, 255, 0.1)",
                        color: "#9306FF",
                      }}
                    >
                      {study.category}
                    </div>
                    <h3
                      className="text-3xl mb-3"
                      style={{ color: "#031338" }}
                    >
                      {study.title}
                    </h3>
                    <p className="text-gray-600">
                      Client:{" "}
                      <span style={{ color: "#031338" }}>{study.client}</span>
                    </p>
                  </div>
                  <div className="flex gap-4">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center bg-white px-6 py-4 rounded-xl"
                      >
                        <div
                          className="text-2xl mb-1"
                          style={{ color: "#9306FF" }}
                        >
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* The Problem */}
                  <div>
                    <h4
                      className="mb-4 flex items-center"
                      style={{ color: "#031338" }}
                    >
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white text-sm"
                        style={{ backgroundColor: "#9306FF" }}
                      >
                        1
                      </span>
                      The Problem
                    </h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>

                  {/* The Process */}
                  <div>
                    <h4
                      className="mb-4 flex items-center"
                      style={{ color: "#031338" }}
                    >
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white text-sm"
                        style={{ backgroundColor: "#9306FF" }}
                      >
                        2
                      </span>
                      The SDLC Process Applied
                    </h4>
                    <ul className="space-y-2">
                      {study.process.map((step, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <span
                            className="mr-2 mt-1"
                            style={{ color: "#9306FF" }}
                          >
                            →
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* The Outcome */}
                  <div>
                    <h4
                      className="mb-4 flex items-center"
                      style={{ color: "#031338" }}
                    >
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white text-sm"
                        style={{ backgroundColor: "#9306FF" }}
                      >
                        3
                      </span>
                      The Outcome
                    </h4>
                    <p className="text-gray-600 mb-4">{study.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}