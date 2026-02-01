"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Download } from "lucide-react";

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
                    ? "bg-slate-950/95 backdrop-blur-xl border-b border-white/10 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">✨</span>
                    <span className="text-xl font-bold text-white">
                        Orria
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#pillars">How It Works</NavLink>
                    <NavLink href="#who">Who It's For</NavLink>
                    <NavLink href="#pricing">Pricing</NavLink>
                    <Link
                        href="#download"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-xl font-semibold hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <Download size={18} />
                        Download
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-white/80 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/98 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
                    <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="#pillars">
                        How It Works
                    </MobileNavLink>
                    <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="#who">
                        Who It's For
                    </MobileNavLink>
                    <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="#pricing">
                        Pricing
                    </MobileNavLink>
                    <Link
                        href="#download"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full text-center inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-slate-900 rounded-xl font-semibold"
                    >
                        <Download size={18} />
                        Download
                    </Link>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-white/70 hover:text-white font-medium transition-colors"
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
            className="text-lg font-medium text-white/80 hover:text-white py-2 border-b border-white/5 last:border-0"
        >
            {children}
        </Link>
    );
}
