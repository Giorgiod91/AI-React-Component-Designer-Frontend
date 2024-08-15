"use client";
import React, { useState } from "react";

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-5">
      <h1>AI Component Maker</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 rounded-lg bg-white p-6 shadow-lg"
      >
        <div className="relative">
          <select
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-md transition duration-300 ease-in-out focus:ring-2 focus:ring-teal-500"
            onChange={(e) => setPreDefinedComponent(e.target.value)}
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
          className="mb-2 w-full border p-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-blue-500 p-2 text-white"
        >
          {loading ? "Generating..." : "Generate Component"}
        </button>
      </form>
      {loading && <div className="mt-5">Loading...</div>}
      <h1>
        You can now Just Copy the Code and Paste it into your own react app
      </h1>
      <button onClick={CopyToClipBoard} className="bg-[#00B8D9]">
        Copy
      </button>
      {error && <div className="mt-5 text-red-500">{error}</div>}
      {component && createTheFetchedComponent()}
    </div>
  );
}

export default AiComponentMaker;
