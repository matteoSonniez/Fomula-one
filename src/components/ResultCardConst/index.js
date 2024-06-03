import React from "react";
import Fefe from "@/img/ferrari.png";
//import Leclerc from "@/img/lec-res.png";

const Index = ({driverInfo}) => {
  return (
    <div className="w-[350px] bg-gray-300 rounded-xl flex overflow-hidden h-[32px] mb-3 cursor-pointer hover:opacity-80 transition-opacity duration-200">
      <div className="w-[45px] flex justify-center items-center">
        <text  style={{ fontFamily: "formule1, sans-serif" }} className="text-black">{driverInfo.position}</text>
      </div>
      <div style={{ backgroundColor: driverInfo.color }} className="w-full flex items-center space-x-3">
        <img src={driverInfo.logo.src} className="w-14 ml-4"></img>
        <text
          className="text-white"
          style={{ fontFamily: "formule1, sans-serif" }}
        >
          {driverInfo.name}
        </text>
      </div>
      <div className="w-[65px] flex justify-center items-center">
        <text  style={{ fontFamily: "formule1, sans-serif" }} className="text-black">{driverInfo.point}</text>
      </div>
    </div>
  );
};

export default Index;
