"use client";
import React from "react";
import { motion } from "framer-motion";

const imageDetails = [
  { src: "/demo1.png", label: "Button" },
  { src: "/dashboard.png", label: "Dashboard with charts" },
  { src: "/form.png", label: "Form" },
];

const Demo1 = () => {
  return (
    <div className="bg-gray-900 px-6 py-12">
      <motion.h1
        className="mb-12 text-center text-5xl font-extrabold text-[#00A5C4]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ color: "#00B8D9", transition: { duration: 0.3 } }}
      >
        All of these were created with Reactify.AI 🚀
      </motion.h1>
      <p className="mb-12 text-center text-lg text-[#6B7280]">
        Click on an image to view the demo. You can also click the close button
        to go back to the grid.
      </p>

      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
        {imageDetails.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border-2 border-[#00B8D9] bg-gray-800 shadow-lg transition-transform hover:scale-105"
            style={{ height: "300px" }}
          >
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-lg font-semibold text-[#00A5C4]">
                {image.label}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo1;
