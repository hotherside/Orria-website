"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
    {
        name: "Free",
        price: "$0",
        period: "/forever",
        features: [
            "Unlimited decision creation",
            "Unlimited voting & comments",
            "Free AI summaries (all decisions)",
            "3 premium AI insights",
            "Profile & search",
            "Push notifications",
        ],
        cta: "Get Started",
        popular: false,
        headerGradient: "from-gray-100 to-gray-200",
    },
    {
        name: "Pro",
        price: "$9.99",
        period: "/month",
        features: [
            "Everything in Free",
            "Unlimited premium AI insights",
            "Anonymous posting",
            "Unlimited priority boosts",
            "Advanced analytics",
            "Early access to features",
        ],
        cta: "Upgrade to Pro",
        popular: true,
        headerGradient: "from-purple-500 to-indigo-600",
        note: "Or $99.99/year (save 17%)",
    },
    {
        name: "À La Carte",
        price: "$0.99",
        period: "/each",
        features: [
            { text: "AI Insight Pack", bold: true },
            { text: "1 premium AI analysis", sub: true },
            { text: "Priority Boost Pack", bold: true },
            { text: "48-hour visibility boost", sub: true },
            { text: "Try before subscribing", italic: true },
        ],
        cta: "Buy Now",
        popular: false,
        headerGradient: "from-blue-100 to-blue-200",
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight"
                    >
                        Simple, transparent pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500"
                    >
                        Start free, upgrade when you need more
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PricingCard({ plan, index }: { plan: any; index: number }) {
    const isPro = plan.name === "Pro";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-3xl p-8 border ${isPro ? 'border-purple-200 shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-xl'} bg-white flex flex-col`}
        >
            {isPro && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 font-medium">{plan.period}</span>
                </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature: any, i: number) => {
                    if (typeof feature === 'string') {
                        return (
                            <li key={i} className="flex items-start gap-3">
                                <Check className={`w-5 h-5 ${isPro ? 'text-purple-600' : 'text-gray-400'} shrink-0 mt-0.5`} />
                                <span className="text-gray-600">{feature}</span>
                            </li>
                        );
                    } else {
                        return (
                            <li key={i} className={`flex items-start gap-3 ${feature.sub ? 'pl-8 text-sm opacity-80' : ''} ${feature.italic ? 'italic mt-2' : ''}`}>
                                {!feature.sub && !feature.italic && (
                                    <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                )}
                                <span className={`text-gray-600 ${feature.bold ? 'font-bold' : ''}`}>
                                    {feature.text}
                                </span>
                            </li>
                        );
                    }
                })}
            </ul>

            <button
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${isPro
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1'
                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                    }`}
            >
                {plan.cta}
            </button>
            {plan.note && <p className="text-center text-xs text-gray-500 mt-4 font-medium">{plan.note}</p>}
        </motion.div>
    );
}
