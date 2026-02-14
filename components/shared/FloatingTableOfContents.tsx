"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "lucide-react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "problem", label: "The Problem" },
  { id: "product", label: "How It Works" },
  { id: "agents", label: "AI Agents" },
  { id: "waitlist", label: "Join Waitlist" },
];

export function FloatingTableOfContents() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero
      setIsVisible(window.scrollY > 300);

      // Find active section
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
      setIsOpen(false);
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
          {/* Collapsed: dot indicators */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-1.5"
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className="group relative flex items-center"
                  title={section.label}
                >
                  {/* Tooltip on hover */}
                  <span className="absolute right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[11px] font-medium text-text-primary bg-white px-2.5 py-1 rounded-lg shadow-soft border border-cream-300/50 whitespace-nowrap pointer-events-none">
                    {section.label}
                  </span>
                  <motion.div
                    className="rounded-full transition-all duration-300"
                    animate={{
                      width: activeSection === section.id ? 10 : 6,
                      height: activeSection === section.id ? 10 : 6,
                      backgroundColor: activeSection === section.id ? "#0891B2" : "#D5CFC4",
                    }}
                    whileHover={{ scale: 1.4 }}
                  />
                </button>
              ))}

              {/* Expand button */}
              <button
                onClick={() => setIsOpen(true)}
                className="mt-2 w-8 h-8 rounded-full bg-white shadow-soft border border-cream-300/50 flex items-center justify-center text-text-muted hover:text-text-primary hover:shadow-md transition-all duration-200"
              >
                <List size={13} />
              </button>
            </motion.div>
          )}

          {/* Expanded: full labels */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-lg border border-cream-300/50 p-3 min-w-[160px]"
              >
                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-md border border-cream-300/50 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                >
                  <X size={10} />
                </button>

                <p className="text-[9px] font-semibold uppercase tracking-widest text-text-muted mb-2 px-2">
                  Navigate
                </p>

                <div className="space-y-0.5">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                        activeSection === section.id
                          ? "bg-cyan-500/10 text-cyan-600"
                          : "text-text-secondary hover:bg-cream-100 hover:text-text-primary"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{
                            backgroundColor: activeSection === section.id ? "#0891B2" : "#D5CFC4",
                          }}
                        />
                        {section.label}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
