const PriceList = ({ images }) => {
    return (
        <>
        <h3 className="text-center font-bold text-xl">Price List</h3>
      <div className="relative flex max-w-lg bg-white/0 rounded p-2 items-center text-center">
    
         {/* Left Image */}
         <div className="flex-shrink-0 w-1/4 mr-4">
          <img 
            src={images[0].src} 
            alt={images[0].alt} 
            className={images[0].className} 
            priority="true"
          />
        </div>
    
        {/* Pricing */}
        <div className="flex-grow grid grid-cols-2 gap-4">
          {/* 45m standard walk £20 */}
          <div className="flex items-center justify-center p-4 bg-black/80 text-[#B5A888] brightness-125 rounded md:text-lg lg:text-xl">
            <p className="whitespace-normal text-center">
              <span className=""><span className="font-bold">45m </span><br />Big Walk <br /><span className="font-bold">£20</span></span>
            </p>
          </div>
          
          {/* 90m extended walk £30 */}
          <div className="flex items-center justify-center p-4 bg-black/80 text-[#B5A888] brightness-125 rounded md:text-lg lg:text-xl">
            <p className="whitespace-normal text-center">
              <span className=""><span className="font-bold">90m</span> <br /> Huge Walk <br /><span className="font-bold">£30</span></span>
            </p>
          </div>
          
          {/* 3/4h Half Day Adventure £60 */}
          <div className="flex items-center justify-center p-4 bg-black/80 text-[#B5A888] brightness-125 rounded md:text-lg lg:text-xl">
            <p className="whitespace-normal text-center">
              
              <span className=""><span className="font-bold">3/4h</span> Hike <br /><span className="font-bold">£60</span></span>
            </p>
          </div>
          
          {/* 10m House Visits £10 */}
          <div className="flex items-center justify-center p-4 bg-black/80 text-[#B5A888] brightness-125 rounded md:text-lg lg:text-xl">
            <p className="whitespace-normal text-center">
              <span className=""><span className="font-bold">10m</span> Visit <br /><span className="font-bold">£10</span></span>
            </p>
          </div>
        </div>
    
        {/* Right Image */}
        <div className="flex-shrink-0 w-1/4 ml-4">
          <img 
            src={images[1].src} 
            alt={images[1].alt} 
            className={images[1].className} 
            priority="true"
          />
        </div>
        
      </div>
      </>
    );
  };
  
  export default PriceList;
  