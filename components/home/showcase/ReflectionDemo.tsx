"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Sparkles, CheckCircle, Award } from "lucide-react";

const PHASES = ["idle", "decision", "confidence", "reflection", "milestone"] as const;
type Phase = (typeof PHASES)[number];

const TIMINGS: Record<Phase, number> = {
  idle: 500,
  decision: 1200,
  confidence: 1500,
  reflection: 1800,
  milestone: 3500,
};

const CONFIDENCE_OPTIONS = ["Absolutely", "Probably", "Not sure", "Probably not"];

export function ReflectionDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [phase, setPhase] = useState<Phase>("idle");
  const [selectedConfidence, setSelectedConfidence] = useState(-1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const reset = useCallback(() => {
    setPhase("idle");
    setSelectedConfidence(-1);
  }, []);

  useEffect(() => {
    if (!isInView) {
      clearTimeout(timeoutRef.current);
      reset();
      return;
    }

    if (phase === "confidence") {
      // Animate selection after a beat
      timeoutRef.current = setTimeout(() => {
        setSelectedConfidence(0); // Select "Absolutely"
        setTimeout(() => setPhase("reflection"), 800);
      }, 600);
      return () => clearTimeout(timeoutRef.current);
    }

    const currentIdx = PHASES.indexOf(phase);
    if (currentIdx < PHASES.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setPhase(PHASES[currentIdx + 1]);
      }, TIMINGS[phase]);
    } else {
      timeoutRef.current = setTimeout(reset, TIMINGS.milestone);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isInView, phase, reset]);

  const showDecision = phase !== "idle";
  const showConfidence = phase === "confidence" || phase === "reflection" || phase === "milestone";
  const showReflection = phase === "reflection" || phase === "milestone";
  const showMilestone = phase === "milestone";

  return (
    <div ref={ref} className="w-full h-full flex flex-col" style={{ backgroundColor: "#FAF8F5" }}>
      <div className="h-12 flex-shrink-0" />

      <div className="px-4 pb-3 flex items-center gap-2" style={{ borderBottom: "1px solid #EDE8DC" }}>
        <Sparkles size={14} className="text-cyan-600" />
        <p className="text-[11px] font-medium" style={{ color: "#2D2926" }}>Looking Back</p>
      </div>

      <div className="flex-1 px-4 py-3 flex flex-col gap-3 overflow-hidden">
        <AnimatePresence>
          {/* Decision card */}
          {showDecision && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl p-3"
              style={{ border: "1px solid #EDE8DC" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle size={12} className="text-green-500" />
                <span className="text-[7px] px-1.5 py-0.5 rounded-full" style={{ backgroundColor: "#22C55E12", color: "#22C55E" }}>
                  Resolved
                </span>
                <span className="ml-auto text-[7px]" style={{ color: "#9C948A" }}>6 months ago</span>
              </div>
              <p className="text-[11px] font-medium" style={{ color: "#2D2926", fontFamily: "var(--font-playfair), Playfair Display, serif" }}>
                Accept the remote role
              </p>
              <div className="flex gap-1.5 mt-2">
                <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-cyan-500/8 text-cyan-600">Career</span>
              </div>
            </motion.div>
          )}

          {/* Confidence scale */}
          {showConfidence && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-[9px] font-medium mb-2" style={{ color: "#6B635A" }}>
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
                      selectedConfidence === i
                        ? "bg-cyan-500 text-white"
                        : "bg-white"
                    }`}
                    style={
                      selectedConfidence !== i
                        ? { border: "1px solid #EDE8DC", color: "#6B635A" }
                        : undefined
                    }
                  >
                    {option}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Reflection text */}
          {showReflection && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl p-3"
              style={{ border: "1px solid #EDE8DC" }}
            >
              <p className="text-[8px] font-medium mb-1.5" style={{ color: "#9C948A" }}>What did this teach you?</p>
              <p className="text-[9px] leading-relaxed italic" style={{ color: "#2D2926" }}>
                &ldquo;I learned that flexibility matters more to me than I thought. The freedom reshaped how I think about work entirely.&rdquo;
              </p>
            </motion.div>
          )}

          {/* Anniversary milestone */}
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
              <p className="text-[7px] mt-0.5" style={{ color: "#9C948A" }}>
                This decision shaped your story
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
