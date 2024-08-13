import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div>
      <div className="navbar mx-auto max-w-7xl bg-[#6B7280] text-white">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white">Reactify.AI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hover:text-[#00B8D9]">Premium</a>
            </li>
            <li>
              <details className="group">
                <summary className="group-hover:text-[#00B8D9]">Info</summary>
                <ul className="rounded-t-none bg-[#6B7280] p-2">
                  <li>
                    <a className="hover:text-[#00B8D9]">Demo</a>
                  </li>
                  <li>
                    <a className="hover:text-[#00B8D9]">Showcase</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
