"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, viewportSettings } from "@/lib/animation-variants";
import { MessageCircle, Sparkles, Clock, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { PhoneMockup } from "@/components/shared/PhoneMockup";

const pillars = [
  {
    id: "conversation",
    icon: MessageCircle,
    label: "Conversation",
    title: "Talk through your dilemma naturally",
    description:
      "Just speak or type what's on your mind. Orria helps you discover what you're really deciding. No forms — AI structures your thoughts into clear options. Voice input for hands-free thinking.",
    highlight: "Meet you where you are, not where a form expects you to be.",
    screenshot: "/screenshots/canvas-input.png",
    glowColor: "bg-cyan-500/15",
  },
  {
    id: "clarity",
    icon: Sparkles,
    label: "Clarity",
    title: "See what you can't see alone",
    description:
      "Maya sees the opportunity. Liam breaks it down logically. Sara keeps it practical. Rex surfaces the risks. Plus Orria facilitates the whole conversation — never pushes a decision.",
    highlight: "Break out of your echo chamber.",
    screenshot: "/screenshots/roundtable.png",
    glowColor: "bg-amber-500/15",
  },
  {
    id: "commit",
    icon: Clock,
    label: "Commit",
    title: "Break the indecision cycle",
    description:
      "Set a deadline for your choice. Park conversations to revisit later. Get gentle nudges when you're stuck. Make the decision and move forward.",
    highlight: "Stop letting choices linger for weeks.",
    screenshot: "/screenshots/crystallize.png",
    glowColor: "bg-terracotta-500/15",
  },
  {
    id: "close",
    icon: RefreshCw,
    label: "Close the Loop",
    title: "Your decisions become your autobiography",
    description:
      "Record what you chose. Reflect: 'Would you make the same choice again?' Guided reflection prompts help you build wisdom. Discover your patterns over time.",
    highlight: "Look back to move forward.",
    screenshot: "/screenshots/journal-home.png",
    glowColor: "bg-cyan-600/15",
  },
];

export function PillarsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const active = pillars[activeTab];

  return (
    <section id="pillars" className="py-24 md:py-32 bg-cream-50">
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
            The Framework
          </p>
          <h2
            className="text-display text-text-primary"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            Conversation. Clarity.
            <br />
            <span className="italic">Commit. Close.</span>
          </h2>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-soft border border-cream-300/50 overflow-x-auto">
            {pillars.map((pillar, i) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "relative px-5 py-2.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap",
                  activeTab === i
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="pillar-tab"
                    className="absolute inset-0 bg-cyan-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <pillar.icon size={16} />
                  <span className="hidden sm:inline">{pillar.label}</span>
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <active.icon size={20} className="text-cyan-500" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-500">
                  {active.label}
                </span>
              </div>
              <h3
                className="text-heading text-text-primary mb-4"
                style={{
                  fontFamily: "var(--font-playfair), Playfair Display, serif",
                }}
              >
                {active.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {active.description}
              </p>
              <p className="text-cyan-600 font-medium text-sm italic">
                {active.highlight}
              </p>
            </div>

            {/* Phone mockup with real screenshot */}
            <div className="order-1 lg:order-2 flex justify-center">
              <PhoneMockup
                screenshot={active.screenshot}
                label={active.label}
                glowColor={active.glowColor}
                size="md"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
