"use client";
import React from "react";
import { useState, useEffect, useContext } from "react";
import BackGround from "@/img/driver-bg.jpg";
import BackGround2 from "@/img/races2.webp";
import BackGround3 from "@/img/races3.jpg";
import BackGround4 from "@/img/races4.webp";
import { Kanit } from "next/font/google";
import Down from "@/img/down.png";
import RacesInfo from '@/components/Races/RacesInfo';

const kanit = Kanit({ subsets: ["latin"], weight: "600" });
const kanitsmall = Kanit({ subsets: ["latin"], weight: "400" });

const Index = ({ order, title }) => {
  const [oneDivHeight, setOneDivHeight] = useState(0);
  const [oneDivHeightReference, setOneDivHeightReference] = useState(0);
  const [oneDivTop, setOneDivTop] = useState(0);
  const [oneDivIndex, setOneDivIndex] = useState(0);
  const [isLoad, setIsLoad] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const onOpen = () => {
    if (!isActive) {
      setOneDivHeight(oneDivHeight * 4);
      setOneDivTop(0);
      setOneDivIndex(50);
      setIsActive(true);
    }
    if (isActive) {
      setOneDivHeight(oneDivHeightReference);
      setIsActive(false);
      if (order == 1) {
        setOneDivTop(0);
        setOneDivIndex(40);
      }
      if (order == 2) {
        setOneDivTop(oneDivHeightReference);
        setTimeout(() => {
          setOneDivIndex(30);
        }, 400);
      }
      if (order == 3) {
        setOneDivTop(oneDivHeightReference * 2);
        setTimeout(() => {
          setOneDivIndex(20);
        }, 400);
      }
      if (order == 4 ) {
        setOneDivTop(oneDivHeightReference * 3);
        setTimeout(() => {
          setOneDivIndex(10);
        }, 400);
      }

    }
  };

  useEffect(() => {
    if (oneDivHeight != 0) {
      console.log("testttttttt");
      if (order == 1 && isLoad == false) {
        setOneDivTop(0);
        setOneDivIndex(40);
      }
      if (order == 2 && isLoad == false) {
        console.log("topppp2");
        setOneDivTop(oneDivHeight);
        setOneDivIndex(30);
      }
      if (order == 3 && isLoad == false) {
        console.log("topppp3");
        setOneDivTop(oneDivHeight * 2);
        setOneDivIndex(20);
      }
      if (order == 4 && isLoad == false) {
        console.log("topppp4");
        setOneDivTop(oneDivHeight * 3);
        setOneDivIndex(10);
      }
      setIsLoad(true);
    }
  }, [oneDivHeight]);

  useEffect(() => {
    const height = window.innerHeight;
    setOneDivHeight(height / 4);
    setOneDivHeightReference(height / 4);
  }, []);

  return (
    <div
      style={{
        "--one-div-height": `${oneDivHeight}px`,
        "--one-div-top": `${oneDivTop}px`,
        "--one-div-zindex": `${oneDivIndex}`,
        "--isFull": { isActive },
      }}
      className={`div-height ${
        isActive && "active"
      } w-full bg-black shadow-2xl absolute overflow-hidden flex justify-center items-center group cursor-pointer`}
    >
      <div className="left-10 absolute z-50">
        <div className=" text-white text-[30px] uppercase  opacity-30 group-hover:opacity-100 transition-opacity duration-300 tracking-[0.3em]">
          <h1 className={kanit.className}>{title}</h1>
        </div>
        <div className=" text-white text-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-[300ms] group-hover:duration-[1000ms]">
          <text className={kanitsmall.className}>Arabie saoudite</text>
        </div>
        <div
          onClick={() => {
            onOpen();
          }}
          className={`w-14 p-5 ml-[2px] bg-slate-700 rounded-full cursor-pointer opacity-0 group-hover:opacity-30 hover:bg-opacity-75 transition-opacity duration-[300ms] group-hover:duration-[1000ms] mt-8  ${isActive ? "rotate-180 transition-transform duration-500":"transition-transform duration-500"}`}
        >
          <img src={Down.src} className="filter brightness-0 invert"></img>
        </div>
      </div>
      <RacesInfo isActive={isActive}></RacesInfo>
      {order == 1 && <img className="w-full" src={BackGround.src}></img>}
      {order == 2 && <img className="w-full" src={BackGround2.src}></img>}
      {order == 3 && <img className="w-full" src={BackGround4.src}></img>}
      {order == 4 && <img className="w-full" src={BackGround3.src}></img>}
    </div>
  );
};

export default Index;
