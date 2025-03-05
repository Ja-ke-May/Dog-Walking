const WhatYouGet = ({ images }) => {
    return (
        <div className="flex flex-col">
        <h3 className="text-center font-bold text-lg md:text-xl">What You Get</h3>
      <div className="relative flex max-w-lg bg-white/0 rounded p-2  items-center">
         
     
    
          
        <div className="mr-2 p-2 bg-black/80 text-[#B5A888] md:text-lg lg:text-xl brightness-125 rounded">
          
            
            <p className="">
            <b>One-on-one care</b> – It will only ever be me and Jack with your dog to ensure they have the best experience.<br />
            <b>Intro visit</b> – A short 10 minute pop in to make sure we’re good to go.<br />
            <b>Focused, local walks</b> – I’ll choose the best route near your home.<br />
          </p>
          
          
        
        </div>
        <div className="flex flex-col max-w-[30%]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
            priority="true"
          />
        ))}
      </div>
      </div>
      </div>
    );
  };
  
  export default WhatYouGet;
  