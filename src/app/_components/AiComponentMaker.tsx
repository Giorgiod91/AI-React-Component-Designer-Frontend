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
import JsxParser from "react-jsx-parser";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";

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
      const response = await fetch("http://localhost:5000/component", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.component_code) {
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
      navigator.clipboard.writeText(componentCode);
    } else {
      alert("No component to copy");
    }
  };

  const createDynamicComponent = (code: string) => {
    try {
      return (
        <JsxParser
          components={{}}
          jsx={code}
          renderInWrapper={false}
          onError={(e) => {
            console.error("Error rendering component code:", e);
            setError(
              "Error rendering component code. Check the console for details.",
            );
          }}
        />
      );
    } catch (e) {
      console.error("Error creating dynamic component:", e);
      setError(
        "Error creating dynamic component. Check the console for details.",
      );
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
          <FaRegQuestionCircle className="mr-2 inline-block" />
          Loading...
        </motion.div>
      )}

      {componentCode && (
        <div className="mt-8 w-full max-w-4xl">
          <div className="mb-4"></div>

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
                    onBeforeChange={() => {}}
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
