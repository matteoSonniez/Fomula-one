"use client";
import React from "react";
import { Syne } from "next/font/google";
import { Gothic_A1 } from "next/font/google";
import { Kanit } from "next/font/google";
import BackGround from "@/img/track.webp";
import BG1 from "@/img/bg-1.jpg";
//import Hongrie from "";
import Australie from "@/img/track/australie.png";
import Bahrain from "@/img/track/bahrain.png";
import Spa from "@/img/track/belgique.png";
import France from "@/img/track/france.png";
import Germany from "@/img/track/germany.png";
import Monza from "@/img/track/monza.png";
import Brazil from "@/img/track/brazil.png";
import Japan from "@/img/track/japan.png";
import Mexico from "@/img/track/mexico.png";
import Monaco from "@/img/track/monaco.png";
import Spain from "@/img/track/spain.png";
import Singa from "@/img/track/singa.png";
import Texas from "@/img/track/texas.png";
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
  const [bgOpacity, setBgOpacity] = useState(0.1);

  const handleMouseEnter = (newImagePath) => {
    setBgOpacity(0); // Commence par rendre le background transparent
    setTimeout(() => {
      setImageBgPath(newImagePath); // Change l'image du background
      setBgOpacity(0.1); // Rétablit l'opacité du background
    }, 200); // Durée de la transition en millisecondes
  };

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
          <text className={kanit2.className}>
            tous les circuits de l'année 2024
          </text>
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
          background: `black`,
        }}
        className="flex flex-col min-h-screen text-white absolute z-50 transition-all duration-150 bg-black"
      >
        <div
            className="absolute inset-0 transition-opacity duration-500 bg-no-repeat"
            style={{
              backgroundImage: `url(${imageBgPath})`,
              opacity: bgOpacity,
              backgroundSize:`${theWidth * 0.75}px`
            }}
          ></div>
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
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="grid grid-cols-4 2xl:grid-cols-5 gap-6 p-24 z-10">
            <div onMouseEnter={() => handleMouseEnter(Germany.src)} className="cursor-pointer">
              <img src={Germany.src} alt="Germany"></img>
            </div>
            <div onMouseEnter={() => handleMouseEnter(Monza.src)} className="cursor-pointer">
              <img src={Monza.src} alt="Monza"></img>
            </div>
            <div onMouseEnter={() => handleMouseEnter(Spa.src)} className="cursor-pointer">
              <img src={Spa.src} alt="Spa"></img>
            </div>
            <div onMouseEnter={() => handleMouseEnter(France.src)} className="cursor-pointer">
              <img src={France.src} alt="France"></img>
            </div>
            <div onMouseEnter={() => handleMouseEnter(Bahrain.src)} className="cursor-pointer">
              <img src={Bahrain.src} alt="Bahrain"></img>
            </div> 
            <div onMouseEnter={() => handleMouseEnter(Mexico.src)} className="cursor-pointer">
              <img src={Mexico.src} alt="Mexico"></img>
            </div>
            <div onMouseEnter={() => handleMouseEnter(Brazil.src)} className="cursor-pointer">
              <img src={Brazil.src} alt="Brazil"></img>
            </div>
            <div onMouseEnter={() => handleMouseEnter(Japan.src)} className="cursor-pointer">
              <img src={Japan.src} alt="Japan"></img>
            </div>
            <div onMouseEnter={() => handleMouseEnter(Monaco.src)} className="cursor-pointer">
              <img src={Monaco.src} alt="Monaco"></img>
            </div>
            <div onMouseEnter={() => handleMouseEnter(Spain.src)} className="cursor-pointer">
              <img src={Spain.src} alt="Spain"></img>
            </div>  
            <div onMouseEnter={() => handleMouseEnter(Texas.src)} className="cursor-pointer">
              <img src={Texas.src} alt="Texas"></img>
            </div>  
            <div onMouseEnter={() => handleMouseEnter(Singa.src)} className="cursor-pointer">
              <img src={Singa.src} alt="Singa"></img>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}
