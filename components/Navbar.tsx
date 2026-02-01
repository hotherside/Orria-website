"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
      {/* Floating pill navbar - microsoft.ai style */}
      <div
        className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
          isScrolled
            ? "bg-[#FAF8F3]/95 backdrop-blur-xl shadow-lg border border-[#EDE8DC]/50"
            : "bg-[#FAF8F3]/80 backdrop-blur-md shadow-md"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="text-xl text-[#3D3833]"
            style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 600 }}
          >
            Orria
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink href="#pillars">How It Works</NavLink>
          <NavLink href="#who">Who It&apos;s For</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <Link
            href="#download"
            className="ml-2 px-5 py-2 bg-[#3D3833] text-white rounded-full text-sm font-medium hover:bg-[#2a2520] transition-colors duration-300"
          >
            Download
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#3D3833]/80 hover:text-[#3D3833] transition-colors"
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
            className="md:hidden mt-2 bg-[#FAF8F3]/98 backdrop-blur-xl rounded-2xl border border-[#EDE8DC]/50 shadow-xl p-4 flex flex-col gap-1"
          >
            <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="#pillars">
              How It Works
            </MobileNavLink>
            <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="#who">
              Who It&apos;s For
            </MobileNavLink>
            <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="#pricing">
              Pricing
            </MobileNavLink>
            <Link
              href="#download"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full text-center py-3 bg-[#3D3833] text-white rounded-xl font-medium hover:bg-[#2a2520] transition-colors"
            >
              Download
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-sm text-[#5C554C] hover:text-[#3D3833] font-medium transition-colors rounded-full hover:bg-[#EDE8DC]/50"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-4 py-3 text-[#5C554C] hover:text-[#3D3833] hover:bg-[#EDE8DC]/50 font-medium rounded-xl transition-colors"
    >
      {children}
    </Link>
  );
}
