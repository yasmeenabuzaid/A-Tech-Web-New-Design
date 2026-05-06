"use client";

import { HeroSection } from "../../components/products/heroSection";
import { CoreProducts } from "../../components/products/coreProducts";
import { ERPFeatures } from "../../components/products/ERPFeatures";
import { IndustryFit } from "../../components/products/industryFit";
import { CTASection } from "../../components/products/CTASection";

export function Products() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CoreProducts /> 
      <ERPFeatures />
      <IndustryFit />
      {/* <CTASection /> */}
    </div>
  );
}

export default Products;