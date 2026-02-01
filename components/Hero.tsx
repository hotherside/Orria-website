"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Download, ChevronDown } from "lucide-react";

// Abstract floating shape component
function FloatingShape({
  className,
  gradient,
  delay = 0,
}: {
  className?: string;
  gradient: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-2xl opacity-40 ${className}`}
      style={{ background: gradient }}
      initial={{ y: 0 }}
      animate={{ y: [-20, 20, -20] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-[#FAF8F3]">
      {/* Floating abstract shapes */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape
          className="w-72 h-72 top-20 -left-20 md:w-96 md:h-96 md:top-32 md:left-10"
          gradient="radial-gradient(circle, rgba(224,123,91,0.3) 0%, rgba(224,123,91,0) 70%)"
          delay={0}
        />
        <FloatingShape
          className="w-64 h-64 top-40 right-0 md:w-80 md:h-80 md:top-20 md:right-20"
          gradient="radial-gradient(circle, rgba(123,158,135,0.25) 0%, rgba(123,158,135,0) 70%)"
          delay={2}
        />
        <FloatingShape
          className="w-48 h-48 bottom-40 left-1/4 md:w-64 md:h-64"
          gradient="radial-gradient(circle, rgba(196,145,155,0.25) 0%, rgba(196,145,155,0) 70%)"
          delay={4}
        />
      </motion.div>

      {/* Secondary parallax layer */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape
          className="w-40 h-40 top-60 right-1/4 md:w-56 md:h-56"
          gradient="radial-gradient(circle, rgba(196,130,109,0.2) 0%, rgba(196,130,109,0) 70%)"
          delay={1}
        />
        <FloatingShape
          className="w-32 h-32 bottom-60 right-10 md:w-48 md:h-48"
          gradient="radial-gradient(circle, rgba(155,138,168,0.2) 0%, rgba(155,138,168,0) 70%)"
          delay={3}
        />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Main headline - Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-[var(--font-playfair)] text-[#3D3833] mb-8 leading-[1.1] tracking-tight"
          style={{
            fontFamily: 'var(--font-playfair), Playfair Display, serif',
            fontSize: 'clamp(2.75rem, 8vw, 5rem)',
            fontWeight: 500
          }}
        >
          Your Life is a Story
          <br />
          <span className="italic text-[#E07B5B]">of Choices</span>
        </motion.h1>

        {/* Philosophy statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-[#5C554C] mb-6 max-w-3xl mx-auto leading-relaxed"
        >
          Every decision you make shapes who you become.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-[#8C857A] mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Yet we decide in the dark. Forget what we chose. Never learn from our past.
          <br />
          <span className="text-[#E07B5B] font-medium">Orria changes that.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Link
            href="#download"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#E07B5B] text-white rounded-2xl font-semibold shadow-lg hover:bg-[#D16A4A] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-lg"
          >
            <Download size={22} className="group-hover:animate-bounce" />
            Download for iOS
          </Link>
          <Link
            href="#pillars"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 border border-[#EDE8DC] text-[#3D3833] rounded-2xl font-semibold hover:bg-white hover:border-[#E07B5B]/30 transition-all duration-300 text-lg shadow-sm hover:shadow-md"
          >
            See How It Works
          </Link>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg font-medium text-[#7B9E87]"
          style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontStyle: 'italic' }}
        >
          Your decisions. Your story.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[#8C857A]"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
