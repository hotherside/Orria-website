"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportSettings } from "@/lib/animation-variants";
import {
  Briefcase,
  Heart,
  Activity,
  Wallet,
  Baby,
  Home,
  Plane,
  Users,
  Rocket,
  Clock,
  Brain,
  Palette,
  Scale,
  Lightbulb,
  Church,
  Globe,
  TreePine,
  Compass,
  GraduationCap,
  Sparkles,
  Infinity,
} from "lucide-react";

const row1Categories = [
  { icon: Briefcase, name: "Career", example: "Should I take the new role?", color: "#0891B2" },
  { icon: Heart, name: "Relationships", example: "Are we ready for this step?", color: "#C4704B" },
  { icon: Activity, name: "Health", example: "Which treatment path?", color: "#6366F1" },
  { icon: GraduationCap, name: "Education", example: "MBA now or wait?", color: "#9333EA" },
  { icon: Wallet, name: "Finances", example: "Invest or pay off debt?", color: "#E5A53D" },
  { icon: Baby, name: "Parenting", example: "Which school for the kids?", color: "#0891B2" },
  { icon: Home, name: "Housing", example: "Rent or buy?", color: "#C4704B" },
  { icon: Plane, name: "Travel", example: "Move abroad or stay?", color: "#6366F1" },
  { icon: Users, name: "Friendships", example: "Is this friendship worth saving?", color: "#9333EA" },
  { icon: Rocket, name: "Entrepreneurship", example: "Quit my job and go all in?", color: "#E5A53D" },
  { icon: Clock, name: "Retirement", example: "Am I ready to step back?", color: "#64748B" },
];

const row2Categories = [
  { icon: Brain, name: "Mental Health", example: "Should I try therapy?", color: "#6366F1" },
  { icon: Compass, name: "Lifestyle", example: "City life or countryside?", color: "#0891B2" },
  { icon: Scale, name: "Legal", example: "Is this worth pursuing?", color: "#64748B" },
  { icon: Palette, name: "Creativity", example: "Pursue art full-time?", color: "#9333EA" },
  { icon: Church, name: "Faith & Values", example: "What matters most to me?", color: "#C4704B" },
  { icon: Globe, name: "Community", example: "How can I contribute?", color: "#0891B2" },
  { icon: TreePine, name: "Family", example: "Move closer to parents?", color: "#E5A53D" },
  { icon: Lightbulb, name: "Identity", example: "Is this really who I am?", color: "#6366F1" },
  { icon: Sparkles, name: "Self-Growth", example: "What should I invest in next?", color: "#9333EA" },
];

function CategoryPill({ icon: Icon, name, example, color }: {
  icon: React.ElementType;
  name: string;
  example: string;
  color: string;
}) {
  return (
    <div className="min-w-[200px] md:min-w-[220px] rounded-2xl p-4 bg-white border border-cream-300/50 shadow-soft flex-shrink-0 hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-center gap-2.5 mb-2">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${color}12` }}
        >
          <Icon size={14} style={{ color }} />
        </div>
        <span className="text-sm font-semibold" style={{ color: "#2D2926" }}>{name}</span>
      </div>
      <p className="text-xs leading-relaxed italic" style={{ color: "#9C948A" }}>
        &ldquo;{example}&rdquo;
      </p>
    </div>
  );
}

function InfinityPill() {
  return (
    <div
      className="min-w-[220px] rounded-2xl p-4 flex-shrink-0 flex items-center justify-center gap-3"
      style={{
        background: "linear-gradient(135deg, #0891B212, #E5A53D12, #C4704B12)",
        border: "1px solid #0891B220",
      }}
    >
      <Infinity size={18} className="text-cyan-500" />
      <span
        className="text-sm font-semibold italic"
        style={{ color: "#0891B2", fontFamily: "var(--font-playfair), Playfair Display, serif" }}
      >
        And thousands more...
      </span>
    </div>
  );
}

export function CategoriesSection() {
  return (
    <section className="pt-10 md:pt-14 pb-14 md:pb-20 bg-cream-100 overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Every Crossroad, Covered
          </p>
          <h2
            className="text-display text-text-primary"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            From career moves to life changes.
            <br />
            <span className="italic text-cyan-600">And thousands more.</span>
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-xl mx-auto">
            Whatever keeps you up at night, Orria has your back.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="mb-5">
        <div className="animate-scroll-left flex gap-4 w-max">
          {/* Duplicate for seamless loop */}
          {[...row1Categories, ...row1Categories].map((cat, i) => (
            <CategoryPill key={`r1-${i}`} {...cat} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div>
        <div className="animate-scroll-right flex gap-4 w-max">
          {[...row2Categories, { icon: Infinity, name: "", example: "", color: "" }, ...row2Categories, { icon: Infinity, name: "", example: "", color: "" }].map((cat, i) => {
            if (cat.name === "") {
              return <InfinityPill key={`inf-${i}`} />;
            }
            return <CategoryPill key={`r2-${i}`} {...cat} />;
          })}
        </div>
      </div>

      {/* Bottom callout */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="max-w-4xl mx-auto px-6 text-center mt-10"
      >
        <p className="text-text-secondary text-base">
          <span className="text-text-primary font-semibold">~35,000 decisions per person, every day.</span>{" "}
          We built Orria for the ones that matter.
        </p>
      </motion.div>
    </section>
  );
}
