"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { Download, ChevronDown } from "lucide-react";
import { useRef, useEffect } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Smooth parallax transforms
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mid-layer parallax — responsive, lighter feel
  const midSpring = { damping: 40, stiffness: 60, mass: 1 };
  const midX = useSpring(mouseX, midSpring);
  const midY = useSpring(mouseY, midSpring);

  // Deep-layer parallax — slower, heavier drift
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
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden"
    >
      {/* ── Layer 0: Fluid mesh gradient base ── */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <div className="absolute inset-0 hero-mesh-base" />
      </motion.div>

      {/* ── Layer 1: Deep parallax blobs (slow drift) ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: deepX, y: deepY }}
      >
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full hero-blob hero-blob-1" />
        <div className="absolute top-[10%] -right-[15%] w-[65%] h-[65%] rounded-full hero-blob hero-blob-2" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full hero-blob hero-blob-3" />
      </motion.div>

      {/* ── Layer 2: Mid parallax blobs (responsive drift) ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: midX, y: midY }}
      >
        <div className="absolute top-[5%] left-[15%] w-[50%] h-[50%] rounded-full hero-blob hero-blob-4" />
        <div className="absolute bottom-[5%] right-[10%] w-[45%] h-[45%] rounded-full hero-blob hero-blob-5" />
      </motion.div>

      {/* ── Layer 3: Shimmering light sweep ── */}
      <div className="absolute inset-0 hero-shimmer pointer-events-none" />

      {/* ── Layer 4: Noise texture for depth ── */}
      <div className="absolute inset-0 hero-noise pointer-events-none" />

      {/* ── Layer 5: Vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 40%, rgba(61,56,51,0.1) 100%)",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center"
      >
        {/* Headline */}
        <motion.div style={{ y: titleY }}>
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#FDFCFA] mb-8 leading-[0.95] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              fontWeight: 400,
              textShadow: "0 4px 80px rgba(61,56,51,0.15)",
            }}
          >
            <span className="italic">Your Life is a Story</span>
            <br />
            <span className="italic">of Choices</span>
          </motion.h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div style={{ y: subtitleY }}>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-[#FDFCFA]/85 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            A thoughtful companion for life&apos;s decisions—
            <br className="hidden md:block" />
            helping you reflect, learn, and grow.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#download"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#FDFCFA] text-[#3D3833] rounded-full font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ease-out text-lg"
          >
            <Download
              size={22}
              className="group-hover:animate-bounce"
            />
            Download for iOS
          </Link>
          <Link
            href="#pillars"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FDFCFA]/10 backdrop-blur-md border border-[#FDFCFA]/25 text-[#FDFCFA] rounded-full font-semibold hover:bg-[#FDFCFA]/20 hover:border-[#FDFCFA]/40 transition-all duration-500 ease-out text-lg"
          >
            See How It Works
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-[#FDFCFA]/50"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-light">
              Scroll
            </span>
            <ChevronDown size={16} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
