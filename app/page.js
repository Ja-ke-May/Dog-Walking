"use client";

import Paws from "./components/paws";

export default function Home() {
  return (
    <div className="w-screen min-h-screen relative flex flex-col items-center bg-gradient-to-br from-[#A1B28D] via-[#B5A888] to-[#9A9A7B]">
      <img src="../paw-space-nb.png" alt="Paw Print" className=" top-20 h-50 w-50 md:h-100 md:w-100" />

      {/* BIG WALKS positioned bottom center */}
      <h1 className="absolute top-28 md:top-60 left-1/2 -translate-x-1/2 text-[#B5A888] font-black text-3xl md:text-6xl tracking-wide flex flex-col text-center drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
        BIG 
        <span>WALKS</span>
      </h1>

      <Paws />
    </div>
  );
}
