import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { FourPillars } from "@/components/FourPillars";
import { WhoIsItFor } from "@/components/WhoIsItFor";
import { AIAgents } from "@/components/AIAgents";
import { Pricing } from "@/components/Pricing";
import { Download } from "@/components/Download";

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <FourPillars />
      <WhoIsItFor />
      <AIAgents />
      <Pricing />
      <Download />
    </main>
  );
}
