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
  Building2,
  Landmark,
  Shield,
  FileText,
  BarChart3,
  Eye,
  ArrowRight,
  Zap,
  Lock,
  BookOpen,
  Briefcase,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────── */

const opportunityStats = [
  { value: 250, prefix: "$", suffix: "B+", label: "Lost annually to poor decision-making in organizations", source: "Gallup Workplace Research" },
  { value: 35, suffix: "K", label: "Decisions made per person per day", source: "Sahakian & Labuzetta, 2013" },
  { value: 85, suffix: "%", label: "Adults report anxiety about major life decisions", source: "Oracle Decision Dilemma Study, 2023" },
  { value: 72, suffix: "%", label: "Executives say bad decisions are about as frequent as good ones", source: "McKinsey" },
];

const howItWorks = [
  {
    icon: Mic,
    step: "01",
    title: "Speak or Type",
    description: "No forms, no templates. Just say what\u2019s on your mind. AI structures the mess into a clear decision framework in seconds.",
    color: "#0891B2",
  },
  {
    icon: Users,
    step: "02",
    title: "Get Perspectives",
    description: "Four distinct AI personalities challenge your blind spots from every angle. Then share with real humans who\u2019ve been there.",
    color: "#6366F1",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Decide & Remember",
    description: "Make the call. Set a deadline. Journal the outcome. Build a living record of wisdom that compounds over time.",
    color: "#E5A53D",
  },
];

const traction = [
  { icon: Zap, label: "Built in 28 days", detail: "3 major versions, 162-item QA sweep" },
  { icon: Calendar, label: "Beta: Late Feb 2026", detail: "Closed beta with early adopters" },
  { icon: Rocket, label: "Launch: March 2026", detail: "App Store public release" },
];

const markets = [
  { title: "Decision Intelligence", current: "$13.3B", future: "$50.1B", year: "2030", cagr: "24.7%", source: "MarketsandMarkets", barWidth: "60%" },
  { title: "AI Companion & Copilot", current: "$37.1B", future: "$552.5B", year: "2035", cagr: "31%", source: "Precedence Research", barWidth: "100%" },
  { title: "Mental Wellness Apps", current: "$7.2B", future: "$22.5B", year: "2033", cagr: "15.2%", source: "Industry Research", barWidth: "35%" },
  { title: "AI Virtual Assistant", current: "$3.4B", future: "$21.1B", year: "2030", cagr: "44.5%", source: "Industry Research", barWidth: "30%" },
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
    description: "Multi-turn facilitation at ~$0.005/session. GPT-4o makes genuine, nuanced thinking partners possible at scale for the first time.",
  },
  {
    icon: SmartphoneNfc,
    title: "Social media fatigue is real",
    description: "Growing platform fatigue \u2014 two-thirds of users report wanting more substance and less noise from their digital tools. People are craving depth.",
  },
  {
    icon: Globe,
    title: "Decision anxiety is an epidemic",
    description: "Decision anxiety is surging \u2014 younger generations report unprecedented levels of choice paralysis. The need is urgent, growing, and completely unmet by existing tools.",
  },
];

/* B2B + Public Sector use cases */
const b2bUseCases = [
  {
    icon: Building2,
    title: "Enterprise Decision Logs",
    accent: "#0891B2",
    description: "Organizations log key strategic decisions \u2014 from hiring and M&A to product pivots \u2014 creating a living institutional memory. Teams can search, learn from, and build on the decisions that shaped the company.",
    features: [
      "Private team-wide decision journals",
      "Searchable institutional decision history",
      "AI-assisted post-mortem and retrospectives",
      "Decision quality analytics for leadership",
    ],
  },
  {
    icon: Landmark,
    title: "Government & Public Sector Transparency",
    accent: "#6366F1",
    description: "Departments and agencies log policy decisions, budget allocations, and administrative choices \u2014 optionally shared with the public. A verifiable record of how and why decisions were made, building trust at every level of governance.",
    features: [
      "Public-facing decision transparency portals",
      "Inter-department decision visibility",
      "Audit-ready decision trails with reasoning",
      "Administration change documentation",
    ],
  },
  {
    icon: Shield,
    title: "Compliance & Risk Management",
    accent: "#E5A53D",
    description: "Regulated industries need to show their work. Orria\u2019s decision logs with AI-generated reasoning summaries create a defensible audit trail \u2014 reducing liability and improving governance.",
    features: [
      "Timestamped, immutable decision records",
      "AI-generated reasoning documentation",
      "Risk assessment perspectives built-in",
      "Exportable compliance reports",
    ],
  },
  {
    icon: BookOpen,
    title: "Education & Leadership Development",
    accent: "#9333EA",
    description: "Universities, business schools, and corporate training programs use decision journals to develop critical thinking. Students and emerging leaders learn to structure decisions, consider multiple perspectives, and reflect on outcomes.",
    features: [
      "Structured decision-making curriculum tool",
      "Cohort-based reflection and peer feedback",
      "Leadership pattern analytics over time",
      "Case study generation from real decisions",
    ],
  },
];

const expansionPaths = [
  {
    phase: "Now",
    title: "Consumer \u2014 D2C",
    description: "Personal decision companion for individuals navigating life\u2019s crossroads.",
    color: "#0891B2",
  },
  {
    phase: "Next",
    title: "Teams & Organizations",
    description: "Private team decision journals. Shared institutional wisdom. Decision quality dashboards.",
    color: "#6366F1",
  },
  {
    phase: "Then",
    title: "Public Sector & Governance",
    description: "Transparency portals. Department decision logs. Audit-ready governance records.",
    color: "#E5A53D",
  },
  {
    phase: "Beyond",
    title: "Platform & API",
    description: "Decision intelligence infrastructure. Embeddable thinking tools. Decision data insights.",
    color: "#9333EA",
  },
];

/* ── Page ─────────────────────────────────────────── */

export default function PotentialsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-cream-100" />
        <FloatingElements count={10} colors={["#0891B2", "#6366F1", "#E5A53D"]} className="opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Potentials & Research
            </p>
            <h1
              className="text-display text-text-primary mb-6"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              The Decision
              <br />
              <span className="italic text-cyan-600">Intelligence Platform.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed mb-2">
              Orria starts as a personal thinking partner. But the platform is built to scale into enterprise decision logs, government transparency, and institutional wisdom.
            </p>
            <p className="text-text-muted text-base max-w-xl mx-auto">
              A new category. A massive market. Perfect timing. And a path from consumer to platform.
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
            viewport={viewportSettings}
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
              <span className="italic">No one does it well.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
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
            viewport={viewportSettings}
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
            viewport={viewportSettings}
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

                {/* Connecting arrow */}
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

      {/* ── Beyond Consumer — B2B & Public Sector ── */}
      <section className="py-16 md:py-24 bg-cream-100 relative overflow-hidden">
        <FloatingElements count={5} colors={["#6366F1", "#E5A53D", "#9333EA"]} className="opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-6"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Beyond Consumer
            </p>
            <h2
              className="text-heading text-text-primary mb-4"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Decisions don&apos;t just shape people.
              <br />
              <span className="italic text-cyan-600">They shape organizations and nations.</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-base leading-relaxed">
              Every company, government department, and institution makes thousands of consequential decisions — and almost none of them are captured, searchable, or learnable. Orria changes that.
            </p>
          </motion.div>

          {/* Use case cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
          >
            {b2bUseCases.map((useCase) => (
              <motion.div
                key={useCase.title}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 border border-cream-300/50 shadow-soft hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${useCase.accent}12` }}
                  >
                    <useCase.icon size={24} style={{ color: useCase.accent }} />
                  </div>
                  <h3
                    className="text-text-primary font-semibold text-lg"
                    style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
                  >
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {useCase.description}
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {useCase.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <Check size={14} style={{ color: useCase.accent }} className="flex-shrink-0" />
                      <span className="text-text-secondary text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Transparency callout */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-10 bg-white rounded-2xl border border-cyan-500/15 p-8 max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Eye size={20} className="text-cyan-600" />
              </div>
              <div>
                <h4 className="text-text-primary font-semibold mb-2">The Transparency Thesis</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Imagine a world where a government department shares its key policy decisions publicly — not just the outcome, but the reasoning, the perspectives considered, and the trade-offs weighed. Where a company&apos;s leadership logs show not just what was decided, but <span className="font-semibold text-text-primary">how they think</span>. Orria makes this possible: structured, searchable, and verifiable decision records that build institutional trust over time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Expansion Path ── */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-14"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Growth Path
            </p>
            <h2
              className="text-heading text-text-primary"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Consumer first.
              <br />
              <span className="italic">Platform eventually.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-4 gap-5"
          >
            {expansionPaths.map((path, i) => (
              <motion.div
                key={path.phase}
                variants={staggerItem}
                className="relative bg-white rounded-2xl p-6 border border-cream-300/50 shadow-soft"
              >
                <div
                  className="text-[10px] font-bold uppercase tracking-widest mb-3 px-2.5 py-1 rounded-full inline-block"
                  style={{ backgroundColor: `${path.color}12`, color: path.color }}
                >
                  {path.phase}
                </div>
                <h3
                  className="text-text-primary font-semibold text-base mb-2"
                  style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
                >
                  {path.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">{path.description}</p>

                {i < expansionPaths.length - 1 && (
                  <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-cream-400">
                    <ArrowRight size={14} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Traction ── */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
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

          {/* Milestones */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
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

          {/* Waitlist */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center"
          >
            <WaitlistForm variant="section" />
          </motion.div>
        </div>
      </section>

      {/* ── Market Size ── */}
      <section className="py-16 md:py-24 bg-cream-50 relative overflow-hidden">
        <FloatingElements count={5} colors={["#0891B2", "#6366F1", "#E5A53D"]} className="opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
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
              Orria sits at the intersection of four massive, fast-growing categories — each independently a compelling opportunity.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-4 mb-10"
          >
            {markets.map((market) => (
              <motion.div
                key={market.title}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 border border-cream-300/50 shadow-soft"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-text-primary font-semibold text-base">{market.title}</h3>
                  <div className="flex items-center gap-2 mt-1 md:mt-0">
                    <span className="text-text-muted text-sm">{market.current}</span>
                    <TrendingUp size={14} className="text-cyan-500" />
                    <span className="text-cyan-600 font-semibold">{market.future}</span>
                    <span className="text-text-muted text-xs">by {market.year}</span>
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
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 text-xs font-semibold">
                    {market.cagr} CAGR
                  </span>
                  <span className="text-text-muted text-xs">{market.source}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Combined TAM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center"
          >
            <div className="inline-block bg-white rounded-2xl px-10 py-8 border border-cream-300/50 shadow-soft">
              <p
                className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2"
                style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
              >
                <AnimatedCounter target={600} prefix="$" suffix="B+" />
              </p>
              <p className="text-text-secondary text-sm">Combined addressable market by 2035</p>
            </div>
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
            viewport={viewportSettings}
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
            <p className="text-text-secondary max-w-lg mx-auto text-sm">
              People use ChatGPT, therapists, friends, and pro/con lists. None combine structured thinking, multiple perspectives, decision memory, community, and voice.
            </p>
          </motion.div>

          {/* Comparison table */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="bg-white rounded-2xl border border-cream-300/50 shadow-soft overflow-hidden"
          >
            <div className="grid grid-cols-6 gap-0 border-b border-cream-200 bg-cream-50">
              <div className="p-4" />
              {competitorCriteria.map((c) => (
                <div key={c} className="p-3 text-center">
                  <p className="text-text-muted text-[10px] md:text-xs font-semibold uppercase tracking-wider leading-tight">{c}</p>
                </div>
              ))}
            </div>
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
      <section className="py-16 md:py-24 bg-cream-50 relative overflow-hidden">
        <FloatingElements count={4} colors={["#0891B2", "#6366F1", "#E5A53D"]} className="opacity-25" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
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

      {/* ── Revenue Model ── */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-14"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Business Model
            </p>
            <h2
              className="text-heading text-text-primary"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Multiple revenue streams. <span className="italic">Clear path to scale.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={staggerItem} className="bg-white rounded-2xl p-7 border border-cream-300/50 shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                <Briefcase size={20} className="text-cyan-600" />
              </div>
              <h3 className="text-text-primary font-semibold mb-2">Consumer Subscription</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Freemium with Orria Pro at $4.99/mo or $39.99/yr. Unlimited AI conversations, advanced insights, extended journal history.
              </p>
              <p className="text-xs font-semibold text-cyan-600">$4.99 \u2013 $39.99/yr per user</p>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white rounded-2xl p-7 border border-cream-300/50 shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                <Building2 size={20} style={{ color: "#6366F1" }} />
              </div>
              <h3 className="text-text-primary font-semibold mb-2">Enterprise Licenses</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Per-seat pricing for organizations. Team decision journals, admin dashboards, SSO, and data residency controls.
              </p>
              <p className="text-xs font-semibold" style={{ color: "#6366F1" }}>Per-seat SaaS pricing</p>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white rounded-2xl p-7 border border-cream-300/50 shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                <Landmark size={20} style={{ color: "#E5A53D" }} />
              </div>
              <h3 className="text-text-primary font-semibold mb-2">Public Sector Contracts</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Government and institutional licensing for transparency portals, department-wide decision logs, and compliance tooling.
              </p>
              <p className="text-xs font-semibold" style={{ color: "#E5A53D" }}>Contract-based</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="py-16 md:py-24 bg-cream-50 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-6">
              The Vision
            </p>
            <h2
              className="text-heading text-text-primary mb-6"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              A world where no one faces
              <br />
              <span className="italic text-cyan-600">their biggest decisions alone.</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto leading-relaxed mb-4">
              We started building Orria on January 18th, 2026. In under a month, we shipped three major versions, resolved 162 QA items, and built a platform that works across the full decision lifecycle.
            </p>
            <p className="text-text-muted text-sm max-w-xl mx-auto leading-relaxed">
              Every career pivot, every relocation, every relationship crossroad, every policy debate, every strategic bet — these aren&apos;t just features we built. They&apos;re decisions we&apos;ve wrestled with. Orria exists because the world needs a better way to think.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cream-100 to-cream-200">
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
                Or join the waitlist for early access
              </p>
              <WaitlistForm variant="section" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
