const PriceList = ({ images }) => {
  return (
      <div className="flex flex-col">
      <div className="">
          <h3 className="text-center font-bold text-lg md:text-xl">Price List</h3>
          </div>
          <div>
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
              <div className="flex-grow grid grid-cols-2 gap-2">
                  {/* 45m standard walk £20 */}
                  <div className="flex items-center justify-center p-4 bg-black/80 text-[#B5A888] brightness-125 rounded md:text-lg">
                      <div className="whitespace-normal text-center">
                          <span className="">
                              <span className="font-bold">45m </span><br />Big Walk
                              <hr className="mt-2 border-t border-[#B5A888] w-2/3 mx-auto" />
                              <span className="font-bold">£20</span>
                          </span>
                      </div>
                  </div>

                  {/* 90m extended walk £30 */}
                  <div className="flex items-center justify-center p-4 bg-black/80 text-[#B5A888] brightness-125 rounded md:text-lg">
                      <div className="whitespace-normal text-center">
                          <span className="">
                              <span className="font-bold">90m</span> <br /> Huge Walk
                              <hr className="mt-2 border-t border-[#B5A888] w-2/3 mx-auto" />
                              <span className="font-bold">£40</span>
                          </span>
                      </div>
                  </div>

                  {/* 3/4h Half Day Adventure £60 */}
                  <div className="flex items-center justify-center p-4 bg-black/80 text-[#B5A888] brightness-125 rounded md:text-lg">
                      <div className="whitespace-normal text-center">
                          <span className="">
                              <span className="font-bold">3/4h</span> Hike
                              <hr className="mt-2 border-t border-[#B5A888] w-2/3 mx-auto" />
                              <span className="font-bold">£80</span>
                          </span>
                      </div>
                  </div>

                  {/* 10m House Visits £10 */}
                  <div className="flex items-center justify-center p-4 bg-black/80 text-[#B5A888] brightness-125 rounded md:text-lg">
                      <div className="whitespace-normal text-center">
                          <span className="">
                              <span className="font-bold">10m</span> Visit
                              <hr className="mt-2 border-t border-[#B5A888] w-2/3 mx-auto" />
                              <span className="font-bold">£10</span>
                          </span>
                      </div>
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
          </div>
      </div>
  );
};

export default PriceList;

