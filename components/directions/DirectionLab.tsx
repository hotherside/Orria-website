"use client";

import { useState } from "react";
import { ArrowRight, Check, FileText, ShieldCheck, Sparkles } from "lucide-react";
import { QuietInstrumentDirection } from "@/components/directions/QuietInstrumentDirection";
import { PrivateLedgerDirection } from "@/components/directions/PrivateLedgerDirection";
import { DecisionsInLifeDirection } from "@/components/directions/DecisionsInLifeDirection";

type Direction = "audit" | "instrument" | "ledger" | "life";

const directions: Array<{
  id: Direction;
  short: string;
  label: string;
  recommended?: boolean;
}> = [
  { id: "audit", short: "Audit", label: "Candid audit" },
  {
    id: "instrument",
    short: "A",
    label: "The Quiet Instrument",
    recommended: true,
  },
  { id: "ledger", short: "B", label: "The Private Ledger" },
  { id: "life", short: "C", label: "Decisions, In Life" },
];

const auditDimensions = [
  ["Positioning", "An older ‘AI thinking companion’ story hides Orria’s adaptive decision product."],
  ["Narrative", "The site lists features, but never completes capture → read → call → record → reflection."],
  ["Architecture", "Home / About / Research / Future State feels like a pitch deck, not a consumer product."],
  ["Conversion", "Waitlist, App Store, launch, price, and proof signals are not coherent enough to trust."],
  ["Copy", "‘Crossroads,’ four personalities, and theatrical counters narrow or commoditise the product."],
  ["Visual system", "White + cyan, Inter + Playfair, and endless soft cards conflict with the native Instrument."],
  ["Responsive", "The primary product proof disappears on mobile while the page becomes a long content corridor."],
  ["Accessibility", "Contrast, 44px targets, tiny demos, modal semantics, and duplicated marquees need repair."],
  ["Motion", "Perpetual loops and slow scroll reveals feel promotional, not calm, responsive, or trustworthy."],
];

function AuditOverview({ onOpenDirection }: { onOpenDirection: () => void }) {
  return (
    <div
      className="min-h-screen bg-[#ECEAE4] px-5 py-10 text-[#1D1D21] sm:px-8 sm:py-16"
      style={{ fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif" }}
    >
      <main className="mx-auto max-w-[90rem]">
        <header className="grid gap-10 border-b border-[#1D1D21]/20 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex size-12 items-center justify-center rounded-full bg-[#1D1D21] text-white">
              <FileText className="size-5" />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#3F5BC6]">
              Orria website redesign · 18 July 2026
            </p>
          </div>
          <div>
            <h1 className="max-w-[13ch] text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              Polished surface. Outdated story.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5B5B62] sm:text-xl">
              The current site markets four AI personalities for big life crossroads. The implemented product is more useful and more ownable: one private capture, adaptive depth, a conditional read, the user’s call, and a record that learns only when the evidence earns it.
            </p>
          </div>
        </header>

        <section className="grid gap-px overflow-hidden rounded-[1.8rem] bg-[#1D1D21]/15 my-10 sm:grid-cols-2 lg:grid-cols-3">
          {auditDimensions.map(([title, copy], index) => (
            <article key={title} className="min-h-48 bg-[#F8F7F3] p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#77777E]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="size-2 rounded-full bg-[#B4574E]" aria-hidden="true" />
              </div>
              <h2 className="mt-8 text-xl font-semibold tracking-[-0.03em]">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#66666D]">{copy}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 rounded-[2rem] bg-[#1D1D21] p-7 text-white sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:p-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9EAFE9]">Strategic recommendation</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl">
              Build the Quiet Instrument.
            </h2>
          </div>
          <div>
            <p className="text-base leading-7 text-[#D5D5DA]">
              It aligns most closely with the accepted product contract and current iOS implementation. Borrow the three-scenario range from Decisions, In Life and the then/now continuity from the Private Ledger—without blending their visual systems.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-[#D5D5DA] sm:flex-row sm:flex-wrap">
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-[#9EAFE9]" /> Warm canvas + cobalt focus</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-[#9EAFE9]" /> Privacy as product value</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="size-4 text-[#9EAFE9]" /> Ring as ownable instrument</span>
            </div>
            <button
              type="button"
              onClick={onOpenDirection}
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#1D1D21] transition-transform duration-150 active:scale-[0.98]"
            >
              Open the recommended direction <ArrowRight className="size-4" />
            </button>
          </div>
        </section>

        <p className="pb-28 pt-7 text-xs leading-5 text-[#77777E]">
          Full evidence, proposed information architecture, and review criteria are documented in <strong>docs/redesign-audit-and-directions.md</strong>.
        </p>
      </main>
    </div>
  );
}

export function DirectionLab() {
  const [selected, setSelected] = useState<Direction>("audit");

  const selectDirection = (direction: Direction) => {
    setSelected(direction);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="pb-24 sm:pb-28">
      {selected === "audit" && (
        <AuditOverview onOpenDirection={() => selectDirection("instrument")} />
      )}
      {selected === "instrument" && <QuietInstrumentDirection />}
      {selected === "ledger" && <PrivateLedgerDirection />}
      {selected === "life" && <DecisionsInLifeDirection />}

      <aside
        className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-[50rem] rounded-[1.2rem] border border-black/15 bg-white/95 p-2 shadow-[0_20px_70px_rgba(0,0,0,.22)] backdrop-blur-xl sm:bottom-5"
        aria-label="Design direction comparison"
      >
        <div className="sm:hidden">
          <label htmlFor="mobile-direction-picker" className="sr-only">
            Compare audit and design directions
          </label>
          <select
            id="mobile-direction-picker"
            value={selected}
            onChange={(event) => selectDirection(event.target.value as Direction)}
            className="min-h-12 w-full rounded-xl border-0 bg-[#1D1D21] px-4 text-sm font-semibold text-white outline-none"
          >
            {directions.map((direction) => (
              <option value={direction.id} key={direction.id}>
                {direction.id === "audit" ? "Audit" : `Direction ${direction.short}`} — {direction.label}
                {direction.recommended ? " (recommended)" : ""}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden gap-1 sm:flex">
          {directions.map((direction) => {
            const active = selected === direction.id;
            return (
              <button
                type="button"
                key={direction.id}
                onClick={() => selectDirection(direction.id)}
                aria-pressed={active}
                className={`relative flex min-h-12 min-w-max flex-1 items-center justify-center gap-2 rounded-xl px-3 text-xs font-semibold transition-colors sm:px-4 ${
                  active
                    ? "bg-[#1D1D21] text-white"
                    : "text-[#55555C] hover:bg-black/[0.05]"
                }`}
              >
                <span className={`grid size-6 place-items-center rounded-full text-[0.65rem] ${active ? "bg-white/15" : "bg-black/[0.06]"}`}>
                  {direction.short}
                </span>
                <span>{direction.label}</span>
                {direction.recommended && (
                  <span className={`hidden rounded-full px-2 py-1 text-[0.58rem] uppercase tracking-[0.12em] lg:inline ${active ? "bg-[#3F5BC6] text-white" : "bg-[#E9ECFA] text-[#3F5BC6]"}`}>
                    Recommended
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
