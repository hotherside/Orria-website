"use client";

import Link from "next/link";
import { Twitter, Instagram, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">✨</span>
                            <span className="text-xl font-bold text-white">Orria</span>
                        </Link>
                        <p className="text-slate-400 mb-2 leading-relaxed">
                            Your decisions. Your story.
                        </p>
                        <p className="text-slate-500 text-sm mb-6">
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
                        <h4 className="font-bold text-white mb-6">Product</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#pillars">How It Works</FooterLink>
                            <FooterLink href="#who">Who It's For</FooterLink>
                            <FooterLink href="#pricing">Pricing</FooterLink>
                            <FooterLink href="#download">Download</FooterLink>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-white mb-6">Support</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/support">Help Center</FooterLink>
                            <FooterLink href="mailto:hojae.hotherside@gmail.com">Contact Us</FooterLink>
                            <FooterLink href="/community-guidelines">Community Guidelines</FooterLink>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-white mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/support">Terms of Service</FooterLink>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; {currentYear} Orria. All rights reserved.</p>
                    <p>
                        Made with ✨ in Australia by{" "}
                        <a
                            href="mailto:hojae.hotherside@gmail.com"
                            className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
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
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-purple-400 transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-slate-400 hover:text-purple-400 transition-colors">
                {children}
            </Link>
        </li>
    );
}
