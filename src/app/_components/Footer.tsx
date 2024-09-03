"use client";

import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const footerItemsOne = [
  { label: <FaTwitter className="text-2xl" />, src: "https://x.com/Foquss2" },
  { label: <TfiYoutube className="text-2xl" />, src: "https://youtube.com" },
  {
    label: <FaGithub className="text-2xl" />,
    src: "https://github.com/Giorgiod91",
  },
];

const footerItemsTwo = [
  { label: "Home", src: "#" },
  { label: "News", src: "#" },
  { label: "About", src: "#about" },
  { label: "Contact", src: "#contact" },
  { label: "Pricing", src: "#pricing" },
];

const Footer = () => {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="container mx-auto flex flex-col items-center gap-8">
        <div className="flex space-x-8">
          {footerItemsOne.map((item, index) => (
            <a
              key={index}
              href={item.src}
              className="text-[#00B8D9] transition-colors duration-300 hover:text-[#00A5C4]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex space-x-8">
          {footerItemsTwo.map((item, index) => (
            <a
              key={index}
              href={item.src}
              className="transition-colors duration-300 hover:text-[#00A5C4]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <p className="mt-4 text-sm text-white/75">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
