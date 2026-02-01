"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Download, ChevronDown } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects for different elements
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Gradient blob movements
  const blob1X = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const blob2X = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const blob3X = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Animated gradient background - microsoft.ai style */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8C4B8] via-[#D9AFA0] to-[#C4917E]" />

      {/* Moving gradient blobs - creates the sunlight/shadow effect */}
      <motion.div
        className="absolute -top-1/3 -left-1/4 w-[90%] h-[90%] rounded-full bg-[#E07B5B]/30 blur-[120px]"
        style={{ x: blob1X, y: blob1Y }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/4 -right-1/4 w-[80%] h-[80%] rounded-full bg-[#D4A574]/40 blur-[140px]"
        style={{ x: blob2X, y: blob2Y }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 w-[70%] h-[70%] rounded-full bg-[#C4826D]/25 blur-[100px]"
        style={{ x: blob3X, y: blob3Y }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Organic shadow shapes - like plant shadows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-64 h-96 opacity-[0.07]"
          animate={{
            x: [0, 25, 0],
            y: [0, 15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 200 300" className="w-full h-full">
            <path
              d="M100,10 C150,30 180,80 170,140 C160,200 140,250 100,280 C60,250 40,200 30,140 C20,80 50,30 100,10"
              fill="#3D3833"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-16 w-48 h-72 opacity-[0.05]"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <svg viewBox="0 0 200 300" className="w-full h-full">
            <path
              d="M80,20 C130,40 160,100 150,170 C140,240 100,280 60,260 C20,240 10,180 20,120 C30,60 50,20 80,20"
              fill="#3D3833"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-1/4 w-40 h-60 opacity-[0.04]"
          animate={{
            x: [0, 15, 0],
            y: [0, -12, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        >
          <svg viewBox="0 0 200 300" className="w-full h-full">
            <ellipse cx="100" cy="150" rx="85" ry="130" fill="#3D3833" />
          </svg>
        </motion.div>
      </div>

      {/* Light ray overlay effect */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              135deg,
              transparent 0%,
              rgba(255,255,255,0.15) 25%,
              transparent 50%,
              rgba(0,0,0,0.03) 75%,
              transparent 100%
            )
          `,
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Main headline - Large serif like microsoft.ai */}
        <motion.div style={{ y: titleY }}>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#FDFCFA] mb-8 leading-[0.95] tracking-[-0.02em]"
            style={{
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
              fontSize: 'clamp(3.5rem, 12vw, 8rem)',
              fontWeight: 400,
              textShadow: '0 2px 40px rgba(61, 56, 51, 0.15)',
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xl md:text-2xl text-[#FDFCFA]/90 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            A thoughtful companion for life&apos;s decisions—
            <br className="hidden md:block" />
            helping you reflect, learn, and grow.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div style={{ y: ctaY }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#download"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#FDFCFA] text-[#3D3833] rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              <Download size={22} className="group-hover:animate-bounce" />
              Download for iOS
            </Link>
            <Link
              href="#pillars"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#FDFCFA]/60 text-[#FDFCFA] rounded-full font-semibold hover:bg-[#FDFCFA]/10 hover:border-[#FDFCFA] transition-all duration-300 text-lg"
            >
              See How It Works
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[#FDFCFA]/70"
          >
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
