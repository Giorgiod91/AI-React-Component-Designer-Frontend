"use client";

import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Demo", href: "#demo" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "GitHub", href: "https://github.com/Giorgiod91" },
    { label: "Examples", href: "#demo" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-white/8 bg-[#09090B] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#00D4FF] to-[#6366F1]">
                <span className="text-xs font-black text-white">R</span>
              </div>
              <span className="font-bold text-white">
                Reactify<span className="text-[#00D4FF]">.AI</span>
              </span>
            </div>
            <p className="mb-4 text-sm text-zinc-500">
              Generate production-ready React components from a simple text
              prompt.
            </p>
            <div className="flex gap-4">
              <a
                href="https://x.com/Foquss2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-white"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/Giorgiod91"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Reactify.AI. All rights reserved.
          </p>
          <p className="text-sm text-zinc-600">
            Built with Next.js, Tailwind CSS & Claude AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
