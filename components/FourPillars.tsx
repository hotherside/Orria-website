"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles, Timer, RefreshCw } from "lucide-react";
import { FadeIn } from "@/components/animation/FadeIn";

const pillars = [
  {
    number: "01",
    icon: <BookOpen className="w-7 h-7" />,
    title: "Capture",
    tagline: "Log the crossroads moments",
    description: "Every choice you make shapes who you become. Log your decisions — minor or critical. Create a living record of your journey.",
    color: "coral",
    iconBg: "bg-[#E07B5B]/10",
    iconColor: "text-[#E07B5B]",
    accentColor: "text-[#E07B5B]",
    bullets: [
      "Document decisions big and small",
      "Add context and options",
      "Private by default",
    ],
  },
  {
    number: "02",
    icon: <Sparkles className="w-7 h-7" />,
    title: "Clarity",
    tagline: "See what you can't see alone",
    description: "4 AI perspectives show you angles you never considered. Community wisdom from people who've been exactly where you are.",
    color: "sage",
    iconBg: "bg-[#7B9E87]/10",
    iconColor: "text-[#7B9E87]",
    accentColor: "text-[#7B9E87]",
    bullets: [
      "The Optimist sees opportunities",
      "The Analyst weighs the logic",
      "The Skeptic spots the risks",
    ],
  },
  {
    number: "03",
    icon: <Timer className="w-7 h-7" />,
    title: "Commit",
    tagline: "Break the indecision cycle",
    description: "Set a deadline. Get gentle nudges. Stop letting choices linger for weeks. Make the decision and move forward.",
    color: "terracotta",
    iconBg: "bg-[#C4826D]/10",
    iconColor: "text-[#C4826D]",
    accentColor: "text-[#C4826D]",
    bullets: [
      "Set decision deadlines",
      "Receive smart reminders",
      "End analysis paralysis",
    ],
  },
  {
    number: "04",
    icon: <RefreshCw className="w-7 h-7" />,
    title: "Close the Loop",
    tagline: "Watch your story build",
    description: "Record what happened. Rate your satisfaction. Discover patterns over time. Your decisions become your autobiography.",
    color: "dusty-rose",
    iconBg: "bg-[#C4919B]/10",
    iconColor: "text-[#C4919B]",
    accentColor: "text-[#C4919B]",
    bullets: [
      "Track outcomes and satisfaction",
      "Discover your patterns",
      "Build decision-making wisdom",
    ],
  },
];

export function FourPillars() {
  return (
    <section id="pillars" className="relative py-24 md:py-32 bg-[#F5F1E8] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-[#7B9E87]/10 text-[#7B9E87] text-sm font-medium mb-6">
            The Decision Journey
          </span>
          <h2
            className="text-3xl md:text-5xl text-[#3D3833] mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 500 }}
          >
            From crossroads to clarity
          </h2>
          <p className="text-lg md:text-xl text-[#5C554C] max-w-2xl mx-auto">
            Every decision follows the same path. Orria guides you through each step.
          </p>
        </FadeIn>

        {/* Pillars - Alternating Timeline Layout */}
        <div className="space-y-8 md:space-y-0">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} pillar={pillar} index={index} isEven={index % 2 === 0} />
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.4} className="text-center mt-16">
          <p className="text-[#8C857A] mb-4">
            Ready to start capturing your story?
          </p>
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E07B5B] text-white rounded-xl font-semibold hover:bg-[#D16A4A] hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Orria Free
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
  isEven,
}: {
  pillar: typeof pillars[0];
  index: number;
  isEven: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 py-8 md:py-12 ${
        !isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Visual side */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative">
          {/* Background shape */}
          <div className={`absolute inset-0 ${pillar.iconBg} rounded-3xl blur-2xl scale-110 opacity-50`} />

          {/* Card */}
          <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-soft max-w-md">
            {/* Number */}
            <span
              className="absolute -top-4 -left-4 text-7xl font-bold text-[#F5F1E8]"
              style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}
            >
              {pillar.number}
            </span>

            {/* Icon */}
            <div
              className={`relative w-14 h-14 rounded-xl ${pillar.iconBg} ${pillar.iconColor} flex items-center justify-center mb-6`}
            >
              {pillar.icon}
            </div>

            {/* Bullets */}
            <ul className="space-y-3 relative">
              {pillar.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-[#5C554C]">
                  <span className={`w-1.5 h-1.5 rounded-full ${pillar.iconBg.replace('/10', '')} mt-2 flex-shrink-0`} />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Content side */}
      <div className={`w-full md:w-1/2 text-center ${isEven ? "md:text-left" : "md:text-right"}`}>
        <h3
          className="text-2xl md:text-3xl text-[#3D3833] mb-2"
          style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 500 }}
        >
          {pillar.title}
        </h3>
        <p className={`text-lg font-medium ${pillar.accentColor} mb-4 italic`}>
          {pillar.tagline}
        </p>
        <p className="text-[#5C554C] leading-relaxed max-w-md mx-auto md:mx-0">
          {pillar.description}
        </p>
      </div>
    </motion.div>
  );
}
