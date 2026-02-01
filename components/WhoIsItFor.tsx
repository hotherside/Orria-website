"use client";

import { motion } from "framer-motion";
import { Brain, Compass, Users } from "lucide-react";

const personas = [
    {
        icon: <Brain className="w-10 h-10" />,
        title: "For the Overthinker",
        question: "Stuck in analysis paralysis?",
        description: "You've been spinning on the same decision for weeks. Every angle leads to more questions. You need fresh perspectives to break free.",
        benefits: [
            "See your choice through 4 different AI lenses",
            "Set a deadline to break the loop",
            "Get nudged when you're stuck",
        ],
        outcome: "No more spinning for weeks on the same question.",
        gradient: "from-purple-500 to-indigo-500",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-100",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
    },
    {
        icon: <Compass className="w-10 h-10" />,
        title: "For the Reflector",
        question: "Want to understand your journey?",
        description: "You know your past choices shaped who you are, but you can't quite see the patterns. You want to learn from your own story.",
        benefits: [
            "Track every decision — big and small",
            "Discover patterns over time",
            "Look back and see how far you've come",
        ],
        outcome: "Build wisdom from your own experience.",
        gradient: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-100",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
    },
    {
        icon: <Users className="w-10 h-10" />,
        title: "For the Community Seeker",
        question: "Need perspectives beyond your bubble?",
        description: "Your friends are biased. Your family has opinions. You want honest input from people who've actually been in your shoes.",
        benefits: [
            "Share when you want input (private by default)",
            "Learn from others at the same crossroads",
            "Give back by helping others decide",
        ],
        outcome: "Real help. No judgment.",
        gradient: "from-emerald-500 to-green-500",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-100",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
    },
];

export function WhoIsItFor() {
    return (
        <section id="who" className="py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                        Who is Orria for?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Built for the moments
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            that matter most
                        </span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Whether you're stuck, curious, or seeking perspective — Orria meets you where you are.
                    </p>
                </motion.div>

                {/* Persona Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {personas.map((persona, index) => (
                        <PersonaCard key={index} persona={persona} index={index} />
                    ))}
                </div>

                {/* Decision Types */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-500 mb-6">Perfect for decisions like:</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "Career transitions",
                            "Financial choices",
                            "Relationship milestones",
                            "Life changes",
                            "Education paths",
                            "Health decisions",
                            "Creative directions",
                            "Any crossroads moment",
                        ].map((type, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 border border-gray-100 shadow-sm"
                            >
                                {type}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function PersonaCard({
    persona,
    index,
}: {
    persona: typeof personas[0];
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative p-8 rounded-3xl ${persona.bgColor} border ${persona.borderColor} hover:shadow-xl transition-all duration-500`}
        >
            {/* Icon */}
            <div className={`w-20 h-20 rounded-2xl ${persona.iconBg} ${persona.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {persona.icon}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {persona.title}
            </h3>
            <p className={`text-lg font-semibold bg-gradient-to-r ${persona.gradient} bg-clip-text text-transparent mb-4`}>
                {persona.question}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
                {persona.description}
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-6">
                {persona.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${persona.gradient} mt-2 shrink-0`} />
                        {benefit}
                    </li>
                ))}
            </ul>

            {/* Outcome */}
            <div className="pt-6 border-t border-gray-200">
                <p className="font-semibold text-gray-900">{persona.outcome}</p>
            </div>
        </motion.div>
    );
}
