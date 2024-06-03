"use client";
import { useState, useEffect, useContext } from "react";
import React from "react";
import Logo from "@/img/F1logo.png";
import Alpine from "@/img/alpine.png";
import Fefe from "@/img/ferrari.png";
import Redbull from "@/img/redbull.png";
import Mac from "@/img/maclaren.png";
import Merco from "@/img/merco.png";
import Williams from "@/img/williams.png";
import Leclerc from "@/img/lec-res.png";
import Alon from "@/img/res-alon.png";
import Carlos from "@/img/res-carlos.png";
import Norris from "@/img/res-norris.png";
import Hami from "@/img/res-hami.png";
import Versta from "@/img/res-versta.png";
import OneCard from "@/components/ResultCard";
import OneCardConstructor from "@/components/ResultCardConst";

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const [drivers, setDrivers] = useState([
    {
      point: 162,
      position: 1,
      image: Leclerc,
      logo: Fefe,
      name: "Leclerc",
      color: "#E83223",
    },
    {
      point: 124,
      position: 2,
      image: Norris,
      logo: Mac,
      name: "Norris",
      color: "#ED8632",
    },
    {
      point: 122,
      position: 3,
      image: Alon,
      logo: Alpine,
      name: "Ocon",
      color: "#101D2A",
    },
    {
      point: 104,
      position: 4,
      image: Carlos,
      logo: Fefe,
      name: "Sainz",
      color: "#E83223",
    },
    {
      point: 102,
      position: 5,
      image: Hami,
      logo: Merco,
      name: "Hamilton",
      color: "#70F1D3",
    },
    {
      point: 84,
      position: 6,
      image: Alon,
      logo: Fefe,
      name: "alonso",
      color: "#24574E",
    },
    {
      point: 68,
      position: 7,
      image: Leclerc,
      logo: Williams,
      name: "albon",
      color: "#0000F3",
    },
    {
      point: 54,
      position: 8,
      image: Leclerc,
      logo: Merco,
      name: "russell",
      color: "#70F1D3",
    },
    {
      point: 51,
      position: 9,
      image: Hami,
      logo: Mac,
      name: "piastri",
      color: "#EF6F22",
    },
    {
      point: 42,
      position: 10,
      image: Versta,
      logo: Redbull,
      name: "Verstappen",
      color: "#15175A",
    },
  ]);
  const [construcs, setConstruc] = useState([
    {
      point: 204,
      position: 1,
      image: Carlos,
      logo: Fefe,
      name: "ferrari",
      color: "#E83223",
    },
    {
      point: 180,
      position: 2,
      image: Hami,
      logo: Merco,
      name: "Mercedes",
      color: "#70F1D3",
    },
    {
      point: 150,
      position: 3,
      image: Alon,
      logo: Fefe,
      name: "aston martin",
      color: "#24574E",
    },
    {
      point: 142,
      position: 4,
      image: Leclerc,
      logo: Williams,
      name: "williams",
      color: "#0000F3",
    },
    {
      point: 122,
      position: 5,
      image: Leclerc,
      logo: Merco,
      name: "mercedes",
      color: "#70F1D3",
    },
    {
      point: 104,
      position: 6,
      image: Hami,
      logo: Mac,
      name: "mclarren",
      color: "#EF6F22",
    },
    {
      point: 88,
      position: 7,
      image: Versta,
      logo: Redbull,
      name: "redbull",
      color: "#15175A",
    },
    {
      point: 62,
      position: 8,
      image: Leclerc,
      logo: Fefe,
      name: "ferrari",
      color: "#E83223",
    },
    {
      point: 24,
      position: 9,
      image: Norris,
      logo: Mac,
      name: "mclarren",
      color: "#ED8632",
    },
    {
      point: 22,
      position: 10,
      image: Alon,
      logo: Alpine,
      name: "Alpine",
      color: "#101D2A",
    }
  ]);

  const [imageBgPath, setImageBgPath] = useState("/img/bg-test2.png");
  const [theWidth, settheWidth] = useState(100);
  useEffect(() => {
    const width = window.innerWidth;
    settheWidth(width);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); //
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className="flex h-screen justify-center items-center flex-col space-y-6"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageBgPath}) no-repeat center /${theWidth}px  auto fixed black`,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.7s ease-in"
      }}
    >
      <div className="text-[38px] mb-4 text-white uppercase flex items-center space-x-1">
        <div className="w-24">
          <img src={Logo.src} className="" />
        </div>
        <div style={{ fontFamily: "formule1, sans-serif" }}>
          <span style={{ display: "block", lineHeight: "1", margin: "0" }}>
            2024 standing
          </span>
        </div>
      </div>
      <div className="flex space-x-16">
        <div className="flex justify-center items-center">
          <div className=" text-white uppercase font-bold">
            <div className="flex">
              <div className="w-[50px] h-[430px] mr-3 border-l-2 border-slate-400">
                <div className="text-slate-400 text-[47px] -rotate-90 flex mt-[370px] ">
                  <text style={{ fontFamily: "formule1, sans-serif" }}>
                    drivers&nbsp;point
                  </text>
                </div>
              </div>
              <div>
                {drivers.map((driver, index) => (
                  <OneCard key={index} driverInfo={driver} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className=" text-white uppercase font-bold">
            <div className="flex">
              <div className="w-[50px] h-[430px] mr-3 border-l-2 border-slate-400">
                <div className="text-slate-400 text-[50px] -rotate-90 flex mt-[365px] ">
                  <text style={{ fontFamily: "formule1, sans-serif" }}>
                    constructor
                  </text>
                </div>
              </div>
              <div>
                {construcs.map((construc, index) => (
                  <OneCardConstructor key={index} driverInfo={construc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
