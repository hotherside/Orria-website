"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "problem", label: "The Problem" },
  { id: "product", label: "How It Works" },
  { id: "agents", label: "AI Agents" },
  { id: "waitlist", label: "Join Waitlist" },
];

export function FloatingTableOfContents() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  const activeIndex = sections.findIndex((s) => s.id === activeSection);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        >
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-cream-300/50 py-3 px-2 min-w-[150px]">
            {/* Progress counter */}
            <div className="px-3 mb-2 flex items-center justify-between">
              <span className="text-[9px] font-semibold uppercase tracking-widest text-text-muted">
                Navigate
              </span>
              <span className="text-[10px] font-medium text-cyan-600">
                {activeIndex + 1}/{sections.length}
              </span>
            </div>

            {/* Progress bar */}
            <div className="mx-3 mb-3 h-[2px] bg-cream-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-cyan-500 rounded-full"
                animate={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            {/* Section links — always visible */}
            <div className="space-y-0.5">
              {sections.map((section, i) => {
                const isActive = activeSection === section.id;
                const isPast = i < activeIndex;

                return (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200 flex items-center gap-2.5 ${
                      isActive
                        ? "bg-cyan-500/10 text-cyan-600"
                        : isPast
                          ? "text-text-muted hover:bg-cream-100 hover:text-text-primary"
                          : "text-text-secondary hover:bg-cream-100 hover:text-text-primary"
                    }`}
                  >
                    {/* Step indicator */}
                    <div className="relative flex-shrink-0">
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        animate={{
                          backgroundColor: isActive
                            ? "#0891B2"
                            : isPast
                              ? "#0891B280"
                              : "#D5CFC4",
                          scale: isActive ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-cyan-500/30"
                          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                    </div>
                    {section.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
