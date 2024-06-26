"use client";
import React from "react";
import Versta from "@/img/versta.png";
import Leclerc from "@/img/leclerc.png";
import Carlos from "@/img/carlos.png";
import Hami from "@/img/hami.png";
import Alonzo from "@/img/alonzo.png";
import Norris from "@/img/norris.png";
import { Syne } from "next/font/google";
import { Gothic_A1 } from "next/font/google";
import { Kanit } from "next/font/google";
import BackGround from "@/img/driver-bg.jpg";
import BG1 from "@/img/bg-1.jpg";
import BG2 from "@/img/bg-2.webp";
import BG3 from "@/img/bg-3.webp";
import { useState, useContext, useEffect } from "react";
import Down from "@/img/down.png";
import Style from "./style.scss";
import DriversGrind from "@/components/DriversGrind";

const kanit = Kanit({ subsets: ["latin"], weight: "600" });
const kanit2 = Gothic_A1({ subsets: ["latin"], weight: "300" });
const syne = Syne({ subsets: ["latin"], weight: "800" });
const syne2 = Syne({ subsets: ["latin"], weight: "700" });

export default function Home() {
  const [switchVideo, setSwitchVideo] = useState(false);
  const [windowHeight, setWindowHeight] = useState();
  const [theWidth, settheWidth] = useState(100);
  const [imageBgPath, setImageBgPath] = useState("/img/bg-test2.png");
  //const [pageLoaded, setPageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    setWindowHeight(windowHeight);
    const width = window.innerWidth;
    settheWidth(width);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); //
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.7s ease-in" }}
    >
      <div className="flex min-h-screen fixed">
        <div className="w-screen h-screen  opacity-40 flex">
          <div className="w-1/3">
            <img className="w-full  h-full object-cover" src={BG1.src}></img>
          </div>
          <div className="w-1/3">
            <img className="w-full  h-full object-cover" src={BG2.src}></img>
          </div>
          <div className="w-1/3">
            <img className="w-full  h-full object-cover" src={BG3.src}></img>
          </div>
        </div>

        <div
          className={`text-white absolute bottom-40 left-14 flex flex-col ${
            switchVideo && "opacity-0"
          } transition-opacity duration-700`}
        >
          <text className="text-[15px] ml-[3px] mb-4">LES INFORMATIONS</text>
          <div className="text-[60px]">
            <span className={syne.className}>DRIVERS .</span>
          </div>
          <div className="text-[23px] ml-[3px] -mt-2">
            <text className={kanit2.className}>Découverte de la formule 1</text>
          </div>
          <div
            onClick={() => {
              setSwitchVideo(true);
            }}
            className="w-14 p-5 ml-[2px] bg-slate-700 rounded-full cursor-pointer bg-opacity-35 hover:bg-opacity-45 transition-all duration-150 mt-8"
          >
            <img src={Down.src} className="filter brightness-0 invert"></img>
          </div>
        </div>
      </div>

      <div
        style={{
          top: switchVideo ? `0` : `${windowHeight}px`,
          transition: "top 1.2s ease",
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${imageBgPath}) no-repeat center /${theWidth}px  auto fixed black`,
        }}
        className="flex flex-col min-h-screen text-white absolute z-50 transition-all duration-150"
      >
        <div className="flex w-full justify-center absolute z-50 top-0 pt-5">
          <div
            onClick={() => {
              setSwitchVideo(false);
            }}
            className="w-14 p-5 ml-[2px] bg-slate-700 rounded-full cursor-pointer bg-opacity-35 hover:bg-opacity-45 transition-all duration-150"
          >
            <img src={Down.src} className="filter brightness-0 invert"></img>
          </div>
        </div>
        <DriversGrind />
      </div>
    </div>
  );
}
