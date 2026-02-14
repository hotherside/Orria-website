"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Mic, Sparkles, ArrowRight, MessageCircle } from "lucide-react";

const SPOKEN_TEXT = "My partner wants to move cities but I just started something here I really believe in...";
const DICTATION_SPEED = 35;
const PAUSE_BEFORE_VOICE = 800;
const RECORDING_DURATION = 1200;
const PAUSE_AFTER_DICTATION = 1000;
const PAUSE_AFTER_STRUCTURE = 4000;
const RESTART_DELAY = 1500;

type Phase = "idle" | "recording" | "dictating" | "structuring" | "structured";

export function CanvasDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [phase, setPhase] = useState<Phase>("idle");
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const reset = useCallback(() => {
    setPhase("idle");
    setCharIndex(0);
  }, []);

  useEffect(() => {
    if (!isInView) {
      clearTimeout(timeoutRef.current);
      reset();
      return;
    }

    switch (phase) {
      case "idle":
        timeoutRef.current = setTimeout(() => setPhase("recording"), PAUSE_BEFORE_VOICE);
        break;
      case "recording":
        timeoutRef.current = setTimeout(() => setPhase("dictating"), RECORDING_DURATION);
        break;
      case "dictating":
        if (charIndex < SPOKEN_TEXT.length) {
          timeoutRef.current = setTimeout(() => setCharIndex((i) => i + 1), DICTATION_SPEED);
        } else {
          timeoutRef.current = setTimeout(() => setPhase("structuring"), PAUSE_AFTER_DICTATION);
        }
        break;
      case "structuring":
        timeoutRef.current = setTimeout(() => setPhase("structured"), 800);
        break;
      case "structured":
        timeoutRef.current = setTimeout(reset, PAUSE_AFTER_STRUCTURE + RESTART_DELAY);
        break;
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isInView, phase, charIndex, reset]);

  const isVoiceActive = phase === "recording" || phase === "dictating";

  return (
    <div ref={ref} className="w-full h-full flex flex-col" style={{ backgroundColor: "#FAF8F5" }}>
      {/* Status bar area */}
      <div className="h-12 flex-shrink-0" />

      {/* Header */}
      <div className="px-4 pb-3" style={{ borderBottom: "1px solid #EDE8DC" }}>
        <p className="text-[10px] font-medium tracking-wide uppercase" style={{ color: "#9C948A" }}>New Decision</p>
      </div>

      <div className="flex-1 flex flex-col px-4 pt-4">
        <AnimatePresence mode="wait">
          {phase !== "structured" ? (
            <motion.div
              key="canvas"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              {/* Guidance text */}
              <p className="text-[9px] mb-3" style={{ color: "#9C948A" }}>
                {isVoiceActive ? "Listening..." : "What\u2019s on your mind?"}
              </p>

              {/* Voice dictation area */}
              <div className="flex-1">
                {(phase === "dictating" || phase === "structuring") && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[11px] leading-relaxed"
                    style={{ color: "#2D2926" }}
                  >
                    {SPOKEN_TEXT.slice(0, charIndex)}
                    {phase === "dictating" && charIndex < SPOKEN_TEXT.length && (
                      <span className="inline-block w-[1px] h-3 bg-cyan-500 ml-[1px] animate-cursor-blink align-text-bottom" />
                    )}
                  </motion.p>
                )}

                {phase === "idle" && (
                  <div className="flex items-center justify-center h-full opacity-40">
                    <p className="text-[10px] text-center" style={{ color: "#9C948A" }}>
                      Tap the mic to start
                    </p>
                  </div>
                )}

                {phase === "recording" && (
                  <div className="flex items-center justify-center h-full">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      className="text-[10px]"
                      style={{ color: "#6B635A" }}
                    >
                      Speak freely...
                    </motion.p>
                  </div>
                )}
              </div>

              {/* Structure button */}
              <motion.div
                className="pb-2"
                animate={charIndex >= SPOKEN_TEXT.length && phase !== "idle" && phase !== "recording" ? { opacity: 1 } : { opacity: 0.3 }}
              >
                <div
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-[10px] font-medium ${
                    phase === "structuring"
                      ? "bg-cyan-500 text-white"
                      : charIndex >= SPOKEN_TEXT.length
                      ? "bg-cyan-500/15 text-cyan-600 animate-pulse-glow"
                      : "text-[#9C948A]"
                  }`}
                  style={
                    phase !== "structuring" && charIndex < SPOKEN_TEXT.length
                      ? { backgroundColor: "#F5F1EA" }
                      : undefined
                  }
                >
                  <Sparkles size={10} />
                  {phase === "structuring" ? "Structuring..." : "Structure with AI"}
                </div>
              </motion.div>

              {/* Mic bar */}
              <div className="pb-3 pt-1">
                <div className="flex items-center justify-center gap-2.5">
                  {/* Waveform bars — left */}
                  <div className="flex items-center gap-[2px] h-5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={`l-${i}`}
                        className="w-[3px] rounded-full bg-cyan-500"
                        animate={isVoiceActive ? {
                          height: [4, 10 + Math.random() * 8, 6, 14 + Math.random() * 4, 4],
                        } : { height: 4 }}
                        transition={isVoiceActive ? {
                          duration: 0.5 + Math.random() * 0.3,
                          repeat: Infinity,
                          repeatType: "reverse" as const,
                          delay: i * 0.1,
                        } : { duration: 0.3 }}
                        style={{ opacity: isVoiceActive ? 1 : 0.25 }}
                      />
                    ))}
                  </div>

                  {/* Mic button */}
                  <motion.div
                    className={`relative w-8 h-8 rounded-full flex items-center justify-center ${
                      isVoiceActive ? "bg-cyan-500" : ""
                    }`}
                    style={!isVoiceActive ? { backgroundColor: "#EDE8DC" } : undefined}
                    animate={isVoiceActive ? {
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(8,145,178,0.4)",
                        "0 0 0 8px rgba(8,145,178,0)",
                        "0 0 0 0 rgba(8,145,178,0.4)",
                      ],
                    } : {}}
                    transition={isVoiceActive ? {
                      duration: 1.5,
                      repeat: Infinity,
                    } : {}}
                  >
                    <Mic size={12} className={isVoiceActive ? "text-white" : "text-[#6B635A]"} />
                    {isVoiceActive && (
                      <motion.div
                        className="absolute inset-[-3px] rounded-full border-2 border-cyan-400/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                      />
                    )}
                  </motion.div>

                  {/* Waveform bars — right */}
                  <div className="flex items-center gap-[2px] h-5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={`r-${i}`}
                        className="w-[3px] rounded-full bg-cyan-500"
                        animate={isVoiceActive ? {
                          height: [4, 12 + Math.random() * 6, 5, 10 + Math.random() * 6, 4],
                        } : { height: 4 }}
                        transition={isVoiceActive ? {
                          duration: 0.6 + Math.random() * 0.2,
                          repeat: Infinity,
                          repeatType: "reverse" as const,
                          delay: i * 0.12,
                        } : { duration: 0.3 }}
                        style={{ opacity: isVoiceActive ? 1 : 0.25 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="structured"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-1 flex flex-col gap-2.5"
            >
              {/* Structured result */}
              <div className="bg-white rounded-xl p-3" style={{ border: "1px solid #EDE8DC" }}>
                <p className="text-cyan-600 text-[8px] font-semibold uppercase tracking-wider mb-1">Decision</p>
                <p className="text-[11px] font-medium" style={{ color: "#2D2926" }}>Navigate the move vs. stay dilemma together</p>
              </div>

              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-4 h-4 rounded-full bg-cyan-500/15 flex items-center justify-center">
                    <span className="text-cyan-600 text-[7px] font-bold">1</span>
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
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 text-[8px]">Relationship</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 text-[8px]">Life Change</span>
              </motion.div>

              {/* Two-pathway fork */}
              <div className="mt-auto pb-4 space-y-2">
                {/* Pathway 1: Log the decision */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="py-2.5 rounded-xl bg-cyan-500 text-white flex items-center justify-center gap-2"
                >
                  <span className="text-[10px] font-medium">Create Decision</span>
                  <ArrowRight size={10} />
                </motion.div>

                {/* Divider */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-2"
                >
                  <div className="flex-1 h-px" style={{ backgroundColor: "#EDE8DC" }} />
                  <span className="text-[8px]" style={{ color: "#9C948A" }}>or</span>
                  <div className="flex-1 h-px" style={{ backgroundColor: "#EDE8DC" }} />
                </motion.div>

                {/* Pathway 2: Talk to Orria */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="py-2.5 rounded-xl flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#0891B210", border: "1px solid #0891B220" }}
                >
                  <MessageCircle size={10} className="text-cyan-600" />
                  <span className="text-[10px] font-medium text-cyan-600">Talk it through with Orria</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
