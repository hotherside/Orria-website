"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const pricingPlans = [
    {
        name: "Free",
        tagline: "Start capturing your story",
        price: "$0",
        period: "/forever",
        description: "Everything you need to begin your decision journal.",
        features: [
            "Unlimited private decisions",
            "Free AI summaries on every choice",
            "3 premium AI insights to try",
            "Full community access",
            "Deadline reminders",
            "Outcome tracking",
        ],
        cta: "Get Started Free",
        popular: false,
        buttonClass: "bg-slate-900 text-white hover:bg-slate-800",
    },
    {
        name: "Pro",
        tagline: "For decisions that matter most",
        price: "$9.99",
        period: "/month",
        description: "Unlimited depth for the serious decision-maker.",
        features: [
            "Everything in Free, plus:",
            "Unlimited premium AI insights",
            "All 4 AI agent perspectives",
            "Anonymous posting",
            "Priority visibility boosts",
            "Advanced pattern analytics",
        ],
        cta: "Upgrade to Pro",
        popular: true,
        buttonClass: "bg-white text-purple-600 hover:bg-purple-50",
        note: "Or $99.99/year (save 17%)",
    },
    {
        name: "Pay as You Go",
        tagline: "Try before you commit",
        price: "$0.99",
        period: "/each",
        description: "Buy individual premium features when you need them.",
        features: [
            "AI Insight Pack",
            "One premium analysis with all 4 agents",
            "Priority Boost Pack",
            "48-hour visibility boost",
            "No subscription required",
        ],
        cta: "Buy When Needed",
        popular: false,
        buttonClass: "bg-blue-600 text-white hover:bg-blue-700",
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                        Pricing
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Start free.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            Upgrade when you're ready.
                        </span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Your story doesn't cost anything to start. Premium unlocks deeper insights when decisions really matter.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} index={index} />
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-gray-500 mt-12"
                >
                    All prices in AUD. Cancel anytime.
                </motion.p>
            </div>
        </section>
    );
}

function PricingCard({ plan, index }: { plan: typeof pricingPlans[0]; index: number }) {
    const isPro = plan.popular;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative rounded-3xl overflow-hidden ${isPro ? 'scale-105 z-10' : ''}`}
        >
            {isPro && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-2 text-sm font-bold flex items-center justify-center gap-2">
                    <Sparkles size={16} />
                    Most Popular
                </div>
            )}

            <div className={`h-full p-8 ${isPro ? 'pt-14 bg-gradient-to-br from-purple-600 to-indigo-600' : 'bg-white border border-gray-100 shadow-lg'}`}>
                <div className="mb-8">
                    <h3 className={`text-2xl font-bold ${isPro ? 'text-white' : 'text-gray-900'} mb-1`}>
                        {plan.name}
                    </h3>
                    <p className={`text-sm ${isPro ? 'text-purple-200' : 'text-gray-500'} mb-4`}>
                        {plan.tagline}
                    </p>
                    <div className="flex items-baseline gap-1">
                        <span className={`text-5xl font-black ${isPro ? 'text-white' : 'text-gray-900'}`}>
                            {plan.price}
                        </span>
                        <span className={`${isPro ? 'text-purple-200' : 'text-gray-500'} font-medium`}>
                            {plan.period}
                        </span>
                    </div>
                    {plan.note && (
                        <p className="text-sm text-purple-200 mt-2">{plan.note}</p>
                    )}
                </div>

                <p className={`text-sm ${isPro ? 'text-purple-100' : 'text-gray-600'} mb-6`}>
                    {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                        <li key={i} className={`flex items-start gap-3 ${isPro ? 'text-white' : 'text-gray-600'}`}>
                            <Check className={`w-5 h-5 ${isPro ? 'text-purple-200' : 'text-purple-500'} shrink-0 mt-0.5`} />
                            <span className="text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${plan.buttonClass} hover:-translate-y-1`}>
                    {plan.cta}
                </button>
            </div>
        </motion.div>
    );
}
