import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { AgentsSection } from "@/components/home/AgentsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WaitlistCTA } from "@/components/home/WaitlistCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PillarsSection />
      <AgentsSection />
      <HowItWorksSection />
      <StatsSection />
      <WaitlistCTA />
    </>
  );
}
