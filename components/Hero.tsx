"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-6 leading-[1.05]">
                            Make Better Decisions{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-purple)] to-purple-600">
                                Together
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                            The world's first social decision-making platform. Get AI-powered insights and authentic community wisdom to move forward with clarity.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                            <Link
                                href="#download"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-primary-purple)] to-purple-600 text-white rounded-2xl font-semibold shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-1 transition-all duration-300 text-lg"
                            >
                                <Download size={20} />
                                Download for iOS
                            </Link>
                            <div className="px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium text-gray-600">
                                Coming Soon
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 italic">
                            No videos. No trends. Just decisions, discussions, and clarity.
                        </p>
                    </motion.div>

                    {/* Visual - Phone Mockup */}
                    <div className="relative flex justify-center lg:justify-end perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, rotateY: -30, rotateX: 10, y: 100 }}
                            animate={{ opacity: 1, rotateY: -6, rotateX: 6, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                            whileHover={{ rotateY: 0, rotateX: 0 }}
                            className="relative z-10"
                        >
                            <PhoneMockup />
                        </motion.div>

                        {/* Background Decorations */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-200/30 to-blue-200/30 blur-3xl rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PhoneMockup() {
    return (
        <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[340px] h-[700px] bg-gray-900 rounded-[55px] p-3 shadow-2xl ring-1 ring-white/10 relative"
        >
            {/* Notch */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-b-2xl z-20 flex justify-center pt-2">
                <div className="w-16 h-1.5 bg-gray-800/50 rounded-full" />
            </div>

            {/* Screen */}
            <div className="w-full h-full bg-gray-50 rounded-[44px] overflow-hidden relative border border-gray-800">
                {/* Status Bar */}
                <div className="h-12 w-full bg-white flex justify-between items-center px-6 pt-2 text-xs font-semibold">
                    <span>9:41</span>
                    <div className="flex gap-1.5">
                        <div className="w-4 h-2.5 bg-black rounded-sm" />
                        <div className="w-0.5 h-2.5 bg-black rounded-sm" />
                    </div>
                </div>

                {/* App Content */}
                <div className="p-5 h-full overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-extrabold text-gray-900">Orria</h2>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                            HO
                        </div>
                    </div>

                    {/* Spark Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm mb-6 border border-gray-100">
                        <div className="text-4xl mb-3">✨</div>
                        <h3 className="text-lg font-bold mb-2">Spark a new insight?</h3>
                        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                            The best decisions are made with multiple perspectives. Start yours now.
                        </p>
                        <button className="w-full py-3 bg-gradient-to-r from-[var(--color-primary-purple)] to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/10">
                            + Create Decision
                        </button>
                    </div>

                    {/* Activity */}
                    <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-3 ml-1">Your Activity</h4>
                        <div className="grid grid-cols-3 gap-3">
                            <ActivityCard icon="✓" number="12" label="Finalized" />
                            <ActivityCard icon="👍" number="48" label="Votes" />
                            <ActivityCard icon="⏱" number="2" label="Pending" />
                        </div>
                    </div>

                    {/* Feed Item Preview */}
                    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 opacity-60">
                        <div className="h-4 w-24 bg-gray-100 rounded-md mb-3" />
                        <div className="h-3 w-full bg-gray-100 rounded-md mb-2" />
                        <div className="h-3 w-2/3 bg-gray-100 rounded-md" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function ActivityCard({ icon, number, label }: { icon: string; number: string; label: string }) {
    return (
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-xl mb-1">{icon}</div>
            <div className="font-bold text-xl text-gray-900">{number}</div>
            <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">{label}</div>
        </div>
    );
}
