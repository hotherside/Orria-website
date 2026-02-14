import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { AppShowcaseSection } from "@/components/home/AppShowcaseSection";
import { JourneySection } from "@/components/home/JourneySection";
import { AgentsSection } from "@/components/home/AgentsSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { WaitlistCTA } from "@/components/home/WaitlistCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <AppShowcaseSection />
      <JourneySection />
      <AgentsSection />
      <SocialProofSection />
      <WaitlistCTA />
    </>
  );
}
