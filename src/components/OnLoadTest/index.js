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
import OnLoad from "@/components/OnLoadTest";
import F1Icon from "@/img/f1-2.png";

const kanit = Kanit({ subsets: ["latin"], weight: "600" });
const kanit2 = Gothic_A1({ subsets: ["latin"], weight: "300" });
const syne = Syne({ subsets: ["latin"], weight: "800" });
const syne2 = Syne({ subsets: ["latin"], weight: "700" });

export default function Home() {
  const [isOnLoad, setIsOnLoad] = useState(false);

  useEffect(() => {
    setIsOnLoad(true);
  }, []);
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="flex w-[650px] justify-center items-center relative h-[400px] overflow-hidden">
        <div
          style={{ transitionDuration: "1.5s" }}
          className={`absolute bg-black flex justify-center items-center -translate-x-[700px] z-50 ${
            isOnLoad && "translate-x-[150px]"
          } transition-all ease-in`}
        >
          <div className={`w-[500px] bg-black h-[100px]`}></div>
          <div className="w-28">
            <img src={F1Icon.src}></img>
          </div>
        </div>
        <div className="h-[100px] flex items-center absolute">
          <text className="text-white tracking-[0.3em]">FORMULA ONE</text>
        </div>

        {/* <div
          className="w-[10px] bg-blue-300 h-4 absolute left-0 top-8"
          onClick={() => {
            setIsOnLoad(!isOnLoad);
          }}
        ></div> */}
      </div>
    </div>
  );
}
