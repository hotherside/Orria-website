"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animation-variants";
import { Sun, BarChart3, Wrench, AlertTriangle } from "lucide-react";

const agents = [
  {
    name: "Maya",
    role: "The Encourager",
    quote: "Here's what excites me about this...",
    description:
      "Warm and optimistic. Maya sees the growth opportunity in every choice, encouraging you to dream bigger while staying grounded.",
    icon: Sun,
    color: "#E5A53D",
    bgClass: "from-amber-500/10 to-amber-500/5",
    borderClass: "border-t-amber-400",
  },
  {
    name: "Liam",
    role: "The Thinker",
    quote: "Let me break this down logically...",
    description:
      "Data-driven and precise. Liam brings structured analysis to emotional decisions, helping you see the numbers behind the feelings.",
    icon: BarChart3,
    color: "#6366F1",
    bgClass: "from-indigo-500/10 to-indigo-500/5",
    borderClass: "border-t-indigo-400",
  },
  {
    name: "Sara",
    role: "The Realist",
    quote: "Here's what would actually work...",
    description:
      "Practical and grounded. Sara focuses on what's feasible, cutting through idealism to find the path that actually works.",
    icon: Wrench,
    color: "#9333EA",
    bgClass: "from-purple-500/10 to-purple-500/5",
    borderClass: "border-t-purple-400",
  },
  {
    name: "Rex",
    role: "The Challenger",
    quote: "Have you considered what happens if...",
    description:
      "Your devil's advocate. Rex surfaces the risks and blind spots you might be ignoring, because what you don't see can hurt you.",
    icon: AlertTriangle,
    color: "#64748B",
    bgClass: "from-slate-500/10 to-slate-500/5",
    borderClass: "border-t-slate-400",
  },
];

export function AgentsSection() {
  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-16"
        >
          <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Your Roundtable
          </p>
          <h2
            className="text-display text-text-primary"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            4 perspectives.
            <br />
            <span className="italic">Zero blind spots.</span>
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-xl mx-auto">
            Every big decision deserves more than one opinion. Meet the AI
            personalities that challenge, encourage, analyze, and ground you.
          </p>
        </motion.div>

        {/* Agent grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {agents.map((agent) => (
            <motion.div
              key={agent.name}
              variants={staggerItem}
              whileHover={{
                y: -6,
                boxShadow: `0 12px 40px ${agent.color}15, 0 4px 12px rgba(0,0,0,0.05)`,
                transition: { duration: 0.3 },
              }}
              className={`bg-gradient-to-b ${agent.bgClass} rounded-2xl p-8 border border-cream-300/50 border-t-2 ${agent.borderClass} shadow-soft transition-shadow duration-300`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${agent.color}15` }}
                >
                  <agent.icon size={24} style={{ color: agent.color }} />
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold text-lg">
                    {agent.name}
                  </h3>
                  <p className="text-text-muted text-xs">{agent.role}</p>
                </div>
              </div>
              <p
                className="text-text-primary/80 italic text-sm mb-4 pl-4 border-l-2"
                style={{ borderColor: agent.color }}
              >
                &ldquo;{agent.quote}&rdquo;
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                {agent.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Orria facilitator callout */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-soft border border-cream-300/50">
            <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center">
              <span className="text-cyan-500 text-sm font-bold">O</span>
            </div>
            <p className="text-text-secondary text-sm">
              <span className="text-text-primary font-semibold">Orria</span>{" "}
              guides the conversation. Asks the right questions. Never pushes a
              decision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
