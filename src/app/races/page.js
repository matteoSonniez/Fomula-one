"use client";
import { useState, useEffect, useContext } from "react";
import React from "react";
import BackGround from "@/img/driver-bg.jpg";
import styles from "./index.scss";
import { Kanit } from "next/font/google";
import Down from "@/img/down.png";
import RacesGrid from "@/components/Races/RacesGrid";

const kanit = Kanit({ subsets: ["latin"], weight: "600" });
const kanitsmall = Kanit({ subsets: ["latin"], weight: "400" });

const Page = () => {
  const [loadMore, setLoadMore] = useState(false);
  const [oneDivHeight, setOneDivHeight] = useState(100);
  useEffect(() => {
    const height = window.innerHeight;
    setOneDivHeight(height / 4);
  }, []);
  return (
    <>
      {oneDivHeight != 0 && (
        <div className={`h-screen relative w-full ${loadMore && "-translate-y-full"} transition-all duration-500`}>
          <RacesGrid order={1} title={"Barhein"}></RacesGrid>
          <RacesGrid order={2} title={"Arabie saoudite"}></RacesGrid>
          <RacesGrid order={3} title={"Chine"}></RacesGrid>
          <RacesGrid order={4} title={"Belgique"}></RacesGrid>
          <div onClick={()=>{setLoadMore(true)}} className={`absolute z-50 w-10 cursor-pointer bottom-4 left-1/2 p-2 hover:p-1 transition-all duration-300 ${loadMore && "opacity-0"}`}>
            <img
              src={Down.src}
              className="filter brightness-0 invert"
            ></img>
          </div>
        </div>
      )}
      {oneDivHeight != 0 && (
        <div className={`h-screen relative w-full ${loadMore && "-translate-y-full"} transition-all duration-500`}>
          <RacesGrid order={5} title={"Monaco"}></RacesGrid>
          <RacesGrid order={6} title={"Autriche"}></RacesGrid>
          <RacesGrid order={7} title={"Barcelone"}></RacesGrid>
          <RacesGrid order={8} title={"Hongrie"}></RacesGrid>
          <div onClick={()=>{setLoadMore(false)}} className={`absolute z-50 w-10 cursor-pointer top-4 left-1/2 p-2 hover:p-1 transition-all duration-300 ${!loadMore && "opacity-0"}`}>
            <img
              src={Down.src}
              className="filter brightness-0 invert rotate-180"
            ></img>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
