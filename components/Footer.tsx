"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-200 border-t border-cream-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
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
            <p
              className="text-text-primary mb-2 leading-relaxed italic text-sm"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
              }}
            >
              Think it through. Remember what shaped you.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Your AI decision companion for life&apos;s crossroads.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4
              className="text-text-primary mb-4 text-sm"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
                fontWeight: 600,
              }}
            >
              Product
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/potentials">Potentials & Research</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              className="text-text-primary mb-4 text-sm"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
                fontWeight: 600,
              }}
            >
              Support
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/support">Help Center</FooterLink>
              <FooterLink href="mailto:hello@orria.app">Contact Us</FooterLink>
              <FooterLink href="/community-guidelines">
                Community Guidelines
              </FooterLink>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-text-primary mb-4 text-sm"
              style={{
                fontFamily: "var(--font-playfair), Playfair Display, serif",
                fontWeight: 600,
              }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-cream-300 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-text-muted">
          <p>&copy; {currentYear} Orria. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with care in Sydney by{" "}
            <a
              href="mailto:hello@orria.app"
              className="text-cyan-500 hover:text-cyan-600 font-medium transition-colors"
            >
              Hojae
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="list-none">
      <Link
        href={href}
        className="text-text-secondary text-sm hover:text-cyan-500 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
