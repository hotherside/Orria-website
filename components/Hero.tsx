"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from "framer-motion";
import Link from "next/link";
import { Download, ChevronDown } from "lucide-react";
import { useRef, useEffect } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse parallax for subtle interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100 };
  const shadowX = useSpring(mouseX, springConfig);
  const shadowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Convert to -20 to 20 range for subtle movement
      mouseX.set((clientX / innerWidth - 0.5) * 40);
      mouseY.set((clientY / innerHeight - 0.5) * 40);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Base gradient - warm peachy coral */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 150% 100% at 50% 0%, #E8B4A0 0%, #D4978A 30%, #C4826D 60%, #B07060 100%)
          `
        }}
      />

      {/* Layered gradient for depth */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(232,180,160,0.6) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 35% 45%, rgba(232,180,160,0.6) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(232,180,160,0.6) 0%, transparent 60%)",
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 70% 50% at 70% 60%, rgba(196,130,109,0.5) 0%, transparent 50%)",
            "radial-gradient(ellipse 70% 50% at 65% 55%, rgba(196,130,109,0.5) 0%, transparent 50%)",
            "radial-gradient(ellipse 70% 50% at 70% 60%, rgba(196,130,109,0.5) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Organic shadow shapes - soft blurred ellipses that mimic plant shadows */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: shadowX, y: shadowY }}
      >
        {/* Large soft shadow - top left */}
        <motion.div
          className="absolute"
          style={{
            top: "5%",
            left: "-5%",
            width: "45%",
            height: "70%",
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(61,56,51,0.12) 0%, rgba(61,56,51,0.08) 30%, transparent 70%)",
            filter: "blur(40px)",
            borderRadius: "60% 40% 50% 50% / 50% 50% 50% 50%",
          }}
          animate={{
            x: [0, 15, 0],
            y: [0, 10, 0],
            rotate: [0, 3, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Organic shadow 2 - center left */}
        <motion.div
          className="absolute"
          style={{
            top: "30%",
            left: "10%",
            width: "30%",
            height: "50%",
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(61,56,51,0.1) 0%, rgba(61,56,51,0.05) 40%, transparent 70%)",
            filter: "blur(30px)",
            borderRadius: "40% 60% 55% 45% / 55% 45% 55% 45%",
          }}
          animate={{
            x: [0, -10, 0],
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Organic shadow 3 - right side */}
        <motion.div
          className="absolute"
          style={{
            top: "15%",
            right: "-10%",
            width: "40%",
            height: "60%",
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(61,56,51,0.09) 0%, rgba(61,56,51,0.04) 40%, transparent 65%)",
            filter: "blur(35px)",
            borderRadius: "50% 50% 45% 55% / 45% 55% 45% 55%",
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 12, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        {/* Small floating shadow accent - bottom */}
        <motion.div
          className="absolute"
          style={{
            bottom: "10%",
            left: "25%",
            width: "20%",
            height: "30%",
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(61,56,51,0.08) 0%, transparent 60%)",
            filter: "blur(25px)",
            borderRadius: "45% 55% 50% 50% / 50% 50% 55% 45%",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -8, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7,
          }}
        />

        {/* Another accent shadow - right bottom */}
        <motion.div
          className="absolute"
          style={{
            bottom: "20%",
            right: "15%",
            width: "25%",
            height: "35%",
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(61,56,51,0.07) 0%, transparent 55%)",
            filter: "blur(30px)",
            borderRadius: "55% 45% 50% 50% / 50% 50% 45% 55%",
          }}
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      {/* Light overlay - creates the sunlight-through-window effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              145deg,
              rgba(255,255,255,0.15) 0%,
              transparent 30%,
              transparent 70%,
              rgba(0,0,0,0.05) 100%
            )
          `,
        }}
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Main headline */}
        <motion.div style={{ y: titleY }}>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#FDFCFA] mb-8 leading-[0.95] tracking-[-0.02em]"
            style={{
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
              fontSize: 'clamp(3rem, 10vw, 7rem)',
              fontWeight: 400,
              textShadow: '0 4px 60px rgba(61, 56, 51, 0.2)',
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xl md:text-2xl text-[#FDFCFA]/85 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            A thoughtful companion for life&apos;s decisions—
            <br className="hidden md:block" />
            helping you reflect, learn, and grow.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3D3833]/20 backdrop-blur-sm border border-[#FDFCFA]/30 text-[#FDFCFA] rounded-full font-semibold hover:bg-[#3D3833]/30 hover:border-[#FDFCFA]/50 transition-all duration-300 text-lg"
          >
            See How It Works
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-[#FDFCFA]/60"
          >
            <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
