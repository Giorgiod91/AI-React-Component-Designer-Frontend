import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="px-6 py-10 text-center">
      <h1 className="animate-bounce text-7xl font-bold text-[#6B7280]">
        What is Reactify.AI about? 🤖
      </h1>
      <p className="mt-6 text-2xl text-[#6B7280] transition-opacity duration-1000 ease-in-out hover:opacity-80">
        Reactify.AI is a tool that helps you design React components with the
        help of AI. 🚀
      </p>
      <p className="mt-4 text-xl text-[#6B7280] transition-opacity duration-1000 ease-in-out hover:opacity-80">
        It's a simple yet powerful tool that allows you to create, preview, and
        customize your React components effortlessly. 🎨
      </p>
      <p className="mt-4 text-xl text-[#6B7280] transition-opacity duration-1000 ease-in-out hover:opacity-80">
        Save so much time by using this app instead of coding it yourself! ⏳
      </p>
    </div>
  );
}

export default About;
