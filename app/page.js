"use client";

import Paws from "./components/paws";
import Content from "./components/content";
import { useEffect } from 'react';

export default function Home() {
  const images = {
    intro: [
      {
        src: "on-log.jpeg",
        alt: "Jake and Jack man and mini labradoodle balancing on a log",
        className: "rounded object-cover"
      },
      {
        src: "on-log-2.jpeg",
        alt: "Jake and Jack man and mini labradoodle balancing on a log",
        className: "rounded object-cover mt-2"
      }
    ],
    intro2: [
      {
        src: "pup-patch.png",
        alt: "staffordshire bull terrier puppy",
        className: "rounded w-14 mt-1 mb-1"
      }
    ],
    priceList: [
      {
        src: "Butch.jpg",
        alt: "Butch",
        className: "max-w-full md:min-w-20 lg:min-w-30 rounded-full"
      },
      {
        src: "Candy.jpg",
        alt: "Candy",
        className: "max-w-full md:min-w-20 lg:min-w-30 rounded-full"
      }
    ],
    contact: [
      {
        src: "Jacob May.jpg",
        alt: "Jacob May",
        className: "rounded max-w-16 md:max-w-20"
      }
    ], 
    whatYouGet: [
      {
        src: "fred.jpeg",
        alt: "man on coach with yellow lab labrador dog",
        className: "rounded object-cover"
      }
    ],
    whatYouGetTwo: [
      {
        src: "tilly.jpeg",
        alt: "Cockapoo puppy",
        className: "rounded object-cover"
      }
    ],
    safety: [
      {
        src: "jack-flying.jpg",
        alt: "mini labradoodle flying above sea water",
        className: "rounded object-cover max-w-50 mt-2"
      }
    ],
  };

  useEffect(() => {
    const imagesToPreload = [
      "on-log.jpeg",
      "on-log-2.jpeg",
      "pup-patch.png",
      "Butch.jpg",
      "Candy.jpg",
      "Jacob May.jpg", 
      "fred.jpeg", 
      "tilly.jpeg",
      "jack-flying.jpg",
    ];
  
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = `/${src}`;  
    });
  }, []);

  return (
    <div className="">
     

      <Paws />

      <div className="w-full h-screen flex flex-col items-center">
        <img
          src="../BIG_WALKS_green_brown_bg-removebg.png"
          alt="Paw Print"
          className="fixed top-0 min-h-[15%] max-h-[25%]"
        />

        <h1 className="hidden absolute top-20 left-1/2 -translate-x-1/2 text-[#B5A888] brightness-125 font-black text-3xl flex flex-col text-center">
          BIG
          <span>WALKS</span>
        </h1>

        <Content images={images} />
      </div>
    </div>
  );
}
