"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const images = [
  "/demo1.png",
  "path-to-image2.jpg",
  "path-to-image3.jpg",
  "path-to-image4.jpg",
  "path-to-image5.jpg",
  "path-to-image6.jpg",
  "path-to-image7.jpg",
  "path-to-image8.jpg",
];

function Demo({}: Props) {
  return (
    <div className="max-w-7xl bg-[#f5f7f9] p-6">
      <h1 className="mb-12 text-center text-4xl font-bold text-[#4696bc]">
        All of these were created with Reactify.AI
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, index) => (
          <ImageGridItem key={index} src={src} />
        ))}
      </div>
    </div>
  );
}

const ImageGridItem: React.FC<{ src: string }> = ({ src }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="overflow-hidden rounded-lg border border-[#c2a6b8] bg-white shadow-lg"
    >
      <motion.img
        src={src}
        alt="Demo"
        className="h-64 w-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </motion.div>
  );
};

export default Demo;
