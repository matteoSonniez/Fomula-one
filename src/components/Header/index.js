import React from "react";
import Link from "next/link";
import { Syne } from "next/font/google";


const syne = Syne({ subsets: ["latin"], weight: "800" });
const syne2 = Syne({ subsets: ["latin"], weight: "500" });


const Index = ({loadIt, loadIt2}) => {
  return (
    <div className="flex justify-between text-white w-full py-6 px-16 fixed z-20">
      <div className="w-[400px] text-[14px]">
        <div className=" w-20 flex items-center space-x-2 group  cursor-pointer">
          <div className="w-6 flex flex-col">
            <div
              className={`bg-white h-[1px] w-full`}
            ></div>
            <div
              className={`bg-white h-[10px] opacity-0 w-full transition-all duration-100 group-hover:h-[16px] `}
            ></div>
            <div
              className={`bg-white h-[1px] w-full`}
            ></div>
          </div>
          <Link href={"/"} onClick={()=>{loadIt2()}} className={syne2.className}>
            MENU
          </Link>
        </div>
      </div>

      <div className="w-[400px] flex justify-center">
        <text className={syne.className}>FORMULA ONE</text>
      </div>
      <li className="space-x-10 w-[400px] flex justify-end text-[14px]">
        <div className=" relative group">
          <Link href={"/drivers"} onClick={()=>{loadIt2()}} className={syne2.className}>
            PILOTES
          </Link>
          <div
            className={`bg-white w-0 h-[1px] group-hover:w-full transition-all duration-300 ease-out`}
          ></div>
        </div>
        <div className=" relative group">
          <Link href={"/races"} onClick={()=>{loadIt2()}} className={syne2.className}>
            RACES
          </Link>
          <div
            className={`bg-white w-0 h-[1px] group-hover:w-full transition-all duration-300 ease-out`}
          ></div>
        </div>
        <div className=" relative group">
          <Link href={"/track"} onClick={()=>{loadIt2()}} className={syne2.className}>
            TRACKS
          </Link>
          <div
            className={`bg-white w-0 h-[1px] group-hover:w-full transition-all duration-300 ease-out`}
          ></div>
        </div>
        <div className=" relative group">
          <Link href={"/results"} onClick={()=>{loadIt2()}} className={syne2.className}>
            RESULTS
          </Link>
          <div
            className={`bg-white w-0 h-[1px] group-hover:w-full transition-all duration-300 ease-out`}
          ></div>
        </div>
      </li>
    </div>
  );
};

export default Index;
