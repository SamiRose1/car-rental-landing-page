import React from "react";
import Electric from "../images/electric.jpg";
import Suv from "../images/suv.jpg";
import Sedan from "../images/sedan.jpg";
import Sport from "../images/sport.jpg";
import { BsArrowRight } from "react-icons/bs";
const Section2 = () => {
  return (
    <div
      className="h-fit flex justify-center  items-center flex-col mt-5
  "
    >
      <h1 className="text-7xl font-semibold font-mono mt-5 w-1/2 ">
        WIDE RANGE OF VECHILES
      </h1>
      <div className="flex flex-row flex-2 text-lg">
        <span className="p-2">
          <h1>Electric</h1>
          <BsArrowRight />
          <img
            src={Electric}
            alt=""
            className="w-[700px] rounded-xl h-[500px]"
          />
        </span>
        <span className="p-2">
          <h1>Sedan</h1>
          <BsArrowRight />

          <img src={Sedan} alt="" className="w-[700px] rounded-xl h-[500px]" />
        </span>
      </div>
      <div className="flex flex-row flex-2  text-lg">
        <span className="p-2">
          <h1>Suv</h1>
          <BsArrowRight />

          <img src={Suv} alt="" className="w-[700px] rounded-xl h-[500px]" />
        </span>
        <span className="p-2">
          <h1>Sport</h1>
          <BsArrowRight />

          <img src={Sport} alt="" className="w-[700px] rounded-xl h-[500px]" />
        </span>
      </div>
    </div>
  );
};

export default Section2;
