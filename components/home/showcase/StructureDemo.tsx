"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Sparkles } from "lucide-react";

const RAW_TEXT = "My partner wants to move cities but I just started something here I really believe in...";

const PHASES = ["raw", "shimmer", "structured"] as const;
type Phase = (typeof PHASES)[number];

const TIMINGS: Record<Phase, number> = {
  raw: 1200,
  shimmer: 1400,
  structured: 4000,
};

export function StructureDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [phase, setPhase] = useState<Phase>("raw");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const reset = useCallback(() => setPhase("raw"), []);

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
      timeoutRef.current = setTimeout(reset, TIMINGS.structured);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isInView, phase, reset]);

  return (
    <div ref={ref} className="w-full h-full flex flex-col" style={{ backgroundColor: "#FAF8F5" }}>
      {/* Status bar area */}
      <div className="h-12 flex-shrink-0" />

      {/* Header */}
      <div className="px-4 pb-3" style={{ borderBottom: "1px solid #EDE8DC" }}>
        <p className="text-[10px] font-medium tracking-wide uppercase" style={{ color: "#9C948A" }}>AI Structuring</p>
      </div>

      <div className="flex-1 flex flex-col px-4 pt-4">
        <AnimatePresence mode="wait">
          {phase === "raw" && (
            <motion.div
              key="raw"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              {/* Raw input label */}
              <p className="text-[8px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#9C948A" }}>
                Your words
              </p>

              {/* Raw text bubble */}
              <div
                className="rounded-xl p-3 mb-4"
                style={{ backgroundColor: "#F5F1EA", border: "1px solid #EDE8DC" }}
              >
                <p className="text-[10px] leading-relaxed italic" style={{ color: "#6B635A" }}>
                  &ldquo;{RAW_TEXT}&rdquo;
                </p>
              </div>

              {/* Shimmer button hint */}
              <div className="mt-auto pb-4">
                <div
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl"
                  style={{ backgroundColor: "#E5A53D15", border: "1px solid #E5A53D25" }}
                >
                  <Sparkles size={10} style={{ color: "#E5A53D" }} />
                  <span className="text-[10px] font-medium" style={{ color: "#E5A53D" }}>
                    Structuring with AI...
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {phase === "shimmer" && (
            <motion.div
              key="shimmer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 180, 360], scale: [1, 1.15, 1] }}
                transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
              >
                <Sparkles size={24} style={{ color: "#E5A53D" }} />
              </motion.div>

              {/* Skeleton lines */}
              <div className="w-full max-w-[180px] space-y-2.5">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="rounded-md"
                    style={{ backgroundColor: "#EDE8DC", height: i === 1 ? 10 : 8, width: i === 3 ? "70%" : "100%" }}
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>

              <p className="text-[9px]" style={{ color: "#9C948A" }}>Finding the shape of it...</p>
            </motion.div>
          )}

          {phase === "structured" && (
            <motion.div
              key="structured"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-1 flex flex-col gap-3"
            >
              {/* Decision title */}
              <div className="bg-white rounded-xl p-3" style={{ border: "1px solid #EDE8DC" }}>
                <p className="text-amber-600 text-[8px] font-semibold uppercase tracking-wider mb-1">Decision</p>
                <p className="text-[11px] font-medium" style={{ color: "#2D2926" }}>
                  Navigate the move vs. stay decision together
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-4 h-4 rounded-full bg-amber-500/15 flex items-center justify-center">
                    <span className="text-amber-600 text-[7px] font-bold">1</span>
                  </div>
                  <p className="text-[10px]" style={{ color: "#2D2926" }}>Move together, find new balance</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F5F1EA" }}>
                    <span className="text-[7px] font-bold" style={{ color: "#6B635A" }}>2</span>
                  </div>
                  <p className="text-[10px]" style={{ color: "#2D2926" }}>Stay and explore long-distance</p>
                </motion.div>
              </div>

              {/* Topic pills */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-1.5"
              >
                <span className="px-2 py-0.5 rounded-full text-[8px]" style={{ backgroundColor: "#C4704B15", color: "#C4704B" }}>
                  Relationship
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 text-[8px]">Life Change</span>
              </motion.div>

              {/* Weight indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="flex items-center gap-2"
              >
                <p className="text-[8px]" style={{ color: "#9C948A" }}>Weight:</p>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: i <= 3 ? "#E5A53D" : "#EDE8DC" }}
                    />
                  ))}
                </div>
                <p className="text-[8px] font-medium" style={{ color: "#E5A53D" }}>Significant</p>
              </motion.div>

              {/* Check mark */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-auto pb-4"
              >
                <div className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-amber-500/10">
                  <Sparkles size={10} style={{ color: "#E5A53D" }} />
                  <span className="text-[10px] font-medium" style={{ color: "#E5A53D" }}>Structured by AI</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
