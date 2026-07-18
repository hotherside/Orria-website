"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowRight, MessageCircle, Zap } from "lucide-react";

const PHASES = ["card", "fork", "chosen"] as const;
type Phase = (typeof PHASES)[number];

const TIMINGS: Record<Phase, number> = {
  card: 1500,
  fork: 2500,
  chosen: 3000,
};

export function DepthForkDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [phase, setPhase] = useState<Phase>("card");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const reset = useCallback(() => setPhase("card"), []);

  useEffect(() => {
    if (!isInView) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(reset, 0);
      return;
    }

    const currentIdx = PHASES.indexOf(phase);
    if (currentIdx < PHASES.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setPhase(PHASES[currentIdx + 1]);
      }, TIMINGS[phase]);
    } else {
      timeoutRef.current = setTimeout(reset, TIMINGS.chosen);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isInView, phase, reset]);

  return (
    <div ref={ref} className="w-full h-full flex flex-col" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Status bar area */}
      <div className="h-12 flex-shrink-0" />

      {/* Header */}
      <div className="px-4 pb-3" style={{ borderBottom: "1px solid #E5E7EB" }}>
        <p className="text-[10px] font-medium tracking-wide uppercase" style={{ color: "#9CA3AF" }}>Choose Your Path</p>
      </div>

      <div className="flex-1 flex flex-col px-4 pt-4">
        {/* Structured decision card — always visible */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-3 mb-3"
          style={{ border: "1px solid #E5E7EB" }}
        >
          <p className="text-[8px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#9333EA" }}>Decision</p>
          <p className="text-[11px] font-medium mb-2" style={{ color: "#111111" }}>
            Navigate the move vs. stay decision
          </p>
          <div className="flex gap-1.5">
            <span className="px-2 py-0.5 rounded-full text-[7px]" style={{ backgroundColor: "#C4704B15", color: "#C4704B" }}>
              Relationship
            </span>
            <span className="px-2 py-0.5 rounded-full text-[7px]" style={{ backgroundColor: "#9333EA15", color: "#9333EA" }}>
              Life Change
            </span>
          </div>
        </motion.div>

        {/* Guiding text */}
        <AnimatePresence mode="wait">
          {phase === "card" && (
            <motion.p
              key="guide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[9px] text-center mb-3"
              style={{ color: "#9CA3AF" }}
            >
              AI has structured your thoughts. Now choose your path.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Fork buttons */}
        <div className="mt-auto pb-4 space-y-2.5">
          {/* Path 1: Quick log */}
          <motion.div
            animate={
              phase === "chosen"
                ? { scale: 0.97, opacity: 0.4 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.3 }}
          >
            <div
              className="py-3 rounded-xl flex items-center justify-center gap-2"
              style={{ backgroundColor: "#F7F7F7", border: "1px solid #E5E7EB" }}
            >
              <Zap size={12} style={{ color: "#6B7280" }} />
              <span className="text-[11px] font-medium" style={{ color: "#111111" }}>Create Decision</span>
              <ArrowRight size={10} style={{ color: "#9CA3AF" }} />
            </div>
            <p className="text-[8px] text-center mt-1" style={{ color: "#9CA3AF" }}>
              Quick log — save and move on
            </p>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px" style={{ backgroundColor: "#E5E7EB" }} />
            <span className="text-[8px]" style={{ color: "#9CA3AF" }}>or</span>
            <div className="flex-1 h-px" style={{ backgroundColor: "#E5E7EB" }} />
          </div>

          {/* Path 2: Talk to Orria */}
          <motion.div
            animate={
              phase === "chosen"
                ? { scale: 1.02, boxShadow: "0 0 0 2px #0891B240" }
                : { scale: 1, boxShadow: "0 0 0 0px transparent" }
            }
            transition={{ duration: 0.35 }}
            className="rounded-xl"
          >
            <div
              className="py-3 rounded-xl flex items-center justify-center gap-2"
              style={{ backgroundColor: "#0891B210", border: "1px solid #0891B225" }}
            >
              <MessageCircle size={12} className="text-cyan-600" />
              <span className="text-[11px] font-medium text-cyan-600">Talk it through with Orria</span>
            </div>
            <p className="text-[8px] text-center mt-1" style={{ color: "#9CA3AF" }}>
              Deep dive — conversation + roundtable
            </p>
          </motion.div>

          {/* Chosen indicator */}
          <AnimatePresence>
            {phase === "chosen" && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[9px] text-center font-medium text-cyan-600"
              >
                Starting conversation with Orria...
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
