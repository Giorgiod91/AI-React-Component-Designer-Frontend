"use client";
import React, { useState } from "react";

type Props = {};

function AiComponentMaker({}: Props) {
  const [component, setComponent] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-indigo-600 p-6">
      <div className="w-full max-w-7xl rounded-2xl border border-gray-300 bg-white p-12 shadow-2xl">
        <h1 className="mb-8 text-center text-5xl font-extrabold text-gray-900">
          AI Component Maker
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <select
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-md transition duration-300 ease-in-out focus:ring-2 focus:ring-teal-500"
              onChange={(e) => setPrompt(e.target.value)}
            >
              <option disabled selected className="bg-teal-500 text-white">
                Here are some ideas
              </option>
              <option>Button</option>
              <option>Navbar</option>
              <option>Footer</option>
              <option>Input Form</option>
              <option>LandingPage</option>
            </select>
          </div>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a description of the component you want to generate"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-4 shadow-sm transition duration-300 ease-in-out focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-teal-600 p-3 font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-teal-700"
          >
            {loading ? "Generating..." : "Generate Component"}
          </button>
        </form>
        {loading && (
          <div className="mt-5 text-center text-gray-300">Loading...</div>
        )}
        <h2 className="mt-8 text-center text-xl font-medium text-gray-800">
          You can now just copy the code and paste it into your own React app.
        </h2>
        {error && <div className="mt-5 text-center text-red-500">{error}</div>}
        {component && createTheFetchedComponent()}
      </div>
    </div>
  );
}

export default AiComponentMaker;
