"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, useEffect } from "react";
import { WaitlistForm } from "@/components/shared/WaitlistForm";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const midSpring = { damping: 40, stiffness: 60, mass: 1 };
  const midX = useSpring(mouseX, midSpring);
  const midY = useSpring(mouseY, midSpring);

  const deepSpring = { damping: 60, stiffness: 30, mass: 2 };
  const deepX = useSpring(mouseX, deepSpring);
  const deepY = useSpring(mouseY, deepSpring);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 30);
      mouseY.set((clientY / innerHeight - 0.5) * 30);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Layer 0: Mesh gradient base */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <div className="absolute inset-0 hero-mesh-base" />
      </motion.div>

      {/* Layer 1: Deep parallax blobs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: deepX, y: deepY }}
      >
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full hero-blob hero-blob-1" />
        <div className="absolute top-[10%] -right-[15%] w-[65%] h-[65%] rounded-full hero-blob hero-blob-2" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full hero-blob hero-blob-3" />
      </motion.div>

      {/* Layer 2: Mid parallax blobs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: midX, y: midY }}
      >
        <div className="absolute top-[5%] left-[15%] w-[50%] h-[50%] rounded-full hero-blob hero-blob-4" />
        <div className="absolute bottom-[5%] right-[10%] w-[45%] h-[45%] rounded-full hero-blob hero-blob-5" />
      </motion.div>

      {/* Layer 3: Shimmer */}
      <div className="absolute inset-0 hero-shimmer pointer-events-none" />

      {/* Layer 4: Noise */}
      <div className="absolute inset-0 hero-noise pointer-events-none" />

      {/* Layer 5: Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 40%, rgba(18,17,16,0.15) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center"
      >
        {/* Headline */}
        <motion.div style={{ y: titleY }}>
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.4,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-white mb-6 leading-[0.95] tracking-[-0.03em]"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
              fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              fontWeight: 400,
              textShadow: "0 4px 80px rgba(0,0,0,0.2)",
            }}
          >
            <span className="italic">Think it through.</span>
            <br />
            <span className="italic">Remember what</span>
            <br />
            <span className="italic">shaped you.</span>
          </motion.h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div style={{ y: subtitleY }}>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Your AI decision companion. Talk through dilemmas, get perspectives
            from 4 distinct AI personalities, and build a journal of the choices
            that define your journey.
          </motion.p>
        </motion.div>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <WaitlistForm variant="hero" />
          <p className="text-white/40 text-xs mt-4">
            Free to start. No credit card needed.
          </p>
        </motion.div>

        {/* See how it works */}
        <motion.a
          href="#problem"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="inline-block mt-8 text-sm text-white/50 hover:text-white/70 transition-colors"
        >
          See how it works
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <ChevronDown size={16} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
