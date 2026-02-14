"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const buttonVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -2 },
  tap: { scale: 0.98, y: 0 },
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantStyles = {
  primary:
    "bg-cyan-500 text-white hover:bg-cyan-600 focus-visible:ring-cyan-500 shadow-md hover:shadow-lg",
  secondary:
    "bg-text-primary text-white hover:bg-dark-700 focus-visible:ring-text-primary shadow-md hover:shadow-lg",
  ghost:
    "text-text-primary hover:bg-cream-200 focus-visible:ring-text-primary",
  outline:
    "border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-white focus-visible:ring-text-primary",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    variant = "primary",
    size = "md",
    children,
    className,
    href,
    icon,
    iconPosition = "left",
    disabled,
    onClick,
    type = "button",
  },
  ref
) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
      ref={ref as React.Ref<HTMLButtonElement>}
    >
      {content}
    </motion.button>
  );
});
