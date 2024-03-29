import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white w-full">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="flex items-center logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500"> OP/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
            <a className="hover:font-bold" href="#">
              Contact Us
            </a>
          </li>
        </ul> */}
        <button className="bg-green-700 text-white flex justify-between items-center rounded-full my-5 mx-2 gap-2 ring-white ring-1">
          <img
            className="w-8 p-1 rounded-full"
            src="/icons/git.png"
            alt="github logo"
          />
          <span className="font-bold px-1">Github</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
