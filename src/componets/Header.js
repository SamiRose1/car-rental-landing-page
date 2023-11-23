import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border  border-black overflow-auto fixed w-full bg-slate-400 bg-opacity-20">
      <span>Apex Rentals</span>
      <div className="flex flex-row border border-black justify-around w-1/3">
        <p>How it works</p>
        <p>Car locations</p>
      </div>
      <div className="flex flex-row border border-black justify-around w-1/4">
        <span>userIconImage</span>
        <button>Get started</button>
      </div>
    </header>
  );
};

export default Header;
