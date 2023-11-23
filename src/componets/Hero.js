import React from "react";
import HeroPng from "../images/hero.png";

const Hero = () => {
  return (
    <div className=" flex justify-center items-center h-[100vh] ">
      <img src={HeroPng} alt="" className="h-fit  lg:w-[60%]" />
    </div>
  );
};

export default Hero;
