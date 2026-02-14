"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { BookOpen, Mic } from "lucide-react";

const PHASES = ["idle", "greeting", "cards"] as const;
type Phase = (typeof PHASES)[number];

const TIMINGS: Record<Phase, number> = {
  idle: 400,
  greeting: 800,
  cards: 4000,
};

const DECISIONS = [
  {
    title: "Accept the promotion?",
    topic: "Career",
    topicColor: "#0891B2",
    status: "Resolved",
    statusColor: "#22C55E",
    weight: 4,
    accentColor: "#C4704B",
    daysAgo: "2 weeks ago",
  },
  {
    title: "Which school for Maya?",
    topic: "Parenting",
    topicColor: "#9333EA",
    status: "3 days left",
    statusColor: "#E5A53D",
    weight: 3,
    accentColor: "#E5A53D",
    daysAgo: "5 days ago",
  },
  {
    title: "Invest or save?",
    topic: "Finance",
    topicColor: "#6366F1",
    status: "Active",
    statusColor: "#0891B2",
    weight: 2,
    accentColor: "#0891B2",
    daysAgo: "Today",
  },
];

export function JournalDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [phase, setPhase] = useState<Phase>("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const reset = useCallback(() => setPhase("idle"), []);

  useEffect(() => {
    if (!isInView) {
      clearTimeout(timeoutRef.current);
      reset();
      return;
    }

    const currentIdx = PHASES.indexOf(phase);
    if (currentIdx < PHASES.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setPhase(PHASES[currentIdx + 1]);
      }, TIMINGS[phase]);
    } else {
      timeoutRef.current = setTimeout(reset, TIMINGS.cards);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isInView, phase, reset]);

  const showGreeting = phase === "greeting" || phase === "cards";
  const showCards = phase === "cards";

  return (
    <div ref={ref} className="w-full h-full flex flex-col" style={{ backgroundColor: "#FAF8F5" }}>
      <div className="h-12 flex-shrink-0" />

      {/* Header */}
      <div className="px-4 pb-3 flex items-center gap-2" style={{ borderBottom: "1px solid #EDE8DC" }}>
        <BookOpen size={14} className="text-cyan-600" />
        <p className="text-[11px] font-medium" style={{ color: "#2D2926" }}>Journal</p>
      </div>

      <div className="flex-1 px-4 py-3 flex flex-col overflow-hidden">
        {/* Greeting */}
        {showGreeting && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3"
          >
            <p className="text-[13px] font-medium" style={{ color: "#2D2926", fontFamily: "var(--font-playfair), Playfair Display, serif" }}>
              Good morning
            </p>
            <p className="text-[9px] mt-0.5" style={{ color: "#9C948A" }}>3 decisions on your mind</p>
          </motion.div>
        )}

        {/* Compact input */}
        {showGreeting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-3 flex items-center gap-2 bg-white rounded-xl px-3 py-2"
            style={{ border: "1px solid #EDE8DC" }}
          >
            <span className="text-[9px] flex-1" style={{ color: "#9C948A" }}>What&apos;s on your mind?</span>
            <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F5F1EA" }}>
              <Mic size={10} style={{ color: "#6B635A" }} />
            </div>
          </motion.div>
        )}

        {/* Decision cards */}
        {showCards && (
          <div className="space-y-2">
            {DECISIONS.map((decision, i) => (
              <motion.div
                key={decision.title}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                className="bg-white rounded-xl p-3 flex gap-2.5"
                style={{ border: "1px solid #EDE8DC" }}
              >
                {/* Weight accent bar */}
                <div
                  className="w-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: decision.accentColor }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: decision.topicColor }}
                    />
                    <span className="text-[7px] uppercase tracking-wider" style={{ color: decision.topicColor }}>
                      {decision.topic}
                    </span>
                    <span className="ml-auto text-[7px]" style={{ color: "#9C948A" }}>{decision.daysAgo}</span>
                  </div>
                  <p className="text-[10px] font-medium truncate" style={{ color: "#2D2926" }}>
                    {decision.title}
                  </p>
                  <div className="mt-1">
                    <span
                      className="text-[7px] px-1.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${decision.statusColor}12`,
                        color: decision.statusColor,
                      }}
                    >
                      {decision.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
