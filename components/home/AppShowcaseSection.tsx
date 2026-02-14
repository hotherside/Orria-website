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
    title: "Just talk",
    description: "Tap the mic, say what's on your mind. Orria listens and structures it for you.",
    glowColor: "bg-cyan-500/10",
  },
  {
    component: RoundtableDemo,
    icon: Users,
    title: "Get perspectives",
    description: "Four AI personalities challenge your blind spots from every angle.",
    glowColor: "bg-indigo-500/8",
  },
  {
    component: CrystallizeDemo,
    icon: Sparkles,
    title: "Make the call",
    description: "See the full picture. Decide with confidence.",
    glowColor: "bg-amber-500/8",
  },
];

export function AppShowcaseSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-cream-100 to-cream-200 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-16"
        >
          <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
            The Experience
          </p>
          <h2
            className="text-display text-text-primary"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            Meet Orria.
            <br />
            <span className="italic text-cyan-600">See it in action.</span>
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-xl mx-auto">
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
                  <demo.icon size={14} className="text-cyan-600" />
                  <h3 className="text-text-primary font-semibold text-sm">{demo.title}</h3>
                </div>
                <p className="text-text-muted text-xs leading-relaxed">
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
