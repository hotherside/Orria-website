"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animation-variants";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { WaitlistForm } from "@/components/shared/WaitlistForm";
import { FloatingElements } from "@/components/shared/FloatingElements";
import {
  Mic,
  Users,
  Sparkles,
  TrendingUp,
  Brain,
  SmartphoneNfc,
  Globe,
  Check,
  X,
  Rocket,
  Target,
  Calendar,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────── */

const opportunityStats = [
  { value: 400, prefix: "$", suffix: "B", label: "Lost annually to decision fatigue", source: "World Economic Forum" },
  { value: 35, suffix: "K", label: "Decisions made per person per day", source: "Various studies" },
  { value: 85, suffix: "%", label: "Adults report anxiety about major life decisions", source: "APA Research" },
];

const howItWorks = [
  {
    icon: Mic,
    step: "01",
    title: "Speak",
    description: "Tap the mic, say what\u2019s on your mind. AI structures your messy thoughts into a clear decision framework.",
    color: "#0891B2",
  },
  {
    icon: Users,
    step: "02",
    title: "Explore",
    description: "Four AI personalities challenge your blind spots. Share with the community for real human perspectives.",
    color: "#6366F1",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Decide & Remember",
    description: "Make the call. Journal the outcome. Build a personal record of wisdom that compounds over time.",
    color: "#E5A53D",
  },
];

const traction = [
  { icon: Target, label: "App built end-to-end", detail: "Beta-ready, full feature set" },
  { icon: Calendar, label: "Launching 2026", detail: "Final testing phase" },
  { icon: Rocket, label: "Growing waitlist", detail: "Early adopters signing up daily" },
];

const markets = [
  { title: "Decision Intelligence", current: "$16.3B", future: "$50.1B", year: "2030", cagr: "24.7%", source: "MarketsandMarkets", barWidth: "60%" },
  { title: "AI Companion", current: "$37.1B", future: "$552.5B", year: "2035", cagr: "31%", source: "Precedence Research", barWidth: "100%" },
  { title: "Mental Wellness Apps", current: "$7.2B", future: "$22.5B", year: "2033", cagr: "15.2%", source: "Industry Research", barWidth: "35%" },
  { title: "AI Assistant", current: "$3.4B", future: "$21.1B", year: "2030", cagr: "44.5%", source: "Industry Research", barWidth: "30%" },
];

const competitors = [
  { name: "Orria", structured: true, perspectives: true, memory: true, community: true, voice: true, highlight: true },
  { name: "ChatGPT", structured: false, perspectives: false, memory: false, community: false, voice: true, highlight: false },
  { name: "Therapy", structured: true, perspectives: true, memory: true, community: false, voice: false, highlight: false },
  { name: "Journal Apps", structured: false, perspectives: false, memory: true, community: false, voice: false, highlight: false },
  { name: "Pro/Con Lists", structured: true, perspectives: false, memory: false, community: false, voice: false, highlight: false },
];

const competitorCriteria = ["Structured thinking", "Multiple perspectives", "Decision memory", "Community feedback", "Voice-first"];

const whyNow = [
  {
    icon: Brain,
    title: "AI is conversational now",
    description: "Multi-turn facilitation at ~$0.005/session. Before: too shallow. Now: genuinely helpful.",
  },
  {
    icon: SmartphoneNfc,
    title: "Social media fatigue",
    description: "Usage down 10% since 2022. Two-thirds experience platform fatigue. People want substance.",
  },
  {
    icon: Globe,
    title: "Decision anxiety epidemic",
    description: "Gen Z reports 2x more decision anxiety than previous generations. The need is urgent and growing.",
  },
];

/* ── Page ─────────────────────────────────────────── */

export default function PotentialsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 hero-mesh-dark opacity-50" />
        <div className="absolute inset-0 hero-noise pointer-events-none" />
        <FloatingElements count={10} colors={["#22D3EE", "#6366F1", "#E5A53D"]} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Potentials & Research
            </p>
            <h1
              className="text-display text-white mb-6"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              The Decision
              <br />
              <span className="italic text-cyan-400">Intelligence Platform.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Helping people think through life&apos;s crossroads — with AI perspectives and real community. A new category, a massive market, and perfect timing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── The Opportunity ── */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              The Opportunity
            </p>
            <h2
              className="text-heading text-text-primary"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              A problem everyone has.
              <br />
              <span className="italic">No one has solved.</span>
            </h2>
          </motion.div>

          {/* Stat boxes */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {opportunityStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 border border-cream-300/50 shadow-soft text-center"
              >
                <p
                  className="text-4xl md:text-5xl font-bold text-cyan-600 mb-3"
                  style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
                >
                  <AnimatedCounter target={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix || ""} />
                </p>
                <p className="text-text-primary font-medium text-sm mb-1">{stat.label}</p>
                <p className="text-text-muted text-xs">{stat.source}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              How It Works
            </p>
            <h2
              className="text-heading text-text-primary"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Three steps. <span className="italic">That&apos;s it.</span>
            </h2>
            <p className="text-text-secondary mt-3">
              From messy thought to confident decision in minutes.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {howItWorks.map((step) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="relative bg-white rounded-2xl p-8 border border-cream-300/50 shadow-soft text-center"
              >
                <span className="text-xs font-mono text-text-muted/40 font-bold absolute top-4 left-5">
                  {step.step}
                </span>
                <motion.div
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                  style={{ backgroundColor: `${step.color}12` }}
                >
                  <step.icon size={28} style={{ color: step.color }} />
                </motion.div>
                <h3 className="text-text-primary font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Traction ── */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-12"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Traction
            </p>
            <h2
              className="text-heading text-text-primary"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Building in public. <span className="italic">Moving fast.</span>
            </h2>
          </motion.div>

          {/* Live waitlist counter */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-10"
          >
            <WaitlistForm variant="section" />
          </motion.div>

          {/* Milestones */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {traction.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="flex items-center gap-4 bg-white rounded-xl p-5 border border-cream-300/50 shadow-soft"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-cyan-600" />
                </div>
                <div>
                  <p className="text-text-primary font-semibold text-sm">{item.label}</p>
                  <p className="text-text-muted text-xs">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Market Size ── */}
      <section className="py-20 md:py-28 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh-dark opacity-30" />
        <div className="absolute inset-0 hero-noise pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Market Size
            </p>
            <h2
              className="text-heading text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Four converging <span className="italic text-cyan-400">B$+ markets</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Orria sits at the intersection of four massive, fast-growing market categories.
            </p>
          </motion.div>

          {/* Market bars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-5 mb-12"
          >
            {markets.map((market) => (
              <motion.div
                key={market.title}
                variants={staggerItem}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-white font-semibold text-base">{market.title}</h3>
                  <div className="flex items-center gap-2 mt-1 md:mt-0">
                    <span className="text-white/40 text-sm">{market.current}</span>
                    <TrendingUp size={14} className="text-cyan-400" />
                    <span className="text-cyan-400 font-semibold">{market.future}</span>
                    <span className="text-white/30 text-xs">by {market.year}</span>
                  </div>
                </div>
                {/* Animated bar */}
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: market.barWidth }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                  />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-semibold">
                    {market.cagr} CAGR
                  </span>
                  <span className="text-white/30 text-xs">{market.source}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Total */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center"
          >
            <div className="inline-block bg-white/5 border border-white/10 rounded-2xl px-10 py-8 backdrop-blur-sm">
              <p
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
              >
                <AnimatedCounter target={600} prefix="$" suffix="B+" />
              </p>
              <p className="text-white/60 text-sm">Combined addressable market</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Competitive Edge ── */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Competitive Edge
            </p>
            <h2
              className="text-heading text-text-primary"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Nothing else <span className="italic">does this.</span>
            </h2>
          </motion.div>

          {/* Comparison table */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="bg-white rounded-2xl border border-cream-300/50 shadow-soft overflow-hidden"
          >
            {/* Header */}
            <div className="grid grid-cols-6 gap-0 border-b border-cream-200 bg-cream-50">
              <div className="p-4" />
              {competitorCriteria.map((c) => (
                <div key={c} className="p-3 text-center">
                  <p className="text-text-muted text-[10px] md:text-xs font-semibold uppercase tracking-wider leading-tight">{c}</p>
                </div>
              ))}
            </div>
            {/* Rows */}
            {competitors.map((comp, rowIdx) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: rowIdx * 0.1 }}
                className={`grid grid-cols-6 gap-0 border-b last:border-b-0 ${comp.highlight ? "bg-cyan-500/5" : ""}`}
              >
                <div className={`p-4 flex items-center ${comp.highlight ? "font-bold text-cyan-600" : "text-text-primary"} text-sm`}>
                  {comp.name}
                </div>
                {[comp.structured, comp.perspectives, comp.memory, comp.community, comp.voice].map((val, i) => (
                  <div key={i} className="p-3 flex items-center justify-center">
                    {val ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: rowIdx * 0.1 + i * 0.05, type: "spring", stiffness: 300 }}
                      >
                        <Check size={16} className={comp.highlight ? "text-cyan-500" : "text-green-500"} />
                      </motion.div>
                    ) : (
                      <X size={14} className="text-text-muted/30" />
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Now ── */}
      <section className="py-20 md:py-28 bg-cream-50 relative overflow-hidden">
        <FloatingElements count={5} colors={["#0891B2", "#6366F1", "#E5A53D"]} />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2
              className="text-heading text-text-primary"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Why <span className="italic">now?</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {whyNow.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 border border-cream-300/50 shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5">
                  <item.icon size={24} className="text-cyan-500" />
                </div>
                <h3 className="text-text-primary font-semibold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="py-20 md:py-28 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh-dark opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-6">
              The Vision
            </p>
            <h2
              className="text-heading text-white mb-6"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              A world where no one faces
              <br />
              <span className="italic text-cyan-400">their biggest decisions alone.</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed mb-3">
              Built by a founder who&apos;s lived the problem across 3 continents.
            </p>
            <p className="text-white/30 text-sm max-w-xl mx-auto leading-relaxed">
              Every career pivot, every relocation, every relationship crossroad — these aren&apos;t just features we built. They&apos;re decisions we&apos;ve wrestled with. Orria exists because we needed it first.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
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
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Interested in bringing Orria
              <br />
              <span className="italic">to your organization?</span>
            </h2>
            <p className="text-text-secondary mb-6">
              We&apos;re exploring partnerships, pilots, and investment opportunities.
            </p>
            <a
              href="mailto:hello@orria.app"
              className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition-colors shadow-md mb-8"
            >
              Let&apos;s Talk
            </a>
            <div className="pt-8 border-t border-cream-300">
              <p className="text-text-muted text-sm mb-4">
                Or join the waitlist for the personal app
              </p>
              <WaitlistForm variant="section" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
