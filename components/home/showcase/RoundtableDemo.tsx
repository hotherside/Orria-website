"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const AGENT_COLORS = {
  orria: "#0891B2",
  maya: "#E5A53D",
  liam: "#6366F1",
  sara: "#9333EA",
  rex: "#64748B",
};

const messages = [
  {
    agent: "orria" as const,
    name: "Orria",
    text: "Let\u2019s hear from everyone. Buying vs renting \u2014 what does each path look like?",
  },
  {
    agent: "maya" as const,
    name: "Maya",
    text: "Owning a home is more than finance \u2014 it\u2019s roots, stability, a place that\u2019s truly yours!",
  },
  {
    agent: "liam" as const,
    name: "Liam",
    text: "Run the numbers: mortgage vs rent, opportunity cost of the down payment, maintenance buffer.",
  },
  {
    agent: "sara" as const,
    name: "Sara",
    text: "How long are you staying? If less than 5 years, renting usually wins on flexibility alone.",
  },
  {
    agent: "rex" as const,
    name: "Rex",
    text: "What if the market drops 20%? Are you buying because you want to, or because you feel you should?",
  },
];

const MESSAGE_INTERVAL = 1200;
const TYPING_DURATION = 600;
const RESTART_DELAY = 3000;

export function RoundtableDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const [typingAgent, setTypingAgent] = useState<string>("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const reset = useCallback(() => {
    setVisibleCount(0);
    setShowTyping(false);
    setTypingAgent("");
  }, []);

  useEffect(() => {
    if (!isInView) {
      clearTimeout(timeoutRef.current);
      reset();
      return;
    }

    if (visibleCount >= messages.length) {
      timeoutRef.current = setTimeout(reset, RESTART_DELAY);
      return () => clearTimeout(timeoutRef.current);
    }

    // Show typing indicator for next message
    const nextMsg = messages[visibleCount];
    setTypingAgent(nextMsg.name);
    setShowTyping(true);

    timeoutRef.current = setTimeout(() => {
      setShowTyping(false);
      setVisibleCount((c) => c + 1);

      // Auto-scroll
      if (scrollRef.current) {
        setTimeout(() => {
          scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
        }, 50);
      }
    }, TYPING_DURATION);

    return () => clearTimeout(timeoutRef.current);
  }, [isInView, visibleCount, reset]);

  // Delay before first message
  useEffect(() => {
    if (!isInView || visibleCount > 0) return;
    const delay = setTimeout(() => {}, MESSAGE_INTERVAL);
    return () => clearTimeout(delay);
  }, [isInView, visibleCount]);

  return (
    <div ref={ref} className="w-full h-full bg-dark-900 flex flex-col">
      {/* Status bar area */}
      <div className="h-12 flex-shrink-0" />

      {/* Header */}
      <div className="px-4 pb-3 border-b border-white/5 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
          <span className="text-cyan-400 text-[7px] font-bold">O</span>
        </div>
        <p className="text-white text-[11px] font-medium">Roundtable</p>
        <div className="ml-auto flex -space-x-1.5">
          {Object.entries(AGENT_COLORS).slice(1).map(([name, color]) => (
            <div
              key={name}
              className="w-4 h-4 rounded-full border border-dark-900"
              style={{ backgroundColor: `${color}30` }}
            />
          ))}
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-hidden px-3 py-3 space-y-2.5">
        {messages.slice(0, visibleCount).map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex gap-2"
          >
            <div
              className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
              style={{ backgroundColor: `${AGENT_COLORS[msg.agent]}20` }}
            >
              <span
                className="text-[6px] font-bold"
                style={{ color: AGENT_COLORS[msg.agent] }}
              >
                {msg.name[0]}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-[8px] font-semibold mb-0.5"
                style={{ color: AGENT_COLORS[msg.agent] }}
              >
                {msg.name}
              </p>
              <div
                className="rounded-xl rounded-tl-sm px-2.5 py-1.5 border"
                style={{
                  backgroundColor: `${AGENT_COLORS[msg.agent]}08`,
                  borderColor: `${AGENT_COLORS[msg.agent]}15`,
                }}
              >
                <p className="text-white/80 text-[9px] leading-relaxed">{msg.text}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Typing indicator */}
        {showTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 pl-7"
          >
            <span className="text-white/30 text-[8px]">{typingAgent} is thinking</span>
            <div className="flex gap-[2px]">
              <div className="w-1 h-1 rounded-full bg-white/30 typing-dot" />
              <div className="w-1 h-1 rounded-full bg-white/30 typing-dot" />
              <div className="w-1 h-1 rounded-full bg-white/30 typing-dot" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Input bar */}
      <div className="h-10 px-3 pb-2 flex items-center gap-2 border-t border-white/5">
        <div className="flex-1 h-6 rounded-full bg-white/5 px-3 flex items-center">
          <span className="text-white/20 text-[9px]">Reply to roundtable...</span>
        </div>
      </div>
    </div>
  );
}
