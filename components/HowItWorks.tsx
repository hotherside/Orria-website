"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Share Your Decision",
        description: "Create your decision with 2 options and images. Choose a category, set an optional deadline, and post publicly or anonymously.",
        gradient: "from-purple-500 to-indigo-600",
    },
    {
        number: "02",
        title: "Get Dual Intelligence",
        description: "Receive instant AI summaries on every decision. Opt-in for premium analysis with 4 AI agent perspectives, plus community votes and comments.",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        number: "03",
        title: "Decide & Track",
        description: "Make your choice, mark it resolved, rate your satisfaction, and share the outcome. Learn from your patterns and help others learn too.",
        gradient: "from-emerald-500 to-green-500",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight"
                    >
                        Simple process, <br className="hidden md:block" />
                        powerful results
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500"
                    >
                        From decision to clarity in three easy steps
                    </motion.p>
                </div>

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <Step key={index} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Step({ step, index }: { step: any; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
        >
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-6 mx-auto lg:mx-0`}>
                    {step.number}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-lg text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    {step.description}
                </p>
            </div>

            {/* Visual */}
            <div className="flex-1 w-full relative">
                <div className={`aspect-video rounded-3xl bg-gradient-to-br ${step.gradient} opacity-10 absolute inset-0 transform rotate-3 translate-x-3 translate-y-3 lg:translate-x-6 lg:translate-y-6`}></div>
                <div className="aspect-video rounded-3xl bg-white shadow-xl border border-gray-100 relative overflow-hidden flex items-center justify-center p-8 group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    {/* Abstract Visual based on index */}
                    {index === 0 && (
                        <div className="w-3/4 h-3/4 bg-gray-50 rounded-2xl shadow-inner flex items-center justify-center">
                            <div className="text-gray-300 font-bold text-6xl opacity-30">VS</div>
                        </div>
                    )}
                    {index === 1 && (
                        <div className="flex gap-4 items-center">
                            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-2xl">🤖</div>
                            <div className="h-1 w-12 bg-gray-200"></div>
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl">🧠</div>
                        </div>
                    )}
                    {index === 2 && (
                        <div className="w-full max-w-[200px] h-4 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "70%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`h-full bg-gradient-to-r ${step.gradient}`}
                            />
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
