import React from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import name from "./style.scss";

const syne = Syne({ subsets: ["latin"], weight: "800" });
const syne2 = Syne({ subsets: ["latin"], weight: "500" });

const Index = () => {
  return (
    <div className={`${syne2.className} container`}>
      <div className="overflow-hidden text-[22px]">
        <h1 className="header drop-in">Formula one</h1>
      </div>
      <div className="overflow-hidden">
        <p className="drop-in-2 text-gray-500 text-[18px]">
          J'ai toujours fait une différence entre l'homme et le pilote.
        </p>
      </div>
    </div>
  );
};

export default Index;
