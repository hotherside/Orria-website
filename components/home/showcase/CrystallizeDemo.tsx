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
      // Loop back
      timeoutRef.current = setTimeout(reset, TIMINGS.decided);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isInView, phase, reset]);

  return (
    <div ref={ref} className="w-full h-full bg-dark-900 flex flex-col">
      {/* Status bar area */}
      <div className="h-12 flex-shrink-0" />

      {/* Header */}
      <div className="px-4 pb-3 border-b border-white/5 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
          <span className="text-cyan-400 text-[7px] font-bold">O</span>
        </div>
        <p className="text-white text-[11px] font-medium">Orria</p>
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
                <div className="w-8 h-8 rounded-full bg-white/5 mx-auto mb-2 flex items-center justify-center">
                  <Sparkles size={14} className="text-white/20" />
                </div>
                <p className="text-white/20 text-[9px]">Crystallizing insights...</p>
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
                <Sparkles size={24} className="text-cyan-400" />
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
              <div className="bg-white/5 rounded-xl p-3 border border-cyan-500/20 mb-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <Sparkles size={10} className="text-cyan-400" />
                  <p className="text-cyan-400 text-[8px] font-semibold">Here&apos;s what I&apos;m seeing</p>
                </div>
                <p className="text-white/80 text-[9px] leading-relaxed">
                  Deciding whether to take a job offer in a new city. This is about weighing growth against roots.
                </p>
              </div>

              {/* Options */}
              {(phase === "options" || phase === "decided") && (
                <div className="space-y-2 mb-3">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white/40 text-[8px] font-medium uppercase tracking-wider"
                  >
                    Your options
                  </motion.p>
                  {[
                    { num: "1", text: "Accept and relocate", subtext: "Career growth, new experiences" },
                    { num: "2", text: "Decline and stay", subtext: "Stability, existing relationships" },
                  ].map((opt, i) => (
                    <motion.div
                      key={opt.num}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className={`flex items-start gap-2 p-2 rounded-lg border ${
                        phase === "decided" && i === 0
                          ? "bg-cyan-500/10 border-cyan-500/30"
                          : "bg-white/3 border-white/5"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        phase === "decided" && i === 0 ? "bg-cyan-500/30" : "bg-white/10"
                      }`}>
                        {phase === "decided" && i === 0 ? (
                          <CheckCircle size={8} className="text-cyan-400" />
                        ) : (
                          <span className="text-white/50 text-[7px]">{opt.num}</span>
                        )}
                      </div>
                      <div>
                        <p className="text-white/90 text-[10px] font-medium">{opt.text}</p>
                        <p className="text-white/40 text-[8px]">{opt.subtext}</p>
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
                  <p className="text-center text-white/30 text-[8px] mt-1.5">Need more time?</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
