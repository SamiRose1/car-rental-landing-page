import React from "react";
import data from "./testimonial.json";
import carLogos from "./carLogos.json";
const Section4 = () => {
  const mapCarLogos = carLogos.map((data) => {
    return (
      <div key={data.id} className="m-4 p-2 flex justify-center items-center">
        <img src={data.img} alt="car_logo" className="w-[200px] " />
      </div>
    );
  });

  const mapTestimonial = data.map((data) => {
    return (
      <div
        key={data.id}
        className="h-[600px] p-2 flex justify-center items-center flex-col bg-opacity-30 m-2 rounded-lg text-slate-900 shadow-slate-300 shadow-sm w-[400px] "
      >
        <h1 className="text-3xl font-thin p-2">{data.date}</h1>
        <span className="flex flex-col justify-evenly items-center mt-5 h-full p-4">
          <h2 className="text-4xl font-semibold">{data.heading}</h2>
          <p className="mb-2 font-thin text-xl">{data.para}</p>
          <img src={data.img} alt="carimage" className="w-full h-[300px]" />
        </span>
      </div>
    );
  });
  return (
    <div className="flex justify-evenly items-center flex-col h-[150vh]">
      <h1 className="text-8xl m-20 font-thin w-1/2">
        STORIES BEHIND THE WHEEL
      </h1>
      <div className="flex">{mapTestimonial}</div>
      <button className="bg-black text-white px-5 pt-3 pb-3   rounded-md">
        See all Reviews
      </button>
      <div className="flex flex-row justify-center items-center">
        {mapCarLogos}
      </div>
    </div>
  );
};

export default Section4;
