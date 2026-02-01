"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Search, Download } from "lucide-react";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#FAF8F3]/95 backdrop-blur-xl border-b border-[#EDE8DC] py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="text-2xl font-bold text-[#3D3833] font-[var(--font-playfair)]" style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}>
            Orria
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#pillars">How It Works</NavLink>
          <NavLink href="#who">Who It&apos;s For</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <Link
            href="#download"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E07B5B] text-white rounded-xl font-semibold hover:bg-[#D16A4A] hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Download size={18} />
            Download
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#3D3833]/80 hover:text-[#3D3833]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#FAF8F3]/98 backdrop-blur-xl border-b border-[#EDE8DC] p-6 flex flex-col gap-4"
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
              className="w-full text-center inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#E07B5B] text-white rounded-xl font-semibold hover:bg-[#D16A4A] transition-colors"
            >
              <Download size={18} />
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
      className="text-[#5C554C] hover:text-[#3D3833] font-medium transition-colors relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E07B5B] transition-all duration-300 group-hover:w-full" />
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
      className="text-lg font-medium text-[#5C554C] hover:text-[#3D3833] py-2 border-b border-[#EDE8DC] last:border-0 transition-colors"
    >
      {children}
    </Link>
  );
}
