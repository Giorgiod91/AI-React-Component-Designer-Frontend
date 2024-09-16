"use client";
import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col justify-between gap-16 overflow-x-hidden px-6 pb-10 pt-8 sm:px-8 sm:pt-12 lg:flex-row lg:gap-20 lg:pb-20">
      {/* Left Section */}
      <div className="lg:w-1/2">
        <motion.h1
          className="mb-6 text-5xl font-black leading-snug text-[#6B7280] sm:text-6xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ color: "#00B8D9", transition: { duration: 0.3 } }}
        >
          Build Apps Fast with{" "}
          <span
            className="inline-block bg-neutral text-[#00A5C4]"
            style={{
              transform: "skewX(-10deg)",
              padding: "0 10px",
            }}
          >
            Reactify.AI
          </span>{" "}
          <motion.span
            className="inline-block"
            whileHover={{
              rotate: [0, 10, 20, 30, 40, 50, 60, 70, 80],
              x: [0, 10, 20, 30, 40, 50, 60, 70, 80],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            🚀
          </motion.span>
        </motion.h1>

        <motion.p
          className="mb-6 text-lg text-[#6B7280]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Transform your ideas into fully functional React apps faster than
          ever. <strong>Reactify.AI</strong> lets you build, preview, and
          customize components in minutes—all by simply providing prompts. ⏱️
        </motion.p>
        <motion.a
          href="#get-started"
          className="bg-bright-cyan rounded bg-[#00B8D9] px-6 py-3 text-lg font-semibold text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#00A5C4] focus:outline-none focus:ring-4 focus:ring-[#00A5C4]/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Start Designing 🚀
        </motion.a>
      </div>
      {/* Right Section */}
      <div className="flex items-center justify-center lg:w-1/2">
        <motion.img
          src="/landingPage.jpg"
          alt="App preview"
          className="w-full rounded-lg shadow-lg"
          initial={{ scale: 0.8, opacity: 0, x: 300 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95, rotate: -2 }}
        />
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-2 bg-[#00B8D9]"
        style={{ width: "100%" }}
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
};

export default LandingPage;
