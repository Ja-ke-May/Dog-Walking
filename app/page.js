"use client";

import Paws from "./components/paws";
import Content from "./components/content";

export default function Home() {
  return (
    <>
    <Paws />
    
    <div className="w-screen min-h-screen flex flex-col items-center bg-gradient-to-br from-[#A1B28D] via-[#B5A888] to-[#9A9A7B]">
      
      <div><img src="../paw-space-nb.png" alt="Paw Print" className="top-20 h-50 w-50" />

      
      <h1 className="absolute top-28 left-1/2 -translate-x-1/2 text-[#B5A888] brightness-125 font-black text-3xl tracking-wide flex flex-col text-center drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
        BIG 
        <span>WALKS</span>
      </h1>

      
      </div>
      <Content />
      


      

    </div>

    </>
  );
}
