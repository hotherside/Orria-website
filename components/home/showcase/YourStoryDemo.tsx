"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { BookOpen, CheckCircle, Award } from "lucide-react";

type Phase = "journal" | "cards" | "reflection" | "milestone";

const TIMINGS: Record<Phase, number> = {
  journal: 400,
  cards: 2000,
  reflection: 2000,
  milestone: 3000,
};

const DECISIONS = [
  {
    title: "Accept the promotion?",
    topic: "Career",
    topicColor: "#0891B2",
    status: "Resolved",
    statusColor: "#22C55E",
    accentColor: "#C4704B",
    daysAgo: "6 months ago",
  },
  {
    title: "Invest or save?",
    topic: "Finance",
    topicColor: "#6366F1",
    status: "Active",
    statusColor: "#0891B2",
    accentColor: "#0891B2",
    daysAgo: "Today",
  },
];

const CONFIDENCE_OPTIONS = ["Absolutely", "Probably", "Not sure", "No"];

export function YourStoryDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [phase, setPhase] = useState<Phase>("journal");
  const [selectedConfidence, setSelectedConfidence] = useState(-1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const reset = useCallback(() => {
    setPhase("journal");
    setSelectedConfidence(-1);
  }, []);

  useEffect(() => {
    if (!isInView) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(reset, 0);
      return;
    }

    if (phase === "reflection") {
      timeoutRef.current = setTimeout(() => {
        setSelectedConfidence(0);
        setTimeout(() => setPhase("milestone"), 800);
      }, 600);
      return () => clearTimeout(timeoutRef.current);
    }

    const phases: Phase[] = ["journal", "cards", "reflection", "milestone"];
    const currentIdx = phases.indexOf(phase);
    if (currentIdx < phases.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setPhase(phases[currentIdx + 1]);
      }, TIMINGS[phase]);
    } else {
      timeoutRef.current = setTimeout(reset, TIMINGS.milestone);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isInView, phase, reset]);

  const showCards = phase !== "journal";
  const showReflection = phase === "reflection" || phase === "milestone";
  const showMilestone = phase === "milestone";

  return (
    <div ref={ref} className="w-full h-full flex flex-col" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="h-12 flex-shrink-0" />

      {/* Header */}
      <div className="px-4 pb-3 flex items-center gap-2" style={{ borderBottom: "1px solid #E5E7EB" }}>
        <BookOpen size={14} className="text-cyan-600" />
        <p className="text-[11px] font-medium" style={{ color: "#111111" }}>Journal</p>
      </div>

      <div className="flex-1 px-4 py-3 flex flex-col gap-2 overflow-hidden">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-1"
        >
          <p className="text-[13px] font-medium" style={{ color: "#111111", fontFamily: "var(--font-playfair), Playfair Display, serif" }}>
            Good morning
          </p>
          <p className="text-[9px] mt-0.5" style={{ color: "#9CA3AF" }}>2 decisions on your mind</p>
        </motion.div>

        <AnimatePresence>
          {/* Decision cards */}
          {showCards && !showReflection && (
            <motion.div key="cards" className="space-y-2" exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
              {DECISIONS.map((decision, i) => (
                <motion.div
                  key={decision.title}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                  className="bg-white rounded-xl p-3 flex gap-2.5"
                  style={{ border: "1px solid #E5E7EB" }}
                >
                  <div className="w-1 rounded-full flex-shrink-0" style={{ backgroundColor: decision.accentColor }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: decision.topicColor }} />
                      <span className="text-[7px] uppercase tracking-wider" style={{ color: decision.topicColor }}>
                        {decision.topic}
                      </span>
                      <span className="ml-auto text-[7px]" style={{ color: "#9CA3AF" }}>{decision.daysAgo}</span>
                    </div>
                    <p className="text-[10px] font-medium truncate" style={{ color: "#111111" }}>
                      {decision.title}
                    </p>
                    <div className="mt-1">
                      <span
                        className="text-[7px] px-1.5 py-0.5 rounded-full"
                        style={{ backgroundColor: `${decision.statusColor}12`, color: decision.statusColor }}
                      >
                        {decision.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Reflection mode */}
          {showReflection && (
            <motion.div
              key="reflection"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-2.5"
            >
              {/* Resolved decision card */}
              <div className="bg-white rounded-xl p-3" style={{ border: "1px solid #E5E7EB" }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle size={12} className="text-green-500" />
                  <span className="text-[7px] px-1.5 py-0.5 rounded-full" style={{ backgroundColor: "#22C55E12", color: "#22C55E" }}>
                    Resolved
                  </span>
                  <span className="ml-auto text-[7px]" style={{ color: "#9CA3AF" }}>6 months ago</span>
                </div>
                <p className="text-[10px] font-medium" style={{ color: "#111111" }}>Accept the promotion?</p>
              </div>

              {/* Confidence rating */}
              <div>
                <p className="text-[9px] font-medium mb-2" style={{ color: "#6B7280" }}>
                  Would you make the same choice?
                </p>
                <div className="flex gap-1.5 flex-wrap">
                  {CONFIDENCE_OPTIONS.map((option, i) => (
                    <motion.div
                      key={option}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: 1,
                        scale: selectedConfidence === i ? 1.05 : 1,
                      }}
                      transition={{ delay: i * 0.08 }}
                      className={`px-2 py-1 rounded-lg text-[8px] font-medium ${
                        selectedConfidence === i ? "bg-cyan-500 text-white" : "bg-white"
                      }`}
                      style={selectedConfidence !== i ? { border: "1px solid #E5E7EB", color: "#6B7280" } : undefined}
                    >
                      {option}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Milestone */}
              {showMilestone && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl p-3 text-center"
                  style={{
                    background: "linear-gradient(135deg, #E5A53D10, #E5A53D05)",
                    border: "1px solid #E5A53D20",
                  }}
                >
                  <Award size={16} style={{ color: "#E5A53D" }} className="mx-auto mb-1.5" />
                  <p className="text-[9px] font-semibold" style={{ color: "#E5A53D" }}>6 Month Milestone</p>
                  <p className="text-[7px] mt-0.5" style={{ color: "#9CA3AF" }}>This decision shaped your story</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
