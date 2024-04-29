//import Video from '@/img/f1video4k.mp4';
"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { Syne } from "next/font/google";
import { Gothic_A1 } from "next/font/google";
import { Kanit } from "next/font/google";
import { useState, useContext, useEffect } from "react";
import Down from "@/img/down.png";

const kanit = Kanit({ subsets: ["latin"], weight: "600" });
const kanit2 = Gothic_A1({ subsets: ["latin"], weight: "300" });
const syne = Syne({ subsets: ["latin"], weight: "800" });
const syne2 = Syne({ subsets: ["latin"], weight: "700" });

export default function Home() {
  const [switchVideo, setSwitchVideo] = useState(false);
  const [windowHeight, setWindowHeight] = useState();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    setWindowHeight(windowHeight);
    setWindowHeight(windowHeight);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Active switchVideo si l'utilisateur scroll vers le bas
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      // Vous pouvez ajuster cette valeur selon les besoins
      setSwitchVideo(true);
    }
    const handleScroll = () => {
      // Active switchVideo si l'utilisateur scroll vers le bas
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {  // Vous pouvez ajuster cette valeur selon les besoins
        setSwitchVideo(true);
      }
    };
    

    // Ajoute l'écouteur d'événements de scroll sur window
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      // Nettoie l'écouteur d'événements lors du démontage du composant
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.7s ease-in" }}
    >
      <div
        style={{
          top: switchVideo ? `-${windowHeight}px` : "0",
          transition: "top 1.8s ease",
        }}
        className="flex min-h-screen absolute"
      >
        <div className="w-full h-screen overflow-hidden opacity-50">
          <video className="w-full" autoPlay loop muted>
            <source src="/img/formul1_2.mp4" type="video/mp4" />
          </video>
        </div>

        <div
          className={`text-white absolute bottom-40 left-14 flex flex-col ${
            switchVideo && "opacity-0"
          } transition-opacity duration-700`}
        >
          <text className="text-[15px] ml-[3px] mb-4">LES INFORMATIONS</text>
          <div className="text-[50px] mix-blend-exclusion">
            <span className={syne.className}>L'UNIVERS FORMULA .</span>
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
        }}
        className="flex min-h-screen absolute"
      >
        <div className="w-full h-screen overflow-hidden opacity-50">
          <video className="w-full" autoPlay loop muted>
            <source src="/img/f1video4k.mp4" type="video/mp4" />
          </video>
        </div>

        <div
          className={`text-white opacity-0 absolute bottom-40 left-14 flex flex-col ${
            switchVideo && "opacity-100"
          } transition-opacity duration-700`}
        >
          <text className="text-[15px] ml-[3px] mb-4">LES INFORMATIONS</text>
          <div className="text-[50px] mix-blend-difference">
            <span className={syne.className}>LIVE TRACKING .</span>
          </div>
          <div className="text-[23px] ml-[3px] -mt-2">
            <text className={kanit2.className}>Suivez tout au complet</text>
          </div>
          <div
            onClick={() => {
              setSwitchVideo(false);
            }}
            className="w-14 p-5 ml-[2px] bg-slate-700 rounded-full cursor-pointer bg-opacity-35 hover:bg-opacity-45 transition-all duration-150 mt-8 rotate-180"
          >
            <img src={Down.src} className="filter brightness-0 invert"></img>
          </div>
        </div>
      </div>
    </main>
  );
}
