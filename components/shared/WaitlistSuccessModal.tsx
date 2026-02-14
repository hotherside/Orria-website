"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";

interface WaitlistSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  count?: number | null;
}

export function WaitlistSuccessModal({ isOpen, onClose, count }: WaitlistSuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-auto px-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-amber-400" />

              <div className="p-8 text-center relative">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-cream-300 transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>

                {/* Success icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.25 }}
                    className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center"
                  >
                    <Check size={20} className="text-white" strokeWidth={3} />
                  </motion.div>
                </motion.div>

                {/* Heading */}
                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl font-semibold text-text-primary mb-2"
                  style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
                >
                  You&apos;re in!
                </motion.h3>

                {/* Body text */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-3 mb-6"
                >
                  <p className="text-text-secondary text-sm leading-relaxed">
                    We&apos;re in the final stages of building Orria. You&apos;ll be among the first to try it.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    As an early member, we&apos;ll reach out to invite you as a beta tester — your feedback will directly shape the experience.
                  </p>
                </motion.div>

                {/* What to expect */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-cream-100 rounded-2xl p-4 mb-6 text-left"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={14} className="text-cyan-600" />
                    <p className="text-xs font-semibold text-text-primary uppercase tracking-wider">What&apos;s next</p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Early access to the beta",
                      "Invite to share your feedback",
                      "Updates as we launch",
                    ].map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-4 h-4 rounded-full bg-cyan-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={8} className="text-cyan-600" />
                        </div>
                        <p className="text-sm text-text-secondary">{item}</p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Counter */}
                {count !== null && count !== undefined && count > 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xs text-text-muted"
                  >
                    You&apos;re #{count.toLocaleString()} on the waitlist
                  </motion.p>
                )}

                {/* CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  onClick={onClose}
                  className="mt-4 w-full py-3 rounded-full bg-cyan-500 text-white font-semibold text-sm hover:bg-cyan-600 transition-colors"
                >
                  Got it
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
