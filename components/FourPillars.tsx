"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { BookOpen, Sparkles, Timer, RefreshCw } from "lucide-react";

const pillars = [
  {
    id: "capture",
    icon: <BookOpen className="w-6 h-6" />,
    title: "Capture",
    tagline: "Log the crossroads moments",
    description: "Every choice you make shapes who you become. Log your decisions — minor or critical. Create a living record of your journey.",
    color: "#E07B5B",
    lightColor: "#E07B5B20",
  },
  {
    id: "clarity",
    icon: <Sparkles className="w-6 h-6" />,
    title: "Clarity",
    tagline: "See what you can't see alone",
    description: "4 AI perspectives show you angles you never considered. Community wisdom from people who've been exactly where you are.",
    color: "#7B9E87",
    lightColor: "#7B9E8720",
  },
  {
    id: "commit",
    icon: <Timer className="w-6 h-6" />,
    title: "Commit",
    tagline: "Break the indecision cycle",
    description: "Set a deadline. Get gentle nudges. Stop letting choices linger for weeks. Make the decision and move forward.",
    color: "#C4826D",
    lightColor: "#C4826D20",
  },
  {
    id: "close",
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Close the Loop",
    tagline: "Watch your story build",
    description: "Record what happened. Rate your satisfaction. Discover patterns over time. Your decisions become your autobiography.",
    color: "#9B8AA8",
    lightColor: "#9B8AA820",
  },
];

export function FourPillars() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={sectionRef}
      id="pillars"
      className="relative py-32 md:py-48 overflow-hidden bg-[#F8F4ED]"
    >
      {/* Subtle moving background gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-50"
      >
        <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-full bg-[#E07B5B]/10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full bg-[#7B9E87]/10 blur-[120px]" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header - microsoft.ai style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2
            className="text-[#3D3833] mb-6"
            style={{
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Core products and
            <br />
            <span className="italic">experiences</span>
          </h2>
          <p className="text-lg md:text-xl text-[#5C554C] max-w-2xl mx-auto leading-relaxed">
            Every decision follows the same path. Orria guides you through each step,
            from initial crossroads to meaningful reflection.
          </p>
        </motion.div>

        {/* Tab Navigation - microsoft.ai style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-[#F0EBE1] rounded-full p-1.5">
            {pillars.map((pillar, index) => (
              <button
                key={pillar.id}
                onClick={() => setActiveIndex(index)}
                className={`relative px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                  activeIndex === index
                    ? "text-[#3D3833]"
                    : "text-[#8C857A] hover:text-[#5C554C]"
                }`}
              >
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{pillar.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="relative min-h-[400px]">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={false}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                y: activeIndex === index ? 0 : 20,
                pointerEvents: activeIndex === index ? "auto" : "none",
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className={`absolute inset-0 ${activeIndex === index ? "" : "pointer-events-none"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left - Visual placeholder */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    scale: activeIndex === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                >
                  {/* Placeholder gradient that represents the feature */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${pillar.lightColor} 0%, ${pillar.color}40 100%)`,
                    }}
                  />
                  {/* Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: pillar.color + "30" }}
                    >
                      <div style={{ color: pillar.color }} className="scale-[2]">
                        {pillar.icon}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    x: activeIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                    style={{ backgroundColor: pillar.lightColor }}
                  >
                    <span style={{ color: pillar.color }}>{pillar.icon}</span>
                    <span style={{ color: pillar.color }} className="font-medium text-sm">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3
                    className="text-[#3D3833] mb-3"
                    style={{
                      fontFamily: 'var(--font-playfair), Playfair Display, serif',
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      fontWeight: 400,
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className="text-xl mb-4 italic"
                    style={{
                      fontFamily: 'var(--font-playfair), Playfair Display, serif',
                      color: pillar.color,
                    }}
                  >
                    {pillar.tagline}
                  </p>

                  <p className="text-lg text-[#5C554C] leading-relaxed mb-8">
                    {pillar.description}
                  </p>

                  <a
                    href="#download"
                    className="inline-flex items-center gap-2 font-medium group"
                    style={{ color: pillar.color }}
                  >
                    <span className="relative">
                      Learn more
                      <span
                        className="absolute bottom-0 left-0 w-full h-px transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                        style={{ backgroundColor: pillar.color }}
                      />
                    </span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
