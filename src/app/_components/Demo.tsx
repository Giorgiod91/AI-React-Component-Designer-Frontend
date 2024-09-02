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

function Demo({}: Props) {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-7xl bg-[#f5f7f9] p-6">
      <motion.h1
        className="pb-5 text-6xl font-bold text-[#4696bc]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        All of these were created with Reactify.AI
      </motion.h1>
      <p>
        Click on an image to view the demo. You can also click the close button
        to go back to the grid
      </p>

      {selectedImage ? (
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected Demo"
              className="border border-[#c2a6b8] object-cover shadow-lg"
            />
            <button
              onClick={handleCloseClick}
              className="absolute right-1/2 rounded-full bg-black p-2 text-white"
            >
              ✕ Close
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <ImageGridItem key={index} src={src} onClick={handleImageClick} />
          ))}
        </div>
      )}
    </div>
  );
}

const ImageGridItem: React.FC<{
  src: string;
  onClick: (src: string) => void;
}> = ({ src, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="overflow-hidden rounded-lg border border-[#c2a6b8] bg-white shadow-lg"
    >
      <motion.img
        onClick={() => onClick(src)}
        src={src}
        alt="Demo"
        className="h-64 w-full cursor-pointer object-contain transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </motion.div>
  );
};

export default Demo;
