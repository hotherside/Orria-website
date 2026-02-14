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
import {
  Building2,
  Landmark,
  Users2,
  GraduationCap,
  TrendingUp,
  Brain,
  SmartphoneNfc,
  Globe,
} from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Companies & Teams",
    description:
      "Team decision logs with accountability. See who decided what, when, and why. Pattern recognition across departments. Build institutional memory.",
    color: "#0891B2",
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    description:
      "Transparent public decision records that build citizen trust. Policy decisions logged with full context. Accountability through visibility.",
    color: "#6366F1",
  },
  {
    icon: Users2,
    title: "Meetings & Collaboration",
    description:
      "Capture decisions during meetings in real-time. Follow-through tracking. No more 'what did we decide last time?' Never lose a decision again.",
    color: "#9333EA",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Teach decision-making frameworks to students. Practice structured thinking. Build reflection habits early. A skill for life, not just school.",
    color: "#E5A53D",
  },
];

const markets = [
  {
    title: "Decision Intelligence",
    current: "$16.3B",
    future: "$50.1B by 2030",
    cagr: "24.7%",
    source: "MarketsandMarkets",
  },
  {
    title: "AI Companion",
    current: "$37.1B",
    future: "$552.5B by 2035",
    cagr: "31%",
    source: "Precedence Research",
  },
  {
    title: "Mental Wellness Apps",
    current: "$7.2B",
    future: "$22.5B by 2033",
    cagr: "15.2%",
    source: "Industry Research",
  },
  {
    title: "AI Assistant",
    current: "$3.4B",
    future: "$21.1B by 2030",
    cagr: "44.5%",
    source: "Industry Research",
  },
];

const whyNow = [
  {
    icon: Brain,
    title: "AI is Conversational Now",
    description:
      "GPT-4o enables genuine multi-turn dialogue at scale. Multi-turn facilitation costs ~$0.005 per session. Before: AI was too shallow for real conversation. Now: AI can genuinely help people think.",
  },
  {
    icon: SmartphoneNfc,
    title: "Social Media Fatigue",
    description:
      "Social media usage down 10% since 2022. Two-thirds of users experience platform fatigue. Younger users spending more time offline. The market is ready for substance over performance.",
  },
  {
    icon: Globe,
    title: "Decision Anxiety Epidemic",
    description:
      "Post-pandemic complexity has exploded. Remote work, digital nomadism, career fluidity — more complex choices than ever. Traditional support networks are dispersed. People need a thinking partner.",
  },
];

export default function PotentialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 hero-mesh-dark opacity-50" />
        <div className="absolute inset-0 hero-noise pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Potentials & Research
            </p>
            <h1
              className="text-display text-white mb-6"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
              }}
            >
              Beyond Personal.
              <br />
              <span className="italic text-cyan-400">
                The Future of Decision Intelligence.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              What if every meeting, every team, every organization could think
              through decisions with the same clarity? Orria is just the
              beginning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
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
              An Inside Out-like decision tree
              <br />
              <span className="italic">for organizations</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Key decisions logged in one place — public for transparency or
              internal for accountability. Every organization can think more
              clearly.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {useCases.map((uc) => (
              <motion.div
                key={uc.title}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-8 border border-cream-300/50 shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${uc.color}12` }}
                >
                  <uc.icon size={24} style={{ color: uc.color }} />
                </div>
                <h3 className="text-text-primary font-semibold text-lg mb-3">
                  {uc.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {uc.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Market Research */}
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
              Market Research
            </p>
            <h2
              className="text-heading text-white mb-4"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
              }}
            >
              A massive, growing opportunity
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {markets.map((market) => (
              <motion.div
                key={market.title}
                variants={staggerItem}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
              >
                <h3 className="text-white font-semibold text-lg mb-4">
                  {market.title}
                </h3>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-white/40 text-sm">
                    {market.current}
                  </span>
                  <TrendingUp size={16} className="text-cyan-400 mb-0.5" />
                  <span className="text-cyan-400 font-semibold">
                    {market.future}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-semibold">
                    {market.cagr} CAGR
                  </span>
                  <span className="text-white/30 text-xs">
                    {market.source}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decision fatigue stat */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-white/5 border border-white/10 rounded-2xl px-10 py-8 backdrop-blur-sm">
              <p
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                style={{
                  fontFamily: "var(--font-playfair), Playfair Display, serif",
                }}
              >
                <AnimatedCounter target={400} prefix="$" suffix="B" />
              </p>
              <p className="text-white/60 text-sm">
                lost annually to decision fatigue
              </p>
              <p className="text-white/30 text-xs mt-1">
                World Economic Forum, 2023
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2
              className="text-heading text-text-primary"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
              }}
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
                <h3 className="text-text-primary font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
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
              Interested in bringing Orria
              <br />
              <span className="italic">to your organization?</span>
            </h2>
            <p className="text-text-secondary mb-6">
              We&apos;re exploring enterprise partnerships and pilot programs.
            </p>
            <a
              href="mailto:hello@orria.app"
              className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition-colors shadow-md mb-8"
            >
              Get in Touch
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
