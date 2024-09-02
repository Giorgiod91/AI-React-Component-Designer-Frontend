import React from "react";
import { FaCrown, FaInfoCircle } from "react-icons/fa";

type Props = {};

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="navbar mx-auto max-w-7xl bg-black text-white shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl font-bold text-white transition duration-300 hover:text-[#00B8D9]">
          Reactify.AI
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal space-x-6 px-1">
          <li>
            <a className="flex items-center transition duration-300 hover:text-[#00B8D9]">
              <FaCrown className="mr-1" /> Premium
            </a>
          </li>
          <li>
            <details className="group relative">
              <summary className="flex cursor-pointer items-center transition duration-300 hover:text-[#00B8D9]">
                <FaInfoCircle className="mr-1" /> Info
              </summary>
              <ul className="absolute right-0 mt-2 w-40 rounded-lg bg-[#1F2937] p-2 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                <li>
                  <a className="block rounded-md px-4 py-2 transition duration-300 hover:bg-[#00B8D9] hover:text-white">
                    Demo
                  </a>
                </li>
                <li>
                  <a className="block rounded-md px-4 py-2 transition duration-300 hover:bg-[#00B8D9] hover:text-white">
                    Showcase
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
