import React from "react";
import { FaUserLarge } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="flex justify-around items-center w-full bg-slate-200 bg-opacity-70 fixed h-20  text-lg">
      <h1 className="font-extrabold font-mono text-4xl">APEX RENTAL</h1>
      <div className="flex flex-row justify-around w-1/4">
        <p>How it works</p>
        <p>Car locations</p>
      </div>
      <div className="flex flex-row justify-around items-center w-1/6">
        <span>
          <FaUserLarge size={30} />
        </span>
        <button
          className="p-2 rounded-lg bg-yellow-500
        bg-opacity-70 font-semibold w-40"
        >
          Get started
        </button>
      </div>
    </header>
  );
};

export default Header;
