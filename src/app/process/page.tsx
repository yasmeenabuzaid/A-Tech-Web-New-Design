import React from "react";
import { ProcessHero } from "../../components/process/processHero";
import { ProcessTimeline } from "../../components/process/processTimeline";
import { ProcessBenefits } from "../../components/process/processBenefits";
import { CTASection } from "../../components/home/statsAndCTA";

export default function ProcessPage() {
    return (
        <main className="min-h-screen bg-white">
            <ProcessHero />
            <ProcessTimeline />
            <ProcessBenefits />
            <CTASection 
                title="Ready to Start Your Project?" 
                description="Let's discuss your challenges and map out a custom development roadmap."
                buttonText="Schedule a Discovery Call"
            />
        </main>
    );
}