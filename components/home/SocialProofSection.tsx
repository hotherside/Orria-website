"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animation-variants";
import { Briefcase, Heart, Activity, Wallet, Baby } from "lucide-react";
import { FloatingElements } from "@/components/shared/FloatingElements";

const useCases = [
  {
    icon: Briefcase,
    accent: "var(--cyan-500)",
    category: "Career",
    question: "Should I take the remote role or negotiate to stay?",
    context: "The flexibility sounds amazing, but I\u2019d miss the in-person energy. And what about promotions?",
  },
  {
    icon: Heart,
    accent: "var(--terracotta-500)",
    category: "Relationships",
    question: "We disagree on where to live. How do we decide together?",
    context: "It\u2019s their dream city, but my whole support system is here. What matters more right now?",
  },
  {
    icon: Activity,
    accent: "var(--agent-liam)",
    category: "Health",
    question: "Should I commit to this treatment plan or get a second opinion?",
    context: "The doctor seems confident, but it\u2019s a big commitment. I don\u2019t want to rush something this important.",
  },
  {
    icon: Wallet,
    accent: "var(--amber-500)",
    category: "Finances",
    question: "Do I invest my savings or use it for a down payment?",
    context: "The market looks good, but owning a home has always been the dream. There\u2019s no clear right answer.",
  },
  {
    icon: Baby,
    accent: "var(--agent-sara)",
    category: "Parenting",
    question: "We can\u2019t agree on schools for the kids \u2014 what matters most?",
    context: "One has the programs they\u2019d thrive in, the other keeps them close to friends. Both feel right.",
  },
];

export function SocialProofSection() {
  return (
    <section className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      <FloatingElements count={6} colors={["#0891B2", "#C4704B", "#E5A53D", "#6366F1"]} />

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
            Real Crossroads
          </p>
          <h2
            className="text-display text-text-primary"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            The decisions that
            <br />
            <span className="italic text-cyan-600">keep you up at night.</span>
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-xl mx-auto">
            Get AI perspectives AND share with real people who&apos;ve been there. Not just career moves — every crossroad that matters.
          </p>
        </motion.div>

        {/* Use case cards — horizontal scroll on mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-5 md:overflow-visible snap-x snap-mandatory"
        >
          {useCases.map((useCase) => (
            <motion.div
              key={useCase.category}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="min-w-[260px] md:min-w-0 snap-start rounded-2xl p-6 bg-white border border-cream-300/50 shadow-soft hover:shadow-soft-lg hover-scan-border transition-shadow"
            >
              {/* Category pill */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `color-mix(in srgb, ${useCase.accent} 12%, transparent)` }}
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
                className="text-text-primary font-semibold text-sm mb-3 leading-snug"
                style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
              >
                &ldquo;{useCase.question}&rdquo;
              </h3>

              {/* Context */}
              <p className="text-text-muted text-xs leading-relaxed italic">
                {useCase.context}
              </p>

              {/* Bottom hint */}
              <div className="mt-4 pt-3 border-t border-cream-300/50">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-cyan-500/15 flex items-center justify-center">
                    <span className="text-cyan-500 text-[6px] font-bold">O</span>
                  </div>
                  <p className="text-cyan-600/60 text-xs">
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
