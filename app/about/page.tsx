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
import {
  MessageCircle,
  Sparkles,
  Clock,
  RefreshCw,
  Users,
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
      "We built four distinct AI personalities \u2014 not because one isn\u2019t enough, but because your blind spots need more than one lens. Maya encourages, Liam analyzes, Sara grounds, Rex challenges. And when AI isn\u2019t enough, real people from the Orria community offer perspectives shaped by lived experience.",
  },
  {
    title: "Closing the loop builds wisdom",
    description:
      "Most decisions disappear the moment you make them. Orria asks you to come back. Record what you chose. Reflect on whether you\u2019d do it again. That\u2019s how scattered choices become lived wisdom.",
  },
  {
    title: "Your decisions are your autobiography",
    description:
      "The relationship you fought for. The city you almost moved to. The career change that scared you. Whether to rent or buy, which school for the kids, the treatment plan you debated. These crossroads defined who you are \u2014 but most are forgotten. Orria\u2019s journal keeps the story of how you became you.",
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

const timeline = [
  { year: "2024", label: "The idea", detail: "Born from a personal crossroad that had no good tool" },
  { year: "Early 2025", label: "Design & build", detail: "Full iOS app designed and engineered end-to-end" },
  { year: "Mid 2025", label: "AI agents ship", detail: "Four AI personalities + facilitator go live" },
  { year: "Late 2025", label: "Community & beta", detail: "Real human perspectives layer + beta testing" },
  { year: "2026", label: "Launch", detail: "Public release on the App Store" },
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

/* Animated framework step with hover + scroll effects */
function FrameworkCard({
  step,
  index,
}: {
  step: (typeof framework)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className="relative text-center p-6 rounded-2xl bg-white border border-cream-300/50 shadow-soft hover-scan-border group"
    >
      {/* Icon container with animated entrance */}
      <motion.div
        className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
        style={{
          backgroundColor: `color-mix(in srgb, ${step.color} 10%, transparent)`,
        }}
        initial={{ scale: 0, rotate: -45 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
        transition={{
          duration: 0.5,
          delay: 0.2 + index * 0.15,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        <motion.div
          animate={isInView ? { y: [-1, 1, -1] } : {}}
          transition={{ duration: 2.5 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
        >
          <step.icon size={22} style={{ color: step.color }} />
        </motion.div>
      </motion.div>
      <h3 className="text-text-primary font-semibold mb-2">{step.label}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {step.description}
      </p>
      {/* Connecting arrow between cards */}
      {index < framework.length - 1 && (
        <motion.div
          className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-cyan-500/30"
          initial={{ opacity: 0, x: -5 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
          transition={{ delay: 0.6 + index * 0.15 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      )}
    </motion.div>
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
                    className="object-cover object-top"
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
                      A product builder with an uncommon path — from the Apple Genius Bar to leading platform teams, from the front lines of the Republic of Korea and United States armies to shaping digital experiences used by thousands.
                    </p>
                    <p>
                      Hojae started where great product people often do: closest to the customer. Years of solving real problems at Apple and SafetyCulture sharpened an instinct for what users actually need — not just what they ask for. That foundation evolved into leading product strategy at CoverGenius, where he built 0-to-1 platforms and rallied cross-functional teams around a shared vision.
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
                <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-cream-300" />

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
                comfortable role to chase something uncertain. A relationship at
                a turning point. The life choices that don&apos;t fit in a
                spreadsheet. We all face these moments — and we all handle them
                the same way: asking friends who are biased, searching the
                internet for answers that don&apos;t exist, and spinning in
                circles for weeks.
              </p>
              <p>
                Every decision tool wanted a form. But real dilemmas don&apos;t
                start with structure — they start with mess. We needed
                something that could meet us in the uncertainty and help us
                find clarity through conversation.
              </p>
            </div>
          </motion.div>

          {/* Animated Pull Quote */}
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
              that shape your life — from career moves to relationship
              crossroads, health choices to financial turning points. Get
              perspectives from AI personalities that challenge your blind
              spots, share with real people who&apos;ve been there, and build
              a journal of the choices that made you who you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="relative py-20 md:py-28 bg-cream-100 overflow-hidden">
        <FloatingElements
          count={10}
          colors={["#0891B2", "#E5A53D", "#6366F1", "#9333EA", "#C4704B"]}
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
              <FrameworkCard key={step.label} step={step} index={i} />
            ))}
          </motion.div>

          {/* Community callout */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/5 border border-cyan-500/15">
              <Users size={14} className="text-cyan-500" />
              <span className="text-text-secondary text-sm">
                Plus real community perspectives from people who&apos;ve faced similar decisions
              </span>
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
