"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Brain, Compass, Users } from "lucide-react";

const personas = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "The Overthinker",
    question: "Stuck in analysis paralysis?",
    description: "You've been spinning on the same decision for weeks. Every angle leads to more questions. You need fresh perspectives to break free.",
    color: "#E07B5B",
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: "The Reflector",
    question: "Want to understand your journey?",
    description: "You know your past choices shaped who you are, but you can't quite see the patterns. You want to learn from your own story.",
    color: "#7B9E87",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "The Community Seeker",
    question: "Need perspectives beyond your bubble?",
    description: "Your friends are biased. Your family has opinions. You want honest input from people who've actually been in your shoes.",
    color: "#9B8AA8",
  },
];

export function WhoIsItFor() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={sectionRef}
      id="who"
      className="relative py-32 md:py-48 overflow-hidden bg-white"
    >
      {/* Floating decorative image */}
      <motion.div
        style={{ y: imageY }}
        className="absolute right-0 top-20 w-64 md:w-96 aspect-[3/4] rounded-l-2xl overflow-hidden shadow-2xl hidden lg:block"
      >
        <div className="w-full h-full bg-gradient-to-br from-[#D4A574]/60 to-[#C4826D]/60" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#8C857A] mb-6">
            Who is Orria for?
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
            Built for the moments
            <br />
            <span className="italic">that matter most</span>
          </h2>
          <p className="text-lg md:text-xl text-[#5C554C] leading-relaxed">
            Whether you&apos;re stuck, curious, or seeking perspective —
            Orria meets you where you are.
          </p>
        </motion.div>

        {/* Persona Cards - Horizontal scroll on mobile, grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-[#FAF8F3] border border-[#EDE8DC] hover:shadow-xl transition-all duration-500">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: persona.color + "15", color: persona.color }}
                >
                  {persona.icon}
                </div>

                {/* Content */}
                <h3
                  className="text-2xl text-[#3D3833] mb-2"
                  style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 500 }}
                >
                  {persona.title}
                </h3>
                <p
                  className="text-lg mb-4 italic"
                  style={{ color: persona.color }}
                >
                  {persona.question}
                </p>
                <p className="text-[#5C554C] leading-relaxed">
                  {persona.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span style={{ color: persona.color }} className="font-medium">Learn more</span>
                  <span style={{ color: persona.color }} className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decision Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#8C857A] mb-8">
            Perfect for decisions like
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Career transitions",
              "Financial choices",
              "Relationship milestones",
              "Life changes",
              "Education paths",
              "Health decisions",
              "Creative directions",
            ].map((type, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                className="px-5 py-2.5 bg-[#FAF8F3] rounded-full text-sm font-medium text-[#5C554C] border border-[#EDE8DC] hover:border-[#E07B5B]/30 hover:shadow-md transition-all duration-300 cursor-default"
              >
                {type}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
