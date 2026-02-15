"use client";

import { BrowserFrame } from "./BrowserFrame";

const decisions = [
  {
    dept: "Parks & Rec",
    title: "Budget Allocation: Urban Green Spaces",
    date: "Feb 8, 2026",
    reasoning: "Evaluated community survey data, environmental impact studies, and cost-benefit analysis across 3 proposals...",
  },
  {
    dept: "Education",
    title: "School District Rezoning Plan",
    date: "Jan 22, 2026",
    reasoning: "Considered enrollment projections, commute impact, equity analysis, and parent feedback from 4 town halls...",
  },
];

export function GovernmentMockup() {
  return (
    <BrowserFrame url="springfield.gov/decisions" accent="#6366F1">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded bg-indigo-500/15 flex items-center justify-center">
          <svg className="w-3 h-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M9 8h1m4 0h1m-6 4h1m4 0h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
          </svg>
        </div>
        <span className="text-[9px] font-semibold text-text-primary">City of Springfield</span>
        <span className="text-[7px] text-text-muted">&middot; Decision Transparency Portal</span>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-3">
        <div className="h-4 px-2 bg-cream-100 rounded flex items-center">
          <span className="text-[6px] text-text-muted">Department: All &darr;</span>
        </div>
        <div className="h-4 px-2 bg-cream-100 rounded flex items-center">
          <span className="text-[6px] text-text-muted">Year: 2026 &darr;</span>
        </div>
      </div>

      {/* Decision cards */}
      {decisions.map((d) => (
        <div key={d.title} className="bg-cream-50/80 rounded-lg p-2.5 mb-2 last:mb-0 border border-cream-200/50">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[6px] px-1.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 font-semibold">{d.dept}</span>
            <span className="text-[6px] px-1.5 py-0.5 rounded-full bg-green-500/10 text-green-600 font-semibold">Public</span>
            <span className="text-[6px] text-text-muted ml-auto">{d.date}</span>
          </div>
          <p className="text-[8px] font-semibold text-text-primary mb-0.5">{d.title}</p>
          <p className="text-[6px] text-text-muted leading-relaxed line-clamp-2">{d.reasoning}</p>
          <span className="text-[6px] text-indigo-500 font-medium mt-1 inline-block">View Full Reasoning &rarr;</span>
        </div>
      ))}

      {/* Footer counter */}
      <div className="mt-2 text-center">
        <span className="text-[7px] text-text-muted">42 decisions published</span>
      </div>
    </BrowserFrame>
  );
}
