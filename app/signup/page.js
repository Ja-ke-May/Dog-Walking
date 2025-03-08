"use client";

import Paws from "../components/paws";
import SignUpForm from "./components/singupform";


export default function Home() {
  

  return (
    <>
     

      <Paws />

      <div className="w-full h-screen flex flex-col items-center">
        <img
          src="../BIG_WALKS_green_brown_bg-removebg.png"
          alt="Paw Print"
          className="fixed top-2 min-h-[5%] max-h-[10%] mmd:min-h-[15%] md:max-h-[20%]"
        />

        <h1 className="hidden absolute top-0 left-1/2 -translate-x-1/2 text-[#B5A888] brightness-125 font-black text-3xl flex flex-col text-center">
          BIG
          <span>WALKS</span>
        </h1>

<SignUpForm />
        
      </div>
    </>
  );
}
