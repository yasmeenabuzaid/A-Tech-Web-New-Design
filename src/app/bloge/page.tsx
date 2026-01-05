"use client";

import { useState } from "react";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string[];
    date: string;
    readTime: string;
    category: string;
    author: string;
    tags: string[];
}

// const blogPosts: BlogPost[] = [
//   {
//     id: 'unified-commerce-2025',
//     title: 'Digital Transformation in Retail: Why Unified Commerce is Non-Negotiable in 2025',
//     excerpt: 'The days of treating online and offline as separate channels are over. Modern consumers expect seamless experiences, and your systems must keep up. Here\'s how unified commerce drives real ROI...',
//     date: 'December 10, 2025',
//     readTime: '8 min read',
//     category: 'Digital Transformation',
//     author: 'Sarah Chen, Head of Retail Solutions',
//     tags: ['Retail', 'E-commerce', 'Digital Transformation', 'Omnichannel'],
//     content: [
//       'The retail landscape has fundamentally changed. Customers no longer think in terms of "online" versus "in-store"—they expect a seamless experience regardless of where they interact with your brand. Yet many retailers still operate with fragmented systems that create friction at every turn.',

//       '**The Cost of Fragmentation**\n\nConsider this scenario: A customer browses your website, adds items to their cart, but decides to complete the purchase in-store. With disconnected systems, that cart doesn\'t follow them. The in-store associate can\'t see their browsing history, preferences, or wishlist. You\'ve just lost valuable data and created a frustrating customer experience.',

//       'Our research shows that retailers with fragmented systems experience:\n• 23% higher cart abandonment rates\n• 40% more customer service inquiries about stock availability\n• 18% lower customer lifetime value\n• An average of 12 hours per week spent on manual reconciliation',

//       '**What is Unified Commerce?**\n\nUnified commerce goes beyond omnichannel. It\'s not just about being present on multiple channels—it\'s about having a single, centralized system that powers all of them. One inventory count. One customer profile. One source of truth.',

//       'In a unified commerce model:\n• Inventory updates in real-time across all channels\n• Customer data is accessible anywhere—POS, e-commerce, mobile app\n• Pricing and promotions are consistent and automatically synced\n• Returns can be processed at any location, regardless of purchase channel\n• Analytics provide a complete view of business performance',

//       '**The ROI is Undeniable**\n\nWe analyzed data from 47 retail clients who transitioned from fragmented systems to our unified platform. The results:\n\n• **Revenue Impact:** 34% average increase in online sales within 6 months (due to accurate stock visibility and confidence)\n• **Operational Efficiency:** 42% reduction in time spent on inventory management\n• **Customer Satisfaction:** 28% improvement in NPS scores\n• **Cost Savings:** $50K+ annual savings from eliminating overselling and stockouts',

//       '**Real-World Success: Urban Outfitters Chain**\n\nA 12-location fashion retailer was hemorrhaging money from overselling. Their e-commerce platform didn\'t sync with their POS, leading to frequent order cancellations and angry customers. After implementing our unified platform:\n\n• Overselling reduced from 147 incidents per month to fewer than 2\n• Online conversion rate increased 41% due to accurate stock displays\n• Customer service calls about stock issues dropped 73%\n• Daily reconciliation time went from 8 hours to 15 minutes',

//       '**The Technology Behind Unified Commerce**\n\nBuilding a truly unified system requires more than just API integrations. It demands:\n\n1. **Real-Time Data Synchronization:** Not batch updates—instant propagation of inventory, pricing, and customer data\n2. **Cloud-Native Architecture:** Scalable infrastructure that can handle peak loads without degradation\n3. **Intelligent Conflict Resolution:** What happens when two customers try to buy the last item simultaneously?\n4. **Offline Resilience:** POS systems that work when internet fails, with smart sync when connection restores',

//       '**Making the Transition**\n\nThe biggest objection we hear: "We can\'t afford the disruption of switching systems." Here\'s the truth—you can\'t afford NOT to switch. Every day you operate with fragmented systems, you\'re losing revenue and damaging customer relationships.\n\nOur phased migration approach minimizes risk:\n• Start with 1-2 pilot locations\n• Run parallel systems for 2-4 weeks\n• Validate data accuracy before full cutover\n• Provide on-site training and 24/7 support\n• Typical full deployment: 6-8 weeks',

//       '**The Bottom Line**\n\nUnified commerce isn\'t a luxury—it\'s table stakes for competing in 2025. Customers expect it. Your margins depend on it. The technology exists today to make it happen seamlessly.\n\nThe question isn\'t "Should we unify our systems?" It\'s "How quickly can we get started?"'
//     ]
//   },
//   {
//     id: 'manual-inventory-costs',
//     title: 'The Hidden Cost of Manual Inventory Management (And How to Fix It)',
//     excerpt: 'Spreadsheets and gut feelings might have worked in 2010, but they\'re costing you thousands monthly in 2025. We break down the real impact of outdated inventory practices and the path forward...',
//     date: 'December 5, 2025',
//     readTime: '6 min read',
//     category: 'Retail Operations',
//     author: 'Michael Torres, Supply Chain Consultant',
//     tags: ['Inventory Management', 'Operations', 'Cost Reduction', 'Automation'],
//     content: [
//       'If you\'re still managing inventory with spreadsheets, manual counts, and "gut feeling," you\'re not just behind the times—you\'re actively losing money every single day. Let\'s talk about the real costs hiding in your current process.',

//       '**The True Cost of Manual Inventory**\n\nMost retailers focus on the obvious costs: staff time spent counting, data entry errors, occasional stockouts. But the hidden costs are far more damaging:\n\n**1. Opportunity Cost of Tied-Up Capital**\nManual inventory management leads to over-ordering "just to be safe." Our analysis of 30 retail clients found an average of 27% excess inventory sitting in warehouses—that\'s capital that could be invested in marketing, expansion, or your bottom line.',

//       '**2. Shrinkage and Theft**\nWithout real-time tracking, theft goes unnoticed until quarterly physical counts. By then, it\'s too late. Retailers with automated systems detect anomalies immediately through variance alerts. Average shrinkage reduction after automation: 64%.',

//       '**3. Lost Sales from Stockouts**\nThis is the killer. You can\'t sell what you don\'t have. Manual systems can\'t predict demand patterns or trigger automatic reordering. Result? You run out of bestsellers while slow-movers collect dust. Industry data shows automated inventory systems reduce stockouts by 78%.',

//       '**4. Labor Inefficiency**\nHow many hours per week does your team spend:\n• Manually counting stock\n• Entering data into spreadsheets\n• Reconciling discrepancies between systems\n• Creating purchase orders based on gut feeling\n• Searching for misplaced items\n\nFor a typical 5-location retailer: 35-50 hours per week. At $20/hour loaded cost, that\'s $36,000 to $52,000 annually just in direct labor.',

//       '**Case Study: Home Goods Retailer**\n\nA 3-location home goods store was using Excel and weekly manual counts. Their pain points:\n• Stock discrepancies averaging 15% variance\n• 2-3 stockouts per week on popular items\n• 40 hours weekly spent on inventory tasks\n• No visibility into what was selling until month-end\n\nAfter implementing automated inventory management:\n• Real-time accuracy within 1.2% variance\n• Stockouts reduced to fewer than 1 per month\n• Inventory tasks down to 8 hours weekly\n• Daily sales dashboards enabling data-driven ordering\n• ROI achieved in 4.5 months',

//       '**What Modern Inventory Management Looks Like**\n\nAutomated inventory systems provide:\n\n**Real-Time Tracking**\nEvery sale, return, and transfer updates inventory instantly across all locations. No more "let me check the back" or "that must have sold this morning."',

//       '**Predictive Reordering**\nMachine learning analyzes historical sales patterns, seasonality, and trends to predict when you\'ll run out and automatically generate purchase orders.',

//       '**Multi-Location Visibility**\nSee inventory levels across all warehouses and stores in one dashboard. Transfer stock between locations to prevent stockouts without over-ordering.',

//       '**Barcode/RFID Integration**\nReceiving, counting, and sales happen with a scan. No more manual data entry errors.',

//       '**Automated Alerts**\nGet notified when:\n• Stock falls below minimum levels\n• Items haven\'t sold in 90+ days\n• Variance between expected and actual inventory exceeds threshold\n• High-value items are transferred or sold',

//       '**The ROI Math**\n\nLet\'s calculate the annual cost of manual inventory for a mid-size retailer:\n\n• Labor inefficiency: $45,000\n• Excess inventory (capital cost at 10%): $135,000\n• Lost sales from stockouts: $89,000\n• Shrinkage: $34,000\n• Data entry errors and corrections: $12,000\n\n**Total Annual Cost: $315,000**\n\nAutomated inventory system cost:\n• Software: $15,000/year\n• Implementation: $8,000 one-time\n• Training: $3,000\n\n**First Year Total: $26,000**\n**Annual Savings: $289,000**\n**ROI: 1,113%**',

//       '**Making the Switch**\n\nThe transition doesn\'t have to be painful. Modern inventory systems integrate with your existing POS, accounting software, and e-commerce platforms. Implementation typically takes 2-4 weeks with minimal disruption.\n\nKey steps:\n1. Conduct a complete physical inventory (one last time)\n2. Configure the system with your products, locations, and reorder rules\n3. Train staff on barcode scanning and basic system use\n4. Go live with parallel systems for 1-2 weeks\n5. Cut over fully once data accuracy is validated',

//       '**Stop Bleeding Money**\n\nEvery month you delay is another month of lost revenue, excess inventory, and wasted labor. The technology is mature, affordable, and proven.\n\nIf you\'re still managing inventory manually in 2025, you\'re not competing on a level playing field. Your competitors have already made the switch—and they\'re using their cost savings to undercut your prices and invest in growth.\n\nThe question is: will you catch up, or fall further behind?'
//     ]
//   },
//   {
//     id: 'custom-erp-vs-off-shelf',
//     title: 'Why Custom ERPs Beat Off-the-Shelf Software for Growing Businesses',
//     excerpt: 'Generic ERPs force you to change your processes to fit their limitations. Custom-built systems do the opposite—they amplify your competitive advantages. Here\'s when customization makes financial sense...',
//     date: 'November 28, 2025',
//     readTime: '10 min read',
//     category: 'Enterprise Software',
//     author: 'David Kim, Chief Technology Officer',
//     tags: ['ERP', 'Custom Software', 'Business Strategy', 'ROI'],
//     content: [
//       'Every growing business reaches an inflection point where spreadsheets and basic tools can\'t keep up. The natural next step? Implementing an ERP system. But here\'s where most companies make a critical mistake: they assume off-the-shelf is always the safer, cheaper option.',

//       '**The Off-the-Shelf Trap**\n\nPackaged ERP solutions like SAP, Oracle, and Microsoft Dynamics promise "best practices" and "industry-standard workflows." What they actually deliver is a rigid system that forces you to adapt your business to their software—not the other way around.\n\nCommon problems we see with off-the-shelf ERPs:\n\n• **Feature Bloat:** You pay for thousands of features you\'ll never use\n• **Complex Customization:** Want to change a workflow? That\'ll be $50K-$200K in consulting fees\n• **Vendor Lock-In:** Switching costs become prohibitive after year two\n• **Integration Nightmares:** "Best-of-breed" approach requires expensive middleware\n• **User Adoption Issues:** Overly complex interfaces require months of training',

//       '**When Off-the-Shelf Makes Sense**\n\nLet\'s be fair—packaged ERPs work well for:\n• Businesses with completely standard processes\n• Industries with strict regulatory requirements already built into the software\n• Organizations with large IT teams to manage complexity\n• Companies that can afford 12-24 month implementation cycles\n\nIf that\'s you, stop reading. But if your competitive advantage comes from doing things differently than your competitors, keep going.',

//       '**The Custom ERP Advantage**\n\nCustom ERPs are built around YOUR processes, not generic "best practices." This fundamental difference creates massive advantages:\n\n**1. Competitive Differentiation**\nYour unique workflows—the ones that make you better than competitors—become embedded in the software. Off-the-shelf ERPs force everyone to work the same way. Custom ERPs amplify what makes you special.',

//       '**Real Example:** A specialty food distributor had a unique "just-in-time" sourcing model that gave them a cost advantage. Off-the-shelf ERPs couldn\'t support this workflow. We built a custom system that automated their entire sourcing process, reducing procurement time by 73% while maintaining their competitive edge.',

//       '**2. Pay Only for What You Need**\nWhy pay enterprise licensing fees for features you\'ll never use? Custom development gives you exactly what you need—nothing more, nothing less.\n\nTypical off-the-shelf ERP licensing:\n• Base license: $250-$1,000 per user/year\n• Modules you don\'t need: 60-70% of features\n• Maintenance: 18-22% annually\n• Customization: $50K-$500K\n\nCustom ERP investment:\n• Development: Fixed project cost\n• Hosting: $500-$2,000/month\n• Maintenance: 15-20% annually\n• Future features: Incremental development as needed',

//       '**3. Rapid Deployment**\nModern development frameworks and cloud infrastructure enable custom ERP deployment in 3-6 months—faster than most off-the-shelf implementations.\n\nWhy? Because we\'re building only what you need, not configuring a massive system to suppress features you don\'t want.',

//       '**4. True Integration**\nCustom ERPs are built with your exact tech stack in mind. Native integrations with your POS, e-commerce platform, shipping carriers, and accounting software—not clunky middleware that breaks with every update.',

//       '**5. User Adoption**\nWhen software matches how your team already thinks about work, training takes hours instead of months. We\'ve seen custom ERPs achieve 90%+ user adoption within the first week—compared to 40-60% after three months for packaged solutions.',

//       '**Case Study: Manufacturing Company Transformation**\n\nA custom furniture manufacturer was quoted $380K for an SAP implementation with 14-month timeline. They came to us instead.\n\n**Their Unique Requirements:**\n• Complex made-to-order workflow with customer design approval\n• Integration with CNC machines for automated production\n• Real-time material cost tracking (wood prices fluctuate daily)\n• Custom pricing engine based on design complexity\n• Vendor management for 200+ specialty suppliers\n\nOff-the-shelf solution couldn\'t handle their pricing engine without major customization. Our approach:\n\n**Development Timeline:**\n• Discovery & Design: 3 weeks\n• Core Development: 12 weeks\n• Integration & Testing: 4 weeks\n• Deployment & Training: 2 weeks\n\n**Total Time:** 21 weeks (5 months)\n**Total Investment:** $145,000\n\n**Results After 12 Months:**\n• Quote generation time: from 4 hours to 12 minutes\n• Material waste: reduced 23% through better tracking\n• Production scheduling errors: down 89%\n• Customer design revision cycles: 41% faster\n• Annual savings: $267,000\n\n**ROI: 184% in first year**',

//       '**The Cost Reality Check**\n\nLet\'s compare 5-year total cost of ownership for a 50-person company:\n\n**Off-the-Shelf ERP:**\n• Licensing (50 users × 5 years): $125,000-$300,000\n• Implementation: $100,000-$400,000\n• Customization: $75,000-$250,000\n• Training: $30,000-$80,000\n• Annual maintenance (22%): $73,000-$228,000\n• **5-Year Total: $403,000-$1,258,000**\n\n**Custom ERP:**\n• Development: $120,000-$280,000\n• Hosting (5 years): $36,000-$120,000\n• Maintenance (18% annually): $108,000-$252,000\n• Training: $8,000-$20,000\n• **5-Year Total: $272,000-$672,000**\n\n**Savings with custom: $131,000-$586,000 over 5 years**',

//       '**When Custom Makes Sense**\n\nConsider custom ERP development if:\n\n✓ Your competitive advantage depends on unique processes\n✓ You need tight integration with specialized equipment or systems\n✓ Your industry has workflows that don\'t fit standard templates\n✓ You\'re growing fast and need software that evolves with you\n✓ You want to own your software, not rent it forever\n✓ User adoption and ease of use are critical\n✓ You need deployment in months, not years',

//       '**The Build vs. Buy Decision Framework**\n\nAsk yourself:\n\n1. **How unique are our core processes?**\n   - Standard: Off-the-shelf\n   - Moderately unique: Hybrid approach\n   - Highly differentiated: Custom\n\n2. **What\'s our timeline?**\n   - 18+ months acceptable: Off-the-shelf possible\n   - 6-12 months needed: Custom\n\n3. **What\'s our IT capability?**\n   - Large IT team: Either works\n   - Small/no IT team: Custom (with managed services)\n\n4. **How important is competitive advantage?**\n   - Compete on price/scale: Off-the-shelf fine\n   - Compete on unique value: Custom essential',

//       '**The Future-Proof Advantage**\n\nHere\'s what nobody tells you about off-the-shelf ERPs: you\'re betting your business on someone else\'s roadmap. Want a new feature? Get in line with 10,000 other customers hoping the vendor prioritizes it.\n\nWith custom ERPs, you control the roadmap. New market opportunity? Add the features you need in weeks, not years. Competitive threat? Adapt immediately.\n\nIn fast-moving industries, this agility isn\'t just nice to have—it\'s survival.',

//       '**Taking the First Step**\n\nIf you\'re considering an ERP investment, don\'t assume off-the-shelf is the default choice. Get a custom development quote. You might be surprised to find it\'s not only more affordable but faster, more powerful, and better aligned with your actual needs.\n\nThe companies winning in 2025 aren\'t the ones using the same software as everyone else. They\'re the ones whose software gives them an unfair advantage.\n\nWhich side do you want to be on?'
//     ]
//   }
// ];

const blogPosts: BlogPost[] = [];
export function Blog() {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const categories = [
        "all",
        ...new Set(blogPosts.map((post) => post.category)),
    ];

    const filteredPosts = blogPosts.filter((post) => {
        const matchesSearch =
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some((tag) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
            );
        const matchesCategory =
            selectedCategory === "all" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    if (selectedPost) {
        return (
            <div className="min-h-screen bg-white">
                {/* Article Hero */}
                <article
                    className="py-12"
                    style={{ backgroundColor: "#031338" }}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => setSelectedPost(null)}
                            className="text-gray-300 hover:text-white mb-8 flex items-center transition-colors"
                        >
                            ← Back to Blog
                        </button>

                        <div
                            className="inline-block px-4 py-2 rounded-full mb-6 text-sm"
                            style={{
                                backgroundColor: "rgba(147, 6, 255, 0.2)",
                                color: "#9306FF",
                            }}
                        >
                            {selectedPost.category}
                        </div>

                        <h1 className="text-4xl md:text-5xl text-white mb-6">
                            {selectedPost.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-gray-300">
                            <span>{selectedPost.author}</span>
                            <span className="flex items-center">
                                <Calendar size={16} className="mr-2" />
                                {selectedPost.date}
                            </span>
                            <span className="flex items-center">
                                <Clock size={16} className="mr-2" />
                                {selectedPost.readTime}
                            </span>
                        </div>
                    </div>
                </article>

                {/* Article Content */}
                <div className="py-16 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="prose prose-lg max-w-none">
                            {selectedPost.content.map((paragraph, index) => {
                                // Check if paragraph contains markdown-style bold
                                if (paragraph.includes("**")) {
                                    const parts = paragraph.split("**");
                                    return (
                                        <p
                                            key={index}
                                            className="mb-6 text-gray-700 leading-relaxed"
                                        >
                                            {parts.map((part, i) =>
                                                i % 2 === 1 ? (
                                                    <strong
                                                        key={i}
                                                        style={{
                                                            color: "#031338",
                                                        }}
                                                    >
                                                        {part}
                                                    </strong>
                                                ) : (
                                                    part
                                                )
                                            )}
                                        </p>
                                    );
                                }
                                // Check if it's a bullet list
                                else if (paragraph.includes("\n•")) {
                                    const [intro, ...items] =
                                        paragraph.split("\n");
                                    return (
                                        <div key={index} className="mb-6">
                                            {intro && (
                                                <p className="mb-3 text-gray-700">
                                                    {intro}
                                                </p>
                                            )}
                                            <ul className="space-y-2 ml-6">
                                                {items.map(
                                                    (item, i) =>
                                                        item.startsWith(
                                                            "•"
                                                        ) && (
                                                            <li
                                                                key={i}
                                                                className="text-gray-700 leading-relaxed"
                                                            >
                                                                {item
                                                                    .substring(
                                                                        1
                                                                    )
                                                                    .trim()}
                                                            </li>
                                                        )
                                                )}
                                            </ul>
                                        </div>
                                    );
                                }
                                // Check if it's a numbered list
                                else if (/^\d+\./.test(paragraph)) {
                                    const items = paragraph.split("\n");
                                    return (
                                        <ol
                                            key={index}
                                            className="space-y-2 ml-6 mb-6 list-decimal"
                                        >
                                            {items.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="text-gray-700 leading-relaxed"
                                                >
                                                    {item.replace(
                                                        /^\d+\.\s*/,
                                                        ""
                                                    )}
                                                </li>
                                            ))}
                                        </ol>
                                    );
                                }
                                // Check if it starts with checkmark
                                else if (paragraph.includes("✓")) {
                                    const items = paragraph.split("\n");
                                    return (
                                        <ul
                                            key={index}
                                            className="space-y-2 mb-6"
                                        >
                                            {items.map(
                                                (item, i) =>
                                                    item.includes("✓") && (
                                                        <li
                                                            key={i}
                                                            className="flex items-start text-gray-700"
                                                        >
                                                            <span
                                                                className="mr-2"
                                                                style={{
                                                                    color: "#9306FF",
                                                                }}
                                                            >
                                                                ✓
                                                            </span>
                                                            <span>
                                                                {item
                                                                    .replace(
                                                                        "✓",
                                                                        ""
                                                                    )
                                                                    .trim()}
                                                            </span>
                                                        </li>
                                                    )
                                            )}
                                        </ul>
                                    );
                                }
                                // Regular paragraph
                                else {
                                    return (
                                        <p
                                            key={index}
                                            className="mb-6 text-gray-700 leading-relaxed text-lg"
                                        >
                                            {paragraph}
                                        </p>
                                    );
                                }
                            })}
                        </div>

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-3 flex-wrap">
                                <Tag size={20} className="text-gray-400" />
                                {selectedPost.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Author CTA */}
                        <div
                            className="mt-12 p-8 rounded-2xl"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(147, 6, 255, 0.05) 0%, rgba(3, 19, 56, 0.02) 100%)",
                            }}
                        >
                            <h3
                                className="text-2xl mb-3"
                                style={{ color: "#031338" }}
                            >
                                Want to Learn More?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Our team of experts can help you implement these
                                strategies in your business. Let's discuss your
                                specific challenges and opportunities.
                            </p>
                            <button
                                className="px-6 py-3 rounded-lg text-white transition-all hover:shadow-lg"
                                style={{ backgroundColor: "#9306FF" }}
                            >
                                Schedule a Consultation
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                <div className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3
                            className="text-3xl mb-8"
                            style={{ color: "#031338" }}
                        >
                            More Insights
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {blogPosts
                                .filter((p) => p.id !== selectedPost.id)
                                .slice(0, 2)
                                .map((post) => (
                                    <div
                                        key={post.id}
                                        onClick={() => setSelectedPost(post)}
                                        className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer p-6"
                                    >
                                        <div
                                            className="inline-block px-3 py-1 rounded-full text-xs mb-4"
                                            style={{
                                                backgroundColor:
                                                    "rgba(147, 6, 255, 0.1)",
                                                color: "#9306FF",
                                            }}
                                        >
                                            {post.category}
                                        </div>
                                        <h4
                                            className="text-xl mb-3 hover:text-[#9306FF] transition-colors"
                                            style={{ color: "#031338" }}
                                        >
                                            {post.title}
                                        </h4>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <span className="flex items-center">
                                                <Calendar
                                                    size={14}
                                                    className="mr-1"
                                                />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center">
                                                <Clock
                                                    size={14}
                                                    className="mr-1"
                                                />
                                                {post.readTime}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Blog listing view
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section
                className="text-white py-20"
                style={{ backgroundColor: "#031338" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl mb-6">
                            Insights &{" "}
                            <span style={{ color: "#9306FF" }}>Expertise</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Deep dives into digital transformation, retail
                            innovation, restaurant technology, and enterprise
                            software strategy from our team of industry experts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Search & Filter */}
            <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                size={20}
                            />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#9306FF] focus:outline-none transition-colors"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex gap-2 overflow-x-auto">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                    className={`px-4 py-3 rounded-lg whitespace-nowrap transition-all ${
                                        selectedCategory === category
                                            ? "text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                    style={
                                        selectedCategory === category
                                            ? { backgroundColor: "#9306FF" }
                                            : {}
                                    }
                                >
                                    {category.charAt(0).toUpperCase() +
                                        category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-600">
                                No articles found matching your search.
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <article
                                    key={post.id}
                                    onClick={() => setSelectedPost(post)}
                                    className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
                                >
                                    {/* Featured Image Placeholder */}
                                    <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#9306FF]/10 to-[#031338]/10 group-hover:scale-110 transition-transform duration-500"></div>
                                        <div className="absolute top-4 left-4">
                                            <span
                                                className="px-3 py-1 rounded-full text-xs text-white"
                                                style={{
                                                    backgroundColor: "#9306FF",
                                                }}
                                            >
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <span className="flex items-center">
                                                <Calendar
                                                    size={14}
                                                    className="mr-1"
                                                />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center">
                                                <Clock
                                                    size={14}
                                                    className="mr-1"
                                                />
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

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">
                                                {post.author.split(",")[0]}
                                            </span>
                                            <button
                                                className="flex items-center text-sm group/btn"
                                                style={{ color: "#9306FF" }}
                                            >
                                                Read More
                                                <ArrowRight
                                                    size={16}
                                                    className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section
                className="py-20 text-white"
                style={{ backgroundColor: "#031338" }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl mb-6">Stay Updated</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Get the latest insights on retail technology, digital
                        transformation, and business software delivered to your
                        inbox monthly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none"
                        />
                        <button
                            className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-xl whitespace-nowrap"
                            style={{ backgroundColor: "#9306FF" }}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Blog ;