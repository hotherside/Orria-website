"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  speed?: number; // -1 to 1, negative = move up on scroll, positive = move down
  className?: string;
  imageClassName?: string;
  delay?: number;
}

export function ParallaxImage({
  src,
  alt,
  width,
  height,
  speed = 0.2,
  className = "",
  imageClassName = "",
  delay = 0,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -100}px`, `${speed * 100}px`]);

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div style={{ y }} className="will-change-transform">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`object-cover ${imageClassName}`}
        />
      </motion.div>
    </motion.div>
  );
}

// Placeholder component that looks like an editorial photo
interface PlaceholderImageProps {
  aspectRatio?: "portrait" | "landscape" | "square";
  color?: "warm" | "coral" | "sage" | "neutral";
  className?: string;
  speed?: number;
  delay?: number;
}

const colorVariants = {
  warm: "from-[#E8C4B8] to-[#D4A99A]",
  coral: "from-[#E07B5B]/80 to-[#C4826D]/80",
  sage: "from-[#7B9E87]/60 to-[#5C7A63]/60",
  neutral: "from-[#D4CFC7] to-[#C4BEB4]",
};

const aspectRatios = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export function PlaceholderImage({
  aspectRatio = "portrait",
  color = "warm",
  className = "",
  speed = 0.15,
  delay = 0,
}: PlaceholderImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -80}px`, `${speed * 80}px`]);

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden rounded-lg ${aspectRatios[aspectRatio]} ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        style={{ y }}
        className={`w-full h-[120%] bg-gradient-to-br ${colorVariants[color]} will-change-transform`}
      />
    </motion.div>
  );
}

// Editorial layout with overlapping images
interface EditorialLayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export function EditorialLayout({ children, className = "" }: EditorialLayoutProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Left floating image */}
      <PlaceholderImage
        aspectRatio="portrait"
        color="warm"
        className="absolute -left-20 top-0 w-64 shadow-2xl z-10"
        speed={0.2}
        delay={0}
      />

      {/* Center-right image */}
      <PlaceholderImage
        aspectRatio="landscape"
        color="coral"
        className="absolute left-1/4 top-1/4 w-80 shadow-xl z-20"
        speed={0.1}
        delay={0.1}
      />

      {/* Right floating image */}
      <PlaceholderImage
        aspectRatio="portrait"
        color="sage"
        className="absolute -right-10 top-10 w-56 shadow-2xl z-10"
        speed={0.25}
        delay={0.2}
      />

      {/* Content overlay */}
      <div className="relative z-30">
        {children}
      </div>
    </div>
  );
}
