"use client";
 

import Paws from "./components/paws";

export default function Home() {
  return (
    <div  
    className="w-screen min-h-screen"
    style={{
      background: "linear-gradient(135deg, #A1B28D 25%, #B5A888 25%, #B5A888 50%, #A1B28D 50%, #9A9A7B 75%, #B5A888 75%)",
      backgroundSize: "100% 100%",
      color: '#333', // Keep text color professional
    }}
    >
      <img src="../paw-space-nb.png" alt="Paw Print" className="left-0 h-32 w-32" />
      <Paws />
    </div>
  );
}
