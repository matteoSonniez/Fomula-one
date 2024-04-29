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
import { useState, useContext, useEffect } from "react";
import Down from "@/img/down.png";
import Style from "./style.scss";

const kanit = Kanit({ subsets: ["latin"], weight: "600" });
const kanit2 = Gothic_A1({ subsets: ["latin"], weight: "300" });
const syne = Syne({ subsets: ["latin"], weight: "800" });
const syne2 = Syne({ subsets: ["latin"], weight: "700" });

export default function Home() {
  const [switchVideo, setSwitchVideo] = useState(false);
  const [windowHeight, setWindowHeight] = useState();
  const [imageBgPath, setImageBgPath] = useState("/img/versta.png");
  //const [pageLoaded, setPageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    setWindowHeight(windowHeight);
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
        <div className="w-full h-screen overflow-hidden opacity-50">
          <img src={BackGround.src}></img>
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
          transition: "top 1.8s ease",
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${imageBgPath}) no-repeat left bottom / 900px auto fixed black`,
        }}
        className="flex min-h-screen flex-wrap px-40 text-white absolute z-50 transition-all duration-150"
      >
        <div className="flex w-full justify-center pb-10">
          <div
            onClick={() => {
              setSwitchVideo(false);
            }}
            className="w-14 p-5 ml-[2px] bg-slate-700 rounded-full cursor-pointer bg-opacity-35 hover:bg-opacity-45 transition-all duration-150 mt-8"
          >
            <img src={Down.src} className="filter brightness-0 invert"></img>
          </div>
        </div>

        <div
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
        </div>
        <div
          onMouseEnter={() => setImageBgPath("/img/norris.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center"
        >
          <div>
            <img src={Norris.src} alt="Norris"></img>
            <div />
          </div>

          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>MAX VERSTAPPEN</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Maclaren</text>
          </div>
        </div>
        <div
          onMouseEnter={() => setImageBgPath("/img/leclerc.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center"
        >
          <div>
            <img src={Leclerc.src} alt="Leclerc"></img>
            <div />
          </div>
          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>MAX VERSTAPPEN</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Ferrari</text>
          </div>
        </div>
        <div
          onMouseEnter={() => setImageBgPath("/img/alonzo.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center"
        >
          <div>
            <img src={Alonzo.src} alt="Alonzo"></img>
            <div />
          </div>
          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>MAX VERSTAPPEN</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Aston Martin</text>
          </div>
        </div>
        <div
          onMouseEnter={() => setImageBgPath("/img/carlos.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center"
        >
          <div>
            <img src={Carlos.src} alt="Carlos" />
            <div />
          </div>
          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>MAX VERSTAPPEN</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Ferrari</text>
          </div>
        </div>
        <div
          onMouseEnter={() => setImageBgPath("/img/hami.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center"
        >
          <div>
            <img src={Hami.src} alt="Hami"></img>
            <div />
          </div>
          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>MAX VERSTAPPEN</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Mercedes</text>
          </div>
        </div>
        <div
          onMouseEnter={() => setImageBgPath("/img/versta.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center"
        >
          <div>
            <img src={Versta.src} alt="Versta"></img>
            <div />
          </div>
          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>MAX VERSTAPPEN</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Redbull racing</text>
          </div>
        </div>
        <div
          onMouseEnter={() => setImageBgPath("/img/hami.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center"
        >
          <div>
            <img src={Hami.src} alt="Hami"></img>
            <div />
          </div>
          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>LEWIS HAMILTON</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Mercedes</text>
          </div>
        </div>
        <div
          onMouseEnter={() => setImageBgPath("/img/hami.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center"
        >
          <div>
            <img src={Hami.src} alt="Hami"></img>
            <div />
          </div>
          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>LEWIS HAMILTON</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Mercedes</text>
          </div>
        </div>
        <div
          onMouseEnter={() => setImageBgPath("/img/hami.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center"
        >
          <div>
            <img src={Hami.src} alt="Hami"></img>
            <div />
          </div>
          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>LEWIS HAMILTON</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Mercedes</text>
          </div>
        </div>
        <div
          onMouseEnter={() => setImageBgPath("/img/hami.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center"
        >
          <div>
            <img src={Hami.src} alt="Hami"></img>
            <div />
          </div>
          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>LEWIS HAMILTON</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Mercedes</text>
          </div>
        </div>
        <div
          onMouseEnter={() => setImageBgPath("/img/carlos.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center"
        >
          <div>
            <img src={Carlos.src} alt="Carlos" />
            <div />
          </div>
          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>MAX VERSTAPPEN</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Ferrari</text>
          </div>
        </div>
        <div
          onMouseEnter={() => setImageBgPath("/img/carlos.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center"
        >
          <div>
            <img src={Carlos.src} alt="Carlos" />
            <div />
          </div>
          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>MAX VERSTAPPEN</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Ferrari</text>
          </div>
        </div>
        <div
          onMouseEnter={() => setImageBgPath("/img/carlos.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center"
        >
          <div>
            <img src={Carlos.src} alt="Carlos" />
            <div />
          </div>
          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>MAX VERSTAPPEN</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Ferrari</text>
          </div>
        </div>
        <div
          onMouseEnter={() => setImageBgPath("/img/carlos.png")}
          className="w-1/5 p-2 cursor-pointer flex flex-col items-center"
        >
          <div>
            <img src={Carlos.src} alt="Carlos" />
            <div />
          </div>
          <div className="text-gray-300 text-[22px] tracking-[0.1em]">
            <text className={kanit.className}>MAX VERSTAPPEN</text>
          </div>
          <div className={kanit.className}>
            <text className="text-gray-600 text-[17px]">Ferrari</text>
          </div>
        </div>
      </div>
    </div>
  );
}
