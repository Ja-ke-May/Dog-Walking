import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "./intro";
import Intro2 from "./intro2";
import Contact from "./contact";
import PriceList from "./priceList";
import WhatYouGet from "./whatYouGet";
import WhatYouGetTwo from "./youGet2";
import Safety from "./safety";

const Content = ({ images }) => {
  const sections = [
    <Intro images={images.intro} />,
    <Intro2 images={images.intro2} />,
    <WhatYouGet images={images.whatYouGet}/>, 
    <WhatYouGetTwo images={images.whatYouGetTwo}/>, 
    <Safety images={images.safety}/>, 
    <PriceList images={images.priceList} />,
    <Contact images={images.contact} />,  
    
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(1); // Track swipe direction
  const [isSwiping, setIsSwiping] = useState(false); // Track if a swipe is in progress

  const handleNext = () => {
    setDirection(1);
    setCurrentSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const handleBook = () => {
    setDirection(1);
    setCurrentSection(6);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (!isSwiping) {
        setIsSwiping(true);
        setDirection(1); // Set direction for left swipe (moving to the next section)
        setCurrentSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
      }
    },
    onSwipedRight: () => {
      if (!isSwiping) {
        setIsSwiping(true);
        setDirection(-1); // Set direction for right swipe (moving to the previous section)
        setCurrentSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Add delay to reset the swiping state after the animation ends
  useEffect(() => {
    if (isSwiping) {
      const timeout = setTimeout(() => {
        setIsSwiping(false);
      }, 500); // Match the transition duration
      return () => clearTimeout(timeout);
    }
  }, [isSwiping]);

  return (
    <div {...handlers} className="fixed top-0 left-0 w-full h-full mt-4">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSection}
          custom={direction} 
          initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }} 
          transition={{ type: "tween", duration: 0.2 }} // Increased duration for smoother transition
          className="absolute w-full h-full flex items-center justify-center"
        >
          {sections[currentSection]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="w-full fixed bottom-0 left-0 mb-2 flex justify-between items-center md:pr-20 lg:pr-40 xl:pr-80 md:pl-20 lg:pl-40 xl:pl-80">
        {/* Previous Button */}
        <div className="cursor-pointer relative flex flex-col items-center" onClick={handlePrevious}>
          <p className="text-[#EAD7A3] brightness-125 ml-2 z-10 mb-1">Previous</p>
          <img
            src="../paw-space-nb.png"
            alt="Previous"
            className="h-16 w-16 rotate-270 brightness-125"
          />
        </div>

        {/* Booking Button */}
        <p
          className="text-center mb-1 max-w-18 font-bold text-[#B5A888] bg-black/90 rounded-full p-2 brightness-125 border-2 border-white/20 cursor-pointer"
          onClick={handleBook}
        >
          BOOK A BIG WALK NOW!
        </p>

        {/* Next Button */}
        <div className="cursor-pointer relative flex flex-col items-center" onClick={handleNext}>
          <p className="text-[#EAD7A3] brightness-125 z-10 mb-1">Next</p>
          <img
            src="../paw-space-nb.png"
            alt="Next"
            className="h-16 w-16 rotate-90 brightness-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
