"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportSettings } from "@/lib/animation-variants";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import {
  Brain,
  Clock,
  AlertTriangle,
} from "lucide-react";

const problems = [
  {
    icon: Clock,
    stat: 35000,
    suffix: "",
    label: "Decisions a day",
    body: "The career pivot. The relationship you fought for. The city you almost moved to. These crossroads defined you \u2014 but you\u2019ve lost most of them.",
    accent: "#0891B2",
  },
  {
    icon: Brain,
    stat: 73,
    suffix: "%",
    label: "Feel overwhelmed",
    body: "When it matters, we spin for weeks. We poll biased friends. We doom-scroll for answers. No clarity. No structure. No closure.",
    accent: "#C4704B",
  },
  {
    icon: AlertTriangle,
    stat: 0,
    suffix: "",
    label: "Tools built for this",
    body: "AI chatbots forget everything. Notes apps have no insight. Nothing combines AI thinking partners with real perspectives and a living journal.",
    accent: "#E5A53D",
  },
];

export function ProblemSection() {
  return (
    <section id="problem">
      <div className="bg-cream-100">
        {/* Section header */}
        <div className="pt-14 md:pt-20 pb-10 md:pb-12 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-4">
              The Problem
            </p>
            <h2
              className="text-display text-text-primary"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
              }}
            >
              You don&apos;t start with a decision.
              <br />
              <span className="italic">You start with a dilemma.</span>
            </h2>
          </motion.div>
        </div>

        {/* Compact 3-column cards */}
        <div className="max-w-6xl mx-auto px-6 pb-14 md:pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px", amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {problems.map((problem, i) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
                    },
                  }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-cream-300/50 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${problem.accent}12` }}
                  >
                    <Icon size={20} style={{ color: problem.accent }} />
                  </div>

                  {/* Stat */}
                  <AnimatedCounter
                    target={problem.stat}
                    suffix={problem.suffix}
                    duration={2}
                    className="tabular-nums block mb-1"
                    style={{
                      fontFamily: "var(--font-playfair), Playfair Display, serif",
                      fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: problem.accent,
                    }}
                  />

                  {/* Label */}
                  <p
                    className="text-base md:text-lg font-semibold mb-3"
                    style={{
                      fontFamily: "var(--font-playfair), Playfair Display, serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {problem.label}
                  </p>

                  {/* Accent line */}
                  <div
                    className="w-8 h-0.5 rounded-full mb-3"
                    style={{ backgroundColor: problem.accent }}
                  />

                  {/* Body */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {problem.body}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
