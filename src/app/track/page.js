"use client";
import React from "react";
import { Syne } from "next/font/google";
import { Gothic_A1 } from "next/font/google";
import { Kanit } from "next/font/google";
import BackGround from "@/img/track.webp";

import Bahrain from "@/img/track/bahrain.png";
import BgBahrain from "@/img/track/bahrein-base.png";
import BahrainSec1 from "@/img/track/bahrain-sec-1.png";
import BahrainSec2 from "@/img/track/bahrain-sec-2.png";
import BahrainSec3 from "@/img/track/bahrain-sec-3.png";

import BgLeft from "@/img/bg-left-bahrain.png";

import Spa from "@/img/track/belgique.png";
import BgSpa from "@/img/track/spa-base.png";
import SpaSec1 from "@/img/track/spa-sec-1.png";
import SpaSec2 from "@/img/track/spa-sec-2.png";
import SpaSec3 from "@/img/track/spa-sec-3.png";
import BgLeftSpa from "@/img/track/bg-left-spa.png";

import France from "@/img/track/france.png";
import BgFrance from "@/img/track/france-base.png";
import FranceSec1 from "@/img/track/france-sec-1.png";
import FranceSec2 from "@/img/track/france-sec-2.png";
import FranceSec3 from "@/img/track/france-sec-3.png";
import BgLeftFrance from "@/img/track/bg-left-france.png";

import Germany from "@/img/track/germany.png";
import BgGermany from "@/img/track/germany-base.png";
import GermanySec1 from "@/img/track/germany-sec-1.png";
import GermanySec2 from "@/img/track/germany-sec-2.png";
import GermanySec3 from "@/img/track/germany-sec-3.png";
import BgLeftGermany from "@/img/track/bg-left-germany.png";

import Monza from "@/img/track/monza.png";
import BgMonza from "@/img/track/monza-base.png";
import MonzaSec1 from "@/img/track/monza-sec-1.png";
import MonzaSec2 from "@/img/track/monza-sec-2.png";
import MonzaSec3 from "@/img/track/monza-sec-3.png";
import BgLeftMonza from "@/img/track/bg-left-monza.png";

import Brazil from "@/img/track/brazil.png";
import BgBrazil from "@/img/track/brazil-base.png";
import BrazilSec1 from "@/img/track/brazil-sec1.png";
import BrazilSec2 from "@/img/track/brazil-sec-2.png";
import BrazilSec3 from "@/img/track/brazil-sec-3.png";
import BgLeftBrazil from "@/img/track/bg-left-brazil.png";

import Japan from "@/img/track/japan.png";
import BgJapan from "@/img/track/japan-base.png";
import JapanSec1 from "@/img/track/japan-sec-1.png";
import JapanSec2 from "@/img/track/japan-sec-2.png";
import JapanSec3 from "@/img/track/japan-sec-3.png";
import BgLeftJapan from "@/img/track/bg-left.png";

import Mexico from "@/img/track/mexico.png";
import BgMexico from "@/img/track/mexico-base.png";
import MexicoSec1 from "@/img/track/mexico-sec-1.png";
import MexicoSec2 from "@/img/track/mexico-sec-2.png";
import MexicoSec3 from "@/img/track/mexico-sec-3.png";
import BgLeftMexico from "@/img/track/bg-left-mexico.png";

import Monaco from "@/img/track/monaco.png";
import MonacoSec1 from "@/img/track/test-sec-1.png";
import MonacoSec2 from "@/img/track/test-sec-2.png";
import MonacoSec3 from "@/img/track/test-sec-3.png";
import BgMonaco from "@/img/track/monaco-base.png";
import BgLeftMonaco from "@/img/track/bg-left-monaco.png";

import Spain from "@/img/track/spain.png";
import BgSpain from "@/img/track/spain-base.png";
import SpainSec1 from "@/img/track/spain-sec-1.png";
import SpainSec2 from "@/img/track/spain-sec-2.png";
import SpainSec3 from "@/img/track/spain-sec-3.png";
import BgLeftSpain from "@/img/track/bg-left-spain.png";

import Singa from "@/img/track/singa.png";
import BgSinga from "@/img/track/singa-base.png";
import SingaSec1 from "@/img/track/sing-sec-1.png";
import SingaSec2 from "@/img/track/sing-sec-2.png";
import SingaSec3 from "@/img/track/sing-sec-3.png";
import BgLeftSinga from "@/img/track/bg-left-singa.png";

import Texas from "@/img/track/texas.png";
import BgTexas from "@/img/track/texas-base.png";
import TexasSec1 from "@/img/track/texas-sec-1.png";
import TexasSec2 from "@/img/track/texas-sec-2.png";
import TexasSec3 from "@/img/track/texas-sec-3.png";
import BgLeftTexas from "@/img/track/bg-left-texas.png";

import { useState, useContext, useEffect } from "react";
import Down from "@/img/down.png";
import DriversGrind from "@/components/DriversGrind";

const kanit = Kanit({ subsets: ["latin"], weight: "600" });
const kanit2 = Gothic_A1({ subsets: ["latin"], weight: "300" });
const syne = Syne({ subsets: ["latin"], weight: "800" });
const syne2 = Syne({ subsets: ["latin"], weight: "700" });

export default function Home() {
  const [oneTrackSelect, setOneTrackSelect] = useState(false);
  const [secteur, setSecteur] = useState(0);
  const [trackName, setTrackName] = useState();

  const [imageTrack, setImageTrack] = useState();
  const [imageSec1, setImageSec1] = useState();
  const [imageSec2, setImageSec2] = useState();
  const [imageSec3, setImageSec3] = useState();
  const [imageBgLeft, setImageBgLeft] = useState();

  const [switchVideo, setSwitchVideo] = useState(false);
  const [windowHeight, setWindowHeight] = useState();
  const [theWidth, settheWidth] = useState(100);
  const [imageBgPath, setImageBgPath] = useState("/img/bg-spa.png");
  const [imageBgPath2, setImageBgPath2] = useState("/img/track.webp");
  const [isVisible, setIsVisible] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0.1);

  const handleMouseEnter = (newImagePath) => {
    setBgOpacity(0);
    setTimeout(() => {
      setImageBgPath(newImagePath);
      setBgOpacity(0.1);
    }, 200);
  };

  const handleSecteurEnter = (secteurNb) => {
    setSecteur(secteurNb);
  };

  const setTrack = (trackName, image, imageSec1, imageSec2, imageSec3, imageBg) => {
    setSecteur(0);
    setTrackName(trackName);
    setImageTrack(image);
    setImageSec1(imageSec1);
    setImageSec2(imageSec2);
    setImageSec3(imageSec3);
    setImageBgLeft(imageBg);
    setOneTrackSelect(true);
    setSwitchVideo(false);
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
      {oneTrackSelect ? (
        <>
          <div
            style={{
              width: `${theWidth * 0.65}px`,
            }}
            className="absolute flex h-screen bottom-0 right-0 z-20"
          >
            <img className="opacity-100" src={imageTrack.src}></img>
          </div>
          <div
            style={{
              width: `${theWidth * 0.65}px`,
            }}
            className={`absolute bottom-0 flex  right-0 z-30 h-screen bg-black ${
              secteur != 0 ? "opacity-65" : "opacity-35"
            } transition-opacity duration-500`}
          >
            {secteur == 1 && <img src={imageSec1.src}></img>}
            {secteur == 2 && <img src={imageSec2.src}></img>}
            {secteur == 3 && <img src={imageSec3.src}></img>}
          </div>
        </>
      ) : (
        <div className=" opacity-60">
          <img src={BackGround.src}></img>
        </div>
      )}
      {oneTrackSelect ? (
        <div
          style={{
            width: `${theWidth * 0.35}px`,
          }}
          className={`text-white absolute h-screen flex flex-col ${
            switchVideo && "opacity-0"
          } transition-opacity duration-700`}
        >
          <div className="h-screen">
            <img className=" opacity-20 h-full" src={imageBgLeft.src}></img>
         </div>
          <div className="absolute z-40 bottom-28 left-14">
            <text className="text-[15px] ml-[3px] mb-4">TRACKS INFORMATIONS</text>
            <div className="text-[50px]">
              <span className={syne.className}>{trackName} .</span>
            </div>
            <div className="text-[23px] ml-[3px] -mt-2">
              <text className={kanit2.className}>Dimanche 18 mars 2024</text>
              <div
                style={{ fontFamily: "formule1, sans-serif" }}
                className="flex space-x-3 my-4 text-[14px] text-slate-300"
              >
                <div
                  onMouseEnter={() => handleSecteurEnter(1)}
                  className="border-slate-400 hover:border-white border-2 rounded-xl py-1 px-3 cursor-pointer flex space-x-2 items-center"
                >
                  <text>secteur&nbsp;1</text>
                  <img
                    src={Down.src}
                    className="w-3 h-3 filter brightness-0 invert -rotate-90"
                  ></img>
                </div>
                <div
                  onMouseEnter={() => handleSecteurEnter(2)}
                  className="border-slate-400 hover:border-white border-2 rounded-xl py-1 px-3 cursor-pointer flex space-x-2 items-center"
                >
                  <text>secteur&nbsp;2</text>
                  <img
                    src={Down.src}
                    className="w-3 h-3 filter brightness-0 invert -rotate-90"
                  ></img>
                </div>
                <div
                  onMouseEnter={() => handleSecteurEnter(3)}
                  className="border-slate-400 hover:border-white border-2 rounded-xl py-1 px-3 cursor-pointer flex space-x-2 items-center"
                >
                  <text>secteur&nbsp;3</text>
                  <img
                    src={Down.src}
                    className="w-3 h-3 filter brightness-0 invert -rotate-90"
                  ></img>
                </div>
              </div>
              <div style={{ fontFamily: "formule1, sans-serif" }} className="flex text-[15px] mt-10 space-x-8">
                <div className="flex flex-col space-y-3 text-slate-200">
                  <text>Lap record</text>
                  <text>Race distance</text>
                  <text>Number of laps</text>
                  <text>Circuit length</text>
                  <text>First Grand Prix</text>
                </div>
                <div className="flex flex-col space-y-3 text-slate-400">
                  <text>1:46.286 - Bottas (2018)</text>
                  <text>308.052 km</text>
                  <text>44 laps</text>
                  <text>7.004 km</text>
                  <text>1950</text>
                </div>
              </div>
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
        ) : (
          <div
            className={`text-white absolute bottom-40 left-14 flex flex-col ${
              switchVideo && "opacity-0"
            } transition-opacity duration-700`}
          >
            <text className="text-[15px] ml-[3px] mb-4">TRACKS INFORMATIONS</text>
            <div className="text-[60px]">
              <span className={syne.className}>TRACKS .</span>
            </div>
            <div className="text-[23px] ml-[3px] -mt-2">
              <text className={kanit2.className}>
                Toute les informartion sur les curcuits
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
      )}

      <div
        style={{
          top: switchVideo ? `0` : `${windowHeight}px`,
          transition: "top 1.2s ease",
        }}
        className="flex flex-col min-h-screen text-white absolute z-50 transition-all duration-150 bg-black"
      >
        <div
          className="absolute inset-0 transition-opacity duration-500 bg-no-repeat"
          style={{
            backgroundImage: `url(${imageBgPath})`,
            opacity: bgOpacity,
            backgroundSize: `${theWidth * 0.75}px`,
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
            <div
              onMouseEnter={() => handleMouseEnter(BgGermany.src)}
              onClick={() => setTrack("Germany", BgGermany, GermanySec1, GermanySec2, GermanySec3, BgLeftGermany)}
              className="cursor-pointer"
            >
              <img src={Germany.src} alt="Germany"></img>
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(BgMonza.src)}
              onClick={() => setTrack("Monza", BgMonza, MonzaSec1, MonzaSec2, MonzaSec3, BgLeftMonza)}
              className="cursor-pointer"
            >
              <img src={Monza.src} alt="Monza"></img>
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(BgSpa.src)}
              onClick={() => setTrack("Belgique", BgSpa, SpaSec1, SpaSec2, SpaSec3, BgLeftSpa)}
              className="cursor-pointer"
            >
              <img src={Spa.src} alt="Spa"></img>
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(BgFrance.src)}
              onClick={() => setTrack("France", BgFrance, FranceSec1, FranceSec2, FranceSec3, BgLeftFrance)}
              className="cursor-pointer"
            >
              <img src={France.src} alt="France"></img>
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(BgBahrain.src)}
              onClick={() => setTrack("Bahrain", BgBahrain, BahrainSec1, BahrainSec2, BahrainSec3, BgLeft)}
              className="cursor-pointer"
            >
              <img src={Bahrain.src} alt="Bahrain"></img>
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(BgMexico.src)}
              onClick={() => setTrack("Mexico", BgMexico, MexicoSec1, MexicoSec2, MexicoSec3, BgLeftMexico)}
              className="cursor-pointer"
            >
              <img src={Mexico.src} alt="Mexico"></img>
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(BgBrazil.src)}
              onClick={() => setTrack("Brazil", BgBrazil, BrazilSec1, BrazilSec2, BrazilSec3, BgLeftBrazil)}
              className="cursor-pointer"
            >
              <img src={Brazil.src} alt="Brazil"></img>
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(BgJapan.src)}
              onClick={() => setTrack("Japan", BgJapan, JapanSec1, JapanSec2, JapanSec3, BgLeftJapan)}
              className="cursor-pointer"
            >
              <img src={Japan.src} alt="Japan"></img>
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(BgMonaco.src)}
              onClick={() => setTrack("Monaco", BgMonaco, MonacoSec1, MonacoSec2, MonacoSec3, BgLeftMonaco)}
              className="cursor-pointer"
            >
              <img src={Monaco.src} alt="Monaco"></img>
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(BgSpain.src)}
              onClick={() => setTrack("Spain", BgSpain, SpainSec1, SpainSec2, SpainSec3, BgLeftSpain)}
              className="cursor-pointer"
            >
              <img src={Spain.src} alt="Spain"></img>
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(BgTexas.src)}
              onClick={() => setTrack("Texas", BgTexas, TexasSec1, TexasSec2, TexasSec3, BgLeftTexas)}
              className="cursor-pointer"
            >
              <img src={Texas.src} alt="Texas"></img>
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(BgSinga.src)}
              onClick={() => setTrack("Singapour", BgSinga, SingaSec1, SingaSec2, SingaSec3, BgLeftSinga)}
              className="cursor-pointer"
            >
              <img src={Singa.src} alt="Singa"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
