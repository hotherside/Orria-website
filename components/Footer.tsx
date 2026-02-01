"use client";

import Link from "next/link";
import { Twitter, Instagram, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#F5F1E8] border-t border-[#EDE8DC] pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">✨</span>
                            <span
                                className="text-xl text-[#3D3833]"
                                style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 600 }}
                            >
                                Orria
                            </span>
                        </Link>
                        <p
                            className="text-[#3D3833] mb-2 leading-relaxed italic"
                            style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}
                        >
                            Your decisions. Your story.
                        </p>
                        <p className="text-[#5C554C] text-sm mb-6 leading-relaxed">
                            The decision journal that helps you capture, clarify, and close the loop.
                        </p>
                        <div className="flex gap-3">
                            <SocialLink href="https://twitter.com/orria" icon={<Twitter size={18} />} label="Twitter" />
                            <SocialLink href="https://instagram.com/orria" icon={<Instagram size={18} />} label="Instagram" />
                            <SocialLink href="mailto:hojae.hotherside@gmail.com" icon={<Mail size={18} />} label="Email" />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="col-span-1">
                        <h4
                            className="text-[#3D3833] mb-6"
                            style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 600 }}
                        >
                            Product
                        </h4>
                        <ul className="space-y-4">
                            <FooterLink href="#pillars">How It Works</FooterLink>
                            <FooterLink href="#who">Who It&apos;s For</FooterLink>
                            <FooterLink href="#pricing">Pricing</FooterLink>
                            <FooterLink href="#download">Download</FooterLink>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4
                            className="text-[#3D3833] mb-6"
                            style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 600 }}
                        >
                            Support
                        </h4>
                        <ul className="space-y-4">
                            <FooterLink href="/support">Help Center</FooterLink>
                            <FooterLink href="mailto:hojae.hotherside@gmail.com">Contact Us</FooterLink>
                            <FooterLink href="/community-guidelines">Community Guidelines</FooterLink>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4
                            className="text-[#3D3833] mb-6"
                            style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif', fontWeight: 600 }}
                        >
                            Legal
                        </h4>
                        <ul className="space-y-4">
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/support">Terms of Service</FooterLink>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#EDE8DC] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#8C857A]">
                    <p>&copy; {currentYear} Orria. All rights reserved.</p>
                    <p>
                        Made with ✨ in Australia by{" "}
                        <a
                            href="mailto:hojae.hotherside@gmail.com"
                            className="text-[#E07B5B] hover:text-[#C4826D] font-medium transition-colors"
                        >
                            Hojae
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#EDE8DC] text-[#5C554C] hover:bg-[#E07B5B]/10 hover:border-[#E07B5B]/30 hover:text-[#E07B5B] transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-[#5C554C] hover:text-[#E07B5B] transition-colors">
                {children}
            </Link>
        </li>
    );
}
