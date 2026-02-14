"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animation-variants";
import { Briefcase, Heart, GraduationCap } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    accent: "var(--cyan-500)",
    category: "Career",
    question: "Should I take the remote role or stay close to the team?",
    context: "The flexibility sounds amazing, but I\u2019d miss the in-person energy. And what about promotions?",
  },
  {
    icon: Heart,
    accent: "var(--terracotta-500)",
    category: "Relationships",
    question: "We\u2019re thinking about relocating for their job. Is it the right call?",
    context: "It\u2019s a great opportunity for them, but I\u2019d have to start over. What matters more right now?",
  },
  {
    icon: GraduationCap,
    accent: "var(--amber-500)",
    category: "Growth",
    question: "Do I go back to study or keep building experience?",
    context: "A master\u2019s could open doors, but so could two more years of real-world work. There\u2019s no clear answer.",
  },
];

export function SocialProofSection() {
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
            Real Crossroads
          </p>
          <h2
            className="text-display text-white"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            The decisions that
            <br />
            <span className="italic text-cyan-400">keep you up at night.</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
            These are the moments Orria is built for. Not what to eat — but what to do with your life.
          </p>
        </motion.div>

        {/* Use case cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {useCases.map((useCase) => (
            <motion.div
              key={useCase.category}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors"
            >
              {/* Category pill */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `color-mix(in srgb, ${useCase.accent} 20%, transparent)` }}
                >
                  <useCase.icon size={16} style={{ color: useCase.accent }} />
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: useCase.accent }}
                >
                  {useCase.category}
                </span>
              </div>

              {/* Question */}
              <h3
                className="text-white font-semibold text-base mb-3 leading-snug"
                style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
              >
                &ldquo;{useCase.question}&rdquo;
              </h3>

              {/* Context */}
              <p className="text-white/40 text-sm leading-relaxed italic">
                {useCase.context}
              </p>

              {/* Bottom hint */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 text-[6px] font-bold">O</span>
                  </div>
                  <p className="text-cyan-400/60 text-xs">
                    Orria helps you think this through
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
