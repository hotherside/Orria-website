import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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

export const metadata: Metadata = {
  title: "Orria — Think it through. Remember what shaped you.",
  description:
    "Your AI decision companion. Talk through dilemmas, get perspectives from 4 distinct AI personalities, and build a journal of the choices that define your journey.",
  keywords:
    "decision making, AI companion, decision journal, life choices, decision fatigue, AI perspectives, career decisions",
  openGraph: {
    title: "Orria — Think it through. Remember what shaped you.",
    description:
      "Your AI decision companion. Talk through dilemmas, get perspectives from 4 distinct AI personalities, and build a journal of the choices that define your journey.",
    type: "website",
    url: "https://orria.app",
    siteName: "Orria",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orria — Think it through. Remember what shaped you.",
    description:
      "Your AI decision companion. Talk through dilemmas, get perspectives from 4 distinct AI personalities, and build a journal of the choices that define your journey.",
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
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="antialiased bg-cream-100 text-text-primary">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
