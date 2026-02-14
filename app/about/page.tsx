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
  Lock,
  RefreshCw,
  Users,
  Sprout,
} from "lucide-react";

const values = [
  {
    icon: MessageCircle,
    title: "Conversation over forms",
    description:
      "Talk through your dilemma naturally. Structure comes after clarity.",
  },
  {
    icon: Lock,
    title: "Private by default",
    description: "Your thoughts are yours until you choose to share them.",
  },
  {
    icon: RefreshCw,
    title: "Close the loop",
    description:
      "Decisions aren't complete until you learn from the outcomes.",
  },
  {
    icon: Users,
    title: "Multiple perspectives",
    description:
      "AI companions + community = clarity you can't find alone.",
  },
  {
    icon: Sprout,
    title: "Growth through reflection",
    description: "Look back to move forward wisely.",
  },
];

const timeline = [
  {
    year: "The Background",
    title: "From Apple to autonomous intelligence",
    description:
      "Starting as a Product Specialist at Apple, then leading autonomous asset intelligence and computer vision products at Unleash Live, to driving product strategy at SafetyCulture and CoverGenius — a career spent building tools that help people see things more clearly.",
  },
  {
    year: "The Struggle",
    title: "Standing at a crossroads",
    description:
      "Facing the kind of decisions that keep you up at night — career paths, big moves, the choices that define who you become. No tool helped me actually think it through. Friends were biased, the internet was useless, and I'd spin in circles for weeks.",
  },
  {
    year: "The Realization",
    title: "People start with dilemmas, not decisions",
    description:
      "Every app asked me to fill in a form. But I didn't even know what I was deciding yet. I needed a thinking partner — not a productivity tool. I needed something that could meet me in the mess and help me find clarity.",
  },
  {
    year: "The Build",
    title: "One founder, AI-powered development",
    description:
      "Built Orria solo with Claude as my AI development partner. 110+ Swift files, production-ready, in weeks — not months. Years of product management experience distilled into an app that actually helps people think.",
  },
  {
    year: "Today",
    title: "Making it real",
    description:
      "Orria is the companion I wish I had at every crossroads. A calm thinking partner that helps you find clarity through conversation, captures your journey, and builds wisdom from every choice you make.",
  },
];

const experience = [
  {
    role: "Product Lead",
    company: "CoverGenius",
    period: "2023 — Present",
    description: "Leading partner platform strategy, building self-service tools and analytics dashboards for global insurance distribution.",
  },
  {
    role: "Senior Product Manager",
    company: "Unleash Live",
    period: "2022 — 2023",
    description: "Led autonomous asset intelligence and inspection products powered by computer vision, bringing AI-driven insights to industrial workflows.",
  },
  {
    role: "Associate Product Manager",
    company: "SafetyCulture",
    period: "2022 — 2023",
    description: "Drove 10% increase in monthly active users through strategic feature development. Bridged a 1.5-year disconnect with customers through daily interviews.",
  },
  {
    role: "Product & Technical Specialist",
    company: "Apple",
    period: "2014 — 2020",
    description: "Three tours at Apple across specialist, expert, and Genius roles — diagnosing problems, simplifying complexity, and delivering exceptional experiences.",
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
              Born from the decisions that shaped one person&apos;s journey — and
              the realization that everyone deserves a thinking partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
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
              The Story Behind Orria
            </h2>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                I&apos;ve spent my career building products that help people
                see things more clearly — from autonomous inspection systems
                powered by computer vision at Unleash Live, to self-service
                partner platforms at CoverGenius, to user-facing products
                at SafetyCulture that grew engagement by double digits.
              </p>
              <p>
                But throughout it all, I kept facing my own version of the same
                problem: big personal decisions with no good tool to think them
                through. A career change across continents. Whether to leave a
                comfortable role to start something. The life choices that
                don&apos;t fit in a spreadsheet.
              </p>
              <p>
                I&apos;d talk to friends who were biased, search the internet
                for answers that didn&apos;t exist, and spin in circles for
                weeks before finally making a choice I wasn&apos;t sure about.
                Every decision app wanted me to fill in a form — but I
                didn&apos;t even know what I was deciding yet.
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
              &ldquo;I needed a thinking partner, not a productivity tool. So I
              built one.&rdquo;
            </p>
            <cite className="text-text-muted text-sm not-italic mt-3 block">
              — Hojae Jung, Founder of Orria
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
              That&apos;s when the idea for Orria clicked: what if there was
              an AI companion that met you where you are — in the mess of
              uncertainty — and helped you find clarity through conversation?
              Not a chatbot that gives you an answer, but a thinking partner
              that helps you discover your own.
            </p>
            <p>
              With a background spanning design, technology, product management,
              and even military operations — I&apos;ve learned that the best
              decisions come from seeing all angles, hearing multiple
              perspectives, and having the courage to commit. Orria brings that
              process to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-12"
          >
            <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-4">
              The Founder
            </p>
            <h2
              className="text-heading text-text-primary mb-4"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
              }}
            >
              Built by a product person
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A decade of building products people love — from Apple&apos;s retail floors
              to autonomous AI systems to global insurance platforms.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {experience.map((exp) => (
              <motion.div
                key={exp.company + exp.role}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 border border-cream-300/50 shadow-soft"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500">
                    {exp.company}
                  </span>
                  <span className="text-xs text-text-muted">{exp.period}</span>
                </div>
                <h3 className="text-text-primary font-semibold mb-2">
                  {exp.role}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional credentials */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {[
              "B.A. Design in Visual Communications — UTS",
              "B.Sc. Information Technology — Macquarie",
              "Photographer for Figma, Google, Sony, Tesla",
              "ROKA & U.S. Army — Sergeant, S3 Operations",
            ].map((credential) => (
              <span
                key={credential}
                className="px-4 py-2 rounded-full bg-cream-200 text-text-muted text-xs font-medium"
              >
                {credential}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-heading text-text-primary mb-12 text-center"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            The Journey
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-8"
          >
            {timeline.map((item) => (
              <motion.div
                key={item.year}
                variants={staggerItem}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-24 pt-1">
                  <span className="text-cyan-500 text-xs font-semibold uppercase tracking-wider">
                    {item.year}
                  </span>
                </div>
                <div className="pb-8 border-l-2 border-cream-300 pl-6 relative">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-cyan-500" />
                  <h3 className="text-text-primary font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2
              className="text-heading text-text-primary mb-4"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
              }}
            >
              Our Mission & Values
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Help people think through, capture, and close the loop on the
              decisions that shape their lives — through conversation, not
              forms.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 border border-cream-300/50 shadow-soft"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                  <value.icon size={20} className="text-cyan-500" />
                </div>
                <h3 className="text-text-primary font-semibold mb-2 text-sm">
                  {value.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
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
              Solo founder.
              <br />
              <span className="italic text-cyan-400">
                Enterprise-grade output.
              </span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto leading-relaxed mb-8">
              Orria is built by one person with AI as a development partner.
              110+ Swift files, production-ready code, built in weeks instead
              of months. A product manager who designs, codes, and ships.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                "SwiftUI",
                "Supabase",
                "GPT-4o",
                "StoreKit 2",
                "Claude Opus 4.6",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>
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
