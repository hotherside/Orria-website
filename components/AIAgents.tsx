"use client";

import { motion } from "framer-motion";
import { Sun, BarChart3, Wrench, AlertTriangle } from "lucide-react";
import { FadeIn } from "@/components/animation/FadeIn";

const agents = [
  {
    icon: <Sun className="w-6 h-6" />,
    name: "The Optimist",
    description: "Sees the opportunities and potential. Helps you envision the best possible outcomes.",
    color: "text-[#C4826D]",
    bgColor: "bg-[#C4826D]/5",
    iconBg: "bg-white",
    quote: "What could go right?",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    name: "The Analyst",
    description: "Weighs the logic and data. Breaks down the decision with structured frameworks.",
    color: "text-[#7B9E87]",
    bgColor: "bg-[#7B9E87]/5",
    iconBg: "bg-white",
    quote: "What do the facts say?",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    name: "The Pragmatist",
    description: "Considers feasibility and implementation. Focuses on what actually works.",
    color: "text-[#9B8AA8]",
    bgColor: "bg-[#9B8AA8]/5",
    iconBg: "bg-white",
    quote: "What's realistic?",
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    name: "The Skeptic",
    description: "Spots the risks and hidden costs. The devil's advocate you need but don't always want.",
    color: "text-[#C4919B]",
    bgColor: "bg-[#C4919B]/5",
    iconBg: "bg-white",
    quote: "What could go wrong?",
  },
];

export function AIAgents() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF8F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <FadeIn direction="left">
            <span className="inline-block px-4 py-2 rounded-full bg-[#9B8AA8]/10 text-[#9B8AA8] text-sm font-medium mb-6">
              AI Perspectives
            </span>
            <h2
              className="text-3xl md:text-5xl text-[#3D3833] mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 500 }}
            >
              4 minds are better
              <br />
              <span className="text-[#E07B5B] italic">than one</span>
            </h2>
            <p className="text-lg md:text-xl text-[#5C554C] mb-8 leading-relaxed">
              Every major decision deserves multiple perspectives. Our AI agents think about your choice from angles you might never consider.
            </p>
            <p className="text-[#5C554C] leading-relaxed">
              Free users get instant AI summaries on every decision. Premium unlocks all 4 agent perspectives for deep analysis — the optimist, the analyst, the pragmatist, and the skeptic.
            </p>
          </FadeIn>

          {/* Agents Grid */}
          <FadeIn direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {agents.map((agent, index) => (
                <AgentCard key={index} agent={agent} index={index} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function AgentCard({
  agent,
  index,
}: {
  agent: typeof agents[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`group p-6 rounded-2xl ${agent.bgColor} border border-[#EDE8DC] hover:border-[#E07B5B]/20 hover:shadow-soft transition-all duration-300`}
    >
      <div
        className={`w-12 h-12 rounded-xl ${agent.iconBg} flex items-center justify-center ${agent.color} mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}
      >
        {agent.icon}
      </div>
      <h4
        className="text-lg font-semibold text-[#3D3833] mb-2"
        style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}
      >
        {agent.name}
      </h4>
      <p className="text-sm text-[#5C554C] mb-3 leading-relaxed">{agent.description}</p>
      <p className={`text-sm font-medium ${agent.color} italic`}>
        &ldquo;{agent.quote}&rdquo;
      </p>
    </motion.div>
  );
}
