"use client";
import { useState, useEffect, useContext } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import OnLoad from "@/components/OnLoad";
import OnLoad2 from "@/components/OnLoadTest";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [isLoadingComplete2, setIsLoadingComplete2] = useState(false);
  //const [isVisible, setIsVisible] = useState(true);

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
    // Définir un timer pour supprimer le composant OnLoad après 4 secondes
    const timer = setTimeout(() => {
      setIsLoadingComplete2(true);
    }, 100);

    // Nettoyer le timer au démontage
    return () => clearTimeout(timer);
  }, []);

  // Ceci garantit que le timer s'exécute correctement même après un rechargement du module lors du développement
  if (process.env.NODE_ENV === "development") {
    console.log("ghggggggggggggg");
    useEffect(() => {
      if (!isLoadingComplete2) {
        const timer = setTimeout(() => {
          setIsLoadingComplete(true);
        }, 1500);

        return () => clearTimeout(timer);
      }
    }, [isLoadingComplete2]);
  }

  return (
    <html lang="en">
      <body className={inter.className}>
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
