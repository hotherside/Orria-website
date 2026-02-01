"use client";

import { motion } from "framer-motion";

export function Philosophy() {
    return (
        <section className="relative py-32 bg-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-transparent" />
            <div className="absolute top-0 right-0 w-1/2 h-1 bg-gradient-to-l from-purple-500 to-transparent" />

            <div className="max-w-5xl mx-auto px-6">
                {/* Main Philosophy Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="text-6xl text-purple-200 mb-8">&ldquo;</div>
                    <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                        We are who we are, where we are, what we do —{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            based on the choices we make.
                        </span>
                    </blockquote>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Your life is an autobiography written in choices. Most of it goes unrecorded.
                    </p>
                </motion.div>

                {/* The Problem - 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <ProblemCard
                        number="01"
                        title="We decide in the dark"
                        description="Thousands of choices made without structure, without clarity, without outside perspective."
                        delay={0}
                    />
                    <ProblemCard
                        number="02"
                        title="We forget what we chose"
                        description="The job you almost didn't take. The city you considered. The conversation that changed everything. Lost."
                        delay={0.1}
                    />
                    <ProblemCard
                        number="03"
                        title="We never learn from our past"
                        description="Years pass without understanding our patterns. The crossroads moments that defined us — never reflected upon."
                        delay={0.2}
                    />
                </div>

                {/* The Promise */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-br from-slate-900 to-purple-950 text-center overflow-hidden"
                >
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

                    <div className="relative">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Orria exists so you can look back and understand
                        </h3>
                        <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
                            how you became who you are.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300">
                                Capture decisions
                            </span>
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300">
                                Get clarity
                            </span>
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300">
                                Close the loop
                            </span>
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300">
                                Discover patterns
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ProblemCard({
    number,
    title,
    description,
    delay,
}: {
    number: string;
    title: string;
    description: string;
    delay: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="text-center p-8"
        >
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold text-lg mb-6 mx-auto">
                {number}
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
            <p className="text-gray-500 leading-relaxed">{description}</p>
        </motion.div>
    );
}
