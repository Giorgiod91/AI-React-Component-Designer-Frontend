import React from "react";

const NewOne = () => {
  return (
    <footer className="bg-gray-800 py-6 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex space-x-4">
          <a
            href="https://youtube.com"
            className="text-blue-400 hover:text-blue-300"
          >
            YouTube
          </a>
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:text-blue-300"
          >
            Twitter
          </a>
          <a href="#section1" className="text-blue-400 hover:text-blue-300">
            Section 1
          </a>
          <a href="#section2" className="text-blue-400 hover:text-blue-300">
            Section 2
          </a>
        </div>
        <p className="text-gray-400">
          © 2023 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default NewOne;
