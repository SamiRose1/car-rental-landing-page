import React from "react";
import HeroPng from "../images/hero1.png";

const Hero = () => {
  return (
    <div className=" flex justify-evenly items-center  bg-gray-200 bg-opacity-60 flex-col  h-full w-full ">
      <p className="text-9xl w-1/2  break-words flex justify-center items-center  font-extrabold font-serif text-zinc-800 mt-14">
        PREMIUM CAR RENTAL
      </p>
      <div className="flex flex-col     text-black text-xl   w-[70%]">
        <span
          className="flex flex-row  w-1/3 justify-around
        items-center bg-slate-100  rounded-sm shadow-lg shadow-slate-400 h-fit p-4 "
        >
          <p>Car</p>|<p>Vans</p>
        </span>
        <div
          className="flex flex-row bg-slate-100 text-2xl border rounded-sm w-full justify-around 
        items-center
        shadow-lg shadow-slate-400  h-fit p-4"
        >
          <span className="flex flex-col justify-start w-1/3  ">
            <h1>Pick up & Return location</h1>
            <p className="font-extralight">Dallas, Texas </p>
          </span>
          |
          <span className="flex flex-col justify-center items-center w-1/2">
            <h1>Start</h1>
            <p className="font-extralight">Nov 18, 12:00 PM</p>
          </span>
          |
          <span className="flex flex-col justify-center items-center w-1/2">
            <h1>Stop</h1>
            <p className="font-extralight">Nov 25, 5:00 PM</p>
          </span>
          |
          <span>
            <img src="icon" alt="black search icon" />
          </span>
        </div>
      </div>

      <img
        src="https://www.freepnglogos.com/uploads/lamborghini-png/royal-lamborghini-aventador-white-car-png-image-pngpix-30.png"
        alt=""
        // className="w-[60%] shadow-2xl shadow-slate-600 border rounded-3xl"
      />
    </div>
  );
};

export default Hero;
