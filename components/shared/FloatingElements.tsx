"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface FloatingElementsProps {
  count?: number;
  colors?: string[];
  className?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
  shape: "circle" | "plus" | "dot";
}

// A stable pseudo-random sequence keeps the composition organic without making
// a render produce a different scene (or a hydration mismatch).
function seededValue(seed: number) {
  const value = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return value - Math.floor(value);
}

export function FloatingElements({
  count = 8,
  colors = ["#0891B2", "#E5A53D", "#C4704B"],
  className = "",
}: FloatingElementsProps) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: seededValue(i * 6 + 1) * 100,
      y: seededValue(i * 6 + 2) * 100,
      size: 3 + seededValue(i * 6 + 3) * 5,
      duration: 4 + seededValue(i * 6 + 4) * 4,
      delay: seededValue(i * 6 + 5) * 3,
      opacity: 0.08 + seededValue(i * 6 + 6) * 0.12,
      color: colors[i % colors.length],
      shape: (["circle", "plus", "dot"] as const)[i % 3],
    }));
  }, [count, colors]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [-8, 8, -8],
            x: [-3, 3, -3],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        >
          {p.shape === "circle" && (
            <div
              className="rounded-full"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                opacity: p.opacity,
              }}
            />
          )}
          {p.shape === "plus" && (
            <svg
              width={p.size + 2}
              height={p.size + 2}
              viewBox="0 0 10 10"
              style={{ opacity: p.opacity }}
            >
              <line x1="5" y1="1" x2="5" y2="9" stroke={p.color} strokeWidth="1.5" strokeLinecap="round" />
              <line x1="1" y1="5" x2="9" y2="5" stroke={p.color} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
          {p.shape === "dot" && (
            <div
              className="rounded-full"
              style={{
                width: p.size * 0.6,
                height: p.size * 0.6,
                backgroundColor: p.color,
                opacity: p.opacity,
                boxShadow: `0 0 ${p.size}px ${p.color}40`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
