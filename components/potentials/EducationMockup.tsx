"use client";

import { BrowserFrame } from "./BrowserFrame";

const students = [
  { name: "Alex", color: "#0891B2" },
  { name: "Mia", color: "#9333EA" },
  { name: "Ravi", color: "#E5A53D" },
  { name: "Zoe", color: "#C4704B" },
];

export function EducationMockup() {
  return (
    <BrowserFrame url="app.orria.io/edu/leadership-301" accent="#9333EA">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-purple-500/15 flex items-center justify-center">
            <span className="text-[7px] font-bold text-purple-600">L3</span>
          </div>
          <div>
            <span className="text-[9px] font-semibold text-text-primary block leading-tight">Leadership 301</span>
            <span className="text-[6px] text-text-muted">Prof. Chen &middot; 24 students</span>
          </div>
        </div>
      </div>

      {/* Student avatars */}
      <div className="flex items-center gap-1.5 mb-3">
        {students.map((s) => (
          <div key={s.name} className="flex flex-col items-center gap-0.5">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[6px] font-bold"
              style={{ backgroundColor: s.color }}
            >
              {s.name[0]}
            </div>
            <span className="text-[5px] text-text-muted">{s.name}</span>
          </div>
        ))}
        <div className="w-6 h-6 rounded-full bg-cream-200 flex items-center justify-center text-[6px] text-text-muted font-semibold">
          +20
        </div>
      </div>

      {/* Student decision card */}
      <div className="bg-cream-50/80 rounded-lg p-2.5 mb-3 border border-cream-200/50">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[8px] font-semibold text-text-primary">Career Path Decision</span>
          <span className="text-[6px] px-1.5 py-0.5 rounded-full bg-green-500/10 text-green-600 font-semibold">Resolved</span>
        </div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[6px] text-text-muted">3 perspectives explored</span>
          <span className="text-[6px] text-text-muted">&middot;</span>
          <span className="text-[6px] text-text-muted">Reflected on Feb 8</span>
        </div>
        {/* Confidence meter */}
        <div className="flex items-center gap-1.5">
          <span className="text-[6px] text-text-muted">Confidence</span>
          <div className="flex-1 h-1.5 bg-cream-200 rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-400" style={{ width: "82%" }} />
          </div>
          <span className="text-[6px] text-purple-500 font-semibold">82%</span>
        </div>
      </div>

      {/* Cohort Insights */}
      <div className="bg-purple-500/5 rounded-lg p-2.5 border border-purple-500/10">
        <span className="text-[7px] text-purple-600 font-semibold block mb-1.5">Cohort Insights</span>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <span className="text-[10px] font-bold text-text-primary block">8.2</span>
            <span className="text-[5px] text-text-muted">Avg decisions</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-text-primary block">Career</span>
            <span className="text-[5px] text-text-muted">Top topic</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-text-primary block">4.2</span>
            <span className="text-[5px] text-text-muted">Avg reflection</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
