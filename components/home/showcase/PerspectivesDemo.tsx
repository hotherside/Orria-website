"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Search } from "lucide-react";

const AGENT_COLORS = {
  maya: "#E5A53D",
  liam: "#6366F1",
  sara: "#9333EA",
  rex: "#64748B",
};

const SENTIMENTS = [
  {
    option: "Accept & relocate",
    dot: "#22C55E",
    label: "72% positive",
    reasons: ["Career growth accelerator", "New city, fresh perspective"],
  },
  {
    option: "Stay & negotiate",
    dot: "#E5A53D",
    label: "Mixed views",
    reasons: ["Stability matters long-term", "Remote options expanding"],
  },
];

const AGENT_MESSAGES = [
  { agent: "maya" as const, name: "Maya", text: "This could be the leap that defines your next chapter!" },
  { agent: "rex" as const, name: "Rex", text: "What are you actually running toward \u2014 or away from?" },
  { agent: "liam" as const, name: "Liam", text: "Cost of living delta alone changes the math entirely." },
];

type Phase = "research" | "sentiments" | "roundtable";

const TIMINGS: Record<Phase, number> = {
  research: 800,
  sentiments: 2200,
  roundtable: 4000,
};

export function PerspectivesDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [phase, setPhase] = useState<Phase>("research");
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const reset = useCallback(() => {
    setPhase("research");
    setVisibleMessages(0);
    setShowTyping(false);
  }, []);

  useEffect(() => {
    if (!isInView) {
      clearTimeout(timeoutRef.current);
      reset();
      return;
    }

    if (phase === "research") {
      timeoutRef.current = setTimeout(() => setPhase("sentiments"), TIMINGS.research);
    } else if (phase === "sentiments") {
      timeoutRef.current = setTimeout(() => setPhase("roundtable"), TIMINGS.sentiments);
    } else if (phase === "roundtable") {
      if (visibleMessages < AGENT_MESSAGES.length) {
        setShowTyping(true);
        timeoutRef.current = setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages((c) => c + 1);
        }, 600);
      } else {
        timeoutRef.current = setTimeout(reset, TIMINGS.roundtable);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isInView, phase, visibleMessages, reset]);

  return (
    <div ref={ref} className="w-full h-full flex flex-col" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="h-12 flex-shrink-0" />

      {/* Header */}
      <div className="px-4 pb-3 flex items-center gap-2" style={{ borderBottom: "1px solid #E5E7EB" }}>
        <div className="w-5 h-5 rounded-full bg-indigo-500/15 flex items-center justify-center">
          <Search size={9} style={{ color: "#6366F1" }} />
        </div>
        <p className="text-[11px] font-medium" style={{ color: "#111111" }}>Analysis</p>
        <div className="ml-auto flex -space-x-1.5">
          {Object.entries(AGENT_COLORS).map(([name, color]) => (
            <div
              key={name}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: `${color}25`, border: "1.5px solid #FFFFFF" }}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 px-3 py-3 flex flex-col overflow-hidden">
        <AnimatePresence mode="wait">
          {phase === "research" && (
            <motion.div
              key="research"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
              >
                <Search size={20} style={{ color: "#6366F1" }} />
              </motion.div>
              <div className="w-full max-w-[160px] space-y-2">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="rounded-md"
                    style={{ backgroundColor: "#E5E7EB", height: 8, width: i === 3 ? "65%" : "100%" }}
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
              <p className="text-[9px]" style={{ color: "#9CA3AF" }}>Researching what people think...</p>
            </motion.div>
          )}

          {phase === "sentiments" && (
            <motion.div
              key="sentiments"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-2"
            >
              <p className="text-[8px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#9CA3AF" }}>
                What people say
              </p>
              {SENTIMENTS.map((s, i) => (
                <motion.div
                  key={s.option}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.35 }}
                  className="bg-white rounded-xl p-2.5"
                  style={{ border: "1px solid #E5E7EB" }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.dot }} />
                    <span className="text-[9px] font-medium" style={{ color: "#111111" }}>{s.option}</span>
                    <span className="ml-auto text-[8px] font-medium" style={{ color: s.dot }}>{s.label}</span>
                  </div>
                  <div className="space-y-1 pl-4">
                    {s.reasons.map((r) => (
                      <p key={r} className="text-[8px]" style={{ color: "#6B7280" }}>{r}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {phase === "roundtable" && (
            <motion.div
              key="roundtable"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-2"
            >
              <p className="text-[8px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#9CA3AF" }}>
                Roundtable
              </p>

              {AGENT_MESSAGES.slice(0, visibleMessages).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-2"
                >
                  <div
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: `${AGENT_COLORS[msg.agent]}15` }}
                  >
                    <span
                      className="text-[6px] font-bold"
                      style={{ color: AGENT_COLORS[msg.agent] }}
                    >
                      {msg.name[0]}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[8px] font-semibold mb-0.5" style={{ color: AGENT_COLORS[msg.agent] }}>
                      {msg.name}
                    </p>
                    <div
                      className="rounded-xl rounded-tl-sm px-2.5 py-1.5"
                      style={{
                        backgroundColor: `${AGENT_COLORS[msg.agent]}06`,
                        border: `1px solid ${AGENT_COLORS[msg.agent]}12`,
                      }}
                    >
                      <p className="text-[9px] leading-relaxed" style={{ color: "#111111" }}>{msg.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {showTyping && visibleMessages < AGENT_MESSAGES.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 pl-7"
                >
                  <span className="text-[8px]" style={{ color: "#9CA3AF" }}>{AGENT_MESSAGES[visibleMessages].name} is thinking</span>
                  <div className="flex gap-[2px]">
                    <div className="w-1 h-1 rounded-full typing-dot" style={{ backgroundColor: "#9CA3AF" }} />
                    <div className="w-1 h-1 rounded-full typing-dot" style={{ backgroundColor: "#9CA3AF" }} />
                    <div className="w-1 h-1 rounded-full typing-dot" style={{ backgroundColor: "#9CA3AF" }} />
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
