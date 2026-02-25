"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
} from "@/lib/animation-variants";

const eagerViewport = { once: true, amount: 0.05 };
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
  Zap,
  Calendar,
  Rocket,
  ArrowRight,
  BookOpen,
  FileText,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────── */

const opportunityStats = [
  { value: 250, prefix: "$", suffix: "B+", label: "At stake in how organizations make decisions", source: "Gallup Workplace Research" },
  { value: 35, suffix: "K", label: "Decisions made per person per day", source: "Sahakian & Labuzetta, 2013" },
  { value: 85, suffix: "%", label: "Adults want better tools for major life decisions", source: "Oracle Decision Dilemma Study, 2023" },
  { value: 72, suffix: "%", label: "Executives say decision quality is their biggest lever", source: "McKinsey" },
];

const howItWorks = [
  {
    icon: Mic,
    step: "01",
    title: "Speak or Type",
    description: "No forms, no templates. Just say what\u2019s on your mind. AI organises your thoughts into a clear decision framework in seconds.",
    color: "#0891B2",
  },
  {
    icon: Users,
    step: "02",
    title: "Get Perspectives",
    description: "Four distinct AI personalities show you what you might not see on your own. Then share with real humans who\u2019ve been there.",
    color: "#C4704B",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Decide & Remember",
    description: "Make the call. Set a deadline. Journal the outcome. Build a living record of wisdom that compounds over time.",
    color: "#E5A53D",
  },
];

const markets = [
  { title: "Decision Intelligence", current: "$13.3B", future: "$50.1B", year: "2030", cagr: "24.7%", source: "MarketsandMarkets", barWidth: "60%", narrative: "Enterprise decision tools are a $13B market growing at 25% annually. But they\u2019re built for boardrooms, not people. Orria democratizes structured decision-making for the consumer market \u2014 an entirely unaddressed segment." },
  { title: "AI Companion & Copilot", current: "$37.1B", future: "$552.5B", year: "2035", cagr: "31%", source: "Precedence Research", barWidth: "100%", narrative: "The AI companion market is exploding. But most companions are general-purpose chatbots. Orria is purpose-built for the highest-stakes moments in your life \u2014 where generic advice isn\u2019t enough." },
  { title: "Mental Wellness Apps", current: "$7.2B", future: "$22.5B", year: "2033", cagr: "15.2%", source: "Industry Research", barWidth: "35%", narrative: "Growing demand for tools that sit between \u201Ctalk to a friend\u201D and \u201Csee a therapist.\u201D Orria fills this gap \u2014 structured support without the stigma or cost of clinical care." },
  { title: "AI Virtual Assistant", current: "$3.4B", future: "$21.1B", year: "2030", cagr: "44.5%", source: "Industry Research", barWidth: "30%", narrative: "Voice-first AI assistants are becoming the default interface. Orria is voice-native from day one \u2014 say what\u2019s on your mind, get structured clarity back." },
];

const alternatives = [
  {
    name: "ChatGPT & AI Chatbots",
    icon: Brain,
    verdict: "Good for answers. Not for decisions.",
    explanation: "AI chatbots give you one perspective \u2014 theirs. They don\u2019t remember what you decided last time, can\u2019t show you multiple angles, and forget everything the moment you close the tab. They\u2019re search engines for advice, not thinking partners.",
    missingPieces: ["No decision memory", "Single perspective", "No reflection loop"],
    accent: "#64748B",
  },
  {
    name: "Therapy & Coaching",
    icon: Users,
    verdict: "Powerful \u2014 but not for everyday crossroads.",
    explanation: "Therapy is invaluable for deep emotional work. But booking a $200 session to think through whether to take the job offer or which school is right for your kid? That\u2019s not what therapy is for. And no therapist is available at 2am when the decision is keeping you up.",
    missingPieces: ["$150\u2013300/session", "Days-to-weeks wait", "Not on-demand"],
    accent: "#C4704B",
  },
  {
    name: "Journal & Notes Apps",
    icon: BookOpen,
    verdict: "Great for writing. Terrible for thinking.",
    explanation: "Journaling captures what you\u2019re feeling, not what you should consider. It\u2019s a monologue \u2014 no one pushes back, no one asks the question you\u2019re avoiding. And a year later, good luck finding that entry about the apartment decision buried in 300 pages.",
    missingPieces: ["No structured framework", "No perspectives", "Not searchable by decision"],
    accent: "#E5A53D",
  },
  {
    name: "Pro/Con Lists",
    icon: FileText,
    verdict: "Logical. But decisions aren\u2019t just logic.",
    explanation: "A pro/con list can\u2019t capture the gut feeling that one option scares you more. Decision matrices can\u2019t weigh the fact that your partner\u2019s happiness matters more than a salary bump. Real decisions are emotional, contextual, and deeply personal.",
    missingPieces: ["No emotional context", "No AI challenge", "No memory or learning"],
    accent: "#C4704B",
  },
];

const whyNow = [
  {
    icon: Brain,
    title: "AI is conversational now",
    description: "Multi-turn facilitation at ~$0.005/session. GPT-4o makes genuine, nuanced thinking partners possible at scale for the first time.",
  },
  {
    icon: SmartphoneNfc,
    title: "Social media fatigue is real",
    description: "Growing platform fatigue \u2014 two-thirds of users report wanting more substance and less noise from their digital tools. People are craving depth.",
  },
  {
    icon: Globe,
    title: "Complex choices are the new normal",
    description: "Younger generations face more complex choices than ever \u2014 and they\u2019re looking for thoughtful tools to help them navigate. The need is growing and completely unmet.",
  },
];

const traction = [
  { icon: Zap, label: "Built in 28 days", detail: "3 major versions, 162-item QA sweep" },
  { icon: Calendar, label: "Beta: Late Feb 2026", detail: "Closed beta with early adopters" },
  { icon: Rocket, label: "Launch: March 2026", detail: "App Store public release" },
];

/* ── Page ─────────────────────────────────────────── */

export default function ResearchPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-cream-100" />
        <FloatingElements count={8} colors={["#0891B2", "#C4704B", "#E5A53D"]} className="opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Research & Validation
            </p>
            <h1
              className="text-display text-text-primary mb-6"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Why Orria
              <br />
              <span className="italic text-cyan-600">needs to exist.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed mb-2">
              The research, data, and market signals that validate the decision intelligence gap — and why now is the perfect time to fill it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── The Opportunity ── */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="text-center mb-14"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              The Opportunity
            </p>
            <h2
              className="text-heading text-text-primary"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Everyone makes decisions.
              <br />
              <span className="italic">Everyone deserves better tools.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {opportunityStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="bg-white rounded-2xl p-7 border border-cream-300/50 shadow-soft text-center"
              >
                <p
                  className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2"
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
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="text-center mb-14"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              The Product
            </p>
            <h2
              className="text-heading text-text-primary"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Three steps. <span className="italic">That&apos;s it.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-7"
          >
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="relative bg-white rounded-2xl p-8 border border-cream-300/50 shadow-soft text-center"
              >
                <span className="text-xs font-mono text-text-muted/30 font-bold absolute top-4 left-5">
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

                {i < howItWorks.length - 1 && (
                  <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 items-center justify-center">
                    <ArrowRight size={16} className="text-cream-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Competitive Edge ── */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="text-center mb-14"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Competitive Edge
            </p>
            <h2
              className="text-heading text-text-primary mb-3"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Nothing else <span className="italic">does this.</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto text-sm">
              People already try to make better decisions. They use AI, therapists, journals, and spreadsheets. Here&apos;s where Orria goes further.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            {alternatives.map((alt) => (
              <motion.div
                key={alt.name}
                variants={staggerItem}
                className="bg-white rounded-2xl p-7 border border-cream-300/50 shadow-soft"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${alt.accent}12` }}
                  >
                    <alt.icon size={20} style={{ color: alt.accent }} />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold text-base">{alt.name}</h3>
                    <p className="text-text-muted text-xs">{alt.verdict}</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {alt.explanation}
                </p>
                <div className="flex flex-wrap gap-2">
                  {alt.missingPieces.map((piece) => (
                    <span key={piece} className="inline-flex items-center gap-1 text-[11px] text-text-muted px-2 py-0.5 rounded-full bg-cream-200/80">
                      <X size={10} className="text-text-muted/50" />
                      {piece}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Orria summary card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="bg-gradient-to-r from-cyan-500/5 to-cyan-500/10 rounded-2xl p-8 border border-cyan-500/15"
          >
            <div className="flex flex-col md:flex-row items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <Sparkles size={24} className="text-white" />
              </div>
              <div>
                <h3
                  className="text-text-primary font-semibold text-xl mb-2"
                  style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
                >
                  Orria is the first tool built for{" "}
                  <span className="italic text-cyan-600">how people actually decide.</span>
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4 text-sm">
                  Voice-first input that meets you where you are. Four AI personalities that challenge each other in a live roundtable. A decision journal that remembers everything. Real perspectives from people who&apos;ve navigated similar crossroads. And a reflection loop that turns choices into wisdom.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Voice-first input", "4 AI perspectives", "Decision memory", "Explore perspectives", "Reflection loop"].map((feature) => (
                    <span key={feature} className="inline-flex items-center gap-1 text-[11px] text-cyan-600 px-2.5 py-1 rounded-full bg-cyan-500/10 font-medium">
                      <Check size={10} />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Market Size ── */}
      <section className="py-16 md:py-24 bg-cream-50 relative overflow-hidden">
        <FloatingElements count={5} colors={["#0891B2", "#C4704B", "#E5A53D"]} className="opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="text-center mb-14"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Market Size
            </p>
            <h2
              className="text-heading text-text-primary mb-4"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Four converging <span className="italic text-cyan-600">billion-dollar markets</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Orria sits at the intersection of four massive, fast-growing categories. Each one represents an independent opportunity &mdash; but combined, they define a new market category.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={eagerViewport}
              className="space-y-8"
            >
              {markets.map((market) => (
                <motion.div key={market.title} variants={staggerItem}>
                  <h4 className="text-text-primary font-semibold text-base mb-1">
                    {market.title}
                    <span className="text-text-muted text-sm font-normal ml-2">
                      {market.current} &rarr; {market.future} by {market.year}
                    </span>
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {market.narrative}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={eagerViewport}
                className="space-y-4 mb-8"
              >
                {markets.map((market) => (
                  <motion.div
                    key={market.title}
                    variants={staggerItem}
                    className="bg-white rounded-xl p-5 border border-cream-300/50 shadow-soft"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-text-primary font-semibold text-sm">{market.title}</h3>
                      <div className="flex items-center gap-1.5">
                        <span className="text-text-muted text-xs">{market.current}</span>
                        <TrendingUp size={12} className="text-cyan-500" />
                        <span className="text-cyan-600 font-semibold text-xs">{market.future}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: market.barWidth }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                      />
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 text-[10px] font-semibold">
                        {market.cagr} CAGR
                      </span>
                      <span className="text-text-muted text-[10px]">{market.source}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={eagerViewport}
              >
                <div className="bg-white rounded-2xl px-8 py-6 border border-cream-300/50 shadow-soft text-center">
                  <p
                    className="text-3xl md:text-4xl font-bold text-cyan-600 mb-1"
                    style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
                  >
                    <AnimatedCounter target={600} prefix="$" suffix="B+" />
                  </p>
                  <p className="text-text-secondary text-xs">Combined addressable market by 2035</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Now ── */}
      <section className="py-16 md:py-24 bg-cream-100 relative overflow-hidden">
        <FloatingElements count={4} colors={["#0891B2", "#C4704B", "#E5A53D"]} className="opacity-25" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="text-center mb-14"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Timing
            </p>
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
            viewport={eagerViewport}
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

      {/* ── Traction ── */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="text-center mb-10"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Traction & Speed
            </p>
            <h2
              className="text-heading text-text-primary mb-3"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Built in public. <span className="italic">Moving fast.</span>
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto text-sm">
              From first commit to beta-ready in under a month. Three major versions. Over 150 QA items resolved. Solo-built.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
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

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="text-center"
          >
            <WaitlistForm variant="section" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
