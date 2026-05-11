"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaCode,
  FaPaintBrush,
  FaLayerGroup,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    icon: FaBolt,
    title: "Instant generation",
    description:
      "Go from idea to working React component in under 10 seconds. No boilerplate, no context switching.",
    accent: "#00D4FF",
    span: "col-span-1",
  },
  {
    icon: FaCode,
    title: "Clean TypeScript output",
    description:
      "Every component is generated with proper TypeScript types, props interfaces, and follows modern React patterns.",
    accent: "#6366F1",
    span: "col-span-1",
  },
  {
    icon: FaPaintBrush,
    title: "Tailwind CSS styling",
    description:
      "Components ship with utility-first Tailwind classes — fully responsive and easy to customize to your design system.",
    accent: "#00D4FF",
    span: "col-span-1",
  },
  {
    icon: FaLayerGroup,
    title: "Copy & integrate",
    description:
      "One click to copy generated code. Drop it straight into your project — it works out of the box.",
    accent: "#6366F1",
    span: "col-span-1",
  },
  {
    icon: FaShieldAlt,
    title: "Production-ready patterns",
    description:
      "Components follow accessibility best practices (ARIA labels, keyboard navigation) so you ship quality code from day one.",
    accent: "#00D4FF",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: FaRocket,
    title: "Zero setup required",
    description:
      "No API keys, no complex configuration. Open the tool and start generating immediately.",
    accent: "#6366F1",
    span: "col-span-1",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function About() {
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
            Why Reactify.AI
          </p>
          <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#6366F1] bg-clip-text text-transparent">
              ship faster
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Stop spending hours on repetitive UI work. Let AI handle the
            scaffolding so you can focus on what matters.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={item}
                className={`${feature.span} group rounded-2xl border border-white/8 bg-[#111117] p-6 transition-all hover:border-white/20 hover:bg-[#16161f]`}
              >
                <div
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${feature.accent}18` }}
                >
                  <Icon style={{ color: feature.accent }} className="text-lg" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
