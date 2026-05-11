"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    src: "/dashboard.png",
    label: "Analytics Dashboard",
    tag: "dashboard",
  },
  {
    src: "/landingPage.png",
    label: "Landing Page",
    tag: "hero section",
  },
  {
    src: "/form.png",
    label: "Form Component",
    tag: "form",
  },
  {
    src: "/demo1.png",
    label: "UI Elements",
    tag: "buttons & badges",
  },
];

const SLIDE_DURATION = 3200;

const LandingPage = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const step = 50;
    const increment = (step / SLIDE_DURATION) * 100;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p + increment >= 100) {
          setCurrent((c) => (c + 1) % slides.length);
          return 0;
        }
        return p + increment;
      });
    }, step);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#09090B] pt-20 pb-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#6366F1]/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-[#00D4FF]/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-[#6366F1]/6 blur-[80px]" />
      </div>

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff22 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#00D4FF]">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#00D4FF] opacity-75" />
          </span>
          AI-powered · Free to try · No signup required
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mb-6 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Turn any prompt into{" "}
          <br className="hidden sm:block" />
          a{" "}
          <span className="bg-gradient-to-r from-[#00D4FF] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
            React component
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mb-10 max-w-xl text-lg text-zinc-400 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Describe what you need. Get clean TypeScript + Tailwind code in
          seconds. Copy it straight into your project.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mb-16 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="#get-started"
            className="group flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-white/10 transition-all hover:bg-zinc-100 active:scale-95"
          >
            Try it yourself
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#demo"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
          >
            See examples
          </a>
        </motion.div>

        {/* Browser mockup with slideshow */}
        <motion.div
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          {/* Browser chrome */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111117] shadow-2xl shadow-black/60">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/8 bg-[#0D0D12] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <div className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex flex-1 items-center justify-center px-4">
                <div className="flex w-full max-w-xs items-center gap-2 rounded-md bg-white/5 px-3 py-1 text-xs text-zinc-500">
                  <span>⚡</span>
                  <span>reactify.ai/generate</span>
                </div>
              </div>
              {/* Current slide tag */}
              <div className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                {slides[current]?.tag}
              </div>
            </div>

            {/* Image area */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#0A0A0F]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={slides[current]?.src}
                  alt={slides[current]?.label}
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Label overlay */}
              <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-black/70 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-md">
                {slides[current]?.label}
              </div>
            </div>

            {/* Progress bar + dots */}
            <div className="border-t border-white/8 bg-[#0D0D12] px-4 py-3">
              {/* Progress bar */}
              <div className="mb-3 h-0.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6366F1]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Dot indicators */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-6 bg-[#00D4FF]"
                          : "w-1.5 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-zinc-600">
                  {current + 1} / {slides.length}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { value: "10×", label: "faster than coding by hand" },
            { value: "500+", label: "components generated" },
            { value: "0", label: "config required" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-black text-white">{stat.value}</p>
              <p className="text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPage;
