"use client";

import { motion } from "framer-motion";
import {
    Bot,
    Users,
    Target,
    Lock,
    History,
    Zap
} from "lucide-react";

const features = [
    {
        icon: <Bot className="w-8 h-8 text-white" />,
        title: "Dual-Tier AI System",
        description: "Free AI summaries for every decision. Premium analysis with 4 AI agents offering different perspectives: The Optimist, Analyst, Pragmatist, and Skeptic.",
        gradient: "from-purple-500 to-indigo-500",
        delay: 0.1
    },
    {
        icon: <Users className="w-8 h-8 text-white" />,
        title: "Community Wisdom",
        description: "Vote, comment, and share experiences with a global community. Get perspectives from people who've faced similar decisions.",
        gradient: "from-blue-500 to-cyan-500",
        delay: 0.2
    },
    {
        icon: <Target className="w-8 h-8 text-white" />,
        title: "Track Outcomes",
        description: "Close the loop from decision to resolution. Rate satisfaction, share what happened, and learn from your decision-making patterns.",
        gradient: "from-emerald-500 to-green-500",
        delay: 0.3
    },
    {
        icon: <Lock className="w-8 h-8 text-white" />,
        title: "Private When Needed",
        description: "Post anonymously for sensitive topics. Your identity stays hidden while you get the perspectives you need for career or personal matters.",
        gradient: "from-amber-500 to-orange-500",
        delay: 0.4
    },
    {
        icon: <History className="w-8 h-8 text-white" />,
        title: "Decision Timeline",
        description: "See the full history of your decision: votes, comments, AI insights, and outcomes. Build wisdom by recognizing patterns in your choices.",
        gradient: "from-pink-500 to-rose-500",
        delay: 0.5
    },
    {
        icon: <Zap className="w-8 h-8 text-white" />,
        title: "Priority Boost",
        description: "Need faster feedback? Boost your decision to the top of the feed for 48 hours. Get more votes and comments when you need them most.",
        gradient: "from-purple-600 to-violet-600",
        delay: 0.6
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight"
                    >
                        Everything you need to <br className="hidden md:block" />
                        decide with confidence
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-gray-500 leading-relaxed"
                    >
                        AI intelligence meets human wisdom in a platform designed for your most important choices.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature }: { feature: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: feature.delay }}
            className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        >
            <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
                {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed">{feature.description}</p>
        </motion.div>
    );
}
