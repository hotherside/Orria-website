"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportSettings } from "@/lib/animation-variants";
import { WaitlistForm } from "@/components/shared/WaitlistForm";

export function WaitlistCTA() {
  return (
    <section
      id="waitlist"
      className="py-24 md:py-32 bg-gradient-to-b from-cream-100 to-cream-200"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <h2
            className="text-display text-text-primary mb-4"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
            }}
          >
            Your story starts
            <br />
            <span className="italic">with a choice.</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join the waitlist and be first to experience a new way of thinking
            through life&apos;s crossroads.
          </p>
          <WaitlistForm variant="section" />
          <p className="text-text-muted text-xs mt-4">
            Free to start. Launching 2026.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
