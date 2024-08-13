import React from "react";

type Props = {};

const LandingPage: React.FC<Props> = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col justify-between gap-16 px-6 pb-10 pt-8 sm:px-8 sm:pt-12 lg:flex-row lg:gap-20 lg:pb-20">
      <div className="lg:w-1/2">
        <h1 className="mb-6 text-4xl font-bold text-[#6B7280]">
          Design React Components with Reactify.AI 😮
        </h1>
        <p className="mb-6 text-lg text-[#6B7280]">
          Create, preview, and customize your React components effortlessly with
          our AI-powered tool.
        </p>
        <a
          href="#get-started"
          className="bg-bright-cyan rounded bg-[#00B8D9] px-6 py-3 text-white"
        >
          Start Designing
        </a>
      </div>

      <div className="lg:w-1/2">
        <img src="" alt="App preview" className="w-full" />
      </div>
    </section>
  );
};

export default LandingPage;
