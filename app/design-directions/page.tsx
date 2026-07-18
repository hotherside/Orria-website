import type { Metadata } from "next";
import { DirectionLab } from "@/components/directions/DirectionLab";

export const metadata: Metadata = {
  title: "Orria redesign — audit and design directions",
  description:
    "A candid audit and three high-fidelity design directions for Orria's complete website redesign.",
  robots: { index: false, follow: false },
};

export default function DesignDirectionsPage() {
  return <DirectionLab />;
}
