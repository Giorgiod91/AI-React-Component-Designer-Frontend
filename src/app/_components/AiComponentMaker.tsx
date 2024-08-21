"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaRobot,
  FaRegCopy,
  FaRegQuestionCircle,
  FaCopy,
} from "react-icons/fa";

type Props = {};
//::TODO:: make that predefined component to also work with the python backend and open API

function AiComponentMaker({}: Props) {
  const [component, setComponent] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [preDefinedComponent, setPreDefinedComponent] = useState<string | null>(
    null,
  );

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
        setComponent(data.component_code);
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (err) {
      setError(`Failed to generate component: ${(err as Error).message}`);
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  function createTheFetchedComponent() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: component || "" }} />
      </div>
    );
  }

  const CopyToClipBoard = () => {
    navigator.clipboard.writeText(
      component ? component : "No component to copy",
    );
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#e3e8e9] to-[#ffffff] px-6 py-10 text-center">
      <motion.h1
        className="mb-8 flex items-center justify-center space-x-2 text-5xl font-bold text-[#4696bc]"
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
        className="w-full max-w-lg transform space-y-8 rounded-lg bg-white p-8 shadow-xl ring-1 ring-[#c2a6b8] transition-transform hover:scale-105"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative">
          <select
            className="block w-full rounded-lg border border-[#c2a6b8] bg-[#f9f9f9] px-4 py-3 text-[#6b5b6d] shadow-md transition duration-300 ease-in-out focus:ring-2 focus:ring-[#4696bc]"
            onChange={(e) => setPreDefinedComponent(e.target.value)}
            value={preDefinedComponent || ""}
          >
            <option value="" disabled>
              Select a component type
            </option>
            <option value="Button">Button</option>
            <option value="Navbar">Navbar</option>
            <option value="Footer">Footer</option>
            <option value="Input Form">Input Form</option>
            <option value="LandingPage">LandingPage</option>
          </select>
        </div>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the component you want to generate"
          className="w-full rounded-lg border border-[#c2a6b8] bg-[#f9f9f9] p-4 text-[#6b5b6d] shadow-md transition duration-300 ease-in-out focus:ring-2 focus:ring-[#4696bc]"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#4696bc] p-3 text-white opacity-90 transition duration-300 ease-in-out hover:bg-[#357aab] focus:outline-none focus:ring-4 focus:ring-[#357aab]/50"
        >
          {loading ? "Generating..." : "Generate Component"}
        </button>
      </motion.form>

      {loading && (
        <motion.div
          className="mt-6 text-[#4696bc]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaRegQuestionCircle className="mr-2 inline-block" />
          Loading...
        </motion.div>
      )}

      {component && createTheFetchedComponent()}

      {component && (
        <motion.button
          onClick={CopyToClipBoard}
          className="mt-6 flex items-center rounded-lg bg-[#4696bc] p-3 text-white transition duration-300 ease-in-out hover:bg-[#357aab] focus:outline-none focus:ring-4 focus:ring-[#357aab]/50"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <FaCopy className="mr-2" />
          Copy
        </motion.button>
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
