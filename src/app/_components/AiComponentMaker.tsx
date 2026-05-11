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
  "A responsive navbar with logo and mobile menu",
  "A dark mode pricing card with CTA button",
  "An animated hero section with gradient background",
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

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: unknown = await response.json();

      if (isResponseData(data)) {
        setComponentCode(data.component_code ?? null);
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (err) {
      setError(`Failed to generate component. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-[#09090B] px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#00D4FF]">
            Live demo
          </p>
          <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl">
            Try it{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#6366F1] bg-clip-text text-transparent">
              right now
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-zinc-400">
            Describe a component in plain English and get production-ready React
            code in seconds.
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-white/10 bg-[#111117] p-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2 p-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the component you want to generate..."
                className="flex-1 rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none ring-1 ring-white/10 transition-all focus:ring-[#00D4FF]/50"
              />
              <button
                type="submit"
                disabled={loading || !prompt.trim()}
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-100 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <ClipLoader color="#000" size={16} loading />
                ) : (
                  <>
                    Generate
                    <FaArrowRight className="text-xs" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Example prompts */}
          {!componentCode && !loading && (
            <div className="border-t border-white/8 p-4">
              <p className="mb-3 text-xs text-zinc-600">Try an example:</p>
              <div className="flex flex-wrap gap-2">
                {examplePrompts.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPrompt(p)}
                    className="rounded-lg border border-white/8 bg-white/5 px-3 py-1.5 text-xs text-zinc-400 transition-all hover:border-white/20 hover:text-white"
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
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result */}
        <AnimatePresence>
          {componentCode && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 rounded-2xl border border-white/10 bg-[#111117] overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <FaCode className="text-[#00D4FF]" />
                  <span>Generated component</span>
                </div>
                <CopyToClipboard text={componentCode} onCopy={handleCopy}>
                  <button className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all hover:bg-white/10 hover:text-white">
                    {copied ? (
                      <>
                        <FaCheck className="text-green-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <FaCopy />
                        Copy code
                      </>
                    )}
                  </button>
                </CopyToClipboard>
              </div>
              <pre className="max-h-96 overflow-auto p-6 text-sm leading-relaxed text-zinc-300">
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
