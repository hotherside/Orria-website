"use client";

import { motion } from "framer-motion";
import { Apple, Smartphone } from "lucide-react";
import { FadeIn } from "@/components/animation/FadeIn";

export function Download() {
  return (
    <section id="download" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#F5F1E8] to-[#FAF8F3]">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#E07B5B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#7B9E87]/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EDE8DC] text-[#7B9E87] text-sm font-medium mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#7B9E87] animate-pulse" />
            Available Now on iOS
          </span>

          {/* Headline */}
          <h2
            className="text-3xl md:text-5xl lg:text-6xl text-[#3D3833] mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 500 }}
          >
            Start capturing
            <br />
            <span className="text-[#E07B5B] italic">your story today</span>
          </h2>

          <p className="text-lg md:text-xl text-[#5C554C] mb-12 max-w-2xl mx-auto">
            Your life is a story of choices. It&apos;s time to start recording the chapters.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#3D3833] text-white rounded-2xl font-semibold shadow-lg hover:bg-[#2a2520] hover:-translate-y-1 transition-all duration-300"
            >
              <Apple size={24} className="group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-gray-400 font-normal">Download on the</div>
                <div className="text-lg -mt-0.5">App Store</div>
              </div>
            </a>

            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-[#EDE8DC] text-[#8C857A] rounded-2xl cursor-not-allowed shadow-sm">
              <Smartphone size={24} />
              <div className="text-left">
                <div className="text-xs font-normal">Coming Soon</div>
                <div className="text-lg -mt-0.5 text-[#5C554C]">Google Play</div>
              </div>
            </div>
          </div>

          {/* Free tier callout */}
          <p className="text-[#8C857A]">
            Free forever. No credit card required.
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.2} className="mt-20">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <StatItem label="Decisions Logged" value="Free" />
            <StatItem label="AI Perspectives" value="4" />
            <StatItem label="Premium Trials" value="3" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div
        className="text-3xl md:text-4xl font-bold text-[#3D3833] mb-2"
        style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}
      >
        {value}
      </div>
      <div className="text-sm text-[#8C857A]">{label}</div>
    </div>
  );
}
