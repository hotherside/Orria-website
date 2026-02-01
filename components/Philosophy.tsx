"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax for floating elements
  const image1Y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const image2Y = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const image3Y = useTransform(scrollYProgress, [0, 1], [150, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden bg-[#F8F4ED]"
    >
      {/* Floating placeholder images - editorial layout */}
      <motion.div
        style={{ y: image1Y }}
        className="absolute -left-10 md:left-10 top-20 w-48 md:w-72 aspect-[3/4] rounded-lg overflow-hidden shadow-2xl z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-full bg-gradient-to-br from-[#E8C4B8] to-[#D4A99A]"
        />
      </motion.div>

      <motion.div
        style={{ y: image2Y }}
        className="absolute right-0 md:right-20 top-40 w-40 md:w-56 aspect-[4/5] rounded-lg overflow-hidden shadow-xl z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-full bg-gradient-to-br from-[#7B9E87]/70 to-[#5C7A63]/70"
        />
      </motion.div>

      <motion.div
        style={{ y: image3Y }}
        className="absolute left-1/4 bottom-20 w-36 md:w-48 aspect-square rounded-lg overflow-hidden shadow-lg z-10 hidden md:block"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-full bg-gradient-to-br from-[#D4A574]/80 to-[#C4826D]/80"
        />
      </motion.div>

      {/* Main content - centered text that weaves through images */}
      <div className="relative z-20 max-w-4xl mx-auto px-6">
        <motion.div style={{ y: textY }} className="text-center">
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase tracking-[0.3em] text-[#8C857A] mb-8"
          >
            Orria
          </motion.p>

          {/* Main quote/statement - large serif */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-[#3D3833] leading-[1.15] mb-12"
            style={{
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
            }}
          >
            We are creatures who forget.
            <br />
            <span className="italic text-[#5C554C]">
              We decide in moments, then move on—
            </span>
            <br />
            leaving our wisdom scattered across time.
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-[#5C554C] max-w-2xl mx-auto leading-relaxed mb-16"
          >
            What if you could capture the clarity of your best decisions?
            Learn from patterns you never noticed? Build a relationship with
            your own judgment?
          </motion.p>

          {/* CTA link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="#pillars"
              className="inline-flex items-center gap-3 text-[#E07B5B] font-medium text-lg group"
            >
              <span className="relative">
                Discover how Orria works
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#E07B5B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F4ED] to-transparent pointer-events-none" />
    </section>
  );
}
