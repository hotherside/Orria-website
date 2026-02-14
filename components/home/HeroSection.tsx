"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

/* ── Interactive floating snippet cards ──────────────────── */

function SnippetCard({
  children,
  className = "",
  delay = 0,
  hoverContent,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverContent?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.04,
        y: -4,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`absolute bg-white rounded-2xl shadow-soft border border-cream-300/50 cursor-default transition-shadow duration-300 ${
        isHovered ? "shadow-lg z-20" : "z-10"
      } ${className}`}
      style={style}
    >
      {children}
      {/* Hover expansion */}
      {hoverContent && (
        <motion.div
          initial={false}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden"
        >
          {hoverContent}
        </motion.div>
      )}
    </motion.div>
  );
}

function ProductSnippets() {
  return (
    <div className="relative w-full" style={{ height: "420px" }}>
      {/* Voice input — top-left, slightly rotated */}
      <SnippetCard
        className="p-5 w-[240px]"
        delay={0.3}
        style={{ top: "0%", left: "0%", transform: "rotate(-1.5deg)" }}
        hoverContent={
          <div className="px-5 pb-4 pt-1">
            <div className="h-px bg-cream-200 mb-3" />
            <p className="text-[10px] text-text-muted">Orria structures your thoughts into clear options — no forms, no templates.</p>
          </div>
        }
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
            <Mic size={16} className="text-cyan-600" />
          </div>
          <span className="text-[11px] font-semibold text-cyan-600 uppercase tracking-wider">Voice Input</span>
        </div>
        <p className="text-xs text-text-secondary italic leading-relaxed">
          &ldquo;My partner wants to move cities but I just got promoted...&rdquo;
        </p>
        <div className="flex items-center gap-1.5 mt-3">
          <div className="flex gap-[2px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-[3px] rounded-full bg-cyan-500"
                animate={{ height: [4, 10 + Math.random() * 8, 4] }}
                transition={{
                  duration: 0.6 + Math.random() * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.08,
                }}
              />
            ))}
          </div>
          <span className="text-[10px] text-text-muted">Listening...</span>
        </div>
      </SnippetCard>

      {/* Crystallize — top-right, overlaps voice slightly */}
      <SnippetCard
        className="p-5 w-[220px]"
        delay={0.45}
        style={{ top: "2%", right: "0%", transform: "rotate(2deg)" }}
        hoverContent={
          <div className="px-5 pb-4 pt-1">
            <div className="h-px bg-cream-200 mb-3" />
            <p className="text-[10px] text-text-muted">AI distills your thoughts into a clear decision with structured options.</p>
          </div>
        }
      >
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={15} style={{ color: "#E5A53D" }} />
          <span className="text-[11px] font-semibold" style={{ color: "#E5A53D" }}>Crystallized</span>
        </div>
        <p className="text-xs font-medium text-text-primary leading-snug">Navigate the move vs. stay dilemma together</p>
        <div className="flex gap-1.5 mt-3 flex-wrap">
          <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-[9px] font-medium">Relationship</span>
          <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 text-[9px] font-medium">Life Change</span>
        </div>
      </SnippetCard>

      {/* AI Roundtable — center, overlaps both above */}
      <SnippetCard
        className="p-5 w-[280px]"
        delay={0.55}
        style={{ top: "38%", left: "50%", transform: "translateX(-50%) rotate(-0.5deg)" }}
        hoverContent={
          <div className="px-5 pb-4 pt-1">
            <div className="h-px bg-cream-200 mb-3" />
            <div className="flex items-start gap-2">
              <div className="w-4 h-4 rounded-full bg-indigo-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[6px] font-bold" style={{ color: "#6366F1" }}>L</span>
              </div>
              <p className="text-[10px] text-text-secondary leading-snug italic">&ldquo;The data suggests renting is 23% more cost-effective in this market...&rdquo;</p>
            </div>
          </div>
        }
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
            <Users size={16} style={{ color: "#6366F1" }} />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#6366F1" }}>AI Roundtable</span>
        </div>
        <div className="flex gap-4">
          <div className="flex items-start gap-2 flex-1">
            <div className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[7px] font-bold" style={{ color: "#E5A53D" }}>M</span>
            </div>
            <p className="text-[11px] text-text-secondary leading-snug">Owning a home means roots, stability...</p>
          </div>
          <div className="flex items-start gap-2 flex-1">
            <div className="w-5 h-5 rounded-full bg-slate-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[7px] font-bold text-slate-600">R</span>
            </div>
            <p className="text-[11px] text-text-secondary leading-snug">What if the market drops 20%?</p>
          </div>
        </div>
      </SnippetCard>

      {/* Community — bottom-left */}
      <SnippetCard
        className="p-5 w-[230px]"
        delay={0.7}
        style={{ bottom: "0%", left: "2%", transform: "rotate(1deg)" }}
        hoverContent={
          <div className="px-5 pb-4 pt-1">
            <div className="h-px bg-cream-200 mb-3" />
            <p className="text-[10px] text-text-muted italic">&ldquo;I took the leap — best decision I ever made.&rdquo; — Anonymous</p>
          </div>
        }
      >
        <div className="flex items-center gap-2 mb-2.5">
          <Globe size={15} style={{ color: "#C4704B" }} />
          <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#C4704B" }}>Community</span>
        </div>
        <p className="text-xs font-medium text-text-primary mb-2.5">&ldquo;Should I accept the job abroad?&rdquo;</p>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-[10px] text-text-secondary">Accept</span>
            <span className="text-[10px] font-medium text-cyan-600">65%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#F5F1EA" }}>
            <motion.div
              className="h-full rounded-full bg-cyan-500"
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{ duration: 0.8, delay: 1.0 }}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 mt-2.5">
          <div className="flex items-center gap-1">
            <ThumbsUp size={10} className="text-text-muted" />
            <span className="text-[10px] text-text-muted">24</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={10} className="text-text-muted" />
            <span className="text-[10px] text-text-muted">3</span>
          </div>
        </div>
      </SnippetCard>

      {/* Insights — bottom-right, overlaps community */}
      <SnippetCard
        className="p-5 w-[210px]"
        delay={0.8}
        style={{ bottom: "2%", right: "4%", transform: "rotate(-1.5deg)" }}
        hoverContent={
          <div className="px-5 pb-4 pt-1">
            <div className="h-px bg-cream-200 mb-3" />
            <p className="text-[10px] text-text-muted">You make career decisions with 2× more confidence than personal ones.</p>
          </div>
        }
      >
        <div className="flex items-center gap-1.5 mb-2.5">
          <BarChart3 size={15} style={{ color: "#9333EA" }} />
          <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#9333EA" }}>Patterns</span>
        </div>
        <div className="flex gap-1.5 items-end h-11 mb-2.5">
          {[1, 2, 3, 2, 4].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm"
              style={{ backgroundColor: i === 4 ? "#9333EA" : "#9333EA40" }}
              initial={{ height: 0 }}
              animate={{ height: `${(h / 4) * 36}px` }}
              transition={{ duration: 0.5, delay: 1.0 + i * 0.08 }}
            />
          ))}
        </div>
        <p className="text-[10px] text-text-secondary">Career decisions 2× faster</p>
      </SnippetCard>

      {/* Ambient floating dots */}
      <motion.div
        className="absolute top-[50%] left-[40%] w-2 h-2 rounded-full bg-cyan-500/20"
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] left-[55%] w-1.5 h-1.5 rounded-full bg-amber-500/20"
        animate={{ y: [0, -8, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </div>
  );
}

/* ── Hero Section ──────────────────────────────────────── */

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-cream-100 overflow-hidden"
    >
      {/* Subtle ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(8,145,178,0.05) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(229,165,61,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Two-column layout — items-center to vertically center */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-20 md:pt-24 pb-6 md:pb-8 items-center">
          {/* Left: Text content */}
          <div>
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
              className="text-base md:text-lg text-text-primary font-medium mb-6 max-w-lg"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              One place to think through every decision that matters — with multiple AI perspectives, real human feedback, and a living journal that grows wiser with you.
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

          {/* Right: Product snippets — organic offset layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block relative"
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
