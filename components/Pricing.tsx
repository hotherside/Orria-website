"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    tagline: "Start capturing your story",
    price: "$0",
    period: "/forever",
    description: "Everything you need to begin your decision journal.",
    features: [
      "Unlimited private decisions",
      "Free AI summaries on every choice",
      "3 premium AI insights to try",
      "Full community access",
      "Deadline reminders",
      "Outcome tracking",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    tagline: "For decisions that matter most",
    price: "$9.99",
    period: "/month",
    description: "Unlimited depth for the serious decision-maker.",
    features: [
      "Everything in Free, plus:",
      "Unlimited premium AI insights",
      "All 4 AI agent perspectives",
      "Anonymous posting",
      "Priority visibility boosts",
      "Advanced pattern analytics",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 md:py-48 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#8C857A] mb-6">
            Pricing
          </p>
          <h2
            className="text-[#3D3833] mb-6"
            style={{
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Start free.
            <br />
            <span className="italic">Upgrade when you&apos;re ready.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#5C554C] max-w-2xl mx-auto leading-relaxed">
            Your story doesn&apos;t cost anything to start. Premium unlocks deeper
            insights when decisions really matter.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-[#8C857A] mt-12"
        >
          All prices in USD. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }: { plan: typeof pricingPlans[0]; index: number }) {
  const isPro = plan.popular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-2xl overflow-hidden ${isPro ? 'md:-mt-4 md:mb-4' : ''}`}
    >
      {isPro && (
        <div className="absolute top-0 left-0 right-0 bg-[#E07B5B] text-white text-center py-2.5 text-sm font-medium flex items-center justify-center gap-2">
          <Sparkles size={16} />
          Most Popular
        </div>
      )}

      <div
        className={`h-full p-8 ${
          isPro
            ? 'pt-16 bg-[#3D3833]'
            : 'bg-[#FAF8F3] border border-[#EDE8DC]'
        }`}
      >
        <div className="mb-8">
          <h3
            className={`text-2xl ${isPro ? 'text-white' : 'text-[#3D3833]'} mb-1`}
            style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 500 }}
          >
            {plan.name}
          </h3>
          <p className={`text-sm ${isPro ? 'text-white/60' : 'text-[#5C554C]'} mb-4`}>
            {plan.tagline}
          </p>
          <div className="flex items-baseline gap-1">
            <span
              className={`text-5xl ${isPro ? 'text-white' : 'text-[#3D3833]'}`}
              style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 500 }}
            >
              {plan.price}
            </span>
            <span className={`${isPro ? 'text-white/60' : 'text-[#8C857A]'} font-medium`}>
              {plan.period}
            </span>
          </div>
          {plan.note && (
            <p className="text-sm text-[#7B9E87] mt-2">{plan.note}</p>
          )}
        </div>

        <p className={`text-sm ${isPro ? 'text-white/70' : 'text-[#5C554C]'} mb-6 leading-relaxed`}>
          {plan.description}
        </p>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className={`flex items-start gap-3 ${isPro ? 'text-white/90' : 'text-[#5C554C]'}`}>
              <Check
                className={`w-5 h-5 ${isPro ? 'text-[#7B9E87]' : 'text-[#7B9E87]'} shrink-0 mt-0.5`}
              />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
            isPro
              ? 'bg-[#E07B5B] text-white hover:bg-[#D16A4A]'
              : 'bg-white text-[#3D3833] border border-[#EDE8DC] hover:border-[#E07B5B]/30 hover:shadow-md'
          }`}
        >
          {plan.cta}
        </motion.button>
      </div>
    </motion.div>
  );
}
