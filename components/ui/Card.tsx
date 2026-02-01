"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
  background?: "white" | "cream" | "cream-dark" | "transparent";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const backgroundStyles = {
  white: "bg-white",
  cream: "bg-[#FAF8F3]",
  "cream-dark": "bg-[#F5F1E8]",
  transparent: "bg-transparent",
};

const cardHoverVariants = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 20px rgba(61, 56, 51, 0.06), 0 1px 3px rgba(61, 56, 51, 0.04)",
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 8px 30px rgba(61, 56, 51, 0.1), 0 2px 6px rgba(61, 56, 51, 0.05)",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export function Card({
  children,
  className,
  hover = true,
  padding = "md",
  background = "white",
}: CardProps) {
  const baseStyles = cn(
    "rounded-2xl",
    backgroundStyles[background],
    paddingStyles[padding],
    !hover && "shadow-soft",
    className
  );

  if (hover) {
    return (
      <motion.div
        className={baseStyles}
        variants={cardHoverVariants}
        initial="rest"
        whileHover="hover"
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseStyles}>{children}</div>;
}

// Feature card with icon
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accentColor?: "coral" | "sage" | "terracotta" | "dusty-rose" | "soft-purple";
  className?: string;
}

const accentColors = {
  coral: "bg-[#E07B5B]/10 text-[#E07B5B]",
  sage: "bg-[#7B9E87]/10 text-[#7B9E87]",
  terracotta: "bg-[#C4826D]/10 text-[#C4826D]",
  "dusty-rose": "bg-[#C4919B]/10 text-[#C4919B]",
  "soft-purple": "bg-[#9B8AA8]/10 text-[#9B8AA8]",
};

export function FeatureCard({
  icon,
  title,
  description,
  accentColor = "coral",
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn("h-full", className)} padding="lg">
      <div
        className={cn(
          "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
          accentColors[accentColor]
        )}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#3D3833] mb-3">{title}</h3>
      <p className="text-[#5C554C] leading-relaxed">{description}</p>
    </Card>
  );
}
