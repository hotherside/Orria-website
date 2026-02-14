"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/potentials", label: "Potentials & Research" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
        isScrolled
          ? "w-[calc(100%-2rem)] max-w-5xl"
          : "w-[calc(100%-3rem)] max-w-6xl"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
          isScrolled
            ? "bg-cream-50/95 backdrop-blur-xl shadow-lg border border-cream-300/50"
            : "bg-cream-50/80 backdrop-blur-md shadow-md"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="text-xl text-text-primary"
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
              fontWeight: 600,
            }}
          >
            Orria
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-full",
                pathname === link.href
                  ? "text-cyan-600 bg-cyan-500/10"
                  : "text-text-secondary hover:text-text-primary hover:bg-cream-300/50"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            className="ml-2 px-5 py-2 bg-cyan-500 text-white rounded-full text-sm font-medium hover:bg-cyan-600 transition-colors duration-300 shadow-sm"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 bg-cream-50/98 backdrop-blur-xl rounded-2xl border border-cream-300/50 shadow-xl p-4 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 font-medium rounded-xl transition-colors",
                  pathname === link.href
                    ? "text-cyan-600 bg-cyan-500/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-cream-300/50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#waitlist"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full text-center py-3 bg-cyan-500 text-white rounded-xl font-medium hover:bg-cyan-600 transition-colors"
            >
              Join Waitlist
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
