"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleDot,
  Clock3,
  LockKeyhole,
  Mic,
  Plus,
  Quote,
  Search,
  ShieldCheck,
  Stamp,
} from "lucide-react";

const ledgerSerifStyle = {
  fontFamily: "var(--font-instrument-serif), Georgia, serif",
};

const CobaltRule = ({ sealed = false }: { sealed?: boolean }) => (
  <div aria-hidden="true" className="flex items-center gap-0">
    <span className="h-px flex-1 bg-[#334FAD]" />
    {sealed && (
      <span className="grid size-7 place-items-center rounded-full border border-[#334FAD] bg-[#334FAD] text-[#FFFCF7]">
        <Check size={14} strokeWidth={2.5} />
      </span>
    )}
  </div>
);

const LedgerRing = ({ sealed = false, className = "" }: { sealed?: boolean; className?: string }) => (
  <svg
    viewBox="0 0 120 100"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="60" cy="50" r="36" opacity=".2" />
    <circle cx="60" cy="50" r="28" opacity=".55" />
    {sealed ? (
      <path d="m46 50 9 9 19-20" />
    ) : (
      <>
        <path d="M39 50h42" />
        <circle cx="60" cy="50" r="3.5" fill="currentColor" stroke="none" />
      </>
    )}
  </svg>
);

const Margin = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#66625C]">
    {children}
  </p>
);

const LedgerMark = ({ number }: { number: string }) => (
  <div className="flex items-center gap-2">
    <span className="grid size-8 place-items-center rounded-full border border-[#25231F]/30 text-[10px] font-semibold">
      {number}
    </span>
    <span className="h-px w-9 bg-[#25231F]/25" />
  </div>
);

function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="grid gap-5 border-t border-[#25231F]/20 pt-5 md:grid-cols-[112px_minmax(0,1fr)] md:gap-10">
      <div className="flex items-start justify-between md:block">
        <LedgerMark number={number} />
        <Margin>{label}</Margin>
      </div>
      <div>
        <h2 className="max-w-3xl text-3xl font-medium leading-[1.04] tracking-[-0.04em] text-[#25231F] sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

/**
 * Design exploration: editorial, calm, private. Intended for the comparison
 * page rather than the production marketing shell.
 */
export function PrivateLedgerDirection() {
  const [capture, setCapture] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sealed, setSealed] = useState(false);

  function handleCapture(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (capture.trim()) setSubmitted(true);
  }

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(37,35,31,.026) 1px, transparent 1px), linear-gradient(90deg, rgba(37,35,31,.018) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
      }}
      className="min-h-screen overflow-hidden bg-[#F6F2E9] text-[#25231F] selection:bg-[#334FAD] selection:text-white"
    >
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="group flex min-h-11 items-center gap-3 rounded-sm text-[#25231F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#334FAD]" aria-label="Orria home">
          <LedgerRing className="h-9 w-10 text-[#334FAD]" />
          <span className="text-lg font-semibold tracking-[-0.05em]">orria</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm text-[#66625C] md:flex">
          <a className="min-h-11 content-center rounded-sm px-1 hover:text-[#25231F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#334FAD]" href="#method">The method</a>
          <a className="min-h-11 content-center rounded-sm px-1 hover:text-[#25231F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#334FAD]" href="#record">The record</a>
          <a className="min-h-11 content-center rounded-sm px-1 hover:text-[#25231F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#334FAD]" href="#privacy">Privacy</a>
        </nav>
        <a href="#begin" className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#25231F] px-4 text-sm font-medium text-[#FFFCF7] transition-colors hover:bg-[#334FAD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#334FAD]">
          Begin a decision <ArrowUpRight size={15} />
        </a>
      </header>

      <main id="top">
        <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-9 sm:px-8 lg:px-12 lg:pb-28 lg:pt-18">
          <div className="grid items-start gap-10 lg:grid-cols-[112px_minmax(0,1fr)_minmax(350px,.72fr)] lg:gap-10">
            <aside className="hidden pt-3 lg:block">
              <Margin>Record / 01</Margin>
              <p className="mt-4 max-w-20 text-xs leading-relaxed text-[#66625C]">A private companion for choices of every size.</p>
            </aside>

            <div>
              <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-[#334FAD]">
                <span className="size-2 rounded-full border border-[#334FAD]" />
                A decision record, made private
              </p>
              <h1 className="max-w-4xl text-[clamp(3.25rem,7.6vw,7.3rem)] font-medium leading-[.88] tracking-[-0.075em] text-[#25231F]">
                See the sides.<br />
                <span className="text-[#334FAD] italic font-normal tracking-[-0.07em]" style={ledgerSerifStyle}>Make your call.</span>
                <br />Learn from what follows.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#5E5A54] sm:text-xl">
                Orria is a private decision companion—for the lunch you cannot pick, the product facts you need to verify, and the choices that deserve a more considered record.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#begin" className="inline-flex min-h-12 items-center gap-3 rounded-sm bg-[#334FAD] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#253d8d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#334FAD]">
                  Bring a choice <ArrowRight size={16} />
                </a>
                <a href="#method" className="inline-flex min-h-12 items-center gap-2 rounded-sm border border-[#25231F]/30 px-5 text-sm font-medium transition-colors hover:border-[#25231F] hover:bg-[#FFFCF7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#334FAD]">
                  Read the method <ChevronRight size={16} />
                </a>
              </div>
            </div>

            <div className="relative pt-1">
              <div className="relative border border-[#25231F]/20 bg-[#FFFCF7] p-5 shadow-[9px_9px_0_rgba(37,35,31,.08)] sm:p-6">
                <div className="mb-6 flex items-start justify-between gap-4 border-b border-[#25231F]/15 pb-4">
                  <div>
                    <Margin>Open entry</Margin>
                    <p className="mt-1 text-xs text-[#66625C]">18 JUL 2026 · 08:42</p>
                  </div>
                  <CircleDot size={18} className="text-[#334FAD]" aria-label="Private" />
                </div>
                <p className="text-2xl leading-[1.15] tracking-[-0.03em] text-[#25231F] sm:text-3xl" style={ledgerSerifStyle}>“Should I take the role in Melbourne, or stay where I can keep building this team?”</p>
                <div className="mt-7 grid grid-cols-[1fr_auto] items-end gap-3">
                  <div>
                    <Margin>Orria’s read</Margin>
                    <p className="mt-2 text-sm leading-relaxed text-[#5E5A54]">A deeper look is earned here: two real finalists, mixed constraints, a horizon worth naming.</p>
                  </div>
                  <span className="grid size-11 place-items-center rounded-full border border-[#334FAD] text-[#334FAD]" aria-hidden="true"><ArrowRight size={18} /></span>
                </div>
                <div className="mt-7"><CobaltRule /></div>
              </div>
              <p className="mt-4 pl-1 font-mono text-[10px] uppercase tracking-[0.13em] text-[#66625C]">Not a chat. A record you can return to.</p>
            </div>
          </div>
        </section>

        <section id="begin" className="border-y border-[#25231F]/20 bg-[#FFFCF7]">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[112px_1fr] lg:gap-10 lg:px-12 lg:py-16">
            <div className="flex justify-between lg:block">
              <LedgerMark number="01" />
              <Margin>Capture</Margin>
            </div>
            <div className="max-w-4xl">
              <div className="flex items-end justify-between gap-5">
                <h2 className="text-3xl font-medium tracking-[-0.045em] sm:text-4xl">Start with what is actually on your mind.</h2>
                <Mic className="mb-1 hidden text-[#334FAD] sm:block" size={22} />
              </div>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#5E5A54]">No mode picker. Type or speak it as it arrives. Orria asks only for context that changes the answer.</p>
              <form onSubmit={handleCapture} className="mt-7 border border-[#25231F]/25 bg-[#F6F2E9] p-3 sm:p-4">
                <label htmlFor="ledger-capture" className="sr-only">Describe your decision</label>
                <textarea
                  id="ledger-capture"
                  value={capture}
                  onChange={(event) => { setCapture(event.target.value); setSubmitted(false); }}
                  placeholder="What are you deciding?"
                  className="min-h-28 w-full resize-y bg-transparent px-2 py-2 text-lg leading-relaxed placeholder:text-[#66625C] focus:outline-none"
                />
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#25231F]/15 pt-3">
                  <button type="button" className="inline-flex min-h-11 items-center gap-2 rounded-sm px-2 text-sm text-[#66625C] transition-colors hover:text-[#334FAD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#334FAD]">
                    <Mic size={16} /> Speak instead
                  </button>
                  <button type="submit" className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#25231F] px-4 text-sm font-medium text-[#FFFCF7] transition-colors hover:bg-[#334FAD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#334FAD]">
                    {submitted ? "Captured" : "Consider this"} <ArrowRight size={16} />
                  </button>
                </div>
              </form>
              {submitted && <p className="mt-3 text-sm text-[#476B50]" role="status">Captured privately. Orria would now clarify only what changes your answer.</p>}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <SectionHeading number="02" label="Any scale" title="A useful read should fit the size of the decision.">
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5E5A54]">The front door is always the same. The depth changes only when the decision earns it.</p>
          </SectionHeading>
          <div className="mt-10 grid gap-px overflow-hidden border border-[#25231F]/20 bg-[#25231F]/20 lg:grid-cols-3">
            <article className="bg-[#F6F2E9] p-5 sm:p-6">
              <div className="flex items-center justify-between"><Margin>Quick / recent</Margin><span className="text-xs text-[#66625C]">00:42</span></div>
              <h3 className="mt-10 text-xl font-semibold tracking-[-0.035em]">Lunch by the river or the new ramen place?</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5E5A54]">“Ramen, if you want an easy reset before the afternoon. The walk sounds lovely, but today’s rain shifts the balance.”</p>
              <div className="mt-8 flex items-center justify-between border-t border-[#25231F]/15 pt-4"><span className="text-sm font-medium text-[#334FAD]">One useful reason</span><button className="inline-flex min-h-11 items-center gap-1 rounded-sm px-2 text-sm underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#334FAD]">Keep <Plus size={14} /></button></div>
            </article>
            <article className="bg-[#FFFCF7] p-5 sm:p-6">
              <div className="flex items-center justify-between"><Margin>Compare / cited</Margin><Search size={16} className="text-[#334FAD]" /></div>
              <h3 className="mt-10 text-xl font-semibold tracking-[-0.035em]">Which compact camera fits travel and low light?</h3>
              <div className="mt-4 space-y-2 border-l-2 border-[#334FAD] pl-3 text-sm leading-relaxed text-[#5E5A54]">
                <p><span className="font-semibold text-[#25231F]">Current fact:</span> Lens, weight and stabilisation checked against manufacturer specifications.</p>
                <a href="#sources" className="inline-flex min-h-11 items-center gap-1 text-[#334FAD] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#334FAD]">Source note 01 <ArrowUpRight size={12} /></a>
              </div>
              <div className="mt-8 border-t border-[#25231F]/15 pt-4"><span className="text-sm font-medium text-[#334FAD]">Best fit for your brief—not a universal winner.</span></div>
            </article>
            <article className="bg-[#F6F2E9] p-5 sm:p-6">
              <div className="flex items-center justify-between"><Margin>Consequential / open</Margin><span className="text-xs text-[#9A5B5D]">2 finalists</span></div>
              <h3 className="mt-10 text-xl font-semibold tracking-[-0.035em]">Should we move closer to family this year?</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5E5A54]">Orria sees a decision with genuine trade-offs, enough uncertainty to name, and a future self worth checking in with.</p>
              <div className="mt-8 flex items-center gap-3 border-t border-[#25231F]/15 pt-4"><span className="grid size-8 place-items-center rounded-full border border-[#334FAD] text-[10px] text-[#334FAD]">02</span><span className="text-sm font-medium">Considered depth, when you want it.</span></div>
            </article>
          </div>
        </section>

        <section id="method" className="border-y border-[#25231F]/20 bg-[#25231F] text-[#FFFCF7]">
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
            <div className="grid gap-6 lg:grid-cols-[112px_minmax(0,1fr)] lg:gap-10">
              <div className="flex justify-between lg:block"><LedgerMark number="03" /><Margin>Considered</Margin></div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[.16em] text-[#AFC0FF]">Not advice from on high</p>
                <h2 className="mt-4 max-w-4xl text-4xl font-medium leading-[.98] tracking-[-.055em] sm:text-5xl lg:text-6xl">A conclusion should show its working.</h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#D5D0C7]">Orria can take a position without pretending it owns the decision. It makes the pressure points visible, then leaves the call with you.</p>
                <div className="mt-12 grid gap-px border border-white/20 bg-white/20 md:grid-cols-2">
                  {[
                    ["The lean", "Given what you told me, I lean toward the Melbourne role."],
                    ["The reasons", "It expands the work you want to be known for, without closing the family option."],
                    ["Strongest objection", "The momentum and trust you have built here may be harder to recreate than you expect."],
                    ["Assumptions", "That the role truly has decision scope, and your partner’s move can remain flexible."],
                    ["Reversal", "If the remit narrows or the practical support falls through, stay and revisit in six months."],
                    ["Uncertainty", "No one can know the team culture until you are in it. That risk remains real."],
                  ].map(([label, detail], index) => (
                    <div key={label} className="bg-[#25231F] p-5 sm:p-6">
                      <div className="flex items-center gap-3"><span className="font-mono text-[10px] text-[#AFC0FF]">0{index + 1}</span><p className="text-sm font-semibold">{label}</p></div>
                      <p className={`mt-4 leading-relaxed ${index === 0 ? "text-xl italic text-[#FFF8EC]" : "text-sm text-[#D5D0C7]"}`} style={index === 0 ? ledgerSerifStyle : undefined}>{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <SectionHeading number="04" label="Board, earned" title="More voices only when they add a different lens.">
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5E5A54]">A Board is not a performance. Two clear perspectives can be enough; more are invited only when evidence, values or assumptions genuinely diverge.</p>
          </SectionHeading>
          <div className="mt-10 grid gap-7 lg:grid-cols-[.78fr_1.22fr]">
            <div className="border border-[#25231F]/20 bg-[#FFFCF7] p-6 sm:p-8">
              <div className="flex items-center justify-between"><Margin>Decision 034</Margin><span className="rounded-full bg-[#F0E7E0] px-3 py-1 text-xs font-medium text-[#825252]">Board earned</span></div>
              <h3 className="mt-7 text-2xl font-medium tracking-[-.04em]">The work move</h3>
              <div className="mt-4 flex items-center gap-3 border-b border-[#25231F]/15 pb-5">
                <LedgerRing className="h-16 w-20 text-[#334FAD]" />
                <div><p className="text-2xl font-semibold tracking-[-.04em]">62%</p><Margin>Board lean</Margin></div>
              </div>
              <div className="mt-7 space-y-4">
                <div className="border-l-2 border-[#C2802F] pl-4"><p className="text-sm font-semibold">Maya <span className="font-normal text-[#66625C]">· AI advisor</span></p><p className="mt-1 text-sm leading-relaxed text-[#5E5A54]">Tests upside, career scope and the future you may grow into.</p></div>
                <div className="border-l-2 border-[#66707E] pl-4"><p className="text-sm font-semibold">Rex <span className="font-normal text-[#66625C]">· AI advisor</span></p><p className="mt-1 text-sm leading-relaxed text-[#5E5A54]">Tests downside, practical reversibility and what cannot be rebuilt later.</p></div>
              </div>
              <button className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-sm border border-[#25231F]/25 px-4 text-sm font-medium hover:border-[#334FAD] hover:text-[#334FAD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#334FAD]">Challenge a lens <ArrowRight size={15} /></button>
            </div>
            <figure className="border-y border-[#25231F]/20 py-7 sm:px-3 sm:py-9">
              <Quote className="text-[#334FAD]" size={25} strokeWidth={1.3} />
              <blockquote className="mt-5 max-w-2xl text-3xl leading-[1.12] tracking-[-.04em] text-[#25231F] sm:text-4xl" style={ledgerSerifStyle}>“The question is not whether Melbourne is better. It is whether this is the particular season to choose expansion over proximity.”</blockquote>
              <figcaption className="mt-7 flex items-center gap-3 text-sm text-[#66625C]"><span className="h-px w-8 bg-[#66625C]" /> Orria’s synthesis, after two useful lenses</figcaption>
            </figure>
          </div>
        </section>

        <section className="border-y border-[#25231F]/20 bg-[#FFFCF7]">
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
            <div className="grid gap-7 lg:grid-cols-[112px_minmax(0,1fr)] lg:gap-10">
              <div className="flex justify-between lg:block"><LedgerMark number="05" /><Margin>Called</Margin></div>
              <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
                <div>
                  <h2 className="text-4xl font-medium leading-[1.02] tracking-[-.05em] sm:text-5xl">Orria’s read ends. <span className="font-normal italic text-[#334FAD]" style={ledgerSerifStyle}>Your call</span> begins.</h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5E5A54]">Sealing a decision records what you chose, why it made sense then, and when you want to meet its outcome honestly.</p>
                </div>
                <div className="border border-[#25231F]/25 bg-[#F6F2E9] p-5">
                  <div className="flex justify-between gap-3"><Margin>Personal seal</Margin><Stamp size={18} className="text-[#334FAD]" /></div>
                  <p className="mt-5 text-2xl leading-tight italic" style={ledgerSerifStyle}>“I’m choosing the role, and I’ll protect two visits home each quarter.”</p>
                  <div className="mt-6 flex items-center justify-between border-t border-[#25231F]/15 pt-4"><span className="flex items-center gap-2 text-sm text-[#5E5A54]"><Clock3 size={15} /> Review on 18 Jan 2027</span><button onClick={() => setSealed(true)} className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#334FAD] px-4 text-sm font-semibold text-white hover:bg-[#253d8d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#334FAD]">{sealed ? "Sealed" : "Seal my call"} {sealed ? <Check size={15} /> : <Stamp size={15} />}</button></div>
                  <div className="mt-5"><CobaltRule sealed={sealed} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="record" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <SectionHeading number="06" label="Learned" title="The most useful pattern is a more honest next decision.">
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5E5A54]">Orria returns at the horizon you choose. It does not call a choice “accurate” from a thin sample—it helps separate outcome, process and what you learned.</p>
          </SectionHeading>
          <div className="mt-10 grid gap-0 border border-[#25231F]/20 lg:grid-cols-[.72fr_1.28fr]">
            <div className="bg-[#334FAD] p-6 text-white sm:p-8">
              <Margin>Follow-up / 6 months later</Margin>
              <h3 className="mt-12 text-3xl leading-[1.1] italic tracking-[-.04em]" style={ledgerSerifStyle}>“Knowing what you knew then, would you make the same call?”</h3>
              <button className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-sm border border-white/50 px-4 text-sm font-medium transition-colors hover:bg-white hover:text-[#334FAD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Open reflection <ArrowRight size={15} /></button>
            </div>
            <div className="bg-[#FFFCF7] p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  ["Outcome", "Better than expected", "#476B50"],
                  ["Process", "Yes, with the same information", "#334FAD"],
                  ["Follow-through", "Visits protected 4 of 6 months", "#66625C"],
                  ["Learning", "Underestimated how much a clear boundary would help", "#825252"],
                ].map(([label, response, color]) => (
                  <div key={label} className="border-t border-[#25231F]/20 pt-3"><Margin>{label}</Margin><p className="mt-2 text-sm font-medium leading-relaxed" style={{ color }}>{response}</p></div>
                ))}
              </div>
              <p className="mt-9 border-l-2 border-[#334FAD] pl-4 text-xl italic leading-relaxed text-[#25231F]" style={ledgerSerifStyle}>A tentative observation, not a score: you tend to feel clearer when a decision includes an explicit boundary for what matters at home.</p>
            </div>
          </div>
        </section>

        <section id="privacy" className="border-t border-[#25231F]/20 bg-[#25231F] text-[#FFFCF7]">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[112px_1fr_.72fr] lg:gap-10 lg:px-12 lg:py-24">
            <div className="flex justify-between lg:block"><LedgerMark number="07" /><Margin>Private by default</Margin></div>
            <div>
              <div className="flex items-center gap-3 text-[#AFC0FF]"><LockKeyhole size={19} /><p className="text-xs font-medium uppercase tracking-[.16em]">A record for you, not a feed</p></div>
              <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-.05em] sm:text-5xl">Private decisions deserve private infrastructure.</h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#D5D0C7]">No public profiles, voting, comments or “explore” feed. Sensitive entries stay private by default. Any sharing is a deliberate, reviewed export.</p>
            </div>
            <div className="border border-white/20 p-5 sm:p-6">
              <ShieldCheck size={22} className="text-[#AFC0FF]" />
              <p className="mt-5 text-sm font-semibold">Privacy is part of the product, not a footnote.</p>
              <p className="mt-2 text-sm leading-relaxed text-[#D5D0C7]">Orria names what data is used and why, so you can decide what belongs in your record.</p>
              <a href="#privacy" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#AFC0FF] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">Read privacy principles <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F2E9] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto grid size-12 place-items-center rounded-full border border-[#334FAD] text-[#334FAD]"><BookOpen size={20} /></div>
            <p className="mt-6 font-mono text-[10px] font-medium uppercase tracking-[.18em] text-[#66625C]">Start an open entry</p>
            <h2 className="mt-4 text-4xl font-medium leading-[1.02] tracking-[-.055em] sm:text-6xl">Bring the choice<br /><span className="font-normal italic text-[#334FAD]" style={ledgerSerifStyle}>you keep returning to.</span></h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#5E5A54]">A short answer, a researched comparison, or a considered record—Orria meets the decision where it is.</p>
            <a href="#begin" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-sm bg-[#334FAD] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#253d8d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#334FAD]">Start privately <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>

      <footer id="sources" className="border-t border-[#25231F]/20 bg-[#FFFCF7] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 text-xs text-[#66625C] sm:flex-row sm:items-center">
          <p>Orria — a private decision companion.</p>
          <p>Illustrative source note: product facts stay adjacent to the decision and name their source.</p>
        </div>
      </footer>
    </div>
  );
}
