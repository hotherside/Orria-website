"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportSettings } from "@/lib/animation-variants";
import { Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to start making thoughtful decisions.",
    features: [
      "10 AI sessions",
      "Unlimited decisions & journal entries",
      "Private decision journal",
      "Decision reflections & anniversaries",
      "Full conversation history",
    ],
    highlighted: false,
    accent: "#64748B",
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "/month",
    description: "For the decisions that shape your story.",
    features: [
      "Everything in Free",
      "Unlimited AI sessions",
      "Multi-round roundtables",
      "Advanced insights & patterns",
      "Priority support",
    ],
    highlighted: true,
    accent: "#0891B2",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-14 md:py-20 bg-cream-100">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-12"
        >
          <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h2
            className="text-display text-text-primary"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            Start free.
            <br />
            <span className="italic">Upgrade when you&apos;re ready.</span>
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-xl mx-auto">
            No credit card required. No pressure. Just a better way to think through what matters.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px", amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
              className={`relative rounded-2xl p-6 md:p-8 border shadow-soft ${
                tier.highlighted
                  ? "bg-white border-cyan-500/30"
                  : "bg-white border-cream-300/50"
              }`}
              style={
                tier.highlighted
                  ? { boxShadow: "0 8px 40px rgba(8, 145, 178, 0.08), 0 2px 8px rgba(0,0,0,0.04)" }
                  : undefined
              }
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500 text-white text-[10px] font-semibold">
                    <Sparkles size={10} />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Tier name */}
              <p
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: tier.accent }}
              >
                {tier.name}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className="text-4xl md:text-5xl font-bold"
                  style={{
                    fontFamily: "var(--font-playfair), Playfair Display, serif",
                    color: "#111111",
                  }}
                >
                  {tier.price}
                </span>
                <span className="text-text-muted text-sm">
                  {tier.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                {tier.description}
              </p>

              {/* Divider */}
              <div
                className="h-px mb-6"
                style={{ backgroundColor: tier.highlighted ? "#0891B215" : "#E5E7EB" }}
              />

              {/* Features */}
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${tier.accent}12` }}
                    >
                      <Check size={9} style={{ color: tier.accent }} />
                    </div>
                    <span className="text-sm text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center text-text-muted text-sm mt-8"
        >
          Launching 2026. All waitlist members get exclusive early access.
        </motion.p>
      </div>
    </section>
  );
}
