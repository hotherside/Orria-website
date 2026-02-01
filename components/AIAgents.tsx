"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sun, BarChart3, Wrench, AlertTriangle } from "lucide-react";

const agents = [
  {
    icon: <Sun className="w-7 h-7" />,
    name: "The Optimist",
    description: "Sees the opportunities and potential. Helps you envision the best possible outcomes.",
    color: "#C4826D",
    quote: "What could go right?",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    name: "The Analyst",
    description: "Weighs the logic and data. Breaks down the decision with structured frameworks.",
    color: "#7B9E87",
    quote: "What do the facts say?",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    name: "The Pragmatist",
    description: "Considers feasibility and implementation. Focuses on what actually works.",
    color: "#9B8AA8",
    quote: "What's realistic?",
  },
  {
    icon: <AlertTriangle className="w-7 h-7" />,
    name: "The Skeptic",
    description: "Spots the risks and hidden costs. The devil's advocate you need but don't always want.",
    color: "#C4919B",
    quote: "What could go wrong?",
  },
];

export function AIAgents() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F8F4ED 0%, #EDE8DC 100%)"
      }}
    >
      {/* Floating decorative element */}
      <motion.div
        style={{ y: decorY }}
        className="absolute -left-20 top-1/4 w-72 h-96 rounded-2xl overflow-hidden shadow-2xl hidden lg:block"
      >
        <div className="w-full h-full bg-gradient-to-br from-[#9B8AA8]/40 to-[#C4919B]/40" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#8C857A] mb-6">
            AI Perspectives
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
            4 minds are better
            <br />
            <span className="italic">than one</span>
          </h2>
          <p className="text-lg md:text-xl text-[#5C554C] max-w-2xl mx-auto leading-relaxed">
            Every major decision deserves multiple perspectives. Our AI agents
            think about your choice from angles you might never consider.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white hover:shadow-xl transition-all duration-500"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: agent.color + "15", color: agent.color }}
              >
                {agent.icon}
              </div>

              {/* Content */}
              <h4
                className="text-xl text-[#3D3833] mb-2"
                style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 500 }}
              >
                {agent.name}
              </h4>
              <p className="text-[#5C554C] leading-relaxed mb-4">
                {agent.description}
              </p>
              <p
                className="text-lg italic"
                style={{
                  fontFamily: 'var(--font-playfair), Playfair Display, serif',
                  color: agent.color,
                }}
              >
                &ldquo;{agent.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-[#8C857A] mt-12 max-w-xl mx-auto"
        >
          Free users get instant AI summaries. Premium unlocks all 4 agent
          perspectives for deep analysis.
        </motion.p>
      </div>
    </section>
  );
}
