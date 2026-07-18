"use client";

import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  LockKeyhole,
  Mic,
  Search,
  ShieldCheck,
} from "lucide-react";

const sans = {
  fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
};

const condensed = {
  fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
  fontStretch: "condensed",
};

const serif = {
  fontFamily: "var(--font-instrument-serif), Georgia, serif",
};

function ChapterLabel({
  number,
  depth,
}: {
  number: string;
  depth: string;
}) {
  return (
    <div
      className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#545860]"
      style={sans}
    >
      <span className="grid size-8 place-items-center rounded-full border border-[#171A20]/25 text-[#171A20]">
        {number}
      </span>
      <span>{depth}</span>
    </div>
  );
}

function InstrumentRing({
  value,
  label,
  accent = "#3154C8",
}: {
  value: number;
  label: string;
  accent?: string;
}) {
  const angle = Math.max(8, Math.min(100, value)) * 3.6;

  return (
    <div
      className="relative grid aspect-square w-full max-w-[15rem] place-items-center rounded-full"
      style={{
        background: `conic-gradient(${accent} 0deg ${angle}deg, rgba(23,26,32,.12) ${angle}deg 360deg)`,
      }}
      role="img"
      aria-label={`${label}, ${value} percent`}
    >
      <div className="absolute inset-[10px] rounded-full bg-[#F5F3EE]" />
      <div className="relative text-center" style={sans}>
        <strong className="block text-4xl font-semibold tracking-[-0.06em]">
          {value}%
        </strong>
        <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-[#696D74]">
          {label}
        </span>
      </div>
    </div>
  );
}

function ReadDetail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-t border-[#171A20]/12 py-3 sm:grid-cols-[8.5rem_1fr] sm:gap-4">
      <dt
        className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#696D74]"
        style={sans}
      >
        {label}
      </dt>
      <dd className="text-sm leading-6 text-[#2F3339]" style={sans}>
        {children}
      </dd>
    </div>
  );
}

function LunchStillLife() {
  return (
    <div
      className="relative min-h-[27rem] overflow-hidden rounded-[2.25rem] bg-[#E1A43D]"
      aria-hidden="true"
    >
      <div className="absolute -left-16 top-12 size-72 rounded-full border-[46px] border-[#F9F3E9] bg-[#D87645] shadow-[0_30px_60px_rgba(89,55,27,.18)]" />
      <div className="absolute left-14 top-36 size-20 rounded-full bg-[#F5D36A] shadow-inner" />
      <div className="absolute bottom-14 right-10 h-48 w-32 rotate-[-8deg] rounded-[2rem_2rem_3rem_3rem] bg-[#F5F3EE] shadow-[0_28px_50px_rgba(66,43,21,.2)]" />
      <div className="absolute bottom-[7.5rem] right-[4.85rem] size-12 rounded-full border-[10px] border-[#3154C8]/85" />
      <div className="absolute right-[-1.5rem] top-10 h-64 w-4 rotate-[28deg] rounded-full bg-[#171A20]" />
      <span className="absolute bottom-8 left-8 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#171A20]/65" style={sans}>
        Tuesday · 12:18pm
      </span>
    </div>
  );
}

function CameraStillLife() {
  return (
    <div
      className="relative min-h-[30rem] overflow-hidden rounded-[2.25rem] bg-[#171A20] text-white"
      aria-hidden="true"
    >
      <div className="absolute left-[12%] top-[17%] h-56 w-[72%] rotate-[-4deg] rounded-[2.2rem] bg-[#D8D5CD] shadow-[0_40px_80px_rgba(0,0,0,.48)]">
        <div className="absolute -top-7 left-[18%] h-12 w-28 rounded-t-xl bg-[#CAC7BF]" />
        <div className="absolute left-[22%] top-[16%] grid size-40 place-items-center rounded-full bg-[#24272D] shadow-[inset_0_0_0_15px_#4B505A]">
          <div className="size-24 rounded-full bg-[#3154C8] shadow-[inset_10px_8px_24px_rgba(255,255,255,.18)]" />
        </div>
        <div className="absolute right-8 top-7 size-5 rounded-full bg-[#D87645]" />
        <div className="absolute bottom-9 right-8 h-2 w-20 rounded-full bg-[#171A20]/35" />
      </div>
      <div className="absolute inset-x-8 bottom-8 flex items-end justify-between">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/55" style={sans}>
          Current facts · considered beside your priorities
        </span>
        <Search className="size-5 text-white/60" />
      </div>
    </div>
  );
}

function KeysStillLife() {
  return (
    <div
      className="relative min-h-[31rem] overflow-hidden rounded-[2.25rem] bg-[#C9B7C8]"
      aria-hidden="true"
    >
      <div className="absolute -right-16 -top-20 size-80 rounded-full bg-[#3154C8]" />
      <div className="absolute left-[10%] top-[13%] h-[72%] w-[58%] rotate-[5deg] rounded-md bg-[#FAF8F1] p-8 shadow-[0_35px_80px_rgba(64,42,68,.25)]">
        <div className="h-2 w-20 rounded-full bg-[#171A20]" />
        <div className="mt-8 h-2 w-3/4 rounded-full bg-[#171A20]/18" />
        <div className="mt-3 h-2 w-5/6 rounded-full bg-[#171A20]/18" />
        <div className="mt-3 h-2 w-2/3 rounded-full bg-[#171A20]/18" />
        <div className="absolute bottom-8 left-8 h-10 w-28 rounded-full bg-[#3154C8]/12" />
      </div>
      <div className="absolute bottom-[12%] right-[11%] size-28 rounded-full border-[10px] border-[#F5D36A] shadow-[0_25px_45px_rgba(52,38,61,.24)]" />
      <div className="absolute bottom-[6%] right-[22%] h-8 w-36 rotate-[32deg] rounded-full bg-[#F5D36A]" />
      <span className="absolute bottom-7 left-8 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#171A20]/65" style={sans}>
        Offer received · call is still yours
      </span>
    </div>
  );
}

export function DecisionsInLifeDirection() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F5F3EE] text-[#171A20]" style={sans}>
      <header className="sticky top-0 z-30 border-b border-[#171A20]/10 bg-[#F5F3EE]/95 backdrop-blur-xl">
        <nav
          className="mx-auto flex min-h-16 max-w-[90rem] items-center justify-between px-5 sm:px-8"
          aria-label="Decisions in Life concept navigation"
        >
          <a href="#life-top" className="flex min-h-11 min-w-11 items-center gap-3">
            <span className="text-xl font-semibold tracking-[-0.04em]">Orria</span>
            <span className="hidden border-l border-[#171A20]/20 pl-3 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#696D74] sm:block">
              Decisions, in life
            </span>
          </a>
          <div className="flex items-center gap-1 sm:gap-3">
            <a
              href="#life-privacy"
              className="hidden min-h-11 items-center px-3 text-sm font-medium sm:flex"
            >
              Private by design
            </a>
            <a
              href="#life-range"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#171A20] px-5 text-sm font-semibold text-white transition-transform duration-150 active:scale-[0.98]"
            >
              See how it works <ArrowRight className="size-4" />
            </a>
          </div>
        </nav>
      </header>

      <main id="life-top">
        <section className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-[90rem] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
          <div className="relative z-10 max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#3154C8]">
              A private decision companion
            </p>
            <h1
              className="max-w-[13ch] text-[clamp(3.6rem,8.4vw,8.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.075em]"
              style={condensed}
            >
              Life keeps asking.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-7 text-[#4B4F56] sm:text-xl">
              From what to order to where to live, Orria helps you see the sides,
              make your call, and learn from what follows.
            </p>

            <div className="mt-9 max-w-2xl rounded-[1.6rem] border border-[#171A20]/15 bg-white/75 p-3 shadow-[0_20px_70px_rgba(41,38,32,.09)]">
              <label htmlFor="life-capture" className="sr-only">
                What are you deciding?
              </label>
              <div className="flex min-h-16 items-center gap-3 rounded-[1.1rem] bg-[#FAF8F2] px-4">
                <Mic className="size-5 shrink-0 text-[#3154C8]" aria-hidden="true" />
                <input
                  id="life-capture"
                  defaultValue="What should I do about…"
                  className="min-h-11 min-w-0 flex-1 bg-transparent text-base text-[#34383E] outline-none sm:text-lg"
                />
                <button
                  type="button"
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-[#3154C8] text-white transition-transform duration-150 active:scale-[0.97]"
                  aria-label="Bring this choice to Orria"
                >
                  <ArrowRight className="size-5" />
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 px-3 pb-1 pt-3 text-[0.72rem] font-medium text-[#696D74]">
                <span>One place to start. Orria matches the depth.</span>
                <span className="inline-flex items-center gap-1.5">
                  <LockKeyhole className="size-3.5" /> Private by default
                </span>
              </div>
            </div>
          </div>

          <div className="relative min-h-[28rem] lg:min-h-[39rem]" aria-hidden="true">
            <div className="absolute left-[3%] top-[4%] size-52 rounded-full bg-[#E1A43D] sm:size-64" />
            <div className="absolute right-[2%] top-[14%] size-72 rounded-full bg-[#3154C8] sm:size-96" />
            <div className="absolute bottom-[8%] left-[17%] h-[48%] w-[65%] rotate-[-8deg] rounded-[2.5rem] border border-white/80 bg-[#FAF8F2] shadow-[0_35px_90px_rgba(37,38,43,.2)]">
              <div className="absolute left-[14%] top-[14%] size-36 rounded-full border-[24px] border-[#171A20] sm:size-52" />
              <div className="absolute bottom-10 left-10 right-10 h-2 rounded-full bg-[#171A20]/12" />
              <div className="absolute bottom-10 left-10 h-2 w-[62%] rounded-full bg-[#3154C8]" />
            </div>
            <div className="absolute bottom-[3%] right-[2%] grid size-32 place-items-center rounded-full bg-[#171A20] text-center text-white shadow-2xl sm:size-40">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em]">
                Quick
                <br /> Compare
                <br /> Consequential
              </span>
            </div>
          </div>

          <a
            href="#life-range"
            aria-label="Explore decisions of every size"
            className="absolute bottom-5 left-5 grid size-11 place-items-center rounded-full border border-[#171A20]/20 sm:left-8"
          >
            <ArrowDown className="size-4" />
          </a>
        </section>

        <section id="life-range" className="border-y border-[#171A20]/10 bg-[#171A20] text-white">
          <div className="mx-auto grid max-w-[90rem] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              The same beginning. The right amount of help.
            </p>
            <h2 className="text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.05em] sm:text-6xl" style={condensed}>
              Every size of decision belongs here.
            </h2>
          </div>
        </section>

        <section className="mx-auto grid max-w-[90rem] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
          <LunchStillLife />
          <div className="lg:px-8">
            <ChapterLabel number="01" depth="Quick · right now" />
            <h2 className="mt-7 max-w-[11ch] text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.055em] sm:text-7xl" style={condensed}>
              A useful answer before lunch gets cold.
            </h2>
            <div className="mt-9 rounded-[1.7rem] bg-white/80 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3154C8]">
                Orria’s read
              </p>
              <p className="mt-3 text-2xl italic leading-snug" style={serif}>
                “Get the soup. You want something warm, fast, and light before the call.”
              </p>
              <dl className="mt-5">
                <ReadDetail label="Why">It fits the time and energy you said you have.</ReadDetail>
                <ReadDetail label="Best objection">The sandwich will keep you full longer.</ReadDetail>
                <ReadDetail label="Assuming">The 1pm call matters more than a heavy lunch.</ReadDetail>
                <ReadDetail label="I’d reverse if">You will not eat again until late evening.</ReadDetail>
                <ReadDetail label="Uncertainty">Only you know how hungry you actually feel.</ReadDetail>
              </dl>
              <div className="mt-3 flex flex-wrap gap-3">
                <button type="button" className="min-h-11 rounded-full bg-[#171A20] px-5 text-sm font-semibold text-white">
                  That’s my call
                </button>
                <button type="button" className="min-h-11 rounded-full px-4 text-sm font-semibold text-[#545860]">
                  Don’t keep this one
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="life-sources" className="bg-[#D9E0F6]">
          <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
            <div className="order-2 lg:order-1 lg:px-8">
              <ChapterLabel number="02" depth="Compare · with current facts" />
              <h2 className="mt-7 max-w-[11ch] text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.055em] sm:text-7xl" style={condensed}>
                Facts beside the life they need to fit.
              </h2>
              <div className="mt-9 overflow-hidden rounded-[1.7rem] bg-[#F8F7F2]">
                <div className="flex items-center justify-between border-b border-[#171A20]/10 px-6 py-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3154C8]">Researched comparison</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#545860]"><Search className="size-3.5" /> Sources checked now</span>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-2xl italic leading-snug" style={serif}>
                    “For the camera you will actually carry, I lean toward the smaller option.”
                  </p>
                  <dl className="mt-5">
                    <ReadDetail label="Reasons">Carry weight and a simpler everyday kit drive the fit.</ReadDetail>
                    <ReadDetail label="Best objection">The other system leaves more room to change lenses.</ReadDetail>
                    <ReadDetail label="Assuming">Everyday use matters more than maximum system flexibility.</ReadDetail>
                    <ReadDetail label="I’d reverse if">Paid work or interchangeable lenses become a priority.</ReadDetail>
                    <ReadDetail label="Uncertainty">Availability and price can change; Orria shows when each fact was checked.</ReadDetail>
                  </dl>
                  <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#696D74]">Illustrative source treatment</p>
                  <div className="mt-2 grid gap-2 text-xs text-[#545860] sm:grid-cols-2">
                    <div className="flex min-h-11 items-center justify-between rounded-xl border border-[#171A20]/12 px-4">
                      <span><strong className="text-[#34383E]">Source 01</strong> · manufacturer specifications</span>
                      <Search className="size-3.5" />
                    </div>
                    <div className="flex min-h-11 items-center justify-between rounded-xl border border-[#171A20]/12 px-4">
                      <span><strong className="text-[#34383E]">Source 02</strong> · independent field test</span>
                      <Search className="size-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <CameraStillLife />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[90rem] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
          <KeysStillLife />
          <div className="lg:px-8">
            <ChapterLabel number="03" depth="Consequential · when depth earns it" />
            <h2 className="mt-7 max-w-[10ch] text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.055em] sm:text-7xl" style={condensed}>
              See the sides. Then make your call.
            </h2>
            <div className="mt-9 grid gap-5 rounded-[1.8rem] bg-white/80 p-6 sm:grid-cols-[12rem_1fr] sm:p-8">
              <div className="mx-auto w-full">
                <InstrumentRing value={62} label="Board lean" />
                <div className="mt-4 grid gap-2 text-left" aria-label="Three relevant AI advisors">
                  {[
                    ["Maya", "upside", "#C2802F"],
                    ["Rex", "downside", "#66707E"],
                    ["Sara", "third option", "#A06CA8"],
                  ].map(([name, lens, colour]) => (
                    <div className="flex items-center gap-2 text-xs" key={name}>
                      <span className="size-2.5 rounded-full" style={{ backgroundColor: colour }} />
                      <span><strong>{name}</strong> · AI advisor · {lens}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3154C8]">Synthesis</p>
                <p className="mt-3 text-2xl italic leading-snug" style={serif}>
                  “The new role fits the direction you want—if the travel cost is genuinely workable at home.”
                </p>
                <p className="mt-4 text-sm leading-6 text-[#545860]">
                  Three relevant perspectives surfaced the growth case, the strongest family objection, and the fact that would reverse the recommendation.
                </p>
              </div>
              <div className="border-t border-[#171A20]/12 pt-5 sm:col-span-2">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#696D74]">Your call</p>
                    <p className="mt-1 text-xl font-semibold">Accept the role · 68%</p>
                  </div>
                  <span className="text-xs font-medium text-[#696D74]">You—not Orria—seal it</span>
                </div>
                <label htmlFor="life-seal" className="sr-only">Your confidence in accepting the role</label>
                <input id="life-seal" type="range" min="0" max="100" defaultValue="68" className="mt-4 h-11 w-full accent-[#3154C8]" />
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#F5F3EE] px-4 py-3 text-sm">
                  <span><strong>Follow-up:</strong> after the first month</span>
                  <span className="text-[#696D74]">Outcome · process · follow-through · learning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="life-privacy" className="bg-[#3154C8] text-white">
          <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:py-28">
            <div>
              <div className="flex size-14 items-center justify-center rounded-full border border-white/30">
                <LockKeyhole className="size-6" />
              </div>
              <h2 className="mt-8 max-w-[12ch] text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.055em] sm:text-7xl" style={condensed}>
                Your decisions are not content.
              </h2>
            </div>
            <div className="space-y-4 lg:pt-24">
              {[
                "No feed, voting, comments, or public profile.",
                "Quick choices stay recent unless you choose to keep them.",
                "Sharing is a deliberate, reviewed, optionally redacted export.",
                "AI providers and the data sent to them are named before consent.",
              ].map((item) => (
                <div key={item} className="flex gap-3 border-t border-white/20 py-4 text-base leading-6">
                  <Check className="mt-0.5 size-5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
              <a href="/privacy" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4">
                Read the privacy promise <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="life-cta" className="relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32">
          <div className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-[5rem] border-[#E1A43D]/70" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl">
            <BookOpen className="mx-auto size-8 text-[#3154C8]" />
            <h2 className="mt-7 text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.06em] sm:text-8xl" style={condensed}>
              Bring the choice you have now.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-7 text-[#545860]">
              Orria meets it with the depth it deserves—and leaves the decision where it belongs.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#life-top" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#171A20] px-7 text-sm font-semibold text-white">
                Bring a choice <ArrowRight className="size-4" />
              </a>
              <span className="inline-flex min-h-11 items-center gap-2 px-4 text-sm font-medium text-[#545860]">
                <ShieldCheck className="size-4 text-[#3154C8]" /> Private by default
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
