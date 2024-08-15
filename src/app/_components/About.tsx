"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaPalette, FaRocket } from "react-icons/fa";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f7f9] px-6 py-10 text-center">
      <motion.h1
        className="text-7xl font-bold text-[#4696bc]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        What is Reactify.AI about? 🤖
      </motion.h1>
      <div className="mt-8 space-y-8">
        <motion.div
          className="flex flex-col items-center rounded-lg border border-[#c2a6b8] bg-white p-6 text-center shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <FaRocket className="mb-4 text-5xl text-[#4696bc]" />{" "}
          <motion.p className="text-2xl text-[#677388] transition-opacity duration-1000 ease-in-out hover:opacity-80">
            Reactify.AI is a tool that helps you design React components with
            the help of AI. 🚀
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center rounded-lg border border-[#c2a6b8] bg-white p-6 text-center shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <FaPalette className="mb-4 text-5xl text-[#4696bc]" />{" "}
          <motion.p className="text-xl text-[#677388] transition-opacity duration-1000 ease-in-out hover:opacity-80">
            It's a simple yet powerful tool that allows you to create, preview,
            and customize your React components effortlessly. 🎨
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center rounded-lg border border-[#c2a6b8] bg-white p-6 text-center shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <FaClock className="mb-4 text-5xl text-[#4696bc]" />{" "}
          <motion.p className="text-xl text-[#677388] transition-opacity duration-1000 ease-in-out hover:opacity-80">
            Save so much time by using this app instead of coding it yourself!
            ⏳
          </motion.p>
        </motion.div>
        <div className="overflow-x-hidden">
          <motion.div
            className="bottom-0 left-0 h-2 bg-[#e0853a]"
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
      </div>
    </div>
  );
}

export default About;
