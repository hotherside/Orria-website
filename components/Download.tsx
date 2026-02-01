"use client";

import { motion } from "framer-motion";
import { Download as DownloadIcon, Apple, Smartphone } from "lucide-react";

export function Download() {
    return (
        <section id="download" className="relative py-32 bg-gradient-to-b from-slate-950 to-purple-950 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Eyebrow */}
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm font-medium mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Available Now on iOS
                    </span>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Start capturing
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            your story today
                        </span>
                    </h2>

                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                        Your life is a story of choices. It's time to start recording the chapters.
                    </p>

                    {/* Download Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <a
                            href="#"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-1 transition-all duration-300"
                        >
                            <Apple size={24} className="group-hover:scale-110 transition-transform" />
                            <div className="text-left">
                                <div className="text-xs text-slate-500 font-normal">Download on the</div>
                                <div className="text-lg -mt-0.5">App Store</div>
                            </div>
                        </a>

                        <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-slate-400 rounded-2xl cursor-not-allowed">
                            <Smartphone size={24} />
                            <div className="text-left">
                                <div className="text-xs font-normal">Coming Soon</div>
                                <div className="text-lg -mt-0.5 text-white">Google Play</div>
                            </div>
                        </div>
                    </div>

                    {/* Free tier callout */}
                    <p className="text-slate-500">
                        Free forever. No credit card required.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                >
                    <StatItem label="Decisions Logged" value="Free" />
                    <StatItem label="AI Perspectives" value="4" />
                    <StatItem label="Premium Trials" value="3" />
                </motion.div>
            </div>
        </section>
    );
}

function StatItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="text-center">
            <div className="text-3xl font-black text-white mb-2">{value}</div>
            <div className="text-sm text-slate-500">{label}</div>
        </div>
    );
}
