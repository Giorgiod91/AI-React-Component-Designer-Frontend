"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaRobot,
  FaRegQuestionCircle,
  FaCopy,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";

import Fadeloader from "react-spinners/ClipLoader";

interface ResponseData {
  component_code?: string;
}

function AiComponentMaker() {
  const [componentCode, setComponentCode] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showCode, setShowCode] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: ResponseData = await response.json();
      if (typeof data.component_code === "string") {
        setComponentCode(data.component_code);
        console.log("Fetched component code:", data.component_code);
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (err) {
      setError(`Failed to generate component: ${(err as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  const CopyToClipBoard = () => {
    if (componentCode) {
      void navigator.clipboard.writeText(componentCode);
    } else {
      alert("No component to copy");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 py-10 text-center">
      <motion.h1
        className="mb-8 flex items-center justify-center space-x-2 text-5xl font-bold text-[#00B8D9]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <FaRobot className="text-6xl" />
        <span>AI Component Maker</span>
        <FaRocket className="text-6xl" />
      </motion.h1>
      <p>Create the component with a prompt, wait, then click on copy</p>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg transform space-y-8 rounded-lg bg-white p-8 shadow-lg ring-1 ring-[#00B8D9] transition-transform hover:scale-105"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the component you want to generate"
          className="w-full rounded-lg border border-[#00B8D9] bg-gray-200 p-4 text-gray-800 shadow-md transition duration-300 ease-in-out focus:ring-2 focus:ring-[#00B8D9]"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#00B8D9] p-3 text-white opacity-90 transition duration-300 ease-in-out hover:bg-[#0077a1] focus:outline-none focus:ring-4 focus:ring-[#0077a1]/50"
        >
          {loading ? "Generating..." : "Generate Component"}
        </button>
      </motion.form>

      {loading && (
        <motion.div
          className="mt-6 text-[#00B8D9]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Fadeloader color="#00B8D9" loading={loading} size={50} />
        </motion.div>
      )}

      {componentCode && (
        <div className="mt-8 w-full max-w-4xl">
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold text-[#00B8D9]">
              Component Preview
            </h3>
            <div
              className="rounded-lg bg-white p-4 shadow-lg"
              style={{ minHeight: "300px" }}
            >
              New Feature Coming soon
            </div>
          </div>

          <motion.button
            onClick={() => setShowCode(!showCode)}
            className="mt-6 flex items-center rounded-lg bg-[#00B8D9] p-3 text-white transition duration-300 ease-in-out hover:bg-[#0077a1] focus:outline-none focus:ring-4 focus:ring-[#0077a1]/50"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            {showCode ? (
              <FaEyeSlash className="mr-2" />
            ) : (
              <FaEye className="mr-2" />
            )}
            {showCode ? "Hide Code" : "Show Code"}
          </motion.button>

          {showCode && (
            <div className="mx-auto my-4 w-full max-w-4xl">
              <div className="rounded-lg bg-white p-4 shadow-lg">
                <div
                  className="code-mirror-container"
                  style={{ height: "300px", overflow: "auto" }}
                >
                  <CodeMirror
                    value={componentCode || ""}
                    options={{
                      mode: "javascript",
                      theme: "material",
                      lineNumbers: true,
                      readOnly: true,
                    }}
                    // @ts-ignore
                    onBeforeChange={() => {
                      console.log("onBeforeChange");
                    }}
                  />
                </div>
              </div>
              <motion.button
                onClick={CopyToClipBoard}
                className="mt-6 flex items-center rounded-lg bg-[#00B8D9] p-3 text-white transition duration-300 ease-in-out hover:bg-[#0077a1] focus:outline-none focus:ring-4 focus:ring-[#0077a1]/50"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaCopy className="mr-2" />
                Copy
              </motion.button>
            </div>
          )}
        </div>
      )}

      {error && (
        <motion.div
          className="mt-6 text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.div>
      )}
    </div>
  );
}

export default AiComponentMaker;
