"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function Payment() {
  return (
    <div className="relative min-h-screen px-6 py-10 text-center">
      <h1 className="mb-6 text-4xl font-bold text-[#00B8D9]">
        Pay-As-You-Go! 🚀
      </h1>
      <p className="mb-8 text-lg text-[#6B7280]">
        Purchase credits and use them to generate React components.
      </p>
      <h2 className="mb-12 text-2xl font-semibold text-[#6B7280]">
        Flexible Pricing, Buy Only What You Need
      </h2>
      <p className="p-5 text-red-600">Free to use for limited time!</p>

      <div className="flex flex-col justify-center gap-8 md:flex-row">
        <motion.div
          className="flex flex-col rounded-lg bg-gray-800 p-6 text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h2 className="mb-4 text-3xl font-bold">10 Credits</h2>
          <p className="mb-4 text-2xl">€5</p>
          <div className="mb-4 text-left">
            <p className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2 text-green-400" /> 10 Components
            </p>
            <p className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2 text-green-400" /> Lifetime Credits
            </p>
            <p className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2 text-green-400" /> No Expiration
            </p>
          </div>
          <button className="rounded-lg bg-[#00B8D9] px-4 py-2 text-white transition duration-300 hover:bg-[#00A5C4]">
            <a href="#" className="no-underline">
              Buy Now 🚀
            </a>
          </button>
        </motion.div>

        <motion.div
          className="flex flex-col rounded-lg bg-gray-800 p-6 text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h2 className="mb-4 text-3xl font-bold">50 Credits</h2>
          <p className="mb-4 text-2xl">€20</p>
          <div className="mb-4 text-left">
            <p className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2 text-green-400" /> 50 Components
            </p>
            <p className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2 text-green-400" /> Lifetime Credits
            </p>
            <p className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2 text-green-400" /> No Expiration
            </p>
          </div>
          <button className="rounded-lg bg-[#00B8D9] px-4 py-2 text-white transition duration-300 hover:bg-[#00A5C4]">
            <a href="#" className="no-underline">
              Buy Now 🚀
            </a>
          </button>
        </motion.div>

        <motion.div
          className="flex flex-col rounded-lg bg-gray-800 p-6 text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h2 className="mb-4 text-3xl font-bold">
            100 Credits
            <motion.span
              animate={{
                y: [0, -10, -20, -30, -40, -50, -60, -70, -80],
                x: [0, 10, 20, 30, 40, 50, 60, 70, 80],
                opacity: [1, 0.8, 0.6, 0.4, 0.2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="ml-2 inline-block"
            >
              🚀
            </motion.span>
          </h2>
          <p className="mb-4 text-2xl">€35</p>
          <div className="mb-4 text-left">
            <p className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2 text-green-400" /> 100 Components
            </p>
            <p className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2 text-green-400" /> Lifetime Credits
            </p>
            <p className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2 text-green-400" /> No Expiration
            </p>
          </div>
          <button className="rounded-lg bg-[#00B8D9] px-4 py-2 text-white transition duration-300 hover:bg-[#00A5C4]">
            <a href="#" className="no-underline">
              Buy Now 🚀
            </a>
          </button>
        </motion.div>
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
    </div>
  );
}

export default Payment;
