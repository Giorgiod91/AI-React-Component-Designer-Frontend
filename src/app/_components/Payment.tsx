"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "€5",
    credits: "10",
    description: "Perfect for trying out the platform.",
    features: [
      "10 component generations",
      "TypeScript & Tailwind output",
      "Copy to clipboard",
      "Credits never expire",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "€20",
    credits: "50",
    description: "For developers who ship regularly.",
    features: [
      "50 component generations",
      "TypeScript & Tailwind output",
      "Copy to clipboard",
      "Credits never expire",
      "Priority generation queue",
    ],
    cta: "Get Pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "€35",
    credits: "100",
    description: "For teams building at scale.",
    features: [
      "100 component generations",
      "TypeScript & Tailwind output",
      "Copy to clipboard",
      "Credits never expire",
      "Priority generation queue",
      "Team sharing",
    ],
    cta: "Get Team",
    highlighted: false,
  },
];

function Payment() {
  return (
    <section className="bg-[#09090B] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#00D4FF]">
            Pricing
          </p>
          <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl">
            Pay only for what you{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#6366F1] bg-clip-text text-transparent">
              use
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-zinc-400">
            No subscriptions, no lock-in. Buy credits and use them whenever you
            need to generate components. They never expire.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-sm text-green-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            Free to use during beta
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-6 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-[#00D4FF]/10 to-[#6366F1]/10 border border-[#00D4FF]/30"
                  : "border border-white/10 bg-[#111117]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6366F1] px-4 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-1 text-sm font-semibold text-zinc-400">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-zinc-500">
                    / {plan.credits} credits
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-500">{plan.description}</p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <FaCheck
                      className={`flex-shrink-0 ${plan.highlighted ? "text-[#00D4FF]" : "text-zinc-500"}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-xl py-3 text-sm font-semibold transition-all active:scale-95 ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-zinc-100"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Payment;
