"use client";
import { useState, useEffect, useContext } from "react";
import React from "react";
import Logo from "@/img/F1logo2.png";
import DriversCard from '@/components/DriversCard';
import Piastri from "@/img/drivers/piastri.avif";
import Albon from "@/img/drivers/albon.avif";
import Alonso from "@/img/drivers/alonso.avif";
import Bottas from "@/img/drivers/bottas.avif";
import Gasly from "@/img/drivers/gasly.avif";
import Hami from "@/img/drivers/hamilton.avif";
import Hulken from "@/img/drivers/hulkenberg.avif";
import Leclerc from "@/img/drivers/leclerc.avif";
import Magnu from "@/img/drivers/magnussen.avif";
import Norris from "@/img/drivers/norris.avif";
import Ocon from "@/img/drivers/ocon.avif";
import Perez from "@/img/drivers/perez.avif";
import Riccia from "@/img/drivers/ricciardo.avif";
import Russell from "@/img/drivers/russell.avif";
import Sainz from "@/img/drivers/sainz.avif";
import Sargeant from "@/img/drivers/sargeant.avif";
import Stroll from "@/img/drivers/stroll.avif";
import Tsunoda from "@/img/drivers/tsunoda.avif";
import Verstappen from "@/img/drivers/verstappen.avif";
import Zhou from "@/img/drivers/zhou.avif";

const Index = () => {

  const [allClose, setAllClose] = useState(true);


  const setOneOpen = () => {
    setAllClose(false);
  };

  const [drivers, setDrivers] = useState([
    {
      position: 0,
      image: Hami,
      name: "Hamilton",
    },
    {
      position: 80,
      image: Hulken,
      name: "Hulkenberg",
    },
    {
      position: 160,
      image: Albon,
      name: "Albon",
    },
    {
      position: 240,
      image: Verstappen,
      name: "Verstappen",
    },
    {
      position: 320,
      image: Alonso,
      name: "Alonso",
    },
    {
      position: 400,
      image: Ocon,
      name: "Ocon",
    },
    {
      position: 480,
      image: Norris,
      name: "Norris",
    },
    {
      position: 560,
      image: Riccia,
      name: "Ricciardo",
    },
    {
      position: 640,
      image: Zhou,
      name: "Zhou",
    },
    {
      position: 720,
      image: Leclerc,
      name: "Leclerc",
    },
  ]);
  const [drivers2, setDrivers2] = useState([
    {
      position: 0,
      image: Russell,
      name: "Russell",
    },
    {
      position: 80,
      image: Magnu,
      name: "Magnussen",
    },
    {
      position: 160,
      image: Sargeant,
      name: "Alex Albon",
    },
    {
      position: 240,
      image: Perez,
      name: "Perez",
    },
    {
      position: 320,
      image: Stroll,
      name: "Stroll",
    },
    {
      position: 400,
      image: Gasly,
      name: "Gasly",
    },
    {
      position: 480,
      image: Piastri,
      name: "Piastri",
    },
    {
      position: 560,
      image: Tsunoda,
      name: "Tsunoda",
    },
    {
      position: 640,
      image: Bottas,
      name: "Bottas",
    },
    {
      position: 720,
      image: Sainz,
      name: "Sainz",
    },
  ]);

  return (
    <div
      className="flex h-screen justify-center w-screen items-center cursor-pointer"
    >
      <div className="flex flex-col items-center">
        <div className="w-[50px] mr-3 uppercase">
          <div className="text-slate-400 text-[57px] -rotate-90 flex items-center mt-[475px]">
            <text
              className="tracking-[0.1em]"
              style={{ fontFamily: "formule1, sans-serif" }}
            >
              2024&nbsp;drivers
            </text>
          </div>
        </div>
        <img src={Logo.src} className="w-10"></img>
      </div>

      <div className="space-y-6">
        <div className="relative w-[1050px] h-[350px] ">
          {drivers.map((driver, index) => (
            // Rendre un DriversCard pour chaque driver
            // Passer la position comme prop
            <DriversCard
              key={index}
              ordre={1}
              position={driver.position}
              image={driver.image}
              name={driver.name}
              allClose={allClose}
              setOneOpen={setOneOpen}
            />
          ))}
        </div>
        <div className="relative w-[1050px] h-[350px] ">
          {drivers2.map((driver, index) => (
            // Rendre un DriversCard pour chaque driver
            // Passer la position comme prop
            <DriversCard
              key={index}
              ordre={2}
              position={driver.position}
              image={driver.image}
              name={driver.name}
              allClose={allClose}
              setOneOpen={setOneOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
