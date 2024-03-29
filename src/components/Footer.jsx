import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 flex flex-col justify-center items-center text-white  w-full">
      <div className="flex items-center logo font-bold text-2xl">
        <span className="text-green-500">&lt;</span>
        Pass
        <span className="text-green-500"> OP/&gt;</span>
      </div>
      <div className="flex justify-center items-center">
        Created with{" "}
        <img className="w-7 mx-2" src="/icons/love.png" alt="heartImage" /> by
        Atharva
      </div>
    </div>
  );
};

export default Footer;
