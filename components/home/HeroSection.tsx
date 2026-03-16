"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WaitlistForm } from "@/components/shared/WaitlistForm";
import {
  Mic,
  Sparkles,
  GitFork,
  BookOpen,
  RotateCcw,
  BarChart3,
  ChevronDown,
} from "lucide-react";

/* ── Feature carousel data ──────────────────────────────── */

const CARD_INTERVAL = 3200; // ms per card

interface FeatureCard {
  id: string;
  label: string;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

const featureCards: FeatureCard[] = [
  {
    id: "canvas",
    label: "Open Canvas",
    title: "Say what's on your mind.",
    description: "Open a blank canvas. Speak or type whatever you're thinking — no forms, no templates. Orria meets you where you are.",
    color: "#0891B2",
    icon: <Mic size={15} />,
  },
  {
    id: "structure",
    label: "AI Structures",
    title: "Clarity, instantly.",
    description: "AI organizes your thoughts into clear options with context. In seconds, scattered thinking becomes a structured decision.",
    color: "#E5A53D",
    icon: <Sparkles size={15} />,
  },
  {
    id: "depth",
    label: "Choose Your Depth",
    title: "Quick log or deep dive.",
    description: "Ready to decide? Log it. Still thinking it over? Talk it through with Orria and four AI thinking partners who see what you might not.",
    color: "#9333EA",
    icon: <GitFork size={15} />,
  },
  {
    id: "journal",
    label: "Living Journal",
    title: "Your story, written in choices.",
    description: "Every decision becomes a journal entry. The career change, the move, the relationship — your autobiography in choices.",
    color: "#C4704B",
    icon: <BookOpen size={15} />,
  },
  {
    id: "reflect",
    label: "Reflect",
    title: "Come back. Close the loop.",
    description: "Months later, ask yourself: would I do it again? Rate your confidence, record reflections, and celebrate decision milestones.",
    color: "#6366F1",
    icon: <RotateCcw size={15} />,
  },
];

/* ── Card preview illustrations ─────────────────────────── */

function VoicePreview() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 w-full max-w-[260px] shadow-sm border border-cream-300/40">
        <p className="text-[11px] text-text-secondary italic leading-relaxed mb-3">
          &ldquo;My partner wants to move cities but I just got promoted...&rdquo;
        </p>
        <div className="flex items-center gap-2">
          <div className="flex gap-[2px]">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                className="w-[3px] rounded-full bg-cyan-500"
                animate={{ height: [3, 10 + Math.random() * 8, 3] }}
                transition={{
                  duration: 0.5 + Math.random() * 0.4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.06,
                }}
              />
            ))}
          </div>
          <span className="text-[9px] text-text-muted ml-1">Listening...</span>
        </div>
      </div>
    </div>
  );
}

function StructurePreview() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2.5">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 w-full max-w-[260px] shadow-sm border border-cream-300/40">
        <p className="text-[12px] font-medium text-text-primary leading-snug mb-2.5">
          Navigate the move vs. stay decision together
        </p>
        <div className="flex gap-1.5 mb-3">
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 text-[8px] font-medium">
            Relationship
          </span>
          <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 text-[8px] font-medium">
            Life Change
          </span>
        </div>
        <div className="space-y-1.5">
          {["Stay and grow here", "Move together"].map((opt, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-cream-300/60 bg-cream-100/60"
            >
              <div className="w-3 h-3 rounded-full border-2 border-cyan-500/40" />
              <span className="text-[10px] text-text-secondary">{opt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RoundtablePreview() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <div className="w-full max-w-[260px] space-y-2">
        {[
          { initial: "M", name: "Maya", color: "#E5A53D", bgColor: "bg-amber-500/12", text: "Owning a home means roots, stability..." },
          { initial: "R", name: "Rex", color: "#64748B", bgColor: "bg-slate-500/12", text: "What if the market drops 20%?" },
          { initial: "L", name: "Liam", color: "#6366F1", bgColor: "bg-indigo-500/12", text: "The data suggests renting is 23% more cost-effective..." },
        ].map((agent, i) => (
          <motion.div
            key={agent.initial}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-2.5 flex items-start gap-2.5 shadow-sm border border-cream-300/40"
          >
            <div
              className={`w-6 h-6 rounded-full ${agent.bgColor} flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-[8px] font-bold" style={{ color: agent.color }}>
                {agent.initial}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[8px] font-semibold block mb-0.5" style={{ color: agent.color }}>
                {agent.name}
              </span>
              <p className="text-[10px] text-text-secondary leading-snug">{agent.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function DepthPreview() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2.5">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 w-full max-w-[260px] shadow-sm border border-cream-300/40">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-5 h-5 rounded-lg bg-cyan-500/12 flex items-center justify-center">
            <Sparkles size={10} className="text-cyan-500" />
          </div>
          <span className="text-[10px] font-semibold text-text-primary">AI structured your thoughts</span>
        </div>
        <p className="text-[11px] font-medium text-text-primary mb-1.5">
          Navigate the move vs. stay decision
        </p>
        <div className="flex gap-1.5 mb-3">
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 text-[8px] font-medium">
            Relationship
          </span>
          <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 text-[8px] font-medium">
            Life Change
          </span>
        </div>
        <div className="space-y-1.5">
          <motion.button
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="w-full px-3 py-2 rounded-xl bg-cyan-500 text-white text-[10px] font-semibold text-center"
          >
            Create Decision
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="w-full px-3 py-2 rounded-xl border border-cyan-500/30 text-cyan-600 text-[10px] font-medium text-center"
          >
            or talk it through with Orria
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function ReflectPreview() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2.5">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 w-full max-w-[260px] shadow-sm border border-cream-300/40">
        <div className="flex items-center gap-2 mb-2.5">
          <RotateCcw size={12} className="text-cyan-500" />
          <span className="text-[10px] font-semibold text-cyan-600">6-month check-in</span>
        </div>
        <p className="text-[11px] font-medium text-text-primary mb-2">
          Would you make the same choice again?
        </p>
        <div className="flex gap-1.5 mb-3">
          {["Absolutely", "Probably", "Not sure"].map((opt, i) => (
            <motion.div
              key={opt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.3 }}
              className={`px-2.5 py-1.5 rounded-lg text-[9px] font-medium ${
                i === 0
                  ? "bg-cyan-500 text-white"
                  : "border border-cream-300/60 text-text-secondary"
              }`}
            >
              {opt}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="bg-cream-100/80 rounded-lg p-2.5"
        >
          <p className="text-[9px] text-text-secondary italic leading-snug">
            &ldquo;Taking the new role was the best decision I made this year. The growth has been incredible.&rdquo;
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function JournalPreview() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2.5">
      <div className="w-full max-w-[260px] space-y-2">
        {[
          { title: "Took the new role", time: "3 months ago", confidence: 85, color: "#22C55E" },
          { title: "Moved to Melbourne", time: "6 months ago", confidence: 72, color: "#0891B2" },
        ].map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-cream-300/40"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-medium text-text-primary">{entry.title}</span>
              <span className="text-[8px] text-text-muted">{entry.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 rounded-full bg-cream-200 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: entry.color }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${entry.confidence}%` }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
                />
              </div>
              <span className="text-[8px] font-medium" style={{ color: entry.color }}>
                {entry.confidence}%
              </span>
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-cream-300/40"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <BarChart3 size={11} style={{ color: "#9333EA" }} />
            <span className="text-[9px] font-semibold" style={{ color: "#9333EA" }}>Your pattern</span>
          </div>
          <p className="text-[9px] text-text-secondary leading-snug">
            Career decisions 2× faster than personal ones
          </p>
        </motion.div>
      </div>
    </div>
  );
}

const cardPreviews: Record<string, () => React.JSX.Element> = {
  canvas: VoicePreview,
  structure: StructurePreview,
  depth: DepthPreview,
  journal: JournalPreview,
  reflect: ReflectPreview,
};

/* ── Feature Carousel ────────────────────────────────────── */

function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % featureCards.length);
    setProgress(0);
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + 100 / (CARD_INTERVAL / 50);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const activeCard = featureCards[activeIndex];
  const PreviewComponent = cardPreviews[activeCard.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[380px] mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main card */}
      <div
        className="rounded-[1.75rem] overflow-hidden border border-cream-300/60 bg-white"
        style={{
          boxShadow:
            "0 20px 50px rgba(45,41,38,0.07), 0 6px 20px rgba(45,41,38,0.04), 0 0 0 1px rgba(45,41,38,0.02)",
        }}
      >
        {/* Preview area */}
        <div
          className="relative overflow-hidden"
          style={{ height: 260, background: "linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard.id}
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 p-5"
            >
              <PreviewComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text area */}
        <div className="px-6 pt-5 pb-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${activeCard.color}12`, color: activeCard.color }}
                >
                  {activeCard.icon}
                </div>
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: activeCard.color }}
                >
                  {activeCard.label}
                </span>
              </div>
              <h3
                className="text-lg font-semibold text-text-primary mb-1 tracking-tight"
                style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
              >
                {activeCard.title}
              </h3>
              <p className="text-[13px] text-text-secondary leading-relaxed">
                {activeCard.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bars */}
        <div className="px-6 pb-5">
          <div className="flex items-center gap-1.5">
            {featureCards.map((card, i) => (
              <button
                key={card.id}
                onClick={() => {
                  setActiveIndex(i);
                  setProgress(0);
                }}
                className="relative flex-1 h-[3px] rounded-full overflow-hidden cursor-pointer"
                style={{
                  backgroundColor: i === activeIndex ? `${activeCard.color}20` : "#E5E7EB",
                }}
                aria-label={`Go to ${card.label}`}
              >
                {i === activeIndex && (
                  <div
                    className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-100 ease-linear"
                    style={{
                      backgroundColor: activeCard.color,
                      width: `${progress}%`,
                    }}
                  />
                )}
                {i < activeIndex && (
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: `${featureCards[i].color}50` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle glow behind card */}
      <div
        className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-30 blur-2xl transition-colors duration-700"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${activeCard.color}18 0%, transparent 65%)`,
        }}
      />
    </motion.div>
  );
}

/* ── Social Proof Counter ────────────────────────────────── */

const SUPABASE_URL = "https://nnfcodpedesktqrpqbab.supabase.co/functions/v1";

/** Deterministic avatar colors based on initials */
const AVATAR_PALETTES = [
  { bg: "#B8E8F0", text: "#0C5E72" },
  { bg: "#F5D9A8", text: "#7C3A0A" },
  { bg: "#C7C4F7", text: "#3730A3" },
  { bg: "#F5C2D0", text: "#9D174D" },
  { bg: "#BBF7D0", text: "#166534" },
  { bg: "#FDE68A", text: "#92400E" },
];

function getAvatarColor(initials: string) {
  const code = (initials.charCodeAt(0) || 0) + (initials.charCodeAt(1) || 0);
  return AVATAR_PALETTES[code % AVATAR_PALETTES.length];
}

/** Extract 2-letter initials: from name (first+last) or email local part */
function getInitials(email: string, name?: string): string {
  if (name) {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.trim().slice(0, 2).toUpperCase();
  }
  const local = email.split("@")[0].replace(/[^a-zA-Z]/g, "");
  return local.slice(0, 2).toUpperCase() || "??";
}

const FALLBACK_AVATARS = [
  { initials: "JK" },
  { initials: "AR" },
  { initials: "ML" },
  { initials: "SP" },
];

function SocialProofCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [recentAvatars, setRecentAvatars] = useState<{ initials: string }[]>(FALLBACK_AVATARS);

  useEffect(() => {
    async function fetchData() {
      // Fetch count
      try {
        const res = await fetch(`${SUPABASE_URL}/waitlist-count`);
        if (res.ok) {
          const data = await res.json();
          setCount(data.count);
        }
      } catch {
        // Silent fail
      }

      // Fetch most recent 4 signups for avatar initials
      try {
        const res = await fetch(`${SUPABASE_URL}/waitlist-recent`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.recent) && data.recent.length > 0) {
            setRecentAvatars(data.recent.slice(0, 4));
          }
        }
      } catch {
        // Keep fallback avatars
      }
    }
    fetchData();
  }, []);

  if (count === null || count <= 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8 flex items-center gap-4"
    >
      {/* Stacked avatars — most recent first */}
      <div className="flex -space-x-2.5">
        {recentAvatars.map((avatar, i) => {
          const palette = getAvatarColor(avatar.initials);
          return (
            <div
              key={`${avatar.initials}-${i}`}
              className="w-9 h-9 rounded-full flex items-center justify-center border-2 border-cream-100 text-[10px] font-bold"
              style={{ backgroundColor: palette.bg, color: palette.text, zIndex: 10 - i }}
            >
              {avatar.initials}
            </div>
          );
        })}
        {/* +more indicator */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center border-2 border-cream-100 text-[10px] font-semibold bg-cream-200 text-text-muted"
          style={{ zIndex: 6 }}
        >
          +{count > 4 ? count - 4 : ""}
        </div>
      </div>

      {/* Counter text */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <p className="text-[15px] font-medium text-text-primary">
            Join {count.toLocaleString()}+ others
          </p>
        </div>
        <p className="text-xs text-text-muted ml-4">
          on the waitlist — be first to try Orria
        </p>
      </div>
    </motion.div>
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 min-h-[90vh] pt-36 md:pt-44 pb-10 md:pb-16 items-center">
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
                Your AI thinking companion
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
              Every decision you make — taking that job, moving to that city, saying yes when you almost said no — is part of your story.
            </motion.p>

            {/* Waitlist — directly under text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md"
            >
              <WaitlistForm variant="section" showCounter={false} />
            </motion.div>

            {/* Social proof — standalone, elevated design */}
            <SocialProofCounter />
          </div>

          {/* Right: Feature carousel */}
          <div className="hidden lg:flex justify-center items-center relative">
            <FeatureCarousel />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center pb-4"
        >
          <motion.a
            href="#opportunity"
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
