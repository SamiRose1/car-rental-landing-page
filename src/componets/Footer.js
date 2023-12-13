import React from "react";
import FooterLink from "./footerLinks.json";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  const mapFooterLink = FooterLink.map((data) => {
    const link = data.links.map((p) => {
      return <p>{p}</p>;
    });
    return (
      <div key={data.id} className=" flex flex-col justify-between">
        <h2 className="text-2xl">{data.name}</h2>
        <p className="flex flex-col">{link}</p>
      </div>
    );
  });
  return (
    <div className="h-[100vh] bg-slate-900 text-white w-full flex justify-around flex-col p-2 m-auto ">
      <div className="flex justify-around items-center">
        <div className="flex items-center flex-col h-full justify-around ">
          <h1 className="text-7xl mt-10">PREMIUM CAR RENTAL</h1>
          <span className="flex justify-around w-1/2 m-auto">
            <button className="bg-white text-black p-2 rounded-md flex flex-col text-sm justify-around items-center">
              Download on the{" "}
              <p className="text-2xl flex items-center">
                {" "}
                App Store <FaApple size={25} />
              </p>
            </button>
            <button className="bg-white text-black p-2 rounded-md flex flex-col text-sm justify-around items-center">
              Download on the{" "}
              <p className="text-2xl flex items-center">
                {" "}
                Google Play <IoLogoGooglePlaystore size={25} />
              </p>
            </button>
          </span>
        </div>
        <img
          src="https://img.freepik.com/premium-vector/businesswoman-ordering-car-mobile-application-transportation-carsharing-service-carpooling-concept_48369-42174.jpg?w=2000"
          alt="car order"
          className="w-[800px] h-[500px] rounded-md"
        />
      </div>
      <div className="flex w-[80%] m-auto justify-around items-center mt-10">
        <h1 className="text-7xl w-1/2 font-thin">
          Stay up to date on all the latest news.
        </h1>
        <span>
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded-md m-2"
          />
          <button>Send</button>
        </span>
      </div>
      <div className="flex justify-around items-start  w-[80%] mt-10 m-auto">
        {mapFooterLink}
      </div>
    </div>
  );
};

export default Footer;
