import React from "react";
const LetSee = () => {
  return (
    <form className="flex flex-col space-y-4 p-4">
      {" "}
      <input
        type="text"
        placeholder="Name"
        className="rounded-lg border border-gray-300 bg-pink-100 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />{" "}
      <input
        type="email"
        placeholder="Email"
        className="rounded-lg border border-gray-300 bg-yellow-100 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />{" "}
      <input
        type="password"
        placeholder="Password"
        className="rounded-lg border border-gray-300 bg-green-100 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />{" "}
      <textarea
        placeholder="Message"
        className="rounded-lg border border-gray-300 bg-purple-100 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />{" "}
      <button
        type="submit"
        className="rounded-lg bg-blue-500 p-2 text-white transition duration-200 hover:bg-blue-600"
      >
        {" "}
        Submit{" "}
      </button>{" "}
    </form>
  );
};
export default LetSee;
