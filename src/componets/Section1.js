import React from "react";
import Car2 from "../images/section1.jpg";
import Car3 from "../images/car3.jpg";
import { BsArrowRight } from "react-icons/bs";

const Section1 = () => {
  return (
    <div
      className=" flex flex-col justify-evenly items-center h-[140vh]
    "
    >
      <div className="flex flex-row justify-center items-center">
        <span className="flex justify-evenly flex-col items-start  p-4 h-[80%]">
          <h1 className="text-8xl font-semibold font-mono">
            PREMIUM CAR RENTAL
          </h1>
          <p className="text-2xl font-thin w-[80%]">
            Selected Car Service is ready to help with the service and repairs
            of exclusive cars, we have the opportunity to provide the best
            service for your car in a separate specialist workshop. Contact us
            to find out more about what we can offer you and your car at our
            exclusive workshop.
          </p>
          <button className="bg-black text-white p-2 rounded-md">
            See all our Cars
          </button>
        </span>

        <img src={Car2} alt="" className="w-[50%] rounded-md h-fit m-0" />
      </div>

      <div className="flex flex-row  w-full text-5xl justify-around items-center font-mono">
        <img src={Car3} alt="" className="w-[20%] h-full rounded-md" />
        <span className="w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-3xl">OUR NUMBERS</h1>
          <BsArrowRight />
        </span>

        <div className="flex flex-row  w-[80%] justify-evenly text-8xl">
          <span className="flex flex-col items-center ">
            <p>45M+</p>
            <p className="text-xl">Total Capital Raised</p>
          </span>
          <span>
            <p>5M+</p>
            <p className="text-xl">Happy Customers</p>
          </span>
          <span>
            <p>3K+</p>
            <p className="text-xl">Customer Feedback</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section1;
