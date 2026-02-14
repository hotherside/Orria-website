"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SolutionRevealSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll-linked blur reveal
  const blur = useTransform(scrollYProgress, [0.1, 0.4], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.4], [40, 0]);

  // Subtitle and subtext fade in later
  const subOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const subY = useTransform(scrollYProgress, [0.3, 0.5], [20, 0]);

  // Compute filter string from blur MotionValue
  const blurFilter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-44 flex items-center justify-center overflow-hidden bg-cream-50"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Kicker */}
        <motion.p
          style={{ opacity: subOpacity }}
          className="text-cyan-500 text-sm font-semibold uppercase tracking-[0.2em] mb-6"
        >
          Introducing
        </motion.p>

        {/* Main headline — blur reveal */}
        <motion.h2
          style={{
            opacity,
            y,
            fontFamily: "var(--font-playfair), Playfair Display, serif",
          }}
          className="text-text-primary italic leading-none tracking-[-0.03em]"
        >
          <motion.span
            style={{
              filter: blurFilter,
              display: "block",
              fontSize: "clamp(4rem, 12vw, 8rem)",
              fontWeight: 400,
            }}
          >
            Orria.
          </motion.span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          style={{ opacity: subOpacity, y: subY }}
          className="text-lg md:text-xl text-text-secondary mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          Your AI decision companion. Think through what matters.
          <br className="hidden md:block" />{" "}
          See every angle. Remember what shaped you.
        </motion.p>

        {/* Decorative accent line */}
        <motion.div
          style={{ opacity: subOpacity }}
          className="mx-auto mt-10 w-12 h-0.5 bg-cyan-500/40 rounded-full"
        />
      </div>
    </section>
  );
}
