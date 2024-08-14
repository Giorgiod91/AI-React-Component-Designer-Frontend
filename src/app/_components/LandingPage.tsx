import React from "react";

type Props = {};

const LandingPage: React.FC<Props> = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col justify-between gap-16 px-6 pb-10 pt-8 sm:px-8 sm:pt-12 lg:flex-row lg:gap-20 lg:pb-20">
      {/* Left Section */}
      <div className="lg:w-1/2">
        <h1 className="animate-fade-in-down mb-6 text-5xl font-bold text-[#6B7280]">
          Design React Components with Reactify.AI 😮
        </h1>
        <p className="animate-fade-in mb-6 text-lg text-[#6B7280]">
          Create, preview, and customize your React components effortlessly with
          our AI-powered tool. 🛠️
        </p>
        <a
          href="#get-started"
          className="bg-bright-cyan rounded bg-[#00B8D9] px-6 py-3 text-lg font-semibold text-white transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Start Designing 🚀
        </a>
      </div>

      {/* Right Section */}
      <div className="animate-fade-in flex items-center justify-center lg:w-1/2">
        <img
          src="your-image-path.jpg"
          alt="App preview"
          className="w-full rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
        />
      </div>
    </section>
  );
};

export default LandingPage;
