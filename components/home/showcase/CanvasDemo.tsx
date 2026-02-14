"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Mic, Sparkles } from "lucide-react";

const TYPED_TEXT = "I got a job offer in another city but I\u2019d have to leave everything behind...";
const TYPING_SPEED = 40; // ms per character
const PAUSE_AFTER_TYPING = 1200;
const PAUSE_AFTER_STRUCTURE = 2500;
const RESTART_DELAY = 1500;

export function CanvasDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [phase, setPhase] = useState<"typing" | "structuring" | "structured">("typing");
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const reset = useCallback(() => {
    setPhase("typing");
    setCharIndex(0);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!isInView || phase !== "typing") return;
    if (charIndex < TYPED_TEXT.length) {
      timeoutRef.current = setTimeout(() => setCharIndex((i) => i + 1), TYPING_SPEED);
      return () => clearTimeout(timeoutRef.current);
    }
    // Done typing, pause then structure
    timeoutRef.current = setTimeout(() => setPhase("structuring"), PAUSE_AFTER_TYPING);
    return () => clearTimeout(timeoutRef.current);
  }, [isInView, phase, charIndex]);

  // Structuring phase
  useEffect(() => {
    if (phase !== "structuring") return;
    timeoutRef.current = setTimeout(() => setPhase("structured"), 800);
    return () => clearTimeout(timeoutRef.current);
  }, [phase]);

  // Structured phase — wait then restart
  useEffect(() => {
    if (phase !== "structured") return;
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = setTimeout(reset, RESTART_DELAY);
    }, PAUSE_AFTER_STRUCTURE);
    return () => clearTimeout(timeoutRef.current);
  }, [phase, reset]);

  // Pause when out of view
  useEffect(() => {
    if (!isInView) {
      clearTimeout(timeoutRef.current);
      reset();
    }
  }, [isInView, reset]);

  return (
    <div ref={ref} className="w-full h-full bg-dark-900 flex flex-col">
      {/* Status bar area */}
      <div className="h-12 flex-shrink-0" />

      {/* Header */}
      <div className="px-4 pb-3 border-b border-white/5">
        <p className="text-white/40 text-[10px] font-medium tracking-wide uppercase">New Decision</p>
      </div>

      <div className="flex-1 flex flex-col px-4 pt-4">
        <AnimatePresence mode="wait">
          {phase === "typing" || phase === "structuring" ? (
            <motion.div
              key="canvas"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              {/* Guidance */}
              <p className="text-white/20 text-[9px] mb-3">What&apos;s on your mind?</p>

              {/* Typed text */}
              <div className="flex-1">
                <p className="text-white/90 text-[11px] leading-relaxed">
                  {TYPED_TEXT.slice(0, charIndex)}
                  {charIndex < TYPED_TEXT.length && (
                    <span className="inline-block w-[1px] h-3 bg-cyan-400 ml-[1px] animate-cursor-blink align-text-bottom" />
                  )}
                </p>
              </div>

              {/* Structure button */}
              <motion.div
                className="mt-auto pb-4"
                animate={charIndex >= TYPED_TEXT.length ? { opacity: 1 } : { opacity: 0.3 }}
              >
                <div
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-[10px] font-medium ${
                    phase === "structuring"
                      ? "bg-cyan-500 text-white"
                      : charIndex >= TYPED_TEXT.length
                      ? "bg-cyan-500/20 text-cyan-400 animate-pulse-glow"
                      : "bg-white/5 text-white/30"
                  }`}
                >
                  <Sparkles size={10} />
                  {phase === "structuring" ? "Structuring..." : "Structure with AI"}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="structured"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-1 flex flex-col gap-3"
            >
              {/* Structured result */}
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <p className="text-cyan-400 text-[8px] font-semibold uppercase tracking-wider mb-1">Decision</p>
                <p className="text-white text-[11px] font-medium">Take the job offer in the new city</p>
              </div>

              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-4 h-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 text-[7px] font-bold">1</span>
                  </div>
                  <p className="text-white/80 text-[10px]">Accept and relocate</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-white/60 text-[7px] font-bold">2</span>
                  </div>
                  <p className="text-white/80 text-[10px]">Decline and stay</p>
                </motion.div>
              </div>

              {/* Topic pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-1.5 mt-1"
              >
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 text-[8px]">Career</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 text-[8px]">Life Change</span>
              </motion.div>

              {/* CTA buttons */}
              <div className="mt-auto pb-4 space-y-1.5">
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="py-2 rounded-xl bg-cyan-500 text-white text-center text-[10px] font-medium"
                >
                  Create Decision
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75 }}
                  className="text-center text-cyan-400/60 text-[9px]"
                >
                  or talk to Orria
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom bar */}
      <div className="h-6 flex items-center justify-center border-t border-white/5">
        <div className="flex items-center gap-2">
          <Mic size={10} className="text-white/20" />
          <div className="w-20 h-1.5 rounded-full bg-white/5" />
        </div>
      </div>
    </div>
  );
}
