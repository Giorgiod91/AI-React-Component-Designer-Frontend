"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpand, FaTimes } from "react-icons/fa";

const showcaseItems = [
  {
    src: "/landingPage.png",
    label: "Landing Page",
    description: "Full-page hero section with gradient and animated CTA",
  },
  {
    src: "/dashboard.png",
    label: "Dashboard",
    description: "Analytics dashboard with real-time charts and KPI cards",
  },
  {
    src: "/form.png",
    label: "Form",
    description: "Multi-step form with validation and smooth transitions",
  },
  {
    src: "/demo1.png",
    label: "UI Components",
    description: "Button variants, badges, and interactive elements",
  },
];

const Demo1 = () => {
  const [selected, setSelected] = useState<(typeof showcaseItems)[0] | null>(
    null,
  );

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
            Showcase
          </p>
          <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl">
            Built entirely with{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#6366F1] bg-clip-text text-transparent">
              Reactify.AI
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Every component below was generated from a single text prompt — no
            manual coding required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelected(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#111117] transition-all hover:border-white/20"
            >
              <div className="aspect-video w-full overflow-hidden bg-[#0D0D12]">
                <img
                  src={item.src}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-sm font-semibold text-white">
                  {item.label}
                </h3>
                <p className="text-xs text-zinc-500">{item.description}</p>
              </div>
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <FaExpand className="text-xs" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#111117] shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <h3 className="font-semibold text-white">
                      {selected.label}
                    </h3>
                    <p className="text-xs text-zinc-500">
                      {selected.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </div>
                <img
                  src={selected.src}
                  alt={selected.label}
                  className="max-h-[75vh] w-full object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Demo1;
