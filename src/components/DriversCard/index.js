"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import Style from "./style.scss";
import Coupe from "@/img/coupe.png";
import Down from "@/img/down.png";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: "600" });
const kanit2 = Kanit({ subsets: ["latin"], weight: "300" });

const Index = ({ position, image, name, setOneOpen, ordre }) => {
  const [isDown, setIsDown] = useState(false);
  const [onTop, setOnTop] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [infoVisible2, setInfoVisible2] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [applyHighZIndex, setApplyHighZIndex] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const componentRef = useRef(null);


  // Gérer le survol
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Fonction pour basculer l'état
  const toggleClick = (e) => {
    if (isDown == false) {
      e.stopPropagation();
      setOneOpen();
      setIsClick(!isClick);
      if (!isClick) {
        // Appliquer un délai pour le z-index
        setTimeout(() => {
          setApplyHighZIndex(true);
        }, 700); // Délai de 0.7 seconde
        setHasClicked(true);
      } else {
        setTimeout(() => {
          setApplyHighZIndex(false);
        }, 600); // Délai de 0.7 seconde
      }
    }
  };

  const onOpenInfo = (e) => {
    e.stopPropagation();
    if(ordre == 2 && isDown == false) {
      setOnTop(-285)
    }
    if(ordre == 2 && isDown == true) {
      setOnTop(0)
    }
    if(isDown == true) {
      setTimeout(() => {
        setIsClick(false);
        setTimeout(() => {
          setApplyHighZIndex(false);
        }, 700);
      }, 400);
    }
    setIsDown(!isDown);
    if (infoVisible === false) {
      setTimeout(() => {
        setInfoVisible(!infoVisible);
      }, 600);
      setTimeout(() => {
        setInfoVisible2(!infoVisible2);
      }, 1200);
    } else {
      setInfoVisible(!infoVisible);
      setInfoVisible2(!infoVisible2);
    }
  };

  // Réinitialiser la transformation après l'animation de retour
  const handleAnimationEnd = () => {
    if (!isClick) {
      setHasClicked(false); // Réinitialiser l'état hasClicked après l'animation de retour
    }
  };

  // Ajouter un gestionnaire de clic global pour détecter les clics en dehors du composant
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setIsDown(false);
        setInfoVisible2(false);
        setInfoVisible(false);
        if(ordre == 2) {
          setOnTop(0)
        }
        setIsClick(false);
        setTimeout(() => {
          setApplyHighZIndex(false);
        }, 700);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [componentRef]);

  return (
    <div
      ref={componentRef}
      style={{
        "--one-div-left": `${position}px`,
        "--one-div-top": `${onTop}px`,
        width: isDown ? "450px" : "250px",
        height: isDown ? "650px" : "360px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onAnimationEnd={handleAnimationEnd}
      className={`moving-div cursor-pointer hover:-translate-x-[10px] flex group items-center relative rounded-lg shadow-2xl bg-black ${
        isClick ? "clicked" : hasClicked ? "not-clicked reset-transform" : ""
      } ${applyHighZIndex ? "high-z-index" : ""}`}
      onClick={toggleClick}
    >
      <div
        className={`rotate-90 w-[400px] ${
          isDown ? "opacity-0" : "group-hover:opacity-85"
        } absolute z-50 opacity-0 -translate-x-1/2 ml-5 text-gray-500 flex text-[45px] pl-6 pb-2 group-hover:text-white transition-all duration-500`}
      >
        <text className={kanit.className}>{name}</text>
      </div>
      <img
        className="w-full h-full object-cover transition-all duration-500"
        src={image.src}
        style={{ filter: isHovered ? "brightness(70%)" : "brightness(95%)" }}
        alt="Driver"
      />
      <div
        onClick={onOpenInfo}
        className="absolute z-50 bottom-0 p-2 w-full flex justify-center "
      >
        <img
          src={Down.src}
          className={`filter brightness-0 invert hover:w-5 hover:h-5 transition-all duration-200 w-4 h-4 ${
            isDown && "rotate-180"
          }`}
        />
      </div>
      <div
        className={`w-full opacity-90 bg-black h-3/4 absolute ${
          infoVisible ? "bottom-0" : "-bottom-3/4"
        } transition-all duration-500`}
      >
        <div
          className={`p-5 space-y-5 flex flex-col ${
            infoVisible2 ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        >
          <text className={`${kanit2.className} text-[25px]`}>
            Driving for <span className="text-gray-400">Mercedes</span>
          </text>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-3 pb-2">
              <img
                src={Coupe.src}
                className="filter brightness-0 invert w-4 h-4"
              />
              <text className={`${kanit2.className} text-[22px]`}>Palmares</text>
            </div>
            <text className={`${kanit2.className} text-[18px] text-gray-400`}>
              <span className="text-gray-300">2 </span> times world champion
            </text>
            <text className={`${kanit2.className} text-[18px] text-gray-400`}>
              <span className="text-gray-300">31 </span> victory
            </text>
            <text className={`${kanit2.className} text-[18px] text-gray-400`}>
              <span className="text-gray-300">121 </span> podiums
            </text>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-3 pb-2">
              <text className={`${kanit2.className} text-[22px]`}>2024 Palmares</text>
            </div>
            <text className={`${kanit2.className} text-[18px] text-gray-400`}>
              <span className="text-gray-300">4 </span> victory
            </text>
            <text className={`${kanit2.className} text-[18px] text-gray-400`}>
              <span className="text-gray-300">12 </span> podiums
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
