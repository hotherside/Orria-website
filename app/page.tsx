import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { StickyFeatureShowcase } from "@/components/home/StickyFeatureShowcase";
import { AgentsSection } from "@/components/home/AgentsSection";
import { WaitlistCTA } from "@/components/home/WaitlistCTA";
import { FloatingTableOfContents } from "@/components/shared/FloatingTableOfContents";

export default function Home() {
  return (
    <>
      <FloatingTableOfContents />
      <HeroSection />
      <ProblemSection />
      <CategoriesSection />
      <StickyFeatureShowcase />
      <AgentsSection />
      <WaitlistCTA />
    </>
  );
}
