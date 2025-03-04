import { useState } from "react";
import Intro from "./intro";
import Intro2 from "./intro2";
import Contact from "./contact";
// Add any other sections here...

const Content = () => {
  const sections = [<Intro />, <Intro2 />, <Contact />]; // Add more components here as needed
  const [currentSection, setCurrentSection] = useState(0); // Track current section index

  const handleNext = () => {
    setCurrentSection((prevSection) =>
      prevSection === sections.length - 1 ? 0 : prevSection + 1 // Loop back to the first section
    );
  };

  const handlePrevious = () => {
    setCurrentSection((prevSection) =>
      prevSection === 0 ? sections.length - 1 : prevSection - 1 // Loop back to the last section
    );
  };

  const handleBook = () => {
    setCurrentSection(2); 
  };

  return (
    <div className="content-container relative">
      {sections[currentSection]} {/* Render the current section */}

      <div className="w-full flex justify-between items-center mt-4 relative">
        {/* Previous Button */}
        <div
          className="relative cursor-pointer"
          onClick={handlePrevious} // Navigate to the previous section
        >
          <img
            src="../paw-space-nb.png"
            alt="Previous"
            className="h-32 w-32 rotate-270 opacity-80 brightness-125"
          />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-[-12px] -translate-y-1/2 rotate-270 text-[#9A9A7B] brightness-125 font-bold z-10">
            Previous
          </p>
        </div>

        <p className="text-center max-w-20 font-bold text-[#B5A888] bg-black/90 rounded-full p-4 brightness-125 border-2 border-white/20 cursor-pointer"
        onClick={handleBook}>
          BOOK A BIG WALK NOW!
        </p>

        {/* Next Button */}
        <div
          className="relative cursor-pointer"
          onClick={handleNext} // Navigate to the next section
        >
          <p className="absolute top-1/2 left-1/2 transform -translate-x-15 -translate-y-1/2 rotate-90 text-[#9A9A7B] brightness-125 font-bold z-10">
            Next
          </p>
          <img
            src="../paw-space-nb.png"
            alt="Next"
            className="h-32 w-32 rotate-90 opacity-80 brightness-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
