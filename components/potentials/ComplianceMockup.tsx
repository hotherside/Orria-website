"use client";

import { BrowserFrame } from "./BrowserFrame";

const auditEntries = [
  { time: "14:32", decision: "Vendor Risk Assessment", perspectives: 4, status: "Compliant" },
  { time: "11:15", decision: "Data Retention Policy Update", perspectives: 3, status: "Compliant" },
  { time: "09:48", decision: "Third-Party Access Review", perspectives: 4, status: "Pending Review" },
];

export function ComplianceMockup() {
  return (
    <BrowserFrame url="app.orria.io/compliance/audit-trail" accent="#E5A53D">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-semibold text-text-primary">Compliance Dashboard</span>
          <span className="text-[7px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 font-semibold">Audit Trail</span>
        </div>
      </div>

      <div className="flex gap-3">
        {/* Timeline */}
        <div className="flex-1 min-w-0">
          {auditEntries.map((entry, i) => (
            <div key={entry.decision} className="flex gap-2 mb-3 last:mb-0">
              {/* Timeline dot + line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: entry.status === "Compliant" ? "#10B981" : "#E5A53D" }}
                />
                {i < auditEntries.length - 1 && <div className="w-px flex-1 bg-cream-200 mt-0.5" />}
              </div>
              {/* Content */}
              <div className="flex-1 min-w-0 pb-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[6px] text-text-muted font-mono">{entry.time}</span>
                  <span className="text-[7px] text-text-primary font-medium truncate">{entry.decision}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[6px] text-text-muted">{entry.perspectives} perspectives logged</span>
                  <span
                    className="text-[5px] px-1 py-0.5 rounded-full font-semibold"
                    style={{
                      color: entry.status === "Compliant" ? "#10B981" : "#E5A53D",
                      backgroundColor: entry.status === "Compliant" ? "#10B98115" : "#E5A53D15",
                    }}
                  >
                    {entry.status} &#10003;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Side panel */}
        <div className="w-[100px] flex-shrink-0 border-l border-cream-200/60 pl-2.5">
          <span className="text-[6px] text-text-muted uppercase font-semibold tracking-wider block mb-1.5">AI Reasoning</span>
          <div className="space-y-1">
            <div className="h-1.5 bg-cream-100 rounded-full w-full" />
            <div className="h-1.5 bg-cream-100 rounded-full w-4/5" />
            <div className="h-1.5 bg-cream-100 rounded-full w-full" />
            <div className="h-1.5 bg-cream-100 rounded-full w-3/5" />
          </div>
          <div className="mt-3 h-5 bg-amber-500/10 rounded flex items-center justify-center">
            <span className="text-[6px] text-amber-600 font-semibold">Export Report</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
