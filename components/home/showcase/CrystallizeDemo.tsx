"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Sparkles, CheckCircle } from "lucide-react";

const PHASES = ["empty", "sparkle", "summary", "options", "decided"] as const;
type Phase = (typeof PHASES)[number];

const TIMINGS: Record<Phase, number> = {
  empty: 600,
  sparkle: 800,
  summary: 1000,
  options: 1500,
  decided: 3000,
};

export function CrystallizeDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [phase, setPhase] = useState<Phase>("empty");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const reset = useCallback(() => setPhase("empty"), []);

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
      timeoutRef.current = setTimeout(reset, TIMINGS.decided);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isInView, phase, reset]);

  return (
    <div ref={ref} className="w-full h-full flex flex-col" style={{ backgroundColor: "#FAF8F5" }}>
      {/* Status bar area */}
      <div className="h-12 flex-shrink-0" />

      {/* Header */}
      <div className="px-4 pb-3 flex items-center gap-2" style={{ borderBottom: "1px solid #EDE8DC" }}>
        <div className="w-5 h-5 rounded-full bg-cyan-500/15 flex items-center justify-center">
          <span className="text-cyan-600 text-[7px] font-bold">O</span>
        </div>
        <p className="text-[11px] font-medium" style={{ color: "#2D2926" }}>Orria</p>
      </div>

      <div className="flex-1 px-4 py-4 flex flex-col">
        <AnimatePresence mode="wait">
          {phase === "empty" && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: "#F5F1EA" }}>
                  <Sparkles size={14} style={{ color: "#9C948A" }} />
                </div>
                <p className="text-[9px]" style={{ color: "#9C948A" }}>Crystallizing insights...</p>
              </div>
            </motion.div>
          )}

          {phase === "sparkle" && (
            <motion.div
              key="sparkle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex items-center justify-center"
            >
              <motion.div
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Sparkles size={24} className="text-cyan-500" />
              </motion.div>
            </motion.div>
          )}

          {(phase === "summary" || phase === "options" || phase === "decided") && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col"
            >
              {/* Summary card */}
              <div className="bg-white rounded-xl p-3 border border-cyan-500/15 mb-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <Sparkles size={10} className="text-cyan-600" />
                  <p className="text-cyan-600 text-[8px] font-semibold">Here&apos;s what I&apos;m seeing</p>
                </div>
                <p className="text-[9px] leading-relaxed" style={{ color: "#2D2926" }}>
                  Choosing between two schools for your child. This is about values — structure vs. creativity, proximity vs. fit.
                </p>
              </div>

              {/* Options */}
              {(phase === "options" || phase === "decided") && (
                <div className="space-y-2 mb-3">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[8px] font-medium uppercase tracking-wider"
                    style={{ color: "#9C948A" }}
                  >
                    Your options
                  </motion.p>
                  {[
                    { num: "1", text: "Montessori school", subtext: "Creative freedom, longer commute" },
                    { num: "2", text: "Local public school", subtext: "Community, friends nearby" },
                  ].map((opt, i) => (
                    <motion.div
                      key={opt.num}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className={`flex items-start gap-2 p-2 rounded-lg ${
                        phase === "decided" && i === 0
                          ? "bg-cyan-500/8 border border-cyan-500/25"
                          : "bg-white"
                      }`}
                      style={
                        phase !== "decided" || i !== 0
                          ? { border: "1px solid #EDE8DC" }
                          : undefined
                      }
                    >
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          phase === "decided" && i === 0 ? "bg-cyan-500/25" : ""
                        }`}
                        style={
                          phase !== "decided" || i !== 0
                            ? { backgroundColor: "#F5F1EA" }
                            : undefined
                        }
                      >
                        {phase === "decided" && i === 0 ? (
                          <CheckCircle size={8} className="text-cyan-600" />
                        ) : (
                          <span className="text-[7px]" style={{ color: "#6B635A" }}>{opt.num}</span>
                        )}
                      </div>
                      <div>
                        <p className="text-[10px] font-medium" style={{ color: "#2D2926" }}>{opt.text}</p>
                        <p className="text-[8px]" style={{ color: "#9C948A" }}>{opt.subtext}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Decision button */}
              {phase === "decided" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto pb-2"
                >
                  <div className="py-2.5 rounded-xl bg-cyan-500 text-white text-center text-[10px] font-semibold flex items-center justify-center gap-1.5">
                    <CheckCircle size={10} />
                    I&apos;ve decided
                  </div>
                  <p className="text-center text-[8px] mt-1.5" style={{ color: "#9C948A" }}>Need more time?</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
