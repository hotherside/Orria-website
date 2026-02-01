"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles, Timer, RefreshCw } from "lucide-react";

const pillars = [
    {
        number: "01",
        icon: <BookOpen className="w-8 h-8" />,
        title: "Capture",
        tagline: "Log the crossroads moments",
        description: "Every choice you make shapes who you become. Log your decisions — minor or critical. Create a living record of your journey.",
        color: "blue",
        gradient: "from-blue-500 to-cyan-500",
        bgGradient: "from-blue-500/10 to-cyan-500/10",
        borderColor: "border-blue-500/20",
        textColor: "text-blue-400",
        bullets: [
            "Document decisions big and small",
            "Add context and options",
            "Private by default",
        ],
    },
    {
        number: "02",
        icon: <Sparkles className="w-8 h-8" />,
        title: "Clarity",
        tagline: "See what you can't see alone",
        description: "4 AI perspectives show you angles you never considered. Community wisdom from people who've been exactly where you are.",
        color: "purple",
        gradient: "from-purple-500 to-pink-500",
        bgGradient: "from-purple-500/10 to-pink-500/10",
        borderColor: "border-purple-500/20",
        textColor: "text-purple-400",
        bullets: [
            "The Optimist sees opportunities",
            "The Analyst weighs the logic",
            "The Skeptic spots the risks",
        ],
    },
    {
        number: "03",
        icon: <Timer className="w-8 h-8" />,
        title: "Commit",
        tagline: "Break the indecision cycle",
        description: "Set a deadline. Get gentle nudges. Stop letting choices linger for weeks. Make the decision and move forward.",
        color: "orange",
        gradient: "from-orange-500 to-amber-500",
        bgGradient: "from-orange-500/10 to-amber-500/10",
        borderColor: "border-orange-500/20",
        textColor: "text-orange-400",
        bullets: [
            "Set decision deadlines",
            "Receive smart reminders",
            "End analysis paralysis",
        ],
    },
    {
        number: "04",
        icon: <RefreshCw className="w-8 h-8" />,
        title: "Close the Loop",
        tagline: "Watch your story build",
        description: "Record what happened. Rate your satisfaction. Discover patterns over time. Your decisions become your autobiography.",
        color: "green",
        gradient: "from-emerald-500 to-green-500",
        bgGradient: "from-emerald-500/10 to-green-500/10",
        borderColor: "border-emerald-500/20",
        textColor: "text-emerald-400",
        bullets: [
            "Track outcomes and satisfaction",
            "Discover your patterns",
            "Build decision-making wisdom",
        ],
    },
];

export function FourPillars() {
    return (
        <section id="pillars" className="relative py-32 bg-slate-950 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                        The 4 Pillars
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Your Decision Journey
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        From crossroads to clarity. Every decision follows the same path.
                    </p>
                </motion.div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {pillars.map((pillar, index) => (
                        <PillarCard key={index} pillar={pillar} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-slate-500 mb-4">
                        Ready to start capturing your story?
                    </p>
                    <a
                        href="#download"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:-translate-y-1 transition-all duration-300"
                    >
                        Get Orria Free
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${pillar.bgGradient} border ${pillar.borderColor} backdrop-blur-sm hover:scale-[1.02] transition-all duration-500`}
        >
            {/* Number */}
            <div className="absolute top-6 right-6 text-6xl font-black text-white/5">
                {pillar.number}
            </div>

            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {pillar.icon}
            </div>

            {/* Content */}
            <div className="relative">
                <h3 className={`text-2xl lg:text-3xl font-bold text-white mb-2`}>
                    {pillar.title}
                </h3>
                <p className={`text-lg font-medium ${pillar.textColor} mb-4`}>
                    {pillar.tagline}
                </p>
                <p className="text-slate-400 leading-relaxed mb-6">
                    {pillar.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2">
                    {pillar.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400">
                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pillar.gradient}`} />
                            {bullet}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
