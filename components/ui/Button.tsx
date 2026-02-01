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

const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantStyles = {
  primary: "bg-[#E07B5B] text-white hover:bg-[#D16A4A] focus-visible:ring-[#E07B5B] shadow-md hover:shadow-lg",
  secondary: "bg-[#2D5A45] text-white hover:bg-[#234A38] focus-visible:ring-[#2D5A45] shadow-md hover:shadow-lg",
  ghost: "text-[#3D3833] hover:bg-[#F5F1E8] focus-visible:ring-[#3D3833]",
  outline: "border-2 border-[#3D3833] text-[#3D3833] hover:bg-[#3D3833] hover:text-white focus-visible:ring-[#3D3833]",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
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
    const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
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
  }
);
