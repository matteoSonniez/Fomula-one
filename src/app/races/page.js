"use client";
import { useState, useEffect, useContext } from "react";
import React from "react";
import BackGround from "@/img/driver-bg.jpg";
import styles from "./index.scss";
import { Kanit } from "next/font/google";
import Down from "@/img/down.png";
import RacesGrid from '@/components/Races/RacesGrid';

const kanit = Kanit({ subsets: ["latin"], weight: "600" });
const kanitsmall = Kanit({ subsets: ["latin"], weight: "400" });

const Page = () => {
  const [oneDivHeight, setOneDivHeight] = useState(100);
  useEffect(() => {
    const height = window.innerHeight;
    setOneDivHeight(height / 4);
  }, []);
  return (
    <>
      {oneDivHeight != 0 && (
        <div className="h-screen relative">
          <RacesGrid order={1} title={"Barhein"}></RacesGrid>
          <RacesGrid order={2} title={"Arabie saoudite"}></RacesGrid>
          <RacesGrid order={3} title={"Chine"}></RacesGrid>
          <RacesGrid order={4} title={"Belgique"}></RacesGrid>
        </div>
      )}
    </>
  );
};

export default Page;
