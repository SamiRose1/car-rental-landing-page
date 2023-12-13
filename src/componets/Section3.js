import React from "react";
import OrderCar from "../images/orderCar.jpg";
const Section3 = () => {
  return (
    <div className="flex justify-around flex-row items-center h-[100vh]">
      <div className="flex justify-evenly text-center   flex-col h-full">
        <h1 className="text-7xl ">FIND CARS IN YOUR LOCATION</h1>
        <span className="flex items-center justify-around flex-col p-2   h-1/2">
          <p className="text-3xl font-thin w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            similique dolorem aliquam qui nisi quae hic vitae maxime voluptas
            sint, modi, non praesentium tenetur, culpa voluptates asperiores ab
            ut eos.
          </p>
          <button className="p-4 bg-black text-white rounded-lg">
            Find a location
          </button>
        </span>
      </div>
      <img src={OrderCar} alt="order a car" className="w-1/2 h-fit" />
    </div>
  );
};

export default Section3;
