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
    <div className="flex min-h-screen max-w-7xl flex-col items-center justify-center bg-gray-100 p-5">
      <h1>AI Component Maker</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 rounded-lg bg-white p-6 shadow-lg"
      >
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
      {error && <div className="mt-5 text-red-500">{error}</div>}
      {component && createTheFetchedComponent()}
    </div>
  );
}

export default AiComponentMaker;
