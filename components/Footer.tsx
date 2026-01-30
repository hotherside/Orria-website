import Link from "next/link";
import { Twitter, Instagram, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">✨</span>
                            <span className="text-xl font-bold text-gray-900">Orria</span>
                        </Link>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            Make better decisions together. <br />
                            AI insights and community wisdom.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="https://twitter.com/orria" icon={<Twitter size={20} />} label="Twitter" />
                            <SocialLink href="https://instagram.com/orria" icon={<Instagram size={20} />} label="Instagram" />
                            <SocialLink href="mailto:hojae.hotherside@gmail.com" icon={<Mail size={20} />} label="Email" />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="col-span-1">
                        <h4 className="font-bold text-gray-900 mb-6">Product</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#features">Features</FooterLink>
                            <FooterLink href="#how-it-works">How It Works</FooterLink>
                            <FooterLink href="#pricing">Pricing</FooterLink>
                            <FooterLink href="#download">Download</FooterLink>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-gray-900 mb-6">Support</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/support">Help Center</FooterLink>
                            <FooterLink href="mailto:support@orria.app">Contact Us</FooterLink>
                            <FooterLink href="#download">Download App</FooterLink>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/support">Support</FooterLink>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {currentYear} Orria. All rights reserved.</p>
                    <p>
                        Made with ✨ by <a href="mailto:hojae.hotherside@gmail.com" className="text-gray-900 hover:text-purple-600 font-medium transition-colors">Hojae</a>
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
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-gray-500 hover:text-purple-600 transition-colors">
                {children}
            </Link>
        </li>
    );
}
