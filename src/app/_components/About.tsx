"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 py-10 text-center">
      <motion.h1
        className="text-7xl font-bold text-[#6B7280]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        What is Reactify.AI about? 🤖
      </motion.h1>
      <motion.p
        className="mt-6 text-2xl text-[#6B7280] transition-opacity duration-1000 ease-in-out hover:opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Reactify.AI is a tool that helps you design React components with the
        help of AI. 🚀
      </motion.p>
      <motion.p
        className="mt-4 text-xl text-[#6B7280] transition-opacity duration-1000 ease-in-out hover:opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        It's a simple yet powerful tool that allows you to create, preview, and
        customize your React components effortlessly. 🎨
      </motion.p>
      <motion.p
        className="mt-4 text-xl text-[#6B7280] transition-opacity duration-1000 ease-in-out hover:opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Save so much time by using this app instead of coding it yourself! ⏳
      </motion.p>
    </div>
  );
}

export default About;
