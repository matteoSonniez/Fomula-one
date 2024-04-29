"use client";
import React from 'react';
import { useState, useEffect, useContext } from "react";
import { Kanit } from "next/font/google";
import { Syne } from "next/font/google";
import Coupe from '@/img/coupe.png';
import Down from "@/img/down.png";
import Styles from './style.scss';

const syne = Syne({ subsets: ["latin"], weight: "700" });
const kanit = Kanit({ subsets: ["latin"], weight: "600" });
const kanit2 = Kanit({ subsets: ["latin"], weight: "300" });
const kanitsmall = Kanit({ subsets: ["latin"], weight: "400" });


const Index = ({ isActive }) => {
    // Styles avec une grosse ombre
    const [isDown, setIsDown] = useState(false);

    const commonStyle = {
        width: '65%',        // Equivalent à w-1/2
        backgroundColor: 'black',  // bg-black
        height: '100vh',     // h-screen
        position: 'absolute', // Absolute positioning
        zIndex: 50,          // z-50
    };

    const activeStyle = {
        ...commonStyle,
        right: '0',
        transition: 'all 0.8s ease',
        transitionDelay: '0.5s'  // Délai de transition
    };

    const allStyle = {
        // transition: 'all 0.5s ease',
        // transitionDelay: '0.5s',  // Délai de transition
        opacity: 0  
    };

    const allStyleFull = {
        transition: 'all 0.5s ease',
        transitionDelay: '1.2s',  // Délai de transition
        opacity: 1    
    };

    const inactiveStyle = {
        ...commonStyle,
        right: '-65%',  // Assume that -1/2 becomes -50%
        transition: 'all 0.5s ease'
    };
    const items = new Array(15).fill(null);

    // const onOpen = () => {
        
    //   };

    return (
        <div style={isActive ? activeStyle : inactiveStyle} className="p-32 flex flex-col opacity-90">
            <div className="flex flex-col" style={isActive ? allStyleFull : allStyle}>
                <text className={`${kanit.className} text-white text-[45px] tracking-[0.3em] uppercase`}>22 septembre 2024</text>
                <text className={`${kanit.className} text-gray-400 text-[25px] tracking-[0.1em] `}>Chine, circuit international de Shanghai</text>
                <div className='w-[580px] flex flex-col'>
                    <div className="flex  mt-10 items-center text-white text-[20px]">
                        <div className="w-12">
                            <img src={Coupe.src} className="w-6 h-6 filter brightness-1 invert"></img>
                        </div>
                        <div className="w-[240px]">
                            <text className={`${kanit2.className}   tracking-[0.1em] `}>Max Verstappen</text>
                        </div>
                        <text className={`${kanit2.className}   tracking-[0.1em]`}>Meilleur tour:</text>  
                        <text className={`${kanit2.className}   tracking-[0.1em] ml-[20px]`}>1'47.305</text>             
                    </div>
                    <div className="flex  mt-5 items-center text-white text-[20px]">
                                <div className="w-12">
                                    <text className={`${kanit.className}   tracking-[0.1em] ml-2`}>2 .</text>
                                </div>
                                <div className="w-[240px]">
                                    <text className={`${kanit2.className}  tracking-[0.1em]`}>Charles Leclerc</text>                
                                </div>
                                <text className={`${kanit2.className}  tracking-[0.1em]`}>Meilleur tour:</text>  
                                <text className={`${kanit2.className}  tracking-[0.1em] ml-[20px]`}>1'46.305</text>             
                    </div>
                    <div className="flex  mt-5 items-center text-white text-[20px] ">
                                <div className="w-12">
                                    <text className={`${kanit.className}   tracking-[0.1em] ml-2`}>3 .</text>
                                </div>
                                <div className="w-[240px]">
                                    <text className={`${kanit2.className}  tracking-[0.1em]`}>Charles Leclerc</text>                
                                </div>
                                <text className={`${kanit2.className}  tracking-[0.1em]`}>Meilleur tour:</text>  
                                <text className={`${kanit2.className}  tracking-[0.1em] ml-[20px]`}>1'46.305</text>             
                    </div>
                </div>
                <div className="relative mt-5 w-[580px]">  {/* Conteneur parent avec position relative */}
                    <div className="flex flex-col overflow-x-hidden overflow-y-auto custom-scrollbar" style={{height: '400px'}}>  {/* Div défilante */}
                        {items.map((_, index) => (
                            <div key={index} className="flex mb-5 items-center text-white text-[20px]">
                                <div className="w-12">
                                    <text className={`${kanit.className} tracking-[0.1em] ml-2`}>{index + 4} .</text>
                                </div>
                                <div className="w-[240px]">
                                    <text className={`${kanit2.className} tracking-[0.1em]`}>Charles Leclerc</text>                
                                </div>
                                <text className={`${kanit2.className} tracking-[0.1em]`}>Meilleur tour:</text>  
                                <text className={`${kanit2.className} tracking-[0.1em] ml-[20px]`}>1'46.305</text>             
                            </div>
                        ))}
                    </div>
                    <div className={`absolute z-50 w-full  bottom-0  transition-all duration-500 bg-black ${isDown ?"h-0":"h-full"}`}>
                    <div className={`w-full absolute top-0 z-50 flex justify-center mt-2 `}>
                        <img src={Down.src} onClick={() => setIsDown(!isDown)} className={`filter  brightness-0 invert w-4 ${isDown && "rotate-180"}`} />
                    </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Index;

