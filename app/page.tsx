import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { FeatureCarousel } from "@/components/home/FeatureCarousel";
import { AgentsSection } from "@/components/home/AgentsSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { PricingSection } from "@/components/home/PricingSection";
import { WaitlistCTA } from "@/components/home/WaitlistCTA";
import { FloatingTableOfContents } from "@/components/shared/FloatingTableOfContents";

export default function Home() {
  return (
    <>
      <FloatingTableOfContents />
      <HeroSection />
      <ProblemSection />
      <FeatureCarousel />
      <AgentsSection />
      <CategoriesSection />
      <PricingSection />
      <WaitlistCTA />
    </>
  );
}
