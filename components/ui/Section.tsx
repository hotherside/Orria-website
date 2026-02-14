import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "cream" | "white" | "cream-dark" | "sage-tint" | "warm-gradient";
  padding?: "sm" | "md" | "lg" | "xl" | "none";
}

const backgroundStyles = {
  cream: "bg-cream-100",
  white: "bg-white",
  "cream-dark": "bg-cream-200",
  "sage-tint": "bg-gradient-to-b from-cyan-500/5 to-cyan-500/2",
  "warm-gradient": "bg-gradient-to-b from-cream-50 to-cream-100",
};

const paddingStyles = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
};

export function Section({
  id,
  children,
  className,
  background = "cream",
  padding = "lg",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        backgroundStyles[background],
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </section>
  );
}

// Container component for max-width and padding
interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

export function Container({
  children,
  className,
  size = "xl",
}: ContainerProps) {
  return (
    <div className={cn("mx-auto px-6 md:px-8", containerSizes[size], className)}>
      {children}
    </div>
  );
}
