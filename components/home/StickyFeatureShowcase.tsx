"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { PhoneMockup } from "@/components/shared/PhoneMockup";
import { CanvasDemo } from "@/components/home/showcase/CanvasDemo";
import { RoundtableDemo } from "@/components/home/showcase/RoundtableDemo";
import { CrystallizeDemo } from "@/components/home/showcase/CrystallizeDemo";
import { CommunityDemo } from "@/components/home/showcase/CommunityDemo";
import { InsightsDemo } from "@/components/home/showcase/InsightsDemo";
import { JournalDemo } from "@/components/home/showcase/JournalDemo";
import { ReflectionDemo } from "@/components/home/showcase/ReflectionDemo";
import {
  Mic,
  Users,
  Sparkles,
  Globe,
  BarChart3,
  BookOpen,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    kicker: "Start Here",
    icon: Mic,
    title: "Just talk.",
    description:
      "Say what\u2019s weighing on you. Orria listens, structures your thoughts, and gives you two paths \u2014 log a clear decision, or talk it through deeper with AI.",
    Demo: CanvasDemo,
    color: "#0891B2",
  },
  {
    kicker: "Go Deeper",
    icon: Users,
    title: "Break your echo chamber.",
    description:
      "Four AI personalities with distinct worldviews challenge your blind spots. They don\u2019t just talk to you \u2014 they react to each other in a live roundtable.",
    Demo: RoundtableDemo,
    color: "#6366F1",
  },
  {
    kicker: "Get Clarity",
    icon: Sparkles,
    title: "See the full picture.",
    description:
      "Orria synthesizes everything \u2014 your thoughts, the perspectives, the trade-offs \u2014 into crystallized clarity. Make the call with confidence.",
    Demo: CrystallizeDemo,
    color: "#E5A53D",
  },
  {
    kicker: "Get Perspective",
    icon: Globe,
    title: "Real people. Real perspective.",
    description:
      "AI is powerful, but some things need real human perspective. Share your decision anonymously and get votes, comments, and hard-won wisdom from people who\u2019ve been there.",
    Demo: CommunityDemo,
    color: "#C4704B",
  },
  {
    kicker: "Grow Wiser",
    icon: BarChart3,
    title: "Discover your patterns.",
    description:
      "See how you decide across topics, track your confidence over time, and uncover insights about your decision-making style. Every choice becomes part of your story.",
    Demo: InsightsDemo,
    color: "#9333EA",
  },
  {
    kicker: "Your Story",
    icon: BookOpen,
    title: "Your decision passport.",
    description:
      "Every decision you make \u2014 logged, searchable, and yours forever. A living journal that turns scattered choices into the story of how you became you.",
    Demo: JournalDemo,
    color: "#C4704B",
  },
  {
    kicker: "Look Back",
    icon: RotateCcw,
    title: "Close the loop.",
    description:
      "Come back months later. Would you make the same choice? Reflect, track your confidence over time, and celebrate your milestones.",
    Demo: ReflectionDemo,
    color: "#E5A53D",
  },
];

export function StickyFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

  const goTo = useCallback((idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  }, [activeIndex]);

  const goNext = useCallback(() => {
    if (activeIndex < features.length - 1) {
      setDirection(1);
      setActiveIndex((i) => i + 1);
    }
  }, [activeIndex]);

  const goPrev = useCallback(() => {
    if (activeIndex > 0) {
      setDirection(-1);
      setActiveIndex((i) => i - 1);
    }
  }, [activeIndex]);

  const ActiveDemo = features[activeIndex].Demo;
  const activeFeature = features[activeIndex];
  const ActiveIcon = activeFeature.icon;

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  const phoneVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      scale: 0.97,
    }),
  };

  return (
    <section id="product" className="bg-cream-100 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header — Introducing Orria + How It Works merged */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-500 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Introducing
          </p>
          <h2
            className="text-text-primary italic leading-none tracking-[-0.03em]"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              fontWeight: 400,
            }}
          >
            Orria.
          </h2>
          <p className="text-text-secondary text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Your AI decision companion. Think through what matters.
            <br className="hidden md:block" />{" "}
            See every angle. Remember what shaped you.
          </p>
        </motion.div>

        {/* Segmented progress bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-2">
            {features.map((f, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="flex-1 group relative"
              >
                {/* Bar segment */}
                <div
                  className="h-1 rounded-full transition-all duration-300 overflow-hidden"
                  style={{ backgroundColor: "#EDE8DC" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    initial={false}
                    animate={{
                      width: i <= activeIndex ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ backgroundColor: i <= activeIndex ? f.color : "#EDE8DC" }}
                  />
                </div>
                {/* Label below */}
                <span
                  className={`block text-[10px] md:text-xs mt-2 font-medium transition-colors duration-200 ${
                    i === activeIndex ? "" : "text-text-muted"
                  }`}
                  style={i === activeIndex ? { color: f.color } : undefined}
                >
                  {f.kicker}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main content — phone + text side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[500px] md:min-h-[600px]">
          {/* Left: Phone mockup */}
          <div className="flex justify-center order-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={phoneVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <PhoneMockup size="lg" frameTheme="light">
                  <ActiveDemo />
                </PhoneMockup>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Feature text + navigation */}
          <div className="order-2 flex flex-col justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Kicker */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${activeFeature.color}15` }}
                  >
                    <ActiveIcon size={16} style={{ color: activeFeature.color }} />
                  </div>
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: activeFeature.color }}
                  >
                    {activeFeature.kicker}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-3xl md:text-4xl font-semibold text-text-primary mb-4 leading-tight"
                  style={{
                    fontFamily: "var(--font-playfair), Playfair Display, serif",
                  }}
                >
                  {activeFeature.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-md">
                  {activeFeature.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={goPrev}
                disabled={activeIndex === 0}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-cream-200"
                style={{ borderColor: "#EDE8DC" }}
              >
                <ChevronLeft size={18} style={{ color: "#2D2926" }} />
              </button>
              <button
                onClick={goNext}
                disabled={activeIndex === features.length - 1}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
                style={{ backgroundColor: activeFeature.color }}
              >
                <ChevronRight size={18} className="text-white" />
              </button>
              <span className="ml-2 text-sm text-text-muted tabular-nums">
                {activeIndex + 1} / {features.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
