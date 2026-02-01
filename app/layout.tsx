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
  title: "Orria - Your Decisions. Your Story.",
  description: "Your life is a story of choices. Orria is the decision journal that helps you capture, clarify, and close the loop on the decisions that shape who you become.",
  keywords: "decision journal, AI decisions, life choices, decision tracker, decision making app",
  openGraph: {
    title: "Orria - Your Decisions. Your Story.",
    description: "Your life is a story of choices. Capture decisions, get AI perspectives, close the loop, and watch your story build.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orria - Your Decisions. Your Story.",
    description: "Your life is a story of choices. Capture decisions, get AI perspectives, close the loop, and watch your story build.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased bg-[#FAF8F3] text-[#3D3833]">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
