"use client";

import Head from 'next/head';
import Paws from "./components/paws";
import Content from "./components/content";

export default function Home() {
  const images = {
    intro: [
      {
        src: "on-log.jpeg",
        alt: "Jake and Jack man and mini labradoodle balancing on a log",
        className: "rounded object-cover border-2 border-black/90"
      },
      {
        src: "on-log-2.jpeg",
        alt: "Jake and Jack man and mini labradoodle balancing on a log",
        className: "rounded object-cover border-2 border-black/90 mt-2"
      }
    ],
    intro2: [
      {
        src: "pup-patch.png",
        alt: "staffordshire bull terrier puppy",
        className: "rounded w-10"
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
    ]
  };

  return (
    <>
      <Head>
        {/* Preload images */}
        <link rel="preload" href="on-log.jpeg" as="image" />
        <link rel="preload" href="on-log-2.jpeg" as="image" />
        <link rel="preload" href="pup-patch.png" as="image" />
        <link rel="preload" href="Butch.jpg" as="image" />
        <link rel="preload" href="Candy.jpg" as="image" />
        <link rel="preload" href="Jacob May.jpg" as="image" />
      </Head>

      <Paws />

      <div className="w-full h-screen flex flex-col items-center bg-gradient-to-br from-[#A1B28D] via-[#B5A888] to-[#9A9A7B]">
        <img
          src="../Logo-no-bg.png"
          alt="Paw Print"
          className="top-20 min-h-[20%] max-h-[30%]"
        />

        <h1 className="hidden absolute top-28 left-1/2 -translate-x-1/2 text-[#B5A888] brightness-125 font-black text-3xl flex flex-col text-center">
          BIG
          <span>WALKS</span>
        </h1>

        <Content images={images} />
      </div>
    </>
  );
}
