"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animation/FadeIn";

export function Philosophy() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#E07B5B]/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Main Philosophy Quote */}
        <FadeIn className="text-center mb-20">
          <div
            className="text-7xl md:text-8xl text-[#E07B5B]/20 mb-6 leading-none"
            style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}
          >
            &ldquo;
          </div>
          <blockquote
            className="text-2xl md:text-3xl lg:text-4xl text-[#3D3833] leading-tight mb-8"
            style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 500 }}
          >
            We are who we are, where we are, what we do —{" "}
            <span className="text-[#E07B5B] italic">
              based on the choices we make.
            </span>
          </blockquote>
          <p className="text-lg md:text-xl text-[#5C554C] max-w-2xl mx-auto leading-relaxed">
            Your life is an autobiography written in choices. Most of it goes unrecorded.
          </p>
        </FadeIn>

        {/* The Problem - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <ProblemCard
            number="01"
            title="We decide in the dark"
            description="Thousands of choices made without structure, without clarity, without outside perspective."
            color="coral"
            delay={0}
          />
          <ProblemCard
            number="02"
            title="We forget what we chose"
            description="The job you almost didn't take. The city you considered. The conversation that changed everything. Lost."
            color="terracotta"
            delay={0.1}
          />
          <ProblemCard
            number="03"
            title="We never learn from our past"
            description="Years pass without understanding our patterns. The crossroads moments that defined us — never reflected upon."
            color="dusty-rose"
            delay={0.2}
          />
        </div>

        {/* The Promise */}
        <FadeIn delay={0.3}>
          <div className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F3] text-center overflow-hidden border border-[#EDE8DC]">
            {/* Subtle decorative shapes */}
            <div className="absolute top-0 left-10 w-32 h-32 bg-[#7B9E87]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-10 w-40 h-40 bg-[#E07B5B]/10 rounded-full blur-3xl" />

            <div className="relative">
              <h3
                className="text-2xl md:text-3xl text-[#3D3833] mb-4"
                style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 500 }}
              >
                Orria exists so you can look back and understand
              </h3>
              <p
                className="text-xl text-[#7B9E87] max-w-xl mx-auto mb-8 italic"
                style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}
              >
                how you became who you are.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                {["Capture decisions", "Get clarity", "Close the loop", "Discover patterns"].map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-white border border-[#EDE8DC] text-[#5C554C] shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ProblemCard({
  number,
  title,
  description,
  color,
  delay,
}: {
  number: string;
  title: string;
  description: string;
  color: "coral" | "terracotta" | "dusty-rose";
  delay: number;
}) {
  const colorMap = {
    coral: { bg: "bg-[#E07B5B]/10", text: "text-[#E07B5B]" },
    terracotta: { bg: "bg-[#C4826D]/10", text: "text-[#C4826D]" },
    "dusty-rose": { bg: "bg-[#C4919B]/10", text: "text-[#C4919B]" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="text-center p-8 bg-white rounded-2xl shadow-soft"
    >
      <div
        className={`w-12 h-12 rounded-full ${colorMap[color].bg} ${colorMap[color].text} flex items-center justify-center font-semibold text-lg mb-6 mx-auto`}
      >
        {number}
      </div>
      <h4 className="text-xl font-semibold text-[#3D3833] mb-3">{title}</h4>
      <p className="text-[#5C554C] leading-relaxed">{description}</p>
    </motion.div>
  );
}
