import React from 'react';
import Close from "@/img/retirer.png";
import { Syne } from "next/font/google";
import Link from "next/link";

const syne2 = Syne({ subsets: ["latin"], weight: "600" });

const Index = ({setSideOpen,sideOpen}) => {
    return (
        <div
          style={{
            // fontFamily: "formule1, sans-serif",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(10px)",
            zIndex: 50,
          }}
          className={`text-white flex flex-col overflow-hidden ${sideOpen ? "w-[400px]":"w-[0px]"} transition-all duration-700`}
        >
          <img onClick={()=> setSideOpen(false)} className="w-5 cursor-pointer ml-10 mt-8" src={Close.src}></img>
          <div className={`${syne2.className} text-gray-400 flex flex-col uppercase font-semibold text-[40px] mt-16 ml-10`}>
            <Link href={"/"} onClick={() => setSideOpen(false)} className="cursor-pointer hover:text-white transition-colors duration-500">home</Link>
            <Link href={"/drivers"} onClick={() => setSideOpen(false)} className="cursor-pointer hover:text-white transition-colors duration-500">drivers</Link>
            <Link href={"/races"} onClick={() => setSideOpen(false)} className="cursor-pointer hover:text-white transition-colors duration-500">races</Link>
            <Link href={"/track"} onClick={() => setSideOpen(false)} className="cursor-pointer hover:text-white transition-colors duration-500">tracks</Link>
            <Link href={"/results"} onClick={() => setSideOpen(false)} className="cursor-pointer hover:text-white transition-colors duration-500">results</Link>
          </div>
          <div className="px-10">
            <div className="h-[0.25px] bg-slate-400 my-5 opacity-30"></div>
          </div>
        </div>
    );
}

export default Index;
