import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { StickyFeatureShowcase } from "@/components/home/StickyFeatureShowcase";
import { AgentsSection } from "@/components/home/AgentsSection";
import { WaitlistCTA } from "@/components/home/WaitlistCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <CategoriesSection />
      <StickyFeatureShowcase />
      <AgentsSection />
      <WaitlistCTA />
    </>
  );
}
