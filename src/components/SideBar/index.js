import React from "react";
import Close from "@/img/retirer.png";
import { Syne } from "next/font/google";
import Link from "next/link";

const syne2 = Syne({ subsets: ["latin"], weight: "600" });
const syne = Syne({ subsets: ["latin"], weight: "400" });

const Index = ({ setSideOpen, sideOpen, isRace }) => {
  return (
    <div
      style={{
        // fontFamily: "formule1, sans-serif",
        position: "absolute",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(10px)",
        zIndex: 50,
      }}
      className={`text-white top-0 flex items-center overflow-hidden ${
        sideOpen ? "w-[700px]" : "w-[0px]"
      } transition-all duration-700`}
    >
      <img
        onClick={() => setSideOpen(false)}
        className="w-5 top-4 cursor-pointer ml-14 mt-8 absolute"
        src={Close.src}
      ></img>
      <div className="px-14 min-w-[700px]">
        <div
          className={`${syne2.className} text-gray-200 flex flex-col space-y-2 uppercase font-semibold text-[36px] min-w-[400px] overflow-hidden`}
        >
          <Link
            href={"/"}
            onClick={() => setSideOpen(false)}
            className="cursor-pointer hover:text-slate-500 transition-colors duration-500"
          >
            home page
          </Link>
          <Link
            href={"/drivers"}
            onClick={() => setSideOpen(false)}
            className="cursor-pointer hover:text-slate-500 transition-colors duration-500"
          >
            drivers standing{" "}
          </Link>
          <Link
            href={"/track"}
            onClick={() => setSideOpen(false)}
            className="cursor-pointer hover:text-slate-500 transition-colors duration-500"
          >
            tracks{" "}
          </Link>
          <Link
            href={"/results"}
            onClick={() => setSideOpen(false)}
            className="cursor-pointer hover:text-slate-500 transition-colors duration-500"
          >
            live results
          </Link>
          <Link
            href={"/races"}
            onClick={() => setSideOpen(false)}
            className="cursor-pointer hover:text-slate-500 transition-colors duration-500"
          >
            races calendar
          </Link>
        </div>
        <div className="my-10">
          <div className="h-[0.25px] bg-slate-400 opacity-30"></div>
        </div>
        <div className={`${syne.className} text-[20px] flex space-x-20 text-gray-200`}>
          <div className="flex flex-col w-[200px]">
            <text className="cursor-pointer hover:text-slate-400 transition-colors duration-500">
              More informations
            </text>
            <text className="cursor-pointer hover:text-slate-400 transition-colors duration-500">
              Year calendrier
            </text>
          </div>
          <div className="flex flex-col w-[200px]">
            <text className="cursor-pointer hover:text-slate-400 transition-colors duration-500">
              Tickets purchase
            </text>
            <text className="cursor-pointer hover:text-slate-400 transition-colors duration-500">
              information
            </text>
          </div>
        </div>
        <div className="my-10">
          <div className="h-[0.25px] bg-slate-400 opacity-30"></div>
        </div>
        <div className={`${syne.className} text-[18px] flex space-x-20 text-gray-200`}>
          <div className="flex flex-col w-[200px] space-y-2">
            <text className="cursor-pointer hover:text-slate-400 transition-colors duration-500">
              Contact
            </text>
            <text className="cursor-pointer hover:text-slate-400 transition-colors duration-500">
              Accessibilité
            </text>
            <text className="cursor-pointer hover:text-slate-400 transition-colors duration-500">
              Mentions légales
            </text>
          </div>
          <div className="flex flex-col w-[200px] space-y-2">
            <text className="cursor-pointer hover:text-slate-400 transition-colors duration-500">
              Mentions légales
            </text>
            <text className="cursor-pointer hover:text-slate-400 transition-colors duration-500">
              Plan du site
            </text>
            <text className="cursor-pointer hover:text-slate-400 transition-colors duration-500">
              Crédits
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
