"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ChevronDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-purple-950">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
            </div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

            <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        The decision journal for your life story
                    </span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-[1.05]"
                >
                    Your Life is a Story
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-[length:200%_auto] animate-gradient">
                        of Choices
                    </span>
                </motion.h1>

                {/* Philosophy statement */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xl md:text-2xl text-slate-400 mb-6 max-w-3xl mx-auto leading-relaxed font-light"
                >
                    Every decision you make shapes who you become.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Yet we decide in the dark. Forget what we chose. Never learn from our past.
                    <br />
                    <span className="text-purple-400 font-medium">Orria changes that.</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                >
                    <Link
                        href="#download"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-1 transition-all duration-300 text-lg"
                    >
                        <Download size={22} className="group-hover:animate-bounce" />
                        Download for iOS
                    </Link>
                    <Link
                        href="#pillars"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 text-lg backdrop-blur-sm"
                    >
                        See How It Works
                    </Link>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                >
                    Your decisions. Your story.
                </motion.p>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-slate-500"
                    >
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <ChevronDown size={20} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
