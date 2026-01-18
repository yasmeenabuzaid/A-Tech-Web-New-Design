"use client";

import { RetailHero } from "../../components/industries/retailHero";
import { RetailChallenge } from "../../components/industries/retailChallenge";
import { RetailSolution } from "../../components/industries/retailSolution";
import { RetailResults } from "../../components/industries/retailResults";
import { RetailCTA } from "../../components/industries/retailCTA";

export function IndustryRetail() {
  return (
    <div className="min-h-screen">
      <RetailHero />
      <RetailChallenge />
      <RetailSolution />
      <RetailResults />
      <RetailCTA />
    </div>
  );
}

export default IndustryRetail;