"use client";
import { FileText, ArrowRight, Calendar, Clock } from "lucide-react";

export function BlogPosts() {
  const blogPosts = [
    {
      title:
        "Digital Transformation in Retail: Why Unified Commerce is Non-Negotiable in 2025",
      excerpt:
        "The days of treating online and offline as separate channels are over. Modern consumers expect seamless experiences, and your systems must keep up. Here's how unified commerce drives real ROI...",
      date: "December 10, 2025",
      readTime: "8 min read",
      category: "Digital Transformation",
    },
    {
      title: "The Hidden Cost of Manual Inventory Management (And How to Fix It)",
      excerpt:
        "Spreadsheets and gut feelings might have worked in 2010, but they're costing you thousands monthly in 2025. We break down the real impact of outdated inventory practices and the path forward...",
      date: "December 5, 2025",
      readTime: "6 min read",
      category: "Retail Operations",
    },
    {
      title:
        "Why Custom ERPs Beat Off-the-Shelf Software for Growing Businesses",
      excerpt:
        "Generic ERPs force you to change your processes to fit their limitations. Custom-built systems do the opposite—they amplify your competitive advantages. Here's when customization makes financial sense...",
      date: "November 28, 2025",
      readTime: "10 min read",
      category: "Enterprise Software",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl mb-4" style={{ color: "#031338" }}>
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600">
            Expert perspectives on digital transformation, retail innovation,
            and enterprise software
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer"
            >
              {/* Featured Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText
                    size={48}
                    style={{
                      color: "#9306FF",
                      opacity: 0.3,
                    }}
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs text-white"
                    style={{ backgroundColor: "#9306FF" }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>

                <h3
                  className="text-xl mb-3 group-hover:text-[#9306FF] transition-colors"
                  style={{ color: "#031338" }}
                >
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                <button
                  className="flex items-center text-sm group/btn"
                  style={{ color: "#9306FF" }}
                >
                  Read Article
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}