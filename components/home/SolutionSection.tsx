"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animation-variants";
import { PhoneMockup } from "@/components/shared/PhoneMockup";
import { Mic, Sparkles, GitFork } from "lucide-react";

const steps = [
  {
    icon: Mic,
    number: "01",
    title: "Open the Canvas",
    description:
      "Just speak or type what's on your mind. No forms, no structure, no pressure. Takes 10 seconds to start.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "AI Structures Your Thoughts",
    description:
      "Tap 'Structure with AI' and watch your messy dilemma transform into clear options, a title, and a topic.",
  },
  {
    icon: GitFork,
    number: "03",
    title: "Choose Your Depth",
    description:
      "Simple choices? Log it immediately. Complex dilemmas? Talk it through with Orria and your AI roundtable.",
  },
];

export function SolutionSection() {
  return (
    <section className="py-24 md:py-32 bg-dark-900 relative overflow-hidden">
      {/* Subtle mesh background */}
      <div className="absolute inset-0 hero-mesh-dark opacity-50" />
      <div className="absolute inset-0 hero-noise pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            The Solution
          </p>
          <h2
            className="text-display text-white"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            Meet Orria.
            <br />
            <span className="italic text-cyan-400">
              Your decision companion.
            </span>
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-xl mx-auto">
            Open a canvas. Speak or type your dilemma. Choose how deep to go.
          </p>
        </motion.div>

        {/* Phone mockup + steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={viewportSettings}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <PhoneMockup
              screenshot="/screenshots/canvas-input.png"
              label="Canvas View"
              glowColor="bg-cyan-500/20"
            />
          </motion.div>

          {/* Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-8"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="flex gap-5"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center">
                    <step.icon size={22} className="text-cyan-400" />
                  </div>
                </div>
                <div>
                  <p className="text-cyan-400/60 text-xs font-mono mb-1">
                    {step.number}
                  </p>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
