"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  fadeUp,
  viewportSettings,
} from "@/lib/animation-variants";
import { Brain, RotateCcw, XCircle } from "lucide-react";

const problems = [
  {
    icon: Brain,
    stat: "35,000",
    title: "The Forgotten Journey",
    description:
      "You make ~35,000 decisions a day. The job you almost didn't take, the city you considered moving to — these crossroads defined you. But most are forgotten.",
  },
  {
    icon: RotateCcw,
    title: "The Dilemma Gap",
    description:
      "When facing big choices, we spin in circles for weeks. We ask friends who are biased. We don't see our blind spots. No clarity. No structure. No closure.",
  },
  {
    icon: XCircle,
    title: "Current Solutions Fail",
    description:
      "AI chatbots forget everything. Notes apps have no insight. Social media is performance, not substance. No platform helps you THINK through a dilemma.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-16"
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

        {/* Problem cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 border border-cream-300/50 shadow-soft hover:shadow-soft-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <problem.icon size={24} className="text-cyan-500" />
              </div>
              {problem.stat && (
                <p className="text-3xl font-bold text-text-primary mb-2">
                  {problem.stat}
                </p>
              )}
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {problem.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
