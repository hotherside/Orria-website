"use client";

import { motion } from "framer-motion";
import { PhoneMockup } from "@/components/shared/PhoneMockup";
import { CanvasDemo } from "@/components/home/showcase/CanvasDemo";
import { StructureDemo } from "@/components/home/showcase/StructureDemo";
import { DepthForkDemo } from "@/components/home/showcase/DepthForkDemo";
import { RoundtableDemo } from "@/components/home/showcase/RoundtableDemo";
import { Mic, Sparkles, GitFork, Users } from "lucide-react";

const steps = [
  {
    kicker: "Canvas",
    icon: Mic,
    title: "Say what\u2019s on your mind.",
    description:
      "Speak or type whatever you\u2019re thinking. No forms, no templates. Orria listens to whatever you\u2019re thinking through.",
    Demo: CanvasDemo,
    color: "#0891B2",
  },
  {
    kicker: "Structure",
    icon: Sparkles,
    title: "AI finds the shape of it.",
    description:
      "In seconds, AI organizes your scattered thoughts into a clear decision with structured options and context.",
    Demo: StructureDemo,
    color: "#E5A53D",
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
      "Maya encourages. Liam analyzes. Sara grounds. Rex challenges. Four AI thinking partners weigh in \u2014 showing you angles you might not see on your own.",
    Demo: RoundtableDemo,
    color: "#6366F1",
  },
];

export function CompactFlowShowcase() {
  return (
    <section id="product" className="bg-cream-100 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
            <br className="hidden md:block" />{" "}
            from four AI personalities, and build a journal of the choices that shape your life.
          </p>
        </motion.div>

        {/* Progress indicator */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="flex gap-2">
            {steps.map((step) => (
              <div key={step.kicker} className="flex-1">
                <div
                  className="h-1 rounded-full"
                  style={{ backgroundColor: `${step.color}30` }}
                >
                  <div
                    className="h-full rounded-full w-full"
                    style={{ backgroundColor: step.color }}
                  />
                </div>
                <span
                  className="block text-[10px] md:text-xs mt-2 font-medium text-center"
                  style={{ color: step.color }}
                >
                  {step.kicker}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps — scroll-triggered */}
        <div className="space-y-20 md:space-y-28">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={step.kicker}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  isEven ? "" : "md:[direction:rtl]"
                }`}
              >
                {/* Phone mockup */}
                <div className={`flex justify-center ${isEven ? "" : "md:[direction:ltr]"}`}>
                  <PhoneMockup size="lg" frameTheme="light">
                    <step.Demo />
                  </PhoneMockup>
                </div>

                {/* Text */}
                <div className={isEven ? "" : "md:[direction:ltr]"}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <Icon size={16} style={{ color: step.color }} />
                    </div>
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: step.color }}
                    >
                      Step {i + 1} &middot; {step.kicker}
                    </span>
                  </div>

                  <h3
                    className="text-3xl md:text-4xl font-semibold text-text-primary mb-4 leading-tight"
                    style={{
                      fontFamily: "var(--font-playfair), Playfair Display, serif",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
