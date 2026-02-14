"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, viewportSettings } from "@/lib/animation-variants";

const journeyNodes = [
  {
    label: "Open Up",
    title: "Start with the mess",
    description:
      "Just speak or type. No forms, no structure — Orria meets you in the uncertainty and helps you discover what you\u2019re really deciding.",
    color: "var(--cyan-500)",
    glowClass: "bg-cyan-500/20",
  },
  {
    label: "See Clearly",
    title: "Break your echo chamber",
    description:
      "Four AI personalities surface what you can\u2019t see alone. Maya encourages, Liam analyzes, Sara grounds, Rex challenges. They react to each other like a real conversation.",
    color: "var(--agent-liam)",
    glowClass: "bg-indigo-500/20",
  },
  {
    label: "Decide",
    title: "Break the cycle",
    description:
      "Set a deadline. Make the call. Move forward. Orria helps you commit instead of letting choices linger for weeks.",
    color: "var(--terracotta-500)",
    glowClass: "bg-terracotta-500/20",
  },
  {
    label: "Remember",
    title: "Build your autobiography",
    description:
      "Every decision becomes a journal entry. Record outcomes. Reflect on what you\u2019d do differently. Your patterns emerge over time — wisdom builds from experience.",
    color: "var(--amber-500)",
    glowClass: "bg-amber-500/20",
  },
];

function JourneyNodeIllustration({ index, isInView }: { index: number; isInView: boolean }) {
  const node = journeyNodes[index];

  if (index === 0) {
    // Speech bubble expanding
    return (
      <div className="relative w-20 h-20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 rounded-2xl border-2 flex items-center justify-center"
          style={{ borderColor: node.color, backgroundColor: `${node.color}10` }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "60%" } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-1"
          >
            <div className="h-1 rounded-full" style={{ backgroundColor: `${node.color}60` }} />
            <div className="h-1 rounded-full w-3/4" style={{ backgroundColor: `${node.color}40` }} />
            <div className="h-1 rounded-full w-1/2" style={{ backgroundColor: `${node.color}30` }} />
          </motion.div>
        </motion.div>
        {/* Tail */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute -bottom-1 left-3 w-3 h-3 rotate-45"
          style={{ backgroundColor: `${node.color}10`, borderBottom: `2px solid ${node.color}`, borderRight: `2px solid ${node.color}` }}
        />
      </div>
    );
  }

  if (index === 1) {
    // Four orbiting dots
    const agentColors = ["var(--agent-maya)", "var(--agent-liam)", "var(--agent-sara)", "var(--agent-rex)"];
    return (
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Center light */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-4 h-4 rounded-full bg-white/30 shadow-[0_0_16px_rgba(255,255,255,0.3)]"
        />
        {/* Orbiting dots */}
        {agentColors.map((color, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? {
              opacity: 1,
              rotate: [0 + i * 90, 360 + i * 90],
            } : { opacity: 0 }}
            transition={{
              opacity: { delay: 0.3 + i * 0.1, duration: 0.3 },
              rotate: { duration: 8, repeat: Infinity, ease: "linear", delay: i * 0.2 },
            }}
            className="absolute"
            style={{
              width: 56,
              height: 56,
              top: "50%",
              left: "50%",
              marginTop: -28,
              marginLeft: -28,
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
              style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
            />
          </motion.div>
        ))}
      </div>
    );
  }

  if (index === 2) {
    // Forking path that converges
    return (
      <div className="relative w-20 h-20 flex items-center justify-center">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          {/* Left path (faded) */}
          <motion.path
            d="M32 4 L32 20 Q32 28 24 32 L16 36 Q12 38 12 42 L12 60"
            stroke={`${node.color}`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          {/* Right path (chosen) */}
          <motion.path
            d="M32 4 L32 20 Q32 28 40 32 L48 36 Q52 38 52 42 L52 60"
            stroke={node.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          {/* Chosen glow dot */}
          <motion.circle
            cx="52"
            cy="58"
            r="3"
            fill={node.color}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          />
        </svg>
      </div>
    );
  }

  // index === 3: Journal opening with cards floating in
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      {/* Journal shape */}
      <motion.div
        initial={{ rotateY: -90, opacity: 0 }}
        animate={isInView ? { rotateY: 0, opacity: 1 } : { rotateY: -90, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="w-14 h-16 rounded-lg border-2 relative overflow-hidden"
        style={{ borderColor: node.color, backgroundColor: `${node.color}08`, perspective: 400 }}
      >
        {/* Mini card entries */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -10, x: 20 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: -10, x: 20 }}
            transition={{ delay: 0.6 + i * 0.2, duration: 0.4 }}
            className="mx-1.5 mt-1.5 h-3 rounded-sm"
            style={{ backgroundColor: `${node.color}${30 - i * 8}` }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function JourneyNode({ node, index }: { node: typeof journeyNodes[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center"
    >
      {/* Content (alternating sides) */}
      <div className={`${index % 2 === 0 ? "md:text-right" : "md:order-3 md:text-left"}`}>
        <span
          className="text-xs font-semibold uppercase tracking-widest inline-block mb-2"
          style={{ color: node.color }}
        >
          {node.label}
        </span>
        <h3
          className="text-xl md:text-2xl text-text-primary font-semibold mb-3"
          style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
        >
          {node.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
          {node.description}
        </p>
      </div>

      {/* Center node */}
      <div className="flex flex-col items-center md:order-2">
        <div className="relative">
          <JourneyNodeIllustration index={index} isInView={isInView} />
          {/* Glow */}
          <div
            className={`absolute inset-0 -z-10 blur-2xl scale-150 opacity-40 rounded-full ${node.glowClass}`}
          />
        </div>
        {/* Connecting line (not on last) */}
        {index < journeyNodes.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-px h-16 md:h-20 origin-top"
            style={{ background: `linear-gradient(to bottom, ${node.color}40, transparent)` }}
          />
        )}
      </div>

      {/* Empty space for alternating layout */}
      <div className={`hidden md:block ${index % 2 === 0 ? "md:order-3" : "md:order-1"}`} />
    </motion.div>
  );
}

export function JourneySection() {
  return (
    <section className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-20"
        >
          <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-4">
            The Journey
          </p>
          <h2
            className="text-display text-text-primary"
            style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
          >
            From dilemma to clarity.
            <br />
            <span className="italic">From clarity to wisdom.</span>
          </h2>
        </motion.div>

        {/* Journey nodes */}
        <div className="space-y-4 md:space-y-0">
          {journeyNodes.map((node, i) => (
            <JourneyNode key={node.label} node={node} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
