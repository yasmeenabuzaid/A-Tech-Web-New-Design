import React from "react";

export const ProcessBenefits = () => {
    const benefits = [
        {
            title: "Full Transparency",
            description: "Access our project management tools, view sprint progress in real-time, and participate in every design decision. No surprises, no scope creep.",
            highlight: "Direct Access"
        },
        {
            title: "Risk Mitigation",
            description: "Early prototyping, continuous testing, and iterative development mean we catch issues when they're easy to fix—not after launch.",
            highlight: "Battle-Tested"
        },
        {
            title: "Faster Time-to-Market",
            description: "Agile sprints deliver working features every two weeks. Start seeing ROI before the project even finishes, and pivot based on real feedback.",
            highlight: "Agile Sprints"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 
                        className="text-4xl font-bold mb-4" 
                        style={{ color: "#031338" }}
                    >
                        Why Our Process Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Built on industry best practices and battle-tested over 500+ successful projects across various sectors.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                        >
                            <div 
                                className="absolute -right-4 -top-4 w-16 h-16 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                                style={{ backgroundColor: "#9306FF" }}
                            />
                            
                            <div 
                                className="text-sm font-bold uppercase tracking-widest mb-4" 
                                style={{ color: "#9306FF" }}
                            >
                                {benefit.highlight}
                            </div>
                            
                            <h3 
                                className="text-2xl font-bold mb-4" 
                                style={{ color: "#031338" }}
                            >
                                {benefit.title}
                            </h3>
                            
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};