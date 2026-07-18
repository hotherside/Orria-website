"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Sparkles, Link2, Heart, Loader2, User } from "lucide-react";

const SUPABASE_URL = "https://nnfcodpedesktqrpqbab.supabase.co/functions/v1";

interface WaitlistSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  count?: number | null;
  email?: string;
}

export function WaitlistSuccessModal({ isOpen, onClose, count, email }: WaitlistSuccessModalProps) {
  const [copied, setCopied] = useState(false);
  const [fullName, setFullName] = useState("");
  const [nameStatus, setNameStatus] = useState<"idle" | "loading" | "saved">("idle");
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // Reset name state when modal opens
  useEffect(() => {
    if (isOpen) {
      const resetName = window.setTimeout(() => {
        setFullName("");
        setNameStatus("idle");
      }, 0);
      return () => window.clearTimeout(resetName);
    }
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText("https://orria.app");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleNameSubmit = async () => {
    if (!fullName.trim() || !email) return;

    setNameStatus("loading");
    try {
      const res = await fetch(`${SUPABASE_URL}/waitlist-update-name`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: fullName.trim() }),
      });
      if (res.ok) {
        setNameStatus("saved");
      } else {
        setNameStatus("saved");
      }
    } catch {
      // Still mark as saved so the UI progresses
      setNameStatus("saved");
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]"
          />

          {/* Modal — centered with flexbox to avoid transform containment issues */}
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-md pointer-events-auto"
            >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-amber-400" />

              <div className="p-8 relative">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-cream-300 transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>

                {/* Big number hero */}
                {count !== null && count !== undefined && count > 0 && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 150, delay: 0.1 }}
                    className="text-center mb-4"
                  >
                    <AnimatedNumber target={count} />
                  </motion.div>
                )}

                {/* Heading — personalized if name is saved */}
                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="text-2xl font-semibold text-text-primary text-center mb-2"
                  style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
                >
                  {nameStatus === "saved" && fullName.trim()
                    ? `Welcome, ${fullName.trim().split(/\s+/)[0]}!`
                    : "Welcome to Orria"}
                </motion.h3>

                {/* Thank you */}
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="text-center text-text-secondary text-sm mb-5 flex items-center justify-center gap-1.5"
                >
                  <Heart size={13} className="text-terracotta-400" />
                  Thank you for believing in a better way to make decisions.
                </motion.p>

                {/* Name input — shown when name hasn't been saved yet */}
                <AnimatePresence mode="wait">
                  {nameStatus !== "saved" ? (
                    <motion.div
                      key="name-input"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ delay: 0.5 }}
                      className="mb-6"
                    >
                      <div className="bg-cream-100 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <User size={14} className="text-cyan-600" />
                          <p className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                            One more thing
                          </p>
                        </div>
                        <p className="text-sm text-text-secondary mb-3">
                          What should we call you? This helps us personalise your experience.
                        </p>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && fullName.trim()) handleNameSubmit();
                            }}
                            placeholder="Your full name"
                            className="flex-1 px-4 py-2.5 rounded-full text-sm font-medium bg-white text-text-primary placeholder:text-text-muted border border-cream-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all duration-300"
                            autoFocus
                          />
                          <button
                            onClick={handleNameSubmit}
                            disabled={!fullName.trim() || nameStatus === "loading"}
                            className="px-4 py-2.5 rounded-full bg-cyan-500 text-white text-sm font-semibold hover:bg-cyan-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                          >
                            {nameStatus === "loading" ? (
                              <Loader2 size={14} className="animate-spin" />
                            ) : (
                              "Save"
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="name-saved"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6"
                    >
                      <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium">
                        <Check size={16} />
                        Nice to meet you, {fullName.trim().split(/\s+/)[0]}!
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Belonging copy */}
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="text-center text-text-secondary text-sm mb-6 leading-relaxed"
                >
                  You&apos;re now one of Orria&apos;s founding members. Your early support means the world — and your feedback will directly shape what Orria becomes.
                </motion.p>

                {/* What's next */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-cream-100 rounded-2xl p-5 mb-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={14} className="text-cyan-600" />
                    <p className="text-xs font-semibold text-text-primary uppercase tracking-wider">What&apos;s next</p>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "Early access to the beta before anyone else",
                      "A personal invite to share your feedback",
                      "Updates as we approach launch",
                    ].map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className="flex items-start gap-2.5"
                      >
                        <div className="w-5 h-5 rounded-full bg-cyan-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={10} className="text-cyan-600" />
                        </div>
                        <p className="text-sm text-text-secondary">{item}</p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Share prompt */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.95 }}
                  className="flex items-center justify-center gap-2 mb-5"
                >
                  <p className="text-xs text-text-muted">Know someone who&apos;d love this?</p>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-200 hover:bg-cream-300 transition-colors text-xs text-text-secondary"
                  >
                    <Link2 size={12} />
                    {copied ? "Copied!" : "Copy link"}
                  </button>
                </motion.div>

                {/* CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  onClick={onClose}
                  className="w-full py-3 rounded-full bg-cyan-500 text-white font-semibold text-sm hover:bg-cyan-600 transition-colors"
                >
                  Got it
                </motion.button>
              </div>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

/** Animated number that counts up with easing */
function AnimatedNumber({ target }: { target: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame: number;
    const duration = 800;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(animate);
    }, 200);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <div className="flex items-baseline justify-center gap-1">
      <span className="text-cyan-500/40 text-3xl font-light">#</span>
      <span
        className="text-5xl md:text-6xl font-bold text-cyan-600 tabular-nums"
        style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
      >
        {display.toLocaleString()}
      </span>
    </div>
  );
}
