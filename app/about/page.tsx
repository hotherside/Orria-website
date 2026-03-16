"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animation-variants";
import { WaitlistForm } from "@/components/shared/WaitlistForm";
import { FloatingElements } from "@/components/shared/FloatingElements";

const beliefs = [
  {
    title: "Decisions start as thoughts, not forms",
    description:
      "Real crossroads don\u2019t start with structure \u2014 they start with something on your mind. Orria meets you there. Speak or type whatever you\u2019re thinking, and AI helps you discover what you\u2019re actually deciding.",
  },
  {
    title: "Closing the loop builds wisdom",
    description:
      "Most decisions disappear the moment you make them. Orria asks you to come back. Record what you chose. Reflect on whether you\u2019d do it again. That\u2019s how scattered choices become lived wisdom.",
  },
];

const timeline = [
  { year: "Jan 18", label: "Day zero", detail: "A personal crossroad became a product idea. First commit pushed that same weekend." },
  { year: "Feb 7", label: "v2.0 Refresh", detail: "Voice-first canvas, four named AI agent personas (Maya, Liam, Sara, Rex), conversational companion flow, and multi-round roundtable debates." },
  { year: "Feb 10", label: "The Pivot", detail: "The product shifted from social-first to personal-first. The decision journal became the core \u2014 sharing became a choice, not the default." },
  { year: "Feb 28", label: "Design Overhaul", detail: "Clean white + cyan Notion-like aesthetic. Tab-based decision detail. Insights revamp with personality archetypes and follow-up check-ins." },
  { year: "March 2026", label: "Beta launch", detail: "Closed beta with early adopters. Real decisions. Real feedback. Real iteration." },
  { year: "April 2026", label: "Public launch", detail: "App Store release. The world gets Orria." },
];

/* Animated pull-quote border that draws itself */
function AnimatedQuoteBorder({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="relative my-12 py-6 pl-8">
      {/* Animated cyan border line */}
      <svg
        className="absolute left-0 top-0 h-full w-[3px]"
        viewBox="0 0 3 100"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="1.5"
          y1="0"
          x2="1.5"
          y2="100"
          stroke="var(--cyan-500)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        />
      </svg>
      {/* Glow effect at the drawing tip */}
      <motion.div
        className="absolute left-0 w-1 rounded-full"
        style={{ backgroundColor: "var(--cyan-400)", filter: "blur(4px)" }}
        initial={{ top: 0, height: 0, opacity: 0 }}
        animate={
          isInView
            ? { top: ["0%", "100%"], height: 12, opacity: [0, 1, 1, 0] }
            : { top: 0, height: 0, opacity: 0 }
        }
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      />
      {/* Content fades in after border draws */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ── Founder Hero — top of page ── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-cream-100" />
        <FloatingElements count={4} className="opacity-40" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-12">
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              About Orria
            </p>
            <h1
              className="text-display text-text-primary mb-4"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Built by someone who&apos;s
              <br />
              <span className="italic">lived the crossroads.</span>
            </h1>
          </motion.div>

          {/* Two-column: Founder left, Timeline right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Founder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="bg-white rounded-2xl border border-cream-300/50 shadow-soft overflow-hidden">
                {/* Photo */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-cyan-500/10 to-amber-500/10 overflow-hidden">
                  <Image
                    src="/founder.jpg"
                    alt="Hojae Jung, Founder of Orria"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center 30%" }}
                    priority
                    unoptimized
                  />
                </div>

                {/* Bio */}
                <div className="p-8">
                  <h3
                    className="text-text-primary text-xl font-semibold mb-1"
                    style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
                  >
                    Hojae Jung
                  </h3>
                  <p className="text-text-muted text-sm mb-5">Founder &amp; Builder</p>

                  <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
                    <p>
                      A product builder with an uncommon path — from the Apple Genius Bar to managing products at SafetyCulture, CoverGenius, and Unleash live, from the front lines of the Republic of Korea and United States armies to shaping digital experiences used by thousands.
                    </p>
                    <p>
                      Hojae started where great product people often do: closest to the customer. Years of solving real problems sharpened an instinct for what users actually need — not just what they ask for.
                    </p>
                    <p>
                      Between those chapters, he served in two armies — earning early promotions at every rank, leading 60+ soldiers, and developing the discipline and bias for action that defines how Orria is built: with relentless standards and zero shortcuts.
                    </p>
                    <p>
                      Orria is the product of all of it — a designer&apos;s eye, a soldier&apos;s discipline, and a product leader&apos;s conviction that the tools for life&apos;s biggest decisions deserve to be extraordinary.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Orria Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-8">
                <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-3">
                  Orria&apos;s Journey
                </p>
                <h2
                  className="text-heading text-text-primary"
                  style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
                >
                  From idea to reality
                </h2>
              </div>

              {/* Timeline */}
              <div className="relative pl-8">
                {/* Vertical line */}
                <div className="absolute left-[4px] top-2 bottom-2 w-[2px] bg-cream-300" />

                <div className="space-y-8">
                  {timeline.map((item, i) => {
                    const isLast = i === timeline.length - 1;
                    return (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                        className="relative"
                      >
                        {/* Dot */}
                        <div
                          className={`absolute -left-8 top-1 w-[10px] h-[10px] rounded-full border-2 ${
                            isLast
                              ? "bg-cyan-500 border-cyan-500"
                              : "bg-white border-cyan-400"
                          }`}
                        />
                        {/* Pulse on last */}
                        {isLast && (
                          <motion.div
                            className="absolute -left-8 top-1 w-[10px] h-[10px] rounded-full bg-cyan-500/40"
                            animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        )}

                        <div className="bg-white rounded-xl p-5 border border-cream-300/50 shadow-soft">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-semibold text-cyan-600 bg-cyan-500/10 px-2.5 py-0.5 rounded-full">
                              {item.year}
                            </span>
                            <span className="text-sm font-semibold text-text-primary">
                              {item.label}
                            </span>
                          </div>
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Current status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-8 bg-cyan-500/5 border border-cyan-500/15 rounded-2xl p-6 text-center"
              >
                <p
                  className="text-cyan-600 text-lg font-semibold mb-1"
                  style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
                >
                  We&apos;re almost there.
                </p>
                <p className="text-text-secondary text-sm">
                  Beta testing underway. Public launch coming 2026.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story — Pull Quote + Brief */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedQuoteBorder>
            <blockquote>
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
                — Hojae Jung, Founder
              </cite>
            </blockquote>
          </AnimatedQuoteBorder>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <p className="text-text-secondary leading-relaxed max-w-2xl">
              Orria started with a moment most people know well: standing at a crossroads
              and wishing you had a better way to think it through. Not a chatbot that gives
              you an answer, but a thinking partner that helps you discover your own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="relative py-20 md:py-28 bg-cream-100 overflow-hidden">
        <FloatingElements
          count={5}
          colors={["#0891B2", "#E5A53D", "#C4704B"]}
          className="opacity-40"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
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
                className="flex gap-5 group"
              >
                <div className="flex-shrink-0 pt-1.5">
                  <motion.span
                    className="text-cyan-500/40 text-2xl font-bold font-mono block"
                    whileHover={{ scale: 1.2, color: "var(--cyan-500)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                </div>
                <div>
                  <h3
                    className="text-text-primary font-semibold text-lg mb-3"
                    style={{
                      fontFamily:
                        "var(--font-playfair), Playfair Display, serif",
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
