"use client";

import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  FileLock2,
  Headphones,
  LockKeyhole,
  Mic,
  MoveRight,
  PanelTop,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Stamp,
  Undo2,
} from "lucide-react";

const instrumentSerifStyle = {
  fontFamily: "var(--font-instrument-serif), Georgia, serif",
};

function Ring({
  className = "",
  state = "capture",
}: {
  className?: string;
  state?: "capture" | "balance" | "seal";
}) {
  const mark =
    state === "balance" ? (
      <>
        <path d="M39 50h42" />
        <path d="M52 39 39 50l13 11M68 39l13 11-13 11" />
        <circle cx="60" cy="50" r="3.5" fill="currentColor" stroke="none" />
      </>
    ) : state === "seal" ? (
      <>
        <path d="m46 50 9 9 19-20" />
        <path d="M60 36v-5M60 69v-5M45.5 41.5 42 38M74 62l-3.5-3.5M45.5 58.5 42 62M74 38l-3.5 3.5" opacity=".42" />
      </>
    ) : (
      <>
        <path d="M47 50h26" />
        <path d="M60 37v26" />
        <circle cx="60" cy="50" r="4" fill="currentColor" stroke="none" />
      </>
    );

  return (
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
      <circle cx="60" cy="50" r="36" opacity=".18" />
      <circle cx="60" cy="50" r="28" opacity=".48" />
      {mark}
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#3F5BC6]">
      <span className="h-px w-5 bg-[#3F5BC6]" />
      {children}
    </p>
  );
}

function PhoneProof() {
  return (
    <div className="relative mx-auto w-[286px] rounded-[2.45rem] border-[7px] border-[#1D1D21] bg-[#1D1D21] p-1.5 shadow-[0_28px_70px_rgba(29,29,33,0.2)] sm:w-[310px]">
      <div className="absolute left-1/2 top-2 z-20 h-5 w-[88px] -translate-x-1/2 rounded-full bg-[#1D1D21]" />
      <div className="min-h-[555px] overflow-hidden rounded-[2rem] bg-[#FBFAF8] px-4 pb-4 pt-10">
        <div className="flex items-center justify-between text-[10px] font-semibold text-[#1D1D21]">
          <span>9:41</span>
          <span className="flex items-center gap-1"><span className="h-2 w-3 rounded-sm border border-[#1D1D21]" /> 100%</span>
        </div>
        <div className="mt-7 flex items-center justify-between">
          <span className="text-[13px] font-semibold tracking-[-0.03em]">Orria</span>
          <button aria-label="Open journal" className="grid h-11 w-11 place-items-center rounded-full text-[#3F5BC6] hover:bg-[#E9E8E3]">
            <BookOpen size={17} />
          </button>
        </div>
        <p className="mt-7 text-[12px] font-medium text-[#66666c]">Bring a choice</p>
        <h3 className="mt-1 text-[25px] font-semibold leading-[1.05] tracking-[-0.055em] text-[#1D1D21]">What are you deciding?</h3>
        <div className="mt-5 rounded-[1.35rem] border border-[#d8d7d2] bg-white p-3.5 shadow-[0_8px_18px_rgba(29,29,33,0.05)]">
          <p className="text-[12px] leading-relaxed text-[#44444a]">Should I take the role in Melbourne, or stay close to my team here?</p>
          <div className="mt-4 flex items-center justify-between border-t border-[#ecebe7] pt-2.5">
            <button aria-label="Use voice capture" className="grid h-11 w-11 place-items-center rounded-full text-[#3F5BC6] hover:bg-[#E9E8E3]">
              <Mic size={16} />
            </button>
            <button className="flex h-11 items-center gap-1.5 rounded-full bg-[#3F5BC6] px-3 text-[11px] font-semibold text-white">
              Begin <ArrowRight size={13} />
            </button>
          </div>
        </div>
        <div className="mt-7 rounded-[1.4rem] bg-[#E9E8E3] p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3F5BC6]">Orria&apos;s read</p>
              <p className="mt-1.5 text-[13px] font-semibold leading-snug tracking-[-0.025em]">Given your priorities, I lean toward Melbourne.</p>
            </div>
            <Ring className="h-11 w-12 shrink-0 text-[#3F5BC6]" state="balance" />
          </div>
          <p className="mt-3 text-[10px] leading-relaxed text-[#626268]">The role compounds your craft. The real risk is losing the support system that makes hard work sustainable.</p>
          <button className="mt-3 flex min-h-11 items-center gap-1 text-[11px] font-semibold text-[#3F5BC6]">
            See the reasoning <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function QuietInstrumentDirection() {
  const [confidence, setConfidence] = useState(68);
  const [sealed, setSealed] = useState(false);

  return (
    <main
      className="overflow-hidden bg-[#F0EFEB] text-[#1D1D21] selection:bg-[#3F5BC6] selection:text-white"
      style={{ fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <header className="flex h-[76px] items-center justify-between border-b border-[#d9d8d3]" aria-label="Primary navigation">
          <a href="#top" className="flex min-h-11 items-center gap-2.5 text-[18px] font-semibold tracking-[-0.055em]">
            <Ring className="h-9 w-10 text-[#3F5BC6]" />
            Orria
          </a>
          <nav className="hidden items-center gap-7 text-[13px] font-medium text-[#55555b] md:flex" aria-label="Product links">
            <a className="min-h-11 content-center hover:text-[#1D1D21]" href="#how-it-works">How it works</a>
            <a className="min-h-11 content-center hover:text-[#1D1D21]" href="#the-read">The read</a>
            <a className="min-h-11 min-w-11 content-center text-center hover:text-[#1D1D21]" href="#private-by-design">Privacy</a>
          </nav>
          <a href="#begin" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1D1D21] px-4 text-[12px] font-semibold text-white hover:bg-[#3F5BC6] focus-visible:outline-[#3F5BC6]">
            Bring a choice <ArrowRight size={14} />
          </a>
        </header>

        <section id="top" className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-16 lg:py-28" aria-labelledby="hero-title">
          <div className="max-w-2xl">
            <Eyebrow>A private decision companion</Eyebrow>
            <h1 id="hero-title" className="max-w-[720px] text-[clamp(3.15rem,7vw,6.35rem)] font-semibold leading-[.92] tracking-[-0.075em] text-[#1D1D21]">
              See the sides.<br />
              <span className="font-normal tracking-[-0.065em]" style={instrumentSerifStyle}>Make your call.</span>
            </h1>
            <p className="mt-7 max-w-xl text-[17px] leading-7 text-[#57575e] sm:text-[19px] sm:leading-8">
              Orria helps you think through the decision in front of you—whether it&apos;s lunch, a laptop, or a life you&apos;re about to change.
            </p>
            <div id="begin" className="mt-9 max-w-[605px] rounded-[1.6rem] border border-[#d6d5d0] bg-[#FBFAF8] p-3 shadow-[0_16px_35px_rgba(29,29,33,0.06)]">
              <div className="flex gap-3">
                <Ring className="mt-1 h-10 w-11 shrink-0 text-[#3F5BC6]" />
                <div className="min-w-0 flex-1">
                  <label htmlFor="quiet-capture" className="sr-only">Describe a decision</label>
                  <textarea id="quiet-capture" rows={2} placeholder="What are you deciding?" className="block w-full resize-none bg-transparent pt-1 text-[15px] leading-6 text-[#1D1D21] placeholder:text-[#6D6D72] focus:outline-none" />
                  <div className="mt-3 flex items-center justify-between border-t border-[#e3e2de] pt-2">
                    <button aria-label="Describe by voice" className="grid h-11 w-11 place-items-center rounded-full text-[#3F5BC6] hover:bg-[#E9E8E3] focus-visible:outline-[#3F5BC6]"><Mic size={17} /></button>
                    <button className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#3F5BC6] px-4 text-[12px] font-semibold text-white hover:bg-[#314cb0] focus-visible:outline-[#3F5BC6]">
                      Start with this <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 flex items-center gap-2 text-[12px] text-[#6c6c71]"><LockKeyhole size={13} className="text-[#3F5BC6]" /> Private by default. Your decision remains yours.</p>
          </div>
          <div className="relative mx-auto w-full max-w-[540px] py-4 lg:py-0">
            <div className="absolute inset-x-0 top-[16%] h-[72%] rounded-[3rem] border border-[#d9d8d3] bg-[#E9E8E3]" />
            <div className="relative grid grid-cols-[1fr_auto] items-end gap-3 px-5 sm:px-8">
              <div className="mb-9 rounded-2xl border border-[#d6d5d0] bg-[#FBFAF8] p-4 shadow-[0_16px_30px_rgba(29,29,33,0.07)]">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#3F5BC6]"><Sparkles size={13} /> A useful question</div>
                <p className="mt-3 text-[21px] leading-[1.15] tracking-[-0.03em]" style={instrumentSerifStyle}>“What would you be protecting by staying?”</p>
                <p className="mt-3 text-[11px] leading-4 text-[#696970]">Orria clarifies only what changes the answer.</p>
              </div>
              <PhoneProof />
            </div>
          </div>
        </section>
      </div>

      <section id="how-it-works" className="border-y border-[#d9d8d3] bg-[#FBFAF8]" aria-labelledby="depth-title">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <Eyebrow>One place to begin</Eyebrow>
              <h2 id="depth-title" className="max-w-md text-[clamp(2.35rem,4.8vw,4.25rem)] font-semibold leading-[.98] tracking-[-0.07em]">The depth should fit the decision.</h2>
            </div>
            <p className="max-w-xl text-[16px] leading-7 text-[#5d5d63]">There&apos;s no mode picker to learn. Start naturally. Orria suggests the right amount of attention—and you can always look closer or leave a quick choice light.</p>
          </div>
          <div className="relative mt-14 grid gap-3 lg:grid-cols-3 lg:gap-0">
            <div className="absolute left-[16.6%] right-[16.6%] top-[57px] hidden h-px bg-[#bfc3da] lg:block" />
            <article className="relative rounded-[1.5rem] border border-[#deddd8] bg-[#FBFAF8] p-6 lg:rounded-r-none lg:border-r-0">
              <div className="flex items-start justify-between"><span className="text-[12px] font-bold uppercase tracking-[.16em] text-[#3F5BC6]">Quick</span><Ring className="h-14 w-[66px] text-[#3F5BC6]" /></div>
              <h3 className="mt-8 text-[22px] font-semibold tracking-[-.045em]">A clear nudge, right now.</h3>
              <p className="mt-3 max-w-sm text-[14px] leading-6 text-[#626268]">“What should I bring to dinner?” A concise take and one reason that matters.</p>
              <div className="mt-6 flex items-center gap-2 text-[12px] font-semibold text-[#3F5BC6]"><Clock3 size={15} /> Keep only if it matters</div>
            </article>
            <article className="relative rounded-[1.5rem] border border-[#deddd8] bg-[#F4F3EF] p-6 lg:rounded-none">
              <div className="flex items-start justify-between"><span className="text-[12px] font-bold uppercase tracking-[.16em] text-[#3F5BC6]">Compare</span><Ring className="h-14 w-[66px] text-[#3F5BC6]" state="balance" /></div>
              <h3 className="mt-8 text-[22px] font-semibold tracking-[-.045em]">Facts, trade-offs, a fit.</h3>
              <p className="mt-3 max-w-sm text-[14px] leading-6 text-[#626268]">For choices with moving details, Orria asks what matters, checks current sources, and keeps the evidence close.</p>
              <div className="mt-6 flex items-center gap-2 text-[12px] font-semibold text-[#3F5BC6]"><SearchCheck size={15} /> Source beside the claim</div>
            </article>
            <article className="relative rounded-[1.5rem] border border-[#deddd8] bg-[#FBFAF8] p-6 lg:rounded-l-none lg:border-l-0">
              <div className="flex items-start justify-between"><span className="text-[12px] font-bold uppercase tracking-[.16em] text-[#3F5BC6]">Consequential</span><Ring className="h-14 w-[66px] text-[#3F5BC6]" state="balance" /></div>
              <h3 className="mt-8 text-[22px] font-semibold tracking-[-.045em]">A Board when the stakes earn it.</h3>
              <p className="mt-3 max-w-sm text-[14px] leading-6 text-[#626268]">Distinct lenses surface the values, evidence, and unanswered questions behind a meaningful call.</p>
              <div className="mt-6 flex items-center gap-2 text-[12px] font-semibold text-[#3F5BC6]"><PanelTop size={15} /> Your call remains central</div>
            </article>
          </div>
        </div>
      </section>

      <section id="the-read" className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.85fr_1.15fr] lg:gap-24 lg:px-12" aria-labelledby="read-title">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <Eyebrow>Not a verdict</Eyebrow>
          <h2 id="read-title" className="max-w-md text-[clamp(2.45rem,5vw,4.6rem)] font-semibold leading-[.96] tracking-[-.075em]">A recommendation you can examine.</h2>
          <p className="mt-6 max-w-md text-[16px] leading-7 text-[#5d5d63]">Orria may take a position. It never pretends to be the authority. Its value is making the reasoning—and its limits—clear enough for you to use.</p>
          <div className="mt-9 flex items-center gap-4 border-l-2 border-[#3F5BC6] pl-4">
            <Ring className="h-16 w-16 text-[#3F5BC6]" state="balance" />
            <p className="text-[19px] leading-6 tracking-[-.025em]" style={instrumentSerifStyle}>“This is a read on your decision, not a decision made for you.”</p>
          </div>
        </div>
        <article className="overflow-hidden rounded-[1.8rem] border border-[#d4d3ce] bg-[#FBFAF8] shadow-[0_20px_45px_rgba(29,29,33,0.06)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e2e1dc] px-6 py-5 sm:px-8">
            <div><p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#3F5BC6]">Orria&apos;s read</p><p className="mt-1 text-[13px] text-[#64646a]">Accept the Melbourne role?</p></div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E9E8E3] px-3 py-1.5 text-[11px] font-semibold text-[#4c4c53]"><CircleHelp size={13} className="text-[#3F5BC6]" /> Conditional recommendation</span>
          </div>
          <div className="p-6 sm:p-8">
            <div className="rounded-2xl bg-[#E9E8E3] p-5"><p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#3F5BC6]">The lean</p><p className="mt-2 text-[25px] leading-[1.16] tracking-[-.035em]" style={instrumentSerifStyle}>Given what you&apos;ve said, I lean toward taking the role.</p></div>
            <dl className="mt-3 divide-y divide-[#e5e4df]">
              {[
                ["The reasons", "It compounds the work you want more of, and the timing is unusually good."],
                ["The strongest objection", "You may be underweighting the relationships that make a demanding move sustainable."],
                ["The assumptions", "That you can build a support rhythm in Melbourne within the first few months."],
                ["What would reverse it", "A more grounded local path with comparable scope—or a support constraint you cannot change."],
                ["What remains uncertain", "How the role will evolve after the first year, and how the move will feel day-to-day."],
              ].map(([term, detail]) => <div className="grid gap-1 py-4 sm:grid-cols-[165px_1fr] sm:gap-5" key={term}><dt className="text-[12px] font-bold text-[#1D1D21]">{term}</dt><dd className="text-[13px] leading-5 text-[#626268]">{detail}</dd></div>)}
            </dl>
            <button className="mt-4 inline-flex min-h-11 items-center gap-2 text-[12px] font-semibold text-[#3F5BC6] hover:text-[#1D1D21]">Challenge this read <MoveRight size={15} /></button>
            <div className="mt-5 rounded-2xl border border-[#d9d8d3] bg-white p-5">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#6A6A70]">Your call</p>
                  <p className="mt-1 text-[15px] font-semibold">Accept the Melbourne role · {confidence}%</p>
                </div>
                <span className="text-[11px] text-[#68686E]">You—not Orria—seal it</span>
              </div>
              <label htmlFor="quiet-seal" className="sr-only">Your confidence in accepting the Melbourne role</label>
              <input
                id="quiet-seal"
                type="range"
                min="0"
                max="100"
                value={confidence}
                onChange={(event) => { setConfidence(Number(event.target.value)); setSealed(false); }}
                className="mt-3 h-11 w-full accent-[#3F5BC6]"
              />
              <button
                type="button"
                onClick={() => setSealed(true)}
                className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#3F5BC6] px-4 text-[12px] font-semibold text-white hover:bg-[#314cb0]"
              >
                {sealed ? "Call sealed" : "Seal my call"} {sealed ? <Check size={14} /> : <Stamp size={14} />}
              </button>
            </div>
          </div>
        </article>
      </section>

      <section className="border-y border-[#d9d8d3] bg-[#E9E8E3]" aria-labelledby="record-title">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_.95fr] lg:items-center lg:gap-20 lg:px-12">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-[520px] rounded-[2rem] border border-[#cecfc9] bg-[#FBFAF8] p-6 shadow-[0_20px_48px_rgba(29,29,33,0.09)] sm:p-8">
              <div className="absolute -right-4 -top-8 rounded-full border border-[#bec3df] bg-[#F0EFEB] p-1"><Ring className="h-20 w-24 text-[#3F5BC6]" state="seal" /></div>
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.16em] text-[#3F5BC6]"><Stamp size={14} /> Sealed decision</div>
              <h3 className="mt-6 max-w-sm text-[27px] font-semibold leading-[1.04] tracking-[-.06em]">Take the Melbourne role.</h3>
              <p className="mt-3 max-w-md text-[13px] leading-6 text-[#5f5f65]">I&apos;m choosing growth, with a clear plan to protect my closest relationships during the transition.</p>
              <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#dfded9] bg-[#dfded9] text-[12px]">
                <div className="bg-[#FBFAF8] p-4"><p className="text-[#747479]">Call made</p><p className="mt-1 font-semibold">18 Jul 2026</p></div>
                <div className="bg-[#FBFAF8] p-4"><p className="text-[#747479]">Return to this</p><p className="mt-1 font-semibold">In 6 months</p></div>
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-[#e6e5e0] pt-5 text-[12px] text-[#5e5e64]"><FileLock2 size={15} className="text-[#3F5BC6]" /> Private sealed record · Yours to revisit or export.</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>A record with a reason</Eyebrow>
            <h2 id="record-title" className="max-w-lg text-[clamp(2.45rem,5vw,4.65rem)] font-semibold leading-[.96] tracking-[-.075em]">A decision can become a better next one.</h2>
            <p className="mt-6 max-w-lg text-[16px] leading-7 text-[#5d5d63]">When a choice matters, you can seal your call in your own words. Return when you&apos;ll know more. Orria helps you distinguish what happened from what you knew, did, and learned.</p>
            <div className="mt-8 space-y-3">
              {[["Make your call", "The recommendation never seals itself."], ["Choose a useful horizon", "Reflect when there is actually something to learn."], ["Keep the record private", "Your decisions are not content for anyone else."]].map(([title, detail]) => <div className="flex gap-3" key={title}><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#3F5BC6] text-white"><Check size={14} /></span><p className="text-[14px] leading-6 text-[#5d5d63]"><strong className="text-[#1D1D21]">{title}.</strong> {detail}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="private-by-design" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="privacy-title">
        <div className="grid gap-10 border-b border-[#d9d8d3] pb-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:pb-24">
          <div><Eyebrow>Private by design</Eyebrow><h2 id="privacy-title" className="max-w-md text-[clamp(2.35rem,4.8vw,4.3rem)] font-semibold leading-[.97] tracking-[-.07em]">The most personal decisions deserve a quieter place.</h2></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[[ShieldCheck, "No public layer", "No feed, profiles, votes, or comments. Orria is not a place to perform your choices."], [LockKeyhole, "Clear consent", "You see what information is used and why—especially when an outside provider is involved."], [Headphones, "Honest limits", "High-stakes topics and uncertain research are handled with limits, context, and clear next steps."], [Undo2, "Your record, your control", "Keep, seal, revisit, export, or remove a decision on your terms."]].map(([Icon, title, copy]) => { const ItemIcon = Icon as typeof ShieldCheck; return <article className="rounded-2xl border border-[#d9d8d3] bg-[#FBFAF8] p-5" key={title as string}><ItemIcon size={19} className="text-[#3F5BC6]" /><h3 className="mt-7 text-[15px] font-semibold tracking-[-.02em]">{title as string}</h3><p className="mt-2 text-[13px] leading-5 text-[#66666c]">{copy as string}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12" aria-labelledby="cta-title">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#1D1D21] px-6 py-14 text-[#FBFAF8] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <Ring className="absolute -right-10 -top-10 h-64 w-72 text-[#7e91dd] opacity-45 sm:-right-2 sm:-top-14" state="seal" />
          <div className="relative max-w-2xl"><p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#aeb9ef]">Bring the real decision</p><h2 id="cta-title" className="mt-4 text-[clamp(2.55rem,5.5vw,5.2rem)] font-semibold leading-[.94] tracking-[-.075em]">A clearer way to choose starts here.</h2><p className="mt-6 max-w-lg text-[16px] leading-7 text-[#d0d0d5]">You don&apos;t need a perfect brief. Just a choice that&apos;s on your mind.</p><a href="#top" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FBFAF8] px-5 text-[13px] font-semibold text-[#1D1D21] hover:bg-[#dce2ff]">Bring a choice <ArrowRight size={15} /></a></div>
        </div>
        <footer className="flex flex-col gap-4 py-8 text-[12px] text-[#69696f] sm:flex-row sm:items-center sm:justify-between"><span className="flex items-center gap-2 font-semibold text-[#1D1D21]"><Ring className="h-7 w-8 text-[#3F5BC6]" /> Orria</span><div className="flex gap-5"><a className="min-h-11 min-w-11 content-center text-center hover:text-[#1D1D21]" href="#private-by-design">Privacy</a><a className="min-h-11 content-center hover:text-[#1D1D21]" href="#the-read">How Orria works</a></div></footer>
      </section>
    </main>
  );
}
