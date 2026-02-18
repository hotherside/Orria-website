"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
} from "@/lib/animation-variants";
import { WaitlistForm } from "@/components/shared/WaitlistForm";
import { FloatingElements } from "@/components/shared/FloatingElements";
import { EnterpriseMockup } from "@/components/potentials/EnterpriseMockup";
import { GovernmentMockup } from "@/components/potentials/GovernmentMockup";
import { ComplianceMockup } from "@/components/potentials/ComplianceMockup";
import { EducationMockup } from "@/components/potentials/EducationMockup";
import {
  Check,
  ArrowRight,
  Building2,
  Landmark,
  Shield,
  BookOpen,
  Eye,
  Briefcase,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────── */

const b2bUseCases = [
  {
    icon: Building2,
    title: "Enterprise Decision Logs",
    accent: "#0891B2",
    description: "Organizations log key strategic decisions \u2014 from hiring and M&A to product pivots \u2014 creating a living institutional memory. Teams can search, learn from, and build on the decisions that shaped the company.",
    features: [
      "Private team-wide decision journals",
      "Searchable institutional decision history",
      "AI-assisted post-mortem and retrospectives",
      "Decision quality analytics for leadership",
    ],
    Mockup: EnterpriseMockup,
  },
  {
    icon: Landmark,
    title: "Government & Public Sector Transparency",
    accent: "#C4704B",
    description: "Departments and agencies log policy decisions, budget allocations, and administrative choices \u2014 optionally shared with the public. A verifiable record of how and why decisions were made, building trust at every level of governance.",
    features: [
      "Public-facing decision transparency portals",
      "Inter-department decision visibility",
      "Audit-ready decision trails with reasoning",
      "Administration change documentation",
    ],
    Mockup: GovernmentMockup,
  },
  {
    icon: Shield,
    title: "Compliance & Risk Management",
    accent: "#E5A53D",
    description: "Regulated industries need to show their work. Orria\u2019s decision logs with AI-generated reasoning summaries create a defensible audit trail \u2014 reducing liability and improving governance.",
    features: [
      "Timestamped, immutable decision records",
      "AI-generated reasoning documentation",
      "Risk assessment perspectives built-in",
      "Exportable compliance reports",
    ],
    Mockup: ComplianceMockup,
  },
  {
    icon: BookOpen,
    title: "Education & Leadership Development",
    accent: "#C4704B",
    description: "Universities, business schools, and corporate training programs use decision journals to develop critical thinking. Students and emerging leaders learn to structure decisions, consider multiple perspectives, and reflect on outcomes.",
    features: [
      "Structured decision-making curriculum tool",
      "Cohort-based reflection and peer feedback",
      "Leadership pattern analytics over time",
      "Case study generation from real decisions",
    ],
    Mockup: EducationMockup,
  },
];

const expansionPaths = [
  {
    phase: "Now",
    title: "Consumer \u2014 D2C",
    description: "Personal decision companion for individuals navigating life\u2019s crossroads. Voice-first, AI-powered, journal-backed.",
    color: "#0891B2",
  },
  {
    phase: "Next",
    title: "Teams & Organizations",
    description: "Private team decision journals. Shared institutional wisdom. Decision quality dashboards for leadership.",
    color: "#C4704B",
  },
  {
    phase: "Then",
    title: "Public Sector & Governance",
    description: "Transparency portals for departments. Public-facing decision logs. Audit-ready governance records.",
    color: "#E5A53D",
  },
  {
    phase: "Beyond",
    title: "Platform & API",
    description: "Decision intelligence infrastructure. Embeddable thinking tools. Anonymized decision data insights.",
    color: "#C4704B",
  },
];

const eagerViewport = { once: true, amount: 0.05 };

/* ── Page ─────────────────────────────────────────── */

export default function FutureStatePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-cream-100" />
        <FloatingElements count={8} colors={["#C4704B", "#E5A53D", "#E5A53D"]} className="opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Future State
            </p>
            <h1
              className="text-display text-text-primary mb-6"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Beyond personal.
              <br />
              <span className="italic text-cyan-600">Into institutions.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed mb-2">
              Orria starts as a personal thinking partner. But decisions don&apos;t just shape individuals — they shape teams, organizations, and nations. Here&apos;s where we&apos;re going.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Why This Matters ── */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="text-center mb-14"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              The Bigger Problem
            </p>
            <h2
              className="text-heading text-text-primary mb-4"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Decisions don&apos;t just shape people.
              <br />
              <span className="italic text-cyan-600">They shape organizations and nations.</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-base leading-relaxed">
              Every company, government department, and institution makes thousands of consequential decisions — and almost none of them are captured, searchable, or learnable. The institutional knowledge walks out the door every time someone leaves. Orria changes that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── B2B Use Cases with Mockups ── */}
      <section className="py-16 md:py-24 bg-cream-50 relative overflow-hidden">
        <FloatingElements count={5} colors={["#C4704B", "#E5A53D", "#E5A53D"]} className="opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="text-center mb-12"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Use Cases
            </p>
            <h2
              className="text-heading text-text-primary"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              What Orria looks like <span className="italic">at scale.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="space-y-6"
          >
            {b2bUseCases.map((useCase) => (
              <motion.div
                key={useCase.title}
                variants={staggerItem}
                className="bg-white rounded-2xl border border-cream-300/50 shadow-soft hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${useCase.accent}12` }}
                      >
                        <useCase.icon size={24} style={{ color: useCase.accent }} />
                      </div>
                      <h3
                        className="text-text-primary font-semibold text-lg"
                        style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
                      >
                        {useCase.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-5">
                      {useCase.description}
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {useCase.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5">
                          <Check size={14} style={{ color: useCase.accent }} className="flex-shrink-0" />
                          <span className="text-text-secondary text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-cream-50/60 p-6 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-cream-200/50">
                    <useCase.Mockup />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Transparency callout */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="mt-10 bg-white rounded-2xl border border-cyan-500/15 p-8 max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Eye size={20} className="text-cyan-600" />
              </div>
              <div>
                <h4 className="text-text-primary font-semibold mb-2">The Transparency Thesis</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Imagine a world where a government department shares its key policy decisions publicly — not just the outcome, but the reasoning, the perspectives considered, and the trade-offs weighed. Where a company&apos;s leadership logs show not just what was decided, but <span className="font-semibold text-text-primary">how they think</span>. Orria makes this possible: structured, searchable, and verifiable decision records that build institutional trust over time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Expansion Path ── */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="text-center mb-14"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Growth Path
            </p>
            <h2
              className="text-heading text-text-primary"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Consumer first.
              <br />
              <span className="italic">Platform eventually.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="grid grid-cols-1 md:grid-cols-4 gap-5"
          >
            {expansionPaths.map((path, i) => (
              <motion.div
                key={path.phase}
                variants={staggerItem}
                className="relative bg-white rounded-2xl p-6 border border-cream-300/50 shadow-soft"
              >
                <div
                  className="text-[10px] font-bold uppercase tracking-widest mb-3 px-2.5 py-1 rounded-full inline-block"
                  style={{ backgroundColor: `${path.color}12`, color: path.color }}
                >
                  {path.phase}
                </div>
                <h3
                  className="text-text-primary font-semibold text-base mb-2"
                  style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
                >
                  {path.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">{path.description}</p>

                {i < expansionPaths.length - 1 && (
                  <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-cream-400">
                    <ArrowRight size={14} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Revenue Model ── */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="text-center mb-14"
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Business Model
            </p>
            <h2
              className="text-heading text-text-primary"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Multiple revenue streams. <span className="italic">Clear path to scale.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={staggerItem} className="bg-white rounded-2xl p-7 border border-cream-300/50 shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                <Briefcase size={20} className="text-cyan-600" />
              </div>
              <h3 className="text-text-primary font-semibold mb-2">Consumer Subscription</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Freemium with Orria Pro at $7.99 AUD/mo ($4.99 USD). Unlimited AI conversations, advanced insights, extended journal history.
              </p>
              <p className="text-xs font-semibold text-cyan-600">From $7.99 AUD/mo per user</p>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white rounded-2xl p-7 border border-cream-300/50 shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                <Building2 size={20} style={{ color: "#C4704B" }} />
              </div>
              <h3 className="text-text-primary font-semibold mb-2">Enterprise Licenses</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Per-seat pricing for organizations. Team decision journals, admin dashboards, SSO, and data residency controls.
              </p>
              <p className="text-xs font-semibold" style={{ color: "#C4704B" }}>Per-seat SaaS pricing</p>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white rounded-2xl p-7 border border-cream-300/50 shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                <Landmark size={20} style={{ color: "#E5A53D" }} />
              </div>
              <h3 className="text-text-primary font-semibold mb-2">Public Sector Contracts</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Government and institutional licensing for transparency portals, department-wide decision logs, and compliance tooling.
              </p>
              <p className="text-xs font-semibold" style={{ color: "#E5A53D" }}>Contract-based</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="py-16 md:py-24 bg-cream-100 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
          >
            <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-6">
              The Vision
            </p>
            <h2
              className="text-heading text-text-primary mb-6"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              A world where no one faces
              <br />
              <span className="italic text-cyan-600">their biggest decisions alone.</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto leading-relaxed mb-4">
              We started building Orria on January 18th, 2026. In under a month, we shipped three major versions, resolved 162 QA items, and built a platform that works across the full decision lifecycle.
            </p>
            <p className="text-text-muted text-sm max-w-xl mx-auto leading-relaxed">
              Every career pivot, every relocation, every relationship crossroad, every policy debate, every strategic bet — these aren&apos;t just features we built. They&apos;re decisions we&apos;ve wrestled with. Orria exists because the world needs a better way to think.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cream-50 to-cream-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
          >
            <h2
              className="text-heading text-text-primary mb-4"
              style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
            >
              Interested in bringing Orria
              <br />
              <span className="italic">to your organization?</span>
            </h2>
            <p className="text-text-secondary mb-6">
              We&apos;re exploring partnerships, pilots, and investment opportunities.
            </p>
            <a
              href="mailto:hello@orria.app"
              className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition-colors shadow-md mb-8"
            >
              Let&apos;s Talk
            </a>
            <div className="pt-8 border-t border-cream-300">
              <p className="text-text-muted text-sm mb-4">
                Or join the waitlist for early access
              </p>
              <WaitlistForm variant="section" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
