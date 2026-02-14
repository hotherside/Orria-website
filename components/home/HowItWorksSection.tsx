"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  slideLeft,
  slideRight,
  viewportSettings,
} from "@/lib/animation-variants";
import { Mic, Users, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { PhoneMockup } from "@/components/shared/PhoneMockup";

const steps = [
  {
    icon: Mic,
    title: "Speak or type your dilemma",
    description:
      "Open a blank canvas. No forms, no prompts — just say what's on your mind. Voice dictation streams your words in real-time. It takes 10 seconds to start thinking clearly.",
    direction: "left" as const,
    screenshot: "/screenshots/canvas-input.png",
    glowColor: "bg-cyan-500/15",
  },
  {
    icon: Users,
    title: "AI brings you clarity",
    description:
      "Orria structures your thoughts, then brings in the right perspectives. Maya encourages, Liam analyzes, Sara grounds, Rex challenges. They react to each other like a real roundtable.",
    direction: "right" as const,
    screenshot: "/screenshots/roundtable.png",
    glowColor: "bg-amber-500/15",
  },
  {
    icon: BookOpen,
    title: "Your journal builds itself",
    description:
      "Every conversation becomes a journal entry. Track decisions big and small. Record outcomes. See your patterns emerge. Your decisions tell your story.",
    direction: "left" as const,
    screenshot: "/screenshots/journal-home.png",
    glowColor: "bg-cyan-600/15",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-20"
        >
          <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2
            className="text-display text-text-primary"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            From dilemma to clarity
            <br />
            <span className="italic">in three steps</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-20 md:space-y-28">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              {/* Text */}
              <motion.div
                variants={step.direction === "left" ? slideLeft : slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className={
                  step.direction === "right" ? "md:order-2" : "md:order-1"
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-cyan-500/40 text-4xl font-bold font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="text-heading text-text-primary mb-4"
                  style={{
                    fontFamily:
                      "var(--font-playfair), Playfair Display, serif",
                  }}
                >
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Phone mockup with real screenshot */}
              <motion.div
                variants={step.direction === "left" ? slideRight : slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className={cn(
                  "flex justify-center",
                  step.direction === "right" ? "md:order-1" : "md:order-2"
                )}
              >
                <PhoneMockup
                  screenshot={step.screenshot}
                  label={step.title}
                  glowColor={step.glowColor}
                  size="sm"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
