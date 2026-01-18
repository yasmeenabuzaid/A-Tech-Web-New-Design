import { Hero } from "../components/home/hero";
import { Features } from "../components/home/features";
import { DualOffering } from "../components/home/dualOffering";
import { StatsSection, CTASection } from "../components/home/statsAndCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <DualOffering />
      <StatsSection />
      <CTASection />
    </main>
  );
}