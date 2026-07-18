import type { Metadata } from "next";
import { Geist, Instrument_Serif, Inter, Playfair_Display } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Orria — Think it through. Remember what shaped you.",
  description:
    "Your AI thinking companion. Open a blank canvas, speak or type what's on your mind, and get perspectives from four AI personalities who see what you might not see on your own.",
  keywords:
    "decision making, AI companion, decision journal, life choices, AI perspectives, career decisions, thinking partner, thinking companion",
  openGraph: {
    title: "Orria — Think it through. Remember what shaped you.",
    description:
      "Your AI thinking companion. Open a blank canvas, speak or type what's on your mind, and get perspectives from four AI personalities who see what you might not see on your own.",
    type: "website",
    url: "https://orria.app",
    siteName: "Orria",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orria — Think it through. Remember what shaped you.",
    description:
      "Your AI thinking companion. Open a blank canvas, speak or type what's on your mind, and get perspectives from four AI personalities who see what you might not see on your own.",
  },
  metadataBase: new URL("https://orria.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${geist.variable} ${instrumentSerif.variable} scroll-smooth`}
    >
      <body className="antialiased bg-cream-100 text-text-primary">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
