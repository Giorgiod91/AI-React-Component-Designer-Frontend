"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const images = [
  "/demo1.png",
  "/dashboard.png",
  "/form.png",
  "path-to-image4.jpg",
  "path-to-image5.jpg",
  "path-to-image6.jpg",
  "path-to-image7.jpg",
  "path-to-image8.jpg",
];

const createdWithReactify = ["button", " Dashboard with charts", "Form"];

function Demo({}: Props) {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#f5f7f9] to-[#e0e0e0] px-6 py-12 text-center">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ color: "#00B8D9", transition: { duration: 0.3 } }}
        className="mb-8 text-6xl font-bold text-[#333]"
      >
        All of these were created with Reactify.AI 🚀
      </motion.h1>
      <p className="mb-10 text-lg text-[#555]">
        Click on an image to view the demo. You can also click the close button
        to go back to the grid.
      </p>

      {selectedImage ? (
        <motion.div
          className="group relative mx-auto max-w-3xl transform overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src={selectedImage}
            alt="Selected Demo"
            className="rounded-lg border border-[#c2a6b8] object-cover shadow-xl"
          />
          <button
            onClick={handleCloseClick}
            className="absolute right-4 top-4 rounded-full bg-[#00B8D9] p-3 text-white shadow-lg"
          >
            ✕
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <div className="border-4 border-cyan-500">
              <ImageGridItem
                key={index}
                src={src}
                index={index}
                onClick={handleImageClick}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const ImageGridItem: React.FC<{
  src: string;
  index: number;
  onClick: (src: string) => void;
}> = ({ src, index, onClick }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg border border-[#c2a6b8] shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.img
        onClick={() => onClick(src)}
        src={src}
        alt={`Demo ${index + 1}`}
        className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-lg font-semibold text-[#333]"></h3>
      </div>
    </motion.div>
  );
};

export default Demo;
