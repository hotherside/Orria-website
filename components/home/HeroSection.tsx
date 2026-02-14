"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { WaitlistForm } from "@/components/shared/WaitlistForm";
import {
  Mic,
  Users,
  Sparkles,
  Globe,
  BarChart3,
  MessageCircle,
  ThumbsUp,
  ChevronDown,
} from "lucide-react";

/* ── Floating product snippet cards ──────────────────────── */

function SnippetCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`bg-white rounded-2xl shadow-soft border border-cream-300/50 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function ProductSnippets() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full max-w-[480px] mx-auto">
      {/* Voice input snippet */}
      <SnippetCard className="p-4 col-span-1" delay={0.3}>
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center">
            <Mic size={14} className="text-cyan-600" />
          </div>
          <span className="text-[10px] font-semibold text-cyan-600 uppercase tracking-wider">Voice Input</span>
        </div>
        <p className="text-[11px] text-text-secondary italic leading-relaxed">
          &ldquo;My partner wants to move cities but I just started something here...&rdquo;
        </p>
        <div className="flex items-center gap-1.5 mt-2.5">
          <div className="flex gap-[2px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-[3px] rounded-full bg-cyan-500"
                animate={{ height: [4, 8 + Math.random() * 8, 4] }}
                transition={{
                  duration: 0.6 + Math.random() * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.08,
                }}
              />
            ))}
          </div>
          <span className="text-[9px] text-text-muted">Listening...</span>
        </div>
      </SnippetCard>

      {/* Crystallize snippet */}
      <SnippetCard className="p-4 col-span-1" delay={0.45}>
        <div className="flex items-center gap-1.5 mb-2.5">
          <Sparkles size={13} style={{ color: "#E5A53D" }} />
          <span className="text-[10px] font-semibold" style={{ color: "#E5A53D" }}>Crystallized</span>
        </div>
        <p className="text-[11px] font-medium text-text-primary leading-snug">Navigate the move vs. stay dilemma together</p>
        <div className="flex gap-1.5 mt-2.5 flex-wrap">
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 text-[8px]">Relationship</span>
          <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 text-[8px]">Life Change</span>
        </div>
      </SnippetCard>

      {/* AI agent roundtable snippet — full width */}
      <SnippetCard className="p-4 col-span-2" delay={0.55}>
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center">
            <Users size={14} style={{ color: "#6366F1" }} />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#6366F1" }}>AI Roundtable</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[7px] font-bold" style={{ color: "#E5A53D" }}>M</span>
            </div>
            <p className="text-[11px] text-text-secondary leading-snug">Owning a home is roots, stability...</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-slate-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[7px] font-bold text-slate-600">R</span>
            </div>
            <p className="text-[11px] text-text-secondary leading-snug">What if the market drops 20%?</p>
          </div>
        </div>
      </SnippetCard>

      {/* Community voting snippet */}
      <SnippetCard className="p-4 col-span-1" delay={0.65}>
        <div className="flex items-center gap-2 mb-2">
          <Globe size={13} style={{ color: "#C4704B" }} />
          <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#C4704B" }}>Community</span>
        </div>
        <p className="text-[11px] font-medium text-text-primary mb-2">&ldquo;Should I accept the job abroad?&rdquo;</p>
        <div>
          <div className="flex justify-between mb-0.5">
            <span className="text-[9px] text-text-secondary">Accept</span>
            <span className="text-[9px] font-medium text-cyan-600">65%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#F5F1EA" }}>
            <motion.div
              className="h-full rounded-full bg-cyan-500"
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2.5 mt-2">
          <div className="flex items-center gap-1">
            <ThumbsUp size={9} className="text-text-muted" />
            <span className="text-[9px] text-text-muted">24</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={9} className="text-text-muted" />
            <span className="text-[9px] text-text-muted">3</span>
          </div>
        </div>
      </SnippetCard>

      {/* Insights pattern snippet */}
      <SnippetCard className="p-4 col-span-1" delay={0.75}>
        <div className="flex items-center gap-1.5 mb-2">
          <BarChart3 size={13} style={{ color: "#9333EA" }} />
          <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#9333EA" }}>Patterns</span>
        </div>
        <div className="flex gap-1.5 items-end h-10 mb-2">
          {[1, 2, 3, 2, 4].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm"
              style={{ backgroundColor: i === 4 ? "#9333EA" : "#9333EA40" }}
              initial={{ height: 0 }}
              animate={{ height: `${(h / 4) * 32}px` }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.08 }}
            />
          ))}
        </div>
        <p className="text-[10px] text-text-secondary">Career decisions 2× faster than personal</p>
      </SnippetCard>
    </div>
  );
}

/* ── Hero Section ──────────────────────────────────────── */

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative bg-cream-100 overflow-hidden"
    >
      {/* Subtle ambient gradient — very light, no ocean blue */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(8,145,178,0.05) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(229,165,61,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-20 md:pt-24 pb-6 md:pb-8 items-start">
          {/* Left: Text content */}
          <div className="pt-2">
            {/* Elevator pitch pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/8 border border-cyan-500/15 mb-5"
            >
              <Sparkles size={12} className="text-cyan-500" />
              <span className="text-xs font-medium text-cyan-600">
                Your AI decision companion
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-text-primary mb-4 leading-[0.95] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
                fontSize: "clamp(2.5rem, 5.5vw, 4rem)",
                fontWeight: 400,
              }}
            >
              <span className="italic">Think it through.</span>
              <br />
              <span className="italic">Remember what</span>
              <br />
              <span className="italic">shaped you.</span>
            </motion.h1>

            {/* One-liner elevator pitch */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base md:text-lg text-text-primary font-medium mb-3 max-w-lg"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              One app to think through life&apos;s biggest decisions — with AI, real people, and a journal that grows with you.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-sm md:text-base text-text-secondary mb-6 max-w-lg leading-relaxed"
            >
              AI perspectives that challenge your blind spots. Community feedback from people who&apos;ve been there. A journal that remembers what shaped you.
            </motion.p>

            {/* Waitlist — directly under text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md"
            >
              <WaitlistForm variant="section" />
              <p className="text-text-muted text-xs mt-2">
                Free to start. No credit card needed.
              </p>
            </motion.div>
          </div>

          {/* Right: Product snippets */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block relative pt-4"
          >
            <ProductSnippets />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center pb-4"
        >
          <motion.a
            href="#problem"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-text-muted hover:text-text-secondary transition-colors"
          >
            <ChevronDown size={18} strokeWidth={1.5} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
