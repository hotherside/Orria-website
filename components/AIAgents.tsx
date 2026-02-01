"use client";

import { motion } from "framer-motion";
import { Sun, BarChart3, Wrench, AlertTriangle } from "lucide-react";

const agents = [
    {
        icon: <Sun className="w-6 h-6" />,
        name: "The Optimist",
        description: "Sees the opportunities and potential. Helps you envision the best possible outcomes.",
        color: "text-amber-500",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200",
        quote: "What could go right?",
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        name: "The Analyst",
        description: "Weighs the logic and data. Breaks down the decision with structured frameworks.",
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        quote: "What do the facts say?",
    },
    {
        icon: <Wrench className="w-6 h-6" />,
        name: "The Pragmatist",
        description: "Considers feasibility and implementation. Focuses on what actually works.",
        color: "text-purple-500",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        quote: "What's realistic?",
    },
    {
        icon: <AlertTriangle className="w-6 h-6" />,
        name: "The Skeptic",
        description: "Spots the risks and hidden costs. The devil's advocate you need but don't always want.",
        color: "text-rose-500",
        bgColor: "bg-rose-50",
        borderColor: "border-rose-200",
        quote: "What could go wrong?",
    },
];

export function AIAgents() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-6">
                            AI Perspectives
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                            4 minds are better
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                than one
                            </span>
                        </h2>
                        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                            Every major decision deserves multiple perspectives. Our AI agents think about your choice from angles you might never consider.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Free users get instant AI summaries on every decision. Premium unlocks all 4 agent perspectives for deep analysis — the optimist, the analyst, the pragmatist, and the skeptic.
                        </p>
                    </motion.div>

                    {/* Agents Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {agents.map((agent, index) => (
                            <AgentCard key={index} agent={agent} index={index} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function AgentCard({
    agent,
    index,
}: {
    agent: typeof agents[0];
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`group p-6 rounded-2xl ${agent.bgColor} border ${agent.borderColor} hover:scale-105 transition-all duration-300`}
        >
            <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center ${agent.color} mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {agent.icon}
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">{agent.name}</h4>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">{agent.description}</p>
            <p className={`text-sm font-medium ${agent.color} italic`}>
                &ldquo;{agent.quote}&rdquo;
            </p>
        </motion.div>
    );
}
