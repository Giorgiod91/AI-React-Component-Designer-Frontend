"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCopy, FaCheck, FaCode } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface ResponseData {
  component_code?: string;
}

function isResponseData(data: unknown): data is ResponseData {
  return (
    typeof data === "object" &&
    data !== null &&
    "component_code" in data &&
    typeof (data as ResponseData).component_code === "string"
  );
}

const examplePrompts = [
  "A responsive navbar with logo and mobile hamburger menu",
  "A dark pricing card with gradient border and CTA button",
  "An animated hero section with gradient headline",
  "A user profile card with avatar and social links",
];

function AiComponentMaker() {
  const [componentCode, setComponentCode] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);
    setComponentCode(null);

    try {
      const response = await fetch("/api/proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data: unknown = await response.json();
      if (isResponseData(data)) {
        setComponentCode(data.component_code ?? null);
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch {
      setError("Failed to generate component. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="get-started" className="relative bg-[#09090B] px-6 py-32">
      {/* Subtle top separator glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#00D4FF]">
            Your turn
          </p>
          <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl">
            Describe it.{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#6366F1] bg-clip-text text-transparent">
              Get the code.
            </span>
          </h2>
          <p className="mx-auto max-w-md text-zinc-400">
            Type what you want to build. Reactify.AI handles the rest — clean
            TypeScript, Tailwind, ready to paste.
          </p>
        </motion.div>

        {/* Generator card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-[#111117] overflow-hidden"
        >
          {/* Input area */}
          <form onSubmit={handleSubmit} className="p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. A dark pricing card with gradient border..."
                className="flex-1 rounded-xl bg-white/5 px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none ring-1 ring-white/10 transition-all focus:ring-[#00D4FF]/40"
              />
              <button
                type="submit"
                disabled={loading || !prompt.trim()}
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-100 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {loading ? (
                  <ClipLoader color="#000" size={14} loading />
                ) : (
                  <>
                    Generate
                    <FaArrowRight className="text-xs" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Example chips */}
          {!componentCode && !loading && (
            <div className="border-t border-white/8 px-4 py-3">
              <p className="mb-2.5 text-xs text-zinc-600">Try an example:</p>
              <div className="flex flex-wrap gap-2">
                {examplePrompts.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPrompt(p)}
                    className="rounded-lg border border-white/8 bg-white/4 px-3 py-1.5 text-xs text-zinc-400 transition-all hover:border-[#00D4FF]/30 hover:text-white"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-3 rounded-xl border border-red-500/20 bg-red-500/8 px-4 py-3 text-sm text-red-400"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result */}
        <AnimatePresence>
          {componentCode && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#111117]"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <FaCode className="text-[#00D4FF]" />
                  <span>Component.tsx</span>
                </div>
                <CopyToClipboard text={componentCode} onCopy={handleCopy}>
                  <button className="flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all hover:bg-white/10 hover:text-white">
                    {copied ? (
                      <>
                        <FaCheck className="text-green-400" /> Copied!
                      </>
                    ) : (
                      <>
                        <FaCopy /> Copy code
                      </>
                    )}
                  </button>
                </CopyToClipboard>
              </div>
              <pre className="max-h-96 overflow-auto p-5 text-sm leading-relaxed text-zinc-300">
                <code>{componentCode}</code>
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AiComponentMaker;
