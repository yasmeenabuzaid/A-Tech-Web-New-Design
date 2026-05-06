"use client";

import { ResourcesHero } from "../../components/resourcese/resourcesHero";
import { CaseStudies } from "../../components/resourcese/caseStudies";
import { BlogPosts } from "../../components/resourcese/blogPosts";
import { ResourcesCTA } from "../../components/resourcese/resourcesCTA";

export function Resources() {
  return (
    <div className="min-h-screen">
      <ResourcesHero />
      <CaseStudies />
      <BlogPosts />
      <ResourcesCTA />
    </div>
  );
}
export default Resources;