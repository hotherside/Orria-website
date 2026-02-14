"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  screenshot?: string;
  children?: React.ReactNode;
  label?: string;
  sublabel?: string;
  gradient?: string;
  className?: string;
  glowColor?: string;
  size?: "sm" | "md" | "lg";
  frameTheme?: "dark" | "light";
}

const sizes = {
  sm: { width: 220, height: 440, notchW: 90, notchH: 24, border: 6, radius: "2.2rem" },
  md: { width: 280, height: 560, notchW: 120, notchH: 30, border: 8, radius: "3rem" },
  lg: { width: 320, height: 640, notchW: 130, notchH: 32, border: 8, radius: "3.2rem" },
};

export function PhoneMockup({
  screenshot,
  children,
  label,
  sublabel,
  gradient = "from-cyan-600/30 to-dark-800",
  className,
  glowColor,
  size = "md",
  frameTheme = "dark",
}: PhoneMockupProps) {
  const s = sizes[size];
  const isLight = frameTheme === "light";
  const frameBg = isLight ? "#F5F1EA" : "#121110";
  const frameBorder = isLight ? "#D4D0C8" : "#1a1918";
  const notchBg = isLight ? "#C8C4BC" : "#1a1918";
  const defaultGlow = isLight ? "bg-cyan-500/10" : "bg-cyan-500/20";

  return (
    <div className={cn("relative mx-auto", className)}>
      {/* Phone frame */}
      <div
        className="relative shadow-2xl overflow-hidden"
        style={{
          width: s.width,
          height: s.height,
          borderRadius: s.radius,
          border: `${s.border}px solid ${frameBorder}`,
          backgroundColor: frameBg,
        }}
      >
        {/* Dynamic Island / Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20"
          style={{ width: s.notchW, height: s.notchH, backgroundColor: notchBg }}
        />

        {/* Screen content — priority: children > screenshot > fallback */}
        {children ? (
          <div className="relative w-full h-full overflow-hidden">
            {children}
          </div>
        ) : screenshot ? (
          <div className="relative w-full h-full">
            <Image
              src={screenshot}
              alt={label || "App screenshot"}
              fill
              className="object-cover object-top"
              sizes={`${s.width}px`}
              priority
            />
            <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/10 to-transparent z-10" />
          </div>
        ) : (
          <div
            className={cn(
              "w-full h-full bg-gradient-to-br flex flex-col items-center justify-center p-6 text-center",
              gradient
            )}
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm mb-4 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-white/20" />
            </div>
            {label && <p className="text-white/70 text-sm font-medium">{label}</p>}
            {sublabel && <p className="text-white/40 text-xs mt-1">{sublabel}</p>}
            <div className="mt-6 w-full space-y-3">
              <div className="h-3 bg-white/10 rounded-full w-3/4 mx-auto" />
              <div className="h-3 bg-white/10 rounded-full w-1/2 mx-auto" />
              <div className="h-8 bg-white/15 rounded-xl w-full mt-4" />
              <div className="h-8 bg-white/10 rounded-xl w-full" />
            </div>
          </div>
        )}
      </div>

      {/* Glow effect */}
      <div
        className={cn("absolute inset-0 -z-10 blur-3xl scale-110 opacity-60", glowColor || defaultGlow)}
        style={{ borderRadius: s.radius }}
      />

      {/* Reflection edge */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          borderRadius: s.radius,
          border: `${s.border}px solid transparent`,
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)",
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </div>
  );
}
