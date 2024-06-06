"use client";
import { useState, useEffect, useContext } from "react";
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

  return (
    <html lang="en">
      <body className="overflow-y-hidden">
        <SideBar setSideOpen={setIsSideBarOpen} sideOpen={isSideBarOpen}></SideBar>
        {isLoadingComplete2 == false ? (
          <OnLoad2></OnLoad2>
        ) : (
          <>
            {!pathname.startsWith("/races") ? 
              <Header loadIt={loadIt} loadIt2={loadIt2} closeSide={setIsSideBarOpen} isRace={false}></Header>
              :
              <Header loadIt={loadIt} loadIt2={loadIt2} closeSide={setIsSideBarOpen} isRace={true}></Header>
            }
            {children}
          </>
        )}
      </body>
    </html>
  );
}
