"use client";

import { motion } from "framer-motion";
import { Brain, Compass, Users } from "lucide-react";
import { FadeIn } from "@/components/animation/FadeIn";

const personas = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "For the Overthinker",
    question: "Stuck in analysis paralysis?",
    description: "You've been spinning on the same decision for weeks. Every angle leads to more questions. You need fresh perspectives to break free.",
    benefits: [
      "See your choice through 4 different AI lenses",
      "Set a deadline to break the loop",
      "Get nudged when you're stuck",
    ],
    outcome: "No more spinning for weeks on the same question.",
    color: "coral",
    iconBg: "bg-[#E07B5B]/10",
    iconColor: "text-[#E07B5B]",
    bgColor: "bg-[#E07B5B]/5",
    borderColor: "border-[#E07B5B]/10",
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: "For the Reflector",
    question: "Want to understand your journey?",
    description: "You know your past choices shaped who you are, but you can't quite see the patterns. You want to learn from your own story.",
    benefits: [
      "Track every decision — big and small",
      "Discover patterns over time",
      "Look back and see how far you've come",
    ],
    outcome: "Build wisdom from your own experience.",
    color: "sage",
    iconBg: "bg-[#7B9E87]/10",
    iconColor: "text-[#7B9E87]",
    bgColor: "bg-[#7B9E87]/5",
    borderColor: "border-[#7B9E87]/10",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "For the Community Seeker",
    question: "Need perspectives beyond your bubble?",
    description: "Your friends are biased. Your family has opinions. You want honest input from people who've actually been in your shoes.",
    benefits: [
      "Share when you want input (private by default)",
      "Learn from others at the same crossroads",
      "Give back by helping others decide",
    ],
    outcome: "Real help. No judgment.",
    color: "soft-purple",
    iconBg: "bg-[#9B8AA8]/10",
    iconColor: "text-[#9B8AA8]",
    bgColor: "bg-[#9B8AA8]/5",
    borderColor: "border-[#9B8AA8]/10",
  },
];

export function WhoIsItFor() {
  return (
    <section id="who" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#F5F1E8] text-[#5C554C] text-sm font-medium mb-6">
            Who is Orria for?
          </span>
          <h2
            className="text-3xl md:text-5xl text-[#3D3833] mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 500 }}
          >
            Built for the moments
            <br />
            <span className="text-[#E07B5B] italic">that matter most</span>
          </h2>
          <p className="text-lg md:text-xl text-[#5C554C] max-w-2xl mx-auto">
            Whether you&apos;re stuck, curious, or seeking perspective — Orria meets you where you are.
          </p>
        </FadeIn>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <PersonaCard key={index} persona={persona} index={index} />
          ))}
        </div>

        {/* Decision Types */}
        <FadeIn delay={0.3} className="mt-20 text-center">
          <p className="text-[#8C857A] mb-6">Perfect for decisions like:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Career transitions",
              "Financial choices",
              "Relationship milestones",
              "Life changes",
              "Education paths",
              "Health decisions",
              "Creative directions",
              "Any crossroads moment",
            ].map((type, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[#FAF8F3] rounded-full text-sm font-medium text-[#5C554C] border border-[#EDE8DC] shadow-sm hover:shadow-md hover:border-[#E07B5B]/20 transition-all duration-300"
              >
                {type}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function PersonaCard({
  persona,
  index,
}: {
  persona: typeof personas[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative p-8 rounded-3xl bg-white border ${persona.borderColor} shadow-soft hover:shadow-soft-lg transition-all duration-500`}
    >
      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-2xl ${persona.iconBg} ${persona.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        {persona.icon}
      </div>

      {/* Content */}
      <h3
        className="text-xl font-semibold text-[#3D3833] mb-2"
        style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}
      >
        {persona.title}
      </h3>
      <p className={`text-lg font-medium ${persona.iconColor} mb-4 italic`}>
        {persona.question}
      </p>
      <p className="text-[#5C554C] leading-relaxed mb-6">
        {persona.description}
      </p>

      {/* Benefits */}
      <ul className="space-y-3 mb-6">
        {persona.benefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-3 text-[#5C554C]">
            <span className={`w-1.5 h-1.5 rounded-full ${persona.iconBg.replace('/10', '')} mt-2 shrink-0`} />
            {benefit}
          </li>
        ))}
      </ul>

      {/* Outcome */}
      <div className="pt-6 border-t border-[#EDE8DC]">
        <p className="font-semibold text-[#3D3833]">{persona.outcome}</p>
      </div>
    </motion.div>
  );
}
