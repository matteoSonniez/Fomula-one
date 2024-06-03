"use client";
import React from "react";
import { Syne } from "next/font/google";
import { Gothic_A1 } from "next/font/google";
import { Kanit } from "next/font/google";
import BackGround from "@/img/track.webp";
import BG1 from "@/img/bg-1.jpg";
//import Hongrie from "";
import BG3 from "@/img/bg-3.webp";
import { useState, useContext, useEffect } from "react";
import Down from "@/img/down.png";
import DriversGrind from "@/components/DriversGrind";

const kanit = Kanit({ subsets: ["latin"], weight: "600" });
const kanit2 = Gothic_A1({ subsets: ["latin"], weight: "300" });
const syne = Syne({ subsets: ["latin"], weight: "800" });
const syne2 = Syne({ subsets: ["latin"], weight: "700" });

export default function Home() {
  const [switchVideo, setSwitchVideo] = useState(false);
  const [windowHeight, setWindowHeight] = useState();
  const [theWidth, settheWidth] = useState(100);
  const [imageBgPath, setImageBgPath] = useState("/img/test2.png");
  const [imageBgPath2, setImageBgPath2] = useState("/img/track.webp");
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
      style={{ 
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.7s ease-in",
        }}
      
    >
        <div className="w-screen h-screen opacity-60">
            <img src={BackGround.src}></img>
        </div>
        <div
          className={`text-white absolute bottom-40 left-14 flex flex-col ${
            switchVideo && "opacity-0"
          } transition-opacity duration-700`}
        >
          <text className="text-[15px] ml-[3px] mb-4">LES INFORMATIONS</text>
          <div className="text-[60px]">
            <span className={syne.className}>TRACKS .</span>
          </div>
          <div className="text-[23px] ml-[3px] -mt-2">
            <text className={kanit2.className}>tous les circuits de l'année 2024</text>
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

      <div
        style={{
          top: switchVideo ? `0` : `${windowHeight}px`,
          transition: "top 1.2s ease",
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageBgPath}) no-repeat left bottom /800px  auto fixed black`,
        }}
        className="flex flex-col min-h-screen text-white absolute z-50 transition-all duration-150 bg-black"
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
        <div className="w-screen h-full">
            <text>test</text>
        </div>
        {/* <div
          onMouseEnter={() => setImageBgPath("/img/versta.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center text-gray-300 "
        >
          <div className="">
            <img src={Versta.src} alt="Versta" className=""></img>
          </div>
          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>MAX VERSTAPPEN</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Redbull racing</text>
          </div>
        </div> */}
      </div>
    </div>
  );
}
