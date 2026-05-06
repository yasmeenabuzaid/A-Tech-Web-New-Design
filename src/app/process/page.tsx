import React from "react";
import { ProcessHero } from "../../components/process/processHero";
import { ProcessTimeline } from "../../components/process/processTimeline";
import { ProcessBenefits } from "../../components/process/processBenefits";

export default function ProcessPage() {
    return (
        <main className="min-h-screen  overflow-hidden">
            <ProcessHero />
            <ProcessTimeline />
            <ProcessBenefits />        
        </main>
    );
}