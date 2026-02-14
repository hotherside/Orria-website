"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { BarChart3, Sparkles, TrendingUp, Calendar, Target } from "lucide-react";

const PHASES = ["idle", "stats", "chart", "trend", "insight"] as const;
type Phase = (typeof PHASES)[number];

const TIMINGS: Record<Phase, number> = {
  idle: 300,
  stats: 900,
  chart: 1000,
  trend: 1100,
  insight: 2800,
};

const TOPICS = [
  { name: "Career", color: "#0891B2", pct: 42, count: 5 },
  { name: "Relationships", color: "#C4704B", pct: 28, count: 3 },
  { name: "Health", color: "#6366F1", pct: 18, count: 2 },
  { name: "Finance", color: "#E5A53D", pct: 12, count: 2 },
];

const MONTHLY_DATA = [
  { month: "Sep", decisions: 1 },
  { month: "Oct", decisions: 2 },
  { month: "Nov", decisions: 3 },
  { month: "Dec", decisions: 2 },
  { month: "Jan", decisions: 4 },
];

export function InsightsDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [phase, setPhase] = useState<Phase>("idle");
  const [counter, setCounter] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const reset = useCallback(() => {
    setPhase("idle");
    setCounter(0);
  }, []);

  useEffect(() => {
    if (!isInView) {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
      reset();
      return;
    }

    if (phase === "stats") {
      let count = 0;
      intervalRef.current = setInterval(() => {
        count += 1;
        setCounter(count);
        if (count >= 12) clearInterval(intervalRef.current);
      }, 50);
    }

    const currentIdx = PHASES.indexOf(phase);
    if (currentIdx < PHASES.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setPhase(PHASES[currentIdx + 1]);
      }, TIMINGS[phase]);
    } else {
      timeoutRef.current = setTimeout(reset, TIMINGS.insight);
    }

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [isInView, phase, reset]);

  const showStats = phase !== "idle";
  const showChart = phase === "chart" || phase === "trend" || phase === "insight";
  const showTrend = phase === "trend" || phase === "insight";
  const showInsight = phase === "insight";
  const maxDecisions = Math.max(...MONTHLY_DATA.map((d) => d.decisions));

  return (
    <div ref={ref} className="w-full h-full flex flex-col" style={{ backgroundColor: "#FAF8F5" }}>
      <div className="h-12 flex-shrink-0" />

      <div className="px-4 pb-3 flex items-center gap-2" style={{ borderBottom: "1px solid #EDE8DC" }}>
        <BarChart3 size={14} className="text-cyan-600" />
        <p className="text-[11px] font-medium" style={{ color: "#2D2926" }}>My Patterns</p>
      </div>

      <div className="flex-1 px-4 py-3 flex flex-col gap-2.5 overflow-hidden">
        {/* Stat cards — 4 columns */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-4 gap-1.5"
          >
            <div className="bg-white rounded-xl p-2 text-center" style={{ border: "1px solid #EDE8DC" }}>
              <p className="text-[14px] font-bold text-cyan-600 tabular-nums">{counter}</p>
              <p className="text-[6px] uppercase tracking-wider" style={{ color: "#9C948A" }}>Decisions</p>
            </div>
            <div className="bg-white rounded-xl p-2 text-center" style={{ border: "1px solid #EDE8DC" }}>
              <p className="text-[14px] font-bold" style={{ color: "#22C55E" }}>83%</p>
              <p className="text-[6px] uppercase tracking-wider" style={{ color: "#9C948A" }}>Resolved</p>
            </div>
            <div className="bg-white rounded-xl p-2 text-center" style={{ border: "1px solid #EDE8DC" }}>
              <p className="text-[14px] font-bold" style={{ color: "#E5A53D" }}>4.2d</p>
              <p className="text-[6px] uppercase tracking-wider" style={{ color: "#9C948A" }}>Avg Time</p>
            </div>
            <div className="bg-white rounded-xl p-2 text-center" style={{ border: "1px solid #EDE8DC" }}>
              <p className="text-[14px] font-bold" style={{ color: "#9333EA" }}>4.1</p>
              <p className="text-[6px] uppercase tracking-wider" style={{ color: "#9C948A" }}>Confidence</p>
            </div>
          </motion.div>
        )}

        {/* Topic breakdown */}
        {showChart && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-xl p-3"
            style={{ border: "1px solid #EDE8DC" }}
          >
            <p className="text-[8px] font-medium uppercase tracking-wider mb-2" style={{ color: "#9C948A" }}>
              Decision Topics
            </p>
            <div className="space-y-1.5">
              {TOPICS.map((topic, i) => (
                <div key={topic.name}>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-[8px] font-medium" style={{ color: "#2D2926" }}>{topic.name}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[7px]" style={{ color: "#9C948A" }}>{topic.count}</span>
                      <span className="text-[8px] tabular-nums font-medium" style={{ color: topic.color }}>{topic.pct}%</span>
                    </div>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: "#F5F1EA" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: topic.color }}
                      initial={{ width: "0%" }}
                      animate={{ width: `${topic.pct}%` }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Monthly trend mini bar chart */}
        {showTrend && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-xl p-3"
            style={{ border: "1px solid #EDE8DC" }}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-[8px] font-medium uppercase tracking-wider" style={{ color: "#9C948A" }}>
                Monthly Activity
              </p>
              <div className="flex items-center gap-1">
                <TrendingUp size={8} className="text-cyan-600" />
                <span className="text-[7px] text-cyan-600 font-medium">+100%</span>
              </div>
            </div>
            <div className="flex items-end gap-2 h-10">
              {MONTHLY_DATA.map((d, i) => (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                  <motion.div
                    className="w-full rounded-sm"
                    style={{ backgroundColor: i === MONTHLY_DATA.length - 1 ? "#0891B2" : "#0891B240" }}
                    initial={{ height: 0 }}
                    animate={{ height: `${(d.decisions / maxDecisions) * 28}px` }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                  />
                  <span className="text-[6px]" style={{ color: "#9C948A" }}>{d.month}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Pattern insight */}
        {showInsight && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-xl p-3"
            style={{ border: "1px solid #E5A53D30" }}
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <Sparkles size={10} style={{ color: "#E5A53D" }} />
              <p className="text-[8px] font-semibold" style={{ color: "#E5A53D" }}>Pattern Discovered</p>
            </div>
            <p className="text-[9px] leading-relaxed" style={{ color: "#2D2926" }}>
              You decide faster on career choices than personal ones. Average 2.1 days vs 6.8 days.
            </p>
            <div className="flex items-center gap-3 mt-1.5">
              <div className="flex items-center gap-1">
                <Target size={7} className="text-cyan-600" />
                <span className="text-[7px] text-cyan-600">Confidence rising</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={7} style={{ color: "#9333EA" }} />
                <span className="text-[7px]" style={{ color: "#9333EA" }}>5 month streak</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
