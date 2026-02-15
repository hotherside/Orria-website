"use client";

import Link from "next/link";
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
            <p className="text-text-secondary text-sm leading-relaxed mb-3">
              Your AI decision companion for life&apos;s crossroads.
            </p>
            <a
              href="https://www.instagram.com/orria.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-muted hover:text-cyan-500 transition-colors text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              @orria.app
            </a>
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
