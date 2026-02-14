"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animation-variants";
import { PhoneMockup } from "@/components/shared/PhoneMockup";
import { CanvasDemo } from "@/components/home/showcase/CanvasDemo";
import { RoundtableDemo } from "@/components/home/showcase/RoundtableDemo";
import { CrystallizeDemo } from "@/components/home/showcase/CrystallizeDemo";
import { Mic, Users, Sparkles } from "lucide-react";

const demos = [
  {
    component: CanvasDemo,
    icon: Mic,
    title: "Start thinking",
    description: "Speak or type your dilemma. AI structures it into clear options.",
    glowColor: "bg-cyan-500/20",
  },
  {
    component: RoundtableDemo,
    icon: Users,
    title: "Get perspectives",
    description: "Four AI personalities challenge your blind spots.",
    glowColor: "bg-indigo-500/15",
  },
  {
    component: CrystallizeDemo,
    icon: Sparkles,
    title: "Make the call",
    description: "See the full picture. Decide with confidence.",
    glowColor: "bg-amber-500/15",
  },
];

export function AppShowcaseSection() {
  return (
    <section className="py-24 md:py-32 bg-dark-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-mesh-dark opacity-50" />
      <div className="absolute inset-0 hero-noise pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            The Experience
          </p>
          <h2
            className="text-display text-white"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            Meet Orria.
            <br />
            <span className="italic text-cyan-400">See it in action.</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
            From messy thought to clear decision — in three moves.
          </p>
        </motion.div>

        {/* Three phone demos */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
        >
          {demos.map((demo) => (
            <motion.div
              key={demo.title}
              variants={staggerItem}
              className="flex flex-col items-center"
            >
              <PhoneMockup
                size="sm"
                glowColor={demo.glowColor}
              >
                <demo.component />
              </PhoneMockup>

              {/* Caption */}
              <div className="mt-6 text-center max-w-[220px]">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <demo.icon size={14} className="text-cyan-400" />
                  <h3 className="text-white font-semibold text-sm">{demo.title}</h3>
                </div>
                <p className="text-white/40 text-xs leading-relaxed">
                  {demo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
