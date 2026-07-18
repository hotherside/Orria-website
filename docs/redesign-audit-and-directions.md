# Orria website redesign audit and direction brief

Status: direction review, before production redesign
Source of truth: `../docs/product-design-contract.md`
Reviewed: 18 July 2026

## Executive verdict

The current site is polished but markets an older and less differentiated Orria. It presents a generic “AI thinking companion” for major life crossroads, with four personalities and a permanent journal as the main story. The accepted product is more useful and more ownable: a private decision companion that begins with one simple capture, matches the depth to the choice, gives a conditional read, leaves the call with the user, keeps only what matters, and returns when reflection is useful.

The redesign should not be a cosmetic reskin. It needs a new consumer narrative, a smaller information architecture, a verified conversion state, product demonstrations built from the current Instrument system, and a much quieter motion language.

## Candid audit

### Positioning

**Current state**

- Metadata and homepage lead with “Your AI thinking companion” and “four AI personalities.” This is familiar category language rather than a defensible product position (`app/layout.tsx`, `components/home/HeroSection.tsx`).
- “Think it through. Remember what shaped you.” is a strong brand line, but the surrounding story makes Orria feel reserved for identity-shaping crossroads.
- The Board is presented as the product. The accepted product and implemented `DecisionJourneyPlan` treat it as an earned intervention: hidden for quick choices, optional for comparisons, recommended for consequential decisions.
- Research, Future State, and Potentials foreground markets, institutions, government, APIs, and enterprise revenue. Those are explicit current non-goals.

**Required shift**

Lead with the decision, not the AI: private help for choices of any size, with adaptive depth and user-owned judgment as the differentiator.

### Narrative

**Current state**

The homepage sequence is opportunity counters → feature carousel → four advisors → category marquee → pricing → waitlist. It inventories features, but does not demonstrate the complete transformation.

The story omits or weakens:

- one universal capture adapting to quick, researched, or consequential depth;
- a complete Orria’s read: lean, reasons, strongest objection, assumptions, reversal condition, and uncertainty;
- evidence and citations for current-fact comparisons;
- the visual distinction between Orria’s read and the user’s call;
- the follow-up horizon and the four reflection dimensions;
- recent versus kept decisions;
- privacy as a product benefit at the point of trust.

**Required shift**

Use one real decision to demonstrate immediate value, then widen the range. Show the read before explaining the machinery. Earn the Board. End with the compounding private record.

### Information architecture

**Current state**

- Primary navigation is Home / About / Research / Future State. It reads like a founder or investor deck.
- Product, How it works, and Privacy are not primary destinations.
- A floating table of contents duplicates fixed navigation and adds another persistent layer.
- `/future` and `/potentials` duplicate out-of-scope institutional material. `/research` mixes consumer rationale, competitor claims, therapy comparisons, market sizing, and launch milestones.
- `/community-guidelines` now correctly says Orria is not a community, but its route name preserves obsolete product history.

**Recommended consumer IA**

1. Product
2. How it works
3. Privacy
4. About
5. Primary CTA: verified release-state copy only

Support, Privacy, Terms, provider disclosure, and account/data controls stay in the footer. Retire Research, Future State, and Potentials from consumer navigation; archive or noindex institutional material until it becomes strategically relevant.

| Current route | Disposition | Reason |
| --- | --- | --- |
| `/` | Retain and redesign | Becomes the complete consumer product story. |
| `/about` | Retain and rewrite | Focus on the product belief, privacy, and responsible limits. |
| `/privacy`, `/terms`, `/support` | Retain | Essential trust and support destinations; verify every release-state claim. |
| `/research` | Archive and noindex | Useful internal rationale, but the current market and competitor narrative should not sit in consumer navigation. |
| `/future`, `/potentials` | Archive and noindex | Institutional, government, enterprise, and API narratives are current non-goals. |
| `/community-guidelines` | Redirect to `/privacy` | The community model is retired; preserve any relevant sharing guidance inside privacy. |

### Conversion and trust

**Current state**

- The homepage repeats a waitlist CTA, yet Support tells users to download from the App Store. The actual release state is not coherent.
- Pricing and launch claims conflict across routes.
- Fallback initials beside a live count look like synthetic social proof—especially risky for a privacy product.
- The waitlist success flow immediately asks for more personal data and can visually imply a successful name save after a failed request.
- The strongest trust facts—private by default, no public feed, named AI providers, user-reviewed export—live mainly in legal copy.

**Required shift**

Use one verified conversion state site-wide. Remove unverified proof and pricing. Put privacy and data behavior beside the CTA. Never allow an error to look like success.

### Copy

**Keep**

- “Think it through. Remember what shaped you.”
- “What’s on your mind?”
- “Orria’s read,” “Your call,” “Seal,” and “Private reflection, not a grade.”
- “Decisions begin as thoughts, not forms.”

**Rewrite or remove**

- Repeated “crossroads,” “shape your story,” “clarity, perspective, and confidence,” and “AI thinking companion.”
- “Four perspectives on every choice.”
- “AI instantly structures,” which overpromises certainty and centers the system.
- “Orria never pushes a decision,” which undersells the conditional recommendation contract.
- The theatrical 35,000 / 73% / 0 counters and unsourced competitive absolutes.
- Product comparison language based on “what people think” rather than current attributable evidence.
- Health, legal, and financial category examples without responsible limits.

### Visual design

**Current state**

- Inter + Playfair, clean white + cyan, rounded white cards, pills, multi-colour icon tiles, and soft shadows form a competent but generic AI landing-page system.
- The site conflicts with the implemented iOS Instrument: warm greige, muted cobalt, borderless surfaces, one honest numeral, and restrained Instrument Serif.
- Serif appears on nearly every marketing headline; the product reserves it for moments when Orria synthesises or reflects.
- Orria’s most ownable object—the ring—is absent from the website’s main narrative.
- Product demonstrations are visually small and use retired cyan styling. Old public screenshots include Community, Shared decisions, manual modes, and “Share with community”; they must not be reused.

**Required shift**

Use the implemented product as the brand source: warm quiet canvas, restrained cobalt, ring, progressive depth, serif only for Orria’s voice, and purposeful material hierarchy.

### Responsiveness

**Current state**

- At 1280 × 720, the homepage is roughly 6,465px long and relies on many scroll-triggered reveals; multiple sections were visibly washed out mid-transition during review.
- At 390 × 844, the hero copy and CTA fit, but the primary product demonstration is removed. Mobile visitors receive less evidence at the moment they most need it.
- The category marquee duplicates large content sets and creates a long, repetitive mobile passage.
- The five-stage product showcase uses tall fixed compositions and can become a long scroll corridor.
- Fixed navigation plus a second fixed table of contents reduces usable canvas and can cover content.

**Required shift**

Keep core product proof in the first mobile viewport. Design 320 / 375 / 768 / 1024 / 1440 deliberately, avoid essential hidden content and horizontal overflow, and prefer compact one-canvas compositions over stacked card corridors.

### Accessibility

**Positive foundations**

- Global `:focus-visible` styling exists.
- A global reduced-motion rule exists.
- Main navigation and waitlist inputs have basic accessible names.

**Findings**

- Muted text `#9CA3AF` on white is below AA for normal text; white text on cyan `#0891B2` is also too weak for small copy.
- Several controls are below the 44px target: compact desktop nav items, the mobile menu control, carousel arrows, modal close, and miniature demo controls.
- Product demos use 7–11px text and low-opacity colour, making “proof” unreadable to many visitors.
- Duplicated marquee content remains duplicated in the accessibility tree.
- Pointer hover reveals do not have equivalent touch and keyboard behavior.
- The success modal needs robust dialog semantics, focus management, Escape handling, programmatic labels, and announced errors.
- The current reduced-motion CSS collapses all duration to `0.01ms`; JS timers and Motion loops still change content. Reduced motion should keep short fades and stop spatial movement, autoplay, and loops.

### Motion

**Verdict: block the current motion system from carrying into the redesign.**

The current system communicates “animated marketing page,” not “calm decision instrument.” It combines long entrance delays, blur/fade reveals, perpetual blobs, shimmer, floating particles, pulsing dots, rotating avatars, auto-advancing demos, bouncing arrows, and two infinite marquees.

Key issues:

- Most reveal variants last 500–1,200ms; core content frequently waits behind decoration.
- Navbar layout morphs use `transition-all` at 500ms and shrink interactive type to 11px.
- Hover motion is not consistently gated to fine pointers.
- Several animations drive layout properties such as width.
- Multiple perpetual 2–35s loops violate the product contract’s restraint.
- `FloatingElements` creates server/client hydration mismatches in the live app despite using deterministic values; browser logs show the mismatch on About, Research, Future, and Potentials.

The replacement language should follow the native product: immediate press feedback, critically damped settle motion, one-shot ring drawing, breathing only for genuine thinking, direct manipulation for the seal, transform/opacity-led transitions, short fades under Reduce Motion, and no decorative loops on reflective surfaces.

## Recommended homepage story

1. **Bring one real choice** — product promise plus universal capture.
2. **Any decision, the right depth** — quick, researched comparison, consequential.
3. **Orria’s read** — lean, reasons, objection, assumptions, reversal, uncertainty, sources.
4. **The Board, when it earns a seat** — two or three relevant lenses, full Board available.
5. **Your call** — user-owned seal.
6. **Keep what matters** — Recent / Kept / Open / Sealed / Reflected.
7. **Return when useful** — horizon, commitment, outcome, process, follow-through, learning.
8. **Private by design** — no feed, public profile, comments, or voting; deliberate export only.
9. **Verified conversion state** — coherent CTA, FAQ, status, and provider truth.

## Direction A — The Quiet Instrument

Recommended system. Orria is a beautifully made instrument for thinking: compact, tactile, warm, and precise.

- Warm greige `#F0EFEB`, paper surface `#FBFAF8`, frosted `#E9E8E3`, ink `#1D1D21`, cobalt `#3F5BC6`.
- Operational sans for everything the user touches; serif only for Orria’s read and reflective language.
- Asymmetric hero with universal capture and a dominant ring reading.
- The ring grows from capture, becomes Board balance, and resolves into a sealed record.
- 180–420ms contact/settle motion; no ambient loops.

Strength: closest to product truth, strongest system coherence, lowest credibility and production risk.
Risk: restraint must be executed with exceptional typography and spacing or it will feel merely minimal.

## Direction B — The Private Ledger

Orria is a private archive of judgment: what the user knew, why they chose, and what followed.

- Parchment `#F6F2E9`, paper `#FFFCF7`, ink `#25231F`, ledger grey `#77736C`, archival cobalt `#334FAD`.
- Editorial columns, marginal dates, decision numbers, fine rules, and page-like rhythm.
- Capture / Considered / Called / Learned forms the story.
- Sources become footnotes; objection and uncertainty live in the margin; follow-up writes into the same record.
- A cobalt rule travels through the page and changes from open line to sealed mark.

Strength: makes private compounding value tangible and feels unusually mature.
Risk: can imply “serious decisions and journaling only” unless everyday and comparison examples lead early.

## Direction C — Decisions, In Life

Orria is a human campaign about the decisions inside ordinary life, expressed through three cinematic still-life chapters.

- Daylight chalk `#F5F3EE`, deep ink `#171A20`, cobalt `#3154C8`; restrained scenario accents.
- Bold compact sans headlines; serif only for one perceptive Orria line per story.
- Lunch demonstrates a quick recommendation. A camera demonstrates sourced comparison. Keys and an offer letter demonstrate Board, seal, and follow-up.
- One capture line persists through the chapters; the ring grows in complexity with the stakes.
- Product controls remain immediate while scene transitions provide the narrative motion.

Strength: most memorable brand world and clearest expression of “every size.”
Risk: highest art-direction, asset, responsive, and performance cost; product proof must not become secondary.

## Selection criteria

The winning direction must:

- communicate “private decision companion for choices of any size” within five seconds;
- show quick, comparison, and consequential paths without a mode picker;
- demonstrate the complete recommendation contract and adjacent sources;
- keep the user’s call visually dominant over Orria’s read;
- make the Board earned and variable;
- preserve ring, warm canvas, cobalt focus, restrained serif, and current product terminology;
- exclude community, gamification, unsupported calibration, investor TAM, enterprise, and API narratives;
- keep first-viewport product proof on mobile;
- meet WCAG AA, 44px targets, complete keyboard/focus/dialog semantics, and honest error states;
- stop autoplay, timers, loops, and spatial motion under Reduce Motion;
- keep functional content available before entrance animation finishes.

## Strategic recommendation

Choose **The Quiet Instrument** as the base system. If selected, borrow the three-scenario range narrative from **Decisions, In Life** and the then/now record continuity from **The Private Ledger** without blending their visual systems.
