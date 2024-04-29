import React from "react";
import Versta from "@/img/versta.png";
import Leclerc from "@/img/leclerc.png";
import Carlos from "@/img/carlos.png";
import Hami from "@/img/hami.png";
import Alonzo from "@/img/alonzo.png";
import Norris from "@/img/norris.png";

const Pages = () => {
  return (
    <div className="flex justify-center bg-[url('/img/versta.png')] bg-no-repeat bg-left-bottom bg-[900px_auto] h-screen">
      {" "}
      <div className="flex flex-wrap pt-20 bg-black bg-opacity-80 px-40">
        <div className="w-1/5 p-2">
          <img src={Versta.src} alt="Description de l'image"></img>
          <text className="text-white">Max Verstappen</text>
        </div>
        <div className="w-1/5 p-2">
          <img src={Versta.src} alt="Description de l'image"></img>
        </div>
        <div className="w-1/5 p-2">
          <img src={Norris.src} alt="Description de l'image"></img>
        </div>
        <div className="w-1/5 p-2">
          <img src={Leclerc.src} alt="Description de l'image"></img>
        </div>
        <div className="w-1/5 p-2">
          <img src={Alonzo.src} alt="Description de l'image"></img>
        </div>
        <div className="w-1/5 p-2">
          <img src={Carlos.src} alt="Description de l'image"></img>
        </div>
        <div className="w-1/5 p-2">
          <img src={Hami.src} alt="Description de l'image"></img>
        </div>
        <div className="w-1/5 p-2">
          <img src={Versta.src} alt="Description de l'image"></img>
        </div>
      </div>
    </div>
  );
};

export default Pages;
