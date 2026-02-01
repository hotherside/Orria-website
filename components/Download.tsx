"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Apple, Smartphone } from "lucide-react";

export function Download() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [-30, 80]);

  return (
    <section
      ref={sectionRef}
      id="download"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D9AFA0] via-[#C4917E] to-[#B8756A]" />

      {/* Animated gradient blobs */}
      <motion.div
        style={{ y: blob1Y }}
        className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full bg-[#E8C4B8]/40 blur-[100px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={{ y: blob2Y }}
        className="absolute bottom-0 -right-1/4 w-[60%] h-[60%] rounded-full bg-[#E07B5B]/30 blur-[120px]"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Light ray effect */}
      <motion.div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              135deg,
              transparent 0%,
              rgba(255,255,255,0.2) 25%,
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

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Available Now on iOS
          </span>

          {/* Headline */}
          <h2
            className="text-[#FDFCFA] mb-6"
            style={{
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              textShadow: '0 2px 40px rgba(61, 56, 51, 0.15)',
            }}
          >
            Start capturing
            <br />
            <span className="italic">your story today</span>
          </h2>

          <p className="text-lg md:text-xl text-[#FDFCFA]/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Your life is a story of choices. It&apos;s time to start recording the chapters.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <motion.a
              href="#"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#FDFCFA] text-[#3D3833] rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Apple size={24} className="group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-[#8C857A] font-normal">Download on the</div>
                <div className="text-lg -mt-0.5">App Store</div>
              </div>
            </motion.a>

            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white/60 rounded-full cursor-not-allowed">
              <Smartphone size={24} />
              <div className="text-left">
                <div className="text-xs font-normal">Coming Soon</div>
                <div className="text-lg -mt-0.5 text-white/80">Google Play</div>
              </div>
            </div>
          </div>

          {/* Free tier callout */}
          <p className="text-[#FDFCFA]/70">
            Free forever. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
