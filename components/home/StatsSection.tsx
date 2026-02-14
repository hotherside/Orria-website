"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animation-variants";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const stats = [
  {
    value: 35000,
    prefix: "~",
    suffix: "",
    label: "decisions made daily per person",
    source: "Cognitive research",
  },
  {
    value: 400,
    prefix: "$",
    suffix: "B",
    label: "lost annually to decision fatigue",
    source: "World Economic Forum, 2023",
  },
  {
    value: 67,
    prefix: "",
    suffix: "%",
    label: "of people experience social media fatigue",
    source: "Pew Research",
  },
];

export function StatsSection() {
  return (
    <section className="py-24 md:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 hero-mesh-dark opacity-30" />
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
            The Numbers
          </p>
          <h2
            className="text-display text-white"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            The world needs a better way
            <br />
            <span className="italic text-cyan-400">to think through decisions</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <p
                className="text-4xl md:text-5xl font-bold text-white mb-3"
                style={{
                  fontFamily: "var(--font-playfair), Playfair Display, serif",
                }}
              >
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2}
                />
              </p>
              <p className="text-white/70 text-sm mb-2">{stat.label}</p>
              <p className="text-white/30 text-xs">{stat.source}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
