"use client";
import { useState, useEffect, useContext } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import "./font.css";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import OnLoad from "@/components/OnLoad";
import OnLoad2 from "@/components/OnLoadTest";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

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

  // if (process.env.NODE_ENV === "development") {
  //   console.log("ghggggggggggggg");
  //   useEffect(() => {
  //     if (!isLoadingComplete2) {
  //       const timer = setTimeout(() => {
  //         setIsLoadingComplete(true);
  //       }, 1500);

  //       return () => clearTimeout(timer);
  //     }
  //   }, [isLoadingComplete2]);
  // }

  return (
    <html lang="en">
      <body className="overflow-y-hidden">
        {isLoadingComplete2 == false ? (
          <OnLoad2></OnLoad2>
        ) : (
          <>
            {!pathname.startsWith("/races") && (
              <Header loadIt={loadIt} loadIt2={loadIt2}></Header>
            )}
            {children}
          </>
        )}
      </body>
    </html>
  );
}
