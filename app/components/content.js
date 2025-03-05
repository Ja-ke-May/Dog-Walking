import { useState } from "react";
import Intro from "./intro";
import Intro2 from "./intro2";
import Contact from "./contact";
import PriceList from "./priceList";

const Content = ({ images }) => {

  

  const sections = [
    <Intro images={images.intro} />,
    <Intro2 images={images.intro2} />,
    <PriceList images={images.priceList} />,
    <Contact images={images.contact} />
  ];
  
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
    setCurrentSection(3); 
  };

  return (
    <div className="mt-4">
      {sections[currentSection]} {/* Render the current section */}

      <div className="w-full fixed bottom-0 left-0 mb-2 flex justify-between items-center mt-4 md:pr-20 lg:pr-40 xl:pr-80 md:pl-20 lg:pl-40 xl:pl-80">
        

       

        <div className="cursor-pointer relative flex flex-col items-center" onClick={handlePrevious}>
  <p className="text-[#EAD7A3] brightness-125 ml-2 z-10 mb-1">Previous</p>
  <img
    src="../paw-space-nb.png"
    alt="Previous"
    className="h-16 w-16 rotate-270 brightness-125"
  />
</div>

<p className="text-center max-w-20 font-bold text-[#B5A888] bg-black/90 rounded-full p-4 brightness-125 border-2 border-white/20 cursor-pointer"
        onClick={handleBook}>
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
