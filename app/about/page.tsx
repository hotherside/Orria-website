"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animation-variants";
import { WaitlistForm } from "@/components/shared/WaitlistForm";
import {
  MessageCircle,
  Sparkles,
  Clock,
  RefreshCw,
} from "lucide-react";

const beliefs = [
  {
    title: "Decisions start as dilemmas, not decisions",
    description:
      "Every tool asks you to fill in a form. But real crossroads don\u2019t start with structure \u2014 they start with mess. Orria meets you there. You speak or type whatever\u2019s on your mind, and AI helps you discover what you\u2019re actually deciding.",
  },
  {
    title: "Multiple perspectives break echo chambers",
    description:
      "We built four distinct AI personalities \u2014 not because one isn\u2019t enough, but because your blind spots need more than one lens. Maya encourages, Liam analyzes, Sara grounds, Rex challenges. Together they see what you can\u2019t see alone.",
  },
  {
    title: "Closing the loop builds wisdom",
    description:
      "Most decisions disappear the moment you make them. Orria asks you to come back. Record what you chose. Reflect on whether you\u2019d do it again. That\u2019s how scattered choices become lived wisdom.",
  },
  {
    title: "Your decisions are your autobiography",
    description:
      "The job you almost didn\u2019t take. The city you considered moving to. The relationship you fought for. These crossroads defined who you are \u2014 but most are forgotten. Orria\u2019s journal keeps the story of how you became you.",
  },
];

const framework = [
  {
    icon: MessageCircle,
    label: "Conversation",
    description: "Speak or type your dilemma. AI structures your thoughts into clear options.",
    color: "var(--cyan-500)",
  },
  {
    icon: Sparkles,
    label: "Clarity",
    description: "Four AI perspectives challenge your blind spots and surface what you can\u2019t see alone.",
    color: "var(--agent-liam)",
  },
  {
    icon: Clock,
    label: "Commit",
    description: "Set a deadline. Make the call. Break the indecision cycle and move forward.",
    color: "var(--terracotta-500)",
  },
  {
    icon: RefreshCw,
    label: "Close",
    description: "Record outcomes. Reflect. Learn. Your decisions become your autobiography.",
    color: "var(--amber-500)",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-cream-100" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-4">
              About Orria
            </p>
            <h1
              className="text-display text-text-primary mb-6"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
              }}
            >
              Why Orria Exists
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Born from a frustration everyone shares — and the belief that
              everyone deserves a thinking partner at life&apos;s crossroads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mb-16"
          >
            <h2
              className="text-heading text-text-primary mb-8"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
              }}
            >
              The Story
            </h2>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Orria started with a frustration that most people share:
                standing at a crossroads with no good way to think it through.
              </p>
              <p>
                A career change across continents. Whether to leave a
                comfortable role to chase something uncertain. The life choices
                that don&apos;t fit in a spreadsheet. We all face these moments
                — and we all handle them the same way: asking friends who are
                biased, searching the internet for answers that don&apos;t
                exist, and spinning in circles for weeks.
              </p>
              <p>
                Every decision tool wanted a form. But real dilemmas don&apos;t
                start with structure — they start with mess. We needed
                something that could meet us in the uncertainty and help us
                find clarity through conversation.
              </p>
            </div>
          </motion.div>

          {/* Pull quote */}
          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="my-12 pl-6 border-l-[3px] border-cyan-500 py-4"
          >
            <p
              className="text-text-primary text-xl md:text-2xl italic leading-relaxed"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
              }}
            >
              &ldquo;We needed a thinking partner, not a productivity tool.
              So we built one.&rdquo;
            </p>
            <cite className="text-text-muted text-sm not-italic mt-3 block">
              — Founder, Orria
            </cite>
          </motion.blockquote>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-6 text-text-secondary leading-relaxed"
          >
            <p>
              What if there was an AI companion that met you where you are —
              in the mess of uncertainty — and helped you find clarity through
              conversation? Not a chatbot that gives you an answer, but a
              thinking partner that helps you discover your own.
            </p>
            <p>
              That&apos;s Orria. A calm space to think through the decisions
              that shape your life, get perspectives from AI personalities
              that challenge your blind spots, and build a journal of the
              choices that made you who you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Philosophy
            </p>
            <h2
              className="text-heading text-text-primary"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
              }}
            >
              What We Believe
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-10"
          >
            {beliefs.map((belief, i) => (
              <motion.div
                key={belief.title}
                variants={staggerItem}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 pt-1.5">
                  <span className="text-cyan-500/40 text-2xl font-bold font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-text-primary font-semibold text-lg mb-3"
                    style={{
                      fontFamily: "var(--font-playfair), Playfair Display, serif",
                    }}
                  >
                    {belief.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Framework */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-4">
              The Method
            </p>
            <h2
              className="text-heading text-text-primary"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
              }}
            >
              Four steps to clarity
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {framework.map((step, i) => (
              <motion.div
                key={step.label}
                variants={staggerItem}
                className="text-center p-6 rounded-2xl bg-white border border-cream-300/50 shadow-soft"
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `color-mix(in srgb, ${step.color} 10%, transparent)` }}
                >
                  <step.icon size={22} style={{ color: step.color }} />
                </div>
                <h3 className="text-text-primary font-semibold mb-2">
                  {step.label}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
                {i < framework.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-cream-300">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Building Approach */}
      <section className="py-20 md:py-28 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh-dark opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              How We Build
            </p>
            <h2
              className="text-heading text-white mb-6"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
              }}
            >
              Small team.
              <br />
              <span className="italic text-cyan-400">
                Deep empathy.
              </span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
              Orria is built with care by a small team using AI as a development
              partner. We believe great products come from deeply understanding
              the problem — not from large teams or long timelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-cream-100 to-cream-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <h2
              className="text-heading text-text-primary mb-4"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
              }}
            >
              Join us on this journey
            </h2>
            <p className="text-text-secondary mb-8">
              Be the first to experience Orria.
            </p>
            <WaitlistForm variant="section" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
