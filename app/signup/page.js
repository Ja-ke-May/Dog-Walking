"use client";

import Paws from "../components/paws";
import SignUpForm from "./components/singupform";
import { useEffect } from "react";


export default function Home() {
  
  useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-5D6MRB0W10';
      script.async = true;
      document.body.appendChild(script);
    
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-5D6MRB0W10');
    
      return () => {
        document.body.removeChild(script);
      };
    }, []);

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
