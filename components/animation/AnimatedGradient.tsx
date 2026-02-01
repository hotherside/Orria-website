"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedGradientProps {
  variant?: "hero" | "warm" | "sunset";
  className?: string;
  children?: React.ReactNode;
}

export function AnimatedGradient({
  variant = "hero",
  className = "",
  children
}: AnimatedGradientProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Subtle movement for the gradient blobs
  const blob1X = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const blob2X = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const blob3X = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const gradients = {
    hero: {
      base: "bg-gradient-to-br from-[#E8C4B8] via-[#D4A99A] to-[#C4917E]",
      blob1: "bg-[#E07B5B]/40",
      blob2: "bg-[#D4A574]/50",
      blob3: "bg-[#C4826D]/30",
    },
    warm: {
      base: "bg-gradient-to-br from-[#FAF8F3] via-[#F5EDE4] to-[#EDE4D8]",
      blob1: "bg-[#E07B5B]/20",
      blob2: "bg-[#D4A574]/25",
      blob3: "bg-[#C4826D]/15",
    },
    sunset: {
      base: "bg-gradient-to-br from-[#D4917E] via-[#C4826D] to-[#B8756A]",
      blob1: "bg-[#E8C4B8]/50",
      blob2: "bg-[#D4A574]/40",
      blob3: "bg-[#E07B5B]/30",
    },
  };

  const colors = gradients[variant];

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Base gradient */}
      <div className={`absolute inset-0 ${colors.base}`} />

      {/* Animated gradient blobs - simulating moving sunlight */}
      <motion.div
        className={`absolute -top-1/4 -left-1/4 w-[80%] h-[80%] rounded-full ${colors.blob1} blur-[100px]`}
        style={{ x: blob1X, y: blob1Y }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute top-1/4 -right-1/4 w-[70%] h-[70%] rounded-full ${colors.blob2} blur-[120px]`}
        style={{ x: blob2X, y: blob2Y }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className={`absolute bottom-0 left-1/3 w-[60%] h-[60%] rounded-full ${colors.blob3} blur-[80px]`}
        style={{ x: blob3X, y: blob3Y }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Shadow/light rays effect */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            linear-gradient(
              135deg,
              transparent 0%,
              rgba(255,255,255,0.1) 25%,
              transparent 50%,
              rgba(0,0,0,0.05) 75%,
              transparent 100%
            )
          `,
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Floating shadow shapes that look like leaf/plant shadows
export function FloatingShadows() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Shadow shape 1 - organic blob */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-96 opacity-[0.08]"
        animate={{
          x: [0, 20, 0],
          y: [0, 10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 200 300" className="w-full h-full">
          <path
            d="M100,10 C150,30 180,80 170,140 C160,200 140,250 100,280 C60,250 40,200 30,140 C20,80 50,30 100,10"
            fill="currentColor"
            className="text-[#3D3833]"
          />
        </svg>
      </motion.div>

      {/* Shadow shape 2 */}
      <motion.div
        className="absolute top-1/3 right-20 w-48 h-72 opacity-[0.06]"
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <svg viewBox="0 0 200 300" className="w-full h-full">
          <path
            d="M80,20 C130,40 160,100 150,170 C140,240 100,280 60,260 C20,240 10,180 20,120 C30,60 50,20 80,20"
            fill="currentColor"
            className="text-[#3D3833]"
          />
        </svg>
      </motion.div>

      {/* Shadow shape 3 - smaller accent */}
      <motion.div
        className="absolute bottom-20 left-1/4 w-32 h-48 opacity-[0.05]"
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      >
        <svg viewBox="0 0 200 300" className="w-full h-full">
          <ellipse cx="100" cy="150" rx="80" ry="120" fill="currentColor" className="text-[#3D3833]" />
        </svg>
      </motion.div>
    </div>
  );
}
