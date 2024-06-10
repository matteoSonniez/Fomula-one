"use client";
import { useState, useEffect } from "react";
import { Anek_Devanagari } from "next/font/google";
import { Syne } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "./font.css";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import Close from "@/img/retirer.png";
import OnLoad2 from "@/components/OnLoadTest";
import SideBar from '@/components/SideBar';

const noto = Anek_Devanagari({ subsets: ["latin"], weight: "500" });
const syne2 = Syne({ subsets: ["latin"], weight: "600" });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [isLoadingComplete2, setIsLoadingComplete2] = useState(false);
  const [opacityClass, setOpacityClass] = useState("opacity-0");
  const [showOverlay, setShowOverlay] = useState(false);

  const loadIt = () => {
    setIsLoadingComplete(false);
    setTimeout(() => {
      setIsLoadingComplete(true);
    }, 4000);
  };

  const loadIt2 = () => {
    setIsLoadingComplete2(false);
    setTimeout(() => {
      setIsLoadingComplete2(true);
    }, 1700);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingComplete2(true);
    }, 100);
    //return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isSideBarOpen) {
      setShowOverlay(true);
      setTimeout(() => {
        setOpacityClass("opacity-40");
      }, 10); // Small delay to ensure the element is in the DOM before starting the transition
    } else {
      setOpacityClass("opacity-0");
      setTimeout(() => {
        setShowOverlay(false);
      }, 500); // Delay should match the duration of the opacity transition
    }
  }, [isSideBarOpen]);

  useEffect(() => {
    if (isSideBarOpen == true) {
      const timer = setTimeout(() => {
        setIsLoadingComplete2(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isSideBarOpen]);

  return (
    <html lang="en">
      <body className="overflow-y-hidden">
        {isLoadingComplete2 == false ? (
          <OnLoad2></OnLoad2>
        ) : (
          <>
            {!pathname.startsWith("/races") ? 
              <SideBar setSideOpen={setIsSideBarOpen} sideOpen={isSideBarOpen} isRace={true}></SideBar>
              :
              <SideBar setSideOpen={setIsSideBarOpen} sideOpen={isSideBarOpen} isRace={false}></SideBar>
            }
            {!pathname.startsWith("/races") ? 
              <Header loadIt={loadIt} loadIt2={loadIt2} closeSide={setIsSideBarOpen} isRace={false}></Header>
              :
              <Header loadIt={loadIt} loadIt2={loadIt2} closeSide={setIsSideBarOpen} isRace={true}></Header>
            }
            {showOverlay && 
            <div className={`h-screen w-screen bg-black absolute top-0 z-40 transition-opacity duration-500 ${opacityClass}`}>
            </div>
            }
            {children}
          </>
        )}
      </body>
    </html>
  );
}
