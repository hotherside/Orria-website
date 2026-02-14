"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  variant?: "hero" | "section";
  className?: string;
}

export function WaitlistForm({ variant = "section", className }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(
        "https://nnfcodpedesktqrpqbab.supabase.co/functions/v1/join-waitlist",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source: "website" }),
        }
      );

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        if (data?.error?.includes("already")) {
          setStatus("success");
          setEmail("");
        } else {
          setErrorMessage("Something went wrong. Please try again.");
          setStatus("error");
        }
      }
    } catch {
      setErrorMessage("Could not connect. Please try again later.");
      setStatus("error");
    }
  };

  const isHero = variant === "hero";

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              "flex items-center justify-center gap-2 py-3 px-4 rounded-full font-medium text-sm",
              isHero
                ? "bg-white/15 backdrop-blur-md text-white"
                : "bg-cyan-500/10 text-cyan-600"
            )}
          >
            <Check size={18} />
            You&apos;re on the list! We&apos;ll be in touch.
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className={cn(
              "flex gap-2",
              isHero ? "flex-col sm:flex-row" : "flex-col sm:flex-row"
            )}
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your email"
              aria-label="Email address for waitlist"
              className={cn(
                "flex-1 px-5 py-3 rounded-full text-sm font-medium outline-none transition-all duration-300",
                isHero
                  ? "bg-white/15 backdrop-blur-md text-white placeholder:text-white/50 border border-white/20 focus:border-white/40 focus:bg-white/20"
                  : "bg-white text-text-primary placeholder:text-text-muted border border-cream-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 shadow-soft"
              )}
              required
            />
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-300 whitespace-nowrap",
                isHero
                  ? "bg-white text-cyan-600 hover:bg-cream-50 shadow-lg"
                  : "bg-cyan-500 text-white hover:bg-cyan-600 shadow-md"
              )}
            >
              {status === "loading" ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>
                  Join the Waitlist
                  <ArrowRight size={16} />
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      {status === "error" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            "text-xs mt-2 text-center",
            isHero ? "text-red-300" : "text-red-500"
          )}
        >
          {errorMessage}
        </motion.p>
      )}
    </div>
  );
}
