"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/animation/FadeIn";

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
    note: "Or $99.99/year (save 17%)",
  },
  {
    name: "Pay as You Go",
    tagline: "Try before you commit",
    price: "$0.99",
    period: "/each",
    description: "Buy individual premium features when you need them.",
    features: [
      "AI Insight Pack",
      "One premium analysis with all 4 agents",
      "Priority Boost Pack",
      "48-hour visibility boost",
      "No subscription required",
    ],
    cta: "Buy When Needed",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#F5F1E8] text-[#5C554C] text-sm font-medium mb-6">
            Pricing
          </span>
          <h2
            className="text-3xl md:text-5xl text-[#3D3833] mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 500 }}
          >
            Start free.
            <br />
            <span className="text-[#E07B5B] italic">Upgrade when you&apos;re ready.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#5C554C] max-w-2xl mx-auto">
            Your story doesn&apos;t cost anything to start. Premium unlocks deeper insights when decisions really matter.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        <FadeIn delay={0.4} className="text-center mt-12">
          <p className="text-[#8C857A]">
            All prices in AUD. Cancel anytime.
          </p>
        </FadeIn>
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
      className={`relative rounded-3xl overflow-hidden ${isPro ? 'md:scale-105 z-10' : ''}`}
    >
      {isPro && (
        <div className="absolute top-0 left-0 right-0 bg-[#E07B5B] text-white text-center py-2 text-sm font-semibold flex items-center justify-center gap-2">
          <Sparkles size={16} />
          Most Popular
        </div>
      )}

      <div
        className={`h-full p-8 ${
          isPro
            ? 'pt-14 bg-[#3D3833]'
            : 'bg-[#FAF8F3] border border-[#EDE8DC]'
        } shadow-soft`}
      >
        <div className="mb-8">
          <h3
            className={`text-2xl font-semibold ${isPro ? 'text-white' : 'text-[#3D3833]'} mb-1`}
            style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}
          >
            {plan.name}
          </h3>
          <p className={`text-sm ${isPro ? 'text-[#A8C4B2]' : 'text-[#5C554C]'} mb-4`}>
            {plan.tagline}
          </p>
          <div className="flex items-baseline gap-1">
            <span
              className={`text-5xl font-bold ${isPro ? 'text-white' : 'text-[#3D3833]'}`}
              style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}
            >
              {plan.price}
            </span>
            <span className={`${isPro ? 'text-[#A8C4B2]' : 'text-[#8C857A]'} font-medium`}>
              {plan.period}
            </span>
          </div>
          {plan.note && (
            <p className="text-sm text-[#7B9E87] mt-2">{plan.note}</p>
          )}
        </div>

        <p className={`text-sm ${isPro ? 'text-gray-300' : 'text-[#5C554C]'} mb-6`}>
          {plan.description}
        </p>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className={`flex items-start gap-3 ${isPro ? 'text-white' : 'text-[#5C554C]'}`}>
              <Check
                className={`w-5 h-5 ${isPro ? 'text-[#7B9E87]' : 'text-[#7B9E87]'} shrink-0 mt-0.5`}
              />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 ${
            isPro
              ? 'bg-[#E07B5B] text-white hover:bg-[#D16A4A] shadow-md hover:shadow-lg'
              : 'bg-white text-[#3D3833] border border-[#EDE8DC] hover:border-[#E07B5B]/30 shadow-sm hover:shadow-md'
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </motion.div>
  );
}
