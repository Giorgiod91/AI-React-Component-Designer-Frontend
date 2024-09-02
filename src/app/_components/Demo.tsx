"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};
//::TODO:: Add function if clicked on image, it will show the code snippet

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
const showSelectedImage = (src: string) => {
  return (
    <div className="flex h-[450px] w-[450px] border">
      <img src={src} alt="Demo" className="object-contain" />
    </div>
  );
};
function Demo({}: Props) {
  const [noImageClicked, setNoImageClicked] = React.useState(true);
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, index) =>
          noImageClicked ? (
            <ImageGridItem key={index} src={src} />
          ) : (
            showSelectedImage(src)
          ),
        )}
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
