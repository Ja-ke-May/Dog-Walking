"use client";

import Paws from "./components/paws";
import Content from "./components/content";

export default function Home() {
  return (
    <>
    <Paws />
    
    <div className="w-full h-screen flex flex-col items-center bg-gradient-to-br from-[#A1B28D] via-[#B5A888] to-[#9A9A7B]">
      
      <img src="../Logo-no-bg.png" alt="Paw Print" className="top-20 min-h-[20%] max-h-[30%] " />

      
      <h1 className="hidden absolute top-28 left-1/2 -translate-x-1/2 text-[#B5A888] brightness-125 font-black text-3xl flex flex-col text-center">
        BIG 
        <span>WALKS</span>
      </h1>

      
      
      <Content />
      


      

    </div>

    </>
  );
}
