import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-slate-100 bg-slate-950`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
