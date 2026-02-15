"use client";

import { BrowserFrame } from "./BrowserFrame";

const rows = [
  { decision: "Q3 Hiring Plan", team: "Engineering", owner: "Sarah K.", status: "Resolved", statusColor: "#10B981" },
  { decision: "Vendor Migration", team: "Platform", owner: "Mike R.", status: "Active", statusColor: "#0891B2" },
  { decision: "Office Expansion", team: "Operations", owner: "Lisa M.", status: "Pending", statusColor: "#E5A53D" },
];

const teamBars = [
  { team: "Eng", width: "75%", color: "#0891B2" },
  { team: "Product", width: "55%", color: "#6366F1" },
  { team: "Ops", width: "35%", color: "#E5A53D" },
  { team: "Sales", width: "25%", color: "#C4704B" },
];

export function EnterpriseMockup() {
  return (
    <BrowserFrame url="app.orria.io/acme-corp/decisions" accent="#0891B2">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-cyan-500/15 flex items-center justify-center">
            <span className="text-[7px] font-bold text-cyan-600">AC</span>
          </div>
          <span className="text-[9px] font-semibold text-text-primary">Decision Log</span>
        </div>
        <div className="h-4 w-20 bg-cream-100 rounded-full flex items-center px-2">
          <span className="text-[6px] text-text-muted">Search decisions...</span>
        </div>
      </div>

      <div className="flex gap-3">
        {/* Table */}
        <div className="flex-1 min-w-0">
          {/* Column headers */}
          <div className="grid grid-cols-4 gap-1 mb-1.5 px-1">
            {["Decision", "Team", "Owner", "Status"].map((h) => (
              <span key={h} className="text-[6px] text-text-muted uppercase font-semibold tracking-wider">{h}</span>
            ))}
          </div>
          {/* Rows */}
          {rows.map((row) => (
            <div key={row.decision} className="grid grid-cols-4 gap-1 py-1.5 px-1 border-b border-cream-200/60 last:border-b-0">
              <span className="text-[7px] text-text-primary font-medium truncate">{row.decision}</span>
              <span className="text-[7px] text-text-secondary truncate">{row.team}</span>
              <span className="text-[7px] text-text-secondary truncate">{row.owner}</span>
              <span
                className="text-[6px] font-semibold px-1.5 py-0.5 rounded-full w-fit"
                style={{ color: row.statusColor, backgroundColor: `${row.statusColor}15` }}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>

        {/* Mini sidebar chart */}
        <div className="w-[80px] flex-shrink-0 border-l border-cream-200/60 pl-2.5">
          <span className="text-[6px] text-text-muted uppercase font-semibold tracking-wider block mb-2">By Team</span>
          {teamBars.map((bar) => (
            <div key={bar.team} className="mb-1.5">
              <span className="text-[6px] text-text-muted">{bar.team}</span>
              <div className="h-1.5 bg-cream-100 rounded-full overflow-hidden mt-0.5">
                <div className="h-full rounded-full" style={{ width: bar.width, backgroundColor: bar.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}
