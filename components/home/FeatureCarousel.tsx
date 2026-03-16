"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect, useRef } from "react";
import { PhoneMockup } from "@/components/shared/PhoneMockup";
import { CaptureDemo } from "@/components/home/showcase/CaptureDemo";
import { DepthForkDemo } from "@/components/home/showcase/DepthForkDemo";
import { PerspectivesDemo } from "@/components/home/showcase/PerspectivesDemo";
import { CrystallizeDemo } from "@/components/home/showcase/CrystallizeDemo";
import { YourStoryDemo } from "@/components/home/showcase/YourStoryDemo";
import {
  Mic,
  GitFork,
  Users,
  Diamond,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    kicker: "Capture",
    icon: Mic,
    title: "Say it. We\u2019ll shape it.",
    description:
      "Speak or type whatever you\u2019re thinking. No forms, no templates. AI instantly structures your thoughts into a clear decision with options.",
    Demo: CaptureDemo,
    color: "#0891B2",
  },
  {
    kicker: "Your Depth",
    icon: GitFork,
    title: "Quick log or deep conversation.",
    description:
      "Ready to decide? Create the decision and move on. Still thinking? Talk it through with Orria \u2014 your AI thinking companion who asks the right questions.",
    Demo: DepthForkDemo,
    color: "#9333EA",
  },
  {
    kicker: "Perspectives",
    icon: Users,
    title: "Four minds. One table.",
    description:
      "Community research shows what people generally think. Then Maya, Liam, Sara, and Rex debate your decision with cross-fire rebuttals \u2014 showing you angles you\u2019d miss alone.",
    Demo: PerspectivesDemo,
    color: "#6366F1",
  },
  {
    kicker: "Crystallize",
    icon: Diamond,
    title: "From thought to clarity.",
    description:
      "After the conversation, Orria distills everything \u2014 your thoughts, the debate, every trade-off \u2014 into one clear summary card. You decide with confidence.",
    Demo: CrystallizeDemo,
    color: "#C4704B",
  },
  {
    kicker: "Your Story",
    icon: BookOpen,
    title: "Your autobiography in decisions.",
    description:
      "Every decision becomes a journal entry. Months later, come back \u2014 rate your confidence, record your reflection, and celebrate decision milestones.",
    Demo: YourStoryDemo,
    color: "#E5A53D",
  },
];

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

const SWIPE_THRESHOLD = 50;
const SWIPE_VELOCITY = 500;

export function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hasSwiped, setHasSwiped] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > activeIndex ? 1 : -1);
      setActiveIndex(idx);
    },
    [activeIndex]
  );

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

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const activeFeature = features[activeIndex];
  const ActiveDemo = activeFeature.Demo;
  const ActiveIcon = activeFeature.icon;

  return (
    <section
      ref={sectionRef}
      id="product"
      className="py-14 md:py-20 transition-colors duration-500"
      style={{ backgroundColor: `${activeFeature.color}05` }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
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
            Your AI thinking companion. Open a blank canvas, get perspectives
            <br className="hidden md:block" /> from four AI personalities, and
            build a journal of the choices that shape your life.
          </p>
        </motion.div>

        {/* Segmented progress bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="flex gap-2">
            {features.map((f, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="flex-1 group relative min-w-0"
              >
                <div
                  className="h-1 rounded-full transition-all duration-300 overflow-hidden"
                  style={{ backgroundColor: "#E5E7EB" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    initial={false}
                    animate={{
                      width: i <= activeIndex ? "100%" : "0%",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    style={{
                      backgroundColor: i <= activeIndex ? f.color : "#E5E7EB",
                    }}
                  />
                </div>
                <span
                  className={`block text-[10px] md:text-xs mt-2 font-medium transition-colors duration-200 truncate ${
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

        {/* Main content — phone + text with swipe */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (
              info.offset.x < -SWIPE_THRESHOLD ||
              info.velocity.x < -SWIPE_VELOCITY
            ) {
              goNext();
              setHasSwiped(true);
            } else if (
              info.offset.x > SWIPE_THRESHOLD ||
              info.velocity.x > SWIPE_VELOCITY
            ) {
              goPrev();
              setHasSwiped(true);
            }
          }}
          className="relative cursor-grab active:cursor-grabbing"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[500px] md:min-h-[600px]">
            {/* Phone mockup */}
            <div className="flex justify-center order-1">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={phoneVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {/* md+ gets lg, mobile gets md */}
                  <div className="hidden md:block">
                    <PhoneMockup size="lg" frameTheme="light">
                      <ActiveDemo />
                    </PhoneMockup>
                  </div>
                  <div className="md:hidden">
                    <PhoneMockup size="md" frameTheme="light">
                      <ActiveDemo />
                    </PhoneMockup>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Feature text + navigation */}
            <div className="order-2 flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {/* Kicker */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${activeFeature.color}15`,
                      }}
                    >
                      <ActiveIcon
                        size={16}
                        style={{ color: activeFeature.color }}
                      />
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
                      fontFamily:
                        "var(--font-playfair), Playfair Display, serif",
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
                  style={{ borderColor: "#E5E7EB" }}
                >
                  <ChevronLeft size={18} style={{ color: "#111111" }} />
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

              {/* Swipe hint — mobile only, hidden after first swipe */}
              {!hasSwiped && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="md:hidden text-[11px] text-text-muted mt-4 flex items-center gap-1.5"
                >
                  <ChevronLeft size={12} />
                  Swipe to explore
                  <ChevronRight size={12} />
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
