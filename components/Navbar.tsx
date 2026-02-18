"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Home, User, LineChart, Rocket, Send } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", shortLabel: "Home", icon: Home },
  { href: "/about", label: "About", shortLabel: "About", icon: User },
  { href: "/research", label: "Research", shortLabel: "Research", icon: LineChart },
  { href: "/future", label: "Future State", shortLabel: "Future", icon: Rocket },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      {/* Desktop nav — single element that morphs */}
      <div
        className={cn(
          "hidden md:flex items-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          isScrolled
            ? "gap-1 px-2 py-2.5 bg-cream-50/95 backdrop-blur-xl shadow-lg border border-cream-300/50"
            : "gap-1 px-5 py-2.5 bg-cream-50/80 backdrop-blur-md shadow-md w-[calc(100vw-3rem)] max-w-6xl justify-between"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center px-2 py-1">
          <span
            className={cn(
              "text-text-primary transition-all duration-500",
              isScrolled ? "text-[17px]" : "text-xl"
            )}
            style={{
              fontFamily: "var(--font-playfair), Playfair Display, serif",
              fontWeight: 600,
            }}
          >
            Orria
          </span>
        </Link>

        {/* Divider — only compact */}
        <div
          className={cn(
            "w-px bg-cream-300/60 transition-all duration-500",
            isScrolled ? "h-5 opacity-100" : "h-0 opacity-0"
          )}
        />

        {/* Links */}
        <div className={cn(
          "flex items-center transition-all duration-500",
          isScrolled ? "gap-0.5" : "gap-0.5"
        )}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center font-medium rounded-full transition-all duration-300",
                  isScrolled
                    ? "gap-1.5 px-2.5 py-1.5 text-[11px]"
                    : "gap-0 px-3.5 py-1.5 text-sm",
                  isActive
                    ? "text-cyan-600 bg-cyan-500/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-cream-300/40"
                )}
              >
                <Icon
                  size={isScrolled ? 14 : 0}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  className={cn(
                    "transition-all duration-500 flex-shrink-0",
                    isScrolled ? "w-3.5 opacity-100" : "w-0 opacity-0"
                  )}
                />
                <span className={cn(
                  "whitespace-nowrap transition-all duration-500",
                  isScrolled ? "text-[11px]" : "text-sm"
                )}>
                  {isScrolled ? link.shortLabel : link.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Divider — only compact */}
        <div
          className={cn(
            "w-px bg-cream-300/60 transition-all duration-500",
            isScrolled ? "h-5 opacity-100" : "h-0 opacity-0"
          )}
        />

        {/* CTA */}
        <Link
          href="#waitlist"
          className={cn(
            "flex items-center bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-600 transition-all duration-500 shadow-sm whitespace-nowrap",
            isScrolled
              ? "gap-1.5 px-3.5 py-1.5 text-[11px]"
              : "gap-0 px-5 py-2 text-sm"
          )}
        >
          <Send
            size={12}
            strokeWidth={2}
            className={cn(
              "transition-all duration-500 flex-shrink-0",
              isScrolled ? "w-3 opacity-100" : "w-0 opacity-0"
            )}
          />
          <span>{isScrolled ? "Waitlist" : "Join Waitlist"}</span>
        </Link>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-5 py-2.5 rounded-full bg-cream-50/90 backdrop-blur-xl shadow-md border border-cream-300/40">
          <Link href="/">
            <span
              className="text-lg text-text-primary"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
                fontWeight: 600,
              }}
            >
              Orria
            </span>
          </Link>
          <button
            className="p-1.5 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mt-2 bg-cream-50/98 backdrop-blur-xl rounded-2xl border border-cream-300/50 shadow-xl p-4 flex flex-col gap-1"
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
      </div>
    </nav>
  );
}
